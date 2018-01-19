import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Author from './Author.js';
import Comment from './Comment.js';

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
        <hr />
        <Router>
          <Link to="/blog">Blog it up!</Link>

          <Route exact path=""
        </Router>
      {/* this is how we comment */}
      </div>
    );
  }
}

export default Post;
