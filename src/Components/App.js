import React from 'react';

// Components 
import MainPage from "./MainPage"

// External components
import { Route } from "react-router-dom"

function App() {
  return (
    <div >
      <Route path="/" render={() => <MainPage />} />
    </div>
  );
}

export default App;
