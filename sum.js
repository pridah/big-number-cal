function add(n1,n2){

    

	
	
    var a = n1.length;
    var b = n2.length;
    var i;
    var c = a - b;
    var tempSum;
    var carry = 0;
    var sum = "";
    var digit;



	for(i = b-1; i >= 0; i--){

		
		tempSum = parseInt(n1[i + c]) + parseInt(n2[i]) + carry;
		carry = parseInt(tempSum / 10);
        digit = tempSum % 10; 
        sum = digit.toString().concat(sum);
       

	}
     
     

	for(i = c -1; i >= 0; i-- ){

		tempSum = parseInt(n1[i]) + carry;
		carry = parseInt(tempSum / 10);
		digit = tempSum % 10;
	    sum = digit.toString().concat(sum);
	}

	if(carry){
		sum = carry.toString() + sum;
	}

	return sum;
}



// console.log(" Sum: " + sum("111111111111111111111","111"));
module.exports={
  add:add
};