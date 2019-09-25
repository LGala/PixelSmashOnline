window.onload = function(){

	var blockBodyResize = function(){
		const height = document.body.scrollHeight;
		const width = document.body.scrollWidth;

		window.onresize = function(){
			document.body.style.height = "300px";
			document.body.style.width = "300px";
		}
	}

	// START FIRST PAGE 
	askLanguagePage.upload();
}


