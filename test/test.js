/**
 * Philly Logic Server.
 * secure requests for API calls.
 */
const test = require('ava');
const config = require('./config.json');

test.cb('WForewast#getWeatherByCity', t => {
    var wf = require('../index.js')(config.apiKey);
    try {
        wf.getWeatherByCity('beijing')
            .then(function (res) {
                // console.log(JSON.stringify(res));
                t.truthy(res.comf.txt)
                console.log(res)
                t.pass();
                t.end();
            }, function (err) {
                console.error(err);
                t.fail(err);
                t.end();
            });
    } catch (e) {
        t.fail(e)
    }

});
