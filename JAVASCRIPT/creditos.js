const creditsTranslations = {

    es: {

        label:
            "TRANSPARENCIA ACADÉMICA",

        title:
            "Créditos y referencias",

        intro:
            "En esta sección se reconocen las fuentes utilizadas para elaborar los contenidos educativos y los recursos visuales empleados en la aplicación.",

        back:
            "← Volver al inicio",

        sourcesTitle:
            "Fuentes de información",

        sourcesSubtitle:
            "Referencias institucionales, académicas y normativas utilizadas para desarrollar los módulos.",

        aiTitle:
            "Recursos generados con inteligencia artificial",

        aiSubtitle:
            "Las ilustraciones fueron creadas específicamente para este proyecto académico.",

        aiDescription:
            "Las ilustraciones utilizadas en la página principal, módulos, subsecciones y sección de actualidad fueron generadas mediante inteligencia artificial con ChatGPT de OpenAI, 2026, específicamente para este recurso educativo.",

        aiHero:
            "Imagen principal de ciberseguridad.",

        aiModules:
            "Ilustraciones de los módulos 1 al 5.",

        aiSections:
            "Ilustraciones de las diez subsecciones.",

        aiNews:
            "Ilustraciones de la sección de actualidad.",

        projectTitle:
            "Información del proyecto",
        
        author:
            "Autora:",

        projectName:
            "Proyecto:",

        course:
            "Curso:",

        institution:
            "Institución:",

        year:
            "Año:"

    },


    en: {

        label:
            "ACADEMIC TRANSPARENCY",

        title:
            "Credits and references",

        intro:
            "This section acknowledges the sources used to develop the educational content and the visual resources included in the application.",

        back:
            "← Back to home",

        sourcesTitle:
            "Information sources",

        sourcesSubtitle:
            "Institutional, academic, and legal references used to develop the modules.",

        aiTitle:
            "AI-generated resources",

        aiSubtitle:
            "The illustrations were created specifically for this academic project.",

        aiDescription:
            "The illustrations used on the home page, modules, subsections, and news section were generated with artificial intelligence using ChatGPT by OpenAI, 2026, specifically for this educational resource.",

        aiHero:
            "Main cybersecurity illustration.",

        aiModules:
            "Illustrations for modules 1 through 5.",

        aiSections:
            "Illustrations for the ten subsections.",

        aiNews:
            "Illustrations for the news section.",

        projectTitle:
            "Project information",

        projectName:
            "Project:",
            
        author:
            "Autora:",

        course:
            "Course:",

        institution:
            "Institution:",

        year:
            "Year:"

    }

};


const creditsES =
    document.getElementById(
        "credits-es"
    );


const creditsEN =
    document.getElementById(
        "credits-en"
    );


function changeCreditsLanguage(language) {

    document.documentElement.lang =
        language;


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            function(element) {

                const key =
                    element.dataset.i18n;


                if (
                    creditsTranslations[language]
                    [key]
                ) {

                    element.textContent =
                        creditsTranslations
                            [language]
                            [key];

                }

            }
        );


    creditsES.classList.remove(
        "credits-language-active"
    );


    creditsEN.classList.remove(
        "credits-language-active"
    );


    if (language === "es") {

        creditsES.classList.add(
            "credits-language-active"
        );

    }

    else {

        creditsEN.classList.add(
            "credits-language-active"
        );

    }

}


creditsES.addEventListener(
    "click",
    function() {

        changeCreditsLanguage(
            "es"
        );

    }
);


creditsEN.addEventListener(
    "click",
    function() {

        changeCreditsLanguage(
            "en"
        );

    }
);