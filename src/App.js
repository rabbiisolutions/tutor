import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/BackDrop";

function App() {
  return (
      <Router>
        <main>
        </main>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
      </Router>
  )
}

export default App;
