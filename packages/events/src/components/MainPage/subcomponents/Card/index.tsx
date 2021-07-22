import './styles.scss';
interface Props {
  name: string;
  event: number;
}
export default ({ name, event }: Props) => {
  return (
    <div className="card">
      <div className={`card__name ${event === 1 && 'text-blue'}`}>{name}</div>
      <div className={`card__events `}>
        {event} event{event > 1 ? 's' : ''}
      </div>
    </div>
  );
};
