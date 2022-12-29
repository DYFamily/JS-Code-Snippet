/**
 * 发送消息
 * @param {string} type 
 * @param {*} payload 
 */
export const sendMsg = (type = '', payload) => {
  localStorage.setItem(`@@${type}`, JSON.stringify({
    payload,
    temp: Date.now(),
  }))
}

/**
 * 监听消息
 * @param { (type: string, payload) => void } handler 监听消息的回调函数，一旦storage有变化就会触发
 * @return { () => void } 取消监听函数
 */
export const listenMsg = (handler) => {
  const storageHandler = e => {
    const data = JSON.parse(e.newValue);
    handler(e.key.substring(1), data.payload);
  }
  window.addEventListener('storage', storageHandler);
  return () => {
    window.removeEventListener('storage', storageHandler);
  }
}

/**
 * 监听某个类型的消息
 * @param { string } type 监听的消息类型
 * @param { (type: string, payload) => void } handler 监听消息的回调函数，监听的消息类型有变化时就会触发
 * @return { () => void } 取消监听函数
 */
export const listenMsg = (type, handler) => {
  const storageHandler = e => {
    const data = JSON.parse(e.newValue);
    if (type === e.key.substring(1)) {
      handler(e.key.substring(1), data.payload);
    }
  }
  window.addEventListener('storage', storageHandler);
  return () => {
    window.removeEventListener('storage', storageHandler);
  }
}