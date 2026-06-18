// year
var yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();

// nav: solid after scrolling past a (video) hero; mobile menu
var nav = document.querySelector('.nav');
var burger = document.querySelector('.nav__burger');
var hero = document.querySelector('.hero');

if (hero) {
  var onScroll = function () {
    nav.classList.toggle('is-scrolled', window.scrollY > hero.offsetHeight - 90);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

if (burger) {
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('.nav__links a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('is-open'); });
  });
}

// scroll reveal
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
