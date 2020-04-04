const test = require('ava')
const setConfig = require('../lib/set-config.js')
const formatDates = require('../lib/format-dates.js')

test('Format array of dates', t => {
  const config = setConfig(__dirname)
  const props = {
    dates: [
      '2020-09-13 12:26:40',
      '2020-09-13 12:26:56 - 2020-09-14 13:00'
    ]
  }
  const dates = formatDates(props, config)
  t.deepEqual(dates[0].start.short, '13 septembre 2020')
  t.deepEqual(dates[1].end.long, '14 septembre 2020 - 13:00')
})

test('Format one date string', t => {
  const config = setConfig(__dirname)
  const props = {
    date: '2020-09-13 12:26:40'
  }
  const dates = formatDates(props, config)
  t.truthy(dates[0].start)
  t.falsy(dates[0].end)
})
