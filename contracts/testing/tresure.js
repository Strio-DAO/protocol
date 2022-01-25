import ERC20 from '../contracts/erc20'
import ERC1155 from '../contracts/erc1155'
import CreatorIndex from '../contracts/indexPool'

let indexWA = '0x88888';
let drBrownWA = '0x1111111'
let s3mzWA   = '0x2222222'
let godInMakingWA   = '0x33333'


let erc20 = new ERC20();
erc20.mint(drBrownWA, 100000);
erc20.mint(s3mzWA, 200000);
erc20.mint(godInMakingWA, 50000);
console.log('ERC20 owners ', erc20.owners() );

// ERC1155
let erc1155 = new ERC1155(drBrownWA);
erc1155.issue(drBrownWA, 1, 10000,  indexWA)
erc1155.issue(drBrownWA, 2, 5000,  indexWA)
erc1155.issue(drBrownWA, 3, 1000,  indexWA)
// erc1155.issue(drBrownWA, 4, 10,  indexWA)

console.log("Check max supply of 1: ")
console.log(erc1155.maxSupply());

erc1155.mint(s3mzWA, 1, 10000)
erc1155.mint(godInMakingWA, 2, 5000)
erc1155.mint(drBrownWA, 3, 1000)


console.log('ERC1155 balance ', erc1155.balanceAll() );


let idxBalance = erc1155.totalBalance(indexWA);
console.log('Total balance idx : ', idxBalance );

//buy intention

//unitary value for - for each of balance
let nValue1 = erc20.maxSupply() / erc1155.issueCount() / erc1155.balanceOf(indexWA, 1)
let nValue2 = erc20.maxSupply() / erc1155.issueCount() / erc1155.balanceOf(indexWA, 2)
let nValue3 = erc20.maxSupply() / erc1155.issueCount() / erc1155.balanceOf(indexWA, 3)

console.log('Nominal Val. 1 : ',  nValue1);
console.log('Nominal Val. 2 : ',  nValue2);
console.log('Nominal Val. 3 : ',  nValue3);

let poolIdx = new CreatorIndex(indexWA);
 poolIdx.stake(drBrownWA, 1, 300, erc20, erc1155)


console.log('ERC20 owners ', erc20.owners() );

// console.log('ERC1155 balance ', erc1155.balanceAll() );
