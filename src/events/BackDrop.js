const hidden = 'hidden';

const backDropHandler = e => {
  const sideBar = document.getElementsByClassName('menu')[0];
  const formsModal = document.getElementsByClassName('forms-modal')[0];
  formsModal.classList.add(hidden);
  sideBar.classList.add(hidden);
  e.target.classList.toggle(hidden);
};

export default backDropHandler;
