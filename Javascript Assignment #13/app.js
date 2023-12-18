// Javascript Assignment(13) #part 1
document.write("<b><u>Question No# 1</u></b>")
document.write("<br><br>")
let date = new Date()
document.write(date)
document.write("<br><br>")


// Javascript Assignment(13) #part 2
document.write("<b><u>Question No# 2</u></b>")
document.write("<br><br>")
let array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let d = new Date()
let thisMonth = array[d.getMonth()]
document.write("<b> Current month is:"+thisMonth+"</b>")
alert( "Current month is:"+thisMonth)
document.write("<br><br>")


// Javascript Assignment(13) #part 3
document.write("<b><u>Question No# 3</u></b>")
document.write("<br><br>")
let now = new Date()
let day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
let thisday = day[now.getDay()]
let slice = thisday.slice(0,3)
document.write("<b>Today is:"+slice+"</b>")
alert("Today is:"+slice);document.write("<br><br>")


// Javascript Assignment(13) #part 4
document.write("<b><u>Question No# 4</u></b>")
document.write("<br><br>")
let day2= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
let date2  =new Date();
let result = day2[date2.getDay()]
if(result=="Saturday" || result=="Sunday"){
    alert("It's Fun day")
   document.write("<b>It's Fun day</b>")
} 
else{
    alert("this is not a fun day ")
    document.write("<b>this is not a fun day </b>")
};
document.write("<br><br>")


// Javascript Assignment(13) #part 5
document.write("<b><u>Question No# 5</u></b>")
document.write("<br><br>")
let n = new Date();
let rangeDate = n.getDate()
if(rangeDate<=15){
    alert(" First fifteen days of the month")
    document.write("<b>Fifteen days of the month</b>")
}
else if(rangeDate>15){
    alert("Last days of the month")
    document.write("<b>Last days of the month</b>")
};document.write("<br><br>")



// Javascript Assignment(13) #part 6
document.write("<b><u>Question No# 6</u></b>")
document.write("<br><br>")
let date3 = new Date()
document.write("Current Date"+date3+"<br>")
let getTime = date3.getTime()
let getMinute  =Math.floor(getTime/(100*6))
document.write("Elapsed milliseconds since January 1,1970:"+getTime+"<br>")
document.write("Elapsed minutes since January 1,1970:"+getMinute)
document.write("<br><br>")


// Javascript Assignment(13) #part 7
document.write("<b><u>Question No# 7</u></b>")
document.write("<br><br>")
let new1 = new Date()
let  hour = new1.getHours();
if(hour<12){
    alert("It's AM")
    document.write("<b>It's AM</b>")
}
else{
    alert("It's PM")
    document.write("<b>It's PM</b>")
};document.write("<br><br>")

// Javascript Assignment(13) #part 8
document.write("<b><u>Question No# 8</u></b>")
document.write("<br><br>")
let date4 = new Date("Dec 31 2022")
document.write("<b>"+date4+"</b>")
document.write("<br><br>")


// Javascript Assignment(13) #part 9
document.write("<b><u>Question No# 9</u></b>")
document.write("<br><br>")
let date5 = new Date("2022-04-02")
let date6 = new Date()
let minus = date5 - date6
let floor = Math.floor(minus/(1000 * 60 * 60 * 24))
document.write("<b>"+floor+"have passed since 1<sup>st</sup> Ramdan,2022</b>")
alert(floor+"have passed since 1st Ramdan,2022")
document.write("<br><br>");


// Javascript Assignment(13) #part 10
document.write("<b><u>Question No# 10</u></b>")
document.write("<br><br>")
let date7 = new Date("2015-11-05") 
let date8 = new Date()
let minus2 = date8 - date7
let floo = Math.floor(minus2/1000)
document.write("<b>On Refrence Date:"+date8+"<br>"+floo+"Seconds had pased since begining of 2015/11/05</b>")
document.write("<br><br>")


// Javascript Assignment(13) #part 11
document.write("<b><u>Question No# 11</u></b>")
document.write("<br><br>")
let date9 = new Date()
let date10 = new Date ("12/12/2023")
let fullhour = date9.getHours()
let set = date9.setHours(fullhour)
document.write( " Current Date:"+date9+"<br>"+(fullhour + 12)+"hours Ago it was"+date10);
document.write("<br><br>")


// Javascript Assignment(13) #part 12
document.write("<b><u>Question No# 12</u></b>")
document.write("<br><br>")
let date12 = new Date()
let date11 = new Date()
let minus3 = date11.getFullYear() - 100
let set1 = date11.setFullYear(minus3)
document.write("Current Date:"+date12+"<br>"+"100 Years back Date, it was:"+date11)
alert("Current Date:"+date12+"\n"+"100 Years back Date, it was:"+date11)
document.write("<br><br>") 



// Javascript Assignment(13) #part 13
document.write("<b><u>Question No# 13</u></b>")
document.write("<br><br>")
let Age =prompt("Enter your Age")
let date13 = new Date()
let full = date13.getFullYear()
let minus4 = (full - Age)
alert("Your Age is"+Age)
alert("Your birth Year is:"+minus4) 
document.write("<b>Your Age is:"+Age+"<br>"+"Your birht year is:"+minus4+"</b>");document.write("<br><br>")



// Javascript Assignment(13) #part 14
document.write("<b><u>Question No# 14</u></b>")
document.write("<br><br>")
let array1=  ["January","Feburary","March","April","May","June","July","August","September","october","November","December"]
let CoustomerName =prompt(" Enter your name and I will tell you your electric bill")
let date14 = new Date()
let month = array1[date14.getMonth()]
let random = Math.floor(Math.random() * 100) * 5;
let ChargesPerUnit = (random * 16)
let LatePaymentCharges = 350
let AfterDuedate = ChargesPerUnit + LatePaymentCharges
document.write("<b>K Electric Bill:</b> <br><br>"+"Coustomer Name:"+"<b>"+CoustomerName+"</b>"+"<br>")
document.write("Month Name:"+"<b>"+month+"</b><br>"+"Number of Units:"+"<b>"+random+"</b><br>")
document.write("Charges per Unit:"+"<b>"+16+"</b>"+"<br><br>"+"Net Amount Payable (With in due Date) :"+"<b>"+ChargesPerUnit+" PKR "+"</b>"+"<br>"+"Late payment Charges:"+"<b>"+LatePaymentCharges+"</b><br>")
document.write("Groos Amount Payable (after due Date) : "+"<b>"+AfterDuedate+" PKR "+"</b>")