import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import WebFont from 'webfontloader';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/skillsPage';

function App() {
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

	var lang: string[] = [];
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['La Belle Aurore'],
			},
		});

		const axiosInstance = axios.create();
		axiosInstance
			.get('https://localhost:7062/api/Skills')
			.then((response) => {
				response.data.forEach((elem: any) => {
					var p = document.createElement('p');
					p.className = 'scribble';
					p.id = elem.skillName;
					p.innerHTML = elem.skillName;
					p.style.marginLeft =
						pos[elem.skillID - 1][0] * window.innerWidth + 'px';
					p.style.marginTop =
						pos[elem.skillID - 1][1] * window.innerHeight + 'px';
					p.style.position = 'absolute';
					document.getElementById('langs')?.appendChild(p);
					lang.push(elem.skillName);
				});
			})
			.catch(console.error);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	document.onmousemove = function (e) {
		var x = e.clientX;
		var y = e.clientY;
		lang.forEach((entry, i) => {
			var style = document.getElementById(entry)?.style;
			if (style != null) {
				style.marginLeft =
					([1, 4, 5, 8, 10, 14, 15, 16, 19, 21].indexOf(i) !== -1
						? pos[i][0] * window.innerWidth + x / 20
						: pos[i][0] * window.innerWidth - x / 20) + 'px';

				style.marginTop =
					([2, 4, 7, 9, 10, 11, 15, 16, 17, 19, 22].indexOf(i) !== -1
						? pos[i][1] * window.innerHeight + y / 20
						: pos[i][1] * window.innerHeight - y / 20) + 'px';

				style.position = 'absolute';
			}
		});
	};

	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/skills' element={<Skills />} />
				</Routes>
			</BrowserRouter>
			<div id='langs'>
				{/* <p className='scribble' id='React'>
			React
		</p>
		<p className='scribble' id='GraphQL'>
			GraphQl
		</p>
		<p className='scribble' id='CSharp'>
			C#
		</p>
		<p className='scribble' id='CSharp1'>
			C#1
		</p>
		<p className='scribble' id='CSharp2'>
			C#2
		</p>
		<p className='scribble' id='CSharp3'>
			C#3
		</p>
		<p className='scribble' id='CSharp4'>
			C#4
		</p>
		<p className='scribble' id='CSharp5'>
			C#5
		</p>
		<p className='scribble' id='CSharp6'>
			C#6
		</p>
		<p className='scribble' id='CSharp7'>
			C#7
		</p>
		<p className='scribble' id='CSharp8'>
			C#8
		</p>
		<p className='scribble' id='CSharp9'>
			C#9
		</p> */}
			</div>
		</>
	);
}

export default App;
