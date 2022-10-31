import React from 'react';
import { Link } from 'react-router-dom';

//https://codepen.io/ryasan86/pen/bGpqdYV
function Skills(props: string[]) {
	return (
		<>
			<div id='hej'>
				<div id='skills'>
					<h1 id='title'>Skills</h1>
					<Link to='/'>
						<button id='homePageBtn'>HomePage</button>
					</Link>
					<div id='codeNames'>{JSON.stringify(Text)}</div>
					<div id='codeNames'> texts </div>
				</div>
			</div>
			<div className='skillsBox'>
				<div id='codeBox' className='codeBox'></div>
			</div>
		</>
	);
}

export default Skills;
