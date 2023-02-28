/* navbar functionalities */
const navButtons = document.querySelectorAll('.nav__list__link');
let currentNavPage = document.querySelector('.selected');

navButtons.forEach((e) => {
  console.log(e);
  e.addEventListener('click', () => {
    // remove the {currentNavPage} .selected effects
    currentNavPage.classList.remove('selected');
    // set the clicked link to be .selected & the {currentNavPage}
    e.classList.add('selected');
    currentNavPage = e;
  });
});

const homePage = '<div class="hero"><h1>Freshly Made. Deliciously Satisfying. Every Time.</h1><video autoplay muted loop class="hero__video"><source src="../res/hero-video.mp4" type="video/mp4"></video></div>';

const contentContainer = document.querySelector('#content');
contentContainer.innerHTML = homePage;
