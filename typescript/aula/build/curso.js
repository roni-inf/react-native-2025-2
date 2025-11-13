"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarPromocao(preco) {
    console.log(`Promoção do curso: R$ ${preco}`);
}
const novoCurso = {
    id: 1,
    nome: "React Native",
    data: new Date(2025, 3, 5),
    preco: 199.99,
    promocao: mostrarPromocao
};
console.log(`id: ${novoCurso.id} | nome: ${novoCurso.nome} | Preço: R$${novoCurso.preco} | Data: ${novoCurso.data.toLocaleDateString()}`);
novoCurso.promocao(novoCurso.preco);
//# sourceMappingURL=curso.js.map