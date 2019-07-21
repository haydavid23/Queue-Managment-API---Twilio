import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext.js";

import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<div className="row">
									<div className="col-sm text-center">
										<br />
										<br />
										<span className="text-center">Waiting List </span>
										<Button variant="info" className="float-right">
											Info
										</Button>
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>#</th>
													<th>Customer Name</th>
												</tr>
											</thead>
											<tbody>
												{store.customers.map((item, index) => {
													return (
														<tr key={index}>
															<td>{index + 1}</td>
															<td>{item}</td>
														</tr>
													);
												})}
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
													<th>Customer Name</th>
												</tr>
											</thead>
											<tbody>
												{store.customers.map((item, index) => {
													return (
														<tr key={index}>
															<td>{item}</td>
														</tr>
													);
												})}{" "}
											</tbody>
										</Table>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
