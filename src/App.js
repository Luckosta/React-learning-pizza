import Header from './components/Header/Header';
import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';



function App() {




	return (
		<div className="wrapper">
			<Header />
			<div className="content">
			<Routes>
			<Route path='/' element = {<Home />}/>
			<Route path='*' element = {<NotFound />}/>		
			</Routes>
			</div>
		</div>
	);
}

export default App;
