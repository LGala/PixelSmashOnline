var askNamePage = {

	attributes : {

		okButton : null,
		nameBox : null,

		flagDiv : document.getElementById("flag"),
	},

	upload : function(){
		var attr = this.attributes;
		let lang = localStorage.getItem("lang");

		attr.okButton = create(attr.flagDiv, {type:"button", id:"okButton", value:"OK"});
		attr.nameBox = create(attr.flagDiv, {type:"text", id:"nameBox", value:""});
		attr.nameBox.placeholder = lang === "en" ? "insert your name" : "inserisci il tuo nome";

		setListeners("click", [attr.okButton], function(){
			if(askNamePage.isNameFree())
				lobbyPage.upload();
			else{
				attr.nameBox.value = "";
				attr.nameBox.placeholder = lang === "en" ? "name has already been taken" : "il nome e' gia' stato preso";
			}
		});		
	},

	isNameFree : function(){
		let xhr = new XMLHttpRequest();

		xhr.open("POST", "https://pixelsmashonline.herokuapp.com/checkName");
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({"name":nameBox.value}));

		return false;
	},
}