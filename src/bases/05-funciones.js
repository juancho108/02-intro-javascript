//Funciones JS

const saludar = function (nombre) {
  return `hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `hola, ${nombre}`;
};

const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola mundo`;

console.log(saludar3("goku"));
console.log(saludar3("vegeta"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "juan1345",
});

console.log(getUser());

//Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implícito
// 3.Pruebas

const getUsuarioActivo = (nombre) => ({
  uid: "ABC123",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Juan");

console.log(usuarioActivo);
