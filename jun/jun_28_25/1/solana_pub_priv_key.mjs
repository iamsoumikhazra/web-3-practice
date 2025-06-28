import { Keypair } from '@solana/web3.js'
import nacl from 'tweetnacl'
import bs58 from 'bs58'

const keypair = Keypair.generate()

const publicKey = keypair.publicKey
const secretKey = keypair.secretKey //secretKey is basically 64-bit Uint8Array (private Key + public Key)
const PrivateKey = secretKey.slice(0, 32)

const message = "Hello World"

const encodedMessage = new TextEncoder().encode(message)

const signature = nacl.sign.detached(encodedMessage, secretKey)


let IsVerified = () => {
    return (
        nacl.sign.detached.verify(
            encodedMessage,
            signature,
            publicKey.toBytes()
        )
    )
}

console.log(`public key ---> ${publicKey.toBase58()}`)
console.log(`private key ---> ${bs58.encode(PrivateKey)}`)

console.log(`secret key ---> ${bs58.encode(secretKey)}`)
console.log(`${IsVerified()?'yes':'not'} verified`)