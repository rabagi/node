
// let getNombre = async ()=>{

//     return 'amigo john';
// };

//console.log(getNombre());


let getNombre =  () =>{
    return new Promise( (resolve, reject) => {

        setTimeout( ( ) => {
            resolve('amigo john');
        }, 3000);

        
    })
};

let saludo = async () => {

    let nombre = await getNombre();


    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
})