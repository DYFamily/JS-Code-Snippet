/**
 * 生成随机字符串
 * @param { Number } num 字符串的长度
 * @returns { String } 长度为num位的随机字符串
 */
const randomString = (num = 0) => {
  return Math.random()
    .toString(36)
    .slice(2, num + 2);
};

/**
 * 生成随机HEX颜色
 * @returns { String } 随机HEX颜色字符串
 */
const randomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")
  );
};

/**
 * 生成一个介于两者之间的随机数
 * @param { Number } max 最大值
 * @param { Number } min 最小值
 * @returns { Number }
 */
const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
