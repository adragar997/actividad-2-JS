let contenido = document.getElementById("contenido")

// Ejercicio 1
let ejercicio1 = document.getElementById("ejercicio1")

ejercicio1.addEventListener("click", function() {
    let gastoAlojamiento = parseFloat(prompt("Ingrese los gastos estimados para el alojamiento: "))
    let gastoAlimentacion = parseFloat(prompt("Ingrese los gastos estimados para la alimentación: "))
    let gastoEntretenimiento = parseFloat(prompt("Ingrese los gastos estimados para el entretenimiento: "))

    let total = gastoAlimentacion + gastoAlojamiento + gastoEntretenimiento

    contenido.innerHTML = "El coste total del viaje es: " + total.toFixed(2)
});

// Ejercicio 2
let ejercicio2 = document.getElementById("ejercicio2")

ejercicio2.addEventListener("click", function() {
    let edad = parseInt(prompt("Introduzca la edad de su perro en años: "))

    let edadPerro = edad *7

    contenido.innerHTML = "La edad del perro en años humanos es: " + edadPerro
});

// Ejercicio 3
let ejercicio3 = document.getElementById("ejercicio3")

ejercicio3.addEventListener("click", function() {
    let peso = parseFloat(prompt("Introduzca su peso en Kg: "))
    let altura = parseFloat(prompt("Introduzca su altura en metros: "))
    
    let IMC = peso / altura**2
    let Clasificacion = ""
   

    if (IMC < 18.5) {
        Clasificacion = "Bajo peso"
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        Clasificacion = "Normal"
    } else if (IMC >= 25.0 && IMC <= 29.9) {
        Clasificacion = "Sobrepeso"
    } else {
        Clasificacion = "Obesidad"
    }

    contenido.innerHTML = "IMC: "+ IMC.toFixed(2) +", Clasificación: " + Clasificacion
});

// Ejercicio 4
let ejercicio4 = document.getElementById("ejercicio4")

ejercicio4.addEventListener("click", function() {
    let precio = parseFloat(prompt("Ingrese el precio original del producto: "))
    let descuento = parseFloat(prompt("Ingrese el descuento del producto: "))

    function precioFinal(precio) {
        return precio - (precio*descuento/100)
    }

    contenido.innerHTML = "El precio final del producto después del descuento es: " + precioFinal(precio) + "€"
});

// Ejercicio 5
let ejercicio5 = document.getElementById("ejercicio5")

ejercicio5.addEventListener("click", function() {
    let comienzo = parseInt(prompt("Ingrese el comienzo de los números primos: "))
    let fin = parseInt(prompt("Ingrese el final de los números primos: "))
    let primos = []

    for (let i = comienzo; i <= fin ; i++) {
        for (let j = 2; j <= fin; j++) {
           if (j == i) {
                primos.push(j)
            } else if (i%j == 0) {
                break
            }
        }
    }
    contenido.innerHTML = "Rango numeros primos: " + primos
});

// Ejercicio 6
let ejercicio6 = document.getElementById("ejercicio6")

ejercicio6.addEventListener("click", function() {
    let secuencia = parseInt(prompt("Ingrese le número de términos de la secuencia de Fibonacci: "))

    function Fibonacci(secuencia) {
        let resultado = [0,1]
        for (let i = 1; i < secuencia-1; i++) {
            resultado.push(resultado[i]+resultado[i-1])
        }
        return resultado
    }
    contenido.innerHTML = "La secuencia de Fibonacci es: " + Fibonacci(secuencia)
});

// Ejercicio 7
let ejercicio7 = document.getElementById("ejercicio7")

ejercicio7.addEventListener("click", function() {
    let menu = parseInt(prompt("Presione:\n 1) Convertir de Celsius a Fahrenheit\n 2) Convertir de Fahrenheit a Celsius"))

    function conversion(menu) {
        switch (menu) {
            case 1:
                let celsius = parseInt(prompt("Inserte los grados Celsius:"))
                return celsius+" grados Celsius equivalen a " +((celsius*9/5)+32).toFixed(1)+ " grados Fahrenheit"
            case 2:
                let fahrenheit = parseInt(prompt("Inserte los grados fahrenheit:"))
                return fahrenheit+" grados Fahrenheit equivalen a " +((fahrenheit-32)*5/9).toFixed(1)+ " grados Celsius"
        }
    }

    contenido.innerHTML = conversion(menu)
});

// Ejercicio 8
let ejercicio8 = document.getElementById("ejercicio8")

ejercicio8.addEventListener("click", function() {
    let numero = parseInt(prompt("Ingrese un numero para hayar su factorial"))

    function calculateFactorial (numero) {
        let resultado = numero
        for (let i = numero; i >= 2 ; i--) {
            resultado = (i-1)*resultado
        }
        return resultado
    }

    contenido.innerHTML = "El factorial de " + numero + " es: " + calculateFactorial(numero)
});