import './page4.css';
import t1 from '../../assets/transform-1.png';
import t2 from '../../assets/transform-2.png';
import t3 from '../../assets/transform-3.png';
import * as THREE from 'three';

export function renderPage4(container) {
  container.innerHTML = `
    <div class="p4">

      <!-- ══════════════════════════════════
           NAVIGATION
      ══════════════════════════════════ -->
      <nav class="p4-nav">
        <a href="#p4-hero" class="p4-logo">
          NEXUS<span>FIT</span>
        </a>
        <div class="p4-nav-links">
          <a href="#p4-hero" class="active">3D CORE</a>
          <a href="#p4-arnold-section">GOLDEN ERA</a>
          <a href="#p4-calc">BMI & MACROS</a>
          <a href="#p4-transform">TRANSFORMATIONS</a>
          <a href="#p4-plans">MEMBERSHIPS</a>
        </div>
        <div class="p4-route-pills">
          <a href="/page/1" data-route="page1">PAGE 1</a>
          <a href="/page/2" data-route="page2">PAGE 2</a>
          <a href="/page/3" data-route="page3">PAGE 3</a>
          <a href="/page/4" data-route="page4" class="active">PAGE 4</a>
          <a href="/page/5" data-route="page5">PAGE 5</a>
        </div>
      </nav>

      <!-- ══════════════════════════════════
           HERO SECTION (CYBERNETIC 3D WEIGHT CORE)
      ══════════════════════════════════ -->
      <section id="p4-hero" class="p4-hero">
        <div class="p4-hero-grid">
          <div class="p4-hero-text-wrap">
            <div class="p4-badge">
              ⚡ INTERACTIVE 3D CYBERNETIC WEIGHT MATRIX
            </div>
            <h1 class="p4-title">
              <span class="p4-title-line p4-line-1">EVOLVE</span><br />
              <span class="p4-title-line neon-purple p4-line-2">BEYOND</span><br />
              <span class="p4-title-line neon-cyan p4-line-3">LIMITS.</span>
            </h1>
            <p class="p4-desc">
              Experience the next-gen cybernetic fitness matrix. Hover and scroll to manipulate the 3D metallic chrome dumbbell, knurled barbell shaft, and glowing orbital gyro rings.
            </p>
            <div class="p4-cta-group">
              <button class="p4-btn-primary" onclick="document.querySelector('#p4-arnold-section').scrollIntoView({behavior:'smooth'})">
                EXPLORE PROTOCOL
              </button>
              <button class="p4-btn-secondary" onclick="document.querySelector('#p4-calc').scrollIntoView({behavior:'smooth'})">
                CALCULATE TARGETS
              </button>
            </div>
          </div>

          <!-- 3D Cybernetic Dumbbell Canvas Box -->
          <div class="p4-hero-3d-box" id="p4-3d-box">
            <canvas id="p4-3d-canvas" class="p4-3d-canvas"></canvas>

            <!-- Cybernetic HUD Overlay Badges -->
            <div class="p4-hud-badge top-left">
              <span class="hud-dot cyan"></span> CYBERNETIC WEIGHT CORE
            </div>
            <div class="p4-hud-badge bottom-right">
              <span class="hud-dot purple"></span> REAL-TIME 3D PARALLAX
            </div>

            <!-- Scroll Progress Indicator Bar -->
            <div class="p4-scroll-indicator">
              <div class="p4-scroll-bar-track">
                <div id="p4-scroll-bar-fill" class="p4-scroll-bar-fill"></div>
              </div>
              <div id="p4-scroll-status-text" class="p4-scroll-status-text">INTERACTIVE 3D CYBER DUMBBELL MATRIX</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════
           ARNOLD LEGEND PROTOCOL BREAKDOWN
      ══════════════════════════════════ -->
      <section id="p4-arnold-section" class="p4-calc-section">
        <div style="text-align: center; margin-bottom: 48px;">
          <div class="p4-badge">CLASSIC BODYBUILDING LEGACY</div>
          <h2 class="p4-section-title">THE ARNOLD 3-PILLAR SPLIT</h2>
          <p class="p4-section-sub">Master the signature training principles behind the world's most iconic physique.</p>
        </div>

        <div class="p4-results-grid" style="grid-template-columns: repeat(3, 1fr); gap: 24px;">
          <div class="p4-stat-box" style="text-align: left; padding: 32px;">
            <div class="p4-stat-val" style="font-size: 24px; color: #00f0ff;">01. CHEST & BACK</div>
            <div class="p4-stat-lbl" style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 10px; line-height: 1.6;">
              Superset opposing muscle groups to maximize pump, chest expansion, and classic V-taper lat width.
            </div>
          </div>

          <div class="p4-stat-box" style="text-align: left; padding: 32px; border-color: #9d4edd;">
            <div class="p4-stat-val" style="font-size: 24px; color: #9d4edd;">02. SHOULDERS & ARMS</div>
            <div class="p4-stat-lbl" style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 10px; line-height: 1.6;">
              Strict Arnold dumbbell presses combined with peak-contraction incline biceps curls for signature arm peaks.
            </div>
          </div>

          <div class="p4-stat-box" style="text-align: left; padding: 32px;">
            <div class="p4-stat-val" style="font-size: 24px; color: #00f0ff;">03. LEGS & VACUUM</div>
            <div class="p4-stat-lbl" style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 10px; line-height: 1.6;">
              Heavy high-rep squats paired with daily stomach vacuum posing routines for narrow waist aesthetics.
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════
           INTERACTIVE BMI & MACRO CALCULATOR
      ══════════════════════════════════ -->
      <section id="p4-calc" class="p4-calc-section">
        <div class="p4-calc-card">
          <div>
            <div class="p4-badge">BIOMETRIC MATRIX</div>
            <h2 class="p4-section-title">CALCULATE TARGETS</h2>
            <p class="p4-section-sub">Adjust your metrics to calculate your daily caloric intake and macro ratio.</p>

            <div class="p4-input-group">
              <label class="p4-label">
                Weight (KG): <span id="p4-weight-val" class="p4-val-disp">75 kg</span>
              </label>
              <input type="range" id="p4-weight" class="p4-input-range" min="45" max="140" value="75" />
            </div>

            <div class="p4-input-group">
              <label class="p4-label">
                Height (CM): <span id="p4-height-val" class="p4-val-disp">178 cm</span>
              </label>
              <input type="range" id="p4-height" class="p4-input-range" min="140" max="210" value="178" />
            </div>
          </div>

          <!-- Output Display -->
          <div>
            <div class="p4-results-grid">
              <div class="p4-stat-box">
                <div id="p4-bmi-out" class="p4-stat-val">23.7</div>
                <div class="p4-stat-lbl">BMI SCORE</div>
              </div>
              <div class="p4-stat-box">
                <div id="p4-cals-out" class="p4-stat-val">2,450</div>
                <div class="p4-stat-lbl">DAILY KCAL</div>
              </div>
              <div class="p4-stat-box">
                <div id="p4-pro-out" class="p4-stat-val">165g</div>
                <div class="p4-stat-lbl">PROTEIN</div>
              </div>
              <div class="p4-stat-box">
                <div id="p4-fat-out" class="p4-stat-val">68g</div>
                <div class="p4-stat-lbl">HEALTHY FATS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════
           TRANSFORMATION COMPARISON SLIDER
      ══════════════════════════════════ -->
      <section id="p4-transform" class="p4-transform-section">
        <div style="text-align: center; margin-bottom: 40px;">
          <div class="p4-badge">VERIFIED RESULTS</div>
          <h2 class="p4-section-title">REAL MEMBER TRANSFORMATIONS</h2>
          <p class="p4-section-sub">Drag the interactive slider to view the 12-week transformation.</p>
        </div>

        <div class="p4-slider-wrap" id="p4-slider">
          <!-- After Photo (Background) -->
          <img src="${t3}" alt="After Transformation" class="p4-img-after" />

          <!-- Before Photo (Clipped overlay) -->
          <div class="p4-img-before-wrap" id="p4-before-wrap">
            <img src="${t1}" alt="Before Transformation" class="p4-img-before" />
          </div>

          <!-- Drag Handle -->
          <div class="p4-slider-handle" id="p4-handle">↔</div>
        </div>
      </section>

      <!-- ══════════════════════════════════
           MEMBERSHIP PLANS
      ══════════════════════════════════ -->
      <section id="p4-plans" class="p4-transform-section">
        <div style="text-align: center; margin-bottom: 40px;">
          <div class="p4-badge">JOIN THE PROTOCOL</div>
          <h2 class="p4-section-title">MEMBERSHIP TIERS</h2>
        </div>

        <div class="p4-plans-grid">
          <div class="p4-plan-card">
            <div class="p4-plan-name">STARTER</div>
            <div class="p4-plan-price">₹1,999<span style="font-size:14px;">/mo</span></div>
            <ul class="p4-plan-features">
              <li>Full Gym Access</li>
              <li>Locker & Sauna Access</li>
              <li>Basic Biometric Tracking</li>
            </ul>
            <button class="p4-btn-secondary" style="width:100%;">SELECT TIER</button>
          </div>

          <div class="p4-plan-card featured">
            <div class="p4-badge" style="margin-bottom:12px;">MOST POPULAR</div>
            <div class="p4-plan-name">CYBER PRO</div>
            <div class="p4-plan-price">₹3,499<span style="font-size:14px;">/mo</span></div>
            <ul class="p4-plan-features">
              <li>Unlimited 24/7 Access</li>
              <li>1-on-1 Dedicated Coach</li>
              <li>AI Macro Nutrition Plan</li>
              <li>Cryotherapy Access</li>
            </ul>
            <button class="p4-btn-primary" style="width:100%;">JOIN PRO</button>
          </div>

          <div class="p4-plan-card">
            <div class="p4-plan-name">ELITE VIP</div>
            <div class="p4-plan-price">₹5,999<span style="font-size:14px;">/mo</span></div>
            <ul class="p4-plan-features">
              <li>Private VIP Lounge</li>
              <li>Weekly Boditrax Scans</li>
              <li>Custom Meal Prep Delivery</li>
            </ul>
            <button class="p4-btn-secondary" style="width:100%;">SELECT TIER</button>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════
           FOOTER
      ══════════════════════════════════ -->
      <footer class="p4-footer">
        © 2026 NEXUS FIT PROTOCOL. Built by Antigravity Agent.
      </footer>

    </div>
  `;

  // ── ROUTE NAVIGATION HANDLERS ──
  container.querySelectorAll('.p4-route-pills a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.history.pushState({}, '', href);
      window.dispatchEvent(new Event('popstate'));
    });
  });

  // ── 1. BMI CALCULATOR LOGIC ──
  const weightInput = container.querySelector('#p4-weight');
  const heightInput = container.querySelector('#p4-height');
  const weightDisp  = container.querySelector('#p4-weight-val');
  const heightDisp  = container.querySelector('#p4-height-val');
  const bmiOut      = container.querySelector('#p4-bmi-out');
  const calsOut     = container.querySelector('#p4-cals-out');
  const proOut      = container.querySelector('#p4-pro-out');
  const fatOut      = container.querySelector('#p4-fat-out');

  function updateCalc() {
    if (!weightInput || !heightInput) return;
    const w = parseFloat(weightInput.value);
    const h = parseFloat(heightInput.value) / 100;

    weightDisp.textContent = `${w} kg`;
    heightDisp.textContent = `${heightInput.value} cm`;

    const bmi = (w / (h * h)).toFixed(1);
    const cals = Math.round(w * 32);
    const pro = Math.round(w * 2.2);
    const fat = Math.round(w * 0.9);

    if (bmiOut) bmiOut.textContent = bmi;
    if (calsOut) calsOut.textContent = cals.toLocaleString();
    if (proOut) proOut.textContent = `${pro}g`;
    if (fatOut) fatOut.textContent = `${fat}g`;
  }

  if (weightInput && heightInput) {
    weightInput.addEventListener('input', updateCalc);
    heightInput.addEventListener('input', updateCalc);
    updateCalc();
  }

  // ── 2. BEFORE / AFTER TRANSFORMATION SLIDER ──
  const slider = container.querySelector('#p4-slider');
  const beforeWrap = container.querySelector('#p4-before-wrap');
  const handle = container.querySelector('#p4-handle');

  if (slider && beforeWrap && handle) {
    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let x = clientX - rect.left;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      const pct = (x / rect.width) * 100;
      beforeWrap.style.width = `${pct}%`;
      handle.style.left = `${pct}%`;
    };

    slider.addEventListener('mousedown', (e) => { isDragging = true; setPosition(e.clientX); });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => { if (isDragging) setPosition(e.clientX); });

    slider.addEventListener('touchstart', (e) => { isDragging = true; setPosition(e.touches[0].clientX); });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => { if (isDragging) setPosition(e.touches[0].clientX); });
  }

  // ── 3. HERO TITLE PARALLAX TILT ──
  const heroSec = container.querySelector('#p4-hero');
  const heroTitle = container.querySelector('.p4-title');
  if (heroSec && heroTitle) {
    heroSec.addEventListener('mousemove', (e) => {
      const rect = heroSec.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      heroTitle.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
      heroTitle.style.transition = 'transform 0.1s ease-out';
    });
    heroSec.addEventListener('mouseleave', () => {
      heroTitle.style.transform = 'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
      heroTitle.style.transition = 'transform 0.5s ease-out';
    });
  }

  // ── 4. UNIQUE 3D CYBERNETIC WEIGHT & GYRO CORE ENGINE ──
  initCyberDumbbell3D(container);
}

// ────────────────────────────────────────────────────────────
// UNIQUE 3D CYBERNETIC WEIGHT & GYRO CORE ENGINE
// ────────────────────────────────────────────────────────────
function initCyberDumbbell3D(container) {
  const canvas = container.querySelector('#p4-3d-canvas');
  if (!canvas) return;

  const scrollFill = container.querySelector('#p4-scroll-bar-fill');
  const statusText = container.querySelector('#p4-scroll-status-text');

  const parent = canvas.parentElement;
  const width = parent.clientWidth || 520;
  const height = parent.clientHeight || 520;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 6.5);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height, false);

  // ── Lights ──
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const cyanLight = new THREE.PointLight(0x00f0ff, 4, 20);
  cyanLight.position.set(-3, 3, 3);
  scene.add(cyanLight);

  const purpleLight = new THREE.PointLight(0x9d4edd, 4, 20);
  purpleLight.position.set(3, -3, 3);
  scene.add(purpleLight);

  const goldLight = new THREE.SpotLight(0xffd700, 3, 20, Math.PI / 4, 0.5);
  goldLight.position.set(0, 5, 4);
  scene.add(goldLight);

  // ── Main 3D Assembly ──
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // Metallic Materials
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0x22263a,
    metalness: 0.95,
    roughness: 0.15,
    emissive: 0x0d111d
  });

  const cyanGlowMat = new THREE.MeshStandardMaterial({
    color: 0x00f0ff,
    metalness: 0.9,
    roughness: 0.1,
    emissive: 0x00f0ff,
    emissiveIntensity: 0.7
  });

  const purpleGlowMat = new THREE.MeshStandardMaterial({
    color: 0x9d4edd,
    metalness: 0.9,
    roughness: 0.1,
    emissive: 0x9d4edd,
    emissiveIntensity: 0.7
  });

  // 1. Dumbbell Center Handle (Barbell shaft)
  const barGeo = new THREE.CylinderGeometry(0.12, 0.12, 3.2, 32);
  const barMesh = new THREE.Mesh(barGeo, chromeMat);
  barMesh.rotation.z = Math.PI / 2;
  mainGroup.add(barMesh);

  // 2. Knurling grip rings on handle
  for (let i = -3; i <= 3; i++) {
    const ringGeo = new THREE.TorusGeometry(0.13, 0.025, 16, 32);
    const ringMesh = new THREE.Mesh(ringGeo, cyanGlowMat);
    ringMesh.position.x = i * 0.15;
    ringMesh.rotation.y = Math.PI / 2;
    mainGroup.add(ringMesh);
  }

  // 3. Left Hexagonal Weight Plates
  const plateGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.28, 6);
  const leftPlate1 = new THREE.Mesh(plateGeo, chromeMat);
  leftPlate1.position.x = -1.0;
  leftPlate1.rotation.z = Math.PI / 2;
  mainGroup.add(leftPlate1);

  const leftPlate2 = new THREE.Mesh(plateGeo, chromeMat);
  leftPlate2.position.x = -1.35;
  leftPlate2.rotation.z = Math.PI / 2;
  leftPlate2.scale.set(0.9, 1, 0.9);
  mainGroup.add(leftPlate2);

  // Left Plate Cyan Ring Accent
  const leftAcc = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.03, 16, 6), cyanGlowMat);
  leftAcc.position.x = -1.0;
  leftAcc.rotation.y = Math.PI / 2;
  mainGroup.add(leftAcc);

  // 4. Right Hexagonal Weight Plates
  const rightPlate1 = new THREE.Mesh(plateGeo, chromeMat);
  rightPlate1.position.x = 1.0;
  rightPlate1.rotation.z = Math.PI / 2;
  mainGroup.add(rightPlate1);

  const rightPlate2 = new THREE.Mesh(plateGeo, chromeMat);
  rightPlate2.position.x = 1.35;
  rightPlate2.rotation.z = Math.PI / 2;
  rightPlate2.scale.set(0.9, 1, 0.9);
  mainGroup.add(rightPlate2);

  // Right Plate Purple Ring Accent
  const rightAcc = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.03, 16, 6), purpleGlowMat);
  rightAcc.position.x = 1.0;
  rightAcc.rotation.y = Math.PI / 2;
  mainGroup.add(rightAcc);

  // 5. Outer Concentric Orbital Gyro Rings
  const orbitGroup1 = new THREE.Group();
  mainGroup.add(orbitGroup1);

  const orbitGeo1 = new THREE.TorusGeometry(1.9, 0.02, 16, 64);
  const orbitMesh1 = new THREE.Mesh(orbitGeo1, cyanGlowMat);
  orbitGroup1.add(orbitMesh1);

  const orbitGroup2 = new THREE.Group();
  mainGroup.add(orbitGroup2);

  const orbitGeo2 = new THREE.TorusGeometry(2.2, 0.02, 16, 64);
  const orbitMesh2 = new THREE.Mesh(orbitGeo2, purpleGlowMat);
  orbitGroup2.add(orbitMesh2);

  // 6. Central Glowing Core Sphere
  const coreGeo = new THREE.SphereGeometry(0.35, 32, 32);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: 0xffd700,
    emissiveIntensity: 1.2,
    metalness: 0.5,
    roughness: 0.1
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  mainGroup.add(coreMesh);

  // ── Mouse & Scroll Interactivity ──
  let mouseX = 0, mouseY = 0;
  let targetScroll = 0, currentScroll = 0;

  if (parent) {
    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight * 0.8;
    targetScroll = Math.min(Math.max(scrollY / maxScroll, 0), 1);
  }, { passive: true });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    currentScroll = THREE.MathUtils.lerp(currentScroll, targetScroll, 0.08);

    // Continuous 3D rotation
    mainGroup.rotation.y = elapsedTime * 0.5 + currentScroll * Math.PI;
    mainGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.2 + mouseY * 0.4;
    mainGroup.rotation.z = Math.cos(elapsedTime * 0.3) * 0.15 + mouseX * 0.4;

    // Orbital rings counter-rotation
    orbitGroup1.rotation.x = elapsedTime * 0.8;
    orbitGroup1.rotation.y = elapsedTime * 0.6;

    orbitGroup2.rotation.y = -elapsedTime * 0.7;
    orbitGroup2.rotation.z = elapsedTime * 0.5;

    // Core pulsing scale
    const pulse = 1.0 + Math.sin(elapsedTime * 3) * 0.08;
    coreMesh.scale.set(pulse, pulse, pulse);

    // Update Progress Indicator Bar
    if (scrollFill) scrollFill.style.width = `${Math.round(currentScroll * 100)}%`;
    if (statusText) {
      statusText.textContent = `${Math.round(currentScroll * 100)}% • CYBERNETIC WEIGHT CORE SYNCED`;
    }

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