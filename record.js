const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));

var draggableElementsB;
var keyframes = [];
var f = 100;
var s = 5;
var rate_func = 0;
var inf = 5;

window.addEventListener("load", recordInit, false);

function recordInit() {
	var frames = document.getElementById("frames");
	frames.addEventListener("input", framesSlider, false);
	var seconds = document.getElementById("seconds");
	seconds.addEventListener("input", secondsSlider, false);
	var rf = document.getElementById("rate_func");
	rf.addEventListener("input", rate_funcSlider, false);
	var inflection = document.getElementById("inflection");
	inflection.addEventListener("input", inflectionSlider, false);
}

function saveKeyframe() {
	var temp = [];
	if (keyframes.length == 0) {
		draggableElementsB = document.getElementsByClassName("movable");
	}

	for (i = 0; i < draggableElementsB.length; i++) {
		temp.push([draggableElementsB[i].offsetTop / l, (draggableElementsB[i].offsetLeft - 210) / l]);
	}
	keyframes.push(temp);
	document.getElementById("numFrames1").innerHTML = keyframes.length;
}

function removeLastFrame() {
	keyframes.pop();
	document.getElementById("numFrames1").innerHTML = keyframes.length;
}

function clearKeyframes() {
	keyframes = [];
	document.getElementById("numFrames1").innerHTML = keyframes.length;
}

async function playRecording() {
	console.log(keyframes);
	if (keyframes.length >= 1) {
		for (i = 0; i < draggableElementsB.length; i++) {
			draggableElementsB[i].style.top = keyframes[0][i][0] * l + "px";
			draggableElementsB[i].style.left = keyframes[0][i][1] * l + 210 + "px";
		}
	}
	
	for (x = 1; x < keyframes.length; x++) {
		for (c = 0; c < f; c++) {
			for (i = 0; i < draggableElementsB.length; i++) {
				switch(rate_func) {
					case 0:
						updateKeyframe(x, i, c, linear, inf);
						break;
					case 1:
						updateKeyframe(x, i, c, smooth, inf);
						break;
					case 2:
						updateKeyframe(x, i, c, rush_into, inf);
						break;
					case 3:
						updateKeyframe(x, i, c, rush_from, inf);
						break;
					case 4:
						updateKeyframe(x, i, c, linger, inf);
						break;
				}
			}
			await wait(1000 * s / f);
		}
	}

}

function updateKeyframe(x, num, iter, func, inflection) {
	draggableElementsB[num].style.top = (keyframes[x - 1][num][0] + ((keyframes[x][num][0] - keyframes[x - 1][num][0]) * func(iter / f, inflection))) * l + "px";
	draggableElementsB[num].style.left = (keyframes[x - 1][num][1] + ((keyframes[x][num][1] - keyframes[x - 1][num][1]) * func(iter / f, inflection))) * l + 210 + "px";
}

function framesSlider(event) {
	f = parseFloat(event.target.value);
	document.getElementById("frames1").innerHTML = event.target.value;
}

function secondsSlider(event) {
	s = 10 - parseFloat(event.target.value);
	console.log(typeof s);
	document.getElementById("seconds1").innerHTML = event.target.value;
}

function rate_funcSlider(event) {
	rate_func = parseFloat(event.target.value);
	const func_list = ["Linear", "Smooth", "Rush Into", "Rush From", "Linger"];
	document.getElementById("rate_func1").innerHTML = func_list[rate_func];
}

function inflectionSlider(event) {
	inf = parseFloat(event.target.value);
	document.getElementById("inflection1").innerHTML = event.target.value;
}