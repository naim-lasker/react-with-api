import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    const postList = this.state.posts.map(post => {
      return <li key={post.id}>{post.title}</li>;
    });
    return (
      <div>
        <h1>Post</h1>
        <ul>{postList}</ul>
      </div>
    );
  }
}

export default Posts;
