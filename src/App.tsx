import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
function App() {
  return (
    <div> 
      <Header />
      <div className="row">
        <Main />
      </div>
      <div className="row">

      <Navbar/>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
