//課題１
const dayjs = require("dayjs");

console.log(dayjs().subtract(30, "d").format("YYYY-MM-DD"));

//課題２
const moment = require("moment");

console.log(moment().subtract(30, "d").format("YYYY-MM-DD"));
