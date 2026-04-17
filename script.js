/* ═══════════════════════════════════════════════════════════
   DIGITALDARBAR — COMING SOON · EDITORIAL INTERACTIVE SCRIPTS
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── PARTICLE SYSTEM (only if canvas is visible) ───
  const canvas = document.getElementById('particle-canvas');
  if (canvas && getComputedStyle(canvas).display !== 'none') {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.hue = Math.random() > 0.5 ? 42 : 226;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 60%, 65%, ${this.opacity})`;
        ctx.fill();
      }
    }

    function initParticles() {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
      particles = [];
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }

    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
    resizeCanvas();
    initParticles();
    animateParticles();
  }


  // ─── NAVBAR SCROLL EFFECT ───
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();


  // ─── COUNTDOWN TIMER ───
  const LAUNCH_DATE = new Date();
  LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 60);
  LAUNCH_DATE.setHours(0, 0, 0, 0);

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = LAUNCH_DATE.getTime() - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const newDays = String(d).padStart(2, '0');
    const newHours = String(h).padStart(2, '0');
    const newMinutes = String(m).padStart(2, '0');
    const newSeconds = String(s).padStart(2, '0');

    if (daysEl.textContent !== newDays)    animateValue(daysEl, newDays);
    if (hoursEl.textContent !== newHours)  animateValue(hoursEl, newHours);
    if (minutesEl.textContent !== newMinutes) animateValue(minutesEl, newMinutes);
    if (secondsEl.textContent !== newSeconds) animateValue(secondsEl, newSeconds);
  }

  function animateValue(el, value) {
    el.style.transform = 'translateY(-4px)';
    el.style.opacity = '0.5';
    setTimeout(() => {
      el.textContent = value;
      el.style.transform = 'translateY(0)';
      el.style.opacity = '1';
    }, 150);
  }

  [daysEl, hoursEl, minutesEl, secondsEl].forEach(el => {
    el.style.transition = 'transform 0.3s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease';
  });

  updateCountdown();
  setInterval(updateCountdown, 1000);


  // ─── EMAIL FORM ───
  const emailForm = document.getElementById('email-form');
  const emailInput = document.getElementById('email-input');
  const formMessage = document.getElementById('form-message');
  const btnSubmit = document.getElementById('btn-submit');

  emailForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    formMessage.className = 'form-message';
    formMessage.textContent = '';

    if (!email) {
      showMessage('Please enter your email address.', 'error');
      shakeElement(emailInput);
      return;
    }

    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      shakeElement(emailInput);
      return;
    }

    btnSubmit.disabled = true;
    btnSubmit.querySelector('.btn-text').textContent = 'Sending...';

    setTimeout(() => {
      showMessage('🎉 You\'re on the list! We\'ll notify you at launch.', 'success');
      emailInput.value = '';
      btnSubmit.disabled = false;
      btnSubmit.querySelector('.btn-text').textContent = 'Notify Me';
    }, 1200);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
  }

  function shakeElement(el) {
    el.style.animation = 'shake 0.4s ease-in-out';
    setTimeout(() => { el.style.animation = ''; }, 400);
  }

  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(shakeStyle);


  // ─── SCROLL REVEAL ANIMATION ───
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });


  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ─── TYPING EFFECT FOR SUBTITLE ───
  const subtitle = document.getElementById('hero-subtitle');
  const taglines = [
    'Your Brand Deserves A Throne',
    'Where Brand Becomes Royal'
  ];

  let taglineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function typeEffect() {
    const currentTagline = taglines[taglineIndex];

    if (isDeleting) {
      subtitle.textContent = currentTagline.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      subtitle.textContent = currentTagline.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    // Blinking cursor — use accent color matching the editorial theme
    subtitle.style.borderRight = '2px solid #8B1A1A';
    subtitle.style.paddingRight = '4px';

    if (!isDeleting && charIndex === currentTagline.length) {
      typingSpeed = 2800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      taglineIndex = (taglineIndex + 1) % taglines.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  setTimeout(typeEffect, 1500);


  // ─── PARALLAX ON HERO ───
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        heroContent.style.opacity = 1 - scrolled / (window.innerHeight * 0.8);
      }
    }
  }, { passive: true });


  // ─── WATERMARK PARALLAX ───
  // Subtle parallax movement on the ghost watermark text
  const hero = document.getElementById('hero');
  window.addEventListener('mousemove', (e) => {
    if (!hero) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    hero.style.setProperty('--mx', x + 'px');
    hero.style.setProperty('--my', y + 'px');
  });


  // ─── 3D TILT EFFECT FOR CARDS ───
  const tiltCards = document.querySelectorAll('.service-card, .countdown-card, .social-card, .email-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = 'transform 0.1s cubic-bezier(0.22, 1, 0.36, 1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    });
  });

})();

