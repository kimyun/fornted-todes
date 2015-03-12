//start...
//console.log("hello,world")

function getDom(id){
	return document.getElementById(id);
};

//var text = document.getElementById('todostring');
var textField = getDom('todostring');
var form = document.getElementById('todoform');

textField.addEventListener('keyup', function(event){
	//console.log(event);
	//console.log(text, text.value);
	if(event.keyCode === 13){
		console.log(textField.value);

		var newtodo = textField.value;
		textField.value="";
		var listDom = getDom('todoList');

		listDom.innerHTML += '\
        <li>\
	        <button class="delete">×</button>\
	        <input type="checkbox" class="toggle-checked">\
	        <span class="text">'+ newtodo +'</span>\
   		 </li>\
		';
	}
});
