# Examen 1er trimestre LMSGI

1º de DAM en ESCAV Granada

Nombre: Alejandro De La Corte Grosso

Fecha: 21/12/2023

En primer lugar, he creado un HTML, JS y CSS

En el HTML que he creado donde he divido este en tres secciones:

 -En la primera seccion he puesto un texto el cual lo he centrado en css  y ha parte le he puesto un fondo de pantalla para que no sea el mismo que el fondo de la ultima seccion

 -En la segunda seccion he puesto un texto que sirve como titulo ha la imagen de abajo que es un gato moviendo la cabeza y abajo de esta encontramos un subtitulo. Ademas a esta seccion tambien le he añadido un fondo de pantalla

 -En la ultima seccion he añadido un texto que va cambiando mediante un scrip que hecho en js en el que le añado una funcion que va alternando el texto(añado la funcion en cuestion):
  
  "function cambiarTexto(){
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
  
}"


Por ultimo en el css lo que hecho ha sido centrarle el texto y ha cada seccion, menos a la ultima, un fondo distinto para distinguirlo a los fondos que he puesto para las secciones en general, ademas a cada seccion le puesto un flex center que centra todas las cosas como puse anteriormente 