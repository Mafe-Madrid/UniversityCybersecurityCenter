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
