import React from 'react';
import CommentItem from './comment_item';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.storyId);
  }

  render() {
    if (!this.props.comments) return null;

    return (
      <section className="comments">
        {this.props.comments.length === 0 ? <h1>No Responses Yet</h1> : <h1>Responses</h1>}

        {this.props.currentUser ?
          <CommentFormContainer storyId={this.props.storyId}/> : null}

        {this.props.comments.reverse().map(comment => (
          <CommentItem
            comment={comment}
            key={`comment-${comment.id}`}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
           />
        ))}
      </section>
    );
  }
}

export default Comments;
