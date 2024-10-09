let contenido = document.getElementById("contenido")
let ejercicio6 = document.getElementById("ejercicio6")
let ejercicio7 = document.getElementById("ejercicio7")
let ejercicio8 = document.getElementById("ejercicio8")

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
    let comienzo = parseInt(prompt("Ingrese el precio original del producto: "))
    let fin = parseInt(prompt("Ingrese el descuento del producto: "))
    let primos = []

    for (let i = comienzo; i <= fin ; i++) {
        for (let j = 1; j < fin; j++) {
            if (j==i) {
                primos.push(i)
                break 
            } else if (i%j == 0) {
                break
            }
        }
    }
    console.log(primos)
});

