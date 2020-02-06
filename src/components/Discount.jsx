import { BrowserRouter as Router } from 'react-router-dom';
import teacher from "../assets/icons/discount/teacher.svg";
import discount from "../constants/discount";
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

const Discount = () => {
  return (
      <Router>
        <p className={'section-desc'}>{discount.tagLine}</p>
        <div id={'timeline'}>
          <div id={'start'}>
            <span id={'circle'}/>
            Start
          </div>
          <div className={'container left'}>
            <Title title={discount.howItWorks.title}/>
            <Timeline num={1} desc={discount.howItWorks.list[0]}/>
            <Timeline num={2} desc={discount.howItWorks.list[1]}/>
            <Timeline num={3} desc={discount.howItWorks.list[2]}/>
          </div>
          <div className={'container right'}>
            <Title title={discount.howToRefer.title}/>
            <Timeline num={1} desc={discount.howToRefer.list[0] + discount.howToRefer.list[1]}/>
            <Timeline num={2} desc={discount.howToRefer.list[2]}/>
            <Timeline num={3} desc={discount.howToRefer.list[3]}/>
            <Timeline num={4} desc={discount.howToRefer.list[4]}/>
            <Timeline num={5} desc={discount.howToRefer.list[5]}/>
          </div>
          <div className={'container left'}>
            <Title title={discount.example.title}/>
            <Timeline num={1} desc={discount.example.list[0]}/>
            <Timeline num={2} desc={discount.example.list[1]}/>
            <Timeline num={3} desc={discount.example.list[2] + discount.example.list[3]}/>
          </div>
        </div>
        <div id={'refer'}>
          <Refer/>
        </div>
      </Router>
  )
};

export default Discount;
