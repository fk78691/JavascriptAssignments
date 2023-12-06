// Javascript Assignment(12) #part 1    
document.write("<u><b>Question No 1</b></u>")
document.write("<br><br>")
let number = 3.45214
let roundOff = Math.round(number)
let floor = Math.floor(number)
let ceil = Math.ceil(number)
document.write("<b>Number Value:"+" "+number)
document.write("<br>")
document.write("Round off Value:"+" "+roundOff)
document.write("<br>")
document.write("Floor Value:"+" "+floor)
document.write("<br>")
document.write("Ceil Value:"+" "+ceil+"</b>");
document.write("<br><br>")


// Javascript Assignment(12) #part 2
document.write("<u><b>Question No 2</b></u>")
document.write("<br><br>")
let num =prompt("Enter a negative number let supose (-2.673)")
let toNumber = Number(num)
let roundOff2 = Math.round(toNumber)
let floor2 = Math.floor(toNumber)
let ceil2 = Math.ceil(toNumber)
document.write("<b>Number Value:"+" "+num)
document.write("<br>")
document.write("Round off Value:"+" "+roundOff2)
document.write("<br>")
document.write("Floor Value:"+" "+floor2)
document.write("<br>")
document.write("Ceil Value:"+" "+ceil2+"</b>");document.write("<br><br>")


// Javascript Assignment(12) #part 3
document.write("<u><b>Question No 3</b></u>")
document.write("<br><br>")
let abs = -4
let abslute = Math.abs(abs)
document.write("<b>The abslute Value of:"+abs+" is "+abslute)
document.write("<br><br>")


// Javascript Assignment(12) #part 4
document.write("<u><b>Question No 4</b></u>")
document.write("<br><br>")
let r = Math.floor(Math.random()*6)
let k=  Math.ceil(Math.random()*6)
document.write("random dice value:"+k+"<br>"+"random dice value :"+r)
document.write("<br><br>") 


// Javascript Assignment(12) #part 5
document.write("<u><b>Question No 5</b></u>")
document.write("<br><br>")
let l=  Math.round(Math.random()*10)
if(l>=5){
document.write(l+"<b><br>")
document.write("random coin value is: Heads</b>")
}
else if(l<5){
    document.write(l+"<b><br>")
    document.write("random coin value is: Tails</b>") 
}document.write("<br><br>")


// Javascript Assignment(12) #part 6
document.write("<u><b>Question No 6</b></u>")
document.write("<br><br>")
let randomNumber =Math.floor(Math.random() * 100) + 1
console.log(randomNumber)
document.write("A random number between 1 and 100:"+randomNumber)
document.write("<br><br>")


// Javascript Assignment(12) #part 7
document.write("<u><b>Question No 7</b></u>")
document.write("<br><br>")
let weight =prompt("Enter your weight in kilogram")
let n = parseInt(weight)
let total = n + "Kilograms"
document.write("The weight of user is"+total)
document.write("<br><br>")


// Javascript Assignment(12) #part 7
document.write("<u><b>Question No 7</b></u>")
document.write("<br><br>")
let secret = prompt("Input a number between 1to10")
if(secret<=10){
    alert (" congratulate the user")
    document.write("congratulate the user")
}
else{
    alert("Please enter a number  between  1t10")
    document.write("Please enter a number  between  1t10")
}

// Javascript Assignment(12)Has been completed
