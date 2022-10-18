import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import picture from '../nonbinary-person.png';

function About() {
	var desc;
	const axiosInstance = axios.create();
	axiosInstance
		.get('idk')
		.then((response) => {
			desc = response.data;
		})
		.catch(console.error);

	return (
		<>
			<div id='about'>
				<div id='title'>
					<h1>About me</h1>
				</div>
				<div id='content'>
					<div id='description'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
						inventore voluptates ea similique harum illum aspernatur rem. Sed ea
						ipsam deserunt, maxime ullam excepturi officiis possimus voluptatum
						modi iusto unde qui mollitia repellat aliquid itaque eligendi, in
						autem earum cupiditate praesentium odio magni fugit dolorum
						deleniti. Nihil enim ab laborum.
					</div>
					<div id='rightSide'>
						<div id='picture'>
							<img id='pic' src={picture} alt='insertPersonHere' />
						</div>
						<div id='list'>
							<div id='ul'>
								<li className='item1'>1</li>
								<li className='item2'>2</li>
								<li className='item3'>3</li>
								<li className='item4'>4</li>
								<li className='item5'>5</li>
							</div>
						</div>
					</div>
				</div>
				<div id='floats'></div>
			</div>
		</>
	);
}

export default About;
