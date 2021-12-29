const args = process.argv;
let phone = args[2];
const api = `https://api.whatsapp.com/send?phone=507${phone}`;
if (phone === undefined) {
	console.log('No ha ingresado un número');
} else if (phone.length < 8 || phone.length > 8) {
	console.error('Número de teléfono incompleto');
} else {
	console.log(api);
}
