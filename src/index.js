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

//validacion de datos
// function checkInputs(txt,num){
//     const txt= document.getElementById('msjOriginal').value;
//     const num= document.getElementById('numDesplazamiento').value;
//         if(txt===''){       
//             Error('Debe ingresar su nombre',txt);
//         }else if (num===''){
//             Error('Debe ingresar un número',num);
//         }else{
//             document.getElementById('contenedorResultado').style.display='block';
//         }

// }
//prueba en consola
console.log(cipher);
