const datos = {
    A: {
      imagen: "images/avion.jpg",
      texto: "A de Avión"
    },
    B: {
      imagen: "images/barco.jpg",
      texto: "B de Barco"
    },
    C: {
      imagen: "images/casa.png",
      texto: "C de Casa"
    },
    D: {
      imagen: "images/dado.jpg",
      texto: "D de Dado"
    },
    E: {
      imagen: "images/elefante.jpg",
      texto: "E de Elefante"
    },
    F: {
      imagen: "images/foca.jpg",
      texto: "F de Foca"
    },
    G: {
      imagen: "images/goku.jpg",
      texto: "G de Goku"
    },
    H: {
      imagen: "images/hellokitty.png",
      texto: "H de Hello kitty"
    },
    I: {
      imagen: "images/iglesia.jpg",
      texto: "I de Iglesia"
    },
    J: {
      imagen: "images/jirafa.jpg",
      texto: "J de Jirafa"
    },
    K: {
      imagen: "images/koala.jpg",
      texto: "K de Koala"
    },
    L: {
      imagen: "images/leon.jpg",
      texto: "L de León"
    },
    M: {
      imagen: "images/mariposa.jpg",
      texto: "M de Mariposa"
    },
    N: {
      imagen: "images/nube.jpg",
      texto: "N de Nube"
    },
    Ñ: {
      imagen: "images/ñu.jpg",
      texto: "Ñ de Ñu"
    },
    O: {
      imagen: "images/oso.jpg",
      texto: "O de Oso"
    },
    P: {
      imagen: "images/puente.jpg",
      texto: "P de Puente"
    },
    Q: {
      imagen: "images/queso.jpg",
      texto: "Q de Queso"
    },
    R: {
      imagen: "images/raton.jpg",
      texto: "R de Ratón"
    },
    S: {
      imagen: "images/sandia.jpg",
      texto: "S de Sandía"
    },
    T: {
      imagen: "images/torre.jpg",
      texto: "T de Torre"
    },
    U: {
      imagen: "images/uva.jpg",
      texto: "U de Uva"
    },
    V: {
      imagen: "images/vaca.jpg",
      texto: "V de Vaca"
    },
    W: {
      imagen: "images/waffle.jpg",
      texto: "W de Waffle"
    },
    X: {
      imagen: "images/xilofono.jpg",
      texto: "X de Xilófono"
    },
    Y: {
      imagen: "images/yogurt.jpg",
      texto: "Y de Yogurt"
    },
    Z: {
      imagen: "images/zebra.jpg",
      texto: "Z de Zebra"
    }
  };


const letras = document.querySelectorAll(".letters span");
const imagen = document.getElementById("image");
const texto = document.getElementById("text");
  
letras.forEach((letra) => {
    letra.addEventListener("click", () => {
      const letraSeleccionada = letra.textContent;
      const info = datos[letraSeleccionada];
  
      if (info) {
        imagen.src = info.imagen;
        imagen.style.display = "block";
        texto.textContent = info.texto;
      }
    });
  });