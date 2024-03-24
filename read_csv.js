const fs = require("fs");
const csv = require("csv-parser");

// Path to your CSV file
const csvFilePath = "Sample-Spreadsheet-100-rows.csv";

// Read data from CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (row) => {
    // Process each row of data
    console.log(row.ID);
    console.log(row.Name);
    console.log(row.Surname);
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });
