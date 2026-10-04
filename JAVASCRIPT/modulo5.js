/* =========================================
   IDIOMA
========================================= */

let currentLanguage = "es";


const translations = {

    es: {

        moduleNumber:
            "MÓDULO 5",

        moduleTitle:
            "Dispositivos y datos personales",

        moduleDescription:
            "Aprende a proteger tus dispositivos, reducir riesgos y cuidar la información personal que almacenas y compartes.",

        sub1Label:
            "Subsección 1",

        sub1Title:
            "Protección de dispositivos",

        sub1Description:
            "Aprende prácticas para mantener protegidos computadores, teléfonos y otros dispositivos.",

        sub1Button:
            "Ir a la subsección 1 →",

        sub2Label:
            "Subsección 2",

        sub2Title:
            "Protección de datos personales",

        sub2Description:
            "Conoce qué información requiere mayor cuidado y cómo almacenarla, compartirla y respaldarla.",

        sub2Button:
            "Ir a la subsección 2 →",

        previousModule:
            "← Módulo anterior",

        finishModules:
            "Finalizar recorrido →",


        deviceTitle:
            "Protección de dispositivos",

        deviceIntro:
            "Proteger un dispositivo requiere mantenerlo actualizado, controlar el acceso y utilizar aplicaciones confiables.",

        updatesTitle:
            "Mantén tus dispositivos actualizados",

        updatesSubtitle:
            "Las actualizaciones corrigen fallos y vulnerabilidades.",

        updatesText:
            "Los fallos de software pueden permitir acceso no autorizado a archivos o cuentas. Activar las actualizaciones automáticas ayuda a reducir este riesgo.",

        measuresTitle:
            "Medidas de protección",

        measuresSubtitle:
            "Varias acciones sencillas pueden aumentar la seguridad.",

        lockTitle:
            "Bloqueo de pantalla",

        lockText:
            "Utiliza bloqueo y protección de acceso al dispositivo.",

        appsTitle:
            "Apps confiables",

        appsText:
            "Descarga aplicaciones desde tiendas oficiales y revisa sus permisos.",

        malwareTitle:
            "Protección antimalware",

        malwareText:
            "Una herramienta de seguridad puede ayudar a detectar software malicioso.",

        backupTitle:
            "Copias de seguridad",

        backupText:
            "Mantén copias de información importante en otro soporte.",

        lostTitle:
            "¿Qué pasa si pierdes el dispositivo?",

        lostText:
            "Algunas herramientas permiten localizar, bloquear o borrar de forma remota un dispositivo perdido o robado.",

        deviceGameTitle:
            "Configura tu protección",

        deviceGameInstruction:
            "Activa las medidas que aplicarías para proteger tu dispositivo.",

        checkUpdates:
            "Actualizaciones automáticas",

        checkLock:
            "Bloqueo de pantalla",

        checkApps:
            "Aplicaciones de fuentes confiables",

        checkAntimalware:
            "Protección antimalware",

        checkBackup:
            "Copia de seguridad",

        protectionLevel:
            "Nivel de protección",

        deviceKey:
            "La protección de un dispositivo depende de varias medidas que funcionan mejor en conjunto.",


        dataTitle:
            "Protección de datos personales",

        dataIntro:
            "La información personal también necesita protección, tanto al almacenarla como al compartirla.",

        personalTitle:
            "¿Qué son los datos personales?",

        personalSubtitle:
            "Información vinculada o asociable a una persona.",

        personalText:
            "En Colombia, la Ley 1581 de 2012 define los datos personales como cualquier información vinculada o asociable a una persona natural determinada o determinable.",

        sensitiveTitle:
            "Información sensible",

        sensitiveSubtitle:
            "Algunos datos requieren especial cuidado.",

        identityTitle:
            "Identidad",

        identityText:
            "Información que permite identificar directamente a una persona.",

        privacyTitle:
            "Privacidad",

        privacyText:
            "Información relacionada con aspectos íntimos o personales.",

        biometricTitle:
            "Datos biométricos",

        biometricText:
            "Pueden considerarse sensibles según la legislación colombiana.",

        storageTitle:
            "Almacenamiento y respaldo",

        cloudTitle:
            "Copia en la nube",

        cloudText:
            "Puede servir como una copia adicional de información importante.",

        externalTitle:
            "Soporte externo",

        externalText:
            "Un disco externo permite mantener otra copia de los archivos.",

        encryptTitle:
            "Cifrado",

        encryptText:
            "Puede ayudar a proteger la información almacenada.",

        deleteTitle:
            "Eliminación segura",

        deleteText:
            "La sanitización busca hacer inviable el acceso posterior a los datos.",

        dataGameTitle:
            "¿Qué harías con este dato?",

        dataGameInstruction:
            "Selecciona cada tarjeta y decide cómo deberías tratar esa información.",

        passwordDataTitle:
            "Contraseña personal",

        documentDataTitle:
            "Documento académico importante",

        photoDataTitle:
            "Fotografía personal",

        biometricDataTitle:
            "Datos biométricos",

        dataKey:
            "Antes de compartir información, piensa quién la necesita, dónde quedará almacenada y qué consecuencias tendría que otra persona accediera a ella."

    },


    en: {

        moduleNumber:
            "MODULE 5",

        moduleTitle:
            "Devices and personal data",

        moduleDescription:
            "Learn to protect your devices, reduce risks, and care for the personal information you store and share.",

        sub1Label:
            "Section 1",

        sub1Title:
            "Device protection",

        sub1Description:
            "Learn practices to keep computers, phones, and other devices protected.",

        sub1Button:
            "Go to section 1 →",

        sub2Label:
            "Section 2",

        sub2Title:
            "Personal data protection",

        sub2Description:
            "Learn what information requires greater care and how to store, share, and back it up.",

        sub2Button:
            "Go to section 2 →",

        previousModule:
            "← Previous module",

        finishModules:
            "Finish tour →",


        deviceTitle:
            "Device protection",

        deviceIntro:
            "Protecting a device requires keeping it updated, controlling access, and using trusted applications.",

        updatesTitle:
            "Keep your devices updated",

        updatesSubtitle:
            "Updates fix bugs and vulnerabilities.",

        updatesText:
            "Software flaws can allow unauthorized access to files or accounts. Enabling automatic updates helps reduce this risk.",

        measuresTitle:
            "Protection measures",

        measuresSubtitle:
            "Several simple actions can improve security.",

        lockTitle:
            "Screen lock",

        lockText:
            "Use a screen lock and access protection.",

        appsTitle:
            "Trusted apps",

        appsText:
            "Download applications from official stores and review their permissions.",

        malwareTitle:
            "Antimalware protection",

        malwareText:
            "A security tool can help detect malicious software.",

        backupTitle:
            "Backups",

        backupText:
            "Keep copies of important information on another storage medium.",

        lostTitle:
            "What if you lose your device?",

        lostText:
            "Some tools allow you to locate, lock, or remotely erase a lost or stolen device.",

        deviceGameTitle:
            "Configure your protection",

        deviceGameInstruction:
            "Activate the measures you would use to protect your device.",

        checkUpdates:
            "Automatic updates",

        checkLock:
            "Screen lock",

        checkApps:
            "Apps from trusted sources",

        checkAntimalware:
            "Antimalware protection",

        checkBackup:
            "Backup",

        protectionLevel:
            "Protection level",

        deviceKey:
            "Device protection depends on several measures that work better together.",


        dataTitle:
            "Personal data protection",

        dataIntro:
            "Personal information also needs protection, both when stored and when shared.",

        personalTitle:
            "What is personal data?",

        personalSubtitle:
            "Information linked or linkable to a person.",

        personalText:
            "In Colombia, Law 1581 of 2012 defines personal data as any information linked or linkable to an identified or identifiable natural person.",

        sensitiveTitle:
            "Sensitive information",

        sensitiveSubtitle:
            "Some data requires special care.",

        identityTitle:
            "Identity",

        identityText:
            "Information that can directly identify a person.",

        privacyTitle:
            "Privacy",

        privacyText:
            "Information related to private or personal aspects.",

        biometricTitle:
            "Biometric data",

        biometricText:
            "It may be considered sensitive under Colombian law.",

        storageTitle:
            "Storage and backup",

        cloudTitle:
            "Cloud backup",

        cloudText:
            "It can serve as an additional copy of important information.",

        externalTitle:
            "External storage",

        externalText:
            "An external drive allows another copy of files to be kept.",

        encryptTitle:
            "Encryption",

        encryptText:
            "It can help protect stored information.",

        deleteTitle:
            "Secure deletion",

        deleteText:
            "Sanitization seeks to make later access to data infeasible.",

        dataGameTitle:
            "What would you do with this data?",

        dataGameInstruction:
            "Select each card and decide how you should handle that information.",

        passwordDataTitle:
            "Personal password",

        documentDataTitle:
            "Important academic document",

        photoDataTitle:
            "Personal photograph",

        biometricDataTitle:
            "Biometric data",

        dataKey:
            "Before sharing information, consider who needs it, where it will be stored, and what could happen if someone else gained access."

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

    currentLanguage =
        language;


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
                button.dataset.lang ===
                language
            ) {

                button.classList.add(
                    "language-active"
                );

            }

        }
    );


    updateSecurityMeter();

    resetDataActivity();

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
   CHECKLIST DE DISPOSITIVOS
========================================= */

const securityActions =
    document.querySelectorAll(
        ".security-action"
    );


const securityPercent =
    document.getElementById(
        "securityPercent"
    );


const securityMeterFill =
    document.getElementById(
        "securityMeterFill"
    );


const securityMessage =
    document.getElementById(
        "securityMessage"
    );


securityActions.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                this.classList.toggle(
                    "active"
                );


                const status =
                    this.querySelector(
                        ".security-status"
                    );


                if (
                    this.classList.contains(
                        "active"
                    )
                ) {

                    status.textContent =
                        "✓";

                }

                else {

                    status.textContent =
                        "○";

                }


                updateSecurityMeter();

            }
        );

    }
);


function updateSecurityMeter() {

    if (!securityPercent) {
        return;
    }


    const active =
        document.querySelectorAll(
            ".security-action.active"
        ).length;


    const total =
        securityActions.length;


    const percent =
        total === 0
        ?
        0
        :
        Math.round(
            active / total * 100
        );


    securityPercent.textContent =
        percent + "%";


    securityMeterFill.style.width =
        percent + "%";


    if (currentLanguage === "es") {

        if (percent === 0) {

            securityMessage.textContent =
                "Activa medidas para mejorar la protección.";

        }

        else if (percent < 60) {

            securityMessage.textContent =
                "Vas avanzando, pero todavía puedes reforzar tu dispositivo.";

        }

        else if (percent < 100) {

            securityMessage.textContent =
                "Buen nivel de protección. Aún puedes activar más medidas.";

        }

        else {

            securityMessage.textContent =
                "¡Excelente! Combinaste varias medidas de protección.";

        }

    }

    else {

        if (percent === 0) {

            securityMessage.textContent =
                "Activate measures to improve protection.";

        }

        else if (percent < 60) {

            securityMessage.textContent =
                "You're making progress, but your device can still be strengthened.";

        }

        else if (percent < 100) {

            securityMessage.textContent =
                "Good protection level. You can still enable more measures.";

        }

        else {

            securityMessage.textContent =
                "Excellent! You combined several protection measures.";

        }

    }

}


/* =========================================
   ACTIVIDAD DE DATOS
========================================= */

const dataButtons =
    document.querySelectorAll(
        ".data-actions button"
    );


const dataResult =
    document.getElementById(
        "dataResult"
    );


const dataMessages = {

    es: {

        password: {

            protect:
                "Correcto: una contraseña debe mantenerse privada y protegida.",

            share:
                "Evita compartir contraseñas con otras personas.",

            backup:
                "Una contraseña puede almacenarse de forma segura en un gestor de contraseñas, pero no en archivos o notas expuestas."

        },


        document: {

            protect:
                "Sí: un documento académico importante debe almacenarse de forma segura.",

            share:
                "Puede compartirse cuando sea necesario, pero verifica destinatarios y permisos.",

            backup:
                "Buena decisión: una copia de seguridad ayuda ante pérdida o daño del archivo."

        },


        photo: {

            protect:
                "Las fotografías personales también forman parte de tu información y pueden requerir privacidad.",

            share:
                "Antes de compartir una fotografía, revisa quién podrá verla y dónde quedará publicada.",

            backup:
                "Si la fotografía es importante, puedes mantener una copia de respaldo."

        },


        biometric: {

            protect:
                "Correcto: los datos biométricos pueden ser información sensible y requieren especial protección.",

            share:
                "No deberían compartirse sin una razón clara y controles adecuados.",

            backup:
                "Su tratamiento depende del sistema que los utilice; lo principal es proteger su acceso y tratamiento."

        }

    },


    en: {

        password: {

            protect:
                "Correct: a password should remain private and protected.",

            share:
                "Avoid sharing passwords with other people.",

            backup:
                "A password may be stored securely in a password manager, but not in exposed files or notes."

        },


        document: {

            protect:
                "Yes: an important academic document should be stored securely.",

            share:
                "It may be shared when necessary, but check recipients and permissions.",

            backup:
                "Good choice: a backup helps if the file is lost or damaged."

        },


        photo: {

            protect:
                "Personal photographs are also information that may require privacy.",

            share:
                "Before sharing a photo, check who will see it and where it will be published.",

            backup:
                "If the photograph is important, you may keep a backup copy."

        },


        biometric: {

            protect:
                "Correct: biometric data may be sensitive information and requires special protection.",

            share:
                "It should not be shared without a clear reason and appropriate controls.",

            backup:
                "Its handling depends on the system using it; protecting access and processing is most important."

        }

    }

};


dataButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const item =
                    this.dataset.item;


                const choice =
                    this.dataset.choice;


                const card =
                    this.closest(
                        ".data-card"
                    );


                card
                    .querySelectorAll(
                        ".data-actions button"
                    )
                    .forEach(
                        function(otherButton) {

                            otherButton
                                .classList
                                .remove(
                                    "active-choice"
                                );

                        }
                    );


                this.classList.add(
                    "active-choice"
                );


                card.classList.add(
                    "selected"
                );


                if (dataResult) {

                    dataResult.textContent =
                        dataMessages
                            [currentLanguage]
                            [item]
                            [choice];

                }

            }
        );

    }
);


function resetDataActivity() {

    if (!dataResult) {
        return;
    }


    document
        .querySelectorAll(
            ".data-card"
        )
        .forEach(
            function(card) {

                card.classList.remove(
                    "selected"
                );

            }
        );


    dataButtons.forEach(
        function(button) {

            button.classList.remove(
                "active-choice"
            );

        }
    );


    dataResult.textContent =
        currentLanguage === "es"
        ?
        "Selecciona una acción en alguna tarjeta."
        :
        "Select an action on one of the cards.";

}


/* =========================================
   INICIALIZACIÓN
========================================= */

updateSecurityMeter();