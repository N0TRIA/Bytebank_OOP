import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233345;
cliente1.rg = 123456789;

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = 22233344456;
cliente2.rg = 987654321;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-100);

const valorScado = contaCorrenteRicardo.sacar(50);

console.log(valorScado);
console.log(contaCorrenteRicardo);
