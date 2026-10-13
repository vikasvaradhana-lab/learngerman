/* ============================================================
   A2 PRACTICE EXPANSION BUNDLE 2 (Goethe Deutsch A2)
   - 15 Fresh Reading Passages (Passages 31-45, Grand Total: 45)
   - 15 Fresh Interactive Listening Topics (Topics 31-45, Grand Total: 45 / 90 Dialogues)
   - 15 Fresh Writing Studio Tasks (Tasks 26-40: 8 SMS + 7 Emails, Grand Total: 40)
   - 45 Fresh Speaking Studio Sessions (15 Cue Cards + 15 Monologues with Malayalam + 15 Planning)
   ============================================================ */

(function() {
    "use strict";

    console.log("Loading A2 Practice Expansion Pack 2 (+15 Reading, +15 Listening, +15 Writing, +45 Speaking)...");

    /* ============================================================
       PART 1: 15 NEW READING PASSAGES (a2_read_31 to a2_read_45)
       ============================================================ */
    const NEW_A2_READING_PASSAGES_2 = [
    {
        "id": "a2_read_31",
        "title": "Praxis Dr. Schneider: Urlaubsvertretung & Notdienst",
        "titleEN": "Medical Practice Dr. Schneider: Holiday Cover & Emergency",
        "emoji": "🩺",
        "type": "Praxisaushang",
        "warmup": {
            "vocab": [
                {
                    "word": "die Urlaubsvertretung",
                    "gender": "die",
                    "translation": "holiday cover / locum doctor",
                    "example": "Die Urlaubsvertretung übernimmt Dr. Klein.",
                    "exampleEN": "Dr. Klein will take over the holiday cover."
                },
                {
                    "word": "akute Beschwerden",
                    "gender": "Pl.",
                    "translation": "acute symptoms / ailments",
                    "example": "Bei akuten Beschwerden kommen Sie bitte ohne Termin.",
                    "exampleEN": "For acute ailments please come without an appointment."
                },
                {
                    "word": "der Ärztliche Bereitschaftsdienst",
                    "gender": "der",
                    "translation": "on-call medical service (116 117)",
                    "example": "Abends erreichen Sie den Bereitschaftsdienst unter 116 117.",
                    "exampleEN": "In the evening reach on-call service at 116 117."
                },
                {
                    "word": "die Krankenversicherungskarte",
                    "gender": "die",
                    "translation": "health insurance card",
                    "example": "Vergessen Sie nicht Ihre elektronische Gesundheitskarte.",
                    "exampleEN": "Do not forget your electronic health card."
                }
            ],
            "readingTip": "Achten Sie auf Datumsangaben, Uhrzeiten und Telefonnummern für Notfälle.",
            "readingTipEN": "Pay attention to dates, opening hours, and phone numbers for emergencies."
        },
        "text": "**Hausarztpraxis Dr. med. Martin Schneider**\nFacharzt für Allgemeinmedizin · Schillerstraße 14 · 50667 Köln\n\nLiebe Patientinnen und Patienten,\n\nunsere Praxis bleibt wegen unseres Sommerurlaubs vom **22. Juli bis einschließlich 9. August** geschlossen.\n\nAb Montag, dem **12. August**, sind wir ab 8:00 Uhr wieder wie gewohnt für Sie da.\n\n**Unsere Vertretung in dringenden Fällen übernimmt:**\nPraxis Dr. med. Anke Weber\nHohenzollernring 22 (nur 5 Minuten Fußweg vom Rudolfplatz)\nTelefon: 0221 / 45 88 90\n\n**Sprechzeiten der Vertretungspraxis:**\n• Montag bis Donnerstag: 8:30 – 12:30 Uhr und 15:00 – 18:00 Uhr\n• Freitag: 8:30 – 13:00 Uhr\n\nBitte bringen Sie zu jedem Besuch Ihre **elektronische Versichertenkarte (eGK)** mit.\n\nAußerhalb der regulären Praxiszeiten sowie am Wochenende wenden Sie sich bitte an den **bundesweiten ärztlichen Bereitschaftsdienst unter der kostenfreien Rufnummer 116 117**.\n\nIn lebensbedrohlichen Notfällen wählen Sie bitte sofort den Notruf **112**.\n\nIhr Praxisteam Dr. Schneider",
        "textEN": "General Practice Dr. med. Martin Schneider\nGeneral Practitioner · Schillerstraße 14 · 50667 Cologne\n\nDear Patients,\n\nOur practice will be closed for our summer holiday from July 22nd up to and including August 9th.\n\nFrom Monday, August 12th, we will be back for you as usual from 8:00 AM.\n\nOur cover in urgent cases is provided by:\nPractice Dr. med. Anke Weber\nHohenzollernring 22 (only 5 minutes walk from Rudolfplatz)\nPhone: 0221 / 45 88 90\n\nOpening hours of cover practice:\n• Mon to Thu: 8:30 – 12:30 and 15:00 – 18:00\n• Fri: 8:30 – 13:00\n\nPlease bring your electronic health insurance card along to every visit.\n\nOutside regular practice hours as well as at weekends, please contact the nationwide on-call service at toll-free 116 117.\n\nIn life-threatening emergencies, dial 112 immediately.",
        "questions": [
            {
                "question": "Wann öffnet die Praxis von Dr. Schneider wieder?",
                "questionEN": "When does Dr. Schneider's practice reopen?",
                "options": [
                    "Am 9. August",
                    "Erst am 1. September",
                    "Am Montag, dem 12. August",
                    "Am 22. Juli"
                ],
                "correct": 2,
                "explanation": "'Ab Montag, dem 12. August, sind wir ab 8:00 Uhr wieder wie gewohnt für Sie da.'"
            },
            {
                "question": "Was müssen Patienten zwingend zur Vertretungspraxis Dr. Weber mitnehmen?",
                "questionEN": "What must patients definitely bring to the covering practice Dr. Weber?",
                "options": [
                    "Ihre elektronische Versichertenkarte",
                    "Einen schriftlichen Überweisungsschein",
                    "Bargeld für die Behandlungsgebühr",
                    "Ein Passfoto"
                ],
                "correct": 0,
                "explanation": "'Bitte bringen Sie zu jedem Besuch Ihre elektronische Versichertenkarte (eGK) mit.'"
            },
            {
                "question": "Welche Nummer wählt man bei lebensbedrohlichen Notfällen?",
                "questionEN": "Which number do you dial in life-threatening emergencies?",
                "options": [
                    "116 117",
                    "112",
                    "0221 / 45 88 90",
                    "110"
                ],
                "correct": 1,
                "explanation": "'In lebensbedrohlichen Notfällen wählen Sie bitte sofort den Notruf 112.'"
            }
        ]
    },
    {
        "id": "a2_read_32",
        "title": "Wohnungsangebot: Helle 2-Zimmer-Wohnung in Bonn",
        "titleEN": "Apartment Ad: Bright 2-Room Flat in Bonn",
        "emoji": "🏠",
        "type": "Wohnungsanzeige",
        "warmup": {
            "vocab": [
                {
                    "word": "die Kaltmiete",
                    "gender": "die",
                    "translation": "base rent (excluding utilities)",
                    "example": "Die Kaltmiete beträgt 650 Euro.",
                    "exampleEN": "The base rent is 650 euros."
                },
                {
                    "word": "die Nebenkosten (Pl.)",
                    "gender": "die",
                    "translation": "utility / ancillary costs",
                    "example": "Nebenkosten beinhalten Heizung und Wasser.",
                    "exampleEN": "Utility costs include heating and water."
                },
                {
                    "word": "die Kaution",
                    "gender": "die",
                    "translation": "security deposit",
                    "example": "Die Kaution beträgt drei Monatskaltmieten.",
                    "exampleEN": "The deposit is three months' base rent."
                },
                {
                    "word": "die Einbauküche (EBK)",
                    "gender": "die",
                    "translation": "fitted kitchen",
                    "example": "Eine moderne EBK ist im Mietpreis inbegriffen.",
                    "exampleEN": "A modern fitted kitchen is included in the rent."
                }
            ],
            "readingTip": "Prüfen Sie Gesamtkosten (Kaltmiete + Nebenkosten = Warmmiete) und Bezugsdatum.",
            "readingTipEN": "Check total costs (base rent + utilities = warm rent) and move-in date."
        },
        "text": "**Gemütliche 2-Zimmer-Wohnung mit Südbalkon in Bonn-Beuel**\n\n**Objektbeschreibung:**\nSchöne, frisch renovierte 2-Zimmer-Wohnung im 2. Obergeschoss eines gepflegten 6-Parteien-Hauses. Großes, lichtdurchflutetes Wohnzimmer mit direktem Zugang zum sonnigen Südbalkon. Ruhiges Schlafzimmer zum Innenhof. Neues Badezimmer mit Duschwanne und Tageslichtfenster.\n\n**Eckdaten:**\n• Wohnfläche: ca. **56 m²**\n• Zimmer: 2 Zimmer, Küche, Diele, Bad, Balkon\n• Kaltmiete: **640,00 €**\n• Nebenkostenvorauszahlung (inkl. Heizung): **160,00 €**\n• **Gesamtmiete (Warmmiete): 800,00 €**\n• Kaution: 3 Kaltmieten (1.920,00 € vor Schlüsselübergabe)\n• Bezugsfrei ab: **1. November**\n\n**Ausstattung:**\n• Moderne Einbauküche mit Herd, Backofen und Geschirrspüler vorhanden (Abschlag: 30 €/Monat)\n• Eigener trockener Kellerraum (ca. 8 m²)\n• Gemeinschaftlicher Waschmaschinenraum im Untergeschoss\n• Haustiere: Kleine Haustiere nach vorheriger Absprache erlaubt\n\n**Lage:**\nNur 3 Gehminuten zur Straßenbahnhaltestelle (Linie 66 nach Bonn Hbf in 8 Minuten). Supermarkt, Bäckerei und Rheinpromenade bequem zu Fuß erreichbar.\n\n**Kontakt für Besichtigungstermine:**\nHausverwaltung Rheinblick · E-Mail: info@rheinblick-immobilien.de",
        "textEN": "Cosy 2-Room Apartment with South Balcony in Bonn-Beuel\n\nProperty Description:\nBeautiful, freshly renovated 2-room apartment on the 2nd floor of a well-maintained 6-unit building. Large sunlit living room with direct access to sunny south-facing balcony. Quiet bedroom facing courtyard. New bathroom with shower bathtub and daylight window.\n\nKey Data:\n• Living space: approx. 56 m²\n• Rooms: 2 rooms, kitchen, hallway, bathroom, balcony\n• Base rent: €640.00\n• Utility advance (incl. heating): €160.00\n• Total rent (warm): €800.00\n• Deposit: 3 base rents (€1,920.00 before key handover)\n• Available from: November 1st\n\nFacilities:\n• Modern fitted kitchen with stove, oven, dishwasher available (€30/month fee)\n• Private dry basement storage room (approx. 8 m²)\n• Shared laundry room in basement\n• Pets: Small pets permitted upon prior consultation\n\nLocation:\nOnly 3 minutes walk to tram stop (Line 66 to Bonn Central Station in 8 mins). Supermarket, bakery, and Rhine promenade easily reachable on foot.",
        "questions": [
            {
                "question": "Wie hoch ist die monatliche Gesamtmiete (Warmmiete)?",
                "questionEN": "How much is the total monthly rent (warm rent)?",
                "options": [
                    "640,00 Euro",
                    "1.920,00 Euro",
                    "800,00 Euro",
                    "720,00 Euro"
                ],
                "correct": 2,
                "explanation": "'Gesamtmiete (Warmmiete): 800,00 €' (640 € Kaltmiete + 160 € Nebenkosten)."
            },
            {
                "question": "Ab wann kann die Wohnung frühestens gemietet werden?",
                "questionEN": "From when at the earliest can the apartment be rented?",
                "options": [
                    "Ab 1. November",
                    "Ab sofort",
                    "Ab 1. Dezember",
                    "Erst im nächsten Frühjahr"
                ],
                "correct": 0,
                "explanation": "'Bezugsfrei ab: 1. November'."
            },
            {
                "question": "Wie lange braucht die Straßenbahn Linie 66 bis zum Bonner Hauptbahnhof?",
                "questionEN": "How long does tram line 66 take to Bonn Central Station?",
                "options": [
                    "3 Minuten",
                    "15 Minuten",
                    "8 Minuten",
                    "20 Minuten"
                ],
                "correct": 2,
                "explanation": "'Linie 66 nach Bonn Hbf in 8 Minuten'."
            }
        ]
    },
    {
        "id": "a2_read_33",
        "title": "FitLife Fitnessstudio: Frühlingsangebot & Kursplan",
        "titleEN": "FitLife Gym: Spring Special & Class Schedule",
        "emoji": "🏋️",
        "type": "Flyer",
        "warmup": {
            "vocab": [
                {
                    "word": "das Probetraining",
                    "gender": "das",
                    "translation": "trial workout",
                    "example": "Das erste Probetraining ist unverbindlich und gratis.",
                    "exampleEN": "The first trial workout is non-binding and free."
                },
                {
                    "word": "die Ermäßigung",
                    "gender": "die",
                    "translation": "discount / reduction",
                    "example": "Auszubildende erhalten 20 % Ermäßigung.",
                    "exampleEN": "Apprentices receive a 20% discount."
                },
                {
                    "word": "die Mitgliedschaft",
                    "gender": "die",
                    "translation": "membership",
                    "example": "Die Mindestlaufzeit der Mitgliedschaft beträgt 12 Monate.",
                    "exampleEN": "The minimum membership duration is 12 months."
                },
                {
                    "word": "die Einweisung",
                    "gender": "die",
                    "translation": "introductory instruction",
                    "example": "Ein Trainer gibt Ihnen eine ausführliche Geräteeinweisung.",
                    "exampleEN": "A trainer gives you detailed equipment instruction."
                }
            ],
            "readingTip": "Achten Sie auf Rabatte, Öffnungszeiten am Wochenende und was man mitbringen muss.",
            "readingTipEN": "Note discounts, weekend hours, and items required to bring along."
        },
        "text": "**FitLife Premium Club – Starten Sie fit in den Frühling!**\n\nTrainieren Sie ab sofort im modernsten Studio der Stadt auf über 1.500 m²!\n\n**Unser Frühlings-Spezial (gültig bis 30. April):**\n• Keine Aufnahmegebühr (Sie sparen 49,00 €!)\n• Die ersten zwei Monate für nur **19,90 € pro Monat**, danach regulär 34,90 €/Monat\n• Kostenlose persönliche Trainingsplanerstellung und Geräteeinweisung durch qualifizierte Fitnesstrainer\n\n**Unsere Highlights:**\n• Cardio- und Freihantelbereich mit neuesten Geräten\n• Über 40 Gruppenkurse pro Woche: Yoga, Pilates, Spinning, Zumba und Rückenfit\n• Wellnessbereich mit finnischer Sauna und Ruheraum (im Monatsbeitrag enthalten)\n• Kostenlose Getränkeflatrate für Mineralwasser und isotonische Sportdrinks\n\n**Öffnungszeiten:**\n• Montag bis Freitag: **06:00 – 23:00 Uhr**\n• Samstag, Sonntag & Feiertage: **08:00 – 21:00 Uhr**\n\n**Wichtig für Ihr Training:**\nAus hygienischen Gründen bitten wir alle Mitglieder, ein **großes Handtuch** als Unterlage für die Trainingsgeräte und **saubere Wechselschuhe** mitzubringen. Straßenschuhe sind auf der Trainingsfläche untersagt.\n\nVereinbaren Sie noch heute Ihr kostenloses Probetraining unter Telefon 0711 / 99 21 00 oder online auf www.fitlife-club.de!",
        "textEN": "FitLife Premium Club – Start Fit into Spring!\n\nWork out now in the city's most modern gym across 1,500 m²!\n\nOur Spring Special (valid until April 30th):\n• No joining fee (save €49.00!)\n• First two months for only €19.90/month, then regular €34.90/month\n• Free personal workout plan and equipment induction by certified trainers\n\nHighlights:\n• Cardio and free-weights area\n• Over 40 classes weekly: Yoga, Pilates, Spinning, Zumba, Back Fitness\n• Wellness area with Finnish sauna and relaxation lounge (included in fee)\n• Free drinks flatrate for water and sports drinks\n\nOpening hours:\n• Mon-Fri: 6:00 AM – 11:00 PM\n• Sat, Sun, Holidays: 8:00 AM – 9:00 PM\n\nImportant:\nBring a large towel as underlay and clean indoor shoes. Outdoor shoes are prohibited on gym floor.",
        "questions": [
            {
                "question": "Wie viel kostet die Mitgliedschaft in den ersten zwei Monaten?",
                "questionEN": "How much is the membership during the first two months?",
                "options": [
                    "34,90 € pro Monat",
                    "19,90 € pro Monat",
                    "Kostenlos",
                    "49,00 € pro Monat"
                ],
                "correct": 1,
                "explanation": "'Die ersten zwei Monate für nur 19,90 € pro Monat'."
            },
            {
                "question": "Wann schließt das Fitnessstudio an Samstagen und Sonntagen?",
                "questionEN": "When does the gym close on Saturdays and Sundays?",
                "options": [
                    "Um 23:00 Uhr",
                    "Bereits um 18:00 Uhr",
                    "Um 21:00 Uhr",
                    "Um 20:00 Uhr"
                ],
                "correct": 2,
                "explanation": "'Samstag, Sonntag & Feiertage: 08:00 – 21:00 Uhr'."
            },
            {
                "question": "Was müssen Trainierende aus hygienischen Gründen auf die Geräte legen?",
                "questionEN": "What must members place onto equipment for hygiene reasons?",
                "options": [
                    "Eine Plastikfolie",
                    "Ein großes Handtuch",
                    "Ihre Sporttasche",
                    "Ein T-Shirt"
                ],
                "correct": 1,
                "explanation": "'ein großes Handtuch als Unterlage für die Trainingsgeräte'."
            }
        ]
    },
    {
        "id": "a2_read_34",
        "title": "Kundenservice-Benachrichtigung: Paketversand & Abholung",
        "titleEN": "Customer Notification: Parcel Delivery & Pickup",
        "emoji": "📦",
        "type": "E-Mail / Benachrichtigung",
        "warmup": {
            "vocab": [
                {
                    "word": "die Zustellung",
                    "gender": "die",
                    "translation": "delivery",
                    "example": "Die Zustellung konnte nicht erfolgreich durchgeführt werden.",
                    "exampleEN": "Delivery could not be completed successfully."
                },
                {
                    "word": "die Filiale",
                    "gender": "die",
                    "translation": "branch / parcel shop",
                    "example": "Ihr Paket liegt in der Postfiliale zur Abholung bereit.",
                    "exampleEN": "Your parcel is ready for pickup at the post branch."
                },
                {
                    "word": "die Lagerfrist",
                    "gender": "die",
                    "translation": "storage period",
                    "example": "Die Lagerfrist beträgt sieben Werktage.",
                    "exampleEN": "The storage period is seven business days."
                },
                {
                    "word": "die Vollmacht",
                    "gender": "die",
                    "translation": "power of attorney / authorization",
                    "example": "Mit einer Vollmacht kann Ihr Nachbar das Paket abholen.",
                    "exampleEN": "With an authorization your neighbour can pick up the parcel."
                }
            ],
            "readingTip": "Prüfen Sie, bis wann und wo das Paket abgeholt werden muss und welche Ausweise nötig sind.",
            "readingTipEN": "Check where and by when the parcel must be picked up and which IDs are required."
        },
        "text": "**Paket-Express: Wir haben Sie leider nicht angetroffen!**\n\nSehr geehrte Kundin, sehr geehrter Kunde,\n\nwir haben heute um **11:25 Uhr** versucht, Ihre Sendung (Sendungsnummer: **DE-99381-02**) an Ihrer Wohnadresse zuzustellen. Da niemand die Tür geöffnet hat und auch kein Nachbar das Paket annehmen konnte, haben wir Ihre Sendung in folgende Partnerfiliale gebracht:\n\n**Abholort:**\nPost & Kiosk am Stadtgarten\nBismarckstraße 42, 69115 Heidelberg\n\n**Öffnungszeiten der Filiale:**\n• Montag bis Freitag: 08:30 – 18:30 Uhr\n• Samstag: 09:00 – 14:00 Uhr\n\n**Wichtige Abholhinweise:**\n• Das Paket liegt ab morgen früh **09:00 Uhr** für Sie bereit.\n• Die **Lagerfrist beträgt 7 Werktage** (bis einschließlich 24. Oktober). Nach Ablauf dieser Frist wird die Sendung automatisch an den Absender zurückgeschickt.\n• Bitte bringen Sie zur Abholung einen **gültigen Lichtbildausweis** (Personalausweis oder Reisepass) sowie diese Benachrichtigung (digital auf dem Smartphone oder ausgedruckt) mit.\n• Falls Sie das Paket nicht persönlich abholen können, füllen Sie bitte das Vollmachtsformular auf der Rückseite aus.\n\nIhr Paket-Express Team",
        "textEN": "Parcel Express: Unfortunately we missed you!\n\nDear Customer,\n\nToday at 11:25 AM we attempted to deliver your parcel (tracking no: DE-99381-02) to your home address. As nobody answered and no neighbour was available, we brought your shipment to the following partner branch:\n\nPickup Location:\nPost & Kiosk am Stadtgarten\nBismarckstraße 42, 69115 Heidelberg\n\nOpening Hours:\n• Mon to Fri: 8:30 AM – 6:30 PM\n• Sat: 9:00 AM – 2:00 PM\n\nImportant Pickup Notes:\n• Available from tomorrow morning 9:00 AM.\n• Storage period is 7 working days (until Oct 24th). Afterwards it will be returned to sender.\n• Please bring a valid photo ID and this notification.\n• If collecting via a representative, complete the authorization form.",
        "questions": [
            {
                "question": "Wie lange wird das Paket in der Postfiliale gelagert?",
                "questionEN": "How long is the parcel stored at the post branch?",
                "options": [
                    "14 Tage",
                    "7 Werktage",
                    "Einen Monat",
                    "Nur 24 Stunden"
                ],
                "correct": 1,
                "explanation": "'Die Lagerfrist beträgt 7 Werktage (bis einschließlich 24. Oktober).'"
            },
            {
                "question": "Was passiert, wenn der Empfänger das Paket nicht rechtzeitig abholt?",
                "questionEN": "What happens if the recipient does not pick up the parcel on time?",
                "options": [
                    "Es wird vernichtet",
                    "Der Empfänger muss eine Geldstrafe zahlen",
                    "Es wird an den Absender zurückgeschickt",
                    "Es wird an die Polizei übergeben"
                ],
                "correct": 2,
                "explanation": "'Nach Ablauf dieser Frist wird die Sendung automatisch an den Absender zurückgeschickt.'"
            },
            {
                "question": "Was muss man neben der Benachrichtigung zur Abholung vorlegen?",
                "questionEN": "What must one present in addition to the notification for pickup?",
                "options": [
                    "Einen Mietvertrag",
                    "Einen gültigen Lichtbildausweis",
                    "Die Originalrechnung",
                    "Ein Passfoto"
                ],
                "correct": 1,
                "explanation": "'Bitte bringen Sie zur Abholung einen gültigen Lichtbildausweis (Personalausweis oder Reisepass)... mit.'"
            }
        ]
    },
    {
        "id": "a2_read_35",
        "title": "Rezept & Kochtipp: Schwäbische Gemüsemaultaschen",
        "titleEN": "Recipe & Cooking Tip: Swabian Vegetable Maultaschen",
        "emoji": "🥟",
        "type": "Rezept / Kochanleitung",
        "warmup": {
            "vocab": [
                {
                    "word": "die Gemüsebrühe",
                    "gender": "die",
                    "translation": "vegetable broth / stock",
                    "example": "Die Maultaschen werden in heißer Gemüsebrühe gegart.",
                    "exampleEN": "The Maultaschen are cooked in hot vegetable broth."
                },
                {
                    "word": "anbraten",
                    "gender": "Verb",
                    "translation": "to sauté / sear",
                    "example": "Zwiebeln in der Pfanne goldbraun anbraten.",
                    "exampleEN": "Fry onions in the pan until golden brown."
                },
                {
                    "word": "die Beilage",
                    "gender": "die",
                    "translation": "side dish",
                    "example": "Als Beilage servieren wir frischen Kartoffelsalat.",
                    "exampleEN": "As a side dish we serve fresh potato salad."
                },
                {
                    "word": "die Petersilie",
                    "gender": "die",
                    "translation": "parsley",
                    "example": "Mit frischer Petersilie garnieren.",
                    "exampleEN": "Garnish with fresh parsley."
                }
            ],
            "readingTip": "Achten Sie auf Zutatenmengen, Kochzeiten und Zubereitungsarten (in der Brühe oder gebraten).",
            "readingTipEN": "Note ingredient amounts, cooking durations, and preparation styles."
        },
        "text": "**Schwäbische Gemüsemaultaschen in der Brühe (für 4 Personen)**\n\nMaultaschen sind eine traditionelle schwäbische Spezialität. Diese vegetarische Variante mit Blattspinat, Lauch und Kräutern schmeckt besonders lecker an kalten Tagen.\n\n**Zutaten:**\n• 8 frische vegetarische Maultaschen (aus dem Kühlregal)\n• 1,2 Liter kräftige Gemüsebrühe\n• 2 mittelgroße Zwiebeln\n• 2 Esslöffel Butter oder Pflanzenöl\n• 1 Bund frischer Schnittlauch und etwas Petersilie\n• Salz, Pfeffer und frisch geriebene Muskatnuss\n\n**Zubereitung (Dauer: ca. 25 Minuten):**\n1. Bringen Sie die Gemüsebrühe in einem großen Topf zum Kochen. Schalten Sie die Hitze herunter, sodass die Brühe nur noch leise siedet.\n2. Geben Sie die Maultaschen vorsichtig in die Brühe und lassen Sie sie bei mittlerer Hitze **etwa 12 bis 15 Minuten gar ziehen** (nicht stark kochen!).\n3. In der Zwischenzeit schälen Sie die Zwiebeln und schneiden sie in feine Ringe. Erhitzen Sie die Butter in einer Pfanne und braten Sie die Zwiebelringe bei mittlerer Hitze **goldbraun und knusprig** an.\n4. Schmecken Sie die Brühe mit Salz, Pfeffer und einer Prise Muskatnuss ab.\n\n**Serviervorschlag:**\nGeben Sie je zwei Maultaschen mit heißer Brühe in tiefe Teller. Verteilen Sie die gerösteten Zwiebeln und fein gehackten Schnittlauch darauf. Dazu passt traditionell ein lauwarmer schwäbischer Kartoffelsalat! Guten Appetit!",
        "textEN": "Swabian Vegetable Maultaschen in Broth (for 4 persons)\n\nMaultaschen are a traditional Swabian delicacy. This vegetarian version with leaf spinach, leek, and herbs tastes wonderful on cold days.\n\nIngredients:\n• 8 fresh vegetarian Maultaschen\n• 1.2 litres vegetable broth\n• 2 onions\n• 2 tbsp butter or oil\n• 1 bunch chives and parsley\n• Salt, pepper, nutmeg\n\nPreparation (approx. 25 mins):\n1. Bring broth to boil, turn down to simmer.\n2. Add Maultaschen and let cook for 12–15 minutes.\n3. Fry sliced onions in butter until golden and crispy.\n4. Season with spices.\n\nServing: Place 2 Maultaschen in soup bowl with broth, top with fried onions and chives. Serve with Swabian potato salad!",
        "questions": [
            {
                "question": "Wie lange müssen die Maultaschen in der heißen Brühe ziehen?",
                "questionEN": "How long must the Maultaschen simmer in the hot broth?",
                "options": [
                    "Nur 3 Minuten",
                    "Etwa 12 bis 15 Minuten",
                    "Genau 45 Minuten",
                    "Über eine Stunde"
                ],
                "correct": 1,
                "explanation": "'etwa 12 bis 15 Minuten gar ziehen'."
            },
            {
                "question": "Wie werden die Zwiebeln in der Pfanne zubereitet?",
                "questionEN": "How are the onions prepared in the frying pan?",
                "options": [
                    "Roh im Wasser gekocht",
                    "Goldbraun und knusprig angebraten",
                    "Im Ofen gebacken",
                    "Püriert"
                ],
                "correct": 1,
                "explanation": "'braten Sie die Zwiebelringe... goldbraun und knusprig an'."
            },
            {
                "question": "Welche Beilage wird traditionell zu den Maultaschen empfohlen?",
                "questionEN": "Which side dish is traditionally recommended with Maultaschen?",
                "options": [
                    "Pommes Frites",
                    "Lauwarmer schwäbischer Kartoffelsalat",
                    "Weißbrot mit Marmelade",
                    "Gekochter Reis"
                ],
                "correct": 1,
                "explanation": "'Dazu passt traditionell ein lauwarmer schwäbischer Kartoffelsalat!'"
            }
        ]
    },
    {
        "id": "a2_read_36",
        "title": "Volkshochschule (VHS) München: Programmheft Herbst/Winter",
        "titleEN": "Adult Education Centre (VHS) Munich: Autumn/Winter Programme",
        "emoji": "🎓",
        "type": "Kursprogramm / Broschüre",
        "warmup": {
            "vocab": [
                {
                    "word": "die Kursgebühr",
                    "gender": "die",
                    "translation": "course fee / tuition",
                    "example": "Die Kursgebühr beträgt 145 Euro für 12 Abende.",
                    "exampleEN": "The course fee is 145 euros for 12 evenings."
                },
                {
                    "word": "das Lehrwerk",
                    "gender": "das",
                    "translation": "course book / textbook",
                    "example": "Das Lehrwerk ist nicht in der Gebühr enthalten.",
                    "exampleEN": "The textbook is not included in the fee."
                },
                {
                    "word": "die Ratenzahlung",
                    "gender": "die",
                    "translation": "installment payment",
                    "example": "Ratenzahlung ist auf Antrag möglich.",
                    "exampleEN": "Payment by installments is possible on request."
                },
                {
                    "word": "der Einstufungstest",
                    "gender": "der",
                    "translation": "placement test",
                    "example": "Machen Sie vor der Anmeldung einen kostenlosen Einstufungstest.",
                    "exampleEN": "Take a free placement test before enrolling."
                }
            ],
            "readingTip": "Achten Sie auf Kurstage, Uhrzeiten, Raumnummern und Anmeldefristen.",
            "readingTipEN": "Pay attention to course days, times, room numbers, and registration deadlines."
        },
        "text": "**Münchner Volkshochschule – Fachbereich Deutsch als Fremdsprache**\n\n**Kursangebot: Deutsch Kommunikation & Konversation (Stufe A2/B1)**\n\nSie haben bereits A2-Grundkenntnisse und möchten flüssiger im Alltag sprechen? In diesem Kurs üben wir freies Sprechen, Telefonieren, Reklamieren und Diskussionen zu aktuellen Themen.\n\n**Kursdetails:**\n• Kursnummer: **DE-3401-H**\n• Zeitraum: **16. September bis 9. Dezember** (insgesamt 12 Termine, in den Herbstferien kein Unterricht)\n• Wochentag: Immer **montags von 18:30 bis 20:45 Uhr** (inkl. 15 Minuten Pause)\n• Kursort: VHS-Zentrum Gasteig, Rosenheimer Str. 5, **Raum 3.12**\n• Gruppengröße: Maximal 14 Teilnehmerinnen und Teilnehmer\n• Kursgebühr: **155,00 €** (Ermäßigung für Studenten, Rentner und Arbeitslose: 25 %)\n\n**Lehrmaterial:**\nWird am ersten Kursabend von der Kursleiterin Frau Dr. Köhler vorgestellt. Bitte kaufen Sie vorab noch keine Bücher.\n\n**Anmeldeschluss:**\nFreitag, **6. September**. Anmeldungen sind online unter www.mvhs.de oder persönlich im Kundenzentrum möglich. Ein kostenloser Online-Einstufungstest wird vorab empfohlen!",
        "textEN": "Munich Adult Education Centre – German as a Foreign Language\n\nCourse: German Communication & Conversation (Level A2/B1)\n\nYou have basic A2 skills and want to speak more fluently in everyday life? We practice speaking, phone calls, complaints, and topical discussions.\n\nDetails:\n• Course no.: DE-3401-H\n• Duration: Sept 16th – Dec 9th (12 sessions, no class during autumn break)\n• Day & Time: Mondays, 6:30 PM – 8:45 PM (incl. 15 min break)\n• Location: Gasteig Centre, Room 3.12\n• Group: Max 14 participants\n• Fee: €155.00 (25% reduction for students, retirees, jobseekers)\n• Textbook: Introduced on 1st evening. Don't buy in advance.\n• Deadline: Friday, Sept 6th.",
        "questions": [
            {
                "question": "An welchem Wochentag findet der Kurs statt?",
                "questionEN": "On which day of the week does the course take place?",
                "options": [
                    "Dienstags",
                    "Immer montags",
                    "Samstags",
                    "Mittwochs und freitags"
                ],
                "correct": 1,
                "explanation": "'Immer montags von 18:30 bis 20:45 Uhr'."
            },
            {
                "question": "Sollen die Kursteilnehmer das Lehrbuch vor dem ersten Abend kaufen?",
                "questionEN": "Should participants buy the textbook before the first evening?",
                "options": [
                    "Nein, es wird am ersten Abend vorgestellt",
                    "Ja, zwingend vor Kursbeginn",
                    "Das Buch ist kostenlos inbegriffen",
                    "Man braucht überhaupt kein Buch"
                ],
                "correct": 0,
                "explanation": "'Wird am ersten Kursabend... vorgestellt. Bitte kaufen Sie vorab noch keine Bücher.'"
            },
            {
                "question": "Bis wann muss man sich spätestens für den Kurs anmelden?",
                "questionEN": "By when at the latest must one register for the course?",
                "options": [
                    "Bis zum 16. September",
                    "Bis zum 9. Dezember",
                    "Bis Freitag, 6. September",
                    "Bis zum 1. August"
                ],
                "correct": 2,
                "explanation": "'Anmeldeschluss: Freitag, 6. September.'"
            }
        ]
    },
    {
        "id": "a2_read_37",
        "title": "Fahrradwerkstatt Velomarkt: Frühlings-Inspektion",
        "titleEN": "Bicycle Workshop Velomarkt: Spring Inspection",
        "emoji": "🚲",
        "type": "Werkstattangebot",
        "warmup": {
            "vocab": [
                {
                    "word": "die Inspektion",
                    "gender": "die",
                    "translation": "inspection / tune-up",
                    "example": "Eine Inspektion erhöht die Verkehrssicherheit.",
                    "exampleEN": "An inspection increases traffic safety."
                },
                {
                    "word": "die Bremsbeläge",
                    "gender": "die (Pl.)",
                    "translation": "brake pads",
                    "example": "Die Bremsbeläge sind abgenutzt und müssen getauscht werden.",
                    "exampleEN": "The brake pads are worn down and must be replaced."
                },
                {
                    "word": "das Kettenöl",
                    "gender": "das",
                    "translation": "chain lubricant / oil",
                    "example": "Die Fahrradkette wird gereinigt und geölt.",
                    "exampleEN": "The bicycle chain is cleaned and lubricated."
                },
                {
                    "word": "die Reparaturdauer",
                    "gender": "die",
                    "translation": "repair duration",
                    "example": "Die Reparaturdauer beträgt in der Regel 24 bis 48 Stunden.",
                    "exampleEN": "The repair duration is usually 24 to 48 hours."
                }
            ],
            "readingTip": "Unterscheiden Sie zwischen Basis-Check und Komplett-Inspektion.",
            "readingTipEN": "Distinguish between basic safety check and complete inspection package."
        },
        "text": "**Velomarkt Fahrradwerkstatt – Ihr Zweirad-Profi in Frankfurt**\n\nMachen Sie Ihr Fahrrad fit für die neue Saison!\n\n**Unser Frühlingsangebot (gültig bis 31. Mai):**\n\n**1. Sicherheits-Check (nur 29,00 €):**\n• Überprüfung aller Schraubverbindungen\n• Kontrolle von Bremsen und Schaltung\n• Reifendruckprüfung und Kettenschmierung\n• Lichttest nach StVZO (Vorder- und Rücklicht)\n\n**2. Meister-Komplettinspektion (59,00 € zzgl. Ersatzteile):**\n• Alle Leistungen des Sicherheits-Checks\n• Gründliche Zentrierung beider Laufräder\n• Einstellen von Schaltung, Bremszügen und Lagern\n• Reinigung des Antriebsstrangs und neues Spezial-Kettenöl\n• Austausch von Bremsbelägen oder Schläuchen (Materialkosten separat)\n\n**Ablauf:**\nBringen Sie Ihr Rad einfach ohne Voranmeldung **Montag bis Freitag zwischen 08:00 und 10:00 Uhr** vorbei. In 90 % der Fälle ist Ihr Fahrrad am nächsten Werktag ab 16:00 Uhr abholbereit!\n\n**Leihrad-Service:**\nFür die Dauer der Reparatur stellen wir Ihnen auf Wunsch ein Citybike für nur **5,00 € pro Tag** zur Verfügung.\n\nAdresse: Hanauer Landstraße 118 · Telefon: 069 / 40 12 33",
        "textEN": "Velomarkt Bicycle Workshop – Your Two-Wheeler Pro in Frankfurt\n\nGet your bike in shape for the new season!\n\nSpring Special (until May 31st):\n1. Safety Check (€29.00): check bolts, brakes, gear shift, tire pressure, lubrication, lights.\n2. Master Complete Inspection (€59.00 plus parts): includes safety check, wheel truing, drivetrain cleaning, new chain oil, pad replacements.\n\nDrop-off: Bring your bike Mon-Fri between 8:00 and 10:00 AM without appointment. Ready next business day from 4:00 PM!\nLoaner bike available for €5.00/day.",
        "questions": [
            {
                "question": "Wie viel kostet der einfache Sicherheits-Check?",
                "questionEN": "How much does the basic safety check cost?",
                "options": [
                    "59,00 €",
                    "29,00 €",
                    "5,00 €",
                    "Kostenlos"
                ],
                "correct": 1,
                "explanation": "'1. Sicherheits-Check (nur 29,00 €)'."
            },
            {
                "question": "Zu welcher Uhrzeit kann man sein Rad morgens ohne Termin abgeben?",
                "questionEN": "At what time in the morning can you drop off your bike without appointment?",
                "options": [
                    "Zwischen 16:00 und 18:00 Uhr",
                    "Nur samstags ab 10 Uhr",
                    "Zwischen 08:00 und 10:00 Uhr",
                    "Rund um die Uhr"
                ],
                "correct": 2,
                "explanation": "'Montag bis Freitag zwischen 08:00 und 10:00 Uhr'."
            },
            {
                "question": "Was kostet ein Leihfahrrad pro Tag während der Reparatur?",
                "questionEN": "What does a loaner bike cost per day during repairs?",
                "options": [
                    "29,00 €",
                    "15,00 €",
                    "5,00 € pro Tag",
                    "Es ist nicht verfügbar"
                ],
                "correct": 2,
                "explanation": "'Citybike für nur 5,00 € pro Tag'."
            }
        ]
    },
    {
        "id": "a2_read_38",
        "title": "Stadtmuseum Dresden: Ausstellung 'Altes Handwerk'",
        "titleEN": "Dresden City Museum: Exhibition 'Historic Craftsmanship'",
        "emoji": "🏺",
        "type": "Museumsinformation",
        "warmup": {
            "vocab": [
                {
                    "word": "der Eintrittspreis",
                    "gender": "der",
                    "translation": "admission fee / ticket price",
                    "example": "Der Eintrittspreis für Erwachsene beträgt 8 Euro.",
                    "exampleEN": "The admission fee for adults is 8 euros."
                },
                {
                    "word": "die Führung",
                    "gender": "die",
                    "translation": "guided tour",
                    "example": "Um 14 Uhr beginnt eine einstündige Führung.",
                    "exampleEN": "At 2 PM a one-hour guided tour begins."
                },
                {
                    "word": "die Ermäßigung",
                    "gender": "die",
                    "translation": "discount / concession",
                    "example": "Kinder unter 12 Jahren haben freien Eintritt.",
                    "exampleEN": "Children under 12 have free admission."
                },
                {
                    "word": "das Schließfach",
                    "gender": "das",
                    "translation": "locker",
                    "example": "Große Rucksäcke müssen im Schließfach deponiert werden.",
                    "exampleEN": "Large backpacks must be deposited in a locker."
                }
            ],
            "readingTip": "Achten Sie auf Ruhetage (wann das Museum geschlossen ist) und Schließzeiten.",
            "readingTipEN": "Note closing days (when museum is closed) and opening hours."
        },
        "text": "**Stadtmuseum Dresden – Sonderausstellung 'Handwerk im Wandel der Zeit'**\n\nErleben Sie vom **5. Oktober bis 28. Februar** eine faszinierende Zeitreise durch die jahrhundertealte Tradition sächsischer Handwerkskunst: vom Buchdruck über die Glasbläserei bis zur historischen Uhrmacherei.\n\n**Öffnungszeiten:**\n• Dienstag bis Sonntag: **10:00 – 18:00 Uhr**\n• Freitag (langer Museumsabend): **10:00 – 20:00 Uhr**\n• **Montags geschlossen** (außer an gesetzlichen Feiertagen)\n\n**Eintrittspreise:**\n• Erwachsene: **9,00 €**\n• Ermäßigt (Schüler, Studenten, Senioren ab 65 Jahren): **6,00 €**\n• Familienkarte (2 Erwachsene + bis zu 3 Kinder): **20,00 €**\n• **Kinder unter 6 Jahren:** Eintritt frei!\n• Jeden ersten Mittwoch im Monat: **Freier Eintritt für alle Besucher!**\n\n**Öffentliche Führungen:**\nSamstags und sonntags jeweils um **11:30 Uhr und 14:30 Uhr** (Dauer: ca. 60 Minuten, Teilnahmegebühr: 3,00 € zzgl. Eintritt).\n\n**Museumsregeln:**\nGroße Taschen, Rucksäcke und Regenschirme dürfen nicht in die Ausstellungsräume mitgenommen werden. Bitte nutzen Sie unsere kostenlosen Schließfächer im Foyer (1-Euro-Münze als Pfand erforderlich). Fotografieren ohne Blitz ist für private Zwecke gestattet.",
        "textEN": "Dresden City Museum – Special Exhibition 'Craftsmanship Through Time'\n\nExperience Saxon craftsmanship from Oct 5th to Feb 28th.\n\nOpening hours:\n• Tue to Sun: 10:00 AM – 6:00 PM\n• Fri: 10:00 AM – 8:00 PM\n• Closed on Mondays\n\nTickets:\n• Adults: €9.00\n• Concessions: €6.00\n• Family: €20.00\n• Under 6: Free!\n• First Wednesday of month: Free admission for all!\n\nGuided tours on weekends at 11:30 AM and 2:30 PM (€3.00).\nLockers available in foyer with €1 coin deposit.",
        "questions": [
            {
                "question": "An welchem Tag hat das Museum regulär geschlossen?",
                "questionEN": "On which day is the museum regularly closed?",
                "options": [
                    "Sonntags",
                    "Montags",
                    "Freitags",
                    "Mittwochs"
                ],
                "correct": 1,
                "explanation": "'Montags geschlossen (außer an gesetzlichen Feiertagen)'."
            },
            {
                "question": "Wann haben alle Besucher freien Eintritt in das Museum?",
                "questionEN": "When do all visitors have free admission to the museum?",
                "options": [
                    "Jeden Freitagabend",
                    "Jeden ersten Mittwoch im Monat",
                    "An allen Sonntagen",
                    "Nur an Weihnachten"
                ],
                "correct": 1,
                "explanation": "'Jeden ersten Mittwoch im Monat: Freier Eintritt für alle Besucher!'"
            },
            {
                "question": "Was benötigt man für die Schließfächer im Foyer?",
                "questionEN": "What do you need for the lockers in the foyer?",
                "options": [
                    "Ein Vorhängeschloss",
                    "Einen Personalausweis",
                    "Eine 1-Euro-Münze als Pfand",
                    "Ein Papierticket"
                ],
                "correct": 2,
                "explanation": "'(1-Euro-Münze als Pfand erforderlich)'."
            }
        ]
    },
    {
        "id": "a2_read_39",
        "title": "Nachbarschaftsfest im Lindenviertel: Einladung & Mitbringbuffet",
        "titleEN": "Neighbourhood Party in Lindenviertel: Invitation & Potluck",
        "emoji": "🎈",
        "type": "Einladung / Nachbarschaftsaushang",
        "warmup": {
            "vocab": [
                {
                    "word": "das Mitbringbuffet",
                    "gender": "das",
                    "translation": "potluck buffet",
                    "example": "Jeder bringt etwas Leckeres für das Buffet mit.",
                    "exampleEN": "Everyone brings something delicious for the buffet."
                },
                {
                    "word": "die Schlechtwetter-Alternative",
                    "gender": "die",
                    "translation": "bad weather backup plan",
                    "example": "Bei Regen feiern wir im Gemeindehaus.",
                    "exampleEN": "In case of rain we celebrate in the community hall."
                },
                {
                    "word": "die Hüpfburg",
                    "gender": "die",
                    "translation": "bouncy castle",
                    "example": "Für die Kleinen gibt es eine große Hüpfburg.",
                    "exampleEN": "For the little ones there is a big bouncy castle."
                },
                {
                    "word": "der Tombola-Erlös",
                    "gender": "der",
                    "translation": "raffle proceeds",
                    "example": "Der Erlös wird an das Tierheim gespendet.",
                    "exampleEN": "The proceeds are donated to the animal shelter."
                }
            ],
            "readingTip": "Achten Sie auf Uhrzeit, Treffpunkt und was die Nachbarn mitbringen sollen.",
            "readingTipEN": "Note time, meeting place, and what neighbours should contribute."
        },
        "text": "**Herzliche Einladung zum 12. Lindenviertel-Sommerfest!**\n\nLiebe Nachbarinnen und Nachbarn,\n\nes ist wieder so weit! Wir möchten den Sommer gemeinsam mit Ihnen feiern, neue Bewohner im Viertel kennenlernen und einen fröhlichen Tag verbringen.\n\n**Wann:** Samstag, **17. August, ab 14:00 Uhr** (Open End bis ca. 22:00 Uhr)\n**Wo:** Auf dem Spielplatz und der Wiese am Lindenplatz (verkehrsberuhigte Zone)\n\n**Programm für Groß und Klein:**\n• 14:30 Uhr: Eröffnung mit Kaffee und Kuchen\n• 15:30 Uhr: Kinderschminken, Dosenwerfen und Hüpfburg\n• 17:00 Uhr: Live-Musik von unserer Nachbarschaftsband 'The Lindens'\n• 18:30 Uhr: Großes gemeinsames Grillen und Eröffnung des Buffets\n• 20:00 Uhr: Tombola mit tollen Preisen von lokalen Geschäften (Lose: 1,50 €)\n\n**Unser Buffet-Prinzip:**\nDas Organisationsteam stellt Bierzeltgarnituren, Servietten, Holzkohlegrills und gekühlte Getränke (Wasser, Saft, Bier und Wein zu fairen Preisen). Wir bitten jede Familie, **einen Salat, Fingerfood oder einen Kuchen** für das gemeinsame Buffet mitzubringen.\n\n**Schlechtwetter-Hinweis:**\nSollte es wider Erwarten stark regnen, verlegen wir das Fest in den Gemeindesaal der St.-Markus-Kirche (Lindenstraße 8).\n\nWir freuen uns auf einen wunderschönen Tag mit Ihnen!\nIhr Organisationskomitee Lindenviertel",
        "textEN": "Invitation to the 12th Lindenviertel Summer Festival!\n\nDear Neighbours,\nWe want to celebrate summer together, welcome new residents, and enjoy a cheerful day.\n\nWhen: Saturday, August 17th from 2:00 PM\nWhere: Playground and lawn at Lindenplatz\n\nProgramme:\n• 2:30 PM: Coffee and cake\n• 3:30 PM: Face painting, bouncy castle\n• 5:00 PM: Live music by 'The Lindens'\n• 6:30 PM: Barbecue and buffet\n• 8:00 PM: Raffle (€1.50 tickets)\n\nBuffet principle: We provide tables, grills, and drinks. Please bring a salad, finger food, or cake.\nBad weather backup: St. Markus church hall.",
        "questions": [
            {
                "question": "Um wie viel Uhr beginnt das Sommerfest offiziell?",
                "questionEN": "At what time does the summer festival officially start?",
                "options": [
                    "Um 18:30 Uhr",
                    "Ab 14:00 Uhr",
                    "Erst um 20:00 Uhr",
                    "Um 11:00 Uhr"
                ],
                "correct": 1,
                "explanation": "'Samstag, 17. August, ab 14:00 Uhr'."
            },
            {
                "question": "Was sollen die Nachbarn für das gemeinsame Buffet beisteuern?",
                "questionEN": "What should neighbours contribute to the shared buffet?",
                "options": [
                    "Einen eigenen Holzkohlegrill",
                    "Einen Salat, Fingerfood oder Kuchen",
                    "Nur alkoholische Getränke",
                    "Bierzeltgarnituren"
                ],
                "correct": 1,
                "explanation": "'einen Salat, Fingerfood oder einen Kuchen für das gemeinsame Buffet mitzubringen'."
            },
            {
                "question": "Wohin wird das Fest verlegt, falls es stark regnet?",
                "questionEN": "Where will the party move if it rains heavily?",
                "options": [
                    "In ein Restaurant",
                    "In den Gemeindesaal der St.-Markus-Kirche",
                    "Das Fest fällt ersatzlos aus",
                    "In die Grundschulturnhalle"
                ],
                "correct": 1,
                "explanation": "'in den Gemeindesaal der St.-Markus-Kirche (Lindenstraße 8)'."
            }
        ]
    },
    {
        "id": "a2_read_40",
        "title": "Deutsche Bahn: Fahrplanänderung & Schienenersatzverkehr (SEV)",
        "titleEN": "Deutsche Bahn: Timetable Change & Rail Replacement Bus (SEV)",
        "emoji": "🚆",
        "type": "Verkehrsmitteilung",
        "warmup": {
            "vocab": [
                {
                    "word": "der Schienenersatzverkehr (SEV)",
                    "gender": "der",
                    "translation": "rail replacement bus service",
                    "example": "Zwischen Ulm und Augsburg verkehren Ersatzbusse.",
                    "exampleEN": "Replacement buses run between Ulm and Augsburg."
                },
                {
                    "word": "die Streckensperrung",
                    "gender": "die",
                    "translation": "track closure",
                    "example": "Wegen Bauarbeiten gilt eine Vollsperrung der Strecke.",
                    "exampleEN": "Due to construction works, a complete track closure applies."
                },
                {
                    "word": "die Fahrradmitnahme",
                    "gender": "die",
                    "translation": "taking bicycles along",
                    "example": "Die Fahrradmitnahme ist in den Bussen leider nicht möglich.",
                    "exampleEN": "Bicycle carriage is unfortunately not possible on buses."
                },
                {
                    "word": "die Anschlussverbindung",
                    "gender": "die",
                    "translation": "connecting train / connection",
                    "example": "Bitte planen Sie mehr Zeit für Anschlüsse ein.",
                    "exampleEN": "Please allow more time for connecting services."
                }
            ],
            "readingTip": "Achten Sie auf betroffene Haltestellen, Busabfahrtsorte und Fahrradregelungen.",
            "readingTipEN": "Note affected stations, bus departure points, and bicycle rules."
        },
        "text": "**Fahrgastinformation: Bauarbeiten auf der Bahnstrecke Nürnberg – Würzburg**\n\nSehr geehrte Fahrgäste,\n\naufgrund dringender Gleiserneuerungs- und Brückenarbeiten ist der Streckenabschnitt zwischen **Neustadt (Aisch)** und **Kitzingen** von **Montag, 4. November (04:00 Uhr) bis Sonntag, 10. November (23:59 Uhr)** für den gesamten Zugverkehr gesperrt.\n\n**Maßnahmen & Ersatzverkehr:**\n• Alle Regionalexpress-Züge der Linie **RE 10** fallen zwischen Neustadt und Kitzingen aus.\n• Ein durchgehender **Schienenersatzverkehr (SEV) mit barrierefreien Bussen** ist für Sie eingerichtet.\n• Die Busse halten jeweils direkt vor den Bahnhofsgebäuden an den ausgeschilderten SEV-Haltestellen.\n\n**Wichtige Reisehinweise:**\n1. **Verlängerte Reisezeit:** Durch den Busverkehr verlängert sich Ihre Fahrzeit um ca. **25 bis 35 Minuten**. Wir empfehlen, frühere Verbindungen zu wählen.\n2. **Fahrradmitnahme:** In den Ersatzbussen können aus Platzgründen **keine Fahrräder** befördert werden. Kinderwagen und Rollstühle haben Vorrang.\n3. **Fahrkarten:** Alle regulären Bahntickets, Verbundtickets sowie das Deutschland-Ticket sind in den SEV-Bussen ohne Aufpreis gültig. Bitte kaufen Sie Ihre Fahrkarte vor Fahrtantritt am Automaten oder online.\n\nAktuelle Abfahrtszeiten finden Sie in der DB Navigator App oder unter www.bahn.de/bauarbeiten.\n\nVielen Dank für Ihr Verständnis!\nIhre DB Regio Bayern",
        "textEN": "Passenger Info: Construction on Nuremberg – Würzburg Line\n\nTrack closure between Neustadt (Aisch) and Kitzingen from Nov 4th (4 AM) to Nov 10th (midnight).\n\nMeasures:\n• RE 10 trains cancelled between Neustadt and Kitzingen.\n• Rail replacement buses (SEV) operate.\n• Longer travel time: +25 to 35 minutes.\n• No bicycles allowed on replacement buses.\n• Regular tickets and Deutschlandticket are valid.",
        "questions": [
            {
                "question": "Wie viel länger dauert die Reise durch den Schienenersatzverkehr ungefähr?",
                "questionEN": "How much longer does the trip take approximately due to replacement buses?",
                "options": [
                    "Nur 5 Minuten",
                    "Ca. 25 bis 35 Minuten",
                    "Über zwei Stunden",
                    "Überhaupt nicht länger"
                ],
                "correct": 1,
                "explanation": "'verlängert sich Ihre Fahrzeit um ca. 25 bis 35 Minuten'."
            },
            {
                "question": "Dürfen Fahrräder in den Ersatzbussen mitgenommen werden?",
                "questionEN": "Are bicycles allowed to be taken onto the replacement buses?",
                "options": [
                    "Ja, gegen 10 Euro Aufpreis",
                    "Nur an Werktagen",
                    "Nein, aus Platzgründen nicht",
                    "Ja, bis zu 5 Räder pro Bus"
                ],
                "correct": 2,
                "explanation": "'In den Ersatzbussen können aus Platzgründen keine Fahrräder befördert werden.'"
            },
            {
                "question": "Welche Fahrkarten sind in den Ersatzbussen gültig?",
                "questionEN": "Which tickets are valid on the replacement buses?",
                "options": [
                    "Alle regulären Tickets und das Deutschland-Ticket",
                    "Nur spezielle Busfahrkarten",
                    "Nur Erste-Klasse-Tickets",
                    "Überhaupt keine Bahntickets"
                ],
                "correct": 0,
                "explanation": "'Alle regulären Bahntickets, Verbundtickets sowie das Deutschland-Ticket sind... gültig'."
            }
        ]
    },
    {
        "id": "a2_read_41",
        "title": "Stadtbibliothek Bremen: Medienrückgabe & Onleihe",
        "titleEN": "City Library Bremen: Media Return & Digital Library",
        "emoji": "📖",
        "type": "Benutzerinformation",
        "warmup": {
            "vocab": [
                {
                    "word": "die Rückgabebox",
                    "gender": "die",
                    "translation": "return drop box",
                    "example": "Bücher können nachts in die Rückgabebox geworfen werden.",
                    "exampleEN": "Books can be dropped into the return box at night."
                },
                {
                    "word": "das Benutzerkonto",
                    "gender": "das",
                    "translation": "user account",
                    "example": "Loggen Sie sich in Ihr Benutzerkonto ein.",
                    "exampleEN": "Log into your user account."
                },
                {
                    "word": "das E-Book",
                    "gender": "das",
                    "translation": "electronic book",
                    "example": "Mit der Onleihe können Sie E-Books kostenlos downloaden.",
                    "exampleEN": "With Onleihe you can download e-books for free."
                },
                {
                    "word": "die Mahngebühr",
                    "gender": "die",
                    "translation": "late return fee",
                    "example": "Vermeiden Sie Mahngebühren durch rechtzeitiges Verlängern.",
                    "exampleEN": "Avoid late fees by renewing on time."
                }
            ],
            "readingTip": "Achten Sie auf Rückgabefristen, digitale Zugänge und Gebührenbefreiungen.",
            "readingTipEN": "Note return deadlines, digital access, and fee exemptions."
        },
        "text": "**Stadtbibliothek Bremen – Ihr digitaler und analoger Wissensort**\n\nLiebe Bibliotheksnutzerinnen und Bibliotheksnutzer,\n\num Ihnen den Besuch und die Medienrückgabe noch einfacher zu machen, haben wir unseren Service modernisiert:\n\n**1. Automatische Rückgabe rund um die Uhr:**\nAb sofort steht Ihnen an der Außenfassade der Zentralbibliothek (Am Wall 201) ein **24-Stunden-Rückgabeautomat** zur Verfügung. Hier können Sie alle geliehenen Bücher, CDs und Gesellschaftsspiele auch nachts und an Sonn- und Feiertagen kontaktlos zurückgeben. Die Medien werden sofort automatisch von Ihrem Benutzerkonto abgebucht.\n\n**2. Digitale Bibliothek ('Onleihe Bremen'):**\nMit Ihrem gültigen Bibliotheksausweis haben Sie kostenlosen Zugriff auf über 50.000 digitale Medien: E-Books, E-Audios, Zeitungen und Sprachlernkurse. Sie können ausgeliehene E-Books bequem auf Ihrem Smartphone, Tablet oder E-Reader lesen. Nach Ablauf der Leihfrist (maximal 21 Tage) wird die Datei automatisch deaktiviert – es fallen **garantiert keine Verspätungsgebühren** an!\n\n**3. Leihfristen und Verlängerung:**\n• Bücher, Noten und Karten: **4 Wochen**\n• Hörbücher, Musik-CDs und Zeitschriften: **2 Wochen**\n• Verlängerung: Bis zu dreimal online im Benutzerkonto möglich, sofern keine Vormerkung einer anderen Person vorliegt.\n\nKundenservice: info@stabi-bremen.de · Telefon: 0421 / 361 40 40",
        "textEN": "City Library Bremen – Knowledge Center\n\n1. 24/7 Automated Return: Drop box at central library (Am Wall 201). Return books, CDs, board games anytime.\n2. Digital Library ('Onleihe'): 50,000+ e-books, audiobooks, newspapers. Max 21 days loan. No late fees guaranteed!\n3. Loan periods: Books 4 weeks; CDs 2 weeks. Renew up to 3 times online unless reserved by someone else.",
        "questions": [
            {
                "question": "Wann kann man Medien an der Zentralbibliothek über den Automaten zurückgeben?",
                "questionEN": "When can you return media at the central library via the machine?",
                "options": [
                    "Nur während der Öffnungszeiten",
                    "Rund um die Uhr an 24 Stunden täglich",
                    "Nur samstagvormittags",
                    "Nur werktags von 8 bis 12 Uhr"
                ],
                "correct": 1,
                "explanation": "'Ab sofort steht Ihnen... ein 24-Stunden-Rückgabeautomat zur Verfügung'."
            },
            {
                "question": "Können bei der digitalen 'Onleihe' Verspätungsgebühren entstehen?",
                "questionEN": "Can late fees arise with the digital 'Onleihe' service?",
                "options": [
                    "Ja, 1 Euro pro Tag",
                    "Nein, Dateien werden automatisch deaktiviert",
                    "Ja, ab dem 22. Tag",
                    "Nur bei E-Books"
                ],
                "correct": 1,
                "explanation": "'es fallen garantiert keine Verspätungsgebühren an!'"
            },
            {
                "question": "Wie oft darf man ausgeliehene Bücher online verlängern?",
                "questionEN": "How often may you renew borrowed books online?",
                "options": [
                    "Nur einmal",
                    "Unbegrenzt oft",
                    "Bis zu dreimal (sofern nicht vorbestellt)",
                    "Gar nicht"
                ],
                "correct": 2,
                "explanation": "'Verlängerung: Bis zu dreimal online im Benutzerkonto möglich'."
            }
        ]
    },
    {
        "id": "a2_read_42",
        "title": "Stellenanzeige: Servicekraft im Café 'Kranzler'",
        "titleEN": "Job Advert: Service Staff at Café 'Kranzler'",
        "emoji": "☕",
        "type": "Stellenanzeige",
        "warmup": {
            "vocab": [
                {
                    "word": "die Servicekraft",
                    "gender": "die",
                    "translation": "waiter / server / service staff",
                    "example": "Wir suchen eine freundliche Servicekraft für unser Team.",
                    "exampleEN": "We are looking for friendly service staff for our team."
                },
                {
                    "word": "die Teilzeit",
                    "gender": "die",
                    "translation": "part-time employment",
                    "example": "Die Stelle ist in Teilzeit mit 20 Wochenstunden zu besetzen.",
                    "exampleEN": "The position is part-time with 20 weekly hours."
                },
                {
                    "word": "das Trinkgeld",
                    "gender": "das",
                    "translation": "tips / gratuity",
                    "example": "Das Trinkgeld wird fair im Team aufgeteilt.",
                    "exampleEN": "Tips are divided fairly among the team."
                },
                {
                    "word": "die Vorkenntnisse (Pl.)",
                    "gender": "die",
                    "translation": "prior experience / background",
                    "example": "Gastronomische Vorkenntnisse sind von Vorteil.",
                    "exampleEN": "Catering background is advantageous."
                }
            ],
            "readingTip": "Achten Sie auf Arbeitszeiten, Bezahlung, Anforderungen und Bewerbungsform.",
            "readingTipEN": "Note working hours, remuneration, requirements, and application method."
        },
        "text": "**Café & Bistro Kranzler – Wir suchen Verstärkung!**\n\nFür unser traditionsreiches Café im Herzen von Leipzig suchen wir ab **1. Oktober oder früher** eine motivierte und freundliche **Servicekraft (m/w/d) in Teilzeit (20 bis 25 Wochenstunden)** oder auf **Minijob-Basis (538 €)**.\n\n**Ihre Aufgaben:**\n• Herzliche Betreuung unserer internationalen Gäste\n• Servieren von Kaffeespezialitäten, Kuchen und kleinen Mittagsgerichten\n• Zubereitung von Heiß- und Kaltgetränken an der Siebträgermaschine\n• Kassieren mit unserem modernen Tablet-Kassensystem\n• Vorbereitung der Tische und Einhaltung der Hygienevorschriften\n\n**Das bringen Sie mit:**\n• Gute Deutschkenntnisse (mindestens solides A2-Niveau) zur Gästekommunikation\n• Freude am Umgang mit Menschen und ein freundliches Auftreten\n• Teamgeist, Zuverlässigkeit und Belastbarkeit zu Stoßzeiten\n• Erste Erfahrung in der Gastronomie ist wünschenswert, aber auch Quereinsteiger sind herzlich willkommen!\n\n**Wir bieten Ihnen:**\n• Einen Stundenlohn von **14,50 € brutto zzgl. fairem Trinkgeld** (wird täglich bar ausgezahlt)\n• Flexible Schichtplanung (Frühschicht: 08:30 – 14:30 Uhr / Spätschicht: 14:00 – 19:30 Uhr)\n• Kostenloser Personal-Kaffee und 50 % Rabatt auf Speisen\n• Ein kollegiales, familiäres Team\n\n**Interesse geweckt?**\nSenden Sie Ihren Lebenslauf kurz per E-Mail an: bewerbung@cafe-kranzler-leipzig.de oder sprechen Sie direkt persönlich mit unserer Schichtleiterin Frau Berger!",
        "textEN": "Café & Bistro Kranzler – We are Hiring!\n\nLooking for service staff (m/f/d) part-time (20-25 hrs/wk) or minijob from Oct 1st.\n\nTasks:\n• Serving coffee, cake, lunch dishes\n• Operating coffee machine and POS\n• Table prep and hygiene\n\nRequirements:\n• Good German (at least solid A2 level)\n• Friendly appearance and team spirit\n• Prior experience helpful, career changers welcome!\n\nBenefits:\n• €14.50/hour gross plus tips\n• Flexible shifts\n• Free coffee, 50% food discount\n\nApply via email: bewerbung@cafe-kranzler-leipzig.de",
        "questions": [
            {
                "question": "Wie hoch ist der angebotene Brutto-Stundenlohn?",
                "questionEN": "How much is the offered gross hourly wage?",
                "options": [
                    "12,41 €",
                    "14,50 € brutto plus Trinkgeld",
                    "20,00 €",
                    "Nur Trinkgeld auf Provisionsbasis"
                ],
                "correct": 1,
                "explanation": "'Einen Stundenlohn von 14,50 € brutto zzgl. fairem Trinkgeld'."
            },
            {
                "question": "Welches Sprachniveau in Deutsch wird mindestens erwartet?",
                "questionEN": "Which German language level is expected at minimum?",
                "options": [
                    "Mindestens solides A2-Niveau",
                    "Muttersprachliches C2-Niveau",
                    "Überhaupt keine Deutschkenntnisse",
                    "Nur Englischkenntnisse"
                ],
                "correct": 0,
                "explanation": "'Gute Deutschkenntnisse (mindestens solides A2-Niveau)'."
            },
            {
                "question": "Wie wird das Trinkgeld an das Personal ausgezahlt?",
                "questionEN": "How are tips paid out to staff?",
                "options": [
                    "Am Monatsende per Überweisung",
                    "Täglich in bar",
                    "Gar nicht, das Café behält es",
                    "Als Gutschein"
                ],
                "correct": 1,
                "explanation": "'(wird täglich bar ausgezahlt)'."
            }
        ]
    },
    {
        "id": "a2_read_43",
        "title": "Tierheim Berlin: Tag der offenen Tür & Adoption",
        "titleEN": "Animal Shelter Berlin: Open Day & Adoption Info",
        "emoji": "🐾",
        "type": "Veranstaltungsflyer",
        "warmup": {
            "vocab": [
                {
                    "word": "die Vermittlung",
                    "gender": "die",
                    "translation": "adoption placement / mediation",
                    "example": "Die Vermittlung von Hunden erfordert ein persönliches Kennenlernen.",
                    "exampleEN": "Dog adoption requires getting to know each other."
                },
                {
                    "word": "die Schutzgebühr",
                    "gender": "die",
                    "translation": "adoption / rescue fee",
                    "example": "Für Katzen wird eine Schutzgebühr von 120 Euro erhoben.",
                    "exampleEN": "For cats an adoption fee of 120 euros is charged."
                },
                {
                    "word": "geimpft und gechippt",
                    "gender": "Phrase",
                    "translation": "vaccinated and microchipped",
                    "example": "Alle Tiere sind tierärztlich untersucht, geimpft und gechippt.",
                    "exampleEN": "All animals are examined, vaccinated, and microchipped."
                },
                {
                    "word": "die Vorkontrolle",
                    "gender": "die",
                    "translation": "pre-adoption home check",
                    "example": "Vor der Übergabe findet eine kurze Vorkontrolle statt.",
                    "exampleEN": "A short home inspection takes place before handover."
                }
            ],
            "readingTip": "Achten Sie auf Besuchszeiten, Vermittlungsablauf und Schutzgebühren.",
            "readingTipEN": "Note visiting hours, adoption procedure, and rescue fee."
        },
        "text": "**Tierheim Berlin – Tag der offenen Tür & großes Sommerfest!**\n\nBesuchen Sie uns am Sonntag, dem **8. September von 11:00 bis 17:00 Uhr** auf Europas größtem Tierschutzgelände in Berlin-Falkenberg (Hausvaterweg 39)!\n\n**Was erwartet Sie an diesem Tag?**\n• Führungen durch das Hunde-, Katzen- und Kleintierhaus jeweils um 12:00, 14:00 und 15:30 Uhr\n• Vorführungen unserer Hundetrainer auf dem großen Übungsplatz\n• Informationsstände zu artgerechter Tierhaltung, Katzenpflege und Tierschutz\n• Veganes Speisen- und Kuchenbuffet sowie kalte Erfrischungen\n• Großer Flohmarkt für Tierzubehör: Körbchen, Kratzbäume, Leinen und Spielzeug zu günstigen Preisen\n\n**Wichtiger Hinweis zur Tieradoption:**\nAm Tag der offenen Tür findet **keine direkte Vermittlung von Tieren** statt. Wir möchten Spontankäufe vermeiden. Wenn Sie sich für einen Hund oder eine Katze interessieren, können Sie sich vor Ort für ein persönliches Beratungsgespräch in der Folgewoche vormerken lassen.\n\n**Wie läuft eine reguläre Vermittlung ab?**\n1. Erstgespräch mit den Pflegern und Ausfüllen eines Interessentenbogens\n2. Mehrfaches Gassigehen (bei Hunden) zum gegenseitigen Kennenlernen\n3. Kurze Vorkontrolle Ihres Zuhauses\n4. Abschluss des Schutzvertrags gegen eine Schutzgebühr (Hunde: 250 € / Katzen: 130 €, inklusive aller Impfungen, Entwurmung, EU-Heimtierpass und Registrierung)\n\nDer Eintritt zum Sommerfest ist frei! Wir bitten darum, eigene Hunde an der kurzen Leine zu führen.",
        "textEN": "Animal Shelter Berlin – Open Day & Summer Party!\n\nVisit us on Sunday, September 8th from 11:00 AM to 5:00 PM.\n\nHighlights:\n• Guided tours through dog and cat houses\n• Dog trainer demonstrations\n• Info booths, vegan buffet, flea market\n\nImportant regarding adoption:\nNo direct adoptions on Open Day to prevent impulse purchases. Interested visitors can book a consultation for the following week.\n\nRegular procedure:\nInterview, walking sessions, home check, adoption contract with fee (€250 dogs / €130 cats, fully vaccinated and chipped).\nFree entry!",
        "questions": [
            {
                "question": "Kann man am Tag der offenen Tür ein Haustier direkt mit nach Hause nehmen?",
                "questionEN": "Can you take a pet directly home on the Open Day?",
                "options": [
                    "Ja, gegen Barzahlung",
                    "Nein, es findet keine Direktvermittlung statt",
                    "Nur Katzen und Kaninchen",
                    "Ja, aber nur für Berliner Bürger"
                ],
                "correct": 1,
                "explanation": "'Am Tag der offenen Tür findet keine direkte Vermittlung von Tieren statt.'"
            },
            {
                "question": "Was beinhaltet die Schutzgebühr bei der regulären Adoption?",
                "questionEN": "What does the adoption fee include during regular adoption?",
                "options": [
                    "Nur das Tier ohne Papiere",
                    "Futter für das ganze erste Jahr",
                    "Impfungen, Entwurmung, EU-Pass und Chip-Registrierung",
                    "Kostenlosen Tierarztbesuch ein Leben lang"
                ],
                "correct": 2,
                "explanation": "'inklusive aller Impfungen, Entwurmung, EU-Heimtierpass und Registrierung'."
            },
            {
                "question": "Wie viel Eintritt kostet der Besuch des Sommerfests?",
                "questionEN": "How much is admission to visit the summer party?",
                "options": [
                    "5,00 Euro pro Person",
                    "Der Eintritt zum Sommerfest ist frei",
                    "10,00 Euro Familienticket",
                    "Nur gegen Tierfutterspende"
                ],
                "correct": 1,
                "explanation": "'Der Eintritt zum Sommerfest ist frei!'"
            }
        ]
    },
    {
        "id": "a2_read_44",
        "title": "Bedienungsanleitung: Saug- und Wischroboter 'CleanBot Pro'",
        "titleEN": "User Manual: Vacuum & Mopping Robot 'CleanBot Pro'",
        "emoji": "🤖",
        "type": "Gebrauchsanleitung",
        "warmup": {
            "vocab": [
                {
                    "word": "die Ladestation",
                    "gender": "die",
                    "translation": "charging dock / base station",
                    "example": "Der Roboter fährt automatisch zur Ladestation zurück.",
                    "exampleEN": "The robot returns automatically to the charging station."
                },
                {
                    "word": "der Wassertank",
                    "gender": "der",
                    "translation": "water tank",
                    "example": "Füllen Sie den Wassertank nur mit kaltem Leitungswasser.",
                    "exampleEN": "Fill the water tank only with cold tap water."
                },
                {
                    "word": "die Kontrollleuchte",
                    "gender": "die",
                    "translation": "indicator light",
                    "example": "Die blaue Kontrollleuchte zeigt volle Ladung an.",
                    "exampleEN": "The blue indicator light shows full charge."
                },
                {
                    "word": "der Filter",
                    "gender": "der",
                    "translation": "filter",
                    "example": "Reinigen Sie den Staubfilter einmal wöchentlich.",
                    "exampleEN": "Clean the dust filter once a week."
                }
            ],
            "readingTip": "Achten Sie auf Warnhinweise, Reinigungsanweisungen und Leuchtsignale.",
            "readingTipEN": "Note safety warnings, cleaning instructions, and LED signals."
        },
        "text": "**Kurzanleitung & Sicherheitshinweise: Saug- und Wischroboter 'CleanBot Pro 3000'**\n\nHerzlichen Glückwunsch zu Ihrem neuen Haushaltshelfer! Bitte lesen Sie vor der ersten Inbetriebnahme folgende Schritte:\n\n**1. Aufstellen der Ladestation:**\nPlatzieren Sie die Ladestation an einer geraden Wand auf festem Boden (z. B. Fliesen oder Parkett, nicht auf dicken Teppichen). Halten Sie links und rechts mindestens **0,5 Meter** und nach vorne mindestens **1,5 Meter Freiraum**, damit der Roboter die Infrarotsignale zuverlässig findet.\n\n**2. Erstes Laden:**\nStellen Sie das Gerät manuell auf die Ladekontakte. Die LED-Leuchte blinkt während des Ladevorgangs orange. Wenn der Akku vollständig geladen ist, leuchtet die Anzeige **dauerhaft grün**. Die Erstladung dauert ca. **4 Stunden**.\n\n**3. Wischfunktion nutzen:**\n• Nehmen Sie den 2-in-1-Wassertank heraus und füllen Sie maximal 300 ml klares Wasser ein.\n• **WICHTIGER SICHERHEITSHINWEIS:** Verwenden Sie **keine schäumenden Reinigungsmittel**, Essigreiniger oder heißes Wasser im Tank, da dies die internen Düsen verstopfen kann!\n• Kletten Sie das beiliegende Mikrofasertuch feucht unter die Wischplatte.\n\n**4. Wartung & Pflege:**\n• Entleeren Sie den Staubbehälter nach jedem Reinigungsvorgang.\n• Waschen Sie das Wischpad nach jedem Einsatz mit lauwarmem Wasser aus.\n• Der HEPA-Feinstaubfilter darf **nur trocken ausgeklopft** werden. Niemals nass waschen!",
        "textEN": "Quick Guide: Vacuum & Mopping Robot 'CleanBot Pro 3000'\n\n1. Dock placement: Flat wall on hard floor. Keep 0.5m space on sides and 1.5m in front.\n2. First charging: Blinks orange during charge, turns solid green when full. Takes approx. 4 hours.\n3. Mopping mode: Fill max 300ml clean water. WARNING: No foaming detergent or hot water to avoid clogging nozzles!\n4. Maintenance: Empty dust bin after each run. Wash microfiber pad with warm water. Dust filter must only be tapped dry, never washed wet!",
        "questions": [
            {
                "question": "Was signalisiert eine dauerhaft grüne LED-Anzeige am Roboter?",
                "questionEN": "What does a solid green LED indicator signal on the robot?",
                "options": [
                    "Der Akku ist leer",
                    "Der Staubbehälter ist voll",
                    "Der Akku ist vollständig geladen",
                    "Ein Systemfehler liegt vor"
                ],
                "correct": 2,
                "explanation": "'Wenn der Akku vollständig geladen ist, leuchtet die Anzeige dauerhaft grün.'"
            },
            {
                "question": "Welche Flüssigkeiten dürfen NICHT in den Wassertank gefüllt werden?",
                "questionEN": "Which liquids must NOT be filled into the water tank?",
                "options": [
                    "Klares kaltes Leitungswasser",
                    "Schäumende Reinigungsmittel und Essigreiniger",
                    "Mineralwasser ohne Kohlensäure",
                    "Gefiltertes Wasser"
                ],
                "correct": 1,
                "explanation": "'Verwenden Sie keine schäumenden Reinigungsmittel, Essigreiniger oder heißes Wasser'."
            },
            {
                "question": "Wie soll der HEPA-Feinstaubfilter gereinigt werden?",
                "questionEN": "How should the HEPA dust filter be cleaned?",
                "options": [
                    "In der Waschmaschine bei 60 Grad",
                    "Nur trocken ausgeklopft, niemals nass",
                    "Mit Seifenwasser ausgewaschen",
                    "Im Geschirrspüler"
                ],
                "correct": 1,
                "explanation": "'Der HEPA-Feinstaubfilter darf nur trocken ausgeklopft werden. Niemals nass waschen!'"
            }
        ]
    },
    {
        "id": "a2_read_45",
        "title": "Hausordnung & Recycling: Wohnanlage Sonnenpark",
        "titleEN": "House Rules & Recycling: Residential Complex Sonnenpark",
        "emoji": "🏢",
        "type": "Hausordnung / Mieterinfo",
        "warmup": {
            "vocab": [
                {
                    "word": "die Ruhezeiten (Pl.)",
                    "gender": "die",
                    "translation": "quiet hours",
                    "example": "Die gesetzlichen Ruhezeiten gelten ab 22:00 Uhr.",
                    "exampleEN": "Statutory quiet hours apply from 10:00 PM."
                },
                {
                    "word": "die Mülltrennung",
                    "gender": "die",
                    "translation": "waste separation / recycling",
                    "example": "Richtige Mülltrennung schont Umwelt und Nebenkosten.",
                    "exampleEN": "Proper waste sorting protects the environment and utility bills."
                },
                {
                    "word": "das Treppenhaus",
                    "gender": "das",
                    "translation": "staircase / building hallway",
                    "example": "Fluchtwege im Treppenhaus müssen frei bleiben.",
                    "exampleEN": "Escape routes in the staircase must remain clear."
                },
                {
                    "word": "der Wertstoffhof",
                    "gender": "der",
                    "translation": "recycling center",
                    "example": "Sperrmüll und Elektrogeräte gehören auf den Wertstoffhof.",
                    "exampleEN": "Bulky waste and electronics belong at the recycling depot."
                }
            ],
            "readingTip": "Achten Sie auf genaue Ruhezeiten (Mittagsruhe, Nachtruhe) und Mülltonnenfarben.",
            "readingTipEN": "Note exact quiet periods (midday, night) and bin color codes."
        },
        "text": "**Hausordnung für alle Bewohner der Wohnanlage Sonnenpark (Haus 1–6)**\n\nEin harmonisches Zusammenleben erfordert gegenseitige Rücksichtnahme. Wir bitten alle Mieterinnen und Mieter um die Beachtung folgender Regeln:\n\n**1. Ruhezeiten:**\n• **Nachtruhe:** Täglich von **22:00 bis 07:00 Uhr** morgens.\n• **Mittagsruhe:** Montag bis Samstag von **13:00 bis 15:00 Uhr**.\n• **Sonn- und Feiertage:** Ganztägig gilt Sonn- und Feiertagsruhe.\n• Während dieser Zeiten sind laute Arbeiten (z. B. Bohren, Hämmern, Rasenmähen) sowie Musik in Zimmerlautstärke zu unterlassen.\n\n**2. Ordnung im Treppenhaus und Flur:**\nDas Treppenhaus dient als gesetzlicher Fluchtweg bei Bränden. Das Abstellen von Fahrrädern, Schuhregalen, Möbeln oder Müllbeuteln im Hausflur ist aus Brandschutzgründen **strengstens untersagt**. Kinderwagen und Rollstühle dürfen abgestellt werden, solange eine Mindestdurchgangsbreite von 1,20 Metern frei bleibt.\n\n**3. Mülltrennung im Innenhof:**\nBitte nutzen Sie die gekennzeichneten Tonnen:\n• **Blaue Tonne:** Papier, Pappe, Kartonagen (bitte Kartons vorher flach zusammenfalten!)\n• **Gelbe Tonne / Gelber Sack:** Leichtverpackungen aus Plastik, Verbundstoff und Metall\n• **Braune Tonne:** Biomüll (Gemüsereste, Kaffeesatz – keine Plastiktüten!)\n• **Schwarze Tonne:** Restmüll (Hygieneartikel, Staubsaugerbeutel, Windeln)\n• **Glascontainer:** Bitte Flaschen nur an Werktagen zwischen 08:00 und 20:00 Uhr einwerfen.\n\nHausverwaltung Immobilien Fischer · Notdienstnummer: 0171 / 88 44 20",
        "textEN": "House Rules for Sonnenpark Complex (Buildings 1–6)\n\n1. Quiet hours:\n• Night quiet: Daily 10:00 PM – 7:00 AM\n• Midday quiet: Mon-Sat 1:00 PM – 3:00 PM\n• Sundays & Holidays: All day quiet\n• No loud drilling, hammering or loud music during these times.\n\n2. Staircase order: Escape route. No bikes, shoe racks, furniture in hallway for fire safety.\n\n3. Recycling: Blue (Paper), Yellow (Plastics/packaging), Brown (Bio/organic), Black (Residual waste), Glass (Mon-Sat 8 AM – 8 PM only).",
        "questions": [
            {
                "question": "Ab wie viel Uhr gilt abends die tägliche Nachtruhe?",
                "questionEN": "From what time in the evening does the daily night quiet apply?",
                "options": [
                    "Ab 20:00 Uhr",
                    "Ab 22:00 Uhr",
                    "Erst ab Mitternacht",
                    "Ab 19:00 Uhr"
                ],
                "correct": 1,
                "explanation": "'Nachtruhe: Täglich von 22:00 bis 07:00 Uhr morgens.'"
            },
            {
                "question": "Warum dürfen Fahrräder und Möbel nicht im Treppenhaus abgestellt werden?",
                "questionEN": "Why are bicycles and furniture not allowed in the staircase?",
                "options": [
                    "Weil das Treppenhaus ein gesetzlicher Fluchtweg ist",
                    "Weil sie schmutzig sind",
                    "Weil der Hausmeister sie sonst behält",
                    "Weil Nachbarn sie stehlen könnten"
                ],
                "correct": 0,
                "explanation": "'Das Treppenhaus dient als gesetzlicher Fluchtweg bei Bränden... strengstens untersagt.'"
            },
            {
                "question": "In welche Mülltonne gehört Pappe und Papier?",
                "questionEN": "Into which bin does cardboard and paper belong?",
                "options": [
                    "In die schwarze Restmülltonne",
                    "In die gelbe Tonne",
                    "In die blaue Papiertonne",
                    "In die braune Biotonne"
                ],
                "correct": 2,
                "explanation": "'Blaue Tonne: Papier, Pappe, Kartonagen'."
            }
        ]
    }
];

    /* ============================================================
       PART 2: 15 NEW INTERACTIVE LISTENING TOPICS (Topics 31 to 45)
       ============================================================ */
    const NEW_A2_HOEREN_TOPICS_2 = {
    "fitnessstudio": {
        "title": "Fitnessstudio & Probetraining",
        "titleEN": "Gym & Trial Workout",
        "emoji": "🏋️",
        "warmup": {
            "vocab": [
                {
                    "word": "Probetraining",
                    "gender": "das",
                    "translation": "trial workout",
                    "example": "Ich möchte morgen ein kostenloses Probetraining machen.",
                    "exampleEN": "I would like to do a free trial workout tomorrow."
                },
                {
                    "word": "Mitgliedsbeitrag",
                    "gender": "der",
                    "translation": "membership fee",
                    "example": "Der monatliche Mitgliedsbeitrag beträgt 29 Euro.",
                    "exampleEN": "The monthly membership fee is 29 euros."
                },
                {
                    "word": "Schließfach",
                    "gender": "das",
                    "translation": "locker",
                    "example": "Bringen Sie ein Vorhängeschloss für das Schließfach mit.",
                    "exampleEN": "Bring a padlock for the locker."
                },
                {
                    "word": "Trainingsplan",
                    "gender": "der",
                    "translation": "workout plan",
                    "example": "Ein Trainer erstellt Ihren persönlichen Trainingsplan.",
                    "exampleEN": "A trainer creates your personal workout plan."
                },
                {
                    "word": "Saunabereich",
                    "gender": "der",
                    "translation": "sauna area",
                    "example": "Der Saunabereich ist nach dem Sport geöffnet.",
                    "exampleEN": "The sauna area is open after sports."
                }
            ],
            "phrases": [
                {
                    "de": "Kann ich heute die Trainingsfläche unverbindlich testen?",
                    "en": "Can I test the gym floor today without obligation?"
                },
                {
                    "de": "Wie lange ist die Kündigungsfrist für den Vertrag?",
                    "en": "What is the cancellation period for the contract?"
                },
                {
                    "de": "Gibt es auch Kurse wie Yoga oder Spinning?",
                    "en": "Are there also classes like yoga or spinning?"
                },
                {
                    "de": "Vergessen Sie bitte nicht Ihr Handtuch und saubere Hallenschuhe.",
                    "en": "Please do not forget your towel and clean indoor shoes."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_fit_1",
                "title": "Anmeldung zum Probetraining",
                "titleEN": "Registering for Trial Workout",
                "script": "Guten Tag! Ich interessiere mich für eine Mitgliedschaft und würde gerne ein Probetraining machen. - Hallo! Sehr gerne. Haben Sie schon Trainingserfahrung oder möchten Sie eine Trainerbetreuung? - Ich trainiere schon länger, brauche also nur eine kurze Einführung in die Geräte. - Perfekt. Das Probetraining ist heute kostenfrei. Füllen Sie bitte kurz dieses Formular aus. Die Umkleiden sind hinten links.",
                "translation": "Good day! I am interested in a membership and would like to do a trial workout. - Hello! Gladly. Do you already have workout experience or would you like trainer guidance? - I have worked out for a while, so I only need a brief orientation to the machines. - Perfect. Today's trial workout is free. Please fill out this form briefly. Changing rooms are in the back left.",
                "vocabSupport": [
                    {
                        "word": "Trainingserfahrung",
                        "translation": "workout experience"
                    },
                    {
                        "word": "Trainerbetreuung",
                        "translation": "trainer guidance"
                    },
                    {
                        "word": "die Einführung",
                        "translation": "orientation / introduction"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das Probetraining ist für den Kunden heute _____.",
                    "sentenceEN": "The trial workout is _____ for the customer today.",
                    "target": "kostenfrei",
                    "options": [
                        "teuer",
                        "kostenfrei",
                        "nur mit Voranmeldung"
                    ]
                },
                "role": {
                    "speaker1": "Haben Sie Sportkleidung und Wechselschuhe dabei?",
                    "speaker1EN": "Do you have workout clothes and indoor shoes with you?",
                    "options": [
                        "Nein, ich fahre mit der U-Bahn.",
                        "Ja, alles in meiner Sporttasche.",
                        "Das Studio schließt um 22 Uhr."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Der Kunde muss für das heutige Probetraining 20 Euro Eintritt zahlen.",
                    "statementEN": "The customer must pay a 20 euro fee for today's trial workout.",
                    "correct": false,
                    "explanation": "Falsch: Der Mitarbeiter sagt ausdrücklich: 'Das Probetraining ist heute kostenfrei'."
                }
            },
            {
                "id": "a2_hoer_fit_2",
                "title": "Vertrag und Konditionen",
                "titleEN": "Contract and Conditions",
                "script": "Wie hat Ihnen das Training gefallen? - Sehr gut, die Geräte sind top! Was kostet denn ein Jahresvertrag? - Der 12-Monats-Vertrag kostet 32 Euro monatlich, inklusive aller Kurse und Sauna. Wenn Sie sich heute entscheiden, entfällt die Aufnahmegebühr von 30 Euro. - Das klingt fair. Kann ich monatlich kündigen? - Nach Ablauf der 12 Monate verlängert sich der Vertrag monatlich kündbar.",
                "translation": "How did you like the workout? - Very good, the equipment is top notch! What does an annual contract cost? - The 12-month contract is 32 euros monthly, including all classes and sauna. If you decide today, the 30 euro joining fee is waived. - That sounds fair. Can I cancel monthly? - After the 12 months, the contract extends on a monthly cancellable basis.",
                "vocabSupport": [
                    {
                        "word": "der Jahresvertrag",
                        "translation": "annual contract"
                    },
                    {
                        "word": "die Aufnahmegebühr",
                        "translation": "joining / enrollment fee"
                    },
                    {
                        "word": "monatlich kündbar",
                        "translation": "cancellable monthly"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der monatliche Beitrag für den 12-Monats-Vertrag beträgt _____ Euro.",
                    "sentenceEN": "The monthly fee for the 12-month contract is _____ euros.",
                    "target": "32",
                    "options": [
                        "45",
                        "19",
                        "32"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie den Vertrag gleich abschließen und die Aufnahmegebühr sparen?",
                    "speaker1EN": "Would you like to conclude the contract now and save the joining fee?",
                    "options": [
                        "Das Wetter ist heute regnerisch.",
                        "Ja gerne, das Angebot nehme ich an.",
                        "Ich habe gestern Kuchen gegessen."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Die Sauna kostet jeden Monat 15 Euro extra.",
                    "statementEN": "The sauna costs 15 euros extra every month.",
                    "correct": false,
                    "explanation": "Falsch: Die Sauna ist im Monatspreis von 32 Euro inklusive."
                }
            }
        ]
    },
    "reisebuero": {
        "title": "Reisebüro & Urlaub buchen",
        "titleEN": "Travel Agency & Booking Vacation",
        "emoji": "✈️",
        "warmup": {
            "vocab": [
                {
                    "word": "Pauschalreise",
                    "gender": "die",
                    "translation": "package holiday",
                    "example": "Eine Pauschalreise beinhaltet Flug und Hotel.",
                    "exampleEN": "A package holiday includes flight and hotel."
                },
                {
                    "word": "Halbpension",
                    "gender": "die",
                    "translation": "half board (breakfast + dinner)",
                    "example": "Wir buchen das Hotel mit Halbpension.",
                    "exampleEN": "We book the hotel with half board."
                },
                {
                    "word": "Reiserücktrittsversicherung",
                    "gender": "die",
                    "translation": "travel cancellation insurance",
                    "example": "Schließen Sie eine Reiserücktrittsversicherung ab?",
                    "exampleEN": "Do you conclude travel cancellation insurance?"
                },
                {
                    "word": "Nebensaison",
                    "gender": "die",
                    "translation": "off-peak / low season",
                    "example": "In der Nebensaison sind die Preise deutlich günstiger.",
                    "exampleEN": "In the low season prices are significantly cheaper."
                },
                {
                    "word": "Mietwagen",
                    "gender": "der",
                    "translation": "rental car",
                    "example": "Vor Ort mieten wir einen kleinen Mietwagen.",
                    "exampleEN": "On site we rent a small hire car."
                }
            ],
            "phrases": [
                {
                    "de": "Wir möchten im September zwei Wochen ans Meer fliegen.",
                    "en": "We would like to fly to the sea for two weeks in September."
                },
                {
                    "de": "Gibt es ein Hotel direkt am Strand mit Meerblick?",
                    "en": "Is there a hotel directly on the beach with sea view?"
                },
                {
                    "de": "Wie hoch ist der Gesamtreisepreis für zwei Personen?",
                    "en": "How much is the total travel price for two people?"
                },
                {
                    "de": "Die Fluggesellschaft erlaubt 20 Kilo Freigepäck pro Person.",
                    "en": "The airline permits 20 kg checked luggage per person."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_reis_1",
                "title": "Urlaubsberatung Mallorca",
                "titleEN": "Vacation Advice Mallorca",
                "script": "Guten Tag! Mein Mann und ich möchten im September für 10 Tage nach Mallorca fliegen. - Guten Tag, eine wunderbare Reisezeit! Suchen Sie eher einen ruhigen Ort oder viel Trubel? - Auf jeden Fall ruhig, am liebsten eine Finca oder ein kleines Hotel in der Natur, aber nahe am Meer. - Ich habe hier ein schönes 4-Sterne-Hotel im Norden bei Alcúdia mit Halbpension. Der Flug ab Frankfurt ist direkt. - Das klingt perfekt. Was kostet das Paket für uns beide? - Komplett mit Flug und Transfer 1.480 Euro.",
                "translation": "Good day! My husband and I want to fly to Mallorca for 10 days in September. - Good day, a wonderful travel season! Are you looking for a quiet place or lively hustle? - Definitely quiet, preferably a finca or small hotel in nature, but close to the sea. - I have a lovely 4-star hotel in the north near Alcúdia with half board. The flight from Frankfurt is direct. - That sounds perfect. How much is the package for both of us? - Complete with flights and transfer 1,480 euros.",
                "vocabSupport": [
                    {
                        "word": "der Transfer",
                        "translation": "airport transfer"
                    },
                    {
                        "word": "die Finca",
                        "translation": "traditional holiday cottage"
                    },
                    {
                        "word": "direkter Flug",
                        "translation": "direct flight"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Gesamtpreis für beide Reisenden beträgt _____ Euro.",
                    "sentenceEN": "The total price for both travellers is _____ euros.",
                    "target": "1.480",
                    "options": [
                        "2.500",
                        "1.480",
                        "900"
                    ]
                },
                "role": {
                    "speaker1": "Soll ich das Angebot unverbindlich bis morgen reservieren?",
                    "speaker1EN": "Shall I hold the offer provisionally until tomorrow?",
                    "options": [
                        "Mallorca ist eine Insel.",
                        "Ja bitte, dann bespreche ich es heute Abend mit meinem Mann.",
                        "Ich nehme den Bus um 17 Uhr."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Die Kunden suchen ein lautes Partyhotel im Stadtzentrum.",
                    "statementEN": "The customers are looking for a loud party hotel in the city centre.",
                    "correct": false,
                    "explanation": "Falsch: Sie wünschen sich ausdrücklich einen ruhigen Ort in der Natur."
                }
            },
            {
                "id": "a2_hoer_reis_2",
                "title": "Gepäck und Versicherung",
                "titleEN": "Baggage and Insurance",
                "script": "Ich habe noch eine Frage zum Gepäck. Wie viel Koffer dürfen wir mitnehmen? - Im Reisepreis ist ein Handgepäckstück mit 8 Kilo und ein Aufgabegepäck mit 20 Kilo pro Person enthalten. - Prima. Und empfehlen Sie eine Reiserücktrittsversicherung? - Ja, unbedingt. Falls jemand vor der Reise krank wird, erstattet die Versicherung die Stornokosten. Das kostet nur 45 Euro für beide zusammen. - Bitte buchen Sie die Versicherung dazu.",
                "translation": "I still have a question about luggage. How many suitcases may we take? - Included in the travel price is one hand luggage of 8 kg and one checked bag of 20 kg per person. - Great. And do you recommend travel cancellation insurance? - Yes, definitely. In case someone falls ill before travel, insurance reimburses cancellation costs. It costs only 45 euros for both together. - Please add the insurance to the booking.",
                "vocabSupport": [
                    {
                        "word": "das Aufgabegepäck",
                        "translation": "checked baggage"
                    },
                    {
                        "word": "die Stornokosten",
                        "translation": "cancellation fees"
                    },
                    {
                        "word": "erstatten",
                        "translation": "to reimburse / refund"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Reiserücktrittsversicherung für beide Personen kostet _____ Euro.",
                    "sentenceEN": "The travel cancellation insurance for both persons costs _____ euros.",
                    "target": "45",
                    "options": [
                        "45",
                        "100",
                        "20"
                    ]
                },
                "role": {
                    "speaker1": "Wie viel Kilo darf das Aufgabegepäck maximal wiegen?",
                    "speaker1EN": "How many kg may the checked luggage weigh at most?",
                    "options": [
                        "Maximal 20 Kilo pro Person.",
                        "Der Flug dauert zwei Stunden.",
                        "Ich mag spanisches Essen."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Für das Aufgabegepäck muss man am Flughafen 100 Euro extra bezahlen.",
                    "statementEN": "For checked luggage you must pay 100 euros extra at the airport.",
                    "correct": false,
                    "explanation": "Falsch: 20 kg Aufgabegepäck pro Person sind bereits im Reisepreis enthalten."
                }
            }
        ]
    },
    "restaurant": {
        "title": "Restaurant & Tisch reservieren",
        "titleEN": "Restaurant & Table Reservation",
        "emoji": "🍽️",
        "warmup": {
            "vocab": [
                {
                    "word": "Tischreservierung",
                    "gender": "die",
                    "translation": "table reservation",
                    "example": "Haben Sie eine Tischreservierung auf den Namen Wagner?",
                    "exampleEN": "Do you have a table reservation under the name Wagner?"
                },
                {
                    "word": "Speisekarte",
                    "gender": "die",
                    "translation": "menu",
                    "example": "Bringen Sie uns bitte schon die Speisekarte.",
                    "exampleEN": "Please bring us the menu already."
                },
                {
                    "word": "Tagesgericht",
                    "gender": "das",
                    "translation": "daily special",
                    "example": "Was können Sie als Tagesgericht empfehlen?",
                    "exampleEN": "What can you recommend as the daily special?"
                },
                {
                    "word": "getrennt zahlen",
                    "gender": "Phrase",
                    "translation": "to pay separately",
                    "example": "Möchten Sie zusammen oder getrennt zahlen?",
                    "exampleEN": "Would you like to pay together or separately?"
                },
                {
                    "word": "Rechnung",
                    "gender": "die",
                    "translation": "bill / check",
                    "example": "Die Rechnung bitte, wir möchten bezahlen.",
                    "exampleEN": "The bill please, we would like to pay."
                }
            ],
            "phrases": [
                {
                    "de": "Ich möchte einen Tisch für vier Personen für Samstagabend reservieren.",
                    "en": "I would like to reserve a table for four people for Saturday evening."
                },
                {
                    "de": "Haben Sie auch vegetarische oder glutenfreie Optionen?",
                    "en": "Do you also have vegetarian or gluten-free options?"
                },
                {
                    "de": "Hat es Ihnen geschmeckt? - Ja, vielen Dank, es war ausgezeichnet!",
                    "en": "Did you enjoy your meal? - Yes, thank you, it was excellent!"
                },
                {
                    "de": "Stimmt so, der Rest ist für Sie!",
                    "en": "Keep the change, the rest is for you!"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_rest_1",
                "title": "Telefonische Reservierung",
                "titleEN": "Phone Table Reservation",
                "script": "Guten Abend, Ristorante Bella Italia, Mario am Apparat. - Guten Abend! Ich möchte gerne für diesen Freitag einen Tisch für vier Personen reservieren. - Gerne! Für welche Uhrzeit? - Um 19:30 Uhr, wenn möglich. - Einen Moment... Ja, um 19:30 Uhr haben wir noch einen schönen Tisch im Wintergarten frei. Auf welchen Namen darf ich notieren? - Auf den Namen Sommer, bitte. - Alles klar, Tisch für vier am Freitag um 19:30 Uhr auf Sommer. Bis Freitag!",
                "translation": "Good evening, Ristorante Bella Italia, Mario speaking. - Good evening! I would like to reserve a table for four people for this Friday. - Gladly! For what time? - At 7:30 PM, if possible. - One moment... Yes, at 7:30 PM we still have a nice table in the conservatory. Under what name may I note it down? - Under the name Sommer, please. - Alright, table for four on Friday at 7:30 PM for Sommer. See you Friday!",
                "vocabSupport": [
                    {
                        "word": "der Wintergarten",
                        "translation": "conservatory / glass room"
                    },
                    {
                        "word": "notieren",
                        "translation": "to note down"
                    },
                    {
                        "word": "am Apparat",
                        "translation": "speaking (on the phone)"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der reservierte Tisch befindet sich im _____.",
                    "sentenceEN": "The reserved table is located in the _____.",
                    "target": "Wintergarten",
                    "options": [
                        "Keller",
                        "Wintergarten",
                        "Dachgeschoss"
                    ]
                },
                "role": {
                    "speaker1": "Auf welchen Namen darf ich den Tisch eintragen?",
                    "speaker1EN": "Under what name may I register the table?",
                    "options": [
                        "Wir essen gerne Pizza.",
                        "Auf den Namen Sommer, bitte.",
                        "Freitag ist der 15. Oktober."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Für Freitagabend um 19:30 Uhr sind alle Tische ausgebucht.",
                    "statementEN": "For Friday evening at 7:30 PM all tables are fully booked.",
                    "correct": false,
                    "explanation": "Falsch: Mario bestätigt einen freien Tisch im Wintergarten."
                }
            },
            {
                "id": "a2_hoer_rest_2",
                "title": "Bestellung und Bezahlung",
                "titleEN": "Ordering and Bill",
                "script": "Haben Sie schon gewählt, oder darf ich Ihnen etwas empfehlen? - Wir nehmen zwei Steinpilz-Risottos und zweimal die Lasagne. Und dazu eine Flasche Mineralwasser. - Sehr gerne, kommt sofort. ... (später) ... Hat alles geschmeckt? - Ja, das Essen war fantastisch! Wir möchten bitte zahlen, getrennt bitte. - Gerne. Für Sie macht das 22,50 Euro und für Ihre Begleitung 24,00 Euro. - Hier sind 25 Euro, stimmt so!",
                "translation": "Have you chosen already, or may I recommend something? - We'll take two porcini risottos and two lasagnas. And a bottle of mineral water with that. - With pleasure, coming right up. ... (later) ... Did you enjoy everything? - Yes, the food was fantastic! We would like to pay, separately please. - Gladly. For you that comes to 22.50 euros and for your companion 24.00 euros. - Here is 25 euros, keep the change!",
                "vocabSupport": [
                    {
                        "word": "das Steinpilz-Risotto",
                        "translation": "porcini mushroom risotto"
                    },
                    {
                        "word": "getrennt",
                        "translation": "separately"
                    },
                    {
                        "word": "stimmt so",
                        "translation": "keep the change"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Gäste möchten die Rechnung _____ bezahlen.",
                    "sentenceEN": "The guests want to pay the bill _____.",
                    "target": "getrennt",
                    "options": [
                        "auf Rechnung",
                        "zusammen",
                        "getrennt"
                    ]
                },
                "role": {
                    "speaker1": "Zahlen Sie zusammen oder getrennt?",
                    "speaker1EN": "Are you paying together or separately?",
                    "options": [
                        "Getrennt bitte, ich zahle meinen Teil mit Karte.",
                        "Das Restaurant liegt am Marktplatz.",
                        "Wir trinken gerne Tee."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Gast gibt bei einer Rechnung von 22,50 Euro 2,50 Euro Trinkgeld.",
                    "statementEN": "The guest gives 2.50 euros tip on a 22.50 euro bill.",
                    "correct": true,
                    "explanation": "Richtig: Er gibt 25 Euro bei einer Rechnung von 22,50 Euro ('stimmt so!')."
                }
            }
        ]
    },
    "kleiderladen": {
        "title": "Bekleidungsgeschäft & Mode",
        "titleEN": "Clothing Store & Fashion",
        "emoji": "👗",
        "warmup": {
            "vocab": [
                {
                    "word": "Umkleidekabine",
                    "gender": "die",
                    "translation": "fitting room / changing booth",
                    "example": "Die Umkleidekabinen sind gleich hinter der Kasse.",
                    "exampleEN": "The fitting rooms are right behind the cashier."
                },
                {
                    "word": "Größe",
                    "gender": "die",
                    "translation": "clothing size",
                    "example": "Haben Sie diese Jacke auch in Größe M?",
                    "exampleEN": "Do you have this jacket in size M as well?"
                },
                {
                    "word": "anprobieren",
                    "gender": "Verb",
                    "translation": "to try on",
                    "example": "Ich möchte dieses Hemd kurz anprobieren.",
                    "exampleEN": "I would like to try on this shirt briefly."
                },
                {
                    "word": "Kassenzettel",
                    "gender": "der",
                    "translation": "receipt",
                    "example": "Bewahren Sie den Kassenzettel für einen Umtausch auf.",
                    "exampleEN": "Keep the receipt for an exchange."
                },
                {
                    "word": "Rabatt",
                    "gender": "der",
                    "translation": "discount",
                    "example": "Auf alle Sommerartikel gibt es 30 % Rabatt.",
                    "exampleEN": "There is a 30% discount on all summer items."
                }
            ],
            "phrases": [
                {
                    "de": "Kann ich Ihnen bei der Auswahl behilflich sein?",
                    "en": "Can I assist you with the selection?"
                },
                {
                    "de": "Die Hose ist mir an den Beinen leider etwas zu eng.",
                    "en": "The trousers are unfortunately a bit too tight on my legs."
                },
                {
                    "de": "Steht mir diese blaue Bluse? - Ja, die Farbe passt hervorragend!",
                    "en": "Does this blue blouse suit me? - Yes, the colour suits you wonderfully!"
                },
                {
                    "de": "Sie können die Ware innerhalb von 14 Tagen umtauschen.",
                    "en": "You can exchange the items within 14 days."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_kleid_1",
                "title": "In der Umkleidekabine",
                "titleEN": "In the Fitting Room",
                "script": "Hallo! Suchen Sie eine bestimmte Größe? - Hallo. Ich habe hier eine Wolljacke in L anprobiert, aber die Ärmel sind mir etwas zu lang. Haben Sie das Modell auch in Größe M da? - Lassen Sie mich kurz nachschauen... Ja, hier ist genau dieselbe Jacke in Dunkelblau in Größe M. Probieren Sie die mal! - Oh ja, die sitzt wie angegossen! Wie viel kostet sie? - Sie ist reduziert von 89 auf 59 Euro.",
                "translation": "Hello! Are you looking for a specific size? - Hello. I tried on this wool jacket in L, but the sleeves are a bit too long for me. Do you have this model in size M? - Let me check quickly... Yes, here is the exact same jacket in dark blue in size M. Try this one! - Oh yes, it fits like a glove! How much is it? - It is reduced from 89 to 59 euros.",
                "vocabSupport": [
                    {
                        "word": "die Ärmel (Pl.)",
                        "translation": "sleeves"
                    },
                    {
                        "word": "sitzt wie angegossen",
                        "translation": "fits like a glove / perfectly"
                    },
                    {
                        "word": "reduziert",
                        "translation": "discounted / reduced"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Jacke ist im Angebot von 89 auf _____ Euro reduziert.",
                    "sentenceEN": "The jacket is reduced on sale from 89 to _____ euros.",
                    "target": "59",
                    "options": [
                        "59",
                        "70",
                        "30"
                    ]
                },
                "role": {
                    "speaker1": "Passt Ihnen die Jacke in Größe M besser?",
                    "speaker1EN": "Does the jacket in size M fit you better?",
                    "options": [
                        "Ich trage Lederschuhe.",
                        "Ja, die Ärmel haben jetzt genau die richtige Länge.",
                        "Die Kasse schließt um 20 Uhr."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Die Jacke in Größe M ist zu klein und gefällt der Kundin nicht.",
                    "statementEN": "The jacket in size M is too small and the customer dislikes it.",
                    "correct": false,
                    "explanation": "Falsch: Die Kundin freut sich: 'die sitzt wie angegossen!'."
                }
            },
            {
                "id": "a2_hoer_kleid_2",
                "title": "Umtausch an der Kasse",
                "titleEN": "Exchange at the Cashier",
                "script": "Guten Tag. Ich habe gestern diesen Pullover für meinen Sohn gekauft, aber er gefällt ihm von der Farbe her nicht. Kann ich ihn umtauschen? - Guten Tag! Selbstverständlich. Haben Sie das Etikett noch dran und den Kassenbon dabei? - Ja, das Etikett ist unbeschädigt und hier ist die Quittung. - Möchten Sie sich einen anderen Pullover aussuchen oder das Geld zurück? - Ich nehme gerne den gleichen Pullover in Hellgrau.",
                "translation": "Good day. I bought this sweater for my son yesterday, but he does not like the colour. Can I exchange it? - Good day! Of course. Is the price tag still attached and do you have the receipt with you? - Yes, the tag is undamaged and here is the receipt. - Would you like to choose another sweater or your money back? - I will gladly take the same sweater in light grey.",
                "vocabSupport": [
                    {
                        "word": "das Etikett",
                        "translation": "price tag / label"
                    },
                    {
                        "word": "der Kassenbon",
                        "translation": "store receipt"
                    },
                    {
                        "word": "der Umtausch",
                        "translation": "exchange"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Kunde tauscht den Pullover gegen die Farbe _____ um.",
                    "sentenceEN": "The customer exchanges the sweater for the colour _____.",
                    "target": "Hellgrau",
                    "options": [
                        "Rot",
                        "Hellgrau",
                        "Schwarz"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie das Geld zurück oder einen Umtausch?",
                    "speaker1EN": "Would you like your money back or an exchange?",
                    "options": [
                        "Ich möchte den Pullover gerne in Hellgrau umtauschen.",
                        "Der Pullover ist aus reiner Wolle.",
                        "Mein Sohn ist 15 Jahre alt."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Ohne Kassenbon und ohne Etikett verweigert die Verkäuferin den Umtausch komplett.",
                    "statementEN": "Without receipt and tag the shop assistant denies the exchange completely.",
                    "correct": false,
                    "explanation": "Falsch: Der Kunde hat Kassenbon und Etikett dabei und der Umtausch klappt problemlos."
                }
            }
        ]
    },
    "flughafen": {
        "title": "Flughafen & Check-in",
        "titleEN": "Airport & Flight Check-in",
        "emoji": "🛫",
        "warmup": {
            "vocab": [
                {
                    "word": "Bordkarte",
                    "gender": "die",
                    "translation": "boarding pass",
                    "example": "Halten Sie Ihre Bordkarte und den Reisepass bereit.",
                    "exampleEN": "Keep your boarding pass and passport ready."
                },
                {
                    "word": "Sicherheitskontrolle",
                    "gender": "die",
                    "translation": "security check",
                    "example": "Die Sicherheitskontrolle befindet sich im Terminal 1.",
                    "exampleEN": "The security check is located in Terminal 1."
                },
                {
                    "word": "Abfluggate",
                    "gender": "das",
                    "translation": "departure gate",
                    "example": "Das Boarding beginnt um 14:15 Uhr an Gate B24.",
                    "exampleEN": "Boarding begins at 2:15 PM at gate B24."
                },
                {
                    "word": "Handgepäck",
                    "gender": "das",
                    "translation": "cabin baggage / carry-on",
                    "example": "Flüssigkeiten im Handgepäck dürfen maximal 100 ml umfassen.",
                    "exampleEN": "Liquids in hand luggage may hold max 100 ml."
                },
                {
                    "word": "Gepäckband",
                    "gender": "das",
                    "translation": "baggage carousel",
                    "example": "Die Koffer kommen auf Gepäckband 4 an.",
                    "exampleEN": "The suitcases arrive on baggage carousel 4."
                }
            ],
            "phrases": [
                {
                    "de": "Haben Sie gefährliche Gegenstände oder Flüssigkeiten im Koffer?",
                    "en": "Do you have hazardous items or liquids in the suitcase?"
                },
                {
                    "de": "Möchten Sie einen Fensterplatz oder einen Gangplatz?",
                    "en": "Would you like a window seat or an aisle seat?"
                },
                {
                    "de": "Der Flug nach Berlin hat heute 30 Minuten Verspätung.",
                    "en": "The flight to Berlin is 30 minutes delayed today."
                },
                {
                    "de": "Guten Flug und eine angenehme Reise!",
                    "en": "Have a good flight and a pleasant trip!"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_flug_1",
                "title": "Koffer aufgeben am Schalter",
                "titleEN": "Dropping Luggage at Counter",
                "script": "Guten Morgen! Wohin fliegen Sie heute? - Guten Morgen, nach Wien mit Flug LH 1234. - Ihren Reisepass bitte... Danke. Stellen Sie Ihren Koffer bitte auf das Band... Genau 18,5 Kilo, das passt perfekt. Haben Sie Powerbanks oder Lithium-Akkus im Koffer? - Nein, meine Powerbank ist im Rucksack. - Sehr gut, Akkus gehören ins Handgepäck. Hier ist Ihre Bordkarte. Abflug ist ab Gate A12.",
                "translation": "Good morning! Where are you flying today? - Good morning, to Vienna on flight LH 1234. - Your passport please... Thank you. Please place your suitcase on the belt... Exactly 18.5 kg, that fits perfectly. Do you have powerbanks or lithium batteries in the suitcase? - No, my powerbank is in my backpack. - Very good, batteries belong in hand luggage. Here is your boarding pass. Departure is from Gate A12.",
                "vocabSupport": [
                    {
                        "word": "das Kofferband",
                        "translation": "luggage scale belt"
                    },
                    {
                        "word": "die Powerbank",
                        "translation": "portable battery pack"
                    },
                    {
                        "word": "der Abflug",
                        "translation": "departure"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Flug nach Wien startet von Gate _____.",
                    "sentenceEN": "The flight to Vienna departs from Gate _____.",
                    "target": "A12",
                    "options": [
                        "C04",
                        "A12",
                        "B20"
                    ]
                },
                "role": {
                    "speaker1": "Haben Sie elektronische Akkus im aufgegebenen Koffer?",
                    "speaker1EN": "Do you have electronic battery packs in your checked bag?",
                    "options": [
                        "Nein, alle Akkus trage ich bei mir im Handgepäck.",
                        "Ich habe ein Ticket für die erste Klasse.",
                        "Wien ist die Hauptstadt von Österreich."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Koffer wiegt 35 Kilo und hat starkes Übergewicht.",
                    "statementEN": "The suitcase weighs 35 kg and is heavily overweight.",
                    "correct": false,
                    "explanation": "Falsch: Der Koffer wiegt genau 18,5 Kilo und liegt voll im Limit."
                }
            },
            {
                "id": "a2_hoer_flug_2",
                "title": "Durch die Sicherheitskontrolle",
                "titleEN": "Passing Airport Security",
                "script": "Schönen guten Tag. Bitte nehmen Sie alle elektronischen Geräte wie Laptops und Tablets aus der Tasche und legen Sie sie separat in die Plastikschale. - Muss ich die Jacke und den Gürtel auch ausziehen? - Ja bitte, Jacke, Schal und Gürtel in die Box. Flüssigkeiten bitte im durchsichtigen 1-Liter-Beutel vorzeigen. - Alles klar, hier ist mein Kulturbeutel. - Treten Sie bitte einzeln durch den Körperscanner.",
                "translation": "A very good day. Please take out all electronic devices like laptops and tablets from the bag and place them separately into the plastic tray. - Do I have to take off jacket and belt too? - Yes please, jacket, scarf, and belt into the box. Show liquids in the transparent 1-litre bag. - Alright, here is my toiletry bag. - Please step through the body scanner one by one.",
                "vocabSupport": [
                    {
                        "word": "die Plastikschale",
                        "translation": "security plastic tray"
                    },
                    {
                        "word": "der Körperscanner",
                        "translation": "body scanner"
                    },
                    {
                        "word": "der Kulturbeutel",
                        "translation": "toiletry bag"
                    }
                ],
                "fillBlank": {
                    "sentence": "Laptops und Tablets müssen _____ in die Box gelegt werden.",
                    "sentenceEN": "Laptops and tablets must be placed into the box _____.",
                    "target": "separat",
                    "options": [
                        "versteckt",
                        "separat",
                        "eingeschaltet"
                    ]
                },
                "role": {
                    "speaker1": "Muss ich meine Winterjacke ausziehen?",
                    "speaker1EN": "Do I have to take off my winter jacket?",
                    "options": [
                        "Ja, bitte Jacke und Gürtel in die Box legen.",
                        "Der Flug dauert zwei Stunden.",
                        "Ich habe mein Flugticket verloren."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Flüssigkeiten dürfen in unbegrenzter Menge im Koffer transportiert werden.",
                    "statementEN": "Liquids may be carried in unlimited amounts in the cabin bag.",
                    "correct": false,
                    "explanation": "Falsch: Flüssigkeiten müssen in kleinen Behältern in einem durchsichtigen 1-Liter-Beutel vorgezeigt werden."
                }
            }
        ]
    },
    "supermarkt": {
        "title": "Supermarkt & Frischetheke",
        "titleEN": "Supermarket & Fresh Food Counter",
        "emoji": "🛒",
        "warmup": {
            "vocab": [
                {
                    "word": "Frischetheke",
                    "gender": "die",
                    "translation": "fresh deli / butcher counter",
                    "example": "Käse und Aufschnitt kaufe ich gerne an der Frischetheke.",
                    "exampleEN": "I like buying cheese and cold cuts at the fresh deli counter."
                },
                {
                    "word": "Pfandautomat",
                    "gender": "der",
                    "translation": "bottle deposit return machine",
                    "example": "Die leeren Mineralwasserflaschen gebe ich am Pfandautomaten ab.",
                    "exampleEN": "I return the empty mineral water bottles at the deposit machine."
                },
                {
                    "word": "Kassenbon",
                    "gender": "der",
                    "translation": "receipt",
                    "example": "Brauchen Sie den Kassenbon oder kann ich ihn entsorgen?",
                    "exampleEN": "Do you need the receipt or may I dispose of it?"
                },
                {
                    "word": "Bio-Qualität",
                    "gender": "die",
                    "translation": "organic quality",
                    "example": "Dieses Gemüse stammt aus kontrollierter Bio-Qualität.",
                    "exampleEN": "These vegetables come from controlled organic quality."
                },
                {
                    "word": "Einkaufswagen",
                    "gender": "der",
                    "translation": "shopping cart",
                    "example": "Für den Einkaufswagen braucht man eine Ein-Euro-Münze.",
                    "exampleEN": "For the shopping cart one needs a one-euro coin."
                }
            ],
            "phrases": [
                {
                    "de": "Hätten Sie gerne den milden Gouda oder den gereiften Bergkäse?",
                    "en": "Would you prefer the mild Gouda or the aged mountain cheese?"
                },
                {
                    "de": "Darf es sonst noch etwas sein?",
                    "en": "May it be anything else?"
                },
                {
                    "de": "Zahlen Sie bar oder mit Karte?",
                    "en": "Are you paying cash or by card?"
                },
                {
                    "de": "Vergessen Sie bitte nicht, den Pfandbon an der Kasse einzulösen.",
                    "en": "Please do not forget to redeem the bottle deposit voucher at the register."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_sup_1",
                "title": "Bestellung an der Frischetheke",
                "titleEN": "Ordering at the Deli Counter",
                "script": "Guten Tag! Wer ist an der Reihe? - Hallo, ich glaube, ich bin dran. Ich hätte gerne zweihundert Gramm von dem geräucherten Schinken. - Sehr gerne. Soll ich ihn hauchdünn schneiden? - Ja bitte, schön dünn. Und dann noch ein Stück von dem Schweizer Emmentaler, etwa einhundertfünfzig Gramm. - Darf es sonst noch etwas sein? Wir haben heute frischen Fleischsalat im Angebot. - Nein danke, das ist alles für heute.",
                "translation": "Good day! Whose turn is it? - Hello, I think it's me. I would like 200 grams of the smoked ham. - Gladly. Shall I slice it paper thin? - Yes please, nicely thin. And also a piece of the Swiss Emmental, around 150 grams. - Would you like anything else? We have fresh meat salad on special offer today. - No thank you, that is all for today.",
                "vocabSupport": [
                    {
                        "word": "an der Reihe sein",
                        "translation": "to be one's turn"
                    },
                    {
                        "word": "hauchdünn",
                        "translation": "paper-thin / very fine"
                    },
                    {
                        "word": "im Angebot",
                        "translation": "on special offer / on sale"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Kunde bestellt zweihundert Gramm _____ Schinken.",
                    "sentenceEN": "The customer orders 200 grams of _____ ham.",
                    "target": "geräucherten",
                    "options": [
                        "gekochten",
                        "geräucherten",
                        "gebackenen"
                    ]
                },
                "role": {
                    "speaker1": "Darf es sonst noch etwas von der Käsetheke sein?",
                    "speaker1EN": "May it be anything else from the cheese counter?",
                    "options": [
                        "Das Kaufhaus hat vier Etagen.",
                        "Nein danke, das ist alles für heute.",
                        "Der Zug hat zwanzig Minuten Verspätung."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Der Kunde nimmt auch den empfohlenen Fleischsalat mit.",
                    "statementEN": "The customer also takes the recommended meat salad.",
                    "correct": false,
                    "explanation": "Falsch: Der Kunde lehnt das Sonderangebot dankend ab und sagt: 'Nein danke, das ist alles'."
                }
            },
            {
                "id": "a2_hoer_sup_2",
                "title": "An der Kasse & Pfandbon",
                "titleEN": "At the Checkout & Bottle Voucher",
                "script": "Hallo! Haben Sie eine Treuekarte unseres Marktes? - Nein, habe ich nicht. Aber ich habe hier noch einen Pfandbon über drei Euro fünfzig. - Prima, den ziehe ich gleich vom Betrag ab. Das macht dann zusammen vierundzwanzig Euro und achtzig Cent. - Kann ich mit meiner EC-Karte kontaktlos zahlen? - Selbstverständlich, halten Sie die Karte einfach an das Lesegerät... Zahlung erfolgreich! Möchten Sie den Bon mitnehmen? - Ja gerne, vielen Dank und einen schönen Tag!",
                "translation": "Hello! Do you have a loyalty card for our store? - No, I don't. But I have a bottle deposit voucher for 3.50 euros here. - Great, I will deduct that right away from the total. That comes to 24 euros and 80 cents altogether. - Can I pay contactlessly with my debit card? - Of course, just hold the card against the reader... Payment successful! Would you like to take the receipt? - Yes gladly, thank you very much and have a nice day!",
                "vocabSupport": [
                    {
                        "word": "die Treuekarte",
                        "translation": "loyalty card / rewards card"
                    },
                    {
                        "word": "kontaktlos zahlen",
                        "translation": "to pay contactlessly"
                    },
                    {
                        "word": "abziehen",
                        "translation": "to deduct"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Pfandbon hat einen Wert von _____ Euro.",
                    "sentenceEN": "The bottle deposit voucher has a value of _____ euros.",
                    "target": "3,50",
                    "options": [
                        "1,50",
                        "5,00",
                        "3,50"
                    ]
                },
                "role": {
                    "speaker1": "Zahlen Sie bar oder mit Karte?",
                    "speaker1EN": "Are you paying cash or by card?",
                    "options": [
                        "Ich bezahle kontaktlos mit EC-Karte.",
                        "Der Markt schließt sonntags um 20 Uhr.",
                        "Ich habe meine Jacke vergessen."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde zahlt bar mit einem Fünfzig-Euro-Schein.",
                    "statementEN": "The customer pays cash with a fifty-euro note.",
                    "correct": false,
                    "explanation": "Falsch: Der Kunde zahlt kontaktlos mit EC-Karte am Kartenlesegerät."
                }
            }
        ]
    },
    "elektronik": {
        "title": "Elektronikmarkt & Geräteberatung",
        "titleEN": "Electronics Store & Device Advice",
        "emoji": "💻",
        "warmup": {
            "vocab": [
                {
                    "word": "Akkulaufzeit",
                    "gender": "die",
                    "translation": "battery life",
                    "example": "Das Tablet überzeugt mit einer Akkulaufzeit von zwölf Stunden.",
                    "exampleEN": "The tablet impresses with a battery life of twelve hours."
                },
                {
                    "word": "Garantieschein",
                    "gender": "der",
                    "translation": "warranty certificate",
                    "example": "Bewahren Sie den Garantieschein gut zwei Jahre lang auf.",
                    "exampleEN": "Keep the warranty certificate safe for two years."
                },
                {
                    "word": "Speicherkapazität",
                    "gender": "die",
                    "translation": "storage capacity",
                    "example": "Für viele Videos brauchen Sie 512 Gigabyte Speicherkapazität.",
                    "exampleEN": "For many videos you need 512 gigabytes of storage capacity."
                },
                {
                    "word": "Zubehör",
                    "gender": "das",
                    "translation": "accessories",
                    "example": "Ladekabel und Schutzhülle sind passendes Zubehör.",
                    "exampleEN": "Charging cable and protective sleeve are matching accessories."
                },
                {
                    "word": "Reparaturauftrag",
                    "gender": "der",
                    "translation": "repair order",
                    "example": "Wir füllen kurz einen Reparaturauftrag für das Smartphone aus.",
                    "exampleEN": "We briefly fill out a repair order for the smartphone."
                }
            ],
            "phrases": [
                {
                    "de": "Wofür möchten Sie das Notebook hauptsächlich nutzen?",
                    "en": "What do you primarily want to use the notebook for?"
                },
                {
                    "de": "Ist im Kaufpreis eine zweijährige Herstellergarantie enthalten?",
                    "en": "Is a two-year manufacturer warranty included in the purchase price?"
                },
                {
                    "de": "Das Gerät schaltet sich nach fünf Minuten von alleine aus.",
                    "en": "The device turns off on its own after five minutes."
                },
                {
                    "de": "Haben Sie den Originalbeleg für die Rückgabe noch?",
                    "en": "Do you still have the original receipt for the return?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_elek_1",
                "title": "Laptop für das Homeoffice",
                "titleEN": "Laptop for Home Office",
                "script": "Guten Tag! Suchen Sie ein bestimmtes Notebook? - Ja, ich brauche einen leichten Laptop für mein Homeoffice und Videokonferenzen. - Dann empfehle ich Ihnen dieses 14-Zoll-Modell. Es wiegt nur 1,3 Kilo, hat sechzehn Gigabyte Arbeitsspeicher und eine hervorragende HD-Webcam. - Wie lange hält der Akku bei normaler Büroarbeit? - Locker acht bis zehn Stunden. Außerdem lädt der Akku in nur fünfundvierzig Minuten auf achtzig Prozent auf. - Klingt optimal! Was kostet das Gerät? - Aktuell im Angebot für sechshundertvierzig Euro.",
                "translation": "Good day! Are you looking for a specific notebook? - Yes, I need a lightweight laptop for my home office and video conferencing. - Then I recommend this 14-inch model. It weighs only 1.3 kg, has 16 gigabytes of RAM, and an outstanding HD webcam. - How long does the battery last during normal office work? - Easily 8 to 10 hours. Furthermore, the battery charges to 80 percent in just 45 minutes. - Sounds ideal! What does the machine cost? - Currently on promotion for 640 euros.",
                "vocabSupport": [
                    {
                        "word": "der Arbeitsspeicher",
                        "translation": "RAM (random access memory)"
                    },
                    {
                        "word": "die Videokonferenz",
                        "translation": "video conference"
                    },
                    {
                        "word": "hervorragend",
                        "translation": "excellent / outstanding"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der empfohlene Laptop wiegt lediglich _____ Kilogramm.",
                    "sentenceEN": "The recommended laptop weighs only _____ kilograms.",
                    "target": "1,3",
                    "options": [
                        "2,8",
                        "1,3",
                        "3,5"
                    ]
                },
                "role": {
                    "speaker1": "Brauchen Sie noch eine passende Schutzhülle und eine Funkmaus dazu?",
                    "speaker1EN": "Do you also need a matching sleeve and a wireless mouse with it?",
                    "options": [
                        "Eine Funkmaus wäre sehr praktisch, ja.",
                        "Der Zug kommt auf Gleis 4 an.",
                        "Ich möchte kein Abendessen kochen."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Laptop kostet im aktuellen Angebot über eintausend Euro.",
                    "statementEN": "The laptop costs over one thousand euros in the current offer.",
                    "correct": false,
                    "explanation": "Falsch: Das Modell kostet aktuell im Angebot sechshundertvierzig Euro."
                }
            },
            {
                "id": "a2_hoer_elek_2",
                "title": "Defektes Smartphone reklamieren",
                "titleEN": "Complaining about a Faulty Smartphone",
                "script": "Hallo, ich habe vor drei Wochen dieses Handy bei Ihnen gekauft, aber das Display flackert ständig. - Hallo! Haben Sie den Kaufbeleg dabei? - Ja, hier ist die Rechnung vom fünfzehnten September. - Danke. Da das Gerät innerhalb der gesetzlichen Gewährleistung ist, schicken wir es zur Reparatur an den Hersteller ein. - Wie lange dauert das ungefähr? - In der Regel zwischen sieben und zehn Werktagen. Sie erhalten eine SMS, sobald das Handy abholbereit ist.",
                "translation": "Hello, I bought this mobile phone from you three weeks ago, but the display flickers constantly. - Hello! Do you have the purchase receipt with you? - Yes, here is the invoice from September 15th. - Thank you. Since the unit is within legal warranty, we will send it in to the manufacturer for repair. - About how long does that take? - As a rule, between 7 and 10 business days. You will receive an SMS as soon as the phone is ready for pickup.",
                "vocabSupport": [
                    {
                        "word": "das Display flackert",
                        "translation": "the screen flickers"
                    },
                    {
                        "word": "die Gewährleistung",
                        "translation": "statutory warranty"
                    },
                    {
                        "word": "abholbereit",
                        "translation": "ready for pickup"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Reparatur des Smartphones dauert etwa sieben bis zehn _____.",
                    "sentenceEN": "The repair of the smartphone takes around 7 to 10 _____.",
                    "target": "Werktage",
                    "options": [
                        "Monate",
                        "Stunden",
                        "Werktage"
                    ]
                },
                "role": {
                    "speaker1": "Können Sie mir Ihre Handynummer für die Abholbenachrichtigung aufschreiben?",
                    "speaker1EN": "Can you write down your mobile phone number for the pickup notification?",
                    "options": [
                        "Gestern hat es den ganzen Tag geschneit.",
                        "Sehr gerne, hier ist meine Nummer.",
                        "Ich esse am liebsten Pizza."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Der Kunde muss die Reparatur voll bezahlen, weil die Garantie abgelaufen ist.",
                    "statementEN": "The customer must pay for the repair in full because the warranty expired.",
                    "correct": false,
                    "explanation": "Falsch: Das Handy wurde vor 3 Wochen gekauft und wird im Rahmen der Gewährleistung kostenfrei eingeschickt."
                }
            }
        ]
    },
    "wohnungsbesichtigung": {
        "title": "Wohnungsbesichtigung & Mietvertrag",
        "titleEN": "Apartment Viewing & Lease Agreement",
        "emoji": "🏠",
        "warmup": {
            "vocab": [
                {
                    "word": "Warmmiete",
                    "gender": "die",
                    "translation": "warm rent (including heating/utilities)",
                    "example": "Die Warmmiete für die Wohnung beträgt 820 Euro im Monat.",
                    "exampleEN": "The warm rent for the apartment is 820 euros per month."
                },
                {
                    "word": "Mietkaution",
                    "gender": "die",
                    "translation": "security deposit",
                    "example": "Vor dem Einzug zahlt man drei Kaltmieten als Kaution.",
                    "exampleEN": "Before moving in one pays three months base rent as deposit."
                },
                {
                    "word": "Nebenkosten",
                    "gender": "die (Pl.)",
                    "translation": "utility / ancillary charges",
                    "example": "Wasser und Müllabfuhr sind in den Nebenkosten enthalten.",
                    "exampleEN": "Water and waste collection are included in the utilities."
                },
                {
                    "word": "Einbauküche",
                    "gender": "die",
                    "translation": "fitted kitchen",
                    "example": "Die Einbauküche mit Herd und Kühlschrank bleibt in der Wohnung.",
                    "exampleEN": "The fitted kitchen with stove and fridge remains in the apartment."
                },
                {
                    "word": "Gehaltsnachweis",
                    "gender": "der",
                    "translation": "proof of income / payslip",
                    "example": "Der Vermieter verlangt die Gehaltsnachweise der letzten drei Monate.",
                    "exampleEN": "The landlord demands payslips for the last three months."
                }
            ],
            "phrases": [
                {
                    "de": "Ab wann wäre die Zweizimmerwohnung bezugsfrei?",
                    "en": "From when would the two-room apartment be ready for move-in?"
                },
                {
                    "de": "Sind Haustiere wie Katzen oder kleine Hunde erlaubt?",
                    "en": "Are pets such as cats or small dogs allowed?"
                },
                {
                    "de": "Gibt es einen Kellerraum und einen Fahrradstellplatz?",
                    "en": "Is there a basement compartment and a bicycle parking spot?"
                },
                {
                    "de": "Ich sende Ihnen die Schufa-Auskunft und die Selbstauskunft per E-Mail.",
                    "en": "I will send you the credit check and tenant disclosure by email."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_wohn_1",
                "title": "Rundgang durch die Wohnung",
                "titleEN": "Tour through the Apartment",
                "script": "Herzlich willkommen zur Besichtigung! Kommen Sie gerne herein. - Vielen Dank! Die Wohnung wirkt sehr hell. Wie groß ist die Wohnfläche? - Das sind insgesamt 62 Quadratmeter: Wohnzimmer, Schlafzimmer, Bad mit Badewanne und Balkon nach Süden. - Ist die moderne Einbauküche im Mietpreis inbegriffen? - Ja, Herd, Ofen und Geschirrspüler gehören zur Wohnung und kosten keinen Aufpreis. - Sehr schön! Wie hoch ist die monatliche Kaltmiete? - Die Kaltmiete liegt bei 650 Euro, plus 160 Euro Nebenkostenvorauszahlung.",
                "translation": "Welcome to the viewing! Please do come in. - Thank you very much! The apartment appears very bright. How big is the living space? - It is 62 square meters in total: living room, bedroom, bathroom with bathtub, and south-facing balcony. - Is the modern fitted kitchen included in the rent? - Yes, stove, oven, and dishwasher belong to the apartment and cost no surcharge. - Very nice! How high is the monthly basic rent? - The base rent is 650 euros, plus a 160 euro advance utility payment.",
                "vocabSupport": [
                    {
                        "word": "die Wohnfläche",
                        "translation": "living area"
                    },
                    {
                        "word": "der Südbalkon",
                        "translation": "south-facing balcony"
                    },
                    {
                        "word": "die Vorauszahlung",
                        "translation": "advance payment"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Wohnung hat eine Größe von _____ Quadratmetern.",
                    "sentenceEN": "The apartment has a size of _____ square meters.",
                    "target": "62",
                    "options": [
                        "62",
                        "45",
                        "90"
                    ]
                },
                "role": {
                    "speaker1": "Gibt es im Wohnhaus einen Aufzug oder muss man die Treppe nehmen?",
                    "speaker1EN": "Is there an elevator in the building or does one take the stairs?",
                    "options": [
                        "Ich gehe gerne sonntags im Park spazieren.",
                        "Ja, ein moderner Fahrstuhl fährt bis vor die Wohnungstür.",
                        "Mein Auto hat vier Winterreifen."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Die Einbauküche kostet 50 Euro monatlichen Aufpreis extra.",
                    "statementEN": "The fitted kitchen costs 50 euros monthly extra fee.",
                    "correct": false,
                    "explanation": "Falsch: Die Küche gehört zur Wohnung und kostet keinen Aufpreis."
                }
            },
            {
                "id": "a2_hoer_wohn_2",
                "title": "Mietbewerbung und Unterlagen",
                "titleEN": "Rental Application and Documents",
                "script": "Haben Sie großes Interesse an der Wohnung? - Ja absolut, die Lage und der Schnitt sind perfekt für mich! - Wunderbar. Für die Entscheidung der Eigentümer brauche ich Ihre ausgefüllte Mieterselbstauskunft, eine Kopie des Personalausweises, die letzten drei Gehaltsabrechnungen und eine Schufa-Auskunft. - Kann ich Ihnen alle Dokumente heute Abend per E-Mail als PDF senden? - Ja, das ist ideal. Wir treffen die Entscheidung bis Freitagmittag und melden uns telefonisch bei Ihnen.",
                "translation": "Do you have strong interest in the apartment? - Yes absolutely, the location and layout are perfect for me! - Wonderful. For the owners' decision I need your completed tenant disclosure, a copy of ID, the last 3 payslips, and a credit report. - Can I send you all documents tonight by email as PDF? - Yes, that is ideal. We will make the decision by Friday noon and contact you by phone.",
                "vocabSupport": [
                    {
                        "word": "der Schnitt der Wohnung",
                        "translation": "layout of the apartment"
                    },
                    {
                        "word": "die Gehaltsabrechnung",
                        "translation": "payslip / salary slip"
                    },
                    {
                        "word": "die Schufa-Auskunft",
                        "translation": "German credit rating report"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Makler benötigt Gehaltsabrechnungen der letzten _____ Monate.",
                    "sentenceEN": "The broker needs payslips of the last _____ months.",
                    "target": "drei",
                    "options": [
                        "sechs",
                        "drei",
                        "zwölf"
                    ]
                },
                "role": {
                    "speaker1": "Bis wann können Sie uns die Bewerbungsunterlagen zukommen lassen?",
                    "speaker1EN": "By when can you provide us with the application documents?",
                    "options": [
                        "Ich maile alle PDFs heute Abend direkt nach der Arbeit.",
                        "Ich trinke gerne heißen Kaffee.",
                        "Der Fernseher funktioniert einwandfrei."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Vermieter entscheidet erst in zwei Monaten über die Bewerbung.",
                    "statementEN": "The landlord decides only in two months about the application.",
                    "correct": false,
                    "explanation": "Falsch: Die Entscheidung fällt bis kommenden Freitagmittag."
                }
            }
        ]
    },
    "fahrschule": {
        "title": "Fahrschule & Führerschein",
        "titleEN": "Driving School & Driver's License",
        "emoji": "🚗",
        "warmup": {
            "vocab": [
                {
                    "word": "Fahrstunde",
                    "gender": "die",
                    "translation": "driving lesson",
                    "example": "Eine praktische Fahrstunde dauert fünfundvierzig Minuten.",
                    "exampleEN": "A practical driving lesson lasts 45 minutes."
                },
                {
                    "word": "Theorieprüfung",
                    "gender": "die",
                    "translation": "theory exam",
                    "example": "Vor der Fahrprüfung muss man die Theorieprüfung bestehen.",
                    "exampleEN": "Before the road test one must pass the theory exam."
                },
                {
                    "word": "Erste-Hilfe-Kurs",
                    "gender": "der",
                    "translation": "first aid course",
                    "example": "Für den Führerscheinantrag braucht man einen Erste-Hilfe-Kurs.",
                    "exampleEN": "For the driver's license application one needs a first aid course."
                },
                {
                    "word": "Sehtest",
                    "gender": "der",
                    "translation": "eye test",
                    "example": "Den Sehtest kann man bei jedem Optiker machen lassen.",
                    "exampleEN": "One can have the eye test done at any optician."
                },
                {
                    "word": "Sonderfahrten",
                    "gender": "die (Pl.)",
                    "translation": "special mandatory drives (highway/night)",
                    "example": "Zu den Pflichtstunden gehören Autobahn- und Nachtfahrten.",
                    "exampleEN": "Mandatory hours include highway and night driving."
                }
            ],
            "phrases": [
                {
                    "de": "Ich möchte mich für den Autoführerschein Klasse B anmelden.",
                    "en": "I would like to register for the car driver's license class B."
                },
                {
                    "de": "Wann finden die Theorieunterrichte unter der Woche statt?",
                    "en": "When do theory classes take place during the week?"
                },
                {
                    "de": "Gibt es eine Lern-App mit allen amtlichen Prüfungsfragen?",
                    "en": "Is there a learning app with all official exam questions?"
                },
                {
                    "de": "Haben Sie den Nachweis über den Sehtest und das Passbild dabei?",
                    "en": "Do you have the proof of eye test and the passport photo with you?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_fahr_1",
                "title": "Anmeldung in der Fahrschule",
                "titleEN": "Registration at Driving School",
                "script": "Guten Tag! Ich möchte meinen Führerschein der Klasse B machen und mich über die Kosten informieren. - Herzlich willkommen! Die Grundgebühr für den Theorieunterricht beträgt dreihundert Euro. Dazu kommen Lehrmaterialien und der Zugang zu unserer amtlichen Lern-App. - Wie oft findet die Theorie statt? - Jeden Dienstag und Donnerstag von 18 bis 20 Uhr. Insgesamt müssen Sie vierzehn Doppelstunden Theorie besuchen. - Und ab wann kann ich mit den praktischen Fahrstunden anfangen? - Sobald Sie etwa die Hälfte der Theoriestunden absolviert haben.",
                "translation": "Good day! I would like to do my class B driver's license and inquire about the costs. - Welcome! The base fee for theory instruction is 300 euros. Added to that are learning materials and access to our official exam app. - How often does theory take place? - Every Tuesday and Thursday from 6 to 8 pm. In total you must attend 14 double hours of theory. - And when can I start with practical driving lessons? - As soon as you have completed about half of the theory classes.",
                "vocabSupport": [
                    {
                        "word": "die Grundgebühr",
                        "translation": "basic enrollment fee"
                    },
                    {
                        "word": "die Doppelstunde",
                        "translation": "double period (90 minutes)"
                    },
                    {
                        "word": "absolvieren",
                        "translation": "to complete / graduate from"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Theorieunterricht findet dienstags und _____ abends statt.",
                    "sentenceEN": "The theory class takes place on Tuesdays and _____ evenings.",
                    "target": "donnerstags",
                    "options": [
                        "mittwochs",
                        "samstags",
                        "donnerstags"
                    ]
                },
                "role": {
                    "speaker1": "Haben Sie bereits den Erste-Hilfe-Kurs und den Sehtest gemacht?",
                    "speaker1EN": "Have you already done the first aid course and the eye test?",
                    "options": [
                        "Ich fahre lieber mit der Straßenbahn.",
                        "Ja, die beiden Bescheinigungen habe ich schon hier.",
                        "Das Auto hat eine blaue Farbe."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Fahrstunden darf man erst nach der bestandenen praktischen Prüfung nehmen.",
                    "statementEN": "Driving lessons may only be taken after passing the practical test.",
                    "correct": false,
                    "explanation": "Falsch: Man beginnt bereits nach der Hälfte des Theorieunterrichts mit praktischen Fahrstunden."
                }
            },
            {
                "id": "a2_hoer_fahr_2",
                "title": "Vorbereitung auf die Sonderfahrten",
                "titleEN": "Preparing for Special Drives",
                "script": "Hallo David! Dein Fahrlehrer Herr Meier meint, du beherrschst die Grundfahraufgaben im Stadtverkehr schon sehr sicher. - Das freut mich sehr! Was steht als Nächstes an? - Jetzt planen wir die zwölf gesetzlichen Sonderfahrten: fünf Überlandfahrten auf Landstraßen, vier Autobahnfahrten und drei Nachtfahrten im Dunkeln. - Können wir die Autobahnfahrt am kommenden Samstagvormittag machen? - Samstag passt prima. Wir treffen uns um 9 Uhr an der Fahrschule.",
                "translation": "Hello David! Your instructor Mr. Meier says you master the basic city driving tasks very safely already. - I am very glad to hear that! What is next on the schedule? - Now we schedule the 12 statutory special drives: 5 cross-country drives on country roads, 4 highway drives, and 3 night drives in the dark. - Can we do the highway drive next Saturday morning? - Saturday fits great. We meet at 9 am at the driving school.",
                "vocabSupport": [
                    {
                        "word": "die Sonderfahrten",
                        "translation": "mandatory special drives"
                    },
                    {
                        "word": "die Überlandfahrt",
                        "translation": "cross-country road drive"
                    },
                    {
                        "word": "der Stadtverkehr",
                        "translation": "city traffic"
                    }
                ],
                "fillBlank": {
                    "sentence": "Für den Führerschein sind gesetzlich vier _____ vorgeschrieben.",
                    "sentenceEN": "For the license, four _____ are legally required.",
                    "target": "Autobahnfahrten",
                    "options": [
                        "Autobahnfahrten",
                        "Flugstunden",
                        "Parkprüfungen"
                    ]
                },
                "role": {
                    "speaker1": "Passt dir der Termin für die Nachtfahrt nächsten Mittwoch um 21 Uhr?",
                    "speaker1EN": "Does the appointment for the night drive next Wednesday at 9 pm suit you?",
                    "options": [
                        "Ja, um 21 Uhr habe ich Zeit und bin ausgeruht.",
                        "Mein Fahrrad hat einen Platten.",
                        "Im Supermarkt gibt es frische Äpfel."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "David muss für die Nachtfahrten tagsüber bei Sonnenlicht üben.",
                    "statementEN": "David must practice for night drives during the day in sunlight.",
                    "correct": false,
                    "explanation": "Falsch: Nachtfahrten finden gesetzlich vorgeschrieben bei Dunkelheit statt."
                }
            }
        ]
    },
    "zeitung": {
        "title": "Zeitungskiosk & Paketabholung",
        "titleEN": "Newsstand & Parcel Pickup Station",
        "emoji": "📰",
        "warmup": {
            "vocab": [
                {
                    "word": "Tageszeitung",
                    "gender": "die",
                    "translation": "daily newspaper",
                    "example": "Mein Großvater liest morgens die regionale Tageszeitung.",
                    "exampleEN": "My grandfather reads the regional daily newspaper in the morning."
                },
                {
                    "word": "Zeitschrift",
                    "gender": "die",
                    "translation": "magazine",
                    "example": "Im Kiosk gibt es Zeitschriften über Reisen und Garten.",
                    "exampleEN": "At the kiosk there are magazines about travel and garden."
                },
                {
                    "word": "Paketschein",
                    "gender": "der",
                    "translation": "parcel slip / collection card",
                    "example": "Mit dem Paketschein und Ausweis hole ich meine Sendung ab.",
                    "exampleEN": "With the parcel slip and ID card I pick up my parcel."
                },
                {
                    "word": "Briefmarke",
                    "gender": "die",
                    "translation": "postage stamp",
                    "example": "Ich brauche eine Briefmarke für einen Standardbrief nach Österreich.",
                    "exampleEN": "I need a postage stamp for a standard letter to Austria."
                },
                {
                    "word": "Guthabenkarte",
                    "gender": "die",
                    "translation": "prepaid top-up card",
                    "example": "Haben Sie eine Guthabenkarte für mein Mobilfunknetz?",
                    "exampleEN": "Do you have a top-up card for my mobile network?"
                }
            ],
            "phrases": [
                {
                    "de": "Ich habe eine Benachrichtigungskarte für ein Paket im Briefkasten gefunden.",
                    "en": "I found a notification card for a package in my mailbox."
                },
                {
                    "de": "Haben Sie die aktuelle Ausgabe des Magazins Der Spiegel?",
                    "en": "Do you have the current edition of the magazine Der Spiegel?"
                },
                {
                    "de": "Ich möchte diesen gepolsterten Umschlag per Einschreiben verschicken.",
                    "en": "I would like to send this padded envelope by registered mail."
                },
                {
                    "de": "Geben Sie mir bitte noch ein Streifenticket für den öffentlichen Nahverkehr.",
                    "en": "Please also give me a strip ticket for local public transport."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_kiosk_1",
                "title": "Zeitungen und Fahrscheine",
                "titleEN": "Newspapers and Transit Tickets",
                "script": "Guten Morgen! Was darf es sein? - Guten Morgen. Ich hätte gerne die Süddeutsche Zeitung und das neue Computermagazin. - Bitte sehr, das Magazin liegt direkt hier vorn. Brauchen Sie noch etwas? - Ja, verkaufen Sie auch Tageskarten für die Straßenbahn? - Ja, wir haben Einzeltickets, Streifenkarten und Tagestickets. Das Tagesticket für die Innenstadt kostet 8,80 Euro. - Wunderbar, ein Tagesticket bitte. - Das macht zusammen fünfzehn Euro und vierzig Cent.",
                "translation": "Good morning! What can I get you? - Good morning. I would like the Süddeutsche Zeitung and the new computer magazine. - Here you go, the magazine is right here in front. Do you need anything else? - Yes, do you also sell day passes for the tram? - Yes, we have single tickets, strip cards, and day passes. The day pass for downtown costs 8.80 euros. - Wonderful, one day pass please. - That makes 15 euros and 40 cents altogether.",
                "vocabSupport": [
                    {
                        "word": "das Tagesticket",
                        "translation": "day pass / day transit ticket"
                    },
                    {
                        "word": "die Innenstadt",
                        "translation": "city center / downtown"
                    },
                    {
                        "word": "die Einzelfahrt",
                        "translation": "single ride"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das Tagesticket für die Straßenbahn kostet _____ Euro.",
                    "sentenceEN": "The day transit pass for the tram costs _____ euros.",
                    "target": "8,80",
                    "options": [
                        "8,80",
                        "4,20",
                        "12,50"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie eine Papiertüte für die Zeitschriften haben?",
                    "speaker1EN": "Would you like a paper bag for the magazines?",
                    "options": [
                        "Nein danke, ich stecke sie direkt in meine Tasche.",
                        "Der Zug fährt nach Berlin.",
                        "Ich habe heute um 14 Uhr Feierabend."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Am Kiosk kann man keine Fahrscheine für den Nahverkehr kaufen.",
                    "statementEN": "At the kiosk one cannot purchase transit tickets for local transport.",
                    "correct": false,
                    "explanation": "Falsch: Der Verkäufer bietet Einzeltickets, Streifenkarten und Tagestickets an."
                }
            },
            {
                "id": "a2_hoer_kiosk_2",
                "title": "Paket mit Abholschein abholen",
                "titleEN": "Collecting Parcel with Notification Slip",
                "script": "Hallo, der Postbote hat gestern ein Paket bei Ihnen abgegeben, weil ich nicht zu Hause war. Hier ist mein Abholschein. - Hallo! Zeigen Sie mir bitte kurz Ihren Ausweis zum Abgleich des Namens. - Ja natürlich, hier ist mein Personalausweis. - Danke, Frau Lehmann. Ich hole das Paket kurz aus dem Lager... So, hier ist der Karton. Bitte unterschreiben Sie einmal hier auf dem digitalen Scanner. - Erledigt. Herzlichen Dank!",
                "translation": "Hello, the courier left a parcel at your shop yesterday because I wasn't home. Here is my pickup slip. - Hello! Please show me your ID briefly to check the name. - Yes of course, here is my ID card. - Thank you, Ms. Lehmann. I will quickly fetch the parcel from storage... So, here is the box. Please sign once right here on the digital scanner. - Done. Thank you very much!",
                "vocabSupport": [
                    {
                        "word": "der Abholschein",
                        "translation": "parcel notification / pickup slip"
                    },
                    {
                        "word": "der Abgleich",
                        "translation": "verification / comparison"
                    },
                    {
                        "word": "das Lager",
                        "translation": "backroom / storage"
                    }
                ],
                "fillBlank": {
                    "sentence": "Zum Abholen des Pakets muss die Kundin ihren _____ vorzeigen.",
                    "sentenceEN": "To pick up the parcel, the customer must show her _____.",
                    "target": "Personalausweis",
                    "options": [
                        "Fahrschein",
                        "Einkaufszettel",
                        "Personalausweis"
                    ]
                },
                "role": {
                    "speaker1": "Können Sie bitte auf dem Scanner für den Empfang unterschreiben?",
                    "speaker1EN": "Could you please sign on the scanner for receipt?",
                    "options": [
                        "Ja sicher, mit dem Stift hier direkt auf dem Display.",
                        "Der Postbote kommt morgen früh um 8 Uhr.",
                        "Ich trinke Mineralwasser ohne Sprudel."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Kundin darf das Paket ohne Ausweis und ohne Unterschrift mitnehmen.",
                    "statementEN": "The customer may take the parcel without ID and without signature.",
                    "correct": false,
                    "explanation": "Falsch: Der Mitarbeiter verlangt den Ausweis und eine Unterschrift auf dem Scanner."
                }
            }
        ]
    },
    "zahnarzt": {
        "title": "Zahnarzt & Kontrolltermin",
        "titleEN": "Dentist & Dental Checkup",
        "emoji": "🦷",
        "warmup": {
            "vocab": [
                {
                    "word": "Zahnschmerzen",
                    "gender": "die (Pl.)",
                    "translation": "toothache",
                    "example": "Seit gestern Abend habe ich pochende Zahnschmerzen im Backenzahn.",
                    "exampleEN": "Since yesterday evening I have throbbing toothache in the molar."
                },
                {
                    "word": "Versichertenkarte",
                    "gender": "die",
                    "translation": "health insurance card",
                    "example": "Legen Sie bitte Ihre elektronische Versichertenkarte vor.",
                    "exampleEN": "Please present your electronic health insurance card."
                },
                {
                    "word": "Professionelle Zahnreinigung",
                    "gender": "die",
                    "translation": "professional dental cleaning (PZR)",
                    "example": "Die professionelle Zahnreinigung wird zweimal jährlich empfohlen.",
                    "exampleEN": "Professional dental cleaning is recommended twice a year."
                },
                {
                    "word": "Betäubungsspritze",
                    "gender": "die",
                    "translation": "anesthetic injection / numbing shot",
                    "example": "Möchten Sie vor der Behandlung eine kleine Betäubungsspritze?",
                    "exampleEN": "Would you like a small numbing injection before the treatment?"
                },
                {
                    "word": "Wartezimmer",
                    "gender": "das",
                    "translation": "waiting room",
                    "example": "Nehmen Sie bitte noch kurz im Wartezimmer Platz.",
                    "exampleEN": "Please take a seat in the waiting room for a short moment."
                }
            ],
            "phrases": [
                {
                    "de": "Ich habe seit zwei Tagen starke Schmerzen beim Kauen auf der rechten Seite.",
                    "en": "I have had severe pain when chewing on the right side for two days."
                },
                {
                    "de": "Haben Sie heute Vormittag einen Notfalltermin frei?",
                    "en": "Do you have an emergency appointment available this morning?"
                },
                {
                    "de": "Spülen Sie Ihren Mund bitte einmal gründlich mit warmem Wasser aus.",
                    "en": "Please rinse your mouth thoroughly once with warm water."
                },
                {
                    "de": "Wann war Ihre letzte Routineuntersuchung beim Zahnarzt?",
                    "en": "When was your last routine dental checkup?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_zahn_1",
                "title": "Akuter Notfalltermin am Telefon",
                "titleEN": "Acute Emergency Appointment on Phone",
                "script": "Zahnarztpraxis Dr. Bergmann, guten Tag! - Guten Tag, mein Name ist Thomas Weber. Mir ist gestern beim Essen ein Stück vom Zahn abgebrochen und ich habe Schmerzen. Kann ich heute vorbeikommen? - Oh je, Herr Weber. Wir haben heute volles Haus, aber für Notfälle schieben wir Sie gerne dazwischen. Können Sie um elf Uhr dreißig bei uns sein? - Ja, elf Uhr dreißig schaffe ich problemlos. - Prima. Bringen Sie bitte Ihre Krankenkassenkarte mit und stellen Sie sich auf eine kurze Wartezeit ein.",
                "translation": "Dental Practice Dr. Bergmann, good day! - Good day, my name is Thomas Weber. A piece of my tooth broke off while eating yesterday and I have pain. Can I come by today? - Oh dear, Mr. Weber. We are fully booked today, but for emergencies we will gladly squeeze you in. Can you be with us at 11:30? - Yes, I can manage 11:30 easily. - Great. Please bring your health insurance card and be prepared for a short wait.",
                "vocabSupport": [
                    {
                        "word": "dazwischenschieben",
                        "translation": "to squeeze in / fit in between"
                    },
                    {
                        "word": "abbrechen",
                        "translation": "to break off"
                    },
                    {
                        "word": "die Krankenkassenkarte",
                        "translation": "health insurance card"
                    }
                ],
                "fillBlank": {
                    "sentence": "Herr Weber hat einen Notfalltermin um _____ Uhr bekommen.",
                    "sentenceEN": "Mr. Weber got an emergency appointment at _____ o'clock.",
                    "target": "11:30",
                    "options": [
                        "14:00",
                        "11:30",
                        "08:15"
                    ]
                },
                "role": {
                    "speaker1": "Haben Sie heute vor dem Notfalltermin Schmerzmittel eingenommen?",
                    "speaker1EN": "Did you take painkillers before the emergency appointment today?",
                    "options": [
                        "Ich habe heute Morgen eine Tablette Ibuprofen genommen.",
                        "Der Zahnarzt wohnt in der Nähe des Bahnhofs.",
                        "Das Wetter ist heute bewölkt."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Praxis weist den Patienten ab und vergibt erst nächste Woche einen Termin.",
                    "statementEN": "The practice turns the patient away and gives an appointment only next week.",
                    "correct": false,
                    "explanation": "Falsch: Die Praxis schiebt den Notfallpatienten heute um 11:30 Uhr dazwischen."
                }
            },
            {
                "id": "a2_hoer_zahn_2",
                "title": "Routinekontrolle & Zahnstein",
                "titleEN": "Routine Checkup & Tartar",
                "script": "So, Herr Weber, bitte einmal weit den Mund öffnen. Beißen Sie bitte zusammen... Danke. Das sieht soweit sehr gesund aus! Kein Karies am Backenzahn. Es hat sich lediglich etwas Zahnstein an den unteren Schneidezähnen gebildet. - Sollte ich den Zahnstein entfernen lassen? - Ja, wir machen das gleich schnell und schmerzfrei mit Ultraschall. Und ich empfehle Ihnen im Herbst eine professionelle Zahnreinigung. - Sehr gerne, vereinbaren wir den Termin direkt am Empfang.",
                "translation": "Now, Mr. Weber, please open your mouth wide once. Please bite together... Thank you. That looks very healthy so far! No decay on the molar. Only a little tartar has formed on the lower incisors. - Should I have the tartar removed? - Yes, we can do that right away quickly and painlessly with ultrasound. And I recommend a professional dental cleaning in autumn. - With pleasure, let's arrange the appointment right at the reception.",
                "vocabSupport": [
                    {
                        "word": "der Zahnstein",
                        "translation": "tartar / calculus"
                    },
                    {
                        "word": "die Schneidezähne",
                        "translation": "incisors"
                    },
                    {
                        "word": "der Ultraschall",
                        "translation": "ultrasound"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Zahnarzt stellt fest, dass der Patient keine _____ hat.",
                    "sentenceEN": "The dentist notes that the patient has no _____.",
                    "target": "Karies",
                    "options": [
                        "Zähne",
                        "Karies",
                        "Versicherung"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie einen Termin für die professionelle Zahnreinigung im Oktober buchen?",
                    "speaker1EN": "Would you like to book an appointment for dental cleaning in October?",
                    "options": [
                        "Der Bus kommt in fünf Minuten.",
                        "Ja gerne, am besten an einem Freitagnachmittag.",
                        "Ich trage Schuhe in Größe 42."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Der Zahnarzt findet tiefe Karies und muss drei Zähne ziehen.",
                    "statementEN": "The dentist finds deep decay and has to pull three teeth.",
                    "correct": false,
                    "explanation": "Falsch: Die Zähne sind gesund, es muss lediglich etwas Zahnstein entfernt werden."
                }
            }
        ]
    },
    "baumarkt": {
        "title": "Baumarkt & Renovierung",
        "titleEN": "Hardware Store & Home Renovation",
        "emoji": "🔨",
        "warmup": {
            "vocab": [
                {
                    "word": "Wandfarbe",
                    "gender": "die",
                    "translation": "wall paint",
                    "example": "Für das Wohnzimmer kaufen wir weiße matte Wandfarbe.",
                    "exampleEN": "For the living room we buy white matte wall paint."
                },
                {
                    "word": "Farbroller",
                    "gender": "der",
                    "translation": "paint roller",
                    "example": "Mit dem Teleskopstab und Farbroller streicht man hohe Decken.",
                    "exampleEN": "With the extension pole and paint roller one paints high ceilings."
                },
                {
                    "word": "Holzzuschnitt",
                    "gender": "der",
                    "translation": "custom wood cutting",
                    "example": "Beim Holzzuschnitt schneidet der Mitarbeiter die Bretter millimetergenau.",
                    "exampleEN": "At wood cutting the employee cuts the boards to the millimeter."
                },
                {
                    "word": "Dübel",
                    "gender": "der",
                    "translation": "wall plug / anchor",
                    "example": "Für schwere Regale an Betonwänden braucht man 8er-Dübel.",
                    "exampleEN": "For heavy shelves on concrete walls one needs size 8 wall plugs."
                },
                {
                    "word": "Bohrmaschine",
                    "gender": "die",
                    "translation": "drilling machine / power drill",
                    "example": "Kann man im Baumarkt eine Schlagbohrmaschine für das Wochenende leihen?",
                    "exampleEN": "Can one rent an impact drill for the weekend at the hardware store?"
                }
            ],
            "phrases": [
                {
                    "de": "In welchem Gang finde ich Malerband und Abdeckfolie?",
                    "en": "In which aisle do I find painter's tape and protective sheeting?"
                },
                {
                    "de": "Reicht ein Zehn-Liter-Eimer Farbe für ungefähr sechzig Quadratmeter Wandfläche?",
                    "en": "Does a 10-liter bucket of paint suffice for around 60 square meters of wall?"
                },
                {
                    "de": "Können Sie mir diese Holzplatte auf achtzig mal vierzig Zentimeter zuschneiden?",
                    "en": "Can you cut this wooden board down to 80 by 40 centimeters for me?"
                },
                {
                    "de": "Gibt es auf das Elektrowerkzeug eine Herstellergarantie von fünf Jahren?",
                    "en": "Is there a 5-year manufacturer warranty on the power tool?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_bau_1",
                "title": "Beratung in der Farbenabteilung",
                "titleEN": "Advice in the Paint Department",
                "script": "Entschuldigung, können Sie mir helfen? Ich möchte mein Schlafzimmer renovieren. - Sehr gerne! Welche Wandfarbe stellen Sie sich vor? - Ich suche ein warmes Hellgrau oder Salbeigrün. - Da haben wir unsere neue Bio-Wandfarbe mit hoher Deckkraft. Wir können Ihnen jeden beliebigen Farbton an unserer Farbmischstation innerhalb von fünf Minuten exakt anmischen. - Klasse! Wie viel Farbe brauche ich für etwa dreißig Quadratmeter? - Ein Fünf-Liter-Eimer reicht dafür völlig aus, selbst wenn Sie zweimal streichen.",
                "translation": "Excuse me, can you help me? I want to renovate my bedroom. - Gladly! What wall paint do you have in mind? - I'm looking for a warm light grey or sage green. - We have our new organic wall paint with high coverage. We can mix any desired shade exactly on our paint mixing station within 5 minutes. - Great! How much paint do I need for about 30 square meters? - A 5-liter bucket is completely sufficient for that, even if you paint twice.",
                "vocabSupport": [
                    {
                        "word": "die Farbmischstation",
                        "translation": "paint mixing machine/counter"
                    },
                    {
                        "word": "die Deckkraft",
                        "translation": "opacity / coverage"
                    },
                    {
                        "word": "anmischen",
                        "translation": "to mix paint"
                    }
                ],
                "fillBlank": {
                    "sentence": "Für dreißig Quadratmeter Wand reicht ein _____-Liter-Eimer Farbe.",
                    "sentenceEN": "For 30 square meters of wall, a _____-liter bucket of paint suffices.",
                    "target": "Fünf",
                    "options": [
                        "Fünf",
                        "Zwanzig",
                        "Fünfzig"
                    ]
                },
                "role": {
                    "speaker1": "Brauchen Sie noch Kreppband zum Abkleben von Fußleisten und Fenstern?",
                    "speaker1EN": "Do you also need painter's tape for masking baseboards and windows?",
                    "options": [
                        "Ja, packen Sie bitte zwei Rollen Maler-Kreppband dazu.",
                        "Ich fliege nächste Woche nach Spanien.",
                        "Die Suppe schmeckt sehr salzig."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde muss die Farbe im Internet bestellen und drei Wochen warten.",
                    "statementEN": "The customer must order the paint online and wait 3 weeks.",
                    "correct": false,
                    "explanation": "Falsch: Die Farbe wird innerhalb von 5 Minuten direkt an der Farbmischstation angemischt."
                }
            },
            {
                "id": "a2_hoer_bau_2",
                "title": "Zuschnitt und Geräteverleih",
                "titleEN": "Wood Cutting and Tool Rental",
                "script": "Guten Tag, schneiden Sie diese Küchenarbeitsplatte auf zweihundertvierzig Zentimeter zu? - Guten Tag! Ja natürlich, der Zuschnitt von geraden Kanten ist bei uns sogar kostenlos. - Das ist ja spitze! Und verleihen Sie auch Werkzeuge? Ich müsste Löcher für Schwerlastdübel in eine Betonwand bohren. - Ja, wir vermieten professionelle Akku-Bohrhämmer. Der Tagessatz liegt bei achtzehn Euro, plus fünfzig Euro Kaution. - Ausgezeichnet, den Bohrhammer nehme ich bis morgen Nachmittag mit.",
                "translation": "Good day, do you cut this kitchen countertop down to 240 centimeters? - Good day! Yes of course, cutting straight edges is even free of charge with us. - That is awesome! And do you also rent tools? I need to drill holes for heavy-duty anchors into a concrete wall. - Yes, we rent professional cordless rotary hammers. The daily rate is 18 euros, plus 50 euros deposit. - Excellent, I will take the rotary hammer until tomorrow afternoon.",
                "vocabSupport": [
                    {
                        "word": "die Küchenarbeitsplatte",
                        "translation": "kitchen countertop"
                    },
                    {
                        "word": "der Bohrhammer",
                        "translation": "rotary hammer drill"
                    },
                    {
                        "word": "der Tagessatz",
                        "translation": "daily rental rate"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Tagessatz für den Bohrhammer beträgt _____ Euro.",
                    "sentenceEN": "The daily rate for the rotary hammer is _____ euros.",
                    "target": "achtzehn",
                    "options": [
                        "achtzig",
                        "achtzehn",
                        "hundert"
                    ]
                },
                "role": {
                    "speaker1": "Bringen Sie den Bohrhammer morgen bis 18 Uhr gereinigt zurück?",
                    "speaker1EN": "Will you bring the hammer drill back cleaned tomorrow by 6 pm?",
                    "options": [
                        "Ich habe im Garten Blumen gepflanzt.",
                        "Ja, ich bringe das Gerät pünktlich vor Geschäftsschluss zurück.",
                        "Der Bahnhof liegt im Stadtzentrum."
                    ],
                    "correct": 1
                },
                "trueFalse": {
                    "statement": "Der Holzzuschnitt kostet 50 Euro extra Gebühr pro Schnitt.",
                    "statementEN": "Wood cutting costs an extra 50 euro fee per cut.",
                    "correct": false,
                    "explanation": "Falsch: Der Zuschnitt von geraden Kanten ist im Baumarkt kostenlos."
                }
            }
        ]
    },
    "museum": {
        "title": "Museum & Kunstausstellung",
        "titleEN": "Museum & Art Exhibition",
        "emoji": "🎨",
        "warmup": {
            "vocab": [
                {
                    "word": "Eintrittskarte",
                    "gender": "die",
                    "translation": "entry ticket",
                    "example": "Die Eintrittskarte gilt für alle Dauerausstellungen.",
                    "exampleEN": "The entrance ticket is valid for all permanent exhibitions."
                },
                {
                    "word": "Ermäßigung",
                    "gender": "die",
                    "translation": "discount / concession",
                    "example": "Studenten und Senioren erhalten 50 Prozent Ermäßigung.",
                    "exampleEN": "Students and seniors receive a 50 percent discount."
                },
                {
                    "word": "Garderobe",
                    "gender": "die",
                    "translation": "cloakroom",
                    "example": "Rucksäcke und Schirme müssen an der Garderobe abgegeben werden.",
                    "exampleEN": "Backpacks and umbrellas must be left at the cloakroom."
                },
                {
                    "word": "Audioguide",
                    "gender": "der",
                    "translation": "audio guide",
                    "example": "Der Audioguide führt Besucher in sechs Sprachen durch die Galerie.",
                    "exampleEN": "The audio guide guides visitors through the gallery in 6 languages."
                },
                {
                    "word": "Führung",
                    "gender": "die",
                    "translation": "guided tour",
                    "example": "Um 14 Uhr startet eine öffentliche Führung mit der Kuratorin.",
                    "exampleEN": "At 2 pm a public guided tour with the curator begins."
                }
            ],
            "phrases": [
                {
                    "de": "Gibt es einen Rabatt für Familien oder Studierende?",
                    "en": "Is there a discount for families or students?"
                },
                {
                    "de": "Darf man in den Ausstellungsräumen ohne Blitzlicht fotografieren?",
                    "en": "Is one allowed to take photos in the exhibition rooms without flash?"
                },
                {
                    "de": "Wo befindet sich der Eingang zur Sonderausstellung der Impressionisten?",
                    "en": "Where is the entrance to the Impressionists special exhibition?"
                },
                {
                    "de": "Bitte berühren Sie die Kunstwerke und Skulpturen nicht.",
                    "en": "Please do not touch the artworks and sculptures."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_mus_1",
                "title": "An der Museumskasse",
                "titleEN": "At the Museum Ticket Desk",
                "script": "Guten Tag, zwei Tickets für die Dauerausstellung bitte. - Guten Tag! Sind Sie Studierende oder Rentner? Wir bieten ermäßigte Karten an. - Meine Begleiterin studiert an der Universität, hier ist ihr Studentenausweis. Ich zahle den Normalpreis. - Sehr gern. Das macht zwölf Euro für das reguläre Ticket und sechs Euro für das ermäßigte Ticket, also zusammen achtzehn Euro. - Ist der Audioguide im Preis inbegriffen? - Ja, Sie können den Audioguide über unsere Museums-App kostenlos auf Ihr Smartphone laden oder am Schalter ein Leihgerät gegen Pfand mitnehmen.",
                "translation": "Good day, two tickets for the permanent exhibition please. - Good day! Are you students or retirees? We offer discounted tickets. - My companion studies at university, here is her student ID. I will pay standard price. - Gladly. That makes 12 euros for regular ticket and 6 euros for discounted ticket, so 18 euros total. - Is the audio guide included in the price? - Yes, you can download the audio guide via our museum app free of charge to your smartphone or borrow a device at the desk against deposit.",
                "vocabSupport": [
                    {
                        "word": "der Normalpreis",
                        "translation": "regular standard price"
                    },
                    {
                        "word": "das Leihgerät",
                        "translation": "loaner device"
                    },
                    {
                        "word": "die Dauerausstellung",
                        "translation": "permanent exhibition"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das ermäßigte Studententicket kostet _____ Euro.",
                    "sentenceEN": "The discounted student ticket costs _____ euros.",
                    "target": "sechs",
                    "options": [
                        "zwölf",
                        "sechs",
                        "zwanzig"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie einen gedruckten Lageplan der Museumsräume mitnehmen?",
                    "speaker1EN": "Would you like to take a printed floor plan of museum galleries?",
                    "options": [
                        "Ja gerne, damit wir uns im zweiten Stock besser orientieren können.",
                        "Ich kaufe morgen neue Winterstiefel.",
                        "Das Museum hat keine Fenster."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Beide Besucher müssen den vollen Preis ohne jeden Rabatt bezahlen.",
                    "statementEN": "Both visitors must pay full price without any discount.",
                    "correct": false,
                    "explanation": "Falsch: Für die Studentin gibt es 50 % Ermäßigung für 6 Euro."
                }
            },
            {
                "id": "a2_hoer_mus_2",
                "title": "Teilnahme an der Kunstführung",
                "titleEN": "Participating in Art Tour",
                "script": "Hallo, beginnt hier gleich die Führung durch die Skulpturenausstellung? - Ja genau! Um vierzehn Uhr geht es los. Die Tour dauert circa fünfundvierzig Minuten. - Müssen wir dafür extra bezahlen? - Nein, die Sonntagsführung ist im Eintrittspreis enthalten. Bitte schalten Sie Ihre Mobiltelefone auf lautlos. Große Taschen müssen vorher in den Schließfächern im Untergeschoss eingeschlossen werden. - Alles klar, ich schließe meine Reisetasche schnell noch ein.",
                "translation": "Hello, does the guided tour through the sculpture exhibition start here? - Yes exactly! It kicks off at 2 pm. The tour lasts about 45 minutes. - Do we have to pay extra for that? - No, the Sunday tour is included in the admission price. Please switch your mobile phones to silent mode. Large bags must be locked in the lockers in the basement beforehand. - Alright, I will quickly lock away my travel bag.",
                "vocabSupport": [
                    {
                        "word": "die Skulpturenausstellung",
                        "translation": "sculpture exhibition"
                    },
                    {
                        "word": "auf lautlos schalten",
                        "translation": "to switch to silent mode"
                    },
                    {
                        "word": "das Schließfach",
                        "translation": "locker"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Führung durch die Ausstellung dauert ungefähr _____ Minuten.",
                    "sentenceEN": "The tour through the exhibition lasts approximately _____ minutes.",
                    "target": "fünfundvierzig",
                    "options": [
                        "fünfundvierzig",
                        "zehn",
                        "neunzig"
                    ]
                },
                "role": {
                    "speaker1": "Haben Sie Ihre Wertsachen aus der abgegebenen Tasche herausgenommen?",
                    "speaker1EN": "Did you take your valuables out of the deposited bag?",
                    "options": [
                        "Ja, Geldbörse und Schlüssel habe ich in der Jackentasche.",
                        "Der Kaffee im Bistro ist kalt.",
                        "Wir fahren mit dem ICE nach Hamburg."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Man darf mit riesigen Reisetaschen an der Kunstführung teilnehmen.",
                    "statementEN": "One is allowed to attend the art tour with huge travel bags.",
                    "correct": false,
                    "explanation": "Falsch: Große Taschen müssen in den Schließfächern im Untergeschoss deponiert werden."
                }
            }
        ]
    },
    "cafe": {
        "title": "Café & Konditorei",
        "titleEN": "Café & Confectionery",
        "emoji": "☕",
        "warmup": {
            "vocab": [
                {
                    "word": "Milchschaum",
                    "gender": "der",
                    "translation": "milk froth",
                    "example": "Ein Cappuccino mit cremigem Milchschaum schmeckt herrlich.",
                    "exampleEN": "A cappuccino with creamy milk froth tastes wonderful."
                },
                {
                    "word": "Hafermilch",
                    "gender": "die",
                    "translation": "oat milk",
                    "example": "Ich trinke meinen Flat White gerne mit Hafermilch.",
                    "exampleEN": "I like drinking my flat white with oat milk."
                },
                {
                    "word": "hausgemacht",
                    "gender": "adj.",
                    "translation": "homemade",
                    "example": "Alle Kuchen und Torten in diesem Café sind frisch hausgemacht.",
                    "exampleEN": "All cakes and tarts in this cafe are freshly homemade."
                },
                {
                    "word": "Außenterrasse",
                    "gender": "die",
                    "translation": "outdoor terrace",
                    "example": "Bei Sonnenschein sitzen die Gäste auf der Außenterrasse.",
                    "exampleEN": "When the sun shines guests sit on the outdoor terrace."
                },
                {
                    "word": "Trinkgeld",
                    "gender": "das",
                    "translation": "tip / gratuity",
                    "example": "In Deutschland gibt man üblicherweise fünf bis zehn Prozent Trinkgeld.",
                    "exampleEN": "In Germany one customarily gives 5 to 10 percent tip."
                }
            ],
            "phrases": [
                {
                    "de": "Ist dieser Tisch am Fenster noch frei oder schon reserviert?",
                    "en": "Is this table by the window still free or already reserved?"
                },
                {
                    "de": "Ich nehme ein Stück Schwarzwälder Kirschtorte und einen großen Milchkaffee.",
                    "en": "I'll take a slice of Black Forest gateau and a large café au lait."
                },
                {
                    "de": "Wir möchten bitte bezahlen, gerne getrennt auf zwei Rechnungen.",
                    "en": "We would like to pay please, gladly split onto two bills."
                },
                {
                    "de": "Können wir den Kuchen auch zum Mitnehmen einpacken lassen?",
                    "en": "Can we also have the cake packed to take away?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_cafe_1",
                "title": "Bestellung auf der Café-Terrasse",
                "titleEN": "Ordering on the Café Terrace",
                "script": "Schönen Nachmittag! Haben Sie sich schon etwas Leckeres ausgesucht? - Ja gerne! Ich hätte bitte einen großen Cappuccino, aber wenn möglich mit Hafermilch. - Sehr gern, Hafermilch haben wir da. Und für Sie? - Für mich bitte eine Kanne Pfefferminztee und ein Stück von dem gedeckten Apfelkuchen mit Vanilleeis. - Möchten Sie auf den Apfelkuchen auch noch etwas Schlagsahne? - Ein kleiner Klecks Sahne wäre wunderbar, danke!",
                "translation": "Pleasant afternoon! Have you already picked out something tasty? - Yes gladly! I would please like a large cappuccino, but if possible with oat milk. - Very gladly, we have oat milk. And for you? - For me please a pot of peppermint tea and a slice of Dutch apple pie with vanilla ice cream. - Would you also like some whipped cream on the apple pie? - A small dollop of cream would be wonderful, thank you!",
                "vocabSupport": [
                    {
                        "word": "die Hafermilch",
                        "translation": "oat milk"
                    },
                    {
                        "word": "die Kanne Tee",
                        "translation": "pot of tea"
                    },
                    {
                        "word": "die Schlagsahne",
                        "translation": "whipped cream"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Gast bestellt seinen Cappuccino mit _____ anstelle von Kuhmilch.",
                    "sentenceEN": "The guest orders his cappuccino with _____ instead of cow's milk.",
                    "target": "Hafermilch",
                    "options": [
                        "Sojajoghurt",
                        "Zitronensaft",
                        "Hafermilch"
                    ]
                },
                "role": {
                    "speaker1": "Darf ich Ihnen noch ein Glas Leitungswasser zum Espresso bringen?",
                    "speaker1EN": "May I bring you a glass of tap water with the espresso?",
                    "options": [
                        "Ja bitte, das wäre sehr aufmerksam von Ihnen.",
                        "Mein Fahrrad steht vor dem Rathaus.",
                        "Der Winter in Deutschland ist kalt."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Das Café hat keine pflanzliche Milchalternative im Angebot.",
                    "statementEN": "The café has no plant-based milk alternative on offer.",
                    "correct": false,
                    "explanation": "Falsch: Die Kellnerin bestätigt sofort: 'Sehr gern, Hafermilch haben wir da'."
                }
            },
            {
                "id": "a2_hoer_cafe_2",
                "title": "Zahlen und Trinkgeld geben",
                "titleEN": "Paying and Tipping",
                "script": "Entschuldigung, wir würden gerne zahlen! - Sehr gerne! Zusammen oder getrennt? - Getrennt bitte. Was macht mein Cappuccino und der Apfelkuchen? - Das macht zusammen acht Euro vierzig. - Machen Sie bitte zehn Euro glatt, der Rest ist für Sie. - Vielen Dank! Und bei Ihnen, Herrschaften: Die Kanne Tee macht vier Euro zwanzig. - Hier sind fünf Euro, stimmt so! - Herzlichen Dank für Ihren Besuch und einen schönen sonnigen Nachmittag!",
                "translation": "Excuse me, we would like to pay! - With pleasure! Together or split? - Split please. How much is my cappuccino and the apple pie? - That makes 8 euros 40 altogether. - Please make it an even 10 euros, the rest is for you. - Thank you very much! And for you, gentlemen: The pot of tea is 4 euros 20. - Here is 5 euros, keep the change! - Many thanks for your visit and have a sunny afternoon!",
                "vocabSupport": [
                    {
                        "word": "getrennt zahlen",
                        "translation": "to pay separately"
                    },
                    {
                        "word": "glatt machen",
                        "translation": "to round up to an even amount"
                    },
                    {
                        "word": "stimmt so",
                        "translation": "keep the change"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der erste Gast rundet von acht Euro vierzig auf _____ Euro auf.",
                    "sentenceEN": "The first guest rounds up from 8.40 euros to _____ euros.",
                    "target": "zehn",
                    "options": [
                        "zwanzig",
                        "zehn",
                        "fünfzehn"
                    ]
                },
                "role": {
                    "speaker1": "Brauchen Sie noch eine Quittung für das Finanzamt?",
                    "speaker1EN": "Do you still need a receipt for tax purposes?",
                    "options": [
                        "Nein danke, ein Beleg ist nicht nötig.",
                        "Ich reise im Juli nach Italien.",
                        "Die Straßenbahn fährt um 17 Uhr."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Gäste verlangen jeden Cent Rückgeld und geben kein Trinkgeld.",
                    "statementEN": "The guests demand every cent in change and leave no tip.",
                    "correct": false,
                    "explanation": "Falsch: Beide Gäste runden auf und geben freundlich Trinkgeld ('stimmt so')."
                }
            }
        ]
    },
    "schuhladen": {
        "title": "Schuhgeschäft & Anprobe",
        "titleEN": "Shoe Store & Fitting",
        "emoji": "👟",
        "warmup": {
            "vocab": [
                {
                    "word": "Schuhgröße",
                    "gender": "die",
                    "translation": "shoe size",
                    "example": "Welche Schuhgröße tragen Sie gewöhnlich bei Sportschuhen?",
                    "exampleEN": "What shoe size do you usually wear in sneakers?"
                },
                {
                    "word": "Wanderschuh",
                    "gender": "der",
                    "translation": "hiking boot",
                    "example": "Für die Alpen brauchen Sie wasserdichte Wanderschuhe mit Profil.",
                    "exampleEN": "For the Alps you need waterproof hiking boots with grip tread."
                },
                {
                    "word": "Einlegesohle",
                    "gender": "die",
                    "translation": "insole / insert",
                    "example": "Ergonomische Einlegesohlen federn den Schritt weich ab.",
                    "exampleEN": "Ergonomic insoles cushion the step softly."
                },
                {
                    "word": "drücken",
                    "gender": "v.",
                    "translation": "to pinch / press uncomfortably",
                    "example": "Der linke Schuh drückt etwas vorne am kleinen Zeh.",
                    "exampleEN": "The left shoe pinches slightly at the front on the little toe."
                },
                {
                    "word": "Imprägnierspray",
                    "gender": "das",
                    "translation": "waterproofing spray",
                    "example": "Vor dem ersten Tragen sollte man Lederschuhe imprägnieren.",
                    "exampleEN": "Before wearing for the first time one should waterproof leather shoes."
                }
            ],
            "phrases": [
                {
                    "de": "Haben Sie diese Sneaker auch eine halbe Nummer größer vorrätig?",
                    "en": "Do you also have these sneakers in stock half a size larger?"
                },
                {
                    "de": "Laufen Sie ruhig ein paar Schritte im Geschäft auf dem Teppich probe.",
                    "en": "Feel free to walk a few steps on test on the carpet in the store."
                },
                {
                    "de": "Dieses Modell ist aus atmungsaktivem und wasserabweisendem Leder.",
                    "en": "This model is made of breathable and water-repellent leather."
                },
                {
                    "de": "Wie fühlen sich die Schuhe an den Fersen und Zehen an?",
                    "en": "How do the shoes feel at the heels and toes?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_schuh_1",
                "title": "Wanderschuhe für die Berge",
                "titleEN": "Hiking Boots for Mountains",
                "script": "Hallo! Ich plane einen Wanderurlaub in den Bergen und suche robuste Wanderschuhe. - Hallo! Da sind Sie bei uns richtig. Wandern Sie auf leichten Wegen oder im steilen Felsgelände? - Meistens Wald- und Mittelgebirgswege. Sie sollten vor allem wasserdicht sein und guten Halt geben. - Dann empfehle ich diesen knöchelhohen Trekkingschuh mit Gore-Tex-Membran. Welche Größe haben Sie in der Regel? - Normalerweise Größe zweiundvierzig. - Bei Wanderschuhen nimmt man am besten eine Nummer größer für dicke Socken. Ich hole Ihnen Größe dreiundvierzig zum Anprobieren.",
                "translation": "Hello! I am planning a hiking vacation in the mountains and am looking for sturdy hiking boots. - Hello! You've come to the right place. Do you hike on easy paths or in steep rocky terrain? - Mostly forest and low mountain paths. Above all they should be waterproof and give good support. - Then I recommend this ankle-high trekking boot with Gore-Tex membrane. What size do you usually wear? - Normally size 42. - For hiking boots it is best to take one size larger for thick socks. I will fetch size 43 for you to try on.",
                "vocabSupport": [
                    {
                        "word": "knöchelhoch",
                        "translation": "ankle-high"
                    },
                    {
                        "word": "der Trekkingschuh",
                        "translation": "trekking / hiking boot"
                    },
                    {
                        "word": "wasserdicht",
                        "translation": "waterproof"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Verkäufer holt Wanderschuhe in Größe _____ zum Probieren.",
                    "sentenceEN": "The salesman fetches hiking boots in size _____ for fitting.",
                    "target": "dreiundvierzig",
                    "options": [
                        "achtunddreißig",
                        "dreiundvierzig",
                        "sechsundvierzig"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie spezielle gepolsterte Wandersocken dazu anziehen?",
                    "speaker1EN": "Would you like to put on special cushioned hiking socks with them?",
                    "options": [
                        "Ja, dann merke ich direkt, ob der Schuh optimal passt.",
                        "Ich esse kein Fleisch.",
                        "Die Kinokarte war sehr billig."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde sucht elegante Lederschuhe für eine feierliche Hochzeit.",
                    "statementEN": "The customer is looking for dressy leather shoes for a formal wedding.",
                    "correct": false,
                    "explanation": "Falsch: Der Kunde sucht robuste und wasserdichte Wanderschuhe für einen Bergurlaub."
                }
            },
            {
                "id": "a2_hoer_schuh_2",
                "title": "Anprobe und Pflegetipps",
                "titleEN": "Trying on and Care Tips",
                "script": "Wie fühlen sich die Wanderschuhe beim Laufen an? - Der Halt ist super und die Fersen sitzen fest. Aber vorne am rechten Fuß drückt der Schuh minimal. - Probieren Sie mal diese dünnere Einlegesohle aus Dämpfungsschaum... Wie ist es jetzt? - Wow, viel besser! Jetzt haben die Zehen genügend Spielraum beim Abrollen. Was kosten die Schuhe? - Einhundertneunundzwanzig Euro. Nehmen Sie auch eine Dose Imprägnierspray gegen Nässe und Schmutz dazu? - Ja, Pflege ist wichtig, das Spray nehme ich gerne mit.",
                "translation": "How do the hiking boots feel when walking? - The support is great and heels sit firmly. But in front on the right foot the shoe pinches minimally. - Try out this thinner insole made of cushioning foam... How is it now? - Wow, much better! Now the toes have enough room when rolling forward. What do the boots cost? - 129 euros. Will you also take a can of waterproofing spray against wetness and dirt? - Yes, maintenance is important, I will gladly take the spray.",
                "vocabSupport": [
                    {
                        "word": "die Einlegesohle",
                        "translation": "insole / insert"
                    },
                    {
                        "word": "der Spielraum",
                        "translation": "leeway / room to move"
                    },
                    {
                        "word": "das Imprägnierspray",
                        "translation": "waterproofing spray"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Wanderschuhe kosten einhundert_____ Euro.",
                    "sentenceEN": "The hiking boots cost one hundred and _____ euros.",
                    "target": "neunundzwanzig",
                    "options": [
                        "fünfzehn",
                        "neunundzwanzig",
                        "siebzig"
                    ]
                },
                "role": {
                    "speaker1": "Soll ich Ihnen den Originalkarton einpacken oder nehmen Sie die Schuhe in der Stofftasche mit?",
                    "speaker1EN": "Shall I pack the original box for you or take the shoes in the fabric bag?",
                    "options": [
                        "Die Stofftasche reicht mir völlig, den Karton können Sie recyceln.",
                        "Der Zug fährt um elf Uhr ab.",
                        "Mein Hund schläft im Garten."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Schuhe drücken so furchtbar, dass der Kunde den Laden wütend verlässt.",
                    "statementEN": "The boots pinch so terribly that the customer leaves the store angrily.",
                    "correct": false,
                    "explanation": "Falsch: Mit der anderen Einlegesohle passen sie perfekt und der Kunde kauft sie."
                }
            }
        ]
    }
};

    /* ============================================================
       PART 3: 15 NEW WRITING STUDIO TASKS (a2_write_26 to a2_write_40)
       ============================================================ */
    const NEW_A2_WRITING_TASKS_2 = [
    {
        "id": "a2_write_26",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🎂",
        "title": "Geburtstagsfeier absagen wegen Nachtschicht",
        "titleEN": "Canceling Birthday Party Due to Night Shift",
        "situation": "Ihre Freundin Sarah hat Sie am Samstag zu ihrer Geburtstagsfeier eingeladen. Sie müssen aber leider in der Nachtschicht im Krankenhaus arbeiten.",
        "situationEN": "Your friend Sarah invited you to her birthday party on Saturday. Unfortunately, you have to work the night shift at the hospital.",
        "leitpunkte": [
            {
                "de": "Bedanken Sie sich für die Einladung und gratulieren Sie ihr.",
                "en": "Thank her for the invitation and congratulate her."
            },
            {
                "de": "Erklären Sie, warum Sie am Samstag nicht kommen können.",
                "en": "Explain why you cannot come on Saturday."
            },
            {
                "de": "Schlagen Sie ein Treffen auf einen Kaffee am Sonntag vor.",
                "en": "Suggest meeting for a coffee on Sunday."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Liebe Sarah,",
                "Hallo Sarah,"
            ],
            "einleitung": [
                "vielen Dank für die Einladung zu deinem Geburtstag!",
                "herzlichen Glückwunsch zum Geburtstag und danke für die Einladung!"
            ],
            "leitpunktePhrases": [
                "Ich kann am Samstag leider nicht kommen, weil ich Nachtschicht im Krankenhaus habe.",
                "Am Samstag muss ich bis früh morgens arbeiten.",
                "Können wir uns am Sonntag auf einen Kaffee im Café treffen?",
                "Ich lade dich am Sonntag gerne auf ein Stück Kuchen ein."
            ],
            "schluss": [
                "Alles Liebe und feiere schön!",
                "Bis Sonntag,",
                "Viele Grüße"
            ]
        },
        "sampleAnswer": "Liebe Sarah,\n\nherzlichen Glückwunsch zum Geburtstag und danke für die Einladung! Leider kann ich am Samstag nicht kommen, weil ich Nachtschicht habe. Können wir uns am Sonntag auf einen Kaffee treffen?\n\nAlles Liebe,\nJonas",
        "sampleAnswerEN": "Dear Sarah,\n\nHappy Birthday and thanks for the invitation! Unfortunately I cannot come on Saturday because I have night shift. Can we meet for coffee on Sunday?\n\nAll the best,\nJonas",
        "sampleBreakdown": "✅ 32 Wörter. Alle 3 Leitpunkte exakt abgedeckt: Glückwünsche/Dank, Begründung mit 'weil', Gegenvorschlag am Sonntag. Perfektes A2-Register."
    },
    {
        "id": "a2_write_27",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "📚",
        "title": "Lernpartner für Goethe A2 gesucht",
        "titleEN": "Looking for Study Partner for Goethe A2",
        "situation": "Sie möchten sich gemeinsam mit Ihrem Mitschüler Marco auf die mündliche A2-Prüfung vorbereiten und schreiben ihm eine Nachricht.",
        "situationEN": "You want to prepare for the oral A2 exam together with your classmate Marco and write him a message.",
        "leitpunkte": [
            {
                "de": "Schreiben Sie, warum Sie gemeinsam Deutsch lernen wollen.",
                "en": "Write why you want to study German together."
            },
            {
                "de": "Schlagen Sie Wochentag, Uhrzeit und Ort vor.",
                "en": "Suggest weekday, time, and location."
            },
            {
                "de": "Fragen Sie nach seinen Prüfungsmaterialien.",
                "en": "Ask about his exam preparation materials."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Hallo Marco,",
                "Lieber Marco,"
            ],
            "einleitung": [
                "unsere A2-Prüfung ist schon in drei Wochen!",
                "hast du Lust, zusammen für Deutsch zu üben?"
            ],
            "leitpunktePhrases": [
                "Wir sollten zusammen sprechen üben, damit wir sicherer werden.",
                "Hast du am Donnerstag ab 17 Uhr in der Stadtbibliothek Zeit?",
                "Bringst du deine Modelltests und Übungskarten mit?"
            ],
            "schluss": [
                "Sag mir bitte bald Bescheid!",
                "Bis Donnerstag,",
                "Viele Grüße"
            ]
        },
        "sampleAnswer": "Hallo Marco,\n\nwollen wir zusammen für die A2-Sprechprüfung üben? Ich schlage Donnerstag um 17 Uhr in der Stadtbibliothek vor. Hast du das neue Buch mit Modelltests dabei?\n\nBis bald,\nDavid",
        "sampleAnswerEN": "Hello Marco,\n\nDo we want to practice together for the A2 speaking test? I suggest Thursday at 5 PM in the city library. Do you have the new book with model tests with you?\n\nSee you soon,\nDavid",
        "sampleBreakdown": "✅ 29 Wörter. Vorschlag zur Prüfungsvorbereitung, konkrete Zeit/Ort (Do, 17 Uhr, Bibliothek), Frage nach Lernmaterialien. Direkt und prägnant."
    },
    {
        "id": "a2_write_28",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🛠️",
        "title": "Bohrmaschine vom Nachbarn ausleihen",
        "titleEN": "Borrowing Drill from Neighbor",
        "situation": "Sie sind in Ihre neue Wohnung eingezogen und müssen schwere Regale montieren. Sie schreiben Ihrem freundlichen Nachbarn Tim.",
        "situationEN": "You moved into your new apartment and need to mount heavy shelves. You write to your friendly neighbor Tim.",
        "leitpunkte": [
            {
                "de": "Erklären Sie, warum Sie eine Bohrmaschine brauchen.",
                "en": "Explain why you need a drill."
            },
            {
                "de": "Fragen Sie, ob er Ihnen das Werkzeug für Samstag leihen kann.",
                "en": "Ask if he can lend you the tool for Saturday."
            },
            {
                "de": "Bieten Sie an, ihm am Sonntag Schokolade oder Kuchen als Dankeschön zu bringen.",
                "en": "Offer to bring him chocolate or cake on Sunday as a thank you."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Hallo Tim,",
                "Lieber Tim,"
            ],
            "einleitung": [
                "ich brauche kurz deine Hilfe beim Umzug.",
                "kannst du mir vielleicht einen Gefallen tun?"
            ],
            "leitpunktePhrases": [
                "Ich muss am Samstag zwei Bücherregale an die Betonwand bohren.",
                "Kannst du mir deine Schlagbohrmaschine bis Sonntag ausleihen?",
                "Als Dankeschön backe ich dir einen leckeren Apfelkuchen!"
            ],
            "schluss": [
                "Danke im Voraus!",
                "Viele Grüße von nebenan,",
                "Bis später"
            ]
        },
        "sampleAnswer": "Hallo Tim,\n\nich baue am Samstag meine neuen Wandregale auf. Kannst du mir für den Nachmittag deine Bohrmaschine ausleihen? Als Dankeschön bringe ich dir am Sonntag frischen Kuchen vorbei!\n\nViele Grüße,\nFelix",
        "sampleAnswerEN": "Hello Tim,\n\nI am setting up my new wall shelves on Saturday. Can you lend me your drill for the afternoon? As a thank you I will bring you fresh cake on Sunday!\n\nBest regards,\nFelix",
        "sampleBreakdown": "✅ 32 Wörter. Alle 3 Punkte vorbildlich umgesetzt: Regalaufbau, Ausleihbitte für Samstagnachmittag, Angebot von frischem Kuchen als Dank."
    },
    {
        "id": "a2_write_29",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "👶",
        "title": "Dank an Babysitter & Schlüsselrückgabe",
        "titleEN": "Thanks to Babysitter & Key Return",
        "situation": "Ihre Nachbarin Lea hat gestern Abend auf Ihre Tochter aufgepasst. Sie möchten sich bedanken und den Wohnungsschlüssel abholen.",
        "situationEN": "Your neighbor Lea babysat your daughter yesterday evening. You want to thank her and pick up the apartment key.",
        "leitpunkte": [
            {
                "de": "Bedanken Sie sich herzlich für das Babysitten.",
                "en": "Thank her warmly for babysitting."
            },
            {
                "de": "Berichten Sie, wie gut es Ihrer Tochter gefallen hat.",
                "en": "Report how much your daughter enjoyed it."
            },
            {
                "de": "Vereinbaren Sie einen Zeitpunkt für die Schlüsselrückgabe heute Abend.",
                "en": "Arrange a time for key return tonight."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Liebe Lea,",
                "Hallo Lea,"
            ],
            "einleitung": [
                "vielen Dank für deine liebe Hilfe gestern Abend!",
                "ich danke dir ganz herzlich fürs Aufpassen."
            ],
            "leitpunktePhrases": [
                "Emma hat heute Morgen erzählt, wie viel Spaß das Spielen mit dir gemacht hat.",
                "Sie hat sehr gut und ruhig durchgeschlafen.",
                "Wann bist du heute zu Hause, damit ich den Hausschlüssel abholen kann?",
                "Passt es dir heute gegen 18:30 Uhr?"
            ],
            "schluss": [
                "Liebe Grüße,",
                "Bis heute Abend,",
                "Herzlichen Dank"
            ]
        },
        "sampleAnswer": "Liebe Lea,\n\nvielen Dank für das tolle Babysitten gestern! Emma hatte riesigen Spaß beim Malen mit dir. Bist du heute gegen 18 Uhr zu Hause, damit ich den Wohnungsschlüssel holen kann?\n\nHerzliche Grüße,\nMonika",
        "sampleAnswerEN": "Dear Lea,\n\nThanks a lot for the great babysitting yesterday! Emma had huge fun painting with you. Are you home today around 6 PM so I can pick up the apartment key?\n\nWarm regards,\nMonika",
        "sampleBreakdown": "✅ 32 Wörter. Herzlicher Dank, positives Feedback über Kind, konkrete Terminanfrage für Schlüssel (18 Uhr)."
    },
    {
        "id": "a2_write_30",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🚗",
        "title": "Fahrgemeinschaft zur Arbeit organisieren",
        "titleEN": "Organizing Carpool to Work",
        "situation": "Ihr Auto ist in der Werkstatt. Sie schreiben Ihrem Kollegen Jan, der in der gleichen Straße wohnt, wegen einer Mitfahrgelegenheit.",
        "situationEN": "Your car is in the repair shop. You write to your colleague Jan, who lives on the same street, about a carpool ride.",
        "leitpunkte": [
            {
                "de": "Erklären Sie die Situation mit Ihrem kaputten Auto.",
                "en": "Explain the situation with your broken car."
            },
            {
                "de": "Fragen Sie, ob er Sie morgen früh um 7:30 Uhr mitnehmen kann.",
                "en": "Ask if he can give you a ride tomorrow morning at 7:30 AM."
            },
            {
                "de": "Bieten Sie an, sich an den Benzinkosten zu beteiligen.",
                "en": "Offer to contribute towards fuel costs."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Hallo Jan,",
                "Lieber Jan,"
            ],
            "einleitung": [
                "mein Auto ist leider bis Freitag in der Werkstatt.",
                "ich habe ein kleines Problem mit meinem Pkw."
            ],
            "leitpunktePhrases": [
                "Kannst du mich morgen früh um 7:30 Uhr zur Firma mitnehmen?",
                "Ich warte an der Kreuzung vor deiner Haustür.",
                "Ich beteilige mich natürlich gerne an den Benzinkosten!"
            ],
            "schluss": [
                "Bis morgen früh,",
                "Danke dir,",
                "Viele Grüße"
            ]
        },
        "sampleAnswer": "Hallo Jan,\n\nmein Auto steht bis Freitag in der Werkstatt. Kannst du mich morgen früh um 7:30 Uhr zur Arbeit mitnehmen? Ich bezahle natürlich gerne Benzingeld!\n\nVielen Dank und bis morgen,\nDaniel",
        "sampleAnswerEN": "Hello Jan,\n\nMy car is in the repair shop until Friday. Can you take me to work tomorrow morning at 7:30 AM? I will gladly contribute petrol money of course!\n\nThanks a lot and see you tomorrow,\nDaniel",
        "sampleBreakdown": "✅ 31 Wörter. Werkstattgrund genannt, präzise Uhrzeit für Mitfahrt erfragt (7:30 Uhr), Beteiligung an Benzinkosten zugesagt."
    },
    {
        "id": "a2_write_31",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🍝",
        "title": "Kochabend verschieben wegen Überstunden",
        "titleEN": "Postponing Cooking Evening Due to Overtime",
        "situation": "Sie wollten am Freitagabend mit Ihrer Freundin Lisa kochen. Sie müssen aber dringend länger im Büro bleiben.",
        "situationEN": "You wanted to cook with your friend Lisa on Friday evening. But you urgently have to stay longer at the office.",
        "leitpunkte": [
            {
                "de": "Entschuldigen Sie sich für die kurzfristige Nachricht.",
                "en": "Apologize for the short-notice message."
            },
            {
                "de": "Erklären Sie den Grund (wichtiges Projekt, Überstunden).",
                "en": "Explain the reason (important project, overtime)."
            },
            {
                "de": "Schlagen Sie stattdessen Samstagabend vor.",
                "en": "Suggest Saturday evening instead."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Liebe Lisa,",
                "Hallo Lisa,"
            ],
            "einleitung": [
                "tut mir furchtbar leid, aber ich habe schlechte Nachrichten für Freitag.",
                "es tut mir sehr leid wegen unseres Treffens."
            ],
            "leitpunktePhrases": [
                "Ich muss am Freitag wegen eines wichtigen Projekts bis 20 Uhr Überstunden machen.",
                "Wollen wir unseren Pasta-Abend auf Samstag um 18 Uhr verschieben?",
                "Die Einkäufe übernehme ich dann komplett als Entschuldigung."
            ],
            "schluss": [
                "Liebe Grüße,",
                "Hoffentlich bis Samstag,",
                "Tut mir leid!"
            ]
        },
        "sampleAnswer": "Liebe Lisa,\n\nes tut mir leid, aber ich muss am Freitag bis 20 Uhr im Büro arbeiten. Können wir unseren Kochabend auf Samstag verschieben? Ich kaufe alle Zutaten ein!\n\nLiebe Grüße,\nElena",
        "sampleAnswerEN": "Dear Lisa,\n\nI am sorry, but I have to work at the office until 8 PM on Friday. Can we postpone our cooking evening to Saturday? I will buy all ingredients!\n\nWarm regards,\nElena",
        "sampleBreakdown": "✅ 30 Wörter. Höfliche Entschuldigung, Grund (Überstunden bis 20 Uhr), neuer Terminvorschlag (Samstag) mit Übernahme der Zutaten."
    },
    {
        "id": "a2_write_32",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "⚽",
        "title": "Fußballspiel im Stadtpark verabreden",
        "titleEN": "Arranging Soccer Match in City Park",
        "situation": "Sie möchten am Samstag mit Freunden Fußball spielen und laden Ihren Freund Ben ein.",
        "situationEN": "You want to play soccer with friends on Saturday and invite your friend Ben.",
        "leitpunkte": [
            {
                "de": "Laden Sie ihn zum Kicken am Samstagnachmittag ein.",
                "en": "Invite him to kick a ball on Saturday afternoon."
            },
            {
                "de": "Nennen Sie den Treffpunkt auf der großen Wiese im Park.",
                "en": "Name the meeting place on the large meadow in the park."
            },
            {
                "de": "Bitten Sie ihn, seinen neuen Fußball mitzubringen.",
                "en": "Ask him to bring his new soccer ball."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Hallo Ben,",
                "Hey Ben,"
            ],
            "einleitung": [
                "hast du am Samstag Lust auf ein kleines Fußballspiel?",
                "das Wetter am Samstag wird super!"
            ],
            "leitpunktePhrases": [
                "Wir treffen uns um 15 Uhr auf der großen Wiese im Stadtpark.",
                "Wir sind schon zu sechst, aber du musst unbedingt mitspielen.",
                "Kannst du bitte deinen Lederfußball und eine Luftpumpe mitbringen?"
            ],
            "schluss": [
                "Bis Samstag auf dem Platz!",
                "Meld dich kurz,",
                "Viele Grüße"
            ]
        },
        "sampleAnswer": "Hallo Ben,\n\nwollen wir am Samstag um 15 Uhr im Stadtpark Fußball spielen? Wir treffen uns auf der großen Wiese. Bringst du bitte deinen neuen Fußball mit?\n\nBis Samstag,\nFlorian",
        "sampleAnswerEN": "Hello Ben,\n\nDo we want to play soccer in the city park on Saturday at 3 PM? We meet on the big lawn. Can you please bring your new soccer ball along?\n\nSee you Saturday,\nFlorian",
        "sampleBreakdown": "✅ 28 Wörter. Einladung zum Fußball, genaue Zeit und Ort (15 Uhr, große Wiese), Bitte um den Ball."
    },
    {
        "id": "a2_write_33",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🐱",
        "title": "Katze füttern während Wochenendausflug",
        "titleEN": "Feeding Cat during Weekend Trip",
        "situation": "Sie fahren von Freitag bis Sonntag zu Verwandten und bitten Ihre Nachbarin Nina, Ihre Katze Mimi zu füttern.",
        "situationEN": "You are traveling to relatives from Friday to Sunday and ask your neighbor Nina to feed your cat Mimi.",
        "leitpunkte": [
            {
                "de": "Informieren Sie sie über Ihre kurze Reise.",
                "en": "Inform her about your short trip."
            },
            {
                "de": "Bitten Sie sie, zweimal täglich Futter und frisches Wasser zu geben.",
                "en": "Ask her to provide food and fresh water twice daily."
            },
            {
                "de": "Schreiben Sie, wo der Wohnungsschlüssel hinterlegt ist.",
                "en": "Write where the apartment key is deposited."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Liebe Nina,",
                "Hallo Nina,"
            ],
            "einleitung": [
                "ich fahre dieses Wochenende von Freitag bis Sonntag nach Köln.",
                "ich brauche am Wochenende deine Hilfe mit Mimi."
            ],
            "leitpunktePhrases": [
                "Könntest du Mimi bitte morgens und abends füttern und ihr frisches Wasser geben?",
                "Das Katzenfutter steht in der Küche auf der Anrichte.",
                "Den Schlüssel lege ich unter die Fußmatte vor meiner Wohnungstür."
            ],
            "schluss": [
                "Tausend Dank für deine Hilfe!",
                "Bis Sonntagabend,",
                "Liebe Grüße"
            ]
        },
        "sampleAnswer": "Liebe Nina,\n\nich fahre von Freitag bis Sonntag zu meiner Familie. Könntest du bitte morgens und abends meine Katze füttern? Der Wohnungsschlüssel liegt unter der Fußmatte.\n\nVielen Dank und liebe Grüße,\nKatrin",
        "sampleAnswerEN": "Dear Nina,\n\nI am traveling to my family from Friday to Sunday. Could you please feed my cat morning and evening? The apartment key lies under the doormat.\n\nMany thanks and warm regards,\nKatrin",
        "sampleBreakdown": "✅ 32 Wörter. Reisezeitraum klar benannt, Fütterungsanweisung (morgens und abends), Schlüsselversteck genannt."
    },
    {
        "id": "a2_write_34",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "🏢",
        "title": "Terminbestätigung für Wohnungsbesichtigung",
        "titleEN": "Appointment Confirmation for Apartment Viewing",
        "situation": "Sie haben sich auf ein Wohnungsinserat beworben und vom Makler Herrn Schneider eine Einladung für Dienstag um 16:30 Uhr erhalten.",
        "situationEN": "You applied for an apartment listing and received an invitation for Tuesday at 4:30 PM from the broker Mr. Schneider.",
        "leitpunkte": [
            {
                "de": "Bestätigen Sie den Besichtigungstermin verbindlich.",
                "en": "Confirm the viewing appointment bindingly."
            },
            {
                "de": "Fragen Sie nach der genauen Hausnummer und dem Stockwerk.",
                "en": "Ask for the exact building number and floor."
            },
            {
                "de": "Kündigen Sie an, dass Sie die Bewerbungsunterlagen mitbringen.",
                "en": "Announce that you will bring the application documents."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrter Herr Schneider,",
                "Guten Tag Herr Schneider,"
            ],
            "einleitung": [
                "vielen Dank für Ihre freundliche Einladung zur Wohnungsbesichtigung.",
                "ich habe Ihre E-Mail erhalten und bestätige den Termin gerne."
            ],
            "leitpunktePhrases": [
                "Ich bestätige den vorgeschlagenen Termin am Dienstag, den 14. Oktober um 16:30 Uhr.",
                "Könnten Sie mir bitte noch die genaue Hausnummer und die Etage der Wohnung mitteilen?",
                "Ich bringe alle geforderten Unterlagen wie Gehaltsabrechnungen und Schufa-Auskunft zur Besichtigung mit."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Ich freue mich auf den Termin."
            ]
        },
        "sampleAnswer": "Sehr geehrter Herr Schneider,\n\nvielen Dank für die Einladung. Ich bestätige den Termin am Dienstag um 16:30 Uhr gerne. Können Sie mir bitte noch das genaue Stockwerk der Wohnung mitteilen? Ich bringe alle Bewerbungsunterlagen und Gehaltsnachweise mit.\n\nMit freundlichen Grüßen,\nMarc Becker",
        "sampleAnswerEN": "Dear Mr. Schneider,\n\nThank you for the invitation. I gladly confirm the appointment on Tuesday at 4:30 PM. Could you please let me know the exact floor of the apartment? I will bring all application documents and payslips along.\n\nYours sincerely,\nMarc Becker",
        "sampleBreakdown": "✅ 39 Wörter. Sehr höfliche formelle Anrede, verbindliche Zusage mit Zeit, gezielte Rückfrage nach Etage, Ankündigung der Nachweise."
    },
    {
        "id": "a2_write_35",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "🏋️",
        "title": "Fitnessstudio-Kündigung wegen Umzug",
        "titleEN": "Gym Membership Cancellation Due to Relocation",
        "situation": "Sie ziehen wegen eines neuen Jobs in eine andere Stadt (300 km entfernt) und kündigen Ihren Fitnessstudiovertrag vorzeitig.",
        "situationEN": "You are relocating to another city (300 km away) due to a new job and cancelling your gym membership contract early.",
        "leitpunkte": [
            {
                "de": "Geben Sie Ihre Mitgliedsnummer an und kündigen Sie den Vertrag.",
                "en": "State your member ID and cancel the contract."
            },
            {
                "de": "Nennen Sie den Grund (Umzug in eine andere Stadt) zum Monatsende.",
                "en": "State the reason (moving to another city) by the end of the month."
            },
            {
                "de": "Bitten Sie um eine schriftliche Bestätigung der Kündigung.",
                "en": "Request a written confirmation of the cancellation."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrte Damen und Herren,",
                "Sehr geehrtes Fit-Life-Team,"
            ],
            "einleitung": [
                "hiermit kündige ich meinen Mitgliedsvertrag fristgerecht zum Monatsende.",
                "ich schreibe Ihnen bezüglich meines bestehenden Vertrags."
            ],
            "leitpunktePhrases": [
                "Meine Mitgliedsnummer lautet: MF-84920.",
                "Der Grund für die Kündigung ist mein beruflicher Umzug nach Hamburg zum 1. November.",
                "Eine Kopie meiner neuen Meldebescheinigung habe ich als Nachweis beigefügt.",
                "Bitte senden Sie mir eine schriftliche Kündigungsbestätigung per E-Mail zu."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Vielen Dank für Ihr Verständnis."
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meine Mitgliedschaft (Nr. MF-84920) zum 31. Oktober. Wegen einer neuen Arbeitsstelle ziehe ich nach Hamburg. Die Meldebestätigung finden Sie im Anhang. Bitte bestätigen Sie mir die Kündigung schriftlich.\n\nMit freundlichen Grüßen,\nTobias Richter",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nHereby I cancel my membership (No. MF-84920) as of October 31st. Because of a new job I am moving to Hamburg. You can find the registration certificate attached. Please confirm the cancellation in writing.\n\nYours sincerely,\nTobias Richter",
        "sampleBreakdown": "✅ 38 Wörter. Mitgliedsnummer angegeben, Kündigungsdatum & Begründung mit Nachweis im Anhang, Bitte um schriftliche Bestätigung."
    },
    {
        "id": "a2_write_36",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "📜",
        "title": "Nachfrage nach Kurszertifikat an der VHS",
        "titleEN": "Inquiry about Course Certificate at Adult Ed Center",
        "situation": "Sie haben einen Deutschkurs A2 an der Volkshochschule abgeschlossen und brauchen das Zertifikat dringend für Ihren Arbeitgeber.",
        "situationEN": "You completed a German A2 course at the adult education center and urgently need the certificate for your employer.",
        "leitpunkte": [
            {
                "de": "Nennen Sie den Kursnamen und das Abschlussdatum.",
                "en": "State the course name and completion date."
            },
            {
                "de": "Erklären Sie, warum Sie das Dokument dringend benötigen.",
                "en": "Explain why you need the document urgently."
            },
            {
                "de": "Fragen Sie, ob man Ihnen das Zertifikat vorab per Mail als PDF senden kann.",
                "en": "Ask if they can send you the certificate in advance by email as PDF."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrte Damen und Herren,",
                "Sehr geehrte Frau Müller,"
            ],
            "einleitung": [
                "ich habe letzte Woche meinen Deutschkurs A2.2 (Kursnummer: DE-304) bei Herrn Weber beendet.",
                "ich wende mich an Sie wegen meiner Teilnahmebescheinigung."
            ],
            "leitpunktePhrases": [
                "Mein Arbeitgeber verlangt den Nachweis bis kommenden Freitag für meine Personalakte.",
                "Könnten Sie mir das Zertifikat vorab per E-Mail als PDF-Datei zusenden?",
                "Das Original kann ich nächste Woche gerne persönlich im Sekretariat abholen."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Vielen Dank im Voraus für Ihre Mühe."
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nich habe am 30. September den A2-Deutschkurs (Nr. DE-304) erfolgreich beendet. Für meinen Arbeitgeber brauche ich die Teilnahmebescheinigung dringend bis Freitag. Können Sie mir das Zertifikat vorab als PDF per E-Mail schicken?\n\nMit freundlichen Grüßen,\nSamira Khan",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nOn September 30th I successfully completed the A2 German course (No. DE-304). For my employer I urgently need the certificate of attendance by Friday. Can you email me the certificate in advance as PDF?\n\nYours sincerely,\nSamira Khan",
        "sampleBreakdown": "✅ 38 Wörter. Präzise Kursdetails (Datum, Kurs-Nr.), Dringlichkeit für Arbeitgeber begründet, prompte Lösung per PDF erbeten."
    },
    {
        "id": "a2_write_37",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "🏨",
        "title": "Hotelanfrage: Ruhiges Zimmer & Später Check-in",
        "titleEN": "Hotel Request: Quiet Room & Late Check-in",
        "situation": "Sie haben ein Zimmer im Hotel 'Stadtblick' gebucht (Buchungsnummer: HB-5521) und haben zwei wichtige Wünsche für Ihren Aufenthalt.",
        "situationEN": "You booked a room at Hotel 'Stadtblick' (booking number: HB-5521) and have two important requests for your stay.",
        "leitpunkte": [
            {
                "de": "Nennen Sie Buchungsnummer und Reisedatum.",
                "en": "State booking number and travel date."
            },
            {
                "de": "Bitten Sie um ein ruhiges Zimmer zum Innenhof mit Doppelbett.",
                "en": "Request a quiet room facing the courtyard with double bed."
            },
            {
                "de": "Kündigen Sie Ihre späte Ankunft nach 22 Uhr wegen Flugverspätung an.",
                "en": "Announce your late arrival after 10 PM due to flight delay."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrte Damen und Herren,",
                "Sehr geehrtes Hotel-Team,"
            ],
            "einleitung": [
                "ich habe für den 20. Oktober ein Doppelzimmer bei Ihnen gebucht (Buchung: HB-5521).",
                "ich schreibe Ihnen bezüglich meiner bevorstehenden Reservierung."
            ],
            "leitpunktePhrases": [
                "Da ich einen leichten Schlaf habe, bitte ich um ein ruhiges Zimmer mit Blick zum Innenhof.",
                "Mein Flug landet erst spät, daher werde ich voraussichtlich erst gegen 22:30 Uhr einchecken.",
                "Ist die Rezeption um diese Uhrzeit noch besetzt?"
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Vielen Dank für Ihre Unterstützung."
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nich habe für den 20. Oktober ein Zimmer gebucht (Buchungsnr. HB-5521). Wäre es möglich, ein ruhiges Zimmer zum Innenhof zu bekommen? Außerdem komme ich wegen meines Fluges erst gegen 22:30 Uhr an. Ist ein später Check-in möglich?\n\nMit freundlichen Grüßen,\nOliver Graf",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nI booked a room for October 20th (Booking No. HB-5521). Would it be possible to get a quiet room facing the courtyard? In addition, because of my flight I will only arrive around 10:30 PM. Is late check-in possible?\n\nYours sincerely,\nOliver Graf",
        "sampleBreakdown": "✅ 44 Wörter. Buchungsnummer & Datum genannt, Sonderwunsch (ruhiges Zimmer zum Hof) formuliert, späte Ankunftszeit angekündigt."
    },
    {
        "id": "a2_write_38",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "💼",
        "title": "Antrag auf Sonderurlaub beim Vorgesetzten",
        "titleEN": "Application for Special Leave to Supervisor",
        "situation": "Ihr Bruder heiratet in Italien. Sie bitten Ihren Abteilungsleiter Herrn Berg um zwei Tage Sonderurlaub am Donnerstag und Freitag.",
        "situationEN": "Your brother is getting married in Italy. You ask your department manager Mr. Berg for two days special leave on Thursday and Friday.",
        "leitpunkte": [
            {
                "de": "Erklären Sie den familiären Anlass (Hochzeit des Bruders im Ausland).",
                "en": "Explain the family occasion (brother's wedding abroad)."
            },
            {
                "de": "Nennen Sie die genauen Tage für den Urlaub.",
                "en": "State the exact days for the leave."
            },
            {
                "de": "Versichern Sie, dass Sie Ihre Aufgaben vorher erledigen und eine Vertretung haben.",
                "en": "Assure that you will finish your tasks beforehand and have a cover."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrter Herr Berg,",
                "Lieber Herr Berg,"
            ],
            "einleitung": [
                "ich möchte für nächste Woche zwei Tage Sonderurlaub beantragen.",
                "ich wende mich mit einer Urlaubsbitte an Sie."
            ],
            "leitpunktePhrases": [
                "Mein Bruder heiratet am Freitag in Rom und ich bin Trauzeuge.",
                "Aus diesem Grund bitte ich um Freistellung für Donnerstag und Freitag, den 24. und 25. Oktober.",
                "Ich werde alle dringenden Berichte bis Mittwoch fertigstellen.",
                "Meine Kollegin Frau Meier übernimmt während meiner Abwesenheit die Vertretung."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Ich danke Ihnen für Ihr Verständnis."
            ]
        },
        "sampleAnswer": "Sehr geehrter Herr Berg,\n\nich möchte für Donnerstag und Freitag (24./25. Oktober) zwei Tage Sonderurlaub beantragen, da mein Bruder in Rom heiratet. Alle dringenden Aufgaben erledige ich bis Mittwoch und Frau Meier übernimmt meine Vertretung. Ich hoffe auf Ihre Genehmigung.\n\nMit freundlichen Grüßen,\nMarco Rossi",
        "sampleAnswerEN": "Dear Mr. Berg,\n\nI would like to apply for two days special leave for Thursday and Friday (October 24th/25th) because my brother is getting married in Rome. I will finish all urgent tasks by Wednesday and Ms. Meier will cover for me. I hope for your approval.\n\nYours sincerely,\nMarco Rossi",
        "sampleBreakdown": "✅ 43 Wörter. Formelle Ansprache, klarer familiärer Anlass, konkrete Tage, Übergabe an Kollegin geregelt."
    },
    {
        "id": "a2_write_39",
        "part": "teil2",
        "partBadge": "Teil 2: Halbformelle E-Mail",
        "emoji": "💊",
        "title": "Rezeptanfrage bei der Hausarztpraxis",
        "titleEN": "Prescription Request to Family Doctor Practice",
        "situation": "Sie benötigen ein neues Rezept für Ihre regelmäßigen Blutdrucktabletten und schreiben eine E-Mail an Ihre Hausarztpraxis Dr. Wagner.",
        "situationEN": "You need a new prescription for your regular blood pressure medication and write an email to your GP clinic Dr. Wagner.",
        "leitpunkte": [
            {
                "de": "Nennen Sie Ihren vollen Namen und Ihr Geburtsdatum.",
                "en": "State your full name and date of birth."
            },
            {
                "de": "Nennen Sie den Namen und die Dosierung des benötigten Medikaments.",
                "en": "State the name and dosage of the required medication."
            },
            {
                "de": "Fragen Sie, wann Sie das Rezept oder E-Rezept in der Apotheke einlösen können.",
                "en": "Ask when you can redeem the prescription or e-prescription at the pharmacy."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrtes Praxisteam,",
                "Sehr geehrte Frau Dr. Wagner,"
            ],
            "einleitung": [
                "ich brauche ein Wiederholungsrezept für mein Dauermedikament.",
                "ich wende mich an Sie bezüglich eines neuen Rezepts."
            ],
            "leitpunktePhrases": [
                "Mein Name ist Thomas Klein, geboren am 15.03.1988.",
                "Ich benötige eine neue Packung Ramipril 5mg (100 Tabletten).",
                "Meine Gesundheitskarte wurde in diesem Quartal bereits eingelesen.",
                "Können Sie das Rezept als E-Rezept ausstellen, damit ich es morgen in der Apotheke abholen kann?"
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Vielen Dank für Ihre Hilfe."
            ]
        },
        "sampleAnswer": "Sehr geehrtes Praxisteam,\n\nmein Name ist Thomas Klein (geb. 15.03.1988). Ich benötige ein neues Rezept für mein Blutdruckmedikament Ramipril 5mg (N3-Packung). Meine Versichertenkarte wurde letzte Woche eingelesen. Können Sie das E-Rezept aktivieren, damit ich morgen zur Apotheke gehen kann?\n\nMit freundlichen Grüßen,\nThomas Klein",
        "sampleAnswerEN": "Dear Practice Team,\n\nMy name is Thomas Klein (born 15.03.1988). I need a new prescription for my blood pressure medication Ramipril 5mg (N3 pack). My health card was read last week. Can you activate the e-prescription so I can go to the pharmacy tomorrow?\n\nYours sincerely,\nThomas Klein",
        "sampleBreakdown": "✅ 41 Wörter. Vollständige Stammdaten (Name, Geburtsdatum), genaue Medikamentenbezeichnung und Dosierung, Hinweis auf E-Rezept."
    },
    {
        "id": "a2_write_40",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "🔧",
        "title": "Terminanfrage für Waschmaschinenreparatur",
        "titleEN": "Appointment Request for Washing Machine Repair",
        "situation": "Ihre Waschmaschine pumpt seit gestern kein Wasser mehr ab und zeigt die Fehlermeldung E18. Sie wenden sich an den Kundendienst.",
        "situationEN": "Your washing machine no longer drains water since yesterday and shows error code E18. You contact the customer service.",
        "leitpunkte": [
            {
                "de": "Nennen Sie Gerätemodell und die angezeigte Fehlermeldung.",
                "en": "State the appliance model and displayed error code."
            },
            {
                "de": "Erklären Sie das Problem (Wasser bleibt in der Trommel stehen).",
                "en": "Explain the issue (water remains in drum)."
            },
            {
                "de": "Bitten Sie um einen Technikertermin am Donnerstagnachmittag.",
                "en": "Request a technician visit on Thursday afternoon."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrte Damen und Herren,",
                "Sehr geehrter Kundenservice,"
            ],
            "einleitung": [
                "leider ist meine Waschmaschine der Marke Bosch defekt.",
                "ich benötige dringend einen Reparaturtermin für mein Haushaltsgerät."
            ],
            "leitpunktePhrases": [
                "Das Gerät (Modell Bosch Serie 6) pumpt seit gestern das Wasser nicht mehr ab.",
                "Auf dem Display erscheint der Fehlercode E18.",
                "Das Flusensieb habe ich bereits ohne Erfolg gereinigt.",
                "Könnte ein Techniker am Donnerstag ab 14 Uhr vorbeikommen?"
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Ich freue mich auf Ihre Rückmeldung."
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nmeine Waschmaschine (Bosch Serie 6) ist defekt. Sie pumpt kein Wasser mehr ab und zeigt den Fehlercode E18. Das Wasser steht in der Trommel. Wann kann ein Techniker kommen? Am Donnerstag ab 14 Uhr bin ich zu Hause.\n\nMit freundlichen Grüßen,\nSabine Meyer",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nMy washing machine (Bosch Series 6) is defective. It no longer pumps water out and shows error code E18. Water remains in the drum. When can a technician visit? On Thursday from 2 PM I am at home.\n\nYours sincerely,\nSabine Meyer",
        "sampleBreakdown": "✅ 41 Wörter. Gerätemodell und Fehlercode präzise angegeben, Schadensbild beschrieben, konkreter Wunschtermin für Technikerbesuch."
    }
];

    /* ============================================================
       PART 4: 45 NEW SPEAKING STUDIO SESSIONS (Cards 24-38, Monologues 22-36, Plans 18-32)
       ============================================================ */
    const NEW_A2_SPEAKING_DATA_2 = {
    "teil1_cue_cards": [
        {
            "id": "card_24",
            "theme": "Gesundheit & Sport",
            "themeEN": "Health & Sports",
            "keyword": "Laufschuhe",
            "keywordEN": "running shoes",
            "emoji": "👟",
            "modelQuestion": "Wie oft kaufen Sie sich neue Laufschuhe für das Training?",
            "modelQuestionEN": "How often do you buy new running shoes for training?",
            "modelAnswer": "Ich kaufe etwa einmal im Jahr neue Laufschuhe, wenn die Sohle abgenutzt ist.",
            "modelAnswerEN": "I buy new running shoes about once a year when the sole is worn down.",
            "tip": "Fragen Sie nach der Häufigkeit oder dem Kaufort."
        },
        {
            "id": "card_25",
            "theme": "Wohnen & Möbel",
            "themeEN": "Housing & Furniture",
            "keyword": "Balkon",
            "keywordEN": "balcony",
            "emoji": "🪴",
            "modelQuestion": "Haben Sie in Ihrer Wohnung einen Balkon mit Pflanzen?",
            "modelQuestionEN": "Do you have a balcony with plants in your apartment?",
            "modelAnswer": "Ja, ich habe einen kleinen Südbalkon mit Tomaten und vielen Blumen.",
            "modelAnswerEN": "Yes, I have a small south-facing balcony with tomatoes and many flowers.",
            "tip": "Nutzen Sie eine Frage mit 'Haben Sie...' oder 'Was machen Sie auf dem Balkon?'."
        },
        {
            "id": "card_26",
            "theme": "Freizeit & Hobby",
            "themeEN": "Leisure & Hobby",
            "keyword": "Gitarre",
            "keywordEN": "guitar",
            "emoji": "🎸",
            "modelQuestion": "Spielen Sie selbst Gitarre oder ein anderes Instrument?",
            "modelQuestionEN": "Do you play the guitar yourself or another instrument?",
            "modelAnswer": "Nein, leider nicht, aber ich höre sehr gerne akustische Gitarrenmusik.",
            "modelAnswerEN": "No, unfortunately not, but I enjoy listening to acoustic guitar music very much.",
            "tip": "Verwenden Sie das Verb 'spielen' mit Akkusativ."
        },
        {
            "id": "card_27",
            "theme": "Essen & Trinken",
            "themeEN": "Food & Drink",
            "keyword": "Frühstücksei",
            "keywordEN": "breakfast egg",
            "emoji": "🥚",
            "modelQuestion": "Essen Sie am Wochenende gerne ein gekochtes Frühstücksei?",
            "modelQuestionEN": "Do you like eating a boiled breakfast egg on weekends?",
            "modelAnswer": "Ja, sonntags esse ich immer ein weichgekochtes Ei mit Vollkornbrot.",
            "modelAnswerEN": "Yes, on Sundays I always eat a soft-boiled egg with wholegrain bread.",
            "tip": "Fragen Sie nach Zubereitung (weich oder hart) oder Wochentag."
        },
        {
            "id": "card_28",
            "theme": "Einkaufen & Markt",
            "themeEN": "Shopping & Market",
            "keyword": "Wochenmarkt",
            "keywordEN": "weekly market",
            "emoji": "🍏",
            "modelQuestion": "Kaufen Sie Ihr Obst und Gemüse lieber auf dem Wochenmarkt?",
            "modelQuestionEN": "Do you prefer buying your fruits and vegetables at the weekly market?",
            "modelAnswer": "Ja, samstags kaufe ich dort frische Äpfel direkt von den Bauern.",
            "modelAnswerEN": "Yes, on Saturdays I buy fresh apples there directly from the farmers.",
            "tip": "Nutzen Sie den Komparativ 'lieber' oder 'Warum kaufen Sie...?'."
        },
        {
            "id": "card_29",
            "theme": "Reisen & Urlaub",
            "themeEN": "Travel & Vacation",
            "keyword": "Reisepass",
            "keywordEN": "passport",
            "emoji": "🛂",
            "modelQuestion": "Ist Ihr Reisepass noch für die nächste Auslandsreise gültig?",
            "modelQuestionEN": "Is your passport still valid for the next trip abroad?",
            "modelAnswer": "Ja, mein Reisepass ist noch fünf Jahre lang gültig.",
            "modelAnswerEN": "Yes, my passport is still valid for five years.",
            "tip": "Fragen Sie nach der Gültigkeit ('Wie lange gültig?') oder Beantragung."
        },
        {
            "id": "card_30",
            "theme": "Medien & Technik",
            "themeEN": "Media & Tech",
            "keyword": "Kopfhörer",
            "keywordEN": "headphones",
            "emoji": "🎧",
            "modelQuestion": "Benutzen Sie beim Bahnfahren kabellose Kopfhörer?",
            "modelQuestionEN": "Do you use wireless headphones when traveling by train?",
            "modelAnswer": "Ja, ich höre im Zug immer Podcasts mit meinen Kopfhörern.",
            "modelAnswerEN": "Yes, I always listen to podcasts with my headphones on the train.",
            "tip": "Nutzen Sie das Verb 'benutzen' oder 'tragen'."
        },
        {
            "id": "card_31",
            "theme": "Arbeit & Beruf",
            "themeEN": "Work & Career",
            "keyword": "Gleitzeit",
            "keywordEN": "flextime / flexible hours",
            "emoji": "⏰",
            "modelQuestion": "Haben Sie an Ihrem Arbeitsplatz flexible Gleitzeit?",
            "modelQuestionEN": "Do you have flexible working hours at your workplace?",
            "modelAnswer": "Ja, ich kann morgens flexibel zwischen 7 und 9 Uhr anfangen.",
            "modelAnswerEN": "Yes, I can start flexibly in the morning between 7 and 9 AM.",
            "tip": "Fragen Sie nach Arbeitsbeginn oder Arbeitszeiten."
        },
        {
            "id": "card_32",
            "theme": "Wetter & Jahreszeiten",
            "themeEN": "Weather & Seasons",
            "keyword": "Regenschirm",
            "keywordEN": "umbrella",
            "emoji": "☔",
            "modelQuestion": "Haben Sie im Herbst immer einen kleinen Regenschirm dabei?",
            "modelQuestionEN": "Do you always carry a small umbrella with you in autumn?",
            "modelAnswer": "Ja, in meinem Rucksack liegt immer ein kompakter Taschenschirm.",
            "modelAnswerEN": "Yes, there is always a compact pocket umbrella in my backpack.",
            "tip": "Fragen Sie mit 'Dabei haben' oder 'Wann benutzen Sie...'."
        },
        {
            "id": "card_33",
            "theme": "Haustiere & Tiere",
            "themeEN": "Pets & Animals",
            "keyword": "Hundespaziergang",
            "keywordEN": "dog walk",
            "emoji": "🐕",
            "modelQuestion": "Wie oft am Tag gehen Sie mit Ihrem Hund spazieren?",
            "modelQuestionEN": "How many times a day do you walk your dog?",
            "modelAnswer": "Ich gehe dreimal täglich mit ihm im Stadtpark spazieren.",
            "modelAnswerEN": "I walk with him three times a day in the city park.",
            "tip": "Nutzen Sie 'Gassi gehen' oder 'spazieren gehen'."
        },
        {
            "id": "card_34",
            "theme": "Feste & Geschenke",
            "themeEN": "Celebrations & Gifts",
            "keyword": "Geburtstagskuchen",
            "keywordEN": "birthday cake",
            "emoji": "🎂",
            "modelQuestion": "Backen Sie Ihren Geburtstagskuchen selbst oder kaufen Sie ihn?",
            "modelQuestionEN": "Do you bake your birthday cake yourself or do you buy it?",
            "modelAnswer": "Ich backe am liebsten einen traditionellen Käsekuchen selbst.",
            "modelAnswerEN": "I prefer baking a traditional cheesecake myself.",
            "tip": "Gegenüberstellung 'selbst backen' vs 'kaufen'."
        },
        {
            "id": "card_35",
            "theme": "Kultur & Kino",
            "themeEN": "Culture & Cinema",
            "keyword": "Kinosaal",
            "keywordEN": "cinema auditorium",
            "emoji": "🍿",
            "modelQuestion": "Sitzen Sie im Kino am liebsten ganz hinten oder in der Mitte?",
            "modelQuestionEN": "In the cinema do you prefer sitting at the very back or in the middle?",
            "modelAnswer": "Ich sitze am liebsten genau in der Mitte für den besten Ton.",
            "modelAnswerEN": "I prefer sitting right in the middle for the best sound.",
            "tip": "Fragen Sie nach Sitzplatz oder Popcorn."
        },
        {
            "id": "card_36",
            "theme": "Sprachen lernen",
            "themeEN": "Language Learning",
            "keyword": "Wörterbuch",
            "keywordEN": "dictionary",
            "emoji": "📖",
            "modelQuestion": "Nutzen Sie zum Deutschlernen eine Wörterbuch-App auf dem Handy?",
            "modelQuestionEN": "Do you use a dictionary app on your phone for learning German?",
            "modelAnswer": "Ja, ich schlage neue Vokabeln schnell in einer App nach.",
            "modelAnswerEN": "Yes, I quickly look up new vocabulary in an app.",
            "tip": "Verwenden Sie 'nachschlagen' oder 'benutzen'."
        },
        {
            "id": "card_37",
            "theme": "Wohnort & Stadt",
            "themeEN": "Town & City",
            "keyword": "Rathaus",
            "keywordEN": "town hall",
            "emoji": "🏛️",
            "modelQuestion": "Waren Sie schon einmal im historischen Rathaus Ihrer Stadt?",
            "modelQuestionEN": "Have you ever been inside the historic town hall of your city?",
            "modelAnswer": "Ja, ich war dort im Bürgeramt zur Wohnsitzanmeldung.",
            "modelAnswerEN": "Yes, I was there at the citizen's office for address registration.",
            "tip": "Fragen Sie nach dem Bürgerbüro oder der Architektur."
        },
        {
            "id": "card_38",
            "theme": "Verkehr & Reise",
            "themeEN": "Transport & Travel",
            "keyword": "Fahrkarte",
            "keywordEN": "ticket / transit pass",
            "emoji": "🎫",
            "modelQuestion": "Kaufen Sie Ihre Fahrkarte am Automaten oder online auf dem Smartphone?",
            "modelQuestionEN": "Do you buy your transit ticket at the machine or online on your smartphone?",
            "modelAnswer": "Ich habe ein Deutschlandticket als digitales Abo auf meinem Handy.",
            "modelAnswerEN": "I have a Deutschlandticket as a digital subscription on my phone.",
            "tip": "Fragen Sie nach digitalem Ticket oder Barzahlung."
        }
    ],
    "teil2_monologues": [
        {
            "id": "mono_22",
            "title": "Mein liebster Feiertag & Traditionen",
            "titleEN": "My Favourite Holiday & Traditions",
            "emoji": "🎄",
            "cues": [
                {
                    "de": "Welcher Feiertag & Jahreszeit",
                    "en": "Which holiday & season"
                },
                {
                    "de": "Mit wem gefeiert wird",
                    "en": "With whom it is celebrated"
                },
                {
                    "de": "Typisches Essen & Rituale",
                    "en": "Typical food & rituals"
                },
                {
                    "de": "Warum mir dieses Fest wichtig ist",
                    "en": "Why this celebration matters to me"
                }
            ],
            "sentences": [
                {
                    "de": "Mein liebster Feiertag im Jahr ist das Weihnachtsfest im Dezember.",
                    "en": "My favourite holiday of the year is Christmas in December.",
                    "mal": "മൈൻ ലീബ്സ്റ്റർ ഫൈയർടാഗ് ഇം യാർ ഇസ്റ്റ് ദാസ് വൈനാഹ്റ്റ്‌സ്ഫെസ്റ്റ് ഇം ഡെത്സെംബർ."
                },
                {
                    "de": "An Heiligabend kommt die ganze Familie gemütlich bei uns zu Hause zusammen.",
                    "en": "On Christmas Eve the whole family gathers cozily at our home.",
                    "mal": "അൻ ഹൈലിഗ്ആബെൻഡ് കൊംറ്റ് ഡീ ഗാൻത്സെ ഫാമിലിയെ ഗെമ്യൂട്ട്ലിഹ് ബൈ ഉൻസ് ത്സു ഹൗസെ ത്സുസാമെൻ."
                },
                {
                    "de": "Wir schmücken gemeinsam den Weihnachtsbaum und packen Geschenke aus.",
                    "en": "Together we decorate the Christmas tree and unpack presents.",
                    "mal": "വീർ ഷ്മ്യുക്കൻ ഗെമൈൻസാം ഡെൻ വൈനാഹ്റ്റ്‌സ്ബൗം ഉണ്ട് പാക്കൻ ഗെഷെങ്കെ ഔസ്."
                },
                {
                    "de": "Am Abend essen wir traditionell gebratenen Fisch mit Kartoffelsalat.",
                    "en": "In the evening we traditionally eat roasted fish with potato salad.",
                    "mal": "അം ആബെൻഡ് എസ്സെൻ വീർ ട്രാഡിഷൊണെൽ ഗെബ്രാറ്റനെൻ ഫിഷ് മിറ്റ് കാർട്ടോഫെൽസലാറ്റ്."
                },
                {
                    "de": "Ich liebe die warme Atmosphäre und die vielen bunten Lichter.",
                    "en": "I love the warm atmosphere and the many colorful lights.",
                    "mal": "ഇഹ് ലീബെ ഡീ വാർമെ അറ്റ്മോസ്ഫെയറെ ഉണ്ട് ഡീ വീലെൻ ബുൻറ്റെൻ ലിഹ്റ്റർ."
                },
                {
                    "de": "Für mich ist diese Zeit eine wunderbare Gelegenheit zum Erholen.",
                    "en": "For me this time is a wonderful opportunity to recover and rest.",
                    "mal": "ഫ്യൂർ മിഹ് ഇസ്റ്റ് ഡീസെ ത്സൈറ്റ് ഐനെ വുൻഡർബാരെ ഗെലേഖെൻഹൈറ്റ് ത്സും എർഹോളെൻ."
                }
            ]
        },
        {
            "id": "mono_23",
            "title": "Meine Ernährung & Kochen zu Hause",
            "titleEN": "My Nutrition & Cooking at Home",
            "emoji": "🍳",
            "cues": [
                {
                    "de": "Was ich gerne koche",
                    "en": "What I like to cook"
                },
                {
                    "de": "Zutaten & Frische",
                    "en": "Ingredients & freshness"
                },
                {
                    "de": "Gemeinsam oder alleine essen",
                    "en": "Eating together or alone"
                },
                {
                    "de": "Gesunde Ernährung im Alltag",
                    "en": "Healthy eating in daily life"
                }
            ],
            "sentences": [
                {
                    "de": "Ich koche fast jeden Tag frisch und gerne in meiner eigenen Küche.",
                    "en": "I cook fresh almost every day and enjoy being in my own kitchen.",
                    "mal": "ഇഹ് കോഹെ ഫാസ്റ്റ് യേഡെൻ ടാഗ് ഫ്രിഷ് ഉണ്ട് ഗെർനെ ഇൻ മൈനർ ഐഗെനെൻ ക്യുഹെ."
                },
                {
                    "de": "Am liebsten bereite ich bunte Gemüsepfannen mit Reis oder Nudeln zu.",
                    "en": "I prefer preparing colorful vegetable stir-fries with rice or noodles.",
                    "mal": "അം ലീബ്സ്റ്റൻ ബെറൈറ്റെ ഇഹ് ബുൻറ്റെ ഗെമ്യൂസെപ്ഫാനെൻ മിറ്റ് റൈസ് ഒഡെർ നൂഡെൽൻ ത്സു."
                },
                {
                    "de": "Frisches Gemüse kaufe ich am liebsten samstags auf dem Markt ein.",
                    "en": "I prefer shopping for fresh vegetables at the market on Saturdays.",
                    "mal": "ഫ്രിഷെസ് ഗെമ്യൂസെ കൗഫെ ഇഹ് അം ലീബ്സ്റ്റൻ സാംസ്റ്റാഗ്സ് ഔഫ് ഡെം മാർക്ക്റ്റ് ഐൻ."
                },
                {
                    "de": "Unter der Woche koche ich oft für mich, am Wochenende für Freunde.",
                    "en": "During the week I often cook for myself, on weekends for friends.",
                    "mal": "ഉണ്ടർ ഡെർ വോഹെ കോഹെ ഇഹ് ഓഫ്റ്റ് ഫ്യൂർ മിഹ്, അം വോഹെൻഎൻഡെ ഫ്യൂർ ഫ്രോയിൻഡെ."
                },
                {
                    "de": "Eine gesunde Ernährung gibt mir viel Energie für meine tägliche Arbeit.",
                    "en": "A healthy diet gives me lots of energy for my daily work.",
                    "mal": "ഐനെ ഗെസുൻഡെ എർനേരുങ് ഗിബ്റ്റ് മിർ വീൽ എനെർഗീ ഫ്യൂർ മൈനെ ടേഗ്ലിഹെ ആർബൈറ്റ്."
                },
                {
                    "de": "Am Wochenende probiere ich oft neue Gewürze und Rezepte aus.",
                    "en": "On weekends I often try out new spices and recipes.",
                    "mal": "അം വോഹെൻഎൻഡെ പ്രൊബീയറെ ഇഹ് ഓഫ്റ്റ് നോയെ ഗെവ്യൂർത്സെ ഉണ്ട് റെത്സെപ്റ്റെ ഔസ്."
                }
            ]
        },
        {
            "id": "mono_24",
            "title": "Mein Fahrrad & umweltfreundliche Mobilität",
            "titleEN": "My Bicycle & Eco-Friendly Mobility",
            "emoji": "🚲",
            "cues": [
                {
                    "de": "Wie oft ich Fahrrad fahre",
                    "en": "How often I ride a bike"
                },
                {
                    "de": "Strecken & Wege",
                    "en": "Routes & destinations"
                },
                {
                    "de": "Vorteile gegenüber dem Auto",
                    "en": "Advantages over the car"
                },
                {
                    "de": "Fahrradwege in meiner Stadt",
                    "en": "Bicycle lanes in my city"
                }
            ],
            "sentences": [
                {
                    "de": "Ich fahre bei fast jedem Wetter mit dem Fahrrad zur Arbeit.",
                    "en": "I ride my bicycle to work in almost any weather.",
                    "mal": "ഇഹ് ഫാരെ ബൈ ഫാസ്റ്റ് യേഡെം വെറ്റർ മിറ്റ് ഡെം ഫാർറാഡ് ത്സൂർ ആർബൈറ്റ്."
                },
                {
                    "de": "Mein Arbeitsweg dauert mit dem Rad nur etwa zwanzig Minuten.",
                    "en": "My commute takes only about twenty minutes by bike.",
                    "mal": "മൈൻ ആർബൈറ്റ്സ്‌വേഗ് ഡൗവേർട്ട് മിറ്റ് ഡെം റാഡ് നൂർ എറ്റ്വാ ത്സ્વાൻത്സിഹ് മിനൂട്ടെൻ."
                },
                {
                    "de": "Auf dem Fahrrad spare ich Benzingeld und muss keinen Parkplatz suchen.",
                    "en": "On the bicycle I save petrol money and do not have to search for parking.",
                    "mal": "ഔഫ് ഡെം ഫാർറാഡ് സ്പാരെ ഇഹ് ബെൻത്സീൻഗെൽഡ് ഉണ്ട് മുസ് കൈനെൻ പാർക്ക്പ്ലാറ്റ്സ് സൂഹെൻ."
                },
                {
                    "de": "In meiner Stadt gibt es zum Glück viele sichere und grüne Radwege.",
                    "en": "In my city fortunately there are many safe and green bike paths.",
                    "mal": "ഇൻ മൈനർ സ്റ്റാറ്റ് ഗിബ്റ്റ് എസ് ത്സും ഗ്ല്യുക്ക് വീലെ സിഹെരെ ഉണ്ട് ഗ്ര്യൂടെ റാഡ്‌വേഗെ."
                },
                {
                    "de": "Die Bewegung an der frischen Luft hält mich fit und macht wach.",
                    "en": "Exercise in the fresh air keeps me fit and wakes me up.",
                    "mal": "ഡീ ബെവേഗുങ് അൻ ഡെർ ഫ്രിഷെൻ ലുഫ്റ്റ് ഹെൽറ്റ് മിഹ് ഫിറ്റ് ഉണ്ട് മാഹ്റ്റ് വാഹ്."
                },
                {
                    "de": "Am Wochenende mache ich gerne lange Touren entlang des Flusses.",
                    "en": "On weekends I like doing long tours along the river.",
                    "mal": "അം വോഹെൻഎൻഡെ മാഹെ ഇഹ് ഗെർനെ ലാംഗെ ടൂറെൻ എൻറ്റ്‌ലാംഗ് ഡെസ് ഫ്ലുസ്സെസ്."
                }
            ]
        },
        {
            "id": "mono_25",
            "title": "Musik hören & mein Lieblingskonzert",
            "titleEN": "Listening to Music & My Favorite Concert",
            "emoji": "🎵",
            "cues": [
                {
                    "de": "Lieblingsmusikrichtung",
                    "en": "Favorite music genre"
                },
                {
                    "de": "Wann ich Musik höre",
                    "en": "When I listen to music"
                },
                {
                    "de": "Konzerte & Live-Auftritte",
                    "en": "Concerts & live performances"
                },
                {
                    "de": "Bedeutung von Musik",
                    "en": "Significance of music"
                }
            ],
            "sentences": [
                {
                    "de": "Musik spielt in meinem täglichen Leben eine sehr wichtige Rolle.",
                    "en": "Music plays a very important role in my daily life.",
                    "mal": "മ്യൂസിക് ഷ്ലീൽറ്റ് ഇൻ മൈനെം ടേഗ്ലിഹെൻ ലേബെൻ ഐനെ സേർ വിഹ്റ്റിഗെ റോളെ."
                },
                {
                    "de": "Ich höre am liebsten Popmusik, Jazz und ruhige Klaviermelodien.",
                    "en": "I prefer listening to pop music, jazz, and quiet piano melodies.",
                    "mal": "ഇഹ് ഹ്യോറെ അം ലീബ്സ്റ്റൻ പോപ്പ്മ്യൂസിക്, ജാസ് ഉണ്ട് റൂഹിഗെ ക്ലാവിയർമെലോഡീൻ."
                },
                {
                    "de": "Morgens in der Bahn höre ich Musik, um mich zu motivieren.",
                    "en": "In the morning on the train I listen to music to motivate myself.",
                    "mal": "മോർഗെൻസ് ഇൻ ഡെർ ബാൻ ഹ്യോറെ ഇഹ് മ്യൂസിക്, ഉം മിഹ് ത്സു മോട്ടിവിറെൻ."
                },
                {
                    "de": "Letztes Jahr war ich auf einem unvergesslichen Open-Air-Konzert.",
                    "en": "Last year I attended an unforgettable open-air concert.",
                    "mal": "ലെറ്റ്‌സ്റ്റെസ് യാർ വാർ ഇഹ് ഔഫ് ഐനെം ഉൺഫെർഗെസ്‌ലിഹെൻ ഓപ്പൺ-എയർ-കോൺത്സെർട്ട്."
                },
                {
                    "de": "Die Stimmung unter den Menschen war einfach unglaublich schön.",
                    "en": "The mood among the people was simply incredibly beautiful.",
                    "mal": "ഡീ സ്റ്റിമുങ് ഉണ്ടർ ഡെൻ മെൻഷെൻ വാർ ഐൻഫാഹ് ഉൺഗ്ലൗബ്ലിഹ് ഷ്യോൻ."
                },
                {
                    "de": "Nach der Arbeit hilft mir Instrumentalmusik beim Abschalten.",
                    "en": "After work, instrumental music helps me unwind.",
                    "mal": "നാഹ് ഡെർ ആർബൈറ്റ് ഹിൽഫ്റ്റ് മിർ ഇൻസ്ട്രുമെന്റൽമ്യൂസിക് ബൈം അബ്‌ഷാൽറ്റെൻ."
                }
            ]
        },
        {
            "id": "mono_26",
            "title": "Ein gemütlicher Sonntag zu Hause",
            "titleEN": "A Cozy Sunday at Home",
            "emoji": "🛋️",
            "cues": [
                {
                    "de": "Morgenroutine am Sonntag",
                    "en": "Morning routine on Sunday"
                },
                {
                    "de": "Ausschlafen & Frühstück",
                    "en": "Sleeping in & breakfast"
                },
                {
                    "de": "Entspannung & Hobbys",
                    "en": "Relaxation & hobbies"
                },
                {
                    "de": "Vorbereitung auf die neue Woche",
                    "en": "Preparation for the new week"
                }
            ],
            "sentences": [
                {
                    "de": "Der Sonntag ist für mich der erholsamste Tag der ganzen Woche.",
                    "en": "Sunday is the most restful day of the entire week for me.",
                    "mal": "ഡെർ സോൺടാഗ് ഇസ്റ്റ് ഫ്യൂർ മിഹ് ഡെർ എർഹോൾസാംസ്റ്റെ ടാഗ് ഡെർ ഗാൻത്സെൻ വോഹെ."
                },
                {
                    "de": "Ich schlafe meistens bis neun Uhr aus und stehe ohne Wecker auf.",
                    "en": "I usually sleep in until nine o'clock and wake up without an alarm.",
                    "mal": "ഇഹ് ഷ്ളാഫെ മൈസ്റ്റൻസ് ബിസ് നോയിൻ ഊർ ഔസ് ഉണ്ട് സ്റ്റേഹെ ഓനെ വെക്കർ ഔഫ്."
                },
                {
                    "de": "Zum Frühstück mache ich mir frischen Kaffee und koche zwei Eier.",
                    "en": "For breakfast I make fresh coffee and boil two eggs.",
                    "mal": "ത്സും ഫ്ര്യൂഹ്സ്റ്റ്യുക്ക് മാഹെ ഇഹ് മിർ ഫ്രിഷെൻ കാഫെ ഉണ്ട് കോഹെ ത്സ్వൈ ഐയർ."
                },
                {
                    "de": "Nachmittags lese ich ein deutsches Buch oder schaue einen Film.",
                    "en": "In the afternoon I read a German book or watch a movie.",
                    "mal": "നാഹ്മിറ്റാഗ്സ് ലേസെ ഇഹ് ഐൻ ഡോയിച്ചെസ് ബൂഹ് ഒഡെർ ഷൗവെ ഐനെൻ ഫിലിം."
                },
                {
                    "de": "Ein kleiner Spaziergang im Park bringt mir wieder frische Luft.",
                    "en": "A short walk in the park brings me fresh air again.",
                    "mal": "ഐൻ ക്ലൈനർ സ്പാത്സീയർഗാങ് ഇം പാർക്ക് ബ്രിങ്റ്റ് മിർ വീഡെർ ഫ്രിഷെ ലുഫ്റ്റ്."
                },
                {
                    "de": "Abends bereite ich meine Kleidung für den Montagmorgen vor.",
                    "en": "In the evening I prepare my clothes for Monday morning.",
                    "mal": "ആബെൻഡ്സ് ബെറൈറ്റെ ഇഹ് മൈനെ ക്ലൈഡുങ് ഫ്യൂർ ഡെൻ മോൺടാഗ്മോർഗെൻ ഫോർ."
                }
            ]
        },
        {
            "id": "mono_27",
            "title": "Mein Deutschkurs & meine Lerntipps",
            "titleEN": "My German Course & Learning Tips",
            "emoji": "🇩🇪",
            "cues": [
                {
                    "de": "Wo & wie oft ich Deutsch lerne",
                    "en": "Where & how often I study German"
                },
                {
                    "de": "Meine größten Herausforderungen",
                    "en": "My biggest challenges"
                },
                {
                    "de": "Nützliche Lernmethoden",
                    "en": "Useful learning methods"
                },
                {
                    "de": "Mein persönliches Ziel",
                    "en": "My personal goal"
                }
            ],
            "sentences": [
                {
                    "de": "Ich besuche seit sechs Monaten zweimal wöchentlich einen A2-Deutschkurs.",
                    "en": "I have been attending an A2 German course twice a week for six months.",
                    "mal": "ഇഹ് ബെസൂഹെ സൈറ്റ് സെക്സ് മൊണാറ്റെൻ ത്സ્વાൈമാൽ വ്യോഹെന്റ്‌ലിഹ് ഐനെൻ ആ-ത്സ્વાൈ-ഡോയിച്ച്കുർസ്."
                },
                {
                    "de": "Im Unterricht sprechen wir viel mit Dialogen und üben Grammatik.",
                    "en": "In class we speak a lot with dialogues and practice grammar.",
                    "mal": "ഇം ഉണ്ടർറിഹ്റ്റ് ഷ്ലെഹെൻ വീർ വീൽ മിറ്റ് ഡിയാലോഗെൻ ഉണ്ട് യ്യൂബെൻ ഗ്രാമാറ്റിക്."
                },
                {
                    "de": "Am Anfang fand ich die Artikel der, die und das recht schwierig.",
                    "en": "In the beginning I found the articles der, die, and das quite tricky.",
                    "mal": "അം അൻഫാങ് ഫാൻഡ് ഇഹ് ഡീ ആർട്ടിക്കൽ ഡെർ, ഡീ ഉണ്ട് ദാസ് റെഹ്റ്റ് ഷ്വീയറിഹ്."
                },
                {
                    "de": "Ich lerne Vokabeln jeden Tag mit einer praktischen Smartphone-App.",
                    "en": "I learn vocabulary every day with a practical smartphone app.",
                    "mal": "ഇഹ് ലെർനെ വോക്കാബെൽൻ യേഡെൻ ടാഗ് മിറ്റ് ഐനർ പ്രാക്ടിഷെൻ സ്മാർട്ട്ഫോൺ-ആപ്പ്."
                },
                {
                    "de": "Außerdem schaue ich deutsche Nachrichten mit einfachen Untertiteln.",
                    "en": "Moreover I watch German news with simple subtitles.",
                    "mal": "ഔസ്സെർഡേം ഷൗവെ ഇഹ് ഡോയിച്ചെ നാഹ്റിഹ്റ്റെൻ മിറ്റ് ഐൻഫാഹെൻ ഉണ്ടർടിറ്റെൽൻ."
                },
                {
                    "de": "Mein Ziel ist es, die A2-Prüfung mit einer guten Note zu bestehen.",
                    "en": "My goal is to pass the A2 exam with a good grade.",
                    "mal": "മൈൻ ത്സീൽ ഇസ്റ്റ് എസ്, ഡീ ആ-ത്സ્વાൈ-പ്ര്യൂഫുങ് മിറ്റ് ഐനർ ഗൂട്ടെൻ നോട്ടെ ത്സു ബെസ്റ്റേഹെൻ."
                }
            ]
        },
        {
            "id": "mono_28",
            "title": "Mein Haustier oder Lieblingstier",
            "titleEN": "My Pet or Favorite Animal",
            "emoji": "🐾",
            "cues": [
                {
                    "de": "Welches Tier & Aussehen",
                    "en": "Which animal & appearance"
                },
                {
                    "de": "Fütterung & Pflege",
                    "en": "Feeding & care"
                },
                {
                    "de": "Aktivitäten mit dem Tier",
                    "en": "Activities with the animal"
                },
                {
                    "de": "Warum ich Tiere mag",
                    "en": "Why I like animals"
                }
            ],
            "sentences": [
                {
                    "de": "Mein Lieblingstier ist die Hauskatze, und ich habe eine getigerte Katze namens Luna.",
                    "en": "My favorite animal is the house cat, and I have a tabby cat named Luna.",
                    "mal": "മൈൻ ലീബ്ലിങ്‌സ്റ്റീർ ഇസ്റ്റ് ഡീ ഹൗസ്കാറ്റ്സെ, ഉണ്ട് ഇഹ് ഹാബെ ഐനെ ഗെടീഗെർട്ടെ കാറ്റ്സെ നാമെൻസ് ലൂണാ."
                },
                {
                    "de": "Sie hat weiches graues Fell und sehr schöne grüne Augen.",
                    "en": "She has soft grey fur and very beautiful green eyes.",
                    "mal": "സീ ഹാറ്റ് വൈഹെസ് ഗ്രൗവെസ് ഫെൽ ഉണ്ട് സേർ ഷ്യോനെ ഗ്ര്യൂടെ ഔഗെൻ."
                },
                {
                    "de": "Jeden Morgen gebe ich ihr frisches Nassfutter und sauberes Wasser.",
                    "en": "Every morning I give her fresh wet food and clean water.",
                    "mal": "യേഡെൻ മോർഗെൻ ഗേബെ ഇഹ് ഇർ ഫ്രിഷെസ് നാസ്ഫുട്ടർ ഉണ്ട് സൗബെറെസ് വാസ്സർ."
                },
                {
                    "de": "Nachmittags spielt sie gerne mit einer kleinen Spielzeugmaus.",
                    "en": "In the afternoon she enjoys playing with a small toy mouse.",
                    "mal": "നാഹ്മിറ്റാഗ്സ് ഷ്ലീൽറ്റ് സീ ഗെർനെ മിറ്റ് ഐനർ ക്ലൈനെൻ ഷ്ലീൽത്സോയ്ഗ്മൗസ്."
                },
                {
                    "de": "Wenn ich auf dem Sofa sitze, kuschelt sie sich an mich.",
                    "en": "When I sit on the sofa, she cuddles up against me.",
                    "mal": "വെൻ ഇഹ് ഔഫ് ഡെം സോഫാ സിറ്റ്സെ, കുഷെൽറ്റ് സീ സിഹ് അൻ മിഹ്."
                },
                {
                    "de": "Tiere bringen viel Freude und Ruhe in mein alltägliches Leben.",
                    "en": "Animals bring lots of joy and calm into my everyday life.",
                    "mal": "റ്റീറെ ബ്രിങ്ങെൻ വീൽ ഫ്രോയിഡെ ഉണ്ട് റൂഹെ ഇൻ മൈൻ ആൾടേഗ്ലിഹെസ് ലേബെൻ."
                }
            ]
        },
        {
            "id": "mono_29",
            "title": "Einkaufen im Supermarkt & auf dem Markt",
            "titleEN": "Shopping in Supermarket & at Market",
            "emoji": "🛒",
            "cues": [
                {
                    "de": "Wo ich meistens einkaufe",
                    "en": "Where I mostly shop"
                },
                {
                    "de": "Einkaufszettel & Planung",
                    "en": "Shopping list & planning"
                },
                {
                    "de": "Bevorzugte Produkte",
                    "en": "Preferred products"
                },
                {
                    "de": "Zahlungsmethode",
                    "en": "Payment method"
                }
            ],
            "sentences": [
                {
                    "de": "Ich erledige meinen Wocheneinkauf meistens am Freitagnachmittag.",
                    "en": "I mostly do my weekly grocery shopping on Friday afternoon.",
                    "mal": "ഇഹ് എർലേഡിഗെ മൈനെൻ വോഹെൻഐൻകൗഫ് മൈസ്റ്റൻസ് അം ഫ്രൈടാഗ്നാഹ്മിറ്റാഗ്."
                },
                {
                    "de": "Vorher schreibe ich immer einen genauen Einkaufszettel auf mein Handy.",
                    "en": "Beforehand I always write an exact shopping list on my phone.",
                    "mal": "ഫോർഹെർ ഷ്രൈബെ ഇഹ് ഇമ്മർ ഐനെൻ ഗെനൗവെൻ ഐൻകൗഫ്‌സ്ത്സെറ്റൽ ഔഫ് മൈൻ ഹാൻഡി."
                },
                {
                    "de": "Grundnahrungsmittel wie Milch, Mehl und Reis kaufe ich im Supermarkt.",
                    "en": "Staple foods like milk, flour, and rice I buy in the supermarket.",
                    "mal": "ഗ്രുൺഡ്നാരുംഗ്സ്മിറ്റൽ വീ മിൽഹ്, മേൽ ഉണ്ട് റൈസ് കൗഫെ ഇഹ് ഇം സൂപ്പർമാർക്ക്റ്റ്."
                },
                {
                    "de": "Frische Beeren und knuspriges Brot kaufe ich lieber bei regionalen Händlern.",
                    "en": "Fresh berries and crispy bread I prefer buying from regional traders.",
                    "mal": "ഫ്രിഷെ ബീരെൻ ഉണ്ട് ക്നുസ്പ്രിഗെസ് ബ്രോട്ട് കൗഫെ ഇഹ് ലീബെർ ബൈ റെഗിയോണാലെൻ ഹെൻഡ്‌ലേൺ."
                },
                {
                    "de": "An der Kasse bezahle ich fast immer kontaktlos mit meiner Bankkarte.",
                    "en": "At the checkout I almost always pay contactlessly with my bank card.",
                    "mal": "അൻ ഡെർ കാസ്സെ ബെത്സാലെ ഇഹ് ഫാസ്റ്റ് ഇമ്മർ കൊൺടാക്റ്റ്‌ലോസ് മിറ്റ് മൈനർ ബാങ്ക്കാർട്ടെ."
                },
                {
                    "de": "So behalte ich meine monatlichen Ausgaben sehr gut im Überblick.",
                    "en": "That way I keep track of my monthly expenses very well.",
                    "mal": "സോ ബെഹാൽറ്റെ ഇഹ് മൈനെ മോണാറ്റ്‌ലിഹെൻ ഔസ്ഗാബെൻ സേർ ഗൂട്ട് ഇം യ്യൂബർബ്ലിക്ക്."
                }
            ]
        },
        {
            "id": "mono_30",
            "title": "Mein idealer Arbeitsplatz & Kollegen",
            "titleEN": "My Ideal Workplace & Colleagues",
            "emoji": "💼",
            "cues": [
                {
                    "de": "Beruf oder Traumberuf",
                    "en": "Job or dream profession"
                },
                {
                    "de": "Büro oder Homeoffice",
                    "en": "Office or home office"
                },
                {
                    "de": "Zusammenarbeit im Team",
                    "en": "Team cooperation"
                },
                {
                    "de": "Was mir bei der Arbeit wichtig ist",
                    "en": "What matters to me at work"
                }
            ],
            "sentences": [
                {
                    "de": "Ein guter Arbeitsplatz braucht für mich vor allem ein freundliches Team.",
                    "en": "For me, a good workplace above all requires a friendly team.",
                    "mal": "ഐൻ ഗൂട്ടർ ആർബൈറ്റ്സ്പ്ലാറ്റ്സ് ബ്രൗഹ്റ്റ് ഫ്യൂർ മിഹ് ഫോർ ആല്ലെം ഐൻ ഫ്രോയിൻഡ്‌ലിഹെസ് ടീം."
                },
                {
                    "de": "Ich arbeite gerne drei Tage im Büro und zwei Tage im Homeoffice.",
                    "en": "I like working three days in the office and two days in home office.",
                    "mal": "ഇഹ് ആർബൈറ്റെ ഗെർനെ ഡ്രൈ ടാഗെ ഇം ബ്യുറോ ഉണ്ട് ത്സ્વાൈ ടാഗെ ഇം ഹോംഓഫീസ്."
                },
                {
                    "de": "Mein Schreibtisch ist ordentlich und hat einen großen, ergonomischen Bildschirm.",
                    "en": "My desk is tidy and has a large, ergonomic monitor screen.",
                    "mal": "മൈൻ ഷ്രൈബ്‌ടിഷ് ഇസ്റ്റ് ഓർഡെന്റ്‌ലിഹ് ഉണ്ട് ഹാറ്റ് ഐനെൻ ഗ്രോസ്സെൻ, എർഗോണോമിഷെൻ ബിൽഡ്ഷിർമ്."
                },
                {
                    "de": "In der Mittagspause essen wir Kollegen oft gemeinsam in der Kantine.",
                    "en": "During lunch break we colleagues often eat together in the cafeteria.",
                    "mal": "ഇൻ ഡെർ മിറ്റാഗ്‌സ്പൗസെ എസ്സെൻ വീർ കൊളേഗെൻ ഓഫ്റ്റ് ഗെമൈൻസാം ഇൻ ഡെർ കാന്റീനെ."
                },
                {
                    "de": "Hilfsbereitschaft und offene Kommunikation schätze ich am meisten.",
                    "en": "Helpfulness and open communication are what I value most.",
                    "mal": "ഹിൽഫ്‌സ്‌ബെറൈറ്റ്‌ഷാഫ്റ്റ് ഉണ്ട് ഒഫെനെ കൊമ്യൂണിക്കത്സ്യോൻ ഷെറ്റ്സെ ഇഹ് അം മൈസ്റ്റെൻ."
                },
                {
                    "de": "Gute Arbeitsbedingungen motivieren mich jeden Tag aufs Neue.",
                    "en": "Good working conditions motivate me anew every day.",
                    "mal": "ഗൂട്ടെ ആർബൈറ്റ്സ്ബെഡിങ്ഗുങ്ങെൻ മോട്ടിവിറെൻ മിഹ് യേഡെൻ ടാഗ് ഔഫ്സ് നോയെ."
                }
            ]
        },
        {
            "id": "mono_31",
            "title": "Meine Lieblingsjahreszeit",
            "titleEN": "My Favorite Season",
            "emoji": "🍂",
            "cues": [
                {
                    "de": "Welche Jahreszeit & Wetter",
                    "en": "Which season & weather"
                },
                {
                    "de": "Veränderungen in der Natur",
                    "en": "Changes in nature"
                },
                {
                    "de": "Aktivitäten in dieser Zeit",
                    "en": "Activities during this time"
                },
                {
                    "de": "Warum ich diese Jahreszeit mag",
                    "en": "Why I like this season"
                }
            ],
            "sentences": [
                {
                    "de": "Meine persönliche Lieblingsjahreszeit in Deutschland ist der bunte Herbst.",
                    "en": "My personal favorite season in Germany is the colorful autumn.",
                    "mal": "മൈനെ പേഴ്സോൺലിഹെ ലീബ്ലിങ്‌സ്യാരെസ്‌ത്സൈറ്റ് ഇൻ ഡോയിച്ച്‌ലാൻഡ് ഇസ്റ്റ് ഡെർ ബുൻറ്റെ ഹെർബ്സ്റ്റ്."
                },
                {
                    "de": "Die Blätter an den Bäumen färben sich wunderschön rot und gold.",
                    "en": "The leaves on trees turn wonderfully red and gold.",
                    "mal": "ഡീ ബ്ലെറ്റർ അൻ ഡെൻ ബോയ്മെൻ ഫെർബെൻ സിഹ് വുൻഡർഷോൺ റോട്ട് ഉണ്ട് ഗോൾഡ്."
                },
                {
                    "de": "Es ist weder zu heiß noch zu kalt, perfekt für lange Waldspaziergänge.",
                    "en": "It is neither too hot nor too cold, perfect for long forest walks.",
                    "mal": "എസ് ഇസ്റ്റ് വേഡെർ ത്സു ഹൈസ് നോഹ് ത്സു കാൽറ്റ്, പെർഫെക്റ്റ് ഫ്യൂർ ലാംഗെ വാൽഡ്‌സ്പാത്സീയർഗെംഗെ."
                },
                {
                    "de": "Im Oktober sammle ich gerne Maronen und trinke heißen Apfelpunsch.",
                    "en": "In October I enjoy collecting chestnuts and drinking hot spiced cider.",
                    "mal": "ഇം ഒക്ടോബർ സാംലെ ഇഹ് ഗെർനെ മാറോനെൻ ഉണ്ട് ട്രിങ്കെ ഹൈസ്സെൻ ആപ്ഫെൽപുൺഷ്."
                },
                {
                    "de": "Die frische, kühle Luft am Morgen finde ich sehr erfrischend.",
                    "en": "I find the crisp, cool morning air very refreshing.",
                    "mal": "ഡീ ഫ്രിഷെ, ക്യൂലെ ലുഫ്റ്റ് അം മോർഗെൻ ഫിൻഡെ ഇഹ് സേർ എർഫ്രിഷെൻഡ്."
                },
                {
                    "de": "Abends mache ich es mir mit Kerzen und heißem Tee gemütlich.",
                    "en": "In the evenings I make myself cozy with candles and hot tea.",
                    "mal": "ആബെൻഡ്സ് മാഹെ ഇഹ് എസ് മിർ മിറ്റ് കേർത്സെൻ ഉണ്ട് ഹൈസ്സെം ടേ ഗെമ്യൂട്ട്ലിഹ്."
                }
            ]
        },
        {
            "id": "mono_32",
            "title": "Sport im Freien & Joggen im Park",
            "titleEN": "Outdoor Sports & Jogging in the Park",
            "emoji": "🏃",
            "cues": [
                {
                    "de": "Welcher Sport & wie oft",
                    "en": "Which sport & how often"
                },
                {
                    "de": "Ausrüstung & Kleidung",
                    "en": "Equipment & clothing"
                },
                {
                    "de": "Ort & Tageszeit",
                    "en": "Location & time of day"
                },
                {
                    "de": "Gefühl nach dem Sport",
                    "en": "Feeling after sports"
                }
            ],
            "sentences": [
                {
                    "de": "Ich gehe zwei- bis dreimal in der Woche im Stadtpark joggen.",
                    "en": "I go jogging in the city park two to three times a week.",
                    "mal": "ഇഹ് ഗേഹെ ത്സ્વાൈ ബിസ് ഡ്രൈമാൽ ഇൻ ഡെർ വോഹെ ഇം സ്റ്റാറ്റ്പാർക്ക് ജോക്കെൻ."
                },
                {
                    "de": "Dazu brauche ich nur gute Laufschuhe und bequeme Sportkleidung.",
                    "en": "For that I only need good running shoes and comfortable sportswear.",
                    "mal": "ദാത്സു ബ്രൗഹ്റ്റ് ഇഹ് നൂർ ഗൂട്ടെ ലൗഫ്‌ഷൂഹെ ഉണ്ട് ബെക്വേമെ സ്പോർട്ട്ക്ലൈഡുങ്."
                },
                {
                    "de": "Am liebsten laufe ich früh am Morgen, wenn der Park noch ruhig ist.",
                    "en": "I prefer running early in the morning when the park is still quiet.",
                    "mal": "അം ലീബ്സ്റ്റൻ ലൗഫെ ഇഹ് ഫ്ര്യൂ അം മോർഗെൻ, വെൻ ഡെർ പാർക്ക് നോഹ് റൂഹിഹ് ഇസ്റ്റ്."
                },
                {
                    "de": "Eine Runde um den Parksee ist etwa vier Kilometer lang.",
                    "en": "One lap around the park lake is about four kilometers long.",
                    "mal": "ഐനെ റുണ്ഡെ ഉം ഡെൻ പാർക്ക്സീ ഇസ്റ്റ് എറ്റ്വാ ഫീയർ കിലോമീറ്റർ ലാംഗ്."
                },
                {
                    "de": "Beim Laufen höre ich motivierende Musik oder Podcasts.",
                    "en": "While running I listen to motivating music or podcasts.",
                    "mal": "ബൈം ലൗഫെൻ ഹ്യോറെ ഇഹ് മോട്ടിവിറെൻഡെ മ്യൂസിക് ഒഡെർ പോഡ്കാസ്റ്റ്സ്."
                },
                {
                    "de": "Nach der Dusche fühle ich mich voller Energie für den ganzen Tag.",
                    "en": "After the shower I feel full of energy for the whole day.",
                    "mal": "നാഹ് ഡെർ ഡൂഷെ ഫ്യൂലെ ഇഹ് മിഹ് വോല്ലെർ എനെർഗീ ഫ്യൂർ ഡെൻ ഗാൻത്സെൻ ടാഗ്."
                }
            ]
        },
        {
            "id": "mono_33",
            "title": "Ein unvergesslicher Ausflug ans Meer",
            "titleEN": "An Unforgettable Trip to the Sea",
            "emoji": "🌊",
            "cues": [
                {
                    "de": "Wohin & Reisezeit",
                    "en": "Where & travel time"
                },
                {
                    "de": "Unterkunft & Wetter",
                    "en": "Accommodation & weather"
                },
                {
                    "de": "Erlebnisse am Strand",
                    "en": "Experiences at the beach"
                },
                {
                    "de": "Besondere Erinnerungen",
                    "en": "Special memories"
                }
            ],
            "sentences": [
                {
                    "de": "Letzten Sommer habe ich ein langes Wochenende an der Ostsee verbracht.",
                    "en": "Last summer I spent a long weekend on the Baltic Sea.",
                    "mal": "ലെറ്റ്‌സ്റ്റെൻ സോമർ ഹാബെ ഇഹ് ഐൻ ലാംഗെസ് വോഹെൻഎൻഡെ അൻ ഡെർ ഓസ്റ്റ്സീ ഫെർബ്രാഹ്റ്റ്."
                },
                {
                    "de": "Wir haben in einer kleinen Ferienwohnung direkt an den Dünen gewohnt.",
                    "en": "We stayed in a small holiday apartment right on the dunes.",
                    "mal": "വീർ ഹാബെൻ ഇൻ ഐനർ ക്ലൈനെൻ ഫേരിയൻവോനുങ് ഡിറെക്റ്റ് അൻ ഡെൻ ഡ്യൂനെൻ ഗെവോൺറ്റ്."
                },
                {
                    "de": "Das Wetter war sonnig und der weiße Sandstrand war wunderschön.",
                    "en": "The weather was sunny and the white sandy beach was gorgeous.",
                    "mal": "ദാസ് വെറ്റർ വാർ സോൺണിഹ് ഉണ്ട് ഡെർ വൈസ്സെ സാൻഡ്‌സ്റ്റ്രാൻഡ് വാർ വുൻഡർഷോൺ."
                },
                {
                    "de": "Ich bin im Meer geschwommen und habe bunte Muscheln gesammelt.",
                    "en": "I swam in the sea and collected colorful seashells.",
                    "mal": "ഇഹ് ബിൻ ഇം മേർ ഗെഷ്വോമെൻ ഉണ്ട് ഹാബെ ബുൻറ്റെ മുഷെൽൻ ഗെസാംമെൽറ്റ്."
                },
                {
                    "de": "Abends haben wir in einem Hafenrestaurant frischen Fisch gegessen.",
                    "en": "In the evening we ate fresh fish at a harbor restaurant.",
                    "mal": "ആബെൻഡ്സ് ഹാബെൻ വീർ ഇൻ ഐനെം ഹാഫെൻറെസ്റ്റോറന്റ് ഫ്രിഷെൻ ഫിഷ് ഗെഗെസ്സെൻ."
                },
                {
                    "de": "Das Rauschen der Wellen werde ich nie vergessen.",
                    "en": "The sound of the waves I will never forget.",
                    "mal": "ദാസ് റൗഷെൻ ഡെർ വെല്ലെൻ വേർഡെ ഇഹ് നീ ഫെർഗെസ്സെൻ."
                }
            ]
        },
        {
            "id": "mono_34",
            "title": "Mein Smartphone & digitale Medien",
            "titleEN": "My Smartphone & Digital Media",
            "emoji": "📱",
            "cues": [
                {
                    "de": "Wofür ich das Handy nutze",
                    "en": "What I use the phone for"
                },
                {
                    "de": "Wichtige Apps im Alltag",
                    "en": "Important daily apps"
                },
                {
                    "de": "Bildschirmzeit & Regeln",
                    "en": "Screen time & rules"
                },
                {
                    "de": "Vor- und Nachteile der Technik",
                    "en": "Pros and cons of technology"
                }
            ],
            "sentences": [
                {
                    "de": "Mein Smartphone ist ein sehr praktischer Begleiter in meinem Alltag.",
                    "en": "My smartphone is a very practical companion in my daily life.",
                    "mal": "മൈൻ സ്മാർട്ട്ഫോൺ ഇസ്റ്റ് ഐൻ സേർ പ്രാക്ടിഷെർ ബെഗ്ലൈറ്റർ ഇൻ മൈനെം ആൾടാഗ്."
                },
                {
                    "de": "Ich nutze es für Fahrplanauskünfte, Online-Banking und Sprachnachrichten.",
                    "en": "I use it for transit timetables, online banking, and voice messages.",
                    "mal": "ഇഹ് നുറ്റ്സെ എസ് ഫ്യൂർ ഫാർപ്ലാൻഔസ്കുൻഫ്റ്റെ, ഓൺലൈൻ-ബാങ്കിങ് ഉണ്ട് ഷ്രാഹ്നാഹ്റിഹ്റ്റെൻ."
                },
                {
                    "de": "Zum Deutschlernen nutze ich täglich Wörterbücher und Lern-Apps.",
                    "en": "For learning German I daily use dictionaries and learning apps.",
                    "mal": "ത്സും ഡോയിച്ച്ലെർനെൻ നുറ്റ്സെ ഇഹ് ടേഗ്ലിഹ് വ്യോർട്ടർബ്യൂഹെർ ഉണ്ട് ലെർൺ-ആപ്പ്സ്."
                },
                {
                    "de": "Beim Essen lege ich das Handy jedoch bewusst zur Seite.",
                    "en": "During meals, however, I consciously set the phone aside.",
                    "mal": "ബൈം എസ്സെൻ ലേഗെ ഇഹ് ദാസ് ഹാൻഡി യെഡോഹ് ബെവുസ്റ്റ് ത്സൂർ സൈറ്റെ."
                },
                {
                    "de": "Es spart mir im Alltag enorm viel Zeit bei der Organisation.",
                    "en": "It saves me an enormous amount of time organizing daily life.",
                    "mal": "എസ് സ്പാർട്ട് മിർ ഇം ആൾടാഗ് എനോർമ് വീൽ ത്സൈറ്റ് ബൈ ഡെർ ഓർഗാനിസത്സ്യോൻ."
                },
                {
                    "de": "Trotzdem mache ich am Sonntag gerne eine digitale Pause.",
                    "en": "Nevertheless, on Sunday I like to take a digital detox break.",
                    "mal": "ട്രോട്സ്‌ഡേം മാഹെ ഇഹ് അം സോൺടാഗ് ഗെർനെ ഐനെ ഡിജിറ്റാലെ പൗസെ."
                }
            ]
        },
        {
            "id": "mono_35",
            "title": "Mein Geburtstag & wie ich gerne feiere",
            "titleEN": "My Birthday & How I Like to Celebrate",
            "emoji": "🎈",
            "cues": [
                {
                    "de": "Wann ich Geburtstag habe",
                    "en": "When my birthday is"
                },
                {
                    "de": "Wo & mit wem ich feiere",
                    "en": "Where & with whom I celebrate"
                },
                {
                    "de": "Essen & Getränke für Gäste",
                    "en": "Food & drinks for guests"
                },
                {
                    "de": "Mein schönster Geburtstagswunsch",
                    "en": "My nicest birthday wish"
                }
            ],
            "sentences": [
                {
                    "de": "Ich habe im Frühling Geburtstag und feiere meistens mit Freunden.",
                    "en": "My birthday is in spring and I usually celebrate with friends.",
                    "mal": "ഇഹ് ഹാബെ ഇം ഫ്ര്യൂഹ്‌ലിങ് ഗെബുർട്‌സ്റ്റാഗ് ഉണ്ട് ഫൈയറെ മൈസ്റ്റൻസ് മിറ്റ് ഫ്രോയിൻഡെൻ."
                },
                {
                    "de": "Wenn das Wetter schön ist, grillen wir gemeinsam im Garten.",
                    "en": "When the weather is nice, we barbecue together in the garden.",
                    "mal": "വെൻ ദാസ് വെറ്റർ ഷ്യോൻ ഇസ്റ്റ്, ഗ്രിള്ളെൻ വീർ ഗെമൈൻസാം ഇം ഗാർട്ടെൻ."
                },
                {
                    "de": "Ich backe immer einen großen Schokoladenkuchen für alle Gäste.",
                    "en": "I always bake a large chocolate cake for all the guests.",
                    "mal": "ഇഹ് ബാക്കെ ഇമ്മർ ഐനെൻ ഗ്രോസ്സെൻ ഷോകോളാഡെൻകൂഹെൻ ഫ്യൂർ ആല്ലെ ഗെസ്റ്റെ."
                },
                {
                    "de": "Wir hören Musik, machen lustige Fotos und unterhalten uns lange.",
                    "en": "We listen to music, take fun photos, and chat for a long time.",
                    "mal": "വീർ ഹ്യോറെൻ മ്യൂസിക്, മാഹെൻ ലുസ്റ്റിഗെ ഫോട്ടോസ് ഉണ്ട് ഉണ്ടർഹാൽറ്റെൻ ഉൻസ് ലാംഗെ."
                },
                {
                    "de": "Große Geschenke brauche ich nicht, Zeit mit Freunden ist mir wichtiger.",
                    "en": "I do not need big gifts, spending time with friends is more important to me.",
                    "mal": "ഗ്രോസ്സെ ഗെഷെങ്കെ ബ്രൗഹ്റ്റ് ഇഹ് നിഹ്റ്റ്, ത്സൈറ്റ് മിറ്റ് ഫ്രോയിൻഡെൻ ഇസ്റ്റ് മിർ വിഹ്റ്റിഗെർ."
                },
                {
                    "de": "Mein größter Wunsch für das neue Lebensjahr ist Gesundheit und Erfolg.",
                    "en": "My greatest wish for the new year of life is health and success.",
                    "mal": "മൈൻ ഗ്ര്യോസ്റ്റ്‌സ്റ്റെർ വുൺഷ് ഫ്യൂർ ദാസ് നോയെ ലേബെൻസ്യാർ ഇസ്റ്റ് ഗെസുൻഡ്ഹൈറ്റ് ഉണ്ട് എർഫോൾഗ്."
                }
            ]
        },
        {
            "id": "mono_36",
            "title": "Meine Nachbarschaft & das Wohnviertel",
            "titleEN": "My Neighborhood & Residential Area",
            "emoji": "🏘️",
            "cues": [
                {
                    "de": "Wo ich wohne & Umgebung",
                    "en": "Where I live & surroundings"
                },
                {
                    "de": "Verbindung & Geschäfte",
                    "en": "Connections & shops"
                },
                {
                    "de": "Kontakt zu den Nachbarn",
                    "en": "Contact with neighbors"
                },
                {
                    "de": "Warum ich mich dort wohlfühle",
                    "en": "Why I feel comfortable there"
                }
            ],
            "sentences": [
                {
                    "de": "Ich wohne in einem ruhigen und sehr grünen Stadtviertel.",
                    "en": "I live in a quiet and very green neighborhood of the city.",
                    "mal": "ഇഹ് വോനെ ഇൻ ഐനെം റൂഹിഗെൻ ഉണ്ട് സേർ ഗ്ര്യൂടെൻ സ്റ്റാറ്റ്ഫീയർടെൽ."
                },
                {
                    "de": "In nur fünf Gehminuten erreiche ich eine Bäckerei und den Supermarkt.",
                    "en": "In just five minutes on foot I reach a bakery and the supermarket.",
                    "mal": "ഇൻ നൂർ ഫ്യുൺഫ് ഗേഹ്മിനൂട്ടെൻ എർറൈഹെ ഇഹ് ഐനെ ബെക്കറൈ ഉണ്ട് ഡെൻ സൂപ്പർമാർക്ക്റ്റ്."
                },
                {
                    "de": "Die nächste U-Bahn-Station ist gleich um die Ecke.",
                    "en": "The nearest subway station is right around the corner.",
                    "mal": "ഡീ നേഹ്സ്റ്റെ ഊ-ബാൻ-സ്റ്റാത്സ്യോൻ ഇസ്റ്റ് ഗ്ലൈഹ് ഉം ഡീ എക്കെ."
                },
                {
                    "de": "Meine Nachbarn sind freundlich und nehmen oft Pakete für mich an.",
                    "en": "My neighbors are friendly and often accept parcels for me.",
                    "mal": "മൈനെ നാഹ്ബാർൺ സിൻഡ് ഫ്രോയിൻഡ്‌ലിഹ് ഉണ്ട് നേമെൻ ഓഫ്റ്റ് പാക്കേറ്റെ ഫ്യൂർ മിഹ് അൻ."
                },
                {
                    "de": "Einmal im Jahr veranstalten wir ein kleines Straßenfest.",
                    "en": "Once a year we organize a small street festival.",
                    "mal": "ഐൻമാൽ ഇം യാർ ഫെർഅൻസ്റ്റാൽറ്റെൻ വീർ ഐൻ ക്ലൈനെസ് ഷ്ട്രാസ്സെൻഫെസ്റ്റ്."
                },
                {
                    "de": "Ich fühle mich in dieser Wohngegend sehr sicher und zu Hause.",
                    "en": "I feel very safe and at home in this residential area.",
                    "mal": "ഇഹ് ഫ്യൂലെ മിഹ് ഇൻ ഡീസെർ വോൺഗേഗെൻഡ് സേർ സിഹെർ ഉണ്ട് ത്സു ഹൗസെ."
                }
            ]
        }
    ],
    "teil3_planning": [
        {
            "id": "plan_18",
            "title": "Sommergrillen im Stadtpark organisieren",
            "titleEN": "Organizing Summer BBQ in City Park",
            "emoji": "🥩",
            "situation": "Sie und Ihr Partner möchten am Samstagnachmittag mit Freunden im Park grillen.",
            "situationEN": "You and your partner want to barbecue in the park with friends on Saturday afternoon.",
            "points": [
                {
                    "de": "Wann treffen? (Uhrzeit und genauer Grillplatz)",
                    "en": "When to meet? (Time and exact BBQ area)"
                },
                {
                    "de": "Was einkaufen? (Fleisch, Gemüse, Kohle, Getränke)",
                    "en": "What to buy? (Meat, veggies, charcoal, drinks)"
                },
                {
                    "de": "Spiele & Musik (Frisbee, Bluetooth-Box, Decken)",
                    "en": "Games & music (Frisbee, Bluetooth speaker, blankets)"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Hallo! Am Samstag soll es 26 Grad warm werden. Wollen wir uns um 14 Uhr am Grillplatz beim See treffen?",
                    "partnerSpeechEN": "Hello! On Saturday it's supposed to be 26 degrees warm. Shall we meet at 2 PM at the grill area by the lake?",
                    "options": [
                        {
                            "text": "Ja, 14 Uhr ist perfekt! Dann können wir uns einen schattigen Platz sichern.",
                            "type": "agree",
                            "note": "Zustimmen mit Zeit & Schattenplatz"
                        },
                        {
                            "text": "Um 14 Uhr brennt die Sonne stark. Lass uns lieber ab 16 Uhr treffen, wenn es kühler wird.",
                            "type": "counter",
                            "note": "Gegenvorschlag späterer Nachmittag"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Super Idee! Wie teilen wir den Einkauf auf? Wer besorgt die Grillkohle und das Essen?",
                    "partnerSpeechEN": "Great idea! How do we split the shopping? Who gets the charcoal and the food?",
                    "options": [
                        {
                            "text": "Ich kaufe Grillkohle und alkoholfreie Getränke. Besorgst du Grillkäse, Würstchen und Brot?",
                            "type": "agree",
                            "note": "Konkrete Arbeitsteilung"
                        },
                        {
                            "text": "Lass uns einfach zusammen am Samstagmorgen in den Supermarkt gehen und alles gemeinsam aussuchen.",
                            "type": "counter",
                            "note": "Gemeinsam einkaufen statt Aufteilung"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Klasse! Bringt jemand noch etwas zur Unterhaltung und zum Sitzen mit?",
                    "partnerSpeechEN": "Class! Is anyone bringing something for entertainment and seating?",
                    "options": [
                        {
                            "text": "Ich bringe zwei große Picknickdecken und ein Frisbee mit, das macht allen Spaß.",
                            "type": "agree",
                            "note": "Decken und Sportspiel"
                        },
                        {
                            "text": "Ich habe eine Bluetooth-Box für Musik und Kartenspiele im Rucksack.",
                            "type": "counter",
                            "note": "Musik & Kartenspiele"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_19",
            "title": "Besuch des Flohmarkts am Samstag",
            "titleEN": "Visiting Flea Market on Saturday",
            "emoji": "🛍️",
            "situation": "Sie möchten mit Ihrem Freund den großen Flohmarkt auf dem Messegelände besuchen.",
            "situationEN": "You want to visit the big flea market on the exhibition grounds with your friend.",
            "points": [
                {
                    "de": "Treffpunkt und Uhrzeit (Frühaufsteher haben die beste Auswahl)",
                    "en": "Meeting place and time (early birds get best selection)"
                },
                {
                    "de": "Verkehrsmittel (Straßenbahn oder Fahrrad)",
                    "en": "Means of transport (tram or bicycle)"
                },
                {
                    "de": "Was suchen wir? (Bücher, Vintage-Kleidung, Lampen)",
                    "en": "What are we looking for? (Books, vintage clothing, lamps)"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Guten Tag! Der Flohmarkt öffnet um 8 Uhr. Wollen wir uns schon um 8:30 Uhr am Haupteingang treffen?",
                    "partnerSpeechEN": "Good day! The flea market opens at 8 AM. Shall we meet already at 8:30 AM at the main entrance?",
                    "options": [
                        {
                            "text": "Ja, 8:30 Uhr ist ideal, bevor die besten Schnäppchen vergriffen sind!",
                            "type": "agree",
                            "note": "Früh treffen für Schnäppchen"
                        },
                        {
                            "text": "Am Samstag möchte ich etwas ausschlafen. Reicht es dir auch um 10 Uhr?",
                            "type": "counter",
                            "note": "Gegenvorschlag 10 Uhr"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wie kommen wir am besten hin? Mit der Straßenbahn oder mit dem Rad?",
                    "partnerSpeechEN": "How do we best get there? By tram or by bike?",
                    "options": [
                        {
                            "text": "Mit der Straßenbahn Linie 4 ist es bequem und wir müssen nicht parken.",
                            "type": "agree",
                            "note": "Straßenbahn bevorzugen"
                        },
                        {
                            "text": "Lass uns mit dem Fahrrad fahren, falls wir größere Taschen transportieren müssen.",
                            "type": "counter",
                            "note": "Fahrrad vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Suchst du etwas Bestimmtes auf dem Markt?",
                    "partnerSpeechEN": "Are you looking for something specific at the market?",
                    "options": [
                        {
                            "text": "Ich suche nach alten Büchern und einer schönen Stehlampe für mein Wohnzimmer.",
                            "type": "agree",
                            "note": "Bücher und Lampe"
                        },
                        {
                            "text": "Ich möchte nach Vintage-Jacken und Schallplatten stöbern.",
                            "type": "counter",
                            "note": "Kleidung und Musik"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_20",
            "title": "Kinobesuch am Freitagabend",
            "titleEN": "Cinema Outing on Friday Evening",
            "emoji": "🎬",
            "situation": "Sie planen mit Ihrem Partner einen Kinofilm im neuen Multiplex-Kino am Freitag.",
            "situationEN": "You are planning a movie at the new multiplex cinema on Friday with your partner.",
            "points": [
                {
                    "de": "Filmwahl (Komödie, Action oder Thriller)",
                    "en": "Film choice (comedy, action, or thriller)"
                },
                {
                    "de": "Tickets vorher online reservieren",
                    "en": "Reserve tickets online beforehand"
                },
                {
                    "de": "Treffpunkt vorher auf ein Getränk",
                    "en": "Meeting beforehand for a drink"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Welchen Film möchtest du sehen? Die neue deutsche Komödie oder den Science-Fiction-Film?",
                    "partnerSpeechEN": "Which movie would you like to see? The new German comedy or the sci-fi movie?",
                    "options": [
                        {
                            "text": "Die deutsche Komödie klingt super! Das ist auch gutes Sprachtraining für uns.",
                            "type": "agree",
                            "note": "Komödie wählen"
                        },
                        {
                            "text": "Ich habe Lust auf Action und spannende Effekte, lass uns den Science-Fiction-Film nehmen.",
                            "type": "counter",
                            "note": "Science-Fiction vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Die Vorstellung beginnt um 20 Uhr. Sollen wir die Tickets gleich online buchen?",
                    "partnerSpeechEN": "The show starts at 8 PM. Shall we book the tickets online right now?",
                    "options": [
                        {
                            "text": "Ja, buchen wir online, dann bekommen wir super Plätze in der Mitte.",
                            "type": "agree",
                            "note": "Online reservieren"
                        },
                        {
                            "text": "Wir können auch direkt an der Abendkasse kaufen, da gibt es meistens noch Karten.",
                            "type": "counter",
                            "note": "Abendkasse vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wollen wir uns schon um 19 Uhr im Foyer auf ein Getränk oder Nachos treffen?",
                    "partnerSpeechEN": "Shall we meet in the foyer at 7 PM for a drink or nachos already?",
                    "options": [
                        {
                            "text": "Ja gerne, um 19 Uhr haben wir genügend Zeit zum Plaudern.",
                            "type": "agree",
                            "note": "19 Uhr bestätigen"
                        },
                        {
                            "text": "19 Uhr ist etwas knapp nach der Arbeit. Treffen wir uns lieber um 19:30 Uhr direkt vor Saal 3.",
                            "type": "counter",
                            "note": "19:30 Uhr Gegenvorschlag"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_21",
            "title": "Geburtstagskuchen für Kollegen backen",
            "titleEN": "Baking Birthday Cake for Colleague",
            "emoji": "🎂",
            "situation": "Ihr Kollege Markus hat am Montag Geburtstag. Sie und Ihre Kollegin möchten einen Kuchen für die Kaffeepause backen.",
            "situationEN": "Your colleague Markus has his birthday on Monday. You and your colleague want to bake a cake for the coffee break.",
            "points": [
                {
                    "de": "Kuchenart (Käsekuchen, Schokokuchen oder vegan?)",
                    "en": "Type of cake (cheesecake, chocolate cake, or vegan?)"
                },
                {
                    "de": "Wer kauft die Zutaten und wer backt?",
                    "en": "Who buys ingredients and who bakes?"
                },
                {
                    "de": "Wann bringen wir den Kuchen am Montag ins Büro?",
                    "en": "When do we bring the cake to the office on Monday?"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Markus liebt Schokolade über alles. Sollen wir einen saftigen Schokoladenkuchen backen?",
                    "partnerSpeechEN": "Markus loves chocolate above all. Shall we bake a rich chocolate cake?",
                    "options": [
                        {
                            "text": "Schokokuchen ist eine tolle Idee, den mag wirklich jeder im Team!",
                            "type": "agree",
                            "note": "Schokokuchen bestätigen"
                        },
                        {
                            "text": "Ein frischer Zitronen- oder Käsekuchen wäre vielleicht etwas leichter für den Nachmittag.",
                            "type": "counter",
                            "note": "Käsekuchen als Alternative"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wollen wir uns am Sonntag zum gemeinsamen Backen bei mir treffen?",
                    "partnerSpeechEN": "Shall we meet at my place on Sunday to bake together?",
                    "options": [
                        {
                            "text": "Gerne! Ich bringe Eier, Mehl und Schokolade mit, wenn du Backform und Ofen hast.",
                            "type": "agree",
                            "note": "Gemeinsames Backen"
                        },
                        {
                            "text": "Am Sonntag habe ich wenig Zeit. Ich kann aber gerne alle Zutaten einkaufen und dir Samstag vorbeibringen.",
                            "type": "counter",
                            "note": "Einkauf übernehmen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wann überraschen wir ihn am Montag? Um 10 Uhr oder in der Kaffeepause um 15 Uhr?",
                    "partnerSpeechEN": "When shall we surprise him on Monday? At 10 AM or during coffee break at 3 PM?",
                    "options": [
                        {
                            "text": "Um 15 Uhr zur Kaffeepause passt es perfekt, da haben alle Kollegen kurz Zeit.",
                            "type": "agree",
                            "note": "15 Uhr Pause"
                        },
                        {
                            "text": "Lass es uns gleich morgens um 10 Uhr machen, damit der Kuchen frisch zum Frühstück da ist.",
                            "type": "counter",
                            "note": "10 Uhr Frühstück"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_22",
            "title": "Wochenendausflug in eine historische Altstadt",
            "titleEN": "Weekend Excursion to Historic Old Town",
            "emoji": "🏰",
            "situation": "Sie planen mit Ihrem Reisepartner einen Tagesausflug in eine historische Altstadt (z. B. Heidelberg oder Bamberg).",
            "situationEN": "You are planning a day trip to a historic old town with your travel partner (e.g. Heidelberg or Bamberg).",
            "points": [
                {
                    "de": "Zielort und Anreise mit der Bahn",
                    "en": "Destination and arrival by train"
                },
                {
                    "de": "Sehenswürdigkeiten (Schloss, Marktplatz, Flussbrücke)",
                    "en": "Sights (castle, market square, river bridge)"
                },
                {
                    "de": "Mittagessen im traditionellen Gasthaus",
                    "en": "Lunch in a traditional tavern"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Wollen wir am Samstag mit dem Regionalexpress um 8:15 Uhr nach Heidelberg fahren?",
                    "partnerSpeechEN": "Shall we take the regional train at 8:15 AM to Heidelberg on Saturday?",
                    "options": [
                        {
                            "text": "Ja, der RE um 8:15 Uhr ist schnell und wir können das Deutschlandticket nutzen.",
                            "type": "agree",
                            "note": "Zugverbindung zusagen"
                        },
                        {
                            "text": "Können wir den Zug um 9:15 Uhr nehmen? Dann müssen wir nicht ganz so früh aufstehen.",
                            "type": "counter",
                            "note": "Spätere Bahn vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Was wollen wir uns dort zuerst ansehen? Das Heidelberger Schloss oder die alte Brücke?",
                    "partnerSpeechEN": "What do we want to visit first there? Heidelberg Castle or the Old Bridge?",
                    "options": [
                        {
                            "text": "Lass uns vormittags direkt hoch zum Schloss wandern, da ist die Aussicht am schönsten.",
                            "type": "agree",
                            "note": "Schloss am Vormittag"
                        },
                        {
                            "text": "Beginnen wir lieber mit einem Spaziergang durch die Altstadt und trinken erst einen Kaffee.",
                            "type": "counter",
                            "note": "Altstadt zuerst"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wo wollen wir zu Mittag essen? In einem traditionellen Gasthaus?",
                    "partnerSpeechEN": "Where do we want to eat lunch? In a traditional tavern?",
                    "options": [
                        {
                            "text": "Ja, ein Gasthaus mit regionalen Spezialitäten wie Maultaschen klingt herrlich.",
                            "type": "agree",
                            "note": "Regionales Gasthaus"
                        },
                        {
                            "text": "Lass uns bei schönem Wetter lieber etwas auf die Hand nehmen und am Neckarufer picknicken.",
                            "type": "counter",
                            "note": "Picknick am Fluss"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_23",
            "title": "Gemeinsames Joggen & Fitness im Park",
            "titleEN": "Jogging & Fitness Workout in the Park",
            "emoji": "🏃",
            "situation": "Sie und Ihr Trainingspartner möchten regelmäßig zusammen im Stadtpark trainieren.",
            "situationEN": "You and your training partner want to exercise together regularly in the city park.",
            "points": [
                {
                    "de": "Welche Wochentage und Uhrzeit?",
                    "en": "Which weekdays and time?"
                },
                {
                    "de": "Laufstrecke und Tempo (4 bis 6 km für Anfänger)",
                    "en": "Running distance and pace (4 to 6 km for beginners)"
                },
                {
                    "de": "Dehnübungen und Fitnessgeräte im Park",
                    "en": "Stretching and outdoor fitness machines"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Wollen wir ab nächster Woche immer dienstags und donnerstags um 18:30 Uhr laufen?",
                    "partnerSpeechEN": "Do we want to run starting next week every Tuesday and Thursday at 6:30 PM?",
                    "options": [
                        {
                            "text": "Dienstag und Donnerstag um 18:30 Uhr passt mir optimal nach der Arbeit.",
                            "type": "agree",
                            "note": "Termine bestätigen"
                        },
                        {
                            "text": "Donnerstags habe ich Deutschkurs. Können wir stattdessen mittwochs und freitags laufen?",
                            "type": "counter",
                            "note": "Mittwoch/Freitag als Alternative"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wie lang soll unsere Laufrunde sein? Reichen fünf Kilometer in moderatem Tempo?",
                    "partnerSpeechEN": "How long should our running loop be? Does 5 kilometers at moderate pace suffice?",
                    "options": [
                        {
                            "text": "Fünf Kilometer in moderatem Tempo sind für den Einstieg genau richtig.",
                            "type": "agree",
                            "note": "5 km bestätigen"
                        },
                        {
                            "text": "Fangen wir lieber mit drei Kilometern an und steigern uns nach zwei Wochen.",
                            "type": "counter",
                            "note": "Kürzere Strecke für Beginn"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Machen wir nach dem Laufen noch zehn Minuten Dehnen auf den Fitness-Matten?",
                    "partnerSpeechEN": "Shall we do 10 minutes of stretching on the fitness mats after the run?",
                    "options": [
                        {
                            "text": "Auf jeden Fall, Dehnen verhindert Muskelkater am nächsten Tag.",
                            "type": "agree",
                            "note": "Dehnen befürworten"
                        },
                        {
                            "text": "Lass uns lieber kurz die Outdoor-Klimmzugstangen im Park ausprobieren.",
                            "type": "counter",
                            "note": "Kraftübungen vorschlagen"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_24",
            "title": "Renovierung & Zimmer streichen am Samstag",
            "titleEN": "Renovation & Painting Room on Saturday",
            "emoji": "🎨",
            "situation": "Ihr Freund zieht um und bittet Sie um Hilfe beim Streichen des Wohnzimmers.",
            "situationEN": "Your friend is moving and asks for your help painting the living room.",
            "points": [
                {
                    "de": "Wann anfangen? (Uhrzeit für Abkleben und Streichen)",
                    "en": "When to start? (Time for masking and painting)"
                },
                {
                    "de": "Welches Werkzeug wird gebraucht? (Rollen, Pinsel, Folie)",
                    "en": "What tools are needed? (Rollers, brushes, plastic sheeting)"
                },
                {
                    "de": "Verpflegung für die Helfer (Pizza oder belegte Brötchen)",
                    "en": "Catering for helpers (pizza or filled rolls)"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Danke für deine Hilfe! Wollen wir am Samstag schon um 9 Uhr anfangen, um vor der Hitze fertig zu werden?",
                    "partnerSpeechEN": "Thanks for your help! Shall we start at 9 AM on Saturday to finish before the heat?",
                    "options": [
                        {
                            "text": "Ja, 9 Uhr ist prima! Dann kleben wir zuerst sorgfältig alle Fenster und Leisten ab.",
                            "type": "agree",
                            "note": "9 Uhr Beginn mit Abkleben"
                        },
                        {
                            "text": "Ich muss morgens noch kurz einkaufen. Geht es auch ab 10:30 Uhr?",
                            "type": "counter",
                            "note": "Beginn um 10:30 Uhr"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Hast du noch Farbroller und Abdeckvlies im Keller, die du mitbringen kannst?",
                    "partnerSpeechEN": "Do you still have paint rollers and drop cloths in the basement you can bring?",
                    "options": [
                        {
                            "text": "Ja, ich bringe zwei Teleskopstangen, Rollen und Malerkrepp mit.",
                            "type": "agree",
                            "note": "Werkzeug mitbringen"
                        },
                        {
                            "text": "Leider habe ich keine Rollen mehr, aber wir können schnell im Baumarkt vorbeifahren.",
                            "type": "counter",
                            "note": "Baumarktstop"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Was soll ich für uns Helfer zu Mittag besorgen? Pizza oder belegte Brötchen?",
                    "partnerSpeechEN": "What should I get for us helpers for lunch? Pizza or filled rolls?",
                    "options": [
                        {
                            "text": "Große Pizzen für alle wären nach getaner Arbeit absolut perfekt!",
                            "type": "agree",
                            "note": "Pizza bevorzugen"
                        },
                        {
                            "text": "Belegte Brötchen sind praktischer, weil man keine sauberen Teller braucht.",
                            "type": "counter",
                            "note": "Brötchen vorschlagen"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_25",
            "title": "Internationaler Kochabend mit Freunden",
            "titleEN": "International Cooking Night with Friends",
            "emoji": "🍛",
            "situation": "Sie planen mit Ihrem Mitbewohner einen internationalen Kochabend für fünf Freunde.",
            "situationEN": "You are planning an international cooking evening for five friends with your roommate.",
            "points": [
                {
                    "de": "Menüauswahl (Vorspeise, Hauptgericht, Dessert)",
                    "en": "Menu selection (starter, main dish, dessert)"
                },
                {
                    "de": "Einkauf der speziellen Gewürze und Zutaten",
                    "en": "Shopping for special spices and ingredients"
                },
                {
                    "de": "Uhrzeit & Beginn der Vorbereitung",
                    "en": "Time & start of prep work"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Was wollen wir kochen? Ein indisches Curry oder hausgemachte italienische Lasagne?",
                    "partnerSpeechEN": "What should we cook? An Indian curry or homemade Italian lasagna?",
                    "options": [
                        {
                            "text": "Ein aromatisches Curry mit Basmatireis und Naan-Brot schmeckt allen fantastisch!",
                            "type": "agree",
                            "note": "Curry wählen"
                        },
                        {
                            "text": "Lasagne lässt sich super am Nachmittag vorbereiten, dann haben wir abends weniger Stress.",
                            "type": "counter",
                            "note": "Lasagne vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wann und wo besorgen wir die Zutaten und Gewürze?",
                    "partnerSpeechEN": "When and where do we get the ingredients and spices?",
                    "options": [
                        {
                            "text": "Gehen wir am Freitag nach der Arbeit gemeinsam in den Asia-Supermarkt.",
                            "type": "agree",
                            "note": "Asia-Markt am Freitag"
                        },
                        {
                            "text": "Ich kann die Einkäufe am Samstagvormittag auf dem Wochenmarkt und im Discounter erledigen.",
                            "type": "counter",
                            "note": "Samstagvormittag einkaufen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wann sollen die Gäste kommen? Um 19 Uhr?",
                    "partnerSpeechEN": "When should the guests arrive? At 7 PM?",
                    "options": [
                        {
                            "text": "19 Uhr ist perfekt. Dann fangen wir um 17:30 Uhr mit dem Kochen an.",
                            "type": "agree",
                            "note": "19 Uhr mit 17:30 Uhr Start"
                        },
                        {
                            "text": "Lass uns die Gäste schon um 18 Uhr einladen, dann können wir gemeinsam schnippeln und kochen.",
                            "type": "counter",
                            "note": "Gemeinsam kochen ab 18 Uhr"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_26",
            "title": "Besuch einer Kunstausstellung im Museum",
            "titleEN": "Visiting Art Exhibition in Museum",
            "emoji": "🖼️",
            "situation": "Sie und Ihre Freundin möchten am Sonntag eine neue Ausstellung moderner Malerei im Kunstmuseum ansehen.",
            "situationEN": "You and your friend want to visit a new exhibition of modern art in the museum on Sunday.",
            "points": [
                {
                    "de": "Uhrzeit und Treffpunkt am Museumseingang",
                    "en": "Time and meeting point at museum entrance"
                },
                {
                    "de": "Online-Tickets mit Zeitfenster buchen",
                    "en": "Book online tickets with time slot"
                },
                {
                    "de": "Kaffee und Kuchen im Museumscafé danach",
                    "en": "Coffee and cake in the museum cafe afterwards"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Wollen wir am Sonntag um 11 Uhr zur Ausstellung ins Kunstmuseum gehen?",
                    "partnerSpeechEN": "Shall we go to the exhibition at the art museum on Sunday at 11 AM?",
                    "options": [
                        {
                            "text": "Ja, 11 Uhr vormittags ist ruhig und es sind noch nicht so viele Besucher da.",
                            "type": "agree",
                            "note": "11 Uhr Vormittag bestätigen"
                        },
                        {
                            "text": "Sonntagvormittag schlafe ich gerne aus. Passt es dir auch um 14:30 Uhr?",
                            "type": "counter",
                            "note": "14:30 Uhr Nachmittag vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Soll ich die Eintrittskarten vorab online mit Zeitfenster kaufen?",
                    "partnerSpeechEN": "Should I buy the admission tickets in advance online with a time slot?",
                    "options": [
                        {
                            "text": "Ja bitte, dann müssen wir an der Kasse nicht in der Schlange anstehen.",
                            "type": "agree",
                            "note": "Online-Tickets befürworten"
                        },
                        {
                            "text": "Mit meinem Studentenausweis bekommen wir Rabatt, das geht oft nur an der Kasse vor Ort.",
                            "type": "counter",
                            "note": "Kasse vor Ort wegen Rabatt"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wollen wir nach dem Rundgang noch ein Stück Kuchen im Museumscafé essen?",
                    "partnerSpeechEN": "Shall we have a piece of cake in the museum cafe after the tour?",
                    "options": [
                        {
                            "text": "Sehr gerne, dort kann man wunderbar über die Kunstwerke sprechen.",
                            "type": "agree",
                            "note": "Museumscafé bejahen"
                        },
                        {
                            "text": "Lass uns lieber in die Fußgängerzone laufen und dort ein Eis essen.",
                            "type": "counter",
                            "note": "Eisdiele vorschlagen"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_27",
            "title": "Picknick im Botanischen Garten",
            "titleEN": "Picnic in the Botanical Garden",
            "emoji": "🧺",
            "situation": "Sie planen mit Ihrem Freund ein sonniges Nachmittagspicknick im Botanischen Garten.",
            "situationEN": "You are planning a sunny afternoon picnic in the botanical garden with your friend.",
            "points": [
                {
                    "de": "Datum und Uhrzeit (Sonntagnachmittag)",
                    "en": "Date and time (Sunday afternoon)"
                },
                {
                    "de": "Snacks und Getränke (Sandwiches, Weintrauben, Saft)",
                    "en": "Snacks and drinks (sandwiches, grapes, juice)"
                },
                {
                    "de": "Was mitbringen? (Picknickdecke, Sonnenbrille, Kartenspiel)",
                    "en": "What to bring? (Picnic blanket, sunglasses, card game)"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Sonntag soll es 24 Grad warm werden. Treffen wir uns um 15 Uhr am Eingang zum Botanischen Garten?",
                    "partnerSpeechEN": "Sunday it's supposed to be 24 degrees. Shall we meet at 3 PM at the botanical garden entrance?",
                    "options": [
                        {
                            "text": "15 Uhr ist eine tolle Uhrzeit, da steht die Sonne schön über den Rasenflächen.",
                            "type": "agree",
                            "note": "15 Uhr bestätigen"
                        },
                        {
                            "text": "Um 15 Uhr ist es sehr voll. Wollen wir uns schon um 13:30 Uhr auf eine Wiese setzen?",
                            "type": "counter",
                            "note": "13:30 Uhr vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wer bringt was zu essen mit? Sollen wir die Snacks aufteilen?",
                    "partnerSpeechEN": "Who brings what to eat? Shall we split up the snacks?",
                    "options": [
                        {
                            "text": "Ich schmiere Käsesandwiches und wasche Weintrauben ab, bringst du gekühlte Getränke mit?",
                            "type": "agree",
                            "note": "Sandwiches & Getränke teilen"
                        },
                        {
                            "text": "Wir können vorher kurz beim Bäcker Quiche und süße Teilchen holen.",
                            "type": "counter",
                            "note": "Bäckerei vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Hast du eine große Decke, auf der wir beide gemütlich sitzen können?",
                    "partnerSpeechEN": "Do you have a large blanket where both of us can sit comfortably?",
                    "options": [
                        {
                            "text": "Ja, ich packe meine wasserfeste Picknickdecke und ein Kartenspiel ein.",
                            "type": "agree",
                            "note": "Decke & Kartenspiel mitbringen"
                        },
                        {
                            "text": "Ich habe zwei leichte Campingkissen und ein Buch zum Vorlesen dabei.",
                            "type": "counter",
                            "note": "Kissen und Buch"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_28",
            "title": "Organisation eines Spieleabends",
            "titleEN": "Organizing a Board Game Evening",
            "emoji": "🎲",
            "situation": "Sie und Ihr Mitbewohner möchten am Samstagabend vier Freunde zu einem Spieleabend einladen.",
            "situationEN": "You and your roommate want to invite four friends to a game night on Saturday evening.",
            "points": [
                {
                    "de": "Welche Spiele? (Kartenspiele, Brettspiele wie Siedler von Catan)",
                    "en": "Which games? (Card games, board games like Catan)"
                },
                {
                    "de": "Snacks und Knabbereien (Chips, Nüsse, Gemüsesticks mit Dip)",
                    "en": "Snacks and nibbles (chips, nuts, veggie sticks with dip)"
                },
                {
                    "de": "Beginn und Sitzgelegenheiten im Wohnzimmer",
                    "en": "Start time and seating in the living room"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Wollen wir unsere Freunde für Samstag um 19 Uhr zu uns nach Hause einladen?",
                    "partnerSpeechEN": "Shall we invite our friends to our place on Saturday at 7 PM?",
                    "options": [
                        {
                            "text": "Ja, 19 Uhr ist perfekt. Da haben alle vorher gegessen und sind entspannt.",
                            "type": "agree",
                            "note": "19 Uhr bestätigen"
                        },
                        {
                            "text": "Lass uns schon um 18 Uhr starten und vorher gemeinsam Tiefkühlpizza backen.",
                            "type": "counter",
                            "note": "18 Uhr mit Pizza starten"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Welche Gesellschaftsspiele wollen wir spielen? Catan, Monopoly oder lieber Kartenspiele?",
                    "partnerSpeechEN": "Which board games shall we play? Catan, Monopoly, or rather card games?",
                    "options": [
                        {
                            "text": "Siedler von Catan und Codenames sind super für sechs Personen!",
                            "type": "agree",
                            "note": "Catan & Codenames vorschlagen"
                        },
                        {
                            "text": "Kartenspiele wie UNO und Wizard gehen schneller und machen auch riesigen Spaß.",
                            "type": "counter",
                            "note": "Schnelle Kartenspiele"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Was stellen wir an Snacks auf den Wohnzimmertisch?",
                    "partnerSpeechEN": "What snacks do we put on the living room table?",
                    "options": [
                        {
                            "text": "Ich besorge Nachos mit Käsedip, Erdnüsse und Salzstangen.",
                            "type": "agree",
                            "note": "Salzige Snacks"
                        },
                        {
                            "text": "Lass uns auch ein paar gesunde Paprika- und Gurkenstreifen mit Kräuterquark vorbereiten.",
                            "type": "counter",
                            "note": "Gemüsesticks als gesunde Alternative"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_29",
            "title": "Fahrt zum Flughafen & Freund abholen",
            "titleEN": "Drive to Airport & Picking up Friend",
            "emoji": "✈️",
            "situation": "Ein gemeinsamer Freund landet am Sonntagnachmittag um 16 Uhr am Flughafen. Sie planen die Abholung.",
            "situationEN": "A mutual friend lands at the airport on Sunday afternoon at 4 PM. You plan the pickup.",
            "points": [
                {
                    "de": "Anreise (Auto oder S-Bahn zum Terminal)",
                    "en": "Getting there (car or S-Bahn to terminal)"
                },
                {
                    "de": "Wann am Terminal sein? (Gepäckausgabe dauert oft 45 Minuten)",
                    "en": "When to be at terminal? (Baggage reclaim takes 45 mins)"
                },
                {
                    "de": "Kleines Willkommensschild oder Blumen",
                    "en": "Small welcome sign or flowers"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Sein Flug landet planmäßig um 16:15 Uhr. Wollen wir mit meinem Auto fahren?",
                    "partnerSpeechEN": "His flight lands on schedule at 4:15 PM. Shall we drive with my car?",
                    "options": [
                        {
                            "text": "Ja, mit dem Auto ist es mit seinen schweren Koffern viel bequemer als mit der Bahn.",
                            "type": "agree",
                            "note": "Auto befürworten wegen Koffern"
                        },
                        {
                            "text": "Das Parken am Flughafen ist sehr teuer. Die S-Bahn fährt direkt bis unter das Terminal.",
                            "type": "counter",
                            "note": "S-Bahn vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wann sollten wir am Ankunftsbereich stehen? Gleich um 16:15 Uhr?",
                    "partnerSpeechEN": "When should we stand at arrivals? Right at 4:15 PM?",
                    "options": [
                        {
                            "text": "Es reicht um 16:45 Uhr, weil die Passkontrolle und das Gepäckband dauern.",
                            "type": "agree",
                            "note": "16:45 Uhr nach Kofferband"
                        },
                        {
                            "text": "Lass uns lieber pünktlich um 16:15 Uhr da sein, falls der Flug früher landet.",
                            "type": "counter",
                            "note": "Früher da sein"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Sollen wir ein lustiges Willkommensschild für ihn basteln?",
                    "partnerSpeechEN": "Shall we craft a funny welcome sign for him?",
                    "options": [
                        {
                            "text": "Ja, ein Schild mit seinem Namen und ein paar deutschen Brezeln als Überraschung!",
                            "type": "agree",
                            "note": "Schild und Brezeln"
                        },
                        {
                            "text": "Ein Schild ist peinlich, lass uns einfach am Ausgang winken und ihn umarmen.",
                            "type": "counter",
                            "note": "Kein Schild, nur Winken"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_30",
            "title": "Strandtag an einem Badesee planen",
            "titleEN": "Planning a Beach Day at Bathing Lake",
            "emoji": "🏖️",
            "situation": "Es ist Hochsommer und 30 Grad. Sie möchten mit Ihrem Freund den ganzen Samstag an einem Badesee verbringen.",
            "situationEN": "It is midsummer and 30 degrees. You want to spend all Saturday at a bathing lake with your friend.",
            "points": [
                {
                    "de": "Welcher Badesee? (Entfernung und Wasserqualität)",
                    "en": "Which lake? (Distance and water quality)"
                },
                {
                    "de": "Sonnenschutz & Ausrüstung (Sonnenschirm, Strandtuch, Sonnencreme)",
                    "en": "Sun protection & gear (parasol, beach towel, sunscreen)"
                },
                {
                    "de": "Verpflegung & Kühltasche (Wasser, Obst, Sandwiches)",
                    "en": "Catering & cooler bag (water, fruits, sandwiches)"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Wollen wir an den Waldsee fahren? Dort gibt es sandige Liegewiesen und schattige Bäume.",
                    "partnerSpeechEN": "Shall we go to the forest lake? There are sandy lawns and shady trees there.",
                    "options": [
                        {
                            "text": "Der Waldsee ist herrlich und das Wasser ist dort glasklar!",
                            "type": "agree",
                            "note": "Waldsee zustimmen"
                        },
                        {
                            "text": "Am Waldsee ist es samstags sehr voll. Was hältst du vom Silbersee?",
                            "type": "counter",
                            "note": "Silbersee vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Wann fahren wir los? Vormittags um 10 Uhr?",
                    "partnerSpeechEN": "When do we head out? Morning at 10 AM?",
                    "options": [
                        {
                            "text": "10 Uhr ist super, dann ergattern wir einen Platz direkt am Wasser.",
                            "type": "agree",
                            "note": "10 Uhr bestätigen"
                        },
                        {
                            "text": "Lass uns schon um 9 Uhr fahren, dann vermeiden wir den Stau am Parkplatz.",
                            "type": "counter",
                            "note": "9 Uhr vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Ich nehme eine Kühltasche mit viel Mineralwasser und Wassermelone mit. Hast du einen Sonnenschirm?",
                    "partnerSpeechEN": "I will bring a cooler bag with lots of mineral water and watermelon. Do you have a parasol?",
                    "options": [
                        {
                            "text": "Ja, ich bringe einen großen Sonnenschirm und zwei Strandtücher mit.",
                            "type": "agree",
                            "note": "Sonnenschirm mitbringen"
                        },
                        {
                            "text": "Wir können uns einfach unter eine große Weide in den Schatten legen.",
                            "type": "counter",
                            "note": "Naturschatten nutzen"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_31",
            "title": "Fahrradinspektion im Frühling",
            "titleEN": "Bicycle Spring Tune-Up",
            "emoji": "🚲",
            "situation": "Nach dem Winter müssen Ihre Fahrräder gereinigt, geölt und repariert werden. Sie planen einen Nachmittag im Hof.",
            "situationEN": "After winter your bikes need to be cleaned, oiled, and repaired. You plan an afternoon in the courtyard.",
            "points": [
                {
                    "de": "Wann treffen? (Samstag bei trockenem Wetter)",
                    "en": "When to meet? (Saturday with dry weather)"
                },
                {
                    "de": "Welche Werkzeuge & Pflegemittel? (Pumpe, Kettenöl, Lappen)",
                    "en": "Which tools & care products? (Pump, chain oil, rags)"
                },
                {
                    "de": "Kurze Probefahrt nach der Reparatur",
                    "en": "Short test ride after repair"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Sollen wir am Samstagnachmittag um 14 Uhr unsere Räder im Hinterhof fit für den Frühling machen?",
                    "partnerSpeechEN": "Shall we tune our bikes for spring in the backyard on Saturday afternoon at 2 PM?",
                    "options": [
                        {
                            "text": "Ja, 14 Uhr im Hof ist ideal. Im Hof haben wir genug Platz und Sonnenlicht.",
                            "type": "agree",
                            "note": "14 Uhr im Hof zusagen"
                        },
                        {
                            "text": "Samstagvormittag um 10 Uhr wäre mir lieber, dann haben wir den Nachmittag für eine Tour frei.",
                            "type": "counter",
                            "note": "Vormittag vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Hast du eine Standluftpumpe und Kettenöl da?",
                    "partnerSpeechEN": "Do you have a floor pump and chain oil there?",
                    "options": [
                        {
                            "text": "Ja, eine Standpumpe mit Manometer und gutes biologisches Kettenöl bringe ich mit.",
                            "type": "agree",
                            "note": "Pumpe & Öl mitbringen"
                        },
                        {
                            "text": "Ich habe nur eine kleine Handpumpe. Wir können vorher kurz im Fahrradladen frisches Öl kaufen.",
                            "type": "counter",
                            "note": "Ladenbesuch vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Machen wir danach eine kleine Testfahrt von fünf Kilometern zum Eiscafé?",
                    "partnerSpeechEN": "Shall we do a short test ride of 5 km to the ice cream parlor afterwards?",
                    "options": [
                        {
                            "text": "Auf jeden Fall, das ist die beste Belohnung für die Arbeit!",
                            "type": "agree",
                            "note": "Testfahrt zum Eiscafé"
                        },
                        {
                            "text": "Lass uns lieber eine längere Runde durch den Stadtpark drehen, um Bremsen und Schaltung zu testen.",
                            "type": "counter",
                            "note": "Längere Parkrunde"
                        }
                    ]
                }
            ]
        },
        {
            "id": "plan_32",
            "title": "Abschiedsparty für eine liebe Kollegin",
            "titleEN": "Farewell Party for a Dear Colleague",
            "emoji": "🥂",
            "situation": "Ihre geschätzte Kollegin Anna wechselt den Arbeitgeber. Sie und Ihr Team planen eine Überraschungs-Abschiedsfeier.",
            "situationEN": "Your valued colleague Anna is changing employers. You and your team are planning a surprise farewell party.",
            "points": [
                {
                    "de": "Wann und wo? (Freitag nach Feierabend im Besprechungsraum)",
                    "en": "When and where? (Friday after work in meeting room)"
                },
                {
                    "de": "Gemeinsames Abschiedsgeschenk (Gutschein, Karte, Fotobuch)",
                    "en": "Joint farewell gift (voucher, card, photo book)"
                },
                {
                    "de": "Fingerfood und alkoholfreie Getränke",
                    "en": "Finger food and non-alcoholic drinks"
                }
            ],
            "turns": [
                {
                    "partnerSpeech": "Annas letzter Arbeitstag ist Freitag. Wollen wir die Überraschung um 16:30 Uhr im großen Konferenzraum machen?",
                    "partnerSpeechEN": "Anna's last day is Friday. Shall we do the surprise at 4:30 PM in the big conference room?",
                    "options": [
                        {
                            "text": "Ja, 16:30 Uhr ist ideal, da sind die meisten Kollegen mit der Arbeit fertig.",
                            "type": "agree",
                            "note": "16:30 Uhr zusagen"
                        },
                        {
                            "text": "Lass es uns um 15:30 Uhr zur Kaffeepause machen, damit niemand vorzeitig nach Hause geht.",
                            "type": "counter",
                            "note": "15:30 Uhr vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Was schenken wir ihr? Ein Fotobuch mit Teamfotos oder einen Buchgutschein?",
                    "partnerSpeechEN": "What do we give her? A photo book with team pictures or a book voucher?",
                    "options": [
                        {
                            "text": "Ein persönliches Fotobuch mit Grüßen von jedem Kollegen ist eine wundervolle Erinnerung.",
                            "type": "agree",
                            "note": "Fotobuch befürworten"
                        },
                        {
                            "text": "Ein Reisegutschein für ihren geplanten Urlaub wäre vielleicht noch nützlicher.",
                            "type": "counter",
                            "note": "Reisegutschein vorschlagen"
                        }
                    ]
                },
                {
                    "partnerSpeech": "Ich besorge Orangensaft, Mineralwasser und alkoholfreien Sekt zum Anstoßen. Bringst du Fingerfood mit?",
                    "partnerSpeechEN": "I will get orange juice, mineral water, and non-alcoholic sparkling wine to toast. Will you bring finger food?",
                    "options": [
                        {
                            "text": "Klar, ich bringe Mini-Muffins und Laugengebäck vom Bäcker mit.",
                            "type": "agree",
                            "note": "Gebäck mitbringen"
                        },
                        {
                            "text": "Wir können auch bei einem Partyservice eine kleine Platte mit belegten Häppchen bestellen.",
                            "type": "counter",
                            "note": "Partyservice vorschlagen"
                        }
                    ]
                }
            ]
        }
    ]
};

    /* ============================================================
       AUTO-MERGE HOOKS INTO GLOBAL A2 DATABASES
       ============================================================ */
    function applyA2Expansion2() {
        // 1. Reading
        if (typeof A2_READING_DATABASE !== "undefined" && Array.isArray(A2_READING_DATABASE)) {
            if (!A2_READING_DATABASE.some(p => p.id === "a2_read_31")) {
                A2_READING_DATABASE.push(...NEW_A2_READING_PASSAGES_2);
                console.log(`✅ A2_READING_DATABASE expanded: ${A2_READING_DATABASE.length} passages active.`);
            }
        }

        // 2. Listening (Hören)
        if (typeof A2_INTERACTIVE_HOEREN_DATABASE !== "undefined" && typeof A2_INTERACTIVE_HOEREN_DATABASE === "object") {
            Object.assign(A2_INTERACTIVE_HOEREN_DATABASE, NEW_A2_HOEREN_TOPICS_2);
            console.log(`✅ A2_INTERACTIVE_HOEREN_DATABASE expanded: ${Object.keys(A2_INTERACTIVE_HOEREN_DATABASE).length} topics active.`);
        }

        // 3. Writing
        if (typeof A2_WRITING_DATABASE !== "undefined" && Array.isArray(A2_WRITING_DATABASE)) {
            if (!A2_WRITING_DATABASE.some(w => w.id === "a2_write_26")) {
                A2_WRITING_DATABASE.push(...NEW_A2_WRITING_TASKS_2);
                console.log(`✅ A2_WRITING_DATABASE expanded: ${A2_WRITING_DATABASE.length} tasks active.`);
            }
        }

        // 4. Speaking
        if (typeof A2_SPEAKING_DATABASE !== "undefined" && typeof A2_SPEAKING_DATABASE === "object") {
            if (Array.isArray(A2_SPEAKING_DATABASE.teil1_cue_cards) && !A2_SPEAKING_DATABASE.teil1_cue_cards.some(c => c.id === "card_24")) {
                A2_SPEAKING_DATABASE.teil1_cue_cards.push(...NEW_A2_SPEAKING_DATA_2.teil1_cue_cards);
            }
            if (Array.isArray(A2_SPEAKING_DATABASE.teil2_monologues) && !A2_SPEAKING_DATABASE.teil2_monologues.some(m => m.id === "mono_22")) {
                A2_SPEAKING_DATABASE.teil2_monologues.push(...NEW_A2_SPEAKING_DATA_2.teil2_monologues);
            }
            if (Array.isArray(A2_SPEAKING_DATABASE.teil3_planning) && !A2_SPEAKING_DATABASE.teil3_planning.some(p => p.id === "plan_18")) {
                A2_SPEAKING_DATABASE.teil3_planning.push(...NEW_A2_SPEAKING_DATA_2.teil3_planning);
            }
            console.log(`✅ A2_SPEAKING_DATABASE expanded: ${A2_SPEAKING_DATABASE.teil1_cue_cards.length} cards, ${A2_SPEAKING_DATABASE.teil2_monologues.length} monologues, ${A2_SPEAKING_DATABASE.teil3_planning.length} planning scenarios active.`);
        }
    }

    // Apply immediately if already loaded
    applyA2Expansion2();

    // Also register on DOMContentLoaded / window load in case scripts load asynchronously
    if (typeof document !== "undefined" && document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyA2Expansion2);
    } else if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
        window.addEventListener("load", applyA2Expansion2);
    }

    // Export variables to window
    if (typeof window !== "undefined") {
        window.NEW_A2_READING_PASSAGES_2 = NEW_A2_READING_PASSAGES_2;
        window.NEW_A2_HOEREN_TOPICS_2 = NEW_A2_HOEREN_TOPICS_2;
        window.NEW_A2_WRITING_TASKS_2 = NEW_A2_WRITING_TASKS_2;
        window.NEW_A2_SPEAKING_DATA_2 = NEW_A2_SPEAKING_DATA_2;
        window.applyA2Expansion2 = applyA2Expansion2;
    }
})();
