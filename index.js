var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

// adding listner
input.addEventListener("keyup", myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change", myResult);
// Taking initial values
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
	// When we change the input and output type values we need to
	// update the inputTypeValue and resultTypeValue
	inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
// Now comparing input and resultType value
// and adding formula
// mm
if(inputTypeValue==="millimeter" && resultTypeValue==="millimeter") { result.value = Number(input.value)*1;}
else if(inputTypeValue==="millimeter" && resultTypeValue==="centimeter") { result.value = Number(input.value)*0.1;}
else if(inputTypeValue==="millimeter" && resultTypeValue==="decimeter") { result.value = Number(input.value)*0.001;}
else if(inputTypeValue==="millimeter" && resultTypeValue==="meter") { result.value = Number(input.value)*0.0001;}
else if(inputTypeValue==="millimeter" && resultTypeValue==="") { result.value = Number(input.value)*0.00001;}
else if(inputTypeValue==="millimeter" && resultTypeValue==="") { result.value = Number(input.value)*0.000001;}
else if(inputTypeValue==="millimeter" && resultTypeValue==="") { result.value = Number(input.value)*0.0000001;}
// cm
if(inputTypeValue==="centimeter" && resultTypeValue==="millimeter") { result.value = Number(input.value)*10;}
else if(inputTypeValue==="centimeter" && resultTypeValue==="centimeter") { result.value = Number(input.value)*1;}
else if(inputTypeValue==="centimeter" && resultTypeValue==="decimeter") { result.value = Number(input.value)*0.1;}
else if(inputTypeValue==="centimeter" && resultTypeValue==="meter") { result.value = Number(input.value)*0.001;}
else if(inputTypeValue==="centimeter" && resultTypeValue==="decameter") { result.value = Number(input.value)*0.0001;}
else if(inputTypeValue==="centimeter" && resultTypeValue==="hexameter") { result.value = Number(input.value)*0.00001;}
else if(inputTypeValue==="centimeter" && resultTypeValue==="kilometer") { result.value = Number(input.value)*0.000001;}
// dm
if(inputTypeValue==="decimeter" && resultTypeValue==="millimeter") { result.value = Number(input.value)*100;}
else if(inputTypeValue==="decimeter" && resultTypeValue==="centimeter") { result.value = Number(input.value)*10;}
else if(inputTypeValue==="decimeter" && resultTypeValue==="decimeter") { result.value = Number(input.value)*1;}
else if(inputTypeValue==="decimeter" && resultTypeValue==="meter") { result.value = Number(input.value)*0.1;}
else if(inputTypeValue==="decimeter" && resultTypeValue==="decameter") { result.value = Number(input.value)*0.01;}
else if(inputTypeValue==="decimeter" && resultTypeValue==="hexameter") { result.value = Number(input.value)*0.001;}
else if(inputTypeValue==="decimeter" && resultTypeValue==="kilometer") { result.value = Number(input.value)*0.0001;}
// Meter
if(inputTypeValue==="meter" && resultTypeValue==="millimeter") { result.value = Number(input.value)*0.001;}
else if(inputTypeValue==="meter" && resultTypeValue==="centimeter") { result.value = Number(input.value)*0.001;}
else if(inputTypeValue==="meter" && resultTypeValue==="decimeter") { result.value = Number(input.value)*0.1;}
else if(inputTypeValue==="meter" && resultTypeValue==="meter") { result.value = Number(input.value)*1;}
else if(inputTypeValue==="meter" && resultTypeValue==="decameter") { result.value = Number(input.value)*10;}
else if(inputTypeValue==="meter" && resultTypeValue==="hexameter") { result.value = Number(input.value)*100;}
else if(inputTypeValue==="meter" && resultTypeValue==="kilometer") { result.value = Number(input.value)*1000;}
// Decameter
if(inputTypeValue==="decameter" && resultTypeValue==="millimeter") { result.value = Number(input.value)*10000;}
else if(inputTypeValue==="decameter" && resultTypeValue==="centimeter") { result.value = Number(input.value)*1000;}
else if(inputTypeValue==="decameter" && resultTypeValue==="decimeter") { result.value = Number(input.value)*100;}
else if(inputTypeValue==="decameter" && resultTypeValue==="meter") { result.value = Number(input.value)*10;}
else if(inputTypeValue==="decameter" && resultTypeValue==="decameter") { result.value = Number(input.value)*1;}
else if(inputTypeValue==="decameter" && resultTypeValue==="hexameter") { result.value = Number(input.value)*0.1;}
else if(inputTypeValue==="decameter" && resultTypeValue==="kilometer") { result.value = Number(input.value)*0.01;}

// Hexameter
if(inputTypeValue==="hexameter" && resultTypeValue==="millimeter") { result.value = Number(input.value)*100000;}
else if(inputTypeValue==="hexameter" && resultTypeValue==="centimeter") { result.value = Number(input.value)*10000;}
else if(inputTypeValue==="hexameter" && resultTypeValue==="decimeter") { result.value = Number(input.value)*1000;}
else if(inputTypeValue==="hexameter" && resultTypeValue==="meter") { result.value = Number(input.value)*100;}
else if(inputTypeValue==="hexameter" && resultTypeValue==="decameter") { result.value = Number(input.value)*10;}
else if(inputTypeValue==="hexameter" && resultTypeValue==="hexameter") { result.value = Number(input.value)*1;}
else if(inputTypeValue==="hexameter" && resultTypeValue==="kilometer") { result.value = Number(input.value)*0.1;}

// Kilometer
if(inputTypeValue==="kilometer" && resultTypeValue==="millimeter") { result.value = Number(input.value)*1000000;}
else if(inputTypeValue==="kilometer" && resultTypeValue==="centimeter") { result.value = Number(input.value)*100000;}
else if(inputTypeValue==="kilometer" && resultTypeValue==="decimeter") { result.value = Number(input.value)*10000;}
else if(inputTypeValue==="kilometer" && resultTypeValue==="meter") { result.value = Number(input.value)*1000;}
else if(inputTypeValue==="kilometer" && resultTypeValue==="decameter") { result.value = Number(input.value)*100;}
else if(inputTypeValue==="kilometer" && resultTypeValue==="hexameter") { result.value = Number(input.value)*10;}
else if(inputTypeValue==="kilometer" && resultTypeValue==="kilometer") { result.value = Number(input.value)*1;}
}