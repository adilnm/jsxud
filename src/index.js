import React from "react";
import ReactDOM from "react-dom";
import faker from "faker"
import Comments from "./components/Comments";


const App = () => {
  return (
      <div>
          <Comments/>
          <Comments/>
      </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));
