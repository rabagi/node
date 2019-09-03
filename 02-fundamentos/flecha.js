//funciones de flecha

// function sumar(a,b){
//     return a+b;
// }

//let sumar = (a,b) => a+b;

// function saludar(){
//     return 'Hola';
// }

//let saludar = ()=> 'hola';

// function saludar(nombre){
//     return `hola ${nombre}`;
// }

// let saludar = (nombre) => `hola ${nombre}`;

// console.log(saludar('rabagi'));

//console.log(sumar(10,20));

let deadpool ={
    nombre: 'wade',
    apellido: 'winstn',
    poder: 'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());