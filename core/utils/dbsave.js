//防抖
const debon = (callback, time) => {
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, time);
  };
};

//节流
const save = (callback, time) => {
  var timer;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, time);
  };
};
