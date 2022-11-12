import react, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useState from 'react-usestateref';
import './App.css';
import WebFont from 'webfontloader';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Skills from './pages/skillsPage';
import Login from './pages/loginPage';
import { code } from './axioscalls';
import { posSetter } from './pos';
import Spinner from './pages/spinner';

declare const window: any;

function App() {
	const [coords, setCoords, coordsRef] = useState<number[]>(() => [0, 0]);
	const ref = react.useRef(null);
	var gyro = null;

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['La Belle Aurore', 'Open Sans'],
			},
		});

		var coolHeight = document.documentElement.clientHeight + 'px';
		document.getElementById('root')!.style.height = coolHeight;

		posSetter();
		if (window.innerWidth > 640) {
			document.onmousemove = function (e) {
				posSetter(e);
			};
		} else {
			try {
				gyro = new window.Gyroscope({ frequency: 60 });
				gyro.addEventListener('reading', (e: any) => {
					setCoords((p) => [p[0] + e.target.y, p[1] + e.target.x]);

					posSetter(coordsRef.current);
				});

				gyro.addEventListener('error', (e: any) => {
					console.error(`Gyroscope encounted error ${e}`);
				});

				gyro.start();
			} catch (error) {
				console.error(error);
			}
		}

		window.addEventListener('resize', () => {
			coolHeight = document.documentElement.clientHeight + 'px';
			document.getElementById('root')!.style.height = coolHeight;
			posSetter();
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/skills' element={<Skills />} />
						<Route path='/login' element={<Login />} />
						<Route path='/spintest' element={<Spinner />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
			<div id='langs'>
				<p
					ref={ref}
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
