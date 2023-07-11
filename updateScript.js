/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
import { simpleGit, CleanOptions } from "simple-git";
const git = simpleGit().clean(CleanOptions.FORCE);
const app = express();
const { exec } = require("child_process");
const PORT = 3000;
const pm2Name = "website";

//use this 'pm2 start updateScript.js --name {pm2Name}'

// Webhook route for receiving upgrade requests
app.post("/upgrade", (req, res) => {
	console.log("Received upgrade request");

	// setTimeout(() => {
	//10 second delay
	console.log("Finished waiting for delay");
	git.pull((error, result) => {
		if (error) {
			console.error("Failed to pull changes:", error);
			return res.sendStatus(500);
		}

		if (result && result.summary.changes) {
			console.log("Successfully pulled changes:", result.summary);

			// Run npm install
			exec("npm install", (error, stdout) => {
				if (error) {
					console.error("Failed to run npm install:", error);
					return res.sendStatus(500);
				}

				console.log("npm install output:", stdout);

				exec("gatsby build", (error, stdout, stderr) => {
					if (error) {
						console.error("Failed to build the new page:", error);
						return res.sendStatus(500);
					}

					console.log("gatsby build output:", stdout);
				});

				// Restart the script via PM2
				pm2Restart();
			});
		} else {
			console.log("No changes found. Skipping npm install and restart.");
		}

		res.sendStatus(200);
	});
	// }, 1000); //10 second delay
});

// Restart the script through PM2
function pm2Restart() {
	exec(`pm2 restart ${pm2Name}`, (error) => {
		if (error) {
			console.error("Failed to restart via PM2:", error);
			return;
		}

		console.log("Restarted via PM2");
	});
}

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
