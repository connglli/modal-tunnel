import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import Nav from './routes/navigator';
import IndexPage from './routes/index-page';
import SecondPage from './routes/second-page';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Nav}>
        <IndexRoute component={IndexPage} />
        <Route path="/index" component={IndexPage} />
        <Route path="/second" component={SecondPage} />
      </Route>
    </Router>
  )
}

export default RouterConfig
