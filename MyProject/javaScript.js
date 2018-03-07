let randomNumber = 0
let number = 0
let counter = 0
const checkButton = document.querySelector("#check")
const tryAgainButton = document.querySelector("#tryAgainButton")
const numberView = document.querySelector("#numberView")
const calculator = document.querySelector(".calculator")
const robotImg = document.querySelector("#robot")
const bubble = document.querySelector(".bubble")
const leftBar = document.querySelector(".leftBar")
const rightBar = document.querySelector(".rightBar")
const greaterContainer = document.querySelector(".greaterContainer")
const lowerContainer = document.querySelector(".lowerContainer")
const inf = document.querySelector(".information")

checkButton.disabled = true 
numberView.disabled = true
tryAgainButton.style.display = "none"

inf.addEventListener("click",(e) =>{
	if(e.target && e.target.nodeName == "BUTTON"){
		e.target.style.background = "#00FF66"
		e.target.style.opacity = "1"
	}
})

checkButton.addEventListener("click",isInteger)
tryAgainButton.addEventListener("click",start)
calculator.addEventListener("click",(e) =>{
		//get value of children div class - calculator, without e.target.nodeName it return undefined when clicked on blank space
		if(e.target && e.target.nodeName == "BUTTON"){
			//e.target.style.display = "none" fajny bajer wykorzystam w innej grze 
			number = e.target.value
		 numberView.value = number
		}
	})
numberView.addEventListener("keypress",function(e){
	const key = e.which
	if(key === 13){
		isInteger()
	}
})
/*===BRZYDKO============================================================
może jedna funkcja przyjmująca dwa parametry id buttona i czynnik*/
document.querySelector("#rangeButton1").addEventListener("click",() => { 
	randomNumber = Math.floor(Math.random()*10) 
	console.log(randomNumber)
startMesseage.innerHTML = 'enter integer or choose the number and press enter or click "check"'
startGame()})

document.querySelector("#rangeButton2").addEventListener("click",() => { 
	randomNumber = Math.floor(Math.random()*100) 
	console.log(randomNumber)
startMesseage.innerHTML = 'enter integer or choose the number and press enter or click "check"' 
startGame()})

document.querySelector("#rangeButton3").addEventListener("click",() => { 
	randomNumber = Math.floor(Math.random()*1000) 
	console.log(randomNumber)
startMesseage.innerHTML = 'enter integer or choose the number and press enter or click "check"'
startGame()})
/*===BRZYDKO============================================================*/

function isInteger(){
	const pattern = /^[0-9]*$/
	const startMesseage = document.querySelector("#startMesseage")
	number = numberView.value

	if(number === ""){
		/*robotImg.innerHTML = '<img src="dont trick robot.jpg" style="width: 150px; height: 150px" />'*/
		bubble.innerHTML = "Don't trick with me, you didn't write anything"
		startMesseage.innerHTML = "you've not entered any value".fontcolor("red")
		
	}else if(!number.match(pattern)){
		bubble.innerHTML = "Don't cheat! I chose number not letter"
		startMesseage.innerHTML = "youre value is not a number,pls enter properly number".fontcolor("red")
	}else{
		gameControl()
	}
}

function gameControl(){ 
	counter += 1
	leftTry = 3 - counter
	send()
	
	if(number == randomNumber){
		//"<button type = 'button'>try again</button>"
		bubble.innerHTML = "Congrats, you win".fontcolor("green")+"</br>" 
			robotImg.innerHTML = '<img src="robot-01.png" style="width: 150px; height: 150px" />'
			endGame(startMesseage)
		}else{
		startMesseage.innerHTML = "not this time but you have "+leftTry+" more try."
	}	

	if(counter === 3 && number != randomNumber){
		bubble.innerHTML = "Unfortunately, you've over the try :( </br>"
		endGame(startMesseage)}
}

function generate(){
	randomNumber = Math.floor(Math.random()*10)
	console.log(randomNumber)
	startGame()
}

function start(){
	leftBar.style.display = "none"
	lowerContainer.style.display = "none"
	greaterContainer.style.display = "none"
	rightBar.style.display = "inline-block"
	rightBar.style.width = "100%"
	
	robotImg.innerHTML = '<img src="robot-02.jpg" style="width: 150px; height: 150px" />'
	bubble.innerHTML = "Once again? great, so chose the range"
	
	inf.childNodes.forEach((index) =>{
		if(index.nodeName == "BUTTON"){
			index.disabled = false
			index.style.opacity = "1"
			index.style.background = "grey"
		}
	})
}

function startGame(){
	counter = 0
	numberView.value = ""
	calculator.style.display = "block"
	tryAgainButton.style.display = "none"
	checkButton.disabled = false
 	numberView.disabled = false
 	document.querySelector("#GreaterThenContainer").innerHTML = ""
	document.querySelector("#LowerThenContainer").innerHTML = ""
	lowerContainer.style.display = "block"
	greaterContainer.style.display = "block"
	leftBar.style.display = "block"
	leftBar.style.width = "50%"
	rightBar.style.width = "50%"
	bubble.innerHTML = "enter number"

	inf.childNodes.forEach((index) =>{
		if(index.nodeName == "BUTTON"){
			index.disabled = true
			index.style.opacity = "0.2"
		}
	})
}
function endGame(startMesseage){
		startMesseage.innerHTML = ""	
		startMesseage.appendChild(tryAgainButton)
		tryAgainButton.style.display = "inline-block"
		checkButton.disabled = true 
		numberView.disabled = true 
		calculator.style.display = "none"
		rightBar.style.display = "none"
		leftBar.style.width = "100%"
}

function send(){
	const GreaterThenContainer = document.querySelector("#GreaterThenContainer")
	const LowerThenContainer = document.querySelector("#LowerThenContainer")
	if(number < randomNumber){
		/*robotImg.innerHTML = '<img src="greaterThenRobot.png" style="width: 150px; height: 150px" />'*/
		bubble.innerHTML = "so close, but the number is greater"
		GreaterThenContainer.innerHTML = GreaterThenContainer.innerHTML + number + "</br>"
	}else{
		/*robotImg.innerHTML = '<img src="greaterThenRobot.png" style="width: 150px; height: 150px" />'*/
		bubble.innerHTML = "nice try, but the number is lower"
		LowerThenContainer.innerHTML = LowerThenContainer.innerHTML + number + "</br>"
	}
}
/*
funkcja dwa argumenty
delete generate button
display greater number then 9 when using buttons
sss
new comment in bubble: don't trick with me there is no value, don't cheat etc.
*/
