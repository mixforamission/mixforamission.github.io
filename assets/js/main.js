/* ============================================================
   Mix for a Mission — site behavior
   Vanilla JS, no dependencies. Progressive enhancement only.
   ============================================================ */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#primary-nav");

  /* ---------- Sticky header shadow on scroll ---------- */
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

  /* ---------- Mobile nav toggle ---------- */
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });

    // Close mobile nav when a link is clicked
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        navToggle.focus();
      }
    });

    // Close if viewport grows back to desktop
    var desktopMq = window.matchMedia("(min-width: 821px)");
    desktopMq.addEventListener("change", function (e) {
      if (e.matches && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  /* ---------- Scroll reveal (reduced-motion safe) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    var prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  /* ---------- Menu anchor nav: active-section spy ---------- */
  var anchorNav = document.querySelector(".menu-anchor-nav");
  if (anchorNav && "IntersectionObserver" in window) {
    var links = Array.prototype.slice.call(
      anchorNav.querySelectorAll("a")
    );
    var sections = links
      .map(function (link) {
        var id = link.getAttribute("href");
        if (id && id.charAt(0) === "#") {
          var sec = document.querySelector(id);
          return sec ? { link: link, section: sec } : null;
        }
        return null;
      })
      .filter(Boolean);

    if (sections.length) {
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              links.forEach(function (l) {
                l.classList.remove("is-active");
              });
              var match = sections.filter(function (s) {
                return s.section === entry.target;
              })[0];
              if (match) {
                match.link.classList.add("is-active");
              }
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach(function (s) {
        spy.observe(s.section);
      });
    }
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
