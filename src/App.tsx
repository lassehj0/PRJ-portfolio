import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/skillsPage';

function App() {
	return;
	<BrowserRouter>
		<Home />

		<Route path='/' />
		<Route path='/about' element={<About />} />
		<Route path='/skills' element={<Skills />} />
	</BrowserRouter>;
}

export default App;
