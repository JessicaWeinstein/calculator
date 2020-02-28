//var database = [
//	{name: "oggi", password: '1234'},
//	{name: 'spas', password: "2345"},
//	{name: 'boro', password: '3456'}
//]


var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var result = document.getElementById("result");
var equals = document.getElementById("equals");


// add.addEventListener("click", function () {
//     // 
//     result.innerHTML = (parseInt(number1.value) + parseInt(number2.value))
// })

var ButtonClicks;
add.addEventListener("click", function () {
	ButtonClicks = "+"})

subtract.addEventListener("click", function () {
	ButtonClicks = "-"})

multiply.addEventListener("click", function () {
	ButtonClicks = "x"})

divide.addEventListener("click", function () {
	ButtonClicks = "/"})

equals.addEventListener("click", function () {
	// console.log(2,3)

	if(ButtonClicks == "+") {
		result.innerHTML = (parseInt(number1.value) + parseInt(number2.value))
	} else if (ButtonClicks == "-")
    {
		result.innerHTML = (parseInt(number1.value) - parseInt(number2.value))
	} else if (ButtonClicks == "x") 
    {
        result.innerHTML = (parseInt(number1.value) * parseInt(number2.value))
	} else if (ButtonClicks == "/") 
    {
        result.innerHTML = (parseInt(number1.value) / parseInt(number2.value))
	}
})








//result.addEventListener("click", function () {
//	// for(var i = 0; i < database.length; i++) {
//	// 	if(naming.value == database[i].name && password.value == database[i].password){
//	// 	alert("Welcome back " + database[i].name)
//	// 	} else {
//	// 		console.log("you are not an user")
//	// 	}
//	// }
//
//	console.log( parseInt(naming.value) + parseInt(password.value))
//	
//})


//function add(x,y){
//    console.log (x+y)   
//}
//
//function subtract(x,y){
//    console.log (x-y)   
//}
//
//function multiply(x,y){
//    console.log (x,y)   
//}
//
//function divide(x,y){
//    console.log (x/y)   
//}