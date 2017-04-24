import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
  if (props.quizResult === 'going out') {
    return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Better bring your A game, looks like you're <span className="gradient"><strong>{props.quizResult}</strong></span>!
        <img className="gif-image" src="https://media.giphy.com/media/hsBZfDG7wiWHu/giphy.gif"/>
      </div>
    </ReactCSSTransitionGroup>
  );
  } else {
    return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Chillax. You're <span className="gradient"><strong>{props.quizResult}</strong></span>!
        <img className="gif-image" src="https://media.giphy.com/media/EDt1m8p5hqXG8/giphy.gif"/>
      </div>
    </ReactCSSTransitionGroup>
  );
  }
  

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
