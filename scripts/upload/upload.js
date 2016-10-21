"use strict";

var UploadForm = React.createClass({
	getInitialState: function() {
		return ({data: []});
	},
	
	handleFileChange: function(e) {
		var file = e.target.files[0];
		
		var fd = new FormData();
		fd.append('file', file, file.name);

		$.ajax({
			url: 'http://localhost:8080/upload/',
			type: 'POST',
			data: fd,
			processData: false, //don't process the files
			
			/**
			 * set content type to false of jQuery will 
			 * default to application/x-www-form-urlencoded
			 */
			contentType: false, 
			success: function(data, status, xhr) {
				console.log('done');
			},
			error: function(xhr, status, err) {
				console.log(xhr.toString() + ' ' + status + ' ' + err);
			}
		});
	},
	
	render: function() {
		return (
			<form encType='multipart/form-data'>
				<div className='form-group'>
					<input id='fileUpload' 
						className='btn btn-default form-control' 
						type='file' 
						onChange={this.handleFileChange} />
				</div>
			</form>
		);
	}
	
});

ReactDOM.render(
	<UploadForm />,
	document.getElementById('upload-form')
);