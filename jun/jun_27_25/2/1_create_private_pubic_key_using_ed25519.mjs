import * as ed from '@noble/ed25519'
import bs58 from 'bs58'

(async () => {
    // 1. Generate private key
    const privateKey = ed.utils.randomPrivateKey();

    // 2. Get the public key from private key
    const publicKey = await ed.getPublicKeyAsync(privateKey);

    // 3. Encode keys into base58
    const base58PrivateKey = bs58.encode(privateKey);
    const base58PublicKey = bs58.encode(publicKey);

    // 4. Print
    console.log(`Private Key (base58): ${base58PrivateKey}`);
    console.log(`Public Key  (base58): ${base58PublicKey}`);

    // 5. Sign a message 
    let message = "Hello World"
    const encodedMessage = new TextEncoder().encode(message)
    const signature = await ed.signAsync(encodedMessage, privateKey)
    console.log(`Signature (base58): ${bs58.encode(signature)}`)

    // 6. Verify the signature using the public key
    const isValid = await ed.verifyAsync(signature, encodedMessage, publicKey);
    console.log(`Signature valid? ${isValid?'yes':'no'}`);

})();
