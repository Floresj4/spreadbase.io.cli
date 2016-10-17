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
	
	loadCommentsFromServer: function() {
		
		$.ajax({
			url: 'comment-data.js',
			dataType: 'json',
			cache: false,
			success: function(data){
				
				this.setState({data: data});
				console.log(data);
				
			}.bind(this),
			error: function(xhr, status, err){
				
				console.error('comment-data.js', status, err.toString());
				
			}.bind(this)
		});
		
		console.log('comments loaded');
	},
	
	render: function() {
		return (
			<div className="commentBox">
				<div className='page-header'><h3>Comments</h3></div>
		
				<CommentList data={this.state.data} />
				<CommentForm />
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
  render: function() {
    return (
		<form>
			<div className="commentForm">
				<h4>Add your comment</h4>

				<div className="form-group">
					<label htmlFor="inputName">Name</label>
					<input type='text' className="form-control" id='inputName' placeholder='Your name' />
				</div>
				<div className="form-group">
					<label htmlFor="inputComment">Name</label>
					<input type='text' className="form-control" id='inputComment' placeholder='Say something...' />
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
  <CommentBox pollInterval={2000}/>,
  document.getElementById('content')
);