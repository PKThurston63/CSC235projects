//1. alert("Hello World");  make sure JS is linked to html

//2.document.querySelector("button").addEventListener("click", handleClick);
//attached eventlistener to handleClick

//3. anonymous function
//document.querySelector("button").addEventListener("click", function(){
 //   alert("I got clicked");
});

//4. for loop. Put event listener on all buttons
var numOfButtons = document.querySelectorAll(".drum").length;
console.log(numOfButtons);

for (var i-0; i<numOfButtons;i++){
    document.querySelector(".drum").addEventListener("click", function(){
    alert("I got clicked");
}}

//2. function handleClick(){
//    alert("I got clicked");
//} write a function for the event listener