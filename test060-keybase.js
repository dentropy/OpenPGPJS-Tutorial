import kbpgp from 'kbpgp';

console.log(Object.keys(kbpgp))

var F = kbpgp["const"].openpgp;

var opts = {
  userid: "User McTester (Born 1979) <user@example.com>",
  seed : "HELLOWORLD",
  genseed : "Helloworld",
  primary: {
    nbits: 4096,
    flags: F.certify_keys | F.sign_data | F.auth | F.encrypt_comm | F.encrypt_storage,
    expire_in: 0  // never expire
  },
  subkeys: [
    {
      nbits: 2048,
      flags: F.sign_data,
      expire_in: 86400 * 365 * 8 // 8 years
    }, {
      nbits: 2048,
      flags: F.encrypt_comm | F.encrypt_storage,
      expire_in: 86400 * 365 * 8
    }
  ]
};

kbpgp.KeyManager.generate(opts, function(err, alice) {
  if (!err) {
    // sign alice's subkeys
    alice.sign({}, function(err) {
      console.log(alice);
      // export demo; dump the private with a passphrase
      alice.export_pgp_private ({
        passphrase: 'booyeah!'
      }, function(err, pgp_private) {
        console.log("private key: ", pgp_private);
      });
      alice.export_pgp_public({}, function(err, pgp_public) {
        console.log("public key: ", pgp_public);
      });
    });
  }
});