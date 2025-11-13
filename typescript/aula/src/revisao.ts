function totalVendas(...vendas: number[]): void {
  const quantidadeVendas = vendas.length;
  console.log(`Quant.:${quantidadeVendas}`);
}

totalVendas(1000, 4000, 8000, 2500);

//Criar uma função para receber uma quant. indefinida de nomes

function mostrarNomes(...nomes: string[]) {
  nomes.map((n) => {
    console.log(n.substring(0, 1));
  });
}

mostrarNomes("Ana", "Maria", "Sérgio", "Rodrigo");

const array = [10, 20, 30, 40, 60];
const array2 = [...array, 100];

console.log(array2);

const [primeiro, segundo, ...resto] = [10, 20, 30, 40, 60, 70];
console.log(resto);
