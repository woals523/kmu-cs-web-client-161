console.log("hello homework3");

function stringToInt(string){
	this.string = string;
	var result = undefined;
	if (isNaN(parseInt(string))){
		result = "NaN";
	}else{
		result = parseInt(string);
	}
	return result;
}

function maskNumber(input){
	this.input = input;

	var mask_number = input.substring(0, 7);
	var mask = "****";
	var mask_number = mask_number.concat(mask); 
	
	return mask_number;
}

function getAverage(input_array){
	this.input_array = input_array;
	var sum = 0;
	for(var i = 0; i<input_array.length; i++){
		sum = sum + input_array[i];
	}
	var avg = sum/input_array.length;
	
	return avg;
}

function isMultipleSeven(input){
	this.input = input;
	
	if ( (input%7) == 0 ){
		return true;
	} else{
		return false; 
	}
}

function operation(operator, input1, input2){
	this.operator = operator;
	this.input1 = input1;
	this.input2 = input2;
	var result = undefined;
	
	switch(operator){
		case "add":
		result = input1 + input2;
		break;
		
		case "substract":
		result = input1 - input2;
		break;
			
		case "multiply":
		result = input1 * input2;
		break;
		
		case "divide":
		result = input1 / input2;
		break;
		
		default:
		console.log("Not Supported");
		break;
	}
	
	return result;		
	
}

function triangleMtn(input){
	this.input = input;
	var result ="";
	
	for (var i = 1; i <= input; i++){
		for(var j = 1; j <= i; j++){
			result += "*";
		}
		result += "\n";
	}
	
	console.log(result);
}
