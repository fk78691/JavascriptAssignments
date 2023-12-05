// javascript Assignment(7) #part 1
let city =prompt("Enter Your City Name please")
if(city==="karachi"){
    alert("Welcome to city of light")
}
else{
    alert("Please Enter Correct City Name")
}

// javascript Assignment(7) #part 2
let gnder =prompt("Enter Your Gender")
if(gnder==="male"){
    alert("Good Morning Sir")
}
else if(gnder==="female"){
    alert("Good Morning Ma'm")
}
else{
    alert("Please Enter Your Correct Gender")
};

// javascript Assignment(7) #part 3
let signal =prompt("Enter the signal name please")
if(signal==="red"){
    alert("Must Stop")
}
else if(signal==="yellow"){
    alert("Ready to move")
}
else if(signal==="green"){
    alert("Move Now")
};

// javascript Assignment(7) #part 4
let fuel =prompt("Enter the remaning fuel in your car")
if(fuel<="0.25"){
    alert("Please Refill the fuel in your car")
}
else{
    alert("Wow! Your car fuel is GOOD!")
};

// javascript Assignment(7) #part 6
let total ="300"
let subject1 =+prompt("Enter the english marks")
let subject2 =+prompt("Enter the urdu  marks")
let subject3 =+prompt("Enter the math marks")
let marks = subject1 + subject2 + subject3
let percentage = marks/total*100

document.write("<b>Marks Sheet</b>")
document.write("<br>")
document.write("<br>")
document.write("<b>Total Marks:</b>"+total)
document.write("<br>")
document.write("<b>Marks Obtained:</b>"+marks)
document.write("<br>")
document.write("<b>Percentage:</b>"+percentage+"%")
document.write("<br>")
if(percentage>80){
    document.write("<b>Grade:</b>"+" "+"A-one")
    document.write("<br>")
    document.write("<b>Remarks:</b>"+" "+"Very-Excellent")
}
else if(percentage>70){
    document.write("<b>Grade:</b>"+" "+"A")
    document.write("<br>")
    document.write("<b>Remarks:</b>"+" "+"Excellent")
}
else if(percentage>60){
    document.write("<b>Grade:</b>"+" "+"B")
    document.write("<br>")
    document.write("<b>Remarks:</b>"+" "+"Good")
}
else if(percentage>50){
    document.write("<b>Grade:</b>"+" "+"C")
    document.write("<br>")
    document.write("<b>Remarks:</b>"+" "+"And try")
}
else if(percentage>40){
    document.write("<b>Grade:</b>"+" "+"D")
    document.write("<br>")
    document.write("<b>Remarks:"+" "+"Poor")
}
else if(percentage>30){
    document.write("<b>Grade:</b>"+" "+"E")
    document.write("<br>")
    document.write("<b>Remarks:"+" "+"Very-Poor")
}
else if(percentage<=20){
    document.write("<b>Grade:</b>"+" "+"F")
    document.write("<br>")
    document.write("<b>Remarks:</b>"+" "+"You Are Fail")
};

// javascript Assignment(7) #part 7
let game= prompt("Enter The Secret Number")
if(game===1 || game===2 ||game===3 || game===4 || game===5 || game===6){
    alert("Bingo!Correct Answer")
}
else  if(game>10){
    alert("Close enough to the correct answer")
}

// javascript Assignment(7) #part 8
var divisible =prompt("Check Your Number for divisible by 3") 
if(divisible == 6 ||divisible == 9 ||divisible == 12||divisible == 15||divisible == 18||divisible == 21||divisible == 24||divisible == 27||divisible == 30){
    alert("this number is divisible by 3")
}else{
    alert("this number is not divisible by 3")
}

// javascript Assignment(7) #part 9
let number =prompt("Enter the number")
if(number===1 || number===3 || number===5 || number===7 || number===9 || number===10){
    alert("This is a Even Number")
}
else if(number===2 || number===4 || number===6 || number===8 || number===10){
    alert("This is Odd number")
}

// javascript Assignment(7) #part 10
let temprature =prompt("Enter Your city temprature")
if(temprature>40){
    alert("It is Too Hot outside")
}
else if(temprature>30){
    alert("The Weather today is normal")
}
else if(temprature>20){
    alert("Today's Weather is cool")
}
else if(temprature>10){
    alert("OMG! Today's Weather is so cool")
}
else{
    alert("Please Enter correct weather temprature")
};

// javascript Assignment(7) #part 11
let oprater = prompt("Eneter The Operator Like This(+ - * / %)")
let number1 = +prompt("Enter The Nmber 1")
let number2 = +prompt("Enter The Number 2")
let add = number1 + number2
let minus = number1 - number2
if(oprater =="+"){
    alert("This Number is add:"+add)
}
else if(oprater == "-"){
    alert("This Number is minus:"+minus)
}
else if(oprater == "*"){
    alert("This Number is multiply:"+number1*number2)
}
else if(oprater == "/"){
    alert("This Number is divide"+number1/number2)
}
else if(oprater == "%"){
    alert("This Number is modulus:"+number1%number2)
}
else{
    alert("Enter The correct number for the operator")
}