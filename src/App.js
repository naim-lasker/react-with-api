import React, { Component } from "react";
import "./App.css";

import Posts from "./component/Posts";
import PostForm from "./component/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <h1>Header</h1>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
