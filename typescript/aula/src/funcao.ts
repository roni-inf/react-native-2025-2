let descricao: string | null;
descricao = null;
let valor;
console.log(descricao);

function login(username: string): boolean {
  console.log(`Bem vindo  ${username}`);
  return false;
}
console.log(login("Fulano") ? "Logado" : "não logado");


function cadastro(nome:string, situacao=true, email?:string):void{
    console.log(`${nome} - ${situacao} - ${email}`);
}

console.log(cadastro("Ana",false));


