const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const body = document.querySelector(".body");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  body.classList.toggle("open");
});

const drop = document.querySelectorAll(".header__nav ul.nav li");
drop.forEach((link) => {
  link.addEventListener("click", () => {
    link.nextElementSibling.classList.toggle("open");
    link.querySelector("i").classList.toggle("open");
  });
});

//floating nav bar
const kamote = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 1000) {
    kamote.classList.add("white");
  } else {
    kamote.classList.remove("white");
  }
});




//Toggable Modal
const modal = document.querySelector('.modal');
const btnRegion = document.querySelector('.region');
const btnClose = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay');

const openModalHandler = () => {
  btnRegion.classList.toggle('active')
  btnRegion.nextElementSibling.classList.toggle('active')
  overlay.classList.toggle('active');
}

const closeModalHandler = () => {
  modal.classList.toggle('active');
  btnRegion.classList.toggle('active')
  overlay.classList.toggle('active');
}

const overlayClickHandler = () => {
  closeModalHandler();
}

var slider = tns({
  container: '.slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  mouseDrag: true,
  center: true,
  nav: true,
  navPosition: 'bottom',
  controlsContainer: '#slider-nav',
  responsive: {
    900: {
      center: false,
      items: 4
    }
  }
})

btnClose.addEventListener('click', closeModalHandler)
btnRegion.addEventListener('click', openModalHandler);
overlay.addEventListener('click', overlayClickHandler);












