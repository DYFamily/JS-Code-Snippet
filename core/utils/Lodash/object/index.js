/**
 * 根据提供的访问路径，获取对象中的值，如果得到的值时undefined，则使用提用的默认值
 * @param {Object} object 要访问的对象
 * @param {string | any[]} path 路径，可以是字符串和数组
 * @param {any} defaultValue 默认值
 * @return {any}
 */
function get(object, path, defaultValue) {
  let result = object;
  if (Array.isArray(path)) {
    for (const key of path) {
      if (!result) return defaultValue;
      result = result[key];
    }
  } else if(typeof path === 'string') {
    const reg = /[^.\[\]]/;
    
  }
  return result === undefined ? defaultValue : result;
}
let obj1 = {
  a: 1,
  b: {
    c: 2
  },
  c: ['3']
}
console.log(get(obj1, ['c', '0', '1'], 'default'))