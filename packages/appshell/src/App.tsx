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
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path={['/events', '/events/*']}>
          <Suspense fallback="loading...">
            <NavBar style={{}} active={Apps.EVENTS} />
            <Events></Events>
          </Suspense>
        </Route>
        <Route exact path={['/hrm', '/hrm/*']}>
          <NavBar style={{}} active={Apps.EVENTS} />
          <Suspense fallback="loading...">
            <HRM></HRM>
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};
