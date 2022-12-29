/**
 * 复制文本
 * @param {String} text 复制的文本
 * @returns 
 */
const copyToClipboard = (text) =>
  navigator.clipboard.writeText(text);

/**
 * 随机HEX颜色
 * @returns 随机HEX颜色字符串
 */
const randomColor = () => {
  return '#' + Math.floor(Math.random() * 0xffffff)
    .toString(16).padEnd(6, '0');
}