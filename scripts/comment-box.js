var data = [
	{id: 1, author: "Lennox Zion", text: "Good stuff!"},
	{id: 2, author: "Marshmellow", text: "Keep it mello..."}
];

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<div className='page-header'><h3>Comments</h3></div>
		
				<CommentList data={this.props.data} />
				
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
  <CommentBox data={data} />,
  document.getElementById('content')
);