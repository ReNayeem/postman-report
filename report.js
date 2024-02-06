const newman = require('newman');
require('dotenv').config();

const apiKey = process.env.POSTMAN_KEY;

newman.run({

    collection: 'https://api.postman.com/collections/20817222-4fb48de4-e0d1-4681-9791-eefb2af682fe?access_key=' + apiKey,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report 3.html'
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('collection run complete!');
})