import React, { useState } from 'react';
// import { Router } from "@reach/router";
import './App.css';
import AddInsure from './views/AddInsure/AddInsure';
import ChosePlan from './views/ChosePlan/ChosePlan';
import Login from './views/Login/Login';
import Success from './views/Success/Success';

function App():JSX.Element {


  return (
  // <Login/>
  // <Success></Success>
  // <AddInsure/>
  <ChosePlan/>
  );
}

export default App;
