# Sistema Interactivo de Mensajes

##  Descripción

Este proyecto corresponde a un **taller práctico de JavaScript básico** enfocado en el desarrollo de un sistema interactivo que permite al usuario ingresar su nombre y edad, y recibir mensajes personalizados de acuerdo con su entrada.  
El sistema también valida errores y considera situaciones especiales como edades negativas o superiores a 100, todo mientras se presenta en una interfaz visual centrada y con diseño moderno.

##  Objetivo del entrenamiento

Implementar un programa funcional en JavaScript que permita **interactuar con el usuario**, **validando entradas** y **mostrando respuestas dinámicas** mediante el uso de funciones básicas del lenguaje.

##  Funcionalidades principales

- Solicita al usuario su **nombre** y **edad** con `prompt()`.
- Valida si la edad ingresada es un número con `isNaN()` y muestra un error con `console.error()` si no lo es.
- Muestra diferentes mensajes personalizados con `alert()` según la edad:
  - Edad menor a 0: mensaje preguntando si aún no ha nacido.
  - Edad menor de 18: mensaje motivador para menores de edad.
  - Edad mayor o igual a 18: mensaje de bienvenida al mundo profesional.
  - Edad mayor a 100: mensaje humorístico sobre la longevidad.
- El diseño del HTML está centrado en pantalla, con una interfaz estilizada usando CSS.
- Incluye un enlace visual al proyecto de GitHub con íconos de FontAwesome.

##  Conceptos aplicados

- Declaración de variables (`let`)
- Conversión de datos (`parseInt`)
- Validación de datos con `isNaN()`
- Uso de estructuras condicionales (`if`, `else if`, `else`)
- Funciones de entrada/salida:
  - `prompt()`
  - `alert()`
  - `console.log()`
  - `console.error()`
- Buenas prácticas de sintaxis en JavaScript
- Estilización con CSS moderno (flexbox, sombras, transiciones, gradientes)

##  Archivo principal

El código se encuentra en el archivo:


Puede ser abierto directamente en un navegador.

##  Pruebas realizadas

Se probaron los siguientes escenarios para verificar el funcionamiento:

| Entrada del usuario | Resultado esperado |
|---------------------|--------------------|
| Nombre: Juan<br>Edad: 15 | Muestra mensaje para menores de edad |
| Nombre: Laura<br>Edad: 25 | Muestra mensaje para mayores de edad |
| Nombre: Ana<br>Edad: -5 | Muestra mensaje de "¿No has nacido aún?" |
| Nombre: Pedro<br>Edad: 105 | Muestra mensaje de "¿Estás vivo aún?" |
| Edad: texto (no numérico) | Muestra error en consola |

##  Cómo usar

1. Descarga o clona este repositorio.
2. Abre el archivo `sistema_interactivo.html` en tu navegador.
3. Interactúa con el sistema proporcionando tu nombre y edad.
4. Observa los mensajes generados en pantalla o en la consola del navegador.

##  Entrega

Este archivo debe ser enviado como `.zip` o subido a GitHub y posteriormente entregado a través de Moodle.

---

**Autor:** AndresN329  
**Repositorio:** [GitHub - Training](https://github.com/AndresN329/Training)
