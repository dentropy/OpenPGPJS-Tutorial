import forge from "node-forge";
import * as openpgp from 'openpgp';

// Function to convert RSA key to OpenPGP format
async function rsaToOpenPGP(privateKeyPem) {
    // Parse RSA private key
    const rsaPrivateKey = forge.pki.privateKeyFromPem(privateKeyPem);

    // Convert RSA key to OpenPGP key
    const openpgpKey = await openpgp.key.readArmored({
        armoredKey: forge.pgp.key.readArmored(forge.pki.privateKeyToOpenSSH(rsaPrivateKey)).armor()
    });

    return openpgpKey.keys[0];
}

// Import RSA key in PEM format
const my_RSA_key = await forge.pki.rsa.generateKeyPair(2048)
console.log(my_RSA_key.privateKey)
var privKeyPEM = forge.pki.privateKeyToPem(my_RSA_key.privateKey);
console.log(privKeyPEM)
