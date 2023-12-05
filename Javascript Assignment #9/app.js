// Javascript Assignment(9) #part 1
let array1 =[,,,,]

// Javascript Assignment(9) #part 2
let array2 =["park,Seaview"]

// Javascript Assignment(9) #part 3
let array3 = ["Hello World!","pakistan","Zindabad"]

// Javascript Assignment(9) #part 4
let numberArray =[1,2,3,4,5]

// Javascript Assignment(9) #part 5
let boleanArray =[true,false]

// Javascript Assignment(9) #part 6
let mixedArray =["Pakistan",5,true]

// Javascript Assignment(9) #part 7
let qualificationArray = ["1)SSC\n <br> 2)HSC\n <br> 3)BSC\n <br> 4)BS\n <br> 5)BCOM\n <br>  6)MS\n <br> 7)M.Phil \n <br> 8)PhD"]
document.write("<b>Qualification</b>")
document.write("<br>")
document.write("<br>")
document.write("<b>"+qualificationArray+"</b>")
document.write("<br>")
document.write("<br>")
// Javascript Assignment(9) #part 8
let studentName =["Fahad", "Usman", "Ovais"]
let score = [320,230,480]
let total = 500
document.write("<b>Result Card</b>")
document.write("<br>")
document.write("<br>")
document.write("<b>Score of"+" "+studentName[0]+" "+"is"+" "+score[0]+". Percentage:"+score[0]/total*100+"%</b>")
document.write("<br>")
document.write("<b>Score of"+" "+studentName[1]+" "+"is"+" "+score[1]+". Percentage:"+score[1]/total*100+"%</b>")
document.write("<br>")
document.write("<b>Score of"+" "+studentName[2]+" "+"is"+" "+score[2]+". Percentage:"+score[2]/total*100+"%</b>")
document.write("<br>")
document.write("<br>")
// Javascript Assignment(9) #part 9
let colours =["White","yellow","Green","Black","Gray"]
let colUser =prompt("Enter your Own color for start")
 document.write("<b>Colors</b>")
 document.write("<br>")
 document.write("<br>")
 colours.unshift(colUser)
 document.write("<br>")
 document.write("<b>"+colours)
 let endColor=prompt("Please add your end color")
 colours.push(endColor)
 document.write("<br>")
 document.write(colours)
 document.write("<br>")
 let midcolor=prompt("Enter the 2 more color")
 colours.splice(0,1,midcolor)
 document.write(colours)
 document.write("<br>")
 colours.pop
 colours.shift
 document.write(colours)
 document.write("<br>")
 let which =prompt("which index wants to add a color")
 let Enter =prompt("Enter a color name")
 colours.splice(which,2,Enter);
 document.write(colours+"</b>");
 document.write("<br>")
 document.write("<br>")

// Javascript Assignment(9) #part 10
let student= [320,230,480,120]
document.write("<b>Scores of Student:"+student)
document.write("<br>")
document.write("Orderd Scores of Student's:"+ student.sort()+"</b>")
document.write("<br>")
document.write("<br>")

// Javascript Assignment(9) #part 11
let cities =["<b>Karachi","Lahore","Islamabad","Quetta","Peshawar</b>"]
document.write( "<b> Cities List </b>")
document.write("<br>")
document.write(cities)
document.write("<br>")
document.write("<br>")
document.write("<b> Slect cities List </b>")
document.write("<br>")
document.write("<b>"+cities.slice(2,4)+"</b>");
document.write("<br>")

// Javascript Assignment(9) #part 12
let arr=["This","is","my","cat"]
document.write("<br>")
document.write("<b>Array:")
document.write("<br>")
document.write(arr)
document.write("<br>")
document.write("<br>")
document.write("Stirng:")
document.write("<br>")
document.write(arr.join("")+"<b>");
document.write("<br>")
document.write("<br>")

// Javascript Assignment(9) #part 13
let devices =["Keyboard","Mouse","Printer","Monitor"]
document.write("<b> Devices:")
document.write("<br>")
document.write(devices)
document.write("<br>")
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(devices[0])
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(devices[1])
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(devices[2])
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(devices[3]+"</b>");
document.write("<br>")
document.write("<br>")

// Javascript Assignment(9) #part 14
let device =["Keyboard","Mouse","Printer","Monitor"]
document.write("<b>Reverse Out</b>")
document.write("<br>")
document.write("<br>")
document.write("<b> Devices:")
document.write("<br>")
document.write(device)
document.write("<br>")
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(device[3])
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(device[2])
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(device[1])
document.write("<br>")
document.write("Out:")
document.write("<br>")
document.write(device[0]+"</b>");
document.write("<br>")
document.write("<br>");

// Javascript Assignment(9) #part 15
let manufacure = ["Apple","Samsung","Tecno","Infinix","Motrola","Black-Beary"]
document.write("<b> Manufactured </b>");
document.write("<br>");
document.write("<br>");
document.write(manufacure[0])
document.write("<br>");
document.write(manufacure[1])
document.write("<br>");
document.write(manufacure[2])
document.write("<br>");
document.write(manufacure[3])
document.write("<br>");
document.write(manufacure[4])
document.write("<br>");
document.write(manufacure[5])