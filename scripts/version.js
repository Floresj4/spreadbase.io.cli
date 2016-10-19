"use strict";

var Version = React.createClass({
	
	getInitialState: function() {
		return ({data: []});
	},

	/**
	 * request the version information
	 * when the component loads
	 */
	componentDidMount: function() {
		
		$.ajax({
			
			url: 'http://localhost:8080/info',
			dataType: 'json',
			data: 'GET',
			success: function(info) {
				
				this.setState({data: info});

			}.bind(this),
			error: function(xhr, status, err) {
				
				console.log(xhr + ' ' + status + ' ' + err);
				
			}.bind(this)
			
		});
		
	},
	
	render: function() {
		return(
			<small>{this.state.data.version}</small>
		);
	}
});

ReactDOM.render(
	<Version />,
	document.getElementById('version')
);