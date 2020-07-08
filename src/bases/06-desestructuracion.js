// Desustructuración

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  //   rango: "Soldado",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const userContext = ({ clave, nombre, edad, rango = "capitán" }) => {
  //   console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.54545,
      lng: 12.54545,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
