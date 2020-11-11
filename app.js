
"use strict";

document.addEventListener('DOMContentLoaded', function(){

    var btn= document.getElementById("button");
    var txtInput = document.getElementById("txtBox").value;

    btn.addEventListener('click', (e) =>{

      e.preventDefault();
      const xhttpR= new XMLHttpRequest();
      xhttpR.onreadystatechange = function () {
          if (xhttpR.readyState==XMLHttpRequest.DONE && xhttpR.status == 200) {
            var ale= xhttpR.response;
            txtInput;

            document.getElementById("result").innerHTML= ale;
            
          }
          if (xhttpR.readyState==XMLHttpRequest.DONE && xhttpR.status == 404) {
              alert('File not found');
    }
}
       
        xhttpR.open ('GET', "superheroes.php?q="+txtInput, true);
        xhttpR.send ();
    
});
});
    
    
  


  
          
        

    

  