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