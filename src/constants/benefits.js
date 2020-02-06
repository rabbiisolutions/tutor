import trustedIcon from "../assets/icons/benefits/enterprise.svg";
import incomeIcon from "../assets/icons/benefits/money.svg";
import relationshipIcon from "../assets/icons/benefits/team.svg";
import supportIcon from "../assets/icons/benefits/online-support.svg";

const trusted = {
  title: 'Trusted Company', icon: trustedIcon,
  desc: 'Lorem ipsum dolor sit amet, consectetur \n' +
      'adipiscing elit. Scelerisque mi ac nisi, eu. Quam \n' +
      'vitae etiam turpis eu cras. Vitae platea.'
};
const income = {
  title: 'Extra Source of Income', icon: incomeIcon,
  desc: 'Lorem ipsum dolor sit amet, consectetur \n' +
      'adipiscing elit. Scelerisque mi ac nisi, eu. Quam \n' +
      'vitae etiam turpis eu cras. Vitae platea.'
};
const relationship = {
  title: 'Great Relationship', icon: relationshipIcon,
  desc: 'Lorem ipsum dolor sit amet, consectetur \n' +
      'adipiscing elit. Scelerisque mi ac nisi, eu. Quam \n' +
      'vitae etiam turpis eu cras. Vitae platea.'
};
const support = {
  title: '24/7 Support', icon: supportIcon,
  desc: 'Lorem ipsum dolor sit amet, consectetur \n' +
      'adipiscing elit. Scelerisque mi ac nisi, eu. Quam \n' +
      'vitae etiam turpis eu cras. Vitae platea.'
};

const teachers = {
  support: support, relationship: relationship, income: income, trusted: trusted
};

export default teachers;
