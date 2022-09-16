const{Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('ea65086046df4f2ea8a57261fc4b16c45fe91898e8133cc95332b5b33ffdb396');
const myWalletAddress = myKey.getPublic('hex');

let selCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
selCoin.addTransaction(tx1);


console.log('\nStarting the miner ....');
selCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of x is', selCoin.getBalansOfAddress(myWalletAddress));

selCoin.chain[1].transactions[0].amount = 1;


console.log('Is chain valid? ',selCoin.isChainValid());

