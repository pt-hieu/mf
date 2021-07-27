import './styles.scss';
import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const sidebarItems = [
  'Dashboard',
  'Time-sheet',
  'Leave',
  'Transfer',
  'Information',
  'Directories',
  'OrgChart',
];

export default () => {
  const [activeItem, setActiveItem] = useState<string>(sidebarItems[0]);
  const history = useHistory();

  return (
    <div className="hrm">
      <div className="hrm__sidebar">
        <div className="hrm__sidebar__title">HRM rep 1:1</div>
        <div className="hrm__sidebar__container">
          {sidebarItems.map((item) => (
            <div
              key={item}
              onClick={() => setActiveItem(item)}
              className={`hrm__sidebar__item ${
                item === activeItem ? 'hrm__sidebar__item--active' : ''
              }`}
            >
              <Link
                style={{ color: 'white' }}
                to={`/hrm/${item.toLocaleLowerCase()}`}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="hrm__content">
        <Switch>
          <Route exact path="/hrm/time-sheet">
            <div>abc</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
