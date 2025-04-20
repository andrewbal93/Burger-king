const nav = document.querySelector('#nav')
const navBtnImg = document.querySelector('#nav-btn-img')
const navBtn = document.querySelector('#nav-btn')
const burgerBg = document.querySelector('#burger-bg')
const ctaButtons = document.querySelectorAll('.cta-btn');


navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/nav-close.svg'
  } else {
    navBtnImg.src = './img/nav-open.svg'
  }
}

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    navLinks.forEach((l) => l.classList.remove('active'))
    this.classList.add('active')
  })
})

// Универсальная функция для эффекта анимации при клике
function addClickAnimation(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.addEventListener('click', function () {
      this.classList.add('click-animate');
      this.addEventListener('animationend', () => {
        this.classList.remove('click-animate');
      }, { once: true });
    });
  });
}

// Применяем эффект к нужным элементам
addClickAnimation('.cta-btn');
addClickAnimation('.food-list-item');

AOS.init({
  once: true,
  // disable: 'mobile',
})
