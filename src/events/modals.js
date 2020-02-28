import toggles from "../utils/toggles";

const tutorForms = () => {
  toggles.toggleHiddenByClass(['forms-modal', 'page-mask']);
  // hide or show, depends on the visibility status of the forms modal
};

const modals = {
  tutorForms: tutorForms
};

export default modals;
