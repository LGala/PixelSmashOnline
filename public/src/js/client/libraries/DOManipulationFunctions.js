function setListeners(event, elements, callback){
	for(let element of elements)
		element.addEventListener(event, callback);
}

function create(appender, properties){
	let element = document.createElement("input");

	element.type = properties.type;
	element.id = properties.id;
	element.value = properties.value;

	appender.appendChild(element);

	return element;
}

function destroy(elements){
	for(let element of elements)
		element.parentNode.removeChild(element);	
}