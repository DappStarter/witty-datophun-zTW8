require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz entry brown venture stone cost spider unlock half problem metal genuine'; 
let testAccounts = [
"0x96fad565a9beb3fede8b5bc40f261369be35c4a2429af21065c7730526a2e8e3",
"0x6e564a10e70a4c3b90e2a0640c5889d3359e81cf00fec75f9116ae31517d16dd",
"0x9f4c5b45bca3066d0492d9a9d0b8ae5762cc7e845f784b86a95841f9b7fb550f",
"0x4da6daa152ad9c370c40e66784f1eb669aac6ac10c7d55cd11492a37acd649f4",
"0x5f94272b0654284489c72c49b88bc03a4ff79ea5979b9ab963e438ca299bf725",
"0x8e626d66f8772ffe6462120f353203591043657a3d6b9c7e0210ef2092694a0c",
"0xcd082569e3fa908eec543abfe67ad7a83eb11fe3cf817e888803926ee745482b",
"0x384bef6b8e720e093762f19389b58fb11ae6d6d4ba168c3919e8d65725b5b880",
"0x1e75d6ef492d12c0ace345575748f07fee4dbaa04dde8ebb3fd43f8affcff379",
"0xaf223f9468fa66ea09854e5036de02a82a2ae070ea4fb8624648b2a50000a681"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


