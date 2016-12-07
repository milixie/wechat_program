function imgSize(e){
	var imgSize = {}

	var originW = e.detail.width
	var originH = e.detail.height
	var originK = originH / originW

	var winW = 0
	var winH = 0
	var winK = 0

	wx.getSystemInfo({
		success: function(res){
			winW = res.windowWidth
			winH = res.windowHeight
			winK = winH / winW

			if (originK < winK) {
				imgSize.imgW = winW
				imgSize.imgH = winW * originK
			} else {
				imgSize.imgW = winH / originK
				imgSize.imgH = winH
			}
		},
		fail: function(){
			console.log('获取屏幕信息失败！！！')
		}
	})

	return imgSize
}

module.exports = {
	imgSize: imgSize
}