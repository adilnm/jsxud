import React from "react";
import ReactDOM from "react-dom";
import faker from "faker"
import Comments from "./components/Comments";


const App = () => {
  return (
      <div>
          <Comments name={'Sam'}/>
          <Comments name={'Adil'}/>
      </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));
