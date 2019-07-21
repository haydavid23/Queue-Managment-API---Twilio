import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

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
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Customer Name</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div className="col-sm text-center m-auto">
						<br />
						<br />
						<br />
						<Button variant="success">Next</Button>
					</div>
					<div className="col-sm text-center">
						<br />
						<br />
						<span>Being Process</span>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Customer Name</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}
