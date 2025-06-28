// let str = "h"

// const binaryRepresentation = new TextEncoder().encode(str)

// console.log(binaryRepresentation)


// const arr = new Uint8Array([256])

// console.log(arr)





const myStr = "hello";

// Convert the string into a Uint8Array where each element is the UTF-8 encoded (8-bit) representation of each character
const byteArray = new TextEncoder().encode(myStr);

console.log(byteArray); // Uint8Array of bytes representing each character

 let arrayToHex = (byteArray) =>{
    let hexString = ''
    for(let i = 0; i < byteArray.length; i++){
        hexString += byteArray[i].toString(16).padStart(2,'0');
    }
    return hexString;
 }

console.log(arrayToHex(byteArray)) 