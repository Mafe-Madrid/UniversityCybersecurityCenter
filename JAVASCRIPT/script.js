// =========================================
// SELECCIONAMOS LOS ELEMENTOS DEL HTML
// =========================================

const cards =
    document.querySelectorAll(".module-card");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


// =========================================
// MÓDULO QUE SE MUESTRA EN EL CENTRO
// =========================================

let currentIndex = 0;


// =========================================
// FUNCIÓN QUE ACTUALIZA EL CARRUSEL
// =========================================

function updateCarousel() {

    cards.forEach((card, index) => {

        // Quitamos todas las posiciones anteriores
        card.classList.remove(
            "active",
            "previous",
            "next-card"
        );


        // TARJETA CENTRAL
        if (index === currentIndex) {

            card.classList.add("active");

        }


        // TARJETA ANTERIOR
        else if (
            index ===
            (currentIndex - 1 + cards.length)
            % cards.length
        ) {

            card.classList.add("previous");

        }


        // TARJETA SIGUIENTE
        else if (
            index ===
            (currentIndex + 1)
            % cards.length
        ) {

            card.classList.add("next-card");

        }

    });

}


// =========================================
// BOTÓN SIGUIENTE
// =========================================

nextBtn.addEventListener("click", function () {

    currentIndex =
        (currentIndex + 1)
        % cards.length;

    updateCarousel();

});


// =========================================
// BOTÓN ANTERIOR
// =========================================

prevBtn.addEventListener("click", function () {

    currentIndex =
        (currentIndex - 1 + cards.length)
        % cards.length;

    updateCarousel();

});


// =========================================
// INICIAMOS EL CARRUSEL
// =========================================

updateCarousel();
// =========================================
// CARRUSEL DE FRASES
// =========================================

const quotes = [

    {
        text:
            "Los aficionados hackean sistemas; los profesionales hackean personas.",

        author:
            "Bruce Schneier"
    },

    {
        text:
            "El eslabón más débil en la cadena de la seguridad es el factor humano.",

        author:
            "Mitnick y Simon, 2002"
    },

    {
        text:
            "Argumentar que no te importa el derecho a la privacidad porque no tienes nada que ocultar es lo mismo que decir que no te importa la libre expresión porque no tienes nada que decir.",

        author:
            "Snowden, 2019"
    }

];


const quoteText =
    document.getElementById("quoteText");

const quoteAuthor =
    document.getElementById("quoteAuthor");

const quotePrev =
    document.getElementById("quotePrev");

const quoteNext =
    document.getElementById("quoteNext");

const quoteDots =
    document.querySelectorAll(".quote-dot");


let currentQuote = 0;


// =========================================
// MOSTRAR FRASE
// =========================================

function showQuote(index) {

    quoteText.style.opacity = 0;

    quoteAuthor.style.opacity = 0;


    setTimeout(function () {

        quoteText.textContent =
            quotes[index].text;

        quoteAuthor.textContent =
            quotes[index].author;


        quoteText.style.opacity = 1;

        quoteAuthor.style.opacity = 1;

    }, 180);


    quoteDots.forEach(function (dot) {

        dot.classList.remove(
            "active-dot"
        );

    });


    quoteDots[index]
        .classList.add(
            "active-dot"
        );

}


// =========================================
// SIGUIENTE FRASE
// =========================================

quoteNext.addEventListener(
    "click",
    function () {

        currentQuote =
            (currentQuote + 1)
            % quotes.length;

        showQuote(currentQuote);

    }
);


// =========================================
// FRASE ANTERIOR
// =========================================

quotePrev.addEventListener(
    "click",
    function () {

        currentQuote =
            (
                currentQuote
                - 1
                + quotes.length
            )
            % quotes.length;

        showQuote(currentQuote);

    }
);


// =========================================
// PUNTOS
// =========================================

quoteDots.forEach(
    function (dot) {

        dot.addEventListener(
            "click",
            function () {

                currentQuote =
                    Number(
                        this.dataset.quote
                    );

                showQuote(
                    currentQuote
                );

            }
        );

    }
);