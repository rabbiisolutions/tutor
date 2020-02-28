import { BrowserRouter as Router } from 'react-router-dom';
import mobileJpeg from "../assets/images/landing/mobile.jpg";
import mobileWebp from "../assets/images/landing/mobile.webp";
import texts from "../constants/texts";
import Button from "./basic/Button";
import React from "react";
import ImageWebp from "../helpers/ImageWebp";
import modals from "../events/modals";


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
            <div id={'sign-up'}>
              <p className={'lead'}>Sign up to receive our price list (teacher/tutor only)</p>
              <Button value={texts.signUp} onClick={e => modals.tutorForms(e)}/>
            </div>
          </div>
        </div>
      </Router>
  )
};
export default Landing;
