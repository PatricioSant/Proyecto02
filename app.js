const formularioUI = document.querySelector("#formulario");
const listaPlatosUI = document.getElementById("listaPlatos");

let arrayPlatos = [];

const CrearItem = (plato) => {
  let item = {
    plato: plato,
    estado: true,
  };

  arrayPlatos.push(item);

  return item;
};

let mar = CrearItem("Ceviche");
let fritos = CrearItem("Lomo a lo pobre");
console.log(mar);

console.log(arrayPlatos);
