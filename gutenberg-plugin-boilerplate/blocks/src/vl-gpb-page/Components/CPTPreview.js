const {Component} = wp.element;
import * as api from '../api';
import { CPTOutput } from './CPTOutput';

export class CPTPreview extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			title: '',
			description: '',
			location: '',
			date: '',
			photo: ''
		}

		this.getCPTs = this.getCPTs.bind(this);
		this.setStatus = this.setStatus.bind(this);

	}

	getCPTs() {
		if (this.state.vl_gpb_page_order && this.state.vl_gpb_page_per_page) {

			if (this.state.vl_gpb_page_order == 'latest') {
				api.getLatestCPTs()
					.then((response) => {
						console.log('getLatestCPTs response', response);
					})
			} else {
				var args = {
					vl_gpb_page_order: this.state.vl_gpb_page_order,
					vl_gpb_page_per_page: this.state.vl_gpb_page_per_page
				};

				api.getCPTsWithArgs(args)
					.then((response) => {
						console.log('getCPTs response', response);
					})
			}
		}

	}

	setStatus(newProps) {

		var props = newProps ? newProps : this.props;

		console.log('setStatus props', props);

		// useless if else? refactor to just if later today
		if (props.vl_gpb_page_order && props.vl_gpb_page_per_page) {

			this.setState({
				vl_gpb_page_order: props.vl_gpb_page_order,
				vl_gpb_page_per_page: props.vl_gpb_page_per_page
			}, () => {
				this.getCPTs();
			});

		} else {
			console.log('props', props);
			if (props.vl_gpb_page_order) {
				this.setState({
					vl_gpb_page_order: props.vl_gpb_page_order
				}, () => {
				});
			}
			if (props.vl_gpb_page_per_page) {
				this.setState({
					vl_gpb_page_per_page: props.vl_gpb_page_per_page
				}, () => {
				});
			}
		}
	}

	componentDidMount() {
		console.log('mount rpors');
		this.setStatus();
	}


	componentWillReceiveProps(newProps) {
		console.log('received rpors');
		this.setStatus(newProps);
	}

	componentDidUpdate() {}

	render() {
		return (
			<div className="CPTPreview tdy_photo_album
                                                                                                                                 tdy_photo_gallery">
   </div>
		)
	}
}