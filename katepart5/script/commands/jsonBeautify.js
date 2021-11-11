var katescript = {
	"author": "Vincenzo Buttazzo <vincenzo@buttazzo.eu>",
	"license": "LGPLv2+",
	"revision": 1,
	"kate-version": "5.1",
	"functions": ["jsonBeautify"],
	"actions": [
		{
			"function": "jsonBeautify",
			"name": "Beautifies JSON source code",
			"category": "Editing",
			"interactive": "false"
		}
	]
};

function jsonBeautify(indent = "\t") {
	let s = document.text();
	try {
		document.setText(JSON.stringify(JSON.parse(s), null, (/^\d+$/.test(indent) ? Number(indent) : indent)));
	} catch (e) {
		debug(e);
	}
}
