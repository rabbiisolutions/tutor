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
        {teachers.map((teacher) => (
            <Teacher icon={teacher.value.icon} title={teacher.value.title}
                     desc={teacher.value.desc} key={teacher.key}/>
        ))}
      </div>
    </Router>
  );
};

export default Teachers;
