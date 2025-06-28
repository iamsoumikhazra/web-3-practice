const crypto = require("crypto");

const baseString = "100xdevs";
let nonce = 0;

while (true) {
    const dataToHash = baseString + nonce;
    const hashedValue = crypto.createHash("sha256").update(dataToHash).digest("hex");
    const hashPrefix = hashedValue.slice(0, 5);

    if (hashPrefix === "00000") {
        console.log(`✅ Hash: ${hashedValue}  |  Nonce: ${nonce}  |  Data: ${dataToHash}`);
        break;
    }

    nonce++;
}
