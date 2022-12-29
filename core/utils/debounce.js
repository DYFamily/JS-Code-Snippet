/**
 * 深拷贝 - MessageChannel方式实现
 * @param { any } obj 要拷贝的对象
 * @returns 一个新的对象
 */
const deepClone = (obj) => {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port1.postMessage(obj);
    port2.onmessage = (msg) => {
      resolve(msg.data)
    }
  })
}