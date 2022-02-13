import './App.css';
import Header from '../../components/Header/Header.component';
import FeedBackPage from '../../pages/FeedBackPage.page.component';
import AboutPage from '../../pages/About.component.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FeedBackProvider } from '../../context/FeedBack/FeedBack.context';

const App = () => {
	

	return (
		<FeedBackProvider>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<FeedBackPage />}
					></Route>

					<Route exact path='/about' element={<AboutPage />} />
				</Routes>
			</Router>
		</FeedBackProvider>
	);
};

export default App;
