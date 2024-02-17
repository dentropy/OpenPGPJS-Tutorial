import * as openpgp from 'openpgp';
import * as fs from 'fs';

let privateKey0raw = fs.readFileSync('./privateKey0')
let privateKey1raw = fs.readFileSync('./privateKey1')

// Regenerate Public Keys
const privateKey0 = await openpgp.readPrivateKey({ armoredKey: String(privateKey0raw) })

console.log(privateKey0.armor())
console.log(privateKey0.toPublic().armor())

let passphrase = "password"
// const privateKey1 = await openpgp.decryptKey({
//     privateKey: await openpgp.readPrivateKey({ armoredKey: privateKey1raw }),
//     passphrase : "password"
// });
const privateKey1 = await openpgp.readPrivateKey({ armoredKey: String(privateKey1raw) })

console.log(privateKey1.armor())
console.log(privateKey1.toPublic().armor())
console.log(privateKey1.toPublic().getAlgorithmInfo())
console.log(privateKey1.toPublic().getSubkeys())
console.log(privateKey1.toPublic().getFingerprint())
console.log(await privateKey1.toPublic().getExpirationTime())
console.log(privateKey1.toPublic().getUserIDs())