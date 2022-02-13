import React from 'react';
import Card from '../Card/Card.component';
import Button from '../Button/Button.component';
import { useState, useContext, useEffect } from 'react';
import RatingSelector from '../RatingSelector/RatingSelector.component';
import FeedBackContext from '../../context/FeedBack/FeedBack.context';

const FeedBackForm = () => {
	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedBackContext);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(10);

	const handleTextChange = event => {
		console.log(event.target.value);
		setText(event.target.value);
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage(
				'Text must be a least 10 or more characters to submit a review...'
			);
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
	};

	const handleSubmitEvent = event => {
		event.preventDefault();
		if (text.trim().length > 10) {
			const newFeedBack = {
				text,
				rating,
			};
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedBack);
			} else {
				addFeedback(newFeedBack);
			}

			setText('');
		}
	};
	return (
		<Card>
			<form onSubmit={handleSubmitEvent}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelector select={rating => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review...'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send Review
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedBackForm;
