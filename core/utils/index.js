/**
 * 复制文本
 * @param { String } text 复制的文本
 * @returns 
 */
const copyToClipboard = (text) =>
  navigator.clipboard.writeText(text);

/**
 * 高亮显示文本中的关键词
 * @param { String } target 文本
 * @param { String } keywords 关键词
 * @returns {{ start: string; hight: string; end: string }} 返回：起始字符串、高亮字符串、结束字符串（依次展示）
 */
function higthSearchValue(target, keywords) {
  const start = target.substring(0, target.indexOf(keywords));
  const higth = target.substring(target.indexOf(keywords), target.indexOf(keywords) + keywords.length);
  const end = target.substring(target.indexOf(keywords) > -1 ? target.indexOf(keywords) + keywords.length : 0, target.length);
  return {
    start,
    higth,
    end
  }
}