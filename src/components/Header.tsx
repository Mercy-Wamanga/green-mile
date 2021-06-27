import React from "react";
import logo from '../assets/img/package.svg';


const Header = () => {
  return (
    <div className="header">
     <img src={logo} width="400" height="400"  alt="" className="rotate" />
    </div>
  );
};

export default Header;