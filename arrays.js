const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

// RESULTADO
indiceAmarillo = original.indexOf('Amarillo')

cantidadColoresConA = original.reduce((cant, color) => {
    if (color.includes('a') || color.includes('A')) cant++
    return cant
}, 0)

arregloSinAzul = [...original]
    .splice(0, original.indexOf('Azul'))
    .concat([...original].splice(original.indexOf('Azul') + 1, original.length));


ordenadoPorCantidadLetras = [...original]
ordenadoPorCantidadLetras.sort(
    (a, b) => a.length - b.length
)

arregloConNuevoColorInicio = ['Marrón', ...original]

arregloConNuevoColorFin = [...original, 'Naranja']


// -------

console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);
