import './App.css';
import { useState } from 'react';
import Header from '../../components/Header/Header.component';
import FeedBackList from '../../components/FeedBackList/FeedBackList.component';
import FeedBackStats from '../../components/FeedBackStats/FeedBackStats.component';

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
				<FeedBackStats feedback={feedback}/>
				<FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
