import './styles.scss';
import Card from './subcomponents/Card';
import NavBar from 'common/NavBar';
export default () => {
  return (
    <div className="events">
      <NavBar active="Events" />
      <div className="events__header">
        <img
          src="../../assets/eventify.png"
          className="events__header__img"
          alt=""
        />
        <div className="events__header__title">LIVE NOW</div>
      </div>
      <div className="events__body">
        <div className="events__body__title">CATEGORY</div>
        <div className="card-container">
          <Card name="TECHCON" event={1} />
          <Card name="MANAGER MEETUP" event={2} />
          <Card name="EVENTS" event={1} />
          <Card name="CB EVENTS" event={6} />
        </div>
      </div>
      <div className="events__footer"></div>
    </div>
  );
};
