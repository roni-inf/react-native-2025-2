// class Pessoa {
//   nome: string;
//   idade: number;

//   constructor(nome: string, idade: number) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   pessoa1 = new Pessoa("Ana", 25);

// }

//Tipagem Dinâmica - inferência
let nome = "Maria";
nome = "Roni";
console.log(nome);

let numero: number = 1000;
let texto: string = "React Native";
console.log(texto);

let matricula: string | number;
matricula = "21";
matricula = 123;

console.log(typeof matricula);
let preco: any;
preco=500.00;

let logado:boolean=true;
let logout:number =1;

logado = Boolean(logout);
console.log(logado);

