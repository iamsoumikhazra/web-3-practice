import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { HDNodeWallet} from "ethers";


// const mnemonic = generateMnemonic()
const mnemonic = "harbor seven window bread palm obey vast slight giggle layer walnut home";



const seedForEth = mnemonicToSeedSync(mnemonic)

// console.log(seedForEth)
const hdNode = HDNodeWallet.fromSeed(seedForEth)

for(let i = 0; i<4; i++){
    let path = `m/44'/60'/${i}'/0'`
    let child = hdNode.derivePath(path)
    console.log(`Account ${i} public key: ${child.address} and private key ${child.privateKey}`)
}
