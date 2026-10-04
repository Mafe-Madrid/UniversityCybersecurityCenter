/* =========================================
   IDIOMAS
========================================= */

let currentLanguage = "es";


const translations = {

    es: {

        moduleNumber:
            "MÓDULO 2",

        moduleTitle:
            "Contraseñas y cuentas",

        moduleDescription:
            "Aprende cómo fortalecer tus contraseñas, proteger tus cuentas y utilizar mecanismos adicionales de autenticación.",

        sub1Label:
            "Subsección 1",

        sub1Title:
            "Contraseñas seguras",

        sub1Description:
            "Conoce prácticas actuales para crear y administrar contraseñas de forma segura.",

        sub1Button:
            "Ir a la subsección 1 →",

        sub2Label:
            "Subsección 2",

        sub2Title:
            "Protección de cuentas y autenticación",

        sub2Description:
            "Aprende cómo la autenticación multifactor y otras medidas ayudan a proteger tus cuentas.",

        sub2Button:
            "Ir a la subsección 2 →",

        previousModule:
            "← Módulo anterior",

        nextModule:
            "Siguiente módulo →",


        passwordTitle:
            "Contraseñas seguras",

        passwordIntro:
            "Las contraseñas ayudan a proteger el acceso a nuestras cuentas y servicios digitales.",

        passwordFeaturesTitle:
            "¿Cómo debe ser una contraseña?",

        passwordFeaturesSubtitle:
            "La longitud y la unicidad son aspectos importantes.",

        passwordP1:
            "NIST recomienda utilizar contraseñas suficientemente largas y permitir el uso de frases de contraseña.",

        passwordP2:
            "También es importante evitar contraseñas comunes o filtradas y utilizar una contraseña diferente para cada cuenta.",

        practicesTitle:
            "Buenas prácticas",

        practicesSubtitle:
            "Algunas decisiones reducen el riesgo de que una cuenta sea comprometida.",

        longTitle:
            "Contraseñas largas",

        longText:
            "Una mayor longitud dificulta que una contraseña sea adivinada.",

        uniqueTitle:
            "Única por cuenta",

        uniqueText:
            "Evita reutilizar una misma contraseña en varios servicios.",

        managerTitle:
            "Gestor de contraseñas",

        managerText:
            "Puede ayudar a generar y administrar contraseñas diferentes y fuertes.",

        compromisedTitle:
            "Cambiar si hay riesgo",

        compromisedText:
            "Debe cambiarse una contraseña cuando existe sospecha de compromiso.",

        practiceGameTitle:
            "¿Buena o mala práctica?",

        practiceGameInstruction:
            "Lee cada situación y selecciona tu respuesta.",

        passwordKey:
            "Una contraseña debe ser larga, difícil de adivinar y diferente para cada cuenta.",


        accountTitle:
            "Protección de cuentas y autenticación",

        accountIntro:
            "Una contraseña es importante, pero puede complementarse con mecanismos adicionales de autenticación.",

        mfaTitle:
            "Autenticación multifactor",

        mfaSubtitle:
            "Agrega una comprobación adicional a la contraseña.",

        mfaP1:
            "La autenticación multifactor solicita más de una evidencia para comprobar la identidad del usuario.",

        mfaP2:
            "Esto ayuda a proteger una cuenta incluso cuando una contraseña ha sido comprometida.",

        factorsTitle:
            "Factores de autenticación",

        factorsSubtitle:
            "La identidad puede comprobarse mediante diferentes tipos de factores.",

        knowTitle:
            "Algo que sabes",

        knowText:
            "Por ejemplo, una contraseña.",

        haveTitle:
            "Algo que tienes",

        haveText:
            "Por ejemplo, un dispositivo o autenticador.",

        areTitle:
            "Algo que eres",

        areText:
            "Características biométricas utilizadas junto con otros mecanismos.",

        compromiseTitle:
            "¿Qué hacer si sospechas que una cuenta fue comprometida?",

        changePasswordTitle:
            "Cambia la contraseña",

        changePasswordText:
            "Cambia inmediatamente la contraseña revelada o comprometida.",

        reuseTitle:
            "Revisa reutilización",

        reuseText:
            "Si utilizaste esa contraseña en otros servicios, cámbiala también allí.",

        sessionsTitle:
            "Revisa sesiones",

        sessionsText:
            "Verifica los dispositivos conectados y cierra los que no reconozcas.",

        recoverTitle:
            "Recupera la cuenta",

        recoverText:
            "Utiliza los mecanismos oficiales de recuperación del servicio.",

        accountGameTitle:
            "¿Qué harías?",

        accountGameInstruction:
            "Selecciona la mejor acción para cada situación.",

        accountKey:
            "Una cuenta protegida combina una contraseña segura, autenticación adicional y revisión de accesos."

    },


    en: {

        moduleNumber:
            "MODULE 2",

        moduleTitle:
            "Passwords and accounts",

        moduleDescription:
            "Learn how to strengthen your passwords, protect your accounts, and use additional authentication mechanisms.",

        sub1Label:
            "Section 1",

        sub1Title:
            "Secure passwords",

        sub1Description:
            "Learn current practices for creating and managing passwords securely.",

        sub1Button:
            "Go to section 1 →",

        sub2Label:
            "Section 2",

        sub2Title:
            "Account protection and authentication",

        sub2Description:
            "Learn how multifactor authentication and other measures help protect your accounts.",

        sub2Button:
            "Go to section 2 →",

        previousModule:
            "← Previous module",

        nextModule:
            "Next module →",


        passwordTitle:
            "Secure passwords",

        passwordIntro:
            "Passwords help protect access to our accounts and digital services.",

        passwordFeaturesTitle:
            "What should a password be like?",

        passwordFeaturesSubtitle:
            "Length and uniqueness are important aspects.",

        passwordP1:
            "NIST recommends using sufficiently long passwords and allowing passphrases.",

        passwordP2:
            "It is also important to avoid common or compromised passwords and use a different password for each account.",

        practicesTitle:
            "Good practices",

        practicesSubtitle:
            "Some decisions reduce the risk of an account being compromised.",

        longTitle:
            "Long passwords",

        longText:
            "Greater length makes a password harder to guess.",

        uniqueTitle:
            "Unique for each account",

        uniqueText:
            "Avoid reusing the same password across multiple services.",

        managerTitle:
            "Password manager",

        managerText:
            "It can help generate and manage strong, different passwords.",

        compromisedTitle:
            "Change when at risk",

        compromisedText:
            "A password should be changed when compromise is suspected.",

        practiceGameTitle:
            "Good or bad practice?",

        practiceGameInstruction:
            "Read each situation and select your answer.",

        passwordKey:
            "A password should be long, hard to guess, and different for each account.",


        accountTitle:
            "Account protection and authentication",

        accountIntro:
            "A password is important, but it can be complemented with additional authentication mechanisms.",

        mfaTitle:
            "Multifactor authentication",

        mfaSubtitle:
            "Adds an additional verification step to a password.",

        mfaP1:
            "Multifactor authentication requires more than one piece of evidence to verify a user's identity.",

        mfaP2:
            "This helps protect an account even when a password has been compromised.",

        factorsTitle:
            "Authentication factors",

        factorsSubtitle:
            "Identity can be verified using different types of factors.",

        knowTitle:
            "Something you know",

        knowText:
            "For example, a password.",

        haveTitle:
            "Something you have",

        haveText:
            "For example, a device or authenticator.",

        areTitle:
            "Something you are",

        areText:
            "Biometric characteristics used together with other mechanisms.",

        compromiseTitle:
            "What should you do if you suspect an account has been compromised?",

        changePasswordTitle:
            "Change the password",

        changePasswordText:
            "Immediately change the disclosed or compromised password.",

        reuseTitle:
            "Check reuse",

        reuseText:
            "If you used that password elsewhere, change it there as well.",

        sessionsTitle:
            "Review sessions",

        sessionsText:
            "Check connected devices and close those you do not recognize.",

        recoverTitle:
            "Recover the account",

        recoverText:
            "Use the service's official account recovery mechanisms.",

        accountGameTitle:
            "What would you do?",

        accountGameInstruction:
            "Select the best action for each situation.",

        accountKey:
            "A protected account combines a secure password, additional authentication, and access monitoring."

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


    resetPasswordQuiz();

    resetAccountQuiz();

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
   ACTIVIDAD CONTRASEÑAS
========================================= */

const passwordQuiz = {

    es: [

        {
            question:
                "Utilizas la misma contraseña en tu correo, redes sociales y plataforma universitaria.",

            options: [
                "Buena práctica",
                "Mala práctica"
            ],

            answer: 1,

            feedback:
                "Reutilizar una contraseña aumenta el riesgo: si se compromete una cuenta, otras también pueden quedar expuestas."
        },

        {
            question:
                "Utilizas una contraseña larga y diferente para cada cuenta.",

            options: [
                "Buena práctica",
                "Mala práctica"
            ],

            answer: 0,

            feedback:
                "Las contraseñas largas y únicas ayudan a reducir el riesgo de acceso no autorizado."
        },

        {
            question:
                "Cambias obligatoriamente todas tus contraseñas cada 30 días aunque no exista sospecha de compromiso.",

            options: [
                "Buena práctica",
                "No es necesario"
            ],

            answer: 1,

            feedback:
                "NIST no recomienda forzar cambios periódicos sin evidencia de compromiso."
        },

        {
            question:
                "Utilizas un gestor de contraseñas para crear y almacenar contraseñas diferentes.",

            options: [
                "Buena práctica",
                "Mala práctica"
            ],

            answer: 0,

            feedback:
                "Los gestores pueden facilitar el uso de contraseñas fuertes y diferentes para cada servicio."
        }

    ],


    en: [

        {
            question:
                "You use the same password for email, social media, and your university platform.",

            options: [
                "Good practice",
                "Bad practice"
            ],

            answer: 1,

            feedback:
                "Password reuse increases risk because one compromised account may expose others."
        },

        {
            question:
                "You use a long and different password for every account.",

            options: [
                "Good practice",
                "Bad practice"
            ],

            answer: 0,

            feedback:
                "Long, unique passwords help reduce unauthorized access."
        },

        {
            question:
                "You automatically change every password every 30 days even when there is no sign of compromise.",

            options: [
                "Good practice",
                "Not necessary"
            ],

            answer: 1,

            feedback:
                "NIST does not recommend forcing periodic password changes without evidence of compromise."
        },

        {
            question:
                "You use a password manager to create and store different passwords.",

            options: [
                "Good practice",
                "Bad practice"
            ],

            answer: 0,

            feedback:
                "Password managers can make it easier to use strong and unique passwords."
        }

    ]

};


const passwordCounter =
    document.getElementById(
        "passwordCounter"
    );

const passwordQuestion =
    document.getElementById(
        "passwordQuestion"
    );

const passwordOptions =
    document.getElementById(
        "passwordOptions"
    );

const passwordFeedback =
    document.getElementById(
        "passwordFeedback"
    );

const passwordNext =
    document.getElementById(
        "passwordNext"
    );


let passwordIndex = 0;


function loadPasswordQuestion() {

    if (!passwordQuestion) {
        return;
    }


    const questions =
        passwordQuiz[currentLanguage];


    const question =
        questions[passwordIndex];


    passwordCounter.textContent =
        currentLanguage === "es"
        ?
        `Situación ${passwordIndex + 1} de ${questions.length}`
        :
        `Situation ${passwordIndex + 1} of ${questions.length}`;


    passwordQuestion.textContent =
        question.question;


    passwordOptions.innerHTML = "";

    passwordFeedback.textContent = "";

    passwordNext.disabled = true;


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

                    checkPasswordAnswer(
                        index,
                        button
                    );

                }
            );


            passwordOptions.appendChild(
                button
            );

        }
    );

}


function checkPasswordAnswer(
    selected,
    selectedButton
) {

    const question =
        passwordQuiz[currentLanguage]
        [passwordIndex];


    const buttons =
        passwordOptions.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    if (selected === question.answer) {

        selectedButton.classList.add(
            "correct"
        );

        passwordFeedback.textContent =
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

        passwordFeedback.textContent =
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


    passwordNext.disabled =
        false;

}


if (passwordNext) {

    passwordNext.addEventListener(
        "click",
        function() {

            const questions =
                passwordQuiz[currentLanguage];


            if (
                passwordIndex <
                questions.length - 1
            ) {

                passwordIndex++;

                loadPasswordQuestion();

            }

            else {

                passwordCounter.textContent =
                    "✓";


                passwordQuestion.textContent =
                    currentLanguage === "es"
                    ?
                    "¡Actividad completada!"
                    :
                    "Activity completed!";


                passwordOptions.innerHTML =
                    "";


                passwordFeedback.textContent =
                    currentLanguage === "es"
                    ?
                    "Terminaste la actividad sobre buenas prácticas de contraseñas."
                    :
                    "You completed the password best practices activity.";


                passwordNext.style.display =
                    "none";

            }

        }
    );

}


function resetPasswordQuiz() {

    if (!passwordQuestion) {
        return;
    }


    passwordIndex = 0;

    passwordNext.style.display =
        "inline-block";

    loadPasswordQuestion();

}


/* =========================================
   ACTIVIDAD PROTECCIÓN DE CUENTAS
========================================= */

const accountQuiz = {

    es: [

        {
            question:
                "Recibes una alerta de inicio de sesión desde un dispositivo que no reconoces. ¿Qué deberías hacer?",

            options: [
                "Ignorarla",
                "Revisar la actividad y proteger la cuenta",
                "Compartir la alerta",
                "Desactivar el correo"
            ],

            answer: 1,

            feedback:
                "Conviene revisar los dispositivos o sesiones activas y asegurar la cuenta si el acceso no es reconocido."
        },

        {
            question:
                "Tu contraseña fue revelada en un sitio falso. ¿Cuál es una acción prioritaria?",

            options: [
                "Cambiarla inmediatamente",
                "Esperar varios días",
                "Seguir usando la misma",
                "Publicarla para comprobarla"
            ],

            answer: 0,

            feedback:
                "Una contraseña comprometida debe cambiarse cuanto antes."
        },

        {
            question:
                "Utilizabas la contraseña comprometida también en otra cuenta. ¿Qué deberías hacer?",

            options: [
                "No hacer nada",
                "Cambiarla también en esa cuenta",
                "Desactivar MFA",
                "Compartir la contraseña"
            ],

            answer: 1,

            feedback:
                "Si una contraseña comprometida se reutilizó, también debe cambiarse en los demás servicios."
        },

        {
            question:
                "Tu servicio permite activar autenticación multifactor. ¿Qué opción mejora la protección de la cuenta?",

            options: [
                "Activarla",
                "Desactivar la contraseña",
                "Usar la misma clave en todas partes",
                "Compartir los códigos"
            ],

            answer: 0,

            feedback:
                "MFA agrega una comprobación adicional y ayuda a proteger la cuenta si la contraseña es comprometida."
        }

    ],


    en: [

        {
            question:
                "You receive a login alert from a device you do not recognize. What should you do?",

            options: [
                "Ignore it",
                "Review activity and secure the account",
                "Share the alert",
                "Disable email"
            ],

            answer: 1,

            feedback:
                "Review active devices or sessions and secure the account when access is not recognized."
        },

        {
            question:
                "Your password was entered into a fake website. What should you do first?",

            options: [
                "Change it immediately",
                "Wait several days",
                "Keep using it",
                "Publish it to check"
            ],

            answer: 0,

            feedback:
                "A compromised password should be changed as soon as possible."
        },

        {
            question:
                "You also used the compromised password on another account. What should you do?",

            options: [
                "Do nothing",
                "Change it on that account too",
                "Disable MFA",
                "Share the password"
            ],

            answer: 1,

            feedback:
                "A reused compromised password should also be changed on other services."
        },

        {
            question:
                "Your service allows multifactor authentication. Which action improves account protection?",

            options: [
                "Enable it",
                "Disable the password",
                "Use the same password everywhere",
                "Share authentication codes"
            ],

            answer: 0,

            feedback:
                "MFA adds an additional verification step and helps protect the account when a password is compromised."
        }

    ]

};


const accountCounter =
    document.getElementById(
        "accountCounter"
    );

const accountQuestion =
    document.getElementById(
        "accountQuestion"
    );

const accountOptions =
    document.getElementById(
        "accountOptions"
    );

const accountFeedback =
    document.getElementById(
        "accountFeedback"
    );

const accountNext =
    document.getElementById(
        "accountNext"
    );


let accountIndex = 0;


function loadAccountQuestion() {

    if (!accountQuestion) {
        return;
    }


    const questions =
        accountQuiz[currentLanguage];


    const question =
        questions[accountIndex];


    accountCounter.textContent =
        currentLanguage === "es"
        ?
        `Situación ${accountIndex + 1} de ${questions.length}`
        :
        `Situation ${accountIndex + 1} of ${questions.length}`;


    accountQuestion.textContent =
        question.question;


    accountOptions.innerHTML = "";

    accountFeedback.textContent = "";

    accountNext.disabled = true;


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

                    checkAccountAnswer(
                        index,
                        button
                    );

                }
            );


            accountOptions.appendChild(
                button
            );

        }
    );

}


function checkAccountAnswer(
    selected,
    selectedButton
) {

    const question =
        accountQuiz[currentLanguage]
        [accountIndex];


    const buttons =
        accountOptions.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    if (selected === question.answer) {

        selectedButton.classList.add(
            "correct"
        );


        accountFeedback.textContent =
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


        accountFeedback.textContent =
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


    accountNext.disabled =
        false;

}


if (accountNext) {

    accountNext.addEventListener(
        "click",
        function() {

            const questions =
                accountQuiz[currentLanguage];


            if (
                accountIndex <
                questions.length - 1
            ) {

                accountIndex++;

                loadAccountQuestion();

            }

            else {

                accountCounter.textContent =
                    "✓";


                accountQuestion.textContent =
                    currentLanguage === "es"
                    ?
                    "¡Actividad completada!"
                    :
                    "Activity completed!";


                accountOptions.innerHTML =
                    "";


                accountFeedback.textContent =
                    currentLanguage === "es"
                    ?
                    "Terminaste la actividad sobre protección de cuentas."
                    :
                    "You completed the account protection activity.";


                accountNext.style.display =
                    "none";

            }

        }
    );

}


function resetAccountQuiz() {

    if (!accountQuestion) {
        return;
    }


    accountIndex = 0;

    accountNext.style.display =
        "inline-block";

    loadAccountQuestion();

}


/* =========================================
   INICIALIZACIÓN
========================================= */

loadPasswordQuestion();

loadAccountQuestion();