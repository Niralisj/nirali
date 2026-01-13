import React from 'react';
import Intro from "./components/Intro";
import About from "./components/About"
import NavBar from "./components/Navbar"
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import './App.css';
import "./styles/Global.css";
import "rsuite/dist/rsuite.css";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
 
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
