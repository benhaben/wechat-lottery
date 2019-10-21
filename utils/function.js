import Big from "./big";
import { CONST } from "./constants";

export function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
}

export const formatTime = timestamp => {
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

export const formatDate = timestamp => {
  var date = new Date();
  date.setTime(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join("-");
};

export const countDown = function(open_date) {
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
    return "1小时";
  }
};

export function openDateISOString() {
  // https://blog.csdn.net/ufo00001/article/details/72834437
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  var tomorrow_timetamp = timestamp + 24 * 60 * 60;
  var n_to = tomorrow_timetamp * 1000;
  var tomorrow_date = new Date(n_to);
  return tomorrow_date.toISOString();
}

export function randomMoneyUrl() {
  return CONST.DEFAULT_MONEY_URL[
    randomNum(0, CONST.DEFAULT_MONEY_URL.length - 1)
  ];
}

export function randomProductUrl() {
  return CONST.DEFAULT_URL[randomNum(0, CONST.DEFAULT_URL.length - 1)];
}

//生成从minNum到maxNum的随机数
export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
export const toFixed1 = num => {
  return new Big(num).toFixed(1);
};

export const toFixed3 = num => {
  return new Big(num).toFixed(3);
};

export function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500;
  }

  let _lastTime = null;

  // 返回新的函数
  return function() {
    let _nowTime = +new Date();
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments); //将this和参数传给原函数
      _lastTime = _nowTime;
    }
  };
}

/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“去弹跳”了的函数
 */
export function debounce(fn, delay = 1000) {
  // 定时器，用来 setTimeout
  var timer;

  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  return function() {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer);

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
