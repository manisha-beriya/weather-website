const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9fc633d7f52aede024da79bcc05a7957&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined,"It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast