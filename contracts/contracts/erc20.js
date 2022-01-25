function ERC20(owner)
{
    
    this._totalSupply = 1;
    this._maxSupply = 1000000;
    this._balances = {};
    this._mintForOwner = 0.01;
    this._owner = owner;

    
    this.mint = function (wallet, tokens)
    {
        this._balances[wallet] = tokens;
        this._totalSupply += tokens;
    }

    //initial mint for owner
    this.mint(this._owner , this._maxSupply *  this._mintForOwner);


    this.transfer = function(sender, recipient, amount)
    {
        let senderBalance = this._balances[sender];
        if( amount >= senderBalance) throw  Error("ERC20: transfer amount exceeds balance")

        this._balances[sender] = senderBalance - amount;
        this._balances[recipient] ? this._balances[recipient] += amount : this._balances[recipient] =  amount;
    }

    this.balanceOf = function(address)
    {
        return this._balances[address] || 0;
    } 

    this.owners = function(){
        return this._balances;
    }
    this.maxSupply = function (){
        return this._maxSupply;
    }
}

export default ERC20;