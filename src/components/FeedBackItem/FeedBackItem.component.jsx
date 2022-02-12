import React from 'react';
import Card from '../Card/Card.component';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa'

const FeedBackItem = ({ id, rating, text, handleDelete}) => {
	return (
		<Card>
			<div className='num-display'>{rating}</div>
            <button onClick={() => handleDelete(id)} className="close"><FaTimes color='purple'/></button>
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
