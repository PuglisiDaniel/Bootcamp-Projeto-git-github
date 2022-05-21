class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }


    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'saldo insuficiente';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        if(valor<=0){
            return 'valor depositado inválido';
        }
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this.cartaoCredito;
    }

    set cartaoCredito(numero){
        this._cartaoCredito = numero;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'conta universitaria';
    }

    sacar(valor){
        if(valor>500){
            return 'nao e possivel sacar mais de 500 reais'
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}