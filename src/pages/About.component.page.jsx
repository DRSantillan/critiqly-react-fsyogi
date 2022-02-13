import React from 'react';
import Card from '../components/Card/Card.component';
import { Link } from 'react-router-dom';

const AboutPage = () => {
	return (
		<Card>
			<div className='about'>
				<h1>About This Application</h1>
				<p>
					This is a simple React Application for customers to leave
					feedback for a product or a service.
				</p>
				<p>Version: 1.0.0</p>
				<p>
                    <Link to='/'>
                        Back to FeedBack Application
                    </Link>
					
				</p>
			</div>
		</Card>
	);
};

export default AboutPage;
