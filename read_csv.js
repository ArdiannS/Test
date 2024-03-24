const fs = require("fs");
const csv = require("csv-parser");
const axios = require("axios");

// Path to your CSV file
const csvFilePath = "Sample-Spreadsheet-100-rows.csv";
const token = process.env.GITHUB_TOKEN;
console.log(token);
// Read data from CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", async (row) => {
    const url = `https://api.github.com/repos/ArdiannS/CareConnect/collaborators/albin-sh`;
    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(
          `User ${username} removed from the repository ${owner}/${repo}.`
        );
      } else {
        console.error(
          `Failed to remove user ${username} from the repository ${owner}/${repo}.`
        );
        const responseData = await response.json();
        console.error("Error message:", responseData.message);
      }
    } catch (error) {
      console.error("Error occurred while making the request:", error.message);
    }
    // Process each row of data
    console.log(row.ID);
    console.log(row.Name);
    console.log(row.Surname);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });
