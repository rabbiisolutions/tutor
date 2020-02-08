let lastSection = null; // stores the last section that is open so as to close it on opening a
// new one

const toggle = (panel) => {
  /*
  hides or shows the related content of a toggle
 */
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
  // remove/add shown class to toggle class list
  panel.previousSibling.classList.toggle("shown");
  changeIcon(panel.previousSibling);
};

const changeIcon = (toggle) => {
  /*
  swaps the active icon, up or down to indicate whether content is shown or hidden
  * */
  const hidden = 'hidden';
  toggle.childNodes[1].classList.toggle(hidden); // down icon
  toggle.childNodes[2].classList.toggle(hidden); // up icon
};

const otherClickable = (element, elemClass) => {
  /*
  handle other clickable on a toggle i.e down, up icon svg path, injected svg span
  or any other undefined class in the toggle. Traverse to the toggle div, which is the root
  of the click
  */
  let elem = null;
  if (elemClass === "down") {
    elem = element.parentNode; // set element to parent of parent of span/icon
  }
  else if (elemClass === "up") {
    elem = element.parentNode; // set element to parent of parent of span/icon
  }
  else  if (elemClass === undefined) {
    if (element.tagName === "path") {
      elem = element.parentNode.parentNode.parentNode.parentNode; // set element to
      // parent of parent of path
    } else {
      elem = element.parentNode.parentNode; // set element to parent of parent of span/icon
    }
  }
  else  if (elemClass === "injected-svg") {
    elem = element.parentNode.parentNode.parentNode; // set element to parent of parent
    // of injected svg
  }
  return elem; // return the root toggle clicked
};

const scrollToView = (element) => {
  /*
  scroll in to view of current clicked element
  a bit tricky here, first use try catch tor elements that might not match criteria
  */
  try {
    if (element.previousElementSibling.previousElementSibling.classList[0] === 'collapse-content') {
      // the become our tutor element follows tuition areas service that's not a collapse, the
      // scroll will be too far away from the collapse
      element.previousElementSibling.childNodes[1].childNodes[7].scrollIntoView();
      // hence scroll to the second last element of the tuition area list
    } else {
      // for other section collapse scroll the (two)2 PLACES up sibling
      element.previousElementSibling.previousElementSibling.scrollIntoView();
    }
    //console.log(element.previousElementSibling.previousElementSibling.classList[0]);
  } catch (e) {
    // the first collapse, Type of teachers has no siblings above it but first
    if (element.classList[0] === 'area-toggle') {
      // handle the tuition area toggle events
      try {
        // by scrolling to the third (3) sibling above the clicked toggle
        element.parentNode.previousElementSibling.previousElementSibling.scrollIntoView();
      } catch (e) {
        // for the 1st and 2nd toggles which have no 3 siblings, scroll to the start tuition
        // areas div
        element.parentNode.parentNode.parentNode.scrollIntoView();
      }
    } else {
      // scroll to the start of sections collapse, just above type of teachers
      element.parentNode.scrollIntoView();
    }
  }
};

const updateSection = (element) => {
  let current = element.nextElementSibling; // select the content div related (next to) clicked
  // toggle
  if (lastSection && lastSection !== current) {
    // if last section open is not null AND not equal to current section
    toggle(lastSection); // hide last section
  }

  if (lastSection === current) { // if current section equal to last section (close operation)
    // null the last element to avoid double show (current and last section will be shown)
    lastSection = null;
  } else {
    lastSection = current; // set last content equal to current content
  }
  toggle(current); // show current content
};

const sectionCollapseHandler = (evt) => {
  let element = evt.target;
  const elemClass = element.classList[0];
  if (elemClass !== "collapse-toggle") {
    /*
    the toggle was not clicked, but a child node
     the click element came from from icon or title span
     */
    if (elemClass === "collapse-title"){
      element = element.parentNode; // set element to parent of title
    }
    else {
      element = otherClickable(element, elemClass);
    }
  }
  updateSection(element);
  scrollToView(element);
};

const areaCollapseHandler = (evt) => {
  let element = evt.target; // get the clicked toggle
  const elemClass = element.classList[0];
  if (elemClass !== "area-toggle") {
    /*
    the toggle was not clicked, but a child node
     the click element came from from icon or title span
     */
    if (elemClass === "area-title"){
      element = element.parentNode; // set element to parent of title
    }
    else {
      element = otherClickable(element, elemClass);
    }
  }
  updateSection(element);
  scrollToView(element);
};

const collapseHandler = {
  areaCollapseHandler: areaCollapseHandler, sectionCollapseHandler: sectionCollapseHandler
};

export default collapseHandler;
