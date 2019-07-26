
function pdt(n1,n2){
  
    var i;
	  var j;
    var a = n1.length;
    var b = n2.length;
    var mul = "0".repeat(a+b);
    var temp;
    var c; 
    
    if(parseInt(n1)==0||parseInt(n2)==0)
     return "0";
    for(i = a - 1; i >= 0; i--){
    	for( j = b - 1; j>=0; j--){

           temp = parseInt(n1[i]) * parseInt(n2[j]) + parseInt(mul[i+j+1]) ;
           c = parseInt(mul[i+j]) + parseInt(temp / 10)  ;
           mul=mul.substr(0,i+j)+c.toString()+mul.substr(i+j+1);
           c =  temp % 10;
           mul=mul.substr(0,i+j+1)+c.toString()+mul.substr(i+j+2);
           
      }
    }
    
    return mul.replace(/^0+/,'');


}

// console.log(" Product: " + pdt("1111111111111111111","11111111"))

module.exports={
  pdt:pdt
};