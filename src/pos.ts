export function posSetter(lang: string[], pos: number[][], e: any = 0) {
	var x = e === 0 ? 0 : e.clientX;
	var y = e === 0 ? 0 : e.clientY;
	var vw = window.innerWidth;
	var vh = window.innerHeight;
	var higher: boolean;
	if (vw < vh) higher = true;
	lang.forEach((entry, i) => {
		var style = document.getElementById(entry)?.style;
		if (style != null && document.getElementById(entry)?.title !== 'setSwag') {
			style.marginLeft =
				([1, 4, 5, 8, 10, 14, 15, 16, 19, 21].indexOf(i) !== -1
					? pos[i][higher === false ? 0 : 1] * vw + x / 20
					: pos[i][higher === false ? 0 : 1] * vw - x / 20) + 'px';

			style.marginTop =
				([2, 4, 7, 9, 10, 11, 15, 16, 17, 19, 22].indexOf(i) !== -1
					? pos[i][higher === false ? 1 : 0] * vh + y / 20
					: pos[i][higher === false ? 1 : 0] * vh - y / 20) + 'px';

			style.position = 'absolute';
		}
	});
}
