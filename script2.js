// Define function to handle letter click and display image
function showLetter(letter) {

    // Get tag h2 to display bigger letter
    const bigLetter = document.getElementById("big-letter");

    // Get tag img to display image
    const image = document.getElementById("letter-image");

    // Set bigger letter in the tag h2 element
    bigLetter.textContent = letter;

    // Define the mapping of letters to image files
    const imageFiles = {
        "A": "avion.jpg",
        "B": "barco.jpg",
        "C": "casa.png",
        "D": "dado.jpg",
        "E": "elefante.jpg",
        "F": "foca.jpg",
        "G": "goku.jpg",
        "H": "hellokitty.png",
        "I": "iglesia.jpg",
        "J": "jirafa.jpg",
        "K": "koala.jpg",
        "L": "leon.jpg",
        "M": "mariposa.jpg",
        "Ñ": "ñu.jpg",
        "N": "nube.jpg",
        "O": "oso.jpg",
        "P": "perro.jpg",
        "Q": "queso.png",
        "R": "raton.jpg",
        "S": "serpiente.jpg",
        "T": "tortuga.jpg",
        "U": "uva.jpg",
        "V": "Vaca.jpg",
        "W": "winnipoo.png",
        "X": "xilofono.jpg",
        "Y": "yuca.jpg",
        "Z": "zorro.jpg"

    };

    // Lookup the image in folder for the clicked letter
    const fileName = imageFiles[letter];

    // If there is an matching image in the images folder
    if (fileName) {
        // Set image src
        image.src = `images/${fileName}`;
        image.alt = `image of ${letter}`;
        image.style.display = "block";  
    }

}