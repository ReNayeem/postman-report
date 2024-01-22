const newman = require('newman');

newman.run({

    collection: 'https://api.postman.com/collections/20817222-ea9dca92-f63d-4988-96f6-0a194ddea3f5?access_key=PMAT-01HMBN9YX1566NZGP1Q9Q9YGX7',

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