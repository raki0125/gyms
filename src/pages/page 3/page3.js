import './page3.css';
import heroImg from '../../assets/image1.png';
import storyImg from '../../assets/fitflow-female.png';
import logoImg from '../../assets/logo.png';
import whyImg from '../../assets/image1.png';
import avatarImg from '../../assets/user-avatar.png';
import t1 from '../../assets/transform-1.png';
import t2 from '../../assets/transform-2.png';
import t3 from '../../assets/transform-3.png';
import * as THREE from 'three';

export function renderPage3(container) {
  container.innerHTML = `
    <div class="p3">

      <!-- ══════════════════════════════════
           NAVBAR
      ══════════════════════════════════ -->
      <nav class="p3-nav">
        <a href="#p3-hero" class="p3-logo">
          <span class="p3-logo-icon">
            <img src="${logoImg}" alt="Logo Icon" />
          </span>
          Hammerz Fitness
        </a>
        <div class="p3-nav-links">
          <a href="#p3-hero" class="active">Home</a>
          <a href="#p3-story">About</a>
          <a href="#p3-classes">Classes</a>
          <a href="#p3-trainers">Trainers</a>
          <a href="#p3-testimonials">Reviews</a>
          <a href="#p3-pricing">Pricing</a>
          <a href="#p3-contact">Contact</a>
        </div>
        <button class="p3-nav-cta" onclick="document.querySelector('#p3-pricing').scrollIntoView({behavior:'smooth'})">
          Free Trial
        </button>
      </nav>

      <!-- ══════════════════════════════════
           HERO — Exact HammReerplica
      ══════════════════════════════════ -->
      <section id="p3-hero" class="p3-hero">

        <!-- Layer 0: Athlete photo -->
        <img src="${heroImg}" alt="FitFactory Athlete" class="p3-hero-bg" />

        <!-- Layer 1: Base dark overlay -->
        <div class="p3-hero-base"></div>

        <!-- Layer 2: Floor smoke wisps -->
        <div class="p3-smoke-floor"></div>

        <!-- Layer 3: LEFT smoke wall -->
        <div class="p3-smoke-left"></div>

        <!-- Layer 3: RIGHT smoke wall -->
        <div class="p3-smoke-right"></div>

        <!-- Layer 4: Vignettes -->
        <div class="p3-hero-top-vignette"></div>
        <div class="p3-hero-vignette"></div>

        <!-- Social sidebar -->
        <div class="p3-social-sidebar">
          <a href="#" class="p3-social-link">f</a>
          <a href="#" class="p3-social-link">t</a>
          <a href="#" class="p3-social-link">in</a>
        </div>

        <!-- Layer 10: Hero text (sits behind foreground athlete) -->
        <div class="p3-hero-content">
          <h1 class="p3-hero-title">
            <span class="gold">Hard Body Game</span>
            <span class="white">Time to Change</span>
          </h1>
        </div>

        <!-- Layer 11: Interactive 3D WebGL Canvas (sits in front of hero text) -->
        <div class="p3-3d-wrap"><canvas id="p3-3d-canvas" class="p3-3d-canvas"></canvas></div>



        <!-- Layer 12: Button wrap (sits in front of the foreground athlete) -->
        <div class="p3-hero-btn-wrap">
          <button class="p3-hero-btn" onclick="document.querySelector('#p3-story').scrollIntoView({behavior:'smooth'})">
            Know More
          </button>
        </div>

      </section>




      <!-- ══════════════════════════════════
           OUR STORY / WHO WE ARE
      ══════════════════════════════════ -->
      <section id="p3-story" class="p3-story">
        <!-- Left: Story image -->
        <div class="p3-story-left p3-reveal">
          <div class="p3-story-overline">Overview Intro</div>
          <div class="p3-story-title">Our Story</div>
          <div class="p3-story-img-wrap">
            <img src="${logoImg}" alt="Our Story" class="p3-story-img" />
            <div class="p3-play-btn" id="p3-play-story">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            </div>
          </div>
        </div>

        <!-- Right: About text -->
        <div class="p3-story-right p3-reveal">
          <div class="p3-about-overline">About Us</div>
          <div class="p3-about-title">Who We Are</div>
          <p class="p3-about-text">
            FitFactory was founded in 2018 with a single mission: to create India's most results-driven 
            gym experience. We combine elite programming, world-class coaches, and cutting-edge equipment 
            to deliver transformations that last a lifetime.
          </p>
          <p class="p3-about-text">
            Our approach is different. No fads. No shortcuts. Just science-backed training systems, 
            personalised Indian nutrition guidance, and a community that pushes you to your absolute 
            best every single day.
          </p>
          <button class="p3-read-more">Read More</button>
        </div>
      </section>

      <!-- ══════════════════════════════════
           WHY CHOOSE US / LOCATION SECTION
      ══════════════════════════════════ -->
      <section id="p3-why" class="p3-why">
        <div class="p3-why-overlay"></div>

        <!-- Left Column: Google Map Location -->
        <div class="p3-why-left p3-map-reveal">
          <div class="p3-why-overline">Gym Location & Contact</div>
          <div class="p3-why-title">Visit FitFactory</div>
          <div class="p3-map-card">
            <div class="p3-map-iframe-wrap">
              <iframe
                title="FitFactory Gym Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796347395029!2d72.83351931535783!3d19.061730987094985!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c83031e!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style="border:0; border-radius: 12px; filter: invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.9);"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div class="p3-map-details">
              <div class="p3-map-detail-item">
                <div class="p3-map-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div class="p3-map-label">Gym Address</div>
                  <div class="p3-map-val">FitFactory Arena, Bandra West, Mumbai</div>
                </div>
              </div>
              <div class="p3-map-detail-item">
                <div class="p3-map-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <div class="p3-map-label">Working Hours</div>
                  <div class="p3-map-val">Open 24/7 (Coaching: 5 AM – 11 PM)</div>
                </div>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Bandra+West+Mumbai" target="_blank" rel="noopener noreferrer" class="p3-map-btn">
              <span>Open in Google Maps</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Big Text + Hooded Athlete Depth Layer -->
        <div class="p3-why-right">
          <!-- Text behind athlete -->
          <div class="p3-why-big-text">
            <span class="gold-text">WORK OUT</span><br />
            <span class="white-text">RIGHT NOW</span>
          </div>

          <!-- Foreground Athlete Image (Fades in when section visits) -->
          <img src="${whyImg}" alt="Hooded Athlete" class="p3-why-athlete-img p3-photo-fade" />
        </div>
      </section>

      <!-- ══════════════════════════════════
           OUR CLASSES
      ══════════════════════════════════ -->
      <section id="p3-classes" class="p3-classes">
        <div class="p3-classes-overline p3-reveal">Pro Selected</div>
        <div class="p3-classes-title p3-reveal">Our Classes</div>
        <div class="p3-classes-grid">
          <div class="p3-class-card p3-reveal">
            <div class="p3-class-img-ring">
              <img src="${t1}" alt="Cardio HIIT" />
            </div>
            <div class="p3-class-name">Cardio HIIT</div>
            <div class="p3-class-desc">High-intensity interval training designed to burn fat fast and boost cardiovascular fitness.</div>
          </div>
          <div class="p3-class-card p3-reveal">
            <div class="p3-class-img-ring">
              <img src="${heroImg}" alt="Body Building" />
            </div>
            <div class="p3-class-name">Body Building</div>
            <div class="p3-class-desc">Hypertrophy-focused progressive overload programs for building size and strength.</div>
          </div>
          <div class="p3-class-card p3-reveal">
            <div class="p3-class-img-ring">
              <img src="${t2}" alt="Yoga" />
            </div>
            <div class="p3-class-name">Yoga</div>
            <div class="p3-class-desc">Flexibility, mindfulness, and recovery sessions in a premium studio environment.</div>
          </div>
        </div>
        <button class="p3-more-classes-btn">More Classes</button>
      </section>

      <!-- ══════════════════════════════════
           TRAINERS
      ══════════════════════════════════ -->
      <section id="p3-trainers" class="p3-trainers">
        <div class="p3-trainers-overline p3-reveal">Expert Team</div>
        <div class="p3-trainers-title p3-reveal">Our Trainers</div>
        <div class="p3-trainers-grid">
          ${[
      { name: 'Vikram S.', role: 'Strength Coach', img: heroImg },
      { name: 'Priya M.', role: 'HIIT Specialist', img: storyImg },
      { name: 'Arjun R.', role: 'Yoga & Flexibility', img: t3 },
      { name: 'Meena K.', role: 'Nutrition Coach', img: avatarImg },
    ].map(t => `
            <div class="p3-trainer-card p3-reveal">
              <div class="p3-trainer-img-wrap">
                <img src="${t.img}" alt="${t.name}" />
              </div>
              <div class="p3-trainer-info">
                <div class="p3-trainer-name">${t.name}</div>
                <div class="p3-trainer-role">${t.role}</div>
                <div class="p3-trainer-socials">
                  <a href="#">f</a>
                  <a href="#">t</a>
                  <a href="#">in</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ══════════════════════════════════
           PRICING
      ══════════════════════════════════ -->
      <section id="p3-pricing" class="p3-pricing">
        <div class="p3-pricing-overline p3-reveal">Membership Plans</div>
        <div class="p3-pricing-title p3-reveal">Choose Your Plan</div>
        <div class="p3-pricing-grid">

          <!-- STARTER PLAN -->
          <div class="p3-price-card-flip-wrap p3-reveal">
            <div class="p3-price-card-inner">
              <!-- FRONT SIDE -->
              <div class="p3-price-card-front">
                <div class="p3-plan-name">Starter</div>
                <div class="p3-plan-price">₹1,499<sub>/mo</sub></div>
                <div class="p3-plan-period">Billed monthly</div>
                <ul class="p3-plan-features">
                  <li>Gym Floor Access</li>
                  <li>Cardio Zone</li>
                  <li>Locker Room</li>
                  <li>Mobile App</li>
                </ul>
                <button class="p3-plan-btn p3-flip-trigger" type="button">Join Now</button>
              </div>

              <!-- BACK SIDE (FORM) -->
              <div class="p3-price-card-back">
                <button class="p3-form-back-btn p3-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p3-form-title">Join Starter</div>
                <form class="p3-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Starter plan has been received. Our team will contact you shortly.');">
                  <div class="p3-form-group">
                    <input type="text" class="p3-form-input" placeholder="Full Name" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="tel" class="p3-form-input" placeholder="Phone Number" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="email" class="p3-form-input" placeholder="Email Address" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="text" class="p3-form-input" placeholder="Area Name / Location" required />
                  </div>
                  <button type="submit" class="p3-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

          <!-- PRO PLAN -->
          <div class="p3-price-card-flip-wrap popular p3-reveal">
            <div class="p3-price-card-inner">
              <!-- FRONT SIDE -->
              <div class="p3-price-card-front popular">
                <div class="p3-popular-badge">Most Popular</div>
                <div class="p3-plan-name">Pro</div>
                <div class="p3-plan-price">₹2,999<sub>/mo</sub></div>
                <div class="p3-plan-period">Billed monthly</div>
                <ul class="p3-plan-features">
                  <li>Full Gym Access</li>
                  <li>All Group Classes</li>
                  <li>Monthly PT Sessions</li>
                  <li>Custom Meal Plan</li>
                  <li>24/7 Coach Chat</li>
                </ul>
                <button class="p3-plan-btn p3-flip-trigger" type="button">Join Now</button>
              </div>

              <!-- BACK SIDE (FORM) -->
              <div class="p3-price-card-back popular">
                <button class="p3-form-back-btn p3-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p3-form-title">Join Pro</div>
                <form class="p3-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Pro plan has been received. Our team will contact you shortly.');">
                  <div class="p3-form-group">
                    <input type="text" class="p3-form-input" placeholder="Full Name" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="tel" class="p3-form-input" placeholder="Phone Number" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="email" class="p3-form-input" placeholder="Email Address" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="text" class="p3-form-input" placeholder="Area Name / Location" required />
                  </div>
                  <button type="submit" class="p3-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

          <!-- ELITE PLAN -->
          <div class="p3-price-card-flip-wrap p3-reveal">
            <div class="p3-price-card-inner">
              <!-- FRONT SIDE -->
              <div class="p3-price-card-front">
                <div class="p3-plan-name">Elite</div>
                <div class="p3-plan-price">₹5,999<sub>/mo</sub></div>
                <div class="p3-plan-period">Billed monthly</div>
                <ul class="p3-plan-features">
                  <li>VIP Gym Access</li>
                  <li>Dedicated Coach 3×/wk</li>
                  <li>Personalised Program</li>
                  <li>Supplement Guide</li>
                  <li>Recovery Sessions</li>
                </ul>
                <button class="p3-plan-btn p3-flip-trigger" type="button">Join Now</button>
              </div>

              <!-- BACK SIDE (FORM) -->
              <div class="p3-price-card-back">
                <button class="p3-form-back-btn p3-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p3-form-title">Join Elite</div>
                <form class="p3-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Elite plan has been received. Our team will contact you shortly.');">
                  <div class="p3-form-group">
                    <input type="text" class="p3-form-input" placeholder="Full Name" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="tel" class="p3-form-input" placeholder="Phone Number" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="email" class="p3-form-input" placeholder="Email Address" required />
                  </div>
                  <div class="p3-form-group">
                    <input type="text" class="p3-form-input" placeholder="Area Name / Location" required />
                  </div>
                  <button type="submit" class="p3-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════
           TESTIMONIALS
      ══════════════════════════════════ -->
      <section id="p3-testimonials" class="p3-testimonials">
        <div class="p3-test-header">
          <div class="p3-test-overline p3-reveal">Real Reviews</div>
          <div class="p3-test-title p3-reveal">What Our Members Say</div>
        </div>
        <div class="p3-test-grid">
          ${[
      { quote: '"FitFactory completely changed me. Lost 20 kg in 4 months and built a physique I never thought was possible. The coaches are world-class!"', name: 'Rahul D.', role: 'Lost 20 kg — 4 months' },
      { quote: '"The nutrition plans actually use Indian food — dal, rice, roti — and still gets incredible results. My energy levels are through the roof!"', name: 'Ananya S.', role: 'Body Recomp — 3 months' },
      { quote: '"Best gym investment I ever made. The Pro membership gives you everything. Trainers always push you beyond your limits in the best way."', name: 'Karthik M.', role: 'Muscle Gain — 6 months' },
    ].map(t => `
            <div class="p3-test-card p3-reveal">
              <div class="p3-test-stars">★★★★★</div>
              <p class="p3-test-quote">${t.quote}</p>
              <div class="p3-test-person">
                <img src="${avatarImg}" class="p3-test-avatar" alt="${t.name}" />
                <div>
                  <div class="p3-test-name">${t.name}</div>
                  <div class="p3-test-role">${t.role}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ══════════════════════════════════
           CTA BAND
      ══════════════════════════════════ -->
      <div class="p3-cta-band">
        <div class="p3-cta-text">
          <h2>Ready to <span>Transform</span><br/>Your Body?</h2>
          <p>Start with a free trial today — no credit card required.</p>
        </div>
        <div class="p3-cta-actions">
          <button class="p3-cta-primary" onclick="document.querySelector('#p3-pricing').scrollIntoView({behavior:'smooth'})">
            Get Free Trial
          </button>
          <button class="p3-cta-secondary" onclick="document.querySelector('#p3-classes').scrollIntoView({behavior:'smooth'})">
            Browse Classes
          </button>
        </div>
      </div>

      <!-- ══════════════════════════════════
           FOOTER
      ══════════════════════════════════ -->
      <footer id="p3-contact" class="p3-footer">
        <div class="p3-footer-top">
          <div>
            <div class="p3-footer-logo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              FITFACTORY
            </div>
            <div class="p3-footer-tagline">
              India's premium gym experience. Hard training, real results, elite coaches. Built for those who are serious.
            </div>
          </div>
          <div class="p3-footer-col">
            <h4>Quick Links</h4>
            <a href="#p3-hero">Home</a>
            <a href="#p3-story">About Us</a>
            <a href="#p3-classes">Classes</a>
            <a href="#p3-trainers">Trainers</a>
          </div>
          <div class="p3-footer-col">
            <h4>Programs</h4>
            <a href="#p3-classes">Cardio HIIT</a>
            <a href="#p3-classes">Body Building</a>
            <a href="#p3-classes">Yoga</a>
            <a href="#p3-classes">Boxing</a>
          </div>
          <div class="p3-footer-col">
            <h4>Contact</h4>
            <a href="#">Mumbai, Maharashtra</a>
            <a href="#">+91 98765 43210</a>
            <a href="#">hello@fitfactory.in</a>
            <a href="#">Open: 5 AM – 12 AM</a>
          </div>
        </div>
        <div class="p3-footer-bottom">
          © 2026 <span>FitFactory</span> India. All rights reserved. Built for Champions.
        </div>
      </footer>

      <!-- Video Modal Popup -->
      <div class="p3-video-modal" id="p3-video-modal">
        <div class="p3-video-modal-content">
          <button class="p3-video-modal-close" id="p3-video-modal-close">&times;</button>
          <iframe 
            src="https://www.instagram.com/reel/DQRu5h8Epi5/embed/" 
            title="FitFactory Story Video" 
            allowtransparency="true" 
            allow="encrypted-media"
            frameborder="0" 
            scrolling="no">
          </iframe>
        </div>
      </div>

    </div>
  `;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easeCinematic = 'cubic-bezier(0.16, 1, 0.3, 1)';

  // ── 1. NAVBAR TRANSPARENT TO BLURRED SCROLL ──
  const nav = container.querySelector('.p3-nav');
  if (nav && !prefersReducedMotion) {
    nav.animate([
      { transform: 'translate3d(0, -40px, 0)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0)', opacity: 1 }
    ], { duration: 800, easing: easeCinematic, fill: 'forwards' });
  }

  const handleNavScroll = () => {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ── 2. PAGE LOAD HERO SEQUENCING ──
  if (!prefersReducedMotion) {
    // Social icons staggered slide from left
    const socialLinks = container.querySelectorAll('.p3-social-link');
    socialLinks.forEach((icon, i) => {
      icon.animate([
        { transform: 'translate3d(-30px, 0, 0)', opacity: 0 },
        { transform: 'translate3d(0, 0, 0)', opacity: 1 }
      ], { duration: 750, delay: 180 + i * 90, easing: easeCinematic, fill: 'forwards' });
    });

    // Gold text slides from left
    const goldTitle = container.querySelector('.p3-hero-title .gold');
    if (goldTitle) {
      goldTitle.animate([
        { transform: 'translate3d(-60px, 0, 0)', opacity: 0 },
        { transform: 'translate3d(0, 0, 0)', opacity: 1 }
      ], { duration: 950, delay: 100, easing: easeCinematic, fill: 'forwards' });
    }

    // White text slides from right (slight overlap)
    const whiteTitle = container.querySelector('.p3-hero-title .white');
    if (whiteTitle) {
      whiteTitle.animate([
        { transform: 'translate3d(60px, 0, 0)', opacity: 0 },
        { transform: 'translate3d(0, 0, 0)', opacity: 1 }
      ], { duration: 950, delay: 240, easing: easeCinematic, fill: 'forwards' });
    }

    // Foreground athlete (scale 0.92 -> 1, opacity 0 -> 1, y: 30 -> 0) with -50% centering preserved
    const athleteFg = container.querySelector('.p3-hero-fg');
    if (athleteFg) {
      athleteFg.animate([
        { transform: 'translate3d(-50%, 30px, 0) scale(0.92)', opacity: 0 },
        { transform: 'translate3d(-50%, 0, 0) scale(1)', opacity: 1 }
      ], { duration: 1050, delay: 150, easing: easeCinematic, fill: 'forwards' });
    }

    // Know More button (fade in after hero + slight scale)
    const heroBtn = container.querySelector('.p3-hero-btn');
    if (heroBtn) {
      heroBtn.animate([
        { transform: 'scale(0.9) translate3d(0, 10px, 0)', opacity: 0 },
        { transform: 'scale(1) translate3d(0, 0, 0)', opacity: 1 }
      ], { duration: 750, delay: 750, easing: easeCinematic, fill: 'forwards' });
    }
  }

  // ── 3. PARALLAX & MOUSE TRACKING ──
  const heroSection = container.querySelector('#p3-hero');
  const athleteFgEl = container.querySelector('.p3-hero-fg');
  const heroTitleEl = container.querySelector('.p3-hero-title');
  const heroBgEl = container.querySelector('.p3-hero-bg');

  if (heroSection && !prefersReducedMotion) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      if (athleteFgEl) {
        athleteFgEl.style.transform = `translate3d(calc(-50% + ${x * 16}px), ${y * 16}px, 0)`;
        athleteFgEl.style.transition = 'transform 0.15s ease-out';
      }
      if (heroTitleEl) {
        heroTitleEl.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;
        heroTitleEl.style.transition = 'transform 0.15s ease-out';
      }
      if (heroBgEl) {
        heroBgEl.style.transform = `translate3d(${x * -6}px, ${y * -6}px, 0)`;
        heroBgEl.style.transition = 'transform 0.15s ease-out';
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      if (athleteFgEl) athleteFgEl.style.transform = 'translate3d(-50%, 0, 0)';
      if (heroTitleEl) heroTitleEl.style.transform = 'translate3d(0, 0, 0)';
      if (heroBgEl) heroBgEl.style.transform = 'translate3d(0, 0, 0)';
    });
  }

  // ── 4. SCROLL ANIMATIONS (viewport with once: true) ──
  const scrollAnimObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      scrollAnimObs.unobserve(el); // once: true

      if (prefersReducedMotion) {
        el.style.opacity = '1';
        return;
      }

      // Story Section: Left image x -80, Right x 80
      if (el.classList.contains('p3-story-left')) {
        el.animate([
          { transform: 'translate3d(-80px, 0, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 900, easing: easeCinematic, fill: 'forwards' });
      }
      else if (el.classList.contains('p3-story-right')) {
        el.animate([
          { transform: 'translate3d(80px, 0, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 900, easing: easeCinematic, fill: 'forwards' });
      }
      // Athlete photo fade-in when section visits
      else if (el.classList.contains('p3-photo-fade')) {
        el.animate([
          { transform: 'scale(0.92) translate3d(30px, 0, 0)', opacity: 0 },
          { transform: 'scale(1) translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 1100, easing: easeCinematic, fill: 'forwards' });
      }
      // Google Map location reveal when section visits
      else if (el.classList.contains('p3-map-reveal')) {
        el.animate([
          { transform: 'translate3d(-40px, 0, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 950, easing: easeCinematic, fill: 'forwards' });
      }
      // Feature items staggered y 30
      else if (el.classList.contains('p3-feature')) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        el.animate([
          { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 800, delay: index * 100, easing: easeCinematic, fill: 'forwards' });
      }
      // Classes cards staggered y 40, rotateX 5deg
      else if (el.classList.contains('p3-class-card')) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        el.animate([
          { transform: 'perspective(800px) rotateX(5deg) translate3d(0, 40px, 0)', opacity: 0 },
          { transform: 'perspective(800px) rotateX(0deg) translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 850, delay: index * 120, easing: easeCinematic, fill: 'forwards' });
      }
      // Trainer cards staggered scale
      else if (el.classList.contains('p3-trainer-card')) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        el.animate([
          { transform: 'scale(0.9) translate3d(0, 20px, 0)', opacity: 0 },
          { transform: 'scale(1) translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 800, delay: index * 100, easing: easeCinematic, fill: 'forwards' });
      }
      // Pricing cards rise from bottom y 50, middle card slightly delayed
      // Pricing cards rise from bottom y 50
      else if (el.classList.contains('p3-price-card-flip-wrap')) {
        const isMiddle = el.classList.contains('popular');
        el.animate([
          { transform: 'translate3d(0, 50px, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 900, delay: isMiddle ? 180 : 0, easing: easeCinematic, fill: 'forwards' });
      }
      // Testimonials staggered fade
      else if (el.classList.contains('p3-test-card')) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        el.animate([
          { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 850, delay: index * 120, easing: easeCinematic, fill: 'forwards' });
      }
      // Footer fade y 50
      else if (el.classList.contains('p3-footer')) {
        el.animate([
          { transform: 'translate3d(0, 50px, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 900, easing: easeCinematic, fill: 'forwards' });
      }
    });
  }, { threshold: 0.12 });

  // Attach elements to scroll observer
  container.querySelectorAll(`
    .p3-story-left, .p3-story-right, .p3-photo-fade, .p3-map-reveal,
    .p3-feature, .p3-class-card, .p3-trainer-card,
    .p3-price-card-flip-wrap, .p3-test-card, .p3-footer
  `).forEach(el => {
    el.style.opacity = '0';
    scrollAnimObs.observe(el);
  });

  // ── 5. PRICING CARD 3D FLIP CLICK HANDLERS ──
  container.querySelectorAll('.p3-flip-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.p3-price-card-flip-wrap');
      if (wrap) wrap.classList.add('flipped');
    });
  });

  container.querySelectorAll('.p3-flip-back-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.p3-price-card-flip-wrap');
      if (wrap) wrap.classList.remove('flipped');
    });
  });

  // ── Video Modal Handlers ──
  const modal = container.querySelector('#p3-video-modal');
  const playBtn = container.querySelector('#p3-play-story');
  const closeBtn = container.querySelector('#p3-video-modal-close');

  const openModal = () => { if (modal) modal.classList.add('active'); };
  const closeModal = () => { if (modal) modal.classList.remove('active'); };

  if (playBtn) playBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // ── 6. INITIALIZE THREE.JS 3D WEBGL HERO ──
  initThreeHero(container);
}

// ────────────────────────────────────────────────────────────
// THREE.JS 3D WEBGL INTERACTIVE ENGINE (Apple × Awwwards Style)
// ────────────────────────────────────────────────────────────
function initThreeHero(container) {
  const canvas = container.querySelector('#p3-3d-canvas');
  if (!canvas) return;

  const parent = canvas.parentElement;
  const width = parent.clientWidth || window.innerWidth;
  const height = parent.clientHeight || window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 7);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height, false);

  // ── Lights ──
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambientLight);

  const pinkLight = new THREE.PointLight(0xff1493, 7, 25);
  pinkLight.position.set(-4, 3, 4);
  scene.add(pinkLight);

  const cyanLight = new THREE.PointLight(0x00f0ff, 6, 25);
  cyanLight.position.set(4, -3, 4);
  scene.add(cyanLight);

  // Mouse Spotlight
  const mouseSpotlight = new THREE.SpotLight(0xffffff, 5, 20, Math.PI / 6, 0.5);
  mouseSpotlight.position.set(0, 0, 8);
  scene.add(mouseSpotlight);

  // ── Main 3D Group ──
  const group = new THREE.Group();
  scene.add(group);

  // ── 2,500 Volumetric Floating Dust Particles ──
  const pCount = 2500;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount * 3);
  const pColors = new Float32Array(pCount * 3);

  const colorPink = new THREE.Color(0xff1493);
  const colorCyan = new THREE.Color(0x00f0ff);
  const colorWhite = new THREE.Color(0xffffff);

  for (let i = 0; i < pCount; i++) {
    const radius = 2.0 + Math.random() * 3.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    pPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    pPos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    pPos[i * 3 + 2] = radius * Math.cos(phi);

    const rand = Math.random();
    const mixedColor = rand > 0.6 ? colorPink : (rand > 0.3 ? colorCyan : colorWhite);
    pColors[i * 3] = mixedColor.r;
    pColors[i * 3 + 1] = mixedColor.g;
    pColors[i * 3 + 2] = mixedColor.b;
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

  const pMat = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const pSystem = new THREE.Points(pGeo, pMat);
  group.add(pSystem);

  // ── Interactive Mouse Spotlight & Camera Dolly ──
  let mouseX = 0, mouseY = 0;
  let scrollY = 0;

  const heroSec = container.querySelector('#p3-hero');
  if (heroSec) {
    heroSec.addEventListener('mousemove', (e) => {
      const rect = heroSec.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      mouseSpotlight.position.x = mouseX * 4;
      mouseSpotlight.position.y = -mouseY * 4;
    });
  }

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  }, { passive: true });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Smooth 3D group rotation
    group.rotation.y = elapsedTime * 0.45;
    group.rotation.x = Math.sin(elapsedTime * 0.5) * 0.15;

    // Particle swirl
    pSystem.rotation.y = -elapsedTime * 0.18;

    // Scroll-driven camera dolly
    camera.position.z = 7 + (scrollY / 400);
    camera.position.y = -(scrollY / 600);

    // Mouse tilt lerp
    group.rotation.y += mouseX * 0.03;
    group.rotation.x += mouseY * 0.03;

    renderer.render(scene, camera);
  }
  animate();

  function onResize() {
    if (!parent) return;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  window.addEventListener('resize', onResize);
}
