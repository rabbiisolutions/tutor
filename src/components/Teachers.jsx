import React from "react";
import teachers from "../constants/teachers";
import Icon from "./basic/Icon";
import { BrowserRouter as Router } from 'react-router-dom';

const Teacher = (props) => {
  return (
      <div className={'teacher'}>
        <h2>
          <Icon src={props.icon} height={2.5} width={2.5} units={'rem'} className="package"/>
          <span className={'title'}>{props.title}</span>
        </h2>
        <p className={'desc'}>{props.desc}</p>
      </div>
  )
};

const Teachers = () => {
  return (
    <Router>
      <div id={'teacher-list'}>
        <Teacher icon={teachers.basic.icon} title={teachers.basic.title} desc={teachers.basic.desc}/>
        <Teacher icon={teachers.choice.icon} title={teachers.choice.title} desc={teachers.choice.desc}/>
        <Teacher icon={teachers.plus.icon} title={teachers.plus.title} desc={teachers.plus.desc}/>
        <Teacher icon={teachers.premium.icon} title={teachers.premium.title} desc={teachers.premium.desc}/>
      </div>
    </Router>
  );
};

export default Teachers;
