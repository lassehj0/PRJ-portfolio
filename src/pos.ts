import bezier from 'bezier-easing';

export function posSetter(lang: string[], pos: number[][], e: any = 0) {
	if (Object.prototype.toString.call(e) !== '[object Array]') {
		var x = e === 0 ? 0 : e.clientX / 20;
		var y = e === 0 ? 0 : e.clientY / 20;
	} else {
		var x = 0;
		switch (e[0]) {
			case e[0] >= 180:
				x = 20;
				break;
			case e[0] >= 144 && e[0] < 180:
				x = 16 + (e[0] - 144) * 0.2;
				break;
			case e[0] >= 108 && e[0] < 144:
				x = 12 + (e[0] - 108) * 0.4;
				break;
			case e[0] >= 72 && e[0] < 108:
				x = 8 + (e[0] - 72) * 0.6;
				break;
			case e[0] >= 36 && e[0] < 72:
				x = 4 + (e[0] - 36) * 0.8;
				break;
			case e[0] >= 0 && e[0] < 36:
				x = e[0];
				break;
			case e[0] <= -180:
				x = -20;
				break;
			case e[0] <= -144 && e[0] > -180:
				x = -16 - (e[0] + 144) * 0.2;
				break;
			case e[0] <= -108 && e[0] > -144:
				x = -12 - (e[0] + 108) * 0.4;
				break;
			case e[0] <= -72 && e[0] > -108:
				x = -8 - (e[0] + 72) * 0.6;
				break;
			case e[0] <= -36 && e[0] > -72:
				x = -4 - (e[0] + 36) * 0.8;
				break;
			case e[0] <= 0 && e[0] > -36:
				x = e[0];
				break;
		}
		x += 20;
		var y: number = e[1] + 20;
		console.log(x);
	}
	var vw = window.innerWidth;
	var vh = document.documentElement.clientHeight;
	var higher: boolean;
	if (vw < vh) higher = true;
	lang.forEach((entry, i) => {
		var style = document.getElementById(entry)?.style;
		if (style != null && document.getElementById(entry)?.title !== 'setSwag') {
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
