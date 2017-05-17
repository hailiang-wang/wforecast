/**
* a heweathor api
*/

const request = require('superagent'),
    Q = require('q'),
    log = require('debug')('wforecast'),
    _ = require('lodash');


const baseUrl = "https://free-api.heweather.com/v5";


var WForewast = function (apiKey) {
    if (!apiKey) throw new Error('Invalid token, get it from http://www.heweather.com/my/service');
    this.key = apiKey;
}


WForewast.prototype.getWeatherByCity = function (city) {
    let defer = Q.defer();
    request
        .get(baseUrl + "/weather?city=" + city + "&key=" + this.key)
        .set('Accept', 'application/json')
        .end(function (err, res) {
            if (err) return defer.reject(err);
            defer.resolve(res.body.HeWeather5[0].suggestion);
        });

    return defer.promise;
}


exports = module.exports = (apiKey) => {
    return new WForewast(apiKey);
};
