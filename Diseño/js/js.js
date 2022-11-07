const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const consulta = document.getElementById('consulta')
const formulario = document.getElementById('form')
const enviarButton = document.getElementById('enviar')


function validarForm(){
    if(nombre.value.length <= 2){
        eForm(nombre)
        return false
    }
    if(apellido.value.length <= 2){
        eForm(apellido)
        return false

    }
    if(consulta.value.length <= 0){
        eForm(consulta)
        return false
    }

    let chMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let valor = email.value
    if(!(chMail.test(valor))) {
        eForm(email)
        return false
    }

    console('Mensaje Enviado')
    document.form.submit();
}

function eForm(n){
    n.classList.toggle('error')
}

console.log(nombre)


const img = document.querySelectorAll('.img');
const containerImg = document.querySelector('.container-img')
const mostrarImg = document.querySelector('.img-show');

img.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
    addImg(imagen.getAttribute('src'))
    })
})

const addImg = (srcImagen) =>{
    containerImg.classList.toggle('mostrar')
    mostrarImg.src = srcImagen
}

if(containerImg){
    containerImg.addEventListener('click', ()=>{
    containerImg.classList.toggle('mostrar');
})}
