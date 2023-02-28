// /* page contents */
const homePage = '<div class="hero"><h1>Freshly Made. Deliciously Satisfying. Every Time.</h1><video autoplay muted loop class="hero__video"><source src="../res/hero-video.mp4" type="video/mp4"></video></div>';
const menuPage = `<div class="menu">
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/pepperoni.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Pepperoni Pizza
    </div>
    <div class="card__desc">
      pepperoni slices, oregano, herbs
    </div>
    <div class="card__price">
      $9.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/olive.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Pizza Capricciosa
    </div>
    <div class="card__desc">
      black olives, artichoke, tomato
    </div>
    <div class="card__price">
      $13.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/margherita.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Margherita Pizza
    </div>
    <div class="card__desc">
      basil leaves, olive oil, marzano tomatoes
    </div>
    <div class="card__price">
      $9.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/seafood.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Seafood Pizza
    </div>
    <div class="card__desc">
      shrimp, salami, zucchini
    </div>
    <div class="card__price">
      $13.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/tomato-herbs.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Vegetarian Pizza
    </div>
    <div class="card__desc">
      tomato slices, herbs, part-skim mozarella cheese
    </div>
    <div class="card__price">
      $11.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/bruschetta.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Tomato Bruchetta
    </div>
    <div class="card__desc">
      tomato, basil leaves, herbs
    </div>
    <div class="card__price">
      $5.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/lasagna.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Classic Lasagna
    </div>
    <div class="card__desc">
      bologneese sauce, mozarella, ground pork
    </div>
    <div class="card__price">
      $7.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
<div class="menu__card">
  <div class="card__image" style="background-image: url(../res/menu/carbonara.jpg);"></div>
  <div class="card--contents">
    <div class="card__title">
      Carbonara
    </div>
    <div class="card__desc">
      bacon, white sauce, herbs
    </div>
    <div class="card__price">
      $7.99
    </div>
    <button type="button" class="card__btn">
      Order Now
    </button>
  </div>
</div>
</div>`;

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
