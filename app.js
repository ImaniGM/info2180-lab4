"use strict";


    
      function clicker() {
      
     
      const xhttpR= new XMLHttpRequest();
      xhttpR.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var ale= document.innerHTML = this.response;
          alert(this.response);
        }
      };
         
          xhttpR.open ('GET', 'superheroes.php', true);
         
          xhttpR.send ();

    }
  


  


  
          
        

    

  