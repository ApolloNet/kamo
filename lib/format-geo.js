const axios = require('axios')

/**
 * Get location datas given an address string.
 * @param string address.
 * @return location object {lat, lon, ...}
 * @see Nominatim API
 *   https://nominatim.org/release-docs/develop/api/Search/
 */
module.exports = function formatGeo (address) {
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
    .catch((err) => {
      throw new Error(err)
    })
}
