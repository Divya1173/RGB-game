var number=6;
var color=generateRandomColor(number);
var s=document.querySelectorAll(".square");
var pickedColor=ran();
var picked=document.querySelector("span");
picked.innerHTML=pickedColor;
var message=document.querySelector("#message");
var h=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	number=3;
	color=generateRandomColor(number);
	pickedColor=ran();
	picked.innerHTML=pickedColor;
	for (var i=0;i<s.length;i++){
		if(color[i]){
			s[i].style.backgroundColor=color[i];
		}
		else{
			s[i].style.display="none";
		}
	}
	h.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
});
hard.addEventListener("click",function() {
	easy.classList.remove("selected");
	hard.classList.add("selected");
	number=6;
	color=generateRandomColor(number);
	pickedColor=ran();
	picked.innerHTML=pickedColor;
	for (var i=0;i<s.length;i++){
		s[i].style.backgroundColor=color[i];
		s[i].style.display="block";
	}
	h.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
});
resetButton.addEventListener("click",function() {
	color=generateRandomColor(number);
	pickedColor=ran();
	picked.innerHTML=pickedColor;
	for(var i=0;i<s.length;i++){
		s[i].style.backgroundColor=color[i];
	}
	h.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
	message.textContent="";
});
for (var i=0;i<s.length;i++){
	s[i].style.backgroundColor=color[i];
	s[i].addEventListener("click",function(){
		var p=this.style.backgroundColor;
		if (p===pickedColor)
		{
			message.textContent="Correct";
			allColor(pickedColor)
			h.style.backgroundColor=pickedColor;
			resetButton.textContent="Play Again";
		}
		else{
            this.style.backgroundColor = "#232323";
            message.textContent="Try again";
		}
	});
}
function allColor(color){
	for (var i=0;i<s.length;i++){
		s[i].style.backgroundColor=color;
	}
}
function ran(){
	var ran=Math.floor(Math.random()*color.length);
	return color[ran];
}
function generateRandomColor(num) {
	var c=[]
	for(var i=0; i<num;i++){
        c.push(rancolor());
	}
	return c;
}
function rancolor() {
	var r=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	"rgb(r ,g ,b)"
	return "rgb(" + r +", "+ g +", "+ b +")";
}