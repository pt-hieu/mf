import { memo, useCallback, useState } from 'react';
import './styles.scss';
import { NavbarProps, Apps } from '@mf/types';
import { Link } from 'react-router-dom';

export default memo(({ style, active }: NavbarProps) => {
  const [expand, setExpand] = useState<boolean>(false);
  const toggle = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  const isActice = useCallback(
    (value: string): 'navbar__container__item--active' | '' => {
      if (value === active) return 'navbar__container__item--active';
      return '';
    },
    [active]
  );

  return (
    <div style={style} className="navbar">
      <div
        onClick={toggle}
        className={`navbar__icon clickable ${
          expand ? 'navbar__icon--expanded' : ''
        }`}
      >
        &#x02AAB;
      </div>
      <div
        className={`navbar__container ${
          expand ? '' : 'navbar__container--shrinked'
        }`}
      >
        {(Object.keys(Apps) as (keyof typeof Apps)[])
          .map((app) => Apps[app])
          .map((app) => (
            <Link key={app} to={`${app.toLocaleLowerCase()}`}>
              <div
                className={`navbar__container__item clickable ${isActice(app)}`}
              >
                {app}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
});
