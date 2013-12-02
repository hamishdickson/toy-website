// HWD 30/11/13 Creation

var helpers = require('./helpers.js');

exports.version = "0.1.0";

exports.list_all = function (req, res) {
	load_contact_list(function (err, contacts) {
		if (err) {
			helpers.send_failure(res, 500, err);
			return;
		}

		helpers.send_success(res, {contacts: contacts});
	});
}

function load_contact_list(callback) {
	var output = {
		"name": "Hamish Dickson",
		"title": "Mr",
		"address": "somewhere",
		"company": "Snowbear.co"
	};
}