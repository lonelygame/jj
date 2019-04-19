var tools = {
	
	
	
	setStyle : function (obj, attrObj) {
		for(var key in attrObj) {
			obj.style[key] = attrObj[key];
		}
	},
	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	showCenter : function (obj) {
		obj.style.display = "block";
		let _this = this;
		function center () {
			var _top = (_this.getBody().height - obj.offsetHeight) / 2;
			var _left = (_this.getBody().width - obj.offsetWidth) / 2;
			_this.setStyle(obj, {
				position :"absolute",
				left : _left + "px",
				top : _top + "px"
			});
		};
		center();
		window.onresize = center;
	},
	
	linearMove : function (obj, attr, end, time) {
		clearInterval(obj.timer);
		var start = parseInt(this.getStyle(obj, attr));
		var distance = end - start;
		var steps = parseInt(time / 20);
		var speed = distance / steps;
		obj.timer = setInterval(function () {
			
		start += speed;
		obj.style[attr] = start + "px";
			if(Math.abs(start - end) < Math.abs(speed)) {
				clearInterval(obj.timer);
				obj.style[attr] = end + "px";
			}
		},20);
	}
}