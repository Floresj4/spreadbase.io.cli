"use strict";

var CommentBox = React.createClass({
	
	//execute once during the lifecycle
	getInitialState: function() {
		return { data:[] };
	},
	
	componentDidMount: function() {
		
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		
		console.log('component mounted');
	},
	
	handleCommentSubmit: function(comment) {
		console.log('posting ' + comment.author + ' ' + comment.text);

		$.ajax({
			
			url: 'http://localhost:8080/',
			type: 'POST',
			data: comment,
			success: function(data) {
				
				console.log(data);
//				this.setState({data: data});
				
			}.bind(this),
			error: function(xhr, status, err) {
			
				console.log(this.props.url, status, err.toString());
				
			}.bind(this)
			
		});
		
	},

	loadCommentsFromServer: function() {
		
		$.ajax({
			url: 'comment-data.js',
			dataType: 'json',
			cache: false,
			success: function(data){
				
				this.setState({data: data});
				
			}.bind(this),
			error: function(xhr, status, err){
				
				console.error('comment-data.js', status, err.toString());
				
			}.bind(this)
		});
	},
	
	render: function() {
		console.log
		return (
			<div className="commentBox">
				<div className='page-header'><h3>Comments</h3></div>
		
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function() {
		
		//iterate and create comments
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});


var CommentForm = React.createClass({
	getInitialState : function() {
		return {author: '', text: ''};
	},

	handleAuthorChange: function(e) {
		this.setState({author: e.target.value});
	},

	handleSubmit: function(e) {
		//prevent the default submit
		e.preventDefault();
		
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!author || !text)
			return;
		
		//callback passed in from the parent CommentBox
		this.props.onCommentSubmit({author: author, text: text });
//		this.setState({author: '', text: ''});
	},

	handleTextChange: function(e) {
		this.setState({text: e.target.value});
	},

	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="commentForm">
					<h4>Add your comment</h4>

					<div className="form-group">
						<label htmlFor="inputName">Name</label>
						<input type='text' className="form-control" id='inputName' placeholder='Your name'
							value={this.state.author}
							onChange={this.handleAuthorChange} />
					</div>
					<div className="form-group">
						<label htmlFor="inputComment">Name</label>
						<input type='text' className="form-control" id='inputComment' placeholder='Say something...'
							value={this.state.text}
							onChange={this.handleTextChange} />
					</div>
					<div className="form-group">
						<input type='submit' className="btn btn-default" value='Post' />
					</div>
				</div>
			</form>
    	);
	}
});

var Comment = React.createClass({
	render: function() {
		return (
			<div className='comment'>
				<h4 className='commentAuthor'>
					<small>{this.props.author}</small>
				</h4>
				{this.props.children}
			</div>
		);
	}
});


ReactDOM.render(
  <CommentBox pollInterval={2000} />,
  document.getElementById('content')
);