// let Big = require("./big");
import Big from "./big";
export default {
  formatNumber(n) {
    n = n.toString();
    return n[1] ? n : "0" + n;
  },

  formatTime(timestamp) {
    var date = new Date();
    date.setTime(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return (
      [year, month, day].map(formatNumber).join("-") +
      " " +
      [hour, minute].map(formatNumber).join(":")
    );
  },

  formatDate(timestamp) {
    var date = new Date();
    date.setTime(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [year, month, day].map(formatNumber).join("-");
  },

  countDown(open_date) {
    let time_end = Math.round(Date.parse(open_date) / 1000);
    let time_now = Math.round(new Date() / 1000);
    let time_distance = time_end - time_now;

    if (time_distance > 0) {
      let int_day = Math.floor(time_distance / (60 * 60 * 24));
      let int_hour = Math.floor(time_distance / (60 * 60)) - int_day * 24;
      let int_minute =
        Math.floor(time_distance / 60) - int_day * 24 * 60 - int_hour * 60;
      let int_second =
        Math.floor(time_distance) -
        int_day * 24 * 60 * 60 -
        int_hour * 60 * 60 -
        int_minute * 60;
      if (int_hour < 10) int_hour = "0" + int_hour;
      if (int_minute < 10) int_minute = "0" + int_minute;
      if (int_second < 10) int_second = "0" + int_second;
      let str_time = int_hour + "小时" + int_minute + "分钟";
      return str_time;
    } else {
      return "已过期";
    }
  },

  openDateTimeStamp() {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var tomorrow_timetamp = timestamp + 24 * 60 * 60;
    var n_to = tomorrow_timetamp * 1000;
    var tomorrow_date = new Date(n_to);
    return tomorrow_date.toISOString();
  },

  toFixed1(num) {
    return new Big(num).toFixed(1);
  }
};
