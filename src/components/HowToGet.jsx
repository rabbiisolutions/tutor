import Icon from "./basic/Icon";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const HowToGet = (props) => {
  return (
      <Router>
        <div className={'become-icon'}>
          <Icon src={props.icon} height={'100%'} width={'100%'} units={''}/>
        </div>
      </Router>
  );
};

export default HowToGet;
