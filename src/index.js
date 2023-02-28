// /* page contents */
import homePage from './page-home';
import menuPage from './page-menu';

/* navbar functionalities */
const navButtons = document.querySelectorAll('.nav__list__link');
let currentNavPage = document.querySelector('.selected');

function navigateToHero() {
  document.body.classList.add('hero-selected');
  document.querySelector('#content').classList.add('hero-selected');
}

function navigateOutHero() {
  document.body.classList.remove('hero-selected');
  document.querySelector('#content').classList.remove('hero-selected');
}

function loadPage(page) {
  const contentContainer = document.querySelector('#content');
  contentContainer.innerHTML = page;
}

const idContentMap = {
  home: homePage,
  menu: menuPage,
};

navButtons.forEach((e) => {
  console.log(e);
  e.addEventListener('click', () => {
    if (e !== document.querySelector('#nav__home')) {
      navigateOutHero();
    } else if (e === document.querySelector('#nav__home')) {
      navigateToHero();
    }
    // remove the {currentNavPage} .selected effects
    currentNavPage.classList.remove('selected');
    // set the clicked link to be .selected & the {currentNavPage}
    e.classList.add('selected');
    currentNavPage = e;
    // loads the page contents based on id
    switch (e.id.split('__')[1]) {
      case 'home': loadPage(idContentMap[e.id.split('__')[1]]); break;
      case 'menu': loadPage(idContentMap[e.id.split('__')[1]]); break;
      default: alert('Failed to load page.');
    }
  });
});

/* initial page load */
const contentContainer = document.querySelector('#content');
contentContainer.innerHTML = homePage;
navigateToHero();
