const util = require('util')
const format = require('date-fns/format')
const getHours = require('date-fns/getHours')
const getMinutes = require('date-fns/getMinutes')
const config = require('./get-config.js')

/**
 * Format date.
 * @param object props
 * @return array dates
 */
module.exports = function formatDates (props) {
  // Handle fields defined in config.
  return config.dateFields.filter(field => !!props[field])
    // Convert prop string to array if needed.
    .map(field => {
      return Array.isArray(props[field]) ? props[field] : Array(props[field])
    })
    // Flatten the array of arrays if any.
    .flat()
    // Format.
    .map(date => formatDate(date))
}

/**
 * Format date object
 * @param string dateString
 * @return object date
 */
function formatDate (dateString) {
  // Split date start & date end.
  const entries = dateString.split(' - ').map((dateItem, index) => {
    const key = index === 0 ? 'start' : 'end'
    const object = new Date(dateItem)
    const timestamp = format(object, 't')
    const formats = formatDateItem(object)
    const value = {object, timestamp, ...formats}
    return [key, value]
  })
  const date = Object.fromEntries(entries)
  date.start.allDay = isAllDayLong(date.start.object)
  date.render = formatDateFullString(date)
  return date
}

/**
 * Format date item.
 * @param string dateObject
 * @return object
 */
function formatDateItem (dateObject) {
  const locale = require('date-fns/locale/' + config.locale)
  const entries = config.dateFormats.map(dateFormat => {
    const name = dateFormat.name
    const formatted = format(dateObject, dateFormat.format, {locale: locale})
    return [name, formatted]
  })
  return Object.fromEntries(entries)
}

/**
 * Is all day long.
 * @param object dateObject
 * @return boolean
 */
function isAllDayLong (dateObject) {
  // If time is 00:00, date is considered "all day long".
  return getHours(dateObject) === 0 && getMinutes(dateObject) === 0
}

/**
 * Format date full string.
 * @param object date
 * @return string
 */
function formatDateFullString (date) {
  // Full string render without date end.
  const renderUnique = date.start.allDay ? date.start.short : date.start.long
  // Full string render with date end.
  const renderMultiple = date.end && util.format(
    config.dateMultipleFormat,
    date.start.short,
    date.end.short
  )
  return date.end ? renderMultiple : renderUnique
}