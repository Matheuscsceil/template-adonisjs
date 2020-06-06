module.exports = function sendNotification(
  {
    title,
    subTitle,
    notificationData
  }
) {
  if (process.env.NODE_ENV === 'development') {
    const user = notificationData
    var data = {
      app_id: process.env.ONESIGNAL_APP_ID,
      headings: {
        en: title
      },
      contents: {
        en: subTitle
      },
      included_segments: ['All'],
      filters: [
        { field: 'tag', key: 'user', relation: '=', value: user }
      ],
      data: { user, foo: 'bar' }
    }

    var headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Basic ${process.env.ONESIGNAL_API_KEY}`
    }

    var options = {
      host: 'onesignal.com',
      port: 443,
      path: '/api/v1/notifications',
      method: 'POST',
      headers: headers
    }

    var https = require('https')
    var req = https.request(options, function (res) {
      res.on('data', function (data) {
        console.log('Response:')
        console.log(JSON.parse(data))
      })
    })

    req.on('error', function (e) {
      console.log('ERROR:')
      console.log(e)
    })

    req.write(JSON.stringify(data))
    req.end()
  }
}
