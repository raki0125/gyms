import '../../style.css';
import heroImg from '../../assets/gym-hero-page1.png';
import { renderTransformGallery } from '../../components/transformGallery.js';

export function renderPage8(container) {
  container.innerHTML = `
    <div class="p1">

      <!-- INDIAN MARQUEE TICKER -->
      <div class="p1-ticker">
        <div class="p1-ticker-inner">
          <span>Transform Your Body</span>
          <span>Elite Coaching</span>
          <span>INR Pricing</span>
          <span>Fitness 1Plus Gym</span>
          <span>30-Day Money Back</span>
          <span>India's #1 Gym Platform</span>
          <span>Transform Your Body</span>
          <span>Elite Coaching</span>
          <span>INR Pricing</span>
          <span>Fitness 1Plus Gym</span>
          <span>30-Day Money Back</span>
          <span>India's #1 Gym Platform</span>
        </div>
      </div>

      <!-- STICKY NAVBAR -->
      <nav class="p1-nav">
        <div class="p1-logo">FITNESS 1PLUS</div>
        <div class="p1-nav-links">
          <a href="#p1-about">About</a>
          <a href="#p1-membership">Memberships</a>
          <a href="#p1-results">Results</a>
          <a href="#p1-faq">FAQ</a>
          <a href="#p1-contact">Contact</a>
        </div>
        <button class="p1-nav-cta" onclick="document.querySelector('#p1-membership').scrollIntoView({behavior:'smooth'})">Join Now</button>
      </nav>

      <!-- HERO SECTION -->
      <section id="p1-hero" class="p1-hero">
        <!-- Floating particles -->
        <div class="p1-particles" id="p1-particles-wrap"></div>
        <!-- Mandala decoration -->
        <div class="p1-mandala-wrap">
          <div class="p1-mandala-outer">
            <div class="p1-mandala-inner">
              <div class="p1-mandala-core"></div>
            </div>
          </div>
        </div>
        <div class="p1-hero-text">
          <div class="p1-eyebrow">ENGINEERED TO BUILD</div>
          <h1 class="p1-headline">
            <span>PURE MUSCLE</span>
            <span class="accent">&amp; STRENGTH</span>
          </h1>
          <p class="p1-subtext">
            Transform your physique with India's most advanced gym coaching system. 
            Progressive overload, macro precision, and 24/7 certified trainer support.
          </p>
          <div class="p1-cta-row">
            <button class="p1-btn-primary" onclick="document.querySelector('#p1-membership').scrollIntoView({behavior:'smooth'})">
              Start Training
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </button>
            <button class="p1-btn-ghost" onclick="document.querySelector('#p1-about').scrollIntoView({behavior:'smooth'})">
              How It Works ↓
            </button>
          </div>
        </div>

        <div class="p1-hero-img-wrap">
          <img src="${heroImg}" alt="Fitness 1Plus Gym Athlete" class="p1-hero-img" />
          <div class="p1-img-badge">
            <div>
              <div class="p1-badge-num">4.9★</div>
              <div class="p1-badge-txt">Member Rating</div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURE STRIP -->
      <div class="p1-features">
        <div class="p1-feature-item">
          <div class="p1-feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="p1-feature-title">Hypertrophy Training</div>
          <div class="p1-feature-desc">Periodized programs built for maximum muscle gain.</div>
        </div>
        <div class="p1-feature-item">
          <div class="p1-feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          </div>
          <div class="p1-feature-title">Fat Loss Programs</div>
          <div class="p1-feature-desc">Scientific caloric deficit plans with macro tracking.</div>
        </div>
        <div class="p1-feature-item">
          <div class="p1-feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div class="p1-feature-title">1-on-1 Coaching</div>
          <div class="p1-feature-desc">Dedicated trainers available 24/7 via app.</div>
        </div>
        <div class="p1-feature-item">
          <div class="p1-feature-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div class="p1-feature-title">100% Guaranteed</div>
          <div class="p1-feature-desc">30-day full money-back guarantee, no questions asked.</div>
        </div>
      </div>

      <!-- ABOUT SECTION -->
      <section id="p1-about" class="p1-section">
        <div class="p1-section-header">
          <div class="p1-section-tag">THE FITNESS 1PLUS SYSTEM</div>
          <h2 class="p1-section-title">Built for Peak Athletic Performance</h2>
          <p class="p1-section-sub">India's most advanced gym coaching methodology — combining heavy compound movements, precision nutrition, and daily accountability coaching.</p>
        </div>
        <div class="p1-grid-3">
          <div class="p1-card">
            <div class="p1-card-num">01</div>
            <div class="p1-card-title">Progressive Overload</div>
            <div class="p1-card-desc">Periodized strength cycles designed to maximize hypertrophy & break plateaus every 6 weeks.</div>
          </div>
          <div class="p1-card">
            <div class="p1-card-num">02</div>
            <div class="p1-card-title">Precision Nutrition</div>
            <div class="p1-card-desc">Custom protein & calorie blueprints for clean lean bulk, fat shredding, or body recomposition.</div>
          </div>
          <div class="p1-card">
            <div class="p1-card-num">03</div>
            <div class="p1-card-title">Live Form Analysis</div>
            <div class="p1-card-desc">Video review from elite certified coaches — perfect your squat, bench, and deadlift technique.</div>
          </div>
        </div>
      </section>

      <!-- MEMBERSHIPS SECTION -->
      <section id="p1-membership" class="p1-section">
        <div class="p1-section-header">
          <div class="p1-section-tag">MEMBERSHIPS</div>
          <h2 class="p1-section-title">Choose Your Fitness Plan</h2>
          <p class="p1-section-sub">Flexible monthly memberships with full access to gym floor, coaches, and app tracking.</p>
        </div>
        <div class="p1-grid-3">
          <!-- STARTER PLAN -->
          <div class="p7-price-card-flip-wrap reveal">
            <div class="p7-price-card-inner">
              <div class="p7-price-card-front">
                <div>
                  <div class="p1-card-badge">Starter</div>
                  <div class="p1-card-title" style="margin-top:14px;">Basic Gym Access</div>
                  <div class="p1-card-desc" style="margin-top:10px;">Unlimited gym floor access, free weights, cardio zone and locker rooms.</div>
                </div>
                <div>
                  <div class="p1-price">₹1,499<sub>/mo</sub></div>
                  <button class="p1-buy-btn p7-flip-trigger" style="width: 100%;">Join Basic</button>
                </div>
              </div>
              <div class="p7-price-card-back">
                <button class="p7-form-back-btn p7-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p7-form-title">Join Basic</div>
                <form class="p7-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Starter plan has been received. Our team will contact you shortly.');">
                  <div class="p7-form-group"><input type="text" class="p7-form-input" placeholder="Full Name" required /></div>
                  <div class="p7-form-group"><input type="tel" class="p7-form-input" placeholder="Phone Number" required /></div>
                  <div class="p7-form-group"><input type="email" class="p7-form-input" placeholder="Email Address" required /></div>
                  <button type="submit" class="p7-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

          <!-- PRO PLAN -->
          <div class="p7-price-card-flip-wrap featured reveal">
            <div class="p7-price-card-inner">
              <div class="p7-price-card-front featured">
                <div>
                  <div class="p1-card-badge">Most Popular</div>
                  <div class="p1-card-title" style="margin-top:14px;">Pro Fitness + Coaching</div>
                  <div class="p1-card-desc" style="margin-top:10px;">Full gym access + monthly 1-on-1 personal trainer sessions & custom meal plan.</div>
                </div>
                <div>
                  <div class="p1-price">₹2,999<sub>/mo</sub></div>
                  <button class="p1-buy-btn primary p7-flip-trigger" style="width: 100%;">Join Pro</button>
                </div>
              </div>
              <div class="p7-price-card-back featured">
                <button class="p7-form-back-btn p7-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p7-form-title">Join Pro</div>
                <form class="p7-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Pro plan has been received. Our team will contact you shortly.');">
                  <div class="p7-form-group"><input type="text" class="p7-form-input" placeholder="Full Name" required /></div>
                  <div class="p7-form-group"><input type="tel" class="p7-form-input" placeholder="Phone Number" required /></div>
                  <div class="p7-form-group"><input type="email" class="p7-form-input" placeholder="Email Address" required /></div>
                  <button type="submit" class="p7-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

          <!-- VIP PLAN -->
          <div class="p7-price-card-flip-wrap reveal">
            <div class="p7-price-card-inner">
              <div class="p7-price-card-front">
                <div>
                  <div class="p1-card-badge">VIP Elite</div>
                  <div class="p1-card-title" style="margin-top:14px;">Elite Personal Training</div>
                  <div class="p1-card-desc" style="margin-top:10px;">Dedicated coach 3x weekly, cryotherapy recovery, and custom supplementation plan.</div>
                </div>
                <div>
                  <div class="p1-price">₹5,999<sub>/mo</sub></div>
                  <button class="p1-buy-btn p7-flip-trigger" style="width: 100%;">Join VIP</button>
                </div>
              </div>
              <div class="p7-price-card-back">
                <button class="p7-form-back-btn p7-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p7-form-title">Join VIP</div>
                <form class="p7-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for VIP plan has been received. Our team will contact you shortly.');">
                  <div class="p7-form-group"><input type="text" class="p7-form-input" placeholder="Full Name" required /></div>
                  <div class="p7-form-group"><input type="tel" class="p7-form-input" placeholder="Phone Number" required /></div>
                  <div class="p7-form-group"><input type="email" class="p7-form-input" placeholder="Email Address" required /></div>
                  <button type="submit" class="p7-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RESULTS / STATS SECTION -->
      <section id="p1-results" class="p1-section">
        <div class="p1-section-header">
          <div class="p1-section-tag">PROVEN RESULTS</div>
          <h2 class="p1-section-title">Backed by Real Transformations</h2>
        </div>
        <div class="p1-stats">
          <div class="p1-stat">
            <div class="p1-stat-num">98%</div>
            <div class="p1-stat-label">Goal Completion Rate</div>
          </div>
          <div class="p1-stat">
            <div class="p1-stat-num">14 Days</div>
            <div class="p1-stat-label">Avg. Transformation Kickstart</div>
          </div>
          <div class="p1-stat">
            <div class="p1-stat-num">4.9 ★</div>
            <div class="p1-stat-label">Average Member Rating</div>
          </div>
        </div>
      </section>

      <!-- TRANSFORMATION GALLERY (injected by JS) -->
      <div id="p1-gallery-mount"></div>

      <!-- FAQ SECTION -->
      <section id="p1-faq" class="p1-section">
        <div class="p1-section-header">
          <div class="p1-section-tag">FAQ</div>
          <h2 class="p1-section-title">Frequently Asked Questions</h2>
        </div>
        <div class="p1-faq">
          <div class="p1-faq-item">
            <button class="p1-faq-btn">How quickly will I see results?<span class="p1-faq-icon">+</span></button>
            <div class="p1-faq-body">Most members notice significant energy and strength gains within 14 days. Visible muscle definition typically shows by week 4 with consistent training.</div>
          </div>
          <div class="p1-faq-item">
            <button class="p1-faq-btn">Are plans suitable for beginners?<span class="p1-faq-icon">+</span></button>
            <div class="p1-faq-body">Yes! Every member receives a custom program scaled to their exact fitness level and goals — from complete beginners to competitive athletes.</div>
          </div>
          <div class="p1-faq-item">
            <button class="p1-faq-btn">Is there a trial or refund guarantee?<span class="p1-faq-icon">+</span></button>
            <div class="p1-faq-body">We offer a 30-day full money-back guarantee. If you don't feel stronger in your first month, get a 100% refund — no questions asked.</div>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer id="p1-contact" class="p1-footer">
        <div class="p1-footer-top">
          <div>
            <div class="p1-footer-brand-name">FITNESS 1PLUS</div>
            <div class="p1-footer-brand-desc">India's next-generation strength, hypertrophy & performance training platform.</div>
          </div>
          <div class="p1-footer-col">
            <h4>Navigate</h4>
            <a href="#p1-hero">Home</a>
            <a href="#p1-about">About Us</a>
            <a href="#p1-membership">Memberships</a>
            <a href="#p1-results">Results</a>
          </div>
          <div class="p1-footer-col">
            <h4>Support</h4>
            <a href="#p1-faq">FAQ</a>
            <a href="#p1-contact">Contact Us</a>
            <a href="#">Guest Pass</a>
          </div>
          <div class="p1-footer-col">
            <h4>Newsletter</h4>
            <div class="p1-newsletter">
              <input type="email" placeholder="Your email address" />
              <button>→</button>
            </div>
          </div>
        </div>
        <div class="p1-footer-bottom">&copy; 2026 Fitness 1Plus India. All rights reserved.</div>
      </footer>

    </div>
  `;

  // FAQ accordion
  container.querySelectorAll('.p1-faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      container.querySelectorAll('.p1-faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Smooth scroll for all anchor links
  container.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = container.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Scroll-triggered reveal animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  container.querySelectorAll('.p1-card, .p1-stat, .p1-feature-item, .p1-faq-item, .p7-price-card-flip-wrap').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Render transformation gallery
  const galleryMount = container.querySelector('#p1-gallery-mount');
  if (galleryMount) {
    renderTransformGallery(galleryMount, 'p1');
  }

  // ── 3D Card Flip Listeners for Pricing ──
  container.querySelectorAll('.p7-flip-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.p7-price-card-flip-wrap');
      if (wrap) wrap.classList.add('flipped');
    });
  });

  container.querySelectorAll('.p7-flip-back-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.p7-price-card-flip-wrap');
      if (wrap) wrap.classList.remove('flipped');
    });
  });


  // Spawn floating particles in hero
  const particlesWrap = container.querySelector('#p1-particles-wrap');
  if (particlesWrap) {
    const particleData = [
      { left: '10%', bottom: '10%', dur: '7s', delay: '0s' },
      { left: '25%', bottom: '5%', dur: '5s', delay: '1.2s' },
      { left: '40%', bottom: '15%', dur: '8s', delay: '0.5s' },
      { left: '55%', bottom: '8%', dur: '6s', delay: '2s' },
      { left: '70%', bottom: '20%', dur: '9s', delay: '0.3s' },
      { left: '85%', bottom: '12%', dur: '5.5s', delay: '1.7s' },
      { left: '15%', bottom: '30%', dur: '7.5s', delay: '0.9s' },
      { left: '60%', bottom: '35%', dur: '6.5s', delay: '3s' },
    ];
    particleData.forEach(p => {
      const el = document.createElement('div');
      el.className = 'p1-particle';
      el.style.setProperty('--dur', p.dur);
      el.style.setProperty('--delay', p.delay);
      el.style.left = p.left;
      el.style.bottom = p.bottom;
      particlesWrap.appendChild(el);
    });
  }

  // Animated stat counters
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'none';
        e.target.offsetHeight; // reflow
        e.target.style.animation = 'countUp 0.7s cubic-bezier(0.22,1,0.36,1) both';
        statObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  container.querySelectorAll('.p1-stat-num').forEach(el => statObserver.observe(el));

  // ── Framer Motion-style Native Animations ──
  const heroText = container.querySelector('.p1-hero-text');
  if (heroText && heroText.animate) {
    heroText.animate([
      { transform: 'translateY(36px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ], { duration: 900, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' });
  }

  const heroImgWrap = container.querySelector('.p1-hero-img-wrap');
  if (heroImgWrap && heroImgWrap.animate) {
    heroImgWrap.animate([
      { transform: 'scale(0.92)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 }
    ], { duration: 1100, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', fill: 'forwards' });
  }

  // 3D Magnetic Tilt Effect on Cards
  container.querySelectorAll('.p1-card, .p1-feature-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg) translateY(-6px)`;
      card.style.transition = 'none';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // Button ripple effect
  container.querySelectorAll('.p1-btn-primary, .p1-buy-btn, .p1-nav-cta').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute; border-radius:50%; background:rgba(255,255,255,0.35);
        width:10px; height:10px;
        left:${e.clientX - rect.left - 5}px; top:${e.clientY - rect.top - 5}px;
        transform:scale(0); animation:rippleExpand 0.5s ease-out forwards; pointer-events:none;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 550);
    });
  });
}

// Inject ripple keyframe globally once
if (!document.querySelector('#fitness-1plus-ripple-style')) {
  const s = document.createElement('style');
  s.id = 'fitness-1plus-ripple-style';
  s.textContent = '@keyframes rippleExpand { to { transform:scale(30); opacity:0; } }';
  document.head.appendChild(s);
}

