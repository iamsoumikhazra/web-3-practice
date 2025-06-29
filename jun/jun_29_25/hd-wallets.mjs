import { generateMnemonic, mnemonicToSeedSync } from "bip39";  
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";


// const words = generateMnemonic(256);
// const words2 = generateMnemonic(128);

// console.log("Mnemonic 256-bit:", words);
// console.log("Mnemonic 128-bit:", words2);

// // Convert mnemonic to seed (synchronously)
// const seed = mnemonicToSeedSync(words);  // returns a Buffer
// console.log("Seed (hex):", seed.toString("hex"));


// btc address, eth address, sol address

// m/44/0/0 => 1st wallet on bitcoin    --------> these are legacy address of the coin
// m/44/501/0 => 1st wallet on solana   --------> these are legacy address of the coin
// m/44/60/0 => 1st wallet on eth       --------> these are legacy address of the coin


// m/44/0/1 => 2nd wallet on bitcoin
// m/44/501/1 => 2nd wallet on solana
// m/44/60/1 => 2nd wallet on eth




// backpack use different address like
// m/44/501/x/0  -> here x is the wallet no. for solana


// ledger use 
// m/44/501/x/0/0   -> here x is the wallet no. solana


// lets create the same  private public key using same seed phase that is used in backpack

// const mnemonic = generateMnemonic();
const mnemonic = "harbor seven window bread palm obey vast slight giggle layer walnut home";

const seedForBackpack = mnemonicToSeedSync(mnemonic);  //it return a buffer

console.log("Mnemonic:", mnemonic);

for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`;
  const derivedSeed = derivePath(path, seedForBackpack.toString("hex")).key; //it gives buffer for each accounts
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(secret);
  console.log(`Account ${i} Public Key:`, keypair.publicKey.toBase58());
}
