import React from 'react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.error(error)
  );

  return <div className="App">Hi</div>;
};

export default App;
