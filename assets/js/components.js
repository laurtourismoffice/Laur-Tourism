/* assets/js/components.js — Laur Tourism Reusable Components
 *
 * HOW IT WORKS:
 *   This file injects the shared <nav> and <footer> into every page.
 *   It auto-detects whether the current page is at the root (index.html)
 *   or inside /pages/ and adjusts all href/src paths accordingly.
 *
 * HOW TO USE ON EACH PAGE:
 *   1. In your <body>, replace the full <nav>...</nav> block with:
 *        <div id="nav-placeholder"></div>
 *
 *   2. Replace the full <div class="mobile-menu">...</div> block with:
 *        <div id="mobile-menu-placeholder"></div>
 *
 *   3. Replace the full <footer>...</footer> block with:
 *        <div id="footer-placeholder"></div>
 *
 *   4. Load this script BEFORE script.js:
 *        <script src="../assets/js/components.js"></script>   ← for /pages/
 *        <script src="assets/js/components.js"></script>      ← for root index.html
 *
 * ACTIVE LINK:
 *   Add data-page="pagename" on your <body> tag to highlight the correct nav link.
 *   Valid values: "home", "about", "attractions", "gallery", "visit", "contact"
 *   Example:  <body data-page="attractions">
 */

(function () {

  /* ── PATH DETECTION ── */
  // If the URL contains /pages/, we're one level deep → prefix = "../"
  // If we're at root (index.html) → prefix = ""
  const isInPages = window.location.pathname.includes('/pages/');
  const r = isInPages ? '../' : '';   // relative root prefix

  /* ── ACTIVE PAGE DETECTION ── */
  const activePage = document.body.getAttribute('data-page') || '';

  function active(page) {
    return activePage === page ? ' class="active"' : '';
  }

  /* ── NAVBAR HTML ── */
  const navbarHTML = `
<nav class="nav" id="navbar" role="navigation" aria-label="Main navigation">
 
<a href="${r}index.html" class="nav-logo" style="text-decoration:none;color:inherit;">
    <img src="${r}assets/images/tourism-logo.png" alt="Laur Tourism Logo" class="nav-logo-img">
    <div class="nav-brand"><strong>Laur Tourism</strong><span>Nueva Ecija · Philippines</span></div>
</a>
  <div class="nav-links">
    <a href="${r}index.html"${active('home')}>Home</a>
    <a href="${r}pages/about.html"${active('about')}>About</a>
    <div class="dropdown">
      <a href="${r}pages/attractions.html"${active('attractions')}>I-Explore &#9660;</a>
      <div class="dropdown-menu">
        <a href="${r}pages/attractions.html">Attractions</a>
        <a href="${r}pages/gallery.html">Photo Gallery</a>
      </div>
    </div>
    <div class="dropdown">
      <a href="${r}pages/visit.html"${active('visit')}>Visit &#9660;</a>
      <div class="dropdown-menu">
        <a href="${r}pages/visit.html#stay">Where to Stay</a>
        <a href="${r}pages/visit.html#eat">Where to Eat</a>
        <a href="${r}pages/visit.html#shops">Shops &amp; Stores</a>
      </div>
    </div>
    <a href="${r}pages/gallery.html"${active('gallery')}>Gallery</a>
    <a href="${r}pages/contact.html"${active('contact')}>Makipag-ugnayan</a>
  </div>
  <button class="hamburger" onclick="toggleMobile()" aria-label="Open menu" id="ham"><span></span><span></span><span></span></button>
</nav>`;

  /* ── MOBILE MENU HTML ── */
  const mobileMenuHTML = `
<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-head">
    <div class="nav-logo">
      <img src="${r}assets/images/tourism-logo.png" alt="Laur Tourism Logo" class="nav-logo-img">
      <div class="nav-brand"><strong>Laur Tourism</strong><span>Nueva Ecija</span></div>
    </div>
    <button class="mobile-menu-close" onclick="toggleMobile()">&#x2715;</button>
  </div>
  <div class="mobile-links">
    <a href="${r}index.html" onclick="toggleMobile()">Home</a>
    <a href="${r}pages/about.html" onclick="toggleMobile()">About Laur</a>
    <a href="${r}pages/attractions.html" onclick="toggleMobile()">Attractions</a>
    <a href="${r}pages/visit.html" onclick="toggleMobile()">Where to Stay / Eat / Shop</a>
    <a href="${r}pages/gallery.html" onclick="toggleMobile()">Photo Gallery</a>
    <a href="${r}pages/contact.html" onclick="toggleMobile()">Makipag-ugnayan &amp; Emergency</a>
  </div>
  <a href="https://www.facebook.com/profile.php?id=61580579025346" class="mobile-fb" target="_blank" rel="noopener">Find us on Facebook</a>
</div>`;

  /* ── FOOTER HTML ── */
  const footerHTML = `
<footer class="footer">
  <div class="footer-top">
    <div class="footer-brand">
      <strong>Laur Tourism</strong>
      <span>Official Laur Tourism Website</span>
      <p>Promoting the natural beauty, culture, and heritage of Laur, Nueva Ecija, Philippines.</p>
      <div class="social-row">
        <a href="https://www.facebook.com/profile.php?id=61580579025346" class="social-btn" target="_blank" rel="noopener" aria-label="Facebook">
          <img src="${r}assets/images/socmed/facebook.webp" alt="Facebook" style="width:22px;height:22px;object-fit:contain;">
        </a>
      </div>
    </div>
    <nav class="footer-col">
      <h4>Explore</h4>
      <a href="${r}pages/attractions.html">Attractions</a>
      <a href="${r}pages/visit.html#stay">Where to Stay</a>
      <a href="${r}pages/visit.html#eat">Where to Eat</a>
      <a href="${r}pages/visit.html#shops">Shops &amp; Stores</a>
    </nav>
    <nav class="footer-col">
      <h4>Visit</h4>
      <a href="${r}pages/about.html">About Laur</a>
      <a href="${r}pages/contact.html#directions">How to Get There</a>
      <a href="${r}pages/gallery.html">Photo Gallery</a>
    </nav>
    <nav class="footer-col">
      <h4>Contact</h4>
      <a href="${r}pages/contact.html">Tourism Office</a>
      <a href="${r}pages/contact.html#emergency">Emergency Numbers</a>
      <a href="https://www.facebook.com/profile.php?id=61580579025346" target="_blank" rel="noopener">Facebook Page</a>
    </nav>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Municipality of Laur, Nueva Ecija, Philippines. All rights reserved.</span>
    <span>Official Laur Tourism Website</span>
  </div>
</footer>`;

  /* ── INJECT ── */
  const navEl        = document.getElementById('nav-placeholder');
  const mobileEl     = document.getElementById('mobile-menu-placeholder');
  const footerEl     = document.getElementById('footer-placeholder');

  if (navEl)    navEl.outerHTML    = navbarHTML;
  if (mobileEl) mobileEl.outerHTML = mobileMenuHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

})();