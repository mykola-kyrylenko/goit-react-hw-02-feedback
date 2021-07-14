import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ onClick, state }) {
  return (
    Object.keys(state).map((review) => {
      return (
      
      <button className={s.btn_good} key={review} name={review} onClick={onClick}>
        {review}
      </button>
    );
  })
    // <div className="btn_container">
    //   <button
    //     className={s.btn_good}
    //     type="button"
    //     name="good"
    //     onClick={onClick}>
    //     Good
    //   </button>

    //   <button
    //     className={s.btn_neutral}
    //     type="button"
    //     name="neutral"
    //     onClick={onClick}>
    //     Neutral
    //   </button>

    //   <button
    //     className={s.btn_bad}
    //     type="button"
    //     name="bad"
    //     onClick={onClick}>
    //     Bad
    //   </button>
    // </div>
  );
}

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;