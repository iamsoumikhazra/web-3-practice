const crypto = require("crypto")

let counter = 0;
while (true) {
    const hash = crypto.createHash("sha256").update(counter.toString()).digest("hex");
    
    const firstFour = hash.slice(0, 6);
    if (firstFour === "000000") {
        console.log(`Hash: ${hash}`);
        console.log(`Found at counter: ${counter}`);
        break;
    }
    console.log(counter)
    counter++;

}


// let input = "hello"
// // let input = 99 //in the update section this value need to be a string

// const hash = crypto.createHash("sha256").update(input).digest("hex");
// console.log(typeof hash)