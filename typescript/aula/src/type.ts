type Marca = {
  id: number;
  nome: string;
};

type Categoria = {
  descricao: string;
};

type MarcaCategoria = Marca & Categoria;

const marcaCategoria: MarcaCategoria = {
  id: 1,
  nome: "Honda",
  descricao: "SUV",
};
