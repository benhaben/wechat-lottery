import Big from "./big";

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
}

const formatTime = timestamp => {
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
};

const formatDate = timestamp => {
  var date = new Date();
  date.setTime(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join("-");
};

const openDateTimeStamp = () => {
  // https://blog.csdn.net/ufo00001/article/details/72834437
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  var tomorrow_timetamp = timestamp + 24 * 60 * 60;
  var n_to = tomorrow_timetamp * 1000;
  var tomorrow_date = new Date(n_to);
  return tomorrow_date.toISOString();
};
const toFixed1 = num => {
  return new Big(num).toFixed(1);
};

module.exports = { formatTime, formatDate, toFixed1, openDateTimeStamp };
