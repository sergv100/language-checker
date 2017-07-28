(function() {
	const checkBtn = document.querySelector('input[type=submit]'),
		  enter    = document.getElementById('enter-text'),
		  result   = document.getElementById('result-text'),
		  locales  = document.querySelector('.locales'),
		  locRU    = locales.querySelector('.btn_ru'),
		  locEN    = locales.querySelector('.btn_en');
	
	let isRU = true,
		mask;

	function pressCheckButton(e) {
		e.preventDefault();
		checkedText = enter.value;

		clearResultArea();

		if(checkedText) {
			addResult(checkedText);
		}
	};

	function changeMask() {
		return mask = (isRU) ? /[а-яё]+/gi : /[a-z]+/gi;
	}

	function highlightedText(text) {
		return text.replace(changeMask(), function(el) {
			if(el != null ) {
				return '<span class="red">'+ el +'</span>';
			}
		});
	};

	function addResult(text) {
		result.innerHTML = '<p>' + highlightedText(text) + '</p>'
	}

	function clearResultArea() {
		result.innerHTML = '';
	}

	function addCustomOutline() {
		this.classList.add('focus');
	}

	function removeCustomOutline() {
		this.classList.remove('focus');
	}

	enter.addEventListener('focus', addCustomOutline);
	enter.addEventListener('blur', removeCustomOutline);
	checkBtn.addEventListener('click', pressCheckButton);

	locRU.addEventListener('click', function(e) {
		isRU = true;

		locEN.classList.remove('checked');
		if(!this.classList.contains('checked')) {
			this.classList.add('checked');
		}
	});
	locEN.addEventListener('click', function(e) {
		isRU = false;

		locRU.classList.remove('checked');
		if(!this.classList.contains('checked')) {
			this.classList.add('checked');
		}
	});
})();
