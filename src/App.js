import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Blog from './Blog.js';
import Home from './Home.js';
import Movie from './Movie.js';
import Food from './Food.js';
import About from './About.js';


class Post extends Component {
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <img src={logo} className="Post-logo" alt="logo" />
          <h1 className="Post-title">Dino Blog</h1>
        </header>
        <Router>
          <div>
            <Link to="/">Take me home</Link>
            <Link to="/blog">Blog it up!</Link>
            <Link to="/movie">Bestest movie!</Link>
            <Link to="/about">Learn More</Link>
            <Link to="/food">What we eat</Link>
            <hr />

            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={ () => (<Blog posts={this.props.posts} /> )} />
            <Route exact path="/movie" component={Movie} />
            <Route exact path="/about" component={About} />
            <Route exact path="/food" component={Food} />
          </div>
        </Router>
      {/* this is how we comment */}
      </div>
    );
  }
}

export default Post;
