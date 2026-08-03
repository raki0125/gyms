import './style.css';
import { renderPage1 } from './pages/page 1/page1.js';
import { renderPage2 } from './pages/page 2/page2.js';
import { renderPage3 } from './pages/page 3/page3.js';
import { renderPage4 } from './pages/page 4/page4.js';
import { renderPage5 } from './pages/page 5/page5.js';
import { renderPage6 } from './pages/page 6/page 6.js';
import { renderPage7 } from './pages/page 7/page 7.js';

const app = document.querySelector('#app');

function getPageFromURL() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('page/7') || path.includes('page7')) return 'page7';
  if (path.includes('page/6') || path.includes('page6')) return 'page6';
  if (path.includes('page/5') || path.includes('page5')) return 'page5';
  if (path.includes('page/4') || path.includes('page4')) return 'page4';
  if (path.includes('page/3') || path.includes('page3')) return 'page3';
  if (path.includes('page/2') || path.includes('page2')) return 'page2';
  return 'page1';
}

function navigateTo(page, updateHistory = true) {
  const paths = { 
    page1: '/page/1', 
    page2: '/page/2', 
    page3: '/page/3', 
    page4: '/page/4', 
    page5: '/page/5',
    page6: '/page/6',
    page7: '/page/7'
  };
  const targetPath = paths[page] || '/page/1';

  if (updateHistory && window.location.pathname !== targetPath) {
    window.history.pushState({ page }, '', targetPath);
  }

  renderApp(page);
}

function renderApp(page = getPageFromURL()) {
  // Remove any legacy floating nav if present
  const existingNav = document.querySelector('.global-page-nav');
  if (existingNav) existingNav.remove();

  // Render active page component inside #app
  if (page === 'page1')      renderPage1(app);
  else if (page === 'page2') renderPage2(app);
  else if (page === 'page3') renderPage3(app);
  else if (page === 'page4') renderPage4(app);
  else if (page === 'page5') renderPage5(app);
  else if (page === 'page6') renderPage6(app);
  else if (page === 'page7') renderPage7(app);
}

// Handle browser Back / Forward buttons
window.addEventListener('popstate', () => {
  renderApp(getPageFromURL());
});

// Initial route sync
if (window.location.pathname === '/' || window.location.pathname === '') {
  window.history.replaceState({ page: 'page1' }, '', '/page/1');
}

renderApp(getPageFromURL());

