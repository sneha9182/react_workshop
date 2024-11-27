import React, { Component } from "react";

class MountingExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    return null; // Normally used to sync state with props
  }

  componentDidMount() {
    // Simulating an async operation
    setTimeout(() => {
      this.setState({ count: 10 });
    }, 2000);
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            React Mounting Lifecycle
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Current Count:{" "}
            <span className="font-bold text-blue-500">{this.state.count}</span>
          </p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="mt-6 bg-blue-500 text-white px-4 py-2 
            rounded shadow hover:bg-blue-600 transition duration-200"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default MountingExample;
