import React from "react";
import areas from "../constants/areas";
import ImageWebp from "../helpers/ImageWebp";
import ButtonLink from "./basic/ButtonLink.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

const GetTutor = (props) => {
  return (
      <div className={'become-a-tutor'}>
        <ButtonLink link={props.link} className="services" value="Become a Tutor"/>
      </div>
  )
};

const Desc = (list) => {
  return list.map((item) => (<p key={item.key} className={'desc'}>{item.value}</p>));
};

const Area = (props) => {
  return (
      <div className={'area'}>
        <ImageWebp
            src={props.jpeg}
            srcWebp={props.webp}
            className={'area-image'}
            alt={props.alt}
        />
        <div className={'text'}>
          <h2 className={'title'}>{props.title}</h2>
          <hr/>
          {Desc(props.desc)}
          {props.list}
          <GetTutor link={props.link}/>
        </div>
      </div>
  )
};

const Areas = () => {
  return (
      <Router>
        <div id={'area-list'}>
          <Area
              jpeg={areas.kcse.images.jpeg} webp={areas.kcse.images.jpeg}
              alt={'kcse-student'} title={areas.kcse.title}
              desc={areas.kcse.desc} link={areas.kcse.link}
              list={areas.kcse.examples}
          />
          <Area
              jpeg={areas.international.images.jpeg} webp={areas.international.images.jpeg}
              alt={'kcse-student'} title={areas.international.title}
              desc={areas.international.desc} link={areas.international.link}
              list={areas.international.examples}
          />
          <Area
              jpeg={areas.tests.images.jpeg} webp={areas.tests.images.jpeg}
              alt={'kcse-student'} title={areas.tests.title}
              desc={areas.tests.desc} link={areas.tests.link}
              list={areas.tests.examples}
          />
          <Area
              jpeg={areas.sports.images.jpeg} webp={areas.sports.images.jpeg}
              alt={'kcse-student'} title={areas.sports.title}
              desc={areas.sports.desc} link={areas.sports.link}
              list={areas.sports.examples}
          />
          <Area
              jpeg={areas.language.images.jpeg} webp={areas.language.images.jpeg}
              alt={'kcse-student'} title={areas.language.title}
              desc={areas.language.desc} link={areas.language.link}
              list={areas.language.examples}
          />
          <Area
              jpeg={areas.hobbies.images.jpeg} webp={areas.hobbies.images.jpeg}
              alt={'kcse-student'} title={areas.hobbies.title}
              desc={areas.hobbies.desc} link={areas.hobbies.link}
              list={areas.hobbies.examples}
          />
          <Area
              jpeg={areas.specialNeeds.images.jpeg} webp={areas.specialNeeds.images.jpeg}
              alt={'kcse-student'} title={areas.specialNeeds.title}
              desc={areas.specialNeeds.desc} link={areas.specialNeeds.link}
              list={areas.specialNeeds.examples}
          />
        </div>
      </Router>
  )
};

export default Areas;
