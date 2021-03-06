//requireds
const fs =  require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject(`Valor introducido "${base}" No es numero`);
            return;
        }

        let data = '';
        for(let  i = 1; i<=10; i++){

            data +=`${base} * ${i} = ${base*i}\n`;

        } 

        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`Archivo guardado tabla-${base}`);

        });
    });
}
 

module.exports = {
    crearArchivo
}