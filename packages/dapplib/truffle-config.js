require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone story return noble history hover flower army gaze'; 
let testAccounts = [
"0xb9c9f7d12bea9f7cad171166cb324f42d08ef03ec2583e3309b893a7db300fd3",
"0x4ba5e4f8310b2e8613df9a70935f55214550994d5612280c19241d524b4d575e",
"0x81e8ac54ce9e89cbe6a29f27976cb4ec0f6a9b67e577f485d4a585e04813c176",
"0xffbadd93d36207161e04142fba8551cc030704091d42a0207e4c07f82ab8a8bd",
"0x5e77d7b960196d25a6a026e96e761191600c9b046e1ff3c6595e8b88a29e514b",
"0xd1304bbdbf0766005375fff6666a8e04d23880c40c565c399b96e0b9935cdf44",
"0x6c158db57e4e5e620a9178754bea4d8167c1402960208dd1a7a11045c7a16f94",
"0x36a56a4acfccd9b80a7695b6e7c98addc93a5ac6004ac5b762c88c72de40a044",
"0xe8ddcb881068ea2d065be932bba02e3c27d5b8b097d5474b20aa401c1e1f8edb",
"0x767a5ac52b365bed7b4435fb831c0e8bf521ecbc50e0246d14cb5dae5a8a23df"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
