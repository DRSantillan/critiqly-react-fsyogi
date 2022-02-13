import React from 'react';
import Card from '../Card/Card.component';
import { useContext } from 'react';
import FeedBackContext from '../../context/FeedBack/FeedBack.context';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';

const FeedBackItem = ({ id, rating, text }) => {
	
	const { deleteFeedback, editFeedback } = useContext(FeedBackContext);
	return (
		<Card>
			<div className='num-display'>{rating}</div>
			<button onClick={() => deleteFeedback(id)} className='close'>
				<FaTimes color='purple' />
			</button>
			<button
				onClick={() => editFeedback({ id, text, rating })}
				className='edit'
			>
				<FaEdit color='purple' />
			</button>
			<div className='text-display'>{text}</div>
		</Card>
	);
};
FeedBackItem.defaultProps = {
	rating: 7,
	text: 'Feedback text data',
};
FeedBackItem.propTypes = {
	rating: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

export default FeedBackItem;
