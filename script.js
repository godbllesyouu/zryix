// Mobile nav toggle + current year
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('navMenu');
const yearEl = document.getElementById('y');

if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

if (yearEl){ yearEl.textContent = new Date().getFullYear(); }
