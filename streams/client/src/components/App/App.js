import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

const StreamList = () => {
  return <div>StreamList</div>;
};

const StreamCreate = () => {
  return <div>StreamCreate</div>;
};

const StreamEdit = () => {
  return <div>StreamEdit</div>;
};

const StreamDelete = () => {
  return <div>StreamDelete</div>;
};

const StreamShow = () => {
  return <div>StreamShow</div>;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
