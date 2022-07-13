/*
                        Atividade (De Stephane Snusch, da DIO): Conta Bancária
                Criando vários tipos de contas bancárias e operações em cada uma.
            1. Criar a classe ContaBancaria, possuindo os parâmetros agencia, numero, tipo e saldo;
            2. Em ContaBancaria, construir o getter e o setter do saldo;
            3. Criar os métodos sacar e depositar;
            4. Criar uma classe-filha, ContaCorrente, herdando todos os parâmetros e possuindo o parâmetro
               chamado cartaoCredito;
            5. Em ContaCorrente, construir o getter e o setter de cartaoCredito;
            6. Em ContaCorrente, fazer com que o tipo seja 'contacorrente' por padrão;
            7. Criar uma classe-filha chamada de ContaPoupanca, herdando todos os parâmetros de ContaBancaria;
            8. Criar uma classe-filha chamada ContaUniversitaria, herdando todos os parâmetros de ContaBancaria;
            9. Fazer com que o método saque de ContaUniversitaria, seja capaz apenas de sacar valores abaixo que 500 reais.
*/

class ContaBancaria{   /* Classe ContaBancaria. */

    constructor(agencia, numero, tipo){   /* Método Construtor. Ele possui 4 argumentos. */
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // OBS: _saldo vai ser usado em getter e setter. Por isso, é que foi usado o
        // underline, para ser um 'lembrete ao programador'.
    }

    // OBS: Dentro do construtor, os campos já foram declarados, criados e inicializados.

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){   /* Método sacar. */
        if(valor > this._saldo){
            return 'Operação Negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}


class ContaCorrente extends ContaBancaria{   /* Classe ContaCorrente.  Esta classe será filha da classe ContaBancaria. */

    constructor(agencia, numero, cartaoCredito){ /* Construtor da classe ContaCorrente, ao qual está possuindo 3 argumentos. */
        super(agencia, numero); /* Chamando o construtor da classe pai, ou seja, o construtor da classe ContaBancaria. */
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria{ 

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class ContaUniversitaria extends ContaBancaria{

    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação Negada!';
        }
        this._saldo = this._saldo - valor;
    }

}
