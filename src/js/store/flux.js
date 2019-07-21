const getState = ({ getStore, setStore }) => {
	return {
		store: {
			customers: []
		},
		actions: {
			next: () => {}
		},

		refresh: () => {}
	};
};

export default getState;
