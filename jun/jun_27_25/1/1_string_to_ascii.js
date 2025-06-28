let string = "hello";

let binaryRepresentation = new TextEncoder().encode(string);


console.log(` unit8Array  representation of ${string} is  ${binaryRepresentation}`);


console.log(`uint array to hex conversion: `)

binaryRepresentation.map((byte) => 
  console.log(byte.toString(16).padStart(2, '0'))
);
 
console.log(`uint array to base-64 conversion: `)

const base64Encoded = Buffer.from(binaryRepresentation).toString("base64");
console.log(base64Encoded);

