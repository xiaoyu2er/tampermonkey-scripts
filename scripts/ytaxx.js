// ==UserScript==
// @name         ytaxx vip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  always vip
// @author       You
// @match        https://ytaxx.com/*
// @icon         https://www.google.com/s2/favicons?domain=ytaxx.com
// @require      https://unpkg.com/xhook@latest/dist/xhook.min.js
// @grant        none
// @run-at document-start

// ==/UserScript==

(function() {
	'use strict';

	xhook.after(function(request, response) {
		// console.log(request.url);
		if (request.url == '/api/auth/getUser') {
			var json = JSON.parse(response.text);
			// var json = {
			//     code: 0,
			//     msg: 'success',
			//     data: {
			//         isMembers: 1,
			//         isOldMembers: 1,
			//         isTrialFree: 1,
			//     }
			// };
			json.data.isMembers = 1;
			json.data.isOldMembers = 1;
			json.data.isTrialFree = 1;
			response.text = JSON.stringify(json);
		}
		if (request.url == '/api/userInformation/getUserInfo') {
			var json = JSON.parse(response.text);
			// var json = {
			// 	code: 0,
			// 	msg: 'success',
			// 	data: {
			// 		membersDate: 1640350149000
			// 	}
			// };
			json.data.membersDate = +(new Date() + 100000000);
			response.text = JSON.stringify(json);
		}
	});
})();
