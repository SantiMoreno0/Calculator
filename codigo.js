let botones = document.querySelectorAll(".boton");
let botonesPresionados1 = "";
let botonesPresionados2 = "";
let simbolosPresionados = "";
let campoBoton1 = document.querySelector(".btn-1");
let campoBoton2 = document.querySelector(".btn-2");
let campoSimbolo = document.querySelector(".btn-simbolo");
let campoResultado = document.querySelector(".campo-resultado");

function colocarSimbolo() {
    botonesPresionados1 = "";
    botonesPresionados2 = "";
    simbolosPresionados = "";
    campoResultado.textContent = resultado
}


for (i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function (e) {
        let boton = e.target.innerHTML;
        let claseBoton = e.target.parentElement.classList.value;
        console.log(campoResultado.textContent)
        if (claseBoton == "numeros" && simbolosPresionados.length==0) {
            botonesPresionados1 += boton;
            campoBoton1.textContent = botonesPresionados1;
        }
        else if (claseBoton == "simbolos" && simbolosPresionados.length ==0 &&campoResultado.textContent.length == 1) {
            simbolosPresionados += boton;
            campoSimbolo.textContent = simbolosPresionados;
        }
        else if (claseBoton == "numeros" && simbolosPresionados.length == 1) {
            botonesPresionados2 += boton;
            campoBoton2.textContent = botonesPresionados2;
        }
        else if (claseBoton == "simbolos" && campoResultado.textContent.length > 1 && simbolosPresionados.length == 0) {
            simbolosPresionados += boton;
            campoSimbolo.textContent = simbolosPresionados;
            botonesPresionados1 = campoResultado.textContent;
            campoBoton1.textContent = campoResultado.textContent;
        }
        
        else if (claseBoton == "numeros" && campoResultado.textContent.length > 1) {
            botonesPresionados2 += boton;
        }
    
        else if (claseBoton == "igual") {
            if (simbolosPresionados == "+") {
                resultado = parseFloat(botonesPresionados1) + parseFloat(botonesPresionados2);
                colocarSimbolo()
            }
            else if (simbolosPresionados == "-") {
                resultado = parseFloat(botonesPresionados1) - parseFloat(botonesPresionados2);
                colocarSimbolo()
            }
            else if (simbolosPresionados == "*") {
                resultado = parseFloat(botonesPresionados1) * parseFloat(botonesPresionados2);
                colocarSimbolo()
            }
            else if (simbolosPresionados == "/") {
                resultado = parseFloat(botonesPresionados1) / parseFloat(botonesPresionados2);
                colocarSimbolo()
            }
            console.log(botonesPresionados2)
        }
        else if (claseBoton == "limpiar") {
                botonesPresionados1 = "";
                botonesPresionados2 = "";
                simbolosPresionados = "";
                campoBoton1.textContent = "";
                campoBoton2.textContent = "";
                campoSimbolo.textContent = "-";
                campoResultado.textContent = "-";
        }
    })
}




