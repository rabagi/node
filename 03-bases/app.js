//requireds
const fs =  require('fs');


let base = 5;
let data = '';
for(let  i = 1; i<=10; i++){

    data +=`${base} * ${i} = ${base*i}\n`;

} 

fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
    if (err) throw err;
    console.log(`Archivo guardado tabla-${base}`)
});