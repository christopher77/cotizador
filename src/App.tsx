import React, { useState } from 'react';
// import { Router } from "@reach/router";
import './App.css';
import Description from './components/Description';
import Login from './views/Login';

function App():JSX.Element {

  const [some,setSome] =useState<string>('');

  return (<Login/>
  );
}

export default App;
