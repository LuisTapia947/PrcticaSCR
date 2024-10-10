function createNodo(nodo) {

    var nodo = document.createElement(nodo)
    nodo.style.color = "blue"
    return nodo
}

function createNodoConTexto(nodo, texto) {

    var nodo = createNodo(nodo)
    var nodotexto = document.createTextNode(texto)
    nodo.appendChild(nodotexto)
    return nodo
}

function createImages(rutaImages, textoAlt) {

    var nodoImages = createNodo("Img")
    nodoImages.src = rutaImages
    nodoImages.alt = textoAlt
    return nodoImages

}

function adicionarNodoBody(nodo) {

    document.body.appendChild(nodo)

}
function adicionarNodoContenedor(nodo, Contenedor) {
    Contenedor.appendChild(nodo)
}