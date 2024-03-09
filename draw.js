const map = "/images/map.jpg";

var canvas, ctx, flag = false,
	prevX = 0,
	currX = 0,
	prevY = 0,
	currY = 0,
	dot_flag = false;

var redo_list = [], undo_list = []

var strokeColor = "rgba(0, 0, 0, 0)", strokeWidth = 20;

function color(obj) {
	switch (obj.id) {
		case "b51":
			strokeColor = "black";
			break;
		case "b52":
			strokeColor = "rgb(0, 170, 255)";
			break;
		case "b53":
			strokeColor = "red";
			break;
		case "b54":
			strokeColor = "green";
			break;
		case "b55":
			strokeColor = "yellow";
			break;
		case "b56":
			strokeColor = "rgba(0, 0, 0, 0)";
			break;
	}
}

window.addEventListener("load", drawInit, false);

function drawInit() {
	const mapImage = new Image();
	mapImage.src = map;

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.height = window.innerHeight;
	canvas.width = window.innerHeight * (mapImage.width / mapImage.height);
	canvas.style.height = window.innerHeight;
	canvas.style.width = window.innerHeight * (mapImage.width / mapImage.height);
	canvas.style.background = "url'" + map + "')";
	canvas.style.backgroundSize = (window.innerHeight * (mapImage.width / mapImage.height)) + "px " + window.innerHeight + "px";

	saveState(canvas, undo_list, false);

	canvas.addEventListener("mousemove", function (e) {
		findxy('move', e);
	}, false);
	canvas.addEventListener("mousedown", function (e) {
		findxy('down', e);
	}, false);
	canvas.addEventListener("mouseup", function (e) {
		findxy('up', e);
	}, false);
	canvas.addEventListener("mouseout", function (e) {
	}, false);

	var colorWell = document.getElementById("customColor");
	var slider = document.getElementById("customStroke");
	colorWell.addEventListener("input", customColor, false);
	slider.addEventListener("input", customStroke, false);
	colorWell.select();
}

function customColor(event) {
	strokeColor = event.target.value;
}

function customStroke(event) {
	strokeWidth = event.target.value;
}

function draw() {
	var d = document.getElementById("deleteOn");
	if (d.style.display === "none") {
		ctx.beginPath();
		ctx.moveTo(prevX, prevY);
		ctx.lineTo(currX, currY);
		ctx.strokeStyle = strokeColor;
		ctx.lineWidth = strokeWidth / 10;
		ctx.stroke();
		ctx.closePath();
	}
}

function erase() {
	var m = confirm("Clear all lines?");
	if (m) {
		eraseC();
	}
}

function eraseC() {
	saveState(canvas, undo_list, false);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function findxy(res, e) {
	if (res == 'down' && strokeColor != "rgba(0, 0, 0, 0)") {
		saveState(canvas, undo_list, false);
		prevX = currX;
		prevY = currY;
		currX = e.clientX - canvas.getBoundingClientRect().left;
		currY = e.clientY - canvas.getBoundingClientRect().top;

		flag = true;
		dot_flag = true;
		if (dot_flag) {
			ctx.beginPath();
			ctx.fillStyle = strokeColor;
			ctx.fillRect(currX, currY, 2, 2);
			ctx.closePath();
			dot_flag = false;
		}
	}
	if (res == 'up' || res == "out") {
		flag = false;
	}
	if (res == 'move') {
		if (flag) {
			prevX = currX;
			prevY = currY;
			currX = e.clientX - canvas.getBoundingClientRect().left;
			currY = e.clientY - canvas.getBoundingClientRect().top;
			draw();
		}
	}
}

function saveState(canvas, list, keep_redo) {
	if (!keep_redo) {
		redo_list = [];
	}

	list.push(canvas.toDataURL());
}

function restoreState(canvas, ctx, pop, push) {
	if (pop.length) {
		saveState(canvas, push, true);
		var restore_state = pop.pop();
		var img = new Image();
		img.src = restore_state;
		img.onload = function () {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
		}
	}
}

function undo() {
	restoreState(canvas, ctx, undo_list, redo_list);
}

function redo() {
	restoreState(canvas, ctx, redo_list, undo_list);
}

l = 1;
function zoom(level) {
	if (l > 1 || level > 1) {
		var c1 = canvas.getBoundingClientRect().top;
		var c2 = canvas.getBoundingClientRect().left;
		resizeTo(canvas, level);
		canvas.style.backgroundSize = canvas.width + "px " + canvas.height + "px";

		var draggableElementsA = document.getElementsByClassName("movable");

		for (i = 0; i < draggableElementsA.length; i++) {
			draggableElementsA[i].style.top = (draggableElementsA[i].offsetTop * level) + "px";
			draggableElementsA[i].style.left = ((draggableElementsA[i].offsetLeft - 210) * level + 210) + "px";
		}

		l *= level;
		document.getElementById("zoom1").innerHTML = l;
	}
}

function resizeTo(canvas, pct){
	var tempCanvas = document.createElement("canvas");
	var tctx = tempCanvas.getContext("2d");
	var cw = canvas.width;
	var ch = canvas.height;
	tempCanvas.width = cw;
	tempCanvas.height = ch;
	tctx.drawImage(canvas, 0, 0);
	canvas.width *= pct;
	canvas.height *= pct;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(tempCanvas, 0, 0, cw, ch, 0, 0, cw * pct, ch * pct);
}