import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { lazy, Suspense } from 'react';
import NavBar from 'common/NavBar';
import { Apps } from '@mf/types';

const HRM = lazy(() => import('hrm/HRM'));
const Events = lazy(() => import('events/Events'));

export default () => {
  return (
    <Router>
      <NavBar style={{}} active={Apps.EVENTS} />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/events/*">
          <Suspense fallback="loading...">
            <Events></Events>
          </Suspense>
        </Route>
        <Route exact path="/events">
          <Suspense fallback="loading...">
            <Events></Events>
          </Suspense>
        </Route>
        <Route exact path="/hrm">
          <Suspense fallback="loading...">
            <HRM></HRM>
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};
