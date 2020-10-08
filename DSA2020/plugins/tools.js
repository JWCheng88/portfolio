// tool.js - this is just a loader

/* eslint-disable */
function loadJSAsync(e, n, o) {
	const t = document,
		a = "script",
		i = t.createElement(a),
		r = t.getElementsByTagName(a)[0];
	i.src = "//" + e, n && i.addEventListener("load", function (e) {
		n(null, e)
	}, !1), o && i.addEventListener("error", function (e) {
		o(e)
	}, !1), r.parentNode.insertBefore(i, r)
}

function ExternalHook(target) {
	return new Promise(function (resolve, reject) {
		const detect = window.setInterval(function () {
			if (typeof target !== undefined) {
				window.clearInterval(detect);
				resolve()
			}
		}, 200);
	});
}



const tools = {
	loadJSAsync,
	ExternalHook
}

export default tools;
