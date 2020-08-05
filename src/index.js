var autos = [
    { marca:'Peugeot', modelo: 206, puertas: 4, cilindrada: '', precio: 200.000}, 
    { marca:'Honda', modelo: 'Titan', puertas: '', cilindrada: '125c', precio: 60.000}, 
    { marca: 'Peugeot', modelo: 208, puertas: 5, cilindrada: '', precio: 250.000}, 
    { marca: 'Yamaha', modelo: 'YBR', puertas: '', cilindrada: '160c', precio: 80.500}
]

const autoMasCaro = auto => {
    if (auto.precio > 200.000) {
        console.log(` Vehiculo más caro: ${auto.marca} ${auto.modelo}`)
    }     
}

const autoMasBarato = auto => {
    if (auto.precio < 70.000) {
        console.log(` Vehiculo más barato: ${auto.marca} ${auto.modelo}`)
    }
}

// const autoModeloConY = auto => { 
//     for (let i = 0; i < autos.modelo.length; i++) {
//         const element = array[i];
        
//     }
//     // const element = autos.modelo
//     // return element.includes("Y")
//     // console.log(`Vehiculo que contiene en el modelo la letra "Y" : ${auto.marca} ${auto.modelo} ${auto.precio}`)
      
// }

// Ejercicio de bonus

const autosOrdenados = auto => {
    let precios = autos.precio
    return precios.sort()
}


var autoBarato = autos.filter(autoMasBarato)
var autoCaro = autos.filter(autoMasCaro)
// var autoConY = autos.forEach(autoModeloConY)

console.log(autoCaro)
console.log(autoBarato)
// console.log(autoConY)
console.log(autosOrdenados)

