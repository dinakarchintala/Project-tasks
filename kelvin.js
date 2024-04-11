const  kelvin =293; //since it is defined a constant variable we used const to set .
 let celsius=kelvin-273; // subtracting kelvin with 273 gives celsius
 let Fahrenheit=(celsius*9/5)+32;
 let rounded = Math.round(Fahrenheit); // math.round is an inbuilt function that rounds the float value
 let fahrenheit = Math.floor(Fahrenheit);//math.floor will cut down the decimal value 5.7->5
 console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`);
 

