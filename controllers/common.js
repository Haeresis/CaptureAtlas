/* jslint node: true */
var website = {};

(function (publics) {
	"use strict";

	publics.setModules = function () {
		var NA = this;

		NA.modules.puppeteer = require('puppeteer');
	};

}(website));

exports.setModules = website.setModules;