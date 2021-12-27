window.onload = function(){
    let seconds = 00;
    let ms = 00;
    let min = 00;
    var changemin = document.getElementById('min');
    var changeseconds = document.getElementById('seconds');
    var changems = document.getElementById('ms');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop')
    var reset = document.getElementById('reset');
    var interval;
    
    start.onclick = function(){
      clearInterval(interval);
      interval = setInterval(startTimer, 10);
      reset.onclick = function(){
      clearInterval(interval);
        min = "00";
        seconds = "00";
        ms = "00";
        changemin.innerHTML = min;
        changeseconds.innerHTML = seconds;
        changems.innerHTML = ms;
      }
      stop.onclick = function(){
        clearInterval(interval);
        
      }
      function startTimer(){
        ms++;
        if(ms < 9){
          changems.innerHTML = "0"+ms;
          
        }
        if(ms > 9){
          changems.innerHTML = ms
        }
        if(ms > 99){
          seconds++;
          changeseconds.innerHTML = "0"+seconds;
          ms = 0;
          changems.innerHTML = '0'+0;
   
        }
        if(seconds <= 9){
          changeseconds.innerHTML = "0"+seconds;
        }
          if(seconds > 9){
            changeseconds.innerHTML = seconds;
            
          }
          if(seconds >= 60){
            min++;
            changemin.innerHTML = '0'+min;
            seconds = 0;
            ms = 0;
            
          }
        if(min>9){
          min++;
          changemin.innerHTML = min;
        }
        }
        
      }
    }