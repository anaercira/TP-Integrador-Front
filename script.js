

function calcularPrecio(cantidad , categoria) {
     let totalAPagar = 0;
    if (categoria == "estudiante") {
        totalAPagar = (200*cantidad)*0.2;
        console.log("total apagar: $" + totalAPagar);
        

    }
    else if (categoria == "trainee") {
        totalAPagar = (200*cantidad)*0.5;
         console.log("total a pagar: $" + totalAPagar);

    }
    else if (categoria == "junior") {
        totalAPagar = (200*cantidad)*0.8;
        console.log("total a pagar: $" + totalAPagar); 
    }

 return totalAPagar
   
}

let formulario = document.getElementById("form_calculo");
//Trabajo con el div vacio de html
let totalAPagar = document.getElementById("totalPago");

let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()//Quitamosel comportamiento por defectode recarga
    totalAPagar.textContent = "Total a Pagar: $" + calcularPrecio(cantidad.value , categoria.value )
})

formulario.addEventListener("reset", ()=> {
totalAPagar.textContent = "Total a Pagar: $"
})



   console.log(calcularPrecio(3,"trainee"))


 
 






















    


