const hidden = 'hidden';

const backDropHandler = e => {
  const sideBar = document.getElementsByClassName('menu')[0];
  sideBar.classList.add(hidden);
  e.target.classList.toggle(hidden);
};

export default backDropHandler;
