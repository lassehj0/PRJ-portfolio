import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/skillsPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
