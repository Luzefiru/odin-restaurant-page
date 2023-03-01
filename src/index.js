// /* page contents */
import homePage from './page-home';
import menuPage from './page-menu';
import aboutPage from './page-about';
import contactPage from './page-contact';

const idContentMap = {
  home: homePage,
  menu: menuPage,
  about: aboutPage,
  contact: contactPage,
};

/* navbar functionalities */
const navButtons = document.querySelectorAll('.nav__list__link');
let currentNavPage = document.querySelector('.selected');

// adds specific CSS styles to the page in order for hero video to work
function navigateToHero() {
  document.body.classList.add('hero-selected');
}

// removes the hero class from the body
function navigateOutHero() {
  document.body.classList.remove('hero-selected');
}

// loads {page} into the #content container
function loadPage(page) {
  const contentContainer = document.querySelector('#content');
  contentContainer.innerHTML = page;
}

// navbar button functionality
navButtons.forEach((e) => {
  console.log(e);
  e.addEventListener('click', () => {
    // use specific functions to make styling on home page
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
    loadPage(idContentMap[e.id.split('__')[1]]);
  });
});

/* initial page load */
const contentContainer = document.querySelector('#content');
contentContainer.innerHTML = homePage;
navigateToHero();
