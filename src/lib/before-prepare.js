const path = require("path");
const fs = require("fs");
module.exports = function (hookArgs) {
	const pathToAppDir = hookArgs && hookArgs.projectData && hookArgs.projectData.appDirectoryPath;
	if (!pathToAppDir) {
		throw new Error("Unable to get path to app directory");
	}

	const packageJsonContent = JSON.parse(fs.readFileSync(path.join(pathToAppDir, "package.json")));
	const kinveyData = packageJsonContent.pluginsData && packageJsonContent.pluginsData["kinvey-nativescript-sdk"];
	const redirectUri = kinveyData && kinveyData.config && kinveyData.config.redirectUri;

	if (redirectUri) {
		// Check the platform from hookArgs
		if (hookArgs.platform.toLowerCase() === "android") {
			const pathToAndroidManifest = path.join(__dirname, "..", "platforms", "android", "AndroidManifest.xml");
			const content = fs.readFileSync(pathToAndroidManifest);
			// Parse content, find the redirectUri in it and replace it if it is not the same as the current redirectUri
			// Save the file ONLY in case you've modified it
		} else if (hookArgs.platform.toLowerCase() === "ios") {
			const pathToInfoPlist = path.join(__dirname, "..", "platforms", "ios", "Info.plist");
			const content = fs.readFileSync(pathToInfoPlist);
			// Parse content, find the redirectUri in it and replace it if it is not the same as the current redirectUri
			// Save the file ONLY in case you've modified it
		}
	}
}