"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let descricao;
descricao = null;
let valor;
console.log(descricao);
function login(username) {
    console.log(`Bem vindo  ${username}`);
    return false;
}
console.log(login("Fulano") ? "Logado" : "não logado");
function cadastro(nome, situacao = true, email) {
    console.log(`${nome} - ${situacao} - ${email}`);
}
console.log(cadastro("Ana", false));
//# sourceMappingURL=funcao.js.map