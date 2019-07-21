import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm text-center">
						<br />
						<br />
						<span>Waiting List </span>
					</div>
					<div className="col-sm text-center">2 of 3</div>
					<div className="col-sm text-center">3 of 3</div>
				</div>
			</div>
		);
	}
}
