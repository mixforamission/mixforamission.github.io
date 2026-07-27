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

  /* ========================================================
     SEASONAL ANNOUNCEMENT BANNER
     --------------------------------------------------------
     👉 NON-TECHNICAL EDIT INSTRUCTIONS:
     To change the seasonal message shown in the slim banner at
     the top of the home page, edit ONLY the text inside the
     quotes on the SEASONAL_MESSAGE line below. You can include a
     link by editing SEASONAL_MESSAGE_LINK_LABEL and
     SEASONAL_MESSAGE_LINK_HREF. To hide the banner entirely,
     set SEASONAL_MESSAGE to "" (empty quotes).
     ======================================================== */
  var SEASONAL_MESSAGE = "Accepting orders for the holiday season!";
  var SEASONAL_MESSAGE_LINK_LABEL = "Order now";   // set to "" for no link
  var SEASONAL_MESSAGE_LINK_HREF = "contact/#order-form"; // where the link goes

  var banner = document.querySelector("[data-announce]");
  if (banner && SEASONAL_MESSAGE) {
    var html = SEASONAL_MESSAGE;
    if (SEASONAL_MESSAGE_LINK_LABEL && SEASONAL_MESSAGE_LINK_HREF) {
      // The link href is written relative to the site root (e.g.
      // "contact/#order-form") so it works from the home page. If we're
      // ALREADY on the target page, strip the path prefix so the link
      // stays a same-page anchor instead of resolving to a 404.
      var linkHref = SEASONAL_MESSAGE_LINK_HREF;
      var hashIdx = linkHref.indexOf("#");
      if (hashIdx !== -1 && /\/contact\//.test(window.location.pathname) &&
          linkHref.indexOf("contact/") === 0) {
        linkHref = linkHref.slice(hashIdx); // → "#order-form"
      }
      html += ' <a href="' + linkHref + '">' +
              SEASONAL_MESSAGE_LINK_LABEL + '</a>';
    }
    banner.innerHTML = html;
  } else if (banner) {
    // No message set — hide the banner cleanly
    banner.classList.add("is-hidden");
  }

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
})();
