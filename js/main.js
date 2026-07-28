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
     MENU PAGE — flavor-card → product page links
     --------------------------------------------------------
     Every flavor card across all five sections links to its
     product detail page (product.html?item=<key>). A section-
     scoped name→key map resolves each card's key at runtime —
     the same flavor name in different sections maps to the
     correct category-scoped key (e.g. cake-black-forest vs
     cupcake-black-forest vs cakejar-black-forest).

     Cards get tabindex="0" + role="link" so the whole card
     area is a keyboard-accessible click target (Enter/Space).
     No HTML changes needed — this runs on menu page load only.
     ======================================================== */
  if (menuSubnav) {
    var cardLinkMap = {
      "cakes": {
        "Almond Crunch Bar Cake": "cake-almond-crunch-bar",
        "Chocolate Cake w/Vanilla Buttercream": "cake-chocolate-vanilla-buttercream",
        "Chocolate Mint Cake": "cake-chocolate-mint",
        "Enchanted Tree Stump Cake (+$5)": "cake-enchanted-tree-stump",
        "Chocolate Oreo Crunch Cake": "cake-chocolate-oreo-crunch",
        "Chocolate Strawberry Crunch Cake": "cake-chocolate-strawberry-crunch",
        "Chocolate Caramel Peanut Butter Cake": "cake-chocolate-caramel-peanut-butter",
        "Black Forest Cake": "cake-black-forest",
        "Black Chocolate Cake w/gold highlights": "cake-black-chocolate-gold",
        "Vanilla Sprinkles Cake": "cake-vanilla-sprinkles",
        "Vanilla Coconut Cake": "cake-vanilla-coconut",
        "Cardamom Rose Cake": "cake-cardamom-rose",
        "Mango Vanilla Cake": "cake-mango-vanilla",
        "Vanilla Spice Cake": "cake-vanilla-spice",
        "Vanilla with Lemon Curd Filling": "cake-vanilla-lemon-curd",
        "Strawberry Crunch Cake": "cake-strawberry-crunch",
        "Vanilla Biscoff Cake": "cake-vanilla-biscoff",
        "Pandan Vanilla Cake": "cake-pandan-vanilla",
        "Ube Vanilla Cake": "cake-ube-vanilla",
        "White Forest Cake": "cake-white-forest",
        "Gender Reveal Cake (Pink)": "cake-gender-reveal-pink",
        "Gender Reveal Cake (Blue)": "cake-gender-reveal-blue",
        "Red Velvet Cake": "cake-red-velvet"
      },
      "cupcakes": {
        "Almond Crunch": "cupcake-almond-crunch",
        "Chocolate Vanilla": "cupcake-chocolate-vanilla",
        "Chocolate Candy Cane": "cupcake-chocolate-candy-cane",
        "Chocolate Mint": "cupcake-chocolate-mint",
        "Chocolate Coffee": "cupcake-chocolate-coffee",
        "Chocolate Oreo Crunch": "cupcake-chocolate-oreo-crunch",
        "Chocolate Strawberry Crunch": "cupcake-chocolate-strawberry-crunch",
        "Chocolate Peanut Butter": "cupcake-chocolate-peanut-butter",
        "Black Forest": "cupcake-black-forest",
        "Black Chocolate": "cupcake-black-chocolate",
        "Toasted S'mores Cupcakes": "cupcake-toasted-smores",
        "Vanilla Sprinkle": "cupcake-vanilla-sprinkle",
        "Matcha": "cupcake-matcha",
        "Cardamom Rose": "cupcake-cardamom-rose",
        "Mango Vanilla": "cupcake-mango-vanilla",
        "Lemon Curd Vanilla": "cupcake-lemon-curd-vanilla",
        "Strawberry Crunch": "cupcake-strawberry-crunch",
        "Vanilla Biscoff": "cupcake-vanilla-biscoff",
        "Pandan Vanilla": "cupcake-pandan-vanilla",
        "Ube Vanilla": "cupcake-ube-vanilla",
        "Milk Tea Boba": "cupcake-milk-tea-boba",
        "Red Velvet": "cupcake-red-velvet",
        "Vanilla Chocolate Swirl": "cupcake-vanilla-chocolate-swirl",
        "Pumpkin Cranberry Bliss": "cupcake-pumpkin-cranberry-bliss"
      },
      "cookies": {
        "Biscoff Stuff": "cookie-biscoff-stuff",
        "Blue Cookie Monster": "cookie-blue-monster",
        "Ube": "cookie-ube",
        "Party Sprinkles": "cookie-party-sprinkles",
        "Toasted S'mores": "cookie-toasted-smores",
        "Chocolate Chip": "cookie-chocolate-chip",
        "Pumpkin Spice Latte": "cookie-pumpkin-spice-latte",
        "Strawberry Crunch": "cookie-strawberry-crunch"
      },
      "cake-pops": {
        "Red Velvet (White Chocolate)": "cakepop-red-velvet",
        "Double Dough Biscoff (White Chocolate)": "cakepop-double-dough-biscoff",
        "Chocolate Lovers (White Chocolate)": "cakepop-chocolate-lovers"
      },
      "cake-jars": {
        "Almond Crunch": "cakejar-almond-crunch",
        "Chocolate Vanilla": "cakejar-chocolate-vanilla",
        "Chocolate Candy Cane": "cakejar-chocolate-candy-cane",
        "Chocolate Mint": "cakejar-chocolate-mint",
        "Chocolate Coffee": "cakejar-chocolate-coffee",
        "Chocolate Oreo Crunch": "cakejar-chocolate-oreo-crunch",
        "Chocolate Strawberry Crunch": "cakejar-chocolate-strawberry-crunch",
        "Chocolate Peanut Butter": "cakejar-chocolate-peanut-butter",
        "Black Forest": "cakejar-black-forest",
        "Black Chocolate": "cakejar-black-chocolate",
        "Vanilla Sprinkle": "cakejar-vanilla-sprinkle",
        "Matcha": "cakejar-matcha",
        "Cardamom Rose": "cakejar-cardamom-rose",
        "Mango Vanilla": "cakejar-mango-vanilla",
        "Lemon Curd Vanilla": "cakejar-lemon-curd-vanilla",
        "Strawberry Crunch": "cakejar-strawberry-crunch",
        "Vanilla Biscoff": "cakejar-vanilla-biscoff",
        "Pandan Vanilla": "cakejar-pandan-vanilla",
        "Ube Vanilla": "cakejar-ube-vanilla",
        "Milk Tea Boba": "cakejar-milk-tea-boba",
        "Red Velvet": "cakejar-red-velvet",
        "Vanilla Chocolate Swirl": "cakejar-vanilla-chocolate-swirl",
        "Pumpkin Cranberry Bliss": "cakejar-pumpkin-cranberry-bliss"
      }
    };

    var allFlavorCards = document.querySelectorAll(".flavor-card");
    Array.prototype.forEach.call(allFlavorCards, function (card) {
      var section = card.closest("section");
      var sectionId = section ? section.id : "";
      var sectionMap = cardLinkMap[sectionId];
      if (!sectionMap) return;

      var nameEl = card.querySelector(".flavor-card__name");
      if (!nameEl) return;
      var displayName = nameEl.textContent.replace(/\*/g, "").trim();
      var key = sectionMap[displayName];
      if (!key) return;

      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "link");
      card.setAttribute("aria-label", "View details for " + displayName);

      var navigate = function () {
        window.location.href = "product.html?item=" + key;
      };

      card.addEventListener("click", navigate);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate();
        }
      });
    });
  }
})();
