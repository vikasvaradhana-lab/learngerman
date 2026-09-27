/* ============================================================
   A2 PRACTICE EXPANSION BUNDLE (Goethe Deutsch A2)
   - 15 Brand New Reading Passages (Total: 30)
   - 15 Brand New Interactive Listening Topics (Total: 30)
   - 15 Brand New Writing Studio Tasks (8 Teil 1 SMS + 7 Teil 2 Emails) (Total: 25)
   - 45 Brand New Speaking Studio Sessions (15 Teil 1 + 15 Teil 2 Monologues + 15 Teil 3 Planning)
   ============================================================ */

(function() {
    "use strict";

    console.log("Loading A2 Practice Expansion Pack (+15 Reading, +15 Listening, +15 Writing, +45 Speaking)...");

    /* ============================================================
       PART 1: 15 NEW READING PASSAGES (a2_read_16 to a2_read_30)
       ============================================================ */
    const NEW_A2_READING_PASSAGES = [
        {
            id: "a2_read_16",
            title: "Wohnungsbesichtigung & Mietvertrag",
            titleEN: "Apartment Viewing & Tenancy Agreement",
            emoji: "🏡",
            warmup: {
                vocab: [
                    { word: "die Warmmiete", gender: "die", translation: "rent including heating & utility costs", example: "Die Warmmiete beträgt 850 Euro im Monat.", exampleEN: "The warm rent is 850 euros per month." },
                    { word: "die Kaution", gender: "die", translation: "rental security deposit", example: "Vor dem Einzug müssen Sie drei Monatsmieten Kaution zahlen.", exampleEN: "Before moving in, you must pay three months' rent deposit." },
                    { word: "die Gehaltsabrechnung", gender: "die", translation: "payslip / salary statement", example: "Bitte bringen Sie Ihre letzten drei Gehaltsabrechnungen mit.", exampleEN: "Please bring your last three payslips." },
                    { word: "der Mietvertrag", gender: "der", translation: "lease / tenancy agreement", example: "Wir unterschreiben den Mietvertrag nächste Woche.", exampleEN: "We are signing the rental contract next week." },
                    { word: "die Nebenkosten", gender: "die (Pl.)", translation: "utility / ancillary costs", example: "Wasser und Müllabfuhr sind in den Nebenkosten enthalten.", exampleEN: "Water and waste disposal are included in the utilities." },
                    { word: "die Schufa-Auskunft", gender: "die", translation: "credit check record", example: "Der Vermieter verlangt eine aktuelle Schufa-Auskunft.", exampleEN: "The landlord requires an up-to-date credit check." }
                ],
                tips: [
                    { de: "Warmmiete vs. Kaltmiete", en: "Kaltmiete = base rent only; Warmmiete = total with heating and maintenance." },
                    { de: "Erforderliche Dokumente", en: "Note down the 3 required papers: ID card, 3 payslips, and credit check." },
                    { de: "Besichtigungstermin", en: "Check whether individual appointments or group open-houses are scheduled." }
                ]
            },
            text: "**Einladung zur Wohnungsbesichtigung**\n\nSehr geehrte Mietinteressenten,\n\nwir laden Sie herzlich zur Besichtigung der **2-Zimmer-Wohnung** in der Schillerstraße 14 ein.\n\n**Termin:** Samstag, 14. Oktober, von 10:00 bis 12:00 Uhr.\n\n**Wohnungsdaten:**\n- 58 m², 2. Obergeschoss mit Südbalkon und Einbauküche\n- Kaltmiete: 650 Euro | Nebenkosten: 180 Euro | **Warmmiete: 830 Euro**\n- Kaution: 1.950 Euro (3 Kaltmieten)\n\nBitte bringen Sie zur Besichtigung folgende Unterlagen in Kopie mit: Kopie des Personalausweises, die letzten drei Gehaltsabrechnungen und eine aktuelle Schufa-Auskunft.\n\nMit freundlichen Grüßen,\n**Hausverwaltung Weber & Partner**",
            textEN: "**Apartment Viewing Invitation**\n\nDear Prospective Tenants,\n\nWe warmly invite you to view the **2-room apartment** at Schillerstraße 14.\n\n**Viewing Date:** Saturday, 14 October, from 10:00 to 12:00.\n\n**Apartment Details:**\n- 58 m², 2nd floor with south-facing balcony and fitted kitchen\n- Base rent: €650 | Utilities: €180 | **Total rent: €830**\n- Deposit: €1,950 (3 months base rent)\n\nPlease bring copies of the following documents to the viewing: copy of ID card, last three payslips, and a current credit check.\n\nKind regards,\n**Property Management Weber & Partner**",
            questions: [
                {
                    question: "Wie hoch ist die monatliche Gesamtmiete (Warmmiete)?",
                    questionEN: "How much is the total monthly rent (warm rent)?",
                    options: ["830 Euro", "650 Euro", "180 Euro", "1.950 Euro"],
                    correct: 0,
                    explanation: "The text states: 'Warmmiete: 830 Euro'."
                },
                {
                    question: "Wann findet die Besichtigung statt?",
                    questionEN: "When does the viewing take place?",
                    options: ["Am Samstagvormittag", "Am Sonntagnachmittag", "Am Freitag ab 18:00 Uhr", "Jeden Werktag"],
                    correct: 0,
                    explanation: "'Samstag, 14. Oktober, von 10:00 bis 12:00 Uhr' is on Saturday morning."
                },
                {
                    question: "Welches Dokument wird bei der Besichtigung verlangt?",
                    questionEN: "Which document is requested at the viewing?",
                    options: ["Gehaltsabrechnungen der letzten 3 Monate", "Ein Führungszeugnis der Polizei", "Ein ärztliches Attest", "Der alte Mietvertrag"],
                    correct: 0,
                    explanation: "'die letzten drei Gehaltsabrechnungen' are explicitly listed."
                }
            ]
        },
        {
            id: "a2_read_17",
            title: "Kundenservice & Reklamation",
            titleEN: "Customer Service & Warranty Return",
            emoji: "📦",
            warmup: {
                vocab: [
                    { word: "die Reklamation", gender: "die", translation: "complaint / warranty claim", example: "Die Reklamation wurde vom Kundenservice schnell bearbeitet.", exampleEN: "The complaint was processed quickly by customer service." },
                    { word: "der Defekt", gender: "der", translation: "defect / fault", example: "Das Gerät hat einen technischen Defekt.", exampleEN: "The appliance has a technical fault." },
                    { word: "der Kassenbeleg", gender: "der", translation: "purchase receipt / sales slip", example: "Bitte legen Sie den Kassenbeleg der Rücksendung bei.", exampleEN: "Please enclose the sales receipt with the return." },
                    { word: "der Ersatz", gender: "der", translation: "replacement", example: "Wir senden Ihnen kostenlosen Ersatz.", exampleEN: "We will send you a free replacement." },
                    { word: "das Rücksendeetikett", gender: "das", translation: "return postage label", example: "Drucken Sie das kostenfreie Rücksendeetikett aus.", exampleEN: "Print out the prepaid return label." },
                    { word: "die Gutschrift", gender: "die", translation: "store credit / refund voucher", example: "Sie erhalten den Betrag als Gutschrift auf Ihr Bankkonto.", exampleEN: "You will receive the amount as a credit to your bank account." }
                ],
                tips: [
                    { de: "Garantiefrist beachten", en: "Check how long the warranty is valid (usually 2 years in Germany)." },
                    { de: "Rücksendekosten", en: "Notice if returns are free ('kostenfrei') or paid by customer." },
                    { de: "Fehlerbeschreibung", en: "A clear description of the defect speeds up repair or replacement." }
                ]
            },
            text: "**Service-Information zur Warenrücksendung**\n\nLiebe Kundin, lieber Kunde,\n\nIhr bei uns gekaufter Artikel funktioniert nicht einwandfrei? Sie haben innerhalb von **24 Monaten ab Kaufdatum** Anspruch auf gesetzliche Gewährleistung.\n\n**So funktioniert der Umtausch:**\n1. Loggen Sie sich in Ihr Kundenkonto ein und wählen Sie „Bestellungen“.\n2. Klicken Sie auf „Artikel reklamieren“ und beschreiben Sie kurz den Fehler.\n3. Drucken Sie das **kostenlose DHL-Rücksendeetikett** aus.\n4. Verpacken Sie die Ware zusammen mit einer Kopie der Rechnung und bringen Sie das Paket zur nächsten Postfiliale.\n\nNach Prüfung im Servicelabor senden wir Ihnen innerhalb von **5 Werktagen** ein Neugerät oder erstatten den Kaufpreis.\n\nIhr Team von **ElectroMarkt Online**",
            textEN: "**Service Information for Goods Returns**\n\nDear Customer,\n\nYour purchased item is not working properly? You are entitled to statutory warranty within **24 months from purchase date**.\n\n**How the return process works:**\n1. Log into your customer account and select 'Orders'.\n2. Click on 'Claim Item' and briefly describe the fault.\n3. Print the **free DHL return label**.\n4. Pack the item together with a copy of the invoice and drop it off at the nearest post branch.\n\nAfter inspection in the service lab, we will send you a new device or refund the purchase price within **5 working days**.\n\nYour team at **ElectroMarkt Online**",
            questions: [
                {
                    question: "Wie lange gilt die gesetzliche Gewährleistung ab Kaufdatum?",
                    questionEN: "How long is the statutory warranty valid from the purchase date?",
                    options: ["24 Monate", "12 Monate", "30 Tage", "14 Tage"],
                    correct: 0,
                    explanation: "The text states: 'innerhalb von 24 Monaten ab Kaufdatum'."
                },
                {
                    question: "Wer bezahlt die Rücksendung des defekten Artikels?",
                    questionEN: "Who pays for returning the defective item?",
                    options: ["Der Verkäufer (kostenloses Etikett)", "Der Kunde selbst", "Die Postfiliale", "Die Versicherung"],
                    correct: 0,
                    explanation: "The text specifies 'kostenloses DHL-Rücksendeetikett'."
                },
                {
                    question: "Wie schnell erhält der Kunde nach der Überprüfung Ersatz?",
                    questionEN: "How quickly does the customer receive a replacement after inspection?",
                    options: ["Innerhalb von 5 Werktagen", "Innerhalb von 24 Stunden", "Nach 4 Wochen", "Erst nach telefonischer Rückfrage"],
                    correct: 0,
                    explanation: "The notice says: 'innerhalb von 5 Werktagen ein Neugerät'."
                }
            ]
        },
        {
            id: "a2_read_18",
            title: "Fahrplanänderung & Schienenersatzverkehr",
            titleEN: "Train Schedule Change & Replacement Bus",
            emoji: "🚆",
            warmup: {
                vocab: [
                    { word: "der Schienenersatzverkehr (SEV)", gender: "der", translation: "rail replacement bus service", example: "Zwischen Ulm und Augsburg verkehrt ein Schienenersatzverkehr.", exampleEN: "A rail replacement bus operates between Ulm and Augsburg." },
                    { word: "die Baumaßnahme", gender: "die", translation: "construction / engineering works", example: "Wegen dringender Baumaßnahmen ist die Bahnstrecke gesperrt.", exampleEN: "The railway line is closed due to urgent construction works." },
                    { word: "die Haltestelle", gender: "die", translation: "bus / tram stop", example: "Die SEV-Haltestelle befindet sich direkt vor dem Bahnhofsgebäude.", exampleEN: "The replacement bus stop is right in front of the station building." },
                    { word: "die Verzögerung", gender: "die", translation: "delay", example: "Rechnen Sie mit etwa 25 Minuten Verzögerung.", exampleEN: "Expect a delay of about 25 minutes." },
                    { word: "die Fahrradmitnahme", gender: "die", translation: "taking bicycles on board", example: "Die Fahrradmitnahme im Ersatzbus ist leider nicht möglich.", exampleEN: "Taking bicycles on the replacement bus is unfortunately not possible." },
                    { word: "der Anschlusszug", gender: "der", translation: "connecting train", example: "Der Anschlusszug in Stuttgart wartet bis zu 10 Minuten.", exampleEN: "The connecting train in Stuttgart waits up to 10 minutes." }
                ],
                tips: [
                    { de: "SEV = Bus statt Bahn", en: "SEV stands for bus replacement when rail tracks are closed." },
                    { de: "Gültigkeit der Fahrkarte", en: "Regular train tickets remain fully valid on replacement buses." },
                    { de: "Zusätzliche Reisezeit", en: "Always budget extra travel time during track maintenance." }
                ]
            },
            text: "**Fahrgastinformation: Streckensperrung Regionalbahn RB 42**\n\nWegen Gleisbauarbeiten ist der Streckenabschnitt zwischen **Heidelberg Hauptbahnhof und Wiesloch-Walldorf** von Freitag, 20. Oktober (21:00 Uhr), bis Montag, 23. Oktober (04:30 Uhr), für den Zugverkehr voll gesperrt.\n\n**Ersatzverkehr mit Bussen (SEV):**\n- Alle Züge der Linie RB 42 entfallen auf diesem Abschnitt.\n- Als Ersatz fahren Busse im 20-Minuten-Takt ab Bussteig D vor dem Bahnhof.\n- **Fahrzeitverlängerung:** Bitte planen Sie ca. 20 bis 30 Minuten mehr Reisezeit ein.\n- **Fahrradmitnahme:** In den Ersatzbussen können aus Platzgründen keine Fahrräder befördert werden.\n- Fahrkarten der Deutschen Bahn und des Verkehrsverbunds sind in den Bussen gültig.\n\nWir bitten um Ihr Verständnis.\n**DB Regio Mitte**",
            textEN: "**Passenger Information: Track Closure Regional Train RB 42**\n\nDue to track maintenance, the rail section between **Heidelberg Central Station and Wiesloch-Walldorf** is completely closed to train traffic from Friday, 20 October (21:00) until Monday, 23 October (04:30).\n\n**Rail Replacement Bus Service (SEV):**\n- All RB 42 trains are cancelled on this section.\n- Replacement buses run every 20 minutes from Bus Platform D outside the station.\n- **Extended Travel Time:** Please budget approximately 20 to 30 minutes more travel time.\n- **Bicycles:** Due to limited space, bicycles cannot be transported on replacement buses.\n- DB and local transit network tickets are valid on the buses.\n\nWe appreciate your understanding.\n**DB Regio Central**",
            questions: [
                {
                    question: "Wie oft fahren die Ersatzbusse zwischen den beiden Bahnhöfen?",
                    questionEN: "How often do the replacement buses run between the two stations?",
                    options: ["Alle 20 Minuten", "Jede volle Stunde", "Nur morgens und abends", "Alle 5 Minuten"],
                    correct: 0,
                    explanation: "The notice says: 'fahren Busse im 20-Minuten-Takt'."
                },
                {
                    question: "Darf man ein Fahrrad im Ersatzbus mitnehmen?",
                    questionEN: "Are passengers allowed to take a bicycle on the replacement bus?",
                    options: ["Nein, keine Fahrräder", "Ja, gegen Aufpreis", "Ja, bis 12 Uhr", "Nur Klappräder"],
                    correct: 0,
                    explanation: "'können aus Platzgründen keine Fahrräder befördert werden'."
                },
                {
                    question: "Braucht man ein neues Ticket für den Bus?",
                    questionEN: "Does one need a new ticket for the bus?",
                    options: ["Nein, Bahntickets sind im Bus gültig", "Ja, man muss beim Fahrer bar zahlen", "Nur mit Monatsticket", "Ja, 5 Euro extra"],
                    correct: 0,
                    explanation: "'Fahrkarten der Deutschen Bahn und des Verkehrsverbunds sind in den Bussen gültig'."
                }
            ]
        },
        {
            id: "a2_read_19",
            title: "Volkshochschule: Sprachkurs & Einstufung",
            titleEN: "Adult Education Centre: German Course & Placement",
            emoji: "📚",
            warmup: {
                vocab: [
                    { word: "die Volkshochschule (VHS)", gender: "die", translation: "community college / adult education centre", example: "Die VHS bietet günstige Abendkurse für Deutsch an.", exampleEN: "The VHS offers affordable evening courses for German." },
                    { word: "der Einstufungstest", gender: "der", translation: "placement test / assessment test", example: "Machen Sie zuerst den Einstufungstest, um Ihr Niveau zu finden.", exampleEN: "Do the placement test first to find your level." },
                    { word: "die Kursgebühr", gender: "die", translation: "course fee / tuition", example: "Die Kursgebühr beinhaltet das Lehrbuch.", exampleEN: "The course fee includes the coursebook." },
                    { word: "die Teilnahmebescheinigung", gender: "die", translation: "certificate of attendance", example: "Bei 80% Anwesenheit erhalten Sie eine Teilnahmebescheinigung.", exampleEN: "With 80% attendance you receive a certificate of attendance." },
                    { word: "die Ermäßigung", gender: "die", translation: "discount / concession fee", example: "Studierende und Arbeitssuchende erhalten 30% Ermäßigung.", exampleEN: "Students and job seekers receive a 30% discount." },
                    { word: "die Unterrichtseinheit (UE)", gender: "die", translation: "lesson unit (45 min)", example: "Der Kurs umfasst 60 Unterrichtseinheiten.", exampleEN: "The course comprises 60 lesson units." }
                ],
                tips: [
                    { de: "Einstufungsberatung", en: "Adult colleges usually require a short placement consultation before booking A2/B1." },
                    { de: "Anwesenheitspflicht", en: "Check minimum attendance percentage for official certification." },
                    { de: "UE = 45 Minuten", en: "1 Unterrichtseinheit equals 45 minutes in German educational contexts." }
                ]
            },
            text: "**Volkshochschule Stadtmitte — Deutsch A2.2 Abendkurs**\n\nSie haben bereits Grundkenntnisse in Deutsch (Niveau A2.1) und möchten Ihre Sprech- und Schreibfertigkeiten für Beruf und Alltag vertiefen?\n\n**Kursdetails:**\n- **Zeitraum:** 6. November bis 15. Februar\n- **Unterrichtszeiten:** Montag und Mittwoch, jeweils 18:30–20:45 Uhr (insgesamt 60 UE)\n- **Kursort:** VHS-Zentrum, Zimmer 204 oder online per Zoom\n- **Kursgebühr:** 220 Euro (ermäßigt 150 Euro für Studierende und Bürgergeld-Empfänger)\n- **Lehrwerk:** *Schritte Plus Neu A2.2* (bitte vor Kursbeginn selbst kaufen)\n\n**Wichtig:** Vor der ersten Anmeldung ist ein kostenloser Online-Einstufungstest oder eine persönliche Beratung am Dienstag zwischen 14:00 und 17:00 Uhr erforderlich.\n\nAnmeldung unter: **www.vhs-stadtmitte.de/deutsch-a2**",
            textEN: "**City Centre Adult Education Centre — German A2.2 Evening Course**\n\nYou already have basic German knowledge (Level A2.1) and want to deepen your speaking and writing skills for work and daily life?\n\n**Course Details:**\n- **Period:** 6 November to 15 February\n- **Class Times:** Monday and Wednesday, 18:30–20:45 each (total 60 teaching units)\n- **Location:** VHS Centre, Room 204 or online via Zoom\n- **Tuition Fee:** €220 (concession €150 for students and welfare recipients)\n- **Coursebook:** *Schritte Plus Neu A2.2* (please purchase yourself before course starts)\n\n**Important:** Before first registration, a free online placement test or in-person consultation on Tuesday between 14:00 and 17:00 is mandatory.\n\nRegistration at: **www.vhs-stadtmitte.de/deutsch-a2**",
            questions: [
                {
                    question: "An welchen Tagen findet der Abendkurs statt?",
                    questionEN: "On which days does the evening class take place?",
                    options: ["Montags und mittwochs", "Dienstags und donnerstags", "Jeden Samstag", "Nur freitags"],
                    correct: 0,
                    explanation: "The details state: 'Montag und Mittwoch, jeweils 18:30–20:45 Uhr'."
                },
                {
                    question: "Ist das Lehrbuch in der Kursgebühr von 220 Euro enthalten?",
                    questionEN: "Is the coursebook included in the €220 tuition fee?",
                    options: ["Nein, man muss es selbst kaufen", "Ja, es wird kostenlos verteilt", "Nur das Arbeitsbuch", "Als kostenloses PDF"],
                    correct: 0,
                    explanation: "'bitte vor Kursbeginn selbst kaufen'."
                },
                {
                    question: "Was muss man vor der ersten Kursanmeldung machen?",
                    questionEN: "What must one do before the first course registration?",
                    options: ["Einen kostenlosen Einstufungstest machen", "Eine Prüfung beim Goethe-Institut ablegen", "Die volle Gebühr im Voraus überweisen", "Ein Passfoto einsenden"],
                    correct: 0,
                    explanation: "'Vor der ersten Anmeldung ist ein kostenloser Online-Einstufungstest... erforderlich'."
                }
            ]
        },
        {
            id: "a2_read_20",
            title: "Einladung zum Sommerfest im Kindergarten",
            titleEN: "Kindergarten Summer Party Invitation",
            emoji: "🎈",
            warmup: {
                vocab: [
                    { word: "das Sommerfest", gender: "das", translation: "summer festival / garden party", example: "Das Sommerfest ist der Höhepunkt des Kindergartenjahres.", exampleEN: "The summer party is the highlight of the kindergarten year." },
                    { word: "das Buffet", gender: "das", translation: "buffet / food spread", example: "Eltern bringen leckere Salate und Kuchen fürs Buffet mit.", exampleEN: "Parents bring delicious salads and cakes for the buffet." },
                    { word: "die Spende", gender: "die", translation: "donation / contribution", example: "Der Erlös geht als Spende an den Förderverein.", exampleEN: "The proceeds go as a donation to the booster club." },
                    { word: "die Kinderschminken", gender: "das", translation: "children face painting", example: "Die Erzieherinnen bieten Kinderschminken und Spiele an.", exampleEN: "The nursery teachers offer face painting and games." },
                    { word: "die Schlechtwetter-Alternative", gender: "die", translation: "rainy weather contingency", example: "Bei Regen feiern wir in der Turnhalle.", exampleEN: "In case of rain, we celebrate in the sports hall." },
                    { word: "der Mitmachbeitrag", gender: "der", translation: "participatory contribution (food/help)", example: "Tragen Sie Ihren Beitrag bitte in die Liste an der Pinnwand ein.", exampleEN: "Please enter your contribution in the pinboard list." }
                ],
                tips: [
                    { de: "Mitbringsel / Essensbeitrag", en: "In Germany, parents frequently coordinate a shared potluck buffet for school parties." },
                    { de: "Ausweichort bei Regen", en: "Check where the party takes place if it rains ('Turnhalle' or indoor rooms)." },
                    { de: "Eintragungsliste", en: "Notice the deadline to sign up helpers or food items." }
                ]
            },
            text: "**Liebe Eltern und Familien der Kita Sonnenschein,**\n\nwir laden euch und eure Kinder ganz herzlich zu unserem diesjährigen **großen Sommerfest** ein!\n\n**Wann:** Freitag, 7. Juli, von 15:30 bis 19:00 Uhr\n**Wo:** Im Garten der Kita (bei Regen in der Turnhalle)\n\n**Unser Programm:**\n- 16:00 Uhr: Kleine Aufführung der Vorschulkinder\n- Spielstationen, Dosenwerfen und Kinderschminken\n- Großes internationales Kuchen- und Salatbuffet\n\n**Buffet-Beitrag:** Damit alle satt werden, freuen wir uns über Essensspenden (Fingerfood, Kuchen oder Salate — bitte ohne Erdnüsse wegen Allergien). Bitte tragt euch bis zum **3. Juli** in die Liste im Eingangsbereich ein.\n\nWir freuen uns auf einen wunderschönen sonnigen Nachmittag mit euch!\n**Euer Kita-Team & Elternbeirat**",
            textEN: "**Dear Parents and Families of Sonnenschein Daycare,**\n\nWe warmly invite you and your children to our annual **big summer festival**!\n\n**When:** Friday, 7 July, from 15:30 to 19:00\n**Where:** In the daycare garden (in case of rain in the gym)\n\n**Our Programme:**\n- 16:00: Short performance by preschool children\n- Game stations, tin can toss, and face painting\n- Large international cake and salad buffet\n\n**Buffet Contribution:** To feed everyone, we welcome food donations (finger food, cakes, or salads — please no peanuts due to allergies). Please sign up on the list in the entrance area by **3 July**.\n\nWe look forward to a wonderful sunny afternoon with you!\n**Your Daycare Team & Parents' Council**",
            questions: [
                {
                    question: "Wo findet das Sommerfest statt, wenn es regnet?",
                    questionEN: "Where does the summer party take place if it rains?",
                    options: ["In der Turnhalle", "Im Rathaus", "Es fällt aus", "Im Supermarkt"],
                    correct: 0,
                    explanation: "The text states: 'bei Regen in der Turnhalle'."
                },
                {
                    question: "Welche Zutat darf wegen Allergien NICHT im Essen sein?",
                    questionEN: "Which ingredient must NOT be in the food due to allergies?",
                    options: ["Erdnüsse", "Zucker", "Gluten", "Milch"],
                    correct: 0,
                    explanation: "'bitte ohne Erdnüsse wegen Allergien'."
                },
                {
                    question: "Bis wann sollen sich die Eltern für das Buffet eintragen?",
                    questionEN: "By when should parents sign up for the buffet contribution?",
                    options: ["Bis zum 3. Juli", "Erst am 7. Juli", "Bis Ende August", "Gar nicht nötig"],
                    correct: 0,
                    explanation: "'Bitte tragt euch bis zum 3. Juli in die Liste... ein'."
                }
            ]
        },
        {
            id: "a2_read_21",
            title: "Bibliotheksordnung & Ausleihe",
            titleEN: "Public Library Rules & Lending Service",
            emoji: "📖",
            warmup: {
                vocab: [
                    { word: "der Bibliotheksausweis", gender: "der", translation: "library card", example: "Mit dem Bibliotheksausweis können Sie bis zu 20 Bücher ausleihen.", exampleEN: "With the library card you can borrow up to 20 books." },
                    { word: "die Leihfrist", gender: "die", translation: "loan period / borrowing duration", example: "Die Leihfrist für Bücher beträgt vier Wochen.", exampleEN: "The loan period for books is four weeks." },
                    { word: "verlängern", gender: "Verb", translation: "to renew / extend", example: "Sie können die Medien online um weitere vier Wochen verlängern.", exampleEN: "You can renew the media online for another four weeks." },
                    { word: "die Säumnisgebühr", gender: "die", translation: "late return fee / fine", example: "Bei verspäteter Rückgabe fällt eine Säumnisgebühr von 1 Euro pro Tag an.", exampleEN: "For late returns, a fine of €1 per day applies." },
                    { word: "das E-Book", gender: "das", translation: "electronic book", example: "Unsere Onleihe bietet Tausende kostenlose E-Books und Hörbücher.", exampleEN: "Our digital library offers thousands of free e-books and audiobooks." },
                    { word: "die Rückgabebox", gender: "die", translation: "returns drop box", example: "Außerhalb der Öffnungszeiten nutzen Sie bitte die Rückgabebox.", exampleEN: "Outside opening hours please use the returns drop box." }
                ],
                tips: [
                    { de: "Leihfrist (Bücher vs. DVDs)", en: "Books often have longer loan periods (4 weeks) than DVDs or games (2 weeks)." },
                    { de: "Online-Konto Verlängerung", en: "Media can be renewed online unless reserved by another borrower." },
                    { de: "Rückgabe außerhalb der Öffnungszeiten", en: "Return drop boxes allow returning media 24/7." }
                ]
            },
            text: "**Stadtbibliothek Lindau — Wichtige Benutzerhinweise**\n\nHerzlich willkommen in Ihrer Stadtbibliothek! Bitte beachten Sie folgende Regelungen für die Ausleihe:\n\n- **Leihfristen:** Bücher, Sprachkurse und Noten: **4 Wochen**. DVDs, Konsolenspiele und Zeitschriften: **2 Wochen**.\n- **Verlängerung:** Sie können die Leihfrist bis zu zweimal online in Ihrem Benutzerkonto oder telefonisch verlängern, sofern keine Vormerkung anderer Leser vorliegt.\n- **Rückgabe rund um die Uhr:** Außerhalb der Öffnungszeiten steht Ihnen unsere automatische Rückgabebox am Haupteingang zur Verfügung.\n- **Mahngebühren:** Bitte geben Sie entliehene Medien pünktlich zurück. Ab dem ersten Tag nach Fristablauf berechnen wir **0,50 Euro pro Medium und Öffnungstag**.\n- **Kostenloses WLAN & Arbeitsplätze:** Im 1. Stock finden Sie ruhige Lernplätze mit Stromanschlüssen und kostenfreiem Internet.\n\nÖffnungszeiten: Di–Fr 10:00–18:30 Uhr | Sa 10:00–14:00 Uhr (Mo geschlossen).",
            textEN: "**Lindau City Library — Important User Guidelines**\n\nWelcome to your municipal library! Please observe the following loan rules:\n\n- **Loan Periods:** Books, language courses, and sheet music: **4 weeks**. DVDs, console games, and magazines: **2 weeks**.\n- **Renewals:** You can renew items up to twice online in your user account or by phone, provided no other reader has reserved them.\n- **24/7 Returns:** Outside opening hours, our automated drop box at the main entrance is available.\n- **Overdue Fines:** Please return borrowed items on time. Starting from the first day overdue, we charge **€0.50 per item per opening day**.\n- **Free Wi-Fi & Workspaces:** On the 1st floor you will find quiet study desks with power sockets and free internet.\n\nOpening hours: Tue–Fri 10:00–18:30 | Sat 10:00–14:00 (Mon closed).",
            questions: [
                {
                    question: "Wie lange darf man DVDs und Zeitschriften ausleihen?",
                    questionEN: "How long can one borrow DVDs and magazines?",
                    options: ["2 Wochen", "4 Wochen", "6 Monate", "Nur über das Wochenende"],
                    correct: 0,
                    explanation: "'DVDs, Konsolenspiele und Zeitschriften: 2 Wochen'."
                },
                {
                    question: "Wie oft kann man entliehene Medien verlängern?",
                    questionEN: "How many times can one renew borrowed media?",
                    options: ["Bis zu zweimal", "Unbegrenzt oft", "Gar nicht", "Zehnmal"],
                    correct: 0,
                    explanation: "'Sie können die Leihfrist bis zu zweimal online... verlängern'."
                },
                {
                    question: "An welchem Wochentag ist die Bibliothek geschlossen?",
                    questionEN: "On which day of the week is the library closed?",
                    options: ["Montags", "Samstags", "Mittwochs", "Sonntags und montags"],
                    correct: 0,
                    explanation: "Opening hours note: '(Mo geschlossen)'."
                }
            ]
        },
        {
            id: "a2_read_22",
            title: "Mitteilung der Hausverwaltung: Aufzugsreparatur",
            titleEN: "Property Notice: Elevator Maintenance",
            emoji: "🏢",
            warmup: {
                vocab: [
                    { word: "der Aufzug", gender: "der", translation: "elevator / lift", example: "Der Aufzug ist wegen Wartungsarbeiten außer Betrieb.", exampleEN: "The elevator is out of service due to maintenance." },
                    { word: "außer Betrieb", gender: "Phrase", translation: "out of order / not working", example: "Das Gerät ist vorübergehend außer Betrieb.", exampleEN: "The appliance is temporarily out of service." },
                    { word: "das Treppenhaus", gender: "das", translation: "staircase / stairwell", example: "Bitte benutzen Sie während der Reparatur das Treppenhaus.", exampleEN: "Please use the stairwell during the repair." },
                    { word: "die Hausordnung", gender: "die", translation: "house rules / apartment regulations", example: "Die Ruhezeiten sind in der Hausordnung geregelt.", exampleEN: "Quiet hours are regulated in the house rules." },
                    { word: "der Fluchtweg", gender: "der", translation: "escape route / fire exit", example: "Im Treppenhaus dürfen keine Fahrräder stehen, weil es ein Fluchtweg ist.", exampleEN: "No bikes may stand in the stairwell as it is an escape route." },
                    { word: "die Behinderung", gender: "die", translation: "inconvenience / obstacle / handicap", example: "Wir bitten um Entschuldigung für die vorübergehende Behinderung.", exampleEN: "We apologize for the temporary inconvenience." }
                ],
                tips: [
                    { de: "Dauer der Störung", en: "Look for from-date to to-date indicating when the lift is stopped." },
                    { de: "Brandschutz im Treppenhaus", en: "Common German apartment rule: keep staircases clear of shoes, boxes, and bikes." },
                    { de: "Hilfe für ältere Nachbarn", en: "Notices often request neighbors to help elderly tenants with grocery carrying." }
                ]
            },
            text: "**Aushang an alle Hausbewohner: Aufzugerneuerung**\n\nSehr geehrte Damen und Herren,\n\nwegen des Einbaus einer neuen modernen Steuerung muss der Personenaufzug im Haus B (**Kastanienallee 8**) erneuert werden.\n\n**Zeitraum der Abschaltung:**\nVon **Montag, 13. November (07:30 Uhr)**, bis einschließlich **Donnerstag, 16. November (ca. 17:00 Uhr)** ist der Aufzug vollkommen **außer Betrieb**.\n\n**Wichtige Hinweise:**\n1. Bitte nutzen Sie während dieser vier Tage das Treppenhaus.\n2. **Brandschutz:** Im Treppenhaus dürfen keine Kinderwagen, Fahrräder oder Schuhregale abgestellt werden, da alle Fluchtwege frei bleiben müssen.\n3. Wenn Sie ältere Nachbarn haben, unterstützen Sie diese bitte beim Tragen schwerer Einkaufstaschen.\n\nFür dringende Rückfragen erreichen Sie den technischen Notdienst unter: **0800 456 789 0**.\n\nWir danken Ihnen für Ihr Verständnis!\n**Hausverwaltung Lindenhof GmbH**",
            textEN: "**Notice to all Residents: Elevator Modernisation**\n\nDear Residents,\n\nDue to the installation of a new modern control system, the passenger lift in Building B (**Kastanienallee 8**) must be upgraded.\n\n**Shutdown Period:**\nFrom **Monday, 13 November (07:30)** until **Thursday, 16 November (approx. 17:00)** inclusive, the lift will be completely **out of service**.\n\n**Important Instructions:**\n1. Please use the stairwell during these four days.\n2. **Fire Safety:** No strollers, bicycles, or shoe racks may be stored in the stairwell, as all emergency escape routes must remain clear.\n3. If you have elderly neighbors, please assist them with carrying heavy shopping bags.\n\nFor urgent questions, reach technical support at: **0800 456 789 0**.\n\nThank you for your understanding!\n**Lindenhof Property Management GmbH**",
            questions: [
                {
                    question: "Bis zu welchem Wochentag ist der Aufzug außer Betrieb?",
                    questionEN: "Until which day of the week is the elevator out of service?",
                    options: ["Donnerstag, 16. November", "Samstag, 18. November", "Nur am Montag", "Für zwei Monate"],
                    correct: 0,
                    explanation: "The notice says: 'bis einschließlich Donnerstag, 16. November'."
                },
                {
                    question: "Warum darf man keine Gegenstände im Treppenhaus abstellen?",
                    questionEN: "Why is one not allowed to leave objects in the stairwell?",
                    options: ["Wegen Brandschutz und Fluchtwegen", "Weil der Hausmeister dort streicht", "Weil es zu schmutzig ist", "Nur Kinderwagen sind verboten"],
                    correct: 0,
                    explanation: "'da alle Fluchtwege frei bleiben müssen (Brandschutz)'."
                },
                {
                    question: "Wozu werden die Bewohner bezüglich älterer Nachbarn aufgerufen?",
                    questionEN: "What are residents asked to do regarding elderly neighbors?",
                    options: ["Beim Tragen von schweren Einkäufen helfen", "Ihnen Essen kochen", "Sie zur Hausverwaltung fahren", "Sie nicht ansprechen"],
                    correct: 0,
                    explanation: "'unterstützen Sie diese bitte beim Tragen schwerer Einkaufstaschen'."
                }
            ]
        },
        {
            id: "a2_read_23",
            title: "Tierschutzverein: Hundevermittlung & Tierheimregeln",
            titleEN: "Animal Shelter: Dog Adoption & Volunteer Walking",
            emoji: "🐕",
            warmup: {
                vocab: [
                    { word: "das Tierheim", gender: "das", translation: "animal shelter", example: "Im Tierheim warten viele Hunde auf ein neues Zuhause.", exampleEN: "Many dogs are waiting for a new home at the animal shelter." },
                    { word: "Gassi gehen", gender: "Phrase", translation: "to walk the dog", example: "Freiwillige Helfer gehen jeden Nachmittag mit den Hunden Gassi.", exampleEN: "Volunteer helpers walk the dogs every afternoon." },
                    { word: "die Schutzgebühr", gender: "die", translation: "adoption / sheltering fee", example: "Die Schutzgebühr deckt die Impf- und Tierarztkosten.", exampleEN: "The adoption fee covers vaccination and vet costs." },
                    { word: "die Verträglichkeit", gender: "die", translation: "compatibility (with other pets/kids)", example: "Bello zeigt eine gute Verträglichkeit mit Katzen.", exampleEN: "Bello shows good compatibility with cats." },
                    { word: "geimpft und gechippt", gender: "Adj.", translation: "vaccinated and microchipped", example: "Alle unsere Tiere sind geimpft, gechippt und entwurmt.", exampleEN: "All our animals are vaccinated, chipped, and dewormed." },
                    { word: "der Sachkundenachweis", gender: "der", translation: "proof of dog ownership competency", example: "In einigen Bundesländern braucht man einen Sachkundenachweis.", exampleEN: "In some federal states you need proof of handling competency." }
                ],
                tips: [
                    { de: "Gassigeh-Zeiten", en: "Shelters have specific time slots for public volunteer dog walkers." },
                    { de: "Tiervermittlung mit Vorkontrolle", en: "Adopting a pet in Germany includes a pre-adoption home check." },
                    { de: "Schutzgebühr", en: "Not a purchase price, but covers medical care and neutering." }
                ]
            },
            text: "**Tierheim Waldfrieden — Hundevermittlung & Ehrenamt**\n\nSie möchten einem Vierbeiner ein liebevolles Zuhause schenken oder in Ihrer Freizeit ehrenamtlich mit Hunden spazieren gehen?\n\n**Unsere Schützlinge:**\nAktuell suchen 12 Hunde und 18 Katzen ein neues Daheim. Alle Tiere sind tierärztlich untersucht, vollständig **geimpft, gechippt und kastriert**. Bei einer Vermittlung fällt eine Schutzgebühr von 280 Euro (Hunde) bzw. 120 Euro (Katzen) an.\n\n**Gassigehen für ehrenamtliche Helfer:**\n- **Zeiten:** Dienstag bis Sonntag, jeweils 14:00 bis 16:30 Uhr (Montags Ruhetag für die Tiere)\n- **Voraussetzung:** Mindestalter 18 Jahre und Teilnahme an unserer 30-minütigen Einführungsschulung jeden ersten Samstag im Monat um 11:00 Uhr.\n\n**Besuchs- und Beratungszeiten:**\nDonnerstag und Freitag 15:00–18:00 Uhr, Samstag 13:00–16:00 Uhr.\n\nKontakt: **tierheim-waldfrieden@tierschutz.org**",
            textEN: "**Waldfrieden Animal Shelter — Dog Adoption & Volunteering**\n\nWould you like to give a four-legged friend a loving home or volunteer to walk dogs in your spare time?\n\n**Our Animals:**\nCurrently 12 dogs and 18 cats are looking for a new home. All animals have been vet-checked, fully **vaccinated, microchipped, and neutered**. Adoption requires a contribution fee of €280 (dogs) or €120 (cats).\n\n**Dog Walking for Volunteers:**\n- **Times:** Tuesday to Sunday, 14:00 to 16:30 each (Mondays is quiet day for the animals)\n- **Prerequisites:** Minimum age 18 and attendance at our 30-minute introductory training every first Saturday of the month at 11:00.\n\n**Visiting & Consultation Hours:**\nThursday and Friday 15:00–18:00, Saturday 13:00–16:00.\n\nContact: **tierheim-waldfrieden@tierschutz.org**",
            questions: [
                {
                    question: "An welchem Tag darf man NICHT mit den Hunden Gassi gehen?",
                    questionEN: "On which day are volunteers NOT allowed to walk the dogs?",
                    options: ["Montags (Ruhetag)", "Sonntags", "Samstags", "Dienstags"],
                    correct: 0,
                    explanation: "'Montags Ruhetag für die Tiere'."
                },
                {
                    question: "Welches Mindestalter gilt für ehrenamtliche Hundeausführer?",
                    questionEN: "What is the minimum age for volunteer dog walkers?",
                    options: ["18 Jahre", "16 Jahre", "21 Jahre", "14 Jahre"],
                    correct: 0,
                    explanation: "Prerequisites specify: 'Mindestalter 18 Jahre'."
                },
                {
                    question: "Was ist im medizinischen Zustand aller Tiere garantiert?",
                    questionEN: "What is guaranteed regarding the medical condition of all animals?",
                    options: ["Sie sind geimpft, gechippt und kastriert", "Sie brauchen tägliche Medikamente", "Sie sind alle noch Welpen", "Sie dürfen nicht ins Haus"],
                    correct: 0,
                    explanation: "'vollständig geimpft, gechippt und kastriert'."
                }
            ]
        },
        {
            id: "a2_read_24",
            title: "Fitnessstudio: Kursplan & Trainingsregeln",
            titleEN: "Gym Studio: Class Schedule & Training Rules",
            emoji: "🏋️‍♂️",
            warmup: {
                vocab: [
                    { word: "das Fitnessstudio", gender: "das", translation: "gym / fitness centre", example: "Ich trainiere dreimal die Woche im Fitnessstudio.", exampleEN: "I train three times a week at the gym." },
                    { word: "saubere Sportschuhe", gender: "die (Pl.)", translation: "clean indoor sports shoes", example: "Im Trainingsbereich sind nur saubere Hallenschuhe erlaubt.", exampleEN: "Only clean indoor sports shoes are permitted in the training area." },
                    { word: "das Handtuch", gender: "das", translation: "towel", example: "Legen Sie bitte immer ein Handtuch auf die Trainingsgeräte.", exampleEN: "Please always place a towel on the exercise machines." },
                    { word: "der Spind", gender: "der", translation: "locker", example: "Schließen Sie Ihre Wertsachen im Spind ein.", exampleEN: "Lock your valuables in the locker." },
                    { word: "die Mitgliedskarte", gender: "die", translation: "membership card", example: "Beim Betreten des Studios scannen Sie Ihre Mitgliedskarte.", exampleEN: "Scan your membership card upon entering the studio." },
                    { word: "desinfizieren", gender: "Verb", translation: "to disinfect / sanitize", example: "Desinfizieren Sie das Gerät nach der Benutzung.", exampleEN: "Disinfect the machine after use." }
                ],
                tips: [
                    { de: "Handtuchpflicht", en: "Almost all German gyms strictly enforce placing a clean towel over seats." },
                    { de: "Eigene Hallenschuhe", en: "Street shoes are never allowed in the workout zones." },
                    { de: "Spind mit Vorhängeschloss", en: "Bring your own small padlock ('Vorhängeschloss') for the lockers." }
                ]
            },
            text: "**FitLife Studio — Wichtige Verhaltensregeln für den Trainingsbereich**\n\nLiebe Mitglieder,\n\ndamit das Training für alle angenehm, hygienisch und sicher bleibt, bitten wir Sie um Einhaltung folgender Regeln:\n\n1. **Schuhwerk:** Das Betreten der Trainingsfläche und der Kursräume ist ausschließlich mit **sauberen Hallensportschuhen** gestattet. Straßenschuhe sind verboten!\n2. **Handtuchpflicht:** Legen Sie beim Benutzen von Geräten und Bänken stets ein ausreichend großes Handtuch unter.\n3. **Hygiene:** Bitte reinigen und desinfizieren Sie die Polster nach jedem Durchgang mit den bereitstehenden Desinfektionstüchern.\n4. **Gewichte zurücklegen:** Hanteln und Hantelscheiben müssen nach dem Satz sofort an ihren ursprünglichen Platz zurückgeräumt werden.\n5. **Garderobe:** Jacken und Straßenschuhe gehören in die Umkleide. Schließen Sie Ihren Spind mit einem eigenen Vorhängeschloss ab.\n\nÖffnungszeiten: Mo–Fr 06:00–23:00 Uhr | Sa–So 08:00–21:00 Uhr.\n\nSportliche Grüße,\n**Euer FitLife Team**",
            textEN: "**FitLife Studio — Important Rules of Conduct for the Training Area**\n\nDear Members,\n\nTo ensure workouts remain pleasant, hygienic, and safe for everyone, please observe the following rules:\n\n1. **Footwear:** Entering the gym floor and class rooms is permitted exclusively with **clean indoor gym shoes**. Outdoor shoes are prohibited!\n2. **Towel Requirement:** Always place a sufficiently large towel underneath you when using machines and benches.\n3. **Hygiene:** Please wipe and disinfect cushions after each set with the disinfectant wipes provided.\n4. **Re-rack Weights:** Dumbbells and weight plates must be returned to their rack immediately after finishing your set.\n5. **Cloakroom:** Jackets and outdoor shoes belong in the locker room. Lock your locker with your own padlock.\n\nOpening hours: Mon–Fri 06:00–23:00 | Sat–Sun 08:00–21:00.\n\nSporty regards,\n**Your FitLife Team**",
            questions: [
                {
                    question: "Welche Schuhe darf man im Fitnessstudio tragen?",
                    questionEN: "Which shoes is one allowed to wear in the gym?",
                    options: ["Nur saubere Hallensportschuhe", "Normale Straßenschuhe", "Socken ohne Schuhe", "Wanderschuhe"],
                    correct: 0,
                    explanation: "'ausschließlich mit sauberen Hallensportschuhen gestattet. Straßenschuhe sind verboten!'."
                },
                {
                    question: "Was muss man nach der Benutzung eines Geräts tun?",
                    questionEN: "What must one do after using an exercise machine?",
                    options: ["Das Gerät mit Desinfektionstüchern reinigen", "Das Gerät ausschalten", "Den Trainer rufen", "Ein Foto machen"],
                    correct: 0,
                    explanation: "'reinigen und desinfizieren Sie die Polster... mit den bereitstehenden Desinfektionstüchern'."
                },
                {
                    question: "Ab wie viel Uhr öffnet das Studio am Wochenende (Samstag und Sonntag)?",
                    questionEN: "From what time does the studio open on weekends (Saturday and Sunday)?",
                    options: ["Ab 08:00 Uhr", "Ab 06:00 Uhr", "Erst ab 12:00 Uhr", "Rund um die Uhr"],
                    correct: 0,
                    explanation: "'Sa–So 08:00–21:00 Uhr'."
                }
            ]
        },
        {
            id: "a2_read_25",
            title: "Fundbüro Mitteilung: Verlorene Gegenstände",
            titleEN: "Lost & Found Office Notice",
            emoji: "🎒",
            warmup: {
                vocab: [
                    { word: "das Fundbüro", gender: "das", translation: "lost and found office", example: "Ich habe meine Tasche im Bus vergessen und gehe ins Fundbüro.", exampleEN: "I forgot my bag on the bus and am going to the lost and found." },
                    { word: "der Finderlohn", gender: "der", translation: "finder's reward", example: "Nach dem Gesetz steht dem Finder ein kleiner Finderlohn zu.", exampleEN: "By law the finder is entitled to a small finder's reward." },
                    { word: "der Eigentumsnachweis", gender: "der", translation: "proof of ownership", example: "Bringen Sie die Rechnung als Eigentumsnachweis mit.", exampleEN: "Bring the invoice along as proof of ownership." },
                    { word: "verlieren", gender: "Verb", translation: "to lose", example: "Er hat seinen Schlüsselbund auf dem Marktplatz verloren.", exampleEN: "He lost his key bunch in the market square." },
                    { word: "abholen", gender: "Verb", translation: "to collect / pick up", example: "Sie können den Gegenstand innerhalb von sechs Monaten abholen.", exampleEN: "You can pick up the object within six months." },
                    { word: "die Versteigerung", gender: "die", translation: "public auction", example: "Nicht abgeholte Fundsachen kommen nach sechs Monaten in die Versteigerung.", exampleEN: "Uncollected items go to public auction after six months." }
                ],
                tips: [
                    { de: "Eigentumsnachweis (PIN, Kaufbeleg)", en: "For phones/laptops, unlock code or IMEI number proves ownership." },
                    { de: "Aufbewahrungsfrist (6 Monate)", en: "German law holds found goods for 6 months before auctioning them." },
                    { de: "Gebühren beim Abholen", en: "A small administrative storage fee is usually charged when collecting." }
                ]
            },
            text: "**Zentrales Fundbüro der Stadt — Bürgerinformation**\n\nHaben Sie in öffentlichen Verkehrsmitteln, Parks oder städtischen Gebäuden einen Gegenstand verloren oder gefunden?\n\n**Gegenstand abholen:**\nWenn Ihr verlorener Gegenstand bei uns abgegeben wurde, können Sie ihn während der Schalterzeiten persönlich abholen.\n\n**Was Sie mitbringen müssen:**\n- Einen gültigen Lichtbildausweis (Reisepass oder Personalausweis)\n- Einen **Eigentumsnachweis**: z. B. Kaufbeleg, Zweitschlüssel, Geräte-Seriennummer oder bei Handys das Entsperren vor Ort per PIN/Muster.\n- Bearbeitungsgebühr: Je nach Wert des Gegenstands zwischen 5 und 15 Euro bar oder mit EC-Karte.\n\n**Wichtige Frist:** Alle Fundsachen werden genau **6 Monate** aufbewahrt. Wird der Gegenstand in dieser Frist nicht abgeholt, geht er in die öffentliche Versteigerung oder wird an den Finder übergeben.\n\nÖffnungszeiten: Montag 08:00–12:00 Uhr | Donnerstag 13:00–18:00 Uhr.",
            textEN: "**Central Municipal Lost & Found Office — Citizen Notice**\n\nDid you lose or find an item on public transport, in parks, or in municipal buildings?\n\n**Collecting your item:**\nIf your lost item was handed in, you can collect it in person during counter hours.\n\n**What you must bring:**\n- A valid photo ID (passport or national ID card)\n- **Proof of ownership**: e.g. receipt, spare key, device serial number, or for smartphones unlocking on-site via PIN/pattern.\n- Processing fee: Between €5 and €15 depending on value (cash or debit card).\n\n**Important Deadline:** All found items are kept for exactly **6 months**. If not claimed within this period, they are auctioned publicly or given to the finder.\n\nOpening hours: Monday 08:00–12:00 | Thursday 13:00–18:00.",
            questions: [
                {
                    question: "Wie kann man bei einem Smartphone das Eigentum nachweisen?",
                    questionEN: "How can one prove ownership of a smartphone?",
                    options: ["Durch Entsperren vor Ort mit PIN", "Nur mit dem Originalkarton", "Durch eine Zeugenaussage", "Gar nicht möglich"],
                    correct: 0,
                    explanation: "'oder bei Handys das Entsperren vor Ort per PIN/Muster'."
                },
                {
                    question: "Wie lange werden Fundsachen im Fundbüro aufbewahrt?",
                    questionEN: "How long are lost items kept at the lost property office?",
                    options: ["Genau 6 Monate", "Nur 30 Tage", "Zwei Jahre", "Zwei Wochen"],
                    correct: 0,
                    explanation: "'Alle Fundsachen werden genau 6 Monate aufbewahrt'."
                },
                {
                    question: "Wann hat das Fundbüro am Donnerstagnachmittag geöffnet?",
                    questionEN: "When is the lost and found office open on Thursday afternoon?",
                    options: ["13:00 bis 18:00 Uhr", "08:00 bis 12:00 Uhr", "Rund um die Uhr", "Nur bis 14:00 Uhr"],
                    correct: 0,
                    explanation: "'Donnerstag 13:00–18:00 Uhr'."
                }
            ]
        },
        {
            id: "a2_read_26",
            title: "Mülltrennung & Sperrmüll-Termine",
            titleEN: "Waste Separation & Bulky Waste Schedule",
            emoji: "♻️",
            warmup: {
                vocab: [
                    { word: "die Mülltrennung", gender: "die", translation: "waste separation / recycling sorting", example: "In Deutschland ist Mülltrennung gesetzlich vorgeschrieben.", exampleEN: "In Germany waste sorting is required by law." },
                    { word: "der Sperrmüll", gender: "der", translation: "bulky waste (furniture, mattresses)", example: "Alte Möbel und Matratzen gehören zum Sperrmüll.", exampleEN: "Old furniture and mattresses belong to bulky waste." },
                    { word: "der Wertstoffhof", gender: "der", translation: "recycling depot / civic amenity site", example: "Elektrogeräte bringt man direkt zum Wertstoffhof.", exampleEN: "Electrical appliances are brought directly to the recycling centre." },
                    { word: "die Biotonne", gender: "die", translation: "organic waste bin (brown bin)", example: "Obst- und Kaffeereste gehören in die braune Biotonne.", exampleEN: "Fruit peels and coffee grounds belong in the brown bio bin." },
                    { word: "der Gelbe Sack", gender: "der", translation: "yellow recycling bag (packaging)", example: "Verpackungen aus Plastik und Metall kommen in den Gelben Sack.", exampleEN: "Plastic and metal packaging goes into the yellow bag." },
                    { word: "die Abfuhr", gender: "die", translation: "waste collection / pickup", example: "Die Abfuhr der Papiertonne erfolgt alle zwei Wochen.", exampleEN: "Paper bin collection takes place every two weeks." }
                ],
                tips: [
                    { de: "Farben der Mülltonnen", en: "Blau = Papier; Gelb = Verpackung; Braun = Bio; Schwarz/Grau = Restmüll." },
                    { de: "Sperrmüll-Anmeldung", en: "Bulky waste must be registered beforehand; putting items on the curb without booking is fined." },
                    { de: "Kein Elektroschrott im Hausmüll", en: "Batteries and electronics must go to recycling depots or retail collection boxes." }
                ]
            },
            text: "**Abfallwirtschaftsbetrieb — Richtige Mülltrennung & Sperrmüll**\n\nLiebe Bürgerinnen und Bürger,\n\nbitte beachten Sie die Regelungen zur Mülltrennung im Stadtgebiet:\n\n- **Blaue Tonne:** Nur sauberes Papier, Pappe, Kartons und Zeitungen.\n- **Gelber Sack / Gelbe Tonne:** Leichtverpackungen aus Kunststoff, Aluminium und Verbundstoffen (z. B. Milchtüten, Joghurtbecher, Dosen).\n- **Braune Biotonne:** Küchenabfälle, Kaffeesatz, Obst- und Gemüsereste, Gartenabfälle. Keine Plastiktüten!\n- **Schwarze Restmülltonne:** Hygieneartikel, Staubsaugerbeutel, zerbrochenes Porzellan.\n\n**Sperrmüll-Abholung:**\nJeder Haushalt darf **zweimal pro Jahr kostenlos bis zu 4 m³ Sperrmüll** (Möbel, Tische, Matratzen) abholen lassen. Bitte vereinbaren Sie mindestens zwei Wochen im Voraus online einen Termin. Stellen Sie den Sperrmüll erst am Vorabend ab 18:00 Uhr an den Straßenrand.\n\nElektro-Altgeräte (Fernseher, Waschmaschinen) müssen separat beim **Wertstoffhof Nord** abgegeben werden.",
            textEN: "**Municipal Waste Management — Proper Recycling & Bulky Waste**\n\nDear Residents,\n\nPlease observe waste sorting regulations in the municipal area:\n\n- **Blue Bin:** Only clean paper, cardboard, boxes, and newspapers.\n- **Yellow Bag / Yellow Bin:** Lightweight packaging made of plastic, aluminium, and composite materials (e.g. milk cartons, yoghurt pots, cans).\n- **Brown Bio Bin:** Kitchen waste, coffee grounds, fruit and vegetable scraps, garden waste. No plastic bags!\n- **Black General Waste Bin:** Sanitary items, vacuum bags, broken crockery.\n\n**Bulky Waste Collection:**\nEvery household is entitled to **two free bulky waste pickups per year (up to 4 m³)** (furniture, tables, mattresses). Please book an appointment online at least two weeks in advance. Place bulky waste on the curb no earlier than 18:00 on the evening before.\n\nOld electrical appliances (TVs, washing machines) must be dropped off separately at **Recycling Centre North**.",
            questions: [
                {
                    question: "Wie oft darf jeder Haushalt pro Jahr kostenlos Sperrmüll anmelden?",
                    questionEN: "How often may each household book free bulky waste collection per year?",
                    options: ["Zweimal pro Jahr", "Einmal im Monat", "Nur einmal alle zwei Jahre", "Unbegrenzt oft"],
                    correct: 0,
                    explanation: "'zweimal pro Jahr kostenlos bis zu 4 m³ Sperrmüll'."
                },
                {
                    question: "In welche Tonne gehören Plastikverpackungen und Konservendosen?",
                    questionEN: "Which bin do plastic packagings and food cans belong to?",
                    options: ["In den Gelben Sack / Gelbe Tonne", "In die Blaue Tonne", "In die Braune Biotonne", "In den Glascontainer"],
                    correct: 0,
                    explanation: "'Gelber Sack / Gelbe Tonne: Leichtverpackungen aus Kunststoff, Aluminium und Verbundstoffen'."
                },
                {
                    question: "Wo müssen alte Elektrogeräte (z. B. Waschmaschinen) abgegeben werden?",
                    questionEN: "Where must old electrical appliances (e.g. washing machines) be dropped off?",
                    options: ["Beim Wertstoffhof Nord", "In der schwarzen Restmülltonne", "An der Bushaltestelle", "Im Fundbüro"],
                    correct: 0,
                    explanation: "'Elektro-Altgeräte... müssen separat beim Wertstoffhof Nord abgegeben werden'."
                }
            ]
        },
        {
            id: "a2_read_27",
            title: "Lange Nacht der Museen: Programm & Tickets",
            titleEN: "Long Night of Museums: Programme & Tickets",
            emoji: "🎨",
            warmup: {
                vocab: [
                    { word: "die Museumsnacht", gender: "die", translation: "night of the museums", example: "Bei der Museumsnacht haben über 40 Museen bis 2 Uhr morgens geöffnet.", exampleEN: "During museum night over 40 museums are open until 2 AM." },
                    { word: "das Kombiticket", gender: "das", translation: "combination / all-inclusive ticket", example: "Das Kombiticket gilt für alle Museen und den Shuttlebus.", exampleEN: "The combi ticket is valid for all museums and the shuttle bus." },
                    { word: "die Führung", gender: "die", translation: "guided tour", example: "Um 20:00 Uhr gibt es eine Führung auf Deutsch und Englisch.", exampleEN: "At 20:00 there is a guided tour in German and English." },
                    { word: "die Sonderausstellung", gender: "die", translation: "special temporary exhibition", example: "Die Sonderausstellung zeigt moderne Fotokunst.", exampleEN: "The special exhibition showcases modern photography." },
                    { word: "der Shuttlebus", gender: "der", translation: "shuttle bus", example: "Shuttlebusse verbinden alle teilnehmenden Museen im 10-Minuten-Takt.", exampleEN: "Shuttle buses connect all participating museums every 10 minutes." },
                    { word: "der Vorverkauf", gender: "der", translation: "advance ticket sale", example: "Im Vorverkauf sind die Eintrittskarten 3 Euro günstiger.", exampleEN: "In advance sale, tickets are €3 cheaper." }
                ],
                tips: [
                    { de: "Kombiticket als Fahrkarte", en: "In Germany, museum night tickets almost always include free public transit and shuttle buses." },
                    { de: "Vorverkauf vs. Abendkasse", en: "Advance tickets ('Vorverkauf') save money and let you skip the box office lines." },
                    { de: "Führungen reservieren", en: "Popular themed guided tours often have limited spaces." }
                ]
            },
            text: "**Kulturnacht 2024: Die Lange Nacht der Museen**\n\nAm **Samstag, 18. November**, öffnen 35 Museen, Galerien und historische Bauten von **18:00 bis 02:00 Uhr morgens** ihre Türen für ein unvergessliches Kulturerlebnis!\n\n**Ticketpreise:**\n- **Kombiticket:** 18 Euro (Vorverkauf 15 Euro)\n- **Ermäßigt:** 10 Euro für Schüler, Studierende und Auszubildende\n- **Kinder bis 12 Jahre:** Freier Eintritt\n\n**Das Ticket beinhaltet:**\n- Eintritt in alle 35 teilnehmenden Häuser und Sonderausstellungen\n- Kostenlose Nutzung aller offiziellen Museums-Shuttlebusse (Linien 1 bis 4)\n- Freie Fahrt im gesamten Nahverkehrsnetz (Bus, Straßenbahn, S-Bahn) von 16:00 bis 06:00 Uhr des Folgetags.\n\n**Highlights:** Live-Musik im Stadtmuseum, Taschenlampenführung für Familien im Naturkundemuseum um 19:30 Uhr und historische Druckwerkstatt im Gutenberg-Haus.\n\nTickets online unter: **www.museumsnacht-tickets.de**",
            textEN: "**Culture Night 2024: Long Night of Museums**\n\nOn **Saturday, 18 November**, 35 museums, galleries, and historic buildings open their doors from **18:00 to 02:00 in the morning** for an unforgettable cultural experience!\n\n**Ticket Prices:**\n- **Combination Ticket:** €18 (Advance sale: €15)\n- **Reduced:** €10 for pupils, university students, and apprentices\n- **Children up to 12 years:** Free admission\n\n**The Ticket includes:**\n- Admission to all 35 participating venues and special exhibitions\n- Free use of all official museum shuttle bus lines (Lines 1 to 4)\n- Free transit travel across the entire local network (bus, tram, suburban rail) from 16:00 to 06:00 the following day.\n\n**Highlights:** Live music at City Museum, flashlight tour for families at Natural History Museum at 19:30, and historic print workshop at Gutenberg House.\n\nTickets online at: **www.museumsnacht-tickets.de**",
            questions: [
                {
                    question: "Wie viel kostet ein Kombiticket im Vorverkauf?",
                    questionEN: "How much does a combo ticket cost in advance sale?",
                    options: ["15 Euro", "18 Euro", "10 Euro", "Kostenlos"],
                    correct: 0,
                    explanation: "Ticket info says: 'Kombiticket: 18 Euro (Vorverkauf 15 Euro)'."
                },
                {
                    question: "Gilt das Ticket auch für öffentliche Verkehrsmittel (Bus und Bahn)?",
                    questionEN: "Is the ticket also valid for public transport (bus and train)?",
                    options: ["Ja, freie Fahrt von 16:00 bis 06:00 Uhr", "Nein, nur für Museen", "Nur für den Shuttlebus", "Nur gegen 10 Euro Aufpreis"],
                    correct: 0,
                    explanation: "'Freie Fahrt im gesamten Nahverkehrsnetz... von 16:00 bis 06:00 Uhr'."
                },
                {
                    question: "Bis wie viel Uhr haben die Museen in dieser Nacht geöffnet?",
                    questionEN: "Until what time are the museums open on this night?",
                    options: ["Bis 02:00 Uhr morgens", "Bis 22:00 Uhr", "Bis Mitternacht", "Bis 06:00 Uhr"],
                    correct: 0,
                    explanation: "Opening hours are 'von 18:00 bis 02:00 Uhr morgens'."
                }
            ]
        },
        {
            id: "a2_read_28",
            title: "Arztpraxis-Aushang: Grippeimpfung & Sprechzeiten",
            titleEN: "Medical Clinic Notice: Flu Vaccination Hours",
            emoji: "💉",
            warmup: {
                vocab: [
                    { word: "die Grippeimpfung", gender: "die", translation: "flu shot / influenza vaccination", example: "Die jährliche Grippeimpfung wird im Herbst empfohlen.", exampleEN: "The annual flu vaccination is recommended in autumn." },
                    { word: "die Sprechstunde", gender: "die", translation: "consultation hours / office hours", example: "Die offene Sprechstunde findet mittwochmorgens statt.", exampleEN: "The open consultation takes place on Wednesday mornings." },
                    { word: "der Impfpass", gender: "der", translation: "vaccination record booklet", example: "Bringen Sie bitte Ihren gelben Impfpass mit.", exampleEN: "Please bring your yellow vaccination booklet." },
                    { word: "die Versichertenkarte", gender: "die", translation: "health insurance chip card", example: "Ohne Versichertenkarte können wir Sie nicht behandeln.", exampleEN: "Without your health insurance card we cannot treat you." },
                    { word: "die Nebenwirkung", gender: "die", translation: "side effect", example: "Mögliche Nebenwirkungen sind leichte Rötungen am Arm.", exampleEN: "Possible side effects are mild redness on the arm." },
                    { word: "die Vorerkrankung", gender: "die", translation: "pre-existing medical condition", example: "Patienten mit chronischen Vorerkrankungen sollten sich impfen lassen.", exampleEN: "Patients with chronic pre-existing conditions should get vaccinated." }
                ],
                tips: [
                    { de: "Gelber Impfpass", en: "Always carry your international yellow vaccination booklet in Germany." },
                    { de: "Impfung ohne Termin", en: "Clinics often designate specific walk-in hours for seasonal vaccines." },
                    { de: "Kostenübernahme Krankenkasse", en: "Statutory health insurers in Germany cover annual flu shots for risk groups and seniors." }
                ]
            },
            text: "**Gemeinschaftspraxis Dres. Sommer & Bergmann**\n\n**Grippeschutzimpfung Herbst/Winter — Wichtige Information**\n\nAb **Montag, 16. Oktober**, bieten wir wieder die jährliche Schutzimpfung gegen die saisonale Influenza an. Die Impfung wird von der Ständigen Impfkommission (STIKO) besonders für Personen über 60 Jahre, chronisch Kranke, Schwangere und medizinisches Personal empfohlen.\n\n**Offene Impfsprechstunde (ohne Voranmeldung):**\n- Dienstag: 08:30 bis 11:30 Uhr\n- Donnerstag: 15:00 bis 17:30 Uhr\n\n**Was müssen Sie mitbringen?**\n1. Ihre elektronische Gesundheitskarte (**Versichertenkarte**)\n2. Ihren gelben **Impfpass** zur Dokumentation\n\nDie Kosten werden von allen gesetzlichen und privaten Krankenkassen vollständig übernommen. Bitte kommen Sie nur, wenn Sie frei von Fieber und akuten Infekten sind.\n\nIhr Praxisteam",
            textEN: "**Joint Practice Dres. Sommer & Bergmann**\n\n**Flu Vaccination Autumn/Winter — Important Information**\n\nStarting **Monday, 16 October**, we offer the annual vaccination against seasonal influenza once again. The vaccination is recommended by the Standing Committee on Vaccination (STIKO) particularly for people over 60, chronically ill persons, pregnant women, and healthcare staff.\n\n**Open Walk-in Vaccine Hours (no appointment needed):**\n- Tuesday: 08:30 to 11:30\n- Thursday: 15:00 to 17:30\n\n**What must you bring?**\n1. Your electronic health insurance card (**Versichertenkarte**)\n2. Your yellow **vaccination record booklet** for documentation\n\nCosts are covered entirely by all statutory and private health insurances. Please only come if you are free of fever and acute infections.\n\nYour clinic team",
            questions: [
                {
                    question: "Braucht man für die offene Impfsprechstunde einen festen Termin?",
                    questionEN: "Does one need a fixed appointment for the walk-in vaccine hours?",
                    options: ["Nein, keine Voranmeldung nötig", "Ja, nur online per App", "Nur telefonisch am Vortag", "Nur für Privatpatienten"],
                    correct: 0,
                    explanation: "The notice explicitly specifies 'ohne Voranmeldung'."
                },
                {
                    question: "Welche zwei Dinge muss man zur Impfung mitbringen?",
                    questionEN: "Which two items must one bring to the vaccination?",
                    options: ["Versichertenkarte und gelben Impfpass", "Passfoto und Bargeld", "Nur den Personalausweis", "Einen Überweisungsschein"],
                    correct: 0,
                    explanation: "'1. Ihre elektronische Gesundheitskarte... 2. Ihren gelben Impfpass'."
                },
                {
                    question: "Wann darf man die Impfung laut Aushang NICHT durchführen lassen?",
                    questionEN: "When should one NOT have the vaccine administered according to the notice?",
                    options: ["Wenn man Fieber oder einen akuten Infekt hat", "Wenn man über 60 Jahre alt ist", "Wenn man gesetzlich versichert ist", "Am Donnerstag"],
                    correct: 0,
                    explanation: "'Bitte kommen Sie nur, wenn Sie frei von Fieber und akuten Infekten sind'."
                }
            ]
        },
        {
            id: "a2_read_29",
            title: "Supermarkt-Wochenblatt: Bio-Angebote & Rabatt",
            titleEN: "Supermarket Weekly Flyer: Organic Discounts",
            emoji: "🛒",
            warmup: {
                vocab: [
                    { word: "das Sonderangebot", gender: "das", translation: "special discount offer", example: "Bio-Äpfel sind diese Woche im Sonderangebot.", exampleEN: "Organic apples are on special offer this week." },
                    { word: "das Mindesthaltbarkeitsdatum (MHD)", gender: "das", translation: "best-before date", example: "Das Mindesthaltbarkeitsdatum steht auf dem Deckel.", exampleEN: "The best-before date is printed on the lid." },
                    { word: "das Pfand", gender: "das", translation: "bottle deposit refund", example: "Auf Mehrweg-Glasflaschen gibt es 15 Cent Pfand.", exampleEN: "There is a 15 cent deposit on reusable glass bottles." },
                    { word: "aus kontrolliertem Anbau", gender: "Phrase", translation: "certified organic farming", example: "Unser Gemüse stammt aus kontrolliert biologischem Anbau.", exampleEN: "Our vegetables come from certified organic farming." },
                    { word: "die Kundenkarte", gender: "die", translation: "loyalty card", example: "Mit der Kundenkarte sparen Sie zusätzliche 5 Prozent.", exampleEN: "With the loyalty card you save an additional 5 percent." },
                    { word: "solange der Vorrat reicht", gender: "Phrase", translation: "while stocks last", example: "Die Angebote gelten nur, solange der Vorrat reicht.", exampleEN: "The offers are valid only while stocks last." }
                ],
                tips: [
                    { de: "MHD = Mindesthaltbarkeit", en: "In Germany, food is usually still good to eat past the MHD date." },
                    { de: "Flaschenpfand", en: "0.25€ on plastic single-use bottles (Einweg); 0.08€–0.15€ on glass (Mehrweg)." },
                    { de: "Gültigkeitszeitraum", en: "Weekly supermarket sales usually run from Monday to Saturday." }
                ]
            },
            text: "**SuperMarkt FrischeWelt — Angebote der Woche**\n\nGültig von **Montag, 23. Oktober**, bis einschließlich **Samstag, 28. Oktober** in allen teilnehmenden Filialen:\n\n**Obst & Gemüse:**\n- Bio-Bananen aus fairem Handel: **1,49 €** / kg *(statt 2,19 €)*\n- Deutsche Speisekartoffeln (Sack 2,5 kg): **2,29 €**\n- Regionale Bio-Äpfel (Sorte Elstar): **1,99 €** / 1,5 kg Beutel\n\n**Kühlregal & Molkerei:**\n- Frische Bio-Vollmilch 3,8% Fett (1 Liter): **1,09 €**\n- Gouda-Käse jung in Scheiben (400 g Packung): **2,49 €**\n\n**Getränkemarkt-Spezial:**\nMineralwasser Classic oder Naturell (Kasten mit 12 x 0,7 l Glasflaschen): **4,49 €** *(zzgl. 3,30 € Pfand)*\n\n**Kundenkarten-Vorteil:** Zeigen Sie Ihre Treuekarte an der Kasse und erhalten Sie ab einem Einkaufswert von 40 Euro **10% Rabatt auf alle Bio-Produkte**!\n\n*Alle Angebote gültig, solange der Vorrat reicht.*",
            textEN: "**FrischeWelt Supermarket — Offers of the Week**\n\nValid from **Monday, 23 October** up to and including **Saturday, 28 October** in all participating branches:\n\n**Fruit & Vegetables:**\n- Fairtrade Organic Bananas: **€1.49** / kg *(was €2.19)*\n- German Table Potatoes (2.5 kg sack): **€2.29**\n- Regional Organic Apples (Elstar, 1.5 kg bag): **€1.99**\n\n**Chilled & Dairy Section:**\n- Fresh Organic Whole Milk 3.8% (1 litre): **€1.09**\n- Young Gouda Cheese in slices (400 g pack): **€2.49**\n\n**Beverage Special:**\nMineral Water Sparkling or Still (crate of 12 x 0.7 l glass bottles): **€4.49** *(plus €3.30 deposit)*\n\n**Loyalty Card Benefit:** Show your loyalty card at the checkout and receive **10% off all organic items** on purchases of €40 or more!\n\n*All offers valid while stocks last.*",
            questions: [
                {
                    question: "Wie viel Pfand kommt beim Kauf des Wasserkastens zusätzlich hinzu?",
                    questionEN: "How much deposit is added when purchasing the water crate?",
                    options: ["3,30 Euro Pfand", "Kein Pfand", "0,25 Euro", "10,00 Euro"],
                    correct: 0,
                    explanation: "The flyer notes: '4,49 € (zzgl. 3,30 € Pfand)'."
                },
                {
                    question: "Welche Bedingung gilt für die 10% Rabatt mit der Kundenkarte?",
                    questionEN: "Which condition applies for the 10% loyalty card discount?",
                    options: ["Mindesteinkaufswert von 40 Euro", "Gilt nur für Fleisch", "Nur samstags ab 20 Uhr", "Gilt nur für Neukunden"],
                    correct: 0,
                    explanation: "'ab einem Einkaufswert von 40 Euro 10% Rabatt auf alle Bio-Produkte'."
                },
                {
                    question: "Bis zu welchem Tag sind die Wochenangebote gültig?",
                    questionEN: "Until which day are the weekly offers valid?",
                    options: ["Samstag, 28. Oktober", "Nur bis Mittwoch", "Zwei Wochen lang", "Bis Sonntag"],
                    correct: 0,
                    explanation: "'bis einschließlich Samstag, 28. Oktober'."
                }
            ]
        },
        {
            id: "a2_read_30",
            title: "Elternbrief: Schulausflug in den Zoo",
            titleEN: "School Letter to Parents: Field Trip to Zoo",
            emoji: "🎒",
            warmup: {
                vocab: [
                    { word: "der Schulausflug", gender: "der", translation: "school field trip / class excursion", example: "Der Schulausflug führt die Klassen 3a und 3b in den Zoo.", exampleEN: "The school excursion takes classes 3a and 3b to the zoo." },
                    { word: "die Einverständniserklärung", gender: "die", translation: "parental consent / permission slip", example: "Bitte unterschreiben Sie die Einverständniserklärung bis Freitag.", exampleEN: "Please sign the consent form by Friday." },
                    { word: "das Taschengeld", gender: "das", translation: "pocket money / spending money", example: "Kinder dürfen maximal 5 Euro Taschengeld mitnehmen.", exampleEN: "Children may take a maximum of €5 pocket money." },
                    { word: "wetterfeste Kleidung", gender: "die", translation: "weatherproof clothing", example: "Bitte denken Sie an wetterfeste Kleidung und feste Schuhe.", exampleEN: "Please remember weatherproof clothing and sturdy shoes." },
                    { word: "die Begleitperson", gender: "die", translation: "chaperone / accompanying adult", example: "Drei Elternteile begleiten die Gruppe als Aufsichtspersonen.", exampleEN: "Three parents accompany the group as chaperones." },
                    { word: "das Lunchpaket", gender: "das", translation: "packed lunch", example: "Geben Sie Ihrem Kind ein gesundes Lunchpaket und Wasser mit.", exampleEN: "Pack a healthy packed lunch and water for your child." }
                ],
                tips: [
                    { de: "Rückgabetermin für Erlaubnis", en: "School permission slips always have a strict return deadline." },
                    { de: "Treffpunkt und Abfahrt", en: "Pay attention to whether departure is at the school or the train station." },
                    { de: "Taschengeld-Obergrenze", en: "German schools frequently set a strict pocket money cap for equity." }
                ]
            },
            text: "**Theodor-Heuss-Grundschule — Elternbrief zum Schulausflug**\n\nLiebe Eltern der Klassen 3a und 3b,\n\nam **Donnerstag, 15. Juni**, unternehmen unsere beiden dritten Klassen einen gemeinsamen Ganztagesausflug in den **Tierpark Hellabrunn** nach München.\n\n**Wichtige Eckdaten:**\n- **Treffpunkt:** 08:15 Uhr auf dem Schulhof (Abfahrt des Busses pünktlich um 08:30 Uhr)\n- **Rückkehr:** ca. 16:00 Uhr wieder an der Schule\n- **Kosten:** 14 Euro pro Kind (inklusive Busfahrt und Zooeintritt). Bitte geben Sie das Geld bis zum **9. Juni** im Umschlag bei der Klassenlehrerin ab.\n\n**Was braucht Ihr Kind im Rucksack?**\n- Ausreichend Verpflegung (brotzeit und Trinkflasche — bitte keine Glasflaschen!)\n- Wetterfeste Kleidung (Regenjacke und feste Turnschuhe)\n- Maximal **5 Euro Taschengeld** für ein Eis oder ein kleines Andenken\n\nBitte füllen Sie den beigefügten **Abschnitt (Einverständniserklärung)** aus und geben Sie ihn unterschrieben bis spätestens **9. Juni** zurück.\n\nMit herzlichen Grüßen,\n**Frau Krüger & Herr Bäcker (Klassenlehrer)**",
            textEN: "**Theodor-Heuss Elementary School — Parents' Letter for Field Trip**\n\nDear Parents of Classes 3a and 3b,\n\nOn **Thursday, 15 June**, our two third-grade classes are going on a joint full-day excursion to **Hellabrunn Zoo** in Munich.\n\n**Key Details:**\n- **Meeting Point:** 08:15 in the school playground (bus departs promptly at 08:30)\n- **Return:** approx. 16:00 back at the school\n- **Costs:** €14 per child (includes bus ride and zoo admission). Please hand the money in an envelope to the class teacher by **9 June**.\n\n**What does your child need in their backpack?**\n- Sufficient food (packed lunch and water bottle — please no glass bottles!)\n- Weatherproof clothing (rain jacket and sturdy sneakers)\n- Maximum **€5 pocket money** for ice cream or a small souvenir\n\nPlease fill out the attached **consent slip** and return it signed no later than **9 June**.\n\nWith warm regards,\n**Ms. Krüger & Mr. Bäcker (Class Teachers)**",
            questions: [
                {
                    question: "Wie viel Geld kostet der Ausflug pro Kind?",
                    questionEN: "How much does the excursion cost per child?",
                    options: ["14 Euro", "5 Euro", "25 Euro", "Kostenlos"],
                    correct: 0,
                    explanation: "The letter states: 'Kosten: 14 Euro pro Kind'."
                },
                {
                    question: "Bis wann muss die Einverständniserklärung abgegeben werden?",
                    questionEN: "By when must the signed consent form be handed in?",
                    options: ["Bis zum 9. Juni", "Erst am Ausflugstag (15. Juni)", "Nach den Sommerferien", "Gar nicht nötig"],
                    correct: 0,
                    explanation: "'unterschrieben bis spätestens 9. Juni zurück'."
                },
                {
                    question: "Welche Flaschen dürfen die Kinder aus Sicherheitsgründen NICHT mitnehmen?",
                    questionEN: "Which bottles are children NOT allowed to bring for safety reasons?",
                    options: ["Glasflaschen", "Plastikflaschen", "Aluminiumflaschen", "Trinkpäckchen"],
                    correct: 0,
                    explanation: "'Trinkflasche — bitte keine Glasflaschen!'."
                }
            ]
        }
    ];

    /* ============================================================
       PART 2: 15 NEW INTERACTIVE LISTENING TOPICS (Total: 30)
       ============================================================ */
    const NEW_A2_HOEREN_TOPICS = {
    "bibliothek": {
        "title": "Stadtbibliothek & Ausleihe",
        "titleEN": "City Library & Borrowing",
        "emoji": "📚",
        "warmup": {
            "vocab": [
                {
                    "word": "Bibliotheksausweis",
                    "gender": "der",
                    "translation": "library card",
                    "example": "Um Bücher mitzunehmen, benötigen Sie einen Bibliotheksausweis.",
                    "exampleEN": "To take books with you, you need a library card."
                },
                {
                    "word": "Leihfrist",
                    "gender": "die",
                    "translation": "loan period",
                    "example": "Die Leihfrist für Romane beträgt vier Wochen.",
                    "exampleEN": "The loan period for novels is four weeks."
                },
                {
                    "word": "verlängern",
                    "gender": "Verb",
                    "translation": "to extend / renew",
                    "example": "Sie können die Frist online im Benutzerkonto verlängern.",
                    "exampleEN": "You can renew the period online in your user account."
                },
                {
                    "word": "Mahngebühr",
                    "gender": "die",
                    "translation": "late fee",
                    "example": "Bei verspäteter Rückgabe fällt eine Mahngebühr an.",
                    "exampleEN": "A late fee applies in case of late return."
                },
                {
                    "word": "Sachbuch",
                    "gender": "das",
                    "translation": "non-fiction book",
                    "example": "Die Sachbücher stehen im zweiten Obergeschoss.",
                    "exampleEN": "The non-fiction books are on the second floor."
                }
            ],
            "phrases": [
                {
                    "de": "Ich möchte mich gerne in der Stadtbibliothek anmelden.",
                    "en": "I would like to register at the city library."
                },
                {
                    "de": "Wie lange darf ich diese Hörbücher ausleihen?",
                    "en": "How long may I borrow these audiobooks for?"
                },
                {
                    "de": "Gibt es hier kostenloses WLAN und Arbeitsplätze?",
                    "en": "Is there free Wi-Fi and work spaces here?"
                },
                {
                    "de": "Wo finde ich deutsche Grammatikbücher für Stufe A2?",
                    "en": "Where can I find German grammar books for level A2?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_bib_1",
                "title": "Neuanmeldung in der Bibliothek",
                "titleEN": "New Registration at the Library",
                "script": "Guten Tag! Ich möchte mir gerne einen Bibliotheksausweis ausstellen lassen. - Sehr gerne. Haben Sie Ihren Personalausweis oder Reisepass mit Meldebescheinigung dabei? - Ja, hier ist mein Ausweis und meine Bestätigung. - Wunderbar. Die Jahresgebühr für Erwachsene beträgt 20 Euro. Studenten und Schüler zahlen nur 10 Euro. - Perfekt, hier sind 20 Euro bar.",
                "translation": "Good day! I would like to have a library card issued. - Very gladly. Do you have your ID card or passport with registration certificate with you? - Yes, here is my ID and my confirmation. - Wonderful. The annual fee for adults is 20 euros. Students and school pupils pay only 10 euros. - Perfect, here is 20 euros in cash.",
                "vocabSupport": [
                    {
                        "word": "ausstellen lassen",
                        "translation": "to have issued"
                    },
                    {
                        "word": "Meldebescheinigung",
                        "translation": "registration certificate"
                    },
                    {
                        "word": "Jahresgebühr",
                        "translation": "annual fee"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Jahresgebühr für Erwachsene beträgt _____ Euro.",
                    "sentenceEN": "The annual fee for adults is _____ euros.",
                    "target": "20",
                    "options": [
                        "20",
                        "10",
                        "30"
                    ]
                },
                "role": {
                    "speaker1": "Haben Sie Ihren Personalausweis dabei?",
                    "speaker1EN": "Do you have your identity card with you?",
                    "options": [
                        "Ja, hier ist mein Ausweis und meine Meldebescheinigung.",
                        "Nein, ich lese keine Zeitungen.",
                        "Ich trinke gerne Mineralwasser."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Studenten zahlen 20 Euro für den Ausweis.",
                    "statementEN": "Students pay 20 euros for the card.",
                    "correct": false,
                    "explanation": "Falsch: Studenten zahlen nur 10 Euro, Erwachsene zahlen 20 Euro."
                }
            },
            {
                "id": "a2_hoer_bib_2",
                "title": "Fristverlängerung und Rückgabe",
                "titleEN": "Loan Extension and Return",
                "script": "Hallo! Ich möchte zwei Sprachlernbücher zurückgeben und diesen Kriminalroman um zwei Wochen verlängern. - Lassen Sie mich kurz nachsehen. Die Sprachlernbücher nehme ich sofort zurück. Den Roman kann ich leider nicht verlängern, weil eine andere Leserin ihn bereits vorbestellt hat. - Ach so, verstehe. Dann gebe ich das Buch auch gleich heute ab.",
                "translation": "Hello! I would like to return two language learning books and extend this detective novel by two weeks. - Let me check briefly. I'll take the language learning books back right away. Unfortunately, I cannot extend the novel because another reader has already reserved it. - Oh, I understand. Then I will return this book today as well.",
                "vocabSupport": [
                    {
                        "word": "zurückgeben",
                        "translation": "to return (books)"
                    },
                    {
                        "word": "Kriminalroman",
                        "translation": "detective novel"
                    },
                    {
                        "word": "vorbestellt",
                        "translation": "reserved / pre-ordered"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Roman kann nicht verlängert werden, weil er bereits _____ ist.",
                    "sentenceEN": "The novel cannot be renewed because it is already _____.",
                    "target": "vorbestellt",
                    "options": [
                        "vorbestellt",
                        "verloren",
                        "beschädigt"
                    ]
                },
                "role": {
                    "speaker1": "Kann ich diesen Roman noch um zwei Wochen verlängern?",
                    "speaker1EN": "Can I extend this novel for another two weeks?",
                    "options": [
                        "Leider nicht, das Buch ist bereits von jemand anderem vorbestellt.",
                        "Ja, der Eintritt ist frei.",
                        "Das Buch kostet 15 Euro."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde kann alle Bücher für zwei Wochen verlängern.",
                    "statementEN": "The customer can renew all books for two weeks.",
                    "correct": false,
                    "explanation": "Falsch: Der Roman ist vorbestellt und kann nicht verlängert werden."
                }
            }
        ]
    },
    "zugreise": {
        "title": "Bahnhof & Zugreise",
        "titleEN": "Train Station & Rail Travel",
        "emoji": "🚆",
        "warmup": {
            "vocab": [
                {
                    "word": "Fahrkarte",
                    "gender": "die",
                    "translation": "train ticket",
                    "example": "Vergessen Sie nicht, Ihre Fahrkarte vor dem Einsteigen abzustempeln.",
                    "exampleEN": "Do not forget to validate your ticket before boarding."
                },
                {
                    "word": "Sitzplatzreservierung",
                    "gender": "die",
                    "translation": "seat reservation",
                    "example": "Im ICE empfiehlt sich am Freitag eine Sitzplatzreservierung.",
                    "exampleEN": "In the ICE, a seat reservation is recommended on Fridays."
                },
                {
                    "word": "Verspätung",
                    "gender": "die",
                    "translation": "delay",
                    "example": "Der Zug aus Hamburg hat heute 25 Minuten Verspätung.",
                    "exampleEN": "The train from Hamburg has a 25-minute delay today."
                },
                {
                    "word": "Gleis",
                    "gender": "das",
                    "translation": "track / platform",
                    "example": "Der Intercity nach Berlin fährt heute von Gleis 7 ab.",
                    "exampleEN": "The Intercity to Berlin departs from track 7 today."
                },
                {
                    "word": "umsteigen",
                    "gender": "Verb",
                    "translation": "to change trains",
                    "example": "In Frankfurt müssen Sie in die S-Bahn umsteigen.",
                    "exampleEN": "In Frankfurt you have to transfer to the S-Bahn."
                }
            ],
            "phrases": [
                {
                    "de": "Fährt dieser Regionalzug direkt nach Stuttgart durch?",
                    "en": "Does this regional train run directly through to Stuttgart?"
                },
                {
                    "de": "Auf welchem Gleis fährt der Anschlusszug ab?",
                    "en": "On which platform does the connecting train depart?"
                },
                {
                    "de": "Ist dieser Sitzplatz am Fenster noch frei?",
                    "en": "Is this window seat still free?"
                },
                {
                    "de": "Wegen einer Weichenstörung verzögert sich unsere Abfahrt.",
                    "en": "Due to a switch malfunction, our departure is delayed."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_zug_1",
                "title": "Fahrkartenkauf am Schalter",
                "titleEN": "Buying Tickets at the Counter",
                "script": "Guten Tag! Ich möchte morgen früh nach München fahren. Wann fährt der erste Zug? - Der erste ICE fährt um 6:14 Uhr von Gleis 4 und kommt um 9:30 Uhr an. - Gibt es noch Sparpreise? - Ja, mit Zugbindung kostet das Ticket 39 Euro, inklusive Sitzplatzreservierung am Fenster im Großraumwagen. - Das nehme ich bitte!",
                "translation": "Good day! I would like to travel to Munich tomorrow morning. When does the first train depart? - The first ICE leaves at 6:14 AM from track 4 and arrives at 9:30 AM. - Are there still saver fares? - Yes, with train-binding the ticket costs 39 euros, including a window seat reservation in the open coach. - I will take that please!",
                "vocabSupport": [
                    {
                        "word": "Sparpreis",
                        "translation": "saver fare"
                    },
                    {
                        "word": "Zugbindung",
                        "translation": "bound to specific train"
                    },
                    {
                        "word": "Großraumwagen",
                        "translation": "open saloon coach"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der ICE nach München fährt um _____ Uhr ab.",
                    "sentenceEN": "The ICE to Munich departs at _____ o'clock.",
                    "target": "6:14",
                    "options": [
                        "6:14",
                        "9:30",
                        "7:45"
                    ]
                },
                "role": {
                    "speaker1": "Wann fährt der nächste Zug nach München?",
                    "speaker1EN": "When does the next train to Munich depart?",
                    "options": [
                        "Der ICE fährt um 6:14 Uhr von Gleis 4 ab.",
                        "Das Hotelzimmer kostet 80 Euro.",
                        "Ich fahre gerne mit dem Fahrrad."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Das Ticket kostet regulär 120 Euro ohne Reservierung.",
                    "statementEN": "The ticket costs regularly 120 euros without reservation.",
                    "correct": false,
                    "explanation": "Falsch: Das angebotene Sparpreis-Ticket kostet 39 Euro inklusive Reservierung."
                }
            },
            {
                "id": "a2_hoer_zug_2",
                "title": "Verspätung und Anschlusszug",
                "titleEN": "Delay and Connecting Train",
                "script": "Achtung an Gleis 3: Der Regionalexpress nach Köln hat voraussichtlich 20 Minuten Verspätung. Grund dafür ist eine Signalstörung. Fahrgäste nach Aachen erreichen ihren Anschlusszug um 14:10 Uhr leider nicht. Bitte nutzen Sie die folgende Regionalbahn um 14:45 Uhr ab Gleis 5.",
                "translation": "Attention on platform 3: The regional express to Cologne is delayed by approximately 20 minutes. The reason is a signal malfunction. Passengers to Aachen will unfortunately not make their connecting train at 2:10 PM. Please use the following regional train at 2:45 PM from track 5.",
                "vocabSupport": [
                    {
                        "word": "voraussichtlich",
                        "translation": "expected / estimated"
                    },
                    {
                        "word": "Signalstörung",
                        "translation": "signal failure"
                    },
                    {
                        "word": "Anschlusszug",
                        "translation": "connecting train"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Grund für die Zugverspätung ist eine _____.",
                    "sentenceEN": "The reason for the train delay is a _____.",
                    "target": "Signalstörung",
                    "options": [
                        "Signalstörung",
                        "Zugreinigung",
                        "Streik"
                    ]
                },
                "role": {
                    "speaker1": "Erreichen wir den Anschlusszug nach Aachen noch?",
                    "speaker1EN": "Will we still reach the connecting train to Aachen?",
                    "options": [
                        "Nein, wir müssen die spätere Bahn um 14:45 Uhr ab Gleis 5 nehmen.",
                        "Ja, der Bus wartet vor dem Bahnhof.",
                        "Gestern hat es den ganzen Tag geregnet."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Passagiere nach Aachen erreichen ihren geplanten Anschluss um 14:10 Uhr pünktlich.",
                    "statementEN": "Passengers to Aachen reach their scheduled connection at 2:10 PM on time.",
                    "correct": false,
                    "explanation": "Falsch: Wegen 20 Minuten Verspätung verpassen sie den Anschluss und müssen den Zug um 14:45 Uhr nehmen."
                }
            }
        ]
    },
    "buergeramt": {
        "title": "Bürgeramt & Meldeamt",
        "titleEN": "Citizens Office & Registration",
        "emoji": "🏛️",
        "warmup": {
            "vocab": [
                {
                    "word": "Terminvereinbarung",
                    "gender": "die",
                    "translation": "appointment booking",
                    "example": "Ohne vorherige Terminvereinbarung gibt es lange Wartezeiten.",
                    "exampleEN": "Without prior appointment booking there are long waiting times."
                },
                {
                    "word": "Wohnungsgeberbestätigung",
                    "gender": "die",
                    "translation": "landlord confirmation slip",
                    "example": "Ihr Vermieter muss die Wohnungsgeberbestätigung unterschreiben.",
                    "exampleEN": "Your landlord must sign the landlord confirmation."
                },
                {
                    "word": "Wartenummer",
                    "gender": "die",
                    "translation": "queue ticket number",
                    "example": "Bitte ziehen Sie am Eingang eine Wartenummer.",
                    "exampleEN": "Please draw a queue number at the entrance."
                },
                {
                    "word": "Mietvertrag",
                    "gender": "der",
                    "translation": "rental contract",
                    "example": "Der Mietvertrag allein reicht für die Anmeldung nicht aus.",
                    "exampleEN": "The rental contract alone is not sufficient for registration."
                },
                {
                    "word": "Gültigkeit",
                    "gender": "die",
                    "translation": "validity",
                    "example": "Die Gültigkeit Ihres Reisepasses läuft im November ab.",
                    "exampleEN": "The validity of your passport expires in November."
                }
            ],
            "phrases": [
                {
                    "de": "Ich bin letzte Woche nach Köln umgezogen und möchte meinen Wohnsitz anmelden.",
                    "en": "I moved to Cologne last week and would like to register my residence."
                },
                {
                    "de": "Haben Sie alle Formulare bereits vollständig ausgefüllt?",
                    "en": "Have you already filled out all forms completely?"
                },
                {
                    "de": "Hier ist Ihre Meldebestätigung für die Krankenkasse und Bank.",
                    "en": "Here is your registration confirmation for health insurance and bank."
                },
                {
                    "de": "Wie lange dauert die Ausstellung eines neuen Reisepasses?",
                    "en": "How long does the issuance of a new passport take?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_buerger_1",
                "title": "Wohnsitzanmeldung am Schalter",
                "titleEN": "Residence Registration at Counter",
                "script": "Guten Tag, Nummer 142 bitte! - Guten Tag, ich habe einen Termin zur Wohnsitzanmeldung. - Sehr gut. Ich brauche Ihren Pass und die ausgefüllte Wohnungsgeberbestätigung von Ihrem Vermieter. - Bitte sehr, hier sind beide Unterlagen. - Vielen Dank. Sind Sie verheiratet oder ledig? - Ich bin ledig. - Gut, unterschreiben Sie bitte hier unten rechts. Hier ist Ihre amtliche Meldebestätigung.",
                "translation": "Good day, number 142 please! - Good day, I have an appointment for residence registration. - Very good. I need your passport and the filled-out landlord confirmation from your landlord. - Here you go, here are both documents. - Thank you very much. Are you married or single? - I am single. - Good, please sign here at the bottom right. Here is your official registration confirmation.",
                "vocabSupport": [
                    {
                        "word": "Wohnsitzanmeldung",
                        "translation": "residence registration"
                    },
                    {
                        "word": "ledig",
                        "translation": "single / unmarried"
                    },
                    {
                        "word": "amtliche Meldebestätigung",
                        "translation": "official registration certificate"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Bürger benötigt für die Anmeldung seinen Pass und die _____.",
                    "sentenceEN": "The citizen needs his passport and the _____ for registration.",
                    "target": "Wohnungsgeberbestätigung",
                    "options": [
                        "Wohnungsgeberbestätigung",
                        "Gehaltsabrechnung",
                        "Fahrkarte"
                    ]
                },
                "role": {
                    "speaker1": "Sind Sie verheiratet oder ledig?",
                    "speaker1EN": "Are you married or single?",
                    "options": [
                        "Ich bin ledig.",
                        "Ich wohne im dritten Stock.",
                        "Mein Termin war um 10 Uhr."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Bürger erhält am Ende des Gesprächs seine Meldebestätigung.",
                    "statementEN": "The citizen receives his registration confirmation at the end of the meeting.",
                    "correct": true,
                    "explanation": "Richtig: Die Beamtin sagt: 'Hier ist Ihre amtliche Meldebestätigung'."
                }
            },
            {
                "id": "a2_hoer_buerger_2",
                "title": "Reisepass verlängern",
                "titleEN": "Renewing Passport",
                "script": "Hallo, mein deutscher Reisepass läuft in zwei Monaten ab. Was muss ich für die Verlängerung tun? - Sie müssen einen neuen Pass beantragen, man kann den alten nicht einfach verlängern. Bringen Sie bitte ein aktuelles biometrisches Passfoto und Ihren alten Pass mit. - Wie viel kostet die Neuausstellung? - Für Personen ab 24 Jahren kostet der Pass 70 Euro und die Bearbeitung dauert etwa vier bis sechs Wochen.",
                "translation": "Hello, my German passport expires in two months. What do I have to do for renewal? - You must apply for a new passport, the old one cannot simply be extended. Please bring a current biometric passport photo and your old passport. - How much does the new issue cost? - For persons aged 24 and older the passport costs 70 euros and processing takes about four to six weeks.",
                "vocabSupport": [
                    {
                        "word": "ablaufen",
                        "translation": "to expire"
                    },
                    {
                        "word": "biometrisches Passfoto",
                        "translation": "biometric passport photograph"
                    },
                    {
                        "word": "Bearbeitung",
                        "translation": "processing time"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Bearbeitung des neuen Reisepasses dauert ca. _____ Wochen.",
                    "sentenceEN": "The processing of the new passport takes approx. _____ weeks.",
                    "target": "vier bis sechs",
                    "options": [
                        "vier bis sechs",
                        "zwei",
                        "zehn"
                    ]
                },
                "role": {
                    "speaker1": "Was muss ich für den neuen Pass mitbringen?",
                    "speaker1EN": "What must I bring along for the new passport?",
                    "options": [
                        "Ein biometrisches Passfoto und Ihren alten Reisepass.",
                        "Eine Kopie Ihres Mietvertrags.",
                        "Einen Nachweis über Sportkurse."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Man kann den alten Reisepass einfach mit einem Stempel verlängern.",
                    "statementEN": "You can simply extend the old passport with a stamp.",
                    "correct": false,
                    "explanation": "Falsch: Man muss einen komplett neuen Pass beantragen."
                }
            }
        ]
    },
    "baeckerei": {
        "title": "Bäckerei & Café",
        "titleEN": "Bakery & Café",
        "emoji": "🥐",
        "warmup": {
            "vocab": [
                {
                    "word": "Vollkornbrot",
                    "gender": "das",
                    "translation": "whole grain bread",
                    "example": "Ich hätte gerne ein halbes Vollkornbrot in Scheiben geschnitten.",
                    "exampleEN": "I would like half a whole grain bread sliced."
                },
                {
                    "word": "Brötchen",
                    "gender": "das",
                    "translation": "bread roll",
                    "example": "Zwei Roggenbrötchen und drei Laugenstangen bitte.",
                    "exampleEN": "Two rye rolls and three pretzel sticks please."
                },
                {
                    "word": "Kuchenstück",
                    "gender": "das",
                    "translation": "slice of cake",
                    "example": "Möchten Sie ein Stück Apfelkuchen dazu?",
                    "exampleEN": "Would you like a slice of apple pie with that?"
                },
                {
                    "word": "geschnitten",
                    "gender": "Partizip",
                    "translation": "sliced",
                    "example": "Soll ich das Brot ganz lassen oder schneiden?",
                    "exampleEN": "Should I leave the bread whole or slice it?"
                },
                {
                    "word": "mitnehmen",
                    "gender": "Verb",
                    "translation": "to take away",
                    "example": "Zum Hieressen oder zum Mitnehmen?",
                    "exampleEN": "For here or to take away?"
                }
            ],
            "phrases": [
                {
                    "de": "Guten Morgen! Was darf es denn für Sie sein?",
                    "en": "Good morning! What can I get for you?"
                },
                {
                    "de": "Ich hätte gerne ein dunkles Sauerteigbrot und zwei Croissants.",
                    "en": "I would like a dark sourdough loaf and two croissants."
                },
                {
                    "de": "Haben Sie noch belegte Brötchen mit Käse oder Ei?",
                    "en": "Do you still have garnished sandwiches with cheese or egg?"
                },
                {
                    "de": "Das macht zusammen 6 Euro und 40 Cent.",
                    "en": "That makes 6 euros and 40 cents altogether."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_baeck_1",
                "title": "Frühstückseinkauf",
                "titleEN": "Morning Grocery at Bakery",
                "script": "Guten Morgen! Der Nächste bitte! - Guten Morgen. Ich möchte bitte vier normale Brötchen und zwei Vollkornbrötchen. - Gerne. Darf es noch etwas Süßes sein? Unser Pflaumenkuchen ist heute ganz frisch. - Ja gerne, geben Sie mir bitte ein Stück Pflaumenkuchen dazu. - Möchten Sie das Brot auch geschnitten? - Nein danke, nur die Brötchen und der Kuchen. - Das macht zusammen 5 Euro 80.",
                "translation": "Good morning! Next please! - Good morning. I would like four plain rolls and two whole grain rolls, please. - With pleasure. May it be something sweet as well? Our plum cake is very fresh today. - Yes gladly, please give me a slice of plum cake too. - Would you like bread sliced as well? - No thanks, just the rolls and the cake. - That comes to 5 euros 80 altogether.",
                "vocabSupport": [
                    {
                        "word": "Pflaumenkuchen",
                        "translation": "plum cake"
                    },
                    {
                        "word": "ganz frisch",
                        "translation": "very fresh"
                    },
                    {
                        "word": "Das macht zusammen",
                        "translation": "That comes to altogether"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Kunde kauft vier normale Brötchen, zwei Vollkornbrötchen und ein Stück _____.",
                    "sentenceEN": "The customer buys four plain rolls, two whole grain rolls, and a slice of _____.",
                    "target": "Pflaumenkuchen",
                    "options": [
                        "Pflaumenkuchen",
                        "Käsekuchen",
                        "Schwarzwälder Torte"
                    ]
                },
                "role": {
                    "speaker1": "Darf es noch etwas sein?",
                    "speaker1EN": "May it be anything else?",
                    "options": [
                        "Nein danke, das ist alles. Wie viel macht das?",
                        "Ich gehe morgen zum Zahnarzt.",
                        "Mein Auto steht vor der Tür."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Gesamtbetrag für den Einkauf beträgt 5 Euro 80.",
                    "statementEN": "The total amount for the purchase is 5 euros 80.",
                    "correct": true,
                    "explanation": "Richtig: Die Verkäuferin sagt 'Das macht zusammen 5 Euro 80'."
                }
            },
            {
                "id": "a2_hoer_baeck_2",
                "title": "Kaffee und Snack bestellen",
                "titleEN": "Ordering Coffee and Snack",
                "script": "Hallo! Ich hätte gerne einen großen Cappuccino mit Hafermilch und ein belegtes Tomate-Mozzarella-Brötchen. - Sehr gerne. Möchten Sie hier im Café sitzen oder ist das zum Mitnehmen? - Ich trinke den Kaffee gerne hier im Innenbereich. - Alles klar, nehmen Sie bitte schon Platz, ich bringe Ihnen das Tablett in drei Minuten an den Tisch.",
                "translation": "Hello! I would like a large cappuccino with oat milk and a tomato-mozzarella sandwich. - Gladly. Would you like to sit here in the café or is it to take away? - I would like to drink the coffee here in the indoor seating. - Alright, please have a seat, I will bring the tray to your table in three minutes.",
                "vocabSupport": [
                    {
                        "word": "Hafermilch",
                        "translation": "oat milk"
                    },
                    {
                        "word": "belegtes Brötchen",
                        "translation": "sandwich roll"
                    },
                    {
                        "word": "das Tablett",
                        "translation": "serving tray"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Gast bestellt seinen Cappuccino mit _____.",
                    "sentenceEN": "The guest orders his cappuccino with _____.",
                    "target": "Hafermilch",
                    "options": [
                        "Hafermilch",
                        "Kuhmilch",
                        "Sojamilch"
                    ]
                },
                "role": {
                    "speaker1": "Zum Hieressen oder zum Mitnehmen?",
                    "speaker1EN": "For here or to take away?",
                    "options": [
                        "Ich möchte gerne hier im Café trinken.",
                        "Ich habe gestern Kuchen gegessen.",
                        "Die Bahn hatte Verspätung."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde nimmt seinen Kaffee sofort mit auf die Straße.",
                    "statementEN": "The customer takes his coffee immediately onto the street.",
                    "correct": false,
                    "explanation": "Falsch: Er sagt 'Ich trinke den Kaffee gerne hier im Innenbereich'."
                }
            }
        ]
    },
    "werkstatt": {
        "title": "Autowerkstatt & Inspektion",
        "titleEN": "Car Repair Shop & Inspection",
        "emoji": "🔧",
        "warmup": {
            "vocab": [
                {
                    "word": "Kostenvoranschlag",
                    "gender": "der",
                    "translation": "cost estimate",
                    "example": "Können Sie mir vor der Reparatur einen Kostenvoranschlag geben?",
                    "exampleEN": "Can you give me a cost estimate before the repair?"
                },
                {
                    "word": "Bremsscheibe",
                    "gender": "die",
                    "translation": "brake disc",
                    "example": "Die hinteren Bremsscheiben sind abgenutzt.",
                    "exampleEN": "The rear brake discs are worn out."
                },
                {
                    "word": "Ölwechsel",
                    "gender": "der",
                    "translation": "oil change",
                    "example": "Der nächste Ölwechsel ist nach 15.000 Kilometern fällig.",
                    "exampleEN": "The next oil change is due after 15,000 kilometres."
                },
                {
                    "word": "Hauptuntersuchung (TÜV)",
                    "gender": "die",
                    "translation": "general inspection (TÜV)",
                    "example": "Das Auto muss im September zum TÜV.",
                    "exampleEN": "The car must go for the TÜV inspection in September."
                },
                {
                    "word": "Ersatzwagen",
                    "gender": "der",
                    "translation": "replacement / loan car",
                    "example": "Brauchen Sie für die zwei Tage einen Ersatzwagen?",
                    "exampleEN": "Do you need a replacement car for the two days?"
                }
            ],
            "phrases": [
                {
                    "de": "Mein Wagen macht beim Bremsen ein seltsames Geräusch.",
                    "en": "My car makes a strange noise when braking."
                },
                {
                    "de": "Wann kann ich das Auto wieder aus der Werkstatt abholen?",
                    "en": "When can I pick up the car again from the garage?"
                },
                {
                    "de": "Die Reparatur wird voraussichtlich 350 Euro kosten.",
                    "en": "The repair is expected to cost 350 euros."
                },
                {
                    "de": "Rufen Sie mich bitte an, falls es teurer wird.",
                    "en": "Please call me if it turns out to be more expensive."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_werk_1",
                "title": "Fahrzeugannahme in der Werkstatt",
                "titleEN": "Vehicle Check-in at the Garage",
                "script": "Guten Tag, Herr Weber. Was hat Ihr Wagen denn für ein Problem? - Hallo! Immer wenn ich bremse, quietscht es vorne rechts sehr laut. Außerdem leuchtet die Ölkontrollleuchte. - Ich schaue mir das gleich an. Die vorderen Bremsbeläge müssen wahrscheinlich erneuert werden. Ein Ölwechsel dauert etwa eine Stunde. - Was kostet das ungefähr? - Mit Teilen und Arbeitszeit etwa 280 Euro. Wir rufen Sie um 16 Uhr an.",
                "translation": "Good day, Mr. Weber. What kind of problem does your car have? - Hello! Whenever I brake, it squeaks loudly on the front right. Also, the oil indicator light is on. - I will take a look right away. The front brake pads probably need to be renewed. An oil change takes about an hour. - How much will that cost approximately? - With parts and labor about 280 euros. We will call you at 4 PM.",
                "vocabSupport": [
                    {
                        "word": "Bremsbeläge",
                        "translation": "brake pads"
                    },
                    {
                        "word": "quietschen",
                        "translation": "to squeak"
                    },
                    {
                        "word": "Ölkontrollleuchte",
                        "translation": "oil warning light"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Meister schätzt die Kosten inklusive Arbeitszeit auf circa _____ Euro.",
                    "sentenceEN": "The master technician estimates costs including labor at approx. _____ euros.",
                    "target": "280",
                    "options": [
                        "280",
                        "150",
                        "450"
                    ]
                },
                "role": {
                    "speaker1": "Wann rufen Sie mich wegen der Fertigstellung an?",
                    "speaker1EN": "When will you call me regarding completion?",
                    "options": [
                        "Wir rufen Sie heute um 16 Uhr an.",
                        "Das Auto hat fünf Gänge.",
                        "Der Termin war gestern Nachmittag."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Reparatur kostet laut Kostenvoranschlag mehr als 500 Euro.",
                    "statementEN": "According to the estimate, the repair costs more than 500 euros.",
                    "correct": false,
                    "explanation": "Falsch: Der Meister schätzt die Kosten auf ca. 280 Euro."
                }
            },
            {
                "id": "a2_hoer_werk_2",
                "title": "Abholung und Rechnung",
                "titleEN": "Car Pickup and Invoice",
                "script": "Hallo Herr Weber, Ihr Wagen ist fertig. Wir haben die Bremsbeläge ausgetauscht und frisches Motoröl eingefüllt. - Super, vielen Dank! Wurde auch der Reifendruck geprüft? - Ja, Reifendruck und Scheibenwischerwasser sind kontrolliert. Die Gesamtrechnung beträgt genau 276 Euro. Möchten Sie mit Karte oder bar bezahlen? - Mit EC-Karte bitte.",
                "translation": "Hello Mr. Weber, your car is ready. We replaced the brake pads and poured in fresh engine oil. - Super, thanks a lot! Was the tire pressure checked too? - Yes, tire pressure and windshield washer fluid have been checked. The total invoice is exactly 276 euros. Would you like to pay by card or cash? - With debit card, please.",
                "vocabSupport": [
                    {
                        "word": "Reifendruck",
                        "translation": "tire pressure"
                    },
                    {
                        "word": "Scheibenwischerwasser",
                        "translation": "windshield washer fluid"
                    },
                    {
                        "word": "EC-Karte",
                        "translation": "debit card"
                    }
                ],
                "fillBlank": {
                    "sentence": "Herr Weber bezahlt die Rechnung mit _____.",
                    "sentenceEN": "Mr. Weber pays the bill with _____.",
                    "target": "EC-Karte",
                    "options": [
                        "EC-Karte",
                        "Bargeld",
                        "Kreditkarte"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie bar oder mit Karte zahlen?",
                    "speaker1EN": "Would you like to pay cash or by card?",
                    "options": [
                        "Mit EC-Karte bitte.",
                        "Ich fahre lieber mit dem Zug.",
                        "Das Benzin ist sehr teuer."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Werkstatt hat auch den Reifendruck und das Scheibenwischerwasser geprüft.",
                    "statementEN": "The workshop also checked the tire pressure and the washer fluid.",
                    "correct": true,
                    "explanation": "Richtig: Der Mechaniker bestätigt die Kontrolle beider Punkte."
                }
            }
        ]
    },
    "kundendienst": {
        "title": "Kundendienst & Hotline",
        "titleEN": "Customer Support & Hotline",
        "emoji": "📞",
        "warmup": {
            "vocab": [
                {
                    "word": "Bestellnummer",
                    "gender": "die",
                    "translation": "order number",
                    "example": "Bitte halten Sie für die Hotline Ihre Bestellnummer bereit.",
                    "exampleEN": "Please have your order number ready for the hotline."
                },
                {
                    "word": "Rücksendung",
                    "gender": "die",
                    "translation": "return / return shipment",
                    "example": "Die Rücksendung ist innerhalb von 14 Tagen kostenfrei.",
                    "exampleEN": "The return shipment is free of charge within 14 days."
                },
                {
                    "word": "Erstattung",
                    "gender": "die",
                    "translation": "refund",
                    "example": "Sie erhalten die Erstattung auf Ihr Bankkonto gutgeschrieben.",
                    "exampleEN": "You will receive the refund credited to your bank account."
                },
                {
                    "word": "beschädigt",
                    "gender": "Adjektiv",
                    "translation": "damaged",
                    "example": "Das Paket kam leider stark beschädigt an.",
                    "exampleEN": "The parcel unfortunately arrived heavily damaged."
                },
                {
                    "word": "Garantiefall",
                    "gender": "der",
                    "translation": "warranty claim",
                    "example": "Ist der Defekt noch ein Garantiefall?",
                    "exampleEN": "Is the defect still a warranty case?"
                }
            ],
            "phrases": [
                {
                    "de": "Willkommen beim Kundenservice. Wie kann ich Ihnen helfen?",
                    "en": "Welcome to customer service. How may I help you?"
                },
                {
                    "de": "Ich habe vor einer Woche einen Staubsauger bestellt, der nicht funktioniert.",
                    "en": "I ordered a vacuum cleaner a week ago that does not work."
                },
                {
                    "de": "Ich schicke Ihnen sofort ein kostenloses Retourenlabel per Mail.",
                    "en": "I will send you a free return label via email immediately."
                },
                {
                    "de": "Möchten Sie ein Ersatzgerät oder das Geld zurück?",
                    "en": "Would you like a replacement unit or your money back?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_kunden_1",
                "title": "Reklamation wegen Defekt",
                "titleEN": "Complaint Regarding Defect",
                "script": "Guten Tag, Kundenservice Müller, mein Name ist Sommer. Wie kann ich helfen? - Guten Tag! Ich habe letzte Woche eine Kaffeemaschine bei Ihnen online bestellt. Das Gerät schaltet sich nach 30 Sekunden immer wieder von alleine ab. - Oh, das tut mir leid. Nennen Sie mir bitte Ihre Bestellnummer. - Die Nummer lautet DE-88392. - Danke. Da das Gerät neu ist, tauschen wir es sofort um. Ich sende Ihnen jetzt das Rücksendeetikett.",
                "translation": "Good day, Customer Service Müller, my name is Sommer. How can I help? - Good day! I ordered a coffee machine online from you last week. The appliance constantly turns off by itself after 30 seconds. - Oh, I am sorry about that. Please state your order number. - The number is DE-88392. - Thank you. Since the device is brand new, we will replace it immediately. I am sending you the return label now.",
                "vocabSupport": [
                    {
                        "word": "Kaffeemaschine",
                        "translation": "coffee machine"
                    },
                    {
                        "word": "von alleine abschalten",
                        "translation": "to shut off automatically"
                    },
                    {
                        "word": "Rücksendeetikett",
                        "translation": "return label"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Kaffeemaschine schaltet sich nach _____ Sekunden von alleine ab.",
                    "sentenceEN": "The coffee machine shuts down automatically after _____ seconds.",
                    "target": "30",
                    "options": [
                        "30",
                        "60",
                        "15"
                    ]
                },
                "role": {
                    "speaker1": "Nennen Sie mir bitte Ihre Bestellnummer.",
                    "speaker1EN": "Please tell me your order number.",
                    "options": [
                        "Die Nummer lautet DE-88392.",
                        "Ich trinke gerne schwarzen Kaffee.",
                        "Ich wohne in Hamburg."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde muss für die Rücksendung 10 Euro Porto bezahlen.",
                    "statementEN": "The customer has to pay 10 euros postage for the return.",
                    "correct": false,
                    "explanation": "Falsch: Der Kundenservice schickt ein kostenloses Rücksendeetikett."
                }
            },
            {
                "id": "a2_hoer_kunden_2",
                "title": "Rückerstattung nachfragen",
                "titleEN": "Inquiring about Refund",
                "script": "Hallo, ich habe vor zehn Tagen eine Jacke zurückgeschickt. Das Paket ist laut Sendungsverfolgung angekommen, aber ich habe noch kein Geld erhalten. - Guten Tag. Haben Sie die Sendungsnummer? - Ja, die Nummer ist 402911. - Einen Augenblick bitte... Ja, die Jacke wurde gestern in unserer Logistik verbucht. Die Gutschrift von 79 Euro erfolgt innerhalb von drei Werktagen auf Ihr PayPal-Konto.",
                "translation": "Hello, I sent back a jacket ten days ago. According to shipment tracking the parcel arrived, but I have not received any money yet. - Good day. Do you have the tracking number? - Yes, the number is 402911. - One moment please... Yes, the jacket was booked in our logistics yesterday. The credit of 79 euros will take place within three business days to your PayPal account.",
                "vocabSupport": [
                    {
                        "word": "Sendungsverfolgung",
                        "translation": "shipment tracking"
                    },
                    {
                        "word": "verbucht",
                        "translation": "booked / registered"
                    },
                    {
                        "word": "Gutschrift",
                        "translation": "credit memo / refund"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Gutschrift erfolgt innerhalb von _____ Werktagen.",
                    "sentenceEN": "The credit is issued within _____ business days.",
                    "target": "drei",
                    "options": [
                        "drei",
                        "vierzehn",
                        "sieben"
                    ]
                },
                "role": {
                    "speaker1": "Wann erhalte ich mein Geld zurück?",
                    "speaker1EN": "When will I get my money back?",
                    "options": [
                        "Die Gutschrift erfolgt innerhalb von drei Werktagen.",
                        "Die Jacke ist blau.",
                        "Ich bestelle keine Kleidung."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Rückerstattung wird per Scheck mit der Post geschickt.",
                    "statementEN": "The refund is sent by check in the mail.",
                    "correct": false,
                    "explanation": "Falsch: Die 79 Euro werden auf das PayPal-Konto überwiesen."
                }
            }
        ]
    },
    "tierarzt": {
        "title": "Tierarzt & Haustiere",
        "titleEN": "Veterinary Clinic & Pets",
        "emoji": "🐾",
        "warmup": {
            "vocab": [
                {
                    "word": "Impfpass",
                    "gender": "der",
                    "translation": "pet vaccination record",
                    "example": "Bringen Sie bitte den blauen EU-Heimtierausweis mit.",
                    "exampleEN": "Please bring the blue EU pet passport along."
                },
                {
                    "word": "Untersuchung",
                    "gender": "die",
                    "translation": "examination",
                    "example": "Die Routineuntersuchung verlief ohne Befund.",
                    "exampleEN": "The routine examination showed no issues."
                },
                {
                    "word": "Entwurmung",
                    "gender": "die",
                    "translation": "deworming",
                    "example": "Hunde brauchen alle drei Monate eine Entwurmung.",
                    "exampleEN": "Dogs need deworming every three months."
                },
                {
                    "word": "Symptome",
                    "gender": "die (Pl.)",
                    "translation": "symptoms",
                    "example": "Seit wann zeigt Ihre Katze diese Symptome?",
                    "exampleEN": "Since when has your cat been showing these symptoms?"
                },
                {
                    "word": "Schonkost",
                    "gender": "die",
                    "translation": "bland / light diet",
                    "example": "Füttern Sie für drei Tage gekochten Reis mit Hühnchen.",
                    "exampleEN": "Feed boiled rice with chicken for three days."
                }
            ],
            "phrases": [
                {
                    "de": "Mein Kater frisst seit zwei Tagen fast nichts und schläft nur.",
                    "en": "My tomcat has eaten almost nothing for two days and only sleeps."
                },
                {
                    "de": "Hat das Tier Fieber oder Erbrechen?",
                    "en": "Does the animal have a fever or vomiting?"
                },
                {
                    "de": "Wir müssen ihm eine Spritze gegen die Entzündung geben.",
                    "en": "We need to give him an injection against the inflammation."
                },
                {
                    "de": "Geben Sie die Tablette am besten morgens ins Futter.",
                    "en": "Best administer the tablet in the morning feed."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_tier_1",
                "title": "Kater mit Magenproblemen",
                "titleEN": "Cat with Stomach Issues",
                "script": "Guten Tag, Frau Dr. Klein. Unser Kater Leo frisst seit gestern Abend überhaupt nicht mehr und hat Bauchweh. - Hallo Familie Schmidt. Kommen Sie bitte ins Behandlungszimmer. Ich taste seinen Bauch vorsichtig ab... Leo hat etwas Magenschmerzen, aber kein hohes Fieber. - Was können wir für ihn tun? - Ich gebe ihm ein krampflösendes Mittel und gebe Ihnen Schonkost mit. Wenn es morgen nicht besser ist, kommen Sie bitte wieder.",
                "translation": "Good day, Dr. Klein. Our tomcat Leo has not eaten anything since yesterday evening and has a belly ache. - Hello Schmidt family. Please step into the treatment room. I will gently feel his abdomen... Leo has mild stomach pains, but no high fever. - What can we do for him? - I'll give him an antispasmodic injection and provide special bland food. If it isn't better tomorrow, please come back.",
                "vocabSupport": [
                    {
                        "word": "abtasten",
                        "translation": "to palpate / examine by touch"
                    },
                    {
                        "word": "krampflösend",
                        "translation": "antispasmodic / cramp-relieving"
                    },
                    {
                        "word": "Bauchweh",
                        "translation": "stomach ache"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Tierärztin gibt dem Kater ein _____ Mittel.",
                    "sentenceEN": "The vet gives the tomcat an _____ medication.",
                    "target": "krampflösendes",
                    "options": [
                        "krampflösendes",
                        "schlafendes",
                        "antibiotisches"
                    ]
                },
                "role": {
                    "speaker1": "Seit wann frisst die Katze nicht mehr?",
                    "speaker1EN": "Since when has the cat not eaten?",
                    "options": [
                        "Seit gestern Abend frisst Leo gar nichts mehr.",
                        "Katzen mögen Mäuse.",
                        "Er hat vor zwei Wochen gespielt."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kater Leo hat sehr hohes lebensgefährliches Fieber.",
                    "statementEN": "Tomcat Leo has a very high life-threatening fever.",
                    "correct": false,
                    "explanation": "Falsch: Die Tierärztin stellt fest: 'Leo hat kein hohes Fieber'."
                }
            },
            {
                "id": "a2_hoer_tier_2",
                "title": "Impfung für den Hund",
                "titleEN": "Dog Vaccination",
                "script": "Hallo! Unser Hund Max braucht seine jährliche Tollwut- und Kombinationsimpfung. Haben Sie seinen Impfpass dabei? - Ja, hier ist der blaue Heimtierausweis. - Perfekt. Ich wiege Max erst einmal: genau 18 Kilo, optimales Gewicht. Dann spritze ich die Impfung in den Nacken. Bitte schonen Sie ihn heute etwas, keine langen Spaziergänge.",
                "translation": "Hello! Our dog Max needs his annual rabies and combination vaccination. Do you have his vaccination record with you? - Yes, here is the blue pet passport. - Perfect. First I'll weigh Max: exactly 18 kilos, optimal weight. Then I'll inject the vaccine into the neck. Please take it easy with him today, no long walks.",
                "vocabSupport": [
                    {
                        "word": "Tollwut",
                        "translation": "rabies"
                    },
                    {
                        "word": "Heimtierausweis",
                        "translation": "pet passport"
                    },
                    {
                        "word": "schonen",
                        "translation": "to rest / spare from strain"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Hund Max wiegt genau _____ Kilo.",
                    "sentenceEN": "Dog Max weighs exactly _____ kilograms.",
                    "target": "18",
                    "options": [
                        "18",
                        "25",
                        "12"
                    ]
                },
                "role": {
                    "speaker1": "Darf der Hund heute Nachmittag viel rennen?",
                    "speaker1EN": "May the dog run a lot this afternoon?",
                    "options": [
                        "Nein, bitte heute schonen und keine anstrengenden Spaziergänge.",
                        "Hunde essen gerne Fleisch.",
                        "Der Tierarzt schließt um 18 Uhr."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Hund soll nach der Impfung heute intensiv Sport treiben.",
                    "statementEN": "The dog should do intense sports today after vaccination.",
                    "correct": false,
                    "explanation": "Falsch: Die Ärztin rät ausdrücklich: 'Bitte schonen Sie ihn heute etwas'."
                }
            }
        ]
    },
    "optiker": {
        "title": "Optiker & Sehtest",
        "titleEN": "Optician & Eye Test",
        "emoji": "👓",
        "warmup": {
            "vocab": [
                {
                    "word": "Sehstärke",
                    "gender": "die",
                    "translation": "visual acuity / eyesight",
                    "example": "Wir müssen Ihre aktuelle Sehstärke genau nachmessen.",
                    "exampleEN": "We need to measure your current visual acuity precisely."
                },
                {
                    "word": "Brillengestell",
                    "gender": "das",
                    "translation": "spectacle frame",
                    "example": "Dieses leichte Titangestell steht Ihnen hervorragend.",
                    "exampleEN": "This lightweight titanium frame suits you wonderfully."
                },
                {
                    "word": "Kurzsichtigkeit",
                    "gender": "die",
                    "translation": "short-sightedness / myopia",
                    "example": "Bei Kurzsichtigkeit benötigen Sie Minus-Dioptrien.",
                    "exampleEN": "With myopia you require minus dioptres."
                },
                {
                    "word": "Kontaktlinsen",
                    "gender": "die (Pl.)",
                    "translation": "contact lenses",
                    "example": "Tragen Sie lieber eine Brille oder Tageslinsen?",
                    "exampleEN": "Do you prefer wearing glasses or daily lenses?"
                },
                {
                    "word": "Entspiegelung",
                    "gender": "die",
                    "translation": "anti-reflective coating",
                    "example": "Für die Arbeit am Computer empfehle ich Gläser mit Entspiegelung.",
                    "exampleEN": "For computer work I recommend lenses with anti-reflective coating."
                }
            ],
            "phrases": [
                {
                    "de": "Ich sehe Straßenschilder beim Autofahren in der Ferne unscharf.",
                    "en": "I see street signs blurred in the distance while driving."
                },
                {
                    "de": "Bitte setzen Sie sich vor das Messgerät und schauen Sie auf den Ballon.",
                    "en": "Please sit in front of the device and look at the balloon."
                },
                {
                    "de": "Die neue Brille ist in etwa fünf Werktagen abholbereit.",
                    "en": "The new glasses will be ready for pickup in about five working days."
                },
                {
                    "de": "Probieren Sie diese drei Fassungen vor dem Spiegel aus.",
                    "en": "Try on these three frames in front of the mirror."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_opt_1",
                "title": "Der Sehtest",
                "titleEN": "The Eye Exam",
                "script": "Guten Tag! Ich habe das Gefühl, dass meine Brille zu schwach geworden ist. - Guten Tag. Gerne führen wir einen kostenlosen Sehtest durch. Bitte nehmen Sie auf dem Stuhl Platz und blicken Sie geradeaus. Können Sie die Buchstaben in der dritten Zeile lesen? - E, P, T, O, Z. - Sehr gut. Auf dem rechten Auge hat sich Ihre Stärke um eine halbe Dioptrie verändert.",
                "translation": "Good day! I feel like my glasses have become too weak. - Good day. We will gladly conduct a free eye test. Please take a seat on the chair and look straight ahead. Can you read the letters on the third line? - E, P, T, O, Z. - Very good. In your right eye, your prescription has changed by half a diopter.",
                "vocabSupport": [
                    {
                        "word": "durchführen",
                        "translation": "to conduct / carry out"
                    },
                    {
                        "word": "Dioptrie",
                        "translation": "dioptre"
                    },
                    {
                        "word": "Zeile",
                        "translation": "line / row"
                    }
                ],
                "fillBlank": {
                    "sentence": "Auf dem rechten Auge hat sich die Sehstärke um eine _____ Dioptrie verändert.",
                    "sentenceEN": "In the right eye the vision prescription changed by a _____ diopter.",
                    "target": "halbe",
                    "options": [
                        "halbe",
                        "ganze",
                        "zwei"
                    ]
                },
                "role": {
                    "speaker1": "Können Sie die untere Zeile deutlich erkennen?",
                    "speaker1EN": "Can you clearly recognise the bottom line?",
                    "options": [
                        "Ja, die Buchstaben heißen E, P, T, O, Z.",
                        "Ich habe meine Uhr vergessen.",
                        "Die Sonne scheint heute hell."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Sehtest beim Optiker kostet 50 Euro Gebühr.",
                    "statementEN": "The eye test at the optician costs a 50 euro fee.",
                    "correct": false,
                    "explanation": "Falsch: Der Optiker bietet einen kostenlosen Sehtest an."
                }
            },
            {
                "id": "a2_hoer_opt_2",
                "title": "Gestell auswählen",
                "titleEN": "Selecting Frames",
                "script": "Welches Gestell gefällt Ihnen am besten? Wir haben klassische Metallrahmen und moderne Kunststofffassungen. - Ich suche ein sehr leichtes Modell für die Arbeit im Büro. - Dann probieren Sie diese schwarze Titanbrille. Sie wiegt nur 14 Gramm. - Oh ja, die sitzt sehr bequem auf der Nase. Was kosten die Gläser mit Blaufilter für den Bildschirm? - Komplett mit Gestell und Gläsern liegt der Preis bei 220 Euro.",
                "translation": "Which frame do you like best? We have classic metal frames and modern plastic designs. - I am looking for a very light model for office work. - Then try on these black titanium glasses. They weigh only 14 grams. - Oh yes, they sit very comfortably on the nose. How much are the lenses with blue light filter for computer screens? - Complete with frame and lenses, the price is 220 euros.",
                "vocabSupport": [
                    {
                        "word": "Kunststofffassung",
                        "translation": "plastic frame"
                    },
                    {
                        "word": "Blaufilter",
                        "translation": "blue light filter"
                    },
                    {
                        "word": "bequem",
                        "translation": "comfortable"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das Titangestell wiegt lediglich _____ Gramm.",
                    "sentenceEN": "The titanium frame weighs merely _____ grams.",
                    "target": "14",
                    "options": [
                        "14",
                        "30",
                        "50"
                    ]
                },
                "role": {
                    "speaker1": "Wie sitzt die Brille auf der Nase?",
                    "speaker1EN": "How does the frame sit on your nose?",
                    "options": [
                        "Sie sitzt sehr leicht und angenehm bequem.",
                        "Ich habe Hunger.",
                        "Um 18 Uhr schließt der Laden."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Gesamtpreis für Gestell und Bildschirm-Gläser ist 220 Euro.",
                    "statementEN": "The total price for frame and screen lenses is 220 euros.",
                    "correct": true,
                    "explanation": "Richtig: Der Optiker nennt exakt 220 Euro als Komplettpreis."
                }
            }
        ]
    },
    "flohmarkt": {
        "title": "Flohmarkt & Handeln",
        "titleEN": "Flea Market & Bargaining",
        "emoji": "🛍️",
        "warmup": {
            "vocab": [
                {
                    "word": "Schnäppchen",
                    "gender": "das",
                    "translation": "bargain",
                    "example": "Auf dem Sonntagsflohmarkt habe ich ein echtes Schnäppchen gemacht.",
                    "exampleEN": "At the Sunday flea market I made a real bargain."
                },
                {
                    "word": "handeln",
                    "gender": "Verb",
                    "translation": "to negotiate / haggle",
                    "example": "Auf dem Flohmarkt darf man immer ein bisschen handeln.",
                    "exampleEN": "At the flea market you are always allowed to bargain a bit."
                },
                {
                    "word": "Zustand",
                    "gender": "der",
                    "translation": "condition",
                    "example": "Die alte Schallplatte ist in hervorragendem Zustand.",
                    "exampleEN": "The vintage vinyl record is in excellent condition."
                },
                {
                    "word": "Funktion",
                    "gender": "die",
                    "translation": "functionality",
                    "example": "Funktioniert die Vintage-Kamera noch einwandfrei?",
                    "exampleEN": "Does the vintage camera still work flawlessly?"
                },
                {
                    "word": "Kleingeld",
                    "gender": "das",
                    "translation": "small change / coins",
                    "example": "Haben Sie passendes Kleingeld für 3 Euro 50?",
                    "exampleEN": "Do you have exact small change for 3 euros 50?"
                }
            ],
            "phrases": [
                {
                    "de": "Was möchten Sie für diese alte Schreibtischlampe haben?",
                    "en": "What would you like for this antique desk lamp?"
                },
                {
                    "de": "Können wir uns auf 15 Euro einigen?",
                    "en": "Could we agree on 15 euros?"
                },
                {
                    "de": "Für 10 Euro nehme ich beide Bücher sofort mit.",
                    "en": "For 10 euros I will take both books with me immediately."
                },
                {
                    "de": "Der Artikel hat keine Kratzer und funktioniert perfekt.",
                    "en": "The item has no scratches and works perfectly."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_floh_1",
                "title": "Verhandeln um eine Lederjacke",
                "titleEN": "Bargaining for a Leather Jacket",
                "script": "Hallo! Was soll denn diese braune Lederjacke kosten? - Guten Morgen! Die Jacke ist aus echtem Leder und kaum getragen. Ich hätte gerne 35 Euro dafür. - 35 Euro ist mir etwas zu viel für den Flohmarkt. Würden Sie sie auch für 25 Euro abgeben? - Sagen wir 28 Euro, dann haben wir beide ein faires Geschäft. - Einverstanden, 28 Euro passen. Hier sind 30 Euro, die 2 Euro behalten Sie als Trinkgeld!",
                "translation": "Hello! How much is this brown leather jacket supposed to cost? - Good morning! The jacket is made of genuine leather and hardly worn. I would like 35 euros for it. - 35 euros is a bit too much for me at a flea market. Would you let it go for 25 euros? - Let's say 28 euros, then we both have a fair deal. - Agreed, 28 euros works. Here is 30 euros, keep the 2 euros as a tip!",
                "vocabSupport": [
                    {
                        "word": "echtes Leder",
                        "translation": "genuine leather"
                    },
                    {
                        "word": "kaum getragen",
                        "translation": "hardly worn"
                    },
                    {
                        "word": "faires Geschäft",
                        "translation": "fair deal"
                    }
                ],
                "fillBlank": {
                    "sentence": "Käufer und Verkäufer einigen sich auf einen Preis von _____ Euro.",
                    "sentenceEN": "Buyer and seller agree on a price of _____ euros.",
                    "target": "28",
                    "options": [
                        "28",
                        "35",
                        "20"
                    ]
                },
                "role": {
                    "speaker1": "Würden Sie mir die Jacke für 25 Euro geben?",
                    "speaker1EN": "Would you give me the jacket for 25 euros?",
                    "options": [
                        "Machen wir 28 Euro, das ist ein fairer Preis für echtes Leder.",
                        "Ich verkaufe Schuhe.",
                        "Der Flohmarkt endet um 16 Uhr."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Käufer bezahlt am Ende den ursprünglichen Preis von 35 Euro.",
                    "statementEN": "The buyer pays the initial price of 35 euros in the end.",
                    "correct": false,
                    "explanation": "Falsch: Sie einigen sich nach Verhandlung auf 28 Euro."
                }
            },
            {
                "id": "a2_hoer_floh_2",
                "title": "Alte Schallplatten und Bücher",
                "titleEN": "Vintage Records and Books",
                "script": "Schönen guten Tag! Funktionieren diese alten Schallplatten noch ohne Kratzer? - Ja, alle Platten sind geprüft und klingen wunderbar. Jede Platte kostet 4 Euro. - Wenn ich fünf Platten und diese beiden Bildbände nehme, machen Sie einen Paketpreis? - Normalerweise wären das 28 Euro. Sie bekommen alles zusammen für runde 20 Euro. - Perfekt, das ist gekauft!",
                "translation": "A very good day! Do these vintage vinyl records still play without scratches? - Yes, all records are tested and sound wonderful. Each record costs 4 euros. - If I take five records and these two picture books, can you make a package deal? - Normally that would be 28 euros. You can have everything together for a round 20 euros. - Perfect, deal done!",
                "vocabSupport": [
                    {
                        "word": "Kratzer",
                        "translation": "scratches"
                    },
                    {
                        "word": "Paketpreis",
                        "translation": "bundle / package price"
                    },
                    {
                        "word": "Bildband",
                        "translation": "illustrated coffee table book"
                    }
                ],
                "fillBlank": {
                    "sentence": "Für alle fünf Schallplatten und zwei Bildbände zahlt der Kunde _____ Euro.",
                    "sentenceEN": "For all five records and two illustrated books, the customer pays _____ euros.",
                    "target": "20",
                    "options": [
                        "20",
                        "28",
                        "15"
                    ]
                },
                "role": {
                    "speaker1": "Machen Sie einen Sonderpreis für alles zusammen?",
                    "speaker1EN": "Will you make a special price for everything together?",
                    "options": [
                        "Ja, für alles zusammen nehme ich glatte 20 Euro.",
                        "Platten sind aus Vinyl.",
                        "Wir haben kein Wechselgeld."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Schallplatten sind beschädigt und nicht abspielbar.",
                    "statementEN": "The vinyl records are damaged and unplayable.",
                    "correct": false,
                    "explanation": "Falsch: Der Verkäufer versichert: 'Alle Platten sind geprüft und klingen wunderbar'."
                }
            }
        ]
    },
    "apotheke2": {
        "title": "Stadt-Apotheke & Beratung",
        "titleEN": "City Pharmacy & Advice",
        "emoji": "💊",
        "warmup": {
            "vocab": [
                {
                    "word": "Rezept",
                    "gender": "das",
                    "translation": "doctor's prescription",
                    "example": "Haben Sie ein rosa Kassenrezept oder ein Privatrezept?",
                    "exampleEN": "Do you have a pink statutory prescription or a private prescription?"
                },
                {
                    "word": "Zuzahlung",
                    "gender": "die",
                    "translation": "co-payment",
                    "example": "Die gesetzliche Zuzahlung beträgt 5 Euro pro Medikament.",
                    "exampleEN": "The statutory co-payment is 5 euros per medicine."
                },
                {
                    "word": "Nebenwirkung",
                    "gender": "die",
                    "translation": "side effect",
                    "example": "Lesen Sie vor der Einnahme die Packungsbeilage zu Nebenwirkungen.",
                    "exampleEN": "Read the package leaflet regarding side effects before ingestion."
                },
                {
                    "word": "Hustensaft",
                    "gender": "der",
                    "translation": "cough syrup",
                    "example": "Nehmen Sie den pflanzlichen Hustensaft dreimal täglich nach dem Essen.",
                    "exampleEN": "Take the herbal cough syrup three times daily after meals."
                },
                {
                    "word": "Halsschmerzen",
                    "gender": "die (Pl.)",
                    "translation": "sore throat",
                    "example": "Gegen Halsschmerzen helfen diese Lutschtabletten mit Salbei.",
                    "exampleEN": "These sage lozenges help against sore throat."
                }
            ],
            "phrases": [
                {
                    "de": "Ich habe seit drei Tagen starken Reizhusten und Schnupfen.",
                    "en": "I have had a severe dry cough and runny nose for three days."
                },
                {
                    "de": "Ist dieses Schmerzmittel rezeptfrei erhältlich?",
                    "en": "Is this painkiller available without a prescription?"
                },
                {
                    "de": "Muss ich die Tabletten vor oder nach der Mahlzeit einnehmen?",
                    "en": "Must I take the pills before or after meals?"
                },
                {
                    "de": "Gute Besserung und schonen Sie sich!",
                    "en": "Get well soon and take care of yourself!"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_apo_1",
                "title": "Rezept einlösen",
                "titleEN": "Redeeming Prescription",
                "script": "Guten Tag! Ich möchte dieses Rezept von meinem Hausarzt einlösen. - Guten Tag, gerne. Sie bekommen ein Antibiotikum und schmerzlindernde Tabletten. Für das Antibiotikum fällt eine Zuzahlung von 5 Euro an, die Schmerztabletten sind zuzahlungsfrei. - Wie oft muss ich das Antibiotikum nehmen? - Eine Tablette morgens und eine abends, bitte immer mit reichlich Wasser nach dem Essen einnehmen.",
                "translation": "Good day! I would like to redeem this prescription from my GP. - Good day, with pleasure. You get an antibiotic and pain-relieving pills. For the antibiotic there is a co-payment of 5 euros, the pain tablets are exempt. - How often must I take the antibiotic? - One pill in the morning and one in the evening, please always with plenty of water after eating.",
                "vocabSupport": [
                    {
                        "word": "einlösen",
                        "translation": "to redeem (prescription)"
                    },
                    {
                        "word": "Antibiotikum",
                        "translation": "antibiotic"
                    },
                    {
                        "word": "reichlich Wasser",
                        "translation": "plenty of water"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die gesetzliche Zuzahlung für das Antibiotikum beträgt _____ Euro.",
                    "sentenceEN": "The statutory co-payment for the antibiotic is _____ euros.",
                    "target": "5",
                    "options": [
                        "5",
                        "10",
                        "15"
                    ]
                },
                "role": {
                    "speaker1": "Wie soll ich das Antibiotikum einnehmen?",
                    "speaker1EN": "How should I take the antibiotic?",
                    "options": [
                        "Zweimal täglich mit reichlich Wasser nach den Mahlzeiten.",
                        "Vor dem Schlafen ohne Wasser.",
                        "Nur wenn die Schmerzen sehr stark sind."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Beide Medikamente auf dem Rezept erfordern jeweils 10 Euro Zuzahlung.",
                    "statementEN": "Both medications on the prescription each require a 10 euro co-payment.",
                    "correct": false,
                    "explanation": "Falsch: Nur das Antibiotikum kostet 5 Euro Zuzahlung, die anderen sind gebührenfrei."
                }
            },
            {
                "id": "a2_hoer_apo_2",
                "title": "Mittel gegen Erkältung",
                "titleEN": "Remedy for a Cold",
                "script": "Hallo! Ich habe seit gestern starke Halsschmerzen und Heiserkeit. Was können Sie mir ohne Rezept empfehlen? - Wir haben sehr gute Salbei-Lutschtabletten mit lokaler Betäubung für den Hals. Zusätzlich empfehle ich Ihnen einen heißen Kamillentee mit Honig. - Wie oft darf ich die Tabletten nehmen? - Alle drei bis vier Stunden eine Tablette langsam im Mund zergehen lassen. Trinken Sie außerdem viel Flüssigkeit.",
                "translation": "Hello! Since yesterday I have had a severe sore throat and hoarseness. What can you recommend over the counter? - We have very good sage lozenges with local anaesthetic for the throat. In addition, I recommend a hot chamomile tea with honey. - How often may I take the lozenges? - Let one lozenge slowly dissolve in your mouth every three to four hours. Also drink plenty of fluids.",
                "vocabSupport": [
                    {
                        "word": "Heiserkeit",
                        "translation": "hoarseness"
                    },
                    {
                        "word": "Lutschtabletten",
                        "translation": "lozenges"
                    },
                    {
                        "word": "zergehen lassen",
                        "translation": "to let dissolve"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Apotheker empfiehlt Salbei-Lutschtabletten alle _____ bis vier Stunden.",
                    "sentenceEN": "The pharmacist recommends sage lozenges every _____ to four hours.",
                    "target": "drei",
                    "options": [
                        "drei",
                        "sechs",
                        "zwei"
                    ]
                },
                "role": {
                    "speaker1": "Haben Sie ein rezeptfreies Mittel gegen Halsschmerzen?",
                    "speaker1EN": "Do you have an over-the-counter remedy for sore throat?",
                    "options": [
                        "Ja, diese Salbei-Lutschtabletten lindern den Schmerz schnell.",
                        "Die Arztpraxis hat mittwochs geschlossen.",
                        "Ich bin Apotheker seit 10 Jahren."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Salbei-Lutschtabletten müssen mit kochendem Wasser geschluckt werden.",
                    "statementEN": "The sage lozenges must be swallowed with boiling water.",
                    "correct": false,
                    "explanation": "Falsch: Sie sollen alle 3-4 Stunden langsam im Mund zergehen."
                }
            }
        ]
    },
    "kino": {
        "title": "Kino & Abendprogramm",
        "titleEN": "Cinema & Evening Plans",
        "emoji": "🎬",
        "warmup": {
            "vocab": [
                {
                    "word": "Vorstellung",
                    "gender": "die",
                    "translation": "screening / show",
                    "example": "Die Spätvorstellung beginnt um 22:30 Uhr.",
                    "exampleEN": "The late screening begins at 10:30 PM."
                },
                {
                    "word": "Reihe",
                    "gender": "die",
                    "translation": "row (of seats)",
                    "example": "Wir sitzen in Reihe 8, genau in der Mitte.",
                    "exampleEN": "We are sitting in row 8, right in the center."
                },
                {
                    "word": "Originalfassung",
                    "gender": "die",
                    "translation": "original version (OV)",
                    "example": "Läuft der Film auf Deutsch oder in der englischen Originalfassung?",
                    "exampleEN": "Is the film playing in German or in original English version?"
                },
                {
                    "word": "Popcorn",
                    "gender": "das",
                    "translation": "popcorn",
                    "example": "Möchtest du süßes oder gesalzenes Popcorn?",
                    "exampleEN": "Would you like sweet or salted popcorn?"
                },
                {
                    "word": "Ermäßigung",
                    "gender": "die",
                    "translation": "discount",
                    "example": "Studenten erhalten montags eine Ermäßigung von 2 Euro.",
                    "exampleEN": "Students receive a discount of 2 euros on Mondays."
                }
            ],
            "phrases": [
                {
                    "de": "Ich möchte zwei Kinokarten für den neuen Science-Fiction-Film reservieren.",
                    "en": "I would like to reserve two movie tickets for the new sci-fi film."
                },
                {
                    "de": "Gibt es noch freie Plätze in der Parkett- oder Logenkategorie?",
                    "en": "Are there still free seats in the stalls or balcony category?"
                },
                {
                    "de": "Der Einlass in den Kinosaal beginnt 15 Minuten vor Filmstart.",
                    "en": "Admission into the cinema hall begins 15 minutes before showtime."
                },
                {
                    "de": "Hier sind Ihre Eintrittskarten für Saal 3.",
                    "en": "Here are your tickets for hall 3."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_kino_1",
                "title": "Karten an der Kinokasse kaufen",
                "titleEN": "Buying Tickets at Box Office",
                "script": "Guten Abend! Für welchen Film möchten Sie Karten kaufen? - Guten Abend. Zwei Karten für die Komödie um 20:15 Uhr bitte. - Sehr gerne. Möchten Sie lieber vorne oder weiter hinten sitzen? - Am liebsten hinten in der Loge, Reihe 9 oder 10. - Reihe 9, Platz 14 und 15 sind noch frei. Das macht 11 Euro pro Ticket, also zusammen 22 Euro. - Zahlen wir mit Karte, bitte.",
                "translation": "Good evening! Which movie would you like tickets for? - Good evening. Two tickets for the comedy at 8:15 PM please. - Gladly. Would you prefer sitting at the front or further back? - Preferably in the back in the balcony, row 9 or 10. - Row 9, seats 14 and 15 are still available. That comes to 11 euros per ticket, so 22 euros in total. - We will pay by card, please.",
                "vocabSupport": [
                    {
                        "word": "die Komödie",
                        "translation": "comedy"
                    },
                    {
                        "word": "Loge",
                        "translation": "balcony / premium tier"
                    },
                    {
                        "word": "weiter hinten",
                        "translation": "further back"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die beiden Kinoplätze befinden sich in Reihe _____.",
                    "sentenceEN": "The two cinema seats are located in row _____.",
                    "target": "9",
                    "options": [
                        "9",
                        "4",
                        "15"
                    ]
                },
                "role": {
                    "speaker1": "Möchten Sie vorne oder weiter hinten sitzen?",
                    "speaker1EN": "Would you like to sit in front or further back?",
                    "options": [
                        "Wir sitzen am liebsten hinten in Reihe 9.",
                        "Der Film dauert zwei Stunden.",
                        "Ich trinke gerne Cola."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Beide Kinokarten kosten zusammen 22 Euro.",
                    "statementEN": "Both cinema tickets cost 22 euros together.",
                    "correct": true,
                    "explanation": "Richtig: 11 Euro pro Ticket, also zusammen 22 Euro."
                }
            },
            {
                "id": "a2_hoer_kino_2",
                "title": "Snacks und Getränke holen",
                "titleEN": "Getting Snacks and Drinks",
                "script": "Hallo! Ein mittleres Menü mit süßem Popcorn und einer großen Apfelschorle bitte. - Gerne! Möchten Sie noch Nachos mit warmer Käsesoße dazu? - Nein danke, das Popcorn reicht mir völlig. - Alles klar. Das Menü kostet 8 Euro 50. Der Einlass für Saal 4 läuft bereits, viel Spaß beim Film! - Danke sehr, schönen Abend noch.",
                "translation": "Hello! A medium combo with sweet popcorn and a large apple spritzer, please. - With pleasure! Would you like nachos with warm cheese dip too? - No thanks, the popcorn is plenty for me. - Alright. The combo is 8 euros 50. Admission for hall 4 is already underway, enjoy the movie! - Thank you very much, have a nice evening.",
                "vocabSupport": [
                    {
                        "word": "Apfelschorle",
                        "translation": "sparkling apple spritzer"
                    },
                    {
                        "word": "Käsesoße",
                        "translation": "cheese sauce"
                    },
                    {
                        "word": "Einlass",
                        "translation": "admission / doors open"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das Popcorn-Menü mit Getränk kostet _____ Euro.",
                    "sentenceEN": "The popcorn combo with drink costs _____ euros.",
                    "target": "8,50",
                    "options": [
                        "8,50",
                        "12,00",
                        "5,00"
                    ]
                },
                "role": {
                    "speaker1": "Darf es noch etwas Warmes wie Nachos sein?",
                    "speaker1EN": "May it be something hot like nachos as well?",
                    "options": [
                        "Nein danke, das Popcorn und die Schorle reichen mir.",
                        "Der Film war sehr spannend.",
                        "Ich nehme die U-Bahn nach Hause."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kinosaal 4 ist noch für die nächsten zwei Stunden geschlossen.",
                    "statementEN": "Cinema hall 4 is still closed for the next two hours.",
                    "correct": false,
                    "explanation": "Falsch: Der Kinomitarbeiter sagt: 'Der Einlass für Saal 4 läuft bereits'."
                }
            }
        ]
    },
    "hotel": {
        "title": "Hotel & Übernachtung",
        "titleEN": "Hotel & Overnight Stay",
        "emoji": "🏨",
        "warmup": {
            "vocab": [
                {
                    "word": "Zimmerschlüssel",
                    "gender": "der",
                    "translation": "room key / keycard",
                    "example": "Hier ist Ihre elektronische Schlüsselkarte für Zimmer 304.",
                    "exampleEN": "Here is your electronic keycard for room 304."
                },
                {
                    "word": "Frühstücksbuffet",
                    "gender": "das",
                    "translation": "breakfast buffet",
                    "example": "Das reichhaltige Frühstücksbuffet wird von 7 bis 10 Uhr serviert.",
                    "exampleEN": "The hearty breakfast buffet is served from 7 to 10 AM."
                },
                {
                    "word": "WLAN-Passwort",
                    "gender": "das",
                    "translation": "Wi-Fi password",
                    "example": "Das kostenfreie WLAN-Passwort finden Sie auf der Schlüsselhülle.",
                    "exampleEN": "You can find the free Wi-Fi password on the keycard sleeve."
                },
                {
                    "word": "Aufzug",
                    "gender": "der",
                    "translation": "elevator / lift",
                    "example": "Der Aufzug befindet sich gleich links neben der Rezeption.",
                    "exampleEN": "The elevator is located just to the left of the reception desk."
                },
                {
                    "word": "Auschecken",
                    "gender": "das",
                    "translation": "check-out",
                    "example": "Bis wie viel Uhr müssen wir morgen auschecken?",
                    "exampleEN": "Until what time must we check out tomorrow?"
                }
            ],
            "phrases": [
                {
                    "de": "Ich habe ein Doppelzimmer auf den Namen Becker reserviert.",
                    "en": "I reserved a double room under the name Becker."
                },
                {
                    "de": "Füllen Sie bitte noch kurz diesen Meldeschein aus.",
                    "en": "Please fill out this registration form briefly."
                },
                {
                    "de": "Können wir unser Gepäck nach dem Check-out noch hier deponieren?",
                    "en": "Can we still leave our luggage here after checkout?"
                },
                {
                    "de": "Wir wünschen Ihnen einen angenehmen Aufenthalt bei uns!",
                    "en": "We wish you a pleasant stay with us!"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_hot_1",
                "title": "Ankunft an der Rezeption",
                "titleEN": "Arrival at Reception",
                "script": "Guten Tag, herzlich willkommen im Stadthotel! - Guten Tag, wir haben ein Doppelzimmer für drei Nächte gebucht. Der Name ist Fischer. - Einen Moment bitte... Ja, Herr Fischer, Doppelzimmer mit Balkon zur Gartenseite. Bitte füllen Sie das Anmeldeformular aus und unterschreiben Sie hier. - Sehr gerne. Ist das Frühstück im Preis inbegriffen? - Ja, das Frühstücksbuffet steht Ihnen täglich von 7 bis 10:30 Uhr zur Verfügung. Hier ist Ihre Zimmerkarte für Nummer 215 im 2. Stock.",
                "translation": "Good day, welcome to the city hotel! - Good day, we booked a double room for three nights. The name is Fischer. - One moment please... Yes, Mr. Fischer, double room with balcony facing the garden side. Please fill out the registration form and sign here. - Gladly. Is breakfast included in the rate? - Yes, the breakfast buffet is available daily from 7 to 10:30 AM. Here is your room card for number 215 on the 2nd floor.",
                "vocabSupport": [
                    {
                        "word": "Gartenseite",
                        "translation": "garden side"
                    },
                    {
                        "word": "inbegriffen",
                        "translation": "included"
                    },
                    {
                        "word": "zur Verfügung stehen",
                        "translation": "to be available"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das Frühstücksbuffet gibt es täglich von 7 bis _____ Uhr.",
                    "sentenceEN": "The breakfast buffet is available daily from 7 to _____ o'clock.",
                    "target": "10:30",
                    "options": [
                        "10:30",
                        "9:00",
                        "12:00"
                    ]
                },
                "role": {
                    "speaker1": "Ist das Frühstück im Zimmerpreis enthalten?",
                    "speaker1EN": "Is breakfast included in the room price?",
                    "options": [
                        "Ja, das Frühstücksbuffet ist im Preis inbegriffen.",
                        "Der Zug fährt um 8 Uhr.",
                        "Wir haben zwei Koffer."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Das gebuchte Zimmer hat Blick auf eine laute Hauptstraße.",
                    "statementEN": "The booked room faces a noisy main street.",
                    "correct": false,
                    "explanation": "Falsch: Das Zimmer liegt ruhig zur Gartenseite."
                }
            },
            {
                "id": "a2_hoer_hot_2",
                "title": "Gepäckaufbewahrung und Abreise",
                "titleEN": "Luggage Storage and Departure",
                "script": "Guten Morgen. Wir möchten auschecken, unser Zug fährt aber erst heute Nachmittag um 16 Uhr. Dürfen wir unsere Koffer noch hier lassen? - Guten Morgen. Selbstverständlich, Sie können Ihr Gepäck kostenlos in unserem Gepäckraum einschließen lassen. - Das ist wunderbar. Bis wann müssen wir die Schlüsselkarte abgeben? - Die reguläre Check-out-Zeit ist 11 Uhr. Hier ist Ihre Gepäckmarke.",
                "translation": "Good morning. We would like to check out, but our train does not leave until 4 PM this afternoon. May we still leave our suitcases here? - Good morning. Of course, you can lock your luggage in our luggage room free of charge. - That is wonderful. By what time must we hand over the keycard? - Regular check-out time is 11 AM. Here is your luggage tag.",
                "vocabSupport": [
                    {
                        "word": "Gepäckraum",
                        "translation": "luggage storage room"
                    },
                    {
                        "word": "einschließen",
                        "translation": "to lock up safely"
                    },
                    {
                        "word": "Gepäckmarke",
                        "translation": "luggage claim ticket"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die reguläre Check-out-Zeit im Hotel ist um _____ Uhr.",
                    "sentenceEN": "The regular check-out time at the hotel is at _____ o'clock.",
                    "target": "11",
                    "options": [
                        "11",
                        "9",
                        "14"
                    ]
                },
                "role": {
                    "speaker1": "Können wir unsere Koffer bis 16 Uhr im Hotel deponieren?",
                    "speaker1EN": "Can we leave our suitcases in the hotel until 4 PM?",
                    "options": [
                        "Ja natürlich, wir schließen sie kostenlos im Gepäckraum ein.",
                        "Das Wetter ist sonnig.",
                        "Das Taxi kostet 25 Euro."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Aufbewahrung der Koffer im Gepäckraum kostet 15 Euro extra.",
                    "statementEN": "Storing the suitcases in the luggage room costs 15 euros extra.",
                    "correct": false,
                    "explanation": "Falsch: Die Rezeptionistin betont: 'Sie können Ihr Gepäck kostenlos einschließen lassen'."
                }
            }
        ]
    },
    "postamt": {
        "title": "Postfiliale & Versand",
        "titleEN": "Post Office & Shipping",
        "emoji": "📦",
        "warmup": {
            "vocab": [
                {
                    "word": "Einschreiben",
                    "gender": "das",
                    "translation": "registered mail",
                    "example": "Wichtige Verträge versendet man am sichersten per Einschreiben.",
                    "exampleEN": "Important contracts are most safely sent via registered mail."
                },
                {
                    "word": "Briefmarke",
                    "gender": "die",
                    "translation": "postage stamp",
                    "example": "Was kostet eine Briefmarke für einen Standardbrief nach Österreich?",
                    "exampleEN": "How much is a stamp for a standard letter to Austria?"
                },
                {
                    "word": "Paketaufkleber",
                    "gender": "der",
                    "translation": "parcel shipping label",
                    "example": "Bitte kleben Sie den Adressaufkleber gut sichtbar oben auf das Paket.",
                    "exampleEN": "Please stick the address label visibly on top of the parcel."
                },
                {
                    "word": "Sendungsverfolgung",
                    "gender": "die",
                    "translation": "tracking number",
                    "example": "Mit dieser Nummer können Sie den Status der Sendung online verfolgen.",
                    "exampleEN": "With this number you can track the status of the shipment online."
                },
                {
                    "word": "Zollinhaltserklärung",
                    "gender": "die",
                    "translation": "customs declaration",
                    "example": "Für Pakete außerhalb der EU ist eine Zollerklärung erforderlich.",
                    "exampleEN": "For parcels outside the EU, a customs declaration is required."
                }
            ],
            "phrases": [
                {
                    "de": "Ich möchte dieses Päckchen nach Indien als versichertes Paket aufgeben.",
                    "en": "I would like to dispatch this small parcel to India as an insured package."
                },
                {
                    "de": "Wiegt der Brief unter 20 Gramm oder ist er schwerer?",
                    "en": "Does the letter weigh under 20 grams or is it heavier?"
                },
                {
                    "de": "Hier ist Ihre Quittung mit der Sendungsverfolgungsnummer.",
                    "en": "Here is your receipt with the tracking number."
                },
                {
                    "de": "Die voraussichtliche Lieferzeit beträgt zwei Werktage.",
                    "en": "The estimated delivery time is two working days."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_post_1",
                "title": "Paket nach Berlin verschicken",
                "titleEN": "Sending Parcel to Berlin",
                "script": "Guten Tag! Ich möchte dieses Paket nach Berlin schicken. Wie viel kostet der Versand? - Guten Tag. Stellen Sie das Paket bitte auf die Waage... Es wiegt 3,8 Kilogramm. Als versichertes Paket bis 5 Kilo kostet das 6 Euro 99. - Ist die Sendungsverfolgung inklusive? - Ja, eine Haftung bis 500 Euro und eine Trackingnummer sind mit dabei. Möchten Sie noch Briefmarken mitnehmen? - Ja, bitte einen Zehnerbogen für normale Inlandsbriefe.",
                "translation": "Good day! I would like to send this package to Berlin. How much is shipping? - Good day. Please place the package on the scale... It weighs 3.8 kilograms. As an insured parcel up to 5 kg that costs 6 euros 99. - Is tracking included? - Yes, liability up to 500 euros and a tracking number are included. Would you like to take stamps along too? - Yes, please a booklet of ten for standard domestic letters.",
                "vocabSupport": [
                    {
                        "word": "Waage",
                        "translation": "scale"
                    },
                    {
                        "word": "Haftung",
                        "translation": "insurance liability"
                    },
                    {
                        "word": "Zehnerbogen",
                        "translation": "sheet of ten stamps"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das Paket wiegt _____ Kilogramm.",
                    "sentenceEN": "The package weighs _____ kilograms.",
                    "target": "3,8",
                    "options": [
                        "3,8",
                        "5,0",
                        "1,5"
                    ]
                },
                "role": {
                    "speaker1": "Ist die Sendungsverfolgung im Preis mit drin?",
                    "speaker1EN": "Is tracking included in the price?",
                    "options": [
                        "Ja, Versicherung bis 500 Euro und Tracking sind inklusive.",
                        "Die Post öffnet um 8 Uhr.",
                        "Ich schreibe gerne Postkarten."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Das Paket ist unversichert und hat keine Sendungsverfolgung.",
                    "statementEN": "The parcel is uninsured and has no tracking.",
                    "correct": false,
                    "explanation": "Falsch: Das 6,99 Euro Paket hat Sendungsverfolgung und Haftung bis 500 Euro."
                }
            },
            {
                "id": "a2_hoer_post_2",
                "title": "Kündigung per Einschreiben",
                "titleEN": "Cancellation by Registered Mail",
                "script": "Hallo! Ich muss diese Kündigung an meinen Vermieter schicken und brauche einen Beweis, dass er den Brief erhalten hat. - Dann empfehle ich Ihnen ein Übergabeeinschreiben mit Rückschein. Der Postbote übergibt den Brief nur gegen persönliche Unterschrift und Sie bekommen die unterschriebene Karte zurück. - Was kostet dieses Einschreiben? - Mit Porto und Zusatzleistung kostet das 5 Euro 60. - Das mache ich, vielen Dank!",
                "translation": "Hello! I must send this notice of termination to my landlord and need proof that he received the letter. - Then I recommend registered mail with advice of receipt. The mail carrier delivers the letter only against personal signature and you receive the signed card back. - How much is this registered mail? - With postage and supplementary fee it costs 5 euros 60. - I will do that, thank you very much!",
                "vocabSupport": [
                    {
                        "word": "Übergabeeinschreiben",
                        "translation": "registered mail with recorded delivery"
                    },
                    {
                        "word": "Rückschein",
                        "translation": "advice of receipt / return receipt"
                    },
                    {
                        "word": "Postbote",
                        "translation": "postman / carrier"
                    }
                ],
                "fillBlank": {
                    "sentence": "Das Übergabeeinschreiben mit Rückschein kostet insgesamt _____ Euro.",
                    "sentenceEN": "The recorded delivery with advice of receipt costs a total of _____ euros.",
                    "target": "5,60",
                    "options": [
                        "5,60",
                        "2,50",
                        "9,00"
                    ]
                },
                "role": {
                    "speaker1": "Welche Versandart beweist die Zustellung am besten?",
                    "speaker1EN": "Which shipping method best proves successful delivery?",
                    "options": [
                        "Ein Übergabeeinschreiben mit persönlicher Unterschrift und Rückschein.",
                        "Ein normaler Briefkasten-Einwurf.",
                        "Ein Anruf beim Vermieter."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Beim Einschreiben mit Rückschein erhält der Absender eine unterschriebene Bestätigung.",
                    "statementEN": "With registered mail and receipt, the sender receives a signed confirmation.",
                    "correct": true,
                    "explanation": "Richtig: Der Postbote lässt den Empfänger unterschreiben und die Karte geht an den Absender."
                }
            }
        ]
    },
    "friseur": {
        "title": "Friseursalon & Styling",
        "titleEN": "Hair Salon & Styling",
        "emoji": "💇",
        "warmup": {
            "vocab": [
                {
                    "word": "Haarschnitt",
                    "gender": "der",
                    "translation": "haircut",
                    "example": "Möchten Sie nur die Spitzen geschnitten oder einen neuen Haarschnitt?",
                    "exampleEN": "Do you want only the ends trimmed or a new haircut?"
                },
                {
                    "word": "Spitzen schneiden",
                    "gender": "Phrase",
                    "translation": "to trim the split ends",
                    "example": "Bitte nur etwa zwei Zentimeter von den Spitzen schneiden.",
                    "exampleEN": "Please trim only about two centimetres from the ends."
                },
                {
                    "word": "Haare waschen",
                    "gender": "Phrase",
                    "translation": "to wash hair",
                    "example": "Wir waschen Ihre Haare zuerst mit einem pflegenden Shampoo.",
                    "exampleEN": "We will wash your hair first with a nourishing shampoo."
                },
                {
                    "word": "Föhnen",
                    "gender": "das",
                    "translation": "blow-drying",
                    "example": "Möchten Sie die Haare nach dem Schneiden selber föhnen?",
                    "exampleEN": "Would you like to blow-dry your hair yourself after cutting?"
                },
                {
                    "word": "Scheitel",
                    "gender": "der",
                    "translation": "hair parting",
                    "example": "Tragen Sie den Scheitel links, rechts oder in der Mitte?",
                    "exampleEN": "Do you wear your parting on the left, right, or center?"
                }
            ],
            "phrases": [
                {
                    "de": "Ich habe um 14:30 Uhr einen Termin bei Herrn Luca.",
                    "en": "I have an appointment at 2:30 PM with Mr. Luca."
                },
                {
                    "de": "An den Seiten bitte etwas kürzer und oben nur leicht ausdünnen.",
                    "en": "A bit shorter on the sides please and only slightly thinned out on top."
                },
                {
                    "de": "Ist die Wassertemperatur beim Waschen so angenehm für Sie?",
                    "en": "Is the water temperature comfortable for you while washing?"
                },
                {
                    "de": "Möchten Sie etwas Wachs oder Haarspray in die Frisur?",
                    "en": "Would you like some wax or hairspray in your hairstyle?"
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_fris_1",
                "title": "Beratung vor dem Haarschnitt",
                "titleEN": "Consultation Before Cut",
                "script": "Hallo! Setzen Sie sich bitte auf den Friseurstuhl. Wie möchten Sie Ihre Haare heute geschnitten haben? - Hallo! An den Seiten und im Nacken hätte ich es gerne ziemlich kurz, etwa 9 Millimeter mit der Maschine. Oben auf dem Kopf bitte nur zwei Zentimeter mit der Schere kürzen. - Soll der Übergang weich sein? - Ja, ein schöner, sauberer Übergang wäre super. - Sehr gerne. Kommen Sie zuerst kurz nach hinten zum Haarewaschen.",
                "translation": "Hello! Please take a seat in the barber chair. How would you like your hair cut today? - Hello! On the sides and neck I would like it quite short, about 9 millimetres with the machine clipper. On top of the head please trim only two centimetres with scissors. - Should the transition be smooth? - Yes, a nice, clean fade would be great. - Very gladly. First come to the back briefly for hair washing.",
                "vocabSupport": [
                    {
                        "word": "Maschine",
                        "translation": "hair clippers"
                    },
                    {
                        "word": "Übergang",
                        "translation": "fade / transition"
                    },
                    {
                        "word": "Schere",
                        "translation": "scissors"
                    }
                ],
                "fillBlank": {
                    "sentence": "An den Seiten wünscht sich der Kunde circa _____ Millimeter Länge.",
                    "sentenceEN": "On the sides the customer wishes for approx. _____ millimetres length.",
                    "target": "9",
                    "options": [
                        "9",
                        "25",
                        "3"
                    ]
                },
                "role": {
                    "speaker1": "Wie kurz möchten Sie die Seiten geschnitten haben?",
                    "speaker1EN": "How short would you like the sides cut?",
                    "options": [
                        "Etwa 9 Millimeter mit einem weichen Übergang.",
                        "Ich trage Schuhe Größe 42.",
                        "Morgen regnet es."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde möchte an den Seiten schulterlange Haare behalten.",
                    "statementEN": "The customer wants to keep shoulder-length hair on the sides.",
                    "correct": false,
                    "explanation": "Falsch: Er wünscht sich an den Seiten einen kurzen Maschinenschnitt von 9 mm."
                }
            },
            {
                "id": "a2_hoer_fris_2",
                "title": "Styling und Bezahlung",
                "titleEN": "Styling and Payment",
                "script": "So, schauen Sie mal in den Handspiegel. Gefällt Ihnen der Hinterkopf und die Kontur so? - Wow, das sieht wirklich klasse aus! Genau so habe ich mir das vorgestellt. - Möchten Sie noch etwas mattes Stylingwachs in die Haare? - Ja gern, eine kleine Portion. - Das macht dann zusammen 26 Euro für Waschen, Schneiden und Stylen. - Machen Sie bitte 30 Euro, der Rest ist für Sie. - Vielen herzlichen Dank!",
                "translation": "So, take a look in the hand mirror. Do you like the back and the outline like this? - Wow, that looks really great! Exactly as I imagined. - Would you like some matte styling wax in your hair? - Yes gladly, a small portion. - That comes to 26 euros altogether for wash, cut, and styling. - Please round up to 30 euros, the rest is for you. - Thank you very much!",
                "vocabSupport": [
                    {
                        "word": "Handspiegel",
                        "translation": "hand mirror"
                    },
                    {
                        "word": "Kontur",
                        "translation": "outline / edge"
                    },
                    {
                        "word": "Stylingwachs",
                        "translation": "styling wax"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der reguläre Preis für den Friseurbesuch beträgt _____ Euro.",
                    "sentenceEN": "The regular price for the salon visit is _____ euros.",
                    "target": "26",
                    "options": [
                        "26",
                        "30",
                        "18"
                    ]
                },
                "role": {
                    "speaker1": "Wie gefällt Ihnen der Schnitt im Spiegel?",
                    "speaker1EN": "How do you like the cut in the mirror?",
                    "options": [
                        "Das sieht super aus, genau wie ich es mir vorgestellt habe.",
                        "Ich muss meinen Ausweis verlängern.",
                        "Die Suppe schmeckt lecker."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Kunde gibt dem Friseur 4 Euro Trinkgeld.",
                    "statementEN": "The customer gives the hairdresser 4 euros tip.",
                    "correct": true,
                    "explanation": "Richtig: Er zahlt 30 Euro bei einer Rechnung von 26 Euro (4 Euro Differenz)."
                }
            }
        ]
    },
    "fundbuero": {
        "title": "Fundbüro & Verlust",
        "titleEN": "Lost and Found Office",
        "emoji": "🔍",
        "warmup": {
            "vocab": [
                {
                    "word": "Verlustmeldung",
                    "gender": "die",
                    "translation": "loss report",
                    "example": "Sie können online eine Verlustmeldung für Ihre Tasche aufgeben.",
                    "exampleEN": "You can submit a loss report online for your bag."
                },
                {
                    "word": "Eigentumsnachweis",
                    "gender": "der",
                    "translation": "proof of ownership",
                    "example": "Als Eigentumsnachweis dient der Kaufbeleg oder ein Foto.",
                    "exampleEN": "The purchase receipt or a photo serves as proof of ownership."
                },
                {
                    "word": "Finderlohn",
                    "gender": "der",
                    "translation": "finder's reward",
                    "example": "Der Finder hat gesetzlichen Anspruch auf Finderlohn.",
                    "exampleEN": "The finder has a statutory claim to a finder's reward."
                },
                {
                    "word": "Aufbewahrungsfrist",
                    "gender": "die",
                    "translation": "retention period",
                    "example": "Gegenstände werden sechs Monate lang im Fundbüro aufbewahrt.",
                    "exampleEN": "Items are kept in the lost and found for six months."
                },
                {
                    "word": "Verlustort",
                    "gender": "der",
                    "translation": "place of loss",
                    "example": "Wo genau haben Sie Ihren Rucksack vergessen?",
                    "exampleEN": "Where exactly did you leave your backpack behind?"
                }
            ],
            "phrases": [
                {
                    "de": "Ich habe gestern in der Straßenbahn Linie 16 meinen Rucksack vergessen.",
                    "en": "I left my backpack yesterday on tram line 16."
                },
                {
                    "de": "Können Sie die Tasche und den Inhalt genauer beschreiben?",
                    "en": "Can you describe the bag and its contents in more detail?"
                },
                {
                    "de": "Gute Nachrichten: Ein ehrlicher Finder hat Ihre Brieftasche heute abgegeben!",
                    "en": "Good news: An honest finder handed in your wallet today!"
                },
                {
                    "de": "Bitte unterschreiben Sie hier die Aushändigungsbestätigung.",
                    "en": "Please sign the release confirmation receipt here."
                }
            ]
        },
        "dialogues": [
            {
                "id": "a2_hoer_fund_1",
                "title": "Verlust eines Rucksacks melden",
                "titleEN": "Reporting a Lost Backpack",
                "script": "Guten Tag, Fundbüro der Stadtwerke. Was vermissen Sie? - Guten Tag! Ich habe gestern gegen 17:30 Uhr meinen blauen Deuter-Rucksack in der U-Bahn U3 Richtung Hauptbahnhof vergessen. - Lassen Sie mich im Computersystem suchen. Welche Gegenstände waren denn im Rucksack? - Ein schwarzer Laptop, ein Mathebuch und ein rotes Federmäppchen. - Ja, genau dieser Rucksack wurde heute früh von einem Kontrolleur abgegeben!",
                "translation": "Good day, Municipal Lost and Found Office. What are you missing? - Good day! Yesterday around 5:30 PM I left my blue Deuter backpack on subway line U3 towards Central Station. - Let me search in the computer system. What items were in the backpack? - A black laptop, a math book, and a red pencil case. - Yes, exactly this backpack was handed in by an inspector early this morning!",
                "vocabSupport": [
                    {
                        "word": "vermissen",
                        "translation": "to miss / lose"
                    },
                    {
                        "word": "Federmäppchen",
                        "translation": "pencil case"
                    },
                    {
                        "word": "abgegeben",
                        "translation": "handed in"
                    }
                ],
                "fillBlank": {
                    "sentence": "Der Rucksack wurde von einem _____ im Fundbüro abgegeben.",
                    "sentenceEN": "The backpack was handed into the lost property office by an _____.",
                    "target": "Kontrolleur",
                    "options": [
                        "Kontrolleur",
                        "Polizisten",
                        "Fahrgast"
                    ]
                },
                "role": {
                    "speaker1": "Welche Gegenstände befanden sich in der Tasche?",
                    "speaker1EN": "Which items were located inside the bag?",
                    "options": [
                        "Ein Laptop, ein Mathebuch und ein rotes Federmäppchen.",
                        "Ich habe im Restaurant gegessen.",
                        "Meine Schwester wohnt in Bonn."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Der Rucksack wurde leider bisher überhaupt nicht gefunden.",
                    "statementEN": "Unfortunately, the backpack has not been found at all so far.",
                    "correct": false,
                    "explanation": "Falsch: Der Mitarbeiter bestätigt, dass der Rucksack heute früh abgegeben wurde."
                }
            },
            {
                "id": "a2_hoer_fund_2",
                "title": "Abholung mit Ausweis",
                "titleEN": "Collection with ID",
                "script": "Ich freue mich so sehr, dass mein Rucksack da ist! Was brauche ich zur Abholung? - Bitte bringen Sie Ihren Personalausweis mit. Wenn Sie das Passwort des Laptops vor Ort entsperren können, gilt das als perfekter Eigentumsnachweis. - Muss ich eine Bearbeitungsgebühr zahlen? - Ja, für Elektrogeräte beträgt die städtische Verwahrgebühr 10 Euro. - Sehr gerne, ich komme sofort vorbei!",
                "translation": "I am so glad my backpack is there! What do I need to pick it up? - Please bring your identity card with you. If you can unlock the password of the laptop on site, that serves as perfect proof of ownership. - Do I have to pay an administrative fee? - Yes, for electronic devices the municipal custody fee is 10 euros. - Gladly, I'll come by right away!",
                "vocabSupport": [
                    {
                        "word": "entsperren",
                        "translation": "to unlock"
                    },
                    {
                        "word": "Eigentumsnachweis",
                        "translation": "proof of ownership"
                    },
                    {
                        "word": "Verwahrgebühr",
                        "translation": "custody / storage fee"
                    }
                ],
                "fillBlank": {
                    "sentence": "Die Verwahrgebühr für Elektrogeräte beträgt _____ Euro.",
                    "sentenceEN": "The storage fee for electronic devices is _____ euros.",
                    "target": "10",
                    "options": [
                        "10",
                        "25",
                        "0"
                    ]
                },
                "role": {
                    "speaker1": "Wie können Sie nachweisen, dass der Laptop Ihnen gehört?",
                    "speaker1EN": "How can you prove that the laptop belongs to you?",
                    "options": [
                        "Ich kann das Kennwort vor Ort eingeben und entsperren.",
                        "Ich fahre gerne mit der U-Bahn.",
                        "Mein Geburtstag ist im März."
                    ],
                    "correct": 0
                },
                "trueFalse": {
                    "statement": "Die Abholung des Laptops ist ohne jegliche Prüfung für jeden sofort möglich.",
                    "statementEN": "Picking up the laptop is possible for anyone immediately without verification.",
                    "correct": false,
                    "explanation": "Falsch: Man muss Ausweis vorlegen und den Laptop mit Passwort entsperren."
                }
            }
        ]
    }
};

    /* ============================================================
       PART 3: 15 NEW WRITING TASKS (a2_write_11 to a2_write_25)
       ============================================================ */
    const NEW_A2_WRITING_TASKS = [
    {
        "id": "a2_write_11",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🔥",
        "title": "Grillparty am See",
        "titleEN": "Barbecue Party at the Lake",
        "situation": "Ihr Arbeitskollege Jonas lädt Sie am Sonntag zu einem Grillnachmittag am See ein. Sie können leider erst später kommen.",
        "situationEN": "Your colleague Jonas invites you to a barbecue afternoon at the lake on Sunday. Unfortunately you can only arrive later.",
        "leitpunkte": [
            {
                "de": "Bedanken Sie sich für die Einladung.",
                "en": "Thank him for the invitation."
            },
            {
                "de": "Erklären Sie, warum Sie erst ab 16 Uhr kommen können.",
                "en": "Explain why you can only arrive from 4 PM."
            },
            {
                "de": "Bieten Sie an, Grillfleisch oder Salate mitzubringen.",
                "en": "Offer to bring barbecue meat or salads."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Lieber Jonas,",
                "Hallo Jonas,"
            ],
            "einleitung": [
                "danke für die Einladung zum Grillen!",
                "ich habe mich sehr über deine Einladung gefreut."
            ],
            "leitpunktePhrases": [
                "Ich kann leider erst ab 16 Uhr kommen, weil ich meiner Mutter helfe.",
                "Vor 16 Uhr schaffe ich es leider nicht, da ich noch einen Termin habe.",
                "Soll ich noch Würstchen oder einen Kartoffelsalat mitbringen?",
                "Ich bringe gerne frisches Baguette und Getränke mit."
            ],
            "schluss": [
                "Bis Sonntag!",
                "Viele Grüße",
                "Bis später!"
            ]
        },
        "sampleAnswer": "Hallo Jonas,\n\nvielen Dank für die Einladung zum Grillen! Ich komme sehr gerne, aber leider erst ab 16 Uhr, weil ich vorher meiner Mutter beim Umzug helfe. Soll ich noch Würstchen oder einen Nudelsalat mitbringen?\n\nBis Sonntag,\nAlex",
        "sampleAnswerEN": "Hello Jonas,\n\nThanks a lot for the invitation to the barbecue! I would love to come, but unfortunately only from 4 PM because before that I am helping my mother move. Should I bring sausages or a pasta salad along?\n\nSee you Sunday,\nAlex",
        "sampleBreakdown": "✅ 35 Wörter (optimal). Alle 3 Leitpunkte präzise erfüllt: Dank für Einladung, Begründung für Verspätung mit 'weil', proaktives Angebot für Essen. Flüssiges A2-Niveau mit passender Anrede und Schluss."
    },
    {
        "id": "a2_write_12",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🚗",
        "title": "Verspätung wegen Stau",
        "titleEN": "Delay Due to Traffic Jam",
        "situation": "Sie sind mit Ihrer Freundin Lisa um 18 Uhr vor dem Restaurant verabredet. Sie stehen aber auf der Autobahn im Stau.",
        "situationEN": "You are meeting your friend Lisa at 6 PM in front of the restaurant, but you are stuck in a traffic jam on the motorway.",
        "leitpunkte": [
            {
                "de": "Informieren Sie Lisa über den Stau.",
                "en": "Inform Lisa about the traffic jam."
            },
            {
                "de": "Sagen Sie, wie viel später Sie ankommen.",
                "en": "Say how much later you will arrive."
            },
            {
                "de": "Bitten Sie Lisa, schon einen Tisch zu bestellen und etwas zu trinken.",
                "en": "Ask Lisa to order a table and have a drink already."
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
                "es tut mir schrecklich leid, aber ich stehe im Stau.",
                "ich schreibe dir schnell aus dem Auto."
            ],
            "leitpunktePhrases": [
                "Wegen eines Unfalls auf der A3 geht es gar nicht vorwärts.",
                "Ich komme ungefähr 30 Minuten später, also gegen 18:30 Uhr.",
                "Geh bitte schon ins Restaurant und bestell dir etwas zu trinken.",
                "Such uns schon einen schönen Platz aus!"
            ],
            "schluss": [
                "Bis gleich!",
                "Gleich da,",
                "Liebe Grüße"
            ]
        },
        "sampleAnswer": "Liebe Lisa,\n\nes tut mir leid: Ich stehe auf der A3 im Stau. Ich komme etwa 30 Minuten später, also gegen 18:30 Uhr. Geh bitte schon ins Restaurant und bestell dir ein Getränk!\n\nBis gleich,\nSam",
        "sampleAnswerEN": "Dear Lisa,\n\nI'm so sorry: I'm stuck in a traffic jam on the A3. I will arrive about 30 minutes late, around 6:30 PM. Please go into the restaurant already and order a drink for yourself!\n\nSee you soon,\nSam",
        "sampleBreakdown": "✅ 29 Wörter. Alle Leitpunkte komplett abgedeckt: Grund genannt (Stau auf A3), genaue Verspätung angegeben (18:30 Uhr), klare Aufforderung (schon reingehen und bestellen)."
    },
    {
        "id": "a2_write_13",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🔑",
        "title": "Wohnungsschlüssel & Blumen gießen",
        "titleEN": "Apartment Key & Watering Plants",
        "situation": "Sie fahren für fünf Tage in den Urlaub. Ihr Nachbar David hat versprochen, Ihre Blumen zu gießen.",
        "situationEN": "You are going on vacation for five days. Your neighbour David promised to water your plants.",
        "leitpunkte": [
            {
                "de": "Sagen Sie, wo Sie den Wohnungsschlüssel hinterlegt haben.",
                "en": "State where you left the apartment key."
            },
            {
                "de": "Erklären Sie, wie oft die Pflanzen Wasser brauchen.",
                "en": "Explain how often the plants need water."
            },
            {
                "de": "Bedanken Sie sich herzlich bei ihm.",
                "en": "Thank him warmly."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Lieber David,",
                "Hallo David,"
            ],
            "einleitung": [
                "ich bin jetzt auf dem Weg zum Flughafen.",
                "vielen Dank, dass du auf meine Wohnung aufpasst."
            ],
            "leitpunktePhrases": [
                "Den Schlüssel habe ich unter die Fußmatte vor meiner Tür gelegt.",
                "Der Schlüssel liegt bei Frau Weber im Erdgeschoss.",
                "Die Balkonpflanzen brauchen bitte nur zweimal in der Woche Wasser.",
                "Ich bringe dir eine Schokolade aus dem Urlaub mit!"
            ],
            "schluss": [
                "Herzlichen Dank und viele Grüße,",
                "Bis nächste Woche,",
                "Tausend Dank,"
            ]
        },
        "sampleAnswer": "Hallo David,\n\nvielen Dank für deine Hilfe! Den Schlüssel habe ich unter die blaue Fußmatte gelegt. Die Blumen auf dem Balkon brauchen bitte nur zweimal etwas Wasser. Ich bringe dir ein Souvenir mit!\n\nHerzliche Grüße,\nMichael",
        "sampleAnswerEN": "Hello David,\n\nThanks a lot for your help! I placed the key under the blue doormat. The flowers on the balcony only need some water twice. I will bring you a souvenir!\n\nWarm regards,\nMichael",
        "sampleBreakdown": "✅ 33 Wörter. Schlüsselort klar benannt (Fußmatte), Gießfrequenz genannt (zweimal), Dankbarkeit ausgedrückt mit Versprechen eines Mitbringsels."
    },
    {
        "id": "a2_write_14",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "📖",
        "title": "Hausaufgaben Deutschkurs",
        "titleEN": "German Course Homework Inquiry",
        "situation": "Sie konnten gestern wegen Zahnschmerzen nicht am Deutschunterricht teilnehmen. Schreiben Sie Ihrer Mitschülerin Sara.",
        "situationEN": "You could not attend German class yesterday due to toothache. Write to your classmate Sara.",
        "leitpunkte": [
            {
                "de": "Erklären Sie den Grund für Ihr Fehlen.",
                "en": "Explain the reason for your absence."
            },
            {
                "de": "Fragen Sie nach den Hausaufgaben für morgen.",
                "en": "Ask about the homework for tomorrow."
            },
            {
                "de": "Bitten Sie um ein Foto der Buchseiten.",
                "en": "Ask for a photo of the textbook pages."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Liebe Sara,",
                "Hallo Sara,"
            ],
            "einleitung": [
                "wie geht es dir?",
                "ich konnte gestern leider nicht zum Kurs kommen."
            ],
            "leitpunktePhrases": [
                "Ich hatte starke Zahnschmerzen und musste zum Zahnarzt.",
                "Welche Grammatikübungen haben wir als Hausaufgabe auf?",
                "Kannst du mir bitte ein Foto von Seite 45 im Kursbuch schicken?",
                "Wir sehen uns morgen im Unterricht."
            ],
            "schluss": [
                "Vielen Dank und bis morgen,",
                "Liebe Grüße,",
                "Bis dann,"
            ]
        },
        "sampleAnswer": "Liebe Sara,\n\nich war gestern leider nicht im Deutschkurs, weil ich plötzlich starke Zahnschmerzen hatte. Was haben wir als Hausaufgabe auf? Kannst du mir bitte ein Foto von den Buchseiten schicken?\n\nVielen Dank und liebe Grüße,\nMaria",
        "sampleAnswerEN": "Dear Sara,\n\nUnfortunately I was not in German class yesterday because I suddenly had a severe toothache. What do we have as homework? Could you please send me a photo of the book pages?\n\nThanks a lot and best regards,\nMaria",
        "sampleBreakdown": "✅ 31 Wörter. Fehlen begründet ('weil ich starke Zahnschmerzen hatte'), Hausaufgaben nachgefragt, Foto erbeten. Grammatikalisch fehlerfrei."
    },
    {
        "id": "a2_write_15",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🎟️",
        "title": "Konzertkarten übergeben",
        "titleEN": "Handing Over Concert Tickets",
        "situation": "Sie haben zwei Konzertkarten für heute Abend gekauft. Schreiben Sie Ihrem Freund Ben über den Treffpunkt.",
        "situationEN": "You bought two concert tickets for tonight. Write to your friend Ben about the meeting location.",
        "leitpunkte": [
            {
                "de": "Nennen Sie die Uhrzeit und den genauen Treffpunkt.",
                "en": "State the time and exact meeting point."
            },
            {
                "de": "Erinnern Sie ihn an den Personalausweis für den Einlass.",
                "en": "Remind him of his ID card for entry."
            },
            {
                "de": "Schlagen Sie vor, vorher einen Burger zu essen.",
                "en": "Suggest eating a burger beforehand."
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
                "Lieber Ben,"
            ],
            "einleitung": [
                "die Tickets für heute Abend liegen bereit!",
                "ich freue mich schon sehr auf das Konzert."
            ],
            "leitpunktePhrases": [
                "Treffen wir uns um 18:30 Uhr direkt vor dem Haupteingang der Konzerthalle.",
                "Vergiss bitte deinen Ausweis nicht, es gibt eine Alterskontrolle am Eingang.",
                "Wollen wir vorher noch schnell einen Burger bei Hans im Glück essen?",
                "Gib mir kurz Bescheid, ob das passt."
            ],
            "schluss": [
                "Bis heute Abend,",
                "Freue mich,",
                "Viele Grüße"
            ]
        },
        "sampleAnswer": "Hallo Ben,\n\nwollen wir uns um 18:30 Uhr vor der Konzerthalle treffen? Wir könnten vorher noch einen Burger essen gehen. Bitte nimm unbedingt deinen Ausweis für den Einlass mit!\n\nBis heute Abend,\nLukas",
        "sampleAnswerEN": "Hello Ben,\n\nShall we meet at 6:30 PM in front of the concert hall? We could quickly grab a burger beforehand. Please make sure to bring your ID for admission!\n\nSee you tonight,\nLukas",
        "sampleBreakdown": "✅ 29 Wörter. Zeit und Ort genannt (18:30 vor Konzerthalle), Ausweis erwähnt, Essensvorschlag formuliert. Kompakt und prägnant."
    },
    {
        "id": "a2_write_16",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🚲",
        "title": "Fahrrad ausleihen",
        "titleEN": "Borrowing a Bicycle",
        "situation": "Ihr Fahrrad hat einen Platten. Sie möchten am Samstag mit Freunden eine Radtour machen. Schreiben Sie Ihrem Nachbarn Felix.",
        "situationEN": "Your bike has a flat tire. You want to go on a bike tour with friends on Saturday. Write to your neighbour Felix.",
        "leitpunkte": [
            {
                "de": "Schildern Sie das Problem mit Ihrem Fahrrad.",
                "en": "Describe the problem with your bicycle."
            },
            {
                "de": "Fragen Sie, ob Sie sein Zweitrad am Samstag leihen dürfen.",
                "en": "Ask if you may borrow his spare bike on Saturday."
            },
            {
                "de": "Sagen Sie, wann Sie das Rad wieder zurückbringen.",
                "en": "State when you will return the bike."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Lieber Felix,",
                "Hallo Felix,"
            ],
            "einleitung": [
                "kannst du mir vielleicht kurz helfen?",
                "ich habe ein kleines Problem mit meinem Fahrrad."
            ],
            "leitpunktePhrases": [
                "Mein Hinterrad ist platt und die Werkstatt hat geschlossen.",
                "Darf ich mir am Samstag dein zweites Fahrrad für eine Tagestour leihen?",
                "Ich bringe es dir am Samstagabend gegen 20 Uhr wieder geputzt zurück.",
                "Das wäre wirklich eine große Hilfe für mich!"
            ],
            "schluss": [
                "Danke dir,",
                "Viele Grüße,",
                "Bis später,"
            ]
        },
        "sampleAnswer": "Hallo Felix,\n\nmein Fahrrad hat leider einen Platten. Darf ich mir am Samstag dein zweites Fahrrad ausleihen? Ich mache eine kleine Radtour und bringe es dir am Abend gegen 20 Uhr sicher zurück.\n\nVielen Dank,\nDennis",
        "sampleAnswerEN": "Hello Felix,\n\nUnfortunately my bike has a flat tire. May I borrow your second bike on Saturday? I'm doing a small bike tour and will return it safely to you in the evening around 8 PM.\n\nThanks a lot,\nDennis",
        "sampleBreakdown": "✅ 32 Wörter. Platten geschildert, höfliche Leihanfrage für Samstag gestellt, Rückgabezeitpunkt (20 Uhr) versprochen."
    },
    {
        "id": "a2_write_17",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🍲",
        "title": "Gemeinsamer Kochabend",
        "titleEN": "Joint Cooking Evening",
        "situation": "Sie kochen morgen Abend mit Ihrer Freundin Mia zusammen Lasagne. Sprechen Sie die Einkäufe ab.",
        "situationEN": "You are cooking lasagna together with your friend Mia tomorrow evening. Coordinate the grocery shopping.",
        "leitpunkte": [
            {
                "de": "Nennen Sie die Zutaten, die Sie schon zu Hause haben.",
                "en": "Name the ingredients you already have at home."
            },
            {
                "de": "Bitten Sie Mia, Käse und Gemüse einzukaufen.",
                "en": "Ask Mia to buy cheese and vegetables."
            },
            {
                "de": "Bestätigen Sie die Uhrzeit für das Treffen.",
                "en": "Confirm the time for the meetup."
            }
        ],
        "targetWords": {
            "min": 20,
            "max": 35,
            "optimal": "25–30"
        },
        "redemittel": {
            "anrede": [
                "Liebe Mia,",
                "Hallo Mia,"
            ],
            "einleitung": [
                "ich freue mich schon sehr auf unseren Kochabend morgen!",
                "kurze Absprache wegen der Lasagne:"
            ],
            "leitpunktePhrases": [
                "Nudelplatten, Hackfleisch und Tomatensoße habe ich schon daheim.",
                "Könntest du bitte noch geriebenen Käse und frisches Gemüse kaufen?",
                "Bleibt es bei 19 Uhr bei mir in der Wohnung?",
                "Bring gerne auch einen Wein mit, wenn du möchtest."
            ],
            "schluss": [
                "Bis morgen Abend,",
                "Liebe Grüße,",
                "Freu mich auf dich!"
            ]
        },
        "sampleAnswer": "Liebe Mia,\n\nich habe schon Hackfleisch und Tomaten für die Lasagne gekauft. Kannst du bitte noch geriebenen Käse und frisches Gemüse besorgen? Passt es dir morgen weiterhin um 19 Uhr bei mir?\n\nBis morgen,\nClara",
        "sampleAnswerEN": "Dear Mia,\n\nI have already bought ground meat and tomatoes for the lasagna. Could you please get grated cheese and fresh vegetables? Does 7 PM at my place still suit you tomorrow?\n\nSee you tomorrow,\nClara",
        "sampleBreakdown": "✅ 31 Wörter. Alle Punkte erfüllt: eigene Zutaten genannt (Hackfleisch, Tomaten), Mias Einkaufsliste delegiert (Käse, Gemüse), Zeit bestätigt (19 Uhr)."
    },
    {
        "id": "a2_write_18",
        "part": "teil1",
        "partBadge": "Teil 1: Informelle SMS",
        "emoji": "🔄",
        "title": "Schicht tauschen mit Kollegin",
        "titleEN": "Shift Swap with Colleague",
        "situation": "Sie arbeiten im Café und haben am Freitag Spätschicht. Sie müssen aber dringend zum Einwohnermeldeamt.",
        "situationEN": "You work at a café and have a late shift on Friday. However, you urgently need to go to the registration office.",
        "leitpunkte": [
            {
                "de": "Erklären Sie den Grund für Ihren Wunsch.",
                "en": "Explain the reason for your request."
            },
            {
                "de": "Fragen Sie Ihre Kollegin Nina, ob sie mit Ihnen tauschen kann.",
                "en": "Ask your colleague Nina whether she can swap with you."
            },
            {
                "de": "Bieten Sie an, dafür ihre Schicht am Samstag zu übernehmen.",
                "en": "Offer to take over her Saturday shift in return."
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
                "ich brauche bitte einen großen Gefallen von dir.",
                "könntest du mir am Freitag aushelfen?"
            ],
            "leitpunktePhrases": [
                "Ich habe am Freitagnachmittag einen dringenden Termin beim Bürgeramt bekommen.",
                "Könntest du meine Spätschicht von 14 bis 20 Uhr übernehmen?",
                "Dafür übernehme ich sehr gerne deine Frühschicht am Samstag.",
                "Sag mir bitte kurz Bescheid, ob das klappt."
            ],
            "schluss": [
                "Vielen Dank im Voraus,",
                "Liebe Grüße,",
                "Bis morgen im Café,"
            ]
        },
        "sampleAnswer": "Hallo Nina,\n\nich habe am Freitag einen dringenden Termin beim Bürgeramt. Kannst du bitte meine Spätschicht ab 14 Uhr übernehmen? Ich würde dafür sehr gerne deine Schicht am Samstag arbeiten.\n\nVielen Dank und liebe Grüße,\nJulia",
        "sampleAnswerEN": "Hello Nina,\n\nI got an urgent appointment at the citizens' office on Friday. Could you please take over my late shift from 2 PM? In return, I would gladly work your shift on Saturday.\n\nThanks a lot and best regards,\nJulia",
        "sampleBreakdown": "✅ 31 Wörter. Grund dargelegt (Bürgeramt), Tauschbitte präzisiert (ab 14 Uhr), fairer Gegenvorschlag (Samstagsschicht übernehmen)."
    },
    {
        "id": "a2_write_19",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "🦷",
        "title": "Terminabsage beim Zahnarzt",
        "titleEN": "Cancelling Dentist Appointment & Rescheduling",
        "situation": "Sie haben übermorgen um 10 Uhr einen Kontrolltermin in der Zahnarztpraxis Dr. Bergmann. Wegen einer Dienstreise können Sie nicht kommen.",
        "situationEN": "You have a routine check-up appointment at Dr. Bergmann's dental clinic the day after tomorrow at 10 AM. Due to a business trip you cannot make it.",
        "leitpunkte": [
            {
                "de": "Sagen Sie den Termin höflich ab und begründen Sie es.",
                "en": "Politely cancel the appointment and give a reason."
            },
            {
                "de": "Bitten Sie um einen neuen Termin in der nächsten Woche.",
                "en": "Request a new appointment next week."
            },
            {
                "de": "Geben Sie an, an welchen Wochentagen und Uhrzeiten Sie Zeit haben.",
                "en": "Specify on which weekdays and times you are free."
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
                "Sehr geehrtes Praxisteam Dr. Bergmann,"
            ],
            "einleitung": [
                "ich muss meinen Termin am Donnerstag leider absagen.",
                "hiermit möchte ich meinen Untersuchungstermin verschieben."
            ],
            "leitpunktePhrases": [
                "Aufgrund einer kurzfristigen Dienstreise nach Hamburg kann ich den Termin am Donnerstag um 10 Uhr nicht wahrnehmen.",
                "Könnten Sie mir bitte einen Ausweichtermin in der kommenden Woche anbieten?",
                "Ich habe am Dienstag oder Donnerstag jeweils ab 15 Uhr Zeit.",
                "Ich bitte um eine kurze schriftliche Bestätigung per E-Mail."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Herzliche Grüße,"
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nleider muss ich meinen Zahnarzttermin am Donnerstag um 10 Uhr absagen, da ich kurzfristig auf Dienstreise bin. Könnten Sie mir bitte einen neuen Termin nächste Woche geben? Ich habe am Dienstag oder Mittwoch jeweils ab 15 Uhr Zeit.\n\nMit freundlichen Grüßen,\nStefan Becker",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nUnfortunately I must cancel my dental appointment on Thursday at 10 AM, as I have to go on a business trip at short notice. Could you please give me a new appointment next week? I have time on Tuesday or Wednesday from 3 PM onwards.\n\nYours sincerely,\nStefan Becker",
        "sampleBreakdown": "✅ 44 Wörter. Formelle Anrede ('Sehr geehrte Damen und Herren'), Grund mit 'da' logisch erklärt, neuer Zeitraum präzisiert (Di/Mi ab 15 Uhr), korrekte formelle Grußformel."
    },
    {
        "id": "a2_write_20",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "📦",
        "title": "Beschwerde über beschädigtes Paket",
        "titleEN": "Complaint Regarding Damaged Parcel",
        "situation": "Sie haben bei einem Online-Shop ein Kaffeeservice bestellt. Das Paket kam gestern beschädigt an und zwei Tassen sind zerbrochen.",
        "situationEN": "You ordered a coffee set from an online store. The parcel arrived damaged yesterday and two cups are broken.",
        "leitpunkte": [
            {
                "de": "Nennen Sie Bestellnummer und Lieferdatum.",
                "en": "State the order number and date of delivery."
            },
            {
                "de": "Beschreiben Sie den Schaden an den Artikeln.",
                "en": "Describe the damage to the items."
            },
            {
                "de": "Bitten Sie um kostenfreien Ersatz oder Erstattung.",
                "en": "Ask for free replacement or refund."
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
                "Sehr geehrtes Kundenservice-Team,"
            ],
            "einleitung": [
                "ich schreibe Ihnen bezüglich meiner Bestellung Nummer...",
                "leider muss ich eine Beschwerde zu meiner Lieferung einreichen."
            ],
            "leitpunktePhrases": [
                "Gestern habe ich meine Bestellung (Bestellnummer: KS-73910) erhalten.",
                "Beim Öffnen des Kartons habe ich bemerkt, dass zwei Kaffeetassen komplett zerbrochen sind.",
                "Fotos der beschädigten Ware und der Verpackung finden Sie im Anhang.",
                "Ich bitte Sie höflich, mir zwei neue Tassen zuzusenden oder den Betrag zu erstatten."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Vielen Dank für Ihre Hilfe,"
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\ngestern habe ich meine Bestellung (Nr. KS-73910) erhalten. Das Paket war beschädigt und im Karton sind zwei Kaffeetassen zerbrochen. Fotos finden Sie im Anhang. Bitte schicken Sie mir kostenlosen Ersatz oder erstatten Sie mir den Betrag.\n\nMit freundlichen Grüßen,\nLaura Neumann",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nYesterday I received my order (No. KS-73910). The parcel was damaged and inside the box two coffee cups were shattered. Photos are attached. Please send me a free replacement or refund the amount.\n\nYours sincerely,\nLaura Neumann",
        "sampleBreakdown": "✅ 41 Wörter. Perfekt strukturiert mit Referenznummer, Schadensmeldung und klarer Lösungsforderung (Ersatz oder Rückzahlung)."
    },
    {
        "id": "a2_write_21",
        "part": "teil2",
        "partBadge": "Teil 2: Halbformelle E-Mail",
        "emoji": "🤒",
        "title": "Krankmeldung an Sprachschule",
        "titleEN": "Sick Note to Language School",
        "situation": "Sie besuchen einen Intensivdeutschkurs. Wegen einer Grippe können Sie diese Woche nicht am Unterricht teilnehmen.",
        "situationEN": "You are attending an intensive German course. Due to the flu you cannot participate in lessons this week.",
        "leitpunkte": [
            {
                "de": "Informieren Sie Ihre Lehrerin Frau Wagner über Ihre Krankheit.",
                "en": "Inform your teacher Ms. Wagner about your illness."
            },
            {
                "de": "Sagen Sie, wie lange Sie voraussichtlich fehlen.",
                "en": "State how long you will likely be absent."
            },
            {
                "de": "Kündigen Sie ein ärztliches Attest an und fragen Sie nach den Übungen.",
                "en": "Announce a medical certificate and ask for exercises."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrte Frau Wagner,",
                "Liebe Frau Wagner,"
            ],
            "einleitung": [
                "leider muss ich mich für diese Woche krankmelden.",
                "ich kann diese Woche nicht am Unterricht teilnehmen."
            ],
            "leitpunktePhrases": [
                "Ich habe hohes Fieber und der Arzt hat mir strenge Bettruhe verordnet.",
                "Ich werde voraussichtlich bis einschließlich Freitag fehlen.",
                "Das ärztliche Attest sende ich Ihnen als PDF-Anhang mit.",
                "Könnten Sie mir bitte mitteilen, welche Kapitel Sie diese Woche im Kursbuch bearbeiten?"
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Herzliche Grüße,"
            ]
        },
        "sampleAnswer": "Sehr geehrte Frau Wagner,\n\nleider kann ich diese Woche nicht am Deutschunterricht teilnehmen, weil ich eine schwere Grippe mit Fieber habe. Der Arzt hat mich bis Freitag krankgeschrieben. Mein Attest hängt dieser Mail an. Könnten Sie mir bitte kurz schreiben, welche Übungen wir machen?\n\nMit freundlichen Grüßen,\nTarek Mansour",
        "sampleAnswerEN": "Dear Ms. Wagner,\n\nUnfortunately I cannot attend German classes this week because I have severe flu with fever. The doctor signed me off until Friday. My medical note is attached to this email. Could you please write to me briefly which exercises we do?\n\nYours sincerely,\nTarek Mansour",
        "sampleBreakdown": "✅ 43 Wörter. Höfliche Anrede, Krankheitsgrund mit Dauer präzise dargelegt, Attest erwähnt und Unterrichtsstoff erfragt."
    },
    {
        "id": "a2_write_22",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "🏢",
        "title": "Wohnungsbesichtigung anfragen",
        "titleEN": "Apartment Viewing Request",
        "situation": "Sie haben auf einem Online-Portal eine 2-Zimmer-Wohnung in Berlin gesehen. Schreiben Sie an die Hausverwaltung Weber.",
        "situationEN": "You saw a 2-room apartment in Berlin on an online portal. Write to property management Weber.",
        "leitpunkte": [
            {
                "de": "Stellen Sie sich kurz vor (Beruf und Personenanzahl).",
                "en": "Introduce yourself briefly (profession & number of occupants)."
            },
            {
                "de": "Erklären Sie Ihr Interesse an der Wohnung.",
                "en": "Explain your interest in the apartment."
            },
            {
                "de": "Bitten Sie um einen Termin zur Wohnungsbesichtigung.",
                "en": "Request an appointment for an apartment viewing."
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
                "Sehr geehrte Hausverwaltung Weber,"
            ],
            "einleitung": [
                "mit großem Interesse habe ich Ihre Anzeige für die 2-Zimmer-Wohnung gelesen.",
                "ich interessiere mich sehr für das Wohnungsangebot."
            ],
            "leitpunktePhrases": [
                "Mein Name ist Daniel Cruz, ich bin 29 Jahre alt und arbeite als festangestellter Ingenieur.",
                "Ich suche allein eine ruhige Wohnung in zentraler Lage.",
                "Gerne würde ich die Wohnung persönlich besichtigen.",
                "Über eine Einladung zu einem Besichtigungstermin würde ich mich sehr freuen."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Ich freue mich auf Ihre Rückmeldung,"
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nich interessiere mich sehr für Ihre 2-Zimmer-Wohnung in der Kantstraße. Ich bin 29 Jahre alt, Nichtraucher und arbeite als Ingenieur mit unbefristetem Vertrag. Ich suche allein eine Wohnung. Wäre eine Besichtigung am Wochenende möglich? Alle Unterlagen liegen bereit.\n\nMit freundlichen Grüßen,\nDaniel Cruz",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nI am very interested in your 2-room apartment on Kantstraße. I am 29 years old, a non-smoker, and work as an engineer with a permanent contract. I am looking for an apartment on my own. Would a viewing be possible at the weekend? All documents are ready.\n\nYours sincerely,\nDaniel Cruz",
        "sampleBreakdown": "✅ 44 Wörter. Vorbildliche Vorstellung (Beruf, Vertrag, Nichtraucher), konkrete Terminanfrage, seriöser Eindruck."
    },
    {
        "id": "a2_write_23",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "🏖️",
        "title": "Urlaubsantrag beim Vorgesetzten",
        "titleEN": "Vacation Request to Supervisor",
        "situation": "Sie möchten im Mai vier Tage Urlaub nehmen, um Ihre Familie im Ausland zu besuchen. Schreiben Sie an Ihre Chefin Frau Lehmann.",
        "situationEN": "You would like to take four days of leave in May to visit your family abroad. Write to your manager Ms. Lehmann.",
        "leitpunkte": [
            {
                "de": "Nennen Sie den genauen Urlaubszeitraum.",
                "en": "State the exact vacation period."
            },
            {
                "de": "Erklären Sie, wer Sie während Ihrer Abwesenheit vertritt.",
                "en": "Explain who is covering for you during your absence."
            },
            {
                "de": "Bitten Sie um die Genehmigung des Urlaubs.",
                "en": "Request approval of the vacation."
            }
        ],
        "targetWords": {
            "min": 30,
            "max": 50,
            "optimal": "35–45"
        },
        "redemittel": {
            "anrede": [
                "Sehr geehrte Frau Lehmann,",
                "Guten Tag Frau Lehmann,"
            ],
            "einleitung": [
                "ich möchte für den kommenden Monat Urlaub beantragen.",
                "hiermit reiche ich meinen Urlaubsantrag ein."
            ],
            "leitpunktePhrases": [
                "Ich möchte gerne vom 12. bis zum 15. Mai vier Tage Jahresurlaub nehmen.",
                "Mein Kollege Herr Schmidt hat sich bereit erklärt, meine Aufgaben zu übernehmen.",
                "Alle dringenden Projekte werde ich vor meiner Abreise abschließen.",
                "Ich freue mich über Ihre Genehmigung im Personalportal."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Vielen Dank und herzliche Grüße,"
            ]
        },
        "sampleAnswer": "Sehr geehrte Frau Lehmann,\n\nich möchte gerne vom 12. bis zum 15. Mai vier Tage Urlaub nehmen, um meine Familie zu besuchen. Mein Kollege Herr Schmidt übernimmt in dieser Zeit freundlicherweise meine Vertretung. Alle aktuellen Aufgaben schließe ich vorher ab. Bitte genehmigen Sie meinen Antrag.\n\nMit freundlichen Grüßen,\nArun Patel",
        "sampleAnswerEN": "Dear Ms. Lehmann,\n\nI would like to take four days of vacation from May 12th to 15th to visit my family. My colleague Mr. Schmidt has kindly agreed to cover for me during this time. I will complete all current tasks beforehand. Please approve my application.\n\nYours sincerely,\nArun Patel",
        "sampleBreakdown": "✅ 43 Wörter. Klar formulierter Zeitraum, Vertretung namentlich benannt, Verantwortungsbewusstsein demonstriert ('schließe vorher ab')."
    },
    {
        "id": "a2_write_24",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "💪",
        "title": "Kündigung Fitnessstudio",
        "titleEN": "Gym Membership Cancellation",
        "situation": "Sie ziehen in eine andere Stadt um und müssen Ihre Mitgliedschaft im Fitnessstudio 'FitPlus' fristgerecht kündigen.",
        "situationEN": "You are moving to another city and need to terminate your gym membership at 'FitPlus' in due time.",
        "leitpunkte": [
            {
                "de": "Kündigen Sie die Mitgliedschaft unter Angabe Ihrer Kundennummer.",
                "en": "Cancel the membership stating your customer number."
            },
            {
                "de": "Nennen Sie den Grund (Umzug in eine andere Stadt).",
                "en": "State the reason (relocation to another city)."
            },
            {
                "de": "Bitten Sie um eine schriftliche Kündigungsbestätigung.",
                "en": "Request a written cancellation confirmation."
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
                "Sehr geehrtes FitPlus-Team,"
            ],
            "einleitung": [
                "hiermit kündige ich meinen Mitgliedsvertrag fristgerecht.",
                "ich kündige mein Abonnement zum nächstmöglichen Zeitpunkt."
            ],
            "leitpunktePhrases": [
                "Meine Mitgliedsnummer lautet FP-99201.",
                "Da ich zum 1. Juli aus beruflichen Gründen nach Hamburg umziehe, kann ich das Studio nicht mehr nutzen.",
                "Eine Kopie meiner neuen Meldebescheinigung lege ich bei.",
                "Bitte senden Sie mir eine schriftliche Bestätigung mit dem Beendigungsdatum."
            ],
            "schluss": [
                "Mit freundlichen Grüßen,",
                "Vielen Dank für die gute Betreuung,"
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nhiermit kündige ich meinen Vertrag (Mitgliedsnummer: FP-99201) zum 30. Juni. Der Grund ist mein beruflicher Umzug nach Hamburg. Eine Kopie der Abmeldung liegt bei. Bitte senden Sie mir eine schriftliche Bestätigung der Kündigung mit dem genauen Datum.\n\nMit freundlichen Grüßen,\nOliver Grau",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nI hereby cancel my contract (membership number: FP-99201) as of June 30th. The reason is my professional relocation to Hamburg. A copy of the deregistration is enclosed. Please send me written confirmation of the cancellation with the exact date.\n\nYours sincerely,\nOliver Grau",
        "sampleBreakdown": "✅ 41 Wörter. Klassisches deutsches Kündigungsschreiben mit Mitgliedsnummer, Kündigungstermin, Begründung und Bitte um schriftliche Bestätigung."
    },
    {
        "id": "a2_write_25",
        "part": "teil2",
        "partBadge": "Teil 2: Formelle E-Mail",
        "emoji": "💼",
        "title": "Anfrage Praktikumsplatz",
        "titleEN": "Internship Inquiry at Hotel",
        "situation": "Sie möchten im Sommer ein zweiwöchiges Praktikum an der Rezeption eines Hotels absolvieren. Schreiben Sie an Hotel 'Lindenhof'.",
        "situationEN": "You want to complete a two-week internship at a hotel reception in the summer. Write to Hotel 'Lindenhof'.",
        "leitpunkte": [
            {
                "de": "Erklären Sie Ihr Interesse an dem Praktikum.",
                "en": "Explain your interest in the internship."
            },
            {
                "de": "Nennen Sie den gewünschten Zeitraum (z. B. Juli oder August).",
                "en": "State the desired period (e.g. July or August)."
            },
            {
                "de": "Beschreiben Sie Ihre Sprachkenntnisse (Deutsch und Englisch).",
                "en": "Describe your language skills (German and English)."
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
                "Sehr geehrte Frau Direktorin Sommer,"
            ],
            "einleitung": [
                "ich bewerbe mich hiermit um ein zweiwöchiges Orientierungspraktikum an Ihrer Hotelrezeption.",
                "ich interessiere mich sehr für den Beruf des Hotelfachmanns."
            ],
            "leitpunktePhrases": [
                "Ich würde das Praktikum gerne im Zeitraum vom 1. bis 15. Juli absolvieren.",
                "Ich spreche fließend Englisch und habe vor kurzem das Deutsch-Zertifikat A2 erworben.",
                "Im Umgang mit internationalen Gästen bin ich sehr freundlich und hilfsbereit.",
                "Meinen Lebenslauf und mein Zeugnis finden Sie im Anhang."
            ],
            "schluss": [
                "Über eine positive Antwort würde ich mich freuen.",
                "Mit freundlichen Grüßen,"
            ]
        },
        "sampleAnswer": "Sehr geehrte Damen und Herren,\n\nich interessiere mich sehr für ein zweiwöchiges Praktikum an Ihrer Rezeption im Juli oder August. Ich lerne derzeit intensiv Deutsch (Stufe A2) und spreche verhandlungssicher Englisch. Ich arbeite sehr gerne im Kundenservice. Über die Möglichkeit eines persönlichen Gesprächs würde ich mich freuen.\n\nMit freundlichen Grüßen,\nKiran Rao",
        "sampleAnswerEN": "Dear Sir or Madam,\n\nI am very interested in a two-week internship at your front desk in July or August. I am currently learning German intensively (Level A2) and speak fluent English. I really enjoy working in customer service. I would be delighted at the opportunity for an interview.\n\nYours sincerely,\nKiran Rao",
        "sampleBreakdown": "✅ 44 Wörter. Praktikumsziel klar definiert, Zeitraum genannt (Juli/August), Sprachkenntnisse belegt (Deutsch A2, Englisch), professioneller Gesamteindruck."
    }
];

    /* ============================================================
       PART 4: 45 NEW SPEAKING PRACTICE SESSIONS
       - 15 Teil 1 Cue Cards (card_9 to card_23)
       - 15 Teil 2 Monologues (mono_7 to mono_21) with Malayalam Phonetics
       - 15 Teil 3 Planning Scenarios (plan_3 to plan_17)
       ============================================================ */
    const NEW_A2_SPEAKING_DATA = {
        teil1_cue_cards: [
    {
        "id": "card_9",
        "theme": "Urlaub & Reisen",
        "themeEN": "Vacation & Travel",
        "keyword": "Koffer",
        "keywordEN": "suitcase",
        "emoji": "🧳",
        "modelQuestion": "Wie viele Koffer nehmen Sie normalerweise mit in den Urlaub?",
        "modelQuestionEN": "How many suitcases do you normally take on vacation?",
        "modelAnswer": "Ich reise meistens nur mit einem großen Koffer und einem kleinen Handgepäck.",
        "modelAnswerEN": "I usually travel with only one large suitcase and a small piece of hand luggage.",
        "tip": "Verwenden Sie eine W-Frage mit 'Wie viele...' oder eine Ja/Nein-Frage mit 'Packen Sie...'."
    },
    {
        "id": "card_10",
        "theme": "Kleidung & Mode",
        "themeEN": "Clothing & Fashion",
        "keyword": "Winterjacke",
        "keywordEN": "winter jacket",
        "emoji": "🧥",
        "modelQuestion": "Welche Farbe hat Ihre warme Winterjacke?",
        "modelQuestionEN": "What colour is your warm winter jacket?",
        "modelAnswer": "Meine Winterjacke ist dunkelblau und hält bei Schnee sehr warm.",
        "modelAnswerEN": "My winter jacket is dark blue and keeps me very warm in snow.",
        "tip": "Fragen Sie nach der Farbe, dem Preis oder dem Kaufort."
    },
    {
        "id": "card_11",
        "theme": "Verkehr & Mobilität",
        "themeEN": "Transport & Mobility",
        "keyword": "Fahrradhelm",
        "keywordEN": "bicycle helmet",
        "emoji": "🚴",
        "modelQuestion": "Tragen Sie beim Fahrradfahren immer einen Fahrradhelm?",
        "modelQuestionEN": "Do you always wear a bicycle helmet when cycling?",
        "modelAnswer": "Ja, aus Sicherheitsgründen setze ich immer einen Helm auf.",
        "modelAnswerEN": "Yes, for safety reasons I always put on a helmet.",
        "tip": "Verwenden Sie das Verb 'tragen' oder 'aufsetzen' mit Akkusativ."
    },
    {
        "id": "card_12",
        "theme": "Essen & Trinken",
        "themeEN": "Food & Drink",
        "keyword": "Lieblingsgericht",
        "keywordEN": "favourite dish",
        "emoji": "🍲",
        "modelQuestion": "Was ist Ihr persönliches deutsches Lieblingsgericht?",
        "modelQuestionEN": "What is your personal favourite German dish?",
        "modelAnswer": "Ich esse am liebsten schwäbische Käsespätzle mit Röstzwiebeln.",
        "modelAnswerEN": "I like eating Swabian Käsespätzle with fried onions best.",
        "tip": "Klassische W-Frage mit 'Was ist Ihr Lieblingsgericht?'."
    },
    {
        "id": "card_13",
        "theme": "Gesundheit & Sport",
        "themeEN": "Health & Sports",
        "keyword": "Sportverein",
        "keywordEN": "sports club",
        "emoji": "🏃",
        "modelQuestion": "Sind Sie Mitglied in einem Sportverein oder Fitnessstudio?",
        "modelQuestionEN": "Are you a member of a sports club or fitness gym?",
        "modelAnswer": "Ja, ich spiele seit zwei Jahren Badminton in einem lokalen Sportverein.",
        "modelAnswerEN": "Yes, I have been playing badminton in a local sports club for two years.",
        "tip": "Nutzen Sie 'Mitglied sein in...' mit Dativ."
    },
    {
        "id": "card_14",
        "theme": "Familie & Feste",
        "themeEN": "Family & Celebrations",
        "keyword": "Geburtstagskuchen",
        "keywordEN": "birthday cake",
        "emoji": "🎂",
        "modelQuestion": "Backen Sie Ihren Geburtstagskuchen selbst oder kaufen Sie ihn?",
        "modelQuestionEN": "Do you bake your birthday cake yourself or do you buy it?",
        "modelAnswer": "Meistens backt meine Familie einen leckeren Schokoladenkuchen für mich.",
        "modelAnswerEN": "Usually my family bakes a delicious chocolate cake for me.",
        "tip": "Verwenden Sie eine Oder-Frage zur Auswahl."
    },
    {
        "id": "card_15",
        "theme": "Einkaufen & Geld",
        "themeEN": "Shopping & Money",
        "keyword": "Kreditkarte",
        "keywordEN": "credit card",
        "emoji": "💳",
        "modelQuestion": "Bezahlen Sie im Supermarkt lieber bar oder mit Kreditkarte?",
        "modelQuestionEN": "Do you prefer paying cash or by credit card in the supermarket?",
        "modelAnswer": "Ich bezahle fast alles kontaktlos mit meiner Karte oder dem Smartphone.",
        "modelAnswerEN": "I pay almost everything contactlessly with my card or smartphone.",
        "tip": "Achten Sie auf die Präposition: 'mit Karte' oder 'bar'."
    },
    {
        "id": "card_16",
        "theme": "Medien & Internet",
        "themeEN": "Media & Internet",
        "keyword": "Smartphone",
        "keywordEN": "smartphone",
        "emoji": "📱",
        "modelQuestion": "Wie viele Stunden am Tag nutzen Sie Ihr Smartphone?",
        "modelQuestionEN": "How many hours a day do you use your smartphone?",
        "modelAnswer": "Ich nutze mein Smartphone etwa drei Stunden täglich, meistens für Nachrichten.",
        "modelAnswerEN": "I use my smartphone about three hours daily, mostly for news.",
        "tip": "Formulieren Sie eine Zeitfrage mit 'Wie viele Stunden...?'."
    },
    {
        "id": "card_17",
        "theme": "Wohnen & Nachbarschaft",
        "themeEN": "Housing & Neighbourhood",
        "keyword": "Haustiere",
        "keywordEN": "pets",
        "emoji": "🐶",
        "modelQuestion": "Sind Haustiere wie Hunde oder Katzen in Ihrem Haus erlaubt?",
        "modelQuestionEN": "Are pets like dogs or cats permitted in your building?",
        "modelAnswer": "Ja, kleine Haustiere sind bei uns im Mietshaus erlaubt.",
        "modelAnswerEN": "Yes, small pets are permitted in our apartment building.",
        "tip": "Verwenden Sie das Passiv 'sind erlaubt' oder 'darf man halten'."
    },
    {
        "id": "card_18",
        "theme": "Lernen & Ausbildung",
        "themeEN": "Learning & Education",
        "keyword": "Vokabeln",
        "keywordEN": "vocabulary words",
        "emoji": "📝",
        "modelQuestion": "Wie lernen Sie am liebsten neue deutsche Vokabeln?",
        "modelQuestionEN": "How do you prefer to learn new German vocabulary?",
        "modelAnswer": "Ich lerne Vokabeln jeden Tag mit einer praktischen Smartphone-App.",
        "modelAnswerEN": "I learn vocabulary every day using a practical smartphone app.",
        "tip": "Frage mit Fragewort 'Wie...' nach der Methode."
    },
    {
        "id": "card_19",
        "theme": "Wetter & Jahreszeiten",
        "themeEN": "Weather & Seasons",
        "keyword": "Regenschirm",
        "keywordEN": "umbrella",
        "emoji": "☔",
        "modelQuestion": "Haben Sie bei bewölktem Wetter immer einen Regenschirm dabei?",
        "modelQuestionEN": "Do you always carry an umbrella with you in overcast weather?",
        "modelAnswer": "Ja, ich habe immer einen kleinen Taschenschirm in meinem Rucksack.",
        "modelAnswerEN": "Yes, I always have a small pocket umbrella in my backpack.",
        "tip": "Nutzen Sie 'dabeihaben' (trennbares Verb)."
    },
    {
        "id": "card_20",
        "theme": "Kultur & Ausgehen",
        "themeEN": "Culture & Going Out",
        "keyword": "Kino",
        "keywordEN": "cinema",
        "emoji": "🍿",
        "modelQuestion": "Wie oft im Monat gehen Sie ins Kino?",
        "modelQuestionEN": "How many times a month do you go to the cinema?",
        "modelAnswer": "Ich gehe ungefähr einmal im Monat mit Freunden ins Kino.",
        "modelAnswerEN": "I go to the cinema about once a month with friends.",
        "tip": "Fragen Sie mit 'Wie oft...?' nach der Häufigkeit."
    },
    {
        "id": "card_21",
        "theme": "Post & Behörden",
        "themeEN": "Post & Authorities",
        "keyword": "Paket",
        "keywordEN": "parcel / package",
        "emoji": "📫",
        "modelQuestion": "Lassen Sie Online-Pakete zu sich nach Hause oder an eine Packstation liefern?",
        "modelQuestionEN": "Do you have online packages delivered to your home or to a parcel locker?",
        "modelAnswer": "Wenn ich arbeite, lasse ich Pakete meistens an die Packstation liefern.",
        "modelAnswerEN": "When I am working, I usually have packages delivered to the parcel locker.",
        "tip": "Nutzen Sie die Konjunktion 'oder' für eine Alternativfrage."
    },
    {
        "id": "card_22",
        "theme": "Gastronomie & Café",
        "themeEN": "Gastronomy & Café",
        "keyword": "Trinkgeld",
        "keywordEN": "tip / gratuity",
        "emoji": "☕",
        "modelQuestion": "Wie viel Trinkgeld geben Sie normalerweise im Restaurant?",
        "modelQuestionEN": "How much tip do you normally give in a restaurant?",
        "modelAnswer": "In Deutschland gebe ich bei gutem Service rund zehn Prozent Trinkgeld.",
        "modelAnswerEN": "In Germany, I give around ten percent tip for good service.",
        "tip": "Fragen Sie nach dem Prozentsatz oder einem konkreten Betrag."
    },
    {
        "id": "card_23",
        "theme": "Reisen & Sprachen",
        "themeEN": "Travel & Languages",
        "keyword": "Reiseführer",
        "keywordEN": "travel guide (book/app)",
        "emoji": "🗺️",
        "modelQuestion": "Benutzen Sie bei einer Städtereise ein Reisebuch oder eine App?",
        "modelQuestionEN": "Do you use a travel book or an app during a city trip?",
        "modelAnswer": "Ich benutze hauptsächlich Google Maps und Reise-Apps auf meinem Handy.",
        "modelAnswerEN": "I mainly use Google Maps and travel apps on my phone.",
        "tip": "Verwenden Sie das Verb 'benutzen' oder 'verwenden'."
    }
],
        teil2_monologues: [
    {
        "id": "mono_7",
        "title": "Mein Traumurlaub & Reisen",
        "titleEN": "My Dream Vacation & Travel",
        "emoji": "🏖️",
        "cues": [
            {
                "de": "Reiseziel & Land",
                "en": "Destination & Country"
            },
            {
                "de": "Reisezeit & Transport",
                "en": "Travel season & Transport"
            },
            {
                "de": "Aktivitäten vor Ort",
                "en": "Activities on site"
            },
            {
                "de": "Warum mir dieser Ort gefällt",
                "en": "Why I like this place"
            }
        ],
        "sentences": [
            {
                "de": "Mein absolutes Traumreiseziel ist die Schweizer Bergwelt im Sommer.",
                "en": "My absolute dream travel destination is the Swiss mountains in summer.",
                "mal": "മൈൻ അബ്സൊലൂട്ടെസ് ട്രൗംറൈസെത്സീൽ ഇസ്റ്റ് ഡീ ഷ്വൈറ്റ്സർ ബെർഗ്‌വെൽറ്റ് ഇം സോമർ."
            },
            {
                "de": "Am liebsten reise ich mit dem Zug, weil man dabei die schöne Landschaft genießen kann.",
                "en": "I prefer travelling by train because you can enjoy the beautiful scenery along the way.",
                "mal": "അം ലീബ്സ്റ്റൻ റൈസെ ഇഹ് മിറ്റ് ഡെം ത്സുഗ്, വൈൽ മാൻ ദാബൈ ഡീ ഷ്യോനെ ലാൻഡ്‌ഷാഫ്റ്റ് ഗെനീസെൻ കാൻ."
            },
            {
                "de": "Dort wandere ich gerne auf hohe Berge und mache Fotos von Bergseen.",
                "en": "There I like hiking up high mountains and taking photos of mountain lakes.",
                "mal": "ദോർട്ട് വാൻഡെറെ ഇഹ് ഗെർനെ ഔഫ് ഹോഹെ ബെർഗെ ഉണ്ട് മാഹെ ഫോട്ടോസ് ഫോൺ ബെർഗ്‌സീൻ."
            },
            {
                "de": "Abends probiere ich traditionelle Spezialitäten wie Schweizer Käsefondue.",
                "en": "In the evenings I try traditional specialities like Swiss cheese fondue.",
                "mal": "ആബെൻഡ്സ് പ്രൊബീയറെ ഇഹ് ട്രാഡിഷൊണെല്ലെ സ്പെഷ്യാലിറ്റേറ്റൻ വീ ഷ്വൈറ്റ്സർ കേസെഫോണ്ട്യു."
            },
            {
                "de": "Die frische Bergluft und die Ruhe helfen mir sehr beim Entspannen.",
                "en": "The fresh mountain air and the tranquility help me a lot to relax.",
                "mal": "ഡീ ഫ്രിഷെ ബെർഗ്‌ലുഫ്റ്റ് ഉണ്ട് ഡീ റൂഹെ ഹെൽഫെൻ മിർ സേർ ബൈം എൻറ്റ്‌സ്പാനെൻ."
            },
            {
                "de": "In der Zukunft möchte ich jedes Jahr mindestens eine Woche in den Alpen verbringen.",
                "en": "In the future I want to spend at least one week in the Alps every year.",
                "mal": "ഇൻ ഡെർ ത്സുകൂൻഫ്റ്റ് മ്യോഹ്റ്റെ ഇഹ് യേഡെസ് യാർ മിൻഡെസ്റ്റൻസ് ഐനെ വോഹെ ഇൻ ഡെൻ ആൽപെൻ ഫെർബ്രിങ്ങെൻ."
            }
        ]
    },
    {
        "id": "mono_8",
        "title": "Mein Lieblingsessen & Kochen",
        "titleEN": "My Favourite Food & Cooking",
        "emoji": "🍲",
        "cues": [
            {
                "de": "Was ich am liebsten esse",
                "en": "What I like to eat most"
            },
            {
                "de": "Wie oft ich selbst koche",
                "en": "How often I cook myself"
            },
            {
                "de": "Typische Zutaten & Gewürze",
                "en": "Typical ingredients & spices"
            },
            {
                "de": "Kochen für Freunde oder Familie",
                "en": "Cooking for friends or family"
            }
        ],
        "sentences": [
            {
                "de": "Mein absolutes Lieblingsgericht ist ein würziges Curry mit Basmatireis.",
                "en": "My absolute favourite dish is a spicy curry with basmati rice.",
                "mal": "മൈൻ അബ്സൊലൂട്ടെസ് ലീബ്ലിങ്സ്ഗെരിഹ്റ്റ് ഇസ്റ്റ് ഐൻ വ്യൂർറ്റ്സിഗെസ് കറി മിറ്റ് ബസ്മതിറൈസ്."
            },
            {
                "de": "Ich koche fast jeden Abend frisch nach der Arbeit in meiner Küche.",
                "en": "I cook fresh in my kitchen almost every evening after work.",
                "mal": "ഇഹ് കോഹെ ഫാസ്റ്റ് യേഡെൻ ആബെൻഡ് ഫ്രിഷ് നാഹ് ഡെർ അർബൈറ്റ് ഇൻ മൈനർ ക്യുഹെ."
            },
            {
                "de": "Für mein Curry verwende ich viel frisches Gemüse, Knoblauch, Ingwer und Kokosmilch.",
                "en": "For my curry I use plenty of fresh vegetables, garlic, ginger, and coconut milk.",
                "mal": "ഫ്യൂർ മൈൻ കറി ഫെർവെൻഡെ ഇഹ് ഫീൽ ഫ്രിഷെസ് ഗെമ്യൂസെ, ക്നോബ്ലൗഹ്, ഇങ്ഗ്വർ ഉണ്ട് കൊക്കോസ്മിൽഹ്."
            },
            {
                "de": "Am Wochenende lade ich gerne Freunde zu einem gemeinsamen Abendessen ein.",
                "en": "On the weekend I like inviting friends over for a shared dinner.",
                "mal": "അം വോഹെൻഎൻഡെ ലാഡെ ഇഹ് ഗെർനെ ഫ്രോയ്ൻഡെ ത്സു ഐനെം ഗെമൈൻസാമെൻ ആബെൻഡ്എസ്സെൻ ഐൻ."
            },
            {
                "de": "Kochen macht mir Spaß und ist für mich die beste Methode gegen Alltagsstress.",
                "en": "Cooking is fun for me and is the best method against everyday stress.",
                "mal": "കോഹെൻ മാഹ്റ്റ് മിർ ഷ്പാസ് ഉണ്ട് ഇസ്റ്റ് ഫ്യൂർ മിഹ് ഡീ ബെസ്റ്റെ മെഥോഡെ ഗേഗെൻ ആൽതാഗ്സ്സ്ട്രെസ്."
            },
            {
                "de": "In Deutschland habe ich auch gelernt, leckere Kartoffelsuppen zuzubereiten.",
                "en": "In Germany I also learned to prepare delicious potato soups.",
                "mal": "ഇൻ ഡോയ്ച്ച്‌ലാൻഡ് ഹാബെ ഇഹ് ഔഹ് ഗെലേൺറ്റ്, ലെക്കെറെ കാർട്ടോഫൽസുപ്പെൻ ത്സുത്സുബെറൈറ്റെൻ."
            }
        ]
    },
    {
        "id": "mono_9",
        "title": "Mein Arbeitsweg & Verkehr",
        "titleEN": "My Commute & Transport",
        "emoji": "🚆",
        "cues": [
            {
                "de": "Verkehrsmittel zur Arbeit",
                "en": "Transport used for work"
            },
            {
                "de": "Dauer des Weges",
                "en": "Duration of commute"
            },
            {
                "de": "Was ich unterwegs mache",
                "en": "What I do on the way"
            },
            {
                "de": "Vorteile und Probleme",
                "en": "Advantages and issues"
            }
        ],
        "sentences": [
            {
                "de": "Ich fahre jeden Werktag mit der U-Bahn und dem Bus zu meiner Arbeitsstelle.",
                "en": "I travel by underground train and bus to my workplace every weekday.",
                "mal": "ഇഹ് ഫാറെ യേഡെൻ വേർക്ക്താഗ് മിറ്റ് ഡെർ ഉ-ബാൻ ഉണ്ട് ഡെം ബുസ് ത്സു മൈനർ അർബൈറ്റ്സ്ഷ്ടെല്ലെ."
            },
            {
                "de": "Mein gesamter Weg von Tür zu Tür dauert etwa 35 Minuten.",
                "en": "My entire journey from door to door takes about 35 minutes.",
                "mal": "മൈൻ ഗെസാമ്റ്റർ വേഗ് ഫോൺ ട്യൂർ ത്സു ട്യൂർ ദൗവേർട്ട് എത്‌വാ ഫ്യുൻഫ്‌ഉണ്ട്‌ഡ്രൈസിഹ് മിനൂട്ടെൻ."
            },
            {
                "de": "In der Bahn höre ich meistens deutsche Podcasts oder lese ein Buch.",
                "en": "On the train I mostly listen to German podcasts or read a book.",
                "mal": "ഇൻ ഡെർ ബാൻ ഹ്യോറെ ഇഹ് മൈസ്റ്റൻസ് ഡോയ്ച്ചെ പോഡ്കാസ്റ്റ്സ് ഒഡെർ ലേസെ ഐൻ ബുഹ്."
            },
            {
                "de": "Die öffentlichen Verkehrsmittel sind umweltfreundlich und meistens pünktlich.",
                "en": "Public transport is environmentally friendly and mostly punctual.",
                "mal": "ഡീ യോഫെന്റ്‌ലിഹെൻ ഫെർകേർസ്മിറ്റൽ സിന്റ് ഉംവെൽറ്റ്‌ഫ്രോയ്ൻഡ്‌ലിഹ് ഉണ്ട് മൈസ്റ്റൻസ് പ്യുങ്ക്ട്ലിഹ്."
            },
            {
                "de": "Manchmal gibt es jedoch Verspätungen im Berufsverkehr wegen Baustellen.",
                "en": "Sometimes, however, there are delays in rush hour traffic due to construction sites.",
                "mal": "മാൻഹ്‌മാൽ ഗിബ്റ്റ് എസ് യേഡോഹ് ഫെർഷ্পേറ്റുൻഗെൻ ഇം ബെറൂഫ്‌സ്ഫെർകേർ വേഗെൻ ബൗഷ്ടെല്ലെൻ."
            },
            {
                "de": "Bei schönem Frühlingswetter nehme ich ab und zu auch das Fahrrad.",
                "en": "In nice spring weather I occasionally take the bicycle too.",
                "mal": "ബൈ ഷ്യോനെം ഫ്ര്യൂലിങ്സ്‌വെറ്റർ നേമെ ഇഹ് അബ് ഉണ്ട് ത്സു ഔഹ് ദാസ് ഫാറാഡ്."
            }
        ]
    },
    {
        "id": "mono_10",
        "title": "Meine Hobbys & Freizeit",
        "titleEN": "My Hobbies & Leisure Time",
        "emoji": "🎨",
        "cues": [
            {
                "de": "Wichtigste Hobbys",
                "en": "Most important hobbies"
            },
            {
                "de": "Wann und wie oft",
                "en": "When and how often"
            },
            {
                "de": "Mit wem zusammen",
                "en": "With whom together"
            },
            {
                "de": "Warum mir das wichtig ist",
                "en": "Why this matters to me"
            }
        ],
        "sentences": [
            {
                "de": "In meiner Freizeit beschäftige ich mich sehr gerne mit Fotografie und Sport.",
                "en": "In my free time I really enjoy doing photography and sports.",
                "mal": "ഇൻ മൈനർ ഫ്രൈത്സൈറ്റ് ബെഷെഫ്റ്റിഗെ ഇഹ് മിഹ് സേർ ഗെർനെ മിറ്റ് ഫോട്ടോഗ്രാഫി ഉണ്ട് ഷ്പോർട്ട്."
            },
            {
                "de": "Zweimal in der Woche gehe ich nach Feierabend im Stadtpark joggen.",
                "en": "Twice a week after work I go jogging in the city park.",
                "mal": "ത്സ్వൈമാൽ ഇൻ ഡെർ വോഹെ ഗേഹെ ഇഹ് നാഹ് ഫയർആബെൻഡ് ഇം ഷ്ടാറ്റ്പാർക്ക് ജോഗൻ."
            },
            {
                "de": "Am Wochenende nehme ich meine Kamera und mache Ausflüge in die Natur.",
                "en": "On the weekend I take my camera and go on day trips into nature.",
                "mal": "അം വോഹെൻഎൻഡെ നേമെ ഇഹ് മൈനെ കാമെറ ഉണ്ട് മാഹെ ഔസ്ഫ്ല്യൂഗെ ഇൻ ഡീ നാട്ടൂർ."
            },
            {
                "de": "Oft treffe ich mich mit Freunden, um neue Restaurants und Cafés auszuprobieren.",
                "en": "Often I meet up with friends to try out new restaurants and cafes.",
                "mal": "ഓഫ്റ്റ് ട്രെഫെ ഇഹ് മിഹ് മിറ്റ് ഫ്രോയ്ൻഡെൻ, ഉം നോയെ റെസ്റ്റോറന്റ്സ് ഉണ്ട് കഫേസ് ഔസ്ത്സുപ്രൊബീയറെൻ."
            },
            {
                "de": "Hobbys sind für mich wichtig, um neue Energie für die Arbeitswoche zu tanken.",
                "en": "Hobbies are important to me to recharge energy for the working week.",
                "mal": "ഹോബീസ് സിന്റ് ഫ്യൂർ മിഹ് വിഹ്റ്റിഹ്, ഉം നോയെ എനർജി ഫ്യൂർ ഡീ അർബൈറ്റ്സ്വോഹെ ത്സു ടാങ്കെൻ."
            },
            {
                "de": "Nächstes Jahr möchte ich außerdem Gitarrenunterricht nehmen.",
                "en": "Next year I would also like to take guitar lessons.",
                "mal": "നേഹ്സ്റ്റെസ് യാർ മ്യോഹ്റ്റെ ഇഹ് ഔസർഡേം ഗിത്താറൻഉണ്ടെർറിഹ്റ്റ് നേമെൻ."
            }
        ]
    },
    {
        "id": "mono_11",
        "title": "Meine Schulzeit & Fächer",
        "titleEN": "My School Days & Subjects",
        "emoji": "🎒",
        "cues": [
            {
                "de": "Wo und wann ich zur Schule ging",
                "en": "Where and when I went to school"
            },
            {
                "de": "Lieblingsfächer & Noten",
                "en": "Favourite subjects & grades"
            },
            {
                "de": "Schulfreunde & Pausen",
                "en": "School friends & break times"
            },
            {
                "de": "Erinnerungen an Lehrer",
                "en": "Memories of teachers"
            }
        ],
        "sentences": [
            {
                "de": "Ich bin in meiner Heimatstadt zur Schule gegangen und habe dort zwölf Jahre gelernt.",
                "en": "I went to school in my hometown and studied there for twelve years.",
                "mal": "ഇഹ് ബിൻ ഇൻ മൈനർ ഹൈമാറ്റ്ഷ്ടാറ്റ് ത്സൂർ ഷൂലെ ഗെഗാങ്ങെൻ ഉണ്ട് ഹാബെ ദോർട്ട് ത്സ్వ്യോൾഫ് യാരെ ഗെലേൺറ്റ്."
            },
            {
                "de": "Meine absoluten Lieblingsfächer waren Mathematik, Physik und Englisch.",
                "en": "My absolute favourite subjects were mathematics, physics, and English.",
                "mal": "മൈനെ അബ്സൊലൂട്ടെൻ ലീബ്ലിങ്സ്ഫെഹ്‌ഹർ വാറെൻ മാതെമാറ്റിക്, ഫിസിക് ഉണ്ട് ഇംഗ്ലിഷ്."
            },
            {
                "de": "Geschichte fand ich dagegen manchmal etwas langweilig, weil man viele Daten lernen musste.",
                "en": "History, on the other hand, I found somewhat boring because one had to learn many dates.",
                "mal": "ഗെഷിഹ്റ്റെ ഫാൻഡ് ഇഹ് ദാഗേഗെൻ മാൻഹ്‌മാൽ എത്‌വാസ് ലാങ്‌വൈലിഹ്, വൈൽ മാൻ ഫീലെ ദാറ്റൻ ലേർണെൻ മുസ്സ്ടെ."
            },
            {
                "de": "In den großen Pausen habe ich mit meinen Klassenkameraden Fußball auf dem Schulhof gespielt.",
                "en": "In the big breaks I played football with my classmates on the schoolyard.",
                "mal": "ഇൻ ഡെൻ ഗ്രോസെൻ പൗസെൻ ഹാബെ ഇഹ് മിറ്റ് മൈനൻ ക്ലാസ്സെൻകാമെറാഡെൻ ഫൂസ്ബാൾ ഔഫ് ഡെം ഷൂൽഹോഫ് ഗെഷ്പീൽറ്റ്."
            },
            {
                "de": "Mein Mathematiklehrer war sehr streng, aber er hat uns alles geduldig erklärt.",
                "en": "My maths teacher was very strict, but he explained everything to us patiently.",
                "mal": "മൈൻ മാതെമാറ്റിക്ലേറെർ വാർ സേർ ഷ്ട്രെങ്, ആബർ എയർ ഹാറ്റ് ഉൻസ് അല്ലെസ് ഗെഡുൽഡിഹ് എർക്ലേർട്ട്."
            },
            {
                "de": "Ich habe noch heute engen Kontakt zu zwei guten Freunden aus meiner Schulzeit.",
                "en": "Even today I still keep in close contact with two good friends from my school days.",
                "mal": "ഇഹ് ഹാബെ നോഹ് ഹൊയ്റ്റെ എങ്ങെൻ കോൺടാക്റ്റ് ത്സു ത്സ్వൈ ഗൂട്ടെൻ ഫ്രോയ്ൻഡെൻ ഔസ് മൈനർ ഷൂൽത്സൈറ്റ്."
            }
        ]
    },
    {
        "id": "mono_12",
        "title": "Mein Lieblingsgeschäft & Einkaufen",
        "titleEN": "My Favourite Shop & Shopping",
        "emoji": "🛍️",
        "cues": [
            {
                "de": "Art des Geschäfts",
                "en": "Type of shop"
            },
            {
                "de": "Was man dort kaufen kann",
                "en": "What one can buy there"
            },
            {
                "de": "Atmosphäre & Service",
                "en": "Atmosphere & service"
            },
            {
                "de": "Online versus Geschäft vor Ort",
                "en": "Online vs local store"
            }
        ],
        "sentences": [
            {
                "de": "Mein Lieblingsgeschäft ist eine kleine, gemütliche Buchhandlung in der Fußgängerzone.",
                "en": "My favourite shop is a small, cosy bookstore in the pedestrian zone.",
                "mal": "മൈൻ ലീബ്ലിങ്സ്ഗെഷെഫ്റ്റ് ഇസ്റ്റ് ഐനെ ക്ലൈനെ, ഗെമ്യൂട്ട്‌ലിഹെ ബുഹ്ഹാൻഡ്‌ലുങ് ഇൻ ഡെർ ഫൂസ്ഗെങ്ങർത്സോണെ."
            },
            {
                "de": "Dort findet man Romane, Reiseführer, Bildbände und schöne Notizbücher.",
                "en": "There you find novels, travel guides, illustrated books, and beautiful notebooks.",
                "mal": "ദോർട്ട് ഫിൻഡെറ്റ് മാൻ റൊമാനെ, റൈസെഫ്യൂറർ, ബിൽഡ്ബെൻഡെ ഉണ്ട് ഷ്യോനെ നോട്ടിത്സ്ബ്യൂഹർ."
            },
            {
                "de": "Die Buchhändler sind immer sehr freundlich und geben tolle Leseempfehlungen.",
                "en": "The booksellers are always very friendly and give great reading recommendations.",
                "mal": "ഡീ ബുഹ്ഹെൻഡ്‌ലർ സിന്റ് ഇമ്മർ സേർ ഫ്രോയ്ൻഡ്‌ലിഹ് ഉണ്ട് ഗേബെൻ ടോല്ലെ ലേസെഎംപ്ഫേലുൻഗെൻ."
            },
            {
                "de": "Man kann sich dort mit einer Tasse Kaffee hinsetzen und in Ruhe stöbern.",
                "en": "One can sit down there with a cup of coffee and browse in peace.",
                "mal": "മാൻ കാൻ സിഹ് ദോർട്ട് മിറ്റ് ഐനർ ടാസ്സെ കഫേ ഹിൻസെറ്റ്സെൻ ഉണ്ട് ഇൻ റൂഹെ ഷ്ട്യോബെർൺ."
            },
            {
                "de": "Obwohl ich manche Dinge online bestelle, kaufe ich Bücher am liebsten im Laden.",
                "en": "Although I order some things online, I prefer buying books in the store.",
                "mal": "ഓബ്വോൾ ഇഹ് മാൻഹെ ദിങ്ങെ ഓൺ‌ലൈൻ ബെഷ്ടെല്ലെ, കൗഫെ ഇഹ് ബ്യൂഹർ അം ലീബ്സ്റ്റൻ ഇം ലാഡെൻ."
            },
            {
                "de": "Ich unterstütze gerne die lokalen Einzelhändler in meiner Nachbarschaft.",
                "en": "I gladly support the local independent retailers in my neighbourhood.",
                "mal": "ഇഹ് ഉണ്ടെർഷ്ട്യുറ്റ്സെ ഗെർനെ ഡീ ലൊക്കാലെൻ ഐൻസെൽഹെൻഡ്‌ലർ ഇൻ മൈനർ നാഹ്ബാർഷാഫ്റ്റ്."
            }
        ]
    },
    {
        "id": "mono_13",
        "title": "Meine Gesundheit & Fitness",
        "titleEN": "My Health & Fitness",
        "emoji": "🏃",
        "cues": [
            {
                "de": "Sportliche Aktivitäten",
                "en": "Sports activities"
            },
            {
                "de": "Gesunde Ernährung",
                "en": "Healthy nutrition"
            },
            {
                "de": "Schlaf & Erholung",
                "en": "Sleep & recovery"
            },
            {
                "de": "Vorsorge & Arztbesuche",
                "en": "Checkups & doctor visits"
            }
        ],
        "sentences": [
            {
                "de": "Für meine körperliche Fitness gehe ich dreimal pro Woche ins Fitnessstudio.",
                "en": "For my physical fitness I go to the gym three times per week.",
                "mal": "ഫ്യൂർ മൈനെ ക്യോർപ്പർലിഹെ ഫിറ്റ്നസ് ഗേഹെ ഇഹ് ഡ്രൈമാൽ പ്രൊ വോഹെ ഇൻസ് ഫിറ്റ്നസ്സ്റ്റുഡിയോ."
            },
            {
                "de": "Dort mache ich eine Kombination aus Krafttraining und dreißig Minuten Ausdauer auf dem Laufband.",
                "en": "There I do a combination of weight training and thirty minutes of endurance on the treadmill.",
                "mal": "ദോർട്ട് മാഹെ ഇഹ് ഐനെ കോമ്പിനാത്സിയോൺ ഔസ് ക്രാഫ്റ്റ് ട്രെയിനിങ് ഉണ്ട് ഡ്രൈസിഹ് മിനൂട്ടെൻ ഔസ്ദൗവേർ ഔഫ് ഡെം ലൗഫ്ബാൻഡ്."
            },
            {
                "de": "Außerdem achte ich auf eine ausgewogene Ernährung mit viel Gemüse, Obst und ausreichend Wasser.",
                "en": "Furthermore, I pay attention to a balanced diet with lots of vegetables, fruit, and enough water.",
                "mal": "ഔസർഡേം ആഹ്റ്റെ ഇഹ് ഔഫ് ഐനെ ഔസ്ഗെവോഗെനെ എർനേറുങ് മിറ്റ് ഫീൽ ഗെമ്യൂസെ, ഓബ്സ്റ്റ് ഉണ്ട് ഔസ്റൈഹെൻഡ് വാസ്സർ."
            },
            {
                "de": "Ich versuche, jede Nacht mindestens sieben bis acht Stunden erholsam zu schlafen.",
                "en": "I try to sleep restfully for at least seven to eight hours every night.",
                "mal": "ഇഹ് ഫെർസൂഹെ, യേഡെ നാഹ്ത് മിൻഡെസ്റ്റൻസ് സീബെൻ ബിസ് ആഹ്ത് ഷ്ടുൻഡെൻ എർഹോൾസാം ത്സു ഷ്ളാഫെൻ."
            },
            {
                "de": "Einmal im Jahr gehe ich zu einer Routineuntersuchung beim Zahnarzt und Hausarzt.",
                "en": "Once a year I go for a routine check-up at the dentist and general practitioner.",
                "mal": "ഐൻമാൽ ഇം യാർ ഗേഹെ ഇഹ് ത്സു ഐനർ റൂട്ടീനെഉണ്ടെർസൂഹുങ് ബൈം ത്സാൻആർട്ട്സ്റ്റ് ഉണ്ട് ഹൗസ്ആർട്ട്സ്റ്റ്."
            },
            {
                "de": "Ein gesunder Lebensstil gibt mir täglich viel Schwung und gute Laune.",
                "en": "A healthy lifestyle gives me plenty of energy and good mood every day.",
                "mal": "ഐൻ ഗെസുൻഡെർ ലേബെൻസ്ഷ്ടീൽ ഗിബ്റ്റ് മിർ ടേഗ്ലിഹ് ഫീൽ ഷ്വുങ് ഉണ്ട് ഗൂട്ടെ ലൗനെ."
            }
        ]
    },
    {
        "id": "mono_14",
        "title": "Meine Heimatstadt & Kultur",
        "titleEN": "My Hometown & Culture",
        "emoji": "🏙️",
        "cues": [
            {
                "de": "Lage & Einwohner",
                "en": "Location & population"
            },
            {
                "de": "Berühmte Sehenswürdigkeiten",
                "en": "Famous sights"
            },
            {
                "de": "Klima & Natur",
                "en": "Climate & nature"
            },
            {
                "de": "Was Besucher erleben sollten",
                "en": "What visitors should experience"
            }
        ],
        "sentences": [
            {
                "de": "Meine Heimatstadt liegt im Süden Indiens und ist für ihre historische Architektur bekannt.",
                "en": "My hometown is located in southern India and is known for its historic architecture.",
                "mal": "മൈനെ ഹൈമാറ്റ്ഷ്ടാറ്റ് ലീഗ്റ്റ് ഇം സ്യൂഡെൻ ഇൻഡിയൻസ് ഉണ്ട് ഇസ്റ്റ് ഫ്യൂർ ഈരെ ഹിസ്റ്റോറിഷെ അർഹിറ്റെക്റ്റൂർ ബെകാൻ്റ്."
            },
            {
                "de": "Es gibt dort prächtige alte Paläste, bunte Märkte und sehr freundliche Menschen.",
                "en": "There are splendid ancient palaces, colourful markets, and very friendly people there.",
                "mal": "എസ് ഗിബ്റ്റ് ദോർട്ട് പ്രെഹ്റ്റിഗെ ആൽറ്റെ പലാസ്റ്റെ, ബുണ്ടെ മെർക്റ്റെ ഉണ്ട് സേർ ഫ്രോയ്ൻഡ്‌ലിഹെ മെൻഷെൻ."
            },
            {
                "de": "Das Klima ist das ganze Jahr über warm, mit einer grünen Monsunzeit im Sommer.",
                "en": "The climate is warm throughout the year, with a green monsoon season in summer.",
                "mal": "ദാസ് ക്ലീമാ ഇസ്റ്റ് ദാസ് ഗാൻത്സെ യാർ യൂബർ വാം, മിറ്റ് ഐനർ ഗ്ര്യൂനെൻ മോൺസൂൻത്സൈറ്റ് ഇം സോമർ."
            },
            {
                "de": "Besucher sollten unbedingt das traditionelle Streetfood und die Gewürzmärkte besuchen.",
                "en": "Visitors should definitely visit the traditional street food spots and spice markets.",
                "mal": "ബെസൂഹർ സോൾട്ടെൻ ഉൺബെഡിങ്റ്റ് ദാസ് ട്രാഡിഷൊണെല്ലെ സ്ട്രീറ്റ്ഫുഡ് ഉണ്ട് ഡീ ഗെവ്യൂർത്സ്മെർക്റ്റെ ബെസൂഹെൻ."
            },
            {
                "de": "Obwohl ich jetzt in Deutschland lebe, vermisse ich oft die lebendige Atmosphäre meiner Stadt.",
                "en": "Although I now live in Germany, I often miss the lively atmosphere of my city.",
                "mal": "ഓബ്വോൾ ഇഹ് യെറ്റ്സ്റ്റ് ഇൻ ഡോയ്ച്ച്‌ലാൻഡ് ലേബെ, ഫെർമിസ്സെ ഇഹ് ഓഫ്റ്റ് ഡീ ലേബെൻഡിഗെ അറ്റ്മോസ്ഫേരെ മൈനർ ഷ്ടാറ്റ്."
            },
            {
                "de": "Ich zeige deutschen Freunden immer gerne Fotos und erzähle ihnen von meiner Heimat.",
                "en": "I always like showing German friends photos and telling them about my homeland.",
                "mal": "ഇഹ് ത്സൈഗെ ഡോയ്ച്ചെൻ ഫ്രോയ്ൻഡെൻ ഇമ്മർ ഗെർനെ ഫോട്ടോസ് ഉണ്ട് എർത്സേലെ ഈനെൻ ഫോൺ മൈനർ ഹൈമാറ്റ്."
            }
        ]
    },
    {
        "id": "mono_15",
        "title": "Ein wichtiges Familienfest",
        "titleEN": "An Important Family Celebration",
        "emoji": "🎉",
        "cues": [
            {
                "de": "Name & Bedeutung des Festes",
                "en": "Name & meaning of festival"
            },
            {
                "de": "Traditionelle Vorbereitungen",
                "en": "Traditional preparations"
            },
            {
                "de": "Kleidung & Festmahl",
                "en": "Clothing & festive meal"
            },
            {
                "de": "Warum mir das Fest gefällt",
                "en": "Why I enjoy the celebration"
            }
        ],
        "sentences": [
            {
                "de": "Das wichtigste Fest für meine Familie ist das jährliche Neujahrsfest.",
                "en": "The most important festival for my family is the annual New Year celebration.",
                "mal": "ദാസ് വിഹ്റ്റിഗ്സ്റ്റെ ഫെസ്റ്റ് ഫ്യൂർ മൈനെ ഫാമിലിയെ ഇസ്റ്റ് ദാസ് യേർലിഹെ നോയ്യാർസ്ഫെസ്റ്റ്."
            },
            {
                "de": "Vor dem Fest putzen wir das ganze Haus gründlich und dekorieren alles festlich mit Lichtern.",
                "en": "Before the festival we clean the entire house thoroughly and decorate everything festively with lights.",
                "mal": "ഫോർ ഡെം ഫെസ്റ്റ് പുറ്റ്സെൻ വീർ ദാസ് ഗാൻത്സെ ഹൗസ് ഗ്ര്യുൻഡ്‌ലിഹ് ഉണ്ട് ഡെകൊറീയറെൻ അല്ലെസ് ഫെസ്റ്റ്‌ലിഹ് മിറ്റ് ലിഹ്റ്റെർൺ."
            },
            {
                "de": "Am Festtag ziehen alle Familienmitglieder traditionelle, elegante Kleidung an.",
                "en": "On the festival day, all family members put on traditional, elegant clothing.",
                "mal": "അം ഫെസ്റ്റ്‌താഗ് ത്സീഹെൻ അല്ലെ ഫാമിലിയെൻമിറ്റ്ഗ്ലീഡെർ ട്രാഡിഷൊണെല്ലെ, എലെഗാന്റെ ക്ലൈഡുങ് ആൻ."
            },
            {
                "de": "Wir kochen viele köstliche Gerichte und backen süßes Gebäck für Verwandte und Nachbarn.",
                "en": "We cook many delicious dishes and bake sweet pastries for relatives and neighbours.",
                "mal": "വീർ കോഹെൻ ഫീലെ ക്യോസ്റ്റ്‌ലിഹെ ഗെരിഹ്റ്റെ ഉണ്ട് ബാക്കെൻ സ്യൂസെസ് ഗെബെക്ക് ഫ്യൂർ ഫെർവാൻഡ്റ്റെ ഉണ്ട് നാഹ്ബാർൺ."
            },
            {
                "de": "Kinder bekommen Geschenke, Münzen und neue Kleider geschenkt.",
                "en": "Children receive gifts, coins, and new clothes as presents.",
                "mal": "കിൻഡെർ ബെകോമ്മെൻ ഗെഷെങ്കെ, മ്യൂൺത്സെൻ ഉണ്ട് നോയെ ക്ലൈഡെർ ഗെഷെങ്ക്ട്."
            },
            {
                "de": "Ich liebe dieses Fest, weil die ganze Familie zusammenkommt und zusammen lacht.",
                "en": "I love this festival because the whole family comes together and laughs together.",
                "mal": "ഇഹ് ലീബെ ഡീസെസ് ഫെസ്റ്റ്, വൈൽ ഡീ ഗാൻത്സെ ഫാമിലിയെ ത്സുസാമ്മെൻകോംറ്റ് ഉണ്ട് ത്സുസാമ്മെൻ ലാഹ്റ്റ്."
            }
        ]
    },
    {
        "id": "mono_16",
        "title": "Mein Smartphone & Medien",
        "titleEN": "My Smartphone & Digital Media",
        "emoji": "📱",
        "cues": [
            {
                "de": "Wichtigste Apps im Alltag",
                "en": "Most important apps daily"
            },
            {
                "de": "Nutzung für Beruf & Lernen",
                "en": "Usage for work & study"
            },
            {
                "de": "Kontakt zu Familie im Ausland",
                "en": "Contact with family abroad"
            },
            {
                "de": "Digitale Pausen (Digital Detox)",
                "en": "Digital pauses / detox"
            }
        ],
        "sentences": [
            {
                "de": "Mein Smartphone ist ein unverzichtbarer Begleiter in meinem modernen Alltag.",
                "en": "My smartphone is an indispensable companion in my modern everyday life.",
                "mal": "മൈൻ സ്മാർട്ട്ഫോൺ ഇസ്റ്റ് ഐൻ ഉൺഫെർത്സിഹ്ത്ബാരെർ ബെഗ്ലൈറ്റർ ഇൻ മൈനെം മോഡേർണെൻ ആൽതാഗ്."
            },
            {
                "de": "Ich nutze es täglich für die Navigation mit Karten, Fahrkarten und das Online-Banking.",
                "en": "I use it daily for navigation with maps, tickets, and online banking.",
                "mal": "ഇഹ് നുറ്റ്സെ എസ് ടേഗ്ലിഹ് ഫ്യൂർ ഡീ നാവിഗാത്സിയോൺ മിറ്റ് കാർട്ടെൻ, ഫാർകാർട്ടെൻ ഉണ്ട് ദാസ് ഓൺ‌ലൈൻ-ബാങ്കിങ്."
            },
            {
                "de": "Besonders wichtig sind Messenger-Apps, um mit meiner Familie in Indien per Video zu telefonieren.",
                "en": "Messenger apps are especially important to make video calls with my family in India.",
                "mal": "ബെസോണ്ടേർസ് വിഹ്റ്റിഹ് സിന്റ് മെസ്സഞ്ചർ-ആപ്സ്, ഉം മിറ്റ് മൈനർ ഫാമിലിയെ ഇൻ ഇൻഡിയൻ പെർ വീഡിയോ ത്സു ടെലിഫോണിയറെൻ."
            },
            {
                "de": "Außerdem lerne ich jeden Tag unterwegs mit Sprach-Apps neue deutsche Vokabeln.",
                "en": "In addition, I learn new German vocabulary on the go every day using language apps.",
                "mal": "ഔസർഡേം ലേർണെ ഇഹ് യേഡെൻ ടാഗ് ഉണ്ടെർവേഗ്സ് മിറ്റ് ഷ്പ്രാഹ്-ആപ്സ് നോയെ ഡോയ്ച്ചെ വൊക്കാബെൽൻ."
            },
            {
                "de": "Abends vor dem Schlafen versuche ich jedoch, das Handy zur Seite zu legen.",
                "en": "In the evening before sleeping, however, I try to put the mobile phone aside.",
                "mal": "ആബെൻഡ്സ് ഫോർ ഡെം ഷ്ളാഫെൻ ഫെർസൂഹെ ഇഹ് യേഡോഹ്, ദാസ് ഹാൻഡി ത്സൂർ സൈറ്റെ ത്സു ലേഗെൻ."
            },
            {
                "de": "Man braucht auch bildschirmfreie Zeiten, um gut zur Ruhe zu kommen.",
                "en": "One also needs screen-free periods to settle down and find peace.",
                "mal": "മാൻ ബ്രൗഹ്റ്റ് ഔഹ് ബിൽഡ്ഷിർംഫ്രൈയെ ത്സൈറ്റെൻ, ഉം ഗുട്ട് ത്സൂർ റൂഹെ ത്സു കോമ്മെൻ."
            }
        ]
    },
    {
        "id": "mono_17",
        "title": "Mein Deutschkurs & Lernstrategien",
        "titleEN": "My German Course & Study Strategies",
        "emoji": "📚",
        "cues": [
            {
                "de": "Kursniveau & Stundenplan",
                "en": "Course level & schedule"
            },
            {
                "de": "Was mir leicht oder schwer fällt",
                "en": "What I find easy or hard"
            },
            {
                "de": "Lernmethoden außerhalb des Kurses",
                "en": "Study methods outside class"
            },
            {
                "de": "Mein persönliches Sprachziel",
                "en": "My personal language goal"
            }
        ],
        "sentences": [
            {
                "de": "Ich besuche derzeit viermal pro Woche einen intensiven Deutschkurs auf Stufe A2.",
                "en": "I am currently attending an intensive German course at level A2 four times a week.",
                "mal": "ഇഹ് ബെസൂഹെ ഡെർത്സൈറ്റ് ഫീയർമാൽ പ്രൊ വോഹെ ഐനെൻ ഇന്റെൻസീവെൻ ഡോയ്ച്ച്കൂഴ്സ് ഔഫ് ഷ്ടൂഫെ ആ-ത്സ్వൈ."
            },
            {
                "de": "Das Sprechen und Verstehen fällt mir leicht, aber die Grammatik und die Artikel sind anspruchsvoll.",
                "en": "Speaking and understanding come easily to me, but grammar and articles are demanding.",
                "mal": "ദാസ് ഷ്പ്രെഹെൻ ഉണ്ട് ഫെർഷ്ടേഹെൻ ഫെൽറ്റ് മിർ ലൈഹ്റ്റ്, ആബർ ഡീ ഗ്രാമാറ്റിക് ഉണ്ട് ഡീ ആർട്ടിക്കൽ സിന്റ് അൻഷ്പ്രുഹ്‌സ്ഫോൾ."
            },
            {
                "de": "Um mein Hörverstehen zu trainieren, schaue ich deutsche Nachrichten und Serien mit Untertiteln.",
                "en": "To train my listening comprehension, I watch German news and series with subtitles.",
                "mal": "ഉം മൈൻ ഹ്യോർഫെർഷ്ടേഹെൻ ത്സു ട്രെയിനീറെൻ, ഷൗവെ ഇഹ് ഡോയ്ച്ചെ നാഹ്റിഹ്റ്റെൻ ഉണ്ട് സീരിയൻ മിറ്റ് ഉണ്ടെർടീറ്റൽൻ."
            },
            {
                "de": "Im Supermarkt oder beim Bäcker versuche ich immer, auf Deutsch zu bestellen.",
                "en": "In the supermarket or at the bakery I always try to order in German.",
                "mal": "ഇം സൂപ്പർമാർക്ക്റ്റ് ഒഡെർ ബൈം ബെക്കർ ഫെർസൂഹെ ഇഹ് ഇമ്മർ, ഔഫ് ഡോയ്ച്ച് ത്സു ബെഷ്ടെല്ലെൻ."
            },
            {
                "de": "Meine Lehrerin korrigiert unsere Aussprache und ermutigt uns stets zum freien Sprechen.",
                "en": "My teacher corrects our pronunciation and always encourages us to speak freely.",
                "mal": "മൈനെ ലേറെറിൻ കോറിഗീയർട്ട് ഉൺസെരെ ഔസ്ഷ്പ്രാഹെ ഉണ്ട് എർമൂട്ടിഗ്റ്റ് ഉൻസ് ഷ്ടേറ്റ്സ് ത്സും ഫ്രൈയെൻ ഷ്പ്രെഹെൻ."
            },
            {
                "de": "Mein Ziel ist es, die Goethe-Zertifikat A2 Prüfung mit einer guten Note zu bestehen.",
                "en": "My goal is to pass the Goethe Certificate A2 exam with a good grade.",
                "mal": "മൈൻ ത്സീൽ ഇസ്റ്റ് എസ്, ഡീ ഗ്യോഥെ-സെർട്ടിഫിക്കാറ്റ് ആ-ത്സ్వൈ പcheckpoint ഫ്ര്യൂഫുങ് മിറ്റ് ഐനർ ഗൂട്ടെൻ നോട്ടെ ത്സു ബെഷ്ടേഹെൻ."
            }
        ]
    },
    {
        "id": "mono_18",
        "title": "Meine Traumwohnung",
        "titleEN": "My Dream Apartment",
        "emoji": "🏡",
        "cues": [
            {
                "de": "Lage & Umgebung",
                "en": "Location & surroundings"
            },
            {
                "de": "Größe & Zimmeranzahl",
                "en": "Size & number of rooms"
            },
            {
                "de": "Balkon oder Garten",
                "en": "Balcony or garden"
            },
            {
                "de": "Einrichtung & Traumküche",
                "en": "Furnishings & dream kitchen"
            }
        ],
        "sentences": [
            {
                "de": "Meine Traumwohnung wäre eine helle 3-Zimmer-Wohnung in einer ruhigen Seitenstraße.",
                "en": "My dream apartment would be a bright 3-room apartment in a quiet side street.",
                "mal": "മൈനെ ട്രൗംവോഹ്‌നുങ് വേരെ ഐനെ ഹെല്ലെ ഡ്രൈ-ത്സിമ്മർ-വോഹ്‌നുങ് ഇൻ ഐനർ റൂഹിഗെൻ സൈറ്റെൻഷ്ട്രാസ്സെ."
            },
            {
                "de": "Sie sollte rund 80 Quadratmeter groß sein und große Fenster nach Süden haben.",
                "en": "It should be around 80 square metres in size and have large south-facing windows.",
                "mal": "സീ സോൾട്ടെ റുണ്ട് ആഹ്ത്സിഹ് ക്വാഡ്രാറ്റ്മീറ്റർ ഗ്രോസ് സൈൻ ഉണ്ട് ഗ്രോസെ ഫെൻസ്റ്റർ നാഹ് സ്യൂഡെൻ ഹാബെൻ."
            },
            {
                "de": "Ein sonniger Balkon mit Platz für viele grüne Pflanzen und einen Tisch wäre fantastisch.",
                "en": "A sunny balcony with space for lots of green plants and a table would be fantastic.",
                "mal": "ഐൻ സോണിഗെർ ബാൽക്കൺ മിറ്റ് പ്ലാറ്റ്സ് ഫ്യൂർ ഫീലെ ഗ്ര്യൂനെ പ്ഫ്ലാന്റ്സെൻ ഉണ്ട് ഐനെൻ ടിഷ് വേരെ ഫന്റാസ്റ്റിഷ്."
            },
            {
                "de": "In der Küche wünsche ich mir eine moderne Kochinsel und eine praktische Spülmaschine.",
                "en": "In the kitchen I wish for a modern cooking island and a practical dishwasher.",
                "mal": "ഇൻ ഡെർ ക്യുഹെ വ്യൂൺഷെ ഇഹ് മിർ ഐനെ മോഡേർണെ കോഹ്ഇൻസെൽ ഉണ്ട് ഐനെ പ്രാക്റ്റിഷെ ഷ്പ്യൂൽമാഷീനെ."
            },
            {
                "de": "Wichtig ist mir auch eine gute Anbindung an Busse und Bahnen zum Arbeitsplatz.",
                "en": "Also important to me is good connectivity to buses and trains to the workplace.",
                "mal": "വിഹ്റ്റിഹ് ഇസ്റ്റ് മിർ ഔഹ് ഐനെ ഗൂട്ടെ അൻബിൻഡുങ് ആൻ ബുസ്സെ ഉണ്ട് ബാനെൻ ത്സും അർബൈറ്റ്സ്പ്ലാറ്റ്സ്."
            },
            {
                "de": "Ich spare fleißig, um mir diesen Traum in den nächsten Jahren erfüllen zu können.",
                "en": "I am saving diligently in order to fulfill this dream in the coming years.",
                "mal": "ഇഹ് ഷ്പാറെ ഫ്ലൈസിഹ്, ഉം മിർ ഡീസെൻ ട്രൗം ഇൻ ഡെൻ നേഹ്സ്റ്റെൻ യാരെൻ എർഫ്യുള്ളെൻ ത്സു ക്യൊന്നെൻ."
            }
        ]
    },
    {
        "id": "mono_19",
        "title": "Haustiere in meinem Leben",
        "titleEN": "Pets in My Life",
        "emoji": "🐶",
        "cues": [
            {
                "de": "Mein Verhältnis zu Tieren",
                "en": "My relationship to animals"
            },
            {
                "de": "Haustiere in meiner Kindheit",
                "en": "Pets in my childhood"
            },
            {
                "de": "Pflege & Verantwortung",
                "en": "Care & responsibility"
            },
            {
                "de": "Mein Wunsch für die Zukunft",
                "en": "My wish for the future"
            }
        ],
        "sentences": [
            {
                "de": "Ich liebe Tiere sehr und bin schon als Kind mit einem Hund aufgewachsen.",
                "en": "I love animals very much and grew up with a dog already as a child.",
                "mal": "ഇഹ് ലീബെ ടീയരെ സേർ ഉണ്ട് ബിൻ ഷോൺ അൽസ് കിൻഡ് മിറ്റ് ഐനെം ഹുണ്ട് ഔഫ്ഗെവാഹ്സെൻ."
            },
            {
                "de": "Unser Golden Retriever hieß Bruno und hat jeden Tag mit mir im Garten gespielt.",
                "en": "Our Golden Retriever was called Bruno and played with me in the garden every day.",
                "mal": "ഉൺസെർ ഗോൾഡൻ റിട്രീവർ ഹീസ് ബ്രൂണോ ഉണ്ട് ഹാറ്റ് യേഡെൻ ടാഗ് മിറ്റ് മിർ ഇം ഗാർട്ടെൻ ഗെഷ്പീൽറ്റ്."
            },
            {
                "de": "Ein Haustier bedeutet viel Freude, aber auch eine große tägliche Verantwortung.",
                "en": "A pet means lots of joy, but also a big daily responsibility.",
                "mal": "ഐൻ ഹൗസ്ടീയർ ബെഡോയ്റ്റെറ്റ് ഫീൽ ഫ്രോയ്ഡെ, ആബർ ഔഹ് ഐനെ ഗ്രോസെ ടേഗ്ലിഹെ ഫെർആന്റ്വോർട്ടുങ്."
            },
            {
                "de": "Man muss regelmäßig spazieren gehen, füttern und regelmäßig zum Tierarzt.",
                "en": "One must regularly go for walks, feed them, and visit the vet regularly.",
                "mal": "മാൻ മുസ്സ് റേഗൽമേസിഹ് ഷ്പാത്സീയറെൻ ഗേഹെൻ, ഫ്യുട്ടെർൺ ഉണ്ട് റേഗൽമേസിഹ് ത്സും ടീയർആർട്ട്സ്റ്റ്."
            },
            {
                "de": "In meiner aktuellen Mietwohnung sind Hunde leider nicht gestattet.",
                "en": "In my current rental flat dogs are unfortunately not permitted.",
                "mal": "ഇൻ മൈനർ അക്റ്റുവേല്ലെൻ മീറ്റ്വോഹ്‌നുങ് സിന്റ് ഹുണ്ടെ ലൈഡെർ നിഹ്റ്റ് ഗെഷ്ടാറ്റെറ്റ്."
            },
            {
                "de": "Wenn ich später in eine größere Wohnung mit Garten ziehe, möchte ich wieder einen Hund adoptieren.",
                "en": "When I move into a larger flat with a garden later, I want to adopt a dog again.",
                "mal": "വെൻ ഇഹ് ഷ്പേറ്റർ ഇൻ ഐനെ ഗ്ര്യോസെരെ വോഹ്‌നുങ് മിറ്റ് ഗാർട്ടെൻ ത്സീഹെ, മ്യോഹ്റ്റെ ഇഹ് വീഡെർ ഐനെൻ ഹുണ്ട് അഡോപ്റ്റീയറെൻ."
            }
        ]
    },
    {
        "id": "mono_20",
        "title": "Ein unvergesslicher Tag mit Freunden",
        "titleEN": "An Unforgettable Day with Friends",
        "emoji": "🎉",
        "cues": [
            {
                "de": "Anlass & Vorbereitung",
                "en": "Occasion & preparation"
            },
            {
                "de": "Wohin wir gefahren sind",
                "en": "Where we travelled to"
            },
            {
                "de": "Was wir gemeinsam erlebt haben",
                "en": "What we experienced together"
            },
            {
                "de": "Warum dieser Tag besonders war",
                "en": "Why this day was special"
            }
        ],
        "sentences": [
            {
                "de": "Letzten Sommer haben wir an einem sonnigen Samstag einen Ausflug an den Chiemsee gemacht.",
                "en": "Last summer on a sunny Saturday we went on a day trip to Lake Chiemsee.",
                "mal": "ലെറ്റ്സ്റ്റെൻ സോമർ ഹാബെൻ വീർ ആൻ ഐനെം സോണിഗെൻ സാംസ്താഗ് ഐനെൻ ഔസ്ഫ്ലൂഗ് ആൻ ഡെൻ ഹീംസീ ഗെമാഹ്റ്റ്."
            },
            {
                "de": "Wir sind früh um 8 Uhr mit dem Zug losgefahren und hatten Picknickkörbe dabei.",
                "en": "We left early at 8 AM by train and had picnic baskets with us.",
                "mal": "വീർ സിന്റ് ഫ്ര്യൂ ഉം ആഹ്ത് ഉഹ്ർ മിറ്റ് ഡെം ത്സുഗ് ലോസ്ഗെഫാറെൻ ഉണ്ട് ഹാട്ടെൻ പിക്നിക്ക്ക്യോർബെ ദാബൈ."
            },
            {
                "de": "Dort haben wir Fahrräder gemietet und sind einmal rund um den See gefahren.",
                "en": "There we rented bikes and cycled once right around the lake.",
                "mal": "ദോർട്ട് ഹാബെൻ വീർ ഫാറേഡെർ ഗെമീറ്റെറ്റ് ഉണ്ട് സിന്റ് ഐൻമാൽ റുണ്ട് ഉം ഡെൻ സീ ഗെഫാറെൻ."
            },
            {
                "de": "Nachmittags sind wir im kühlen See geschwommen und haben uns gesonnt.",
                "en": "In the afternoon we swam in the cool lake and sunbathed.",
                "mal": "നാഹ്മിറ്റാഗ്സ് സിന്റ് വീർ ഇം ക്യൂലെൻ സീ ഗെഷ്വോമ്മെൻ ഉണ്ട് ഹാബെൻ ഉൻസ് ഗെസോൺറ്റ്."
            },
            {
                "de": "Abends saßen wir in einem traditionellen Biergarten am Ufer und aßen Brezeln.",
                "en": "In the evening we sat in a traditional beer garden on the shore and ate pretzels.",
                "mal": "ആബെൻഡ്സ് സാസെൻ വീർ ഇൻ ഐനെം ട്രാഡിഷൊണെല്ലെൻ ബീയർഗാർട്ടെൻ അം ഊഫെർ ഉണ്ട് ആസെൻ ബ്രേത്സെൽൻ."
            },
            {
                "de": "Dieser Tag war wunderbar, weil wir viel gelacht und zusammen entspannt haben.",
                "en": "This day was wonderful because we laughed a lot and relaxed together.",
                "mal": "ഡീസെർ ടാഗ് വാർ വുൺഡെർബാർ, വൈൽ വീർ ഫീൽ ഗെലാഹ്റ്റ് ഉണ്ട് ത്സുസാമ്മെൻ എൻറ്റ്‌സ്പാൻഡ് ഹാബെൻ."
            }
        ]
    },
    {
        "id": "mono_21",
        "title": "Meine Pläne & Ziele für die Zukunft",
        "titleEN": "My Plans & Goals for the Future",
        "emoji": "🚀",
        "cues": [
            {
                "de": "Sprachliche Ziele (Deutsch)",
                "en": "Language goals (German)"
            },
            {
                "de": "Berufliche Entwicklung",
                "en": "Professional development"
            },
            {
                "de": "Familie & Wohnort",
                "en": "Family & residence"
            },
            {
                "de": "Persönliche Wünsche",
                "en": "Personal wishes"
            }
        ],
        "sentences": [
            {
                "de": "In den nächsten zwei Jahren habe ich klare persönliche und berufliche Ziele.",
                "en": "In the next two years I have clear personal and professional goals.",
                "mal": "ഇൻ ഡെൻ നേഹ്സ്റ്റെൻ ത്സ്വൈ യാരെൻ ഹാബെ ഇഹ് ക്ലാറെ പേർസ്യോൺലിഹെ ഉണ്ട് ബെറൂഫ്‌ലിഹെ ത്സീലെ."
            },
            {
                "de": "Zuerst möchte ich nach der A2-Prüfung zügig das B1-Zertifikat in Deutsch ablegen.",
                "en": "First I want to promptly take the B1 German certificate exam after passing A2.",
                "mal": "ത്സൂഎർസ്റ്റ് മ്യോഹ്റ്റെ ഇഹ് നാഹ് ഡെർ ആ-ത്സ്വൈ പcheckpoint ഫ്ര്യൂഫുങ് ത്സ്യൂഗിഹ് ദാസ് ബേ-ഐൻസ് സെർട്ടിഫിക്കാറ്റ് ഇൻ ഡോയ്ച്ച് അബ്‌ലേഗെൻ."
            },
            {
                "de": "Beruflich plane ich, eine Weiterbildung im Bereich Projektmanagement zu absolvieren.",
                "en": "Professionally I plan to complete further training in project management.",
                "mal": "ബെറൂഫ്‌ലിഹ് പ്ലാനെ ഇഹ്, ഐനെ വൈറ്റർബിൽഡുങ് ഇം ബെറൈഹ് പ്രൊയെക്റ്റ് മാനേജ്‌മെന്റ് ത്സു അബ്സോൾവീയറെൻ."
            },
            {
                "de": "Ich möchte dauerhaft in Deutschland arbeiten und mir ein stabiles Leben aufbauen.",
                "en": "I would like to work permanently in Germany and build a stable life for myself.",
                "mal": "ഇഹ് മ്യോഹ്റ്റെ ദൗവേർഹാഫ്റ്റ് ഇൻ ഡോയ്ച്ച്‌ലാൻഡ് അർബൈറ്റെൻ ഉണ്ട് മിർ ഐൻ ഷ്ടാബീലെസ് ലേബെൻ ഔഫ്ബൗവെൻ."
            },
            {
                "de": "Außerdem möchte ich viele europäische Länder bereisen, vor allem Italien und Norwegen.",
                "en": "In addition, I want to travel to many European countries, especially Italy and Norway.",
                "mal": "ഔസർഡേം മ്യോഹ്റ്റെ ഇഹ് ഫീലെ ഓയ്‌റോപേയിഷെ ലെൻഡെർ ബെറൈസെൻ, ഫോർ അല്ലെം ഇറ്റാലിയെൻ ഉണ്ട് നോർവേഗെൻ."
            },
            {
                "de": "Mit Ausdauer und Disziplin bin ich zuversichtlich, dass ich alle meine Träume erreiche.",
                "en": "With perseverance and discipline I am confident that I will reach all my dreams.",
                "mal": "മിറ്റ് ഔസ്ദൗവേർ ഉണ്ട് ഡിസിപ്ലിൻ ബിൻ ഇഹ് ത്സൂഫെർസിഹ്റ്റ്ലിഹ്, ദാസ് ഇഹ് അല്ലെ മൈനെ ട്രോയ്‌മെ എറൈഹെ."
            }
        ]
    }
],
        teil3_planning: [
    {
        "id": "plan_3",
        "title": "Fahrradausflug an den Baggersee",
        "titleEN": "Planning a Bike Trip to the Quarry Lake",
        "emoji": "🚴",
        "situation": "Sie und Ihr Partner möchten am kommenden Samstag einen Fahrradausflug an einen See in der Nähe machen.",
        "situationEN": "You and your partner want to go on a bicycle excursion to a nearby lake next Saturday.",
        "points": [
            {
                "de": "Wann losfahren? (Uhrzeit und Treffpunkt)",
                "en": "When to depart? (Time & meeting location)"
            },
            {
                "de": "Verpflegung (Picknick oder Restaurant?)",
                "en": "Catering (Picnic or restaurant?)"
            },
            {
                "de": "Was mitnehmen? (Badesachen, Sonnenschutz, Flickzeug)",
                "en": "What to bring? (Swimwear, sunscreen, repair kit)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Hallo! Am Samstag soll es richtig sonnig und warm werden. Wollen wir um 10 Uhr am Hauptbahnhof starten?",
                "partnerSpeechEN": "Hello! Saturday is supposed to be really sunny and warm. Shall we start at 10 AM at the central station?",
                "options": [
                    {
                        "text": "Ja, 10 Uhr am Haupteingang ist super! Da haben wir genug Zeit für die Hinfahrt.",
                        "type": "agree",
                        "note": "Zustimmen mit Bestätigung"
                    },
                    {
                        "text": "Um 10 Uhr ist es am Bahnhof schon sehr voll. Können wir uns um 9:30 Uhr direkt am Stadtpark treffen?",
                        "type": "counter",
                        "note": "Gegenvorschlag Zeit & Ort"
                    }
                ]
            },
            {
                "partnerSpeech": "Gute Idee! Und wie machen wir das mit dem Mittagessen? Sollen wir ein Picknick einpacken oder am Kiosk essen?",
                "partnerSpeechEN": "Good idea! And how should we handle lunch? Shall we pack a picnic or eat at the snack bar?",
                "options": [
                    {
                        "text": "Ein Picknick ist viel schöner! Ich kann Sandwiches und Obst mitbringen, wenn du Getränke besorgst.",
                        "type": "agree",
                        "note": "Vorschlag Arbeitsteilung"
                    },
                    {
                        "text": "Lass uns lieber am Kiosk Pommes und Currywurst essen, dann müssen wir nicht so viel Gepäck auf dem Rad tragen.",
                        "type": "counter",
                        "note": "Gegenvorschlag mit Argument"
                    }
                ]
            },
            {
                "partnerSpeech": "Abgemacht! Brauchen wir sonst noch etwas Wichtiges für die 25 Kilometer Tour?",
                "partnerSpeechEN": "Agreed! Do we need anything else important for the 25 km tour?",
                "options": [
                    {
                        "text": "Auf jeden Fall Badesachen, Handtücher, Sonnencreme und ein kleines Fahrrad-Flickzeug für Notfälle.",
                        "type": "agree",
                        "note": "Vollständige Ausrüstungsliste"
                    },
                    {
                        "text": "Wir sollten unbedingt eine Luftpumpe und Regenjacken einstecken, falls das Wetter umschlägt.",
                        "type": "counter",
                        "note": "Sicherheitsaspekt"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_4",
        "title": "Abschiedsgeschenk für Sprachlehrerin",
        "titleEN": "Farewell Gift for German Teacher",
        "emoji": "🎁",
        "situation": "Ihr Deutschkurs A2 endet nächsten Freitag. Sie und Ihr Mitschüler möchten ein Abschiedsgeschenk für Frau Meyer organisieren.",
        "situationEN": "Your German A2 course ends next Friday. You and your classmate want to organise a farewell gift for Ms. Meyer.",
        "points": [
            {
                "de": "Was schenken? (Buch, Blumen, Gutschein)",
                "en": "What to gift? (Book, flowers, voucher)"
            },
            {
                "de": "Geld einsammeln (Wie viel pro Person?)",
                "en": "Collect money (How much per person?)"
            },
            {
                "de": "Wann und wie übergeben? (Letzter Kurstag)",
                "en": "When & how to present? (Last day of class)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Hallo! Der Kurs ist bald vorbei. Frau Meyer war so nett zu uns. Wollen wir ihr einen Gutschein für die Buchhandlung kaufen?",
                "partnerSpeechEN": "Hello! The course is ending soon. Ms. Meyer was so nice to us. Shall we buy her a voucher for the bookstore?",
                "options": [
                    {
                        "text": "Das ist eine hervorragende Idee! Sie liest doch so gerne. Dazu kaufen wir noch einen bunten Blumenstrauß.",
                        "type": "agree",
                        "note": "Zustimmen und ergänzen"
                    },
                    {
                        "text": "Ein Gutschein ist etwas unpersönlich. Wie wäre es mit einer Fotocollage von allen Kursteilnehmern?",
                        "type": "counter",
                        "note": "Kreativer Gegenvorschlag"
                    }
                ]
            },
            {
                "partnerSpeech": "Guter Gedanke! Wie viel Geld sollten wir von jedem Teilnehmer im Kurs einsammeln?",
                "partnerSpeechEN": "Good thought! How much money should we collect from each student in class?",
                "options": [
                    {
                        "text": "Wenn jeder 4 Euro gibt, haben wir bei 15 Personen 60 Euro. Das reicht vollkommen aus.",
                        "type": "agree",
                        "note": "Konkreter Rechenvorschlag"
                    },
                    {
                        "text": "4 Euro ist für manche vielleicht zu viel. 2 bis 3 Euro reichen auch für Blumen und eine Karte.",
                        "type": "counter",
                        "note": "Budget-Anpassung"
                    }
                ]
            },
            {
                "partnerSpeech": "Super! Und wann übergeben wir das Geschenk am besten?",
                "partnerSpeechEN": "Super! And when should we best present the gift?",
                "options": [
                    {
                        "text": "Am Freitag in den letzten 15 Minuten vor Unterrichtsende. Wir können alle unterschreiben.",
                        "type": "agree",
                        "note": "Zeitpunkt festlegen"
                    },
                    {
                        "text": "Vielleicht vorher in der Pause mit etwas Kuchen und Saft für alle?",
                        "type": "counter",
                        "note": "Feier in der Pause vorschlagen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_5",
        "title": "Umzugshelfer für eine Freundin",
        "titleEN": "Moving Assistance for a Friend",
        "emoji": "📦",
        "situation": "Ihre gemeinsame Freundin Anna zieht am Samstag in eine neue Wohnung. Sie möchten ihr beim Umzug helfen.",
        "situationEN": "Your mutual friend Anna is moving into a new flat on Saturday. You want to help her with the move.",
        "points": [
            {
                "de": "Wann anfangen? (Morgens oder mittags?)",
                "en": "When to start? (Morning or midday?)"
            },
            {
                "de": "Aufgabenverteilung (Kisten tragen, Transporter fahren, Möbel abbauen)",
                "en": "Task division (carrying boxes, driving van, dismantling furniture)"
            },
            {
                "de": "Verpflegung der Helfer (Pizza, Getränke)",
                "en": "Helper catering (pizza, drinks)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Anna braucht am Samstag dringend Hilfe beim Umzug. Wollen wir schon früh um 8:30 Uhr bei ihr sein?",
                "partnerSpeechEN": "Anna urgently needs help with the move on Saturday. Shall we be at her place early at 8:30 AM?",
                "options": [
                    {
                        "text": "Ja, je früher wir anfangen, desto schneller sind die Kisten im Transporter.",
                        "type": "agree",
                        "note": "Zustimmen mit Begründung"
                    },
                    {
                        "text": "Der Transporter kann erst ab 9:30 Uhr abgeholt werden. Treffen wir uns lieber um 9:45 Uhr?",
                        "type": "counter",
                        "note": "Praktischer Gegenvorschlag"
                    }
                ]
            },
            {
                "partnerSpeech": "Stimmt, 9:45 Uhr passt besser. Wer übernimmt welche Aufgabe?",
                "partnerSpeechEN": "True, 9:45 AM fits better. Who takes over which task?",
                "options": [
                    {
                        "text": "Ich kann den großen Transporter fahren und schwere Kartons tragen, wenn du beim Möbelabbau hilfst.",
                        "type": "agree",
                        "note": "Aufgabenteilung vorschlagen"
                    },
                    {
                        "text": "Lass uns beide erst einmal die Kisten aus dem 3. Stock runtertragen, das geht zu zweit schneller.",
                        "type": "counter",
                        "note": "Gemeinsames Anpacken"
                    }
                ]
            },
            {
                "partnerSpeech": "Perfekt! Und was organisieren wir als Essen für die ganzen Helfer zur Pause?",
                "partnerSpeechEN": "Perfect! And what do we organize as food for all the helpers during the break?",
                "options": [
                    {
                        "text": "Wir bestellen mittags einfach vier große Familienpizzen und stellen kühle Getränke bereit.",
                        "type": "agree",
                        "note": "Klassische Umzugsverpflegung"
                    },
                    {
                        "text": "Vielleicht belegte Brötchen und Kaffee am Vormittag und erst nach getaner Arbeit Pizza?",
                        "type": "counter",
                        "note": "Zeitplan für Essen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_6",
        "title": "Kinobesuch am Freitagabend",
        "titleEN": "Cinema Evening on Friday",
        "emoji": "🎬",
        "situation": "Sie und Ihr Freund möchten am Freitagabend zusammen ins Kino gehen.",
        "situationEN": "You and your friend want to go to the cinema together on Friday evening.",
        "points": [
            {
                "de": "Welchen Film schauen? (Komödie, Action, Krimi)",
                "en": "Which film to watch? (Comedy, action, crime)"
            },
            {
                "de": "Uhrzeit & Kinokarten reservieren",
                "en": "Time & reserving tickets"
            },
            {
                "de": "Treffpunkt vor dem Kino (Restaurant oder direkt Saal)",
                "en": "Meeting point before cinema (restaurant or lobby)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Hast du Lust, am Freitag ins Kino zu gehen? Es läuft der neue James-Bond-Actionfilm und eine deutsche Komödie.",
                "partnerSpeechEN": "Do you feel like going to the cinema on Friday? The new James Bond action movie is playing and a German comedy.",
                "options": [
                    {
                        "text": "Der Actionfilm klingt klasse! Auf den warte ich schon seit Monaten.",
                        "type": "agree",
                        "note": "Filmauswahl bestätigen"
                    },
                    {
                        "text": "Nach der stressigen Arbeitswoche möchte ich lieber etwas Lustiges sehen. Lass uns in die Komödie gehen!",
                        "type": "counter",
                        "note": "Alternative begründen"
                    }
                ]
            },
            {
                "partnerSpeech": "In Ordnung! Die Vorstellung läuft um 19:30 Uhr und um 22:00 Uhr. Welche Uhrzeit bevorzugst du?",
                "partnerSpeechEN": "Alright! The show runs at 7:30 PM and 10:00 PM. Which time do you prefer?",
                "options": [
                    {
                        "text": "19:30 Uhr ist ideal. Dann sind wir gegen 22 Uhr fertig und können noch kurz etwas trinken.",
                        "type": "agree",
                        "note": "Zeitauswahl mit Begründung"
                    },
                    {
                        "text": "Um 19:30 Uhr schaffe ich es wegen der Arbeit kaum. Wäre 20:15 Uhr im Cinemaxx eine Option?",
                        "type": "counter",
                        "note": "Ausweichkino vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Super, ich reserviere online zwei Plätze in der Mitte. Wo treffen wir uns vorher?",
                "partnerSpeechEN": "Great, I'll reserve two seats in the middle online. Where shall we meet beforehand?",
                "options": [
                    {
                        "text": "Treffen wir uns um 19:00 Uhr direkt im Kassenfoyer, dann holen wir noch Popcorn.",
                        "type": "agree",
                        "note": "Treffpunkt Foyer"
                    },
                    {
                        "text": "Wollen wir uns schon um 18:15 Uhr bei der Pizzeria nebenan treffen und eine Kleinigkeit essen?",
                        "type": "counter",
                        "note": "Vorheriges Essen planen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_7",
        "title": "Grillfest im Nachbarschaftsgarten",
        "titleEN": "Barbecue in Neighbourhood Garden",
        "emoji": "🥩",
        "situation": "Sie und Ihr Nachbar planen ein Sommer-Grillfest für alle Bewohner Ihres Wohnhauses.",
        "situationEN": "You and your neighbour are planning a summer barbecue party for all residents of your apartment building.",
        "points": [
            {
                "de": "Wann veranstalten? (Datum und Uhrzeit)",
                "en": "When to hold it? (Date & time)"
            },
            {
                "de": "Essen & Getränke (Wer bringt was mit? Grillkohle)",
                "en": "Food & drinks (Who brings what? Charcoal)"
            },
            {
                "de": "Einladung aushängen (Schwarzes Brett)",
                "en": "Post invitation (Notice board)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Hallo Nachbar! Wollen wir nächsten Samstag ab 16 Uhr unser jährliches Hausgrillen im Garten machen?",
                "partnerSpeechEN": "Hello neighbour! Shall we hold our annual building barbecue in the garden next Saturday from 4 PM?",
                "options": [
                    {
                        "text": "Ja, der Samstag ist perfekt! Da haben die meisten Nachbarn frei und Zeit.",
                        "type": "agree",
                        "note": "Termin bestätigen"
                    },
                    {
                        "text": "Am Samstag sind viele beim Einkaufen. Wie wäre es stattdessen mit Sonntagnachmittag ab 15 Uhr?",
                        "type": "counter",
                        "note": "Ausweichtermin vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Gute Idee! Wir besorgen den großen Grill und zwei Säcke Kohle. Wie organisieren wir das Essen?",
                "partnerSpeechEN": "Good idea! We will get the big grill and two sacks of charcoal. How do we organize the food?",
                "options": [
                    {
                        "text": "Jeder bringt sein eigenes Grillgut mit und wir bitten alle um einen Salat oder ein Dessert für das Buffet.",
                        "type": "agree",
                        "note": "Praktisches Buffet-Prinzip"
                    },
                    {
                        "text": "Wir könnten eine Umlage von 10 Euro pro Person machen und zentral Fleisch und Getränke einkaufen.",
                        "type": "counter",
                        "note": "Gemeinschaftskasse vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Das Buffet-Prinzip ist am unkompliziertesten! Wie informieren wir die anderen Mieter?",
                "partnerSpeechEN": "The buffet principle is least complicated! How do we inform the other tenants?",
                "options": [
                    {
                        "text": "Ich schreibe heute Abend einen Zettel und hänge ihn unten an das Schwarze Brett im Hausflur.",
                        "type": "agree",
                        "note": "Aushang vorbereiten"
                    },
                    {
                        "text": "Lass uns zusätzlich eine Nachricht in unsere Haus-WhatsApp-Gruppe stellen, damit es jeder sieht.",
                        "type": "counter",
                        "note": "Digitalen Kanal ergänzen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_8",
        "title": "Zugreise nach München",
        "titleEN": "Train Trip to Munich",
        "emoji": "🚆",
        "situation": "Sie und Ihre Freundin planen einen Wochenendausflug mit der Bahn nach München.",
        "situationEN": "You and your friend are planning a weekend train trip to Munich.",
        "points": [
            {
                "de": "Abfahrtszeit & Zugart (ICE oder Regionalbahn/Deutschlandticket)",
                "en": "Departure time & train type (ICE or regional/Deutschlandticket)"
            },
            {
                "de": "Unterkunft (Hotel oder Jugendherberge)",
                "en": "Accommodation (Hotel or youth hostel)"
            },
            {
                "de": "Sehenswürdigkeiten (Marienplatz, Deutsches Museum)",
                "en": "Sights (Marienplatz, German Museum)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Ich freue mich schon auf München! Wollen wir den schnellen ICE um 7:15 Uhr nehmen oder mit dem Regionalexpress fahren?",
                "partnerSpeechEN": "I'm already excited about Munich! Shall we take the fast ICE at 7:15 AM or travel by regional express?",
                "options": [
                    {
                        "text": "Der ICE ist viel schneller und bequemer. Mit dem Sparpreis kostet das Ticket nur 29 Euro.",
                        "type": "agree",
                        "note": "ICE mit Sparpreis wählen"
                    },
                    {
                        "text": "Mit unserem Deutschlandticket können wir kostenlos mit dem Regionalexpress fahren und Geld sparen.",
                        "type": "counter",
                        "note": "Deutschlandticket vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Stimmt, der ICE spart fast zwei Stunden! Wo übernachten wir von Samstag auf Sonntag?",
                "partnerSpeechEN": "True, the ICE saves almost two hours! Where shall we stay from Saturday to Sunday?",
                "options": [
                    {
                        "text": "Ich habe ein günstiges Hotel in der Nähe des Hauptbahnhofs gesehen, das gute Bewertungen hat.",
                        "type": "agree",
                        "note": "Hotel vorschlagen"
                    },
                    {
                        "text": "Hotels sind in München sehr teuer. Wollen wir eine moderne Jugendherberge oder ein Apartment buchen?",
                        "type": "counter",
                        "note": "Günstige Alternative"
                    }
                ]
            },
            {
                "partnerSpeech": "Ein Hotel nahe dem Bahnhof ist sehr praktisch. Welche Sehenswürdigkeiten wollen wir uns anschauen?",
                "partnerSpeechEN": "A hotel near the station is very practical. Which sights do we want to visit?",
                "options": [
                    {
                        "text": "Am Vormittag den Marienplatz mit dem Glockenspiel und nachmittags das Deutsche Museum!",
                        "type": "agree",
                        "note": "Klassisches Kulturprogramm"
                    },
                    {
                        "text": "Wenn das Wetter schön ist, sollten wir lieber in den Englischen Garten gehen und die Surfer an der Eisbachwelle sehen.",
                        "type": "counter",
                        "note": "Open-Air Alternative"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_9",
        "title": "Flohmarktstand aufbauen",
        "titleEN": "Setting Up a Flea Market Stall",
        "emoji": "🛍️",
        "situation": "Sie und Ihr Mitbewohner haben viele alte Sachen aussortiert und möchten am Samstag einen Stand auf dem Flohmarkt machen.",
        "situationEN": "You and your flatmate sorted out lots of old items and want to run a stall at the flea market on Saturday.",
        "points": [
            {
                "de": "Standanmeldung & Gebühr",
                "en": "Stall registration & fee"
            },
            {
                "de": "Ausrüstung (Tisch, Kleiderstange, Wechselgeld)",
                "en": "Equipment (table, clothes rack, change)"
            },
            {
                "de": "Preisschilder & Vorbereitung",
                "en": "Price tags & preparation"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Unser Keller ist viel zu voll! Der Flohmarkt auf dem Festplatz kostet 15 Euro Standgebühr. Wollen wir uns anmelden?",
                "partnerSpeechEN": "Our basement is way too full! The flea market on the festival grounds costs 15 euros stall fee. Shall we register?",
                "options": [
                    {
                        "text": "Ja, 15 Euro ist günstig! Ich melde uns gleich heute online für einen 3-Meter-Stand an.",
                        "type": "agree",
                        "note": "Anmeldung zusagen"
                    },
                    {
                        "text": "Vielleicht sollten wir erst die Sachen durchzählen, ob sich der Stand auch wirklich lohnt?",
                        "type": "counter",
                        "note": "Vorsichtige Prüfung"
                    }
                ]
            },
            {
                "partnerSpeech": "Wir haben bestimmt fünf Kisten voller Kleidung, Bücher und Geschirr! Was brauchen wir an Ausrüstung?",
                "partnerSpeechEN": "We definitely have five boxes of clothes, books, and crockery! What do we need in terms of equipment?",
                "options": [
                    {
                        "text": "Wir brauchen einen Tapeziertisch, eine Kleiderstange mit Bügeln und eine Geldkassette mit viel Kleingeld.",
                        "type": "agree",
                        "note": "Ausrüstung auflisten"
                    },
                    {
                        "text": "Mein Nachbar leiht uns sicher seinen Pavillon, falls es regnet oder die Sonne stark scheint.",
                        "type": "counter",
                        "note": "Wetterschutz vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Sehr guter Tipp! Sollen wir auf jeden Artikel ein Preisschild kleben oder lieber vor Ort verhandeln?",
                "partnerSpeechEN": "Very good tip! Should we stick a price tag on every item or prefer to bargain on site?",
                "options": [
                    {
                        "text": "Kleine Klebepunkte mit Festpreisen sparen Zeit und die Leute kaufen schneller.",
                        "type": "agree",
                        "note": "Preisschilder bevorzugen"
                    },
                    {
                        "text": "Handeln macht auf dem Flohmarkt doch am meisten Spaß! Wir überlegen uns einfach Mindestpreise.",
                        "type": "counter",
                        "note": "Freies Handeln vorschlagen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_10",
        "title": "Deutsch-Lernnachmittag",
        "titleEN": "German Study Afternoon",
        "emoji": "📖",
        "situation": "Die A2-Prüfung steht in zwei Wochen an. Sie und Ihre Lernpartnerin möchten zusammen Grammatik und Sprechen üben.",
        "situationEN": "The A2 exam is in two weeks. You and your study partner want to practice grammar and speaking together.",
        "points": [
            {
                "de": "Wo lernen? (Bibliothek oder zu Hause)",
                "en": "Where to study? (Library or at home)"
            },
            {
                "de": "Schwerpunkte festlegen (Grammatik, Hören, Sprechen)",
                "en": "Set focus areas (Grammar, listening, speaking)"
            },
            {
                "de": "Pausen & Lernplan",
                "en": "Breaks & study schedule"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Hallo! Bis zur Prüfung müssen wir noch fleißig üben. Wollen wir uns am Dienstag um 14 Uhr in der Stadtbibliothek treffen?",
                "partnerSpeechEN": "Hello! We need to practice diligently until the exam. Shall we meet at the city library on Tuesday at 2 PM?",
                "options": [
                    {
                        "text": "Die Bibliothek ist schön ruhig, da können wir uns im Gruppenraum super konzentrieren.",
                        "type": "agree",
                        "note": "Ort zustimmen"
                    },
                    {
                        "text": "In der Bibliothek müssen wir so leise sein. Lass uns lieber zu mir nach Hause gehen, dann können wir laut sprechen üben.",
                        "type": "counter",
                        "note": "Zu Hause vorschlagen für Sprechübungen"
                    }
                ]
            },
            {
                "partnerSpeech": "Du hast recht, beim Sprechtraining ist meine Wohnung besser! Worauf sollten wir uns am Dienstag konzentrieren?",
                "partnerSpeechEN": "You are right, for speaking practice my apartment is better! What should we focus on on Tuesday?",
                "options": [
                    {
                        "text": "Erst eine Stunde die Wechselpräpositionen und Perfekt wiederholen, danach machen wir Teil 2 Sprechen.",
                        "type": "agree",
                        "note": "Konkreter Zeit- und Inhaltsplan"
                    },
                    {
                        "text": "Grammatik können wir allein machen. Lass uns die ganze Zeit Modelltests für Hören und Sprechen simulieren!",
                        "type": "counter",
                        "note": "Prüfungssimulation fokussieren"
                    }
                ]
            },
            {
                "partnerSpeech": "Super! Wie lange wollen wir lernen und wie gestalten wir die Pausen?",
                "partnerSpeechEN": "Super! How long do we want to study and how do we organise breaks?",
                "options": [
                    {
                        "text": "Drei Stunden mit einer 20-minütigen Kaffeepause dazwischen sind perfekt.",
                        "type": "agree",
                        "note": "Realistische Lerndauer"
                    },
                    {
                        "text": "Wir sollten nach jeweils 45 Minuten eine kurze 5-Minuten-Pause an der frischen Luft machen.",
                        "type": "counter",
                        "note": "Pomodoro-Methode vorschlagen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_11",
        "title": "Wanderung in den Bergen",
        "titleEN": "Hiking Trip in the Mountains",
        "emoji": "🥾",
        "situation": "Sie und ein Kollege möchten am Sonntag eine Bergwanderung in den bayerischen Voralpen unternehmen.",
        "situationEN": "You and a colleague want to undertake a mountain hike in the Bavarian pre-Alps on Sunday.",
        "points": [
            {
                "de": "Welche Route auswählen? (Leicht für Einsteiger oder anspruchsvoll?)",
                "en": "Which route to choose? (Easy for beginners or challenging?)"
            },
            {
                "de": "Anreise (Zugverbindung oder mit dem Auto?)",
                "en": "Travel (Train connection or by car?)"
            },
            {
                "de": "Ausrüstung (Wanderschuhe, Proviant, Erste Hilfe)",
                "en": "Equipment (Hiking boots, provisions, first aid)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Hallo! Hast du Lust auf eine Bergtour am Sonntag? Die Wanderung auf den Tegelberg dauert etwa vier Stunden.",
                "partnerSpeechEN": "Hello! Do you fancy a mountain tour on Sunday? The hike up Tegelberg takes about four hours.",
                "options": [
                    {
                        "text": "Vier Stunden klingt machbar und die Aussicht von oben soll traumhaft sein. Ich bin dabei!",
                        "type": "agree",
                        "note": "Route annehmen"
                    },
                    {
                        "text": "Vier Stunden bergauf ist mir für den Anfang etwas zu anstrengend. Gibt es eine leichtere Panoramaroute?",
                        "type": "counter",
                        "note": "Leichtere Tour anfragen"
                    }
                ]
            },
            {
                "partnerSpeech": "Klar, wir können den Panoramaweg mit nur zwei Stunden Gehzeit nehmen. Fahren wir mit dem Zug oder mit deinem Auto?",
                "partnerSpeechEN": "Sure, we can take the panoramic trail with only two hours walking time. Shall we go by train or by your car?",
                "options": [
                    {
                        "text": "Die Bayerische Regiobahn fährt stündlich direkt dorthin, das ist entspannter als im Stau zu stehen.",
                        "type": "agree",
                        "note": "Zugfahrt begründen"
                    },
                    {
                        "text": "Mit dem Auto sind wir flexibler und können auf dem Rückweg noch an einem See anhalten.",
                        "type": "counter",
                        "note": "Auto-Vorteil nennen"
                    }
                ]
            },
            {
                "partnerSpeech": "Nehmen wir die Bahn, dann können wir uns unterhalten. Was packen wir in die Rucksäcke?",
                "partnerSpeechEN": "Let's take the train, then we can chat. What shall we pack in the backpacks?",
                "options": [
                    {
                        "text": "Feste Wanderschuhe, mindestens 1,5 Liter Wasser, Nüsse, Müsliriegel und eine winddichte Jacke.",
                        "type": "agree",
                        "note": "Sinnvoller Wanderproviant"
                    },
                    {
                        "text": "Wir können mittags doch oben auf der Berghütte einkehren und einen warmen Kaiserschmarrn essen!",
                        "type": "counter",
                        "note": "Hütteneinkehr vorschlagen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_12",
        "title": "Geburtstagsüberraschung für Mitbewohner",
        "titleEN": "Birthday Surprise for Flatmate",
        "emoji": "🎂",
        "situation": "Ihr Mitbewohner Jan wird 25 Jahre alt. Sie und Ihre Mitbewohnerin möchten eine kleine Überraschung in der WG planen.",
        "situationEN": "Your flatmate Jan turns 25. You and your female flatmate want to plan a small surprise in the shared flat.",
        "points": [
            {
                "de": "Wann überraschen? (Morgens am Frühstückstisch oder abends Party?)",
                "en": "When to surprise? (Morning breakfast or evening party?)"
            },
            {
                "de": "Geschenk (Gemeinsamer Gutschein für Kletterhalle)",
                "en": "Gift (Joint voucher for climbing gym)"
            },
            {
                "de": "Dekoration & Geburtstagskuchen",
                "en": "Decoration & birthday cake"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Jan hat am Donnerstag Geburtstag! Wollen wir ihn morgens vor der Uni mit einem Festfrühstück überraschen?",
                "partnerSpeechEN": "Jan has his birthday on Thursday! Shall we surprise him in the morning before uni with a festive breakfast?",
                "options": [
                    {
                        "text": "Ja! Wir decken den Tisch mit Kerzen, frischen Brötchen, Orangensaft und seinem Lieblingskaffee.",
                        "type": "agree",
                        "note": "Frühstücksplan ausarbeiten"
                    },
                    {
                        "text": "Morgens hat Jan immer Stress und muss früh raus. Lass uns lieber abends eine kleine Überraschungsparty machen!",
                        "type": "counter",
                        "note": "Abendparty vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Abends ist tatsächlich entspannter, dann können wir Freunde einladen! Was schenken wir ihm zusammen?",
                "partnerSpeechEN": "Evening is actually more relaxed, then we can invite friends! What shall we give him together?",
                "options": [
                    {
                        "text": "Er geht doch so gerne bouldern. Ein 50-Euro-Gutschein für die Kletterhalle wäre ideal.",
                        "type": "agree",
                        "note": "Sportgutschein befürworten"
                    },
                    {
                        "text": "Wie wäre es mit einem neuen Rucksack für seine Wochenendausflüge?",
                        "type": "counter",
                        "note": "Anderes Geschenk anregen"
                    }
                ]
            },
            {
                "partnerSpeech": "Der Klettergutschein ist perfekt! Wer kümmert sich um den Kuchen und die Deko?",
                "partnerSpeechEN": "The climbing voucher is perfect! Who takes care of the cake and decorations?",
                "options": [
                    {
                        "text": "Ich backe heimlich am Mittwochnachmittag einen Schokokuchen und du besorgst Luftballons und Girlanden.",
                        "type": "agree",
                        "note": "Klare Aufgabenteilung"
                    },
                    {
                        "text": "Wir können doch seine Lieblings-Eistorte beim Bäcker bestellen, das spart Zeit!",
                        "type": "counter",
                        "note": "Fertigtorte vorschlagen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_13",
        "title": "Museumsbesuch mit Café",
        "titleEN": "Museum Visit with Café",
        "emoji": "🏛️",
        "situation": "Sie und ein Freund möchten am Sonntagnachmittag eine Ausstellung besuchen und danach Kaffee trinken.",
        "situationEN": "You and a friend want to visit an art exhibition on Sunday afternoon and drink coffee afterwards.",
        "points": [
            {
                "de": "Welches Museum? (Kunst, Technik oder Naturkunde)",
                "en": "Which museum? (Art, technology, or natural history)"
            },
            {
                "de": "Eintrittskarten & Ermäßigungen",
                "en": "Tickets & concessions"
            },
            {
                "de": "Café für den Ausklang auswählen",
                "en": "Pick a café to finish the afternoon"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Am Sonntag soll es regnen. Wollen wir ins neue Kunstmuseum gehen? Es gibt eine moderne Fotoausstellung.",
                "partnerSpeechEN": "It is supposed to rain on Sunday. Shall we go to the new art museum? There is a modern photo exhibition.",
                "options": [
                    {
                        "text": "Sehr gerne! Fotoausstellungen interessieren mich sehr und bei Regen ist ein Museum ideal.",
                        "type": "agree",
                        "note": "Ausstellungswunsch teilen"
                    },
                    {
                        "text": "Kunst ist nicht ganz mein Ding. Wollen wir nicht lieber ins Deutsche Technikmuseum mit den Flugzeugen gehen?",
                        "type": "counter",
                        "note": "Technikmuseum vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Die Fotoausstellung hat tolle Kritiken bekommen, lass es uns anschauen! Müssen wir Tickets vorher online kaufen?",
                "partnerSpeechEN": "The photo exhibition got great reviews, let's see it! Do we need to buy tickets online in advance?",
                "options": [
                    {
                        "text": "Ja, sonntags gibt es lange Schlangen. Online sparen wir Wartezeit und bekommen mit dem Studentenausweis Rabatt.",
                        "type": "agree",
                        "note": "Online-Buchung empfehlen"
                    },
                    {
                        "text": "Sonntags ab 15 Uhr ist oft wenig los, wir können die Karten einfach direkt an der Tageskasse kaufen.",
                        "type": "counter",
                        "note": "Kauf vor Ort vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Gut, ich buche zwei Zeitfenster für 14 Uhr. Wohin gehen wir danach zum Aufwärmen?",
                "partnerSpeechEN": "Good, I'll book two timeslots for 2 PM. Where shall we go afterwards to warm up?",
                "options": [
                    {
                        "text": "Gleich gegenüber gibt es ein uriges Café mit fantastischem Apfelstrudel und heißer Schokolade.",
                        "type": "agree",
                        "note": "Café-Tipp nennen"
                    },
                    {
                        "text": "Lass uns zu dem neuen Café am Kanal laufen, die haben tollen Bio-Kaffee und veganen Kuchen.",
                        "type": "counter",
                        "note": "Modernes Café empfehlen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_14",
        "title": "Internationaler Kochabend",
        "titleEN": "International Cooking Night",
        "emoji": "🍛",
        "situation": "Sie und Ihre Freunde aus dem Sprachkurs möchten einen gemeinsamen internationalen Kochabend veranstalten.",
        "situationEN": "You and your language course friends want to organise an international cooking evening together.",
        "points": [
            {
                "de": "Wo kochen? (Wer hat die größte Küche?)",
                "en": "Where to cook? (Who has the largest kitchen?)"
            },
            {
                "de": "Welche Landesgerichte zubereiten?",
                "en": "Which national dishes to prepare?"
            },
            {
                "de": "Gemeinsam einkaufen oder jeder bringt Zutaten mit?",
                "en": "Shop together or everyone brings ingredients?"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Wollen wir am Samstag einen internationalen Kochabend machen? Jeder kocht ein Gericht aus seinem Heimatland!",
                "partnerSpeechEN": "Shall we have an international cooking evening on Saturday? Everyone cooks a dish from their home country!",
                "options": [
                    {
                        "text": "Klasse Idee! Ich kann ein authentisches indisches Biryani mit Raita zubereiten.",
                        "type": "agree",
                        "note": "Eigenes Gericht nennen"
                    },
                    {
                        "text": "Samstagabend bin ich schon verabredet. Passt es dir vielleicht am Freitag ab 18:30 Uhr?",
                        "type": "counter",
                        "note": "Freitag vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Freitag ab 18:30 Uhr passt auch gut! Bei wem kochen wir am besten? Meine Küche ist ziemlich klein.",
                "partnerSpeechEN": "Friday from 6:30 PM works well too! At whose place shall we cook? My kitchen is pretty small.",
                "options": [
                    {
                        "text": "Meine WG hat eine große Wohnküche mit großem Tisch für sechs Personen. Kommt alle zu mir!",
                        "type": "agree",
                        "note": "Wohnung anbieten"
                    },
                    {
                        "text": "Wir könnten den Gemeinschaftsraum im Studentenwohnheim reservieren, da gibt es zwei Herde.",
                        "type": "counter",
                        "note": "Gemeinschaftsküche vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Deine WG-Küche ist perfekt! Sollen wir vorher gemeinsam im Asia-Markt einkaufen gehen?",
                "partnerSpeechEN": "Your flat kitchen is perfect! Shall we go grocery shopping together at the Asian market beforehand?",
                "options": [
                    {
                        "text": "Ja, wir treffen uns um 17 Uhr am Supermarkt, dann können wir alle frischen Kräuter und Gewürze zusammen kaufen.",
                        "type": "agree",
                        "note": "Gemeinsamer Einkauf"
                    },
                    {
                        "text": "Jeder bringt seine speziellen Zutaten einfach selbst mit, das spart uns vorher viel Zeit.",
                        "type": "counter",
                        "note": "Individueller Einkauf"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_15",
        "title": "Gemeinsames Joggen im Stadtpark",
        "titleEN": "Jogging Together in the City Park",
        "emoji": "🏃",
        "situation": "Sie und Ihr Kollege möchten fitter werden und sich regelmäßig zum Joggen nach Feierabend verabreden.",
        "situationEN": "You and your colleague want to get fitter and meet regularly for jogging after work.",
        "points": [
            {
                "de": "Wochentage & Uhrzeit (Dienstag & Donnerstag?)",
                "en": "Weekdays & time (Tuesday & Thursday?)"
            },
            {
                "de": "Streckenlänge & Tempo (5 km für Anfänger)",
                "en": "Distance & pace (5 km for beginners)"
            },
            {
                "de": "Was tun bei Regenwetter?",
                "en": "What to do in case of rain?"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Wir haben uns doch vorgenommen, mehr Sport zu treiben. Wollen wir ab nächster Woche dienstags und donnerstags um 17:30 Uhr joggen?",
                "partnerSpeechEN": "We resolved to do more sports. Shall we go jogging on Tuesdays and Thursdays at 5:30 PM from next week?",
                "options": [
                    {
                        "text": "Dienstag und Donnerstag um 17:30 Uhr passt perfekt, da kann ich direkt nach der Arbeit in die Laufschuhe schlüpfen.",
                        "type": "agree",
                        "note": "Termine bestätigen"
                    },
                    {
                        "text": "Donnerstags habe ich leider Sprachkurs. Wäre Montag und Mittwoch um 18 Uhr besser für dich?",
                        "type": "counter",
                        "note": "Andere Tage vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Montag und Mittwoch um 18 Uhr ist gebongt! Wie weit und wie schnell wollen wir anfangs laufen?",
                "partnerSpeechEN": "Monday and Wednesday at 6 PM is agreed! How far and fast do we want to run initially?",
                "options": [
                    {
                        "text": "Lass uns mit einer gemütlichen 5-Kilometer-Runde um den Parksee anfangen, sodass wir uns noch unterhalten können.",
                        "type": "agree",
                        "note": "Gemäßigtes Tempo vorschlagen"
                    },
                    {
                        "text": "Ich bin lange nicht gejoggt. Wollen wir abwechselnd fünf Minuten laufen und zwei Minuten zügig gehen?",
                        "type": "counter",
                        "note": "Intervalltraining vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Guter Einstieg! Und was machen wir, wenn es am Montag regnet?",
                "partnerSpeechEN": "Good start! And what do we do if it rains on Monday?",
                "options": [
                    {
                        "text": "Mit einer leichten Regenjacke kann man auch bei Nieselregen super laufen. Frische Luft tut gut!",
                        "type": "agree",
                        "note": "Trotzdem laufen"
                    },
                    {
                        "text": "Bei starkem Regen können wir alternativ zusammen ins Hallenbad gehen und Bahnen schwimmen.",
                        "type": "counter",
                        "note": "Schwimmbad-Alternative"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_16",
        "title": "Stadtrundfahrt für Freunde",
        "titleEN": "City Tour for Visiting Friends",
        "emoji": "🚌",
        "situation": "Am Wochenende besuchen Sie zwei Freunde aus Ihrer Heimat. Sie und Ihre Partnerin planen eine Stadtführung.",
        "situationEN": "At the weekend two friends from your home country are visiting. You and your partner are planning a city tour.",
        "points": [
            {
                "de": "Fortbewegungsmittel (Hop-on-Hop-off-Bus oder zu Fuß?)",
                "en": "Means of transport (Hop-on hop-off bus or on foot?)"
            },
            {
                "de": "Wichtigste Stationen (Altstadt, Schloss, Aussichtsturm)",
                "en": "Main stops (Old town, castle, view tower)"
            },
            {
                "de": "Traditionelles Mittagessen (Brauhaus)",
                "en": "Traditional lunch (Brewery inn)"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Meine Freunde kommen am Samstag an und wollen die Stadt kennenlernen. Wollen wir ein Ticket für den roten Sightseeing-Bus kaufen?",
                "partnerSpeechEN": "My friends arrive on Saturday and want to get to know the city. Shall we buy a ticket for the red sightseeing bus?",
                "options": [
                    {
                        "text": "Der Hop-on-Hop-off-Bus ist super, weil man Audio-Guides auf Englisch hat und überall aussteigen kann.",
                        "type": "agree",
                        "note": "Busrundfahrt befürworten"
                    },
                    {
                        "text": "Zu Fuß und mit der Straßenbahn sieht man viel mehr versteckte Gassen. Lass uns eine eigene Tour machen!",
                        "type": "counter",
                        "note": "Individuelle Tour vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Gute Idee, zu Fuß ist persönlicher! Welche Stationen müssen unbedingt dabei sein?",
                "partnerSpeechEN": "Good idea, on foot is more personal! Which stops must definitely be included?",
                "options": [
                    {
                        "text": "Zuerst das historische Rathaus und der Dom, danach hoch zum Schloss für das beste Panorama der Stadt.",
                        "type": "agree",
                        "note": "Highlights nennen"
                    },
                    {
                        "text": "Wir sollten unbedingt auch den Markt am Hauptplatz besuchen, dort gibt es regionale Köstlichkeiten.",
                        "type": "counter",
                        "note": "Marktplatz ergänzen"
                    }
                ]
            },
            {
                "partnerSpeech": "Der Dom und der Markt sind absolute Pflicht! Wo kehren wir zum Mittagessen ein?",
                "partnerSpeechEN": "The cathedral and market are absolute musts! Where do we stop for lunch?",
                "options": [
                    {
                        "text": "Im traditionellen Brauhaus in der Altstadt! Da gibt es deftige Knödel, Schnitzel und frisches Bier.",
                        "type": "agree",
                        "note": "Brauhaus empfehlen"
                    },
                    {
                        "text": "Vielleicht lieber in ein gemütliches Café mit leichten Salaten und Flammkuchen, falls sie kein schweres Fleisch mögen?",
                        "type": "counter",
                        "note": "Leichtere Kost vorschlagen"
                    }
                ]
            }
        ]
    },
    {
        "id": "plan_17",
        "title": "Spieleabend im Freundeskreis",
        "titleEN": "Board Game Night with Friends",
        "emoji": "🎲",
        "situation": "Sie und Ihre Mitbewohnerin möchten am Samstagabend sechs Freunde zu einem gemütlichen Spieleabend einladen.",
        "situationEN": "You and your flatmate want to invite six friends over for a cosy board game night on Saturday evening.",
        "points": [
            {
                "de": "Welche Brettspiele / Kartenspiele auswählen?",
                "en": "Which board games / card games to pick?"
            },
            {
                "de": "Snacks & Fingerfood (Chips, Dips, Gemüsesticks)",
                "en": "Snacks & finger food (crisps, dips, vegetable sticks)"
            },
            {
                "de": "Beginn & Musik im Hintergrund",
                "en": "Start time & background music"
            }
        ],
        "turns": [
            {
                "partnerSpeech": "Ein Spieleabend am Samstag wird bestimmt lustig! Wollen wir Klassiker wie Siedler von Catan und Codenames spielen?",
                "partnerSpeechEN": "A games night on Saturday will definitely be fun! Shall we play classics like Settlers of Catan and Codenames?",
                "options": [
                    {
                        "text": "Codenames ist genial für sechs bis acht Personen, da lacht jeder mit!",
                        "type": "agree",
                        "note": "Partyspiel befürworten"
                    },
                    {
                        "text": "Catan dauert zu lange für eine große Gruppe. Wie wäre es mit Uno, Tabu oder Activity?",
                        "type": "counter",
                        "note": "Schnellere Spiele vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Tabu und Codenames sind super für Gruppen! Was bereiten wir für Knabbereien vor?",
                "partnerSpeechEN": "Taboo and Codenames are great for groups! What nibbles shall we prepare?",
                "options": [
                    {
                        "text": "Ich mache eine große Schüssel Nachos mit warmem Käsedip und schneide Gemüsesticks mit Kräuterquark.",
                        "type": "agree",
                        "note": "Fingerfood vorschlagen"
                    },
                    {
                        "text": "Wir könnten mini Mini-Pizzen im Ofen backen, die machen satt und krümeln nicht auf die Spielbretter.",
                        "type": "counter",
                        "note": "Warme Snacks vorschlagen"
                    }
                ]
            },
            {
                "partnerSpeech": "Gemüsesticks und Nachos sind klasse! Ab wie viel Uhr laden wir die Gäste ein?",
                "partnerSpeechEN": "Veggie sticks and nachos are great! From what time shall we invite the guests?",
                "options": [
                    {
                        "text": "Ab 19 Uhr, dann können alle in Ruhe ankommen und wir machen leise Lounge-Musik im Hintergrund an.",
                        "type": "agree",
                        "note": "Zeit & Atmosphäre abstimmen"
                    },
                    {
                        "text": "Lieber schon ab 18:30 Uhr, damit wir pünktlich mit der ersten Runde anfangen können.",
                        "type": "counter",
                        "note": "Früheren Start vorschlagen"
                    }
                ]
            }
        ]
    }
]
    };

    /* ============================================================
       REGISTRATION & GLOBAL DATABASE MERGE
       ============================================================ */
    function applyA2Expansion() {
        // 1. Reading
        if (typeof A2_READING_DATABASE !== "undefined" && Array.isArray(A2_READING_DATABASE)) {
            if (!A2_READING_DATABASE.some(p => p.id === "a2_read_16")) {
                A2_READING_DATABASE.push(...NEW_A2_READING_PASSAGES);
                console.log(`✅ A2_READING_DATABASE expanded: ${A2_READING_DATABASE.length} passages active.`);
            }
        }

        // 2. Listening (Hören)
        if (typeof A2_INTERACTIVE_HOEREN_DATABASE !== "undefined" && typeof A2_INTERACTIVE_HOEREN_DATABASE === "object") {
            Object.assign(A2_INTERACTIVE_HOEREN_DATABASE, NEW_A2_HOEREN_TOPICS);
            console.log(`✅ A2_INTERACTIVE_HOEREN_DATABASE expanded: ${Object.keys(A2_INTERACTIVE_HOEREN_DATABASE).length} topics active.`);
        }

        // 3. Writing
        if (typeof A2_WRITING_DATABASE !== "undefined" && Array.isArray(A2_WRITING_DATABASE)) {
            if (!A2_WRITING_DATABASE.some(w => w.id === "a2_write_11")) {
                A2_WRITING_DATABASE.push(...NEW_A2_WRITING_TASKS);
                console.log(`✅ A2_WRITING_DATABASE expanded: ${A2_WRITING_DATABASE.length} tasks active.`);
            }
        }

        // 4. Speaking
        if (typeof A2_SPEAKING_DATABASE !== "undefined" && typeof A2_SPEAKING_DATABASE === "object") {
            if (Array.isArray(A2_SPEAKING_DATABASE.teil1_cue_cards) && !A2_SPEAKING_DATABASE.teil1_cue_cards.some(c => c.id === "card_9")) {
                A2_SPEAKING_DATABASE.teil1_cue_cards.push(...NEW_A2_SPEAKING_DATA.teil1_cue_cards);
            }
            if (Array.isArray(A2_SPEAKING_DATABASE.teil2_monologues) && !A2_SPEAKING_DATABASE.teil2_monologues.some(m => m.id === "mono_7")) {
                A2_SPEAKING_DATABASE.teil2_monologues.push(...NEW_A2_SPEAKING_DATA.teil2_monologues);
            }
            if (Array.isArray(A2_SPEAKING_DATABASE.teil3_planning) && !A2_SPEAKING_DATABASE.teil3_planning.some(p => p.id === "plan_3")) {
                A2_SPEAKING_DATABASE.teil3_planning.push(...NEW_A2_SPEAKING_DATA.teil3_planning);
            }
            console.log(`✅ A2_SPEAKING_DATABASE expanded: ${A2_SPEAKING_DATABASE.teil1_cue_cards.length} cards, ${A2_SPEAKING_DATABASE.teil2_monologues.length} monologues, ${A2_SPEAKING_DATABASE.teil3_planning.length} planning scenarios active.`);
        }
    }

    // Apply immediately if already loaded
    applyA2Expansion();

    // Also register on DOMContentLoaded / window load in case scripts load asynchronously
    if (typeof document !== "undefined" && document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyA2Expansion);
    } else if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
        window.addEventListener("load", applyA2Expansion);
    }

    // Export variables to window
    window.NEW_A2_READING_PASSAGES = NEW_A2_READING_PASSAGES;
    window.NEW_A2_HOEREN_TOPICS = NEW_A2_HOEREN_TOPICS;
    window.NEW_A2_WRITING_TASKS = NEW_A2_WRITING_TASKS;
    window.NEW_A2_SPEAKING_DATA = NEW_A2_SPEAKING_DATA;
    window.applyA2Expansion = applyA2Expansion;
})();
