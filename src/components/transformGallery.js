import t1 from '../assets/transform-1.png';
import t2 from '../assets/transform-2.png';
import t3 from '../assets/transform-3.png';
import t4 from '../assets/transform-4.png';

const transformations = [
  {
    img: t1,
    name: 'Arjun S., 28',
    tags: ['Weight Loss', '5 Months'],
    kgLost: '22 kg',
    weeks: '20',
    quote: '"I went from 94 kg to 72 kg. Never felt this energetic in my life!"'
  },
  {
    img: t2,
    name: 'Priya M., 31',
    tags: ['Toning', '4 Months'],
    kgLost: '14 kg',
    weeks: '16',
    quote: '"The custom Indian diet plan was a complete game changer for me!"',
    featured: true
  }
];

/**
 * Renders the Fat-to-Fit gallery section.
 * @param {HTMLElement} container - parent element to append into
 * @param {string} variant - 'p1' (dark cyan) or 'p2' (gold glass)
 */
export function renderTransformGallery(container, variant = 'p1') {
  const isP2 = variant === 'p2';
  const accentColor = isP2 ? '#fbbf24' : '#38bdf8';
  const btnBg       = isP2 ? '#fbbf24' : '#38bdf8';
  const btnColor    = isP2 ? '#1a0326' : '#030712';

  const section = document.createElement('section');
  section.id = 'gallery';
  section.className = `gallery-section${isP2 ? ' p2-gallery' : ''}`;

  section.innerHTML = `
    <div class="gallery-header">
      <div class="gallery-header-left">
        <div class="gallery-tag">REAL TRANSFORMATIONS</div>
        <h2 class="gallery-title">From Fat&nbsp;→&nbsp;Fit<br/>Real People, Real Results 🔥</h2>
        <p class="gallery-sub">
          100% genuine transformations from members across India — no filters, no tricks.
          Just hard work, expert coaching &amp; Indian-made nutrition plans.
        </p>
      </div>
      <button class="gallery-scroll-btn" id="gallery-scroll-btn">
        View All Stories ↗
      </button>
    </div>

    <div class="gallery-grid">
      ${transformations.map((t, i) => `
        <div class="trans-card reveal${t.featured ? ' featured-card' : ''}">
          <div class="trans-img-wrap">
            <!-- Split image: left = before half, right = after half -->
            <div class="trans-before">
              <img src="${t.img}" alt="${t.name} before" loading="lazy" />
              <span class="trans-before-label">BEFORE</span>
            </div>
            <div class="trans-after">
              <img src="${t.img}" alt="${t.name} after" loading="lazy" />
              <span class="trans-after-label">AFTER</span>
            </div>
            <div class="trans-divider"></div>
          </div>
          <div class="trans-info">
            <div class="trans-name">${t.name}</div>
            <div class="trans-meta">
              ${t.tags.map(tag => `<span class="trans-tag">${tag}</span>`).join('')}
            </div>
            <div class="trans-stats-row">
              <div class="trans-stat-item">
                <div class="trans-stat-val">${t.kgLost}</div>
                <div class="trans-stat-lbl">Lost</div>
              </div>
              <div class="trans-stat-item">
                <div class="trans-stat-val">${t.weeks}W</div>
                <div class="trans-stat-lbl">Weeks</div>
              </div>
              <div class="trans-stat-item">
                <div class="trans-stat-val">⭐ 5.0</div>
                <div class="trans-stat-lbl">Rating</div>
              </div>
            </div>
            <p class="trans-quote">${t.quote}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="gallery-cta-row">
      <button class="gallery-cta-primary" style="background:${btnBg}; color:${btnColor};"
        onclick="document.querySelector('#${isP2 ? 'p2-programs' : 'p1-membership'}').scrollIntoView({behavior:'smooth'})">
        Start My Transformation ↗
      </button>
      <button class="gallery-cta-secondary">
        See 200+ More Success Stories
      </button>
    </div>
  `;

  container.appendChild(section);

  // Scroll-reveal for cards
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  section.querySelectorAll('.trans-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
}
