import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import picture from '../nonbinary-person.png';

function About() {
	var desc;
	var lang: string[] = [
		'React',
		'GraphQL',
		'CSharp',
		'CSharp1',
		'CSharp2',
		'CSharp3',
		'CSharp4',
		'CSharp5',
		'CSharp6',
		'CSharp7',
		'CSharp8',
		'CSharp9',
	];
	var pos = [
		[100, 100],
		[1236, 640],
		[170, 540],
		[1264, 125],
		[628, 100],
		[565, 486],
		[265, 345],
		[413, 629],
		[1186, 397],
		[853, 579],
		[218, 130],
		[886, 397],
	];

	const axiosInstance = axios.create();
	axiosInstance
		.get('idk')
		.then((response) => {
			desc = response.data;
		})
		.catch(console.error);

	axiosInstance
		.get('languages')
		.then((response) => {
			lang = response.data;
			response.data.each((i: number, elem: string) => {
				var p = document.createElement('p');
				p.className = 'scribble';
				p.id = elem;
				p.innerHTML = elem;
				document.getElementById('langs')?.appendChild(p);
			});
		})
		.catch(console.error);

	document.onmousemove = function (e) {
		var x = e.clientX;
		var y = e.clientY;
		lang.forEach((entry, i) => {
			var style = document.getElementById(entry)?.style;
			if (style != null) {
				style.marginLeft =
					([1, 4, 5, 8, 10, 14, 15, 16, 19, 21].indexOf(i) != -1
						? pos[i][0] + x / 20
						: pos[i][0] - x / 20) + 'px';

				style.marginTop =
					([2, 4, 7, 9, 10, 11, 15, 16, 17, 19, 22].indexOf(i) != -1
						? pos[i][1] + y / 20
						: pos[i][1] - y / 20) + 'px';

				style.position = 'absolute';
			}
		});
	};

	return (
		<>
			<div id='hej'>
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
					<div id='floats'></div>
				</div>
			</div>
			<div id='langs'>
				<p className='scribble' id='React'>
					React
				</p>
				<p className='scribble' id='GraphQL'>
					GraphQl
				</p>
				<p className='scribble' id='CSharp'>
					C#
				</p>
				<p className='scribble' id='CSharp1'>
					C#1
				</p>
				<p className='scribble' id='CSharp2'>
					C#2
				</p>
				<p className='scribble' id='CSharp3'>
					C#3
				</p>
				<p className='scribble' id='CSharp4'>
					C#4
				</p>
				<p className='scribble' id='CSharp5'>
					C#5
				</p>
				<p className='scribble' id='CSharp6'>
					C#6
				</p>
				<p className='scribble' id='CSharp7'>
					C#7
				</p>
				<p className='scribble' id='CSharp8'>
					C#8
				</p>
				<p className='scribble' id='CSharp9'>
					C#9
				</p>
			</div>
		</>
	);
}

export default About;
