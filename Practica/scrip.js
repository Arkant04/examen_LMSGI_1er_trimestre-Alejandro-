let texto = 0;
function cambiarTexto(){
    texto++;
 
    
    
    
    if (texto == 1){
        document.querySelector("#textoCambiante").innerHTML = "Has pulsado el boton"
  }
  
  if(texto == 2){
    document.querySelector("#textoCambiante").innerHTML = "Has vuelto ha pulsar el boton!!!"
  }

  if (texto == 3){
    document.querySelector("#textoAlternante").style.background = "black"
    document.querySelector("#textoAlternante").style.color = "white"
  }

  if(texto == 4){
    document.querySelector("#textoCambiante").innerHTML = "Pulsa el boton"
    document.querySelector("#textoAlternante").style.background = "red"
    document.querySelector("#textoAlternante").style.color = "black"
    texto = 0
  }
console.log(texto)
  
}