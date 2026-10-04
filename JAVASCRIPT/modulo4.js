/* =========================================
   IDIOMA
========================================= */

let currentLanguage = "es";


const translations = {

    es: {

        moduleNumber:
            "MÓDULO 4",

        moduleTitle:
            "Redes y navegación segura",

        moduleDescription:
            "Aprende a conectarte de forma más segura a redes Wi-Fi y reconoce buenas prácticas para navegar por Internet.",

        sub1Label:
            "Subsección 1",

        sub1Title:
            "Seguridad en redes Wi-Fi",

        sub1Description:
            "Conoce los riesgos asociados a las redes públicas y algunas prácticas para conectarte de forma más segura.",

        sub1Button:
            "Ir a la subsección 1 →",

        sub2Label:
            "Subsección 2",

        sub2Title:
            "Navegación segura en Internet",

        sub2Description:
            "Aprende a revisar direcciones web, enlaces, descargas y señales importantes antes de navegar.",

        sub2Button:
            "Ir a la subsección 2 →",

        previousModule:
            "← Módulo anterior",

        nextModule:
            "Siguiente módulo →",


        wifiTitle:
            "Seguridad en redes Wi-Fi",

        wifiIntro:
            "Las redes públicas pueden exponer tu información si no tomas precauciones al conectarte.",

        wifiRiskTitle:
            "¿Qué riesgos existen?",

        wifiRiskSubtitle:
            "No todas las redes ofrecen el mismo nivel de protección.",

        wifiRiskP1:
            "Las redes Wi-Fi públicas suelen tener menos controles de seguridad y permiten que muchas personas se conecten al mismo entorno.",

        wifiRiskP2:
            "En estas conexiones existe el riesgo de que determinada información pueda ser interceptada si no se toman precauciones.",

        networksTitle:
            "Tipos de redes públicas",

        networksSubtitle:
            "Tener contraseña no convierte una red pública en privada.",

        openTitle:
            "Red abierta",

        openText:
            "Permite conectarse sin autenticación previa.",

        publicPasswordTitle:
            "Pública con contraseña",

        publicPasswordText:
            "Hoteles, cafeterías o centros educativos pueden compartir una contraseña con muchos usuarios.",

        trustedTitle:
            "Red de confianza",

        trustedText:
            "Una red conocida y administrada por ti o por una organización de confianza.",

        wifiPracticesTitle:
            "Buenas prácticas",

        vpnTitle:
            "Usa protección adicional",

        vpnText:
            "INCIBE recomienda utilizar VPN al conectarse a redes públicas.",

        bankTitle:
            "Evita datos sensibles",

        bankText:
            "Evita operaciones bancarias o introducir contraseñas cuando uses redes públicas.",

        updateTitle:
            "Mantén actualizado",

        updateText:
            "Utiliza dispositivos y software actualizados.",

        shareTitle:
            "Desactiva compartir",

        shareText:
            "Evita compartir archivos mientras estás conectado a una red pública.",

        wifiGameTitle:
            "¿Te conectarías a esta red?",

        wifiGameInstruction:
            "Analiza cada situación y selecciona la opción más segura.",

        wifiKey:
            "Una red con contraseña no siempre es una red privada o completamente segura.",


        browserTitle:
            "Navegación segura en Internet",

        browserIntro:
            "Antes de hacer clic, descargar o entregar información, revisa dónde estás navegando.",

        httpsTitle:
            "HTTPS y el candado",

        httpsSubtitle:
            "Una conexión cifrada no garantiza que un sitio sea legítimo.",

        httpsP1:
            "HTTPS indica que la comunicación entre tu navegador y el sitio utiliza cifrado.",

        httpsP2:
            "Sin embargo, un sitio malicioso también puede utilizar HTTPS. Por eso debes comprobar la dirección web y el contexto.",

        urlTitle:
            "Revisa antes de hacer clic",

        addressTitle:
            "Dirección web",

        addressText:
            "Verifica que el dominio corresponda realmente al sitio que deseas visitar.",

        unexpectedTitle:
            "Enlaces inesperados",

        unexpectedText:
            "Desconfía de enlaces inesperados o acortados de origen dudoso.",

        downloadsTitle:
            "Descargas",

        downloadsText:
            "Evita archivos o descargas provenientes de sitios desconocidos.",

        browserUpdateTitle:
            "Navegador actualizado",

        browserUpdateText:
            "Mantén actualizado el navegador para reducir vulnerabilidades conocidas.",

        notificationTitle:
            "Cuidado con avisos y notificaciones",

        notificationP1:
            "Algunos sitios muestran avisos falsos de virus o actualizaciones para intentar que descargues software o hagas clic.",

        notificationP2:
            "También puedes configurar el navegador para preguntar antes de permitir notificaciones de nuevos sitios.",

        browserGameTitle:
            "¿Qué harías antes de entrar?",

        browserGameInstruction:
            "Selecciona la opción más segura para cada situación.",

        browserKey:
            "HTTPS protege la conexión, pero no demuestra por sí solo que un sitio sea legítimo."

    },


    en: {

        moduleNumber:
            "MODULE 4",

        moduleTitle:
            "Networks and safe browsing",

        moduleDescription:
            "Learn to connect more safely to Wi-Fi networks and recognize good practices for browsing the Internet.",

        sub1Label:
            "Section 1",

        sub1Title:
            "Wi-Fi network security",

        sub1Description:
            "Learn about risks associated with public networks and practices for connecting more safely.",

        sub1Button:
            "Go to section 1 →",

        sub2Label:
            "Section 2",

        sub2Title:
            "Safe Internet browsing",

        sub2Description:
            "Learn to review web addresses, links, downloads, and important signs before browsing.",

        sub2Button:
            "Go to section 2 →",

        previousModule:
            "← Previous module",

        nextModule:
            "Next module →",


        wifiTitle:
            "Wi-Fi network security",

        wifiIntro:
            "Public networks may expose your information if you do not take precautions when connecting.",

        wifiRiskTitle:
            "What risks exist?",

        wifiRiskSubtitle:
            "Not all networks provide the same level of protection.",

        wifiRiskP1:
            "Public Wi-Fi networks often have fewer security controls and allow many people to connect to the same environment.",

        wifiRiskP2:
            "On these connections, some information may be intercepted if precautions are not taken.",

        networksTitle:
            "Types of public networks",

        networksSubtitle:
            "Having a password does not make a public network private.",

        openTitle:
            "Open network",

        openText:
            "Allows connection without prior authentication.",

        publicPasswordTitle:
            "Public network with password",

        publicPasswordText:
            "Hotels, cafés, or educational institutions may share one password with many users.",

        trustedTitle:
            "Trusted network",

        trustedText:
            "A known network managed by you or by a trusted organization.",

        wifiPracticesTitle:
            "Good practices",

        vpnTitle:
            "Use additional protection",

        vpnText:
            "INCIBE recommends using a VPN when connecting to public networks.",

        bankTitle:
            "Avoid sensitive data",

        bankText:
            "Avoid banking operations or entering passwords when using public networks.",

        updateTitle:
            "Keep updated",

        updateText:
            "Use updated devices and software.",

        shareTitle:
            "Disable sharing",

        shareText:
            "Avoid file sharing while connected to a public network.",

        wifiGameTitle:
            "Would you connect to this network?",

        wifiGameInstruction:
            "Analyze each situation and select the safest option.",

        wifiKey:
            "A network with a password is not necessarily private or completely secure.",


        browserTitle:
            "Safe Internet browsing",

        browserIntro:
            "Before clicking, downloading, or providing information, check where you are browsing.",

        httpsTitle:
            "HTTPS and the lock icon",

        httpsSubtitle:
            "An encrypted connection does not guarantee that a website is legitimate.",

        httpsP1:
            "HTTPS indicates that communication between your browser and the website uses encryption.",

        httpsP2:
            "However, a malicious website can also use HTTPS. You should still check the web address and context.",

        urlTitle:
            "Check before clicking",

        addressTitle:
            "Web address",

        addressText:
            "Verify that the domain actually matches the site you want to visit.",

        unexpectedTitle:
            "Unexpected links",

        unexpectedText:
            "Be cautious with unexpected or shortened links from uncertain sources.",

        downloadsTitle:
            "Downloads",

        downloadsText:
            "Avoid files or downloads from unknown websites.",

        browserUpdateTitle:
            "Updated browser",

        browserUpdateText:
            "Keep your browser updated to reduce known vulnerabilities.",

        notificationTitle:
            "Be careful with alerts and notifications",

        notificationP1:
            "Some websites show fake virus or update alerts to make you download software or click.",

        notificationP2:
            "You can configure your browser to ask before allowing notifications from new websites.",

        browserGameTitle:
            "What would you do before entering?",

        browserGameInstruction:
            "Select the safest option for each situation.",

        browserKey:
            "HTTPS protects the connection, but does not prove by itself that a website is legitimate."

    }

};


/* =========================================
   CAMBIO DE IDIOMA
========================================= */

const languageButtons =
    document.querySelectorAll(
        ".language-btn"
    );


function changeLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(element) {

            const key =
                element.dataset.i18n;


            if (
                translations[language] &&
                translations[language][key]
            ) {

                element.textContent =
                    translations[language][key];

            }

        });


    languageButtons.forEach(
        function(button) {

            button.classList.remove(
                "language-active"
            );


            if (
                button.dataset.lang === language
            ) {

                button.classList.add(
                    "language-active"
                );

            }

        }
    );


    resetWifiQuiz();

    resetBrowserQuiz();

}


languageButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                changeLanguage(
                    this.dataset.lang
                );

            }
        );

    }
);


/* =========================================
   QUIZ WI-FI
========================================= */

const wifiQuiz = {

    es: [

        {
            question:
                "Estás en una cafetería y encuentras una red abierta llamada WIFI_GRATIS sin contraseña. Necesitas entrar a tu banco.",

            options: [
                "Conectarme y entrar al banco",
                "Evitar esa operación en la red pública",
                "Compartir archivos primero",
                "Desactivar las actualizaciones"
            ],

            answer: 1,

            feedback:
                "En redes públicas conviene evitar operaciones bancarias o introducir información sensible."
        },

        {
            question:
                "El hotel te entrega una contraseña para conectarte a su Wi-Fi. ¿Eso significa que la red es privada?",

            options: [
                "Sí, totalmente",
                "No necesariamente",
                "Sí, porque tiene contraseña",
                "Solo si hay muchas personas conectadas"
            ],

            answer: 1,

            feedback:
                "Una red de hotel puede requerir contraseña y continuar siendo una red pública compartida."
        },

        {
            question:
                "Vas a utilizar una red pública. ¿Qué medida adicional recomienda INCIBE?",

            options: [
                "Usar VPN",
                "Compartir carpetas",
                "Desactivar la seguridad",
                "Publicar la contraseña"
            ],

            answer: 0,

            feedback:
                "INCIBE recomienda utilizar VPN cuando se usan redes públicas."
        },

        {
            question:
                "Mientras utilizas Wi-Fi público, tu computador tiene activado el uso compartido de archivos.",

            options: [
                "Mantenerlo activo",
                "Desactivarlo",
                "Compartir todo",
                "No importa"
            ],

            answer: 1,

            feedback:
                "En redes públicas es recomendable desactivar el uso compartido de archivos."
        }

    ],


    en: [

        {
            question:
                "You are at a café and find an open network called FREE_WIFI. You need to access your bank.",

            options: [
                "Connect and access the bank",
                "Avoid that operation on public Wi-Fi",
                "Share files first",
                "Disable updates"
            ],

            answer: 1,

            feedback:
                "On public networks, avoid banking operations or entering sensitive information."
        },

        {
            question:
                "A hotel gives you a password for its Wi-Fi. Does that mean the network is private?",

            options: [
                "Yes, completely",
                "Not necessarily",
                "Yes, because it has a password",
                "Only if many people are connected"
            ],

            answer: 1,

            feedback:
                "A hotel network may require a password and still be a shared public network."
        },

        {
            question:
                "You are going to use public Wi-Fi. What additional measure does INCIBE recommend?",

            options: [
                "Use a VPN",
                "Share folders",
                "Disable security",
                "Publish the password"
            ],

            answer: 0,

            feedback:
                "INCIBE recommends using a VPN on public networks."
        },

        {
            question:
                "While using public Wi-Fi, file sharing is enabled on your computer.",

            options: [
                "Keep it enabled",
                "Disable it",
                "Share everything",
                "It does not matter"
            ],

            answer: 1,

            feedback:
                "Disabling file sharing is recommended when using public networks."
        }

    ]

};


/* =========================================
   QUIZ NAVEGACIÓN
========================================= */

const browserQuiz = {

    es: [

        {
            question:
                "Recibes un enlace que dice ser de tu universidad, pero el dominio tiene letras cambiadas. ¿Qué haces?",

            options: [
                "Entrar porque tiene HTTPS",
                "Verificar la dirección antes de entrar",
                "Compartirlo",
                "Ingresar mi contraseña"
            ],

            answer: 1,

            feedback:
                "Debes revisar cuidadosamente el dominio. HTTPS no demuestra por sí solo que el sitio sea legítimo."
        },

        {
            question:
                "Un sitio muestra un candado y HTTPS. ¿Eso garantiza que el sitio sea confiable?",

            options: [
                "Sí",
                "No",
                "Solo en computadores",
                "Solo si tiene anuncios"
            ],

            answer: 1,

            feedback:
                "HTTPS protege la conexión, pero un sitio malicioso también puede utilizarlo."
        },

        {
            question:
                "Aparece una ventana diciendo: 'Tu computador tiene 12 virus. Haz clic aquí para actualizar'. ¿Qué deberías hacer?",

            options: [
                "Hacer clic inmediatamente",
                "Cerrar el aviso y no descargar desde allí",
                "Ingresar mis datos",
                "Compartir la alerta"
            ],

            answer: 1,

            feedback:
                "Los avisos inesperados de virus o actualizaciones pueden ser engañosos. No descargues software desde ellos."
        },

        {
            question:
                "Un mensaje inesperado contiene un enlace acortado y promete un premio. ¿Qué opción es más segura?",

            options: [
                "Abrirlo",
                "Revisar antes y evitarlo si el origen es dudoso",
                "Enviar mis datos",
                "Descargar el archivo"
            ],

            answer: 1,

            feedback:
                "Los enlaces acortados de origen dudoso y las ofertas demasiado buenas para ser ciertas son señales de alerta."
        }

    ],


    en: [

        {
            question:
                "You receive a link claiming to be from your university, but the domain has altered letters. What do you do?",

            options: [
                "Open it because it uses HTTPS",
                "Verify the address before entering",
                "Share it",
                "Enter my password"
            ],

            answer: 1,

            feedback:
                "Check the domain carefully. HTTPS alone does not prove that a website is legitimate."
        },

        {
            question:
                "A website shows HTTPS and a lock icon. Does this guarantee that the website is trustworthy?",

            options: [
                "Yes",
                "No",
                "Only on computers",
                "Only if it has ads"
            ],

            answer: 1,

            feedback:
                "HTTPS protects the connection, but a malicious site may also use it."
        },

        {
            question:
                "A pop-up says: 'Your computer has 12 viruses. Click here to update.' What should you do?",

            options: [
                "Click immediately",
                "Close the alert and do not download from it",
                "Enter my information",
                "Share the warning"
            ],

            answer: 1,

            feedback:
                "Unexpected virus or update alerts can be deceptive. Do not download software through them."
        },

        {
            question:
                "An unexpected message contains a shortened link and promises a prize. What is safer?",

            options: [
                "Open it",
                "Check first and avoid it if the source is uncertain",
                "Send my information",
                "Download the file"
            ],

            answer: 1,

            feedback:
                "Shortened links from uncertain sources and offers that seem too good to be true are warning signs."
        }

    ]

};


/* =========================================
   FUNCIÓN GENERAL DE QUIZ
========================================= */

function createQuiz(config) {

    const counter =
        document.getElementById(
            config.counterId
        );

    const questionElement =
        document.getElementById(
            config.questionId
        );

    const optionsElement =
        document.getElementById(
            config.optionsId
        );

    const feedbackElement =
        document.getElementById(
            config.feedbackId
        );

    const nextButton =
        document.getElementById(
            config.nextId
        );


    let currentIndex = 0;


    function loadQuestion() {

        if (!questionElement) {
            return;
        }


        const questions =
            config.data[currentLanguage];


        const question =
            questions[currentIndex];


        counter.textContent =
            currentLanguage === "es"
            ?
            `Situación ${currentIndex + 1} de ${questions.length}`
            :
            `Situation ${currentIndex + 1} of ${questions.length}`;


        questionElement.textContent =
            question.question;


        optionsElement.innerHTML =
            "";


        feedbackElement.textContent =
            "";


        nextButton.disabled =
            true;


        question.options.forEach(
            function(option, index) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "quiz-option";


                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    function() {

                        checkAnswer(
                            index,
                            button
                        );

                    }
                );


                optionsElement.appendChild(
                    button
                );

            }
        );

    }


    function checkAnswer(
        selected,
        selectedButton
    ) {

        const question =
            config.data[currentLanguage]
            [currentIndex];


        const buttons =
            optionsElement.querySelectorAll(
                ".quiz-option"
            );


        buttons.forEach(
            function(button) {

                button.disabled =
                    true;

            }
        );


        if (
            selected ===
            question.answer
        ) {

            selectedButton.classList.add(
                "correct"
            );


            feedbackElement.textContent =
                (
                    currentLanguage === "es"
                    ?
                    "✓ Correcto. "
                    :
                    "✓ Correct. "
                )
                +
                question.feedback;

        }

        else {

            selectedButton.classList.add(
                "incorrect"
            );


            buttons[
                question.answer
            ].classList.add(
                "correct"
            );


            feedbackElement.textContent =
                (
                    currentLanguage === "es"
                    ?
                    "✗ Revisa tu respuesta. "
                    :
                    "✗ Review your answer. "
                )
                +
                question.feedback;

        }


        nextButton.disabled =
            false;

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function() {

                const questions =
                    config.data[
                        currentLanguage
                    ];


                if (
                    currentIndex <
                    questions.length - 1
                ) {

                    currentIndex++;

                    loadQuestion();

                }

                else {

                    counter.textContent =
                        "✓";


                    questionElement.textContent =
                        currentLanguage === "es"
                        ?
                        "¡Actividad completada!"
                        :
                        "Activity completed!";


                    optionsElement.innerHTML =
                        "";


                    feedbackElement.textContent =
                        currentLanguage === "es"
                        ?
                        config.finishES
                        :
                        config.finishEN;


                    nextButton.style.display =
                        "none";

                }

            }
        );

    }


    function reset() {

        if (!questionElement) {
            return;
        }


        currentIndex = 0;

        nextButton.style.display =
            "inline-block";

        loadQuestion();

    }


    loadQuestion();


    return reset;

}


/* =========================================
   CREACIÓN DE ACTIVIDADES
========================================= */

const resetWifiQuiz =
    createQuiz({

        counterId:
            "wifiCounter",

        questionId:
            "wifiQuestion",

        optionsId:
            "wifiOptions",

        feedbackId:
            "wifiFeedback",

        nextId:
            "wifiNext",

        data:
            wifiQuiz,

        finishES:
            "Terminaste la actividad sobre seguridad en redes Wi-Fi.",

        finishEN:
            "You completed the Wi-Fi security activity."

    });


const resetBrowserQuiz =
    createQuiz({

        counterId:
            "browserCounter",

        questionId:
            "browserQuestion",

        optionsId:
            "browserOptions",

        feedbackId:
            "browserFeedback",

        nextId:
            "browserNext",

        data:
            browserQuiz,

        finishES:
            "Terminaste la actividad sobre navegación segura.",

        finishEN:
            "You completed the safe browsing activity."

    });