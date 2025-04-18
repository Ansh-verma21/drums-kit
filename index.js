 const ans=document.querySelectorAll("button")

 function clickHandle(){
   // var audio = new Audio("sounds/tom-1.mp3");
   // audio.play();
   let ans=this.innerHTML;
   pressAnimation(ans)
   switch(ans)
   {
       case "w":
           var audio = new Audio("sounds/tom-1.mp3");
           audio.play();
           break;
       case "a":
           var audio = new Audio("sounds/tom-2.mp3");
           audio.play();
           break;
       case "s":
           var audio = new Audio("sounds/tom-3.mp3");
           audio.play();
           break;
       case "d":
           var audio = new Audio("sounds/tom-4.mp3");
           audio.play();
           break;
           case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
            case "k":
           var audio = new Audio("sounds/crash.mp3");
           audio.play();
           break;
           case "l":
           var audio = new Audio("sounds/kick-bass.mp3");
           audio.play();
           break;
   }
 }

 function clickKey(event){
   // var audio = new Audio("sounds/tom-1.mp3");
   // audio.play();
   let ans=event.key;
   pressAnimation(ans)
   switch(ans)
   {
       case "w":
           var audio = new Audio("sounds/tom-1.mp3");
           audio.play();
           break;
       case "a":
           var audio = new Audio("sounds/tom-2.mp3");
           audio.play();
           break;
       case "s":
           var audio = new Audio("sounds/tom-3.mp3");
           audio.play();
           break;
       case "d":
           var audio = new Audio("sounds/tom-4.mp3");
           audio.play();
           break;
           case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
            case "k":
           var audio = new Audio("sounds/crash.mp3");
           audio.play();
           break;
           case "l":
           var audio = new Audio("sounds/kick-bass.mp3");
           audio.play();
           break;
   }
 }

 for(let i=0;i<ans.length;i++){
 
    ans[i].addEventListener("click",clickHandle);
   }

   document.addEventListener("keydown",function(event){
      clickKey(event);
   })


   function pressAnimation(currentKey){
       let activeButton=document.querySelector("."+currentKey);
       activeButton.classList.add("pressed");
          setTimeout(function(){
           activeButton.classList.remove("pressed");}
          ,100);
   }
         