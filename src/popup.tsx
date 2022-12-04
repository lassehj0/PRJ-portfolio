import react from 'react';
import { putDescription, putTitle } from './axioscalls';

const PopupElement = ({ sender }: { sender: string }) => {
	const [text, setText] = react.useState(
		document.getElementById('aboutTitleText')!.innerHTML
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

export default PopupElement;
