import React from 'react';
import Card from '../Card/Card.component';
import PropTypes from 'prop-types';

const FeedBackItem = ({ rating, text }) => {
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<div className='text-display'>{text}</div>
		</Card>
	);
};
FeedBackItem.defaultProps = {
    rating: 7,
    text: 'Feedback text data'
}
FeedBackItem.propTypes = {
	rating: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

export default FeedBackItem;
