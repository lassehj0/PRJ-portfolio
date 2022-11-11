import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div id='home-wrapper'>
				<h1 id='welcome'>Welcome</h1>
				<div id='btns'>
					<Link to='skills'>
						<button id='skillsBtn'>Skills</button>
					</Link>
					<Link to='about'>
						<button id='aboutBtn'>About me</button>
					</Link>
					<Link to='login'>
						<button id='loginBtn'>login</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
