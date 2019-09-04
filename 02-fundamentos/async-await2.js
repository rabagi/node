let empleados = [{id: 1,  nombre: 'rabagi'},
                {id: 2, nombre: 'giovanny'},
                {id: 3, nombre: 'giovanny.rabagi'},];
let salarios = [{ id: 1, salario: 1000}, {id: 2, salario: 2000},];

let getEmpleado = async (id) => {

    let empeladoDB = empleados.find(empleado => empleado.id === id)

    if (!empeladoDB){
        throw new Error(`no existe empleado con id: ${id}` )
    }else{
        return empeladoDB;
    }
           
}

let getSalario = async (empleado)=>{

    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if(!salarioDB){
        throw new Error(`No existe salario para empleado: ${empleado.nombre}`)
    }else{
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }

        
}


let getInformacion = async (id) =>{
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `El salario de ${resp.nombre} es de ${resp.salario} $`;
    //console.log(resp);
}

getInformacion(1)
    .then( mensaje => console.log(mensaje))
    .catch(err => console.log(err))