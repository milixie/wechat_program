function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatRecordTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
  var h = parseInt(time / 3600)
  time = time % 3600
  var m = parseInt(time / 60)
  var s = time % 60

  return [h, m, s].map(function(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

// 限制字数，参数 输入的字符串、限制的字数
function limitWord(word, n) {
  if (word.length > n) {
    return false
  }
  return true
}

module.exports = {
  formatTime: formatTime,
  formatRecordTime: formatRecordTime,
  limitWord: limitWord
}
