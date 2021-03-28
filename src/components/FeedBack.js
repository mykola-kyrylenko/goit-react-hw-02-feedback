import React, { Component } from 'react';
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js';
import Notification from './Notification/Notification.js';
import s from './FeedBack.module.css'

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  countPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.ceil((100 / total) * good) : 0;
  };

  handleFeedback = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFn = this.countTotalFeedback();
    const percentFn = this.countPercentage();
    
    return (
      <div className={s.wrapper}>
        <Section title="Please leave feedback" flag={true}>
          <FeedbackOptions onClick={this.handleFeedback} />
        </Section>
        <Section title="Statistics" flag={false}>
          {totalFn > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFn}
              percentage={percentFn}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}
export default FeedBack;