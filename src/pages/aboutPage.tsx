import { useEffect, useState } from 'react';
import picture from '../nonbinary-person.png';
import { Link } from 'react-router-dom';
import { getDescription, authorize } from '../axioscalls';
import Popup from 'reactjs-popup';
import { AboutPopup } from '../popup';

function About() {
	const [desc, setDesc] = useState('Hello');
	const [title, setTitle] = useState('About me');
	const [authorized, setAuthorized] = useState(false);

	useEffect(() => {
		getDescription().then((d) => {
			setDesc(d.mainText);
			setTitle(d.headline);
		});

		// authorize().then((authorized) => {
		// 	if (authorized)
		// 		document.getElementById('description')!.className = 'Authorized';
		// });

		document.getElementById('description')!.className = 'authorized';
		document.getElementById('aboutTitle')!.className = 'authorized';
		setAuthorized(true);
	}, []);

	return (
		<>
			<div id='hej'>
				<Link to='/'>
					<button className='button button1'>
						<span>Home</span>
					</button>{' '}
				</Link>
				<div id='about'>
					<div id='aboutTitle'>
						<Popup
							trigger={
								<button className='aboutPopupBtn' disabled={!authorized}>
									<h1 id='aboutTitleText'>{title}</h1>
								</button>
							}>
							<AboutPopup sender='title' />
						</Popup>
					</div>
					<div id='content'>
						<div id='description'>
							<Popup
								trigger={
									<button className='aboutPopupBtn' disabled={!authorized}>
										<p>
											{/*Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Maxime porro minima delectus. Cupiditate rem ducimus non
											voluptatem in. Pariatur enim quae perspiciatis dolores
											veritatis, tempore modi similique quisquam error ad
											aspernatur obcaecati voluptatibus incidunt, quis quos
											delectus aut quibusdam. Dignissimos recusandae aspernatur
											ea facilis fugiat tempore expedita explicabo nesciunt
											officiis aliquid libero corrupti veniam fuga nisi harum,
											possimus iusto est voluptate voluptas quibusdam
											repellendus. Iusto aspernatur quis nisi rerum ea quae id,
											dolorem voluptatum quasi ipsum ratione corporis ipsa
											dignissimos praesentium molestiae sed neque hic tempora
											provident debitis nemo odit sit sequi! Reprehenderit
											exercitationem quidem voluptatibus blanditiis facilis
											quisquam tenetur.*/}{' '}
											{desc}
										</p>
									</button>
								}
								position='right center'>
								<AboutPopup sender='description' />
							</Popup>
						</div>
						<div id='rightSide'>
							<div id='picture'>
								<img id='pic' src={picture} alt='insertPersonHere' />
							</div>
							<div id='list'>
								<ul>
									<li className='item1'>1</li>
									<li className='item2'>2</li>
									<li className='item3'>3</li>
									<li className='item4'>4</li>
									<li className='item5'>5</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
