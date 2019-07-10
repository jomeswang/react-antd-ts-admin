
/**
 * 生成指定区间的随机整数
 * @param {Number} min 最小数
 * @param {Number} max 最大数
 * @return {Number}
 */
const randomNum = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min);

/*
  生成验证码
 */
export const createVerification = (canvas: any): string => {
  const ctx = canvas.getContext('2d')
  const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let verificationCode = ''
  ctx.clearRect(0, 0, 80, 39)
  for (let i = 0; i < 4; i++) {
    const char = chars[randomNum(0, 57)]
    verificationCode += char
    // 设置字体随机大小
    ctx.font = randomNum(20, 25) + 'px SimHei'
    ctx.fillStyle = '#D3D7F7'
    ctx.textBaseline = 'middle'
    ctx.shadowOffsetX = randomNum(-3, 3)
    ctx.shadowOffsetY = randomNum(-3, 3)
    ctx.shadowBlur = randomNum(-3, 3)
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
    const x = 80 / 5 * (i + 1)
    const y = 39 / 2
    const deg = randomNum(-25, 25)
    // 设置旋转角度和坐标原点
    ctx.translate(x, y)
    ctx.rotate(deg * Math.PI / 180)
    ctx.fillText(char, 0, 0)
    // 恢复旋转角度和坐标原点
    ctx.rotate(-deg * Math.PI / 180)
    ctx.translate(-x, -y)
  }
  return verificationCode;
}