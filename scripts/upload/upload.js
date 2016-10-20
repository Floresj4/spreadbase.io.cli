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

	handleFormUpload: function(event) {
		event.stopPropagation();
		event.preventDefault();

//		//build form data for submission
//		var data = new FormData();
//		$.each(this.state.data, function(key, value) {
//			data.append(key, value);
//		});
//		
//		$.ajax({
//			url: 'http://localhost:8080/upload/',
//			type: 'POST',
//			data: data,
//			processData: false, //don't process the files
//			
//			/**
//			 * set content type to false of jQuery will 
//			 * default to application/x-www-form-urlencoded
//			 */
//			contentType: false, 
//			success: function(data, status, xhr) {
//				console.log('done');
//			},
//			error: function(xhr, status, err) {
//				console.log(xhr.toString() + ' ' + status + ' ' + err);
//			}
//		});
	},
	
	render: function() {
		return (
			<form onSubmit={this.handleFormUpload} encType='multipart/form-data'>
				<input id='fileUpload' 
					className='btn btn-default' 
					type='file' 
					placeholder='Upload a file' 
					onChange={this.handleFileChange} />

				<input id='submit'
					className='btn btn-default' 
					type='Submit' 
					accept='application/*'
					defaultValue='Submit' />
			</form>
		);
	}
	
});

ReactDOM.render(
	<UploadForm />,
	document.getElementById('upload-form')
);