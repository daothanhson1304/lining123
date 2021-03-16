import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DataProvider } from "./components/Context";
import Header from "./components/Header";
import Section from "./components/Section";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
