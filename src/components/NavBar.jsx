import React from "react";
import Logo from "./basic/Logo";
import Icon from "./basic/Icon";
import toggle from "../assets/icons/menu.svg"
import Button from "./basic/Button";
import texts from "../constants/texts";
import signUpHandler from "../events/SignUpModal";
import menuToggle from "../events/MenuToggle";


class NavBar extends React.Component {
  render() {
    return (
      <nav id="nav-bar">
        <Logo className="logo" height={3} units={'rem'}/>
        <span className="nav">
          <a className="nav-item" href="https://rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[0]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href="https://payment.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[1]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item active" href="#landing">
                <span className={'text'}>{texts.menuItems[2]}</span>
              <span className={'active'}>&nbsp;</span>
            </a>
            <a className="nav-item"  href="https://about.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[3]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href="https://faqs.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[4]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href="https://trending.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[5]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
        </span>
        <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
        <Icon src={toggle} className="toggle" height={2.25} width={5} onClick={e => menuToggle(e)}/>
      </nav>
    );
  }
}

export default NavBar;
