import React, { Component } from 'react';
import styles from './feedbackWidget.module.css';

class FeedbackWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div className={styles.buttons}>
          <button onClick={() => this.handleFeedback('good')}>Good</button>
          <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
          <button onClick={() => this.handleFeedback('bad')}>Bad</button>
        </div>

        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;