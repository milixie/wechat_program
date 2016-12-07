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

// 生成随机字符串
function randomString() {
  // return Math.random().toString(32).substring(5)

  var random = ''

  for (var i = 0 ; i < 5; i++) {
    random += Math.random().toString(32).substr(4,6)
  }
  random += Math.random().toString(32).substr(5, 2)
  return random
}

// post 请求中： "Content-Type": "application/x-www-form-urlencoded" 或者将"Content-Type"写成小写："content-type"
// get 请求中：'Content-Type': 'application/json'

// post 请求将 object 的 data 传递给后端时 post 不成功，需要使用如下的方法，将 json 格式转换一下就可以了
function json2Form(json) {  
  var str = [];  
  for(var p in json){  
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));  
  }  
  return str.join("&");  
}

module.exports = {
  formatTime: formatTime,
  formatRecordTime: formatRecordTime,
  limitWord: limitWord,
  randomString: randomString,
  json2Form: json2Form
}
