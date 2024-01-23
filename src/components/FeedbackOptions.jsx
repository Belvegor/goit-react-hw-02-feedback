import styles from './feedbackWidget.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
      <div className={styles.buttons}>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  };
  
  export default FeedbackOptions;