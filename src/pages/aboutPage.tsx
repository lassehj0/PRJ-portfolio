import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<>
			<div id='hej'>
				<Link to='/'>
					<button id='homePageBtn'>HomePage</button>
				</Link>
				<p>hej</p>
			</div>
		</>
	);
};

export default About;
