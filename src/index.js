import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comments from "./components/Comments";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comments name="Sam" timeAgo="Today at 6:00pm" content="Great" />
      </ApprovalCard>
      <ApprovalCard>
        <Comments name="Adil" timeAgo="Yesterday at 3:00pm" content="Not bad" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
