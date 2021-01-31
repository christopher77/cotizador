import React from 'react';
import './App.css';
import AddInsure from './views/AddInsure/AddInsure';
import ChosePlan from './views/ChosePlan/ChosePlan';
import Login from './views/Login/Login';
import Success from './views/Success/Success';
import { Router,RouteComponentProps } from "@reach/router";

const App = () => (
  <Router>
    <RouterPage path="/" pageComponent={<Login />} />
    <RouterPage path="/insure" pageComponent={<AddInsure />} />
    <RouterPage path="/plan" pageComponent={<ChosePlan />} />
    <RouterPage path="/success" pageComponent={<Success />} />
  </Router>
);
export default App;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

