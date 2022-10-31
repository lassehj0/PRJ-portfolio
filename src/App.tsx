import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import WebFont from 'webfontloader';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/skillsPage';
import { /*getSkills,*/ code } from './axioscalls';

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

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	document.onmousemove = function (e) {
		var x = e.clientX;
		var y = e.clientY;
		var vw = window.innerWidth;
		var vh = window.innerHeight;
		var higher: boolean;
		if (vw < vh) higher = true;
		lang.forEach((entry, i) => {
			var style = document.getElementById(entry)?.style;
			if (style != null) {
				style.marginLeft =
					([1, 4, 5, 8, 10, 14, 15, 16, 19, 21].indexOf(i) !== -1
						? pos[i][higher === false ? 0 : 1] * vw + x / 20
						: pos[i][higher === false ? 0 : 1] * vw - x / 20) + 'px';

				style.marginTop =
					([2, 4, 7, 9, 10, 11, 15, 16, 17, 19, 22].indexOf(i) !== -1
						? pos[i][higher === false ? 1 : 0] * vh + y / 20
						: pos[i][higher === false ? 1 : 0] * vh - y / 20) + 'px';
			}
		});
	};

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
						code('React');
					}}>
					GraphQl
				</p>
				<p
					className='scribble'
					id='CSharp'
					onClick={() => {
						code('React');
					}}>
					C#
				</p>
				<p
					className='scribble'
					id='CSharp1'
					onClick={() => {
						code('React');
					}}>
					C#1
				</p>
				<p
					className='scribble'
					id='CSharp2'
					onClick={() => {
						code('React');
					}}>
					C#2
				</p>
				<p
					className='scribble'
					id='CSharp3'
					onClick={() => {
						code('React');
					}}>
					C#3
				</p>
				<p
					className='scribble'
					id='CSharp4'
					onClick={() => {
						code('React');
					}}>
					C#4
				</p>
				<p
					className='scribble'
					id='CSharp5'
					onClick={() => {
						code('React');
					}}>
					C#5
				</p>
				<p
					className='scribble'
					id='CSharp6'
					onClick={() => {
						code('React');
					}}>
					C#6
				</p>
				<p
					className='scribble'
					id='CSharp7'
					onClick={() => {
						code('React');
					}}>
					C#7
				</p>
				<p
					className='scribble'
					id='CSharp8'
					onClick={() => {
						code('React');
					}}>
					C#8
				</p>
				<p
					className='scribble'
					id='CSharp9'
					onClick={() => {
						code('React');
					}}>
					C#9
				</p>
			</div>
		</>
	);
}

export default App;
