const run = () => {
  const button = document.querySelector('.nav__button');
  const hamburger = button.querySelector('.hamburger');
  const navList = document.querySelector('.nav__list');

  button.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
  });
};

run();
