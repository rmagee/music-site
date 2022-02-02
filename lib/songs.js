const axios = require('axios').default

const PARSE_URL = process.env.REACT_APP_PARSE_URL
const APP_ID = process.env.REACT_APP_APP_ID

function getSongList(setState){
    axios.get(
        `${PARSE_URL}parse/classes/song`,
        {
            headers: {'X-Parse-Application-Id': APP_ID}
        }).then(response => {
            return response.data
    })
}

module.exports.getSongList = getSongList