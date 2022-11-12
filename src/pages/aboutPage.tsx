import picture from '../nonbinary-person.png';
import { Link } from 'react-router-dom';

function About() {
	return (
		<>
			<div id='hej'>
				<Link to='/'>
					<button className='button button1'>
						<span>Home</span>
					</button>{' '}
				</Link>
				<div id='about'>
					<div id='title'>
						<h1>About me</h1>
					</div>
					<div id='content'>
						<div id='description'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							porro minima delectus. Cupiditate rem ducimus non voluptatem in.
							Pariatur enim quae perspiciatis dolores veritatis, tempore modi
							similique quisquam error ad aspernatur obcaecati voluptatibus
							incidunt, quis quos delectus aut quibusdam. Dignissimos recusandae
							aspernatur ea facilis fugiat tempore expedita explicabo nesciunt
							officiis aliquid libero corrupti veniam fuga nisi harum, possimus
							iusto est voluptate voluptas quibusdam repellendus. Iusto
							aspernatur quis nisi rerum ea quae id, dolorem voluptatum quasi
							ipsum ratione corporis ipsa dignissimos praesentium molestiae sed
							neque hic tempora provident debitis nemo odit sit sequi!
							Reprehenderit exercitationem quidem voluptatibus blanditiis
							facilis quisquam tenetur.
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
