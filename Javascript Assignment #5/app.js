
let operater  = prompt ("Enter Your operater ( +  - * / % )")
 let num1  =  +prompt ("Enter Your Number 1")
 let num2 = +prompt("Enter Your Number 2")
let add = num1 + num2
let subract = num1 - num2
let multiply = num1 * num2
let divide = num1 / num2
let modulus = num1 % num2
  //Assignment (5) #part 1
if(operater == "+"){
    document.write( " <b> Sum of"+" "+ num1 +"and"+ num2 +" is" +add)
    "<br>"
}
//Assignment (5) #part 2
else if(operater == "-"){
    document.write("Subract of"+" "+ num1 +"and"+ num2 +" is" +subract)
    "<br>"
}
else if(operater == "*"){
    document.write("multiply of"+" "+ num1 +"and"+ num2 +" is" +multiply)
    "<br>"
}
else if (operater =="/"){
    document.write("divide of"+" "+ num1 +"and"+ num2 +" is" +divide)
    "<br>"
}
else if (operater == "%"){
    document.write("Reminder of"+" "+ num1 +"and"+ num2 +" is" +modulus)

}
else{
    alert("Please Enter Correct operater")
}
document.write("<br>")

// Assignment (5) #part 3
document.write("<br>")
let random =
document.write(" <b> Value after Variable declaration is" + "Undefined")
document.write("<br>")
let initial = +prompt("Enter Your Number 3")
document.write("Initial Value is"+ initial)
document.write("<br>")
let variabelIncrease = ++initial
document.write("Value after increament is"+variabelIncrease)
document.write("<br>")
let add13 = 13 + variabelIncrease
document.write("Value after addition is"+add13)
document.write("<br>")
let variableDecrement = --add13
document.write("Value after decrement is "+variableDecrement)
document.write("<br>")
let Reminder = (add13%initial)
document.write("The Reminder is:"+Reminder);

//Assignment (5) #part 4
document.write("<br>")
let totalcost = 600
let ticket =prompt("Please Enter Your Ticket Quantity")
let total = totalcost*ticket
document.write("Total Cost to buy ticket Movie is"+total+"PKR")
document.write("<br>")

//Assignment (5) #part 5
let table = +prompt("Enter Your Table Number")
document.write("<br>")
document.write("<br>")
document.write("Table of"+" "+table)
document.write("<br>")
document.write(table+" "+"x"+" "+"1"+"="+table*1)
document.write("<br>")
document.write(table+" "+"x"+" "+"2"+"="+table*2)
document.write("<br>")
document.write(table+" "+"x"+" "+"3"+"="+table*3)
document.write("<br>")
document.write(table+" "+"x"+" "+"4"+"="+table*4)
document.write("<br>")
document.write(table+" "+"x"+" "+"5"+"="+table*5)
document.write("<br>")
document.write(table+" "+"x"+" "+"6"+"="+table*6)
document.write("<br>")
document.write(table+" "+"x"+" "+"7"+"="+table*7)
document.write("<br>")
document.write(table+" "+"x"+" "+"8"+"="+table*8)
document.write("<br>")
document.write(table+" "+"x"+" "+"9"+"="+table*9)
document.write("<br>")
document.write(table+" "+"x"+" "+"10"+"="+table*10)

//Assignment (5) #part 6
 let celsiusTemprature = +prompt("Enter Your celsius Temprature")
 let fahrenhitTemprature = +prompt("Enter Your fahrenhit Temprature")
 let conversionC = ((celsiusTemprature*9/5)+32)
 let conversionF = ((fahrenhitTemprature-32)*5/9)
 document.write("<br>")
 document.write("<br>")
 document.write(celsiusTemprature+"<sup>o</sup>"+" "+"C"+" "+"is"+conversionC+" "+"<sup>o</sup>"+"F-")
 document.write("<br>")
 document.write(fahrenhitTemprature+"<sup>o</sup>"+" "+"F"+" "+"is"+conversionF+" "+"<sup>o</sup>"+"C-")
 document.write("<br>")

//  Assignment (5) #part 7
document.write("<br>")
document.write(" <b> <h1>Shopping Cart</h1></b>")
document.write("<br>")
document.write("<br>")
let item1Price = 650
let item2Price = 100
let shippingCharges = 100
document.write("Price of Item1 is "+item1Price)
document.write("<br>")
let quantity = +prompt("Enter Your Quantity for Item1")
document.write("Quantity of Item1 is"+quantity)
document.write("<br>")
document.write("Price of Item2 is"+item2Price)
document.write("<br>")
let quantity2 = +prompt("Enter your Quantity for Item2")
document.write("Quantity of Item2 is"+quantity2)
document.write("<br>")
document.write("Shipping Charging"+shippingCharges)
document.write("<br>")
let totalItem = ((quantity*item1Price+quantity2*item2Price+shippingCharges))
document.write("<br>")
document.write("Total Cost of Your Order is"+totalItem)

// Assignment (5) #part 8
document.write("<br>")
document.write("<b> <h1>Marks Sheet</b></h1>")
document.write("<br>")
let Group = prompt("Enter your Group Name (Commerce),(Arts),(Pre-Engenering)")
let totalMarks = 1100
let obtainMarks =prompt("Enter Your Obtain Marks")
let percentage = obtainMarks/1100*100
document.write("Your Group Name is"+Group)
document.write("<br>")
document.write("Total Marks:"+totalMarks)
document.write("<br>")
document.write("Marks Obtained:"+obtainMarks)
document.write("<br>")
document.write(" Your Percentage:"+percentage+"%")
document.write("<br>")
//  Assignment (5) #part 9
document.write("<br>")
document.write("<b><h1>Currency To PKR</h1></b>")
document.write("<br>")
let dollarCurrency = 285.36
let saudiRiyal = 76.08
let dollar =prompt("Eneter Your Dollar Currency")
let riyal =prompt("Enter Your Riyal Currency")
document.write("Total Currency Dollar To PKR is ="+dollarCurrency*dollar)
document.write("<br>")
document.write("Total Currency Riyal To PKR is ="+saudiRiyal*riyal)

// Assignment (5) #part 10
document.write("<br>")
document.write("<b><h1>Age Calculator</b></h1>")
document.write("<br>")
let currentYear = prompt("Enter The Current Year")
let dateOfbirth = prompt("Enter Your Date of Birth")
document.write("Current Year:"+currentYear)
document.write("<br>")
document.write("Birth Year:"+dateOfbirth)
document.write("<br>")
document.write ( "Your Age is: " + (currentYear - dateOfbirth))

// Assignment (5) #part 10
document.write("<br>")
document.write("<b><h1> The LifeTime Supply Calculator</h1><b>")
document.write("<br>")
let favouraiteSnack = prompt("Enter your favouraite Snacke")
let currentAge = prompt("Enter Your Current Age")
let EstimatedAge = prompt("Enter Your Estimated Maximum Age")
let AmountOfsnacks = prompt("Enter Your Amount of snacks per day")
document.write("Favouraite Snacke is:"+favouraiteSnack)
document.write("<br>")
document.write("Current Age is:"+currentAge)
document.write("<br>")
document.write("Estimated Maximum Age is:"+EstimatedAge)
document.write("<br>")
document.write("Amount of Snacks Per Day is:"+AmountOfsnacks)
document.write("<br>")
document.write("You Will Need"+(EstimatedAge-currentAge)*AmountOfsnacks+favouraiteSnack+
"To last your until the Rip old Age of"+" "+EstimatedAge);
// Assignment (5) #Has been Completed



