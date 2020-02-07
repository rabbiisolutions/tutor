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
  collapses.push(
      <div className={name} key={'a11'}>
        {Toggle('1. ' + areas.kcse.title)}
        {
          Content(
              <Area desc={areas.kcse.desc} examples={areas.kcse.examples}
                       icon={areas.kcse.icon} link={areas.kcse.link}/>)
        }
      </div>
      ,
      <div className={name} key={'a12'}>
        {Toggle('2. ' + areas.international.title)}
        {
          Content(
              <Area desc={areas.international.desc} examples={areas.international.examples}
                       icon={areas.international.icon} link={areas.international.link}/>)
        }
      </div>
      ,
      <div className={name} key={'a13'}>
        {Toggle('3. ' + areas.tests.title)}
        {
          Content(
              <Area desc={areas.tests.desc} examples={areas.tests.examples}
                       icon={areas.tests.icon} link={areas.tests.link}/>)
        }
      </div>
      ,
      <div className={name} key={'a14'}>
        {Toggle('4. ' + areas.sports.title)}
        {
          Content(
              <Area desc={areas.sports.desc} examples={areas.sports.examples}
                       icon={areas.sports.icon} link={areas.sports.link}/>)
        }
      </div>
      ,
      <div className={name} key={'a15'}>
        {Toggle('5. ' + areas.language.title)}
        {
          Content(
              <Area desc={areas.language.desc} examples={areas.language.examples}
                       icon={areas.language.icon} link={areas.language.link}/>)
        }
      </div>
      ,
      <div className={name} key={'a16'}>
        {Toggle('6. ' + areas.hobbies.title)}
        {
          Content(
              <Area desc={areas.hobbies.desc} examples={areas.hobbies.examples}
                       icon={areas.hobbies.icon} link={areas.hobbies.link}/>)
        }
      </div>
      ,
      <div className={name} key={'a17'}>
        {Toggle('7. ' + areas.specialNeeds.title)}
        {
          Content(
              <Area desc={areas.specialNeeds.desc} examples={areas.specialNeeds.examples}
                       icon={areas.specialNeeds.icon} link={areas.specialNeeds.link}/>)
        }
      </div>
  );

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
