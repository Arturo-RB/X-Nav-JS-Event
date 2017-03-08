var formElement = document.getElementById('color-text');
var colorElement = document.getElementById('result');
function color_event(){
	colorElement.style.backgroundColor = this.value;
};

formElement.addEventListener('input', color_event, false);
