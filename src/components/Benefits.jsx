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
          <Benefit icon={benefits.trusted.icon} title={benefits.trusted.title} desc={benefits.trusted.desc}/>
          <Benefit icon={benefits.income.icon} title={benefits.income.title} desc={benefits.income.desc}/>
          <Benefit icon={benefits.relationship.icon} title={benefits.relationship.title} desc={benefits.relationship.desc}/>
          <Benefit icon={benefits.support.icon} title={benefits.support.title} desc={benefits.support.desc}/>
        </div>
      </Router>
  );
};

export default Benefits;
