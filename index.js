import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Edward", 66692548158);
const cliente2 = new Cliente("Alice", 55622733308);


const contaCorrenteEdward = new ContaCorrente(cliente1, 1001);
contaCorrenteEdward.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteEdward.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);


