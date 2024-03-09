function importFile(files) {
	for (const file of files) {
		var script = document.createElement('script');
		script.src = file;
		
		document.getElementsByTagName('head').item(0).appendChild(script);
	}
}

const files = ["utils.js", "units.js", "draw.js", "keyboard.js", "record.js", "ratefuncs.js"];
importFile(files);