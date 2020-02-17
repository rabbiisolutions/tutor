import ListItem from "../components/basic/ListItems";
import kcseJpeg from "../assets/images/areas/jCIMcOpFHig.jpg";
import kcseWebp from "../assets/images/areas/jCIMcOpFHig.webp";
import interJpeg from "../assets/images/areas/jCIMcOpFHig-1.jpg";
import interWebp from "../assets/images/areas/jCIMcOpFHig-1.webp";
import testsJpeg from "../assets/images/areas/jCIMcOpFHig-2.jpg";
import testsWebp from "../assets/images/areas/jCIMcOpFHig-2.webp";
import languageJpeg from "../assets/images/areas/jCIMcOpFHig-3.png";
import languageWebp from "../assets/images/areas/jCIMcOpFHig-3.webp";
import specialJpeg from "../assets/images/areas/jCIMcOpFHig-4.jpg";
import specialWebp from "../assets/images/areas/jCIMcOpFHig-4.webp";
import hobbiesJpeg from "../assets/images/areas/jCIMcOpFHig-5.jpg";
import hobbiesWebp from "../assets/images/areas/jCIMcOpFHig-5.webp";
import gamesJpeg from "../assets/images/areas/jCIMcOpFHig-6.png";
import gamesWebp from "../assets/images/areas/jCIMcOpFHig-6.webp";
import proJpeg from "../assets/images/areas/jCIMcOpFHig-7.jpg";
import proWebp from "../assets/images/areas/jCIMcOpFHig-7.webp";
import student from "../assets/icons/areas/student.svg";
import graduated from "../assets/icons/areas/graduated.svg";
import exam from "../assets/icons/areas/exam.svg"
import cup from "../assets/icons/areas/cup.svg";
import speak from "../assets/icons/areas/speak.svg";
import drama from "../assets/icons/areas/drama.svg";
import wheelchair from "../assets/icons/areas/wheelchair.svg";
import design from "../assets/icons/areas/interface.svg";

const kcse = {
  title: 'KCPE/KCSE', icon: student,
  desc: [{key: 'x1',
    value: 'Are you a competent teacher able to help a child revise for the national exams and ' +
        'revise difficult concepts in their schoolwork?'},
    {key: 'x2', value: 'Then be a tutor in any class in:'}],
  examples: ListItem(
      [
        {key: 'aaa', text: 'Primary school'}, {key: 'aab', text: 'High school'},
        {key: 'aac', text: 'KCPE'}, {key: 'aae', text: 'KCSE'},
      ]
  ),
  images: {jpeg: kcseJpeg, webp: kcseWebp},
  link: "#"
};
const international = {
  title: 'International School Systems', icon: graduated,
  desc: [
    {key: 'x3',
      value: 'Are you a teacher employed in or can work at an international school? Are you willing ' +
          'and able to help a child from such a system with schoolwork?'},
    {key: 'x4', value: 'Then be a tutor in either of the curricular below:'}],
  examples: ListItem(
      [{key: 'c1', text: 'IGCSE'}, {key: 'c2', text: 'American'}, {key: 'c3', text: 'IB...etc'}]
  ),
  images: {jpeg: interJpeg, webp: interWebp},
  link: "#"
};
const tests = {
  title: 'Tests', icon: exam,
  desc: [
    {key: 'x5',
      value: 'Did you pass your KASNEB exams or any university exam or any tests to join universities abroad?'},
    {key: 'x6', value: 'Then be a tutor in:'}],
  examples: ListItem(
      [{key: 'd1', text: 'CPA exams'}, {key: 'd2', text: 'CIFA exams'}, {key: 'd3', text: 'SAT'},
        {key: 'd4', text: 'ACT'}, {key: 'd5', text: 'Statistics...etc'}]
  ),
  images: {jpeg: testsJpeg, webp: testsWebp},
  link: "#"
};
const sports = {
  title: 'Sports Games', icon: cup,
  desc: [
    {key: 'x7',
      value: 'Are you a master in a certain sport or game? Can you teach and mentor a person from an' +
          ' amateur level to be able to master the skill?'},
    {key: 'x8', value: 'Then become a tutor in:'}],
  examples: ListItem(
      [{key: 'b1', text: 'Chess'}, {key: 'b2', text: 'Swimming'},
        {key: 'b3', text: 'Skating...etc'}]
  ),
  images: {jpeg: gamesJpeg, webp: gamesWebp},
  link: "#"
};
const language = {
  title: 'Foreign Languages', icon: speak,
  desc: [
    {key: 'x9',
      value: 'Are you good at writing and speaking a foreign language? Can you train and teach ' +
          'someone who has never spoken that language to sit for an international exam for ' +
          'certification in that language?\n'},
    {key: 'x10', value: 'Then become a tutor in:'}],
  examples: ListItem(
      [{key: 'a1', text: 'Chinese'}, {key: 'a2', text: 'French'},
        {key: 'a3', text: 'German etc'}]
  ),
  images: {jpeg: languageJpeg, webp: languageWebp},
  link: "#"
};
const hobbies = {
  title: 'Hobbies and Interests', icon: drama,
  desc:[
    {key: 'x11', value: 'Are you an expert at a certain skill? Can you train an amateur and grow' +
          ' them to master the skill?'},
    {key: 'x12', value: 'Then become a trainer in:'}],
  examples: ListItem(
      [{key: 'e4', text: 'Photography'}, {key: 'e5', text: 'Dance'},
        {key: 'e6', text: 'Music'}, {key: 'e7', text: 'Art'}, {key: 'e8', text: 'Vocals'},
        {key: 'e9', text: 'Dj...etc'}]
  ),
  images: {jpeg: hobbiesJpeg, webp: hobbiesWebp},
  link: "#"
};
const specialNeeds = {
  title: 'Special Needs', icon: wheelchair,
  desc: [
    {key:'x13', value: 'Are you a qualified special needs tutor? Do you have the time, ability' +
          ' and willingness to teach a child requiring special care at home?'},
    {key: 'x14', value: 'Then offer care for students with such needs:'}
  ],
  examples: ListItem(
      [{key: 'f4', text: 'Physical'}, {key: 'f5', text: 'Developmental'},
        {key: 'f6', text: 'Behavioural/Emotional'}, {key: 'f7', text: 'Sensory/Impaired...etc'}]
  ),
  images: {jpeg: specialJpeg, webp: specialWebp},
  link: "#"
};
const proAppSoftware = {
  title: 'Professional Application Software', icon: design,
  desc: [
    {key:'x15', value: 'Are you well skilled in any professional application software? Can you' +
          ' train a person to master or learn how to use that professional application software?'},
    {key: 'x16', value: 'Then become a tutor in: '}
  ],
  examples: ListItem(
      [{key: 'g4', text: 'Programming languages'}, {key: 'g5', text: 'CAD/CAM'},
        {key: 'g6', text: 'QuickBooks'}, {key: 'g7', text: 'SAGE … etc.'}]
  ),
  images: {jpeg: proJpeg, webp: proWebp},
  link: "#"
};

const areas = [
    {key: 'a1', value: kcse}, {key: 'a2', value: international},
    {key: 'a3', value: tests}, {key: 'a4', value: sports},
    {key: 'a5', value: language}, {key: 'a6', value: hobbies},
    {key: 'a7', value: specialNeeds}, {key: 'a8', value: proAppSoftware}
];

export default areas;
