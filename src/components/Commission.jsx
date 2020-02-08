import { BrowserRouter as Router } from 'react-router-dom';
import teacher from "../assets/icons/discount/teacher.svg";
import commission from "../constants/commission";
import React from "react";
import Icon from "./basic/Icon";
import Refer from "./Refer";

const Title = (props) => {
  return (
      <h4 className={'point-title'}>
        <Icon src={teacher} height={'4'} width={'4'} units={'rem'} className={'point-icon'}/>
        <span>{props.title}</span>
      </h4>
  )
};

const Timeline = (props) => {
  return (
      <div className={'timeline'}>
        <div className={'box'}>
          {props.desc}
        </div>
        <div className={'step'}>
          <span className={'text'}>Step</span>
          <span className={'number'}>{props.num}</span>
        </div>
      </div>
  )
};

const Commission = () => {
  return (
      <Router>
        <p className={'section-desc'}>{commission.tagLine}</p>
        <div id={'timeline'}>
          <div id={'start'}>
            <span id={'circle'}/>
            Start
          </div>
          <div className={'container left'}>
            <Title title={commission.howItWorks.title}/>
            <Timeline num={1} desc={commission.howItWorks.list[0]}/>
            <Timeline num={2} desc={commission.howItWorks.list[1]}/>
            <Timeline num={3} desc={commission.howItWorks.list[2]}/>
          </div>
          <div className={'container right'}>
            <Title title={commission.howToRefer.title}/>
            <Timeline num={1} desc={commission.howToRefer.list[0] + commission.howToRefer.list[1]}/>
            <Timeline num={2} desc={commission.howToRefer.list[2]}/>
            <Timeline num={3} desc={commission.howToRefer.list[3]}/>
            <Timeline num={4} desc={commission.howToRefer.list[4]}/>
            <Timeline num={5} desc={commission.howToRefer.list[5]}/>
          </div>
          <div className={'container left'}>
            <Title title={commission.example.title}/>
            <Timeline num={1} desc={commission.example.list[0]}/>
            <Timeline num={2} desc={commission.example.list[1]}/>
            <Timeline num={3} desc={commission.example.list[2] + commission.example.list[3]}/>
          </div>
        </div>
        <div id={'refer'}>
          <Refer/>
        </div>
      </Router>
  )
};

export default Commission;
