import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div id='hej'>
				<Link to='skills'>
					<button id='skillsBtn'>Skills</button>
				</Link>
				<Link to='about'>
					<button id='aboutBtn'>About me</button>
				</Link>
			</div>
		</>
	);
};

export default Home;
