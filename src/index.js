import cipher from './cipher.js';


//encode
const btnCifrar= document.getElementById('btnCifrar');
btnCifrar.addEventListener('click', ()=>{
    let msjOriginal=document.getElementById('msjOriginal');
    let desplazamiento=document.getElementById('numDesplazamiento');
    document.getElementById('msjResultado').innerHTML=cipher.encode(desplazamiento.value,msjOriginal.value);
    document.getElementById('contenedorResultado').style.display='block';
    
    
})

//decode
const btnDescifrar= document.getElementById('btnDescifrar');btnDescifrar.addEventListener('click', ()=>{
    let msjOriginal=document.getElementById('msjOriginal');
    let desplazamiento=document.getElementById('numDesplazamiento');
    document.getElementById('msjResultado').innerHTML=cipher.decode(desplazamiento.value,msjOriginal.value);
    document.getElementById('contenedorResultado').style.display='block';
})

//borrar datos
const btnLimpiar=document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', ()=>{
    document.getElementById('msjOriginal').value="";
    document.getElementById('numDesplazamiento').value="";

})


//prueba en consola
console.log(cipher);
