const axios = require('axios')
const config = require('./get-config.js')

/**
 * Format geo datas.
 * @param object props
 * @return array
 */
module.exports = async function formatGeo (props) {
  const geo = config.geoFields
    .filter(field => !!props[field])
    .map(address => formatAddress(address))
  return await Promise.all(geo)
}

/**
 * Format address to geo datas.
 * @param string address
 * @return Promised object location  {lat, lon, ...}
 * @see Nominatim API
 *   https://nominatim.org/release-docs/develop/api/Search/
 */
function formatAddress (address) {
  if (!address) return
  return axios({
    url: 'https://nominatim.openstreetmap.org/search',
    params: {
      q: address,
      format: 'json'
    },
    headers: {
      'User-Agent': 'Kamokamo app'
    }
  })
    .then(response => response.data[0])
    .catch(err => console.log(err))
}