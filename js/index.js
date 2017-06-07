/*var hide = document.querySelector('.login');
var form = document.querySelector('#form');
var autofocus = form.querySelector('[name=login]');
function login() {
	hide.addEventListener('click', function(e){
		e.preventDefault();
		if (form.classList.contains('hiden')) {
			form.classList.remove('hiden');
			autofocus.focus();
			//document.body.style.overflow = 'hidden';
		}
		else {
			form.classList.add('hiden');
			//document.body.style.overflow = 'visible';
		}
	})
}

	window.onclick = function (event) {
		if (event.target == form) {
		form.classList.add('hiden');
		}
	}
login();*/
var modal = document.querySelector('#myModal');
var btn = document.querySelector('.login');
var span = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

span.onclick = function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'visible';
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
}