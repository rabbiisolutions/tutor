import trustedIcon from "../assets/icons/benefits/enterprise.svg";
import incomeIcon from "../assets/icons/benefits/money.svg";
import relationshipIcon from "../assets/icons/benefits/team.svg";
import supportIcon from "../assets/icons/benefits/online-support.svg";

const trusted = {
  title: 'Trusted Company', icon: trustedIcon,
  desc: 'TeeCha is an agency that is trusted by teachers throughout the country for their great ' +
      'service delivery and one that places the interests of the teacher above profit. We always' +
      ' deliver our end of the bargain at the agreed time.'
};
const income = {
  title: 'Extra Source of Income', icon: incomeIcon,
  desc: 'TeeCha gives an opportunity to teachers and trainers throughout the country to earn an' +
      ' extra source of income by teaching what they are good at. One does not have to learn any' +
      ' additional skill but simply maximize on what they already have.'
};
const relationship = {
  title: 'Great Relationship', icon: relationshipIcon,
  desc: 'TeeCha prioritizes relationship above everything. We seek to maintain a good and mutual' +
      ' benefiting relationship with our tutors. Because of this, we have a great relationship' +
      ' with many teachers whom we consider partners in our quest to help people excel in all' +
      ' they are learning.'
};
const support = {
  title: '24/7 Support', icon: supportIcon,
  desc: 'You can always reach out to TeeCha at any time to consult or discuss any concerns. We have' +
      ' our physical offices which you are always welcomed to pay us a visit. Apart from that you' +
      ' can always get in touch with us through phone calls or WhatsApp. And depending on situation,' +
      ' we can meet at a place of convenience.'
};

const benefits = {
  support: support, relationship: relationship, income: income, trusted: trusted
};

export default benefits;
