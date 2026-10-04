/* =========================================================
   UNIVERSITY CYBERSECURITY CENTER
   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   1. IDIOMA
========================================================= */

let currentLanguage = "es";


const translations = {

    es: {

        /* HERO */

        siteTitleMain:
            "University",

        siteTitleSecond:
            "Cybersecurity Center",

        heroTitle:
            "Ciberseguridad",

        heroDescription:
            "Aprende a proteger tu información, tus cuentas y tus dispositivos.",


        /* MÓDULOS */

        modulesTitle:
            "Explora los módulos",

        module1Number:
            "Módulo 1",

        module1Title:
            "Riesgos digitales",

        module2Number:
            "Módulo 2",

        module2Title:
            "Contraseñas y cuentas",

        module3Number:
            "Módulo 3",

        module3Title:
            "Phishing y engaños digitales",

        module4Number:
            "Módulo 4",

        module4Title:
            "Redes y navegación segura",

        module5Number:
            "Módulo 5",

        module5Title:
            "Dispositivos y datos personales",

        explore:
            "Explorar módulo",


        /* NOTICIAS */

        newsLabel:
            "Actualidad",

        newsTitle:
            "Noticias de ciberseguridad",

        newsDescription:
            "Consulta información y recomendaciones de fuentes especializadas en seguridad digital.",

        readMore:
            "Leer más",


        /* FOOTER */

        footerDescription:
            "Recurso educativo multimedia orientado a fortalecer las buenas prácticas de ciberseguridad en estudiantes universitarios.",

        navigation:
            "Navegación",

        home:
            "Inicio",

        modules:
            "Módulos",

        current:
            "Actualidad",

        credits:
            "Créditos y referencias",

        academicProject:
            "Proyecto académico",

        course:
            "Aplicaciones Multimedia",

        university:
            "Universidad Nacional Abierta y a Distancia - UNAD",

        footerBottom:
            "University Cybersecurity Center · Proyecto educativo de ciberseguridad"

    },


    en: {

        /* HERO */

        siteTitleMain:
            "University",

        siteTitleSecond:
            "Cybersecurity Center",

        heroTitle:
            "Cybersecurity",

        heroDescription:
            "Learn how to protect your information, accounts, and devices.",


        /* MÓDULOS */

        modulesTitle:
            "Explore the modules",

        module1Number:
            "Module 1",

        module1Title:
            "Digital risks",

        module2Number:
            "Module 2",

        module2Title:
            "Passwords and accounts",

        module3Number:
            "Module 3",

        module3Title:
            "Phishing and digital deception",

        module4Number:
            "Module 4",

        module4Title:
            "Networks and safe browsing",

        module5Number:
            "Module 5",

        module5Title:
            "Devices and personal data",

        explore:
            "Explore module",


        /* NEWS */

        newsLabel:
            "News",

        newsTitle:
            "Cybersecurity news",

        newsDescription:
            "Explore information and recommendations from specialized digital security sources.",

        readMore:
            "Read more",


        /* FOOTER */

        footerDescription:
            "Educational multimedia resource designed to strengthen cybersecurity best practices among university students.",

        navigation:
            "Navigation",

        home:
            "Home",

        modules:
            "Modules",

        current:
            "News",

        credits:
            "Credits and references",

        academicProject:
            "Academic project",

        course:
            "Multimedia Applications",

        university:
            "National Open and Distance University - UNAD",

        footerBottom:
            "University Cybersecurity Center · Cybersecurity educational project"

    }

};


/* =========================================================
   2. CAMBIO DE IDIOMA
========================================================= */

const btnES =
    document.getElementById("btn-es");

const btnEN =
    document.getElementById("btn-en");


function changeLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang =
        language;


    const text =
        translations[language];


    /* HERO */

    const siteTitle =
        document.querySelector(".site-title");

    if (siteTitle) {

        siteTitle.childNodes[0].textContent =
            text.siteTitleMain + " ";

        const span =
            siteTitle.querySelector("span");

        if (span) {
            span.textContent =
                text.siteTitleSecond;
        }

    }


    const heroTitle =
        document.querySelector(".hero-title");

    if (heroTitle) {
        heroTitle.textContent =
            text.heroTitle;
    }


    const heroDescription =
        document.querySelector(
            ".hero-description"
        );

    if (heroDescription) {
        heroDescription.textContent =
            text.heroDescription;
    }


    /* MÓDULOS */

    const modulesTitle =
        document.querySelector(
            ".modules-title"
        );

    if (modulesTitle) {
        modulesTitle.textContent =
            text.modulesTitle;
    }


    const moduleCards =
        document.querySelectorAll(
            ".module-card"
        );


    const moduleTexts = [

        {
            number:
                text.module1Number,

            title:
                text.module1Title
        },

        {
            number:
                text.module2Number,

            title:
                text.module2Title
        },

        {
            number:
                text.module3Number,

            title:
                text.module3Title
        },

        {
            number:
                text.module4Number,

            title:
                text.module4Title
        },

        {
            number:
                text.module5Number,

            title:
                text.module5Title
        }

    ];


    moduleCards.forEach(
        function(card, index) {

            const h3 =
                card.querySelector("h3");

            const p =
                card.querySelector("p");

            const button =
                card.querySelector(
                    ".module-button"
                );


            if (h3) {

                h3.textContent =
                    moduleTexts[index].number;

            }


            if (p) {

                p.textContent =
                    moduleTexts[index].title;

            }


            if (button) {

                button.textContent =
                    text.explore;

            }

        }
    );


    /* NOTICIAS */

    const newsLabel =
        document.querySelector(
            ".news-label"
        );

    if (newsLabel) {
        newsLabel.textContent =
            text.newsLabel;
    }


    const newsHeading =
        document.querySelector(
            ".news-header h2"
        );

    if (newsHeading) {
        newsHeading.textContent =
            text.newsTitle;
    }


    const newsDescription =
        document.querySelector(
            ".news-header p"
        );

    if (newsDescription) {
        newsDescription.textContent =
            text.newsDescription;
    }


    loadNews();


    /* FOOTER */

    const footerDescription =
        document.querySelector(
            ".footer-brand p"
        );

    if (footerDescription) {
        footerDescription.textContent =
            text.footerDescription;
    }


    const footerNavigationTitle =
        document.querySelector(
            ".footer-links h3"
        );

    if (footerNavigationTitle) {
        footerNavigationTitle.textContent =
            text.navigation;
    }


    const footerLinks =
        document.querySelectorAll(
            ".footer-links a"
        );


    if (footerLinks.length >= 4) {

        footerLinks[0].textContent =
            text.home;

        footerLinks[1].textContent =
            text.modules;

        footerLinks[2].textContent =
            text.current;

        footerLinks[3].textContent =
            text.credits;

    }


    const projectTitle =
        document.querySelector(
            ".footer-project h3"
        );

    if (projectTitle) {
        projectTitle.textContent =
            text.academicProject;
    }


    const projectParagraphs =
        document.querySelectorAll(
            ".footer-project p"
        );


    if (projectParagraphs.length >= 3) {

        projectParagraphs[0].textContent =
            text.course;

        projectParagraphs[1].textContent =
            text.university;

        projectParagraphs[2].textContent =
            "2026";

    }


    const footerBottom =
        document.querySelector(
            ".footer-bottom p"
        );

    if (footerBottom) {
        footerBottom.textContent =
            text.footerBottom;
    }


    /* BOTONES ES / EN */

    if (btnES && btnEN) {

        btnES.classList.remove(
            "language-active"
        );

        btnEN.classList.remove(
            "language-active"
        );


        if (language === "es") {

            btnES.classList.add(
                "language-active"
            );

        }

        else {

            btnEN.classList.add(
                "language-active"
            );

        }

    }


    /* REINICIAR FRASES EN EL NUEVO IDIOMA */

    currentQuote = 0;

    updateQuote();

}


/* EVENTOS IDIOMA */

if (btnES) {

    btnES.addEventListener(
        "click",
        function() {

            changeLanguage("es");

        }
    );

}


if (btnEN) {

    btnEN.addEventListener(
        "click",
        function() {

            changeLanguage("en");

        }
    );

}



/* =========================================================
   3. CARRUSEL DE FRASES
========================================================= */

const quotes = {

    es: [

        {
            text:
                "Los aficionados hackean sistemas; los profesionales hackean personas.",

            author:
                "Bruce Schneier"
        },

        {
            text:
                "El eslabón más débil en la cadena de la seguridad es el factor humanos.",

            author:
                "Mitnick y Simon, 2002"
        },

        {
            text:
                "Argumentar que no te importa el derecho a la privacidad porque no tienes nada que ocultar es lo mismo que decir que no te importa la libre expresión porque no tienes nada que decir.",

            author:
                "Snowden, 2019"
        }

    ],


    en: [

        {
            text:
                "Amateurs hack systems; professionals hack people.",

            author:
                "Bruce Schneier"
        },

        {
            text:
                "The weakest link in the security chain is the human factor.",

            author:
                "Mitnick y Simon, 2002"
        },

        {
            text:
                "Argumenting that you don't care about privacy because you have nothing to hide is the same as saying you don't care about free speech because you have nothing to say.",

            author:
                "Snowden, 2019"
        }

    ]

};


let currentQuote = 0;


const quoteText =
    document.getElementById(
        "quoteText"
    );

const quoteAuthor =
    document.getElementById(
        "quoteAuthor"
    );

const quotePrev =
    document.getElementById(
        "quotePrev"
    );

const quoteNext =
    document.getElementById(
        "quoteNext"
    );

const quoteDots =
    document.querySelectorAll(
        ".quote-dot"
    );


function updateQuote() {

    if (!quoteText || !quoteAuthor) {
        return;
    }


    const currentQuotes =
        quotes[currentLanguage];


    quoteText.style.opacity =
        "0";

    quoteAuthor.style.opacity =
        "0";


    setTimeout(
        function() {

            quoteText.textContent =
                currentQuotes[
                    currentQuote
                ].text;


            quoteAuthor.textContent =
                currentQuotes[
                    currentQuote
                ].author;


            quoteText.style.opacity =
                "1";

            quoteAuthor.style.opacity =
                "1";

        },
        200
    );


    quoteDots.forEach(
        function(dot, index) {

            dot.classList.remove(
                "active-dot"
            );


            if (
                index === currentQuote
            ) {

                dot.classList.add(
                    "active-dot"
                );

            }

        }
    );

}


if (quotePrev) {

    quotePrev.addEventListener(
        "click",
        function() {

            currentQuote--;

            if (currentQuote < 0) {

                currentQuote =
                    quotes[currentLanguage]
                        .length - 1;

            }

            updateQuote();

        }
    );

}


if (quoteNext) {

    quoteNext.addEventListener(
        "click",
        function() {

            currentQuote++;

            if (
                currentQuote >=
                quotes[currentLanguage].length
            ) {

                currentQuote = 0;

            }

            updateQuote();

        }
    );

}


quoteDots.forEach(
    function(dot, index) {

        dot.addEventListener(
            "click",
            function() {

                currentQuote =
                    index;

                updateQuote();

            }
        );

    }
);



/* =========================================================
   4. CARRUSEL DE MÓDULOS
========================================================= */

const moduleCards =
    document.querySelectorAll(
        ".module-card"
    );


const prevBtn =
    document.getElementById(
        "prevBtn"
    );


const nextBtn =
    document.getElementById(
        "nextBtn"
    );


let activeModule = 0;


function updateModuleCarousel() {

    if (moduleCards.length === 0) {
        return;
    }


    moduleCards.forEach(
        function(card) {

            card.classList.remove(
                "active",
                "previous",
                "next-card"
            );

        }
    );


    const previousIndex =
        (
            activeModule - 1 +
            moduleCards.length
        )
        %
        moduleCards.length;


    const nextIndex =
        (
            activeModule + 1
        )
        %
        moduleCards.length;


    moduleCards[
        activeModule
    ].classList.add(
        "active"
    );


    moduleCards[
        previousIndex
    ].classList.add(
        "previous"
    );


    moduleCards[
        nextIndex
    ].classList.add(
        "next-card"
    );

}


if (prevBtn) {

    prevBtn.addEventListener(
        "click",
        function() {

            activeModule--;

            if (activeModule < 0) {

                activeModule =
                    moduleCards.length - 1;

            }

            updateModuleCarousel();

        }
    );

}


if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        function() {

            activeModule++;

            if (
                activeModule >=
                moduleCards.length
            ) {

                activeModule = 0;

            }

            updateModuleCarousel();

        }
    );

}



/* =========================================================
   5. NOTICIAS
   FORMA SENCILLA:
   NO API - NO BASE DE DATOS
   SOLO 4 RECURSOS FIJOS
========================================================= */

const news = {

    es: [

        {
            category:
                "Prevención",

            title:
                "Reconoce y reporta el phishing",

            description:
                "Consulta recomendaciones para identificar mensajes sospechosos y evitar intentos de phishing.",

            url:
                "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
        },

        {
            category:
                "Protección de cuentas",

            title:
                "Activa la autenticación multifactor",

            description:
                "Conoce cómo una verificación adicional puede ayudar a proteger tus cuentas digitales.",

            url:
                "https://www.cisa.gov/secure-our-world/turn-mfa"
        },

        {
            category:
                "Seguridad digital",

            title:
                "Consejos de ciberseguridad para usuarios",

            description:
                "Encuentra recursos y recomendaciones para mejorar tus hábitos de seguridad en Internet.",

            url:
                "https://www.incibe.es/ciudadania"
        },

        {
            category:
                "Amenazas",

            title:
                "Panorama de amenazas de ciberseguridad",

            description:
                "Consulta información sobre amenazas y tendencias de seguridad digital en Europa.",

            url:
                "https://www.enisa.europa.eu/topics/cyber-threats"
        }

    ],


    en: [

        {
            category:
                "Prevention",

            title:
                "Recognize and report phishing",

            description:
                "Explore recommendations for identifying suspicious messages and avoiding phishing attempts.",

            url:
                "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
        },

        {
            category:
                "Account protection",

            title:
                "Turn on multifactor authentication",

            description:
                "Learn how an additional verification step can help protect your digital accounts.",

            url:
                "https://www.cisa.gov/secure-our-world/turn-mfa"
        },

        {
            category:
                "Digital security",

            title:
                "Cybersecurity guidance for users",

            description:
                "Explore resources and recommendations for improving your online security habits.",

            url:
                "https://www.incibe.es/ciudadania"
        },

        {
            category:
                "Threats",

            title:
                "Cybersecurity threat landscape",

            description:
                "Explore information about cybersecurity threats and digital security trends in Europe.",

            url:
                "https://www.enisa.europa.eu/topics/cyber-threats"
        }

    ]

};


function loadNews() {

    const cards =
        document.querySelectorAll(
            ".news-card"
        );


    if (cards.length === 0) {
        return;
    }


    const currentNews =
        news[currentLanguage];


    cards.forEach(
        function(card, index) {

            if (!currentNews[index]) {
                return;
            }


            const category =
                card.querySelector(
                    ".news-category"
                );


            const title =
                card.querySelector("h3");


            const description =
                card.querySelector(
                    ".news-content p"
                );


            const link =
                card.querySelector(
                    ".news-button"
                );


            if (category) {

                category.textContent =
                    currentNews[index]
                        .category;

            }


            if (title) {

                title.textContent =
                    currentNews[index]
                        .title;

            }


            if (description) {

                description.textContent =
                    currentNews[index]
                        .description;

            }


            if (link) {

                link.textContent =
                    translations[
                        currentLanguage
                    ].readMore;


                link.href =
                    currentNews[index]
                        .url;


                link.target =
                    "_blank";


                link.rel =
                    "noopener noreferrer";

            }

        }
    );

}



/* =========================================================
   6. INICIALIZACIÓN
========================================================= */

updateQuote();

updateModuleCarousel();

loadNews();