function rnaComponent(){
    
    var rNA = document.getElementById("submitDNA").value;
    
    //var string = "This is the RNA complement -> ";
    
    var newText = rNA.split(",").map(function(RNA){
        
         switch(RNA) {
       case 'G':
           RNA = 'C';
           break;
       case 'C':
           RNA = 'G';
           break;
       case 'T':
           RNA = 'A';
           break;
       case 'A':
           RNA = 'U';
           break;
       case 'g':
           RNA = 'C';
           break;
       case 'c':
           RNA = 'G';
           break;
       case 't':
           RNA = 'A';
           break;
       case 'a':
           RNA = 'U';
           break;
       default:
           RNA = '<invalid>';
   }
   return RNA;
});

var output = document.getElementById("output");
output.innerHTML=newText;
   
    }
    