var BG11 = document.getElementById("ch1");
var BG22 = document.getElementById("ch2");
var BG33 = document.getElementById("ch3");
var zoombg = document.getElementById("zoom");
var width = 0;
var height = 0;

document.getElementById("BG1").addEventListener("click", function(){
	BG11.style.backgroundImage = "url(imgs/i1.jpg)";
	BG11.style.backgroundPosition = "center center";
	BG11.style.backgroundSize = "cover";
		
	BG22.style.backgroundImage = "url(imgs/i2.jpg)";
	BG22.style.backgroundPosition = "center center";
	BG22.style.backgroundSize = "cover";	
	
	BG33.style.backgroundImage = "url(imgs/i3.jpg)";
	BG33.style.backgroundPosition = "center center";
	BG33.style.backgroundSize = "cover";
	
	BG11.addEventListener("mouseenter", function(){
		zoombg.style.backgroundImage = "url(imgs/i1.jpg)";
	});
	BG22.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i2.jpg)";
	});	BG22.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i2.jpg)";
	});
	BG33.addEventListener("mouseenter", function(){
		zoombg.style.backgroundImage = "url(imgs/i3.jpg)";
	});
});

document.getElementById("BG2").addEventListener("click", function(){
	BG11.style.backgroundImage = "url(imgs/i4.jpg)";
	BG11.style.backgroundPosition = "center center";
	BG11.style.backgroundSize = "cover";
	
	BG22.style.backgroundImage = "url(imgs/i5.jpg)";
	BG22.style.backgroundPosition = "center center";
	BG22.style.backgroundSize = "cover";	
	
	BG33.style.backgroundImage = "url(imgs/i6.jpg)";
	BG33.style.backgroundPosition = "center center";
	BG33.style.backgroundSize = "cover";
	
	BG11.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i4.jpg)";
	});	
	
	BG22.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i5.jpg)";
	});
	BG33.addEventListener("mouseenter", function(){
		zoombg.style.backgroundImage = "url(imgs/i6.jpg)";
	});	
});

document.getElementById("BG3").addEventListener("click", function(){
	
	BG11.style.backgroundImage = "url(imgs/i7.jpg)";
	BG11.style.backgroundPosition = "center center";
	BG11.style.backgroundSize = "cover";
	
	BG22.style.backgroundImage = "url(imgs/i8.jpg)";
	BG22.style.backgroundPosition = "center center";
	BG22.style.backgroundSize = "cover";	
	
	BG33.style.backgroundImage = "url(imgs/i9.jpg)";
	BG33.style.backgroundPosition = "center center";
	BG33.style.backgroundSize = "cover";
	
	BG11.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i7.jpg)";
	});	
	
	BG22.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i8.jpg)";
	});
	BG33.addEventListener("mouseenter", function(){
		zoombg.style.backgroundImage = "url(imgs/i9.jpg)";
	});		
});

document.getElementById("BG4").addEventListener("click", function(){
	
	BG11.style.backgroundImage = "url(imgs/i10.jpg)";
	BG11.style.backgroundPosition = "center center";
	BG11.style.backgroundSize = "cover";
	
	BG22.style.backgroundImage = "url(imgs/i11.jpg)";
	BG22.style.backgroundPosition = "center center";
	BG22.style.backgroundSize = "cover";	
	
	BG33.style.backgroundImage = "url(imgs/i12.jpg)";
	BG33.style.backgroundPosition = "center center";
	BG33.style.backgroundSize = "cover";
	
	BG11.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i10.jpg)";
	});	
	
	BG22.addEventListener("mouseenter", function(){
	zoombg.style.backgroundImage = "url(imgs/i11.jpg)";
	});
	BG33.addEventListener("mouseenter", function(){
		zoombg.style.backgroundImage = "url(imgs/i12.jpg)";
	});	
});

document.getElementById("zoom").addEventListener("click", function(){
	document.getElementById("zoomcontrols").style.display = "block";
});

document.getElementById("plus").addEventListener("click", function(){
	height += 7;
	zoombg.style.height = height + "%";
	width += 10;
	zoombg.style.width = width + "%";
});

document.getElementById("minus").addEventListener("click", function(){
	height -= 7;
	zoombg.style.height = height + "%";
	width -= 10;
	zoombg.style.width = width + "%";
});

