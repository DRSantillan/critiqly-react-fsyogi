import React from 'react';
import PropTypes from 'prop-types'

const FeedBackStats = ({ feedback }) => {
	let averageFeedbackRating =
		feedback.reduce((acc, item) => {
			return acc + item.rating;
		}, 0) / feedback.length;
	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(averageFeedbackRating) ? 0 : averageFeedbackRating.toFixed(1)}</h4>
		</div>
	);
};

FeedBackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedBackStats;
