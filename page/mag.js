window.onload = function () {

	// get dimensions
	const contentArea = document.body;
	const image = document.querySelector('img'); // image to be magnified
	const glass = document.getElementById('glass');
	const factor = document.getElementById('factor');

	var magnifier = factor.value; // set factor for magnification
	var magWidth = image.offsetWidth*magnifier;
	var magHeight = image.offsetHeight*magnifier;

	glass.style.backgroundSize = `${magWidth}px ${magHeight}px`

	// listeners
	image.addEventListener("mouseenter", enter);
	contentArea.addEventListener("mousemove", magnify);
	factor.addEventListener("change", changeGlass);

	// show magnifier
	function enter(event){
		glass.classList.add("on-page");
	}

	// magnify content within the circle
	function magnify(event){

		var coords = image.getBoundingClientRect();

		glass.style.left = event.pageX - glass.offsetWidth/2;
		glass.style.top = event.pageY - glass.offsetHeight/2;

		var xPercent = (event.pageX - window.scrollX - coords.left) / image.offsetWidth * magWidth;
		var yPercent = (event.pageY - window.scrollY - coords.top) / image.offsetHeight * magHeight;
		glass.style.backgroundPosition = 
			`${-xPercent + glass.offsetWidth/2 - glass.clientLeft}px ${-yPercent + glass.offsetHeight/2 - glass.clientLeft}px`;

		var glassPos = glass.getBoundingClientRect();

		// if mouse is outside the image area, don't show magnifier
		if (glassPos.right - glass.offsetWidth/2 + glass.clientLeft <= coords.left || 
			glassPos.left + glass.offsetWidth/2 - glass.clientLeft >= coords.right ||
			glassPos.top + glass.offsetWidth/2 - glass.clientLeft >= coords.bottom ||
			glassPos.bottom - glass.offsetWidth/2 + glass.clientLeft <= coords.top ){
			glass.classList.remove("on-page");
		}
	}

	function changeGlass(event){
		magnifier = this.value;
		magWidth = image.offsetWidth*magnifier;
		magHeight = image.offsetHeight*magnifier;
		glass.style.backgroundSize = `${magWidth}px ${magHeight}px`
	}

}

