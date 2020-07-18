//var colors=["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 0, 255)"]
var numsquare=6
var colors = getRandomColors(numsquare);
var square=document.querySelectorAll(".square");
var selectedColor=pickColor();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=selectedColor;
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var reset = document.getElementById("reset");
var easy=document.getElementById("easy");
var hard = document.getElementById("hard");

check();

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsquare=3
	colors=getRandomColors(numsquare);
	selectedColor=pickColor();
	for(var i=3 ;i<square.length;i++){
		square[i].style.display="None";
	}
	colordisplay.textContent=selectedColor;
	check();
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numsquare=6
	colors=getRandomColors(numsquare);
	selectedColor=pickColor();
	for(var i=3 ;i<square.length;i++){
		square[i].style.display="block";
	}
	colordisplay.textContent=selectedColor;
	check();

});

reset.addEventListener("click",function(){
	colors=getRandomColors(numsquare);
	for(var i =0;i<square.length;i++){
		square[i].style.backgroundColor=colors[i];
	}
	selectedColor=pickColor();
	colordisplay.textContent=selectedColor;
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	this.textContent="New Colors"
});

function check(){
	for(var i =0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		if(this.style.backgroundColor==selectedColor){
			message.textContent="Correct";
			reset.textContent="Play Again?"
			h1.style.backgroundColor=selectedColor;
			for(var j = 0 ;j<square.length;j++){
				square[j].style.backgroundColor=selectedColor;
			}
		}
		else{
			message.textContent="Try Again";
			this.style.backgroundColor="#232323";
		}
	});
}

}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return(colors[random]);
}

function getRandomColors(num){
	arr=[];
	for(var i =0;i<num;i++){
		arr.push(randomColor());
	}
	return(arr);
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var s = "rgb("+r+", "+g+", "+b+")";
	return(s);
}