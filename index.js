
// 2

var groceries = ["mjöl","potatis","äpple","ägg"];
for(i=0; i<groceries.length; i++){
console.log(groceries[i])};

// 3
var prices = [220,55,99,123];

// 4
var price = 299;
var canAfford = "";

function myShope(price){
   if(price >500){ 
       return false;
    }
     else if (price <= 500){
        return true;
    }
    else{
        return canAfford;
    }
}
    let canAfford = myShope(299);

// 5
var x ="";
var btn = document.createElement("button");
btn.innerHTML = "Press Me"; 

var myButton= document.getElementsByTagName("button");
document.getElementsByTagName("button").innerHTML =x;
console.log(document.getElementsByTagName(x));
console.log(document.getElementsByTagName(myButton).onclick)= "button has been clicked";

!!!
document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementsByTagName("button").innerHTML = "button has been clicked!";
}
document.getElementById("button").addEventListener("click", myFunction);

//6

var myButton = document.getElementsByTagName("button")
document.myButton.styles.backgroundColor = 'blue'
myButton.styles.Color = 'red'
myButton.styles.id = 'my-button'
function myFunction() {
    document.getElementsByTagName("button").style.backgroundColor = "red";
    document.getElementsByTagName("button").styles.Color = 'red'
    document.getElementsByTagName("button").styles.id = 'my-button'
  }

  myFunction(document.getElementById("").style.color);
  document.getElementById("my-button")(myFunction);

//7

 var boat ={
    color ='green',
    speed = 75,
    Drive : function() {
        return this.color;
      }
};
function bDrive ( boat)
{
    console.log(boat.Color);
}
bDrive();

  

//8

//  AJAX is not a programming language.

//  AJAX is a technique for accessing web servers from a web page.

//  AJAX stands for Asynchronous JavaScript And XML.

//  We use Ajax to update a web page without reloading the page

//  Request from the server after page loaded

//  Recive data from  aserver

//  send back the data to the server 

function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  function myFunction(xhttp) {
    document.getElementById("demo").innerHTML =
    xhttp.responseText;
  }


  //9

  var val3 = 10;

function calc(val1, val2){
  
  let sum = val1 + val2 + val3;

  var val3 = 35;

  for(let i = 0; i < 3; i++){
    val3 += i;
  }

  return sum + val3;
}

let result = calc(10, 23);

  // return :35+ 46=81
  // result = 33


  //10

//   jQuery is a fast, small, and feature-rich JavaScript library.
//    It makes things like HTML document traversal and manipulation, event handling, animation,
//     and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
//      With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.


    $('button').addClass('primary-button') 

    //  in this line we use Jquarry and with jquerry we select the button element .
    //  The jQuery .addclass selector finds elements with a specific class('primary-button').

 
  //11

  // HTML elements often contains text. To create a button with text, use the innerText or innerHTML properties of the element object.
 // Its A React JSX,JavaScript XML,that let us to write Html but not in HTML file.
 // The appendChild() method appends a node as the last child of a node.
 