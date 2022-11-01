import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WebFont from 'webfontloader';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/skillsPage';
import { /*getSkills,*/ code } from './axioscalls';
import { posSetter } from './pos';

function App() {
	var lang: string[] = [
		'React',
		'GraphQL',
		'CSharp',
		'CSharp1',
		'CSharp2',
		'CSharp3',
		'CSharp4',
		'CSharp5',
		'CSharp6',
		'CSharp7',
		'CSharp8',
		'CSharp9',
	];
	var pos = [
		[0.065, 0.135],
		[0.805, 0.866],
		[0.111, 0.731],
		[0.823, 0.169],
		[0.409, 0.135],
		[0.368, 0.657],
		[0.173, 0.467],
		[0.269, 0.851],
		[0.772, 0.537],
		[0.555, 0.784],
		[0.142, 0.176],
		[0.577, 0.537],
	];

	// var lang: string[] = [];
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['La Belle Aurore'],
			},
		});

		// lang = getSkills(pos);

		if (window.innerWidth > 640) {
			posSetter(lang, pos);
			document.onmousemove = function (e) {
				posSetter(lang, pos, e);
			};
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/skills' element={<Skills {...lang} />} />
				</Routes>
			</BrowserRouter>
			<div id='langs'>
				<p
					className='scribble'
					id='React'
					onClick={() => {
						code('React');
					}}>
					React
				</p>
				<p
					className='scribble'
					id='GraphQL'
					onClick={() => {
						code('GraphQL');
					}}>
					GraphQl
				</p>
				<p
					className='scribble'
					id='CSharp'
					onClick={() => {
						code('CSharp');
					}}>
					C#
				</p>
				<p
					className='scribble'
					id='CSharp1'
					onClick={() => {
						code('CSharp1');
					}}>
					C#1
				</p>
				<p
					className='scribble'
					id='CSharp2'
					onClick={() => {
						code('CSharp2');
					}}>
					C#2
				</p>
				<p
					className='scribble'
					id='CSharp3'
					onClick={() => {
						code('CSharp3');
					}}>
					C#3
				</p>
				<p
					className='scribble'
					id='CSharp4'
					onClick={() => {
						code('CSharp4');
					}}>
					C#4
				</p>
				<p
					className='scribble'
					id='CSharp5'
					onClick={() => {
						code('CSharp5');
					}}>
					C#5
				</p>
				<p
					className='scribble'
					id='CSharp6'
					onClick={() => {
						code('CSharp6');
					}}>
					C#6
				</p>
				<p
					className='scribble'
					id='CSharp7'
					onClick={() => {
						code('CSharp7');
					}}>
					C#7
				</p>
				<p
					className='scribble'
					id='CSharp8'
					onClick={() => {
						code('CSharp8');
					}}>
					C#8
				</p>
				<p
					className='scribble'
					id='CSharp9'
					onClick={() => {
						code('CSharp9');
					}}>
					C#9
				</p>
			</div>
		</>
	);
}

export default App;
