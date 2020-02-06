import overlayAction from "./OverlayActions";

const menuToggle = evt => {
  const sideBar = document.getElementsByClassName('menu')[0];
  overlayAction(sideBar);
};

export default menuToggle;
