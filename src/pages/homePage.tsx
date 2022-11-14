import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div id='home-wrapper'>
				<h1 id='welcome'>Welcome</h1>
				<div id='btns'>
					<div id='btn-wrapper'>
						<Link to='skills'>
							<button className='btn' id='skillsBtn'>
								Skills
							</button>
						</Link>
						<div className='border bottom'></div>
						<div className='border left'></div>
						<div className='border right'></div>
						<div className='border topright'></div>
						<div className='border topleft'></div>
					</div>
					<div id='btn-wrapper'>
						<Link to='about'>
							<button className='btn' id='aboutBtn'>
								About me
							</button>
						</Link>
						<div className='border bottom'></div>
						<div className='border left'></div>
						<div className='border right'></div>
						<div className='border topright'></div>
						<div className='border topleft'></div>
					</div>
					<div id='btn-wrapper'>
						<Link to='login'>
							<button className='btn' id='loginBtn'>
								login
							</button>
						</Link>
						<div className='border bottom'></div>
						<div className='border left'></div>
						<div className='border right'></div>
						<div className='border topright'></div>
						<div className='border topleft'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
