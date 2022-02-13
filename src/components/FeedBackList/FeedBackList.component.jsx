import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import FeedBackContext from '../../context/FeedBack/FeedBack.context';
import FeedBackItem from '../FeedBackItem/FeedBackItem.component';
import { motion, AnimatePresence } from 'framer-motion';

const FeedBackList = () => {
	const { feedback } = useContext(FeedBackContext);
	if (!feedback || feedback.length === 0) return <p>No Feedback yet...</p>;
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map(({ id, text, rating }) => (
					<motion.div
						key={uuidv4()}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedBackItem
							key={uuidv4()}
							id={id}
							text={text}
							rating={rating}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default FeedBackList;
