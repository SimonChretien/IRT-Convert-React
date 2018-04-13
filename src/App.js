import React, { Component } from "react";
import "./App.css";

//import css / img
import "bulma/css/bulma.css";

//import  comp
import Header from "./component/header.js";
import FunctionComponent from "./component/functioncomponent.js";

class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      functionCalled: "IRT-Converter"
    }
  }

  render() {
    const { functionCalled } = this.state;
    return (
      <section className="hero is-primary is-fullheight">
        <Header />
        <FunctionComponent functionCalled={functionCalled}/>
        <div className="hero-foot">
        </div>
      </section>
    );
  }
}

export default App;
