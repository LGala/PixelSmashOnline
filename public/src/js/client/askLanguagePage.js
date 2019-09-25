var askLanguagePage = {

	attributes : {
		
		gameLogo : document.getElementById("gameLogo"),
		flagsImgs : document.getElementsByClassName("flags"),
		flagDiv : document.getElementById("flag"),
	},

	upload : function(){
		var attr = this.attributes;

		setListeners("click", attr.flagsImgs, function(){

			localStorage.setItem("lang", this.id);

			destroy([attr.gameLogo, attr.flagsImgs[0], attr.flagsImgs[1]]);

			askNamePage.upload();
		});
	},
}