import * as ed from '@noble/ed25519';

(async () => {
  const privateKey = ed.utils.randomPrivateKey();
  const publicKey = await ed.getPublicKeyAsync(privateKey);

  const message = "Hello World From Soumik";
  const encodedMessage = new TextEncoder().encode(message);

  const signature = await ed.signAsync(encodedMessage, privateKey);
  const isVerified = await ed.verifyAsync(signature, encodedMessage, publicKey);

  console.log(`
Original message: ${message}
Encoded message (bytes): ${encodedMessage}
Private key (bytes): ${privateKey}
Public key (bytes): ${publicKey}
Signature (bytes): ${signature}

✅ Verification result: ${isVerified ? 'Signature is valid.' : 'Signature is NOT valid.'}
  `);
})();
