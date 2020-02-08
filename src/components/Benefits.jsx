import React from "react";
import benefits from "../constants/benefits";
import Icon from "./basic/Icon";
import { BrowserRouter as Router } from 'react-router-dom';

const Benefit = (props) => {
  return (
      <div className={'benefit'}>
        <h2>
          <Icon src={props.icon} height={2.5} width={2.5} units={'rem'} className="why"/>
          <span className={'title'}>{props.title}</span>
        </h2>
        <p className={'desc'}>{props.desc}</p>
      </div>
  )
};

const Benefits = () => {
  return (
      <Router>
        <div id={'benefit-list'}>
          {benefits.map((benefit) => (
              <Benefit icon={benefit.value.icon} title={benefit.value.title}
                       desc={benefit.value.desc} key={benefit.key}/>
          ))}
        </div>
      </Router>
  );
};

export default Benefits;
