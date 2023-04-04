export function time2Str(t, duration) {
  // 小时： h = parseInt(总秒数 / 60 / 60 % 24)
  // 分钟： m = parseInt(总秒数 / 60 % 60)
  // 秒：   s = parseInt(总秒数 % 60)
  let h = parseInt((t / 60 / 60) % 24)
  let m = parseInt((t / 60) % 60)
  let s = parseInt(t % 60)
  // 因为h已经是数字型了，如果0不加引号就变成加法了
  let showHour = duration >= 3600
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  return showHour ? `${h}:${m}:${s}` : `${m}:${s}`
}
