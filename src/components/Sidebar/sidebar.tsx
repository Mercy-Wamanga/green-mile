import React from "react";
import { Link } from 'react-router-dom';
// import "../../assets/css/app.css"
import "../../routes"
import "../../assets/css/app.css"
import "../../assets/css/bootstrap.min.css"
import logo from '../../assets/img/delivery3.png'




const sidebar = () => {
	return (
		<nav id="sidebar" className="sidebar js-sidebar">
		<div className="sidebar-content js-simplebar">
			<a className="sidebar-brand" href="index.html">
				{/* eslint-disable-next-line */}
				<img src={logo} className="logo" />
			</a>

			<ul className="sidebar-nav">


				<li className="sidebar-item active ">
					<Link to="/admin" className="sidebar-link">
						<i className="align-middle" data-feather="sliders"></i> <span className="align-middle">overview</span>

					</Link>

				</li>

			





			</ul>
		</div>
	</nav>

	)
};

export default sidebar;