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
import student from "../assets/icons/areas/student.svg";
import graduated from "../assets/icons/areas/graduated.svg";
import exam from "../assets/icons/areas/exam.svg"
import cup from "../assets/icons/areas/cup.svg";
import speak from "../assets/icons/areas/speak.svg";
import drama from "../assets/icons/areas/drama.svg";
import wheelchair from "../assets/icons/areas/wheelchair.svg";

const kcse = {
  title: 'KCPE/KCSE', icon: student,
  desc: [{key: 'x1',
    value: 'We provide competent teachers to help your child revise for the national exams'},
    {key: 'x2', value: 'Get a tutor for any class in:'}],
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
      value: 'We provide teachers teaching different international schools & ready to help your child'},
    {key: 'x4', value: 'Get a tutor in:'}],
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
      value: 'We help you pass your KASNEB exams or any university exam ' +
          'or any tests to join universities abroad'},
    {key: 'x6', value: 'Get a tutor for:'}],
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
      values: 'We provide professional trainers to help you or' +
          ' your child grow in certain sports & games.'},
    {key: 'x8', value: ' You can get a tutor in:'}],
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
      values: 'We provide teachers in foreign language to' +
          ' help you learn or master a foreign language.'},
    {key: 'x10', value: 'You can get a tutor in:'}],
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
    {key: 'x11', value: 'We provide trainers to help you grow & perfect a hobby you have.'},
    {key: 'x12', value: 'You can get a trainer in:'}],
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
    {key:'x13', value: 'You can get a qualified trained special needs' +
          ' teacher for your son or daughter at whatever ' +
          'level. We have teachers who are able to handle students' +
          ' who require different level of care in areas such as:'}],
  examples: ListItem(
      [{key: 'f4', text: 'Physical'}, {key: 'f5', text: 'Developmental'},
        {key: 'f6', text: 'Behavioural/Emotional'}, {key: 'f7', text: 'Sensory/Impaired...etc'}]
  ),
  images: {jpeg: specialJpeg, webp: specialWebp},
  link: "#"
};

const areas = {
  kcse: kcse, international: international, tests: tests, sports: sports, language: language,
  hobbies: hobbies, specialNeeds: specialNeeds
};

export default areas;
