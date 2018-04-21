'use strict';

var auto;

function Struct(){
	let imgs = document.getElementsByClassName('slider');
	for(let slider of imgs){
		let butt = new Array(2);
		let visible = document.createElement("div");
		let allImgs = document.createElement("div");
		let sChild = slider.children;
		let sCLenght = slider.children.length;

		for(let i = 0; i < butt.length; i++){
			butt[i] = document.createElement("button");
		}
		visible.classList.add('visible');
		allImgs.classList.add('all-imgs');
		butt[0].classList.add('btnpass','prev');
		butt[1].classList.add('btnpass','next');

		for(let i = 0; i < sCLenght; i++){
			sChild[0].classList.add('rtimg');			
			allImgs.appendChild(sChild[0]);
		}
		visible.appendChild(butt[0]);
		visible.appendChild(allImgs);
		visible.appendChild(butt[1]);
		slider.appendChild(visible);
	}
	GearSecond();
}

function SwapPrev(){
	this.disabled = true;
	let that = this;
	let all = this.nextSibling;
	all.style.transition = "none";
	let vis = this.parentNode;
	let primeiro = this.nextSibling.firstChild.offsetWidth+5;
	let swap = Math.floor(vis.offsetWidth/primeiro);
	all.style.marginLeft = -(swap*primeiro)+"px";
	for(let i = 0; i < swap; i++){
		let last = this.nextSibling.lastChild;
		this.nextSibling.insertBefore(last, this.nextSibling.firstChild);
	}
	setTimeout(function(){
		all.style.transition = "1s";
		setTimeout(function(){
			all.style.marginLeft = "";
		}, 10);
	}, 10);
	setTimeout(function(){
		that.disabled = "";
	}, 900);
}

function SwapNext(){
	this.disabled = true;
	let vis = this.parentNode;
	let primeiro = this.previousSibling.firstChild;
	let swap = Math.floor(vis.offsetWidth/(primeiro.offsetWidth+5));
	primeiro.style.marginLeft = -(swap*(primeiro.offsetWidth+9))+"px";
	let that = this;
	setTimeout(function(){
		for(let i = 0; i < swap; i++){
			let first = that.previousSibling.firstChild;
			that.previousSibling.appendChild(first);
		}
		primeiro.style.marginLeft = "";
		that.disabled = "";
	}, 900);
}

function Auto(){
	var prev = this.firstChild;
	var next = this.lastChild;
	auto = setInterval(function(){
		let primeiro = next.previousSibling.firstChild;
		let swap = 1;
		primeiro.style.marginLeft = -(swap*(primeiro.offsetWidth)+5)+"px";
		setTimeout(function(){
			for(let i = 0; i < swap; i++){
				let first = next.previousSibling.firstChild;
				next.previousSibling.appendChild(first);
			}
			primeiro.style.marginLeft = "";
			// that.disabled = "";
		}, 900);
	}, 2000);
}

function AutoDestroy(){
	clearInterval(auto);
}

function Dragg(){
	dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x;
	dobj.style.top = nn6 ? ty + e.clientY - y : ty + event.clientY - y;
}

function GearSecond(){
	var prev = document.getElementsByClassName('prev');
	var next = document.getElementsByClassName('next');
	var vis = document.getElementsByClassName('visible');
	// var imgs = document.getElementsByClassName('all-imgs');

	// document.getElementById().addEventListener('drag', Dragg));

	Array.from(prev, p => p.addEventListener('click', SwapPrev));
	Array.from(next, n => n.addEventListener('click', SwapNext));

	Array.from(vis, v => v.addEventListener('mouseleave', Auto));
	Array.from(vis, v => v.addEventListener('mouseenter', AutoDestroy));
}

window.addEventListener("DOMContentLoaded", Struct);