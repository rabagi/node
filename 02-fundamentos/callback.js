// setTimeout( ()=> {
//     console.log('hola ...');
// }, 3000); 

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'rabagi',
        id
    }
    if( id === 20){
        callback(`usuario con id : ${id}, no existe en bd`);

    }else{
        callback(null, usuario);
    }

}


getUsuarioById(10, (err, usuario)=>{
    if (err){
        return console.log(err);
    }

    console.log('usuario', usuario);
});