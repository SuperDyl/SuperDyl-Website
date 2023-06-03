import express from "express";
import { exec } from "child_process";
import simpleGit from "simple-git";
const git = simpleGit();
const app = express();
const PORT = 3000;
const pm2Name = "website";
//use this 'pm2 start updateScript.js --name {pm2Name}'

// Webhook route for receiving upgrade requests
app.post("/upgrade", (req, res) => {
	console.log("Received upgrade request");

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

				// Restart the script via PM2
				pm2Restart();
			});
		} else {
			console.log("No changes found. Skipping npm install and restart.");
		}

		res.sendStatus(200);
	});
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
