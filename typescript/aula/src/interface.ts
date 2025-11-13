interface Aluno {
  nome: string;
  idade: number;
  email?: string;
  endereco?: string;
}

const aluno: Aluno = {
  nome: "José",
  idade: 25,
  email: "jose@gmail.com",
};
console.log(aluno);

function imprimirDados({nome, idade}:Aluno):void{
    console.log(`${nome} - ${idade}`);
}

imprimirDados({nome:"Juan",idade:25});