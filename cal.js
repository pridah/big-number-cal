const multiply=require('./multiply.js');
const sum=require('./sum.js');
const sub=require('./sub.js');
const divide=require('./divide.js');
var a = "-123";
var b = "-111";


if((a[0] == '-') && (b[0] != '-')){
    a=a.slice(1);
    if(parseInt(a) > parseInt(b)){
     
    
     console.log(" Sum: "  + "-" + sub.subtract(a , b));

     console.log(" Diff: " + "-" +sum.add(a , b));
     
     console.log(" Product: " + "-" + multiply.pdt(a , b));
     
     console.log(" Quotient: " + "-" + divide.div( a , b));
    } 

    else{
        
        console.log(" Sum: "  + sub.subtract(b , a));

        console.log(" Diff: " + "-" +sum.add(b , a));
        
        console.log(" Product: " + "-" + multiply.pdt(a , b));
        
        console.log(" Quotient: " +  divide.div( a , b));
   
    }
    
}

else if((b[0] == '-') && (a[0] != '-')){
    b=b.slice(1);
    if(parseInt(a) > parseInt(b)){
     
    
     console.log(" Sum: "   + sub.subtract(a , b));

     console.log(" Diff: " +  sum.add(a , b));
     
     console.log(" Product: " + "-" + multiply.pdt(a , b));
     
     console.log(" Quotient: " + "-" + divide.div( a , b));
    } 

    else{
        
        console.log(" Sum: "  + "-" + sub.subtract(b , a));

        console.log(" Diff: "  +sum.add(b , a));
        
        console.log(" Product: " + "-" + multiply.pdt(a , b));
        
        console.log(" Quotient: " +  divide.div( a , b));
   
    }
}

else if((a[0] == '-') && (b[0] == '-')){
    a = a.slice(1);
    b = b.slice(1);
    if(parseInt(a) > parseInt(b)){
     
    
     console.log(" Sum: "  + "-" + sum.add(a , b));

     console.log(" Diff: " + "-" +sub.subtract(a , b));
     
     console.log(" Product: "  + multiply.pdt(a , b));
     
     console.log(" Quotient: "  + divide.div( a , b));
    } 

    else{
        
        console.log(" Sum: "  + "-" + sum.add(b , a));

        console.log(" Diff: "  +sub.subtract(b , a));
        
        console.log(" Product: "  + multiply.pdt(a , b));
        
        console.log(" Quotient: " +  divide.div( a , b));
   
    }
}

else{
    
    if(parseInt(a) > parseInt(b)){
     
    
     console.log(" Sum: "  +  sum.add(a , b));

     console.log(" Diff: " + sub.subtract(a , b));
     
     console.log(" Product: " +  multiply.pdt(a , b));
     
     console.log(" Quotient: "  + divide.div( a , b));
    } 

    else{
        
        console.log(" Sum: "  + sum.add(b , a));

        console.log(" Diff: " + "-" +sub.subtract(b , a));
        
        console.log(" Product: " + multiply.pdt(a , b));
        
        console.log(" Quotient: " +  divide.div( a , b));
   
    }
    
    
}



