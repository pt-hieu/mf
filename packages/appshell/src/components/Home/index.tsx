import { Apps } from '@mf/types';
import { Link } from 'react-router-dom';
import './styles.scss';
export default () => {
  return (
    <div className="home">
      <div className="home__header">
        <img
          style={{
            height: '50px',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginLeft: '2rem',
          }}
          src="src/assets/kms-logo-white.png"
        />
        <span>Good morning, Admin</span>
      </div>
      <div className="home__container">
        {(Object.keys(Apps) as (keyof typeof Apps)[])
          .map((app) => Apps[app])
          .map((app) => (
            <Link
              className="home__container__item"
              to={`/${app.toLocaleLowerCase()}`}
            >
              <div>{app}</div>
            </Link>
          ))}
      </div>
    </div>
  );
};
