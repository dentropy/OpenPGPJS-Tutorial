import { generateMnemonic } from "bip39";

//const mnemonic = generateMnemonic(256) // 256 to be on the _really safe_ side. Default is 128 bit.
let mnemonic = "debate december quit kite resemble clock shell best develop hill vicious trophy error staff source master little control flame disorder burst dune wild trouble"

console.log(mnemonic) // prints 24 words




import { mnemonicToSeed } from "bip39";
const mnemonic_seed = (await mnemonicToSeed(mnemonic)).toString('hex')
console.log(mnemonic_seed)





import forge from "node-forge";
console.log(mnemonic_seed.slice(0,32))
var seedpass = new forge.util.ByteBuffer(mnemonic_seed.slice(0,32), 'utf8');
var keypair = forge.pki.ed25519.generateKeyPair({seed: String(seedpass)});

import * as openpgp from 'openpgp';
const { privateKeyArmored, publicKeyArmored } = await openpgp.generateKey({
    type: 'eddsa',
    curve: 'ed25519',
    seed: Uint8Array.from(Buffer.from(mnemonic_seed, 'hex')),
    userIDs: [{ name: 'Test User', email: 'test@example.com' }],
});