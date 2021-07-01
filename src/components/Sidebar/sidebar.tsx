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

				<li className="sidebar-item">
					<a className="sidebar-link" href="pages-profile.html">
						<i className="align-middle" data-feather="user"></i> <span className="align-middle">Suppliers</span>
					</a>
				</li>

				<li className="sidebar-item">
					<a className="sidebar-link" href="pages-sign-in.html">
						<i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Loaders</span>
					</a>
				</li>

				<li className="sidebar-item">
					<a className="sidebar-link" href="pages-sign-up.html">
						<i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Receipts</span>
					</a>
				</li>

				<li className="sidebar-item">
					<a className="sidebar-link" href="pages-blank.html">
						<i className="align-middle" data-feather="book"></i> <span className="align-middle">Invoices</span>
					</a>
				</li>

				<li className="sidebar-item">
					<a className="sidebar-link" href="pages-blank.html">
						<i className="align-middle" data-feather="book"></i> <span className="align-middle">Packages</span>
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="pages-blank.html">
						<i className="align-middle" data-feather="book"></i> <span className="align-middle">Settings</span>
					</a>
				</li>





			</ul>
		</div>
	</nav>

	)
};

export default sidebar;