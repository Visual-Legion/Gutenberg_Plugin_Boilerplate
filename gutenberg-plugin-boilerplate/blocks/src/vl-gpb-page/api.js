import axios from 'axios';

export const getCPTsWithArgs = (args) => {

	var {vl_gpb_page_order, vl_gpb_page_per_page} = args;

	var call = '/wp-json/vl_gpb_cpt_example/v1/examples';

	if (vl_gpb_page_per_page) {
		call += `?vl_gpb_page_per_page=${vl_gpb_page_per_page}`
		if (vl_gpb_page_order) {
			call += `&vl_gpb_page_order=${vl_gpb_page_order}`
		}
	} else {
		if (vl_gpb_page_order) {
			call += `?vl_gpb_page_order=${vl_gpb_page_order}`
		}
	}

	console.log('call', call);

	return axios.get(call);
}

export const getLatestCPTs = () => {
	return axios.get('/wp-json/vl_gpb_cpt_example/v1/examples/latest');
}
