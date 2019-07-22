import PropTypes from "prop-types";
import React from "react";
import injectContext from "../store/appContext.js";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			customers: [],
			currentPerson: ""
		},
		actions: {
			next: () => {
				const store = getStore();
				fetch("https://3000-bb39ecd8-e7dc-4502-aa93-b80d01fa1efe.ws-us0.gitpod.io/process");
				setStore({
					currentPerson: store.customers[0],
					customers: store.customers.filter(item => {
						return item != store.customers[0];
					})
				});
			},

			refresh: () => {
				const store = getStore();
				fetch("https://3000-bb39ecd8-e7dc-4502-aa93-b80d01fa1efe.ws-us0.gitpod.io/all")
					.then(response => response.json())
					.then(data => {
						setStore({ customers: data });
					});
			}
		}
	};
};

export default getState;
