import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var Chart = require("./Chart"),
  options = {
    chart: {
      type: "pie"
    },
    series: [
      {
        data: [5, 3, 7]
      }
    ]
  };

class App extends React.Component {
  render() {
    const opts = { container: "chart", options: options };
    return (
      <div className="App">
        <Chart {...opts} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
