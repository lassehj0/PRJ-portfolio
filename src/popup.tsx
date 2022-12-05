import react from 'react';
import { putDescription, putTitle } from './axioscalls';
import { lang } from './pos';

export const AboutPopup = ({ sender }: { sender: string }) => {
	const [text, setText] = react.useState(
		document.getElementById(
			sender === 'title' ? 'aboutTitleText' : 'description'
		)!.innerHTML
	);

	function click() {
		if (sender === 'title') putTitle(text);
		else putDescription(text);
	}

	return (
		<div id='popupWrapper' className={sender + 'Wrapper'}>
			<textarea
				id={sender + 'Text'}
				onChange={(event) => setText(event.target.value)}
				placeholder={'Insert ' + sender}
			/>
			<div id='about-btn-wrapper'>
				<button onClick={click}>Set new {sender}</button>
				<div className='border bottom' />
				<div className='border left' />
				<div className='border right' />
				<div className='border topright' />
				<div className='border topleft' />
			</div>
		</div>
	);
};

export const SkillsPopup = () => {
	const [height, setHeight] = react.useState('1px');

	react.useEffect(() => {
		setHeight(lang.length * 22 + 'px');
		console.log(lang.length * 22 + 'px');
	}, []);
	return (
		<div
			id='skillsWrapper'
			style={{ height: height, marginBottom: height }}></div>
	);
};
