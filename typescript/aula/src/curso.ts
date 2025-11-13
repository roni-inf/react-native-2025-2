interface Curso {
  readonly id: number;
  nome: string;
  data: Date;
  preco: number;
  promocao: (preco: number) => void;
}

function mostrarPromocao(preco: number): void {
  console.log(`Promoção do curso: R$ ${preco}`);
}

const novoCurso: Curso = {
  id: 1,
  nome: "React Native",
  data: new Date(2025, 3, 5),
  preco: 199.99,
  promocao: mostrarPromocao
};

console.log(
  `id: ${novoCurso.id} | nome: ${novoCurso.nome} | Preço: R$${novoCurso.preco} | Data: ${novoCurso.data.toLocaleDateString()}`
);
novoCurso.promocao(novoCurso.preco);