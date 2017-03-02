const contentArea = document.body;
const glass = document.getElementById('glass');

function magnify(event){
	console.log("moved");
	glass.style.top = event.pageY - glass.offsetHeight/2;
	glass.style.left = event.pageX - glass.offsetWidth/2;
}

function enter(event){
	glass.classList.add("on-page");
}

function exit(event){
	console.log("exited area");
	glass.classList.remove("on-page")
}


contentArea.addEventListener("mousemove", magnify);
contentArea.addEventListener("mouseenter", enter);
