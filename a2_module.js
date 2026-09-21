/**
 * a2_module.js — Goethe A2 Elementary Level Module
 * Goethe Learning Portal — v1.0.0
 */
"use strict";

/* ============================================================
   LEVEL SWITCHER
   ============================================================ */

window.setActiveLevel = function(level) {
    const btnA1 = document.getElementById("btn-level-a1");
    const btnA2 = document.getElementById("btn-level-a2");
    if (!btnA1 || !btnA2) return;
    if (level === "a2") {
        btnA1.classList.remove("level-btn-active");
        btnA2.classList.add("level-btn-active");
        btnA1.setAttribute("aria-pressed", "false");
        btnA2.setAttribute("aria-pressed", "true");
        if (typeof switchToView === "function") switchToView("view-a2-practice-menu");
    } else {
        btnA2.classList.remove("level-btn-active");
        btnA1.classList.add("level-btn-active");
        btnA2.setAttribute("aria-pressed", "false");
        btnA1.setAttribute("aria-pressed", "true");
        if (typeof switchToView === "function") switchToView("view-practice-menu");
    }
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("[data-a2-topic]").forEach(function(card) {
        card.addEventListener("click", function() { openA2Topic(card.getAttribute("data-a2-topic")); });
        card.addEventListener("keydown", function(e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.click(); } });
    });
    const a2BackBtn = document.getElementById("a2-practice-back-btn");
    if (a2BackBtn) a2BackBtn.addEventListener("click", function() { if (typeof switchToView === "function") switchToView("view-a2-practice-menu"); });
    const a2HoerenBackBtn = document.getElementById("a2-hoeren-back-btn");
    if (a2HoerenBackBtn) {
        a2HoerenBackBtn.addEventListener("click", function(e) { e.preventDefault(); e.stopPropagation(); handleA2HoerenBackNavigation(); }, true);
    }
});

function openA2Topic(topic) {
    if (topic === "hoeren") openA2InteractiveHoerenHub();
    else if (topic === "vocab") openA2PracticeWorkspace("vocab");
    else if (topic === "grammar") openA2PracticeWorkspace("grammar");
    else if (topic === "reading") openA2PracticeWorkspace("reading");
}

/* ============================================================
   A2 VOCABULARY DATABASE
   ============================================================ */

const A2_VOCAB_DATABASE = {
    arbeit: {
        title: "Arbeit & Beruf", titleEN: "Work & Career", emoji: "💼",
        words: [
            { word: "die Bewerbung", translation: "job application", example: "Ich schreibe gerade meine Bewerbung für die neue Stelle.", exampleEN: "I am currently writing my job application for the new position." },
            { word: "das Vorstellungsgespräch", translation: "job interview", example: "Das Vorstellungsgespräch findet am Montag statt.", exampleEN: "The job interview takes place on Monday." },
            { word: "der Lebenslauf", translation: "curriculum vitae / CV", example: "Bitte senden Sie Ihren Lebenslauf per E-Mail.", exampleEN: "Please send your CV by email." },
            { word: "die Überstunden", translation: "overtime (hours)", example: "Dieser Monat habe ich viele Überstunden gemacht.", exampleEN: "This month I worked a lot of overtime." },
            { word: "die Probezeit", translation: "probationary period", example: "Die Probezeit dauert sechs Monate.", exampleEN: "The probationary period lasts six months." },
            { word: "der Kollege / die Kollegin", translation: "colleague (m/f)", example: "Meine Kollegen sind sehr hilfsbereit.", exampleEN: "My colleagues are very helpful." },
            { word: "die Kündigung", translation: "termination / resignation", example: "Er hat seine Kündigung eingereicht.", exampleEN: "He submitted his resignation." },
            { word: "die Gehaltsverhandlung", translation: "salary negotiation", example: "Die Gehaltsverhandlung war erfolgreich.", exampleEN: "The salary negotiation was successful." }
        ]
    },
    reisen: {
        title: "Reisen & Tourismus", titleEN: "Travel & Tourism", emoji: "✈️",
        words: [
            { word: "die Reiseversicherung", translation: "travel insurance", example: "Eine Reiseversicherung ist im Ausland sehr wichtig.", exampleEN: "Travel insurance is very important abroad." },
            { word: "das Gepäck", translation: "luggage", example: "Mein Koffer ist zu schwer — das Gepäck kostet extra.", exampleEN: "My suitcase is too heavy — the luggage costs extra." },
            { word: "die Unterkunft", translation: "accommodation", example: "Die Unterkunft war sauber und preiswert.", exampleEN: "The accommodation was clean and affordable." },
            { word: "die Sehenswürdigkeit", translation: "tourist attraction / sight", example: "Das Brandenburger Tor ist eine bekannte Sehenswürdigkeit.", exampleEN: "The Brandenburg Gate is a famous tourist attraction." },
            { word: "der Ausflug", translation: "excursion / day trip", example: "Wir machen einen Ausflug in die Berge.", exampleEN: "We are going on a day trip to the mountains." },
            { word: "das Reisebüro", translation: "travel agency", example: "Das Reisebüro hat uns einen guten Pauschalurlaub angeboten.", exampleEN: "The travel agency offered us a good package holiday." },
            { word: "der Zollbeamte", translation: "customs officer", example: "Der Zollbeamte hat unser Gepäck kontrolliert.", exampleEN: "The customs officer checked our luggage." },
            { word: "der Reiseführer", translation: "guidebook / travel guide", example: "Ich habe einen Reiseführer über Berlin gekauft.", exampleEN: "I bought a travel guide about Berlin." }
        ]
    },
    technologie: {
        title: "Technologie & Internet", titleEN: "Technology & Internet", emoji: "💻",
        words: [
            { word: "das Passwort", translation: "password", example: "Bitte ändern Sie Ihr Passwort regelmäßig.", exampleEN: "Please change your password regularly." },
            { word: "die App", translation: "app / application", example: "Ich habe eine neue App auf mein Handy heruntergeladen.", exampleEN: "I downloaded a new app on my phone." },
            { word: "der Datenschutz", translation: "data privacy / protection", example: "Der Datenschutz ist in Deutschland sehr streng.", exampleEN: "Data privacy regulations in Germany are very strict." },
            { word: "die Internetverbindung", translation: "internet connection", example: "Die Internetverbindung im Hotel war sehr langsam.", exampleEN: "The internet connection in the hotel was very slow." },
            { word: "der Akku", translation: "battery (rechargeable)", example: "Der Akku meines Handys ist fast leer.", exampleEN: "My phone battery is almost empty." },
            { word: "die Suchmaschine", translation: "search engine", example: "Ich habe die Information in einer Suchmaschine gefunden.", exampleEN: "I found the information in a search engine." },
            { word: "das Update", translation: "software update", example: "Bitte installieren Sie das neue Update.", exampleEN: "Please install the new update." },
            { word: "herunterladen", translation: "to download", example: "Ich lade die App kostenlos herunter.", exampleEN: "I am downloading the app for free." }
        ]
    },
    umwelt: {
        title: "Umwelt & Natur", titleEN: "Environment & Nature", emoji: "🌿",
        words: [
            { word: "die Umweltverschmutzung", translation: "environmental pollution", example: "Umweltverschmutzung ist ein globales Problem.", exampleEN: "Environmental pollution is a global problem." },
            { word: "das Recycling", translation: "recycling", example: "In Deutschland gibt es ein gutes Recycling-System.", exampleEN: "In Germany there is a good recycling system." },
            { word: "der Klimawandel", translation: "climate change", example: "Der Klimawandel betrifft uns alle.", exampleEN: "Climate change affects us all." },
            { word: "erneuerbare Energie", translation: "renewable energy", example: "Solarenergie ist eine Form der erneuerbaren Energie.", exampleEN: "Solar energy is a form of renewable energy." },
            { word: "die Mülltrennung", translation: "waste separation / sorting", example: "Die Mülltrennung ist in Deutschland Pflicht.", exampleEN: "Waste separation is mandatory in Germany." },
            { word: "der Naturschutz", translation: "nature conservation", example: "Der Naturschutz ist für unser Ökosystem wichtig.", exampleEN: "Nature conservation is important for our ecosystem." },
            { word: "bio", translation: "organic", example: "Ich kaufe lieber Bio-Produkte aus der Region.", exampleEN: "I prefer to buy organic products from the region." },
            { word: "der Kompost", translation: "compost", example: "Aus Küchenabfällen kann man Kompost machen.", exampleEN: "Compost can be made from kitchen waste." }
        ]
    },
    gesundheit: {
        title: "Gesundheit & Ernährung", titleEN: "Health & Nutrition", emoji: "🥗",
        words: [
            { word: "die Ernährung", translation: "nutrition / diet", example: "Eine gesunde Ernährung ist wichtig für das Wohlbefinden.", exampleEN: "A healthy diet is important for wellbeing." },
            { word: "die Allergie", translation: "allergy", example: "Ich habe eine Allergie gegen Nüsse.", exampleEN: "I have an allergy to nuts." },
            { word: "das Rezept", translation: "prescription / recipe", example: "Der Arzt hat mir ein Rezept für Antibiotika ausgestellt.", exampleEN: "The doctor issued me a prescription for antibiotics." },
            { word: "die Krankenversicherung", translation: "health insurance", example: "In Deutschland braucht man eine Krankenversicherung.", exampleEN: "In Germany you need health insurance." },
            { word: "der Facharzt", translation: "specialist / specialist doctor", example: "Mein Hausarzt hat mich zu einem Facharzt überwiesen.", exampleEN: "My GP referred me to a specialist." },
            { word: "die Medikamente", translation: "medication / medicines", example: "Nehmen Sie diese Medikamente dreimal täglich.", exampleEN: "Take these medicines three times a day." },
            { word: "vegetarisch", translation: "vegetarian", example: "Ich esse vegetarisch — kein Fleisch und kein Fisch.", exampleEN: "I eat vegetarian — no meat and no fish." },
            { word: "die Vorsorgeuntersuchung", translation: "preventive checkup", example: "Die Vorsorgeuntersuchung beim Arzt ist sehr wichtig.", exampleEN: "The preventive checkup at the doctor is very important." }
        ]
    },
    medien: {
        title: "Medien & Kommunikation", titleEN: "Media & Communication", emoji: "📰",
        words: [
            { word: "die Nachricht", translation: "message / news item", example: "Ich habe eine Nachricht auf meinem Handy bekommen.", exampleEN: "I received a message on my phone." },
            { word: "das soziale Netzwerk", translation: "social network", example: "Sie ist sehr aktiv in sozialen Netzwerken.", exampleEN: "She is very active on social networks." },
            { word: "die Zeitung", translation: "newspaper", example: "Er liest jeden Morgen die Zeitung beim Frühstück.", exampleEN: "He reads the newspaper every morning at breakfast." },
            { word: "der Podcast", translation: "podcast", example: "Ich höre jeden Tag einen deutschen Podcast.", exampleEN: "I listen to a German podcast every day." },
            { word: "die Werbung", translation: "advertisement / advertising", example: "Im Fernsehen gibt es zu viel Werbung.", exampleEN: "There is too much advertising on TV." },
            { word: "abonnieren", translation: "to subscribe", example: "Ich habe den Kanal auf YouTube abonniert.", exampleEN: "I subscribed to the channel on YouTube." },
            { word: "der Kommentar", translation: "comment / commentary", example: "Er hat einen Kommentar unter dem Artikel hinterlassen.", exampleEN: "He left a comment under the article." },
            { word: "das Interview", translation: "interview", example: "Die Journalistin hat ein Interview mit dem Bürgermeister gemacht.", exampleEN: "The journalist conducted an interview with the mayor." }
        ]
    },
    familie: {
        title: "Familie & Beziehungen", titleEN: "Family & Relationships", emoji: "👨‍👩‍👧",
        words: [
            { word: "die Verwandten", translation: "relatives", example: "An Weihnachten besuchen wir alle unsere Verwandten.", exampleEN: "At Christmas we visit all our relatives." },
            { word: "erziehen", translation: "to raise / bring up (children)", example: "Sie hat ihre Kinder zweisprachig erzogen.", exampleEN: "She raised her children bilingually." },
            { word: "die Ehe", translation: "marriage", example: "Sie führen seit zwanzig Jahren eine glückliche Ehe.", exampleEN: "They have been in a happy marriage for twenty years." },
            { word: "die Geschwister", translation: "siblings", example: "Ich habe zwei Geschwister — einen Bruder und eine Schwester.", exampleEN: "I have two siblings — a brother and a sister." },
            { word: "adoptieren", translation: "to adopt", example: "Das Paar hat ein Kind adoptiert.", exampleEN: "The couple adopted a child." },
            { word: "die Schwangerschaft", translation: "pregnancy", example: "Sie ist im fünften Monat der Schwangerschaft.", exampleEN: "She is in the fifth month of pregnancy." },
            { word: "die Scheidung", translation: "divorce", example: "Nach der Scheidung sind sie beide umgezogen.", exampleEN: "After the divorce they both moved away." },
            { word: "das Familienfest", translation: "family celebration", example: "Das Familienfest findet im Garten statt.", exampleEN: "The family celebration takes place in the garden." }
        ]
    },
    einkaufen: {
        title: "Einkaufen & Konsum", titleEN: "Shopping & Consumer Life", emoji: "🛍️",
        words: [
            { word: "der Kassenbon", translation: "receipt / till receipt", example: "Heben Sie bitte den Kassenbon für die Garantie auf.", exampleEN: "Please keep the receipt for the warranty." },
            { word: "die Umtauschfrist", translation: "exchange/return period", example: "Die Umtauschfrist beträgt 30 Tage.", exampleEN: "The return period is 30 days." },
            { word: "der Rabatt", translation: "discount", example: "Mit dieser Karte bekommen Sie 10% Rabatt.", exampleEN: "With this card you get a 10% discount." },
            { word: "das Sonderangebot", translation: "special offer", example: "Diese Jacke ist heute im Sonderangebot.", exampleEN: "This jacket is on special offer today." },
            { word: "bestellen", translation: "to order", example: "Ich habe die Schuhe online bestellt.", exampleEN: "I ordered the shoes online." },
            { word: "die Lieferung", translation: "delivery", example: "Die Lieferung kommt morgen zwischen 10 und 12 Uhr.", exampleEN: "The delivery arrives tomorrow between 10 and 12." },
            { word: "reklamieren", translation: "to complain / return faulty goods", example: "Ich möchte dieses Produkt reklamieren — es ist defekt.", exampleEN: "I would like to complain about this product — it is faulty." },
            { word: "die Ratenzahlung", translation: "instalment payment", example: "Sie können in Raten zahlen — ohne Zinsen.", exampleEN: "You can pay in instalments — without interest." }
        ]
    }
};

/* ============================================================
   A2 GRAMMAR DATABASE
   ============================================================ */

const A2_GRAMMAR_DATABASE = {
    perfekt: {
        title: "Das Perfekt", titleEN: "Present Perfect Tense", emoji: "⏳",
        explanation: "The Perfekt is used to talk about completed actions in the past. Formed with haben or sein + Partizip II.",
        rules: [
            { rule: "With haben: most verbs", example: "Ich habe das Buch gelesen. (I read the book.)" },
            { rule: "With sein: movement/change of state verbs", example: "Er ist nach Berlin gefahren. (He drove to Berlin.)" },
            { rule: "Partizip II: regular verbs — ge- + stem + -t", example: "kaufen → gekauft, machen → gemacht" },
            { rule: "Partizip II: irregular verbs", example: "fahren → gefahren, essen → gegessen, schreiben → geschrieben" }
        ],
        questions: [
            { type: "fillBlank", sentence: "Ich _____ gestern ins Kino gegangen.", sentenceEN: "I went to the cinema yesterday.", target: "bin", options: ["bin", "habe", "war"], explanation: "gehen takes sein: bin gegangen." },
            { type: "fillBlank", sentence: "Er _____ das Buch gelesen.", sentenceEN: "He read the book.", target: "hat", options: ["hat", "ist", "wird"], explanation: "lesen takes haben: hat gelesen." },
            { type: "fillBlank", sentence: "Sie _____ nach Hamburg geflogen.", sentenceEN: "She flew to Hamburg.", target: "ist", options: ["ist", "hat", "sein"], explanation: "fliegen takes sein: ist geflogen." },
            { type: "fillBlank", sentence: "Wir _____ Pizza gegessen.", sentenceEN: "We ate pizza.", target: "haben", options: ["haben", "sind", "waren"], explanation: "essen takes haben: haben gegessen." },
            { type: "multiChoice", question: "What is the Partizip II of 'schreiben'?", options: ["geschrieben", "schrieben", "geschreibt", "geschrieb"], correct: 0, explanation: "schreiben (irregular) → geschrieben." },
            { type: "multiChoice", question: "Which verb takes 'sein' in Perfekt?", options: ["kommen", "kaufen", "lesen", "schreiben"], correct: 0, explanation: "kommen is a movement verb → ist gekommen." }
        ]
    },
    komparativ: {
        title: "Komparativ & Superlativ", titleEN: "Comparative & Superlative", emoji: "📊",
        explanation: "Comparatives compare two things. Superlatives describe the highest degree.",
        rules: [
            { rule: "Comparative: adjective + -er (than = als)", example: "schnell → schneller. Dieser Zug ist schneller als der Bus." },
            { rule: "Superlative: am + adjective + -sten", example: "schnell → am schnellsten." },
            { rule: "Irregular: gut → besser → am besten", example: "Ihr Deutsch ist besser als meins." },
            { rule: "Irregular: viel → mehr → am meisten", example: "Sie verdient mehr Geld." }
        ],
        questions: [
            { type: "fillBlank", sentence: "Berlin ist _____ als München. (bigger)", target: "größer", options: ["größer", "groß", "am größten"], explanation: "groß → Komparativ: größer" },
            { type: "fillBlank", sentence: "Das war das _____ Essen meines Lebens. (best)", target: "beste", options: ["beste", "besser", "gut"], explanation: "gut → Superlativ: das beste" },
            { type: "fillBlank", sentence: "Sie läuft _____ als ihr Bruder. (faster)", target: "schneller", options: ["schneller", "am schnellsten", "schnell"], explanation: "schnell → Komparativ: schneller" },
            { type: "multiChoice", question: "What is the comparative of 'gut'?", options: ["besser", "guter", "am besten", "mehr"], correct: 0, explanation: "gut → besser (irregular)" },
            { type: "multiChoice", question: "What is the superlative of 'viel'?", options: ["am meisten", "am vielsten", "mehr", "am mehrsten"], correct: 0, explanation: "viel → mehr → am meisten (irregular)" }
        ]
    },
    konjunktionen: {
        title: "Konjunktionen", titleEN: "Conjunctions (weil, dass, wenn)", emoji: "🔗",
        explanation: "Subordinating conjunctions push the verb to the END of the clause.",
        rules: [
            { rule: "weil (because) → verb goes to end", example: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte." },
            { rule: "dass (that) → verb goes to end", example: "Ich weiß, dass du Recht hast." },
            { rule: "wenn (when/if) → verb goes to end", example: "Ruf mich an, wenn du ankommst." },
            { rule: "obwohl (although) → verb goes to end", example: "Er geht spazieren, obwohl es regnet." }
        ],
        questions: [
            { type: "fillBlank", sentence: "Ich lerne Deutsch, _____ ich in München arbeiten will.", sentenceEN: "I learn German because I want to work in Munich.", target: "weil", options: ["weil", "aber", "und"], explanation: "weil = because; triggers verb-last word order." },
            { type: "fillBlank", sentence: "Sie sagt, _____ sie krank ist.", sentenceEN: "She says that she is ill.", target: "dass", options: ["dass", "weil", "wenn"], explanation: "dass introduces a subordinate clause." },
            { type: "fillBlank", sentence: "_____ du Hunger hast, essen wir sofort.", sentenceEN: "If you are hungry, we will eat right away.", target: "Wenn", options: ["Wenn", "Weil", "Dass"], explanation: "Wenn = when/if, for conditional/temporal clauses." },
            { type: "multiChoice", question: "Which word order is correct with 'weil'?", options: ["Ich komme nicht, weil ich krank bin.", "Ich komme nicht, weil bin ich krank.", "Ich komme nicht, weil ich bin krank."], correct: 0, explanation: "With weil, the conjugated verb goes to the very end." }
        ]
    },
    reflexivverben: {
        title: "Reflexive Verben", titleEN: "Reflexive Verbs", emoji: "🔄",
        explanation: "Reflexive verbs use a reflexive pronoun (mich, dich, sich...) referring back to the subject.",
        rules: [
            { rule: "sich waschen (to wash oneself)", example: "Ich wasche mich. / Er wäscht sich." },
            { rule: "sich freuen (to be happy about)", example: "Ich freue mich auf den Urlaub." },
            { rule: "sich erinnern (to remember)", example: "Erinnerst du dich an ihn?" },
            { rule: "sich vorstellen (to introduce oneself)", example: "Ich möchte mich kurz vorstellen." }
        ],
        questions: [
            { type: "fillBlank", sentence: "Ich freue _____ auf das Wochenende.", sentenceEN: "I am looking forward to the weekend.", target: "mich", options: ["mich", "sich", "dich"], explanation: "Ich → reflexive pronoun is 'mich'." },
            { type: "fillBlank", sentence: "Er wäscht _____ jeden Morgen.", sentenceEN: "He washes himself every morning.", target: "sich", options: ["sich", "mich", "mir"], explanation: "er/sie/es → reflexive pronoun is 'sich'." },
            { type: "fillBlank", sentence: "Kannst du _____ an seinen Namen erinnern?", sentenceEN: "Can you remember his name?", target: "dich", options: ["dich", "sich", "mich"], explanation: "du → reflexive pronoun is 'dich'." },
            { type: "multiChoice", question: "What is the reflexive pronoun for 'wir'?", options: ["uns", "sich", "euch", "mich"], correct: 0, explanation: "wir → reflexive pronoun is 'uns'." }
        ]
    },
    trennbareVerben: {
        title: "Trennbare Verben", titleEN: "Separable Verbs", emoji: "✂️",
        explanation: "Separable verbs split in main clauses: the prefix goes to the END.",
        rules: [
            { rule: "anrufen (to call): prefix 'an' goes last", example: "Ich rufe dich morgen an." },
            { rule: "aufmachen (to open): prefix 'auf' goes last", example: "Sie macht die Tür auf." },
            { rule: "With modal: infinitive stays together", example: "Ich muss morgen früh aufstehen." },
            { rule: "In Perfekt: ge- goes between prefix and stem", example: "anrufen → angerufen | aufmachen → aufgemacht" }
        ],
        questions: [
            { type: "fillBlank", sentence: "Er macht die Tür _____. (aufmachen — prefix)", sentenceEN: "He opens the door.", target: "auf", options: ["auf", "zu", "an"], explanation: "aufmachen splits: macht ... auf" },
            { type: "fillBlank", sentence: "Ich habe gestern meine Mutter _____. (anrufen Perfekt)", sentenceEN: "I called my mother yesterday.", target: "angerufen", options: ["angerufen", "gerufen an", "angeruft"], explanation: "Perfekt of anrufen = angerufen." },
            { type: "multiChoice", question: "Which sentence is correct for 'aufstehen'?", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe auf um 7 Uhr auf."], correct: 0, explanation: "The prefix 'auf' goes to the end of the main clause." }
        ]
    },
    praepositionen: {
        title: "Präpositionen mit Dativ/Akkusativ", titleEN: "Prepositions with Dative/Accusative", emoji: "📍",
        explanation: "Some prepositions always take Dativ, some always Akkusativ, and Wechselpräpositionen take both.",
        rules: [
            { rule: "Always Dativ: mit, bei, nach, seit, von, zu, aus", example: "Ich fahre mit dem Bus. / Sie wohnt bei ihrer Mutter." },
            { rule: "Always Akkusativ: durch, für, gegen, ohne, um", example: "Das Geschenk ist für meinen Vater." },
            { rule: "Wechselpräpositionen — location = Dativ, direction = Akkusativ", example: "Ich bin in der Schule. (Dat) / Ich gehe in die Schule. (Akk)" }
        ],
        questions: [
            { type: "fillBlank", sentence: "Das Buch liegt auf _____ Tisch. (der — location)", sentenceEN: "The book is lying on the table. (location -> Dative)", target: "dem", options: ["dem", "den", "die"], explanation: "auf + location → Dativ: auf dem Tisch." },
            { type: "fillBlank", sentence: "Ich lege das Buch auf _____ Tisch. (der — direction)", sentenceEN: "I place the book onto the table. (direction -> Accusative)", target: "den", options: ["den", "dem", "die"], explanation: "auf + direction → Akkusativ: auf den Tisch." },
            { type: "fillBlank", sentence: "Das Geschenk ist für _____ Kind. (das)", sentenceEN: "The gift is for the child. (für -> Accusative)", target: "das", options: ["das", "dem", "den"], explanation: "für always takes Akkusativ: für das Kind." },
            { type: "multiChoice", question: "Which preposition always takes Dativ?", options: ["mit", "durch", "für", "um"], correct: 0, explanation: "mit always takes Dativ." }
        ]
    }
};

/* ============================================================
   A2 READING DATABASE
   ============================================================ */

const A2_READING_DATABASE = [
    {
        id: "a2_read_1", title: "Stellenausschreibung: Büroassistenz", titleEN: "Job Ad: Office Assistant",
        text: "**Stellenausschreibung**\n\nWir suchen ab sofort eine/n **Büroassistent/in** (m/w/d) in Vollzeit für unser Team in München.\n\n**Ihre Aufgaben:**\n- Bearbeitung der täglichen Korrespondenz per E-Mail und Post\n- Terminkoordination für das Management-Team\n- Empfang von Besuchern und Kundenbetreuung\n\n**Wir bieten:**\n- Unbefristeter Vertrag\n- 28 Urlaubstage pro Jahr\n- Möglichkeit zum Homeoffice (1 Tag/Woche)\n\nBitte senden Sie Ihre Bewerbungsunterlagen an: bewerbung@beispiel-gmbh.de",
        textEN: "**Job Advertisement**\n\nWe are looking immediately for a full-time **Office Assistant** (m/f/d) for our team in Munich.\n\n**Your Tasks:**\n- Processing daily correspondence via email and post\n- Appointment coordination for the management team\n- Reception of visitors and customer support\n\n**We Offer:**\n- Permanent contract\n- 28 vacation days per year\n- Option for home office (1 day/week)\n\nPlease send your application documents to: bewerbung@beispiel-gmbh.de",
        questions: [
            { question: "Wann kann man mit der Stelle anfangen?", questionEN: "When can one start the job?", options: ["Sofort / Immediately", "Erst nächstes Jahr", "Im Januar", "Nach einer Probezeit"], correct: 0, explanation: "The ad says 'ab sofort' (immediately)." },
            { question: "Wie viele Urlaubstage gibt es pro Jahr?", questionEN: "How many vacation days are there per year?", options: ["28 Tage", "20 Tage", "30 Tage", "25 Tage"], correct: 0, explanation: "The ad states '28 Urlaubstage pro Jahr'." },
            { question: "Was ist NICHT in den Aufgaben enthalten?", questionEN: "What is NOT included in the tasks?", options: ["Buchhaltung / Accounting", "Korrespondenz", "Terminkoordination", "Kundenbetreuung"], correct: 0, explanation: "Buchhaltung (accounting) is not mentioned in the tasks list." }
        ]
    },
    {
        id: "a2_read_2", title: "E-Mail an den Vermieter", titleEN: "Email to the Landlord",
        text: "**Betreff:** Reparatur der Heizung\n\nSehr geehrter Herr Schreiber,\n\nich schreibe Ihnen wegen eines dringenden Problems. Seit Montag funktioniert die Heizung im Wohnzimmer nicht mehr. Die Temperaturen sind unter null Grad und es ist sehr kalt.\n\nIch habe bereits versucht, das Problem selbst zu lösen, aber es ist mir leider nicht gelungen. Das Thermostat reagiert nicht.\n\nKönnten Sie bitte so schnell wie möglich einen Handwerker schicken? Ich bin täglich von 8 bis 18 Uhr zu Hause.\n\nMit freundlichen Grüßen,\nMarina Fonseca",
        textEN: "**Subject:** Repair of the heating\n\nDear Mr. Schreiber,\n\nI am writing to you because of an urgent problem. Since Monday the heating in the living room has not been working. The temperatures are below zero degrees and it is very cold.\n\nI have already tried to solve the problem myself, but unfortunately I did not succeed. The thermostat does not respond.\n\nCould you please send a repair technician as soon as possible? I am at home daily from 8 AM to 6 PM.\n\nKind regards,\nMarina Fonseca",
        questions: [
            { question: "Was ist das Problem in der Wohnung?", questionEN: "What is the problem in the apartment?", options: ["Die Heizung funktioniert nicht.", "Das Fenster ist kaputt.", "Es gibt kein warmes Wasser.", "Die Tür schließt nicht."], correct: 0, explanation: "Marina writes: 'die Heizung im Wohnzimmer funktioniert nicht mehr' (heating does not work)." },
            { question: "Seit wann gibt es das Problem?", questionEN: "Since when has the problem existed?", options: ["Seit Montag", "Seit einer Woche", "Seit gestern", "Seit dem Winter"], correct: 0, explanation: "She writes 'Seit Montag funktioniert die Heizung nicht mehr' (since Monday)." },
            { question: "Wann ist Marina zu Hause?", questionEN: "When is Marina at home?", options: ["Von 8 bis 18 Uhr", "Von 9 bis 17 Uhr", "Nur am Wochenende", "Den ganzen Tag"], correct: 0, explanation: "She writes 'Ich bin täglich von 8 bis 18 Uhr zu Hause' (daily from 8 to 18)." }
        ]
    },
    {
        id: "a2_read_3", title: "Anleitung: Paket zurückschicken", titleEN: "Instructions: Returning a Parcel",
        text: "**So senden Sie Ihr Paket zurück — in 4 einfachen Schritten:**\n\n**Schritt 1:** Füllen Sie das Rücksendeformular aus.\n\n**Schritt 2:** Verpacken Sie den Artikel sicher in der Originalverpackung.\n\n**Schritt 3:** Kleben Sie das Rücksendeetikett auf das Paket. Das Etikett finden Sie auf unserem Kundenportal unter 'Meine Bestellungen'.\n\n**Schritt 4:** Geben Sie das Paket bei einer Postfiliale ab.\n\n**Wichtig:** Die Rücksendung muss innerhalb von 30 Tagen nach Erhalt erfolgen. Die Rückerstattung erfolgt innerhalb von 7 Werktagen.",
        textEN: "**How to return your parcel — in 4 simple steps:**\n\n**Step 1:** Fill out the return form.\n\n**Step 2:** Pack the item securely in the original packaging.\n\n**Step 3:** Stick the return label onto the parcel. You can find the label on our customer portal under 'My Orders'.\n\n**Step 4:** Drop off the parcel at a post office branch.\n\n**Important:** The return must be made within 30 days of receipt. The refund will be issued within 7 working days.",
        questions: [
            { question: "Wo findet man das Rücksendeetikett?", questionEN: "Where can one find the return label?", options: ["Auf dem Kundenportal unter 'Meine Bestellungen'", "In der Verpackung", "Per E-Mail automatisch", "Beim Paketshop"], correct: 0, explanation: "Step 3 states: 'Das Etikett finden Sie auf unserem Kundenportal' (on customer portal)." },
            { question: "Innerhalb welcher Frist muss man zurückschicken?", questionEN: "Within what period must one return it?", options: ["30 Tage", "14 Tage", "60 Tage", "7 Tage"], correct: 0, explanation: "'innerhalb von 30 Tagen nach Erhalt' (within 30 days)." },
            { question: "Wie lange dauert die Rückerstattung?", questionEN: "How long does the refund take?", options: ["7 Werktage", "14 Werktage", "30 Tage", "24 Stunden"], correct: 0, explanation: "'innerhalb von 7 Werktagen' (within 7 working days)." }
        ]
    }
];

/* ============================================================
   A2 INTERACTIVE HÖREN DATABASE — 15 REAL-LIFE TOPICS
   ============================================================ */

const A2_INTERACTIVE_HOEREN_DATABASE = {
    job: {
        title: "Jobinterview & Bewerbung", titleEN: "Job Interview & Application", emoji: "💼",
        warmup: {
            vocab: [
                { word: "Bewerbungsunterlagen", gender: "die (Pl.)", translation: "application documents", example: "Bitte senden Sie Ihre vollständigen Bewerbungsunterlagen per E-Mail.", exampleEN: "Please send your complete application documents by email." },
                { word: "Berufserfahrung", gender: "die", translation: "professional experience", example: "Sie hat fünf Jahre Berufserfahrung im Marketing.", exampleEN: "She has five years of professional experience in marketing." },
                { word: "Gehaltsvorstellung", gender: "die", translation: "salary expectation", example: "Wie hoch ist Ihre Gehaltsvorstellung?", exampleEN: "What is your salary expectation?" },
                { word: "Probezeit", gender: "die", translation: "probationary period", example: "Die Probezeit dauert normalerweise sechs Monate.", exampleEN: "The probationary period normally lasts six months." },
                { word: "Qualifikation", gender: "die", translation: "qualification", example: "Welche Qualifikationen bringen Sie für diese Stelle mit?", exampleEN: "What qualifications do you bring for this position?" }
            ],
            phrases: [
                { de: "Ich bewerbe mich auf die ausgeschriebene Stelle als Buchhalter.", en: "I am applying for the advertised position as accountant." },
                { de: "Was sind Ihre Stärken und Schwächen?", en: "What are your strengths and weaknesses?" },
                { de: "Wann wäre Ihr frühester Eintrittstermin?", en: "What would be your earliest start date?" },
                { de: "Haben Sie noch Fragen an uns?", en: "Do you have any further questions for us?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_job_1", title: "Das Vorstellungsgespräch", titleEN: "The Job Interview",
                script: "Guten Morgen, Frau Keller. Bitte setzen Sie sich. - Guten Morgen, danke. Ich freue mich sehr auf dieses Gespräch. - Erzählen Sie uns kurz etwas über sich und Ihre bisherige Berufserfahrung. - Ja, gerne. Ich habe drei Jahre als Projektassistentin gearbeitet und mich danach auf digitales Marketing spezialisiert.",
                translation: "Good morning, Ms. Keller. Please take a seat. - Good morning, thank you. I very much look forward to this conversation. - Please tell us briefly about yourself and your professional experience. - Yes, gladly. I worked for three years as a project assistant and then specialised in digital marketing.",
                vocabSupport: [
                    { word: "bisherige Berufserfahrung", translation: "previous professional experience" },
                    { word: "sich spezialisieren auf", translation: "to specialise in" },
                    { word: "digitales Marketing", translation: "digital marketing" }
                ],
                fillBlank: { sentence: "Frau Keller hat sich auf _____ spezialisiert.", sentenceEN: "Ms. Keller specialised in _____.", target: "digitales Marketing", options: ["digitales Marketing", "Buchhaltung", "Personalwesen"] },
                role: { speaker1: "Erzählen Sie etwas über Ihre Berufserfahrung.", speaker1EN: "Tell us something about your professional experience.", options: ["Ich habe drei Jahre als Projektassistentin gearbeitet.", "Ich esse gerne Pizza.", "Das Wetter ist schön heute."], correct: 0 },
                trueFalse: { statement: "Frau Keller hat drei Jahre als Buchhalterin gearbeitet.", statementEN: "Ms. Keller worked for three years as an accountant.", correct: false, explanation: "Falsch: Sie hat als Projektassistentin gearbeitet, nicht als Buchhalterin." }
            },
            {
                id: "a2_hoer_job_2", title: "Gehalt und Bedingungen", titleEN: "Salary and Conditions",
                script: "Was ist Ihre Gehaltsvorstellung, Frau Keller? - Ich stelle mir ein Bruttogehalt von rund 3.200 Euro im Monat vor. - Das liegt etwas über unserem Budget. Wir können 3.000 Euro anbieten, aber dafür gibt es 30 Urlaubstage und Homeoffice zweimal pro Woche. - Das klingt interessant. Wann müsste ich die Stelle antreten? - Idealerweise zum ersten Oktober.",
                translation: "What is your salary expectation, Ms. Keller? - I imagine a gross salary of around 3,200 euros per month. - That is slightly above our budget. We can offer 3,000 euros, but there are 30 vacation days and home office twice a week. - That sounds interesting. When would I need to start? - Ideally from the first of October.",
                vocabSupport: [
                    { word: "das Bruttogehalt", translation: "gross salary" },
                    { word: "das Homeoffice", translation: "working from home" },
                    { word: "antreten", translation: "to take up / start a position" }
                ],
                fillBlank: { sentence: "Das Unternehmen bietet _____ Urlaubstage an.", sentenceEN: "The company offers _____ vacation days.", target: "30", options: ["30", "25", "28"] },
                role: { speaker1: "Was ist Ihre Gehaltsvorstellung?", speaker1EN: "What is your salary expectation?", options: ["Ich stelle mir rund 3.200 Euro brutto vor.", "Ich trinke gerne Kaffee.", "Das Büro ist sehr groß."], correct: 0 },
                trueFalse: { statement: "Frau Keller soll zum ersten November anfangen.", statementEN: "Ms. Keller is supposed to start on the 1st of November.", correct: false, explanation: "Falsch: Der Interviewer sagt 'Idealerweise zum ersten Oktober'." }
            }
        ]
    },
    behoerden: {
        title: "Behörden & Formulare", titleEN: "Offices & Forms", emoji: "🏛️",
        warmup: {
            vocab: [
                { word: "Personalausweis", gender: "der", translation: "identity card / ID", example: "Ohne Personalausweis können Sie sich nicht anmelden.", exampleEN: "Without an identity card you cannot register." },
                { word: "Anmeldung", gender: "die", translation: "registration (of residence)", example: "Die Anmeldung beim Einwohnermeldeamt ist Pflicht.", exampleEN: "Registration at the residents' registration office is mandatory." },
                { word: "Aufenthaltserlaubnis", gender: "die", translation: "residence permit", example: "Sie brauchen eine Aufenthaltserlaubnis für mehr als 90 Tage.", exampleEN: "You need a residence permit for more than 90 days." },
                { word: "Formular", gender: "das", translation: "form", example: "Bitte füllen Sie dieses Formular vollständig aus.", exampleEN: "Please fill in this form completely." },
                { word: "Termin", gender: "der", translation: "appointment", example: "Ohne Termin wird niemand empfangen.", exampleEN: "Nobody will be seen without an appointment." }
            ],
            phrases: [
                { de: "Ich möchte mich hier anmelden.", en: "I would like to register my residence here." },
                { de: "Welche Dokumente brauche ich dafür?", en: "Which documents do I need for that?" },
                { de: "Wie lange dauert die Bearbeitung?", en: "How long does the processing take?" },
                { de: "Wo muss ich unterschreiben?", en: "Where do I need to sign?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_beh_1", title: "Anmeldung beim Einwohnermeldeamt", titleEN: "Residence Registration Office",
                script: "Guten Tag, ich möchte mich anmelden. Ich bin letzte Woche nach Frankfurt gezogen. - Guten Tag. Haben Sie alle Unterlagen dabei? Personalausweis, Wohnungsgeberbestätigung und das ausgefüllte Anmeldeformular. - Ja, hier sind alle Dokumente. - Sehr gut. Die Bearbeitung dauert etwa 10 Minuten. Setzen Sie sich bitte.",
                translation: "Good day, I would like to register. I moved to Frankfurt last week. - Good day. Do you have all the documents? Identity card, landlord confirmation and the completed registration form. - Yes, here are all the documents. - Very good. Processing takes about 10 minutes. Please take a seat.",
                vocabSupport: [
                    { word: "die Wohnungsgeberbestätigung", translation: "landlord's confirmation of residence" },
                    { word: "das Anmeldeformular", translation: "registration form" },
                    { word: "die Bearbeitung", translation: "processing" }
                ],
                fillBlank: { sentence: "Die Bearbeitung dauert etwa _____ Minuten.", sentenceEN: "Processing takes about _____ minutes.", target: "10", options: ["10", "30", "60"] },
                role: { speaker1: "Welche Dokumente brauche ich für die Anmeldung?", speaker1EN: "Which documents do I need for registration (Anmeldung)?", options: ["Personalausweis, Wohnungsgeberbestätigung und das Anmeldeformular.", "Nur den Reisepass.", "Eine Geburtsurkunde reicht."], correct: 0 },
                trueFalse: { statement: "Die Person ist vor einem Monat nach Frankfurt gezogen.", statementEN: "The person moved to Frankfurt one month ago.", correct: false, explanation: "Falsch: Sie sagt 'Ich bin letzte Woche nach Frankfurt gezogen'." }
            },
            {
                id: "a2_hoer_beh_2", title: "Aufenthaltserlaubnis beantragen", titleEN: "Applying for a Residence Permit",
                script: "Ich brauche eine Aufenthaltserlaubnis. Ich bin aus Brasilien und arbeite hier seit drei Monaten. - Haben Sie bereits einen Arbeitsvertrag? - Ja, einen unbefristeten Arbeitsvertrag. - Gut. Dann füllen Sie bitte dieses Formular aus und bringen nächste Woche folgende Dokumente mit: Pass, Arbeitsvertrag, Lohnabrechnung der letzten drei Monate und zwei Passfotos.",
                translation: "I need a residence permit. I am from Brazil and have been working here for three months. - Do you already have a work contract? - Yes, a permanent work contract. - Good. Then please fill in this form and bring these documents next week: passport, work contract, payslips from the last three months, and two passport photos.",
                vocabSupport: [
                    { word: "unbefristet", translation: "permanent / indefinite (contract)" },
                    { word: "die Lohnabrechnung", translation: "payslip" },
                    { word: "das Passfoto", translation: "passport photo" }
                ],
                fillBlank: { sentence: "Die Person braucht _____ Passfotos.", sentenceEN: "The person needs _____ passport photos.", target: "zwei", options: ["zwei", "vier", "ein"] },
                role: { speaker1: "Was brauche ich für die Aufenthaltserlaubnis?", speaker1EN: "What do I need for the residence permit?", options: ["Pass, Arbeitsvertrag, Lohnabrechnung und Passfotos.", "Nur den Personalausweis.", "Eine Einladung vom Arbeitgeber."], correct: 0 },
                trueFalse: { statement: "Die Person hat einen befristeten Arbeitsvertrag.", statementEN: "The person has a temporary employment contract.", correct: false, explanation: "Falsch: Sie sagt 'Ja, einen unbefristeten Arbeitsvertrag'." }
            }
        ]
    },
    schule: {
        title: "Elternabend & Schule", titleEN: "Parents' Evening & School", emoji: "🏫",
        warmup: {
            vocab: [
                { word: "Elternabend", gender: "der", translation: "parents' evening", example: "Der Elternabend findet am Dienstag um 19 Uhr statt.", exampleEN: "The parents' evening takes place on Tuesday at 7 PM." },
                { word: "Zeugnis", gender: "das", translation: "school report / certificate", example: "Das Halbjahreszeugnis kommt im Februar.", exampleEN: "The mid-year school report comes in February." },
                { word: "Hausaufgaben", gender: "die (Pl.)", translation: "homework", example: "Bitte machen Sie mit Ihrem Kind täglich die Hausaufgaben.", exampleEN: "Please do the homework with your child every day." },
                { word: "Klassenarbeit", gender: "die", translation: "class test / written exam", example: "Nächsten Montag schreiben wir eine Klassenarbeit in Mathematik.", exampleEN: "Next Monday we are writing a class test in maths." },
                { word: "Lehrplan", gender: "der", translation: "curriculum / syllabus", example: "Der neue Lehrplan gilt ab nächstem Schuljahr.", exampleEN: "The new curriculum applies from next school year." }
            ],
            phrases: [
                { de: "Mein Kind hat Schwierigkeiten in Mathematik.", en: "My child is having difficulties in maths." },
                { de: "Wie ist das Verhalten meines Kindes in der Klasse?", en: "How is my child's behaviour in class?" },
                { de: "Können wir einen Termin für ein persönliches Gespräch vereinbaren?", en: "Can we arrange an appointment for a personal conversation?" },
                { de: "Braucht mein Kind Nachhilfe?", en: "Does my child need tutoring?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_sch_1", title: "Gespräch mit der Lehrerin", titleEN: "Conversation with the Teacher",
                script: "Guten Abend, Frau Berger. Ich bin die Mutter von Luis aus der Klasse 5b. - Guten Abend, Frau Mendes. Luis ist ein aufgeweckter Junge. Er beteiligt sich aktiv am Unterricht. Allerdings hat er in Mathematik Schwierigkeiten. - Das weiß ich. Braucht er Nachhilfe? - Ich empfehle mindestens zwei Stunden Nachhilfe pro Woche.",
                translation: "Good evening, Ms. Berger. I am the mother of Luis from class 5b. - Good evening, Ms. Mendes. Luis is a bright boy. He participates actively in class. However, he has difficulties in maths. - I know that. Does he need tutoring? - I recommend at least two hours of tutoring per week.",
                vocabSupport: [
                    { word: "aufgeweckt", translation: "bright / alert (about a child)" },
                    { word: "sich beteiligen", translation: "to participate / take part" },
                    { word: "die Nachhilfe", translation: "private tutoring" }
                ],
                fillBlank: { sentence: "Luis soll mindestens _____ Stunden Nachhilfe pro Woche bekommen.", sentenceEN: "Luis should receive at least _____ hours of tutoring per week.", target: "zwei", options: ["zwei", "drei", "fünf"] },
                role: { speaker1: "Hat mein Kind Probleme in der Schule?", speaker1EN: "Is my child having problems at school?", options: ["Er hat Schwierigkeiten in Mathematik, aber beteiligt sich aktiv.", "Nein, keine Probleme.", "Er fehlt oft."], correct: 0 },
                trueFalse: { statement: "Luis beteiligt sich nicht am Unterricht.", statementEN: "Luis does not participate in class.", correct: false, explanation: "Falsch: Die Lehrerin sagt 'Er beteiligt sich aktiv am Unterricht'." }
            },
            {
                id: "a2_hoer_sch_2", title: "Krankmeldung fürs Kind", titleEN: "Sick Note for a Child",
                script: "Schule Bergstraße, Sekretariat, guten Morgen. - Guten Morgen, hier ist Maria Costa. Meine Tochter Lena aus der Klasse 4a ist heute krank. Sie hat Fieber. - Haben Sie das auch schriftlich mitgeteilt? - Ich werde noch heute eine E-Mail schicken. Benötige ich auch ein Attest vom Arzt? - Ab dem dritten Kranktag, ja.",
                translation: "Bergstraße School, secretary's office, good morning. - Good morning, this is Maria Costa. My daughter Lena from class 4a is ill today. She has a fever. - Have you also notified us in writing? - I will send an email today. Do I also need a doctor's certificate? - From the third day of illness, yes.",
                vocabSupport: [
                    { word: "das Sekretariat", translation: "secretary's office" },
                    { word: "das Fieber", translation: "fever / temperature" },
                    { word: "das Attest", translation: "medical certificate" }
                ],
                fillBlank: { sentence: "Ab dem _____ Kranktag braucht man ein Attest.", sentenceEN: "From the _____ sick day onwards a medical certificate is required.", target: "dritten", options: ["dritten", "ersten", "zweiten"] },
                role: { speaker1: "Braucht mein Kind ein Attest?", speaker1EN: "Does my child need a medical certificate?", options: ["Ab dem dritten Kranktag, ja.", "Nein, nie.", "Sofort am ersten Tag."], correct: 0 },
                trueFalse: { statement: "Lena hat Bauchschmerzen.", statementEN: "Lena has a stomach ache.", correct: false, explanation: "Falsch: Die Mutter sagt 'Sie hat Fieber', nicht Bauchschmerzen." }
            }
        ]
    },
    reise: {
        title: "Reiseplanung & Urlaub", titleEN: "Travel Planning & Holiday", emoji: "✈️",
        warmup: {
            vocab: [
                { word: "Reisebüro", gender: "das", translation: "travel agency", example: "Wir buchen unsere Reise im Reisebüro.", exampleEN: "We book our trip at the travel agency." },
                { word: "Pauschalreise", gender: "die", translation: "package holiday", example: "Eine Pauschalreise ist oft günstiger als alles einzeln zu buchen.", exampleEN: "A package holiday is often cheaper than booking everything separately." },
                { word: "Stornierung", gender: "die", translation: "cancellation", example: "Wegen Krankheit muss ich die Buchung stornieren.", exampleEN: "Due to illness I have to cancel the booking." },
                { word: "Übernachtung", gender: "die", translation: "overnight stay", example: "Das Hotel kostet 80 Euro pro Übernachtung.", exampleEN: "The hotel costs 80 euros per overnight stay." },
                { word: "Reiseversicherung", gender: "die", translation: "travel insurance", example: "Die Reiseversicherung deckt Stornierungen und Krankheit ab.", exampleEN: "Travel insurance covers cancellations and illness." }
            ],
            phrases: [
                { de: "Ich möchte eine Reise nach Spanien buchen.", en: "I would like to book a trip to Spain." },
                { de: "Gibt es noch freie Plätze für Anfang August?", en: "Are there still free places for early August?" },
                { de: "Was ist im Preis inbegriffen?", en: "What is included in the price?" },
                { de: "Kann ich kostenlos stornieren?", en: "Can I cancel free of charge?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_rei_1", title: "Im Reisebüro", titleEN: "At the Travel Agency",
                script: "Guten Tag, ich möchte für zwei Wochen nach Mallorca fliegen. Wann geht das am günstigsten? - In der Nebensaison, im Mai oder September, sind die Preise am niedrigsten. Im August ist es sehr teuer. Wollen Sie All-inclusive oder Halbpension? - Am liebsten All-inclusive für zwei Personen. - Dann hätte ich ein schönes Angebot: zwei Wochen für beide zusammen 1.840 Euro, inklusive Flug und Transfer.",
                translation: "Good day, I would like to fly to Mallorca for two weeks. When is it cheapest? - In the off season, in May or September, prices are lowest. In August it is very expensive. Do you want all-inclusive or half board? - I would prefer all-inclusive for two people. - Then I have a nice offer: two weeks for both together 1,840 euros, including flight and transfer.",
                vocabSupport: [
                    { word: "die Nebensaison", translation: "off season" },
                    { word: "All-inclusive", translation: "all-inclusive" },
                    { word: "die Halbpension", translation: "half board" }
                ],
                fillBlank: { sentence: "Im Mai und September sind die Preise am _____.", sentenceEN: "In May and September prices are the _____.", target: "niedrigsten", options: ["niedrigsten", "höchsten", "gleichen"] },
                role: { speaker1: "Wann sind die Preise für Mallorca am günstigsten?", speaker1EN: "When are the prices for Mallorca cheapest?", options: ["In der Nebensaison, im Mai oder September.", "Im Sommer, im Juli.", "Im Dezember."], correct: 0 },
                trueFalse: { statement: "Das Angebot kostet 1.840 Euro für eine Person.", statementEN: "The package costs 1,840 euros for one person.", correct: false, explanation: "Falsch: Die Beraterin sagt 'für beide zusammen 1.840 Euro'." }
            },
            {
                id: "a2_hoer_rei_2", title: "Am Flughafen — Check-in", titleEN: "At the Airport — Check-in",
                script: "Guten Morgen. Ihren Reisepass und die Buchungsbestätigung bitte. - Hier, bitte. Kann ich einen Fensterplatz haben? - Leider sind nur noch Mittelplätze frei. Haben Sie Aufgabegepäck? - Ja, einen Koffer. - Das Gewicht des Koffers bitte auf die Waage — 23 Kilo. Ihr Freigepäck beträgt 23 Kilo, also perfekt. Hier ist Ihre Bordkarte. Gate B17.",
                translation: "Good morning. Your passport and booking confirmation please. - Here please. Can I have a window seat? - Unfortunately only middle seats are left. Do you have checked luggage? - Yes, one suitcase. - Please put the suitcase on the scales — 23 kilos. Your luggage allowance is 23 kilos, so perfect. Here is your boarding pass. Gate B17.",
                vocabSupport: [
                    { word: "die Buchungsbestätigung", translation: "booking confirmation" },
                    { word: "das Aufgabegepäck", translation: "checked luggage" },
                    { word: "die Bordkarte", translation: "boarding pass" }
                ],
                fillBlank: { sentence: "Der Koffer wiegt _____ Kilo.", sentenceEN: "The suitcase weighs _____ kilos.", target: "23", options: ["23", "30", "15"] },
                role: { speaker1: "Kann ich einen Fensterplatz bekommen?", speaker1EN: "Can I get a window seat?", options: ["Leider sind nur noch Mittelplätze frei.", "Ja, natürlich!", "Der Platz ist schon besetzt."], correct: 0 },
                trueFalse: { statement: "Das Freigepäck beträgt 30 Kilo.", statementEN: "The free baggage allowance is 30 kilos.", correct: false, explanation: "Falsch: Die Mitarbeiterin sagt 'Ihr Freigepäck beträgt 23 Kilo'." }
            }
        ]
    },
    versicherung: {
        title: "Versicherung & Verträge", titleEN: "Insurance & Contracts", emoji: "📄",
        warmup: {
            vocab: [
                { word: "Haftpflichtversicherung", gender: "die", translation: "liability insurance", example: "Eine Haftpflichtversicherung ist in Deutschland sehr wichtig.", exampleEN: "Liability insurance is very important in Germany." },
                { word: "Kündigung", gender: "die", translation: "cancellation / termination", example: "Die Kündigung muss drei Monate vor Vertragsende eingehen.", exampleEN: "The cancellation must be received three months before the contract ends." },
                { word: "Laufzeit", gender: "die", translation: "contract duration / term", example: "Der Vertrag hat eine Laufzeit von zwei Jahren.", exampleEN: "The contract has a duration of two years." },
                { word: "Prämie", gender: "die", translation: "premium (insurance)", example: "Die monatliche Prämie beträgt 18 Euro.", exampleEN: "The monthly premium amounts to 18 euros." },
                { word: "Schaden", gender: "der", translation: "damage / loss / claim", example: "Ich muss einen Schaden bei meiner Versicherung melden.", exampleEN: "I need to report a damage/claim to my insurance." }
            ],
            phrases: [
                { de: "Ich möchte einen Schaden melden.", en: "I would like to report a claim / damage." },
                { de: "Wann endet die Kündigungsfrist?", en: "When does the notice period end?" },
                { de: "Was ist in diesem Tarif inbegriffen?", en: "What is included in this tariff?" },
                { de: "Wie hoch ist die monatliche Prämie?", en: "How high is the monthly premium?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_ver_1", title: "Schaden melden", titleEN: "Reporting a Claim",
                script: "Guten Tag, Allianz Versicherung. Was kann ich für Sie tun? - Guten Tag, mein Name ist Richter. Ich möchte einen Schaden melden. Gestern ist mein Auto in der Tiefgarage beschädigt worden — jemand hat meinen Seitenspiegel abgefahren. - Haben Sie ein Foto vom Schaden gemacht? - Ja, ich habe mehrere Fotos. - Gut. Bitte füllen Sie das Online-Schadensformular auf unserer Website aus und laden Sie die Fotos hoch.",
                translation: "Good day, Allianz Insurance. What can I do for you? - Good day, my name is Richter. I would like to report a claim. Yesterday my car was damaged in the underground car park — someone knocked off my wing mirror. - Did you take a photo of the damage? - Yes, I took several photos. - Good. Please fill in the online claim form on our website and upload the photos.",
                vocabSupport: [
                    { word: "die Tiefgarage", translation: "underground car park" },
                    { word: "der Seitenspiegel", translation: "wing mirror" },
                    { word: "das Schadensformular", translation: "claim form" }
                ],
                fillBlank: { sentence: "Der Schaden ist in der _____ passiert.", sentenceEN: "The damage happened in the _____.", target: "Tiefgarage", options: ["Tiefgarage", "Werkstatt", "Straße"] },
                role: { speaker1: "Was soll ich als nächstes tun?", speaker1EN: "What should I do next?", options: ["Das Schadensformular ausfüllen und Fotos hochladen.", "Zur Polizei gehen.", "Den Schaden ignorieren."], correct: 0 },
                trueFalse: { statement: "Herr Richter hat keine Fotos gemacht.", statementEN: "Mr. Richter took no photos.", correct: false, explanation: "Falsch: Er sagt 'Ja, ich habe mehrere Fotos'." }
            },
            {
                id: "a2_hoer_ver_2", title: "Vertrag kündigen", titleEN: "Cancelling a Contract",
                script: "Ich möchte meinen Handyvertrag kündigen. Wann endet meine aktuelle Laufzeit? - Ihr Vertrag läuft noch bis zum 31. März. Die Kündigungsfrist beträgt vier Wochen zum Vertragsende. Das heißt, Ihre Kündigung muss spätestens am 1. März bei uns eingehen. - Kann ich das per E-Mail machen? - Ja, aber wir brauchen eine schriftliche Unterschrift. Sie können auch über unser Kundenportal kündigen.",
                translation: "I would like to cancel my mobile phone contract. When does my current term end? - Your contract runs until 31 March. The notice period is four weeks before the end. That means your cancellation must be received by 1 March at the latest. - Can I do that by email? - Yes, but we need a written signature. You can also cancel via our customer portal.",
                vocabSupport: [
                    { word: "die Kündigungsfrist", translation: "notice period" },
                    { word: "eingehen", translation: "to be received (formal)" },
                    { word: "einreichen", translation: "to submit / hand in" }
                ],
                fillBlank: { sentence: "Die Kündigung muss spätestens am _____ eingehen.", sentenceEN: "The cancellation must arrive by _____ at the latest.", target: "1. März", options: ["1. März", "31. März", "1. Februar"] },
                role: { speaker1: "Wie kann ich meinen Vertrag kündigen?", speaker1EN: "How can I cancel my contract?", options: ["Per E-Mail mit Unterschrift oder über das Kundenportal.", "Nur persönlich im Shop.", "Per Telefon reicht aus."], correct: 0 },
                trueFalse: { statement: "Der Vertrag läuft bis zum 30. April.", statementEN: "The contract runs until April 30th.", correct: false, explanation: "Falsch: Der Mitarbeiter sagt 'Ihr Vertrag läuft noch bis zum 31. März'." }
            }
        ]
    },
    auto: {
        title: "Auto & Pannenhilfe", titleEN: "Car & Roadside Assistance", emoji: "🚗",
        warmup: {
            vocab: [
                { word: "Panne", gender: "die", translation: "breakdown", example: "Ich habe auf der Autobahn eine Panne gehabt.", exampleEN: "I had a breakdown on the motorway." },
                { word: "Abschleppdienst", gender: "der", translation: "towing service", example: "Der Abschleppdienst kam nach 30 Minuten.", exampleEN: "The towing service arrived after 30 minutes." },
                { word: "Reifenpanne", gender: "die", translation: "flat tyre", example: "Ich habe eine Reifenpanne — der Reifen ist komplett platt.", exampleEN: "I have a flat tyre — the tyre is completely flat." },
                { word: "Warndreieck", gender: "das", translation: "warning triangle", example: "Stellen Sie sofort das Warndreieck auf!", exampleEN: "Set up the warning triangle immediately!" },
                { word: "Pannenhilfe", gender: "die", translation: "roadside assistance", example: "Ich rufe jetzt die Pannenhilfe an.", exampleEN: "I am calling the roadside assistance now." }
            ],
            phrases: [
                { de: "Ich habe eine Reifenpanne auf der B5 bei Kilometer 23.", en: "I have a flat tyre on the B5 near kilometre 23." },
                { de: "Wann kann die Pannenhilfe kommen?", en: "When can the roadside assistance come?" },
                { de: "Mein Auto springt nicht mehr an.", en: "My car won't start anymore." },
                { de: "Ich stehe auf dem Seitenstreifen und bin in Sicherheit.", en: "I am on the hard shoulder and I am safe." }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_aut_1", title: "Pannenhilfe anrufen", titleEN: "Calling Roadside Assistance",
                script: "ADAC Pannenhilfe, guten Abend. - Guten Abend, ich brauche dringend Hilfe. Ich habe auf der A7 Richtung Hamburg eine Reifenpanne. Ich stehe auf dem Seitenstreifen, kurz vor der Ausfahrt Harburg. - Sind Sie unverletzt? - Ja, mir geht es gut. - Haben Sie das Warndreieck aufgestellt? - Ja, habe ich. - Unser Pannendienst ist in etwa 40 Minuten bei Ihnen.",
                translation: "ADAC roadside assistance, good evening. - Good evening, I urgently need help. I have a flat tyre on the A7 towards Hamburg. I am on the hard shoulder, just before the Harburg exit. - Are you uninjured? - Yes, I am fine. - Have you put up the warning triangle? - Yes, I have. - Our breakdown service will be with you in about 40 minutes.",
                vocabSupport: [
                    { word: "Richtung", translation: "direction / towards" },
                    { word: "die Ausfahrt", translation: "motorway exit" },
                    { word: "unverletzt", translation: "uninjured" }
                ],
                fillBlank: { sentence: "Der Pannendienst kommt in etwa _____ Minuten.", sentenceEN: "Breakdown service arrives in about _____ minutes.", target: "40", options: ["40", "20", "60"] },
                role: { speaker1: "Haben Sie das Warndreieck aufgestellt?", speaker1EN: "Have you set up the warning triangle?", options: ["Ja, habe ich.", "Nein, ich habe keins.", "Was ist ein Warndreieck?"], correct: 0 },
                trueFalse: { statement: "Die Person ist verletzt.", statementEN: "The person is injured.", correct: false, explanation: "Falsch: Die Person sagt 'Ja, mir geht es gut'." }
            },
            {
                id: "a2_hoer_aut_2", title: "In der Werkstatt", titleEN: "At the Car Workshop",
                script: "Guten Morgen. Mein Auto springt nicht mehr an. Ich habe es heute Nacht abschleppen lassen. - Was ist genau passiert? - Ich habe auf dem Parkplatz gestanden und wollte losfahren — aber nichts. Der Motor reagiert nicht. - Das klingt nach einem Batterieproblem. Wir schauen es sofort an. Das Ergebnis haben Sie in zwei Stunden.",
                translation: "Good morning. My car won't start anymore. I had it towed here last night. - What exactly happened? - I was in the car park and wanted to drive off — but nothing. The engine doesn't respond. - That sounds like a battery problem. We'll look at it right away. You'll have the result in two hours.",
                vocabSupport: [
                    { word: "anspringen", translation: "to start (of a car engine)" },
                    { word: "abschleppen", translation: "to tow (a vehicle)" },
                    { word: "die Batterie", translation: "battery (car)" }
                ],
                fillBlank: { sentence: "Das Ergebnis der Diagnose kommt in _____ Stunden.", sentenceEN: "The diagnostic result will come in _____ hours.", target: "zwei", options: ["zwei", "vier", "sechs"] },
                role: { speaker1: "Was könnte das Problem mit meinem Auto sein?", speaker1EN: "What could be the problem with my car?", options: ["Das klingt nach einem Batterieproblem.", "Das Öl ist leer.", "Die Bremsen sind kaputt."], correct: 0 },
                trueFalse: { statement: "Der Mechaniker braucht 24 Stunden für die Diagnose.", statementEN: "The mechanic needs 24 hours for the diagnosis.", correct: false, explanation: "Falsch: Er sagt 'Das Ergebnis haben Sie in zwei Stunden'." }
            }
        ]
    },
    umwelt: {
        title: "Umwelt & Recycling", titleEN: "Environment & Recycling", emoji: "♻️",
        warmup: {
            vocab: [
                { word: "Mülltrennung", gender: "die", translation: "waste separation", example: "Die Mülltrennung ist in Deutschland sehr wichtig.", exampleEN: "Waste separation is very important in Germany." },
                { word: "Biotonne", gender: "die", translation: "organic waste bin", example: "Essensreste kommen in die Biotonne.", exampleEN: "Food scraps go in the organic waste bin." },
                { word: "Wertstoff", gender: "der", translation: "recyclable material", example: "Plastikflaschen sind Wertstoffe und kommen in die gelbe Tonne.", exampleEN: "Plastic bottles are recyclable materials and go in the yellow bin." },
                { word: "Pfand", gender: "das", translation: "deposit (on bottles)", example: "Auf diese Flasche gibt es 25 Cent Pfand.", exampleEN: "This bottle has a 25 cent deposit." },
                { word: "Sperrmüll", gender: "der", translation: "bulky waste", example: "Den alten Sofa geben wir beim Sperrmüll ab.", exampleEN: "We are putting the old sofa out for bulky waste collection." }
            ],
            phrases: [
                { de: "Wohin kommt das Altpapier?", en: "Where does the waste paper go?" },
                { de: "Plastikflaschen gehen in die gelbe Tonne.", en: "Plastic bottles go in the yellow bin." },
                { de: "Glasflaschen bringe ich zum Glascontainer.", en: "I bring glass bottles to the glass container." },
                { de: "Wann wird der Müll abgeholt?", en: "When is the rubbish collected?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_umw_1", title: "Mülltrennung erklären", titleEN: "Explaining Waste Separation",
                script: "Entschuldigung, ich bin neu hier und bin etwas verwirrt. Wohin kommt der Müll? - Kein Problem! In Deutschland trennen wir sehr genau. Papier kommt in die blaue Tonne. Plastik, Dosen und Verpackungen kommen in die gelbe Tonne. Essensreste kommen in die braune Biotonne. Und Restmüll kommt in die schwarze Tonne. - Und Glasflaschen? - Glas bringt man zum Glascontainer um die Ecke. Pfandflaschen gibt man beim Supermarkt zurück.",
                translation: "Excuse me, I am new here and a bit confused. Where does the rubbish go? - No problem! In Germany we separate very precisely. Paper goes in the blue bin. Plastic, cans and packaging go in the yellow bin. Food scraps go in the brown organic bin. And residual waste goes in the black bin. - And glass bottles? - Glass is taken to the glass container around the corner. Deposit bottles are returned at the supermarket.",
                vocabSupport: [
                    { word: "verwirrt", translation: "confused" },
                    { word: "Verpackungen", translation: "packaging" },
                    { word: "Pfandflaschen", translation: "deposit bottles" }
                ],
                fillBlank: { sentence: "Papier kommt in die _____ Tonne.", sentenceEN: "Paper goes into the _____ bin.", target: "blaue", options: ["blaue", "gelbe", "schwarze"] },
                role: { speaker1: "Wohin kommt das Plastik?", speaker1EN: "Where does plastic go?", options: ["In die gelbe Tonne.", "In die blaue Tonne.", "In die schwarze Tonne."], correct: 0 },
                trueFalse: { statement: "Glasflaschen kommen in die blaue Tonne.", statementEN: "Glass bottles go into the blue bin.", correct: false, explanation: "Falsch: Glas bringt man zum Glascontainer, nicht in die blaue Tonne." }
            },
            {
                id: "a2_hoer_umw_2", title: "Sperrmüll anmelden", titleEN: "Registering Bulky Waste",
                script: "Ich möchte Sperrmüll anmelden. Wir haben einen alten Sofa und einen kaputten Kühlschrank. - Wie groß sind die Gegenstände? - Der Sofa ist etwa 2 Meter lang. Der Kühlschrank ist ein normaler Haushaltskühlschrank. - Gut. Der nächste Sperrmülltermin in Ihrer Straße ist am 15. November. Stellen Sie die Gegenstände am Abend vorher bis 20 Uhr auf den Gehweg. Kostet das etwas? - Nein, Sperrmüll ist für Haushalte kostenlos.",
                translation: "I would like to register bulky waste. We have an old sofa and a broken fridge. - How big are the items? - The sofa is about 2 metres long. The fridge is a normal household fridge. - Good. The next bulky waste collection in your street is on November 15th. Place the items on the pavement by 8 PM the evening before. Does it cost anything? - No, bulky waste collection is free for households.",
                vocabSupport: [
                    { word: "der Sperrmüll", translation: "bulky waste" },
                    { word: "der Gehweg", translation: "pavement / footpath" },
                    { word: "der Kühlschrank", translation: "fridge / refrigerator" }
                ],
                fillBlank: { sentence: "Der Sperrmüll soll bis _____ Uhr rausgestellt werden.", sentenceEN: "Bulky waste should be placed outside by _____ o'clock.", target: "20", options: ["20", "18", "22"] },
                role: { speaker1: "Kostet der Sperrmüll etwas?", speaker1EN: "Does bulky waste collection cost anything?", options: ["Nein, für Haushalte ist es kostenlos.", "Ja, 30 Euro.", "Ja, je nach Gewicht."], correct: 0 },
                trueFalse: { statement: "Der Sperrmülltermin ist am 15. Dezember.", statementEN: "The bulky waste date is on December 15th.", correct: false, explanation: "Falsch: Der Termin ist am 15. November." }
            }
        ]
    },
    gesundheit: {
        title: "Gesundheit & Ernährung", titleEN: "Health & Nutrition", emoji: "🥗",
        warmup: {
            vocab: [
                { word: "Ernährungsberatung", gender: "die", translation: "nutritional counselling", example: "Ich gehe zur Ernährungsberatung, weil ich abnehmen möchte.", exampleEN: "I go to nutritional counselling because I want to lose weight." },
                { word: "Blutdruck", gender: "der", translation: "blood pressure", example: "Mein Blutdruck ist zu hoch.", exampleEN: "My blood pressure is too high." },
                { word: "Schlafmangel", gender: "der", translation: "lack of sleep", example: "Schlafmangel kann zu Konzentrationsproblemen führen.", exampleEN: "Lack of sleep can lead to concentration problems." },
                { word: "Vorsorgeuntersuchung", gender: "die", translation: "preventive health checkup", example: "Die Vorsorgeuntersuchung beim Arzt ist sehr wichtig.", exampleEN: "The preventive health checkup at the doctor is very important." },
                { word: "Blutuntersuchung", gender: "die", translation: "blood test", example: "Der Arzt hat eine Blutuntersuchung angeordnet.", exampleEN: "The doctor ordered a blood test." }
            ],
            phrases: [
                { de: "Ich fühle mich in letzter Zeit sehr müde und erschöpft.", en: "I have been feeling very tired and exhausted lately." },
                { de: "Mein Arzt empfiehlt mir, weniger Zucker zu essen.", en: "My doctor recommends that I eat less sugar." },
                { de: "Ich möchte meine Ernährung umstellen.", en: "I would like to change my diet." },
                { de: "Welche Lebensmittel sind gut für das Herz?", en: "Which foods are good for the heart?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_ges_1", title: "Beim Ernährungsberater", titleEN: "At the Nutritional Counsellor",
                script: "Guten Tag, Frau Sánchez. Was ist Ihr Ziel? - Ich möchte abnehmen und mich gesünder ernähren. Ich esse zu viel Fast Food und kaum Gemüse. - Wie viel Wasser trinken Sie täglich? - Höchstens einen halben Liter. - Das ist viel zu wenig. Wir sollten mindestens zwei Liter pro Tag trinken. Ich empfehle Ihnen, viel mehr Wasser, Obst und Gemüse in Ihren Alltag zu integrieren.",
                translation: "Good day, Ms. Sánchez. What is your goal? - I would like to lose weight and eat more healthily. I eat too much fast food and hardly any vegetables. - How much water do you drink daily? - At most half a litre. - That is far too little. We should drink at least two litres per day. I recommend you integrate much more water, fruit and vegetables into your daily life.",
                vocabSupport: [
                    { word: "abnehmen", translation: "to lose weight" },
                    { word: "sich ernähren", translation: "to eat / nourish oneself" },
                    { word: "integrieren", translation: "to integrate / incorporate" }
                ],
                fillBlank: { sentence: "Man soll mindestens _____ Liter Wasser pro Tag trinken.", sentenceEN: "One should drink at least _____ litres of water per day.", target: "zwei", options: ["zwei", "einen", "drei"] },
                role: { speaker1: "Was ist Ihr Ernährungsziel?", speaker1EN: "What is your dietary goal?", options: ["Ich möchte abnehmen und mich gesünder ernähren.", "Ich will mehr Fast Food essen.", "Ich möchte Sport machen."], correct: 0 },
                trueFalse: { statement: "Frau Sánchez trinkt täglich zwei Liter Wasser.", statementEN: "Ms. Sánchez drinks two litres of water daily.", correct: false, explanation: "Falsch: Sie sagt 'Höchstens einen halben Liter'." }
            },
            {
                id: "a2_hoer_ges_2", title: "Beim Hausarzt: Erschöpfung", titleEN: "At the GP: Exhaustion",
                script: "Guten Tag, Herr Fischer. Was führt Sie zu mir? - Ich fühle mich seit Wochen sehr müde und habe Schlafprobleme. Ich kann abends nicht einschlafen und wache nachts oft auf. - Haben Sie viel Stress bei der Arbeit? - Ja, sehr viel. Ich arbeite manchmal bis Mitternacht. - Das erklärt viel. Ich ordne eine Blutuntersuchung an und empfehle Ihnen, mehr Bewegung und weniger Bildschirmzeit vor dem Schlafen.",
                translation: "Good day, Mr. Fischer. What brings you to me? - I have been feeling very tired for weeks and have sleep problems. I cannot fall asleep in the evenings and often wake up at night. - Do you have a lot of stress at work? - Yes, very much. I sometimes work until midnight. - That explains a lot. I am ordering a blood test and recommend more exercise and less screen time before sleeping.",
                vocabSupport: [
                    { word: "einschlafen", translation: "to fall asleep" },
                    { word: "der Schlaf-Wach-Rhythmus", translation: "sleep-wake cycle" },
                    { word: "die Bildschirmzeit", translation: "screen time" }
                ],
                fillBlank: { sentence: "Der Arzt ordnet eine _____ an.", sentenceEN: "The doctor orders a _____.", target: "Blutuntersuchung", options: ["Blutuntersuchung", "Röntgenaufnahme", "Physiotherapie"] },
                role: { speaker1: "Was kann mir bei den Schlafproblemen helfen?", speaker1EN: "What can help me with sleep problems?", options: ["Mehr Bewegung und weniger Bildschirmzeit vor dem Schlafen.", "Mehr Kaffee trinken.", "Früher aufstehen."], correct: 0 },
                trueFalse: { statement: "Herr Fischer schläft abends sehr gut.", statementEN: "Mr. Fischer sleeps very well in the evening.", correct: false, explanation: "Falsch: Er sagt 'Ich kann abends nicht einschlafen'." }
            }
        ]
    },
    stadtfuehrung: {
        title: "Stadtführung & Sehenswürdigkeiten", titleEN: "City Tour & Tourist Sights", emoji: "🗺️",
        warmup: {
            vocab: [
                { word: "Stadtführung", gender: "die", translation: "city tour / guided city tour", example: "Wir machen morgen eine Stadtführung durch die Altstadt.", exampleEN: "We are going on a city tour through the old town tomorrow." },
                { word: "Sehenswürdigkeit", gender: "die", translation: "tourist attraction / sight", example: "Der Dom ist die wichtigste Sehenswürdigkeit der Stadt.", exampleEN: "The cathedral is the most important sight in the city." },
                { word: "Eintrittskarte", gender: "die", translation: "admission ticket", example: "Für das Museum braucht man eine Eintrittskarte.", exampleEN: "You need an admission ticket for the museum." },
                { word: "Denkmal", gender: "das", translation: "monument / memorial", example: "Das Denkmal wurde 1870 errichtet.", exampleEN: "The monument was erected in 1870." },
                { word: "Stadtplan", gender: "der", translation: "city map", example: "Hast du einen Stadtplan dabei?", exampleEN: "Do you have a city map with you?" }
            ],
            phrases: [
                { de: "Wie viel kostet die Eintrittskarte für das Museum?", en: "How much does the admission ticket for the museum cost?" },
                { de: "Gibt es eine Führung auf Englisch?", en: "Is there a guided tour in English?" },
                { de: "Wo ist der Hauptbahnhof von hier aus?", en: "Where is the main station from here?" },
                { de: "Wann öffnet das Museum?", en: "When does the museum open?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_sta_1", title: "An der Touristen-Information", titleEN: "At the Tourist Information Office",
                script: "Guten Tag! Wir sind zum ersten Mal in Köln und wissen nicht, wo wir anfangen sollen. - Herzlich willkommen! Ich empfehle Ihnen zuerst den Kölner Dom — er ist weltberühmt und nur fünf Minuten zu Fuß vom Bahnhof. - Ist der Eintritt frei? - Ja, der Dom selbst ist kostenlos. Wenn Sie den Turm besteigen möchten, kostet das 6 Euro pro Person. - Gibt es auch eine Stadtführung? - Ja, täglich um 11 Uhr auf Deutsch und um 14 Uhr auf Englisch. Treffpunkt ist am Domplatz.",
                translation: "Good day! We are in Cologne for the first time and don't know where to start. - Welcome! I recommend you first see Cologne Cathedral — it is world-famous and only five minutes on foot from the station. - Is the entry free? - Yes, the cathedral itself is free. If you want to climb the tower it costs 6 euros per person. - Is there also a city tour? - Yes, daily at 11 AM in German and at 2 PM in English. Meeting point is at Cathedral Square.",
                vocabSupport: [
                    { word: "weltberühmt", translation: "world-famous" },
                    { word: "besteigen", translation: "to climb / ascend" },
                    { word: "der Treffpunkt", translation: "meeting point" }
                ],
                fillBlank: { sentence: "Der Turm des Doms kostet _____ Euro pro Person.", sentenceEN: "The cathedral tower costs _____ euros per person.", target: "6", options: ["6", "10", "15"] },
                role: { speaker1: "Was empfehlen Sie uns in Köln?", speaker1EN: "What do you recommend to us in Cologne?", options: ["Zuerst den Kölner Dom — er ist weltberühmt.", "Das Rathaus.", "Den Zoo."], correct: 0 },
                trueFalse: { statement: "Die englische Stadtführung beginnt um 11 Uhr.", statementEN: "The English city tour starts at 11 AM.", correct: false, explanation: "Falsch: Die englische Führung ist um 14 Uhr, die deutsche um 11 Uhr." }
            },
            {
                id: "a2_hoer_sta_2", title: "Im Museum", titleEN: "At the Museum",
                script: "Guten Tag, drei Erwachsene bitte. - Das macht zusammen 27 Euro. Haben Sie eine Museumskarte? Mit der Museumscard bekommen Sie 20% Rabatt. - Nein, leider nicht. Gibt es auch eine Audioführung? - Ja, Audioguides können Sie am Eingang für 3 Euro pro Stück ausleihen. - Und wo ist die Garderobe? - Die Garderobe ist links neben dem Eingang. Taschen über A4-Größe müssen abgegeben werden.",
                translation: "Good day, three adults please. - That is 27 euros in total. Do you have a museum card? With the museum card you get a 20% discount. - No, unfortunately not. Is there also an audio guide? - Yes, audio guides can be borrowed at the entrance for 3 euros each. - And where is the cloakroom? - The cloakroom is on the left next to the entrance. Bags larger than A4 size must be checked in.",
                vocabSupport: [
                    { word: "der Audioguide", translation: "audio guide" },
                    { word: "die Garderobe", translation: "cloakroom / coat check" },
                    { word: "ausleihen", translation: "to borrow / hire" }
                ],
                fillBlank: { sentence: "Ein Audioguide kostet _____ Euro.", sentenceEN: "An audio guide costs _____ euros.", target: "3", options: ["3", "5", "10"] },
                role: { speaker1: "Wo kann ich meinen Rucksack abgeben?", speaker1EN: "Where can I check in my backpack?", options: ["An der Garderobe links neben dem Eingang.", "Beim Kassierer.", "Es gibt keine Garderobe."], correct: 0 },
                trueFalse: { statement: "Alle Taschen müssen abgegeben werden.", statementEN: "All bags must be checked in.", correct: false, explanation: "Falsch: Nur Taschen über A4-Größe müssen abgegeben werden." }
            }
        ]
    },
    onlineshopping: {
        title: "Online-Shopping & Retouren", titleEN: "Online Shopping & Returns", emoji: "🛍️",
        warmup: {
            vocab: [
                { word: "Retoure", gender: "die", translation: "return (of goods)", example: "Ich schicke das Paket als Retoure zurück.", exampleEN: "I am sending the parcel back as a return." },
                { word: "Rückerstattung", gender: "die", translation: "refund", example: "Die Rückerstattung erfolgt innerhalb von 14 Tagen.", exampleEN: "The refund will be processed within 14 days." },
                { word: "Lieferzeit", gender: "die", translation: "delivery time", example: "Die Lieferzeit beträgt zwei bis drei Werktage.", exampleEN: "The delivery time is two to three working days." },
                { word: "Sendungsverfolgung", gender: "die", translation: "parcel tracking", example: "Mit der Sendungsverfolgung kann man das Paket verfolgen.", exampleEN: "With parcel tracking you can track the package." },
                { word: "defekt", gender: "—", translation: "faulty / broken", example: "Das Gerät war beim Auspacken schon defekt.", exampleEN: "The device was already broken when I unpacked it." }
            ],
            phrases: [
                { de: "Ich möchte eine Bestellung reklamieren.", en: "I would like to make a complaint about an order." },
                { de: "Die Ware ist beschädigt angekommen.", en: "The goods arrived damaged." },
                { de: "Wann bekomme ich meine Rückerstattung?", en: "When will I receive my refund?" },
                { de: "Wie lange dauert die Rücksendung?", en: "How long does the return take?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_ons_1", title: "Defektes Produkt zurückschicken", titleEN: "Returning a Faulty Product",
                script: "Guten Tag, Kundenservice von TechShop. Was kann ich für Sie tun? - Ich habe letzte Woche einen Bluetooth-Lautsprecher bestellt, aber er funktioniert nicht. Er lädt nicht auf und gibt keinen Ton. - Das tut mir leid. Haben Sie bereits versucht, ihn zurückzusetzen? - Ja, mehrfach. - Dann schicken wir Ihnen ein kostenloses Rücksendeetikett. Schicken Sie das Gerät zurück und Sie bekommen innerhalb von 5 Werktagen ein Ersatzgerät oder eine Rückerstattung.",
                translation: "Good day, TechShop customer service. What can I do for you? - I ordered a Bluetooth speaker last week but it doesn't work. It doesn't charge and makes no sound. - I am sorry about that. Have you already tried resetting it? - Yes, several times. - Then we will send you a free return label. Send the device back and within 5 working days you will receive a replacement or a refund.",
                vocabSupport: [
                    { word: "der Lautsprecher", translation: "speaker / loudspeaker" },
                    { word: "zurücksetzen", translation: "to reset" },
                    { word: "das Ersatzgerät", translation: "replacement device" }
                ],
                fillBlank: { sentence: "Das Ersatzgerät oder die Rückerstattung kommt innerhalb von _____ Werktagen.", sentenceEN: "The replacement device or refund arrives within _____ working days.", target: "5", options: ["5", "14", "30"] },
                role: { speaker1: "Was soll ich mit dem defekten Gerät machen?", speaker1EN: "What should I do with the defective device?", options: ["Zurückschicken mit dem kostenlosen Rücksendeetikett.", "Es selbst reparieren.", "Im Laden abgeben."], correct: 0 },
                trueFalse: { statement: "Der Lautsprecher funktioniert nach dem Zurücksetzen.", statementEN: "The speaker works after resetting.", correct: false, explanation: "Falsch: Der Kunde hat es mehrfach zurückgesetzt — es funktioniert noch immer nicht." }
            },
            {
                id: "a2_hoer_ons_2", title: "Lieferung nicht angekommen", titleEN: "Delivery Not Arrived",
                script: "Guten Tag, ich warte seit zehn Tagen auf mein Paket und es ist noch nicht angekommen. - Können Sie mir Ihre Bestellnummer geben? - Ja, es ist Nummer DE-44782-9. - Ich sehe, dass das Paket im Verteilerzentrum liegt und nicht weitergeleitet wurde. Das war ein Fehler unsererseits. Wir senden Ihnen das Paket sofort erneut zu — kostenlos, mit Expresslieferung.",
                translation: "Good day, I have been waiting ten days for my parcel and it still hasn't arrived. - Can you give me your order number? - Yes, it is number DE-44782-9. - I can see that the parcel is in the sorting centre and was not forwarded. That was an error on our part. We will send you the parcel again immediately — free of charge, with express delivery.",
                vocabSupport: [
                    { word: "das Verteilerzentrum", translation: "sorting / distribution centre" },
                    { word: "weiterleiten", translation: "to forward / redirect" },
                    { word: "die Expresslieferung", translation: "express delivery" }
                ],
                fillBlank: { sentence: "Das Paket liegt im _____.", sentenceEN: "The parcel is in the _____.", target: "Verteilerzentrum", options: ["Verteilerzentrum", "Supermarkt", "Postamt"] },
                role: { speaker1: "Was ist mit meinem Paket passiert?", speaker1EN: "What happened to my package?", options: ["Es liegt im Verteilerzentrum und wurde nicht weitergeleitet.", "Es wurde gestohlen.", "Es wurde falsch adressiert."], correct: 0 },
                trueFalse: { statement: "Der Fehler liegt beim Kunden.", statementEN: "The mistake was on the customer's part.", correct: false, explanation: "Falsch: Der Mitarbeiter sagt 'Das war ein Fehler unsererseits'." }
            }
        ]
    },
    wohngemeinschaft: {
        title: "Wohngemeinschaft & Nachbarn", titleEN: "Shared Flat & Neighbours", emoji: "🏘️",
        warmup: {
            vocab: [
                { word: "Wohngemeinschaft (WG)", gender: "die", translation: "shared flat / house share", example: "Ich wohne in einer Wohngemeinschaft mit drei anderen Studenten.", exampleEN: "I live in a shared flat with three other students." },
                { word: "Hausordnung", gender: "die", translation: "house rules", example: "Die Hausordnung verbietet laute Musik nach 22 Uhr.", exampleEN: "The house rules forbid loud music after 10 PM." },
                { word: "Nebenkosten", gender: "die (Pl.)", translation: "utility costs / service charges", example: "Die Nebenkosten für Strom und Heizung teilen wir uns.", exampleEN: "We share the utility costs for electricity and heating." },
                { word: "Untermieter", gender: "der", translation: "subtenant / lodger", example: "Wir suchen einen neuen Untermieter für das freie Zimmer.", exampleEN: "We are looking for a new subtenant for the free room." },
                { word: "Hausmeister", gender: "der", translation: "caretaker / building manager", example: "Ich habe den Hausmeister wegen des defekten Aufzugs angerufen.", exampleEN: "I called the caretaker about the broken lift." }
            ],
            phrases: [
                { de: "Wir haben eine WG-Vereinbarung über die Haushaltsregeln.", en: "We have a flatshare agreement about household rules." },
                { de: "Mein Nachbar macht nachts sehr viel Lärm.", en: "My neighbour makes a lot of noise at night." },
                { de: "Können wir die Haushaltskosten gleichmäßig aufteilen?", en: "Can we split the household costs equally?" },
                { de: "Es tut mir leid, ich war etwas laut gestern Abend.", en: "I am sorry, I was a bit loud yesterday evening." }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_wg_1", title: "WG-Zimmer besichtigen", titleEN: "Viewing a Room in a Shared Flat",
                script: "Hallo, ich bin Tim. Schön, dass du dir das Zimmer anschaust. - Hallo Tim, ich bin Sara. Das Zimmer sieht sehr schön aus. Wie hoch ist die Miete? - Das Zimmer kostet 450 Euro warm, inklusive Internet und allen Nebenkosten. - Super. Wie viele Personen wohnen noch in der WG? - Wir sind momentan zu zweit, ich und meine Mitbewohnerin Mia. Wir suchen jemanden, der ordentlich ist. - Das klingt gut. Wann könnte ich einziehen?",
                translation: "Hello, I am Tim. Great that you are looking at the room. - Hello Tim, I am Sara. The room looks very nice. How high is the rent? - The room costs 450 euros warm, including internet and all utilities. - Great. How many people live in the shared flat? - We are currently two of us, me and my flatmate Mia. We are looking for someone who is tidy. - That sounds good. When could I move in?",
                vocabSupport: [
                    { word: "der Gemeinschaftsbereich", translation: "communal area" },
                    { word: "einziehen", translation: "to move in" },
                    { word: "ordentlich", translation: "tidy / neat" }
                ],
                fillBlank: { sentence: "Die Miete beträgt _____ Euro warm.", sentenceEN: "The rent is _____ euros warm (including utilities).", target: "450", options: ["450", "500", "400"] },
                role: { speaker1: "Was sucht ihr in einem Mitbewohner?", speaker1EN: "What are you looking for in a flatmate?", options: ["Jemanden, der ordentlich ist.", "Jemanden, der viel kocht.", "Jemanden mit einem Auto."], correct: 0 },
                trueFalse: { statement: "In der WG wohnen momentan drei Personen.", statementEN: "Currently three people live in the flatshare.", correct: false, explanation: "Falsch: Tim sagt 'Wir sind momentan zu zweit'." }
            },
            {
                id: "a2_hoer_wg_2", title: "Lärmbeschwerden beim Nachbarn", titleEN: "Noise Complaint to the Neighbour",
                script: "Entschuldigung, ich bin Ihre Nachbarin aus der Wohnung darunter. Die Musik in der letzten Nacht war sehr laut. Ich konnte nicht schlafen. - Oh, das tut mir sehr leid! Wir hatten einen Freund zu Besuch und haben nicht auf die Uhrzeit geachtet. Das passiert nicht wieder. - Danke. Die Hausordnung erlaubt Musik nur bis 22 Uhr. - Das wusste ich nicht genau. Ich entschuldige mich nochmals.",
                translation: "Excuse me, I am your neighbour from the flat below. The music last night was very loud. I couldn't sleep. - Oh, I am very sorry! We had a friend visiting and didn't pay attention to the time. That won't happen again. - Thank you. The house rules allow music only until 10 PM. - I didn't know that exactly. I apologise again.",
                vocabSupport: [
                    { word: "auf die Uhrzeit achten", translation: "to pay attention to the time" },
                    { word: "die Hausordnung", translation: "house rules" },
                    { word: "sich entschuldigen", translation: "to apologise" }
                ],
                fillBlank: { sentence: "Musik ist laut Hausordnung nur bis _____ Uhr erlaubt.", sentenceEN: "According to house rules, music is only allowed until _____ o'clock.", target: "22", options: ["22", "23", "24"] },
                role: { speaker1: "Warum haben Sie mich nachts geweckt?", speaker1EN: "Why did you wake me up at night?", options: ["Die Musik war sehr laut und ich konnte nicht schlafen.", "Der Hund hat gebellt.", "Die Heizung war zu laut."], correct: 0 },
                trueFalse: { statement: "Der Nachbar entschuldigt sich nicht.", statementEN: "The neighbour does not apologise.", correct: false, explanation: "Falsch: Er sagt 'Das tut mir sehr leid' und 'Ich entschuldige mich nochmals'." }
            }
        ]
    },
    kita: {
        title: "Kinderbetreuung & Kita", titleEN: "Childcare & Kindergarten", emoji: "👶",
        warmup: {
            vocab: [
                { word: "Kita / Kindertagesstätte", gender: "die", translation: "daycare centre / nursery", example: "Meine Tochter geht seit September in die Kita.", exampleEN: "My daughter has been going to daycare since September." },
                { word: "Betreuungsplatz", gender: "der", translation: "childcare place", example: "Es ist sehr schwer, in Berlin einen Betreuungsplatz zu finden.", exampleEN: "It is very difficult to find a childcare place in Berlin." },
                { word: "Eingewöhnung", gender: "die", translation: "settling-in period", example: "Die Eingewöhnung in der Kita dauert etwa zwei Wochen.", exampleEN: "The settling-in period at the nursery takes about two weeks." },
                { word: "Kitabeitrag", gender: "der", translation: "nursery fee / contribution", example: "Der Kitabeitrag ist einkommensabhängig.", exampleEN: "The nursery fee depends on income." },
                { word: "Erzieherin", gender: "die", translation: "nursery teacher / educator (female)", example: "Die Erzieherin kennt alle Kinder beim Namen.", exampleEN: "The nursery teacher knows all the children by name." }
            ],
            phrases: [
                { de: "Ich suche einen Betreuungsplatz für mein Kind.", en: "I am looking for a childcare place for my child." },
                { de: "Ab welchem Alter nehmen Sie Kinder auf?", en: "From what age do you accept children?" },
                { de: "Wie lange dauert die Eingewöhnungsphase?", en: "How long does the settling-in phase last?" },
                { de: "Wie viel kostet der Kitabeitrag?", en: "How much does the nursery fee cost?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_kit_1", title: "Kita-Anmeldung", titleEN: "Registering at the Nursery",
                script: "Guten Tag, Kita Sonnenschein. - Guten Tag, mein Name ist Nguyen. Ich suche einen Betreuungsplatz für meine Tochter. Sie ist 18 Monate alt. - Schön. Wir nehmen Kinder ab 12 Monaten auf. Wann würden Sie einen Platz benötigen? - Ab September nächsten Jahres. - Das ist gut zu hören, weil unsere Warteliste dann noch nicht so lang ist. Kommen Sie am besten nächste Woche zur Besichtigung vorbei.",
                translation: "Good day, Kita Sonnenschein. - Good day, my name is Nguyen. I am looking for a childcare place for my daughter. She is 18 months old. - Great. We accept children from 12 months old. When would you need a place? - From September next year. - That is good to hear because our waiting list will not be so long then. It is best if you come in next week for a visit.",
                vocabSupport: [
                    { word: "die Warteliste", translation: "waiting list" },
                    { word: "aufnehmen", translation: "to accept / enrol (a child)" },
                    { word: "die Besichtigung", translation: "visit / viewing" }
                ],
                fillBlank: { sentence: "Die Kita nimmt Kinder ab _____ Monaten auf.", sentenceEN: "The daycare accepts children from _____ months old.", target: "12", options: ["12", "6", "24"] },
                role: { speaker1: "Wie alt muss das Kind für die Kita sein?", speaker1EN: "How old must the child be for daycare?", options: ["Mindestens 12 Monate alt.", "Mindestens 2 Jahre.", "Ab 3 Jahren."], correct: 0 },
                trueFalse: { statement: "Frau Nguyen braucht den Platz sofort.", statementEN: "Ms. Nguyen needs the spot immediately.", correct: false, explanation: "Falsch: Sie sagt 'Ab September nächsten Jahres'." }
            },
            {
                id: "a2_hoer_kit_2", title: "Gespräch mit der Erzieherin", titleEN: "Conversation with the Nursery Teacher",
                script: "Frau Keller, ich mache mir etwas Sorgen um meinen Sohn Max. Er spielt nicht mit den anderen Kindern. - Ich habe das auch bemerkt. Max ist ein sehr ruhiges Kind. Er braucht mehr Zeit, um Vertrauen aufzubauen. Aber er macht große Fortschritte! Letzte Woche hat er mit zwei Kindern zusammen ein Puzzle gemacht. - Das ist schön zu hören. - Machen Sie sich keine Sorgen. Jedes Kind hat sein eigenes Tempo.",
                translation: "Ms. Keller, I am a bit worried about my son Max. He doesn't play with the other children. - I have noticed that too. Max is a very quiet child. He needs more time to build trust. But he is making great progress! Last week he did a puzzle together with two children. - That is nice to hear. - Don't worry. Every child has their own pace.",
                vocabSupport: [
                    { word: "Vertrauen aufbauen", translation: "to build trust" },
                    { word: "Fortschritte machen", translation: "to make progress" },
                    { word: "das Tempo", translation: "pace / speed" }
                ],
                fillBlank: { sentence: "Max hat letzte Woche mit _____ Kindern ein Puzzle gemacht.", sentenceEN: "Last week Max did a puzzle with _____ children.", target: "zwei", options: ["zwei", "drei", "keinen"] },
                role: { speaker1: "Ich mache mir Sorgen, weil mein Sohn nicht mit anderen spielt.", speaker1EN: "I am worried because my son does not play with others.", options: ["Er braucht mehr Zeit, aber macht Fortschritte.", "Das ist ein großes Problem.", "Sie sollten einen Arzt aufsuchen."], correct: 0 },
                trueFalse: { statement: "Die Erzieherin hat nichts bemerkt.", statementEN: "The educator did not notice anything.", correct: false, explanation: "Falsch: Sie sagt 'Ich habe das auch bemerkt'." }
            }
        ]
    },
    sportverein: {
        title: "Sportverein & Mitgliedschaft", titleEN: "Sports Club & Membership", emoji: "⚽",
        warmup: {
            vocab: [
                { word: "Mitgliedschaft", gender: "die", translation: "membership", example: "Eine Mitgliedschaft im Sportverein kostet 50 Euro im Monat.", exampleEN: "A membership at the sports club costs 50 euros per month." },
                { word: "Beitrag", gender: "der", translation: "membership fee / contribution", example: "Den monatlichen Beitrag zahle ich per Lastschrift.", exampleEN: "I pay the monthly fee by direct debit." },
                { word: "Trainingszeiten", gender: "die (Pl.)", translation: "training times", example: "Die Trainingszeiten sind dienstags und donnerstags von 19 bis 21 Uhr.", exampleEN: "Training times are Tuesdays and Thursdays from 7 to 9 PM." },
                { word: "Schnupperkurs", gender: "der", translation: "taster course / trial session", example: "Darf ich erst einen Schnupperkurs machen, bevor ich Mitglied werde?", exampleEN: "May I do a taster session first before becoming a member?" },
                { word: "kündigen", gender: "—", translation: "to cancel / terminate", example: "Ich möchte meine Mitgliedschaft zum Monatsende kündigen.", exampleEN: "I would like to cancel my membership at the end of the month." }
            ],
            phrases: [
                { de: "Ich interessiere mich für eine Mitgliedschaft im Fußballverein.", en: "I am interested in a membership at the football club." },
                { de: "Gibt es einen Probetraining-Termin?", en: "Is there a trial training date?" },
                { de: "Wie oft trainiert die Mannschaft pro Woche?", en: "How often does the team train per week?" },
                { de: "Ab wann bin ich spielberechtigt?", en: "From when am I eligible to play?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_spo_1", title: "Im Sportverein anmelden", titleEN: "Registering at the Sports Club",
                script: "Guten Tag, ich möchte gerne Mitglied beim TSV werden. Ich spiele seit Jahren Fußball. - Herzlich willkommen! Wir haben eine Hobbymannschaft und eine Wettkampfmannschaft. Welche interessiert Sie? - Die Hobbymannschaft, weil ich nur zum Spaß spielen möchte. - Wir trainieren jeden Mittwoch um 19 Uhr. Der monatliche Beitrag beträgt 20 Euro. - Kann ich vorher einen Schnupperkurs machen? - Natürlich, kommen Sie einfach nächsten Mittwoch vorbei.",
                translation: "Good day, I would like to become a member of the TSV. I have been playing football for years. - Welcome! We have a recreational team and a competitive team. Which one interests you? - The recreational team, because I just want to play for fun. - We train every Wednesday at 7 PM. The monthly fee is 20 euros. - Can I do a trial session first? - Of course, just come along next Wednesday.",
                vocabSupport: [
                    { word: "die Wettkampfmannschaft", translation: "competitive team" },
                    { word: "die Hobbymannschaft", translation: "recreational / social team" },
                    { word: "zum Spaß", translation: "for fun" }
                ],
                fillBlank: { sentence: "Der monatliche Beitrag beträgt _____ Euro.", sentenceEN: "The monthly membership fee is _____ euros.", target: "20", options: ["20", "50", "100"] },
                role: { speaker1: "Welche Mannschaft möchten Sie beitreten?", speaker1EN: "Which team would you like to join?", options: ["Die Hobbymannschaft, weil ich zum Spaß spielen möchte.", "Die Profimannschaft.", "Ich bin mir noch nicht sicher."], correct: 0 },
                trueFalse: { statement: "Das Training findet jeden Dienstag statt.", statementEN: "The training takes place every Tuesday.", correct: false, explanation: "Falsch: Das Training ist jeden Mittwoch um 19 Uhr." }
            },
            {
                id: "a2_hoer_spo_2", title: "Mitgliedschaft kündigen", titleEN: "Cancelling a Membership",
                script: "Hallo, ich möchte leider meine Mitgliedschaft kündigen. Ich ziehe nächsten Monat in eine andere Stadt. - Das ist sehr schade! Wann möchten Sie kündigen? - Zum Ende dieses Monats, wenn möglich. - Die Kündigungsfrist beträgt vier Wochen. Das heißt, Sie können zum Ende nächsten Monats kündigen. - Das wäre auch in Ordnung. Was muss ich tun? - Füllen Sie bitte dieses Formular aus und geben Sie es am Empfang ab.",
                translation: "Hello, I would unfortunately like to cancel my membership. I am moving to another city next month. - That is a great pity! When would you like to cancel? - At the end of this month, if possible. - The notice period is four weeks. That means you can cancel at the end of next month. - That would also be fine. What do I need to do? - Please fill in this form and hand it in at reception.",
                vocabSupport: [
                    { word: "die Kündigungsfrist", translation: "notice period" },
                    { word: "der Empfang", translation: "reception" },
                    { word: "abgeben", translation: "to hand in / submit" }
                ],
                fillBlank: { sentence: "Die Kündigungsfrist beträgt _____ Wochen.", sentenceEN: "The cancellation notice period is _____ weeks.", target: "vier", options: ["vier", "zwei", "acht"] },
                role: { speaker1: "Wie kann ich meine Mitgliedschaft kündigen?", speaker1EN: "How can I cancel my membership?", options: ["Das Formular ausfüllen und am Empfang abgeben.", "Per E-Mail.", "Nur persönlich beim Vorstand."], correct: 0 },
                trueFalse: { statement: "Die Person kann sofort zum Ende dieses Monats kündigen.", statementEN: "The person can cancel immediately by the end of this month.", correct: false, explanation: "Falsch: Die Kündigungsfrist beträgt vier Wochen, also Ende nächsten Monats." }
            }
        ]
    },
    bank: {
        title: "Bank & Kredit", titleEN: "Bank & Credit", emoji: "🏦",
        warmup: {
            vocab: [
                { word: "Girokonto", gender: "das", translation: "current account / checking account", example: "Ich möchte ein Girokonto bei Ihrer Bank eröffnen.", exampleEN: "I would like to open a current account at your bank." },
                { word: "Überweisung", gender: "die", translation: "bank transfer", example: "Ich habe die Miete per Überweisung bezahlt.", exampleEN: "I paid the rent by bank transfer." },
                { word: "Dauerauftrag", gender: "der", translation: "standing order", example: "Ich habe einen Dauerauftrag für die Miete eingerichtet.", exampleEN: "I have set up a standing order for the rent." },
                { word: "Kredit", gender: "der", translation: "loan / credit", example: "Ich möchte einen Kredit für ein neues Auto aufnehmen.", exampleEN: "I would like to take out a loan for a new car." },
                { word: "Zinssatz", gender: "der", translation: "interest rate", example: "Der Zinssatz für diesen Kredit beträgt 4,9% pro Jahr.", exampleEN: "The interest rate for this loan is 4.9% per year." }
            ],
            phrases: [
                { de: "Ich möchte ein Konto eröffnen.", en: "I would like to open an account." },
                { de: "Wie lange dauert die Überweisung?", en: "How long does the transfer take?" },
                { de: "Ich möchte einen Kredit von 5.000 Euro beantragen.", en: "I would like to apply for a loan of 5,000 euros." },
                { de: "Was sind die monatlichen Raten?", en: "What are the monthly instalments?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_ban_1", title: "Konto eröffnen", titleEN: "Opening a Bank Account",
                script: "Guten Tag, ich möchte ein Girokonto eröffnen. Ich wohne seit drei Monaten hier und habe gerade eine Arbeitsstelle angetreten. - Herzlich willkommen. Haben Sie Ihren Reisepass dabei? - Ja, den habe ich. - Und haben Sie Ihre Meldebescheinigung? - Ja, die habe ich auch. - Sehr gut. Das Konto kann ich sofort anlegen. Möchten Sie auch eine EC-Karte und eine Kreditkarte? - Nur die EC-Karte, bitte.",
                translation: "Good day, I would like to open a current account. I have been living here for three months and have just started a job. - Welcome. Do you have your passport with you? - Yes, I have it. - And do you have your registration certificate? - Yes, I have that too. - Very good. I can create the account right away. Would you also like a debit card and a credit card? - Just the debit card please.",
                vocabSupport: [
                    { word: "die Meldebescheinigung", translation: "registration certificate (of residence)" },
                    { word: "die EC-Karte", translation: "debit card" },
                    { word: "anlegen", translation: "to create / set up (an account)" }
                ],
                fillBlank: { sentence: "Die Person möchte nur die _____ haben.", sentenceEN: "The person only wants to have the _____.", target: "EC-Karte", options: ["EC-Karte", "Kreditkarte", "Bankkarte"] },
                role: { speaker1: "Welche Dokumente brauche ich für ein Konto?", speaker1EN: "Which documents do I need for a bank account?", options: ["Reisepass und Meldebescheinigung.", "Nur den Reisepass.", "Arbeitsvertrag und Reisepass."], correct: 0 },
                trueFalse: { statement: "Die Person möchte auch eine Kreditkarte.", statementEN: "The person also wants a credit card.", correct: false, explanation: "Falsch: Sie sagt 'Nur die EC-Karte, bitte'." }
            },
            {
                id: "a2_hoer_ban_2", title: "Kredit beantragen", titleEN: "Applying for a Loan",
                script: "Ich möchte einen Kredit aufnehmen — etwa 8.000 Euro für eine neue Küche. - Wie lange möchten Sie den Kredit laufen lassen? - Am liebsten 36 Monate. - Bei 36 Monaten wäre die monatliche Rate circa 240 Euro, bei einem Zinssatz von 4,9% pro Jahr. - Was brauche ich für den Antrag? - Ihre letzten drei Gehaltsabrechnungen, einen Wohnsitznachweis und einen gültigen Ausweis.",
                translation: "I would like to take out a loan — about 8,000 euros for a new kitchen. - For how long would you like the loan to run? - Ideally 36 months. - With 36 months the monthly instalment would be approximately 240 euros, at an interest rate of 4.9% per year. - What do I need for the application? - Your last three payslips, proof of residence and a valid ID.",
                vocabSupport: [
                    { word: "der Zinssatz", translation: "interest rate" },
                    { word: "die Gehaltsabrechnung", translation: "payslip" },
                    { word: "der Wohnsitznachweis", translation: "proof of residence" }
                ],
                fillBlank: { sentence: "Die monatliche Rate beträgt circa _____ Euro.", sentenceEN: "The monthly installment is approximately _____ euros.", target: "240", options: ["240", "300", "180"] },
                role: { speaker1: "Was brauche ich für den Kreditantrag?", speaker1EN: "What do I need for the loan application?", options: ["Drei Gehaltsabrechnungen, Wohnsitznachweis und Ausweis.", "Nur den Reisepass.", "Einen Bürgen."], correct: 0 },
                trueFalse: { statement: "Der Zinssatz beträgt 9,9% pro Jahr.", statementEN: "The interest rate is 9.9% per year.", correct: false, explanation: "Falsch: Der Berater sagt 'bei einem Zinssatz von 4,9% pro Jahr'." }
            }
        ]
    },
    notaufnahme: {
        title: "Notaufnahme & Apotheke", titleEN: "Emergency Room & Pharmacy", emoji: "🏥",
        warmup: {
            vocab: [
                { word: "Notaufnahme", gender: "die", translation: "emergency room / A&E", example: "Bei starken Schmerzen bitte sofort in die Notaufnahme gehen.", exampleEN: "For severe pain please go to the emergency room immediately." },
                { word: "Krankenwagen", gender: "der", translation: "ambulance", example: "Bitte rufen Sie sofort den Krankenwagen!", exampleEN: "Please call the ambulance immediately!" },
                { word: "Schmerzmittel", gender: "das", translation: "painkiller", example: "Der Arzt hat mir ein Schmerzmittel verschrieben.", exampleEN: "The doctor prescribed me a painkiller." },
                { word: "Rezept", gender: "das", translation: "prescription", example: "Für dieses Medikament brauchen Sie ein Rezept.", exampleEN: "You need a prescription for this medication." },
                { word: "Wartezeit", gender: "die", translation: "waiting time", example: "Die Wartezeit in der Notaufnahme kann mehrere Stunden dauern.", exampleEN: "The waiting time in the emergency room can last several hours." }
            ],
            phrases: [
                { de: "Ich habe starke Bauchschmerzen seit heute Morgen.", en: "I have had severe stomach ache since this morning." },
                { de: "Bitte rufen Sie den Notarzt.", en: "Please call the emergency doctor." },
                { de: "Haben Sie dieses Medikament ohne Rezept?", en: "Do you have this medication without a prescription?" },
                { de: "Wie nehme ich diese Tabletten ein?", en: "How do I take these tablets?" }
            ]
        },
        dialogues: [
            {
                id: "a2_hoer_not_1", title: "In der Notaufnahme", titleEN: "In the Emergency Room",
                script: "Guten Tag, was ist passiert? - Mein Mann hat plötzlich starke Brustschmerzen und kann kaum atmen. Wir sind sofort hergekommen. - Wie lange hat er diese Schmerzen schon? - Seit etwa einer Stunde. - Hat er Vorerkrankungen — Herzprobleme oder Bluthochdruck? - Ja, er hat Bluthochdruck und nimmt täglich Tabletten. - Gut. Wir bringen ihn sofort ins EKG. Bitte bleiben Sie im Wartebereich.",
                translation: "Good day, what happened? - My husband has suddenly severe chest pain and can barely breathe. We came here immediately. - How long has he had this pain? - For about one hour. - Does he have pre-existing conditions — heart problems or high blood pressure? - Yes, he has high blood pressure and takes tablets daily. - Good. We will take him to the ECG immediately. Please stay in the waiting area.",
                vocabSupport: [
                    { word: "Brustschmerzen", translation: "chest pain" },
                    { word: "Vorerkrankungen", translation: "pre-existing conditions" },
                    { word: "Bluthochdruck", translation: "high blood pressure" }
                ],
                fillBlank: { sentence: "Der Mann hat seit etwa _____ Brustschmerzen.", sentenceEN: "The man has had chest pain for about _____.", target: "einer Stunde", options: ["einer Stunde", "zwei Stunden", "einem Tag"] },
                role: { speaker1: "Welche Vorerkrankungen hat Ihr Mann?", speaker1EN: "What pre-existing conditions does your husband have?", options: ["Er hat Bluthochdruck und nimmt täglich Tabletten.", "Er ist kerngesund.", "Er hat Diabetes."], correct: 0 },
                trueFalse: { statement: "Der Mann wird nach Hause geschickt.", statementEN: "The man is being sent home.", correct: false, explanation: "Falsch: Er wird sofort zum EKG gebracht." }
            },
            {
                id: "a2_hoer_not_2", title: "In der Apotheke", titleEN: "At the Pharmacy",
                script: "Guten Tag. Ich habe hier ein Rezept vom Arzt für Ibuprofen 600mg. - Ja, wir haben es vorrätig. Das macht 8,50 Euro. Haben Sie eine Krankenkassenkarte? - Ja, hier ist sie. - Danke. Dann zahlen Sie nur die gesetzliche Zuzahlung von 5 Euro. - Wie nehme ich die Tabletten ein? - Dreimal täglich eine Tablette nach dem Essen, am besten mit viel Wasser. Nicht auf nüchternen Magen.",
                translation: "Good day. I have a prescription here from the doctor for Ibuprofen 600mg. - Yes, we have it in stock. That comes to 8.50 euros. Do you have a health insurance card? - Yes, here it is. - Thank you. Then you only pay the statutory co-payment of 5 euros. - How do I take the tablets? - Three times a day, one tablet after a meal, ideally with plenty of water. Not on an empty stomach.",
                vocabSupport: [
                    { word: "vorrätig", translation: "in stock" },
                    { word: "die Zuzahlung", translation: "co-payment" },
                    { word: "auf nüchternen Magen", translation: "on an empty stomach" }
                ],
                fillBlank: { sentence: "Die Tabletten sollen _____ täglich eingenommen werden.", sentenceEN: "The tablets should be taken _____ daily.", target: "dreimal", options: ["dreimal", "einmal", "zweimal"] },
                role: { speaker1: "Wie nehme ich die Tabletten ein?", speaker1EN: "How do I take the tablets?", options: ["Dreimal täglich nach dem Essen mit viel Wasser.", "Einmal morgens auf nüchternen Magen.", "Zweimal täglich vor dem Schlafen."], correct: 0 },
                trueFalse: { statement: "Der Patient zahlt den vollen Preis von 8,50 Euro.", statementEN: "The patient pays the full price of 8.50 euros.", correct: false, explanation: "Falsch: Mit Krankenkassenkarte zahlt er nur die Zuzahlung von 5 Euro." }
            }
        ]
    }
};

/* ============================================================
   A2 ACTIVE STATE
   ============================================================ */

let activeA2HoerenState = { topicKey: null, currentDialogueIndex: 0, currentMode: "dictation", userSelectedOption: null, isAnswerChecked: false };

/* ============================================================
   A2 HÖREN HUB — NAVIGATION
   ============================================================ */

window.openA2InteractiveHoerenHub = function() {
    if (typeof switchToView === "function") switchToView("view-a2-interactive-hoeren");
    document.getElementById("a2-hoeren-topic-selection-hub").style.display = "block";
    document.getElementById("a2-hoeren-topic-warmup-hub").style.display = "none";
    document.getElementById("a2-hoeren-practice-workspace").style.display = "none";
    document.getElementById("a2-hoeren-hub-title").textContent = "A2 Interaktives Hören";
    renderA2HoerenTopicsGrid();
};

window.handleA2HoerenBackNavigation = function() {
    const selHub = document.getElementById("a2-hoeren-topic-selection-hub");
    const warmupHub = document.getElementById("a2-hoeren-topic-warmup-hub");
    const practiceWS = document.getElementById("a2-hoeren-practice-workspace");
    const practiceVisible = practiceWS && practiceWS.style.display !== "none";
    const warmupVisible = warmupHub && warmupHub.style.display !== "none";
    if (practiceVisible) {
        window.speechSynthesis && window.speechSynthesis.cancel();
        practiceWS.style.display = "none";
        warmupHub.style.display = "block";
        document.getElementById("a2-hoeren-hub-title").textContent = A2_INTERACTIVE_HOEREN_DATABASE[activeA2HoerenState.topicKey].title + " — Vorbereitung";
    } else if (warmupVisible) {
        warmupHub.style.display = "none";
        selHub.style.display = "block";
        document.getElementById("a2-hoeren-hub-title").textContent = "A2 Interaktives Hören";
    } else {
        if (typeof switchToView === "function") switchToView("view-a2-practice-menu");
    }
};

/* ============================================================
   A2 HÖREN HUB — TOPIC GRID
   ============================================================ */

function renderA2HoerenTopicsGrid() {
    const grid = document.getElementById("a2-hoeren-topics-grid");
    if (!grid) return;
    grid.innerHTML = "";
    Object.keys(A2_INTERACTIVE_HOEREN_DATABASE).forEach(function(key) {
        const topic = A2_INTERACTIVE_HOEREN_DATABASE[key];
        const card = document.createElement("div");
        card.className = "hoeren-topic-card glass-panel";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.innerHTML = `<div class="hoeren-topic-emoji">${topic.emoji}</div><div class="hoeren-topic-info"><div class="hoeren-topic-title">${topic.title}</div><div class="hoeren-topic-subtitle">${topic.titleEN}</div></div><div class="hoeren-topic-arrow">→</div>`;
        card.addEventListener("click", function() { openA2HoerenWarmup(key); });
        card.addEventListener("keydown", function(e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openA2HoerenWarmup(key); } });
        grid.appendChild(card);
    });
}

/* ============================================================
   A2 HÖREN HUB — WARM-UP
   ============================================================ */

function openA2HoerenWarmup(topicKey) {
    activeA2HoerenState.topicKey = topicKey;
    activeA2HoerenState.currentDialogueIndex = 0;
    const topic = A2_INTERACTIVE_HOEREN_DATABASE[topicKey];
    if (!topic) return;
    document.getElementById("a2-hoeren-topic-selection-hub").style.display = "none";
    document.getElementById("a2-hoeren-topic-warmup-hub").style.display = "block";
    document.getElementById("a2-hoeren-practice-workspace").style.display = "none";
    document.getElementById("a2-hoeren-hub-title").textContent = topic.emoji + " " + topic.title + " — Vorbereitung";
    const container = document.getElementById("a2-hoeren-warmup-content");
    if (!container) return;
    let html = `<div class="hoeren-warmup-section"><h3 class="warmup-section-heading">📖 Schlüsselwörter / Key Vocabulary</h3><div class="hoeren-vocab-cards">`;
    topic.warmup.vocab.forEach(function(v) {
        html += `<div class="hoeren-vocab-card glass-panel"><div class="vocab-card-top"><span class="vocab-gender-badge">${v.gender}</span><span class="vocab-word">${v.word}</span><button class="vocab-tts-btn" onclick="speakA2Text('${v.word.replace(/'/g,"\\'")}')">🔊</button></div><div class="vocab-translation">🇬🇧 ${v.translation}</div><div class="vocab-example">💬 ${v.example}</div><div class="vocab-example" style="color:var(--color-text-muted);font-style:italic;">🌐 ${v.exampleEN}</div></div>`;
    });
    html += `</div></div><div class="hoeren-warmup-section" style="margin-top:24px;"><h3 class="warmup-section-heading">💬 Redemittel / Key Phrases</h3><div class="hoeren-phrases-list">`;
    topic.warmup.phrases.forEach(function(p) {
        html += `<div class="hoeren-phrase-item glass-panel"><div class="phrase-de">🇩🇪 ${p.de} <button class="vocab-tts-btn" onclick="speakA2Text('${p.de.replace(/'/g,"\\'")}')">🔊</button></div><div class="phrase-en">🇬🇧 ${p.en}</div></div>`;
    });
    html += `</div></div>`;
    container.innerHTML = html;
}

/* ============================================================
   A2 HÖREN HUB — PRACTICE WORKSPACE
   ============================================================ */

window.openA2HoerenPractice = function() {
    const topicKey = activeA2HoerenState.topicKey;
    const topic = A2_INTERACTIVE_HOEREN_DATABASE[topicKey];
    if (!topic) return;
    document.getElementById("a2-hoeren-topic-warmup-hub").style.display = "none";
    document.getElementById("a2-hoeren-practice-workspace").style.display = "block";
    document.getElementById("a2-hoeren-hub-title").textContent = topic.emoji + " " + topic.title + " — Hörübung";
    renderA2HoerenPracticeWorkspace(topicKey, 0, "dictation");
};

function renderA2HoerenPracticeWorkspace(topicKey, dialogueIndex, mode) {
    activeA2HoerenState.currentDialogueIndex = dialogueIndex;
    activeA2HoerenState.currentMode = mode;
    activeA2HoerenState.userSelectedOption = null;
    const topic = A2_INTERACTIVE_HOEREN_DATABASE[topicKey];
    const dialogue = topic.dialogues[dialogueIndex];
    const container = document.getElementById("a2-hoeren-practice-content");
    if (!container) return;

    let tabsHtml = `<div class="hoeren-dialogue-tabs">`;
    topic.dialogues.forEach(function(d, i) {
        tabsHtml += `<button class="hoeren-dialogue-tab${i === dialogueIndex ? " active" : ""}" onclick="renderA2HoerenPracticeWorkspace('${topicKey}', ${i}, '${mode}')">${i + 1}. ${d.titleEN}</button>`;
    });
    tabsHtml += `</div>`;

    const modes = [{ key: "dictation", label: "🎯 Diktat" }, { key: "fillblank", label: "🔁 Lückentext" }, { key: "role", label: "🗣️ Rollenwechsel" }, { key: "truefalse", label: "📋 Richtig/Falsch" }];
    let modeTabsHtml = `<div class="hoeren-mode-tabs">`;
    modes.forEach(function(m) { modeTabsHtml += `<button class="hoeren-mode-tab${m.key === mode ? " active" : ""}" onclick="renderA2HoerenPracticeWorkspace('${topicKey}', ${dialogueIndex}, '${m.key}')">${m.label}</button>`; });
    modeTabsHtml += `</div>`;

    let audioHtml = `<div class="hoeren-audio-controller glass-panel">
        <div class="audio-top-row"><div class="audio-title-info"><span class="audio-topic-badge">${topic.emoji} A2</span><span class="audio-dialogue-title">${dialogue.title}</span></div></div>
        <div class="audio-controls-row">
            <button class="audio-play-btn" onclick="playA2HoerenDialogue('${topicKey}', ${dialogueIndex}, 1.0)">▶ Abspielen</button>
            <button class="audio-play-btn" style="background:rgba(59,130,246,0.15);color:#3b82f6;" onclick="playA2HoerenDialogue('${topicKey}', ${dialogueIndex}, 0.65)">🐢 Langsam</button>
            <button class="audio-play-btn" style="background:rgba(239,68,68,0.1);color:#ef4444;" onclick="window.speechSynthesis.cancel()">⏹ Stop</button>
        </div>
        <div class="audio-transcript-box">
            <div class="transcript-label">📄 Hörtext:</div>
            <div class="transcript-text">${dialogue.script}</div>
            <div class="transcript-label" style="margin-top:10px;">🌐 Translation:</div>
            <div class="transcript-text" style="color:var(--color-text-muted);font-style:italic;">${dialogue.translation}</div>
        </div>
        <div class="hoeren-vocab-support"><span class="vocab-support-label">💡 Vokabelhilfe:</span>${dialogue.vocabSupport.map(v => `<span class="vocab-support-chip">${v.word} = ${v.translation}</span>`).join("")}</div>
    </div>`;

    let practiceHtml = "";
    if (mode === "dictation") {
        practiceHtml = `<div class="hoeren-practice-section glass-panel">
            <h4>🎯 Diktat — Hören und tippen <span style="font-size:0.85rem;font-weight:normal;color:var(--color-text-muted);">(Dictation — Listen & Type)</span></h4>
            <p style="color:var(--color-text-muted);">Hören Sie den Dialog und schreiben Sie, was Sie hören. <span style="font-style:italic;">(Listen to the audio and write what you hear.)</span></p>
            <textarea id="a2-dictation-input" class="dictation-textarea" placeholder="Tippen Sie hier auf Deutsch..." rows="5" style="width:100%;margin-top:12px;padding:12px;border-radius:8px;border:1px solid var(--color-border);background:var(--color-panel-solid);color:var(--color-text-primary);"></textarea>
            <div style="margin-top:12px;display:flex;gap:12px;flex-wrap:wrap;">
                <button class="btn btn-primary" onclick="checkA2Dictation('${topicKey}', ${dialogueIndex})">Antwort prüfen / Check Answer</button>
                <button class="btn btn-secondary" onclick="showA2DictationAnswer('${topicKey}', ${dialogueIndex})">Lösung zeigen / Show Solution</button>
            </div>
            <div id="a2-dictation-feedback" style="margin-top:14px;"></div>
        </div>`;
    } else if (mode === "fillblank") {
        const fb = dialogue.fillBlank;
        const optsHtml = fb.options.map((opt, i) => `<button class="hoeren-option-btn" id="a2_fb_opt_${i}" onclick="selectA2FillBlankOption('${topicKey}', ${dialogueIndex}, ${i}, '${opt.replace(/'/g,"\\'")}', '${fb.target.replace(/'/g,"\\'")}' )">${opt}</button>`).join("");
        practiceHtml = `<div class="hoeren-practice-section glass-panel">
            <h4>🔁 Lückentext <span style="font-size:0.85rem;font-weight:normal;color:var(--color-text-muted);">(Fill in the blank)</span></h4>
            <p class="fill-blank-sentence" style="font-size:1.1rem;font-weight:600;margin:16px 0 6px 0;">${fb.sentence}</p>
            ${fb.sentenceEN ? `<div class="fill-blank-hint" style="font-size:0.92rem;color:var(--color-text-muted);font-style:italic;margin-bottom:16px;">🇬🇧 English: ${fb.sentenceEN}</div>` : ""}
            <div class="hoeren-options-grid">${optsHtml}</div>
            <div id="a2-fb-feedback" style="margin-top:14px;"></div>
        </div>`;
    } else if (mode === "role") {
        const r = dialogue.role;
        const optsHtml = r.options.map((opt, i) => `<button class="hoeren-option-btn" id="a2_role_opt_${i}" onclick="selectA2RoleOption(${i}, ${r.correct})">${opt}</button>`).join("");
        practiceHtml = `<div class="hoeren-practice-section glass-panel">
            <h4>🗣️ Rollenwechsel <span style="font-size:0.85rem;font-weight:normal;color:var(--color-text-muted);">(Role Play)</span></h4>
            <div class="role-play-prompt glass-panel" style="margin:16px 0;padding:14px;border-radius:10px;background:var(--color-accent-light);">
                <strong>Sprecher 1:</strong> ${r.speaker1}
                ${r.speaker1EN ? `<div style="font-size:0.88rem;color:var(--color-text-muted);margin-top:4px;font-style:italic;">🇬🇧 English: ${r.speaker1EN}</div>` : ""}
            </div>
            <p style="color:var(--color-text-muted);">Was antworten Sie? <span style="font-style:italic;">(What do you reply?)</span></p>
            <div class="hoeren-options-grid">${optsHtml}</div>
            <div id="a2-role-feedback" style="margin-top:14px;"></div>
        </div>`;
    } else if (mode === "truefalse") {
        const tf = dialogue.trueFalse;
        practiceHtml = `<div class="hoeren-practice-section glass-panel">
            <h4>📋 Richtig oder Falsch? <span style="font-size:0.85rem;font-weight:normal;color:var(--color-text-muted);">(True or False?)</span></h4>
            <div class="tf-statement glass-panel" style="padding:14px;border-radius:10px;font-size:1.05rem;font-weight:600;margin:16px 0 6px 0;">
                „${tf.statement}"
                ${tf.statementEN ? `<div style="font-size:0.9rem;color:var(--color-text-muted);margin-top:6px;font-style:italic;font-weight:normal;">🇬🇧 English: „${tf.statementEN}"</div>` : ""}
            </div>
            <div style="display:flex;gap:16px;margin-bottom:16px;margin-top:12px;">
                <button class="btn btn-secondary hoeren-tf-btn" id="a2_tf_richtig" onclick="selectA2TrueFalse(true, ${tf.correct}, '${tf.explanation.replace(/'/g,"\\'")}')">✅ Richtig / True</button>
                <button class="btn btn-secondary hoeren-tf-btn" id="a2_tf_falsch" onclick="selectA2TrueFalse(false, ${tf.correct}, '${tf.explanation.replace(/'/g,"\\'")}')">❌ Falsch / False</button>
            </div>
            <div id="a2-tf-feedback" style="margin-top:14px;"></div>
        </div>`;
    }

    container.innerHTML = tabsHtml + modeTabsHtml + audioHtml + practiceHtml;
}

/* ============================================================
   A2 HÖREN — AUDIO
   ============================================================ */

window.speakA2Text = function(text) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE"; u.rate = 0.9;
    window.speechSynthesis.speak(u);
};

window.playA2HoerenDialogue = function(topicKey, dialogueIndex, rate) {
    const dialogue = A2_INTERACTIVE_HOEREN_DATABASE[topicKey].dialogues[dialogueIndex];
    if (!dialogue) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(dialogue.script);
    u.lang = "de-DE"; u.rate = rate || 1.0;
    window.speechSynthesis.speak(u);
};

/* ============================================================
   A2 HÖREN — ANSWER CHECKING
   ============================================================ */

window.checkA2Dictation = function(topicKey, dialogueIndex) {
    const input = document.getElementById("a2-dictation-input");
    const feedback = document.getElementById("a2-dictation-feedback");
    const dialogue = A2_INTERACTIVE_HOEREN_DATABASE[topicKey].dialogues[dialogueIndex];
    if (!input || !feedback) return;
    const userWords = input.value.trim().toLowerCase().split(/\s+/);
    const correctWords = dialogue.script.toLowerCase().split(/\s+/);
    let match = 0;
    userWords.forEach(function(w) { if (correctWords.includes(w)) match++; });
    const accuracy = Math.round((match / correctWords.length) * 100);
    const color = accuracy >= 80 ? "#10b981" : accuracy >= 50 ? "#f59e0b" : "#ef4444";
    feedback.innerHTML = `<div style="padding:12px;border-radius:8px;background:rgba(0,0,0,0.15);border:1px solid ${color};color:${color};"><strong>${accuracy}% Genauigkeit</strong></div>`;
};

window.showA2DictationAnswer = function(topicKey, dialogueIndex) {
    const feedback = document.getElementById("a2-dictation-feedback");
    if (!feedback) return;
    feedback.innerHTML = `<div style="padding:12px;border-radius:8px;background:rgba(99,102,241,0.1);border:1px solid #6366f1;"><strong>📄 Vollständiger Text:</strong><br>${A2_INTERACTIVE_HOEREN_DATABASE[topicKey].dialogues[dialogueIndex].script}</div>`;
};

window.selectA2FillBlankOption = function(topicKey, dialogueIndex, optIdx, value, target) {
    document.querySelectorAll("[id^='a2_fb_opt_']").forEach(function(b) { b.classList.remove("selected"); });
    const btn = document.getElementById(`a2_fb_opt_${optIdx}`);
    if (btn) btn.classList.add("selected");
    const isCorrect = value === target;
    const fb = document.getElementById("a2-fb-feedback");
    if (fb) fb.innerHTML = `<div style="padding:12px;border-radius:8px;background:${isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)"};border:1px solid ${isCorrect ? "#10b981" : "#ef4444"};">${isCorrect ? "✅ Richtig!" : `❌ Falsch. Richtige Antwort: <strong>${target}</strong>`}</div>`;
};

window.selectA2RoleOption = function(optIdx, correct) {
    document.querySelectorAll("[id^='a2_role_opt_']").forEach(function(b) { b.classList.remove("selected"); });
    const btn = document.getElementById(`a2_role_opt_${optIdx}`);
    if (btn) btn.classList.add("selected");
    const isCorrect = optIdx === correct;
    const fb = document.getElementById("a2-role-feedback");
    if (fb) fb.innerHTML = `<div style="padding:12px;border-radius:8px;background:${isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)"};border:1px solid ${isCorrect ? "#10b981" : "#ef4444"};">${isCorrect ? "✅ Richtig!" : "❌ Falsch."}</div>`;
};

window.selectA2TrueFalse = function(value, correct, explanation) {
    const rBtn = document.getElementById("a2_tf_richtig");
    const fBtn = document.getElementById("a2_tf_falsch");
    if (rBtn) rBtn.classList.toggle("selected", value === true);
    if (fBtn) fBtn.classList.toggle("selected", value === false);
    const isCorrect = value === correct;
    const fb = document.getElementById("a2-tf-feedback");
    if (fb) fb.innerHTML = `<div style="padding:12px;border-radius:8px;background:${isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)"};border:1px solid ${isCorrect ? "#10b981" : "#ef4444"};">${isCorrect ? "✅ Richtig!" : `❌ Falsch. ${explanation}`}</div>`;
};

/* ============================================================
   A2 PRACTICE WORKSPACE — VOCAB / GRAMMAR / READING
   ============================================================ */

window.openA2PracticeWorkspace = function(topic) {
    const titleEl = document.getElementById("a2-practice-workspace-title");
    const contentEl = document.getElementById("a2-practice-workspace-content");
    if (!titleEl || !contentEl) return;
    if (typeof switchToView === "function") switchToView("view-a2-practice-workspace");
    const backBtn = document.getElementById("a2-practice-back-btn");
    if (backBtn) backBtn.onclick = function() { if (typeof switchToView === "function") switchToView("view-a2-practice-menu"); };
    if (topic === "vocab") { titleEl.textContent = "Wortschatz A2"; renderA2VocabWorkspace(contentEl); }
    else if (topic === "grammar") { titleEl.textContent = "Grammatik A2"; renderA2GrammarWorkspace(contentEl); }
    else if (topic === "reading") { titleEl.textContent = "Lesen A2"; renderA2ReadingWorkspace(contentEl); }
};

function renderA2VocabWorkspace(container) {
    const themes = Object.keys(A2_VOCAB_DATABASE);
    let html = `<div class="a2-theme-tabs" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">`;
    themes.forEach(function(key) { const t = A2_VOCAB_DATABASE[key]; html += `<button class="btn btn-secondary a2-theme-tab" id="a2_vt_${key}" onclick="renderA2VocabTheme('${key}')">${t.emoji} ${t.title}</button>`; });
    html += `</div><div id="a2-vocab-theme-content"></div>`;
    container.innerHTML = html;
    renderA2VocabTheme(themes[0]);
}

window.renderA2VocabTheme = function(key) {
    const theme = A2_VOCAB_DATABASE[key];
    const el = document.getElementById("a2-vocab-theme-content");
    if (!el || !theme) return;
    document.querySelectorAll(".a2-theme-tab").forEach(function(b) { b.classList.remove("level-btn-active"); });
    const active = document.getElementById(`a2_vt_${key}`);
    if (active) active.classList.add("level-btn-active");
    let html = `<div class="hoeren-vocab-cards">`;
    theme.words.forEach(function(v) {
        html += `<div class="hoeren-vocab-card glass-panel"><div class="vocab-card-top"><span class="vocab-word">${v.word}</span><button class="vocab-tts-btn" onclick="speakA2Text('${v.word.replace(/'/g,"\\'")}')">🔊</button></div><div class="vocab-translation">🇬🇧 ${v.translation}</div><div class="vocab-example">💬 ${v.example}</div><div class="vocab-example" style="color:var(--color-text-muted);font-style:italic;">🌐 ${v.exampleEN}</div></div>`;
    });
    html += `</div>`;
    el.innerHTML = html;
};

function renderA2GrammarWorkspace(container) {
    const topics = Object.keys(A2_GRAMMAR_DATABASE);
    let html = `<div class="a2-theme-tabs" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">`;
    topics.forEach(function(key) { const t = A2_GRAMMAR_DATABASE[key]; html += `<button class="btn btn-secondary a2-theme-tab" id="a2_gt_${key}" onclick="renderA2GrammarTopic('${key}')">${t.emoji} ${t.title}</button>`; });
    html += `</div><div id="a2-grammar-topic-content"></div>`;
    container.innerHTML = html;
    renderA2GrammarTopic(topics[0]);
}

window.renderA2GrammarTopic = function(key) {
    const topic = A2_GRAMMAR_DATABASE[key];
    const el = document.getElementById("a2-grammar-topic-content");
    if (!el || !topic) return;
    document.querySelectorAll(".a2-theme-tab").forEach(function(b) { b.classList.remove("level-btn-active"); });
    const active = document.getElementById(`a2_gt_${key}`);
    if (active) active.classList.add("level-btn-active");
    let html = `<div class="glass-panel" style="padding:20px;border-radius:14px;margin-bottom:20px;"><h3>${topic.emoji} ${topic.title}</h3><p style="color:var(--color-text-secondary);margin-top:8px;">${topic.explanation}</p><div style="margin-top:16px;">`;
    topic.rules.forEach(function(r) { html += `<div style="padding:10px;border-radius:8px;background:var(--color-accent-light);margin-bottom:8px;"><strong>📌 ${r.rule}</strong><br><span style="color:var(--color-text-muted);font-size:0.9rem;font-style:italic;">${r.example}</span></div>`; });
    html += `</div></div><h4 style="margin-bottom:14px;">✏️ Übungen</h4>`;
    topic.questions.forEach(function(q, qi) {
        if (q.type === "fillBlank") {
            const optsHtml = q.options.map((opt, oi) => `<button class="hoeren-option-btn" id="a2_gq_${qi}_${oi}" onclick="checkA2GrammarFB(${qi}, ${oi}, '${opt.replace(/'/g,"\\'")}', '${q.target.replace(/'/g,"\\'")}', '${(q.explanation||"").replace(/'/g,"\\'")}' )">${opt}</button>`).join("");
            html += `<div class="glass-panel" style="padding:16px;border-radius:12px;margin-bottom:16px;"><p style="font-weight:600;margin-bottom:12px;">${qi + 1}. ${q.sentence}</p><div class="hoeren-options-grid">${optsHtml}</div><div id="a2_gq_fb_${qi}" style="margin-top:10px;"></div></div>`;
        } else if (q.type === "multiChoice") {
            const optsHtml = q.options.map((opt, oi) => `<button class="hoeren-option-btn" id="a2_gq_${qi}_${oi}" onclick="checkA2GrammarMC(${qi}, ${oi}, ${q.correct}, '${(q.explanation||"").replace(/'/g,"\\'")}' )">${opt}</button>`).join("");
            html += `<div class="glass-panel" style="padding:16px;border-radius:12px;margin-bottom:16px;"><p style="font-weight:600;margin-bottom:12px;">${qi + 1}. ${q.question}</p><div class="hoeren-options-grid">${optsHtml}</div><div id="a2_gq_fb_${qi}" style="margin-top:10px;"></div></div>`;
        }
    });
    el.innerHTML = html;
};

window.checkA2GrammarFB = function(qi, oi, value, target, explanation) {
    document.querySelectorAll(`[id^='a2_gq_${qi}_']`).forEach(function(b) { b.classList.remove("selected"); });
    const btn = document.getElementById(`a2_gq_${qi}_${oi}`); if (btn) btn.classList.add("selected");
    const isCorrect = value === target;
    const fb = document.getElementById(`a2_gq_fb_${qi}`);
    if (fb) fb.innerHTML = `<span style="color:${isCorrect ? "#10b981" : "#ef4444"};font-weight:600;">${isCorrect ? "✅ Richtig!" : `❌ Falsch. Richtig: ${target}`}</span>${explanation ? ` <span style="color:var(--color-text-muted);font-size:0.85rem;">— ${explanation}</span>` : ""}`;
};

window.checkA2GrammarMC = function(qi, oi, correct, explanation) {
    document.querySelectorAll(`[id^='a2_gq_${qi}_']`).forEach(function(b) { b.classList.remove("selected"); });
    const btn = document.getElementById(`a2_gq_${qi}_${oi}`); if (btn) btn.classList.add("selected");
    const isCorrect = oi === correct;
    const fb = document.getElementById(`a2_gq_fb_${qi}`);
    if (fb) fb.innerHTML = `<span style="color:${isCorrect ? "#10b981" : "#ef4444"};font-weight:600;">${isCorrect ? "✅ Richtig!" : "❌ Falsch."}</span>${explanation ? ` <span style="color:var(--color-text-muted);font-size:0.85rem;">— ${explanation}</span>` : ""}`;
};

function renderA2ReadingWorkspace(container) {
    let html = `<div class="a2-theme-tabs" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">`;
    A2_READING_DATABASE.forEach(function(p, i) { html += `<button class="btn btn-secondary a2-theme-tab" id="a2_rt_${i}" onclick="renderA2ReadingPassage(${i})">${i + 1}. ${p.titleEN}</button>`; });
    html += `</div><div id="a2-reading-passage-content"></div>`;
    container.innerHTML = html;
    renderA2ReadingPassage(0);
}

window.renderA2ReadingPassage = function(index) {
    const passage = A2_READING_DATABASE[index];
    const el = document.getElementById("a2-reading-passage-content");
    if (!el || !passage) return;
    document.querySelectorAll("[id^='a2_rt_']").forEach(function(b, i) { b.classList.toggle("level-btn-active", i === index); });
    const formatted = passage.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
    let html = `<div class="glass-panel" style="padding:20px;border-radius:14px;margin-bottom:20px;line-height:1.8;"><h3>${passage.title}</h3><div style="border-left:3px solid #3b82f6;padding-left:16px;margin-top:12px;">${formatted}</div></div><h4 style="margin-bottom:14px;">❓ Verständnisfragen</h4>`;
    passage.questions.forEach(function(q, qi) {
        const optsHtml = q.options.map((opt, oi) => `<button class="hoeren-option-btn" id="a2_rq_${index}_${qi}_${oi}" onclick="checkA2ReadingAnswer(${index}, ${qi}, ${oi}, ${q.correct}, '${(q.explanation||"").replace(/'/g,"\\'")}' )">${opt}</button>`).join("");
        html += `<div class="glass-panel" style="padding:16px;border-radius:12px;margin-bottom:16px;"><p style="font-weight:600;margin-bottom:12px;">${qi + 1}. ${q.question}</p><div class="hoeren-options-grid">${optsHtml}</div><div id="a2_rq_fb_${index}_${qi}" style="margin-top:10px;"></div></div>`;
    });
    el.innerHTML = html;
};

window.checkA2ReadingAnswer = function(passageIndex, qi, oi, correct, explanation) {
    document.querySelectorAll(`[id^='a2_rq_${passageIndex}_${qi}_']`).forEach(function(b) { b.classList.remove("selected"); });
    const btn = document.getElementById(`a2_rq_${passageIndex}_${qi}_${oi}`); if (btn) btn.classList.add("selected");
    const isCorrect = oi === correct;
    const fb = document.getElementById(`a2_rq_fb_${passageIndex}_${qi}`);
    if (fb) fb.innerHTML = `<span style="color:${isCorrect ? "#10b981" : "#ef4444"};font-weight:600;">${isCorrect ? "✅ Richtig!" : "❌ Falsch."}</span>${explanation ? ` <span style="color:var(--color-text-muted);font-size:0.85rem;">— ${explanation}</span>` : ""}`;
};

console.log("✅ a2_module.js v1.0.0 loaded — Goethe A2 Elementary module ready. 15 Hören topics active.");
