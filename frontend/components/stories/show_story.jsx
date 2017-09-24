import React from 'react';
import { Link } from 'react-router-dom';

class ShowStory extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
  }

  handleDelete() {
    this.props.deleteStory(this.props.story.id)
      .then((story) => this.props.history.push({pathname: "/"}));
  }

  render() {
    const { currentUser, story, fetchStory, deleteStory } = this.props;

    console.log(this.props);
    if (!story) { return null };

    return (
      <div>
        <section className="story">
          <h2>{story.title}</h2>
          <h3>{story.description}</h3>
          <p>{story.body}</p>
          <Link to={`/users/${story.author.author_id}`} className="user-info-thumb">
            <img className="user-image-small" src={story.author.author_image} />
            {story.author.author_name}
          </Link>

          {(this.props.currentUser.id === this.props.story.author.author_id) ?
            <div>
              <Link to={`/stories/${this.props.story.id}/edit`}>Edit Story</Link>
              <button onClick={this.handleDelete}>Delete Story</button>
            </div> : null }


        </section>
      </div>
    )
  }

}

export default ShowStory;
