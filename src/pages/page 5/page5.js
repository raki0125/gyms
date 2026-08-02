import './page5.css';
import * as THREE from 'three';
import { scroll, animate, inView, stagger } from 'framer-motion';

// ── Unsplash imagery (gym / fire-lit strength training aesthetic) ──
const holdImg = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80'; // athlete holding weight, tension pose
const curlImg = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80'; // intense muscle/curl close-up


const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export function renderPage5(container) {
  container.innerHTML = `
    <div class="p5">

      <!-- ══════════════════════════════════ NAVIGATION ══════════════════════════════════ -->
      <nav class="p5-nav">
        <a href="#p5-scroll-section" class="p5-logo">INFERNO<span>ARCHITECTURE</span></a>
        <div class="p5-nav-links">
          <a href="#p5-scroll-section" class="active">PROTOCOL REVEAL</a>
          <a href="#p5-specs">FIRE SPECS</a>
          <a href="#p5-modes">INFERNO MODES</a>
        </div>
        <div class="p5-route-pills">
          <a href="/page/1" data-route="page1">PAGE 1</a>
          <a href="/page/2" data-route="page2">PAGE 2</a>
          <a href="/page/3" data-route="page3">PAGE 3</a>
          <a href="/page/4" data-route="page4">PAGE 4</a>
          <a href="/page/5" data-route="page5" class="active">PAGE 5</a>
        </div>
        <div class="p5-scroll-progress"><div class="p5-scroll-progress-fill" id="p5-progress-fill"></div></div>
      </nav>

      <!-- ══════════════════════════════════ STICKY SCROLL REVEAL ══════════════════════════════════ -->
      <div id="p5-scroll-section" class="p5-scroll-track">
        <div class="p5-sticky-viewport">
          <div class="p5-grain"></div>
          <canvas id="p5-anime-fire-canvas" class="p5-anime-fire-canvas"></canvas>

          <div id="p5-badge" class="p5-hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            PHASE 01 • MECHANICAL TENSION LOCK
          </div>

          <h1 id="p5-title" class="p5-hero-title">
            <span class="p5-title-line red-glow">HOLD THE LOAD.</span><br />
            <span class="p5-title-line fire-gradient">IGNITE THE HEAT.</span>
          </h1>

          <div class="p5-anime-stage" id="p5-anime-stage">
            <div class="p5-ki-aura-glow"></div>
            <img src="${holdImg}" alt="Athletic Tension Stance" class="p5-anime-img pose-hold" id="p5-img-hold" />
            <img src="${curlImg}" alt="Inferno Hypertrophy Burn" class="p5-anime-img pose-curl" id="p5-img-curl" />
          </div>

          <div class="p5-hud-bar" id="p5-hud-bar">
            <span class="p5-hud-dot"></span>
            <span id="p5-hud-status">SCROLL TO IGNITE THE PROTOCOL</span>
          </div>
        </div>
      </div>

      <!-- ══════════════════════════════════ SPECS ══════════════════════════════════ -->
      <section id="p5-specs" class="p5-specs-section">
        <div class="p5-section-label reveal-fade">PERFORMANCE SPECS</div>
        <h2 class="p5-section-title reveal-fade">BUILT FOR ANABOLIC DOMINANCE.</h2>
        <div class="p5-specs-grid">
          <div class="p5-spec-card reveal-up">
            <div><div class="p5-spec-big" data-count="4.8" data-suffix="x">0x</div><div class="p5-spec-name">mTORC1 Heat Signaling</div></div>
            <p class="p5-spec-desc">Optimized thermal pathways for hyper-fast myofibrillar muscle repair and explosive density growth.</p>
          </div>
          <div class="p5-spec-card reveal-up">
            <div><div class="p5-spec-big" data-count="1200" data-prefix="" data-suffix="°">0°</div><div class="p5-spec-name">Metabolic Inferno Burn</div></div>
            <p class="p5-spec-desc">Elevated post-exercise oxygen consumption (EPOC) burning calories for up to 36 hours post-workout.</p>
          </div>
          <div class="p5-spec-card reveal-up">
            <div><div class="p5-spec-big" data-static="0.02s">0.02s</div><div class="p5-spec-name">Neural Torque Speed</div></div>
            <p class="p5-spec-desc">Ultra-fast Type IIx fast-twitch motor unit recruitment delivering instant explosive power under load.</p>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════ MODES ══════════════════════════════════ -->
      <section id="p5-modes" class="p5-modes-section">
        <div class="p5-section-label reveal-fade">PROGRAMMING MODES</div>
        <h2 class="p5-section-title reveal-fade">THREE DISTINCT FIRE PROTOCOLS.</h2>

        <div class="p5-tab-buttons reveal-fade">
          <button class="p5-tab-btn active" data-mode="hypertrophy">HYPERTROPHY HEAT</button>
          <button class="p5-tab-btn" data-mode="tension">POWER TENSION</button>
          <button class="p5-tab-btn" data-mode="cut">METABOLIC SHRED</button>
        </div>

        <div class="p5-mode-display reveal-up" id="p5-mode-content">
          <div>
            <div class="p5-mode-title" id="p5-m-title">HYPERTROPHY HEAT</div>
            <p class="p5-mode-desc" id="p5-m-desc">Engineered specifically for raw muscle volume and cross-sectional density. Combines high-volume mechanical load with strategic intra-set tension pause.</p>
          </div>
          <div>
            <div class="p5-mode-stat" id="p5-m-stat">8-12</div>
            <div class="p5-mode-stat-lbl" id="p5-m-stat-lbl">OPTIMAL REP RANGE</div>
          </div>
        </div>
      </section>

      <footer class="p5-footer">© 2026 INFERNO MUSCLE ARCHITECTURE. Built by Antigravity Agent.</footer>
    </div>
  `;

  // ── ROUTE NAVIGATION ──
  container.querySelectorAll('.p5-route-pills a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState({}, '', link.getAttribute('href'));
      window.dispatchEvent(new Event('popstate'));
    });
  });

  // ── SMOOTH SCROLL ANCHORS ──
  container.querySelectorAll('.p5-nav-links a, .p5-logo').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetEl = container.querySelector(href);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
          container.querySelectorAll('.p5-nav-links a').forEach(a => a.classList.remove('active'));
          if (link.classList.contains('p5-logo') === false) {
            link.classList.add('active');
          }
        }
      }
    });
  });

  // ── MODE SELECTOR (crossfade with framer-motion) ──
  const tabBtns  = container.querySelectorAll('.p5-tab-btn');
  const modeCard = container.querySelector('#p5-mode-content');
  const mTitle   = container.querySelector('#p5-m-title');
  const mDesc    = container.querySelector('#p5-m-desc');
  const mStat    = container.querySelector('#p5-m-stat');
  const mStatLbl = container.querySelector('#p5-m-stat-lbl');

  const modesData = {
    hypertrophy: { title: 'HYPERTROPHY HEAT', desc: 'Engineered specifically for raw muscle volume and cross-sectional density. Combines high-volume mechanical load with strategic intra-set tension pause.', stat: '8-12', statLbl: 'OPTIMAL REP RANGE' },
    tension:     { title: 'POWER TENSION',    desc: 'Focused on peak torque output and central nervous system adaptation. Maximizes heavy compound progressive overload.', stat: '3-5', statLbl: 'MAX STRENGTH REPS' },
    cut:         { title: 'METABOLIC SHRED',  desc: 'High-density short rest intervals designed to elevate basal metabolic rate while preserving 100% of lean muscle tissue.', stat: '45s', statLbl: 'REST INTERVAL' }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return;
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const data = modesData[btn.getAttribute('data-mode')];
      if (!data || !modeCard) return;

      animate(modeCard, { opacity: [1, 0], y: [0, 10] }, { duration: 0.18, ease: 'easeIn' }).then(() => {
        mTitle.textContent = data.title;
        mDesc.textContent = data.desc;
        mStat.textContent = data.stat;
        mStatLbl.textContent = data.statLbl;
        animate(modeCard, { opacity: [0, 1], y: [10, 0] }, { duration: 0.45, ease: [0.16, 1, 0.3, 1] });
      });
    });
  });

  // ── HERO: SCROLL-LINKED REVEAL ──
  const scrollTrack = container.querySelector('#p5-scroll-section');
  const stage    = container.querySelector('#p5-anime-stage');
  const holdEl   = container.querySelector('#p5-img-hold');
  const curlEl   = container.querySelector('#p5-img-curl');
  const badge    = container.querySelector('#p5-badge');
  const title    = container.querySelector('#p5-title');
  const aura     = container.querySelector('.p5-ki-aura-glow');
  const canvas   = container.querySelector('#p5-anime-fire-canvas');
  const hudStatus= container.querySelector('#p5-hud-status');
  const progFill = container.querySelector('#p5-progress-fill');

  let phase = 1;
  let fireIntensity = 0.5;

  function setBadgeAndTitle(nextPhase) {
    if (!badge || !title) return;
    animate([badge, title], { opacity: [1, 0], filter: ['blur(0px)', 'blur(6px)'] }, { duration: 0.22, ease: 'easeIn' }).then(() => {
      if (nextPhase === 2) {
        badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> PHASE 02 • ANABOLIC INFERNO BURN`;
        title.innerHTML = `<span class="p5-title-line red-glow">EXPLODE THROUGH</span><br /><span class="p5-title-line fire-gradient">THE BICEPS PEAK.</span>`;
      } else {
        badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> PHASE 01 • MECHANICAL TENSION LOCK`;
        title.innerHTML = `<span class="p5-title-line red-glow">HOLD THE LOAD.</span><br /><span class="p5-title-line fire-gradient">IGNITE THE HEAT.</span>`;
      }
      animate([badge, title], { opacity: [0, 1], filter: ['blur(6px)', 'blur(0px)'] }, { duration: 0.35, ease: 'easeOut' });
    });
  }

  function updateProgress(pVal) {
    const p = clamp(pVal, 0, 1);
    const eased = easeOutCubic(p);
    const reveal = clamp(p / 0.5, 0, 1);

    if (holdEl) holdEl.style.opacity = (1 - reveal).toFixed(3);
    if (curlEl) curlEl.style.opacity = reveal.toFixed(3);
    if (stage) stage.style.transform = `scale(${lerp(0.86, 1.12, eased).toFixed(3)}) translateY(${lerp(10, -10, eased).toFixed(1)}px)`;
    if (aura) aura.style.opacity = lerp(0.55, 1, eased).toFixed(2);
    if (canvas) canvas.style.opacity = lerp(0.45, 1, eased).toFixed(2);
    if (progFill) progFill.style.width = `${(p * 100).toFixed(1)}%`;

    fireIntensity = lerp(0.4, 1.4, eased);

    const nextPhase = p >= 0.42 ? 2 : 1;
    if (nextPhase !== phase) {
      phase = nextPhase;
      stage?.classList.toggle('curled', phase === 2);
      setBadgeAndTitle(phase);
    }
  }

  // Framer Motion scroll binding
  scroll(
    (info) => {
      const p = typeof info === 'number' ? info : (info?.y?.progress ?? info?.progress ?? 0);
      updateProgress(p);
    },
    { target: scrollTrack, offset: ['start start', 'end end'] }
  );

  // Fallback window scroll listener for precise track calculation
  const handleScroll = () => {
    if (!scrollTrack) return;
    const rect = scrollTrack.getBoundingClientRect();
    const trackHeight = scrollTrack.clientHeight - window.innerHeight;
    if (trackHeight <= 0) return;
    const progress = clamp(-rect.top / trackHeight, 0, 1);
    updateProgress(progress);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ── SUBTLE MOUSE PARALLAX TILT ON HERO STAGE ──
  const viewport = container.querySelector('.p5-sticky-viewport');
  if (viewport && stage) {
    viewport.addEventListener('pointermove', (e) => {
      const rect = viewport.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      animate(stage, { rotateY: px * 8, rotateX: -py * 8 }, { duration: 0.4, ease: 'easeOut' });
    });
    viewport.addEventListener('pointerleave', () => {
      animate(stage, { rotateY: 0, rotateX: 0 }, { duration: 0.6, ease: 'easeOut' });
    });
  }

  // ── SCROLL-TRIGGERED SECTION REVEALS ──
  inView(container.querySelectorAll('.reveal-fade'), ({ target }) => {
    animate(target, { opacity: [0, 1], y: [16, 0] }, { duration: 0.6, ease: [0.16, 1, 0.3, 1] });
  }, { amount: 0.2 });

  inView(container.querySelectorAll('.reveal-up'), ({ target }) => {
    animate(target, { opacity: [0, 1], y: [40, 0] }, { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: stagger(0.08) });
  }, { amount: 0.15 });

  // ── ANIMATED COUNTERS ──
  container.querySelectorAll('[data-count]').forEach((el) => {
    inView(el, () => {
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const isFloat = target % 1 !== 0;
      animate(0, target, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => { el.textContent = `${prefix}${isFloat ? v.toFixed(1) : Math.round(v)}${suffix}`; }
      });
    }, { amount: 0.5 });
  });

  // ── THREE.JS FIRE PARTICLES ──
  init2DAnimeFireCanvas(container, () => fireIntensity);
}

// ────────────────────────────────────────────────────────────
// THREE.JS FIRE PARTICLES SHADER
// ────────────────────────────────────────────────────────────
function init2DAnimeFireCanvas(container, getIntensity) {
  const canvas = container.querySelector('#p5-anime-fire-canvas');
  if (!canvas) return;

  const parent = canvas.parentElement;
  const width = parent.clientWidth || window.innerWidth;
  const height = parent.clientHeight || window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height, false);

  const count = 550;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const vY = new Float32Array(count);
  const vX = new Float32Array(count);
  const flick = new Float32Array(count);

  const colRed = new THREE.Color(0xff1e27);
  const colOrange = new THREE.Color(0xff6600);
  const colGold = new THREE.Color(0xffcc00);

  for (let i = 0; i < count; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 7.5;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 5.5;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 2.5;

    vY[i] = 0.01 + Math.random() * 0.022;
    vX[i] = (Math.random() - 0.5) * 0.007;
    flick[i] = Math.random() * Math.PI * 2;
    sizes[i] = 0.03 + Math.random() * 0.05;

    const rand = Math.random();
    const c = rand > 0.6 ? colRed : rand > 0.32 ? colOrange : colGold;
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const emberSystem = new THREE.Points(geo, mat);
  scene.add(emberSystem);

  const clock = new THREE.Clock();

  function animateFrame() {
    requestAnimationFrame(animateFrame);
    const t = clock.getElapsedTime();
    const intensity = getIntensity ? getIntensity() : 0.6;
    const positions = geo.attributes.position.array;

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += vY[i] * intensity;
      positions[i * 3] += vX[i] + Math.sin(t * 3 + flick[i]) * 0.003 * intensity;

      if (positions[i * 3 + 1] > 3.0) {
        positions[i * 3 + 1] = -3.0;
        positions[i * 3] = (Math.random() - 0.5) * 7.5;
      }
    }

    geo.attributes.position.needsUpdate = true;
    mat.opacity = lerp(0.55, 0.95, clamp(intensity / 1.4));
    mat.size = lerp(0.04, 0.065, clamp(intensity / 1.4));
    renderer.render(scene, camera);
  }
  animateFrame();

  function onResize() {
    if (!parent) return;
    const w = parent.clientWidth || window.innerWidth;
    const h = parent.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  window.addEventListener('resize', onResize);
}