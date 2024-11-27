import React, { Component } from "react";

class UpdatingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component initialized.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding to re-render...");
    // Only update if the count is even
    return nextState.count % 2 === 0;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Capturing snapshot...");
    return prevState.count; // Return previous count as the snapshot
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      `componentDidUpdate: Component updated from count ${snapshot} to ${this.state.count}.`
    );
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("Render: Re-rendering component...");
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Updating Lifecycle Example</h1>
        <p className="text-lg mt-4">Count: {this.state.count}</p>
        <button
          onClick={this.handleIncrement}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default UpdatingExample;
