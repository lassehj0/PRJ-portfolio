import axios from 'axios';
import Popup from 'reactjs-popup';
import React from 'react';

const config = {
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('token'),
	},
};

export const code = (name: string) => {
	if (window.location.pathname === '/PRJ-portfolio/skills') {
		var element = document.getElementById(name);
		var boxElement = document.getElementById('codeBox');
		var textElement1 = document.getElementById('skillText1');
		var textElement2 = document.getElementById('skillText2');
		var elementskillLVL = document.getElementById('skillLVL');
		var boxElementFill = document.getElementById('codeBoxFill');
		if (element!.title === 'setSwag' && boxElement!.title === 'setSwag') {
			element!.style.fontSize = '1.8rem';
			element!.style.marginTop = '20';
			element!.style.marginLeft = '20';
			element!.style.transition = '0s';
			boxElement!.style.opacity = '0';
			boxElement!.style.width = '0%';

			element!.title = '';
			boxElement!.title = '';
			textElement1!.style.opacity = '1';
			textElement2!.style.opacity = '0';
			elementskillLVL!.style.opacity = '0';
		} else if (element!.title === '' && boxElement!.title === '') {
			element!.style.transition = '2s';
			element!.style.fontSize = '8rem';
			element!.style.position = 'absolute';
			element!.style.marginTop = '15%';
			element!.style.marginLeft =
				window.innerWidth * 0.45 -
				(element?.offsetWidth !== undefined ? element?.offsetWidth : 0) *
					4.444 +
				'px';

			boxElement!.style.opacity = '1';
			boxElement!.style.width = '30%';
			element!.title = 'setSwag';
			boxElement!.title = 'setSwag';
			textElement1!.style.opacity = '0';
			textElement2!.style.opacity = '1';
			elementskillLVL!.style.opacity = '1';

			boxElementFill!.style.width = '30%';
		}
	}
};

var lang: string[][] = [];

const axiosInstance = axios.create({ baseURL: 'https://localhost:7062/api/' });
export function getSkills(pos: number[][]) {
	axiosInstance
		.get('Skills')
		.then((response) => {
			response.data.forEach((elem: any) => {
				var p = document.createElement('p');
				p.className = 'scribble';
				p.id = elem.skillName;
				p.innerHTML = elem.skillName;
				p.style.marginLeft =
					pos[elem.skillID - 1][0] * window.innerWidth + 'px';
				p.style.marginTop =
					pos[elem.skillID - 1][1] * window.innerHeight + 'px';
				p.style.position = 'absolute';
				p.onclick = () => {
					code(elem.skillName);
				};
				document.getElementById('langs')?.appendChild(p);
				lang.push([
					elem.skillID,
					elem.skillName,
					elem.skillLevel,
					elem.monthsOfExperience,
				]);
			});
		})
		.catch(console.error);

	return lang;
}

export function getDescription() {
	return axiosInstance
		.get('Texts')
		.then((response) => {
			return response.data[0];
		})
		.catch(console.error);
}

export function putDescription(desc: string) {
	axiosInstance
		.put('Texts/1', desc)
		.then((response) => {
			return response;
		})
		.catch(console.error);
	console.log('Description changed to ' + desc);
}

export function putTitle(title: string) {
	axiosInstance
		.put('Texts/1', title)
		.then((response) => {
			return response;
		})
		.catch(console.error);
	console.log('Title changed to ' + title);
}

export function authorize() {
	return axiosInstance
		.get('/users/loggedin', config)
		.then(() => {
			return true;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
}
