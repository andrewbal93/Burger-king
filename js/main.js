const nav = document.querySelector('#nav')
const navBtnImg = document.querySelector('#nav-btn-img')
const navBtn = document.querySelector('#nav-btn')
const burgerBg = document.querySelector('#burger-bg')

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/nav-close.svg'
  } else {
    navBtnImg.src = './img/nav-open.svg'
  }
}

AOS.init({
  once: true,
  // disable: 'mobile',
})
