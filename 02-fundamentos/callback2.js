let empleados = [{
    id: 1,
    nombre: 'rabagi'
},
{
    id: 2,
    nombre: 'giovanny'
},
{
    id: 3,
    nombre: 'giovanny.rabagi'
},
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
];

let getEmpleado = (id, callback) => {
    let empeladoDB = empleados.find(empleado => empleado.id === id)

    if (!empeladoDB){
        callback(`no existe empleado con id: ${id}` )
    }else{
        callback(null, empeladoDB)
    }
}

let getSalario = (empleado, callback)=>{
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if(!salarioDB){
        callback(`No existe salario para empleado: ${empleado.nombre}`)
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }

}


getEmpleado(3, (err, empleado) =>{
    if(err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if(err){
            return console.log(err);
        } 
        console.log(`El salario de ${resp.nombre} es de ${resp.salario} $`)
    })
});