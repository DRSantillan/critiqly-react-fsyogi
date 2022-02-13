import './App.css';
import { useState } from 'react';
import Header from '../../components/Header/Header.component';
import FeedBackPage from '../../pages/FeedBackPage.page.component';
import AboutPage from '../../pages/About.component.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { data } from '../../data/feedback.data';

const App = () => {
	const [feedback, setFeedback] = useState(data);

	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	const addFeedback = newFeedback => {
		newFeedback.idd = uuidv4();
		setFeedback([newFeedback, ...feedback]);
		console.log(newFeedback);
	};
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<FeedBackPage
						feedback={feedback}
						addFeedback={addFeedback}
						deleteFeedback={deleteFeedback}
					/>}>
				
				</Route>

				<Route exact path='/about' element={<AboutPage/>} />
			</Routes>
		</Router>
	);
};

export default App;
