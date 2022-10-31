import axios from 'axios';

export const code = (name: string) => {
	if (window.location.pathname === '/PRJ-portfolio/skills') {
		var element = document.getElementById(name);
		element!.style.fontSize = '12rem';
		var boxElement = document.getElementById('codeBox');
		boxElement!.style.opacity = '1';
		boxElement!.style.width = '';
	}
};

var lang: string[] = [];

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
				lang.push(elem.skillName);
			});
		})
		.catch(console.error);

	return lang;
}
