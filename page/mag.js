window.onload = function () {

	const contentArea = document.body;
	const image = document.querySelector('img');
	const glass = document.getElementById('glass');

	const magWidth = 1600;
	const magHeight = 3200;

	function magnify(event){

		var coords = image.getBoundingClientRect();

		glass.style.left = event.pageX - glass.offsetWidth/2;
		glass.style.top = event.pageY - glass.offsetHeight/2;

		var xPercent = (event.pageX - window.scrollX - coords.left) / image.offsetWidth * magWidth;
		var yPercent = (event.pageY - window.scrollY - coords.top) / image.offsetHeight * magHeight;
		glass.style.backgroundPosition = `${-xPercent + glass.offsetWidth/2 - 5}px ${-yPercent + glass.offsetHeight/2 - 5}px`;
	}

	function enter(event){
		glass.classList.add("on-page");
	}

	function exit(event){
		glass.classList.remove("on-page")
	}


	contentArea.addEventListener("mousemove", magnify);
	contentArea.addEventListener("mouseenter", enter);
}

