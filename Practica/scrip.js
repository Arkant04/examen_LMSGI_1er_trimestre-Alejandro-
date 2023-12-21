function cambiarTexto(){
  let texto = 0;
 

  if(texto == 0){
    document.querySelector("#textoCambiante").innerHTML = "Has pulsado el boton"
    texto++;
  }

  if (texto == 1){
    texto++;
  }
  
  if(texto == 2){
    document.querySelector("#textoCambiante").innerHTML = "Has vuelto ha pulsar el boton!!!"
    texto++;
  }
console.log(texto)
  
}