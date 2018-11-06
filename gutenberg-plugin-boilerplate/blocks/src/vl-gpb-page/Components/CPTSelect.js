const {Component} = wp.element;

// const inputs = ['vl_gpb_page_order', 'vl_gpb_page_per_page']

export class CPTSelect extends Component {

	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			vl_gpb_page_order: '>=',
			vl_gpb_page_per_page: '5'
		}

		this.handleInputChange = this.handleInputChange.bind(this);

	}

	componentDidMount() {
		if (this.props.vl_gpb_page_order) {
			this.setState({
				vl_gpb_page_order: this.props.vl_gpb_page_order
			}, () => {
			});
		}
		if (this.props.vl_gpb_page_per_page) {
			this.setState({
				vl_gpb_page_per_page: this.props.vl_gpb_page_per_page
			}, () => {
			});
		}
	}

	// If input cahnges, change the state that has the same name as input, then update attributes
	handleInputChange(event) {
		let name = event.target.name
		this.setState({
			[event.target.name]: event.target.value
		}, () => {
			switch (name) {
			case 'vl_gpb_page_order':
				this.props.updateAttributes({
					vl_gpb_page_order: this.state.vl_gpb_page_order
				});
			case 'vl_gpb_page_per_page':
				console.log('vl_gpb_page_per_page');
				this.props.updateAttributes({
					vl_gpb_page_per_page: this.state.vl_gpb_page_per_page
				});
			}
		});

	}


	render() {
		return (
			<div className="CPTSelect">
     <div>
       <strong> Upcoming or past events</strong>
     </div>
     <select name="vl_gpb_page_order" value={ this.state.vl_gpb_page_order } onChange={ this.handleInputChange }>
       <option value="latest">Latest CPT</option>
       <option value=">=">Upcoming CPTs</option>
       <option value="<">Past CPTs</option>
     </select>
     <div>
       <strong> Number of events to show</strong>
     </div>
     <input name="vl_gpb_page_per_page" type="number" min="1" max="10" default="5" value={ this.state.vl_gpb_page_per_page } onChange={ this.handleInputChange } />
   </div>
			);
	}
}