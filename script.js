


var display = document.getElementById('display');

var Minutos= document.getElementById('Minutos');
var Segundos = document.getElementById('Segundos');
var Start = document.getElementById('Start');

var cronometroSeg;

var MinutosAtual;
var SegundosAtual;

var interval;

for(var i = 0; i <= 60; i++){
    Minutos.innerHTML+='<option value"'+i+'">'+i+'</option>';
}

for(var i = 1; i <= 60; i++){
    Segundos.innerHTML+='<option value"'+i+'">'+i+'</option>';
}

Start.addEventListener('click',function(){
    MinutosAtual = Minutos.value;
    SegundosAtual = Segundos.value;

    display.childNodes[1].innerHTML = MinutosAtual + ":" + SegundosAtual;

    interval = setInterval(function(){

        SegundosAtual --;
        if(SegundosAtual <=0){
          if(Minutos > 0){
              MinutosAtual --;
              SegundosAtual + 59;

          }else{
              alert("TERMINOU");
              document.getElementById("sound").play();
            clearInterval(interval);
          }   
        }

        display.childNodes[1].innerHTML = MinutosAtual + ":" + SegundosAtual;

    },1000);



});
