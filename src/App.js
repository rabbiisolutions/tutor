import React from 'react';
import backDropHandler from "./events/BackDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import TutorForms from "./components/TutorForms";
import Accordion from "./components/Accordion";
import DesktopView from "./components/Desktop";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
      <CookiesProvider>
        <NavBar/>
        <main>
          <Accordion/>
          <DesktopView/>
        </main>
        <SideBar/>
        <TutorForms/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </CookiesProvider>
  )
}

export default App;
