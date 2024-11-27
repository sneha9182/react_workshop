import React, { Component } from "react";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.interval = null; // Declare the timer
    console.log("Constructor: Timer component initialized.");
  }

  componentDidMount() {
    console.log("componentDidMount: Timer started.");
    // Start a timer that increments the seconds
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Cleaning up the timer.");
    // Clear the timer
    clearInterval(this.interval);
  }

  render() {
    console.log("Render: Timer component rendering...");
    return (
      <div className="p-4 bg-gray-200 rounded text-center">
        <h1 className="text-xl font-bold">Timer</h1>
        <p className="text-lg">Seconds elapsed: {this.state.seconds}</p>
      </div>
    );
  }
}

class UnMountExample extends Component {
  constructor() {
    super();
    this.state = { showTimer: true };
  }

  toggleTimer = () => {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  };

  render() {
    return (
      <div className="p-6 text-center">
        <button
          onClick={this.toggleTimer}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {this.state.showTimer ? "Hide Timer" : "Show Timer"}
        </button>
        {this.state.showTimer && <Timer />}
      </div>
    );
  }
}

export default UnMountExample;
