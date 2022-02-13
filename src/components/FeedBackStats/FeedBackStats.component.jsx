import React from 'react';
import { useContext } from 'react';
import FeedBackContext from '../../context/FeedBack/FeedBack.context';

const FeedBackStats = ( ) => {
	const {feedback} = useContext(FeedBackContext)
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



export default FeedBackStats;
