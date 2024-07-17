# Encriptador de Texto

Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto. La aplicación está desarrollada utilizando HTML, CSS y JavaScript, y utiliza SweetAlert2 para mostrar mensajes personalizados.

## Características

- **Encriptar Texto**: Convierte las vocales de un texto en sus equivalentes encriptados.
- **Desencriptar Texto**: Restaura el texto encriptado a su forma original.
- **Validación de Texto**: Acepta solo letras minúsculas sin acentos ni caracteres especiales, y no permite espacios en blanco.
- **Copiar al Portapapeles**: Permite copiar el texto encriptado o desencriptado al portapapeles.

## Uso

1. Introduce el texto que deseas encriptar o desencriptar en el área de texto proporcionada.
2. Haz clic en el botón "Encriptar" para encriptar el texto o en "Desencriptar" para desencriptar.
3. El resultado aparecerá en el área de salida.
4. Para copiar el resultado, haz clic en el botón "Copiar".

## Estructura del Proyecto

- `index.html`: Contiene la estructura principal de la aplicación.
- `css/style.css`: Contiene los estilos CSS para la aplicación.
- `js/app.js`: Contiene las funciones JavaScript para encriptar, desencriptar, validar el texto, y copiar al portapapeles.
- `img/`: Carpeta que contiene las imágenes utilizadas en la aplicación.

## Funciones Principales

- `encriptar()`: Encripta el texto introducido.
- `desencriptar()`: Desencripta el texto introducido.
- `validarTexto(texto)`: Valida que el texto cumpla con las condiciones especificadas.
- `mostrarOcultar()`: Muestra u oculta elementos de la interfaz según sea necesario.
- `copiar()`: Copia el texto al portapapeles y muestra una alerta de éxito.
- `limpiarCajaDeTexto()`: Limpia las áreas de texto de entrada y salida.

## Dependencias

- **SweetAlert2**: Biblioteca para mostrar alertas personalizadas. Se incluye a través de un CDN.
- **jQuery**: Biblioteca JavaScript para facilitar la manipulación del DOM. Se incluye a través de un CDN.

## Autor
Creado por Arenas Banda Brandon Stwuar.

