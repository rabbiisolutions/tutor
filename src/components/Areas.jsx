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
          {areas.map((area) => (
              <Area
                  jpeg={area.value.images.jpeg} webp={area.value.images.jpeg}
                  alt={'area-photo'} title={area.value.title}
                  desc={area.value.desc} link={area.value.link}
                  list={area.value.examples} key={area.key}
              />
          ))}
        </div>
      </Router>
  )
};

export default Areas;
