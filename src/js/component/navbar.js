import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-dark mb-3">
				<span className="navbar-brand mb-0 h1 text-light">Queue with SMS</span>
			</nav>
		);
	}
}
