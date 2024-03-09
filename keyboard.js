var controller = { "Control": {}, "Alt": {}, "Backspace": {}, " ": {}, "CapsLock": {}, "Tab": {}, "Meta": {}, "Enter": {}, "Delete": {}, "a": {}, "b": {}, "c": {}, "d": {}, "e": {}, "f": {}, "g": {}, "h": {}, "i": {}, "j": {}, "k": {}, "l": {}, "m": {}, "n": {}, "o": {}, "p": {}, "q": {}, "r": {}, "s": {}, "t": {}, "u": {}, "v": {}, "w": {}, "x": {}, "y": {}, "z": {}, "A": {}, "B": {}, "C": {}, "D": {}, "E": {}, "F": {}, "G": {}, "H": {}, "I": {}, "J": {}, "K": {}, "L": {}, "M": {}, "N": {}, "O": {}, "P": {}, "Q": {}, "R": {}, "S": {}, "T": {}, "U": {}, "V": {}, "W": {}, "X": {}, "Y": {}, "Z": {}, "1": {}, "2": {}, "3": {}, "4": {}, "5": {}, "6": {}, "7": {}, "8": {}, "9": {}, "0": {}, "!": {}, "@": {}, "#": {}, "$": {}, "%": {}, "^": {}, "&": {}, "*": {}, "(": {}, ")": {}, "-": {}, "=": {}, "_": {}, "+": {}, "[": {}, "]": {}, "{": {}, "}": {} };

window.addEventListener("load", keyboardInit, false);

function keyboardInit() {
	for (var key in controller) {
		if (controller.hasOwnProperty(key)) {
			controller[key].pressed = false;
		}
	}
}

document.addEventListener("keydown", (e) => {
	if (controller[e.key]) {
		controller[e.key].pressed = true;
	}
	keyCombos();
})
document.addEventListener("keyup", (e) => {
	if (controller[e.key]) {
		controller[e.key].pressed = false;
	}
})

function keyCombos() {
	let temp = [], onkeys = [];
	for (var key in controller) {
		if (controller.hasOwnProperty(key)) {
			temp.push(key);
		}
	}


	onKeys = ["Control", "z"];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		undo();
	}

	onKeys = ["Control", "y"];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		redo();
	}

	onKeys = ["Control", "c"];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		var m = confirm("Clear everything?");
		if (m) {
			deleteAllElementsC();
			eraseC();
		}
	}

	onKeys = ["Delete"];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		deleteElement();
	}

	onKeys = ["-"];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		zoom(0.5);
	}

	onKeys = ["="];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		zoom(2);
	}

	onKeys = ["p"];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		playRecording();
	}

	onKeys = ["["];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		saveKeyframe();
	}

	onKeys = ["]"];
	if (onKeys.every(e => controller[e].pressed) && temp.filter(e => onKeys.indexOf(e) < 0).every(e => !controller[e].pressed)) {
		removeLastFrame();
	}

}