class Drag {
	constructor(obj, title) {
	    this.obj = obj;
	    this.title = title ? this.obj.querySelector(title) : obj;
		this.bindEvents()
	}
	bindEvents () {
		var _this = this;
		this.title.onmousedown = function (e) {
			e = e || window.event;
			var disX = e.offsetX,
				disY = e.offsetY;
			document.onmousemove = function (e) {
				var _top = e.clientY - disY,
					_left = e.clientX - disX;
				_this.move(_top, _left);
			}
			document.onmouseup = function () {
				document.onmousemove = null;
			}
			return false;
		}
	}
	move(_top , _left){
		if(_left < 0) _left = 0;
		if(_top < 0) _top = 0;
		if(_left > tools.getBody().width - this.obj.offsetWidth) _left = tools.getBody().width - this.obj.offsetWidth;
		if(_top > tools.getBody().height - this.obj.offsetHeight) _top = tools.getBody().height - this.obj.offsetHeight;
		tools.setStyle(this.obj, {
			left : _left + "px",
			top : _top + "px"
		})
	}
}