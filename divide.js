function div(n1,n2){

if(parseInt(n1)< parseInt(n2)){
    return "0";
}
if(parseInt(n2)==0)
     return "Divide by zero";
    
var q ="";
var a = n1.length;
var i = 0;
var temp = parseInt(n1[i]); 

var t;
n2 = parseInt(n2);

while(temp < n2){
 temp = temp * 10 + parseInt(n1[++i]); 
 
}

while(a > i){
 t =  parseInt(temp / n2);
 q = q + t.toString();
 temp = (temp % n2) * 10 + parseInt(n1[++i]); 
}

return q;


}


// console.log(" Quotient: " + div("111111111","11"));

module.exports={
    div:div
  };