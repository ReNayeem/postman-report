const newman = require('newman');
require('dotenv').config();

const apiKey = process.env.POSTMAN_KEY;

newman.run({

    collection: 'https://api.postman.com/collections/20817222-ea9dca92-f63d-4988-96f6-0a194ddea3f5?access_key=' + apiKey,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html'
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('collection run complete!');
})