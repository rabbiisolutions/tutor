import collapseHandler from "../events/collapse";
import Icon from "./basic/Icon";
import downIcon from "../assets/icons/collapse/bx_bx-caret-downdown.svg";
import upIcon from "../assets/icons/collapse/bx_bx-caret-downup.svg";
import React from "react";
import texts from "../constants/texts";
import Teachers from "./Teachers";
import Benefits from "./Benefits";
import Refer from "./Refer";
import Commission from "./Commission";
import HowToBe from "./HowToBe";
import MobileAreas from "./MobileAreas";
import howToBeATutor from "../assets/icons/become/mobile.svg"
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from "./Landing";

const Content = (data) => {
  return (
      <div className="collapse-content">
        {data}
      </div>
  )
};

const Toggle = (title) => {
  return (
      <div className="collapse-toggle" onClick={e => collapseHandler.sectionCollapseHandler(e)}>
        <span className="collapse-title">{title}</span>
        <Icon src={downIcon} height={1.5} width={1.5} className="down"/>
        <Icon src={upIcon} height={1.2} width={1.2} className="up hidden"/>
      </div>);
};

const Accordion = () => {
  return (
      <Router>
        <section id={'mobile-landing'}>
          <Landing/>
        </section>
        <section id={'mobile-collapse'} className={'accordion'}>
          <p id={'accordion-lead'}>
            tap a section to expand or collapse it
          </p>
          {Toggle(texts.titles[0])}
          {Content(<Teachers/>)}
          {Toggle(texts.titles[1])}
          {Content(<Benefits/>)}
          {<MobileAreas/>}
          {Toggle(texts.titles[3])}
          {Content(<HowToBe icon={howToBeATutor}/>)}
          {Toggle(texts.titles[4])}
          {Content(<Commission/>)}
          <Refer/>
        </section>
      </Router>
  )
};

export default Accordion;
