
function CreatorIndex(idxWa){

    this._maxSupply = 100000000;
    this._idxWa = idxWa;

    //stake the contract
    this.stake = function (sender, id, ntfTokens, erc20, erc1155 )
    {

        console.log('erc20 balance IDX_POOL : ', erc20.balanceOf(this._idxWa) )
        console.log('ERC1155 IDX_POOL  id: ', id , ' balance ' , erc1155.balanceOf(this._idxWa , id ) )

        if(erc1155.balanceOf(indexWA, id ) - ntfTokens < 0) throw Error('IDX_POOL: There arent this amount of token available on contract')

       // nominal value of token after the buy
       // usar o totalSupply() em vez do maxSupply()
       let nValue =  (erc20.maxSupply() - erc20.balanceOf(this._idxWa) )   / erc1155.issueCount() /  ( erc1155.balanceOf(this._idxWa , id ) - ntfTokens );

       console.log('Buy intention N ofTokens : ', ntfTokens, ' intention value: ' , nValue)
       
       //multiply nominal value for the number of tokens owner wants to move
       let balanceToMove = nValue * ntfTokens;
       console.log('tokens to move : ', balanceToMove )

       //tranfer the quantity of tokens from user to idx pool
       if(erc20.balanceOf(sender) < balanceToMove ) throw Error('IDX_POOL: Buyer wont have the balance for that amount')
       erc20.transfer(sender,  this._idxWa, balanceToMove);

       //transer the other way around from index pool to user
       erc1155.transferFrom(this._idxWa, sender, id, ntfTokens)
       

    }

    this.unstake = function (){
        
        console.log('erc20 balance IDX_POOL : ', erc20.balanceOf(this._idxWa) )
        console.log('ERC1155 IDX_POOL  id: ', id , ' balance ' , erc1155.balanceOf(this._idxWa , id ) )

        if(erc1155.balanceOf(indexWA, id ) - ntfTokens < 0) throw Error('IDX_POOL: There arent this amount of token available on contract')

       // nominal value of token after the buy
       let nValue =  (erc20.maxSupply() + erc20.balanceOf(this._idxWa) )   / erc1155.issueCount() /  ( erc1155.balanceOf(this._idxWa , id ) + ntfTokens );

       console.log('Buy intention N ofTokens : ', ntfTokens, ' intention value: ' , nValue)
       
       let balanceToMove = nValue * ntfTokens;

       console.log('tokens to move : ', balanceToMove )

       if(erc20.balanceOf(sender) < balanceToMove ) throw Error('IDX_POOL: Buyer wont have the balance for that amount')
       erc20.transfer(sender,  this._idxWa, balanceToMove);
       erc1155.transferFrom(this._idxWa, sender, id, ntfTokens)


    }
}

export default CreatorIndex;