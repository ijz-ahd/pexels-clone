import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Photos from "./components/Photos";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Banner />
            <Nav />
            <Photos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
