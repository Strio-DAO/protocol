function ERC1155(owner)
{
    
    this._maxSupply = {};
    this._totalSupply = {};
    this._balances = {};
    this._ipr = 0.40; 
    this._owner = owner;
    this._issuedCount = 0;

    this.issueCount = function(){
        return this._issuedCount;
    }

    this.balanceOf = function(address, id){
        return this._balances[id][address];
    }

    this.issue = function(sender, id, maxSupply, idxAddress)
    {
        if(sender != this._owner) throw Error('ERC1155: NOT_THE_OWNER');

        this._maxSupply[id] = maxSupply;
        this._balances[id] = {}
        //mint the IPR fator to index contractor
        this._issuedCount ++;
        this.mint(idxAddress, id, (maxSupply * this._ipr) );

    } 

    this.transferFrom = function(from, to, id, amount )
    {
        let fromBalance = this._balances[id][from];
        if(fromBalance < amount ) throw ('ERC1155: insufficient balance for transfer');
        
        this._balances[id][from] = fromBalance - amount;
        this._balances[id][to] += amount;

        //emit events
    }

    this.mint = function (to, id, amount)
    {
        if(amount <= 0 ) throw Error('ERC1155: Amount should be great then 0');
        if(this._totalSupply[id] + amount <= this._maxSupply[id] ) throw Error('ERC1155: ERR_EXCEEDED_MAX_SUPPLY');
        // console.log('debug ', amount );

        //update the total supply of id 
        this._totalSupply[id] =   this._totalSupply[id] ?  this._totalSupply[id] + amount : amount;
        //set the map balance of id to that wallet with amuont
        this._balances[id][to] =  this._balances[id][to] ?   this._balances[id][to] + amount : amount ;
    }

    this.balanceAll = function(){
        return this._balances;
    }

    this.totalBalance = function(sender)
    {
        let total = 0;
        for (let elem in this._balances ) {

            // console.log('elem .: ', this._balances[elem][sender] )
            total += this._balances[elem][sender];
        }
        return total;
    }

    this.maxSupply = function ()
    {
        return this._maxSupply;
    }
}

export default ERC1155;