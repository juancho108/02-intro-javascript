const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 2323232,
    lat: 14.76767,
    lng: 34.95989,
  },
};

//console.table({ persona });

console.log({ persona });

const persona2 = { ...persona };

persona2.nombre = "Pedro";

console.log(persona);
console.log(persona2);
