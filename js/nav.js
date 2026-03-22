/**
 * nav.js — Shared navigation component
 *
 * Place <script src="js/nav.js"></script> where the navs should appear.
 * It writes both the mobile navbar and the desktop sidebar synchronously.
 * Current-page links are auto-highlighted via CSS class.
 *
 * BUG FIX: the <label> only wraps #nav-icon3 (the hamburger icon).
 * The checkbox (#toggle) and the .menu are siblings *outside* the label,
 * so clicking inside the menu no longer accidentally toggles the checkbox.
 * The CSS selector "#toggle:checked + .menu" still works because #toggle
 * immediately precedes .menu as siblings inside .navbar.
 */
(function () {
  var raw  = window.location.pathname.split('/').pop();
  var page = raw.replace(/\.html$/, '') || 'index';
  if (page === '') page = 'index';

  /* Returns ' nav-active' when id matches the current page */
  function a(id) { return page === id ? ' nav-active' : ''; }

  var social =
    '<div class="social-media">' +
      '<a target="_blank" class="insta" href="https://www.instagram.com/damgrela/"><i class="fab fa-instagram"></i></a>' +
      '<a target="_blank" class="insta linked" href="https://www.linkedin.com/in/damian-grela-2405a31b8/"><i class="fab fa-linkedin-in"></i></a>' +
      '<a target="_blank" class="insta" href="https://dribbble.com/damng"><i class="fab fa-dribbble"></i></a>' +
    '</div>';

  /*
   * KEY FIX: <label> wraps ONLY #nav-icon3 (the hamburger).
   * #toggle and .menu are placed as direct siblings of the label
   * inside .navbar — NOT inside the label itself.
   * This means clicking menu links no longer toggles the checkbox.
   */
  var mobileNav =
    '<nav class="navbar">' +
      '<a href="index"><img src="LOGO.svg" alt="logo" class="main-logo animate__animated animate__fadeIn"></a>' +
      /* label wraps ONLY the burger icon */
      '<label class="nav" for="toggle">' +
        '<div id="nav-icon3"><span></span><span></span><span></span><span></span></div>' +
      '</label>' +
      /* checkbox and menu are siblings, not children of label */
      '<input type="checkbox" id="toggle">' +
      '<div class="menu dropdown-content">' +
        '<p class="portfolio fade-one fading">Portfolio</p>' +
        '<a href="index"><button class="fade-two fading' + a('index') + '">Street</button></a>' +
        '<a href="iceland"><button class="fade-three fading' + a('iceland') + '">Iceland</button></a>' +
        '<a href="australia"><button class="fade-four fading' + a('australia') + '">Australia</button></a>' +
        '<a href="ukraine"><button class="fade-five fading' + a('ukraine') + '">Ukraine</button></a>' +
        '<a href="reportage"><button class="fade-six fading' + a('reportage') + '">Reportage</button></a>' +
        '<a href="about" class="contact-link fade-seven fading' + a('about') + '">About</a>' +
        '<a href="contact" class="contact-link fade-eight fading' + a('contact') + '">Contact</a>' +
        '<div class="fade-nine fading">' + social + '</div>' +
      '</div>' +
    '</nav>';

  var desktopNav =
    '<nav class="sidebar" id="myTopnav">' +
      '<div id="myLinks">' +
        '<button class="dropbtn-portfolio">Portfolio</button>' +
        '<div class="dropdown-content">' +
          '<a href="index"><button class="' + (page === 'index' ? 'nav-active' : '') + '">Street</button></a>' +
          '<a><button id="myBtn3" class="my-analog">Film <i class="fas fa-angle-down" style="font-size:12px;"></i></button></a>' +
          '<div class="dropdown-content analog-drop animate__animated animate__fadeInLeft">' +
            '<a href="iceland"><button class="' + (page === 'iceland' ? 'nav-active' : '') + '">Iceland</button></a>' +
            '<a href="australia"><button class="' + (page === 'australia' ? 'nav-active' : '') + '">Australia</button></a>' +
            '<a href="ukraine"><button class="' + (page === 'ukraine' ? 'nav-active' : '') + '">Ukraine</button></a>' +
          '</div>' +
          '<a href="reportage"><button class="' + (page === 'reportage' ? 'nav-active' : '') + '">Reportage</button></a>' +
        '</div>' +
        '<a href="about" class="contact-link' + a('about') + '">About</a>' +
        '<a href="contact" class="contact-link' + a('contact') + '">Contact</a>' +
        social +
      '</div>' +
    '</nav>';

  document.write(mobileNav + desktopNav);
}());
