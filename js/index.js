var hide = document.querySelector('.login');
var form = document.querySelector('#form');
var show = document.querySelector('.login');
function login() {
	hide.addEventListener('click', function(e){
		e.preventDefault();
		if (form.classList.contains('hiden')) {
			form.classList.remove('hiden');
		}
		else {
			form.classList.add('hiden');
		}
	})
}
login();