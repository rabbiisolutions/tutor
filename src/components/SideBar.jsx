import React from "react";
import texts from "../constants/texts";
import menuToggle from "../events/MenuToggle";


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesOpen: false
    };
  }

  menuHandler(e) {
    const target = e.target;
    if (this.state.active)
      this.toggleActive(this.state.active);
    this.toggleActive(target);
    this.setState({active: target});
    if (target.classList[0] === 'menu-sub-item')
      this.setState( {servicesOpen: !this.state.servicesOpen});
    else {
      this.setState( {servicesOpen: false});
    }
    menuToggle(target);
  }

  toggleActive(item) {
    item.classList.toggle('active');
  }

  render() {
    return (
        <nav className="menu hidden">
          <div className="side-bar">
            <div className="menu-title">{texts.menuTitle}</div>
            <div className="menu-items">
              <a className="menu-item" href="https://rabbii.co.ke/">
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[0]}</span>
              </a>
              <a className="menu-item" href={'https://tuition-jobs.rabbii.co.ke/'}  onClick={e => this.menuHandler(e)}>
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[1]}</span>
              </a>
              <a className="menu-item active" href="#landing">
                <span className={'activated'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[2]}</span>
              </a>
              <a className="menu-item" href={"https://about.rabbii.co.ke"}>
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[3]}</span>
              </a>
              <a className="menu-item" href="https://trending.rabbii.co.ke/">
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[4]}</span>
              </a>
              <a className="menu-item" href="https://faqs.rabbii.co.ke/">
                <span className={'activated hidden'}>&nbsp;</span>
                <span className={'text'}>{texts.menuItems[5]}</span>
              </a>
            </div>
          </div>
        </nav>
    );
  }
}

export default SideBar;
