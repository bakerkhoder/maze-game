addEventListener("load",myfunction)


function myfunction(){
 var textresult=document.getElementsByClassName("boundary example")
 var start=document.getElementById("start")
 var boxes=document.querySelectorAll(".boundary")
 var score=0
 var end= document.getElementById("end")
 var score_text=document.getElementById("status")
 var total_result=document.getElementsByTagName("h1")
 var incomeTicker=60;
 var username=prompt("Welcome to the maz game ,please enter your name")
 var savebutton= document.createElement("button")
 savebutton.innerText="SAVE"
 document.body.appendChild(savebutton)
 if(localStorage.getItem(username)){
  score+=parseInt(localStorage.getItem(username))
  console.log(score)
 
 }
 savebutton.addEventListener("click",()=>{
  window.localStorage.setItem(username,score)
 })
 boxes.forEach((box)=>{
 box.addEventListener("mouseover",()=>{
 
  

 if(total_result[0].innerHTML=="game started"){ score-=10
     total_result[0].innerHTML="Hover over S to restart"
    textresult[0].innerHTML="YOU LOST"
 boxes.forEach(box=>{box.style.backgroundColor="red"})}})})
 
 start.onmouseover=()=>{
  mytimer =setInterval(clock,1000)
 function clock(){
  if(incomeTicker>0){
    incomeTicker--
    textresult[0].innerHTML=incomeTicker
    
   }
  if(incomeTicker<=0){
    
    textresult[0].innerHTML="YOU LOST"
 boxes.forEach(box=>{box.style.backgroundColor="red"})
  }
  
  end.onmouseover=()=>{
  
 if(textresult[0].style.backgroundColor!="red"&&total_result[0].innerHTML=="game started"){
   
 score+=5 
 incomeTicker=60
 clearInterval(mytimer)
console.log(score)}
 textresult[0].innerHTML="YOU WON"
 if(score>=0){total_result[0].innerHTML="WINNER"}
 else{total_result[0].innerHTML="LOSER"}
 score_text.innerHTML="your score is : "+score;}
 
 
   }
   

   /*
    cheating message
  let isMouseHover = false
   let test = document.getElementById("game");
   test.addEventListener("mouseleave", function () {
   isMouseHover = false
   textresult[0].innerHTML="cheating score wont be added"
   console.log(isMouseHover)
   }, false);*/
  
 total_result[0].innerHTML="game started"   
 boxes.forEach(box=>{box.style.backgroundColor=" #eeeeee"}) 
 console.log('ee')}


 
 start.onclick=()=>{
 score=0
}
 }
 

