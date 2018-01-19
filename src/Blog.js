import React, {Component} from 'react';

import Author from './Author.js';
import Comment from './Comment.js';

class Blog extends Component {
  render() {
    const allPosts = this.props.posts.map(p => {
      return <div>
          <h1 className="Title">{p.title}</h1>
          <Author author={p.author} />
          <p className="Post-intro">
            {p.content}
          </p>
          <h2>Comments</h2>
          <Comment comments={p.comments}/>
          <br />
          <br />
        </div>
    });
    return (
      <div className="Post">
        {allPosts}
        <hr />
      {/* this is how we comment */}
      </div>
    );
  }
}

export default Blog;