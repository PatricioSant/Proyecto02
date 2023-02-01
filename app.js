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

const GuardarDB = () => {
  localStorage.setItem("Platos", JSON.stringify(arrayPlatos));
  PintarDB();
};

const PintarDB = () => {
  listaPlatosUI.innerHTML = "";
  arrayPlatos = JSON.parse(localStorage.getItem("Platos"));

  if (arrayPlatos === null) {
    arrayPlatos = [];
  } else {
    arrayPlatos.forEach((element) => {
      listaPlatosUI.innerHTML += `
    <div class="alert alert-success" role="alert">
      <i class="material-symbols-outlined float-left mr-2"> restaurant </i>
      ${element.plato} - ${element.estado}
      <span class="float-right">
        <i class="material-symbols-outlined"> done </i>
        <i class="material-symbols-outlined"> delete </i>
      </span>
    </div>
    `;
    });
  }
};

formularioUI.addEventListener("submit", (e) => {
  e.preventDefault();
  let actividadUI = document.querySelector("#actividad").value;
  console.log(actividadUI);
  CrearItem(actividadUI);
  GuardarDB();
  formularioUI.reset();
});

document.addEventListener("DOMContentLoaded", PintarDB);

listaPlatosUI.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
});
