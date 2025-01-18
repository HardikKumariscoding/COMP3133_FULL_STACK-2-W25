const fs = require('fs');
const csv = require('csv-parser');


const inputFileName = 'input_countries.csv';
const canadaFileName = 'canada.txt';
const usaFileName = 'usa.txt';

//Delete existing files if they exist
if (fs.existsSync(canadaFileName)) {
    fs.unlinkSync(canadaFileName);
    console.log(`${canadaFileName} deleted.`);
}

if (fs.existsSync(usaFileName)) {
    fs.unlinkSync(usaFileName);
    console.log(`${usaFileName} deleted.`);
}

//filtering from csv files and writing to them 
fs.createReadStream(inputFileName)
    .pipe(csv())
    .on('data', (row) => {
        const { country, year, population } = row;

        //THis is for our Canada.txt
        if (country.toLowerCase() === 'canada') {
            fs.appendFileSync(
                canadaFileName,
                `${country},${year},${population}\n`
            );
        }

        //This is fr Usa.txt
        if (country.toLowerCase() === 'united states') {
            fs.appendFileSync(
                usaFileName,
                `${country},${year},${population}\n`
            );
        }
    })
    .on('end', () => {
        console.log('Data processing complete.');
    });
