import basicIcon from "../assets/icons/teachers/like.svg";
import choiceIcon from "../assets/icons/teachers/order.svg";
import plusIcon from "../assets/icons/teachers/zoom.svg";
import premiumIcon from "../assets/icons/teachers/premium-quality.svg";

const basic = {
  title: 'TeeCha Basic', icon: basicIcon,
  desc: 'The are peer teachers who have recently graduated and are starting out in their careers'
};
const  choice = {
  title: 'TeeCha Choice', icon: choiceIcon,
  desc: 'Are teachers who have been practicing teaching for some time and are employed in' +
      ' certain schools.'
};
const plus = {
  title: 'TeeCha Plus', icon: plusIcon,
  desc: 'They are teachers who mark national exams or have worked in top government and private' +
      ' schools for quite some time.'
};
const premium = {
  title: 'TeeCha Premium', icon: premiumIcon,
  desc: 'Are teachers who are at the top of their careers. They are renown and respected by' +
      ' their peers and have had a vast experience teaching at top national and private schools.'
};

const teachers = {
  premium: premium, plus: plus, choice: choice, basic: basic
};

export default teachers;
