import React from "react";

const FunctionComponent = ({ functionCalled }) => {
  if (functionCalled === "IRT-Converter") {
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to {functionCalled}</h1>
            <h2 className="subtitle">Just a Wonderfull Tool</h2>
          </div>
        </div>
      </div>
    );
  }
  if (functionCalled === "Request-Builder") {
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to {functionCalled}</h1>
            <h2 className="subtitle">Just a Wonderfull Tool</h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">404</h1>
          <h2 className="subtitle">Just a wonderfull... What ?</h2>
        </div>
      </div>
    </div>
  );
};

export default FunctionComponent;
