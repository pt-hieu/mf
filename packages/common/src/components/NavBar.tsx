import { memo, useCallback, useState } from 'react';
import './styles.scss';
import { NavbarProps, Apps } from '@mf/types';

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
    <div style={style} onClick={toggle} className="navbar">
      <div className={`navbar__icon ${expand ? 'navbar__icon--expanded' : ''}`}>
        &#x02AAB;
      </div>
      <div
        className={`navbar__container ${
          expand ? '' : 'navbar__container--shrinked'
        }`}
      >
        {(Object.keys(Apps) as (keyof typeof Apps)[]).map((app) => (
          <div
            key={Apps[app]}
            className={`navbar__container__item ${isActice(Apps[app])}`}
          >
            <span>{Apps[app]}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
