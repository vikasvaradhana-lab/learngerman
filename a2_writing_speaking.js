/* ==========================================================================
   GOETHE DEUTSCH — A2 WRITING & SPEAKING MODULE (SCHREIBEN & SPRECHEN)
   Official CEFR A2 Examination Structure & Practice Ecosystem
   ========================================================================== */

/* ==========================================================================
   1. A2 SCHREIBEN (WRITING STUDIO) DATABASE
   Teil 1: Informelle SMS / Nachricht (~20-30 Wörter, 3 Leitpunkte)
   Teil 2: Formelle E-Mail / Brief (~30-40 Wörter, 3 Leitpunkte)
   ========================================================================== */

const A2_WRITING_DATABASE = [
    // --- TEIL 1: INFORMELLE MITTEILUNGEN (SMS / CHAT / NACHRICHT) ---
    {
        id: "a2_write_1",
        part: "teil1",
        partBadge: "Teil 1: Informelle SMS",
        emoji: "🎂",
        title: "Einladung zur Geburtstagsparty",
        titleEN: "Birthday Party Invitation (Decline & Reschedule)",
        situation: "Ihr Freund Marco hat Sie zu seiner Geburtstagsparty am Samstag eingeladen. Sie können aber leider nicht kommen.",
        situationEN: "Your friend Marco invited you to his birthday party on Saturday, but unfortunately you cannot attend.",
        leitpunkte: [
            { de: "Bedanken Sie sich für die Einladung.", en: "Thank him for the invitation." },
            { de: "Erklären Sie, warum Sie nicht kommen können.", en: "Explain why you cannot make it." },
            { de: "Machen Sie einen Vorschlag für ein Treffen nächste Woche.", en: "Suggest meeting next week instead." }
        ],
        targetWords: { min: 20, max: 35, optimal: "25–30" },
        redemittel: {
            anrede: ["Lieber Marco,", "Hallo Marco,"],
            einleitung: ["vielen Dank für die Einladung zu deiner Geburtstagsparty!", "ich habe mich sehr über deine Einladung gefreut."],
            leitpunktePhrases: [
                "Leider kann ich am Samstag nicht kommen, weil ich arbeiten muss.",
                "Es tut mir leid, aber ich bin am Wochenende leider nicht da.",
                "Können wir uns nächste Woche auf einen Kaffee treffen?",
                "Wie wäre es am nächsten Dienstag um 17 Uhr?"
            ],
            schluss: ["Viele Grüße", "Herzliche Grüße", "Bis bald!"]
        },
        sampleAnswer: "Lieber Marco,\n\nvielen Dank für die Einladung! Leider kann ich am Samstag nicht kommen, weil ich bis 20 Uhr arbeiten muss. Hast du nächste Woche Zeit? Wir könnten am Dienstag zusammen Kaffee trinken.\n\nViele Grüße,\nAlex",
        sampleAnswerEN: "Dear Marco,\n\nThanks a lot for the invitation! Unfortunately I cannot come on Saturday because I have to work until 8 PM. Do you have time next week? We could drink coffee together on Tuesday.\n\nBest regards,\nAlex",
        sampleBreakdown: "✅ 32 Wörter (perfekt im Rahmen). Alle 3 Leitpunkte erfüllt: Dank ausgedrückt, Grund mit 'weil' genannt, Gegenvorschlag für Dienstag gemacht. Korrekte informelle Anrede und Grußformel."
    },
    {
        id: "a2_write_2",
        part: "teil1",
        partBadge: "Teil 1: Informelle SMS",
        emoji: "⚽",
        title: "Sportverabredung verschieben",
        titleEN: "Postponing Sports Practice",
        situation: "Sie sind heute Abend mit Ihrer Kollegin Sarah zum Tennisspielen verabredet. Sie müssen aber Überstunden machen.",
        situationEN: "You arranged to play tennis tonight with your colleague Sarah, but you have to work overtime.",
        leitpunkte: [
            { de: "Entschuldigen Sie sich für die Absage.", en: "Apologize for canceling." },
            { de: "Nennen Sie den Grund (Überstunden im Büro).", en: "State the reason (overtime at the office)." },
            { de: "Fragen Sie nach einem neuen Termin am Sonntag.", en: "Ask about a new date on Sunday." }
        ],
        targetWords: { min: 20, max: 35, optimal: "25–30" },
        redemittel: {
            anrede: ["Liebe Sarah,", "Hallo Sarah,"],
            einleitung: ["es tut mir wirklich sehr leid, aber ich muss unser Tennisspiel absagen.", "ich muss dir leider kurzfristig absagen."],
            leitpunktePhrases: [
                "Mein Chef braucht heute noch einen dringenden Bericht, deshalb mache ich Überstunden.",
                "Ich muss bis spät im Büro bleiben.",
                "Passt es dir am Sonntagvormittag gegen 10 Uhr?",
                "Hast du am Sonntag Zeit?"
            ],
            schluss: ["Gib mir bitte kurz Bescheid!", "Liebe Grüße", "Bis dann!"]
        },
        sampleAnswer: "Hallo Sarah,\n\nes tut mir sehr leid, aber ich muss unser Spiel heute absagen. Ich habe viel Arbeit im Büro und muss Überstunden machen. Passt es dir vielleicht am Sonntag um 10 Uhr?\n\nLiebe Grüße,\nChris",
        sampleAnswerEN: "Hello Sarah,\n\nI am very sorry, but I have to cancel our match today. I have a lot of work at the office and must work overtime. Would Sunday at 10 AM suit you perhaps?\n\nWarm regards,\nChris",
        sampleBreakdown: "✅ 29 Wörter. Alle Leitpunkte präzise beantwortet (Entschuldigung, Begründung mit Überstunden, neuer Termin am Sonntag mit Uhrzeit)."
    },
    {
        id: "a2_write_3",
        part: "teil1",
        partBadge: "Teil 1: Informelle SMS",
        emoji: "🔑",
        title: "Wohnungsschlüssel & Blumen gießen",
        titleEN: "Keys & Watering Plants (Vacation Request)",
        situation: "Sie fahren für zwei Wochen in den Urlaub und bitten Ihren Nachbarn Jonas um Hilfe.",
        situationEN: "You are going on vacation for two weeks and asking your neighbor Jonas for a favor.",
        leitpunkte: [
            { de: "Informieren Sie über Ihren Urlaub (Wann und wie lange).", en: "Inform him about your trip (when and how long)." },
            { de: "Bitten Sie ihn, Ihre Blumen zu gießen.", en: "Ask him to water your plants." },
            { de: "Sagen Sie, wo er den Schlüssel findet.", en: "Explain where he can find the apartment key." }
        ],
        targetWords: { min: 20, max: 35, optimal: "25–30" },
        redemittel: {
            anrede: ["Lieber Jonas,", "Hallo Jonas,"],
            einleitung: ["ich fahre ab morgen für zwei Wochen nach Italien in den Urlaub.", "ab Freitag bin ich zwei Wochen verreist."],
            leitpunktePhrases: [
                "Könntest du bitte zweimal pro Woche meine Blumen gießen?",
                "Wärst du so nett und gießt meine Pflanzen?",
                "Den Schlüssel habe ich bei Frau Weber im Erdgeschoss abgegeben.",
                "Der Schlüssel liegt unter der Fußmatte."
            ],
            schluss: ["Vielen Dank für deine Hilfe!", "Schöne Grüße"]
        },
        sampleAnswer: "Lieber Jonas,\n\nich fahre ab morgen für zwei Wochen in den Urlaub. Könntest du bitte meine Blumen gießen? Den Wohnungsschlüssel habe ich bei Frau Weber abgegeben. Vielen Dank für deine Hilfe!\n\nHerzliche Grüße,\nDavid",
        sampleAnswerEN: "Dear Jonas,\n\nI am leaving tomorrow on vacation for two weeks. Could you please water my plants? I left the apartment key with Mrs. Weber. Thank you so much for your help!\n\nWarm regards,\nDavid",
        sampleBreakdown: "✅ 31 Wörter. Perfekt strukturierter Höflichkeitsappell im Alltag mit korrekter Konjunktiv-Bitte ('Könntest du bitte...')."
    },
    {
        id: "a2_write_4",
        part: "teil1",
        partBadge: "Teil 1: Informelle SMS",
        emoji: "🚗",
        title: "Fahrgemeinschaft zur Arbeit",
        titleEN: "Carpool to Work with Colleague",
        situation: "Das Auto Ihrer Kollegin Anna ist in der Werkstatt. Sie bieten ihr an, sie morgen früh mitzunehmen.",
        situationEN: "Your colleague Anna's car is in the repair shop. You offer to give her a ride to work tomorrow morning.",
        leitpunkte: [
            { de: "Bieten Sie eine Mitfahrgelegenheit an.", en: "Offer a ride in your car." },
            { de: "Nennen Sie Uhrzeit und Treffpunkt.", en: "Specify the time and meeting place." },
            { de: "Bitten Sie um eine kurze Bestätigung.", en: "Ask for a quick confirmation." }
        ],
        targetWords: { min: 20, max: 35, optimal: "25–30" },
        redemittel: {
            anrede: ["Liebe Anna,", "Hallo Anna,"],
            einleitung: ["ich habe gehört, dass dein Auto kaputt ist.", "brauchst du morgen eine Mitfahrgelegenheit?"],
            leitpunktePhrases: [
                "Ich kann dich morgen gerne mit zur Arbeit nehmen.",
                "Ich hole dich um 7:30 Uhr vor deinem Haus ab.",
                "Treffen wir uns um 7:45 Uhr an der Bushaltestelle?",
                "Sag mir bitte bis 20 Uhr Bescheid, ob das klappt."
            ],
            schluss: ["Bis morgen!", "Liebe Grüße"]
        },
        sampleAnswer: "Hallo Anna,\n\nich kann dich morgen gerne zur Arbeit mitnehmen! Ich fahre um 7:45 Uhr los und kann dich vor deiner Haustür abholen. Passt dir das? Schreib mir bitte kurz zurück.\n\nBis morgen,\nLisa",
        sampleAnswerEN: "Hello Anna,\n\nI can gladly give you a ride to work tomorrow! I leave at 7:45 AM and can pick you up in front of your front door. Does that work for you? Please text me back briefly.\n\nSee you tomorrow,\nLisa",
        sampleBreakdown: "✅ 32 Wörter. Lebendige, kollegiale Umgangssprache mit zeitlicher Präzision ('um 7:45 Uhr') und Aufforderung zur Rückmeldung."
    },
    {
        id: "a2_write_5",
        part: "teil1",
        partBadge: "Teil 1: Informelle SMS",
        emoji: "☕",
        title: "Spontanes Treffen im Café",
        titleEN: "Coffee Meetup & Vacation Photos",
        situation: "Sie sind aus dem Urlaub zurück und möchten Ihre Freundin Laura treffen.",
        situationEN: "You are back from your holiday and want to meet your friend Laura for coffee.",
        leitpunkte: [
            { de: "Sagen Sie, dass Sie wieder zu Hause sind.", en: "Mention that you are back home." },
            { de: "Schlagen Sie ein Treffen im Café Central vor.", en: "Propose meeting at Café Central." },
            { de: "Schreiben Sie, was Sie mitbringen (Fotos aus Spanien).", en: "State what you are bringing (photos from Spain)." }
        ],
        targetWords: { min: 20, max: 35, optimal: "25–30" },
        redemittel: {
            anrede: ["Liebe Laura,", "Hallo Laura,"],
            einleitung: ["ich bin gestern aus Spanien zurückgekommen!", "ich bin wieder im Lande."],
            leitpunktePhrases: [
                "Hast du am Samstag Lust auf einen Kaffee im Café Central?",
                "Lass uns doch im Café am Marktplatz treffen.",
                "Ich bringe viele tolle Urlaubsfotos mit.",
                "Ich freue mich sehr darauf, dir alles zu erzählen."
            ],
            schluss: ["Meld dich bald!", "Viele liebe Grüße"]
        },
        sampleAnswer: "Liebe Laura,\n\nich bin wieder aus dem Urlaub zurück! Hast du am Freitagnachmittag Zeit für einen Kaffee im Café Central? Ich bringe meine Urlaubsfotos aus Spanien mit. Ich freue mich auf dich!\n\nLiebe Grüße,\nNadine",
        sampleAnswerEN: "Dear Laura,\n\nI am back from vacation! Do you have time on Friday afternoon for a coffee at Café Central? I'm bringing my vacation photos from Spain. Looking forward to seeing you!\n\nWarm regards,\nNadine",
        sampleBreakdown: "✅ 33 Wörter. Natürlich klingendes Deutsch mit perfekter Verwendung von Zeitangaben ('am Freitagnachmittag') und Ortsangaben."
    },

    // --- TEIL 2: FORMELLE MITTEILUNGEN (E-MAIL / BRIEF) ---
    {
        id: "a2_write_6",
        part: "teil2",
        partBadge: "Teil 2: Formelle E-Mail",
        emoji: "🏢",
        title: "Arzttermin verschieben",
        titleEN: "Rescheduling a Doctor's Appointment",
        situation: "Sie haben am Donnerstag um 10:00 Uhr einen Termin in der Praxis Dr. Müller. Sie müssen aber überraschend arbeiten.",
        situationEN: "You have an appointment with Dr. Müller on Thursday at 10:00 AM, but you have an unexpected work commitment.",
        leitpunkte: [
            { de: "Grund für das Schreiben (Terminabsage).", en: "Reason for writing (appointment cancellation)." },
            { de: "Erklärung (Dringende Besprechung im Betrieb).", en: "Explanation (urgent meeting at work)." },
            { de: "Bitte um einen neuen Termin nächste Woche.", en: "Request for a new appointment next week." }
        ],
        targetWords: { min: 30, max: 45, optimal: "35–40" },
        redemittel: {
            anrede: ["Sehr geehrte Praxis Dr. Müller,", "Sehr geehrter Herr Dr. Müller,"],
            einleitung: ["ich habe am Donnerstag um 10:00 Uhr einen Termin bei Ihnen.", "leider muss ich meinen Termin am Donnerstag absagen."],
            leitpunktePhrases: [
                "Wegen einer dringenden Besprechung in meiner Firma kann ich nicht kommen.",
                "Ich muss an diesem Vormittag leider beruflich verreisen.",
                "Wäre es möglich, den Termin auf nächste Woche Freitag zu verschieben?",
                "Hätten Sie nächste Woche am Nachmittag einen freien Termin?"
            ],
            schluss: ["Vielen Dank für Ihr Verständnis.", "Mit freundlichen Grüßen"]
        },
        sampleAnswer: "Sehr geehrte Praxis Dr. Müller,\n\nich habe am Donnerstag um 10:00 Uhr einen Untersuchungstermin bei Ihnen. Leider muss ich diesen Termin absagen, weil ich eine dringende Besprechung in der Firma habe. Wäre es möglich, den Termin auf nächste Woche Freitag zu verschieben?\n\nMit freundlichen Grüßen,\nMichael Bauer",
        sampleAnswerEN: "Dear Dr. Müller's Clinic,\n\nI have an examination appointment with you on Thursday at 10:00 AM. Unfortunately, I have to cancel this appointment because I have an urgent meeting at my company. Would it be possible to reschedule the appointment to next Friday?\n\nSincerely yours,\nMichael Bauer",
        sampleBreakdown: "✅ 41 Wörter. Höflicher, formaler Tonfall ('Sehr geehrte...', 'Wäre es möglich...'), lückenlose Abdeckung der 3 Leitpunkte mit korrekter Kausalität ('weil')."
    },
    {
        id: "a2_write_7",
        part: "teil2",
        partBadge: "Teil 2: Formelle E-Mail",
        emoji: "🏠",
        title: "Heizungsausfall in der Mietwohnung",
        titleEN: "Broken Heating (Notice to Landlord)",
        situation: "In Ihrer Mietwohnung funktioniert seit gestern die Heizung nicht mehr. Es ist sehr kalt.",
        situationEN: "The heating in your rented apartment has not been working since yesterday. It is very cold.",
        leitpunkte: [
            { de: "Beschreiben Sie das Problem genau.", en: "Describe the exact issue." },
            { de: "Bitten Sie um eine schnelle Reparatur.", en: "Ask for a prompt technician repair." },
            { de: "Nennen Sie Ihre Telefonnummer für Rückfragen.", en: "Provide your phone number for callback." }
        ],
        targetWords: { min: 30, max: 45, optimal: "35–40" },
        redemittel: {
            anrede: ["Sehr geehrter Herr Meyer,", "Sehr geehrte Frau Wagner,"],
            einleitung: ["ich schreibe Ihnen, weil in meiner Wohnung die Heizung nicht funktioniert.", "leider gibt es ein Problem mit der Heizungsanlage."],
            leitpunktePhrases: [
                "Seit gestern Abend sind alle Heizkörper kalt und die Wohnung kühlt ab.",
                "Könnten Sie bitte so bald wie möglich einen Handwerker schicken?",
                "Bitte informieren Sie mich, wann der Techniker kommen kann.",
                "Sie erreichen mich telefonisch unter der Nummer 0176-1234567."
            ],
            schluss: ["Ich bedanke mich im Voraus für Ihre Hilfe.", "Mit freundlichen Grüßen"]
        },
        sampleAnswer: "Sehr geehrter Herr Meyer,\n\nich schreibe Ihnen, weil seit gestern in meiner Wohnung die Heizung komplett ausfällt. Es ist draußen winterlich kalt. Könnten Sie bitte schnell einen Handwerker beauftragen? Sie erreichen mich tagsüber telefonisch unter 0176-5554321.\n\nVielen Dank und mit freundlichen Grüßen,\nSandra Klein",
        sampleAnswerEN: "Dear Mr. Meyer,\n\nI am writing to you because since yesterday the heating in my apartment has completely failed. It is wintry cold outside. Could you please hire a repair technician quickly? You can reach me during the day by phone at 0176-5554321.\n\nThank you and with kind regards,\nSandra Klein",
        sampleBreakdown: "✅ 39 Wörter. Sehr sachlich und dringend formuliert, direkte Angabe der Erreichbarkeit und formelle Grußformel."
    },
    {
        id: "a2_write_8",
        part: "teil2",
        partBadge: "Teil 2: Formelle E-Mail",
        emoji: "🎓",
        title: "Abwesenheit im Deutschkurs",
        titleEN: "Absence Notice to Language School",
        situation: "Sie können nächste Woche nicht am Deutschkurs teilnehmen, weil Sie eine Dienstreise machen.",
        situationEN: "You cannot attend your German course next week because of a business trip.",
        leitpunkte: [
            { de: "Informieren Sie Ihre Lehrerin über die Abwesenheit.", en: "Inform your teacher about your absence." },
            { de: "Nennen Sie den Zeitraum und den Grund.", en: "State the timeframe and the reason (business trip)." },
            { de: "Bitten Sie um die Hausaufgaben per E-Mail.", en: "Request the homework assignments by email." }
        ],
        targetWords: { min: 30, max: 45, optimal: "35–40" },
        redemittel: {
            anrede: ["Sehr geehrte Frau Schneider,", "Liebe Frau Schneider,"],
            einleitung: ["ich möchte Ihnen mitteilen, dass ich nächste Woche nicht zum Unterricht kommen kann.", "leider kann ich nächste Woche nicht teilnehmen."],
            leitpunktePhrases: [
                "Von Montag bis Donnerstag bin ich für meine Firma auf Dienstreise in Hamburg.",
                "Könnten Sie mir bitte die Hausaufgaben und Kursmaterialien per E-Mail zusenden?",
                "Ich werde den verpassten Stoff am Wochenende nachholen."
            ],
            schluss: ["Vielen Dank für Ihre Unterstützung.", "Mit freundlichen Grüßen"]
        },
        sampleAnswer: "Sehr geehrte Frau Schneider,\n\nich möchte Sie darüber informieren, dass ich nächste Woche leider nicht am Deutschkurs teilnehmen kann. Ich muss von Montag bis Donnerstag auf eine Dienstreise nach Berlin. Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken?\n\nMit freundlichen Grüßen,\nKiran Patel",
        sampleAnswerEN: "Dear Ms. Schneider,\n\nI would like to inform you that unfortunately I will not be able to attend German class next week. I have to go on a business trip to Berlin from Monday to Thursday. Could you please email me the homework assignments?\n\nWith kind regards,\nKiran Patel",
        sampleBreakdown: "✅ 39 Wörter. Respektvoller Schulton, klare Daten ('von Montag bis Donnerstag') und eindeutige Bitte bezüglich der Hausaufgaben."
    },
    {
        id: "a2_write_9",
        part: "teil2",
        partBadge: "Teil 2: Formelle E-Mail",
        emoji: "🏨",
        title: "Hotelreservierung umbuchen",
        titleEN: "Hotel Reservation Date Change",
        situation: "Sie haben ein Zimmer im Hotel 'Alpenblick' gebucht. Wegen Flugverspätung kommen Sie einen Tag später an.",
        situationEN: "You booked a room at Hotel Alpenblick. Due to flight delays, you will arrive one day later.",
        leitpunkte: [
            { de: "Geben Sie Ihre Buchungsnummer an.", en: "State your booking reference number." },
            { de: "Erklären Sie die spätere Ankunft.", en: "Explain your later arrival." },
            { de: "Bitten Sie um eine schriftliche Bestätigung.", en: "Request a written confirmation." }
        ],
        targetWords: { min: 30, max: 45, optimal: "35–40" },
        redemittel: {
            anrede: ["Sehr geehrte Damen und Herren,", "Sehr geehrtes Team vom Hotel Alpenblick,"],
            einleitung: ["ich habe bei Ihnen ein Doppelzimmer unter der Buchungsnummer #8472 gebucht.", "ich schreibe bezüglich meiner Reservierung."],
            leitpunktePhrases: [
                "Wegen einer Flugverspätung kann ich erst am Samstag statt am Freitag anreisen.",
                "Gilt meine Reservierung trotzdem weiter?",
                "Bitte senden Sie mir eine kurze Bestätigung dieser Änderung an meine E-Mail-Adresse."
            ],
            schluss: ["Vielen Dank im Voraus.", "Mit freundlichen Grüßen"]
        },
        sampleAnswer: "Sehr geehrte Damen und Herren,\n\nich habe bei Ihnen ein Zimmer unter der Buchungsnummer #9123 gebucht. Wegen einer Flugänderung reise ich leider erst am Samstag anstatt am Freitag an. Bleibt meine Buchung bestehen? Bitte senden Sie mir eine kurze Bestätigung.\n\nMit freundlichen Grüßen,\nStefan Weber",
        sampleAnswerEN: "Dear Sir or Madam,\n\nI have booked a room with you under booking reference #9123. Due to a flight change, I will arrive on Saturday instead of Friday. Does my reservation remain valid? Please send me a brief confirmation.\n\nSincerely yours,\nStefan Weber",
        sampleBreakdown: "✅ 41 Wörter. Perfekt für Hotel-/Reisekorrespondenz mit Angabe der Referenznummer und präziser Bitte um schriftliche Rückbestätigung."
    },
    {
        id: "a2_write_10",
        part: "teil2",
        partBadge: "Teil 2: Formelle E-Mail",
        emoji: "💼",
        title: "Anfrage zu einem Praktikumsplatz",
        titleEN: "Inquiry About an Internship Position",
        situation: "Sie interessieren sich für ein Praktikum im Bereich Kundenservice bei der Firma TechNova GmbH.",
        situationEN: "You are interested in an internship in customer service at TechNova GmbH.",
        leitpunkte: [
            { de: "Stellen Sie sich kurz vor und nennen Sie das gewünschte Praktikum.", en: "Introduce yourself briefly and specify the internship." },
            { de: "Geben Sie den möglichen Zeitraum an (ab Mai für 3 Monate).", en: "State the possible period (from May for 3 months)." },
            { de: "Bitten Sie um ein Vorstellungsgespräch.", en: "Request a personal interview." }
        ],
        targetWords: { min: 30, max: 45, optimal: "35–40" },
        redemittel: {
            anrede: ["Sehr geehrte Frau Müller,", "Sehr geehrte Damen und Herren,"],
            einleitung: ["ich interessiere mich sehr für ein Praktikum in Ihrem Kundenservice.", "mit großem Interesse bewerbe ich mich."],
            leitpunktePhrases: [
                "Ich habe gute Deutsch- und Englischkenntnisse und lerne schnell.",
                "Ich könnte das Praktikum ab dem 1. Mai für drei Monate beginnen.",
                "Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen.",
                "Meinen Lebenslauf finden Sie im Anhang."
            ],
            schluss: ["Mit freundlichen Grüßen"]
        },
        sampleAnswer: "Sehr geehrte Damen und Herren,\n\nich interessiere mich für ein Praktikum im Kundenservice. Ich habe gute Deutschkenntnisse und könnte ab dem 1. Mai für drei Monate bei Ihnen arbeiten. Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen.\n\nMit freundlichen Grüßen,\nAnna Frank",
        sampleAnswerEN: "Dear Sir or Madam,\n\nI am interested in an internship in customer service. I have good German skills and could work for you for three months starting on May 1st. I would be very pleased to receive an invitation for a personal interview.\n\nSincerely yours,\nAnna Frank",
        sampleBreakdown: "✅ 38 Wörter. Formvollendeter Einstieg in die deutsche Bewerbungswelt mit anspruchsvollem Konjunktiv II ('würde ich mich freuen')."
    }
];

/* ==========================================================================
   2. A2 SPRECHEN (SPEAKING LAB) DATABASE
   Teil 1: Fragen stellen und beantworten (8 Cue Cards)
   Teil 2: Von sich erzählen (6 Monologe mit 5-Stufen-Sprechtrainer)
   Teil 3: Gemeinsam etwas planen (4 Verhandlungs-Szenarien)
   ========================================================================== */

const A2_SPEAKING_DATABASE = {
    // --- TEIL 1: FRAGEN STELLEN & BEANTWORTEN ---
    teil1_cue_cards: [
        {
            id: "card_1",
            theme: "Wohnung",
            themeEN: "Apartment / Housing",
            keyword: "Balkon",
            keywordEN: "balcony",
            emoji: "🏠",
            modelQuestion: "Haben Sie in Ihrer Wohnung einen Balkon?",
            modelQuestionEN: "Do you have a balcony in your apartment?",
            modelAnswer: "Ja, meine Wohnung hat einen kleinen Balkon mit vielen Pflanzen.",
            modelAnswerEN: "Yes, my apartment has a small balcony with lots of plants.",
            tip: "Formulieren Sie eine klare Ja/Nein-Frage oder eine W-Frage (z. B. 'Wie groß ist Ihr Balkon?')."
        },
        {
            id: "card_2",
            theme: "Arbeit & Beruf",
            themeEN: "Work & Profession",
            keyword: "Überstunden",
            keywordEN: "overtime hours",
            emoji: "💼",
            modelQuestion: "Müssen Sie bei Ihrer Arbeit oft Überstunden machen?",
            modelQuestionEN: "Do you often have to work overtime at your job?",
            modelAnswer: "Manchmal am Monatsende, aber normalerweise arbeite ich 40 Stunden pro Woche.",
            modelAnswerEN: "Sometimes at the end of the month, but normally I work 40 hours per week.",
            tip: "Nutzen Sie Modalverben wie 'müssen' oder 'können'."
        },
        {
            id: "card_3",
            theme: "Freizeit & Sport",
            themeEN: "Leisure & Sports",
            keyword: "Wochenende",
            keywordEN: "weekend",
            emoji: "⚽",
            modelQuestion: "Was machen Sie am liebsten am Wochenende?",
            modelQuestionEN: "What do you like to do most at the weekend?",
            modelAnswer: "Am Wochenende mache ich gerne lange Spaziergänge und treffe mich mit Freunden.",
            modelAnswerEN: "On the weekend I like taking long walks and meeting up with friends.",
            tip: "Gute W-Frage mit 'Was machen Sie... am Wochenende?'."
        },
        {
            id: "card_4",
            theme: "Einkaufen",
            themeEN: "Shopping",
            keyword: "Supermarkt",
            keywordEN: "supermarket",
            emoji: "🛍️",
            modelQuestion: "In welchem Supermarkt kaufen Sie Ihre Lebensmittel ein?",
            modelQuestionEN: "In which supermarket do you buy your groceries?",
            modelAnswer: "Ich gehe meistens zu Edeka oder Aldi, weil sie ganz in meiner Nähe sind.",
            modelAnswerEN: "I mostly go to Edeka or Aldi because they are right near me.",
            tip: "Begründen Sie Ihre Antwort mit 'weil...' für eine bessere Bewertung."
        },
        {
            id: "card_5",
            theme: "Verkehr & Reisen",
            themeEN: "Transport & Travel",
            keyword: "Fahrkarte",
            keywordEN: "ticket",
            emoji: "🚆",
            modelQuestion: "Wo kaufen Sie normalerweise Ihre Fahrkarte für die Bahn?",
            modelQuestionEN: "Where do you usually buy your train ticket?",
            modelAnswer: "Ich kaufe mein Ticket fast immer online mit der Bahn-App auf dem Handy.",
            modelAnswerEN: "I almost always buy my ticket online with the train app on my mobile phone.",
            tip: "Fragen mit 'Wo' oder 'Wie oft' sind ideal für das Thema Verkehr."
        },
        {
            id: "card_6",
            theme: "Gesundheit",
            themeEN: "Health & Fitness",
            keyword: "Sport",
            keywordEN: "sports / exercise",
            emoji: "🥗",
            modelQuestion: "Welchen Sport treiben Sie, um gesund zu bleiben?",
            modelQuestionEN: "Which sports do you do to stay healthy?",
            modelAnswer: "Ich gehe zweimal pro Woche schwimmen und fahre jeden Tag mit dem Fahrrad.",
            modelAnswerEN: "I go swimming twice a week and ride my bicycle every day.",
            tip: "Verwenden Sie Häufigkeitswörter wie 'zweimal pro Woche' oder 'regelmäßig'."
        },
        {
            id: "card_7",
            theme: "Essen & Trinken",
            themeEN: "Food & Drinks",
            keyword: "Frühstück",
            keywordEN: "breakfast",
            emoji: "🥐",
            modelQuestion: "Was frühstücken Sie morgens an einem normalen Arbeitstag?",
            modelQuestionEN: "What do you have for breakfast on a normal working day?",
            modelAnswer: "Unter der Woche trinke ich meistens nur Kaffee und esse ein Brötchen mit Käse.",
            modelAnswerEN: "During the week I usually just drink coffee and eat a bread roll with cheese.",
            tip: "Achten Sie auf die Verbstellung: Im Aussagesatz steht das Verb an Position 2."
        },
        {
            id: "card_8",
            theme: "Sprachen lernen",
            themeEN: "Learning Languages",
            keyword: "Wörterbuch",
            keywordEN: "dictionary",
            emoji: "📖",
            modelQuestion: "Benutzen Sie ein digitales Wörterbuch beim Deutschlernen?",
            modelQuestionEN: "Do you use a digital dictionary when learning German?",
            modelAnswer: "Ja, ich nutze täglich eine Wörterbuch-App auf meinem Smartphone zum Vokabellernen.",
            modelAnswerEN: "Yes, I use a dictionary app on my smartphone daily for learning vocabulary.",
            tip: "Benutzen Sie Wörter wie 'täglich', 'oft' oder 'manchmal'."
        }
    ],

    // --- TEIL 2: VON SICH ERZÄHLEN (5-STUFEN-MONOLOGE) ---
    teil2_monologues: [
        {
            id: "mono_1",
            title: "Mein Beruf & Arbeitsalltag",
            titleEN: "My Profession & Daily Work Routine",
            emoji: "💼",
            cues: [
                { de: "Beruf & Branche", en: "Profession & Industry" },
                { de: "Arbeitszeiten & Arbeitsort", en: "Working hours & workplace" },
                { de: "Typische Aufgaben", en: "Typical tasks" },
                { de: "Was gefällt mir gut / weniger gut", en: "What I like / dislike" }
            ],
            sentences: [
                {
                    de: "Ich arbeite als Softwareentwickler bei einer internationalen Firma.",
                    en: "I work as a software developer at an international company.",
                    mal: "ഇഹ് അർബൈറ്റെ അൽസ് സോഫ്റ്റ്‌വെയർ എൻറ്റ്‌വിക്ലർ ബൈ ഐനർ ഇന്റർനാഷണലൻ ഫിർമ."
                },
                {
                    de: "Mein Arbeitstag beginnt meistens um 8 Uhr morgens im Homeoffice.",
                    en: "My workday usually starts at 8 AM in my home office.",
                    mal: "മൈൻ അർബൈറ്റ്സ്താഗ് ബെഗിന്റ് മൈസ്റ്റൻസ് ഉം ആഹ്ത് ഉഹ്ർ മോർഗൻസ് ഇം ഹോംഓഫീസ്."
                },
                {
                    de: "Zu meinen Aufgaben gehört das Schreiben von Programmen und die Teilnahme an Teambesprechungen.",
                    en: "My duties include writing programs and participating in team meetings.",
                    mal: "ത്സു മൈനൻ ഔഫ്ഗാബെൻ ഗെഹ്യോർട്ട് ദാസ് ഷ്രൈബെൻ ഫോൺ പ്രോഗ്രാമെൻ ഉണ്ട് ഡീ തൈൽനാമെ ആൻ ടീംബെഷ്പ്രെഹുൻഗെൻ."
                },
                {
                    de: "Mittags mache ich eine Stunde Pause und koche mir etwas Gesundes.",
                    en: "At midday I take a one-hour break and cook something healthy.",
                    mal: "മിറ്റാഗ്സ് മാഹെ ഇഹ് ഐനെ ഷ്ടുൻഡെ പൗസെ ഉണ്ട് കോഹെ മിർ എത്‌വാസ് ഗെസുൻഡെസ്."
                },
                {
                    de: "Ich arbeite sehr gerne im Team, weil meine Kollegen hilfsbereit sind.",
                    en: "I really like working in a team because my colleagues are helpful.",
                    mal: "ഇഹ് അർബൈറ്റെ സേർ ഗെർനെ ഇം ടീം, വൈൽ മൈനെ കൊളേഗൻ ഹിൽഫ്സ്ബൈറൈറ്റ് സിന്റ്."
                },
                {
                    de: "Manchmal ist die Arbeit stressig, besonders wenn ein Projekt fertig werden muss.",
                    en: "Sometimes the work is stressful, especially when a project needs to be completed.",
                    mal: "മാൻഹ്‌മാൽ ഇസ്റ്റ് ഡീ അർബൈറ്റ് സ്ട്രെസിഗ്, ബെസോണ്ടേഴ്സ് വെൻ ഐൻ പ്രൊയെക്റ്റ് ഫെർട്ടിഗ് വേർഡൻ മുസ്."
                },
                {
                    de: "Insgesamt bin ich aber sehr zufrieden mit meiner beruflichen Situation.",
                    en: "Overall, however, I am very satisfied with my professional situation.",
                    mal: "ഇൻസ്ഗെസാംത് ബിൻ ഇഹ് ആബർ സേർ ത്സുഫ്രീഡൻ മിറ്റ് മൈനർ ബെറൂഫ്ലിഹെൻ സിറ്റ്വത്സിയോൺ."
                }
            ],
            gaps: [
                { sentence: "Ich arbeite als ___ bei einer internationalen Firma.", answer: "Softwareentwickler", hint: "Beruf" },
                { sentence: "Mein Arbeitstag beginnt meistens ___ 8 Uhr morgens.", answer: "um", hint: "Präposition (Zeit)" },
                { sentence: "Mittags mache ich eine Stunde ___.", answer: "Pause", hint: "Erholung" },
                { sentence: "Ich arbeite gerne im Team, ___ meine Kollegen hilfsbereit sind.", answer: "weil", hint: "Kausal-Konjunktion" }
            ]
        },
        {
            id: "mono_2",
            title: "Meine Wohnung & Nachbarschaft",
            titleEN: "My Apartment & Neighborhood",
            emoji: "🏠",
            cues: [
                { de: "Größe & Zimmeranzahl", en: "Size & number of rooms" },
                { de: "Lage in der Stadt", en: "Location in the city" },
                { de: "Lieblingsraum", en: "Favorite room" },
                { de: "Nachbarn & Verkehrsanbindung", en: "Neighbors & transport links" }
            ],
            sentences: [
                {
                    de: "Ich wohne in einer Dreizimmerwohnung im zweiten Stock eines Mehrfamilienhauses.",
                    en: "I live in a three-room apartment on the second floor of an apartment building.",
                    mal: "ഇഹ് വോഹ്നെ ഇൻ ഐനർ ഡ്രൈറ്റ്സിമ്മർവോഹ്നുംഗ് ഇം ത്സവൈറ്റൻ ഷ്ടോക്ക് ഐനസ് മേർഫാമിലിയൻഹൗസസ്."
                },
                {
                    de: "Die Wohnung ist etwa 75 Quadratmeter groß und hat einen sonnigen Balkon.",
                    en: "The apartment is about 75 square meters in size and has a sunny balcony.",
                    mal: "ഡീ വോഹ്നുംഗ് ഇസ്റ്റ് എത്‌വാ ഫ്യുൻഫ്ഉണ്ട്സീബ്സിഗ് ക്വാഡ്രാറ്റ്മീറ്റർ ഗ്രോസ് ഉണ്ട് ഹാറ്റ് ഐനൻ സൊണ്ണിഗെൻ ബാൽക്കോൺ."
                },
                {
                    de: "Mein Lieblingszimmer ist das Wohnzimmer, weil es sehr hell und gemütlich ist.",
                    en: "My favorite room is the living room because it is very bright and cozy.",
                    mal: "മൈൻ ലീബ്ലിങ്സ്ത്സിമ്മർ ഇസ്റ്റ് ദാസ് വോൺത്സിമ്മർ, വൈൽ എസ് സേർ ഹെൽ ഉണ്ട് ഗെമ്യൂട്ട്ലിഹ് ഇസ്റ്റ്."
                },
                {
                    de: "In der Küche koche ich gerne am Wochenende für Freunde.",
                    en: "In the kitchen I enjoy cooking for friends on weekends.",
                    mal: "ഇൻ ഡെർ ക്യുഹെ കോഹെ ഇഹ് ഗെർനെ ആം വോഹെൻഎൻഡെ ഫ്യൂർ ഫ്രോയ്ൻഡെ."
                },
                {
                    de: "Die Nachbarschaft ist ruhig und es gibt einen schönen Park in der Nähe.",
                    en: "The neighborhood is quiet and there is a nice park nearby.",
                    mal: "ഡീ നാഹ്ബാർഷാഫ്റ്റ് ഇസ്റ്റ് റൂഹിഗ് ഉണ്ട് എസ് ഗിബ്ത് ഐനൻ ഷ്യോണൻ പാർക്ക് ഇൻ ഡെർ നേഹെ."
                },
                {
                    de: "Zur U-Bahn-Station brauche ich nur fünf Minuten zu Fuß.",
                    en: "It takes me only five minutes on foot to reach the subway station.",
                    mal: "ത്സൂർ ഊ-ബാൻ-ഷ്ടാത്സിയോൺ ബ്രൗഹെ ഇഹ് നൂർ ഫ്യുൻഫ് മിനൂട്ടൻ ത്സു ഫൂസ്."
                },
                {
                    de: "Ich fühle mich in dieser Gegend wirklich sehr wohl.",
                    en: "I really feel very comfortable in this area.",
                    mal: "ഇഹ് ഫ്യൂലെ മിഹ് ഇൻ ഡീസർ ഗേഗെൻഡ് വിർക്ലിഹ് സേർ വോൾ."
                }
            ],
            gaps: [
                { sentence: "Ich wohne in einer Dreizimmerwohnung im ___ Stock.", answer: "zweiten", hint: "Ordinalzahl" },
                { sentence: "Mein Lieblingszimmer ist das Wohnzimmer, weil es sehr ___ ist.", answer: "gemütlich", hint: "Adjektiv (cozy)" },
                { sentence: "Zur U-Bahn brauche ich nur fünf Minuten zu ___.", answer: "Fuß", hint: "Fortbewegung" },
                { sentence: "Die Nachbarschaft ist ___ und sauber.", answer: "ruhig", hint: "Adjektiv (quiet)" }
            ]
        },
        {
            id: "mono_3",
            title: "Mein letzter Urlaub",
            titleEN: "My Last Vacation Experience",
            emoji: "✈️",
            cues: [
                { de: "Reiseziel & Reisezeit", en: "Destination & travel time" },
                { de: "Mit wem gereist", en: "Who you traveled with" },
                { de: "Aktivitäten & Sehenswürdigkeiten", en: "Activities & sights" },
                { de: "Essen & Wetter", en: "Food & weather" }
            ],
            sentences: [
                {
                    de: "Letzten Sommer bin ich mit meiner Familie für zwei Wochen nach Italien geflogen.",
                    en: "Last summer I flew to Italy for two weeks with my family.",
                    mal: "ലെറ്റ്സ്റ്റൻ സൊമ്മർ ബിൻ ഇഹ് മിറ്റ് മൈനർ ഫാമിലിയെ ഫ്യൂർ ത്സവൈ വോഹെൻ നാഹ് ഇറ്റാലിയൻ ഗെഫ്ലോഗൻ."
                },
                {
                    de: "Wir haben eine Ferienwohnung direkt an der Küste gemietet.",
                    en: "We rented a holiday apartment directly on the coast.",
                    mal: "വീർ ഹാബെൻ ഐനെ ഫേരിയൻവോഹ്നുംഗ് ഡിറെക്റ്റ് ആൻ ഡെർ ക്യുസ്റ്റെ ഗെമീയറ്ററ്റ്."
                },
                {
                    de: "Das Wetter war herrlich und die Sonne hat jeden Tag geschienen.",
                    en: "The weather was wonderful and the sun shone every single day.",
                    mal: "ദാസ് വെറ്റർ വാർ ഹെർലിഹ് ഉണ്ട് ഡീ സൊണ്ണെ ഹാറ്റ് യേഡൻ താഹ് ഗെഷീനൻ."
                },
                {
                    de: "Tagsüber waren wir oft am Strand schwimmen und abends sind wir durch die Altstadt spaziert.",
                    en: "During the day we often swam at the beach and in the evening we strolled through the old town.",
                    mal: "താഗ്സ്യൂബർ വാറെൻ വീർ ഓഫ്ട് ആം സ്ട്രാൻഡ് ഷ്വിമ്മെൻ ഉണ്ട് ആബെൻഡ്സ് സിന്റ് വീർ ദുർഹ് ഡീ ആൾട്ട്ഷ്ടാറ്റ് ഷ്പാത്സീയർട്ട്."
                },
                {
                    de: "Das italienische Essen hat fantastisch geschmeckt, besonders die frische Pasta.",
                    en: "The Italian food tasted fantastic, especially the fresh pasta.",
                    mal: "ദാസ് ഇറ്റാലിയാനിഷെ എസ്സെൻ ഹാറ്റ് ഫന്റാസ്റ്റിഷ് ഗെഷ്മെക്റ്റ്, ബെസോണ്ടേഴ്സ് ഡീ ഫ്രിഷെ പാസ്ത."
                },
                {
                    de: "Die Reise war sehr erholsam und wir haben viele schöne Erinnerungen gesammelt.",
                    en: "The trip was very relaxing and we collected many beautiful memories.",
                    mal: "ഡീ റൈസെ വാർ സേർ എർഹോൾസാം ഉണ്ട് വീർ ഹാബെൻ ഫീലെ ഷ്യോനെ എറിന്നെറുൻഗെൻ ഗെസാംമെൽറ്റ്."
                }
            ],
            gaps: [
                { sentence: "Letzten Sommer bin ich nach Italien ___.", answer: "geflogen", hint: "Partizip II (fliegen)" },
                { sentence: "Das Wetter war herrlich und die Sonne hat ___.", answer: "geschienen", hint: "Partizip II (scheinen)" },
                { sentence: "Wir haben eine Ferienwohnung an der Küste ___.", answer: "gemietet", hint: "Partizip II (mieten)" },
                { sentence: "Die Reise war sehr ___.", answer: "erholsam", hint: "Adjektiv (relaxing)" }
            ]
        },
        {
            id: "mono_4",
            title: "Mein typisches Wochenende",
            titleEN: "My Typical Weekend Routine",
            emoji: "🏃",
            cues: [
                { de: "Samstagmorgen & Einkaufen", en: "Saturday morning & shopping" },
                { de: "Sportliche Aktivitäten", en: "Sports & outdoor activities" },
                { de: "Abendprogramm mit Freunden", en: "Evening plans with friends" },
                { de: "Sonntagsruhe & Vorbereitung", en: "Sunday relaxation & prep" }
            ],
            sentences: [
                {
                    de: "Am Samstagmorgen schlafe ich gerne etwas länger und frühstücke gemütlich.",
                    en: "On Saturday morning I like to sleep a bit longer and have a cozy breakfast.",
                    mal: "ആം സാംസ്താഗ്മോർഗൻ ഷ്ളാഫെ ഇഹ് ഗെർനെ എത്‌വാസ് ലെങ്ഗർ ഉണ്ട് ഫ്ര്യൂഹ്ഷ്ട്യുക്കെ ഗെമ്യൂട്ട്ലിഹ്."
                },
                {
                    de: "Danach gehe ich auf den Wochenmarkt, um frisches Obst und Gemüse zu kaufen.",
                    en: "Afterwards I go to the weekly market to buy fresh fruit and vegetables.",
                    mal: "ദാനാഹ് ഗേഹെ ഇഹ് ഔഫ് ഡെൻ വോഹെന്മാര്ക്റ്റ്, ഉം ഫ്രിഷെസ് ഒബ്സ്റ്റ് ഉണ്ട് ഗെമ്യൂസെ ത്സു കൗഫെൻ."
                },
                {
                    de: "Am Nachmittag fahre ich oft mit dem Fahrrad oder gehe ins Fitnessstudio.",
                    en: "In the afternoon I often ride my bicycle or go to the gym.",
                    mal: "ആം നാഹ്മിറ്റാഗ് ഫാഹ്റെ ഇഹ് ഓഫ്ട് മിറ്റ് ഡെം ഫാഹ്റ്രാഡ് ഒഡർ ഗേഹെ ഇൻസ് ഫിറ്റ്നസ്സ്റ്റുഡിയോ."
                },
                {
                    de: "Samstagabends treffe ich mich meistens mit Freunden im Restaurant oder im Kino.",
                    en: "On Saturday evenings I mostly meet friends at a restaurant or the cinema.",
                    mal: "സാംസ്താഗ്ആബെൻഡ്സ് ട്രെഫെ ഇഹ് മിഹ് മൈസ്റ്റൻസ് മിറ്റ് ഫ്രോയ്ൻഡെൻ ഇം റെസ്റ്റോറന്റ് ഒഡർ ഇം കിനോ."
                },
                {
                    de: "Der Sonntag ist bei mir ganz der Entspannung und meiner Familie gewidmet.",
                    en: "Sunday for me is entirely dedicated to relaxation and my family.",
                    mal: "ഡെർ സൊൺതാഹ് ഇസ്റ്റ് ബൈ മിർ ഗാൻസ് ഡെർ എന്റ്ഷ്പാനുങ് ഉണ്ട് മൈനർ ഫാമിലിയെ ഗെവിഡ്മെറ്റ്."
                },
                {
                    de: "Ich lese ein Buch, höre Musik und bereite mich auf die neue Arbeitswoche vor.",
                    en: "I read a book, listen to music, and prepare for the new workweek.",
                    mal: "ഇഹ് ലേസെ ഐൻ ബൂഹ്, ഹ്യോറെ മൂസിക് ഉണ്ട് ബെറൈറ്റെ മിഹ് ഔഫ് ഡീ നോയെ അർബൈറ്റ്സ്വോഹെ ഫോർ."
                }
            ],
            gaps: [
                { sentence: "Am Samstagmorgen schlafe ich gerne etwas ___.", answer: "länger", hint: "Komparativ (long)" },
                { sentence: "Ich gehe auf den Wochenmarkt, ___ frisches Gemüse zu kaufen.", answer: "um", hint: "Infinitiv mit 'um... zu'" },
                { sentence: "Der Sonntag ist ganz der ___ gewidmet.", answer: "Entspannung", hint: "Nomen (relaxation)" },
                { sentence: "Ich bereite mich auf die neue Woche ___.", answer: "vor", hint: "Trennbare Vorsilbe" }
            ]
        },
        {
            id: "mono_5",
            title: "Meine Wohnung & mein Wohnort",
            titleEN: "My Apartment & Neighborhood",
            emoji: "🏡",
            cues: [
                { de: "Art der Wohnung & Zimmer", en: "Type of apartment & rooms" },
                { de: "Lage & Verkehrsanbindung", en: "Location & transport connections" },
                { de: "Mein Lieblingsort zu Hause", en: "My favorite spot at home" },
                { de: "Was gefällt mir / was fehlt", en: "What I like / what is missing" }
            ],
            sentences: [
                {
                    de: "Ich wohne in einer gemütlichen Dreizimmerwohnung im zweiten Stock.",
                    en: "I live in a cozy three-room apartment on the second floor.",
                    mal: "ഇഹ് വോഹ്നെ ഇൻ ഐനർ ഗെമ്യൂട്ട്ലിഹെൻ ഡ്രൈസിമർവോഹ്നുങ് ഇം സ്വൈറ്റൻ സ്റ്റോക്ക്."
                },
                {
                    de: "Die Wohnung hat ein großes Wohnzimmer, ein Schlafzimmer, eine Küche und einen Balkon.",
                    en: "The apartment has a large living room, a bedroom, a kitchen, and a balcony.",
                    mal: "ഡീ വോഹ്നുങ് ഹാറ്റ് ഐൻ ഗ്രോസെസ് വോൺസിമർ, ഐൻ ഷ്ളാഫ്സിമർ, ഐനെ ക്യൂഹെ ഉണ്ട് ഐനൻ ബാൽക്കോൺ."
                },
                {
                    de: "Meine Wohnung liegt sehr zentral, deshalb kann ich die U-Bahn in fünf Minuten zu Fuß erreichen.",
                    en: "My apartment is located very centrally, therefore I can reach the subway in five minutes on foot.",
                    mal: "മൈനെ വോഹ്നുങ് ലീഗ്ത് സേർ സെൻട്രാൾ, ദേസ്ഹാൽബ് കാൻ ഇഹ് ഡീ ഊ-ബാൻ ഇൻ ഫ്യൂൺഫ് മിനൂട്ടൻ ത്സു ഫൂസ് എറൈഹെൻ."
                },
                {
                    de: "Mein absoluter Lieblingsplatz ist der Balkon, weil ich dort im Sommer Kaffee trinke.",
                    en: "My absolute favorite spot is the balcony because I drink coffee there in the summer.",
                    mal: "മൈൻ അബ്സൊലൂട്ടർ ലീബ്ലിങ്സ്പ്ലാറ്റ്സ് ഇസ്റ്റ് ഡെർ ബാൽക്കോൺ, വൈൽ ഇഹ് ഡോർട്ട് ഇം സോമർ കാഫെ ട്രിങ്കെ."
                },
                {
                    de: "In der Nähe gibt es einen Supermarkt, eine Apotheke und einen schönen Stadtpark.",
                    en: "Nearby there is a supermarket, a pharmacy, and a nice city park.",
                    mal: "ഇൻ ഡെർ നേഹെ ഗിബ്ത് എസ് ഐനൻ സൂപ്പർമാർക്റ്റ്, ഐനെ അപ്പോത്തേക്കെ ഉണ്ട് ഐനൻ ഷ്യോനൻ സ്റ്റാറ്റ്പാർക്ക്."
                },
                {
                    de: "Nur die Miete ist ziemlich hoch, aber insgesamt fühle ich mich hier sehr wohl.",
                    en: "Only the rent is rather high, but overall I feel very comfortable here.",
                    mal: "നൂർ ഡീ മീറ്റെ ഇസ്റ്റ് സിംലിഹ് ഹോഹ്, ആബർ ഇൻസ്ഗെസാംത് ഫ്യൂഹ്ളെ ഇഹ് മിഹ് ഹീയർ സേർ വോൾ."
                }
            ],
            gaps: [
                { sentence: "Ich wohne in einer gemütlichen ___ im zweiten Stock.", answer: "Dreizimmerwohnung", hint: "Nomen (three-room apartment)" },
                { sentence: "Die Wohnung liegt zentral, ___ kann ich die U-Bahn schnell erreichen.", answer: "deshalb", hint: "Konnektor (therefore)" },
                { sentence: "Mein Lieblingsplatz ist der Balkon, ___ ich dort gerne Kaffee trinke.", answer: "weil", hint: "Kausal (because - Verb am Ende)" },
                { sentence: "Insgesamt fühle ich mich hier sehr ___.", answer: "wohl", hint: "Adverb (feel at home / comfortable)" }
            ]
        },
        {
            id: "mono_6",
            title: "Freizeit, Sport & Hobbys",
            titleEN: "Free Time, Sports & Hobbies",
            emoji: "⚽",
            cues: [
                { de: "Meine liebsten Hobbys", en: "My favorite hobbies" },
                { de: "Wann und wie oft", en: "When and how often" },
                { de: "Mit wem mache ich das", en: "With whom I do it" },
                { de: "Warum mir das guttut", en: "Why it does me good" }
            ],
            sentences: [
                {
                    de: "In meiner Freizeit beschäftige ich mich am liebsten mit Sport und Musik.",
                    en: "In my free time I most enjoy occupying myself with sports and music.",
                    mal: "ഇൻ മൈനർ ഫ്രൈത്സൈറ്റ് ബെഷെഫ്റ്റിഗെ ഇഹ് മിഹ് ആം ലീബ്സ്റ്റൻ മിറ്റ് സ്പോർട്ട് ഉണ്ട് മൂസിക്."
                },
                {
                    de: "Zweimal pro Woche gehe ich abends joggen oder schwimme im Hallenbad.",
                    en: "Twice a week I go jogging in the evenings or swim in the indoor pool.",
                    mal: "സ്വൈമാൽ പ്രൊ വോഹെ ഗേഹെ ഇഹ് ആബെൻഡ്സ് ജോഗൻ ഒഡർ ഷ്വിമ്മെ ഇം ഹാലൻബാദ്."
                },
                {
                    de: "Am Wochenende spiele ich oft mit meinen Freunden Fußball auf dem Sportplatz.",
                    en: "On the weekend I often play football with my friends on the sports field.",
                    mal: "ആം വോഹെനെൻഡെ ഷ്പീലെ ഇഹ് ഓഫ്ട് മിറ്റ് മൈനൻ ഫ്രോയ്ൻഡെൻ ഫുസ്ബാൽ ഔഫ് ഡെം സ്പോർട്ട്പ്ലാറ്റ്സ്."
                },
                {
                    de: "Wenn das Wetter schlecht ist, bleibe ich zu Hause und lerne Gitarre spielen.",
                    en: "When the weather is bad, I stay at home and learn to play the guitar.",
                    mal: "വെൻ ദാസ് വെറ്റർ ഷ്ളെഹ്റ്റ് ഇസ്റ്റ്, ബ്ലൈബെ ഇഹ് ത്സു ഹൗസെ ഉണ്ട് ലേർനെ ഗിറ്റാറെ ഷ്പീലൻ."
                },
                {
                    de: "Sport ist wichtig für mich, weil er mir hilft, nach der Arbeit zu entspannen.",
                    en: "Sports is important to me because it helps me relax after work.",
                    mal: "സ്പോർട്ട് ഇസ്റ്റ് വിഹ്റ്റിഗ് ഫ്യൂർ മിഹ്, വൈൽ എർ മിർ ഹിൽഫ്റ്റ്, നാഹ് ഡെർ അർബൈറ്റ് ത്സു എന്റ്ഷ്പാനൻ."
                },
                {
                    de: "Durch meine Hobbys bleibe ich fit und lerne immer neue interessante Leute kennen.",
                    en: "Through my hobbies I stay fit and always get to know new interesting people.",
                    mal: "ദുർഹ് മൈനെ ഹോബീസ് ബ്ലൈബെ ഇഹ് ഫിറ്റ് ഉണ്ട് ലേർനെ ഇമർ നോയെ ഇന്ററസാൻറ്റെ ലോയ്റ്റെ കെന്നൻ."
                }
            ],
            gaps: [
                { sentence: "In meiner Freizeit beschäftige ich mich am ___ mit Sport.", answer: "liebsten", hint: "Superlativ von gern (most of all)" },
                { sentence: "___ pro Woche gehe ich abends joggen.", answer: "Zweimal", hint: "Häufigkeit (twice)" },
                { sentence: "Sport ist wichtig, ___ er mir beim Entspannen hilft.", answer: "weil", hint: "Konnektor mit Verb am Ende" },
                { sentence: "Ich bleibe fit und lerne neue Leute ___.", answer: "kennen", hint: "Trennbare Verbpartikel (kennenlernen)" }
            ]
        }
    ],

    // --- TEIL 3: GEMEINSAM ETWAS PLANEN (INTERACTIVE NEGOTIATIONS) ---
    teil3_planning: [
        {
            id: "plan_1",
            title: "Geburtstagsparty für Kollegen",
            titleEN: "Birthday Surprise for Colleague Thomas",
            emoji: "🎂",
            situation: "Ihr Kollege Thomas hat nächste Woche Geburtstag. Sie und Ihre Partnerin möchten eine Überraschung im Büro planen.",
            situationEN: "Your colleague Thomas has a birthday next week. You and your partner want to plan a surprise at the office.",
            points: [
                { de: "Wann feiern? (Tag und Uhrzeit)", en: "When to celebrate? (Day & Time)" },
                { de: "Geschenk kaufen (Was und wie viel Geld?)", en: "Gift (What & how much money?)" },
                { de: "Essen und Getränke (Wer bringt was mit?)", en: "Food & Drinks (Who brings what?)" }
            ],
            turns: [
                {
                    partnerSpeech: "Hallo! Thomas hat doch am Freitag Geburtstag. Wollen wir ihn nach Feierabend um 17 Uhr überraschen?",
                    partnerSpeechEN: "Hello! Thomas has his birthday on Friday. Shall we surprise him after work at 5 PM?",
                    options: [
                        { text: "Ja, das ist eine super Idee! 17 Uhr passt perfekt.", type: "agree", note: "Zustimmen" },
                        { text: "Um 17 Uhr haben manche noch Kundentermine. Wie wäre es stattdessen in der Mittagspause um 12:30 Uhr?", type: "counter", note: "Gegenvorschlag mit Begründung" }
                    ]
                },
                {
                    partnerSpeech: "Guter Punkt! Machen wir es in der Mittagspause. Und was schenken wir ihm? Er liest doch gerne Krimis.",
                    partnerSpeechEN: "Good point! Let's do it during lunch break. And what shall we gift him? He likes reading detective novels.",
                    options: [
                        { text: "Ein Buchgutschein für 25 Euro wäre toll. Jeder im Team gibt 5 Euro dazu.", type: "counter", note: "Vorschlag Budget" },
                        { text: "Tolle Idee, wir kaufen ihm den neuen Bestseller und eine schöne Geburtstagskarte.", type: "agree", note: "Zustimmen" }
                    ]
                },
                {
                    partnerSpeech: "Einverstanden! Und wer kümmert sich um Kuchen und Getränke?",
                    partnerSpeechEN: "Agreed! And who will take care of the cake and drinks?",
                    options: [
                        { text: "Ich kann zu Hause einen Schokoladenkuchen backen. Kannst du den Saft und Kaffee besorgen?", type: "proposal", note: "Aufgabenverteilung" },
                        { text: "Wir können beim Bäcker nebenan eine Torte bestellen und im Pausenraum Kaffee kochen.", type: "proposal", note: "Alternative" }
                    ]
                },
                {
                    partnerSpeech: "Perfekt, so machen wir das! Ich freue mich schon auf Freitag.",
                    partnerSpeechEN: "Perfect, let's do it like that! I'm already looking forward to Friday.",
                    options: [
                        { text: "Super, danke für die gute Absprache. Bis Freitag!", type: "conclusion", note: "Abschluss & Bestätigung" }
                    ]
                }
            ]
        },
        {
            id: "plan_2",
            title: "Wochenendausflug & Fahrradtour",
            titleEN: "Weekend Bicycle Tour with Picnic",
            emoji: "🚲",
            situation: "Sie und Ihre Freundin möchten am Samstag eine gemeinsame Fahrradtour an den See machen.",
            situationEN: "You and your friend want to go on a joint bicycle tour to the lake this Saturday.",
            points: [
                { de: "Treffpunkt und Abfahrtszeit", en: "Meeting point & departure time" },
                { de: "Route und Ziel (See oder Wald)", en: "Route & destination (lake or forest)" },
                { de: "Verpflegung & Picknick", en: "Food provisions & picnic" }
            ],
            turns: [
                {
                    partnerSpeech: "Hi! Hast du Lust, am Samstag um 8:00 Uhr morgens am Hauptbahnhof zu starten?",
                    partnerSpeechEN: "Hi! Would you like to start at 8:00 AM on Saturday at the main train station?",
                    options: [
                        { text: "8:00 Uhr ist mir am Wochenende etwas zu früh. Könnten wir uns um 9:30 Uhr am Schlosspark treffen?", type: "counter", note: "Höflicher Gegenvorschlag" },
                        { text: "Klar, 8:00 Uhr passt mir gut. Dann haben wir den ganzen Tag Zeit!", type: "agree", note: "Zustimmen" }
                    ]
                },
                {
                    partnerSpeech: "Alles klar, 9:30 Uhr am Schlosspark ist super. Fahren wir direkt an den Waldsee?",
                    partnerSpeechEN: "Alright, 9:30 AM at the palace park is great. Shall we ride directly to the forest lake?",
                    options: [
                        { text: "Ja, der Weg zum Waldsee ist wunderschön und asphaltiert.", type: "agree", note: "Zustimmen" },
                        { text: "Am Waldsee ist es samstags oft voll. Wollen wir lieber entlang des Flusses fahren?", type: "counter", note: "Alternative Route" }
                    ]
                },
                {
                    partnerSpeech: "Gerne! Was nehmen wir zu essen mit? Sollen wir Sandwiches und Obst einpacken?",
                    partnerSpeechEN: "Gladly! What shall we take to eat? Shall we pack sandwiches and fruit?",
                    options: [
                        { text: "Ja, ich belege Sandwiches mit Käse und bringe Mineralwasser mit. Nimmst du Äpfel mit?", type: "proposal", note: "Arbeitsteilung" },
                        { text: "Gute Idee, und eine Picknickdecke sollten wir auf keinen Fall vergessen!", type: "agree", note: "Ergänzung" }
                    ]
                },
                {
                    partnerSpeech: "Abgemacht! Hoffentlich scheint die Sonne. Dann sehen wir uns am Samstag!",
                    partnerSpeechEN: "Deal! Hopefully the sun shines. See you on Saturday then!",
                    options: [
                        { text: "Ja, hoffentlich! Ich freue mich schon sehr darauf. Bis Samstag!", type: "conclusion", note: "Abschluss" }
                    ]
                }
            ]
        }
    ]
};

/* ==========================================================================
   3. A2 WRITING STUDIO (SCHREIBEN) — UI LOGIC & CONTROLLER
   ========================================================================== */

let activeA2WritingState = {
    currentTaskId: "a2_write_1",
    filter: "all",
    stage: 1 // 1: Aufgabe, 2: Wortschatz & Redemittel, 3: Schreibwerkstatt
};
window.activeA2WritingState = activeA2WritingState;

window.openA2WritingStudio = function(pushHistory = true) {
    if (typeof scrollAppToTop === "function") scrollAppToTop();
    if (typeof switchToView === "function") switchToView("view-a2-writing", false);

    const selHub = document.getElementById("a2-writing-selection-hub");
    const workspace = document.getElementById("a2-writing-workspace");
    const titleEl = document.getElementById("a2-writing-title");

    if (selHub) selHub.style.display = "block";
    if (workspace) workspace.style.display = "none";
    if (titleEl) titleEl.textContent = "A2 Schreibstudio / Writing Studio";

    renderA2WritingTopicsGrid(activeA2WritingState.filter || "all");

    if (typeof scrollAppToTop === "function") {
        scrollAppToTop();
        requestAnimationFrame(scrollAppToTop);
        setTimeout(scrollAppToTop, 25);
    }

};

window.filterA2WritingPart = function(part) {
    activeA2WritingState.filter = part;
    ["all", "teil1", "teil2"].forEach(function(p) {
        const btn = document.getElementById(`a2-writing-filter-${p}`);
        if (btn) {
            if (p === part) btn.classList.add("active");
            else btn.classList.remove("active");
        }
    });
    renderA2WritingTopicsGrid(part);
};

function renderA2WritingTopicsGrid(filter = "all") {
    const grid = document.getElementById("a2-writing-topics-grid");
    if (!grid) return;
    grid.innerHTML = "";

    const tasks = A2_WRITING_DATABASE.filter(function(t) {
        if (filter === "all") return true;
        return t.part === filter;
    });

    tasks.forEach(function(task, index) {
        const card = document.createElement("div");
        card.className = "hoeren-topic-card glass-panel";
        card.style.borderColor = task.part === "teil1" ? "rgba(245, 158, 11, 0.35)" : "rgba(59, 130, 246, 0.35)";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `${task.title} - ${task.titleEN}`);

        card.innerHTML = `
            <div class="hoeren-card-header">
                <div class="hoeren-topic-emoji-box" style="background: ${task.part === "teil1" ? "rgba(245, 158, 11, 0.18)" : "rgba(59, 130, 246, 0.18)"}; border-color: ${task.part === "teil1" ? "rgba(245, 158, 11, 0.4)" : "rgba(59, 130, 246, 0.4)"};">${task.emoji}</div>
                <span class="hoeren-topic-num" style="background: ${task.part === "teil1" ? "rgba(245, 158, 11, 0.15)" : "rgba(59, 130, 246, 0.15)"}; color: ${task.part === "teil1" ? "#fbbf24" : "#60a5fa"}; border: 1px solid ${task.part === "teil1" ? "rgba(245, 158, 11, 0.3)" : "rgba(59, 130, 246, 0.3)"};">${task.partBadge}</span>
            </div>
            <div class="hoeren-topic-info">
                <div class="hoeren-topic-title">${task.title}</div>
                <div class="hoeren-topic-subtitle">${task.titleEN}</div>
            </div>
            <div class="hoeren-card-footer">
                <span class="hoeren-card-meta">✍️ 3 Schritte: Aufgabe &rarr; Redemittel &rarr; Schreiben</span>
                <span class="hoeren-card-arrow">→</span>
            </div>
        `;

        card.addEventListener("click", function() { openA2WritingTask(task.id, 1); });
        card.addEventListener("keydown", function(e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openA2WritingTask(task.id, 1); } });
        grid.appendChild(card);
    });
}

window.openA2WritingTask = function(taskId, stage = 1, pushHistory = true) {
    if (typeof scrollAppToTop === "function") scrollAppToTop();
    activeA2WritingState.currentTaskId = taskId;
    activeA2WritingState.stage = stage;

    const task = A2_WRITING_DATABASE.find(t => t.id === taskId);
    if (!task) return;

    const selHub = document.getElementById("a2-writing-selection-hub");
    const workspace = document.getElementById("a2-writing-workspace");
    const titleEl = document.getElementById("a2-writing-title");

    if (selHub) selHub.style.display = "none";
    if (workspace) workspace.style.display = "block";
    if (titleEl) titleEl.textContent = `${task.emoji} ${task.title} — ${task.partBadge}`;

    const container = document.getElementById("a2-writing-workspace-content");
    if (!container) return;

    // Preserve candidate text across step transitions if already typed
    const existingText = window._a2DraftTexts && window._a2DraftTexts[taskId] ? window._a2DraftTexts[taskId] : "";

    // 3-Step Progress Navigation Header
    let stepTabsHtml = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
            <div class="hoeren-mode-tabs" style="margin:0;">
                <button class="hoeren-mode-tab${stage === 1 ? " active" : ""}" onclick="openA2WritingTask('${taskId}', 1)">
                    📋 Schritt 1: Aufgabe
                </button>
                <button class="hoeren-mode-tab${stage === 2 ? " active" : ""}" onclick="openA2WritingTask('${taskId}', 2)">
                    💡 Schritt 2: Wörter & Redemittel
                </button>
                <button class="hoeren-mode-tab${stage === 3 ? " active" : ""}" onclick="openA2WritingTask('${taskId}', 3)">
                    ✍️ Schritt 3: Text verfassen
                </button>
            </div>
            <button class="btn btn-secondary" onclick="openA2WritingStudio()" style="font-size:0.85rem;padding:6px 14px;border-radius:8px;">
                &larr; Alle Aufgaben / All Tasks
            </button>
        </div>
    `;

    let stageContentHtml = "";

    if (stage === 1) {
        // ==========================================
        // STAGE 1: DIE AUFGABE (TASK UNDERSTANDING)
        // ==========================================
        stageContentHtml = `
            <div class="glass-panel" style="padding:28px 26px;border-radius:18px;margin-bottom:24px;background:rgba(15,23,42,0.7);border-left:5px solid #f59e0b;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:14px;">
                    <div>
                        <span style="font-size:0.8rem;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#fbbf24;background:rgba(245,158,11,0.15);padding:3px 10px;border-radius:12px;">
                            ${task.partBadge}
                        </span>
                        <h3 style="margin:8px 0 4px 0;font-size:1.35rem;color:#fff;">${task.title}</h3>
                        <div style="font-size:0.95rem;color:var(--color-text-muted);font-weight:normal;">🇬🇧 ${task.titleEN}</div>
                    </div>
                    <span style="font-size:0.88rem;font-weight:700;color:#94a3b8;background:rgba(255,255,255,0.06);padding:6px 14px;border-radius:20px;">
                        🎯 Richtwert: ${task.targetWords.optimal} Wörter
                    </span>
                </div>

                <div style="padding:16px 20px;background:rgba(245,158,11,0.08);border-radius:12px;margin:16px 0;border:1px solid rgba(245,158,11,0.25);">
                    <strong style="color:#fbbf24;font-size:0.95rem;display:block;margin-bottom:4px;">📖 Situation / Scenario:</strong>
                    <div style="font-size:1.05rem;line-height:1.7;color:#fff;">${task.situation}</div>
                    <div style="font-size:0.92rem;color:var(--color-text-muted);font-style:italic;margin-top:4px;">🇬🇧 ${task.situationEN}</div>
                </div>

                <div style="margin-top:20px;">
                    <strong style="font-size:1.05rem;color:#fff;display:block;margin-bottom:12px;">
                        📝 Schreiben Sie zu allen drei Leitpunkten (Mandatory Points):
                    </strong>
                    <div style="display:flex;flex-direction:column;gap:12px;">
                        ${task.leitpunkte.map((lp, i) => `
                            <div class="glass-panel" style="padding:14px 18px;border-radius:12px;background:rgba(255,255,255,0.03);display:flex;align-items:flex-start;gap:12px;">
                                <span style="background:rgba(245,158,11,0.2);color:#fbbf24;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;flex-shrink:0;">${i + 1}</span>
                                <div>
                                    <div style="font-size:1.02rem;font-weight:700;color:#fff;">${lp.de}</div>
                                    <div style="font-size:0.88rem;color:var(--color-text-muted);font-style:italic;margin-top:2px;">🇬🇧 ${lp.en}</div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Goethe Exam Guidelines -->
                <div style="margin-top:24px;padding:16px 20px;background:rgba(255,255,255,0.03);border-radius:12px;border-top:1px solid rgba(255,255,255,0.08);">
                    <strong style="color:#38bdf8;font-size:0.92rem;">💡 Offizielle Prüfungsanforderungen:</strong>
                    <ul style="margin:6px 0 0 18px;padding:0;font-size:0.9rem;color:var(--color-text-secondary);line-height:1.6;">
                        <li>Vergessen Sie keinen der 3 Leitpunkte – für jeden Punkt gibt es separate Punkte in der Bewertung.</li>
                        <li>Verwenden Sie eine passende Anrede und eine passende Grußformel am Ende.</li>
                        <li>Achten Sie auf einfache A2-Satzverbindungen wie <em>weil</em> (Verb am Ende) oder <em>deshalb</em>.</li>
                    </ul>
                </div>
            </div>

            <div style="text-align:center;margin-top:24px;">
                <button class="btn btn-primary btn-large" onclick="openA2WritingTask('${taskId}', 2)" style="padding:16px 36px;font-size:1.1rem;font-weight:700;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;border:none;border-radius:12px;box-shadow:0 6px 20px rgba(245,158,11,0.35);cursor:pointer;">
                    Weiter zu Schritt 2: Hilfreiche Wörter & Redemittel &rarr;
                </button>
            </div>
        `;
    } else if (stage === 2) {
        // ========================================================
        // STAGE 2: WORTSCHATZ & REDEMITTEL (LEXICAL SCAFFOLDING)
        // ========================================================
        stageContentHtml = `
            <div class="glass-panel" style="padding:26px 24px;border-radius:18px;margin-bottom:24px;background:rgba(15,23,42,0.7);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
                    <div>
                        <span style="font-size:0.8rem;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#fbbf24;background:rgba(245,158,11,0.15);padding:3px 10px;border-radius:12px;">
                            Schritt 2 von 3
                        </span>
                        <h3 style="margin:8px 0 4px 0;font-size:1.35rem;color:#fff;">💡 Nützliche Wörter & Redemittel</h3>
                        <div style="font-size:0.92rem;color:var(--color-text-muted);">Nutzen Sie diese Bausteine, um Ihre Antwort gleich flüssig und korrekt zu verfassen.</div>
                    </div>
                </div>

                <!-- Leitpunkte Quick Reference Bar -->
                <div style="padding:12px 16px;background:rgba(255,255,255,0.03);border-radius:10px;margin-bottom:20px;border-left:3px solid #fbbf24;">
                    <span style="font-size:0.82rem;font-weight:700;color:#fbbf24;text-transform:uppercase;">Erinnerung: Die 3 Leitpunkte:</span>
                    <div style="font-size:0.92rem;color:var(--color-text-secondary);margin-top:4px;">
                        1. ${task.leitpunkte[0].de} • 2. ${task.leitpunkte[1].de} • 3. ${task.leitpunkte[2].de}
                    </div>
                </div>

                <!-- 4 Category Grid -->
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:18px;margin-bottom:22px;">
                    <!-- 1. Anrede -->
                    <div class="glass-panel" style="padding:18px;border-radius:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);">
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
                            <span style="font-size:1.3rem;">👋</span>
                            <strong style="color:#fbbf24;font-size:1.05rem;">1. Anrede / Salutation:</strong>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${task.redemittel.anrede.map(a => `
                                <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(0,0,0,0.25);padding:8px 12px;border-radius:8px;">
                                    <span style="font-weight:600;color:#fff;">${a}</span>
                                    <button class="vocab-tts-btn" onclick="speakA2Text('${a.replace(/'/g,"\\'")}')" style="width:30px;height:30px;border-radius:6px;font-size:0.9rem;">🔊</button>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <!-- 2. Einleitung -->
                    <div class="glass-panel" style="padding:18px;border-radius:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);">
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
                            <span style="font-size:1.3rem;">📝</span>
                            <strong style="color:#fbbf24;font-size:1.05rem;">2. Einleitungssatz / Opening:</strong>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${task.redemittel.einleitung.map(e => `
                                <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(0,0,0,0.25);padding:8px 12px;border-radius:8px;">
                                    <span style="font-weight:600;color:#fff;font-size:0.95rem;">${e}</span>
                                    <button class="vocab-tts-btn" onclick="speakA2Text('${e.replace(/'/g,"\\'")}')" style="width:30px;height:30px;border-radius:6px;font-size:0.9rem;">🔊</button>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <!-- 3. Satzbausteine für Leitpunkte -->
                    <div class="glass-panel" style="padding:18px;border-radius:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);grid-column:1 / -1;">
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
                            <span style="font-size:1.3rem;">💬</span>
                            <strong style="color:#fbbf24;font-size:1.05rem;">3. Formulierungen für die Leitpunkte / Body Phrases:</strong>
                        </div>
                        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:10px;">
                            ${task.redemittel.leitpunktePhrases.map(p => `
                                <div style="display:flex;justify-content:space-between;align-items:center;background:rgba(0,0,0,0.25);padding:10px 14px;border-radius:8px;">
                                    <span style="font-weight:600;color:#fff;font-size:0.95rem;line-height:1.5;">„${p}“</span>
                                    <button class="vocab-tts-btn" onclick="speakA2Text('${p.replace(/'/g,"\\'")}')" style="width:32px;height:32px;border-radius:6px;font-size:0.9rem;flex-shrink:0;">🔊</button>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <!-- 4. Schluss -->
                    <div class="glass-panel" style="padding:18px;border-radius:14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);grid-column:1 / -1;">
                        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
                            <span style="font-size:1.3rem;">✨</span>
                            <strong style="color:#fbbf24;font-size:1.05rem;">4. Schlussformel & Gruß / Sign-off:</strong>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:10px;">
                            ${task.redemittel.schluss.map(s => `
                                <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(0,0,0,0.25);padding:8px 14px;border-radius:8px;">
                                    <span style="font-weight:600;color:#fff;">${s}</span>
                                    <button class="vocab-tts-btn" onclick="speakA2Text('${s.replace(/'/g,"\\'")}')" style="width:28px;height:28px;border-radius:6px;font-size:0.85rem;">🔊</button>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>

                <!-- Grammar Tip Callout -->
                <div style="padding:14px 18px;background:rgba(16,185,129,0.08);border-radius:12px;border:1px solid rgba(16,185,129,0.3);">
                    <strong style="color:#34d399;font-size:0.92rem;">🧠 A2-Grammatik-Tipp:</strong>
                    <div style="font-size:0.9rem;color:var(--color-text-secondary);margin-top:4px;line-height:1.6;">
                        Verbinden Sie Ihre Sätze mit <strong>„weil“</strong> (Verb wandert ans Ende: <em>„..., weil ich arbeiten <u>muss</u>.“</em>) oder mit <strong>„deshalb“</strong> (Verb auf Position 2: <em>„..., deshalb <u>habe</u> ich keine Zeit.“</em>). Das bringt wichtige Zusatzpunkte bei den Prüfern!
                    </div>
                </div>
            </div>

            <!-- Stage 2 Nav Buttons -->
            <div style="display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:24px;flex-wrap:wrap;">
                <button class="btn btn-secondary" onclick="openA2WritingTask('${taskId}', 1)" style="padding:12px 22px;border-radius:10px;">
                    &larr; Zurück zu Schritt 1: Aufgabe
                </button>
                <button class="btn btn-primary btn-large" onclick="openA2WritingTask('${taskId}', 3)" style="padding:16px 36px;font-size:1.1rem;font-weight:700;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;border:none;border-radius:12px;box-shadow:0 6px 20px rgba(245,158,11,0.35);cursor:pointer;">
                    Weiter zu Schritt 3: Text verfassen &rarr;
                </button>
            </div>
        `;
    } else {
        // ========================================================
        // STAGE 3: SCHREIBWERKSTATT (WRITING WORKSPACE & EVALUATION)
        // ========================================================
        let leitpunkteChecklistHtml = task.leitpunkte.map((lp, i) => `
            <label class="a2-writing-checklist-item" style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;cursor:pointer;">
                <input type="checkbox" id="a2_write_lp_${i}" style="margin-top:3px;accent-color:#f59e0b;transform:scale(1.15);">
                <div>
                    <span style="font-weight:600;color:var(--color-text-primary);font-size:0.95rem;">• ${lp.de}</span>
                    <div style="font-size:0.85rem;color:var(--color-text-muted);font-style:italic;">🇬🇧 ${lp.en}</div>
                </div>
            </label>
        `).join("");

        stageContentHtml = `
            <!-- Pinned Task Prompt -->
            <div class="glass-panel" style="padding:20px 22px;border-radius:16px;margin-bottom:18px;border-left:4px solid #f59e0b;background:rgba(15,23,42,0.65);">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:6px;">
                    <div style="font-size:1.08rem;font-weight:700;color:var(--color-text-primary);">${task.situation}</div>
                    <button class="btn btn-secondary" onclick="openA2WritingTask('${taskId}', 2)" style="font-size:0.82rem;padding:4px 10px;border-radius:6px;">
                        💡 Redemittel-Übersicht ansehen
                    </button>
                </div>
                <div style="font-size:0.9rem;color:var(--color-text-muted);font-style:italic;margin-bottom:14px;">🇬🇧 ${task.situationEN}</div>

                <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:12px;">
                    <strong style="font-size:0.92rem;color:#fbbf24;display:block;margin-bottom:6px;">Haken Sie die Leitpunkte beim Schreiben ab:</strong>
                    ${leitpunkteChecklistHtml}
                </div>
            </div>

            <!-- Quick Vocab Cheat Sheet Drawer -->
            <details class="glass-panel" style="padding:12px 18px;border-radius:12px;margin-bottom:18px;border:1px dashed rgba(245,158,11,0.35);">
                <summary style="font-weight:700;color:#fbbf24;cursor:pointer;font-size:0.92rem;display:flex;align-items:center;gap:6px;">
                    📖 Schneller Wortschatz-Spickzettel / Quick Phrases Cheat Sheet (Klicken zum Öffnen)
                </summary>
                <div style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:12px;font-size:0.88rem;">
                    <div>
                        <strong style="color:#fff;">Anrede:</strong>
                        <div style="color:var(--color-text-secondary);margin-top:2px;">${task.redemittel.anrede.join(" • ")}</div>
                    </div>
                    <div>
                        <strong style="color:#fff;">Einleitung:</strong>
                        <div style="color:var(--color-text-secondary);margin-top:2px;">${task.redemittel.einleitung[0]}</div>
                    </div>
                    <div style="grid-column:1 / -1;">
                        <strong style="color:#fff;">Phrasen:</strong>
                        <div style="color:var(--color-text-secondary);margin-top:2px;">${task.redemittel.leitpunktePhrases.join(" • ")}</div>
                    </div>
                </div>
            </details>

            <!-- Textarea Editor -->
            <div class="glass-panel" style="padding:22px;border-radius:16px;margin-bottom:20px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <label for="a2_write_textarea" style="font-weight:700;font-size:1.05rem;">Ihr Text / Your Writing:</label>
                    <div id="a2_write_word_badge" style="font-size:0.85rem;font-weight:700;padding:3px 10px;border-radius:12px;background:rgba(255,255,255,0.08);color:var(--color-text-secondary);">
                        0 Wörter (Ziel: ${task.targetWords.optimal})
                    </div>
                </div>
                <textarea id="a2_write_textarea" rows="8" oninput="updateA2WritingWordCount('${task.id}')" placeholder="Schreiben Sie hier Ihren Text..." style="width:100%;box-sizing:border-box;padding:14px 16px;border-radius:12px;background:rgba(10,15,30,0.7);border:1px solid var(--color-border);color:var(--color-text-primary);font-size:1.05rem;line-height:1.7;resize:vertical;font-family:inherit;">${existingText}</textarea>

                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-top:16px;">
                    <button class="btn btn-secondary" id="btn_toggle_model_answer" onclick="toggleA2WritingModelAnswer()" style="padding:10px 18px;border-radius:10px;display:inline-flex;align-items:center;gap:6px;">
                        👁️ Musterlösung anzeigen / Show Model Answer
                    </button>
                    <button class="btn btn-primary" onclick="copyA2WritingAIPrompt('${task.id}')" style="background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;border:none;padding:10px 22px;border-radius:10px;font-weight:700;box-shadow:0 4px 14px rgba(245,158,11,0.3);cursor:pointer;">
                        🤖 Feedback Prompt für AI kopieren
                    </button>
                </div>
            </div>

            <!-- Hidden Model Answer Box -->
            <div id="a2_write_model_box" class="glass-panel" style="display:none;padding:22px 24px;border-radius:16px;margin-bottom:24px;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.3);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                    <h4 style="margin:0;color:#34d399;font-size:1.15rem;">🏆 Offizielle Musterlösung (Goethe A2 Standard)</h4>
                    <button class="btn btn-secondary" onclick="speakA2Text(\`${task.sampleAnswer.replace(/`/g,"'").replace(/\n/g," ")}\`)" style="font-size:0.85rem;padding:4px 10px;border-radius:6px;">🔊 Vorlesen</button>
                </div>
                <div style="white-space:pre-line;line-height:1.8;font-size:1.02rem;color:var(--color-text-primary);border-left:3px solid #10b981;padding-left:14px;margin-bottom:14px;">${task.sampleAnswer}</div>
                <div style="white-space:pre-line;line-height:1.6;font-size:0.92rem;color:var(--color-text-muted);font-style:italic;margin-bottom:14px;">🇬🇧 ${task.sampleAnswerEN}</div>
                <div style="padding:10px 14px;background:rgba(255,255,255,0.04);border-radius:8px;font-size:0.88rem;color:#6ee7b7;">
                    <strong>💡 Prüferanalyse:</strong> ${task.sampleBreakdown}
                </div>
            </div>

            <!-- Stage 3 Navigation Buttons -->
            <div style="display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:24px;flex-wrap:wrap;">
                <button class="btn btn-secondary" onclick="openA2WritingTask('${taskId}', 2)" style="padding:12px 22px;border-radius:10px;">
                    &larr; Zurück zu Schritt 2: Wörter & Redemittel
                </button>
                <button class="btn btn-secondary" onclick="openA2WritingStudio()" style="padding:12px 22px;border-radius:10px;">
                    🎉 Fertig & Zurück zur Aufgabenliste
                </button>
            </div>
        `;
    }

    container.innerHTML = stepTabsHtml + stageContentHtml;

    if (stage === 3 && existingText) {
        updateA2WritingWordCount(taskId);
    }

    if (typeof scrollAppToTop === "function") {
        scrollAppToTop();
        requestAnimationFrame(scrollAppToTop);
        setTimeout(scrollAppToTop, 25);
    }

};

window.updateA2WritingWordCount = function(taskId) {
    const textarea = document.getElementById("a2_write_textarea");
    const badge = document.getElementById("a2_write_word_badge");
    if (!textarea || !badge) return;

    // Persist draft in session memory
    if (!window._a2DraftTexts) window._a2DraftTexts = {};
    window._a2DraftTexts[taskId] = textarea.value;

    const task = A2_WRITING_DATABASE.find(t => t.id === taskId);
    const text = textarea.value.trim();
    const count = text.length > 0 ? text.split(/\s+/).length : 0;

    let color = "var(--color-text-secondary)";
    let bg = "rgba(255,255,255,0.08)";

    if (task) {
        if (count >= task.targetWords.min && count <= task.targetWords.max) {
            color = "#34d399";
            bg = "rgba(16,185,129,0.2)";
        } else if (count > task.targetWords.max) {
            color = "#f59e0b";
            bg = "rgba(245,158,11,0.2)";
        }
    }

    badge.textContent = `${count} Wörter (Ziel: ${task ? task.targetWords.optimal : ""})`;
    badge.style.color = color;
    badge.style.background = bg;
};


window.toggleA2WritingModelAnswer = function() {
    const box = document.getElementById("a2_write_model_box");
    const btn = document.getElementById("btn_toggle_model_answer");
    if (!box || !btn) return;
    const isHidden = box.style.display === "none";
    box.style.display = isHidden ? "block" : "none";
    btn.innerHTML = isHidden ? "🙈 Musterlösung verbergen" : "👁️ Musterlösung anzeigen / Show Model Answer";
};

window.copyA2WritingAIPrompt = function(taskId) {
    const task = A2_WRITING_DATABASE.find(t => t.id === taskId);
    const textarea = document.getElementById("a2_write_textarea");
    const userText = textarea ? textarea.value.trim() : "";

    if (!userText) {
        alert("Bitte schreiben Sie zuerst einen kurzen Text, bevor Sie das KI-Feedback anfordern.");
        return;
    }

    const prompt = `Please evaluate my German writing text according to the official Goethe-Zertifikat A2 Writing criteria.

TASK CONTEXT:
Situation: ${task.situation}
Required Points to cover:
1. ${task.leitpunkte[0].de}
2. ${task.leitpunkte[1].de}
3. ${task.leitpunkte[2].de}
Target Length: ${task.targetWords.optimal} words

MY GERMAN TEXT:
"""
${userText}
"""

PLEASE PROVIDE FEEDBACK IN ENGLISH WITH:
1. Score out of 10 points for Goethe A2 criteria (Fulfillment of all 3 Leitpunkte, Grammar accuracy, Vocabulary range, Structure/Salutation).
2. Bulleted list of grammatical corrections with short explanations.
3. An improved version at native A2/B1 level.`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(prompt).then(function() {
            alert("✅ KI-Feedback-Prompt wurde in die Zwischenablage kopiert! Sie können ihn direkt bei ChatGPT / Gemini einfügen.");
        }).catch(function() {
            promptUserWithText(prompt);
        });
    } else {
        promptUserWithText(prompt);
    }
};

function promptUserWithText(text) {
    window.prompt("Kopieren Sie diesen Prompt (Strg+C):", text);
}

window.handleA2WritingBackNavigation = function() {
    const selHub = document.getElementById("a2-writing-selection-hub");
    const workspace = document.getElementById("a2-writing-workspace");
    if (workspace && workspace.style.display !== "none") {
        workspace.style.display = "none";
        if (selHub) selHub.style.display = "block";
        const titleEl = document.getElementById("a2-writing-title");
        if (titleEl) titleEl.textContent = "A2 Schreibstudio / Writing Studio";
    } else {
        if (typeof switchToView === "function") switchToView("view-a2-practice-menu");
    }
};

/* ==========================================================================
   4. A2 SPRECHEN (SPEAKING LAB) — UI LOGIC & CONTROLLER
   ========================================================================== */

let activeA2SpeakingState = {
    activeTab: "teil1", // 'teil1', 'teil2', 'teil3'
    teil1CardIndex: 0,
    teil2MonoIndex: 0,
    teil2Stage: 1, // 1 to 5
    teil3PlanIndex: 0,
    teil3TurnIndex: 0
};

window.openA2SpeakingLab = function(pushHistory = true) {
    if (typeof scrollAppToTop === "function") scrollAppToTop();
    if (typeof switchToView === "function") switchToView("view-a2-speaking", false);

    const selHub = document.getElementById("a2-speaking-selection-hub");
    const workspace = document.getElementById("a2-speaking-workspace");
    const titleEl = document.getElementById("a2-speaking-title");

    if (selHub) selHub.style.display = "block";
    if (workspace) workspace.style.display = "none";
    if (titleEl) titleEl.textContent = "A2 Sprechlabor / Speaking & Fluency";
    if (window.stopA2SpeakingRecordingSilently) window.stopA2SpeakingRecordingSilently();

    switchA2SpeakingTab(activeA2SpeakingState.activeTab || "teil1");

    if (typeof scrollAppToTop === "function") {
        scrollAppToTop();
        requestAnimationFrame(scrollAppToTop);
        setTimeout(scrollAppToTop, 25);
    }

};

window.switchA2SpeakingTab = function(tab) {
    activeA2SpeakingState.activeTab = tab;
    ["teil1", "teil2", "teil3"].forEach(function(t) {
        const btn = document.getElementById(`a2-speaking-tab-${t}`);
        if (btn) {
            if (t === tab) btn.classList.add("active");
            else btn.classList.remove("active");
        }
    });

    const content = document.getElementById("a2-speaking-hub-content");
    if (!content) return;

    if (tab === "teil1") {
        // Teil 1: 8 Cue Cards
        let html = `
            <p style="text-align:center;color:var(--color-text-secondary);margin-bottom:20px;">
                Wählen Sie eine Karte, um Fragen & Antworten mit Audio-Musterlösung zu üben:
            </p>
            <div class="hoeren-topics-grid">`;
        
        A2_SPEAKING_DATABASE.teil1_cue_cards.forEach(function(card, idx) {
            html += `
                <div class="hoeren-topic-card glass-panel" onclick="openA2SpeakingTeil1Practice(${idx})" style="border-color:rgba(236,72,153,0.3);cursor:pointer;">
                    <div class="hoeren-card-header">
                        <div class="hoeren-topic-emoji-box" style="background:rgba(236,72,153,0.18);border-color:rgba(236,72,153,0.4);">${card.emoji}</div>
                        <span class="hoeren-topic-num" style="background:rgba(236,72,153,0.15);color:#f472b6;border:1px solid rgba(236,72,153,0.3);">Karte #${idx + 1}</span>
                    </div>
                    <div class="hoeren-topic-info">
                        <div class="hoeren-topic-title">${card.theme}</div>
                        <div class="hoeren-topic-subtitle" style="font-size:1.1rem;font-weight:700;color:#f472b6;margin-top:4px;">Stichwort: „${card.keyword}“</div>
                    </div>
                    <div class="hoeren-card-footer">
                        <span class="hoeren-card-meta">🃏 Frage stellen & antworten</span>
                        <span class="hoeren-card-arrow">→</span>
                    </div>
                </div>`;
        });
        html += `</div>`;
        content.innerHTML = html;

    } else if (tab === "teil2") {
        // Teil 2: 6 Monologe
        let html = `
            <p style="text-align:center;color:var(--color-text-secondary);margin-bottom:20px;">
                Wählen Sie ein Monologthema für den 5-Stufen-Sprechtrainer (Bausteine &rarr; Lücken &rarr; Freies Sprechen):
            </p>
            <div class="hoeren-topics-grid">`;
        
        A2_SPEAKING_DATABASE.teil2_monologues.forEach(function(mono, idx) {
            html += `
                <div class="hoeren-topic-card glass-panel" onclick="openA2SpeakingTeil2Practice(${idx}, 1)" style="border-color:rgba(139,92,246,0.3);cursor:pointer;">
                    <div class="hoeren-card-header">
                        <div class="hoeren-topic-emoji-box" style="background:rgba(139,92,246,0.18);border-color:rgba(139,92,246,0.4);">${mono.emoji}</div>
                        <span class="hoeren-topic-num" style="background:rgba(139,92,246,0.15);color:#a78bfa;border:1px solid rgba(139,92,246,0.3);">Monolog #${idx + 1}</span>
                    </div>
                    <div class="hoeren-topic-info">
                        <div class="hoeren-topic-title">${mono.title}</div>
                        <div class="hoeren-topic-subtitle">${mono.titleEN}</div>
                    </div>
                    <div class="hoeren-card-footer">
                        <span class="hoeren-card-meta">🎙️ 5 Lernstufen • ${mono.sentences.length} Sätze</span>
                        <span class="hoeren-card-arrow">→</span>
                    </div>
                </div>`;
        });
        html += `</div>`;
        content.innerHTML = html;

    } else if (tab === "teil3") {
        // Teil 3: 4 Verhandlungsszenarien
        let html = `
            <p style="text-align:center;color:var(--color-text-secondary);margin-bottom:20px;">
                Interaktives Partnerszenario: Hören Sie Ihrem Prüfungspartner zu und verhandeln Sie einen gemeinsamen Plan:
            </p>
            <div class="hoeren-topics-grid">`;
        
        A2_SPEAKING_DATABASE.teil3_planning.forEach(function(plan, idx) {
            html += `
                <div class="hoeren-topic-card glass-panel" onclick="openA2SpeakingTeil3Practice(${idx}, 0)" style="border-color:rgba(59,130,246,0.3);cursor:pointer;">
                    <div class="hoeren-card-header">
                        <div class="hoeren-topic-emoji-box" style="background:rgba(59,130,246,0.18);border-color:rgba(59,130,246,0.4);">${plan.emoji}</div>
                        <span class="hoeren-topic-num" style="background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);">Szenario #${idx + 1}</span>
                    </div>
                    <div class="hoeren-topic-info">
                        <div class="hoeren-topic-title">${plan.title}</div>
                        <div class="hoeren-topic-subtitle">${plan.titleEN}</div>
                    </div>
                    <div class="hoeren-card-footer">
                        <span class="hoeren-card-meta">🤝 Interaktiver Dialog • ${plan.turns.length} Runden</span>
                        <span class="hoeren-card-arrow">→</span>
                    </div>
                </div>`;
        });
        html += `</div>`;
        content.innerHTML = html;
    }
};

/* --- TEIL 1 WORKSPACE: CUE CARD DRILL --- */
window.openA2SpeakingTeil1Practice = function(cardIndex, pushHistory = true) {
    if (typeof scrollAppToTop === "function") scrollAppToTop();
    activeA2SpeakingState.teil1CardIndex = cardIndex;
    const card = A2_SPEAKING_DATABASE.teil1_cue_cards[cardIndex];
    if (!card) return;

    const selHub = document.getElementById("a2-speaking-selection-hub");
    const workspace = document.getElementById("a2-speaking-workspace");
    const titleEl = document.getElementById("a2-speaking-title");

    if (selHub) selHub.style.display = "none";
    if (workspace) workspace.style.display = "block";
    if (titleEl) titleEl.textContent = `🃏 Teil 1: ${card.theme} (${card.keyword})`;

    const container = document.getElementById("a2-speaking-workspace-content");
    if (!container) return;

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:18px;">
            <button class="btn btn-secondary" onclick="openA2SpeakingLab()" style="font-size:0.85rem;padding:6px 14px;border-radius:8px;">
                &larr; Alle Sprechkarten / All Cue Cards
            </button>
            <span style="font-size:0.85rem;font-weight:700;color:#ec4899;background:rgba(236,72,153,0.15);padding:4px 12px;border-radius:20px;">
                Karte ${cardIndex + 1} von ${A2_SPEAKING_DATABASE.teil1_cue_cards.length}
            </span>
        </div>

        <!-- Cue Card Card Container -->
        <div class="glass-panel" style="text-align:center;padding:36px 24px;border-radius:20px;max-width:540px;margin:0 auto 28px;background:rgba(15,23,42,0.8);border:2px solid rgba(236,72,153,0.4);box-shadow:0 12px 30px rgba(236,72,153,0.2);">
            <div style="font-size:3.5rem;margin-bottom:12px;">${card.emoji}</div>
            <div style="font-size:1.1rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-text-muted);margin-bottom:6px;">THEMA:</div>
            <div style="font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:2px;">${card.theme}</div>
            <div style="font-size:1rem;color:#f472b6;margin-bottom:20px;">(${card.themeEN})</div>

            <div style="padding:14px 20px;background:rgba(236,72,153,0.15);border:1px dashed rgba(236,72,153,0.5);border-radius:12px;display:inline-block;margin-bottom:14px;">
                <span style="font-size:0.9rem;color:var(--color-text-muted);">WORT / STICHWORT:</span>
                <div style="font-size:1.8rem;font-weight:900;color:#fff;letter-spacing:0.04em;">„${card.keyword}“</div>
                <div style="font-size:0.92rem;color:var(--color-text-muted);font-style:italic;">🇬🇧 ${card.keywordEN}</div>
            </div>

            <p style="color:var(--color-text-secondary);font-size:0.95rem;line-height:1.6;margin:10px 0 0 0;">
                💡 <em>${card.tip}</em>
            </p>
        </div>

        <!-- Audio Question & Answer Sample -->
        <div class="glass-panel" style="padding:22px 26px;border-radius:16px;max-width:680px;margin:0 auto 24px;">
            <h4 style="margin:0 0 16px 0;font-size:1.15rem;color:#f472b6;display:flex;align-items:center;gap:8px;">
                🎧 Musterlösung für Frage & Antwort:
            </h4>

            <div style="padding:14px 18px;background:rgba(255,255,255,0.04);border-radius:12px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <div>
                    <strong style="color:var(--color-text-primary);display:block;font-size:1.05rem;">❓ Frage: „${card.modelQuestion}“</strong>
                    <div style="font-size:0.88rem;color:var(--color-text-muted);font-style:italic;margin-top:3px;">🇬🇧 ${card.modelQuestionEN}</div>
                </div>
                <button class="btn btn-secondary" onclick="speakA2Text('${card.modelQuestion.replace(/'/g,"\\'")}')" style="border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">🔊</button>
            </div>

            <div style="padding:14px 18px;background:rgba(16,185,129,0.08);border-radius:12px;display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <div>
                    <strong style="color:#34d399;display:block;font-size:1.05rem;">💬 Antwort: „${card.modelAnswer}“</strong>
                    <div style="font-size:0.88rem;color:var(--color-text-muted);font-style:italic;margin-top:3px;">🇬🇧 ${card.modelAnswerEN}</div>
                </div>
                <button class="btn btn-secondary" onclick="speakA2Text('${card.modelAnswer.replace(/'/g,"\\'")}')" style="border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">🔊</button>
            </div>
        </div>

        <!-- Next / Prev Buttons -->
        <div style="display:flex;justify-content:center;gap:14px;margin-top:24px;">
            <button class="btn btn-secondary" onclick="openA2SpeakingTeil1Practice(${Math.max(0, cardIndex - 1)})" ${cardIndex === 0 ? "disabled" : ""}>&larr; Vorherige Karte</button>
            <button class="btn btn-primary" onclick="openA2SpeakingTeil1Practice(${Math.min(A2_SPEAKING_DATABASE.teil1_cue_cards.length - 1, cardIndex + 1)})" ${cardIndex === A2_SPEAKING_DATABASE.teil1_cue_cards.length - 1 ? "disabled" : ""}>Nächste Karte &rarr;</button>
        </div>
    `;


};

/* --- TEIL 2 WORKSPACE: 5-STAGE MONOLOGUE FLUENCY --- */
window.openA2SpeakingTeil2Practice = function(monoIndex, stage = 1, pushHistory = true) {
    if (typeof scrollAppToTop === "function") scrollAppToTop();
    if (window.stopA2SpeakingRecordingSilently) window.stopA2SpeakingRecordingSilently();
    activeA2SpeakingState.teil2MonoIndex = monoIndex;
    activeA2SpeakingState.teil2Stage = stage;
    const mono = A2_SPEAKING_DATABASE.teil2_monologues[monoIndex];
    if (!mono) return;

    const selHub = document.getElementById("a2-speaking-selection-hub");
    const workspace = document.getElementById("a2-speaking-workspace");
    const titleEl = document.getElementById("a2-speaking-title");

    if (selHub) selHub.style.display = "none";
    if (workspace) workspace.style.display = "block";
    if (titleEl) titleEl.textContent = `🗣️ Teil 2: ${mono.title}`;

    const container = document.getElementById("a2-speaking-workspace-content");
    if (!container) return;

    // Stage Selector Bar
    let stageTabsHtml = `
        <div class="hoeren-mode-tabs" style="margin-bottom:20px;">
            <button class="hoeren-mode-tab${stage === 1 ? " active" : ""}" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 1)">🧱 1. Bausteine</button>
            <button class="hoeren-mode-tab${stage === 2 ? " active" : ""}" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 2)">🎧 2. Hören & Nachsprechen</button>
            <button class="hoeren-mode-tab${stage === 3 ? " active" : ""}" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 3)">📝 3. Lückentext</button>
            <button class="hoeren-mode-tab${stage === 4 ? " active" : ""}" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 4)">🎤 4. Freies Sprechen & KI</button>
        </div>
    `;

    let stageContentHtml = "";

    if (stage === 1) {
        // STAGE 1: BAUSTEINE (SENTENCES WITH MALAYALAM PHONETICS & AUDIO)
        stageContentHtml = `
            <div class="glass-panel" style="padding:22px;border-radius:16px;margin-bottom:20px;">
                <h3 style="margin:0 0 16px 0;font-size:1.2rem;color:#a78bfa;">🧱 Bausteine für Ihren Monolog:</h3>
                <div style="display:flex;flex-direction:column;gap:14px;">
                    ${mono.sentences.map((s, i) => `
                        <div class="glass-panel" style="padding:14px 18px;border-radius:12px;background:rgba(255,255,255,0.03);display:flex;justify-content:space-between;align-items:flex-start;gap:14px;">
                            <div style="flex:1;">
                                <div style="font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:4px;">${i + 1}. ${s.de}</div>
                                <div style="font-size:0.92rem;color:var(--color-text-muted);font-style:italic;margin-bottom:4px;">🇬🇧 ${s.en}</div>
                                <div style="font-size:0.85rem;color:#fbbf24;font-family:system-ui;">🗣️ ${s.mal}</div>
                            </div>
                            <button class="vocab-tts-btn" onclick="speakA2Text('${s.de.replace(/'/g,"\\'")}')" style="width:40px;height:40px;border-radius:10px;font-size:1.2rem;flex-shrink:0;">🔊</button>
                        </div>
                    `).join("")}
                </div>
            </div>
            <div style="text-align:center;margin-top:24px;">
                <button class="btn btn-primary btn-large" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 2)" style="padding:14px 32px;font-size:1.05rem;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;border:none;border-radius:12px;cursor:pointer;">
                    Weiter zu Stufe 2: Hören & Nachsprechen &rarr;
                </button>
            </div>
        `;
    } else if (stage === 2) {
        // STAGE 2: HÖREN & WIEDERHOLEN (FULL AUDIO PLAYBACK)
        const fullText = mono.sentences.map(s => s.de).join(" ");
        stageContentHtml = `
            <div class="glass-panel" style="padding:24px;border-radius:16px;text-align:center;margin-bottom:20px;">
                <h3 style="margin:0 0 12px 0;font-size:1.25rem;color:#a78bfa;">🎧 Gesamten Monolog anhören & nachsprechen</h3>
                <p style="color:var(--color-text-secondary);max-width:580px;margin:0 auto 20px;">Hören Sie den vollständigen flüssigen A2-Monolog im Normaltempo oder im langsamen Übungstempo an.</p>
                
                <div style="display:flex;justify-content:center;gap:12px;margin-bottom:24px;flex-wrap:wrap;">
                    <button class="btn btn-primary" onclick="speakA2Text('${fullText.replace(/'/g,"\\'")}', 0.9)" style="padding:12px 24px;border-radius:10px;font-weight:700;display:inline-flex;align-items:center;gap:8px;">
                        ▶️ Normal abspielen (1.0x)
                    </button>
                    <button class="btn btn-secondary" onclick="speakA2Text('${fullText.replace(/'/g,"\\'")}', 0.7)" style="padding:12px 24px;border-radius:10px;display:inline-flex;align-items:center;gap:8px;">
                        🐢 Langsam sprechen (0.7x)
                    </button>
                </div>

                <div class="glass-panel" style="text-align:left;padding:20px;border-radius:14px;background:rgba(10,15,30,0.6);line-height:1.9;font-size:1.08rem;border-left:4px solid #8b5cf6;">
                    ${mono.sentences.map((s, idx) => `<span style="cursor:pointer;" onclick="speakA2Text('${s.de.replace(/'/g,"\\'")}')" title="Klicken zum Vorlesen">${s.de} </span>`).join("")}
                </div>
            </div>
            <div style="text-align:center;margin-top:24px;">
                <button class="btn btn-primary btn-large" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 3)" style="padding:14px 32px;font-size:1.05rem;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;border:none;border-radius:12px;cursor:pointer;">
                    Weiter zu Stufe 3: Lückentext-Test &rarr;
                </button>
            </div>
        `;
    } else if (stage === 3) {
        // STAGE 3: LÜCKENTEXT (GAP FILL)
        stageContentHtml = `
            <div class="glass-panel" style="padding:24px;border-radius:16px;margin-bottom:20px;">
                <h3 style="margin:0 0 16px 0;font-size:1.25rem;color:#a78bfa;">📝 Lückentext-Prüfung:</h3>
                <p style="color:var(--color-text-secondary);margin-bottom:20px;">Füllen Sie die fehlenden Schlüsselwörter aus dem Gedächtnis ein:</p>
                <div style="display:flex;flex-direction:column;gap:18px;">
                    ${mono.gaps.map((g, i) => `
                        <div class="glass-panel" style="padding:16px 20px;border-radius:12px;background:rgba(255,255,255,0.03);">
                            <div style="font-size:1.05rem;margin-bottom:10px;line-height:1.7;">
                                ${g.sentence.replace("___", `<input type="text" id="a2_gap_${i}" placeholder="Wort..." style="background:rgba(0,0,0,0.4);border:1px solid #8b5cf6;color:#fff;padding:4px 10px;border-radius:6px;font-size:1rem;font-weight:700;width:160px;margin:0 6px;">`)}
                            </div>
                            <div style="display:flex;justify-content:space-between;align-items:center;">
                                <span style="font-size:0.85rem;color:var(--color-text-muted);">Tipp: ${g.hint}</span>
                                <button class="btn btn-secondary" onclick="checkA2SpeakingGap(${i}, '${g.answer}')" style="font-size:0.85rem;padding:4px 12px;border-radius:6px;">Prüfen</button>
                            </div>
                            <div id="a2_gap_fb_${i}" style="margin-top:8px;"></div>
                        </div>
                    `).join("")}
                </div>
            </div>
            <div style="text-align:center;margin-top:24px;">
                <button class="btn btn-primary btn-large" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 4)" style="padding:14px 32px;font-size:1.05rem;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;border:none;border-radius:12px;cursor:pointer;">
                    Weiter zu Stufe 4: Freies Sprechen &rarr;
                </button>
            </div>
        `;
    } else if (stage === 4) {
        // STAGE 4: FREIES SPRECHEN, AUDIO-AUFNAHME & KI-EVALUATION
        stageContentHtml = `
            <div class="glass-panel" style="padding:28px 24px;border-radius:20px;text-align:center;margin-bottom:24px;">
                <h3 style="margin:0 0 8px 0;font-size:1.35rem;color:#a78bfa;">🎤 Freies Sprechen ohne Vorlage</h3>
                <p style="color:var(--color-text-secondary);max-width:560px;margin:0 auto 22px;line-height:1.6;">
                    Sprechen Sie nun frei für ca. 1–2 Minuten über das Thema. Decken Sie dabei alle 4 Leitpunkte ab:
                </p>

                <!-- Leitpunkte Checklist -->
                <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:28px;">
                    ${mono.cues.map(c => `
                        <div style="background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);padding:8px 16px;border-radius:20px;font-size:0.9rem;font-weight:600;color:#c4b5fd;">
                            📍 ${c.de}
                        </div>
                    `).join("")}
                </div>

                <!-- Interactive Voice Recorder Button -->
                <div id="a2_speaking_rec_btn" onclick="toggleA2SpeakingRecording('${mono.title.replace(/'/g, "\\'")}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleA2SpeakingRecording('${mono.title.replace(/'/g, "\\'")}');}" role="button" tabindex="0" style="padding:24px 32px;border-radius:20px;background:rgba(15,23,42,0.7);border:2px dashed rgba(139,92,246,0.5);display:inline-block;margin-bottom:18px;cursor:pointer;transition:all 0.25s ease;max-width:440px;width:100%;box-shadow:0 8px 24px rgba(0,0,0,0.3);">
                    <span style="font-size:3.2rem;display:block;margin-bottom:8px;">🎙️</span>
                    <div style="font-size:1.18rem;font-weight:800;color:#fff;">Tippen zum Aufnehmen / Tap to Record</div>
                    <div style="font-size:0.85rem;color:var(--color-text-muted);margin-top:4px;">Stoppuhr-Empfehlung: 60 bis 90 Sekunden</div>
                </div>

                <!-- Live Timer & Status Display -->
                <div style="margin-bottom:14px;">
                    <div id="a2_speaking_timer_display" style="font-size:1.65rem;font-weight:800;font-family:monospace;color:#c4b5fd;letter-spacing:0.06em;">00:00 / 01:30</div>
                    <div id="a2_speaking_rec_status" style="font-size:0.9rem;color:var(--color-text-muted);margin-top:4px;">Klicken Sie auf das Mikrofon, um Ihre Rede aufzunehmen.</div>
                </div>

                <!-- Playback & Download Container (Rendered upon stop) -->
                <div id="a2_speaking_playback_area" style="display:none;margin-bottom:24px;"></div>

                <!-- AI Feedback Prompt Box -->
                <div style="margin-top:20px;padding:20px 24px;background:rgba(255,255,255,0.03);border-radius:16px;border:1px solid rgba(255,255,255,0.08);max-width:560px;margin-left:auto;margin-right:auto;text-align:center;">
                    <button class="btn btn-primary" onclick="copyA2SpeakingAIPrompt('${mono.title.replace(/'/g, "\\'")}')" style="background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;border:none;padding:12px 28px;border-radius:12px;font-size:1.02rem;font-weight:700;box-shadow:0 6px 20px rgba(139,92,246,0.35);cursor:pointer;width:100%;">
                        🤖 Feedback-Prompt für KI kopieren
                    </button>
                    <div style="font-size:0.84rem;color:var(--color-text-muted);margin-top:10px;line-height:1.5;">
                        Kopiert den offiziellen Goethe A2 Kriterien-Prompt in die Zwischenablage. Laden Sie die gespeicherte Audiodatei zusammen mit diesem Prompt in ChatGPT, Claude oder Gemini hoch!
                    </div>
                </div>
            </div>

            <!-- Stage 4 Bottom Navigation Bar (No dead end) -->
            <div style="display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:28px;flex-wrap:wrap;">
                <button class="btn btn-secondary" onclick="openA2SpeakingTeil2Practice(${monoIndex}, 3)" style="padding:12px 20px;border-radius:10px;">
                    &larr; Zurück zu Stufe 3: Lückentext
                </button>
                <div style="display:flex;gap:10px;flex-wrap:wrap;">
                    ${monoIndex > 0 ? `
                        <button class="btn btn-secondary" onclick="openA2SpeakingTeil2Practice(${monoIndex - 1}, 1)" style="padding:12px 18px;border-radius:10px;">
                            &larr; Vorheriges Thema
                        </button>
                    ` : ""}
                    ${monoIndex < A2_SPEAKING_DATABASE.teil2_monologues.length - 1 ? `
                        <button class="btn btn-primary" onclick="openA2SpeakingTeil2Practice(${monoIndex + 1}, 1)" style="padding:12px 24px;border-radius:10px;font-weight:700;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;border:none;box-shadow:0 6px 20px rgba(139,92,246,0.35);cursor:pointer;">
                            Nächstes Thema: ${A2_SPEAKING_DATABASE.teil2_monologues[monoIndex + 1].title} &rarr;
                        </button>
                    ` : `
                        <button class="btn btn-primary" onclick="openA2SpeakingLab()" style="padding:12px 24px;border-radius:10px;font-weight:700;background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;cursor:pointer;">
                            🎉 Alle 6 Monologe abgeschlossen! Zur Übersicht &rarr;
                        </button>
                    `}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:18px;">
            <div style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:var(--color-text-muted);">
                <span style="cursor:pointer;color:#a78bfa;font-weight:600;" onclick="openA2SpeakingLab()">Sprechen</span>
                <span>&rsaquo;</span>
                <span style="cursor:pointer;color:#a78bfa;font-weight:600;" onclick="switchA2SpeakingTab('teil2')">Teil 2: Monologe</span>
                <span>&rsaquo;</span>
                <span style="color:#fff;font-weight:700;">${mono.emoji} ${mono.title}</span>
            </div>
            <span style="font-size:0.85rem;font-weight:700;color:#a78bfa;background:rgba(139,92,246,0.15);padding:4px 12px;border-radius:20px;border:1px solid rgba(139,92,246,0.3);">
                Thema ${monoIndex + 1} von ${A2_SPEAKING_DATABASE.teil2_monologues.length}
            </span>
        </div>
        ${stageTabsHtml}
        ${stageContentHtml}
    `;
};

// --- TEIL 2 AUDIO RECORDER & EXPORT SUBSYSTEM ---
window._a2MonoRecorder = {
    mediaRecorder: null,
    chunks: [],
    timerInterval: null,
    seconds: 0,
    isRecording: false,
    audioBlob: null,
    audioUrl: null,
    stream: null,
    currentTopicTitle: ""
};

window.stopA2SpeakingRecordingSilently = function() {
    const rec = window._a2MonoRecorder;
    if (!rec) return;
    if (rec.timerInterval) {
        clearInterval(rec.timerInterval);
        rec.timerInterval = null;
    }
    if (rec.mediaRecorder && rec.isRecording) {
        try { rec.mediaRecorder.stop(); } catch(e){}
    }
    if (rec.stream) {
        try { rec.stream.getTracks().forEach(t => t.stop()); } catch(e){}
        rec.stream = null;
    }
    rec.isRecording = false;
};

window.toggleA2SpeakingRecording = function(topicTitle) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    const rec = window._a2MonoRecorder;
    const btn = document.getElementById("a2_speaking_rec_btn");
    const statusBox = document.getElementById("a2_speaking_rec_status");
    const timerDisplay = document.getElementById("a2_speaking_timer_display");
    const playbackArea = document.getElementById("a2_speaking_playback_area");

    if (rec.isRecording) {
        // --- STOP RECORDING ---
        rec.isRecording = false;
        if (rec.timerInterval) {
            clearInterval(rec.timerInterval);
            rec.timerInterval = null;
        }
        if (rec.mediaRecorder && rec.mediaRecorder.state !== "inactive") {
            try { rec.mediaRecorder.stop(); } catch(e){}
        }
        if (rec.stream) {
            rec.stream.getTracks().forEach(track => track.stop());
            rec.stream = null;
        }

        if (btn) {
            btn.innerHTML = `
                <span style="font-size:2.8rem;display:block;margin-bottom:6px;">🎙️</span>
                <div style="font-weight:700;font-size:1.15rem;color:#fff;">Neu aufnehmen / Record Again</div>
                <div style="font-size:0.85rem;color:var(--color-text-muted);margin-top:4px;">Tippen, um die Aufnahme zu wiederholen</div>
            `;
            btn.style.borderColor = "rgba(139,92,246,0.5)";
            btn.style.background = "rgba(15,23,42,0.7)";
            btn.classList.remove("a2-recording-pulsing");
        }
        if (statusBox) {
            statusBox.innerHTML = `<span style="color:#34d399;font-weight:700;">✅ Aufnahme fertig! (${rec.seconds} Sekunden gespeichert)</span>`;
        }
        return;
    }

    // --- START RECORDING ---
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Mikrofon-Aufnahme wird von Ihrem aktuellen Browser nicht unterstützt oder erfordert eine HTTPS-Verbindung.");
        return;
    }

    rec.currentTopicTitle = topicTitle;
    rec.chunks = [];
    rec.seconds = 0;

    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
        rec.stream = stream;
        rec.isRecording = true;

        let mimeType = "";
        if (window.MediaRecorder && MediaRecorder.isTypeSupported) {
            if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) mimeType = "audio/webm;codecs=opus";
            else if (MediaRecorder.isTypeSupported("audio/webm")) mimeType = "audio/webm";
            else if (MediaRecorder.isTypeSupported("audio/mp4")) mimeType = "audio/mp4";
            else if (MediaRecorder.isTypeSupported("audio/ogg")) mimeType = "audio/ogg";
        }

        const options = mimeType ? { mimeType } : {};
        try {
            rec.mediaRecorder = new MediaRecorder(stream, options);
        } catch (e) {
            rec.mediaRecorder = new MediaRecorder(stream);
        }

        rec.mediaRecorder.ondataavailable = function(e) {
            if (e.data && e.data.size > 0) {
                rec.chunks.push(e.data);
            }
        };

        rec.mediaRecorder.onstop = function() {
            const actualMime = (rec.mediaRecorder && rec.mediaRecorder.mimeType) || mimeType || "audio/webm";
            rec.audioBlob = new Blob(rec.chunks, { type: actualMime });
            if (rec.audioUrl) URL.revokeObjectURL(rec.audioUrl);
            rec.audioUrl = URL.createObjectURL(rec.audioBlob);

            if (playbackArea) {
                const ext = actualMime.includes("mp4") ? "m4a" : (actualMime.includes("ogg") ? "ogg" : "webm");
                const safeName = "Goethe_A2_Monolog_" + (rec.currentTopicTitle || "Aufnahme").replace(/[^a-zA-Z0-9äöüÄÖÜß]/g, "_") + "." + ext;

                playbackArea.style.display = "block";
                playbackArea.innerHTML = `
                    <div class="glass-panel" style="padding:20px 22px;border-radius:16px;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.3);margin-top:20px;text-align:center;">
                        <div style="font-weight:700;font-size:1.05rem;color:#34d399;margin-bottom:12px;">
                            🎧 Ihre Aufnahme anhören / Listen to your recording:
                        </div>
                        <audio controls src="${rec.audioUrl}" style="width:100%;max-width:440px;margin-bottom:14px;outline:none;border-radius:30px;"></audio>
                        <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
                            <button class="btn btn-primary" onclick="downloadA2SpeakingAudio('${safeName}')" style="background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;padding:12px 24px;border-radius:10px;font-weight:700;display:inline-flex;align-items:center;gap:8px;cursor:pointer;box-shadow:0 4px 16px rgba(16,185,129,0.35);">
                                📥 Audio-Datei speichern (.${ext})
                            </button>
                        </div>
                        <div style="margin-top:12px;font-size:0.86rem;color:var(--color-text-muted);line-height:1.5;">
                            💡 <strong>Für KI-Bewertung:</strong> Speichern Sie diese Datei, kopieren Sie unten den Prompt und laden Sie beides zusammen in ChatGPT, Claude oder Gemini hoch!
                        </div>
                    </div>
                `;
            }
        };

        rec.mediaRecorder.start(250);

        // Update UI to active recording state
        if (btn) {
            btn.innerHTML = `
                <span style="font-size:3.2rem;display:block;margin-bottom:8px;animation:a2-rec-pulse 1s infinite alternate;">🔴</span>
                <div style="font-weight:800;font-size:1.2rem;color:#f87171;">Aufnahme läuft... (Tippen zum Stoppen)</div>
                <div style="font-size:0.85rem;color:#fca5a5;margin-top:4px;">Tippen Sie hier, wenn Sie fertig gesprochen haben</div>
            `;
            btn.style.borderColor = "#ef4444";
            btn.style.background = "rgba(239,68,68,0.15)";
            btn.classList.add("a2-recording-pulsing");
        }

        if (statusBox) {
            statusBox.innerHTML = `<span style="color:#ef4444;font-weight:700;">🔴 Mikrofon aktiv • Sprechen Sie jetzt!</span>`;
        }

        if (timerDisplay) {
            timerDisplay.textContent = "00:00 / 01:30";
            timerDisplay.style.color = "#c4b5fd";
        }

        rec.timerInterval = setInterval(function() {
            rec.seconds++;
            const mins = Math.floor(rec.seconds / 60);
            const secs = rec.seconds % 60;
            const str = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
            if (timerDisplay) {
                timerDisplay.textContent = str + " / 01:30";
                if (rec.seconds >= 60 && rec.seconds <= 90) {
                    timerDisplay.style.color = "#34d399"; // Optimal Goethe range
                } else if (rec.seconds > 90) {
                    timerDisplay.style.color = "#f59e0b"; // Over time limit
                }
            }
            if (rec.seconds >= 120) { // Safety ceiling at 2 mins
                toggleA2SpeakingRecording(topicTitle);
            }
        }, 1000);

    }).catch(function(err) {
        console.error("Microphone access error:", err);
        alert("Mikrofon-Zugriff fehlgeschlagen: Bitte erlauben Sie den Zugriff auf Ihr Mikrofon im Browser.");
        rec.isRecording = false;
    });
};

window.downloadA2SpeakingAudio = function(filename) {
    const rec = window._a2MonoRecorder;
    if (!rec || !rec.audioBlob) {
        alert("Keine Aufnahme vorhanden.");
        return;
    }
    const url = rec.audioUrl || URL.createObjectURL(rec.audioBlob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename || "Goethe_A2_Monolog.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        if (a.parentNode) a.parentNode.removeChild(a);
    }, 150);
};

window.checkA2SpeakingGap = function(index, correct) {
    const input = document.getElementById(`a2_gap_${index}`);
    const fb = document.getElementById(`a2_gap_fb_${index}`);
    if (!input || !fb) return;

    const val = input.value.trim();
    const isCorrect = val.toLowerCase() === correct.toLowerCase();

    if (isCorrect) {
        input.style.borderColor = "#10b981";
        input.style.background = "rgba(16,185,129,0.2)";
        fb.innerHTML = `<span style="color:#34d399;font-weight:700;">✅ Richtig! (${correct})</span>`;
    } else {
        input.style.borderColor = "#ef4444";
        input.style.background = "rgba(239,68,68,0.2)";
        fb.innerHTML = `<span style="color:#f87171;font-weight:700;">❌ Falsch. Richtig ist: „${correct}“</span>`;
    }
};

window.copyA2SpeakingAIPrompt = function(topicTitle) {
    const prompt = `Please evaluate my German spoken monologue for the Goethe-Zertifikat A2 Speaking Exam (Teil 2: Von sich erzählen).

Topic: ${topicTitle}
Target Level: CEFR A2 (Elementary German)

I have attached my recorded audio file of this monologue. Please listen to it and evaluate according to official Goethe-Zertifikat A2 criteria:
1. Pronunciation & Intonation (Aussprache und Betonung) - Were the words clearly understandable? Note any specific sound mispronunciations (ch, r, umlauts ä/ö/ü).
2. Sentence Structure & Word Order (Satzbau) - Correct Verb-Second position in main clauses, Verb-final position in subordinate clauses (weil/obwohl/wenn), and separable verbs.
3. Vocabulary & Fluency (Wortschatz & Flüssigkeit) - Was the vocabulary suitable for A2? Did I cover the key points without excessive hesitation?
4. Concrete Corrections & Tips - Provide 3 practical suggestions to improve my speaking fluency and score higher in the Goethe exam.`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(prompt).then(function() {
            alert("✅ KI-Sprech-Prompt wurde in die Zwischenablage kopiert!\\n\\nLaden Sie jetzt Ihre gespeicherte Audiodatei zusammen mit diesem Prompt in ChatGPT, Claude oder Gemini hoch.");
        }).catch(function() {
            promptUserWithText(prompt);
        });
    } else {
        promptUserWithText(prompt);
    }
};

/* --- TEIL 3 WORKSPACE: INTERACTIVE NEGOTIATION --- */
window.openA2SpeakingTeil3Practice = function(planIndex, turnIndex = 0, pushHistory = true) {
    if (typeof scrollAppToTop === "function") scrollAppToTop();
    activeA2SpeakingState.teil3PlanIndex = planIndex;
    activeA2SpeakingState.teil3TurnIndex = turnIndex;
    const plan = A2_SPEAKING_DATABASE.teil3_planning[planIndex];
    if (!plan) return;

    const selHub = document.getElementById("a2-speaking-selection-hub");
    const workspace = document.getElementById("a2-speaking-workspace");
    const titleEl = document.getElementById("a2-speaking-title");

    if (selHub) selHub.style.display = "none";
    if (workspace) workspace.style.display = "block";
    if (titleEl) titleEl.textContent = `🤝 Teil 3: ${plan.title}`;

    const container = document.getElementById("a2-speaking-workspace-content");
    if (!container) return;

    const turn = plan.turns[turnIndex] || plan.turns[0];
    const isLastTurn = turnIndex === plan.turns.length - 1;

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:18px;">
            <button class="btn btn-secondary" onclick="openA2SpeakingLab()" style="font-size:0.85rem;padding:6px 14px;border-radius:8px;">
                &larr; Alle Verhandlungsszenarien / All Scenarios
            </button>
            <span style="font-size:0.85rem;font-weight:700;color:#60a5fa;background:rgba(59,130,246,0.15);padding:4px 12px;border-radius:20px;">
                Runde ${turnIndex + 1} von ${plan.turns.length}
            </span>
        </div>

        <!-- Situation & Tasks Banner -->
        <div class="glass-panel" style="padding:18px 22px;border-radius:16px;margin-bottom:24px;border-left:4px solid #3b82f6;background:rgba(15,23,42,0.6);">
            <div style="font-weight:700;font-size:1.05rem;color:var(--color-text-primary);margin-bottom:4px;">${plan.situation}</div>
            <div style="font-size:0.9rem;color:var(--color-text-muted);font-style:italic;margin-bottom:12px;">🇬🇧 ${plan.situationEN}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${plan.points.map(p => `<span style="font-size:0.82rem;background:rgba(255,255,255,0.06);padding:3px 10px;border-radius:12px;color:#93c5fd;">📍 ${p.de}</span>`).join("")}
            </div>
        </div>

        <!-- Simulated Partner Bubble -->
        <div class="glass-panel" style="padding:22px 24px;border-radius:18px;margin-bottom:24px;background:rgba(30,41,59,0.7);border:1px solid rgba(59,130,246,0.3);">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:1.3rem;">👤</div>
                <div>
                    <strong style="color:#60a5fa;font-size:1.05rem;">Prüfungspartner (Audio-Simulation):</strong>
                    <div style="font-size:0.85rem;color:var(--color-text-muted);">Hören Sie genau zu und reagieren Sie!</div>
                </div>
            </div>
            
            <div style="font-size:1.2rem;font-weight:700;line-height:1.7;color:#fff;margin-bottom:6px;">
                „${turn.partnerSpeech}“
            </div>
            <div style="font-size:0.95rem;color:var(--color-text-muted);font-style:italic;margin-bottom:16px;">
                🇬🇧 ${turn.partnerSpeechEN}
            </div>

            <div style="display:flex;gap:10px;">
                <button class="btn btn-primary" onclick="speakA2Text('${turn.partnerSpeech.replace(/'/g,"\\'")}', 0.9)" style="padding:8px 18px;border-radius:8px;font-size:0.9rem;display:inline-flex;align-items:center;gap:6px;">
                    🔊 Partner anhören (1.0x)
                </button>
                <button class="btn btn-secondary" onclick="speakA2Text('${turn.partnerSpeech.replace(/'/g,"\\'")}', 0.7)" style="padding:8px 14px;border-radius:8px;font-size:0.9rem;">
                    🐢 Langsam
                </button>
            </div>
        </div>

        <!-- Candidate Response Choices -->
        <div class="glass-panel" style="padding:22px 24px;border-radius:18px;margin-bottom:20px;">
            <h4 style="margin:0 0 14px 0;font-size:1.1rem;color:#38bdf8;">Ihre Antwort / How would you reply?</h4>
            <div style="display:flex;flex-direction:column;gap:12px;">
                ${turn.options.map((opt, oi) => `
                    <div class="glass-panel" onclick="selectA2SpeakingResponse(${planIndex}, ${turnIndex}, ${oi})" style="padding:14px 18px;border-radius:12px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);cursor:pointer;transition:all 0.2s ease;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                            <span style="font-size:0.8rem;font-weight:700;color:#38bdf8;text-transform:uppercase;">${opt.note}</span>
                            <button class="vocab-tts-btn" onclick="event.stopPropagation();speakA2Text('${opt.text.replace(/'/g,"\\'")}')" style="width:32px;height:32px;border-radius:8px;font-size:0.9rem;">🔊</button>
                        </div>
                        <div style="font-size:1.05rem;font-weight:600;color:#fff;">„${opt.text}“</div>
                    </div>
                `).join("")}
            </div>
        </div>

        <!-- Turn Navigation -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;">
            <button class="btn btn-secondary" onclick="openA2SpeakingTeil3Practice(${planIndex}, ${Math.max(0, turnIndex - 1)})" ${turnIndex === 0 ? "disabled" : ""}>
                &larr; Vorherige Runde
            </button>
            ${isLastTurn ? `
                <button class="btn btn-primary" onclick="openA2SpeakingLab()" style="background:#10b981;border:none;padding:10px 24px;border-radius:10px;font-weight:700;">
                    🎉 Dialog erfolgreich abgeschlossen!
                </button>
            ` : `
                <button class="btn btn-primary" onclick="openA2SpeakingTeil3Practice(${planIndex}, ${turnIndex + 1})">
                    Nächste Runde &rarr;
                </button>
            `}
        </div>
    `;


};

window.selectA2SpeakingResponse = function(planIndex, turnIndex, optionIndex) {
    const plan = A2_SPEAKING_DATABASE.teil3_planning[planIndex];
    if (!plan || !plan.turns[turnIndex]) return;
    const opt = plan.turns[turnIndex].options[optionIndex];
    if (opt) {
        speakA2Text(opt.text);
    }
};

window.handleA2SpeakingBackNavigation = function() {
    const selHub = document.getElementById("a2-speaking-selection-hub");
    const workspace = document.getElementById("a2-speaking-workspace");
    if (workspace && workspace.style.display !== "none") {
        workspace.style.display = "none";
        if (selHub) selHub.style.display = "block";
        const titleEl = document.getElementById("a2-speaking-title");
        if (titleEl) titleEl.textContent = "A2 Sprechlabor / Speaking & Fluency";
    } else {
        if (typeof switchToView === "function") switchToView("view-a2-practice-menu");
    }
};

/* ==========================================================================
   5. DOM INITIALIZATION HOOKS FOR A2 WRITING & SPEAKING
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    const a2WritingBackBtn = document.getElementById("a2-writing-back-btn");
    if (a2WritingBackBtn) {
        a2WritingBackBtn.addEventListener("click", function(e) {
            if (e) { e.preventDefault(); e.stopPropagation(); }
            if (typeof handleAppBackNavigation === "function") handleAppBackNavigation();
            else handleA2WritingBackNavigation();
        }, true);
    }

    const a2SpeakingBackBtn = document.getElementById("a2-speaking-back-btn");
    if (a2SpeakingBackBtn) {
        a2SpeakingBackBtn.addEventListener("click", function(e) {
            if (e) { e.preventDefault(); e.stopPropagation(); }
            if (typeof handleAppBackNavigation === "function") handleAppBackNavigation();
            else handleA2SpeakingBackNavigation();
        }, true);
    }
});

console.log("✅ a2_writing_speaking.js v1.0.0 loaded — 10 A2 Writing tasks & 3-Part Speaking Lab ready.");
