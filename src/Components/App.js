import React from 'react';
import MainPage from "./MainPage"

import { Route } from "react-router-dom"

function App() {
  return (
    <div >
      <Route path="/" render={() => <MainPage />} />
    </div>
  );
}

export default App;
