import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// pages
import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
