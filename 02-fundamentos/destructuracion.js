let deadpool ={
    nombre: 'wade',
    apellido: 'winstn',
    poder: 'regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

//console.log(deadpool.getNombre());

let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;

let {nombre, apellido, poder} = 