const fs = require('fs');
const csv = require('csv-parser');

// Path to your CSV file
const csvFilePath = 'https://raw.githubusercontent.com/cluemediator/read-large-csv-nodejs/master/product_10L.csv';

// Read data from CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Process each row of data
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
