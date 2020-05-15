let btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click',btnEnviar_click);

let txtNombre = document.getElementById('txtNombre');

function btnEnviar_click(e){
    alert('hola '+txtNombre.value+' Sus datos se estan enviando...');
}


const btnEnviar1_click = (e)=>{
    alert('hola mundo!');
}

btnEnviar.addEventListener('click',btnEnviar1_click);

let btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click',btnEnviar_click);

let txtNombre = document.getElementById('txtNombre');

function btnEnviar_click(e){
    alert('hola '+txtNombre.value+' Sus datos se estan enviando...');
}

btnEnviar.addEventListener('keyup',(e)=>{
    console.log('txtNombre: '+ txtNombre.value);
});

const btnEnviar1_click = (e)=>{
    alert('hola mundo!');
}

btnEnviar.addEventListener('click',btnEnviar1_click);

function btnEnviar_click(e){
    if(!txtNombre.value){
        alert('No ha proporcionado el nombre.');
        txtNombre.focus();
        return;
    }
    alert('Hola ' + txtNombre.value + ' sus datos se estan enviando...');
}

let spanA = document.getElementById('spanA');
spanA.addEventListener('click', spanAB_click);
let spanB = document.getElementById('spanB');
spanB.addEventListener('click', spanAB_click);
let tabla = document.getElementById('tabla-datos');

function spanAB_click(e){
    let spanId = this.id;
    if(spanId == 'spanA'){
        tabla.style.display = 'none';
    }else{
        tabla.style.display = 'block';
    }
}