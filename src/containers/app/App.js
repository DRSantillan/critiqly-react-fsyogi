import './App.css';
import { useState } from 'react';
import Header from '../../components/Header/Header.component';
import FeedBackList from '../../components/FeedBackList/FeedBackList.component';

import {data } from '../../data/feedback.data'

const App = () => {
  const [feedback, setFeedback] = useState(data)
  
const deleteFeedback = id => {
 if(window.confirm('Are you sure you want to delete this feedback?')){
	 setFeedback(feedback.filter(item => item.id !== id))
 }
}
	return (
		<>
			<Header />{' '}
			<div className='container'>
				<FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
