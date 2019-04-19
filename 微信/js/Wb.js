class Wb{
	constructor(btn) {
	    this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents()
	}
	bindEvents(){
		this.btn.onclick = this.btnClink.bind(this);
		this.container.onclick = this.containerClick.bind(this)
	}
	btnClink(){
		this.container.innerHTML = '<h4>微博</h4>'+
		'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
		'<label class = "userName">用户名：<input id="userName" type="text" ></label>'+
		'<p><textarea rows="13" cols="70" id="tarea"></textarea></p>'+
		'<button id="wbBtn" class="wbBtn" type="button">发布</button>';
		tools.showCenter(this.container);
		this.modal = document.createElement("div");
		this.modal.className = "modal";
		document.body.appendChild(this.modal);
		new Drag(this.container, "h4");
	}
	containerClick (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		switch(target.id) {
			case "wbBtn":
				this.userName = document.querySelector("#userName").value;
				let tarea = document.querySelector("#tarea").value,
				 data = new Date().toLocaleString();
				document.body.innerHTML = `${this.userName}<br>${tarea}<br>${data}`;
				this.timeout()
			case "closeBtn" :
				this.container.style.display = "none";
				this.modal.remove();
		}	
	}
	timeout(){
		document.body.oncontextmenu = e => {
			console.log(1)
			e = e || event;
			e.preventDefault ?e.preventDefault() : window.returnValue = false;
			this.div1 = document.createElement("div");
			this.div1.className = "ac";
			this.div1.innerHTML ="<p>复制<p><p>粘贴<p><p>撤回<p>";
			document.body.appendChild(this.div1)
			document.onclick = function(){
				document.body.remove();
			}
		}
	}
}