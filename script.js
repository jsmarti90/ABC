// This function takes an html element: 
function ampliar(letra) {
    const letraGrande = document.getElementById('letraGrande');
    const imagenLetra = document.getElementById('imagenLetra');

    // Mostrar letra grande
    letraGrande.textContent = letra;

    // Asociar cada letra con su imagen
    const imagenes = {
        A: "avion.jpg",
        B: "barco.jpg",

    };

    const nombreImagen = imagenes[letra];

    if (nombreImagen) {
        // Get image from folder
        imagenLetra.src = `images/${nombreImagen}`;
        // If unable to show image
        imagenLetra.alt = `Imagen de ${letra}`;
        imagenLetra.style.display = "block";
    } else {
        imagenLetra.style.display = "none";
        letraGrande.textContent = letra + " (Sin imagen)";
    }
}