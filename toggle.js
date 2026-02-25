(function() {
  var s = localStorage.getItem('hbot-mode');
  if (s === 'mode-plain' || s === 'mode-technical') document.body.className = s;

  var nt = document.getElementById('nav-track');
  var nlt = document.getElementById('nav-label-tech');
  var nlp = document.getElementById('nav-label-plain');

  function tech() { return document.body.classList.contains('mode-technical'); }

  function set(t) {
    var m = t ? 'mode-technical' : 'mode-plain';
    document.body.className = m;
    localStorage.setItem('hbot-mode', m);
    nt.className = t ? 'toggle-track technical' : 'toggle-track plain';
    nt.setAttribute('aria-checked', String(t));
    nlt.className = t ? 'toggle-label active' : 'toggle-label inactive';
    nlp.className = t ? 'toggle-label inactive' : 'toggle-label active';
    var h = document.getElementById('hero-track');
    if (h) {
      h.className = t ? 'toggle-track technical' : 'toggle-track plain';
      h.setAttribute('aria-checked', String(t));
      document.getElementById('hero-label-tech').className = t ? 'toggle-label active' : 'toggle-label inactive';
      document.getElementById('hero-label-plain').className = t ? 'toggle-label inactive' : 'toggle-label active';
    }
  }

  set(tech());
  nt.onclick = function() { set(!tech()); };
  nlt.onclick = function() { set(true); };
  nlp.onclick = function() { set(false); };

  var h = document.getElementById('hero-track');
  if (h) {
    h.onclick = function() { set(!tech()); };
    document.getElementById('hero-label-tech').onclick = function() { set(true); };
    document.getElementById('hero-label-plain').onclick = function() { set(false); };
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var el = document.querySelector(this.getAttribute('href'));
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.sticky-nav').offsetHeight - 16,
          behavior: 'smooth'
        });
      }
    });
  });

  // Hamburger menu
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
