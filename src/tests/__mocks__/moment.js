// import moment from "moment" -> THIS WILL CAUSE A STACK TRACE ERROR!
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}