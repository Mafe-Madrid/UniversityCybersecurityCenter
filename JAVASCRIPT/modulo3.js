/* =========================================
   IDIOMA
========================================= */

let currentLanguage = "es";


const translations = {

    es: {

        moduleNumber:
            "MÓDULO 3",

        moduleTitle:
            "Phishing y engaños digitales",

        moduleDescription:
            "Aprende cómo funcionan los intentos de phishing y reconoce las señales que pueden revelar mensajes o sitios engañosos.",

        sub1Label:
            "Subsección 1",

        sub1Title:
            "¿Qué es el phishing?",

        sub1Description:
            "Descubre cómo los atacantes utilizan mensajes engañosos para intentar obtener datos, credenciales o acceso a tus cuentas.",

        sub1Button:
            "Ir a la subsección 1 →",

        sub2Label:
            "Subsección 2",

        sub2Title:
            "Cómo detectar un intento de phishing",

        sub2Description:
            "Aprende a identificar señales sospechosas antes de hacer clic, responder o entregar información.",

        sub2Button:
            "Ir a la subsección 2 →",

        previousModule:
            "← Módulo anterior",

        nextModule:
            "Siguiente módulo →",


        phishingTitle:
            "¿Qué es el phishing?",

        phishingIntro:
            "El phishing utiliza comunicaciones engañosas para intentar obtener información, credenciales o acceso a cuentas.",

        howTitle:
            "¿Cómo funciona?",

        howSubtitle:
            "El atacante intenta parecer confiable.",

        howP1:
            "Un intento de phishing puede llegar mediante correo electrónico, mensaje de texto, mensaje directo o incluso una llamada.",

        howP2:
            "El atacante puede hacerse pasar por una persona u organización conocida para intentar obtener datos personales, financieros o credenciales de acceso.",

        formsTitle:
            "Formas de phishing",

        formsSubtitle:
            "El engaño puede llegar por diferentes canales.",

        emailPhishingText:
            "Mensajes de correo que intentan imitar comunicaciones legítimas.",

        smishingText:
            "Intentos de engaño enviados mediante mensajes SMS.",

        vishingText:
            "Engaños realizados mediante llamadas o comunicación por voz.",

        directTitle:
            "Mensajes directos",

        directText:
            "También pueden utilizarse redes sociales y servicios de mensajería.",

        socialTitle:
            "Ingeniería social",

        socialSubtitle:
            "El phishing es una forma de ingeniería social.",

        socialText:
            "La ingeniería social busca aprovechar la interacción humana para conseguir información o comprometer sistemas.",

        quizTitle:
            "¿Phishing o mensaje normal?",

        quizInstruction:
            "Lee cada situación y selecciona la respuesta.",

        phishingKey:
            "El phishing intenta ganarse tu confianza para hacerte realizar una acción que beneficia al atacante.",


        detectTitle:
            "Cómo detectar un intento de phishing",

        detectIntro:
            "Algunas señales pueden ayudarte a detenerte antes de hacer clic, responder o entregar información.",

        signalsTitle:
            "Señales de alerta",

        signalsSubtitle:
            "No dependas únicamente de los errores ortográficos.",

        urgencyTitle:
            "Urgencia",

        urgencyText:
            "Mensajes que presionan para actuar inmediatamente o amenazan con consecuencias.",

        dataTitle:
            "Solicitud de datos",

        dataText:
            "Peticiones inesperadas de contraseñas o información personal y financiera.",

        linksTitle:
            "Enlaces sospechosos",

        linksText:
            "Direcciones incorrectas, alteradas o enlaces acortados de origen dudoso.",

        offerTitle:
            "Ofertas increíbles",

        offerText:
            "Premios o beneficios demasiado buenos para ser ciertos.",

        actionTitle:
            "¿Qué hacer ante un mensaje sospechoso?",

        dontClickTitle:
            "No hagas clic",

        dontClickText:
            "Evita abrir enlaces o archivos adjuntos.",

        reportTitle:
            "Reporta",

        reportText:
            "Utiliza las herramientas de reporte del servicio.",

        verifyTitle:
            "Verifica por otro medio",

        verifyText:
            "Contacta a la organización mediante un canal que tú mismo busques.",

        deleteTitle:
            "Elimina",

        deleteText:
            "Después de reportarlo, elimina el mensaje sospechoso.",

        emailGameTitle:
            "Encuentra las señales sospechosas",

        emailGameInstruction:
            "Haz clic sobre los elementos que te parezcan sospechosos.",

        fromLabel:
            "De:",

        subjectLabel:
            "Asunto:",

        fakeGreeting:
            "Estimado estudiante:",

        fakeThreat:
            "Detectamos un problema. Si no verificas tu cuenta en las próximas 2 horas, perderás el acceso.",

        fakeInstruction:
            "Para evitar el bloqueo, verifica tu identidad aquí:",

        fakeCredentials:
            "Necesitarás ingresar tu usuario y contraseña.",

        clickedKey:
            "Si ya entregaste credenciales, cambia las contraseñas afectadas, informa a los responsables correspondientes y protege las cuentas relacionadas."

    },


    en: {

        moduleNumber:
            "MODULE 3",

        moduleTitle:
            "Phishing and digital deception",

        moduleDescription:
            "Learn how phishing attempts work and recognize signs that may reveal deceptive messages or websites.",

        sub1Label:
            "Section 1",

        sub1Title:
            "What is phishing?",

        sub1Description:
            "Learn how attackers use deceptive messages to try to obtain information, credentials, or account access.",

        sub1Button:
            "Go to section 1 →",

        sub2Label:
            "Section 2",

        sub2Title:
            "How to detect phishing",

        sub2Description:
            "Learn to identify suspicious signs before clicking, responding, or providing information.",

        sub2Button:
            "Go to section 2 →",

        previousModule:
            "← Previous module",

        nextModule:
            "Next module →",


        phishingTitle:
            "What is phishing?",

        phishingIntro:
            "Phishing uses deceptive communications to try to obtain information, credentials, or access to accounts.",

        howTitle:
            "How does it work?",

        howSubtitle:
            "The attacker tries to appear trustworthy.",

        howP1:
            "A phishing attempt may arrive by email, text message, direct message, or even a phone call.",

        howP2:
            "The attacker may impersonate a known person or organization to try to obtain personal or financial information or login credentials.",

        formsTitle:
            "Forms of phishing",

        formsSubtitle:
            "The deception can arrive through different channels.",

        emailPhishingText:
            "Email messages that attempt to imitate legitimate communications.",

        smishingText:
            "Deceptive attempts delivered through SMS messages.",

        vishingText:
            "Deception carried out through calls or voice communication.",

        directTitle:
            "Direct messages",

        directText:
            "Social networks and messaging services may also be used.",

        socialTitle:
            "Social engineering",

        socialSubtitle:
            "Phishing is a form of social engineering.",

        socialText:
            "Social engineering seeks to exploit human interaction to obtain information or compromise systems.",

        quizTitle:
            "Phishing or normal message?",

        quizInstruction:
            "Read each situation and select your answer.",

        phishingKey:
            "Phishing tries to gain your trust so you perform an action that benefits the attacker.",


        detectTitle:
            "How to detect a phishing attempt",

        detectIntro:
            "Some signs can help you stop before clicking, responding, or providing information.",

        signalsTitle:
            "Warning signs",

        signalsSubtitle:
            "Do not rely only on spelling errors.",

        urgencyTitle:
            "Urgency",

        urgencyText:
            "Messages that pressure you to act immediately or threaten consequences.",

        dataTitle:
            "Requests for information",

        dataText:
            "Unexpected requests for passwords or personal and financial information.",

        linksTitle:
            "Suspicious links",

        linksText:
            "Incorrect or altered addresses and shortened links from uncertain sources.",

        offerTitle:
            "Amazing offers",

        offerText:
            "Prizes or benefits that seem too good to be true.",

        actionTitle:
            "What should you do with a suspicious message?",

        dontClickTitle:
            "Do not click",

        dontClickText:
            "Avoid opening links or attachments.",

        reportTitle:
            "Report",

        reportText:
            "Use the service's reporting tools.",

        verifyTitle:
            "Verify another way",

        verifyText:
            "Contact the organization through a channel you find yourself.",

        deleteTitle:
            "Delete",

        deleteText:
            "After reporting it, delete the suspicious message.",

        emailGameTitle:
            "Find the suspicious signs",

        emailGameInstruction:
            "Click the elements you think are suspicious.",

        fromLabel:
            "From:",

        subjectLabel:
            "Subject:",

        fakeGreeting:
            "Dear student:",

        fakeThreat:
            "We detected a problem. If you do not verify your account within the next 2 hours, you will lose access.",

        fakeInstruction:
            "To avoid suspension, verify your identity here:",

        fakeCredentials:
            "You will need to enter your username and password.",

        clickedKey:
            "If you already provided credentials, change the affected passwords, notify the appropriate people, and secure related accounts."

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
        .querySelectorAll(
            "[data-i18n]"
        )
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


    resetPhishingQuiz();

    resetClues();

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
   QUIZ - PHISHING O NORMAL
========================================= */

const phishingQuiz = {

    es: [

        {

            question:
                "Recibes un mensaje inesperado que dice que tu cuenta será cerrada si no ingresas inmediatamente a un enlace.",

            options: [
                "Posible phishing",
                "Mensaje normal"
            ],

            answer: 0,

            feedback:
                "La presión para actuar rápidamente y el enlace inesperado son señales de alerta."

        },

        {

            question:
                "Ingresas directamente a la plataforma oficial desde tu marcador habitual y ves una notificación dentro de tu cuenta.",

            options: [
                "Posible phishing",
                "Situación normal"
            ],

            answer: 1,

            feedback:
                "Acceder directamente mediante el sitio oficial reduce el riesgo de seguir un enlace engañoso."

        },

        {

            question:
                "Un mensaje te ofrece un premio inesperado y solicita tus datos bancarios para entregarlo.",

            options: [
                "Posible phishing",
                "Mensaje normal"
            ],

            answer: 0,

            feedback:
                "Las ofertas demasiado buenas para ser ciertas y las solicitudes de datos financieros son señales sospechosas."

        },

        {

            question:
                "Recibes un correo inesperado que solicita tu contraseña para verificar tu identidad.",

            options: [
                "Posible phishing",
                "Mensaje normal"
            ],

            answer: 0,

            feedback:
                "Una solicitud inesperada de credenciales debe tratarse como señal de alerta."

        }

    ],


    en: [

        {

            question:
                "You receive an unexpected message saying your account will be closed unless you immediately follow a link.",

            options: [
                "Possible phishing",
                "Normal message"
            ],

            answer: 0,

            feedback:
                "Pressure to act quickly and an unexpected link are warning signs."

        },

        {

            question:
                "You directly open the official platform using your usual bookmark and see a notification inside your account.",

            options: [
                "Possible phishing",
                "Normal situation"
            ],

            answer: 1,

            feedback:
                "Accessing the official site directly reduces the risk of following a deceptive link."

        },

        {

            question:
                "A message offers an unexpected prize and requests your banking information to deliver it.",

            options: [
                "Possible phishing",
                "Normal message"
            ],

            answer: 0,

            feedback:
                "Offers that seem too good to be true and requests for financial information are suspicious."

        },

        {

            question:
                "You receive an unexpected email asking for your password to verify your identity.",

            options: [
                "Possible phishing",
                "Normal message"
            ],

            answer: 0,

            feedback:
                "An unexpected request for credentials should be treated as a warning sign."

        }

    ]

};


const phishingCounter =
    document.getElementById(
        "phishingCounter"
    );

const phishingQuestion =
    document.getElementById(
        "phishingQuestion"
    );

const phishingOptions =
    document.getElementById(
        "phishingOptions"
    );

const phishingFeedback =
    document.getElementById(
        "phishingFeedback"
    );

const phishingNext =
    document.getElementById(
        "phishingNext"
    );


let phishingIndex = 0;


function loadPhishingQuestion() {

    if (!phishingQuestion) {
        return;
    }


    const questions =
        phishingQuiz[currentLanguage];


    const question =
        questions[phishingIndex];


    phishingCounter.textContent =
        currentLanguage === "es"
        ?
        `Situación ${phishingIndex + 1} de ${questions.length}`
        :
        `Situation ${phishingIndex + 1} of ${questions.length}`;


    phishingQuestion.textContent =
        question.question;


    phishingOptions.innerHTML = "";

    phishingFeedback.textContent = "";

    phishingNext.disabled = true;


    question.options.forEach(
        function(option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";

            button.className =
                "quiz-option";

            button.textContent =
                option;


            button.addEventListener(
                "click",
                function() {

                    checkPhishingAnswer(
                        index,
                        button
                    );

                }
            );


            phishingOptions.appendChild(
                button
            );

        }
    );

}


function checkPhishingAnswer(
    selected,
    selectedButton
) {

    const question =
        phishingQuiz[currentLanguage]
        [phishingIndex];


    const buttons =
        phishingOptions.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    if (
        selected ===
        question.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        phishingFeedback.textContent =
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


        phishingFeedback.textContent =
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


    phishingNext.disabled =
        false;

}


if (phishingNext) {

    phishingNext.addEventListener(
        "click",
        function() {

            const questions =
                phishingQuiz[currentLanguage];


            if (
                phishingIndex <
                questions.length - 1
            ) {

                phishingIndex++;

                loadPhishingQuestion();

            }

            else {

                phishingCounter.textContent =
                    "✓";


                phishingQuestion.textContent =
                    currentLanguage === "es"
                    ?
                    "¡Actividad completada!"
                    :
                    "Activity completed!";


                phishingOptions.innerHTML =
                    "";


                phishingFeedback.textContent =
                    currentLanguage === "es"
                    ?
                    "Terminaste la actividad sobre phishing."
                    :
                    "You completed the phishing activity.";


                phishingNext.style.display =
                    "none";

            }

        }
    );

}


function resetPhishingQuiz() {

    if (!phishingQuestion) {
        return;
    }


    phishingIndex = 0;

    phishingNext.style.display =
        "inline-block";

    loadPhishingQuestion();

}


/* =========================================
   ACTIVIDAD DEL CORREO
========================================= */

const clueButtons =
    document.querySelectorAll(
        ".phishing-clue"
    );


const clueResult =
    document.getElementById(
        "phishingClueResult"
    );


const clueScore =
    document.getElementById(
        "clueScore"
    );


let foundClues =
    new Set();


const clueMessages = {

    es: {

        sender:
            "Remitente sospechoso: el dominio intenta parecer legítimo, pero su dirección no corresponde claramente a la organización.",

        urgency:
            "Urgencia: el mensaje intenta presionarte para que actúes sin detenerte a verificar.",

        threat:
            "Amenaza o consecuencia: utiliza el miedo a perder el acceso para provocar una reacción rápida.",

        link:
            "Enlace sospechoso: la dirección no corresponde claramente al dominio oficial de la institución.",

        credentials:
            "Solicitud de credenciales: pedir usuario y contraseña desde un enlace inesperado es una señal de alerta."

    },


    en: {

        sender:
            "Suspicious sender: the domain tries to look legitimate, but the address does not clearly match the organization.",

        urgency:
            "Urgency: the message pressures you to act before taking time to verify it.",

        threat:
            "Threat or consequence: it uses fear of losing access to trigger a quick reaction.",

        link:
            "Suspicious link: the address does not clearly match the institution's official domain.",

        credentials:
            "Credential request: asking for a username and password through an unexpected link is a warning sign."

    }

};


clueButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const clue =
                    this.dataset.clue;


                foundClues.add(clue);

                this.classList.add(
                    "found"
                );


                if (clueResult) {

                    clueResult.textContent =
                        clueMessages
                            [currentLanguage]
                            [clue];

                }


                updateClueScore();

            }
        );

    }
);


function updateClueScore() {

    if (!clueScore) {
        return;
    }


    const total =
        clueButtons.length;


    const found =
        foundClues.size;


    if (found === total) {

        clueScore.textContent =
            currentLanguage === "es"
            ?
            `✓ Encontraste las ${total} señales sospechosas.`
            :
            `✓ You found all ${total} suspicious signs.`;

    }

    else {

        clueScore.textContent =
            currentLanguage === "es"
            ?
            `Señales encontradas: ${found} de ${total}`
            :
            `Signs found: ${found} of ${total}`;

    }

}


function resetClues() {

    if (!clueScore) {
        return;
    }


    foundClues.clear();


    clueButtons.forEach(
        function(button) {

            button.classList.remove(
                "found"
            );

        }
    );


    clueResult.textContent =
        currentLanguage === "es"
        ?
        "Selecciona una señal sospechosa."
        :
        "Select a suspicious sign.";


    updateClueScore();

}


/* =========================================
   INICIALIZACIÓN
========================================= */

loadPhishingQuestion();

updateClueScore();