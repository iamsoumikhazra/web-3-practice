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

// Derive seed buffer from mnemonic
const masterSeed = mnemonicToSeedSync(mnemonic);

console.log("Mnemonic:", mnemonic);

for (let accountIndex = 0; accountIndex < 4; accountIndex++) {
  const derivationPath = `m/44'/501'/${accountIndex}'/0'`;

  // Derive account-specific private key seed
  const accountSeed = derivePath(derivationPath, masterSeed).key;

  // Generate Ed25519 keypair from seed
  const privateKey = nacl.sign.keyPair.fromSeed(accountSeed).secretKey;

  // Create Solana-compatible Keypair
  const solanaKeypair = Keypair.fromSecretKey(privateKey);

  console.log(`Account ${accountIndex} Public Key:`, solanaKeypair.publicKey.toBase58());
}
