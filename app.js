const titulo = document.querySelector('.titulo');
const btnSiguiente = document.querySelector('.btn-siguiente');
const btnAnterior = document.querySelector('.btn-anterior');
const contenedor = document.querySelector('#contenedor');
let i = 1;


function siguiente() {
    console.log(i);
    if (i === 6) {
        i = 0;
    }

    contenedor.style.marginLeft = `-${400 * i}px`
    contenedor.style.transitionDuration = '0.5s';
    i++;
}

function anterior() {
    console.log(i);
    if (i === 1) i = 5;
    i--;
    titulo.textContent = titulo[i];
    contenedor.style.marginLeft = `-${400 * i}px`
    contenedor.style.transform = `translateX(${400}px)`;
    i;


}

btnAnterior.addEventListener('click', anterior);
btnSiguiente.addEventListener('click', siguiente);




