var Variable1 = "Hello",Variable2 = "I'm",Variable3 = "Fahad Khan"
alert(Variable1+" "+Variable2+ " "+Variable3);

// legal Variable Name//
let age = 25;
let userName = 'John';
let _variableName = 'Example';
let $anotherVariable = 100;
let camelCaseExample = true;
let firstName2 = 'Alice';

//Illegal Variable Name//

// let 2ndName = 'Invalid'; // Starts with a digit
// let my-name = 'Invalid'; // Hyphens are not allowed
// let my variable = 'Invalid'; // Contains whitespace
// let break = 'Invalid'; // Reserved keywords cannot be used as variable names

let IllegalVariable= ["A variable name can't contain any spaces  ( <b>My Name</b>)<br>",
"Not use Digit for the start (<b>1Name</b>) <br>","only Use camel Case ( <b> myName </b>)<br>",
"You are use variable in short code not a too long ( <b> bestSupportingActressInADramaOrComedy </b>)<br>"
,"Hyphens are not allowed (<b> fahad-khan </b>) <br><br><br> <h1> 5 Ligal Variabe</h1>"]
document.write(IllegalVariable);


let legalVariable=["Special character only use dollar sign $  (<b>$dollar</b>) <br>",
"Variable use with Out any space (<b>userName</b>) <br>","Variable Not start with Digit(<b> mycountry</b>) <br>",
"This is Legal Variable (<b> userName</b>) <br>","This is Legal Variable (<b>firstName2</b>)"]
document.write(legalVariable)



document.write ("<h1>Rules for naming JS variables</h1><br>",
" Variable names can only contain numbers, $ and _. For example: $my_1stVariable <br>",
"Variables must begin with a letter, $ or _. For example $name, _name or name <br>",
"Variable names are case sensitive <br>",
"Variable names should not be JS keywords ")
