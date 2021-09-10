/* jslint node: true, esversion: 6 */
exports.changeDom = function (next, locals) {
	var NA = this,
		puppeteer = NA.modules.puppeteer;

	(async () => {
		const browser = await puppeteer.launch({
			ignoreHTTPSErrors: true,
		});

		const page = await browser.newPage();

		/*await page.setExtraHTTPHeaders({
			'Cookie': '_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5kZXYuaW1wYWFrdC5jb20vdjIvc2Vzc2lvbi9zaWduaW4iLCJpYXQiOjE2MzEwMDc4ODgsImV4cCI6MTYzMzA4MTQ4OCwibmJmIjoxNjMxMDA3ODg4LCJqdGkiOiJoeWFyQUQ3UkRCcHdHR1FZIiwic3ViIjozMywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInVzZXIiOnsiaWQiOjMzLCJ1c2VyX2lkIjozMywiZW1haWwiOiJhLmFsbGVlQG9yY2hhcmQtaWQuY29tIiwicHVibGljX2VtYWlsIjpudWxsLCJwc2V1ZG8iOiJLYWhsIiwicHJvZmlsZV9waWN0dXJlIjpudWxsLCJ1c2VyY2VydGlmaWNhdGlvbl90aXRsZSI6bnVsbCwiZmlyc3RfbmFtZSI6IiIsImxhc3RfbmFtZSI6IiIsInJvbGVzU3RyaW5nIjoiQ0xJRU5ULE1FTUJFUiIsImFub255bW91cyI6MCwiaGFzX2FncmVlZF9jdXJyZW50X3BsYXRmb3JtX2NvbmRpdGlvbiI6MSwicm9sZXMiOlsiTUVNQkVSIiwiQ0xJRU5UIl19fQ.O8Lj0zSGO0TKij-T2SMYL6zSf3l8ZhVepas-H5JyuzU'
		})*/

		console.log()

		await page.goto(locals.urlRootPath + locals.webconfig.urlRelativeSubPath + '/pdf/', {
			waitUntil: 'networkidle2',
		});
		//await page.waitForFunction('window.pdfGeneration === "ready"');

		const pdf = await page.pdf({
			format: 'A4'
		});

		await browser.close();

	    locals.dom = pdf;

	    next();
	})();
};