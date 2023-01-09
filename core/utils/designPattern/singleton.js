/**
 * 单例模式
 * @param { Class } className 
 * @return 返回一个单例模式的类
 */
function singleton(className) {
  let ins;
  return new Proxy(className, {
    construct(target, arg) {
      if (!ins) {
        ins = new target(...arg)
      }
      return ins;
    }
  })
}

/**
 * test
 */

class A {
  constructor(name) {
    this.name = name;
    console.log('ins')
  }
  play() {
    console.log('play',this.name)
  }
}
const newA = singleton(A)
const a = new newA('xiaoming');
const b = new newA('xiaoliu');
a.play();
b.play();