import './page2.css';

export function renderPage2(container) {
  container.innerHTML = `
    <div class="p2">

      <!-- ══════════════════════════════════
           NAVBAR
      ══════════════════════════════════ -->
      <nav class="p2-nav">
        <a href="#p2-hero" class="p2-logo">
          <span class="p2-logo-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
          </span>
          FitFlow
        </a>
        <div class="p2-nav-links">
          <a href="#p2-hero" class="active">Home</a>
          <a href="#p2-story">About</a>
          <a href="#p2-programs">Programs</a>
          <a href="#p2-location">Location</a>
          <a href="#p2-trainers">Trainers</a>
          <a href="#p2-pricing">Pricing</a>
          <a href="#p2-testimonials">Reviews</a>
        </div>
        <button class="p2-nav-cta" onclick="document.querySelector('#p2-pricing').scrollIntoView({behavior:'smooth'})">
          Start Free Trial
        </button>
      </nav>

      <!-- ══════════════════════════════════
           HERO SECTION
      ══════════════════════════════════ -->
      <section id="p2-hero" class="p2-hero">
        <div class="p2-hero-mesh-bg"></div>

        <!-- Floating Particles Canvas Layer -->
        <canvas id="p2-particles-canvas" class="p2-particles-canvas"></canvas>

        <!-- Glowing Neon Orbs -->
        <div class="p2-orb p2-orb-1"></div>
        <div class="p2-orb p2-orb-2"></div>

        <div class="p2-hero-content">
          <!-- Left Column: Headline & CTA -->
          <div class="p2-hero-left">
            <div class="p2-badge">
              <span class="p2-badge-dot"></span>
              Live Coaching & Dynamic Fitness v2.0
            </div>
            <h1 class="p2-hero-title">
              <span class="p2-gradient-text">STRONGER.</span><br />
              <span class="p2-white-text">HEALTHIER.</span><br />
              <span class="p2-accent-text">YOU.</span>
            </h1>
            <p class="p2-hero-subtext">
              Transform your body and mindset with FitFlow elite online and in-person coaching. 
              Personalized training systems, Indian nutrition plans, and 24/7 dedicated support.
            </p>
            <div class="p2-hero-actions">
              <button class="p2-btn-primary" onclick="document.querySelector('#p2-pricing').scrollIntoView({behavior:'smooth'})">
                Start Your Journey
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <button class="p2-btn-secondary" id="p2-hero-video-trigger">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                Watch Preview
              </button>
            </div>
          </div>

          <!-- Right Column: Interactive Video Preview & Rating Badge -->
          <div class="p2-hero-right">
            <div class="p2-video-card" id="p2-video-card">
              <div class="p2-video-card-header">
                <span>Stronger Every Day: Episode 02</span>
                <span class="p2-live-tag">LIVE</span>
              </div>
              <div class="p2-video-thumb-wrap">
                <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" alt="Workout Preview" class="p2-video-thumb-img" />
                <button class="p2-play-icon-btn" id="p2-main-play-btn" aria-label="Play Video">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                </button>
              </div>
            </div>

            <div class="p2-rating-card">
              <div class="p2-rating-avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="User 1" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="User 2" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="User 3" />
              </div>
              <div class="p2-rating-text">
                <div class="p2-rating-stars">★★★★★ <span>4.9 / 5.0</span></div>
                <div class="p2-rating-sub">Trusted by 5,000+ active members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════
           OUR STORY / ABOUT US
      ══════════════════════════════════ -->
      <section id="p2-story" class="p2-story">
        <div class="p2-story-left p2-reveal">
          <div class="p2-story-img-container">
            <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop" alt="FitFlow Coaching" class="p2-story-img" />
            <div class="p2-story-badge">
              <div class="p2-story-badge-num">98%</div>
              <div class="p2-story-badge-label">Success Rate</div>
            </div>
          </div>
        </div>

        <div class="p2-story-right p2-reveal">
          <div class="p2-overline">About FitFlow</div>
          <h2 class="p2-section-title">Science-Backed Training & Real Results</h2>
          <p class="p2-story-desc">
            FitFlow was established to revolutionize modern personal training. We fuse progressive overload science, 
            personalized Indian nutrition blueprints, and habit-tracking technology into one seamless experience.
          </p>
          <p class="p2-story-desc">
            Whether your goal is rapid fat loss, muscle hypertrophy, or athletic mobility, our elite certified coaches 
            guide you through every rep, session, and milestone.
          </p>
          <ul class="p2-story-list">
            <li>Customized Workout Schedules tailored to your lifestyle</li>
            <li>Macro-balanced Indian Meal Plans (Veg & Non-Veg)</li>
            <li>Weekly 1-on-1 Progress Audits & Form Correction</li>
          </ul>
          <button class="p2-btn-outline" onclick="document.querySelector('#p2-programs').scrollIntoView({behavior:'smooth'})">
            Discover Programs
          </button>
        </div>
      </section>

      <!-- ══════════════════════════════════
           PROGRAMS & CLASSES
      ══════════════════════════════════ -->
      <section id="p2-programs" class="p2-programs">
        <div class="p2-section-header p2-reveal">
          <div class="p2-overline">Tailored Programs</div>
          <h2 class="p2-section-title">Choose Your Training Focus</h2>
        </div>

        <div class="p2-programs-grid">
          <div class="p2-program-card p2-reveal">
            <div class="p2-program-img-wrap">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop" alt="Strength & Hypertrophy" />
              <span class="p2-program-tag">Strength</span>
            </div>
            <div class="p2-program-info">
              <h3 class="p2-program-title">Hypertrophy Strength</h3>
              <p class="p2-program-desc">Progressive overload barbell and dumbbell workouts designed to build muscle size and raw power.</p>
              <div class="p2-program-footer">
                <span class="p2-program-meta">4 Sessions / wk</span>
                <button class="p2-program-btn" onclick="document.querySelector('#p2-pricing').scrollIntoView({behavior:'smooth'})">Join Plan ➔</button>
              </div>
            </div>
          </div>

          <div class="p2-program-card p2-reveal">
            <div class="p2-program-img-wrap">
              <img src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop" alt="HIIT & Cardio" />
              <span class="p2-program-tag">Fat Loss</span>
            </div>
            <div class="p2-program-info">
              <h3 class="p2-program-title">HIIT & Athletic Burn</h3>
              <p class="p2-program-desc">High-intensity interval protocols combined with conditioning to torch calories and elevate stamina.</p>
              <div class="p2-program-footer">
                <span class="p2-program-meta">5 Sessions / wk</span>
                <button class="p2-program-btn" onclick="document.querySelector('#p2-pricing').scrollIntoView({behavior:'smooth'})">Join Plan ➔</button>
              </div>
            </div>
          </div>

          <div class="p2-program-card p2-reveal">
            <div class="p2-program-img-wrap">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop" alt="Yoga & Mobility" />
              <span class="p2-program-tag">Recovery</span>
            </div>
            <div class="p2-program-info">
              <h3 class="p2-program-title">Yoga & Mobility Flow</h3>
              <p class="p2-program-desc">Deep joint mobilization, flexibility enhancement, and breathwork for complete body recovery.</p>
              <div class="p2-program-footer">
                <span class="p2-program-meta">3 Sessions / wk</span>
                <button class="p2-program-btn" onclick="document.querySelector('#p2-pricing').scrollIntoView({behavior:'smooth'})">Join Plan ➔</button>
              </div>
            </div>
          </div>

          <div class="p2-program-card p2-reveal">
            <div class="p2-program-img-wrap">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop" alt="Nutrition System" />
              <span class="p2-program-tag">Nutrition</span>
            </div>
            <div class="p2-program-info">
              <h3 class="p2-program-title">Indian Meal Blueprint</h3>
              <p class="p2-program-desc">Custom macro-calculated nutrition plans using everyday Indian food (Dal, Rice, Roti, Paneer, Chicken).</p>
              <div class="p2-program-footer">
                <span class="p2-program-meta">Daily Tracking</span>
                <button class="p2-program-btn" onclick="document.querySelector('#p2-pricing').scrollIntoView({behavior:'smooth'})">Join Plan ➔</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════
           LOCATION & GOOGLE MAP SECTION
      ══════════════════════════════════ -->
      <section id="p2-location" class="p2-location">
        <div class="p2-location-overlay"></div>

        <!-- Left Column: Google Map Location Card -->
        <div class="p2-location-left p2-map-reveal">
          <div class="p2-overline">Studio Location & Contact</div>
          <h2 class="p2-section-title">Visit FitFlow Studio</h2>

          <div class="p2-map-card">
            <div class="p2-map-iframe-wrap">
              <iframe
                title="FitFlow Studio Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796347395029!2d72.83351931535783!3d19.061730987094985!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c83031e!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style="border:0; border-radius: 12px; filter: invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.9);"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            <div class="p2-map-details">
              <div class="p2-map-detail-item">
                <div class="p2-map-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div class="p2-map-label">Studio Address</div>
                  <div class="p2-map-val">FitFlow Flagship Studio, Bandra West, Mumbai</div>
                </div>
              </div>

              <div class="p2-map-detail-item">
                <div class="p2-map-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <div class="p2-map-label">Working Hours</div>
                  <div class="p2-map-val">Open 24/7 (Personal Coaching: 5 AM – 11 PM)</div>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com/?q=Bandra+West+Mumbai" target="_blank" rel="noopener noreferrer" class="p2-map-btn">
              <span>Open in Google Maps</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>

        <!-- Right Column: Depth Text & Athlete Visual -->
        <div class="p2-location-right">
          <div class="p2-location-big-text">
            <span class="p2-gold-span">ELEVATE YOUR</span><br />
            <span class="p2-white-span">TRAINING NOW</span>
          </div>
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" alt="Athlete Visual" class="p2-location-athlete-img p2-photo-fade" />
        </div>
      </section>

      <!-- ══════════════════════════════════
           TRAINERS & COACHES
      ══════════════════════════════════ -->
      <section id="p2-trainers" class="p2-trainers">
        <div class="p2-section-header p2-reveal">
          <div class="p2-overline">Expert Team</div>
          <h2 class="p2-section-title">Meet Your Coaches</h2>
        </div>

        <div class="p2-trainers-grid">
          ${[
            { name: 'Karan Malhotra', role: 'Head Strength Coach', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=500&auto=format&fit=crop' },
            { name: 'Anishka Roy', role: 'HIIT & Fat Loss Specialist', img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=500&auto=format&fit=crop' },
            { name: 'Rohan Verma', role: 'Mobility & Recovery Specialist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop' },
            { name: 'Dr. Sneha Kapoor', role: 'Head Sports Nutritionist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop' }
          ].map(coach => `
            <div class="p2-trainer-card p2-reveal">
              <div class="p2-trainer-img-wrap">
                <img src="${coach.img}" alt="${coach.name}" />
              </div>
              <div class="p2-trainer-info">
                <div class="p2-trainer-name">${coach.name}</div>
                <div class="p2-trainer-role">${coach.role}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ══════════════════════════════════
           PRICING WITH 3D CARD FLIP & FORM
      ══════════════════════════════════ -->
      <section id="p2-pricing" class="p2-pricing">
        <div class="p2-section-header p2-reveal">
          <div class="p2-overline">Membership Plans</div>
          <h2 class="p2-section-title">Choose Your Path</h2>
        </div>

        <div class="p2-pricing-grid">

          <!-- STARTER PLAN -->
          <div class="p2-price-card-flip-wrap p2-reveal">
            <div class="p2-price-card-inner">
              <div class="p2-price-card-front">
                <div class="p2-plan-name">Starter</div>
                <div class="p2-plan-price">₹1,499<sub>/mo</sub></div>
                <div class="p2-plan-period">Billed monthly</div>
                <ul class="p2-plan-features">
                  <li>Full Studio & App Access</li>
                  <li>Standard Workout Plans</li>
                  <li>Locker & Shower Access</li>
                  <li>Community Support Group</li>
                </ul>
                <button class="p2-plan-btn p2-flip-trigger" type="button">Join Now</button>
              </div>

              <div class="p2-price-card-back">
                <button class="p2-form-back-btn p2-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p2-form-title">Join Starter</div>
                <form class="p2-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Starter plan has been received. Our team will contact you shortly.');">
                  <div class="p2-form-group"><input type="text" class="p2-form-input" placeholder="Full Name" required /></div>
                  <div class="p2-form-group"><input type="tel" class="p2-form-input" placeholder="Phone Number" required /></div>
                  <div class="p2-form-group"><input type="email" class="p2-form-input" placeholder="Email Address" required /></div>
                  <div class="p2-form-group"><input type="text" class="p2-form-input" placeholder="Area Name / Location" required /></div>
                  <button type="submit" class="p2-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

          <!-- PRO PLAN -->
          <div class="p2-price-card-flip-wrap popular p2-reveal">
            <div class="p2-price-card-inner">
              <div class="p2-price-card-front popular">
                <div class="p2-popular-badge">Most Popular</div>
                <div class="p2-plan-name">Pro</div>
                <div class="p2-plan-price">₹2,999<sub>/mo</sub></div>
                <div class="p2-plan-period">Billed monthly</div>
                <ul class="p2-plan-features">
                  <li>Unlimited Studio Access</li>
                  <li>Personalized Indian Nutrition</li>
                  <li>Weekly 1-on-1 PT Consult</li>
                  <li>All Group HIIT & Yoga Classes</li>
                  <li>24/7 Direct Coach Chat</li>
                </ul>
                <button class="p2-plan-btn p2-flip-trigger" type="button">Join Now</button>
              </div>

              <div class="p2-price-card-back popular">
                <button class="p2-form-back-btn p2-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p2-form-title">Join Pro</div>
                <form class="p2-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Pro plan has been received. Our team will contact you shortly.');">
                  <div class="p2-form-group"><input type="text" class="p2-form-input" placeholder="Full Name" required /></div>
                  <div class="p2-form-group"><input type="tel" class="p2-form-input" placeholder="Phone Number" required /></div>
                  <div class="p2-form-group"><input type="email" class="p2-form-input" placeholder="Email Address" required /></div>
                  <div class="p2-form-group"><input type="text" class="p2-form-input" placeholder="Area Name / Location" required /></div>
                  <button type="submit" class="p2-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

          <!-- ELITE PLAN -->
          <div class="p2-price-card-flip-wrap p2-reveal">
            <div class="p2-price-card-inner">
              <div class="p2-price-card-front">
                <div class="p2-plan-name">Elite</div>
                <div class="p2-plan-price">₹5,999<sub>/mo</sub></div>
                <div class="p2-plan-period">Billed monthly</div>
                <ul class="p2-plan-features">
                  <li>VIP VIP Access & Locker</li>
                  <li>Dedicated Master Coach 3×/wk</li>
                  <li>Custom Supplement Blueprint</li>
                  <li>Unlimited Recovery Sessions</li>
                  <li>Priority App Support</li>
                </ul>
                <button class="p2-plan-btn p2-flip-trigger" type="button">Join Now</button>
              </div>

              <div class="p2-price-card-back">
                <button class="p2-form-back-btn p2-flip-back-trigger" type="button">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  Back
                </button>
                <div class="p2-form-title">Join Elite</div>
                <form class="p2-join-form" onsubmit="event.preventDefault(); alert('Thank you! Your request for Elite plan has been received. Our team will contact you shortly.');">
                  <div class="p2-form-group"><input type="text" class="p2-form-input" placeholder="Full Name" required /></div>
                  <div class="p2-form-group"><input type="tel" class="p2-form-input" placeholder="Phone Number" required /></div>
                  <div class="p2-form-group"><input type="email" class="p2-form-input" placeholder="Email Address" required /></div>
                  <div class="p2-form-group"><input type="text" class="p2-form-input" placeholder="Area Name / Location" required /></div>
                  <button type="submit" class="p2-form-submit-btn">Submit Request</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════
           TESTIMONIALS
      ══════════════════════════════════ -->
      <section id="p2-testimonials" class="p2-testimonials">
        <div class="p2-section-header p2-reveal">
          <div class="p2-overline">Real Stories</div>
          <h2 class="p2-section-title">What Our Members Say</h2>
        </div>

        <div class="p2-test-grid">
          ${[
            { quote: '"FitFlow transformed my routine. Lost 14 kg in 3 months while enjoying Indian food every day! The coaches are incredible."', name: 'Samantha M.', role: 'Fat Loss — 3 Months' },
            { quote: '"The strength programming is unmatched. Progressive overload tracking on the app made hitting my personal records effortless."', name: 'Vikram A.', role: 'Muscle Gain — 5 Months' },
            { quote: '"The studio environment, coaches, and recovery sessions are top tier. Best decision I made for my health!"', name: 'Neha Gupta', role: 'Body Recomp — 4 Months' }
          ].map(t => `
            <div class="p2-test-card p2-reveal">
              <div class="p2-test-stars">★★★★★</div>
              <p class="p2-test-quote">${t.quote}</p>
              <div class="p2-test-person">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" class="p2-test-avatar" alt="${t.name}" />
                <div>
                  <div class="p2-test-name">${t.name}</div>
                  <div class="p2-test-role">${t.role}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ══════════════════════════════════
           CTA BANNER
      ══════════════════════════════════ -->
      <div class="p2-cta-band">
        <div class="p2-cta-text">
          <h2>Ready to <span>Transform</span> Your Fitness?</h2>
          <p>Start your 7-day free trial today — no credit card required.</p>
        </div>
        <div class="p2-cta-actions">
          <button class="p2-btn-primary" onclick="document.querySelector('#p2-pricing').scrollIntoView({behavior:'smooth'})">
            Start Free Trial
          </button>
        </div>
      </div>

      <!-- ══════════════════════════════════
           FOOTER
      ══════════════════════════════════ -->
      <footer id="p2-footer" class="p2-footer">
        <div class="p2-footer-top">
          <div>
            <div class="p2-footer-logo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eb4d78" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              FitFlow
            </div>
            <p class="p2-footer-tagline">
              Premium holistic fitness coaching, science-backed strength programming, and personalized nutrition.
            </p>
          </div>
          <div class="p2-footer-col">
            <h4>Quick Links</h4>
            <a href="#p2-hero">Home</a>
            <a href="#p2-story">About Us</a>
            <a href="#p2-programs">Programs</a>
            <a href="#p2-trainers">Coaches</a>
          </div>
          <div class="p2-footer-col">
            <h4>Programs</h4>
            <a href="#p2-programs">Hypertrophy</a>
            <a href="#p2-programs">HIIT Burn</a>
            <a href="#p2-programs">Yoga Flow</a>
            <a href="#p2-programs">Nutrition Blueprint</a>
          </div>
          <div class="p2-footer-col">
            <h4>Contact Studio</h4>
            <a href="#">Bandra West, Mumbai</a>
            <a href="#">+91 98765 00000</a>
            <a href="#">hello@fitflow.in</a>
            <a href="#">Open 24/7</a>
          </div>
        </div>
        <div class="p2-footer-bottom">
          © 2026 <span>FitFlow</span>. All rights reserved. Built for Champions.
        </div>
      </footer>

      <!-- Video Modal Popup -->
      <div class="p2-video-modal" id="p2-video-modal">
        <div class="p2-video-modal-content">
          <button class="p2-video-modal-close" id="p2-video-modal-close">&times;</button>
          <iframe 
            src="https://www.youtube.com/embed/gC_L9qAHVJ8?autoplay=1" 
            title="FitFlow Workout Preview" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>

    </div>
  `;

  // ── Navbar Scroll Blur Effect ──
  const nav = container.querySelector('.p2-nav');
  const handleScroll = () => {
    if (!nav) return;
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── 3D Card Flip Listeners for Pricing ──
  container.querySelectorAll('.p2-flip-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.p2-price-card-flip-wrap');
      if (wrap) wrap.classList.add('flipped');
    });
  });

  container.querySelectorAll('.p2-flip-back-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.p2-price-card-flip-wrap');
      if (wrap) wrap.classList.remove('flipped');
    });
  });

  // ── Video Modal Handlers ──
  const modal = container.querySelector('#p2-video-modal');
  const openBtn1 = container.querySelector('#p2-hero-video-trigger');
  const openBtn2 = container.querySelector('#p2-main-play-btn');
  const closeBtn = container.querySelector('#p2-video-modal-close');

  const openModal = () => { if (modal) modal.classList.add('active'); };
  const closeModal = () => { if (modal) modal.classList.remove('active'); };

  if (openBtn1) openBtn1.addEventListener('click', openModal);
  if (openBtn2) openBtn2.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // ── Intersection Observer Scroll Animations ──
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easeCinematic = 'cubic-bezier(0.16, 1, 0.3, 1)';

  const scrollObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      scrollObs.unobserve(el);

      if (prefersReducedMotion) {
        el.style.opacity = '1';
        return;
      }

      if (el.classList.contains('p2-photo-fade')) {
        el.animate([
          { transform: 'scale(0.94) translate3d(20px, 0, 0)', opacity: 0 },
          { transform: 'scale(1) translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 1000, easing: easeCinematic, fill: 'forwards' });
      }
      else if (el.classList.contains('p2-map-reveal')) {
        el.animate([
          { transform: 'translate3d(-30px, 0, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 900, easing: easeCinematic, fill: 'forwards' });
      }
      else {
        el.animate([
          { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
          { transform: 'translate3d(0, 0, 0)', opacity: 1 }
        ], { duration: 850, easing: easeCinematic, fill: 'forwards' });
      }
    });
  }, { threshold: 0.12 });

  container.querySelectorAll(`
    .p2-reveal, .p2-photo-fade, .p2-map-reveal
  `).forEach(el => {
    el.style.opacity = '0';
    scrollObs.observe(el);
  });

  // ── Hero Title 3D Mouse Parallax Tilt ──
  const heroSec = container.querySelector('#p2-hero');
  const heroTitle = container.querySelector('.p2-hero-title');
  if (heroSec && heroTitle && !prefersReducedMotion) {
    heroSec.addEventListener('mousemove', (e) => {
      const rect = heroSec.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      heroTitle.style.transform = `translate3d(${x * 14}px, ${y * 14}px, 0) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
      heroTitle.style.transition = 'transform 0.1s ease-out';
    });
    heroSec.addEventListener('mouseleave', () => {
      heroTitle.style.transform = 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
      heroTitle.style.transition = 'transform 0.5s ease-out';
    });
  }

  // ── Initialize Floating Background Particles ──
  initHeroParticles(container);
}

// ────────────────────────────────────────────────────────────
// VOLUMETRIC FLOATING DUST PARTICLES ENGINE
// ────────────────────────────────────────────────────────────
function initHeroParticles(container) {
  const canvas = container.querySelector('#p2-particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement.clientHeight || window.innerHeight);

  const colors = ['rgba(235, 77, 120, 0.85)', 'rgba(34, 185, 204, 0.85)', 'rgba(255, 255, 255, 0.9)', 'rgba(138, 43, 226, 0.7)'];
  const particles = [];
  const particleCount = Math.min(Math.floor(width / 11), 120);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.5 - 0.2,
      alpha: Math.random() * 0.7 + 0.3,
      pulseSpeed: Math.random() * 0.02 + 0.01
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0.15, Math.min(1, p.alpha));
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();

  function onResize() {
    if (!canvas || !canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }

  window.addEventListener('resize', onResize);
}