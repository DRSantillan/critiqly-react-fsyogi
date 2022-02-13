import React from 'react';
import FeedBackForm from '../components/FeedBackForm/FeedBackForm.component'
import FeedBackStats from '../components/FeedBackStats/FeedBackStats.component'
import FeedBackList from '../components/FeedBackList/FeedBackList.component'
import AboutIconLink from '../components/AboutIconLink/AboutIconLink.component';
const FeedBackPage = () => {
    return (
		<div className='container'>
			<FeedBackForm />
			<FeedBackStats />
			<FeedBackList />
			<AboutIconLink />
		</div>
	);
}

export default FeedBackPage;