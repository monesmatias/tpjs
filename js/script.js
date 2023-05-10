
let precio
let compra
do {

    compra = prompt("Seleccione el nro. del juego a comprar: " + "\n1: Ghost of Tsushima "+ "\n2: GTA V" + "\n3: Mortal Kombat 11")
    if (compra!=1 && compra!=2 && compra!=3) {
        alert ("Opción no valida, seleccione nuevamente")
    }

} while (compra!=1 && compra!=2 && compra!=3)

switch (compra) {
    case "1":
        precio = 1500
        compra= "Ghost of Tsushima"
        
                break;
    case "2":
        precio = 2600
        compra= "GTA V"
        
                break;
    case "3":
        precio = 3200
        compra= "Mortal Kombat 11"
                break;
    }
let formapago
let descuento_recargo

do {

    formapago = prompt("Seleccione el nro. de su forma de pago: \n 1: Efectivo con descuento del 10% \n 2: Tarjeta con recargo del 20%")

    switch (formapago) {
        case "1":
            descuento_recargo = "descuento"
            break;
        case "2":
            descuento_recargo = "recargo"
            break;
        default:
            alert ("Opción no valida, seleccione nuevamente")
    }
    
} while (formapago!=1 && formapago!=2)

function calcular_des_rec (precio, formapago){
    switch (formapago) {
        case "1":
            return (precio * 10)/100
            break;
        case "2":
            return (precio * 20)/100 
            break;
    }

}

function calcularprecio (precio, formapago){
    switch (formapago) {
        case "1":
            return precio - (precio * 10)/100
            break;
        case "2":
            return precio + (precio * 20)/100 
            break;
    }
}


    console.log(`El Juego seleccionado es ${compra}, su precio de lista es: $${precio} \nSu ${descuento_recargo} es $${calcular_des_rec(precio, formapago)} \nSu total a pagar es: $${calcularprecio(precio, formapago)}`);

