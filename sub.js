function subtract(n1,n2){ 

    
   

    var i;
    var a = n1.length;	
    var b = n2.length;
    var c = a - b;
    var tempDiff;
    var carry = 0;
    var diff = "";
    



	for(i = b-1; i >= 0; i--){

		
		tempDiff = parseInt(n1[i + c]) - parseInt(n2[i]) - carry;

		if(tempDiff < 0){
			tempDiff = tempDiff + 10;
			carry = 1;
		}
		else
			carry = 0;
		
		diff = tempDiff.toString() + diff;
       

	}
     
     

	for(i = c -1; i >= 0; i-- ){

		tempDiff = parseInt(n1[i]) - carry;
		if(tempDiff < 0){
			tempDiff = tempDiff + 10;
			carry = 1;
		}
		else
			carry = 0;

		diff = tempDiff.toString() + diff;
	}

	

	 return diff;
}



// console.log(" Difference: " + sub("22222222222222222222222222222222222222222222222","111111111111111111111"))

module.exports={
  subtract:subtract
};