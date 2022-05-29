var numberOfButtons = document.querySelectorAll(".drum").length;
var content1 = []; 
var input = [];
var len;



for(i = 0 ; i < numberOfButtons ; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        
        var buttonInnerHtml = this.innerHTML;
        
         content1.push(buttonInnerHtml);
        
        
        makeSound(buttonInnerHtml);
        
        

        
         
    } )
} ;
var mkey = document.addEventListener("keypress" , (event) => {
    
    mkey = event.key;
    content1.push(mkey);
    
    makeSound(mkey);
})






function makeSound(temp) {
    switch(temp) { 
        case "w" : 
        var tom1 = new Audio('sounds/tom-1.mp3'); 
        tom1.play();
        break;
        
        case "a" : 
        var tom2 = new Audio('sounds/tom-2.mp3'); 
        tom2.play();
        break;

        case "s" : 
        var tom3 = new Audio('sounds/tom-3.mp3'); 
        tom3.play();
        break;

        case "d" : 
        var tom4 = new Audio('sounds/tom-4.mp3'); 
        tom4.play();
        break;

        case "j" : 
        var snare = new Audio('sounds/snare.mp3'); 
        snare.play();
        break;

        case "k" : 
        var crash = new Audio('sounds/crash.mp3'); 
        crash.play();
        break;

        case "l" : 
        var kick = new Audio('sounds/kick-bass.mp3'); 
        kick.play();
        break;

        default :

    }
}



document.querySelector(".exp").addEventListener("click" , function() {
    console.log(content1.join(""));
    alert( "Copy This" + ": " + content1.join(""));
} );

   

document.querySelector(".imp").addEventListener("click" , function() {
    alert("This is Under Development");
 // input =  prompt("Enter Your Music Pattern ")
  console.log(input.length);
  len = input.length;
  

 // for(i=0 ; i<=len ; i++)
 // {
      
  //    makeSound(input[i]); 
    // var delayInMilliseconds = 1000; 

    // setTimeout(function() {
       // Yahape tere code daal
     //  makeSound(input[i]); 
    // }, delayInMilliseconds);

  //}
    
} );





