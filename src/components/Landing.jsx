import { BrowserRouter as Router } from 'react-router-dom';
import mobileJpeg from "../assets/images/landing/mobile.jpg";
import mobileWebp from "../assets/images/landing/mobile.webp";
import texts from "../constants/texts";
import ButtonLink from "./basic/ButtonLink";
import React from "react";
import ImageWebp from "../helpers/ImageWebp";


const Landing = () => {
  return (
      <Router>
        <ImageWebp
            src={mobileJpeg}
            srcWebp={mobileWebp}
            className={'landing-image'}
            alt={'landing'}
        />
        <div className={'welcome'}>
          <div id={'dark-box'}>
            <p>{texts.quotes[0]}</p>
            <p>{texts.quotes[1]}</p>
            <p>{texts.quotes[2]}</p>
            <p>{texts.quotes[3]}</p>
          </div>
          <ButtonLink value={texts.signUp} link={"#"} className="services"/>
        </div>
      </Router>
  )
};
export default Landing;
