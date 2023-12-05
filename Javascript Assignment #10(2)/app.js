// Javasript Assignment:10(2) pattrens
// Pattren 1
document.write(" <b><u>Stars Pattrens</b></u>")
document.write("<br>")
for (let i = 0; i <=5; i++) {
    for (let j = 0; j <=i; j++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<br>")
// Pattren 2
for (let k = 5; k>=0; k--) {
    for (let l = 1; l<=k; l++){
        document.write("*")
    }
    document.write("<br>")
}
// pattren 3
for (i = 1; i <=5; i++) 
{
  for ( j = 5; j>i; j--) 
  {
  document.write(" &nbsp; ");
  }
  for ( k = 1; k <=((2*i)-1); k++) 
  {
   document.write("*")
  }
  document.write("<br>")
}
document.write("<br>")

// pattren 4
for (i = 5; i >=1; i--) 
{
  for ( j = 5; j>i; j--) 
  {
  document.write(" &nbsp; ");
  }
  for ( k = 1; k <=((2*i)-1); k++) 
  {
   document.write("*")
  }
  document.write("<br>")
}
document.write("<br>")
document.write("<br>")

// pattren 5
for (i = 1; i <=5; i++) 
{
  for ( j = 5; j>i; j--) 
  {
  document.write(" &nbsp; ");
  }
  for ( k = 1; k <=((2*i)-1); k++) 
  {
   document.write("*")
  }
  document.write("<br>")
}
for (i = 5; i >=1; i--) 
{
  for ( j = 5; j>i; j--) 
  {
  document.write(" &nbsp; ");
  }
  for ( k = 1; k <=((2*i)-1); k++) 
  {
   document.write("*")
  }
  document.write("<br>")
}
document.write("<br>")
document.write("<br>")

// pattren 6
for (let i = 1; i <=6; i++) {
  for (let j = 1; j <=6; j++) {
    if(i==1 || i==6 || j==1|| j==6){
      document.write("*")
    }
    else{
      document.write("&nbsp;  ")
    }
  }
  document.write("<br>")
}
document.write("<br>")
document.write("<br>")

// pattren 7
for (let i=1; i<=5; i++) {
  for (let j=1; j <=5; j++) {
if(i==1 ||i==5 || i+j==6){
  document.write("*")
}
else{
  document.write(" &nbsp; ")
}
  }
  document.write("<br>")
}
document.write("<br>")
document.write("<br>")

// pattren 8
for (var i = 1; i <= 4; i++){
  for ( var j = 1; j <= 7; j++){
      if (i==2 && j==4) {
          document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
      }
      else if (i==3 && (j==3 || j==4 || j==5)) {
          document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
      }
      else if (i==4 && (j==2 || j==3 || j==4 || j==5 || j==6)) {
          document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
      }
      else document.write (`&nbsp;&nbsp;&nbsp;*`)
  }
document.write("<br>")
document.write("<br>")
}
document.write("<br>")
document.write("<br>")



//  number patterns
// pattern 1
document.write(" <b><u>Number Pattrens</b></u>")
document.write("<br>")
document.write("<br>")
for (let i = 1; i <=5; i++) {
for (let j = 1; j <=i; j++) {
  document.write(i) 
}
document.write("<br>")
}
document.write("<br>")
document.write("<br>")

// pattern 2
document.write("<br>")
for (let i = 1; i <=5; i++) {
for (let j = 1; j <=i; j++) {
  document.write(j)
}
document.write("<br>")   
}
document.write("<br>")
document.write("<br>")


// Pattern 3
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let space = rows - i; space > 0; space--) {  
        document.write("&nbsp; &nbsp")
    }
    for (let j = 1; j <= i; j++) {
        pattern += j + ' ';
    }
    document.write(pattern);
    document.write("<br>")

}
document.write("<br>")
document.write("<br>")


// Pattern 4
for (let i = 0; i <=5; i++) {
for (let j = 0; j <=i; j++) {
  document.write("&nbsp; &nbsp")
  document.write(j)
}
 document.write("<br>") 
}




