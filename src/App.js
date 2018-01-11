import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <img src={logo} className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
          <p className="Post-intro">
            All the latest and greatest things from 65 million years ago.
          </p>
        </header>
        <h1 className="Title">{this.props.posts[0].title} by {this.props.posts[0].author}</h1>
        <p className="Post-intro">
          {this.props.posts[0].content}
        </p>
        <h2>Comments</h2>
        {this.props.posts[0].comments[0]}
        <hr />
        <p>Note, at this stage, we are only rendering ONE post with ONE comment!</p>
      </div>
    );
  }
}

export default Post;
