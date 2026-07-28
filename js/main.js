/* ============================================================
   Mix for a Mission — main.js
   Vanilla JS, no dependencies. Progressive enhancement only.

   Header/footer markup is inlined in every HTML file (no fetch
   include) so the nav works without JS. This script enhances:
     1. Sticky header shadow on scroll
     2. Mobile hamburger menu (aria-expanded, escape/outside-click/
        viewport-close, body scroll lock)
     3. Footer current year

   Dropdown sub-menus need NO JavaScript — they reveal via CSS
   :hover / :focus-within on desktop (keyboard-reachable through
   focus-within) and display inline on mobile. Parent links
   navigate normally to their section pages.
   ============================================================ */

(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.querySelector("#primary-nav");

  /* ----------------------------------------------------------
     1. Sticky header shadow on scroll
     ---------------------------------------------------------- */
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     2. Mobile nav toggle
     ---------------------------------------------------------- */
  function closeMobileNav() {
    if (!primaryNav || !navToggle) return;
    primaryNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openMobileNav() {
    if (!primaryNav || !navToggle) return;
    primaryNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      if (primaryNav.classList.contains("is-open")) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close when a nav link is clicked (user is navigating away)
    primaryNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && primaryNav.classList.contains("is-open")) {
        closeMobileNav();
      }
    });

    // Escape closes the mobile nav and returns focus to the toggle
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && primaryNav.classList.contains("is-open")) {
        closeMobileNav();
        navToggle.focus();
      }
    });

    // Outside click closes the mobile nav
    document.addEventListener("click", function (e) {
      if (
        primaryNav.classList.contains("is-open") &&
        !primaryNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMobileNav();
      }
    });

    // Close mobile nav if viewport grows past the breakpoint
    var desktopMq = window.matchMedia("(min-width: 900px)");
    if (desktopMq.addEventListener) {
      desktopMq.addEventListener("change", function (e) {
        if (e.matches) closeMobileNav();
      });
    } else if (desktopMq.addListener) {
      desktopMq.addListener(function (e) {
        if (e.matches) closeMobileNav();
      });
    }
  }

  /* ----------------------------------------------------------
     3. Footer current year
     ---------------------------------------------------------- */
  var yearEls = document.querySelectorAll("[data-year]");
  var year = String(new Date().getFullYear());
  Array.prototype.forEach.call(yearEls, function (el) {
    el.textContent = year;
  });

  /* ========================================================
     MENU PAGE — sticky sub-nav scroll-spy
     --------------------------------------------------------
     Highlights the sub-nav link for whichever menu section is
     currently in view. Pure progressive enhancement: if JS is
     absent, the sub-nav links still work as plain anchors. Uses
     IntersectionObserver (with a fallback scroll listener) and
     respects prefers-reduced-motion (no smooth scroll override).
     ======================================================== */
  var menuSubnav = document.querySelector(".menu-subnav");
  if (menuSubnav) {
    var subnavLinks = Array.prototype.slice.call(
      menuSubnav.querySelectorAll("a[href^='#']")
    );
    var sections = [];
    var linkForId = {};

    subnavLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var sec = document.getElementById(id);
      if (sec) {
        sections.push(sec);
        linkForId[id] = link;
      }
    });

    function setActive(id) {
      subnavLinks.forEach(function (l) { l.classList.remove("is-active"); });
      if (linkForId[id]) {
        linkForId[id].classList.add("is-active");
        // keep the active link in view within the horizontal sub-nav
        var active = linkForId[id];
        var navInner = menuSubnav.querySelector(".menu-subnav__inner");
        if (navInner && active.scrollIntoView) {
          // inline:'nearest' avoids jumping the page; only scrolls the bar
          active.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      }
    }

    if (sections.length && "IntersectionObserver" in window) {
      // rootMargin: trigger when a section's top crosses just below the
      // header + sub-nav; bottom bound keeps the active section pinned
      // while scrolling through it.
      var observer = new IntersectionObserver(
        function (entries) {
          // find the entry closest to the top that is intersecting
          var visible = entries
            .filter(function (e) { return e.isIntersecting; })
            .sort(function (a, b) {
              return a.boundingClientRect.top - b.boundingClientRect.top;
            });
          if (visible.length) {
            setActive(visible[0].target.id);
          }
        },
        {
          rootMargin: "-120px 0px -70% 0px",
          threshold: 0,
        }
      );
      sections.forEach(function (sec) { observer.observe(sec); });
    } else if (sections.length) {
      // Fallback for very old browsers without IntersectionObserver
      var onMenuScroll = function () {
        var scrollY = window.scrollY + 140;
        var current = sections[0];
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].offsetTop <= scrollY) current = sections[i];
        }
        setActive(current.id);
      };
      onMenuScroll();
      window.addEventListener("scroll", onMenuScroll, { passive: true });
    }

    // Add a shadow to the sub-nav once the page is scrolled past the intro
    if (header) {
      var onMenuNavScroll = function () {
        if (window.scrollY > 8) {
          menuSubnav.classList.add("is-scrolled");
        } else {
          menuSubnav.classList.remove("is-scrolled");
        }
      };
      onMenuNavScroll();
      window.addEventListener("scroll", onMenuNavScroll, { passive: true });
    }
  }

  /* ========================================================
     MENU PAGE — Ingredients & Details accordion
     --------------------------------------------------------
     Injects an expandable "Ingredients & Details" section into
     flavor cards that have ingredient data. Data is stored in
     `ingredientData` keyed by `data-flavor` value. Cards without
     matching data get nothing — no empty accordion, no placeholder.
     Toggle uses aria-expanded for accessibility and a smooth
     max-height CSS transition for animation.
     ======================================================== */
  var ingredientData = {
    "black-forest": {
      description: "Indulge in our exquisite Vegan Chocolate Cake, lovingly decorated to resemble a lush and enchanting forest.",
      size: "3 layers, 7-inch diameter, serves 10–15",
      ingredients: "Chocolate cake (enriched wheat flour, niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid, organic sugar, water, organic soymilk, vitamin/mineral blend, sea salt, gellan gum, ascorbic acid, canola oil, alkalized cocoa, instant coffee powder, baking powder, baking soda, vanilla extract); buttercream (vegan butter, shortening, light corn syrup, sugar, water, instant coffee powder, vanilla extract, chocolate shards, meringue mushrooms made from aquafaba/organic sugar/vinegar/cocoa powder/matcha powder)."
    }
  };

  var flavorCards = document.querySelectorAll(".flavor-card[data-flavor]");
  Array.prototype.forEach.call(flavorCards, function (card) {
    var flavorKey = card.getAttribute("data-flavor");
    var data = ingredientData[flavorKey];
    if (!data) return;

    // Build toggle button
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "flavor-card__toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<span class="toggle-icon" aria-hidden="true"></span> Ingredients &amp; Details';

    // Build details panel
    var details = document.createElement("div");
    details.className = "flavor-card__details";
    details.setAttribute("aria-hidden", "true");

    var inner = document.createElement("div");
    inner.className = "flavor-card__details-inner";

    var html = "";
    if (data.description) {
      html += '<p class="details-desc">' + data.description + "</p>";
    }
    if (data.size) {
      html += '<p><span class="details-label">Size</span>' + data.size + "</p>";
    }
    if (data.ingredients) {
      html += '<p><span class="details-label">Ingredients</span>' + data.ingredients + "</p>";
      html += '<p class="details-note">Ingredients may be subject to change. Text us with any questions.</p>';
    }
    inner.innerHTML = html;
    details.appendChild(inner);

    // Append to card
    card.appendChild(toggle);
    card.appendChild(details);

    // Toggle handler
    toggle.addEventListener("click", function () {
      var isExpanded = toggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        toggle.setAttribute("aria-expanded", "false");
        details.setAttribute("aria-hidden", "true");
        details.style.maxHeight = "0";
      } else {
        toggle.setAttribute("aria-expanded", "true");
        details.setAttribute("aria-hidden", "false");
        details.style.maxHeight = details.scrollHeight + "px";
        // Remove the inline max-height after the transition ends so the
        // panel reflows naturally on viewport resize. If the user collapses
        // before transitionend fires, the inline value stays and works fine.
        var onTransitionEnd = function () {
          details.style.maxHeight = "";
          details.removeEventListener("transitionend", onTransitionEnd);
        };
        details.addEventListener("transitionend", onTransitionEnd);
      }
    });
  });
})();
