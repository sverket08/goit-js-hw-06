const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('blur', event => {
	if (event.target.value.length.trim() === 6 ) {
		textInput.classList.remove('invalid')
		textInput.classList.add('valid')
	} else {
			textInput.classList.remove('valid')
		    textInput.classList.add('invalid')
	}
})