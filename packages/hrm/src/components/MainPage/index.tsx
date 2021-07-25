import './styles.scss';
import { useState } from 'react';

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
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
