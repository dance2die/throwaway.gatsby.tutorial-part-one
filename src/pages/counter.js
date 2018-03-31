import React, { Component } from "react";
import Link from "gatsby-link";

class Counter extends Component {
  state = { count: 0 };

  onClick = by => {
    this.setState({ count: (this.state.count += by) });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current Count: {this.state.count}</p>
        <button onClick={() => this.onClick(1)}>Plus</button>
        <button onClick={() => this.onClick(-1)}>Minus</button>
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Counter;
