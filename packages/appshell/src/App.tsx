import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { lazy, Suspense } from 'react';

const HRM = lazy(() => import('hrm/HRM'));
const Events = lazy(() => import('events/Events'));

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback="loading...">
            <Home></Home>
          </Suspense>
        </Route>
        <Route exact path="/events">
          <Suspense fallback="loading...">
            <Events></Events>
          </Suspense>
        </Route>
        <Route exact path="/hrm">
          <HRM></HRM>
        </Route>
      </Switch>
    </Router>
  );
};
