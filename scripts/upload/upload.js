var UploadForm = React.createClass({
	
	render: function() {
		return (
			<form method='post' action='/'>
				<input id='fileUpload' className='btn btn-default' type='file' placeholder='Upload a file' />
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