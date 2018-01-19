import React, {Component} from 'react';

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
        <header className="Post-header">
          <img src={logo} className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        {allPosts}
        <hr />
      {/* this is how we comment */}
        <p>Note, at this stage, we are only rendering ONE post with ONE comment!</p>
      </div>
    );
  }
}

export default Blog;