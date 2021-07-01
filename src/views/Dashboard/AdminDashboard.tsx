import React from "react";
import SideBar from '../../components/Sidebar/sidebar';
import NavBar from '../../components/Navbar/navbar1';
import "../../assets/css/bootstrap.min.css";


function Dashboard() {
  return (
    <div>  

      <div className="container">
        <div className="row">
          <div className="col-4">
          <SideBar/>
          </div>
          <div className="col-8">
          <NavBar/>
          </div>
        </div>
        </div> 
       
      
     

    </div>
  );
}

export default Dashboard;