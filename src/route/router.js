import React from 'react';
import Home from '../components/Home/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EchartsTest from "../components/Home/echart";

function Routes () {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/login' component={EchartsTest} />
      {/*<Route path='/loginout' component={LoginOut} />*/}
    </Switch>

  )
}

export default Routes
