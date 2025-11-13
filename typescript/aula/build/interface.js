"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno = {
    nome: "José",
    idade: 25,
    email: "jose@gmail.com",
};
console.log(aluno);
function imprimirDados({ nome, idade }) {
    console.log(`${nome} - ${idade}`);
}
imprimirDados({ nome: "Juan", idade: 25 });
//# sourceMappingURL=interface.js.map