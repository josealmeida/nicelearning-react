import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

const PageOne = () => {
  return (
    <div>
      Page One
      <a href="/2">Navigate to page 2</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <a href="/">Navigate to page 1</a>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/2" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
