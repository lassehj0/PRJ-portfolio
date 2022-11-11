import axios from 'axios';

export const code = (name: string) => {
	if (window.location.pathname === '/PRJ-portfolio/skills') {
		var element = document.getElementById(name);
		var boxElement = document.getElementById('codeBox');

		if (element!.title === 'setSwag' && boxElement!.title === 'setSwag') {
			element!.style.fontSize = '1.8rem';
			element!.style.transition = '0s';
			boxElement!.style.opacity = '0';
			boxElement!.style.width = '0%';
			boxElement!.style.transition = '0s';
			element!.title = '';
			boxElement!.title = '';
		} else if (element!.title === '' && boxElement!.title === '') {
			element!.style.transition = '2s';
			element!.style.fontSize = '12rem';
			element!.style.position = 'absolute';
			element!.style.marginTop = '30%';
			element!.style.marginLeft =
				window.innerWidth * 0.3 -
				(element?.offsetWidth !== undefined ? element?.offsetWidth : 0) *
					4.444 +
				'px';
			console.log(element?.offsetWidth);
			boxElement!.style.transition = '2s';
			boxElement!.style.opacity = '1';
			boxElement!.style.width = '80%';
			element!.title = 'setSwag';
			boxElement!.title = 'setSwag';
		}
	}
};

var lang: string[][] = [];

const axiosInstance = axios.create();
export function getSkills(pos: number[][]) {
	axiosInstance
		.get('https://localhost:7062/api/Skills')
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
					elem.SkillID,
					elem.SkillName,
					elem.SkillLevel,
					elem.MonthsOfExperience,
				]);
			});
		})
		.catch(console.error);

	return lang;
}
