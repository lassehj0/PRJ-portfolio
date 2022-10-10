import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../public/nonbinary-person.png';

const About = () => {
	return (
		<>
			<div id='title'>About me</div>
			<div id='description'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
				reprehenderit consectetur asperiores excepturi culpa pariatur, doloribus
				voluptatum dignissimos sint alias quia molestiae omnis est ipsa odit,
				neque quaerat sapiente tempora porro repellendus, dolor quasi dolorem
				ipsum? Consectetur voluptatum beatae libero sunt maxime cupiditate optio
				doloribus, iure obcaecati animi fuga explicabo?
			</div>
			<div id='list'>
				<div id='ul'>
					<li className='item1'></li>
					<li className='item2'></li>
					<li className='item3'></li>
					<li className='item4'></li>
					<li className='item5'></li>
				</div>
			</div>
			<div id='picture'>
				<img id='pic' src={picture} alt='insertPersonHere' />
			</div>
			<div id='floats'></div>
		</>
	);
};

export default About;
