import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul className={s.btn_container}>
      <li className={s.item__stat}>Good: {good}</li>
      <li className={s.item__stat}>Neutral: {neutral}</li>
      <li className={s.item__stat}>Bad: {bad}</li>
      <li className={s.item__stat}>Total: {total}</li>
      <li className={s.item__stat}>Positive statistic: {percentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;