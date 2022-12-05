import { getSkills } from './axioscalls';

var pos = [
	[0.105, 0.135],
	[0.805, 0.826],
	[0.111, 0.731],
	[0.823, 0.169],
	[0.409, 0.135],
	[0.368, 0.657],
	[0.173, 0.467],
	[0.269, 0.851],
	[0.772, 0.537],
	[0.555, 0.784],
	[0.182, 0.206],
	[0.577, 0.537],
];

export var lang = getSkills(pos);

// export var lang: string[] = [
// 	'React',
// 	'GraphQL',
// 	'CSharp',
// 	'CSharp1',
// 	'CSharp2',
// 	'CSharp3',
// 	'CSharp4',
// 	'CSharp5',
// 	'CSharp6',
// 	'CSharp7',
// 	'CSharp8',
// 	'CSharp9',
// ];

export function posSetter(e: any = 0) {
	if (Object.prototype.toString.call(e) !== '[object Array]') {
		var x = e === 0 ? 0 : e.clientX / 20;
		var y = e === 0 ? 0 : e.clientY / 20;
	} else {
		var x: number = 0;
		switch (true) {
			case e[0] >= 180:
				x = 25;
				break;
			case e[0] >= 100 && e[0] < 180:
				x = 23 + (e[0] - 100) / 40;
				break;
			case e[0] >= 60 && e[0] < 100:
				x = 20 + (e[0] - 60) / 13.333;
				break;
			case e[0] >= 25 && e[0] < 60:
				x = 12 + (e[0] - 25) / 4.375;
				break;
			case e[0] >= 10 && e[0] < 25:
				x = 6 + (e[0] - 10) / 2.5;
				break;
			case e[0] >= 0 && e[0] < 10:
				x = e[0] / 1.667;
				break;
			case e[0] <= -180:
				x = -25;
				break;
			case e[0] <= -100 && e[0] > -180:
				x = -23 + (e[0] + 100) / 40;
				break;
			case e[0] <= -60 && e[0] > -100:
				x = -20 + (e[0] + 60) / 13.333;
				break;
			case e[0] <= -25 && e[0] > -60:
				x = -12 + (e[0] + 25) / 4.375;
				break;
			case e[0] <= -10 && e[0] > -25:
				x = -6 + (e[0] + 10) / 2.5;
				break;
			case e[0] <= 0 && e[0] > -10:
				x = e[0] / 1.667;
				break;
		}
		x += 30;
		var y: number = 0;
		switch (true) {
			case e[1] >= 180:
				y = 100;
				break;
			case e[1] >= 150 && e[1] < 180:
				y = 95 + (e[1] - 150) / 6;
				break;
			case e[1] >= 130 && e[1] < 150:
				y = 90 + (e[1] - 130) / 4;
				break;
			case e[1] >= 100 && e[1] < 130:
				y = 80 + (e[1] - 100) / 3;
				break;
			case e[1] >= 60 && e[1] < 100:
				y = 60 + (e[1] - 60) / 2;
				break;
			case e[1] >= 0 && e[1] < 60:
				y = e[1];
				break;
			case e[1] <= -180:
				y = -100;
				break;
			case e[1] <= -150 && e[1] > -180:
				y = -95 + (e[1] + 150) / 6;
				break;
			case e[1] <= -130 && e[1] > -150:
				y = -20 + (e[1] + 130) / 4;
				break;
			case e[1] <= -100 && e[1] > -130:
				y = -12 + (e[1] + 100) / 3;
				break;
			case e[1] <= -60 && e[1] > -100:
				y = -6 + (e[1] + 60) / 2;
				break;
			case e[1] <= 0 && e[1] > -60:
				y = e[1];
				break;
		}
		y += 15;
		console.log(x);
	}
	var vw = window.innerWidth;
	var vh = document.documentElement.clientHeight;
	var higher: boolean;
	if (vw < vh) higher = true;
	lang.forEach((entry, i) => {
		var style = document.getElementById(entry[1])?.style;
		if (
			style != null &&
			document.getElementById(entry[1])?.title !== 'setSwag'
		) {
			var len = entry.length * (higher === false ? 15 : 7.5);

			style.marginLeft =
				([1, 4, 5, 8, 10].indexOf(i) !== -1 || higher === true
					? pos[i][higher === false ? 0 : 1] * vw + x - len
					: pos[i][higher === false ? 0 : 1] * vw - x - len) + 'px';

			style.marginTop =
				([2, 4, 7, 9, 10, 11].indexOf(i) !== -1 || higher === true
					? pos[i][higher === false ? 1 : 0] * vh + y
					: pos[i][higher === false ? 1 : 0] * vh - y) + 'px';

			style.position = 'absolute';
		}
	});
}
