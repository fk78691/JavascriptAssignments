// Javascript Assignment(11) #part 1
let firstName = prompt("Enter your first Name")
let lastName =prompt("Enter Your last Name")
let fullName = firstName + lastName
alert("Your Full Name is:"+" "+fullName)
document.write("<br>")

// Javascript Assignment(11) #part 2
document.write("<b><u>Javascript Assignment(11) #part 2</b></u>")
document.write("<br>")
document.write("<br>")
let model =prompt ("Enter Your favorite mobile brand")
let phone ="My Favorite phone is:"+ model;
let lenght = "Lenght of string is:"+model.length
document.write("<b>"+phone)
document.write("<br>")
document.write(lenght+"</b>")
document.write("<br>")
document.write("<br>")

// Javascript Assignment(11) #part 3
document.write("<b><u>Javascript Assignment(11) #part 3</b></u>")
document.write("<br>")
document.write("<br>")
let text="Pakistani"
document.write("<b> Strings:"+text)
document.write("<br>")
let index =text.indexOf("n")
document.write("Index of 'n':"+index)
document.write("<br>")
document.write("<br>")

// Javascript Assignment(11) #part 4
document.write("<b><u>Javascript Assignment(11) #part 4</b></u>")
document.write("<br>")
document.write("<br>")
let string="Hello World"
document.write("<b> Strings:"+string)
document.write("<br>")
let i =string.lastIndexOf("l")
document.write(" Last Index of 'l':"+i)
document.write("<br>")
document.write("<br></b>")

// Javascript Assignment(11) #part 5
document.write("<b><u>Javascript Assignment(11) #part 5</b></u>")
document.write("<br>")
document.write("<br>")
let find ="Pakistani"
let spl = find.split(" ")
document.write("<b> String:"+find)
let indexof = find.indexOf("i")
document.write("<br>")
document.write("Character at index"+" "+indexof+":"+find[indexof]+"</b>")
document.write("<br>")
document.write("<br>")

// Javascript Assignment(11) #part 6
document.write("<b><u>Javascript Assignment(11) #part 6</b></u>")
document.write("<br>")
document.write("<br>")
let full =firstName.concat(lastName)
document.write("<b>"+full+"</b>")
document.write("<br>")
document.write("<br>")

// Javascript Assignment(11) #part 7
document.write("<b><u>Javascript Assignment(11) #part 7</b></u>")
document.write("<br>")
document.write("<br>")
let city= "Hyderabad"
let city2 = "Islamabad"
let replace = city.replace(city,city2)
document.write("City:"+city);
document.write("<br>")
document.write("Ater Replacment:"+replace+"</b>")
document.write("<br>")
document.write("<br>")

// Javascript Assignment(11) #part 8
document.write("<b><u>Javascript Assignment(11) #part 8</b></u>")
document.write("<br>")
document.write("<br>")
let message ="Ali and Sami are best friends. They play cricket and football togeather"
let replace2 = message.replaceAll("and","&")
document.write("<b>"+message+"</b>")
document.write("<br>")
document.write("<b>After all replacment is</b>:"+replace2);
document.write("<br>")
document.write("<br>")

// Javascript Assignment(11) #part 9
document.write("<b><u>Javascript Assignment(11) #part 9</b></u>")
document.write("<br>")
document.write("<br>")
let s = "472"
let number =Number(s)
document.write("<b>Value:"+s)
document.write("<br>")
document.write("Type:"+typeof(s))
document.write("<br>")
document.write("Value:"+s)
document.write("<br>")
document.write("Type:"+typeof(number)+"</b>")
document.write("<br>")
document.write("<br>")


// Javascript Assignment(11) #part 10
document.write("<b><u>Javascript Assignment(11) #part 10</b></u>")
document.write("<br>")
document.write("<br>")
let userInput =prompt("Enter Your name anything ")
let Upper= userInput.toUpperCase()
document.write("<b>User Input:"+userInput)
document.write("<br>")
document.write("Upper Case:"+Upper+"</b>")
document.write("<br>")
document.write("<br>")


// Javascript Assignment(11) #part 11
document.write("<b><u>Javascript Assignment(11) #part 11</b></u>")
document.write("<br>")
document.write("<br>")
let num = 35.36
let ss = num.toString().replace(".","")
document.write("<b>Number:"+num)
document.write("<br>")
document.write("Result:"+ss+"</b>");
document.write("<br>")
document.write("<br>")


// Javascript Assignment(11) #part 12
document.write("<b><u>Javascript Assignment(11) #part 12</b></u>")
document.write("<br>")
document.write("<br>")
function checkUsername() {
    var username = prompt("Enter your username:");
    var regex = /[!@.,]/;
    if (regex.test(username)) {
      alert("Please enter a valid username without special symbols like '@', '.', ',', or '!'");
      document.write("<b>Please enter a valid username without special symbols like '@', '.', ',', or '!'</b>");
      checkUsername(); 
    } else {
      alert("Valid username entered: " + username);
      document.write("<b>Valid username entered:</b> " + username);
    }
  }
  checkUsername();
  document.write("<br>")
  document.write("<br>")
  

// Javascript Assignment(11) #part 13
document.write("<b><u>Javascript Assignment(11) #part 13</b></u>")
document.write("<br>")
document.write("<br>")
let p =prompt("Welcome to Khan's bakery what do you want to order sir/ma'am ")
let fruits =["cake","apple pie","cookie","chips","patties"]
if(p=="cake"|| p=="apple pie"||p=="cookie"||p=="chips"||p=="patties")
{
  alert("cookie is available at index"+fruits.indexOf(p)+"in our bakery")
  document.write("<b>cookie is available at index"+fruits.indexOf(p)+"in our bakery</b>")
}
else{
    alert("We are sorry your order is not available in our bakery")
    document.write("<b>We are sorry your order is not available in our bakery</b>")
}
document.write("<br><br>")

// Javascript Assignment(11) #part 14
document.write("<b><u>Javascript Assignment(11) #part 14</b></u>")
document.write("<br>")
document.write("<br>")
alert(" pasword requirdation\na. It should contain alphabets and numbers\nb. It should not start with a number \nc. It must at least 6 characters long")
var password = prompt(" Please enter a password:");

var nums = [1,2,3,4,5,6,7,8,9,0];

var flags = true;

if(password.length >= 6){
  for(let i = 0; i < password.length; i++){
    
    if(password.includes(nums[i]) && password[0] != nums[i]){
      flags = true;
      break;
    }
    else{
      flags = false;
      //break;
    }
  }
    
  if(flags == true){
    document.write("<b>Valid Password");
  }
  else{
    document.write("Invalid Password! Password must contain alphabets and numbers, and should not be started with number");
  }
}
  
else{
  document.write("Minimum 6 characters are required</b>");
}
document.write("<br>")
document.write("<br>")


// Javascript Assignment(11) #part 15
document.write("<b><u>Javascript Assignment(11) #part 15</b></u>")
document.write("<br>")
document.write("<br>")
let str = "University of Karachi"
let  array= str.split("")
for (let i = 0; i<str.length; i++) {
  document.write("<b>"+array[i]+"<br></b>")
}
document.write("<br><br>")

// Javascript Assignment(11) #part 16
document.write("<b><u>Javascript Assignment(11) #part 16</b></u>")
document.write("<br>")
document.write("<br>")
let user =prompt("Enter a anyone Name")
let lastCharacter = user.slice(-1)
document.write("<b>User Input:"+user+"<br>"+"Last character of input:"+lastCharacter+"</b>")
document.write("<br><br>")

// Javascript Assignment(11) #part 17
document.write("<b><u>Javascript Assignment(11) #part 17</b></u>")
document.write("<br>")
document.write("<br>")
let line = "the quick brown fox jumps over the lazy dog"
let match = line.matchAll("the")
let arr = Array.from(match).length
document.write("<b>Text:"+line)
document.write("<br>")
document.write("There are"+arr+"occurrence(s) of word 'the'</b>");

// Javascript Assignment(11)Has been completed