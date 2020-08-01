const plataMensual = 10000 // diez mil

const poblacion = 100 // cien

const claseAlta = poblacion * 0.2
const claseMedia = poblacion * 0.4
const claseBaja = poblacion * 0.4

const sueldoClaseAlta = plataMensual * 0.5 / claseAlta 
const sueldoClaseMedia = plataMensual * 0.3 / claseMedia 
const sueldoClaseBaja = plataMensual * 0.2 / claseBaja 

console.log(`Poblacion Total = ${poblacion}`)
console.log(` - Clase Alta = ${claseAlta}`)
console.log(` - Clase Media  = ${claseMedia}`)
console.log(` - Clase Baja  = ${claseBaja}`)
console.log(`Plata a Repartir Mensual $$ = ${plataMensual}`)

console.log(`El Sueldo promedio DEBERIA ser plata % poblacion ${plataMensual/poblacion}`)

console.log(`Sueldo clase Alta = ${sueldoClaseAlta}`)
console.log(`Sueldo clase Media = ${sueldoClaseMedia}`)
console.log(`Sueldo clase Baja = ${claseBaja}`)


const ahorroEnUnAnoClaseAlta = sueldoClaseAlta * 12
const ahorroEnUnAnoClaseMedia = sueldoClaseMedia * 12
const ahorroEnUnAnoClaseBaja = sueldoClaseBaja * 12
const ingresosTotales = plataMensual * 12

console.log(`Ahorro Clase Alta = ${ahorroEnUnAnoClaseAlta}`)
console.log(`Ahorro Clase Media = ${ahorroEnUnAnoClaseMedia}`)
console.log(`Ahorro Clase Baja = ${ahorroEnUnAnoClaseBaja}`)
console.log(`Ingresos Totales = ${ingresosTotales}`)


// function gini(arraySueldos: Number[]) {

//   const sortedArray = arraySueldos.sort((a, b) => a > b)
//   console.log("Array de sueldos", arraySueldos)
//   console.log("Array de sueldos Ordenado", sortedArray)
//   const sumSueldos = arraySueldos.reduce((a, b) => a + b, 0)
//   const cantidadSUeldos = arraySueldos.length

//   for (let i = 0; i < arraySueldos.length; i++) {
//     const element = arraySueldos[i];

//     var indexArray: Number[] = []

//     for (let j = 0; j <= element; j++) {
//       indexArray.push(j+1)
//     }

//     const n = indexArray.length

//     const sumrara = arraySueldos.map(sueldo => sueldo*)

//     const divisor = n * sumSueldos
//     const dividendo 

//   }

//   //     return 1 - (2.0 * (r*x).sum() + s)/(n*s)


//   // return ((np.sum((2 * index - n  - 1) * array)) / (n * np.sum(array)))


// }

