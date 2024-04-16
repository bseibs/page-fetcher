const request = require("request");
const fs = require("fs");

// Command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Function to download and save the file
const downloadFile = (url, filePath) => {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error("Error downloading the file:", error);
    } else {
      fs.writeFile(filePath, body, (err) => {
        if (err) {
          console.error("Error saving the file:", err);
        } else {
          console.log(
            `Downloaded and saved ${body.length} bytes to ${filePath}`
          );
        }
      });
    }
  });
};

// Check if both URL and file path are provided
if (!url || !filePath) {
  console.error("Usage: node fetcher.js <URL> <file-path>");
} else {
  downloadFile(url, filePath);
}
//complete?
