import * as openpgp from 'openpgp';
import * as fs from 'fs';

// Generate Public Private Key Pair
const keypair0 = await openpgp.generateKey({
    type: 'ecc', // Type of the key, defaults to ECC
    curve: 'curve25519', // ECC curve name, defaults to curve25519
    userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
    passphrase: '', // protects the private key
    format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
});

console.log(keypair0)
console.log(keypair0.privateKey);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
console.log(keypair0.publicKey);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
console.log(keypair0.revocationCertificate); // '-----BEGIN PGP PUBLIC KEY BLOCK ... '

fs.writeFileSync("privateKey0", String(keypair0.privateKey))
fs.writeFileSync("publicKey0", String(keypair0.publicKey))


// Generate Public Private Key Pair
const keypair1 = await openpgp.generateKey({
    type: 'ecc', // Type of the key, defaults to ECC
    curve: 'curve25519', // ECC curve name, defaults to curve25519
    userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
    passphrase: 'password', // protects the private key
    format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
});

// console.log(privateKey1);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
// console.log(publicKey1);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
// console.log(revocationCertificate1); // '-----BEGIN PGP PUBLIC KEY BLOCK ... '

fs.writeFileSync("privateKey1", String(keypair1.privateKey))
fs.writeFileSync("publicKey1", String(keypair1.publicKey))