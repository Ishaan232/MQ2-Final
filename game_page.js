function send1(){
    x=document.getElementById("number1").value;
    y=document.getElementById("number2").value;
    localStorage.setItem("loginplayer1",x);
    localStorage.setItem("loginplayer2",y);
    window.location="game.html";
   }