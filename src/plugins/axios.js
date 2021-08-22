import axios from 'axios';

export const $axios = axios.create({
	// Base URL
	baseURL: '/',

	// Custom Headers
	headers: {
		'Content-Type': 'application/json',
	},
});
