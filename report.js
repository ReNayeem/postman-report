const newman = require('newman');
require('dotenv').config();

const apiKey = process.env.POSTMAN_KEY;

newman.run({

    collection: 'https://api.postman.com/collections/20817222-313ae6c9-92f7-4bf8-b145-041911e38530?access_key=' + apiKey,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report 4 assignment 1.html'
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('collection run complete!');
})