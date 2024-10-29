function consumirAPIPaises() {
    var url = "https://restcountries.com/v3.1/all"

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            agregarDatosPaisTabla(paises)

            //console.log(paises[0].name.common);

        })
}

function agregarDatosPaisTabla(paises) {

    var tabla = document.getElementById("table")

    for (pais of paises) {

        var fila = tabla.insertRow(-1)
        var columnaComun = fila.insertCell(0)
        var columnaOficial = fila.insertCell(1)
        var estatus = fila.insertCell(2)
        var capitales = fila.insertCell(3)


        columnaComun.innerHTML = pais.name.common
        columnaOficial.innerHTML = pais.name.official
        estatus.innerHTML = pais.status
        //capitales.innerHTML = pais.capital
        if(pais.capital && pais.capital.length > 0){
            var listaCapitales = document.createElement("ul")
            pais.capital.forEach(ciudad => {
                
            });
        }
    }
}
