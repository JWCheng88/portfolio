export default function({ $axios, redirect }) {
	$axios.onRequest(config => {
		config.headers['Accept'] = 'application/json';
		config.headers['Content-Type'] =
			'application/x-www-form-urlencoded; charset=utf-8';
		// 傳送 cookies
		config.withCredentials = true;
		config.credentials = 'same-origin';

		if (process.client) console.warn('🌸 $axios request : ' + config.url);
	});

	$axios.onResponse(response => {
		// 判斷奇禾的 response.data.result ,如果是false 則進入 Promise.reject

        var convertEscapeChar = function(obj) {
            var ele = document.createElement('div');
            ele.innerHTML = JSON.stringify(obj);
            return JSON.parse(ele.childNodes[0].nodeValue);
        };
        
        response = convertEscapeChar(response);

		if (response.data.result === false) {
			if (process.client) console.error('💥 $axios catch : ', response);
			return Promise.reject(response);
		}
		
		return response;
	});

	// $axios.onError(error => {
	// 	const code = parseInt(error.response && error.response.status);
	// 	if (code === 400) {
	// 		redirect('/400');
	// 	}
	// });
}
