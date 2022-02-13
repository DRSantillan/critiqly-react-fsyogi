import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{ id: 1, text: 'this item is from the context provider', rating: 2 },
		{ id: 2, text: 'this item is from the context provider', rating: 5 },
		{ id: 3, text: 'this item is from the context provider', rating: 7 },
		{ id: 4, text: 'this item is from the context provider', rating: 9 },
		{ id: 5, text: 'this item is from the context provider', rating: 10 },
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});
	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
		console.log(newFeedback);
	};

	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	const updateFeedback = (id, updatedItem) => {
		console.log(id, updatedItem);
		setFeedback(feedback.map(item => item.id === id ? {...item, ...updatedItem} : item))
	};
	return (
		<FeedBackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
				editFeedback,
				feedbackEdit,
				updateFeedback,
			}}
		>
			{children}
		</FeedBackContext.Provider>
	);
};

export default FeedBackContext;
