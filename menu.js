var menu = document.getElementById("menu");
var num = 0;
var zoombg = document.getElementById("zoom");
var bgbg = document.getElementById("bg");

document.getElementById("Open").addEventListener("click", function(){
	menu.style.left ="0px";
});

document.getElementById("Close").addEventListener("click", function(){
	menu.style.left ="-110px";
});

document.getElementById("Reset").addEventListener("click", function(){
	document.getElementById("bg").style.backgroundImage = "none";
});

document.getElementById("ShowApp").addEventListener("click", function(){
		document.getElementById("app1").style.display = "block";
});

document.getElementById("HideApp").addEventListener("click", function(){
		document.getElementById("app1").style.display = "none";
});
