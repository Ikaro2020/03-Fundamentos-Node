
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar=false , hasta=false) => {

    try {

    let salida = '';
    let consola = '';


for( let i = 0; i <=hasta; i ++ ) {
    salida += `${base} x ${i} = ${base * i}\n`;
    consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
}

    if(listar){
        console.log('===================='.rainbow);
        console.log('Tabla del:'.rainbow, colors.blue(base));
        console.log('===================='.rainbow);
        console.log(consola);
}



fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
    

    return `tabla-${ base}.txt`;

    }catch(err){
        throw err;

    }
}

module.exports = {
    crearArchivo
}