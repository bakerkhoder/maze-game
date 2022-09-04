addEventListener("load",myfunction)


function myfunction(){
 var textresult=document.getElementsByClassName("boundary example")
 var start=document.getElementById("start")
 var boxes=document.querySelectorAll(".boundary")
 var score=0
 var end= document.getElementById("end")
 var score_text=document.getElementById("status")
 var total_result=document.getElementsByTagName("h1")
 boxes.forEach((box)=>{
 box.addEventListener("mouseover",()=>{

 if(total_result[0].innerHTML=="game started"){ score-=10
     total_result[0].innerHTML="Hover over S to restart"
    textresult[0].innerHTML="YOU LOST"
 boxes.forEach(box=>{box.style.backgroundColor="red"})}})})
 
 start.onmouseover=()=>{
 
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
 boxes.forEach(box=>{box.style.backgroundColor=" #eeeeee"}) }

 end.onmouseover=()=>{
  
 if(textresult[0].style.backgroundColor!="red"&&total_result[0].innerHTML=="game started"){
   
 score+=5 
console.log(score)}
 textresult[0].innerHTML="YOU WON"
 if(score>0){total_result[0].innerHTML="WINNER"}
 else{total_result[0].innerHTML="LOSER"}
 score_text.innerHTML="your score is : "+score;}
 
 start.onclick=()=>{
 score=0
}
 }
 

