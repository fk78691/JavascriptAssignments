// Javascript Assignment:10(1)===>#part(1) 
let emptyArray = [
    [], // empty array 1
    [], // empty array 2
    []  // empty array 3
  ];

// Javascript Assignment:10(1)===>#part(2)
let multiArray =[
    [0,1,2,3+ "<br>"],
    [1,0,1,2+ "<br>"],
    [2,1,0,1+ "<br>"]
];
document.write("<b>"+multiArray+"</b>")
document.write("<br>")
document.write("<br>")

// Javascript Assignment:10(1)===>#part(3)
for (let i = 1; i <= 10; i++) {
    document.write(i+"<br><b>");
  }
document.write("<br>")
document.write("<br>")

// Javascript Assignment:10(1)===>#part(4)
let table =prompt("Enter a Table number ")
let tablenght =prompt("Enter a table lenght")
document.write("Multiplication Table of "+table)
document.write("<br>")
document.write("Lenght:"+tablenght)
document.write("<br>")
document.write("<br>")
for (let i = 1; i<=tablenght; i++) {
document.write(table+"x"+i+"="+table*i+"<br>") 
}
document.write("<br>")
document.write("<br>")

// Javascript Assignment:10(1)===>#part(5)
let fruits =["apple","Banana","Mango","Orange","Strawberry"]
document.write("Fruits Name:")
document.write("<br>")
for (let i = 0; i<=4; i++) {
  document.write("<b>"+fruits[i]+"<br></b>")
}
document.write("<br>")
document.write("<br>")

 // Javascript Assignment:10(1)===>#part(6)
document.write(" a .Counting; ")
for (let i = 1; i<=15; i++) {
   document.write("<b>"+i+" ")
}
document.write("<br>")
document.write(" b .Reverse Counting; ")
for (let j = 10; j >= 0; j--) {
    document.write("<b>"+j+" ")
}
document.write("<br>")
document.write(" C .Even; ")
for (let i = 0; i <= 20; i+=2) {
    document.write("<b>"+i+" ")
}
document.write("<br>")
document.write(" C .Odd; ")
for (let i = 1; i <=20; i+=2) {
    document.write("<b>"+i+" ")
}
document.write("<br>")
document.write(" C .Series; ")
for (let i = 2; i <=20; i+=2) {
    document.write("<b>"+i+"k"+" ")
}
document.write("<br>")
document.write("<br>")

//  Javascript Assignment:10(1)===>#part(7)
let bakery =prompt("Welcome to Khan's Bakery. What do you want to order")
let cookies =["Cake","apple pie","cookie","chips","patties"]
if(bakery==cookies[0],[1],[2],[3],[4]){
    alert("Cookies is avalaible at index"+" "+cookies.indexOf(bakery)+" "+"in our bakery")
}
else{
    alert("We are Sorry. Pastry is<b>not available</b> in our bakery")
};
document.write("<br>")
document.write("<br>")

//  Javascript Assignment:10(1)===>#part(8)
let arr =[24,53,78,91,12]
document.write("Array items;"+arr)
document.write("<br>")
document.write("The Largest number is"+Math.max(24,53,78,91,12))
document.write("<br>")
document.write("<br>")

//  Javascript Assignment:10(1)===>#part(9)
let ar =[24,53,78,91,12]
document.write("Array items;"+arr)
document.write("<br>")
document.write("The Smallest number is"+Math.min(24,53,78,91,12));
document.write("<br>")
document.write("<br>")

//  Javascript Assignment:10(1)===>#part(10)
for (let i = 5; i<=100; i+=5) {
   document.write("<b>"+i+" "+",")
}