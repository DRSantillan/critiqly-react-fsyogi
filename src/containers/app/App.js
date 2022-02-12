import './App.css';
import { useState } from 'react';
import Header from '../../components/Header/Header.component';
import FeedBackList from '../../components/FeedBackList/FeedBackList.component';

import {data } from '../../data/feedback.data'

const App = () => {
  const [feedback, setFeedback] = useState(data)
  

	return (
		<>
			<Header />{' '}
			<div className='container'>
				<FeedBackList feedback={feedback} />
			</div>
		</>
	);
}

export default App;
