// 1. Do this first to check that index.js is linked up and then comment it out.
//alert("Hello World ");

//3. After #2, write the event handler. First need to get button
// this gets the first button, listens for a "click" (must be a string) and calls the function handleClick (just name of function no ()) when the click happens.
//document.querySelector("button").addEventListener("click",handleClick);

//4. We can write an anonymous function instead of defining a separate function and then passing it in. This is more concise and is often used when the function is only needed in one place. Remove #2 below because this replaces it.
//document.querySelector("button").addEventListener("click", function(){
//    alert("I got clicked");
//});   

//2. Write a function that opens on alert on click - this gets removed in #4
// function handleClick(){
//     alert("I got clicked");
// }

//5. Now we want to add the event listener to all the buttons, not just the first one. 
// Use querySelectorAll to get all the buttons and then loop through them to add the event listener to each one.  ALso better to select on class "drum". test it with an Alert message.
// var numOfButtons = document.querySelectorAll(".drum").length;
// for (var i=0;i<numOfButtons;i++ ){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     alert("I got Clicked!");
// });
// }

//6. Now we want to play a sound when the button is clicked. We can use the Audio object to play a sound. We can create a new Audio object and then call the play() method on it. We can also use the innerHTML of the button to determine which sound to play.  We can comment this out when we get to step 8.

// BUTTON CLICK CODE

var numOfButtons = document.querySelectorAll(".drum").length;
// for (var i=0;i<numOfButtons;i++ ){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
//   });
// }

//7. make edits in CSS file to change button background
//8. How do we get each of these buttons to play the sound of the corresponding drum image?  Right now we have an event listener to listen for
//button clicks.  But which button?  You can you find out by using "this".  This will refer to the button that was clicked.  
//8a.try adding     console.log(this); in place of the audio code above.

//8b.  Now change the color of the letter in the button to white when the button is clicked.  This will show us that "this" is referring to the button that was clicked.


//9. Use a Switch statement to have a different sound play for each button.  The innerHTML of the button will be the letter that is on the button, so we can use that to determine which sound to play.  We can use the case statements to check for each letter and then play the corresponding sound.  We can also use the default case to handle any unexpected input.


//10.  We need keyboard listener now.  First let's try to log the key that was pressed.  We can use the "keydown" event to listen for when a key is pressed and then log the event object to see what information it contains.  We can then use the "key" property of the event object to get the specific key that was pressed.
document.addEventListener("keydown", function(event){
    console.log(event);
    console.log(event.key);}
);

