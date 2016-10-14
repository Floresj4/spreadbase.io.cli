// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
		<div className='page-header'><h1>Comments</h1></div>
		
		<CommentList />
		<CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
		<Comment author="Lennox Zion">Good stuff!</Comment>
        <Comment author="Marshmellow">Keep it mello...</Comment>
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
				<h2 className='commentAuthor'>
					<small>{this.props.author}</small>
				</h2>
				{this.props.children}
			</div>
		);
	}
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);