import React from 'react';
import FeedBackItem from '../FeedBackItem/FeedBackItem.component';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const FeedBackList = ({ feedback, handleDelete }) => {
	if (!feedback || feedback.length === 0) return <p>No Feedback yet...</p>;
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map(({ id, text, rating }) => (
					<motion.div
						key={id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedBackItem
							key={id}
							id={id}
							text={text}
							rating={rating}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

FeedBackList.propTypes = {
	feedback: PropTypes.array,
};
export default FeedBackList;
