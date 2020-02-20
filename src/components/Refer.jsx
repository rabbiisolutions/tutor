import ButtonLink from "./basic/ButtonLink";
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";

const Refer = () => {
  return (
      <Router>
        <p className={'refer-text'}>Refer friends and family who are looking for help</p>
        <ButtonLink link={'https://forms.gle/mcW67WaKBmT1jNgh8'} value={'Refer'} className={'refer'}/>
      </Router>
  );
};

export default Refer;
