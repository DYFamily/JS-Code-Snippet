/**
 * 复制文本
 * @param {String} text 复制的文本
 * @returns 
 */
const copyToClipboard = (text) =>
  navigator.clipboard.writeText(text);