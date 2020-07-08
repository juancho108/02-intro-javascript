const personajes = ["goku", "vegeta", "trunks"];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
//1. El primer valor de l arr se llamará nombre
//2. Se llamará setNombre

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [valor, setNombre] = useState("Goku");

console.log(valor);
setNombre();
