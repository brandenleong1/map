let unitColour = 0;

function create(obj) {
	var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	var newDiv = document.createElement('div');
	newDiv.style.top = (scrollTop + 10) + 'px';
	newDiv.style.left = (scrollLeft + 220) + 'px';
	
  	document.getElementById('body').appendChild(newDiv);
	var img = document.createElement('img');

	switch (obj.id) {
		case "b11":
			if (unitColour == 0) {
				img.src = '/images/a_military_police.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_military_police.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b12":
			if (unitColour == 0) {
				img.src = '/images/a_infantry.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_infantry.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b13":
			if (unitColour == 0) {
				img.src = '/images/a_motorized_infantry.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_motorized_infantry.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b14":
			if (unitColour == 0) {
				img.src = '/images/a_artillery.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_artillery.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b15":
			if (unitColour == 0) {
				img.src = '/images/a_anti_tank.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_anti_tank.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b16":
			if (unitColour == 0) {
				img.src = '/images/a_anti_air.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_anti_air.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b21":
			if (unitColour == 0) {
				img.src = '/images/a_armoured_car.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_armoured_car.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b22":
			if (unitColour == 0) {
				img.src = '/images/a_light_tank.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_light_tank.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b23":
			if (unitColour == 0) {
				img.src = '/images/a_medium_tank.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_medium_tank.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b24":
			if (unitColour == 0) {
				img.src = '/images/a_heavy_tank.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_heavy_tank.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b25":
			if (unitColour == 0) {
				img.src = '/images/a_tank_destroyer.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_tank_destroyer.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b26":
			if (unitColour == 0) {
				img.src = '/images/a_sp_artillery.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_sp_artillery.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b27":
			if (unitColour == 0) {
				img.src = '/images/a_sp_anti_air.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_sp_anti_air.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b28":
			if (unitColour == 0) {
				img.src = '/images/a_mechanized_infantry.png';
				newDiv.setAttribute('class', 'movable image1');
				img.setAttribute('class', 'image image1');
			} else if (unitColour == 1) {
				img.src = '/images/b_mechanized_infantry.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b31":
			if (unitColour == 0) {
				img.src = '/images/a_interceptor.png';
				newDiv.setAttribute('class', 'movable image2');
				img.setAttribute('class', 'image image2');
			} else if (unitColour == 1) {
				img.src = '/images/b_interceptor.png';
				newDiv.setAttribute('class', 'movable image5');
				img.setAttribute('class', 'image image5');
			}
			break;
		case "b32":
			if (unitColour == 0) {
				img.src = '/images/a_bomber.png';
				newDiv.setAttribute('class', 'movable image2');
				img.setAttribute('class', 'image image2');
			} else if (unitColour == 1) {
				img.src = '/images/b_bomber.png';
				newDiv.setAttribute('class', 'movable image5');
				img.setAttribute('class', 'image image5');
			}
			break;
		case "b33":
			if (unitColour == 0) {
				img.src = '/images/a_fighter.png';
				newDiv.setAttribute('class', 'movable image2');
				img.setAttribute('class', 'image image2');
			} else if (unitColour == 1) {
				img.src = '/images/b_fighter.png';
				newDiv.setAttribute('class', 'movable image5');
				img.setAttribute('class', 'image image5');
			}
			break;
		case "b41":
			if (unitColour == 0) {
				img.src = '/images/a_destroyer.png';
				newDiv.setAttribute('class', 'movable image3');
				img.setAttribute('class', 'image image3');
			} else if (unitColour == 1) {
				img.src = '/images/b_destroyer.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b42":
			if (unitColour == 0) {
				img.src = '/images/a_submarine.png';
				newDiv.setAttribute('class', 'movable image2');
				img.setAttribute('class', 'image image2');
			} else if (unitColour == 1) {
				img.src = '/images/b_submarine.png';
				newDiv.setAttribute('class', 'movable image5');
				img.setAttribute('class', 'image image5');
			}
			break;
		case "b43":
			if (unitColour == 0) {
				img.src = '/images/a_cruiser.png';
				newDiv.setAttribute('class', 'movable image3');
				img.setAttribute('class', 'image image3');
			} else if (unitColour == 1) {
				img.src = '/images/b_cruiser.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b44":
			if (unitColour == 0) {
				img.src = '/images/a_battleship.png';
				newDiv.setAttribute('class', 'movable image3');
				img.setAttribute('class', 'image image3');
			} else if (unitColour == 1) {
				img.src = '/images/b_battleship.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b45":
			if (unitColour == 0) {
				img.src = '/images/a_carrier.png';
				newDiv.setAttribute('class', 'movable image3');
				img.setAttribute('class', 'image image3');
			} else if (unitColour == 1) {
				img.src = '/images/b_carrier.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
		case "b46":
			if (unitColour == 0) {
				img.src = '/images/a_convoy.png';
				newDiv.setAttribute('class', 'movable image3');
				img.setAttribute('class', 'image image3');
			} else if (unitColour == 1) {
				img.src = '/images/b_convoy.png';
				newDiv.setAttribute('class', 'movable image4');
				img.setAttribute('class', 'image image4');
			}
			break;
	}

	img.setAttribute('draggable', false);
	newDiv.appendChild(img);
	draggableInit();
}

function showMenu(obj) {
	strokeColor = "rgba(0, 0, 0, 0)";

	var x = [document.getElementById("menu1"), document.getElementById("menu2"), document.getElementById("menu3"), document.getElementById("menu4"), document.getElementById("menu5"), document.getElementById("menu6"), document.getElementById("menu7")];
	var y = [document.getElementById("mb1"), document.getElementById("mb2"), document.getElementById("mb3"), document.getElementById("mb4"), document.getElementById("mb5"), document.getElementById("mb6"), document.getElementById("mb7")];

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[y.indexOf(obj)].style.display = "block";

	for (i = 0; i < y.length; i++) {
		y[i].style.background = "";
	}
	y[y.indexOf(obj)].style.background = "#aaaaaa";
}

function updateUnitColour(obj) {
	var x = [document.getElementById("mb01"), document.getElementById("mb02")];

	for (i = 0; i < x.length; i++) {
		x[i].style.background = "";
	}

	switch(obj.id) {
		case "mb01":
			unitColour = 0;
			x[0].style.background = "rgb(128, 224, 255)";
			break;
		case "mb02":
			unitColour = 1;
			x[1].style.background = "rgb(255, 128, 128)";
			break;
	}
}

function deleteElement() {
	var x = document.getElementById("deleteOn");
	if (x.style.display === "none") {
		x.style.display = "block";
		window.onclick = e => {
			if (e.target.classList.contains("image")) {
				e.target.onmouseup = e.target.remove();
			}
			var draggableElements = document.getElementsByClassName("movable");
			for (var i = draggableElements.length - 1; i >= 0; i--) {
				if (draggableElements[i].children.length == 0) {
					draggableElements[i].remove();
				}
			}
		}
	} else {
		x.style.display = "none";
		window.onclick = e => {}
	}
}

function deleteAllElements() {
	var m = confirm("Clear all units?");
	if (m) {
		deleteAllElementsC();
	}
}

function deleteAllElementsC() {
	var draggableElements = document.getElementsByClassName("movable");

	while (draggableElements.length > 0){
		draggableElements[0].remove();
	}
}

function showHelp() {
	let s = document.getElementById("screen");
	s.classList.toggle("fade");
	let h = document.getElementById("help");
	h.classList.toggle("fade");
}

function draggableInit() {
	var draggableElements = document.getElementsByClassName("movable");

	for (var i = 0; i < draggableElements.length; i++){
		dragElement(draggableElements[i]);
	}
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	canvas = document.getElementById("canvas");

	if (document.getElementById(elmnt.id + "header")) {
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		elmnt.onmousedown = dragMouseDown;
	}
	function dragMouseDown(e) {
		e = e || window.event;
		pos3 = parseInt(e.clientX);
		pos4 = parseInt(e.clientY);
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
		return false;
	}

	function elementDrag(e) {
		e = e || window.event;
		pos1 = pos3 - parseInt(e.clientX);
		pos2 = pos4 - parseInt(e.clientY);
		pos3 = parseInt(e.clientX);
		pos4 = parseInt(e.clientY);
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
