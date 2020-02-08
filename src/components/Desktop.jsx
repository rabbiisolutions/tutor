import Teachers from "./Teachers";
import Benefits from "./Benefits";
import Areas from "./Areas";
import Commission from "./Commission";
import React from "react";
import texts from "../constants/texts";
import HowToBe from "./HowToBe";
import Landing from "./Landing";
import howToBeATutor from "../assets/icons/become/desktop.svg"

const DesktopView = () => {
  return (
      <div id={'desktop-view'}>
        <section id={'landing'}>
          <Landing/>
        </section>
        <section id={'teachers'} className={'dark'}>
          <h2 className={'section-title'}>{texts.titles[0]}</h2>
          <Teachers/>
        </section>
        <section id={'benefits'}>
          <h2 className={'section-title'}>{texts.titles[1]}</h2>
          <Benefits/>
        </section>
        <section id={'areas'} className={'dark'}>
          <h2 className={'section-title'}>{texts.titles[2]}</h2>
          <Areas/>
        </section>
        <section id={'be-a-tutor'}>
          <h2 className={'section-title'}>{texts.titles[3]}</h2>
          <HowToBe icon={howToBeATutor}/>
        </section>
        <section id={'discount'}>
          <h2 className={'section-title'}>{texts.titles[4]}</h2>
          <Commission/>
        </section>
      </div>
  )
};

export default DesktopView;
