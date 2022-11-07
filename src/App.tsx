import react, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useState from 'react-usestateref';
import './App.css';
import WebFont from 'webfontloader';
import Home from './pages/homePage';
import { code } from './axioscalls';
import { posSetter } from './pos';

const Skills = react.lazy(() => import('./pages/skillsPage'));
const About = react.lazy(() => import('./pages/aboutPage'));

declare const window: any;

function App() {
	const [coords, setCoords, coordsRef] = useState<number[]>(() => [0, 0]);
	var gyro = null;

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['La Belle Aurore'],
			},
		});

		var coolHeight = document.documentElement.clientHeight + 'px';
		document.getElementById('root')!.style.height = coolHeight;
		document.getElementById('gyro')!.style.height = coolHeight;

		posSetter();
		if (window.innerWidth > 640) {
			document.onmousemove = function (e) {
				posSetter(e);
			};
		} else {
			gyro = new window.Gyroscope({ frequency: 60 });
			gyro.addEventListener('reading', (e: any) => {
				setCoords((p) => [p[0] + e.target.y, p[1] + e.target.x]);

				posSetter(coordsRef.current);
			});

			gyro.start();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/skills' element={<Skills />} />
				</Routes>
			</BrowserRouter>
			<div
				id='gyro'
				style={{
					width: '100vw',
					height: '100vh',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					overflow: 'hidden',
					zIndex: 0,
				}}>
				<ul>
					<li id='testing'>
						{coords[0].toPrecision(
							coords[0] >= 100 || coords[0] <= -100
								? 4
								: coords[0] >= 10 || coords[0] <= -10
								? 3
								: coords[0] >= 1 || coords[0] <= -1
								? 2
								: 1
						)}
					</li>
					<li id='what'>
						{coords[1].toPrecision(
							coords[1] >= 100 || coords[1] <= -100
								? 4
								: coords[1] >= 10 || coords[1] <= -10
								? 3
								: coords[1] >= 1 || coords[1] <= -1
								? 2
								: 1
						)}
					</li>
				</ul>
			</div>
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
