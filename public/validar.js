const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{15,150}$/, // Letras y espacios, pueden llevar acentos.
	no_tarjeta: /^\d{16}$/,
    nip: /^\d{3}$/,
    ddmm: /^\d{2}$/,
    monto: /^\d{2,5}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    no_tarjeta: false,
    nip: false,
    ddmm: false,
    monto: false,
    correo: false
}

const validarFormulario = (e) => {
    switch (e.target.id){
        case "concepto":
            validarCampo(expresiones.nombre, e.target, 'concepto');  
        break;
        case "nombre":
          validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "no_tarjeta":
            validarCampo(expresiones.no_tarjeta, e.target, 'no_tarjeta');
        break;
        case "nip":
            validarCampo(expresiones.nip, e.target, 'nip');
        break;
        case "ddmm":
            validarCampo(expresiones.ddmm, e.target, 'ddmm');
        break;
        case "monto":
            validarCampo(expresiones.monto, e.target, 'monto');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`p-${campo}`).classList.remove('error');
        document.getElementById(`p-${campo}`).classList.add('listo');
        campos[campo] = true;
    }else{
        document.getElementById(`p-${campo}`).classList.remove('listo');
        document.getElementById(`p-${campo}`).classList.add('error');
    }
} 

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    if(campos.concepto && campos.nombre && campos.no_tarjeta && campos.nip && campos.ddmm && campos.monto && campos.correo){
        alert('Formulario enviado')
        formulario.reset()
    }else{
    alert('Debe rellenar el formulario antes de enviar');
    }
})