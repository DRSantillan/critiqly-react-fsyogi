import React from 'react';
import FeedBackItem from '../FeedBackItem/FeedBackItem.component';
import PropTypes from 'prop-types';

const FeedBackList = ({ feedback }) => {
	if (!feedback || feedback.length === 0) return <p>No Feedback yet...</p>;
	return (
		<div className='feedback-list'>
			{feedback.map(({ id, text, rating }) => (
				<FeedBackItem key={id} text={text} rating={rating} />
			))}
		</div>
	);
};

FeedBackList.propTypes = {
	feedback: PropTypes.array,
};
export default FeedBackList;
