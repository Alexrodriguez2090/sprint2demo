function hello() {
	var name = document.getElementById("name").value;
	if(document.getElementById("female").checked){
		alert("Hello female person named " + name + ", your feedback has been noted.");
	} else if(document.getElementById("male").checked){
		alert("Hello male person named " + name + ", your feedback has been noted.");
	}
}