//Funcion para encriptar el texto
function encriptar() {
    let texto = document.getElementById("entradaTexto").value;

    //Validar el texto
    if (!validarTexto(texto)) return;

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("salidaTexto").value = textoEncriptado;

    mostrar();
}

//Funcion para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("entradaTexto").value;

    //Validar el texto
    if (!validarTexto(texto)) return;

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("salidaTexto").value = textoDesencriptado;

    mostrar();
}

//Limpiar la caja de texto
function limpiarCajaDeTexto() {
    document.getElementById("entradaTexto").value = "";
    document.getElementById("salidaTexto").value = "";
}

//Funcion para validar el texto solo letras minúsculas sin acentos ni caracteres especiales
function validarTexto(texto) {
    if (!/^[a-z\s]*$/.test(texto) || texto.trim() === "") {
        limpiarCajaDeTexto();
        Swal.fire({
            icon: 'error',
            text: 'El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.'
        });
        return false;
    }
    return true;
}

function mostrar() {
    let btnCopiar = document.getElementById("btnCopiar").style.display = "block";
    let img = document.getElementById("img").style.display = "none";
    let ctnTexto = document.getElementById("contenedor-texto").style.display = "none";
    let salidaTexto = document.getElementById("salidaTexto").style.display = "block";
    let ctnSalida = document.getElementById("contenedor-salida").style.border = "none"; 
}

function ocultar() {
    let btnCopiar = document.getElementById("btnCopiar").style.display = "none";
    let img = document.getElementById("img").style.display = "block";
    let ctnTexto = document.getElementById("contenedor-texto").style.display = "block";
    let salidaTexto = document.getElementById("salidaTexto").style.display = "none";
    let ctnSalida = document.getElementById("contenedor-salida").style.border = "1px solid #ccc"; 
}

//Funcion para copiar
function copiar() {
    // Seleccionar el texto
    let salidaTexto = document.getElementById("salidaTexto");
    salidaTexto.select();

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    //Mensaje
    Swal.fire({
        icon: 'success',
        text: 'Copiado!'
    });

    ocultar();
    limpiarCajaDeTexto()
}

function agregarTema() {
    let btnCambiarTema = document.getElementById("btnCambiarTema");
    btnCambiarTema.addEventListener ("click", () => {
        let nuevoTema = obtenerTema (temaActual);
        cambiarTema (nuevoTema);
        temaActual = nuevoTema;
    }) 
}

function cambiarTema(tema) {
    let etiquetaHtml = document.querySelector("html");
    etiquetaHtml.setAttribute("data-tema", tema);
}

function obtenerTema(tema) {
    if (tema === "oscuro") {
        return "claro";
    } else {
        return "oscuro";
    }
}

let temaActual = "claro";
agregarTema();

