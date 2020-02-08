import React from "react";
import areas from "../constants/areas";
import ButtonLink from "./basic/ButtonLink";
import Icon from "./basic/Icon";
import collapseHandler from "../events/collapse";
import downIcon from "../assets/icons/collapse/bx_bx-caret-downdown.svg";
import upIcon from "../assets/icons/collapse/bx_bx-caret-downup.svg";
import { BrowserRouter as Router } from 'react-router-dom';

const Content = (data) => {
  return (
      <div className={"area-content"}>
          {data}
      </div>
  )
};

const Toggle = (title) => {
  return (
      <div className="area-toggle" onClick={e => collapseHandler.areaCollapseHandler(e)}>
        <span className="area-title">{title}</span>
        <Icon src={downIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={upIcon} height={1.5} width={1.5} className="up hidden"/>
      </div>);
};

const name = 'areas-collapse';

const GetTutor = (props) => {
  return (
      <div className={'be-a-tutor'}>
        <ButtonLink link={props.link} className="services" value="Get a Tutor"/>
      </div>
  )
};

const Desc = (list) => {
  return list.map((item) => (<p key={item.key}>{item.value}</p>));
};

const Area = (props) => {
  return (
      <Router>
        {Desc(props.desc)}
        <div className={'display'}>
          {props.examples}
          <Icon src={props.icon} height={15} units={'vw'} width={15}/>
        </div>
        <GetTutor link={props.link}/>
      </Router>
  );
};

const AreasCollapse = () => {
  const collapses = [];
  for (let i = 1; i <= 8; i++) {
    collapses.push(
        <div className={name} key={'a1' + i}>
          {Toggle(i + '. ' + areas[i-1].value.title)}
          {
            Content(
                <Area desc={areas[i-1].value.desc} examples={areas[i-1].value.examples}
                      icon={areas[i-1].value.icon} link={areas[i-1].value.link} key={areas[i-1].key}/>)
          }
        </div>
    )
  }

  return ( // return the academic areas list
      collapses.map((panel) => (panel))
  );
};

const MobileAreas = () => {
  return (
      <section id={'mobile-areas'}>
          <div id="areas-title">tuition areas</div>
          <div id="mobile-areas-list">
            {AreasCollapse()}
          </div>
      </section>
  );
};

export default MobileAreas;
