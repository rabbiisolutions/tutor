import React from "react";
import logo from "../../assets/icons/logo.svg";
import Icon from '../basic/Icon'

const Logo = (props) => {
  return (
      <a href={'#landing-image'}>
        <Icon src={logo} className={props.className} height={props.height} units={props.units}/>
      </a>
  );
};

// Exporting the component
export default Logo;
