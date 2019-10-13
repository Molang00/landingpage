import React from "react";
import { render } from "react-dom";

import Header from "./Header";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import "./styles/Main.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header></Header>
        <Main></Main>
        <Footer />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
