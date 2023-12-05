// Javascript Assignment(8) #part 1
let character =prompt("Enter a character")

if (character >= 60 && character <= 90) {
    alert("The input"+character+" is an uppercase letter.");
}
else if (character >= 97 && character <= 122) {
    alert("The input"+character+" is an lowercase letter.");
} else {
    alert("The input"+character+ "is neither a number not a letter.");
}

// Javascript Assignment(8) #part 2
let firstInteger =prompt("Enter The first integer")
let secondInteger =prompt("Enter The Second integer")
if(firstInteger>secondInteger){
    alert("The larger Integer is firstinteger"+" "+firstInteger)
}
else if(secondInteger>firstInteger){
    alert("The larger Integer is SecondInteger"+" "+secondInteger)
}
else{
    alert("Both Intger is Equal")
};

// Javascript Assignment(8) #part 3
alert("I'm check what is the number are negative and positive")
let number =prompt("Enter The Number")
if(number>0){
    alert("This Number is Positive")
}
else if (number<=0){
    alert("This number is negative")
}
else{
    alert("you are not enter the number\nTherefore, I cannot tell you which number is negative and which is positive ")
};

// Javascript Assignment(8) #part 4
let chr =prompt("Enter a character")
if(chr==="a" || "e" || "i" || "o" || "u"){
    alert("This is a Vowel Character")
} 
else{ 
    alert("This is not a Vowel Character")
    };

// Javascript Assignment(8) #part 5
alert("Enter The correct pasword Hint: fahad1234")
let correctPasword = "fahad1234"
let user =prompt("Plese Enter Your pasword fahad1234")
let again =prompt("please Enter The pasword again fahad1234")
if(user===correctPasword && again===correctPasword){
alert("Your pasword is correct")
}
else if(user===correctPasword){
    alert("Your pasword is Incorrect!")
}

else if(again===correctPasword){
    alert("Your pasword is Incorrect!")
}
else{
    alert("Please Enter Your  pasword fahad1234")
};

// Javascript Assignment(8) #part 6
let greeting;
let hour = 13;
if(hour<18){
    greeting="Good Day"
}
else{
    alert("Good Evening")
}
alert(greeting)

// Javascript Assignment(8) #part 7
let time = prompt("Write here whatever time is happening now! like this:19:00")
if(time>=0 && time<1200){
alert("Good Morning")
}
else if(time==1200 && time<1700){
    alert("Good afternoon")
}
else if(time==1700 && time<2100){
    alert("Good Evening")
}
else if(time >= 1200 && time <= 2359){
    alert("Good Night")
};