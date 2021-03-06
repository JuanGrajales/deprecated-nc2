import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

  test = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          posts: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  displayPosts = () => {
    if (this.state.posts.length) {
      return this.state.posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      });
    } else {
      return <li>No posts</li>;
    }
  };

  render() {
    return (
      <>
        <h1>Fetch</h1>
        <button onClick={this.test}>Get Request</button>
        <ul>{this.displayPosts()}</ul>
      </>
    );
  }
}

export default App;
