/**
 * 把一个函数加入到微队列运行
 * @param { Function } callback 
 */
const runMicroTask = (callback) => {
  if (typeof window === "undefined" && process.nextTick) {
    process.nextTick(callback)
  } else if (MutationObserver) {
    const p = document.createElement('p');
    const observer = new MutationObserver(callback);
    observer.observe(p, {
      childList: true
    })
    p.innerHTML = '1';
  } else {
    setTimeout(callback, 0)
  }
}

/**
 * test
 */
setTimeout(() => {
  console.log('1')
})
runMicroTask(() => {
  console.log('2')
})
// 输出
// 2
// 1