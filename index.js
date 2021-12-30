const input = document.querySelector('#phone');
const link = document.querySelector('a');
const helperNode = document.querySelector('.helper');
const signal = document.querySelector('.signal');
input.addEventListener('change', () => {
	let phone = input.value;
	console.log(phone.length);
	if (phone === undefined) {
		helperNode.innerText = 'Número no introducido.';
		helperNode.classList.remove('hide');
		signal.classList.remove('ready');
	} else if (phone.length < 8 || phone.length > 8) {
		helperNode.innerText = 'Formato Inválido.';
		helperNode.classList.remove('hide');
		signal.classList.remove('ready');
	} else {
		helperNode.classList.add('hide');
		signal.classList.add('ready');
		const api = `https://api.whatsapp.com/send?phone=507${phone}`;
		link.href = api;
	}
});
