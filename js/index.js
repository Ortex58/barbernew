var hide = document.querySelector('.login');
var form = document.querySelector('#form');
var autofocus = form.querySelector('[name=login]');
function login() {
	hide.addEventListener('click', function(e){
		e.preventDefault();
		if (form.classList.contains('hiden')) {
			form.classList.remove('hiden');
			autofocus.focus();
		}
		else {
			form.classList.add('hiden');
		}
	})
}
login();