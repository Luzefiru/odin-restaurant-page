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
