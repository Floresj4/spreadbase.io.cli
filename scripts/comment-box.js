"use strict";

var CommentBox = React.createClass({
	
	//execute once during the lifecycle
	getInitialState: function() {
		return { data:[] };
	},
	
	componentDidMount: function() {
		
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
		
		console.log('component mounted');
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
      <div className="commentForm">

      </div>
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
  <CommentBox />,
  document.getElementById('content')
);