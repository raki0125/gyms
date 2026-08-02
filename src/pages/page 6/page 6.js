import './page 6.css';

// ── Unsplash Images for Gym Zones ──
const zoneImages = {
  kinetic: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  metabolic: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  recovery: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
  fuel: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80'
};

// ── Trainers data ──
const trainers = [
  { name: 'Coach Arjun', role: 'Elite Biomechanics & Compound Power', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80', tag: 'Power' },
  { name: 'Coach Tara', role: 'Metabolic & Cardiorespiratory Performance', img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&q=80', tag: 'Stamina' },
  { name: 'Coach Kabir', role: 'Olympic Lifting & Kinetic Velocity', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', tag: 'Speed' }
];

// ── Weekly Schedule Data ──
const scheduleData = {
  Mon: [
    { name: 'Mechanical Tension Hypertrophy', time: '06:30 AM - 08:00 AM', trainer: 'Coach Arjun', capacity: 15, booked: 12 },
    { name: 'Apex VO2 Max Shred', time: '09:00 AM - 10:00 AM', trainer: 'Coach Tara', capacity: 20, booked: 8 },
    { name: 'Kinetic Barbell Power', time: '05:30 PM - 07:00 PM', trainer: 'Coach Arjun', capacity: 12, booked: 11 }
  ],
  Tue: [
    { name: 'Olympic Pulls & Blocks', time: '07:00 AM - 08:30 AM', trainer: 'Coach Kabir', capacity: 10, booked: 9 },
    { name: 'Zone 2 Enduro Protocol', time: '11:00 AM - 12:00 PM', trainer: 'Coach Tara', capacity: 25, booked: 14 },
    { name: 'Bio-Mechanic Core Alignment', time: '06:00 PM - 07:00 PM', trainer: 'Coach Arjun', capacity: 18, booked: 12 }
  ],
  Wed: [
    { name: 'Posterior Chain Overload', time: '06:30 AM - 08:00 AM', trainer: 'Coach Arjun', capacity: 15, booked: 14 },
    { name: 'Apex VO2 Max Shred', time: '09:00 AM - 10:00 AM', trainer: 'Coach Tara', capacity: 20, booked: 19 },
    { name: 'Velocity Launch Prep', time: '05:30 PM - 06:45 PM', trainer: 'Coach Kabir', capacity: 12, booked: 5 }
  ],
  Thu: [
    { name: 'Olympic Squats & Drives', time: '07:00 AM - 08:30 AM', trainer: 'Coach Kabir', capacity: 10, booked: 8 },
    { name: 'Zone 2 Enduro Protocol', time: '11:00 AM - 12:00 PM', trainer: 'Coach Tara', capacity: 25, booked: 10 },
    { name: 'Myofascial Release & Restoration', time: '06:00 PM - 07:30 PM', trainer: 'Coach Tara', capacity: 20, booked: 18 }
  ],
  Fri: [
    { name: 'Anterior Push & Hypertrophy', time: '06:30 AM - 08:00 AM', trainer: 'Coach Arjun', capacity: 15, booked: 15 },
    { name: 'Kinetic Barbell Power', time: '05:30 PM - 07:00 PM', trainer: 'Coach Arjun', capacity: 12, booked: 10 },
    { name: 'Apex VO2 Max Shred', time: '07:30 PM - 08:30 PM', trainer: 'Coach Tara', capacity: 20, booked: 13 }
  ],
  Sat: [
    { name: 'Olympic Total Weightlifting', time: '09:00 AM - 10:30 AM', trainer: 'Coach Kabir', capacity: 10, booked: 9 },
    { name: 'Apex Weekend Warrior HIIT', time: '11:30 AM - 01:00 PM', trainer: 'Coach Tara', capacity: 30, booked: 27 }
  ],
  Sun: [
    { name: 'Active Recovery & Cryo-Pool Lounge', time: '10:00 AM - 12:00 PM', trainer: 'Coach Tara', capacity: 25, booked: 12 },
    { name: 'Biomechanics Form Audit Workshop', time: '04:00 PM - 05:30 PM', trainer: 'Coach Arjun', capacity: 15, booked: 8 }
  ]
};

export function renderPage6(container) {
  container.innerHTML = `
    <div class="p6">
      
      <!-- ══════════════════════════════════ NAVIGATION ══════════════════════════════════ -->
      <nav class="p6-nav">
        <div class="p6-nav-container">
          <a href="#p6-hero" class="p6-logo">
            <span class="p6-logo-icon">▲</span>
            APEX<span>LAB</span>
          </a>
          <div class="p6-nav-links">
            <a href="#p6-tour">Virtual Tour</a>
            <a href="#p6-scheduler">Classes</a>
            <a href="#p6-macros">Biometric Engine</a>
            <a href="#p6-customizer">Memberships</a>
            <a href="#p6-trainers">Coaches</a>
          </div>
          <div class="p6-route-pills">
            <a href="/page/1" data-route="page1">PAGE 1</a>
            <a href="/page/2" data-route="page2">PAGE 2</a>
            <a href="/page/3" data-route="page3">PAGE 3</a>
            <a href="/page/4" data-route="page4">PAGE 4</a>
            <a href="/page/5" data-route="page5">PAGE 5</a>
            <a href="/page/6" data-route="page6" class="active">PAGE 6</a>
          </div>
          <button class="p6-nav-cta" id="p6-nav-join-btn">Lock Spot</button>
        </div>
      </nav>

      <!-- ══════════════════════════════════ HERO SECTION ══════════════════════════════════ -->
      <section id="p6-hero" class="p6-hero">
        <div class="p6-hero-bg-grid"></div>
        <div class="p6-hero-glow-1"></div>
        <div class="p6-hero-glow-2"></div>
        
        <div class="p6-hero-container">
          <div class="p6-hero-text">
            <div class="p6-hero-badge animate-pulse-border">
              <span class="p6-badge-dot"></span>
              APEX BIO-INTELLIGENCE PROTOCOLS v6.0
            </div>
            <h1 class="p6-hero-title">
              PRECISION <br/>
              ENGINEERED <br/>
              <span class="p6-accent-text">ATHLETICISM.</span>
            </h1>
            <p class="p6-hero-sub">
              Apex Strength Laboratory integrates state-of-the-art biomechanics, biometric tracking, and periodized athletic programming. Train in an environment where human potential is analyzed and optimized.
            </p>
            <div class="p6-hero-actions">
              <button class="p6-btn p6-btn-primary" id="p6-hero-cta-plan">Configure Membership</button>
              <button class="p6-btn p6-btn-secondary" id="p6-hero-cta-tour">Explore Tour ↓</button>
            </div>
          </div>

          <!-- Interactive Biometric HUD Simulation Box -->
          <div class="p6-hero-hud-box">
            <div class="p6-hud-header">
              <div class="p6-hud-title">
                <span class="p6-hud-green-dot"></span>
                ACTIVE BIOMETRIC MONITOR
              </div>
              <div class="p6-hud-sync-tag">TELEMETRY SYNCED</div>
            </div>
            <div class="p6-hud-main">
              
              <!-- Realtime Canvas Heartrate -->
              <div class="p6-hud-canvas-wrap">
                <canvas id="p6-ecg-canvas" class="p6-ecg-canvas"></canvas>
                <div class="p6-hud-grid-overlay"></div>
                <div class="p6-hud-readout" id="p6-hud-heartrate-val">76 <span>BPM</span></div>
              </div>

              <!-- Metrics panels grid -->
              <div class="p6-hud-metrics-grid">
                <div class="p6-hud-metric-card" id="p6-hud-card-velocity">
                  <div class="p6-metric-lbl">KINETIC VELOCITY</div>
                  <div class="p6-metric-val" id="p6-val-velocity">1.24 <span>m/s</span></div>
                  <div class="p6-metric-bar"><div class="p6-metric-bar-fill" style="width: 72%;"></div></div>
                </div>
                <div class="p6-hud-metric-card" id="p6-hud-card-tension">
                  <div class="p6-metric-lbl">MECHANICAL TENSION</div>
                  <div class="p6-metric-val" id="p6-val-tension">840 <span>kgf</span></div>
                  <div class="p6-metric-bar"><div class="p6-metric-bar-fill" style="width: 84%; background: var(--p6-volt);"></div></div>
                </div>
                <div class="p6-hud-metric-card" id="p6-hud-card-aerobic">
                  <div class="p6-metric-lbl">AEROBIC EFFICIENCY</div>
                  <div class="p6-metric-val" id="p6-val-aerobic">94.2 <span>%</span></div>
                  <div class="p6-metric-bar"><div class="p6-metric-bar-fill" style="width: 94%;"></div></div>
                </div>
                <div class="p6-hud-metric-card" id="p6-hud-card-recovery">
                  <div class="p6-metric-lbl">NEURAL RECOVERY</div>
                  <div class="p6-metric-val" id="p6-val-recovery">91 <span>%</span></div>
                  <div class="p6-metric-bar"><div class="p6-metric-bar-fill" style="width: 91%;"></div></div>
                </div>
              </div>

              <!-- Interactive scanning bar -->
              <div class="p6-hud-scanning-line"></div>
              
              <!-- Hover instructions -->
              <div class="p6-hud-footer-hint">
                [ HOVER OVER HUD PANELS TO MANUALLY INJECT OVERLOAD PARAMETERS ]
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════ GYM VIRTUAL TOUR SECTION ══════════════════════════════════ -->
      <section id="p6-tour" class="p6-tour p6-reveal">
        <div class="p6-section-header">
          <div class="p6-section-tag">VIRTUAL ENVIRONMENT TOUR</div>
          <h2 class="p6-section-title">THE APEX LABS FACILITY</h2>
          <p class="p6-section-desc">Explore the specialized zones of our commercial strength center, custom-engineered for raw power development, cardiovascular scaling, and neurological restoration.</p>
        </div>

        <div class="p6-tour-grid">
          <!-- Zone Selector Sidebar -->
          <div class="p6-tour-selector">
            <button class="p6-tour-tab active" data-zone="kinetic">
              <span class="p6-tab-num">01</span>
              <div>
                <div class="p6-tab-title">Kinetic Arena</div>
                <div class="p6-tab-sub">Heavy compounds & strength platforms</div>
              </div>
            </button>
            <button class="p6-tour-tab" data-zone="metabolic">
              <span class="p6-tab-num">02</span>
              <div>
                <div class="p6-tab-title">Metabolic Suite</div>
                <div class="p6-tab-sub">VO2 Max scaling & athletic conditioning</div>
              </div>
            </button>
            <button class="p6-tour-tab" data-zone="recovery">
              <span class="p6-tab-num">03</span>
              <div>
                <div class="p6-tab-title">Bio-Recovery Lab</div>
                <div class="p6-tab-sub">Cryotherapy, infrared, & sound therapy</div>
              </div>
            </button>
            <button class="p6-tour-tab" data-zone="fuel">
              <span class="p6-tab-num">04</span>
              <div>
                <div class="p6-tab-title">Bio-Fuel Station</div>
                <div class="p6-tab-sub">Cold-pressed macros & nutritional lab</div>
              </div>
            </button>
          </div>

          <!-- Zone Detail Display Panel -->
          <div class="p6-tour-display">
            <div class="p6-tour-image-wrap">
              <img id="p6-tour-img" src="${zoneImages.kinetic}" alt="Apex Lab Kinetic Arena" class="p6-tour-img" />
              <div class="p6-tour-hud-tag" id="p6-tour-hud-label">ZONE 01 // KINETIC ARENA // STRENGTH PLATFORMS</div>
            </div>
            
            <div class="p6-tour-details-card">
              <h3 class="p6-tour-detail-title" id="p6-tour-title">Kinetic Arena</h3>
              <p class="p6-tour-detail-text" id="p6-tour-text">
                Equipped with custom knurled barbells, Eleiko competition plates, Hammer Strength weight stacks, and premium shock-absorbent platforms. Engineered specifically for maximal muscular tension, heavy squat patterns, deadlifts, and structural hypertrophy.
              </p>
              <div class="p6-tour-specs">
                <div class="p6-spec-item">
                  <span class="p6-spec-icon">⚡</span>
                  <div>
                    <div class="p6-spec-lbl">Eleiko Competition Kits</div>
                    <div class="p6-spec-val">IWF & IPF certified platforms</div>
                  </div>
                </div>
                <div class="p6-spec-item">
                  <span class="p6-spec-icon">⚡</span>
                  <div>
                    <div class="p6-spec-lbl">Custom Barbell Shafts</div>
                    <div class="p6-spec-val">Aggressive 1.2mm knurling profiles</div>
                  </div>
                </div>
                <div class="p6-spec-item">
                  <span class="p6-spec-icon">⚡</span>
                  <div>
                    <div class="p6-spec-lbl">Biomechanic Squat Racks</div>
                    <div class="p6-spec-val">Adjustable safety arms & belt squat setups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════ CLASS SCHEDULER SECTION ══════════════════════════════════ -->
      <section id="p6-scheduler" class="p6-scheduler p6-reveal">
        <div class="p6-section-header">
          <div class="p6-section-tag">DAILY PROTOCOL TIMELINE</div>
          <h2 class="p6-section-title">WEEKLY CLASS TIMETABLE</h2>
          <p class="p6-section-desc">Register for our high-intensity, biomechanics-focused team training. Slots are capped strictly to preserve individual coaching focus.</p>
        </div>

        <!-- Days Selector Pills -->
        <div class="p6-sched-days">
          <button class="p6-day-btn active" data-day="Mon">Mon</button>
          <button class="p6-day-btn" data-day="Tue">Tue</button>
          <button class="p6-day-btn" data-day="Wed">Wed</button>
          <button class="p6-day-btn" data-day="Thu">Thu</button>
          <button class="p6-day-btn" data-day="Fri">Fri</button>
          <button class="p6-day-btn" data-day="Sat">Sat</button>
          <button class="p6-day-btn" data-day="Sun">Sun</button>
        </div>

        <!-- Class List Mount -->
        <div class="p6-sched-grid" id="p6-sched-grid-mount">
          <!-- Dynamic contents injected here -->
        </div>
      </section>

      <!-- ══════════════════════════════════ BIOMETRIC MACRO ENGINE ══════════════════════════════════ -->
      <section id="p6-macros" class="p6-macros p6-reveal">
        <div class="p6-section-header">
          <div class="p6-section-tag">BIOMETRIC COEFFICIENT ESTIMATOR</div>
          <h2 class="p6-section-title">MACRO & TDEE CALCULATION ENGINE</h2>
          <p class="p6-section-desc">Define your physical state parameters below. Our algorithm calculates TDEE and outputs target macronutrient goals with optimal dietary advice.</p>
        </div>

        <div class="p6-macros-card">
          <!-- Inputs panel -->
          <div class="p6-macros-inputs">
            <h3 class="p6-calculator-title">Biometric Parameters</h3>
            
            <div class="p6-input-row">
              <div class="p6-input-col">
                <label for="p6-calc-weight">WEIGHT: <span id="p6-weight-lbl">75</span> kg</label>
                <input type="range" id="p6-calc-weight" min="40" max="150" value="75" class="p6-slider" />
              </div>
              <div class="p6-input-col">
                <label for="p6-calc-height">HEIGHT: <span id="p6-height-lbl">175</span> cm</label>
                <input type="range" id="p6-calc-height" min="120" max="220" value="175" class="p6-slider" />
              </div>
            </div>

            <div class="p6-input-row">
              <div class="p6-input-col">
                <label for="p6-calc-age">AGE: <span id="p6-age-lbl">28</span> years</label>
                <input type="range" id="p6-calc-age" min="15" max="80" value="28" class="p6-slider" />
              </div>
              <div class="p6-input-col">
                <label>GENDER</label>
                <div class="p6-gender-btns">
                  <button type="button" class="p6-gender-btn active" data-gender="male">MALE</button>
                  <button type="button" class="p6-gender-btn" data-gender="female">FEMALE</button>
                </div>
              </div>
            </div>

            <div class="p6-form-group-wrap">
              <label>ACTIVITY INTENSITY</label>
              <div class="p6-calc-options" id="p6-calc-activity">
                <button type="button" class="p6-option-btn" data-val="1.2">SEDENTARY <span>Minimal activity</span></button>
                <button type="button" class="p6-option-btn active" data-val="1.55">MODERATE <span>Train 3-4x weekly</span></button>
                <button type="button" class="p6-option-btn" data-val="1.725">ACTIVE <span>Train 5-6x weekly</span></button>
                <button type="button" class="p6-option-btn" data-val="1.9">ELITE ATHLETE <span>Double sessions daily</span></button>
              </div>
            </div>

            <div class="p6-form-group-wrap">
              <label>FITNESS GOAL</label>
              <div class="p6-calc-options" id="p6-calc-goal">
                <button type="button" class="p6-option-btn" data-val="cut">FAT SHRED <span>-500 kcal deficit</span></button>
                <button type="button" class="p6-option-btn active" data-val="recomp">BODY RECOMP <span>Maintain calories</span></button>
                <button type="button" class="p6-option-btn" data-val="bulk">CLEAN BULK <span>+300 kcal surplus</span></button>
              </div>
            </div>
          </div>

          <!-- Outputs Panel -->
          <div class="p6-macros-outputs">
            <h3 class="p6-calculator-title">Target Output Analytics</h3>
            
            <div class="p6-output-calories">
              <div class="p6-cal-val" id="p6-cal-val">2,450</div>
              <div class="p6-cal-lbl">TARGET CALORIES / DAY</div>
              <div class="p6-tdee-lbl">TDEE Baseline: <span id="p6-tdee-val">2,450</span> kcal</div>
            </div>

            <!-- Target macros breakdown -->
            <div class="p6-macros-bars">
              <div class="p6-macro-bar-item">
                <div class="p6-macro-bar-header">
                  <span>PROTEIN (30%)</span>
                  <span id="p6-macro-protein-g">184 g</span>
                </div>
                <div class="p6-macro-progress"><div class="p6-macro-progress-fill bg-volt" id="p6-macro-protein-pct" style="width: 30%;"></div></div>
              </div>

              <div class="p6-macro-bar-item">
                <div class="p6-macro-bar-header">
                  <span>CARBOHYDRATES (45%)</span>
                  <span id="p6-macro-carbs-g">276 g</span>
                </div>
                <div class="p6-macro-progress"><div class="p6-macro-progress-fill" id="p6-macro-carbs-pct" style="width: 45%;"></div></div>
              </div>

              <div class="p6-macro-bar-item">
                <div class="p6-macro-bar-header">
                  <span>FATS (25%)</span>
                  <span id="p6-macro-fats-g">68 g</span>
                </div>
                <div class="p6-macro-progress"><div class="p6-macro-progress-fill" id="p6-macro-fats-pct" style="width: 25%;"></div></div>
              </div>
            </div>

            <!-- Dietary advice slot -->
            <div class="p6-diet-advice" id="p6-diet-advice-text">
              Recommended: Target high biological value proteins. Lean chicken breasts, fish, egg whites. Vegetarians: focus on paneer, tofu, low-fat curd, and double scoops of whey to hit the 184g target without exceeding calories.
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════ MEMBERSHIP CUSTOMIZER SECTION ══════════════════════════════════ -->
      <section id="p6-customizer" class="p6-customizer p6-reveal">
        <div class="p6-section-header">
          <div class="p6-section-tag">MEMBERSHIP ARCHITECTURE</div>
          <h2 class="p6-section-title">INTERACTIVE RATE BUILDER</h2>
          <p class="p6-section-desc">Select your baseline tier and toggle biomechanical, health audit, or wellness add-ons to build your customized membership protocol.</p>
        </div>

        <div class="p6-customizer-grid">
          <!-- Step 1: Base Tier Selection -->
          <div class="p6-builder-column">
            <h3 class="p6-builder-section-title">01. Select Base Protocol</h3>
            
            <div class="p6-tier-cards">
              <div class="p6-tier-card active" data-tier="access" data-price="2499">
                <div class="p6-tier-badge">Apex Access</div>
                <div class="p6-tier-price">₹2,499 <span>/ month</span></div>
                <p class="p6-tier-desc">Unlimited floor access to heavy weight rooms, standard lockers, and cardio zones.</p>
                <div class="p6-tier-select-dot"></div>
              </div>

              <div class="p6-tier-card" data-tier="pro" data-price="4499">
                <div class="p6-tier-badge volt">Apex Pro</div>
                <div class="p6-tier-price">₹4,499 <span>/ month</span></div>
                <p class="p6-tier-desc">Adds full entry to metabolic suite, group class scheduler, & daily steam facilities.</p>
                <div class="p6-tier-select-dot"></div>
              </div>

              <div class="p6-tier-card" data-tier="executive" data-price="8999">
                <div class="p6-tier-badge vip">Apex Executive</div>
                <div class="p6-tier-price">₹8,999 <span>/ month</span></div>
                <p class="p6-tier-desc">Full 24/7 access, VIP locker chambers, executive lounges, & 2 dry towel tokens daily.</p>
                <div class="p6-tier-select-dot"></div>
              </div>
            </div>
          </div>

          <!-- Step 2: Addon Toggles -->
          <div class="p6-builder-column">
            <h3 class="p6-builder-section-title">02. Configure Add-Ons</h3>
            
            <div class="p6-addons-list">
              <div class="p6-addon-item" data-price="2500">
                <div class="p6-addon-checkbox"></div>
                <div class="p6-addon-text-wrap">
                  <div class="p6-addon-name">Biomechanics Coach (1-on-1)</div>
                  <div class="p6-addon-desc">Personalized compound training feedback & safety spotting (3x weekly).</div>
                </div>
                <div class="p6-addon-cost">+₹2,500/mo</div>
              </div>

              <div class="p6-addon-item" data-price="5000">
                <div class="p6-addon-checkbox"></div>
                <div class="p6-addon-text-wrap">
                  <div class="p6-addon-name">Target Macro Meal Delivery</div>
                  <div class="p6-addon-desc">Apex Fuel Lab prepares & ships one calorie-matched post-workout meal daily.</div>
                </div>
                <div class="p6-addon-cost">+₹5,000/mo</div>
              </div>

              <div class="p6-addon-item" data-price="2000">
                <div class="p6-addon-checkbox"></div>
                <div class="p6-addon-text-wrap">
                  <div class="p6-addon-name">Bio-Recovery Suite Pass</div>
                  <div class="p6-addon-desc">Unlimited entry to Cryo Chambers, red-light arrays, and compression boots.</div>
                </div>
                <div class="p6-addon-cost">+₹2,000/mo</div>
              </div>

              <div class="p6-addon-item" data-price="1500">
                <div class="p6-addon-checkbox"></div>
                <div class="p6-addon-text-wrap">
                  <div class="p6-addon-name">Biometric Health Audits</div>
                  <div class="p6-addon-desc">Monthly body composition scans (InBody 970), VO2 max tests, and strength diagnostics.</div>
                </div>
                <div class="p6-addon-cost">+₹1,500/mo</div>
              </div>
            </div>
          </div>

          <!-- Step 3: Tallied Checkout Glass Box -->
          <div class="p6-builder-column">
            <h3 class="p6-builder-section-title">03. Protocol Breakdown</h3>
            
            <div class="p6-summary-box">
              <div class="p6-summary-header">
                <div>APEX LABORATORY PROTOCOL</div>
                <div class="p6-summary-tier-name" id="p6-summary-tier">Apex Access Base</div>
              </div>
              
              <div class="p6-summary-costs" id="p6-summary-items-list">
                <!-- Injected dynamically -->
              </div>
              
              <div class="p6-summary-total">
                <div>TOTAL RATE</div>
                <div class="p6-summary-total-price" id="p6-total-price-display">₹2,499 <span class="p6-mo-sub">/ month</span></div>
              </div>

              <button class="p6-btn p6-btn-primary p6-btn-wide" id="p6-customizer-checkout-btn">
                Lock in Membership Protocol
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              
              <p class="p6-tax-disclosure">*Rates exclude local GST. Cancel or alter modules at the end of billing cycles.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════ TRAINERS / CO-ACHES SECTION ══════════════════════════════════ -->
      <section id="p6-trainers" class="p6-trainers p6-reveal">
        <div class="p6-section-header">
          <div class="p6-section-tag">ELITE RESEARCH STAFF</div>
          <h2 class="p6-section-title">THE APEX COACHING TEAM</h2>
          <p class="p6-section-desc">Our coaches hold advanced degrees in sports science, physical therapy, and biomechanics. Meet the staff directing your training cycle.</p>
        </div>

        <div class="p6-trainers-grid">
          ${trainers.map((t, idx) => `
            <div class="p6-trainer-card p6-reveal-card" data-index="${idx}">
              <div class="p6-trainer-badge-tag">${t.tag}</div>
              <div class="p6-trainer-img-wrap">
                <img src="${t.img}" alt="${t.name}" class="p6-trainer-img" />
                <div class="p6-trainer-scan-line"></div>
              </div>
              <div class="p6-trainer-info">
                <h3 class="p6-trainer-name">${t.name}</h3>
                <div class="p6-trainer-role">${t.role}</div>
                <div class="p6-trainer-specs-summary">
                  <span>98% Client Success</span> • <span>Biometrics Checked</span>
                </div>
                <button class="p6-trainer-book-btn">Request Evaluation Consult ➔</button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ══════════════════════════════════ FAQ ACCORDION SECTION ══════════════════════════════════ -->
      <section class="p6-faq p6-reveal">
        <div class="p6-section-header">
          <div class="p6-section-tag">FAQ</div>
          <h2 class="p6-section-title">PROTOCOL CLARIFICATION</h2>
        </div>

        <div class="p6-faq-container">
          <div class="p6-faq-item">
            <button class="p6-faq-btn">
              What does "Biometric Telemetry Monitoring" mean?<span class="p6-faq-icon">+</span>
            </button>
            <div class="p6-faq-body">
              Every member receives access to our smart telemetry sensors when on the gym floor. Our custom dashboards tracking structural barbell velocity, mechanical power output, and physical load can be synced directly to your profile database during your workouts.
            </div>
          </div>
          <div class="p6-faq-item">
            <button class="p6-faq-btn">
              Can I customize my add-on options later in the training cycle?<span class="p6-faq-icon">+</span>
            </button>
            <div class="p6-faq-body">
              Yes, Apex Laboratories operates on a modular billing framework. You can add or deactivate auxiliary protocols (such as targeted macro meal shipping or Recovery Suite entry) directly via your account profile at the close of any active monthly billing period.
            </div>
          </div>
          <div class="p6-faq-item">
            <button class="p6-faq-btn">
              Is the calorie calculator calibrated for Indian diet structures?<span class="p6-faq-icon">+</span>
            </button>
            <div class="p6-faq-body">
              Absolutely. Our macro advisor database includes daily advice calibrated specifically for Indian food ingredients. It outlines macro distributions for vegetarian diets (paneer, soy chunks, dal combinations, whey) and non-vegetarian setups (eggs, local chicken dishes, fish varieties) to meet your physical goals.
            </div>
          </div>
          <div class="p6-faq-item">
            <button class="p6-faq-btn">
              Why are session caps enforced on classes?<span class="p6-faq-icon">+</span>
            </button>
            <div class="p6-faq-body">
              To ensure training quality and safety, classes are strictly limited (e.g. 10 to 15 members depending on the compound movement). This allows coaches to check biomechanics, barbell paths, and correct form individually for every member during the lifts.
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════ FOOTER SECTION ══════════════════════════════════ -->
      <footer class="p6-footer">
        <div class="p6-footer-container">
          <div class="p6-footer-brand">
            <div class="p6-footer-logo">
              <span class="p6-logo-icon">▲</span>
              APEX LABS
            </div>
            <p class="p6-footer-tag">
              Advanced mechanical hypertrophy, cardiovascular optimization, and bio-recovery lounges. Engineered for raw human athletics.
            </p>
            <div class="p6-footer-map-wrap">
              <iframe
                title="Apex Labs Flagship Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796347395029!2d72.83351931535783!3d19.061730987094985!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c83031e!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="150"
                style="border:0; border-radius: 8px; filter: invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.85);"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div class="p6-footer-column">
            <h4>LAB LOCATIONS</h4>
            <a href="#p6-hero">Flagship Lab - Bandra West, Mumbai</a>
            <a href="#p6-hero">Apex Performance - Indiranagar, Bengaluru</a>
            <a href="#p6-hero">Apex Recovery - DLF Phase 3, Gurugram</a>
          </div>

          <div class="p6-footer-column">
            <h4>BIO-METHODS</h4>
            <a href="#p6-tour">Kinetic Squat Arenas</a>
            <a href="#p6-tour">Metabolic Conditioning Suite</a>
            <a href="#p6-tour">Cryotherapy & Sauna Suite</a>
            <a href="#p6-macros">Macronutrient Engines</a>
          </div>

          <div class="p6-footer-column">
            <h4>RESEARCH NEWS</h4>
            <p class="p6-newsletter-p">Subscribe to our weekly biomechanics digest and facility logs.</p>
            <div class="p6-footer-newsletter">
              <input type="email" placeholder="email@address.com" id="p6-newsletter-input" />
              <button id="p6-newsletter-btn">➔</button>
            </div>
            <div class="p6-newsletter-toast" id="p6-newsletter-toast">Subscribed to Biometrics Digest.</div>
          </div>
        </div>

        <div class="p6-footer-bottom">
          &copy; 2026 APEX STRENGTH LABORATORIES INDIA. ALL RIGHTS RESERVED. SCIENTIFIC ATHLETIC DEVELOPMENT SYSTEMS.
        </div>
      </footer>

      <!-- ══════════════════════════════════ MODALS / NOTIFICATIONS ══════════════════════════════════ -->
      
      <!-- Checkout Protocol Modal -->
      <div class="p6-modal-overlay" id="p6-checkout-modal">
        <div class="p6-modal-card">
          <button class="p6-modal-close" id="p6-checkout-close">&times;</button>
          <div class="p6-modal-header">
            <h3>INITIALIZE APEX PROTOCOL</h3>
            <p>Complete the diagnostics registration form to lock in your custom membership rate.</p>
          </div>
          <form class="p6-modal-form" id="p6-checkout-form">
            <div class="p6-modal-row">
              <div class="p6-modal-group">
                <label>Full Athlete Name</label>
                <input type="text" required placeholder="Arjun Sharma" />
              </div>
              <div class="p6-modal-group">
                <label>Biometric Contact Number</label>
                <input type="tel" required placeholder="+91 98765 43210" />
              </div>
            </div>
            <div class="p6-modal-group">
              <label>Email ID</label>
              <input type="email" required placeholder="arjun@apexperformance.in" />
            </div>
            <div class="p6-modal-row">
              <div class="p6-modal-group">
                <label>Emergency Contact Name</label>
                <input type="text" required placeholder="Simran Sharma" />
              </div>
              <div class="p6-modal-group">
                <label>Emergency Contact Phone</label>
                <input type="tel" required placeholder="+91 98765 55555" />
              </div>
            </div>
            
            <div class="p6-modal-summary-panel">
              <div class="p6-summary-panel-lbl">Summary Protocol Charge:</div>
              <div class="p6-summary-panel-val" id="p6-modal-total-display">₹2,499/mo</div>
            </div>

            <button type="submit" class="p6-btn p6-btn-primary p6-btn-wide">Initialize Membership Setup ➔</button>
          </form>
        </div>
      </div>

      <!-- Schedule Reservation Modal -->
      <div class="p6-modal-overlay" id="p6-reserve-modal">
        <div class="p6-modal-card p6-modal-narrow">
          <button class="p6-modal-close" id="p6-reserve-close">&times;</button>
          <div class="p6-modal-header">
            <h3>RESERVE COACHED SPOT</h3>
            <p>Confirm your attendance for the selected biomechanical movement class.</p>
          </div>
          <div class="p6-reserve-class-details">
            <h4 id="p6-res-class-name">Mechanical Tension Hypertrophy</h4>
            <div class="p6-res-meta-line">Timeline: <strong id="p6-res-class-time">06:30 AM - 08:00 AM</strong></div>
            <div class="p6-res-meta-line">Coaching Staff: <strong id="p6-res-class-trainer">Coach Arjun</strong></div>
          </div>
          <form class="p6-modal-form" id="p6-reserve-form">
            <div class="p6-modal-group">
              <label>Athlete Registry Name</label>
              <input type="text" required placeholder="Arjun Sharma" id="p6-res-name-input" />
            </div>
            <div class="p6-modal-group">
              <label>Mobile Number (For Access Token)</label>
              <input type="tel" required placeholder="+91 98765 43210" />
            </div>
            <button type="submit" class="p6-btn p6-btn-primary p6-btn-wide">Lock Coached Slot</button>
          </form>
        </div>
      </div>

      <!-- Generic Toast Toast Notification -->
      <div class="p6-toast-box" id="p6-toast-notify">Slot successfully reserved. Welcome to Apex.</div>

    </div>
  `;

  // ── SPA Router Navigation Binding ──
  container.querySelectorAll('.p6-route-pills a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', link.getAttribute('href'));
      window.dispatchEvent(new Event('popstate'));
    });
  });

  // ── Smooth Anchors Scroll ──
  container.querySelectorAll('.p6-nav-links a, .p6-logo').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetEl = container.querySelector(href);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ── Navbar Blur on Scroll ──
  const navEl = container.querySelector('.p6-nav');
  const scrollListener = () => {
    if (!navEl) return;
    if (window.scrollY > 40) {
      navEl.classList.add('scrolled');
    } else {
      navEl.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', scrollListener, { passive: true });
  scrollListener(); // check initial state

  // ── REALTIME BIOMETRIC ECG CANVAS HEARTBEAT ENGINE ──
  initECGMonitor(container);

  // ── HUD OVERLOAD INTERACTIVITY (HOVER AND VALUE DRIFT) ──
  initHUDInteractivity(container);

  // ── GYM VIRTUAL TOUR TAB SELECTOR ──
  initGymTourTabs(container);

  // ── CLASS WEEKLY SCHEDULER TIMETABLE ──
  initClassScheduler(container);

  // ── BIOMETRIC MACRO ENGINE (TDEE AND MACROS CALCULATOR) ──
  initMacroEngine(container);

  // ── INTERACTIVE MEMBERSHIP CUSTOMIZER ──
  initMembershipBuilder(container);

  // ── TRAINER SPOTLIGHT 3D PARALLAX TILT ──
  initTrainerCardTilt(container);

  // ── FAQ ACCORDION TRANSITIONS ──
  initFAQAccordion(container);

  // ── NEWSLETTER SUBSCRIPTION TOAST ──
  initNewsletter(container);

  // ── MODAL WINDOW EVENT HANDLERS ──
  initModals(container);

  // ── Cinematic scroll-trigger reveal observer ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  container.querySelectorAll('.p6-reveal, .p6-reveal-card').forEach(el => {
    el.classList.add('reveal-prep');
    revealObserver.observe(el);
  });
}

// ────────────────────────────────────────────────────────────
// 1. ECG BIOMETRIC TELEMETRY MONITOR CANVAS ENGINE
// ────────────────────────────────────────────────────────────
function initECGMonitor(container) {
  const canvas = container.querySelector('#p6-ecg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = canvas.parentElement.clientWidth);
  let height = (canvas.height = canvas.parentElement.clientHeight || 120);

  // Responsive canvas resize
  const resizeCanvas = () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight || 120;
  };
  window.addEventListener('resize', resizeCanvas);

  // ECG plotting parameters
  let points = [];
  const maxPoints = 250;
  let index = 0;

  // Generate background static line structure
  for (let i = 0; i < maxPoints; i++) {
    points.push(height / 2);
  }

  // Speed and noise controllers
  let bpm = 76;
  const targetHR = container.querySelector('#p6-hud-heartrate-val');

  // Simple frame updates
  function drawECG() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, width, height);

    // Dynamic wave generation based on BPM
    // Standard ECG is: Flat -> small P wave -> flat -> PR segment -> QRS spike -> flat -> T wave -> flat
    let cycleLength = Math.floor(60 * 60 / bpm); // cycles per second at 60fps
    let cyclePos = index % cycleLength;

    let targetVal = height / 2;

    if (cyclePos === 0) {
      // P wave (slight bump)
      targetVal -= 6;
    } else if (cyclePos === 1) {
      targetVal -= 12;
    } else if (cyclePos === 2) {
      targetVal -= 6;
    } else if (cyclePos === 6) {
      // Q spike (brief down)
      targetVal += 15;
    } else if (cyclePos === 7) {
      // R spike (massive up)
      targetVal -= 55;
    } else if (cyclePos === 8) {
      // S spike (massive down)
      targetVal += 45;
    } else if (cyclePos === 9) {
      // Back to baseline
      targetVal -= 15;
    } else if (cyclePos === 16) {
      // T wave (moderate bump)
      targetVal -= 16;
    } else if (cyclePos === 17) {
      targetVal -= 20;
    } else if (cyclePos === 18) {
      targetVal -= 16;
    } else if (cyclePos === 19) {
      targetVal -= 8;
    }

    // Add tiny baseline micro-tremor noise for biometric telemetry aesthetic
    targetVal += (Math.random() - 0.5) * 1.5;

    points.shift();
    points.push(targetVal);

    // Draw the active glowing pulse line
    ctx.beginPath();
    ctx.strokeStyle = '#bfff00'; // Volt lime neon
    ctx.lineWidth = 2.5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#bfff00';
    ctx.lineJoin = 'round';

    for (let i = 0; i < points.length; i++) {
      const x = (i / points.length) * width;
      const y = points[i];
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Draw running scanning sweep indicator dot at the end
    ctx.beginPath();
    ctx.arc(width - 4, points[points.length - 1], 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#ffffff';
    ctx.fill();

    index++;
    requestAnimationFrame(drawECG);
  }

  // Smooth dynamic update of BPM readout digits
  setInterval(() => {
    // Random slight variation of heartrate
    const drift = Math.floor(Math.random() * 3) - 1;
    bpm = Math.min(Math.max(bpm + drift, 68), 92);
    if (targetHR) {
      targetHR.innerHTML = `${bpm} <span>BPM</span>`;
    }
  }, 1800);

  // Expose BPM setter for hover overload updates
  window.p6_set_bpm = (newBpm) => {
    bpm = newBpm;
    if (targetHR) {
      targetHR.innerHTML = `${bpm} <span>BPM</span>`;
    }
  };

  drawECG();
}

// ────────────────────────────────────────────────────────────
// 2. HUD INTERACTIVE HOVER OVERLOAD CONTROLLERS
// ────────────────────────────────────────────────────────────
function initHUDInteractivity(container) {
  // Select cards
  const cardVelocity = container.querySelector('#p6-hud-card-velocity');
  const cardTension = container.querySelector('#p6-hud-card-tension');
  const cardAerobic = container.querySelector('#p6-hud-card-aerobic');
  const cardRecovery = container.querySelector('#p6-hud-card-recovery');

  // Set interval trackers for normal simulation states
  let isVelHovered = false;
  let isTenHovered = false;
  let isAerHovered = false;
  let isRecHovered = false;

  const velVal = container.querySelector('#p6-val-velocity');
  const tenVal = container.querySelector('#p6-val-tension');
  const aerVal = container.querySelector('#p6-val-aerobic');
  const recVal = container.querySelector('#p6-val-recovery');

  // Hover states update parameters dynamically
  if (cardVelocity) {
    cardVelocity.addEventListener('mouseenter', () => {
      isVelHovered = true;
      cardVelocity.classList.add('glow-border');
      if (window.p6_set_bpm) window.p6_set_bpm(138); // Heartrate spikes as velocity climbs
    });
    cardVelocity.addEventListener('mouseleave', () => {
      isVelHovered = false;
      cardVelocity.classList.remove('glow-border');
      if (window.p6_set_bpm) window.p6_set_bpm(76);
    });
  }

  if (cardTension) {
    cardTension.addEventListener('mouseenter', () => {
      isTenHovered = true;
      cardTension.classList.add('glow-border');
      if (window.p6_set_bpm) window.p6_set_bpm(165); // High weight overload spikes heartrate
    });
    cardTension.addEventListener('mouseleave', () => {
      isTenHovered = false;
      cardTension.classList.remove('glow-border');
      if (window.p6_set_bpm) window.p6_set_bpm(76);
    });
  }

  if (cardAerobic) {
    cardAerobic.addEventListener('mouseenter', () => {
      isAerHovered = true;
      cardAerobic.classList.add('glow-border');
    });
    cardAerobic.addEventListener('mouseleave', () => {
      isAerHovered = false;
      cardAerobic.classList.remove('glow-border');
    });
  }

  if (cardRecovery) {
    cardRecovery.addEventListener('mouseenter', () => {
      isRecHovered = true;
      cardRecovery.classList.add('glow-border');
    });
    cardRecovery.addEventListener('mouseleave', () => {
      isRecHovered = false;
      cardRecovery.classList.remove('glow-border');
    });
  }

  // Values update clock
  setInterval(() => {
    // Kinetic Velocity simulation
    if (velVal) {
      let velValVal = isVelHovered 
        ? (2.85 + Math.random() * 0.4).toFixed(2) // Overload spike
        : (1.20 + Math.random() * 0.1).toFixed(2);
      velVal.innerHTML = `${velValVal} <span>m/s</span>`;
      const fill = cardVelocity.querySelector('.p6-metric-bar-fill');
      if (fill) fill.style.width = isVelHovered ? '95%' : '72%';
    }

    // Mechanical Tension simulation
    if (tenVal) {
      let tenValVal = isTenHovered 
        ? Math.floor(1420 + Math.random() * 80) // Spike
        : Math.floor(820 + Math.random() * 40);
      tenVal.innerHTML = `${tenValVal} <span>kgf</span>`;
      const fill = cardTension.querySelector('.p6-metric-bar-fill');
      if (fill) fill.style.width = isTenHovered ? '98%' : '84%';
    }

    // Aerobic efficiency drift
    if (aerVal) {
      let aerValVal = isAerHovered 
        ? (98.6 - Math.random() * 0.5).toFixed(1)
        : (94.0 + Math.random() * 0.4).toFixed(1);
      aerVal.innerHTML = `${aerValVal} <span>%</span>`;
      const fill = cardAerobic.querySelector('.p6-metric-bar-fill');
      if (fill) fill.style.width = `${aerValVal}%`;
    }

    // Neural Recovery drift
    if (recVal) {
      let recValVal = isRecHovered 
        ? Math.floor(97 + Math.random() * 2)
        : Math.floor(89 + Math.random() * 3);
      recVal.innerHTML = `${recValVal} <span>%</span>`;
      const fill = cardRecovery.querySelector('.p6-metric-bar-fill');
      if (fill) fill.style.width = `${recValVal}%`;
    }
  }, 400);
}

// ────────────────────────────────────────────────────────────
// 3. GYM VIRTUAL TOUR IMAGE & DETAILS TAB INTERACTION
// ────────────────────────────────────────────────────────────
function initGymTourTabs(container) {
  const tabs = container.querySelectorAll('.p6-tour-tab');
  const imgEl = container.querySelector('#p6-tour-img');
  const hudTag = container.querySelector('#p6-tour-hud-label');
  const titleEl = container.querySelector('#p6-tour-title');
  const textEl = container.querySelector('#p6-tour-text');
  const specsContainer = container.querySelector('.p6-tour-specs');

  const tourData = {
    kinetic: {
      title: 'Kinetic Arena',
      hudLabel: 'ZONE 01 // KINETIC ARENA // STRENGTH PLATFORMS',
      img: zoneImages.kinetic,
      text: 'Equipped with custom knurled barbells, Eleiko competition plates, Hammer Strength weight stacks, and premium shock-absorbent platforms. Engineered specifically for maximal muscular tension, heavy compound squat patterns, deadlifts, and structural hypertrophy.',
      specs: [
        { label: 'Eleiko Competition Kits', val: 'IWF & IPF certified platforms' },
        { label: 'Custom Barbell Shafts', val: 'Aggressive 1.2mm knurling profiles' },
        { label: 'Biomechanic Squat Racks', val: 'Adjustable safety arms & belt squat setups' }
      ]
    },
    metabolic: {
      title: 'Metabolic Suite',
      hudLabel: 'ZONE 02 // METABOLIC SUITE // VO2 MAX CARDIO',
      img: zoneImages.metabolic,
      text: 'Features custom-curved manual woodway treadmills, air assault cycles, Wattbike power trainers, and simulated altitude breathing rigs. Calibrated to maximize VO2 threshold levels and accelerate lactic clearing capacities.',
      specs: [
        { label: 'Curved Woodway Tracks', val: '100% manual belt drive system' },
        { label: 'Wattbike Power Hubs', val: 'Instant balance force-pedal analysis' },
        { label: 'Hypoxic Generator Hubs', val: 'Simulated high-altitude (up to 4000m)' }
      ]
    },
    recovery: {
      title: 'Bio-Recovery Lab',
      hudLabel: 'ZONE 03 // BIO-RECOVERY LAB // NEURAL RESTORATION',
      img: zoneImages.recovery,
      text: 'Advanced recovery center fitted with modular cryotherapy chambers (-110°C), whole-body dry floatation tubs, far-infrared localized saunas, and pneumatic compression systems. Optimizes immediate autonomic nervous recovery.',
      specs: [
        { label: 'Cryo Chamber Cabinets', val: 'Whole body -110°C nitrogen cooling' },
        { label: 'Far-Infrared Chambers', val: 'Deep muscle cellular detox wave system' },
        { label: 'Pneumatic Compression', val: 'Normatec system lymphatic flush' }
      ]
    },
    fuel: {
      title: 'Bio-Fuel Station',
      hudLabel: 'ZONE 04 // BIO-FUEL STATION // MACRONUTRIENT BAR',
      img: zoneImages.fuel,
      text: 'High-precision fuel nutrition station blending fresh performance nutrients. Macro-calculated whey shakes, cold-pressed plant juices, balanced meals, and targeted performance booster blends customized to support muscle repair.',
      specs: [
        { label: 'Macro-Matched Shakes', val: 'Calibrated protein/carb blends' },
        { label: 'Performance Cold-Press', val: 'Anti-inflammatory electrolyte extraction' },
        { label: 'Target Fuel Delivery', val: 'Customized amino acid post-workout shakes' }
      ]
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const zoneKey = tab.getAttribute('data-zone');
      const data = tourData[zoneKey];
      if (!data) return;

      // Toggle active states
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update contents with smooth opacity fade
      if (imgEl) {
        imgEl.style.opacity = '0.1';
        setTimeout(() => {
          imgEl.src = data.img;
          imgEl.style.opacity = '1';
        }, 150);
      }

      if (hudTag) hudTag.textContent = data.hudLabel;
      if (titleEl) titleEl.textContent = data.title;
      if (textEl) textEl.textContent = data.text;

      // Update specs grid
      if (specsContainer) {
        specsContainer.innerHTML = data.specs.map(spec => `
          <div class="p6-spec-item">
            <span class="p6-spec-icon">⚡</span>
            <div>
              <div class="p6-spec-lbl">${spec.label}</div>
              <div class="p6-spec-val">${spec.val}</div>
            </div>
          </div>
        `).join('');
      }
    });
  });
}

// ────────────────────────────────────────────────────────────
// 4. TIMETABLE CLASS SCHEDULE LOADER AND FILTER
// ────────────────────────────────────────────────────────────
function initClassScheduler(container) {
  const gridMount = container.querySelector('#p6-sched-grid-mount');
  const dayButtons = container.querySelectorAll('.p6-day-btn');

  function renderClasses(day) {
    if (!gridMount) return;
    const classes = scheduleData[day] || [];
    
    if (classes.length === 0) {
      gridMount.innerHTML = `<div class="p6-sched-empty">No elite training classes scheduled for ${day}.</div>`;
      return;
    }

    gridMount.innerHTML = classes.map((c, i) => {
      const remaining = c.capacity - c.booked;
      const progressWidth = (c.booked / c.capacity) * 100;
      const isUrgent = remaining <= 3;
      const urgencyClass = isUrgent ? 'spots-critical animate-pulse-fast' : '';

      return `
        <div class="p6-sched-card">
          <div class="p6-sched-card-top">
            <h4 class="p6-sched-class-title">${c.name}</h4>
            <span class="p6-sched-time">${c.time}</span>
          </div>
          
          <div class="p6-sched-card-mid">
            <div class="p6-sched-trainer-box">
              <span class="p6-sched-trainer-bullet"></span>
              Trainer: <strong>${c.trainer}</strong>
            </div>
            
            <div class="p6-sched-spots-box">
              <div class="p6-spots-header">
                <span>Registration Load</span>
                <span class="p6-spots-lbl ${urgencyClass}">
                  ${isUrgent ? '⚠️ ONLY ' : ''}${remaining} / ${c.capacity} slots left
                </span>
              </div>
              <div class="p6-spots-bar">
                <div class="p6-spots-fill" style="width: ${progressWidth}%; ${isUrgent ? 'background: var(--p6-volt);' : ''}"></div>
              </div>
            </div>
          </div>

          <div class="p6-sched-card-bot">
            <button class="p6-btn p6-btn-wide p6-sched-book-btn" 
              data-class-name="${c.name}" 
              data-class-time="${c.time}" 
              data-class-trainer="${c.trainer}">
              Reserve Movement Slot ➔
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Re-bind booking clicks inside the dynamically rendered scheduler grid
    gridMount.querySelectorAll('.p6-sched-book-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cName = btn.getAttribute('data-class-name');
        const cTime = btn.getAttribute('data-class-time');
        const cTrainer = btn.getAttribute('data-class-trainer');
        openReserveModal(container, cName, cTime, cTrainer);
      });
    });
  }

  // Day filter click binding
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedDay = btn.getAttribute('data-day');
      renderClasses(selectedDay);
    });
  });

  // Render Monday initially
  renderClasses('Mon');
}

// ────────────────────────────────────────────────────────────
// 5. BIOMETRIC CALORIE & MACRO ESTIMATOR (MACRO ENGINE)
// ────────────────────────────────────────────────────────────
function initMacroEngine(container) {
  // Input nodes
  const sWeight = container.querySelector('#p6-calc-weight');
  const sHeight = container.querySelector('#p6-calc-height');
  const sAge = container.querySelector('#p6-calc-age');
  
  const lblWeight = container.querySelector('#p6-weight-lbl');
  const lblHeight = container.querySelector('#p6-height-lbl');
  const lblAge = container.querySelector('#p6-age-lbl');

  const gBtns = container.querySelectorAll('.p6-gender-btn');
  const aBtns = container.querySelectorAll('#p6-calc-activity button');
  const goalBtns = container.querySelectorAll('#p6-calc-goal button');

  // Output nodes
  const oCalories = container.querySelector('#p6-cal-val');
  const oTdee = container.querySelector('#p6-tdee-val');
  const oProteinG = container.querySelector('#p6-macro-protein-g');
  const oCarbsG = container.querySelector('#p6-macro-carbs-g');
  const oFatsG = container.querySelector('#p6-macro-fats-g');

  const progressProtein = container.querySelector('#p6-macro-protein-pct');
  const progressCarbs = container.querySelector('#p6-macro-carbs-pct');
  const progressFats = container.querySelector('#p6-macro-fats-pct');

  const oAdvice = container.querySelector('#p6-diet-advice-text');

  // Setup current states
  let currentGender = 'male';
  let currentActivity = 1.55; // moderate
  let currentGoal = 'recomp';

  function calculateMacros() {
    const w = parseFloat(sWeight.value);
    const h = parseFloat(sHeight.value);
    const a = parseFloat(sAge.value);

    // Update range numeric text
    if (lblWeight) lblWeight.textContent = w;
    if (lblHeight) lblHeight.textContent = h;
    if (lblAge) lblAge.textContent = a;

    // 1. Calculate BMR (Mifflin-St Jeor Equation)
    let bmr = 0;
    if (currentGender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    // 2. Calculate baseline TDEE
    let tdee = Math.round(bmr * currentActivity);
    
    // 3. Adjust Calories based on Goal
    let targetCal = tdee;
    if (currentGoal === 'cut') {
      targetCal = tdee - 500;
    } else if (currentGoal === 'bulk') {
      targetCal = tdee + 300;
    }

    // Limit minimal safety calories
    targetCal = Math.max(targetCal, 1200);

    // 4. Calculate macro distribution based on Goal
    // Protein ratio: Cut (35%), Recomp (30%), Bulk (25%)
    // Fats ratio: Cut (25%), Recomp (25%), Bulk (25%)
    // Carbs: Remaining
    let pRatio = 0.30;
    let fRatio = 0.25;
    let cRatio = 0.45;

    if (currentGoal === 'cut') {
      pRatio = 0.35;
      fRatio = 0.25;
      cRatio = 0.40;
    } else if (currentGoal === 'bulk') {
      pRatio = 0.25;
      fRatio = 0.25;
      cRatio = 0.50;
    }

    // Convert calorie share to grams
    // Protein: 4 kcal/g, Carbs: 4 kcal/g, Fats: 9 kcal/g
    const pGrams = Math.round((targetCal * pRatio) / 4);
    const cGrams = Math.round((targetCal * cRatio) / 4);
    const fGrams = Math.round((targetCal * fRatio) / 9);

    // Render Outputs
    if (oCalories) oCalories.textContent = targetCal.toLocaleString();
    if (oTdee) oTdee.textContent = tdee.toLocaleString();
    
    if (oProteinG) oProteinG.textContent = `${pGrams} g`;
    if (oCarbsG) oCarbsG.textContent = `${cGrams} g`;
    if (oFatsG) oFatsG.textContent = `${fGrams} g`;

    // Adjust visual target percentage progress bars
    if (progressProtein) {
      progressProtein.style.width = `${pRatio * 100}%`;
      progressProtein.parentElement.previousElementSibling.firstElementChild.textContent = `PROTEIN (${Math.round(pRatio * 100)}%)`;
    }
    if (progressCarbs) {
      progressCarbs.style.width = `${cRatio * 100}%`;
      progressCarbs.parentElement.previousElementSibling.firstElementChild.textContent = `CARBOHYDRATES (${Math.round(cRatio * 100)}%)`;
    }
    if (progressFats) {
      progressFats.style.width = `${fRatio * 100}%`;
      progressFats.parentElement.previousElementSibling.firstElementChild.textContent = `FATS (${Math.round(fRatio * 100)}%)`;
    }

    // Dynamic macro-matched food recommendations
    let foodAdvice = '';
    if (currentGoal === 'cut') {
      foodAdvice = `Deficit Target: Prioritize high-satiety volume foods. Load up on green vegetables (spinach, broccoli), egg whites, boiled chicken breast, and grilled tofu. For carbs, stick to oats, brown rice, or wheat rotis in controlled portions. Use double whey protein servings to hit your ${pGrams}g target easily while controlling calories.`;
    } else if (currentGoal === 'bulk') {
      foodAdvice = `Surplus Target: To hit your ${cGrams}g carb target, utilize rice, whole wheat roti, sweet potato, and bananas. Blend protein intake with dense calorie lipids like almonds, walnuts, paneer, and peanut butter. Pair compound sessions with a high-protein shake (35-40g whey/soy isolate + skimmed milk) post-workout.`;
    } else {
      foodAdvice = `Recomp Target: Balance is key. Sustain steady glycogen replenishment via basmati rice and dal combinations. Fuel muscular repair with paneer, soy chunks, low-fat curd, boiled eggs, or chicken breast. Target ${pGrams}g of protein daily while keeping lipids close to ${fGrams}g. Ensure consistent workouts to turn caloric energy into lean muscle.`;
    }
    if (oAdvice) oAdvice.textContent = foodAdvice;
  }

  // Bind input listeners
  [sWeight, sHeight, sAge].forEach(slider => {
    if (slider) {
      slider.addEventListener('input', calculateMacros);
    }
  });

  // Gender Buttons Toggle
  gBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGender = btn.getAttribute('data-gender');
      calculateMacros();
    });
  });

  // Activity Buttons Toggle
  aBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      aBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentActivity = parseFloat(btn.getAttribute('data-val'));
      calculateMacros();
    });
  });

  // Goal Buttons Toggle
  goalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goalBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGoal = btn.getAttribute('data-val');
      calculateMacros();
    });
  });

  // Run initial calculations
  calculateMacros();
}

// ────────────────────────────────────────────────────────────
// 6. MEMBERSHIP CUSTOMIZER BUILDER (REALTIME PRICING AND LIST)
// ────────────────────────────────────────────────────────────
let currentSelectedTierPrice = 2499;
let currentSelectedTierName = 'Apex Access';
let selectedAddonsList = [];

function initMembershipBuilder(container) {
  const tierCards = container.querySelectorAll('.p6-tier-card');
  const addonsList = container.querySelectorAll('.p6-addon-item');
  const oSummaryTier = container.querySelector('#p6-summary-tier');
  const oSummaryList = container.querySelector('#p6-summary-items-list');
  const oTotalPrice = container.querySelector('#p6-total-price-display');

  function calculateTotal() {
    let total = currentSelectedTierPrice;
    
    // Generate breakdown items HTML
    let itemsHTML = `
      <div class="p6-summary-cost-item">
        <span class="p6-summary-item-name">${currentSelectedTierName} (Base)</span>
        <span class="p6-summary-item-price">₹${currentSelectedTierPrice.toLocaleString()}</span>
      </div>
    `;

    selectedAddonsList.forEach(addon => {
      total += addon.price;
      itemsHTML += `
        <div class="p6-summary-cost-item">
          <span class="p6-summary-item-name">+ ${addon.name}</span>
          <span class="p6-summary-item-price">₹${addon.price.toLocaleString()}</span>
        </div>
      `;
    });

    if (oSummaryTier) oSummaryTier.textContent = `${currentSelectedTierName} Protocol`;
    if (oSummaryList) oSummaryList.innerHTML = itemsHTML;
    
    if (oTotalPrice) {
      oTotalPrice.innerHTML = `₹${total.toLocaleString()} <span class="p6-mo-sub">/ month</span>`;
    }

    // Keep global track of price for modal access
    window.p6_current_total = total;
  }

  // Base Tier card select click
  tierCards.forEach(card => {
    card.addEventListener('click', () => {
      tierCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      currentSelectedTierPrice = parseInt(card.getAttribute('data-price'));
      currentSelectedTierName = card.querySelector('.p6-tier-badge').textContent;

      calculateTotal();
    });
  });

  // Addon click select toggle
  addonsList.forEach(addon => {
    addon.addEventListener('click', () => {
      addon.classList.toggle('active');
      const addonName = addon.querySelector('.p6-addon-name').textContent;
      const addonPrice = parseInt(addon.getAttribute('data-price'));

      const index = selectedAddonsList.findIndex(a => a.name === addonName);
      if (index > -1) {
        // Remove addon
        selectedAddonsList.splice(index, 1);
      } else {
        // Add addon
        selectedAddonsList.push({ name: addonName, price: addonPrice });
      }

      calculateTotal();
    });
  });

  // Run initial calculation setup
  calculateTotal();
}

// ────────────────────────────────────────────────────────────
// 7. TRAINER CARDS 3D PERSPECTIVE PARALLAX TILT EFFECT
// ────────────────────────────────────────────────────────────
function initTrainerCardTilt(container) {
  const cards = container.querySelectorAll('.p6-trainer-card');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Adjust limits for a subtle metallic holographic tilt
      card.style.transform = `perspective(800px) rotateX(${-y / 12}deg) rotateY(${x / 12}deg) translateY(-8px)`;
      card.style.transition = 'none';

      // Slight displacement of the scanning indicator glow
      const scanLine = card.querySelector('.p6-trainer-scan-line');
      if (scanLine) {
        scanLine.style.transform = `translateY(${y / 4}px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      
      const scanLine = card.querySelector('.p6-trainer-scan-line');
      if (scanLine) {
        scanLine.style.transform = 'translateY(0)';
      }
    });

    // Request consult consult triggers
    const btn = card.querySelector('.p6-trainer-book-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const trainerName = card.querySelector('.p6-trainer-name').textContent;
        openReserveModal(container, `Biometric Consult Eval`, `Arranged upon schedule request`, trainerName);
      });
    }
  });
}

// ────────────────────────────────────────────────────────────
// 8. FAQ INTERACTIVE ACCORDION ACCORDIAN CONTROLS
// ────────────────────────────────────────────────────────────
function initFAQAccordion(container) {
  const buttons = container.querySelectorAll('.p6-faq-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all other options
      container.querySelectorAll('.p6-faq-item').forEach(i => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ────────────────────────────────────────────────────────────
// 9. NEWSLETTER SUBSCRIPTION INTERACTION
// ────────────────────────────────────────────────────────────
function initNewsletter(container) {
  const input = container.querySelector('#p6-newsletter-input');
  const btn = container.querySelector('#p6-newsletter-btn');
  const toast = container.querySelector('#p6-newsletter-toast');

  if (btn && input && toast) {
    btn.addEventListener('click', () => {
      if (!input.value || !input.value.includes('@')) {
        alert('Please specify a valid telemetry email registry.');
        return;
      }
      
      toast.classList.add('active');
      input.value = '';
      setTimeout(() => {
        toast.classList.remove('active');
      }, 4000);
    });
  }
}

// ────────────────────────────────────────────────────────────
// 10. PROTOCOL MODALS AND RESERVATIONS TRIGGERS
// ────────────────────────────────────────────────────────────
function initModals(container) {
  // Checkout Modal
  const checkoutModal = container.querySelector('#p6-checkout-modal');
  const checkoutClose = container.querySelector('#p6-checkout-close');
  const checkoutTrigger = container.querySelector('#p6-customizer-checkout-btn');
  const checkoutNavTrigger = container.querySelector('#p6-nav-join-btn');
  const checkoutHeroTrigger = container.querySelector('#p6-hero-cta-plan');
  const checkoutForm = container.querySelector('#p6-checkout-form');
  const modalTotal = container.querySelector('#p6-modal-total-display');

  // Scroll button actions
  const heroCtaTour = container.querySelector('#p6-hero-cta-tour');
  if (heroCtaTour) {
    heroCtaTour.addEventListener('click', () => {
      const tour = container.querySelector('#p6-tour');
      if (tour) tour.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function openCheckout() {
    if (!checkoutModal) return;
    if (modalTotal) {
      const currentPrice = window.p6_current_total || 2499;
      modalTotal.textContent = `₹${currentPrice.toLocaleString()}/mo`;
    }
    checkoutModal.classList.add('active');
  }

  function closeCheckout() {
    if (checkoutModal) checkoutModal.classList.remove('active');
  }

  if (checkoutTrigger) checkoutTrigger.addEventListener('click', openCheckout);
  if (checkoutNavTrigger) checkoutNavTrigger.addEventListener('click', openCheckout);
  if (checkoutHeroTrigger) checkoutHeroTrigger.addEventListener('click', () => {
    const customizer = container.querySelector('#p6-customizer');
    if (customizer) customizer.scrollIntoView({ behavior: 'smooth' });
  });

  if (checkoutClose) checkoutClose.addEventListener('click', closeCheckout);
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckout();
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeCheckout();
      showToast(container, `Biometric profile matched. Your Apex protocol is initialized! Our team will contact you shortly.`);
    });
  }

  // Reservation Modal Close
  const reserveModal = container.querySelector('#p6-reserve-modal');
  const reserveClose = container.querySelector('#p6-reserve-close');
  const reserveForm = container.querySelector('#p6-reserve-form');

  function closeReserve() {
    if (reserveModal) reserveModal.classList.remove('active');
  }

  if (reserveClose) reserveClose.addEventListener('click', closeReserve);
  if (reserveModal) {
    reserveModal.addEventListener('click', (e) => {
      if (e.target === reserveModal) closeReserve();
    });
  }

  if (reserveForm) {
    reserveForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeReserve();
      const rNameInput = container.querySelector('#p6-res-name-input');
      const name = rNameInput ? rNameInput.value : 'Athlete';
      showToast(container, `Congratulations ${name}! Coached slot locked. Access token sent via SMS.`);
      if (rNameInput) rNameInput.value = '';
    });
  }
}

// ────────────────────────────────────────────────────────────
// AUXILIARY POPUP AND TOAST HANDLERS
// ────────────────────────────────────────────────────────────
function openReserveModal(container, className, time, trainer) {
  const modal = container.querySelector('#p6-reserve-modal');
  const lblName = container.querySelector('#p6-res-class-name');
  const lblTime = container.querySelector('#p6-res-class-time');
  const lblTrainer = container.querySelector('#p6-res-class-trainer');

  if (lblName) lblName.textContent = className;
  if (lblTime) lblTime.textContent = time;
  if (lblTrainer) lblTrainer.textContent = trainer;

  if (modal) modal.classList.add('active');
}

function showToast(container, message) {
  const toast = container.querySelector('#p6-toast-notify');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}
