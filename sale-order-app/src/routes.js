import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ActiveOrders from './components/ActiveOrders';
import CompletedOrders from './components/CompletedOrders';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/active-orders" component={ActiveOrders} />
      <Route path="/completed-orders" component={CompletedOrders} />
    </Switch>
  </Router>
);

export default Routes;
