/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link");
const header = document.getElementById('header');
const scrollUp = document.getElementById('scroll-up');
const sections = document.querySelectorAll("section[id]")

// Menu show
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

// Menu hidden
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}


/*=============== REMOVE MENU MOBILE ===============*/
const linkAction = () => {
  // when nav__link clicked, show-menu close automatically.
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);blur


/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () => {

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector(".nav__menu a[href*=' + sectionId + ']");
    
    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2500,
  delay: 300,
  // reset: true, // Animations repeat
});

sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`);
sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 500});
sr.reveal(`.new__card`, {delay: 500, interval: 100});
sr.reveal(`.shop__card`, {interval: 100});

