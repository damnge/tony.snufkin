/**
 * app.js — Damian Grela Photography Portfolio
 *
 * Consolidates: loader · lazy-loading · hamburger · film dropdown ·
 *               dynamic modal builder · modal open/close · slideshow · arrow keys
 */

/* =========================================================
   1. LOADER
   ========================================================= */

$(window).on('load', function () {
  $('.loader').fadeOut('slow');
  $('html, body').css({ position: 'relative' });
});

window.onbeforeunload = function () { window.scrollTo(0, 0); };

/* =========================================================
   2. LAZY LOADING
   ========================================================= */

var imgObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    var img = entry.target;
    var src = img.getAttribute('data-src');
    if (src) img.src = src;
    observer.unobserve(img);
  });
}, { threshold: 0, rootMargin: '0px' });

document.querySelectorAll('[data-src]').forEach(function (img) {
  imgObserver.observe(img);
});

/* =========================================================
   3. HAMBURGER + FILM DROPDOWN  (single ready block)
   =========================================================
   Driven by the checkbox 'change' event so the burger ↔ X
   icon and checkbox state can never drift out of sync.
   ========================================================= */

$(document).ready(function () {

  /* Burger icon follows checkbox state */
  $('#toggle').on('change', function () {
    $('#nav-icon3').toggleClass('open', this.checked);
  });

  /* Close menu when any nav link/button inside it is clicked */
  $(document).on('click', '.menu a, .menu button', function () {
    var t = document.getElementById('toggle');
    if (t && t.checked) { t.checked = false; $('#nav-icon3').removeClass('open'); }
  });

  /* Close menu on outside click */
  $(document).on('click', function (e) {
    var t = document.getElementById('toggle');
    if (t && t.checked && !$(e.target).closest('.navbar').length) {
      t.checked = false;
      $('#nav-icon3').removeClass('open');
    }
  });

  /* Film / analog sub-dropdown */
  $('#myBtn3').on('click', function () { $('.analog-drop').slideToggle(400); });

});

/* =========================================================
   5. BUILD MODAL SLIDES FROM GALLERY IMAGES
      Each gallery image only needs data-src and (optionally)
      data-orient="portrait|landscape". No duplicate HTML needed.
   ========================================================= */

(function buildModalSlides() {
  var container = document.getElementById('modal-slides');
  if (!container) return;

  var slider      = container.querySelector('.slider');
  var galleryImgs = document.querySelectorAll('#gallery-container .lazy-img');

  galleryImgs.forEach(function (img, i) {
    var slide = document.createElement('div');
    slide.className = 'mySlides ' + (img.dataset.orient || 'landscape');

    var slideImg = document.createElement('img');
    slideImg.className = 'lazy-img';
    slideImg.src = 'dot.jpg';
    slideImg.setAttribute('data-src', img.getAttribute('data-src'));
    slide.appendChild(slideImg);

    container.insertBefore(slide, slider);

    img.addEventListener('click', (function (n) {
      return function () { openModal(); currentSlide(n); };
    }(i + 1)));
  });

  /* Register new modal images with the lazy observer */
  container.querySelectorAll('[data-src]').forEach(function (img) {
    imgObserver.observe(img);
  });

  /* Show the first slide now that slides exist */
  showSlides(slideIndex);
}());

/* =========================================================
   6. MODAL OPEN / CLOSE
   ========================================================= */

function openModal() {
  var modal = document.getElementById('myModal');
  if (!modal) return;
  modal.style.display    = 'block';
  modal.style.visibility = 'visible';
}

function closeModal() {
  var modal = document.getElementById('myModal');
  if (!modal) return;
  modal.style.display    = 'none';
  modal.style.visibility = 'hidden';
}

/* =========================================================
   7. SLIDESHOW
   ========================================================= */

var slideIndex = 1;

function showSlides(n) {
  var slides = document.getElementsByClassName('mySlides');
  if (!slides.length) return;
  if (n > slides.length) slideIndex = 1;
  if (n < 1)             slideIndex = slides.length;
  Array.prototype.forEach.call(slides, function (s) { s.style.display = 'none'; });
  slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n)   { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex  = n); }

/* =========================================================
   8. ARROW-KEY NAVIGATION  (only while modal is open)
   ========================================================= */

document.addEventListener('keydown', function (e) {
  var modal = document.getElementById('myModal');
  if (!modal || modal.style.display !== 'block') return;
  switch (e.key) {
    case 'ArrowLeft':  plusSlides(-1); break;
    case 'ArrowRight': plusSlides(1);  break;
    case 'Escape':     closeModal();   break;
  }
});

/* =========================================================
   9. TOUCH SWIPE NAVIGATION  (mobile)
   ========================================================= */

(function () {
  var modal = document.getElementById('myModal');
  if (!modal) return;

  var touchStartX = 0;

  modal.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) < 50) return; // ignore taps / tiny drags
    plusSlides(diff > 0 ? 1 : -1);   // swipe left → next, swipe right → prev
  }, { passive: true });
}());
