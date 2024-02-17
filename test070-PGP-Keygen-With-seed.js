import * as pgp from 'ed25519-keygen/pgp';
import { randomBytes } from 'ed25519-keygen/utils';
const pseed = randomBytes(32);
const pkeys = await pgp.getKeys(pseed, 'user@example.com', 'password');
console.log(pkeys.keyId);
console.log(pkeys.privateKey);
console.log(pkeys.publicKey);





import { generateMnemonic } from "bip39";
//const mnemonic = generateMnemonic(256) // 256 to be on the _really safe_ side. Default is 128 bit.
let mnemonic = "debate december quit kite resemble clock shell best develop hill vicious trophy error staff source master little control flame disorder burst dune wild trouble"
console.log(mnemonic) // prints 24 words

import { mnemonicToSeed } from "bip39";
const mnemonic_seed = (await mnemonicToSeed(mnemonic)).toString('hex')
console.log(mnemonic_seed)

import forge from "node-forge";
console.log(mnemonic_seed.slice(0,32))
const pkeys2 = await pgp.getKeys(Uint8Array.from(mnemonic_seed.slice(0,32)), 'user@example.com', 'password');
console.log(pkeys2.keyId);
console.log(pkeys2.privateKey);
console.log(pkeys2.publicKey);