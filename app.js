/**
 * Goethe-Zertifikat A1: Mock Exam Platform
 * Core Application Script
 * 
 * Features:
 * - Complete Goethe A1 Listening/Reading/Writing/Speaking Question Bank
 * - Dynamic SPA view routing
 * - Offline-First State preservation & LocalStorage Autosave
 * - Web Speech API (speechSynthesis) in German for Hören listening audio simulation
 * - Web MediaRecorder API for speaking test microphone response recording
 * - Auto-Scoring & Grammar/Vocabulary Analytics engine
 * - Responsive SVGs for analytics visualization
 * - Printable PDF layout generation
 */

// --- QUESTION BANK DATA ---
const LEVEL = "A1";

const QUESTION_BANK = {
    hoeren: {
        teil1: [
            {
                id: "h_t1_q1",
                type: "mc",
                script: "Hallo Sarah. Gehen wir heute Abend ins Kino? - Nein, tut mir leid, Thomas. Ich muss lernen. Morgen habe ich eine Prüfung. Aber wir können am Samstag ins Kino gehen. - Samstag? Ja, das passt mir gut.",
                question: "Wann gehen Thomas und Sarah ins Kino?",
                options: [
                    { text: "Heute Abend", letter: "A" },
                    { text: "Am Samstag", letter: "B" },
                    { text: "Am Sonntag", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Freizeit & Hobbys"
            },
            {
                id: "h_t1_q2",
                type: "mc",
                script: "Entschuldigung, wie viel kostet dieses Buch? - Das kostet fünfzehn Euro. - Fünfzehn? Oh, das ist teuer. Gibt es das auch billiger? - Ja, das Taschenbuch kostet nur neun Euro neunzig. - Gut, das nehme ich.",
                question: "Wie viel bezahlt der Mann für das Buch?",
                options: [
                    { text: "15,00 Euro", letter: "A" },
                    { text: "9,90 Euro", letter: "B" },
                    { text: "5,00 Euro", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zahlen",
                vocab: "Einkaufen"
            },
            {
                id: "h_t1_q3",
                type: "mc",
                script: "Guten Tag. Ich möchte nach Köln fahren. Wann geht der nächste Zug? - Der nächste Zug fährt um vierzehn Uhr dreißig auf Gleis vier. - Und wann kommt er an? - Um sechzehn Uhr fünfzehn.",
                question: "Wann kommt der Zug in Köln an?",
                options: [
                    { text: "Um 14:30 Uhr", letter: "A" },
                    { text: "Um 16:15 Uhr", letter: "B" },
                    { text: "Um 16:30 Uhr", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "h_t1_q4",
                type: "mc",
                script: "Hallo Peter. Was möchtest du trinken? Kaffee oder Tee? - Kaffee trinke ich morgens nicht, lieber einen Orangensaft bitte. - Und möchtest du auch ein Brötchen essen? - Nein danke, ich habe keinen Hunger.",
                question: "Was trinkt Peter?",
                options: [
                    { text: "Kaffee", letter: "A" },
                    { text: "Tee", letter: "B" },
                    { text: "Orangensaft", letter: "C" }
                ],
                correct: 2, // C
                playback_limit: 2,
                grammar: "Artikel",
                vocab: "Essen & Trinken"
            },
            {
                id: "h_t1_q5",
                type: "mc",
                script: "Entschuldigung, wo ist der Bahnhof? - Gehen Sie hier geradeaus und an der Ampel rechts. Nach hundert Metern sehen Sie den Bahnhof auf der linken Seite. - Vielen Dank! - Bitte, gerne.",
                question: "Wo liegt der Bahnhof?",
                options: [
                    { text: "Geradeaus und an der Ampel links", letter: "A" },
                    { text: "Geradeaus und an der Ampel rechts, dann links", letter: "B" },
                    { text: "Direkt an der nächsten Ecke", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Präpositionen",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "h_t1_q6",
                type: "mc",
                script: "Guten Tag, Herr Müller. Sind Sie am Freitag im Büro? - Nein, am Freitag habe ich frei. Ich bin nur von Montag bis Donnerstag da. Rufen Sie mich am Montag wieder an.",
                question: "An welchen Tagen arbeitet Herr Müller?",
                options: [
                    { text: "Am Freitag", letter: "A" },
                    { text: "Von Montag bis Donnerstag", letter: "B" },
                    { text: "Nur am Montag", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Arbeit & Beruf"
            }
        ],
        teil2: [
            {
                id: "h_t2_q7",
                type: "tf",
                script: "Achtung an Gleis zwei! Der Intercity aus Frankfurt zur Weiterfahrt nach Hamburg fährt heute nicht von Gleis zwei, sondern von Gleis sieben ab. Ich wiederhole: Der Zug nach Hamburg fährt von Gleis sieben.",
                question: "Der Zug nach Hamburg fährt heute von Gleis zwei ab.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false,
                playback_limit: 1,
                grammar: "Präpositionen",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "h_t2_q8",
                type: "tf",
                script: "Sehr geehrte Kunden! Wegen unseres Jubiläums schließen wir heute bereits um achtzehn Uhr statt um zwanzig Uhr. Wir bitten um Ihr Verständnis. Morgen sind wir wieder ab acht Uhr für Sie da.",
                question: "Das Geschäft schließt heute früher als gewöhnlich.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                playback_limit: 1,
                grammar: "Verbbildung",
                vocab: "Einkaufen"
            },
            {
                id: "h_t2_q9",
                type: "tf",
                script: "Achtung im Supermarkt! Heute im Angebot: Frische Erdbeeren aus Spanien, das Kilo für nur zwei Euro neunundneunzig. Greifen Sie zu, das Angebot gilt nur solange der Vorrat reicht.",
                question: "Das Kilo Erdbeeren kostet 2,99 Euro.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                playback_limit: 1,
                grammar: "Zahlen",
                vocab: "Einkaufen"
            },
            {
                id: "h_t2_q10",
                type: "tf",
                script: "Liebe Fluggäste der Lufthansa Flug LH452 nach New York. Bitte begeben Sie sich sofort zum Ausgang B12. Das Boarding beginnt in wenigen Minuten. Bitte halten Sie Ihren Reisepass bereit.",
                question: "Die Passagiere sollen sofort zum Flugausgang gehen.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                playback_limit: 1,
                grammar: "Modalverben",
                vocab: "Reisen & Verkehr"
            }
        ],
        teil3: [
            {
                id: "h_t3_q11",
                type: "mc",
                script: "Hallo Maria, hier ist Stefan. Kannst du mir das Kochbuch mitbringen? Ich koche heute Abend für meine Eltern. - Ja, gern. Liegt es im Wohnzimmer? - Nein, auf dem Küchentisch neben der Kaffeemaschine. - Okay, ich bringe es mit.",
                question: "Wo liegt Stefans Kochbuch?",
                options: [
                    { text: "Im Wohnzimmer", letter: "A" },
                    { text: "Auf dem Küchentisch", letter: "B" },
                    { text: "Im Schlafzimmer", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Präpositionen",
                vocab: "Wohnung & Haus"
            },
            {
                id: "h_t3_q12",
                type: "mc",
                script: "Hallo Julia, hier ist Sabine. Du hast gestern deinen Schirm bei mir vergessen. - Oh, echt? Welchen? Den blauen oder den gelben? - Den gelben. Der blaue steht im Flur, der gehört mir. - Ah, super, ich hole ihn morgen ab.",
                question: "Welchen Schirm hat Julia vergessen?",
                options: [
                    { text: "Den blauen Schirm", letter: "A" },
                    { text: "Den gelben Schirm", letter: "B" },
                    { text: "Den roten Schirm", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Artikel",
                vocab: "Familie & Freunde"
            },
            {
                id: "h_t3_q13",
                type: "mc",
                script: "Guten Tag, Praxis Dr. Weber. Frau Becker, Ihr Termin am Mittwoch muss leider verschoben werden. Passt es Ihnen am Donnerstag um zehn Uhr? - Donnerstag um zehn? Ja, das geht. Vielen Dank.",
                question: "Wann hat Frau Becker den neuen Termin?",
                options: [
                    { text: "Am Mittwoch", letter: "A" },
                    { text: "Am Donnerstag um 10:00 Uhr", letter: "B" },
                    { text: "Am Donnerstag um 14:00 Uhr", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Gesundheit"
            },
            {
                id: "h_t3_q14",
                type: "mc",
                script: "Hallo Claudia. Hast du am Sonntag Zeit? Wir wollen im Park grillen. - Sonntag geht leider nicht, da treffe ich meine Tante. Aber am Samstag habe ich den ganzen Tag Zeit. - Samstag ist auch super, wir sagen den anderen Bescheid.",
                question: "Wann treffen sie sich zum Grillen?",
                options: [
                    { text: "Am Samstag", letter: "A" },
                    { text: "Am Sonntag", letter: "B" },
                    { text: "Am Freitag", letter: "C" }
                ],
                correct: 0, // A
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Freizeit & Hobbys"
            },
            {
                id: "h_t3_q15",
                type: "mc",
                script: "Hallo Anna. Hast du ein Auto für den Umzug? - Nein, aber mein Bruder hat einen kleinen Transporter. Den können wir am Samstag haben. - Klasse! Dann müssen wir keinen mieten.",
                question: "Woher bekommen sie das Auto für den Umzug?",
                options: [
                    { text: "Sie mieten ein Auto", letter: "A" },
                    { text: "Vom Bruder von Anna", letter: "B" },
                    { text: "Vom Vater von Claudia", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Artikel",
                vocab: "Wohnung & Haus"
            }
        ]
    },
    lesen: {
        teil1: [
            {
                id: "l_t1_q1",
                type: "tf",
                text: `<div class="document-box email">
                    <div class="email-meta">
                        <div><strong>Von:</strong> lars.schmidt@gmx.de</div>
                        <div><strong>An:</strong> petra.kruger@web.de</div>
                        <div><strong>Betreff:</strong> Einladung zur Geburtstagsparty</div>
                    </div>
                    <p>Liebe Petra,</p>
                    <p>ich feiere nächsten Samstag meinen Geburtstag! Ich möchte dich herzlich einladen. Wir feiern bei mir zu Hause im Garten ab 18:00 Uhr. Bring bitte gute Laune mit, für Essen und Getränke ist gesorgt. Sag mir bitte bis Donnerstag Bescheid, ob du kommen kannst.</p>
                    <p>Liebe Grüße,<br>Lars</p>
                </div>`,
                question: "Lars feiert seinen Geburtstag im Garten.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                grammar: "Präpositionen",
                vocab: "Familie & Freunde"
            },
            {
                id: "l_t1_q2",
                type: "tf",
                text: `<div class="document-box email">
                    <div class="email-meta">
                        <div><strong>Von:</strong> lars.schmidt@gmx.de</div>
                        <div><strong>An:</strong> petra.kruger@web.de</div>
                        <div><strong>Betreff:</strong> Einladung zur Geburtstagsparty</div>
                    </div>
                    <p>Liebe Petra,</p>
                    <p>ich feiere nächsten Samstag meinen Geburtstag! Ich möchte dich herzlich einladen. Wir feiern bei mir zu Hause im Garten ab 18:00 Uhr. Bring bitte gute Laune mit, für Essen und Getränke ist gesorgt. Sag mir bitte bis Donnerstag Bescheid, ob du kommen kannst.</p>
                    <p>Liebe Grüße,<br>Lars</p>
                </div>`,
                question: "Petra soll bis nächsten Samstag antworten.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false, // Must reply by Thursday
                grammar: "Zeitangaben",
                vocab: "Familie & Freunde"
            },
            {
                id: "l_t1_q3",
                type: "tf",
                text: `<div class="document-box email">
                    <div class="email-meta">
                        <div><strong>Von:</strong> hotel.alpenblick@tirol.at</div>
                        <div><strong>An:</strong> markus.braun@t-online.de</div>
                        <div><strong>Betreff:</strong> Ihre Reservierung vom 12.08. bis 15.08.</div>
                    </div>
                    <p>Sehr geehrter Herr Braun,</p>
                    <p>wir bestätigen Ihre Zimmerreservierung für ein Einzelzimmer mit Frühstück vom 12. bis zum 15. August. Das Zimmer kostet 75 Euro pro Nacht. Sie können am Anreisetag ab 14:00 Uhr einchecken. Wenn Sie nach 20:00 Uhr ankommen, informieren Sie uns bitte per Telefon.</p>
                    <p>Mit freundlichen Grüßen,<br>Familie Huber (Hotel Alpenblick)</p>
                </div>`,
                question: "Herr Braun hat ein Doppelzimmer reserviert.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false, // Reserved a Single room (Einzelzimmer)
                grammar: "Artikel",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "l_t1_q4",
                type: "tf",
                text: `<div class="document-box email">
                    <div class="email-meta">
                        <div><strong>Von:</strong> hotel.alpenblick@tirol.at</div>
                        <div><strong>An:</strong> markus.braun@t-online.de</div>
                        <div><strong>Betreff:</strong> Ihre Reservierung vom 12.08. bis 15.08.</div>
                    </div>
                    <p>Sehr geehrter Herr Braun,</p>
                    <p>wir bestätigen Ihre Zimmerreservierung für ein Einzelzimmer mit Frühstück vom 12. bis zum 15. August. Das Zimmer kostet 75 Euro pro Nacht. Sie können am Anreisetag ab 14:00 Uhr einchecken. Wenn Sie nach 20:00 Uhr ankommen, informieren Sie uns bitte per Telefon.</p>
                    <p>Mit freundlichen Grüßen,<br>Familie Huber (Hotel Alpenblick)</p>
                </div>`,
                question: "Herr Braun muss Bescheid sagen, wenn er spät anreist.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                grammar: "Modalverben",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "l_t1_q5",
                type: "tf",
                text: `<div class="document-box email">
                    <div class="email-meta">
                        <div><strong>Von:</strong> info@sprachschule-dialog.de</div>
                        <div><strong>An:</strong> studenten-liste@sprachschule.de</div>
                        <div><strong>Betreff:</strong> Ausfall des Deutschkurses morgen</div>
                    </div>
                    <p>Liebe Kursteilnehmer,</p>
                    <p>unsere Lehrerin, Frau Sommer, ist leider krank. Der Deutschkurs findet morgen am Dienstag nicht statt. Wir holen den Unterricht am Freitag von 9:00 bis 12:00 Uhr im Raum 204 nach. Der Unterricht am Mittwoch findet ganz normal statt.</p>
                    <p>Vielen Dank für Ihr Verständnis.<br>Ihr Sprachschul-Team</p>
                </div>`,
                question: "Der Deutschkurs fällt am Mittwoch aus.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false, // Fails on Tuesday (morgen)
                grammar: "Zeitangaben",
                vocab: "Arbeit & Beruf"
            }
        ],
        teil2: [
            {
                id: "l_t2_q6",
                type: "matching",
                situation: "Situation: Sie möchten billig Urlaub in Deutschland machen und suchen Informationen über Jugendherbergen (youth hostels).",
                text: `<div class="matching-ads-container">
                    <div class="document-box info">
                        <strong>Anzeige A: www.hotel-berlin-mitte.de</strong>
                        <p>Genießen Sie Ihren Aufenthalt im Herzen Berlins! Luxuszimmer ab 120 € pro Nacht. Exklusives Frühstücksbuffet, Wellnessbereich und geführte City-Touren inklusive.</p>
                    </div>
                    <div class="document-box info">
                        <strong>Anzeige B: www.jugendherberge-deutschland.net</strong>
                        <p>Günstig übernachten für Schüler, Studenten und Familien. Betten ab 18 € pro Nacht inklusive Bettwäsche. Standorte in ganz Deutschland!</p>
                    </div>
                </div>`,
                question: "Welche Anzeige passt zu Ihrem Wunsch?",
                options: [
                    { text: "Anzeige A", val: "A" },
                    { text: "Anzeige B", val: "B" }
                ],
                correct: "B",
                grammar: "Artikel",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "l_t2_q7",
                type: "matching",
                situation: "Situation: Sie möchten am Wochenende mit dem Zug von München nach Hamburg fahren und suchen einen Fahrplan.",
                text: `<div class="matching-ads-container">
                    <div class="document-box info">
                        <strong>Anzeige A: www.bahn-deutschland.de</strong>
                        <p>Buchen Sie Ihre Zugtickets direkt online. Alle Verbindungen, Fahrpläne und Spezialpreise für den Fernverkehr in Deutschland und Europa.</p>
                    </div>
                    <div class="document-box info">
                        <strong>Anzeige B: www.mietwagen-muenchen.com</strong>
                        <p>Autovermietung direkt am Hauptbahnhof München. Große Auswahl an Kleinwagen, Limousinen und Transportern ab 25 € pro Tag.</p>
                    </div>
                </div>`,
                question: "Welche Anzeige passt zu Ihrem Wunsch?",
                options: [
                    { text: "Anzeige A", val: "A" },
                    { text: "Anzeige B", val: "B" }
                ],
                correct: "A",
                grammar: "Artikel",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "l_t2_q8",
                type: "matching",
                situation: "Situation: Sie haben Zahnschmerzen und suchen einen Zahnarzt am Samstagabend.",
                text: `<div class="matching-ads-container">
                    <div class="document-box info">
                        <strong>Anzeige A: Zahnarztpraxis Dr. Becker</strong>
                        <p>Moderne Praxis für die ganze Familie. Öffnungszeiten: Montag bis Freitag von 8:00 bis 18:00 Uhr. Terminvereinbarung online.</p>
                    </div>
                    <div class="document-box info">
                        <strong>Anzeige B: Zahnärztlicher Notdienst Stadtklinik</strong>
                        <p>Notaufnahme und Zahnärztliche Versorgung rund um die Uhr, auch an Wochenenden und Feiertagen geöffnet. Keine Anmeldung erforderlich.</p>
                    </div>
                </div>`,
                question: "Welche Anzeige passt zu Ihrem Wunsch?",
                options: [
                    { text: "Anzeige A", val: "A" },
                    { text: "Anzeige B", val: "B" }
                ],
                correct: "B",
                grammar: "Zahlen",
                vocab: "Gesundheit"
            },
            {
                id: "l_t2_q9",
                type: "matching",
                situation: "Situation: Sie möchten Spanisch lernen und suchen einen Gruppen-Kurs am Abend.",
                text: `<div class="matching-ads-container">
                    <div class="document-box info">
                        <strong>Anzeige A: Sprachakademie Interlingua</strong>
                        <p>Spanischkurse für Anfänger und Fortgeschrittene. Abendkurse ab 19 Uhr zweimal wöchentlich. Lernen in kleinen Gruppen.</p>
                    </div>
                    <div class="document-box info">
                        <strong>Anzeige B: Spanisch-Lern-App Duoglot</strong>
                        <p>Lernen Sie Spanisch alleine auf Ihrem Smartphone! Nur 10 Minuten täglich. Kostenloser Download im App-Store.</p>
                    </div>
                </div>`,
                question: "Welche Anzeige passt zu Ihrem Wunsch?",
                options: [
                    { text: "Anzeige A", val: "A" },
                    { text: "Anzeige B", val: "B" }
                ],
                correct: "A",
                grammar: "Zeitangaben",
                vocab: "Arbeit & Beruf"
            },
            {
                id: "l_t2_q10",
                type: "matching",
                situation: "Situation: Sie suchen eine Dreizimmerwohnung zur Miete für Ihre dreiköpfige Familie.",
                text: `<div class="matching-ads-container">
                    <div class="document-box info">
                        <strong>Anzeige A: Gemütliches Einzimmer-Apartment</strong>
                        <p>Ideal für Studenten! 35 qm mit kleiner Küche und Bad in Uninähe zu vermieten. Frei ab sofort für 400 € warm.</p>
                    </div>
                    <div class="document-box info">
                        <strong>Anzeige B: Schöne 3-Zimmerwohnung mit Balkon</strong>
                        <p>85 qm, perfekt für Familien. Ruhige Wohnlage, Küche, Bad, Gäste-WC. Kaltmiete 750 €. Bezugsfertig ab nächsten Monat.</p>
                    </div>
                </div>`,
                question: "Welche Anzeige passt zu Ihrem Wunsch?",
                options: [
                    { text: "Anzeige A", val: "A" },
                    { text: "Anzeige B", val: "B" }
                ],
                correct: "B",
                grammar: "Zahlen",
                vocab: "Wohnung & Haus"
            }
        ],
        teil3: [
            {
                id: "l_t3_q11",
                type: "tf",
                text: `<div class="document-box notice">
                    <h3>Bibliothek der Universität</h3>
                    <p><strong>Achtung:</strong> Wegen Renovierungsarbeiten bleibt die Bibliothek vom 15.07. bis 22.07. geschlossen. Buchrückgaben sind über den Kasten am Haupteingang jederzeit möglich.</p>
                </div>`,
                question: "Man kann während der Renovierungsarbeiten keine Bücher zurückgeben.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false, // Can return via box
                grammar: "Präpositionen",
                vocab: "Arbeit & Beruf"
            },
            {
                id: "l_t3_q12",
                type: "tf",
                text: `<div class="document-box notice">
                    <h3>Hauptbahnhof München - Reisezentrum</h3>
                    <p>Fahrkartenkauf und Beratung nur noch an den Ticketautomaten oder online. Unser Service-Schalter ist ab sofort nur noch für Reklamationen und Umtausch geöffnet.</p>
                </div>`,
                question: "Man kann Fahrkarten am Service-Schalter kaufen.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false, // Purchase only online or ticket machine
                grammar: "Wortstellung",
                vocab: "Reisen & Verkehr"
            },
            {
                id: "l_t3_q13",
                type: "tf",
                text: `<div class="document-box notice">
                    <h3>Städtisches Hallenbad</h3>
                    <p>Zutritt für Kinder unter 10 Jahren ist nur in Begleitung eines Erwachsenen gestattet. Bitte beachten Sie die Badeordnung am Beckenrand.</p>
                </div>`,
                question: "Ein 8-jähriges Kind darf nicht allein in das Hallenbad gehen.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                grammar: "Modalverben",
                vocab: "Freizeit & Hobbys"
            },
            {
                id: "l_t3_q14",
                type: "tf",
                text: `<div class="document-box notice">
                    <h3>Restaurant Krone</h3>
                    <p>Heute Abend geschlossen wegen einer geschlossenen Gesellschaft (Hochzeitsfeier). Ab morgen Mittag sind wir wieder wie gewohnt ab 12 Uhr für Sie da.</p>
                </div>`,
                question: "Heute Abend kann man im Restaurant Krone normal essen.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false, // Closed for private party
                grammar: "Zeitangaben",
                vocab: "Essen & Trinken"
            },
            {
                id: "l_t3_q15",
                type: "tf",
                text: `<div class="document-box notice">
                    <h3>Supermarkt - Eingangsbereich</h3>
                    <p>Hunde müssen draußen bleiben! Bitte leinen Sie Ihren Hund vor dem Eingang an. Blindenführhunde sind selbstverständlich erlaubt.</p>
                </div>`,
                question: "Ein Blindenführhund darf mit in den Supermarkt gehen.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                grammar: "Imperativ",
                vocab: "Einkaufen"
            }
        ]
    },
    schreiben: {
        teil1: [
            {
                id: "s_t1_q1",
                type: "form",
                text: `<p><strong>Situation:</strong> Ihr Freund John Davies aus England (geboren am 14. Mai 1995 in London) möchte im Sommer einen vierwöchigen Deutschkurs an einer Sprachschule in Berlin besuchen. Er arbeitet als Ingenieur und lebt jetzt in Manchester (Oxford Street 45, M1 3BE). Er hat noch keine Deutschkenntnisse.</p>
                <p>Helfen Sie John und tragen Sie die 5 fehlenden Informationen in das Online-Formular der Sprachschule ein.</p>`,
                fields: [
                    { label: "1. Geburtsort (Place of Birth)", key: "birth_place", correct: "london" },
                    { label: "2. Beruf (Profession)", key: "profession", correct: "ingenieur" },
                    { label: "3. Wohnort (Current City)", key: "city", correct: "manchester" },
                    { label: "4. Kursdauer (Course Duration)", key: "duration", correct: "4 wochen" }, // accepts 4 wochen or vier wochen
                    { label: "5. Deutschkenntnisse (German Knowledge - Ja/Nein)", key: "knowledge", correct: "nein" }
                ]
            }
        ],
        teil2: [
            {
                id: "s_t2_q1",
                type: "email_editor",
                text: `<p><strong>Schreiben Sie eine E-Mail:</strong></p>
                <p>Sie möchten am kommenden Samstag ein Fahrradgeschäft besuchen, um ein neues Fahrrad zu kaufen. Schreiben Sie eine E-Mail an das Geschäft (Fahrrad Müller):</p>
                <ul>
                    <li>Sagen Sie, wann Sie kommen möchten.</li>
                    <li>Erklären Sie, was für ein Fahrrad Sie suchen (z.B. Stadtrad, Mountainbike).</li>
                    <li>Fragen Sie nach dem Preis und Beratungsterminen.</li>
                </ul>
                <p><em>Schreiben Sie 30–50 Wörter. Denken Sie an die passende Anrede und einen Gruß am Ende.</em></p>`
            }
        ]
    },
    sprechen: {
        teil1: [
            {
                id: "sp_t1_q1",
                type: "sprechen_self",
                title: "Sich vorstellen (Introduce yourself)",
                prompt: "Stellen Sie sich vor. Nutzen Sie die Stichpunkte:",
                keywords: ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Beruf", "Hobby"],
                hints: "z.B. Ich heiße... Ich bin... Jahre alt. Ich komme aus... Ich wohne in..."
            }
        ],
        teil2: [
            {
                id: "sp_t2_card1",
                type: "sprechen_card",
                theme: "Thema: Essen & Trinken",
                icon: "🍞",
                word: "Brot",
                instruction: "Fragen Sie Ihren Partner nach Brot. (Ask a question about bread)",
                hints: "z.B. Essen Sie gerne Brot? / Wo kann ich frisches Brot kaufen?"
            },
            {
                id: "sp_t2_card2",
                type: "sprechen_card",
                theme: "Thema: Einkaufen",
                icon: "🏪",
                word: "Supermarkt",
                instruction: "Formulieren Sie eine Frage mit 'Supermarkt'. (Ask a question about a supermarket)",
                hints: "z.B. Wann öffnet der Supermarkt? / Wo ist der nächste Supermarkt?"
            }
        ],
        teil3: [
            {
                id: "sp_t3_card1",
                type: "sprechen_card",
                theme: "Situation: Bitte formulieren",
                icon: "💧",
                word: "Wasser",
                instruction: "Bitten Sie um ein Glas Wasser. (Make a polite request for water)",
                hints: "z.B. Geben Sie mir bitte ein Glas Wasser? / Kann ich bitte etwas Wasser haben?"
            },
            {
                id: "sp_t3_card2",
                type: "sprechen_card",
                theme: "Situation: Bitte formulieren",
                icon: "🔑",
                word: "Schlüssel",
                instruction: "Geben Sie dem Partner einen Schlüssel oder bitten Sie darum. (Ask for the key)",
                hints: "z.B. Geben Sie mir bitte den Schlüssel? / Wo ist der Schlüssel?"
            }
        ]
    }
};

// --- PRACTICE MODE DATABASE ---
const VOCABULARY_DATABASE = {
    familie: [
        { word: "die Mutter", translation: "Mother", example: "Meine Mutter kocht das Essen.", exampleTranslation: "My mother cooks the food.", emoji: "👩" },
        { word: "der Vater", translation: "Father", example: "Mein Vater arbeitet im Garten.", exampleTranslation: "My father works in the garden.", emoji: "👨" },
        { word: "die Schwester", translation: "Sister", example: "Meine Schwester lernt Deutsch.", exampleTranslation: "My sister learns German.", emoji: "👧" },
        { word: "der Bruder", translation: "Brother", example: "Mein Bruder spielt Fußball.", exampleTranslation: "My brother plays football.", emoji: "👦" },
        { word: "die Tochter", translation: "Daughter", example: "Ihre Tochter geht in die Schule.", exampleTranslation: "Her daughter goes to school.", emoji: "👧" },
        { word: "der Sohn", translation: "Son", example: "Sein Sohn ist noch sehr jung.", exampleTranslation: "His son is still very young.", emoji: "👦" },
        { word: "die Großmutter", translation: "Grandmother", example: "Meine Großmutter kocht sehr gut.", exampleTranslation: "My grandmother cooks very well.", emoji: "👵" },
        { word: "der Großvater", translation: "Grandfather", example: "Mein Großvater liest ein Buch.", exampleTranslation: "My grandfather reads a book.", emoji: "👴" },
        { word: "das Kind", translation: "Child", example: "Das Kind spielt im Park.", exampleTranslation: "The child plays in the park.", emoji: "👶" },
        { word: "die Eltern", translation: "Parents", example: "Meine Eltern wohnen in Berlin.", exampleTranslation: "My parents live in Berlin.", emoji: "👨‍👩‍👧‍👦" },
        { word: "der Onkel", translation: "Uncle", example: "Mein Onkel wohnt in Hamburg.", exampleTranslation: "My uncle lives in Hamburg.", emoji: "👨‍💼" },
        { word: "die Tante", translation: "Aunt", example: "Meine Tante kommt heute zu Besuch.", exampleTranslation: "My aunt is coming to visit today.", emoji: "👩‍💼" }
    ],
    begruessung: [
        { word: "Hallo", translation: "Hello", example: "Hallo, wie geht es dir?", exampleTranslation: "Hello, how are you?", emoji: "👋" },
        { word: "Guten Morgen", translation: "Good morning", example: "Guten Morgen, mein Freund!", exampleTranslation: "Good morning, my friend!", emoji: "🌅" },
        { word: "Guten Tag", translation: "Good day", example: "Guten Tag, Herr Müller.", exampleTranslation: "Good day, Mr. Müller.", emoji: "☀️" },
        { word: "Guten Abend", translation: "Good evening", example: "Guten Abend, meine Damen und Herren.", exampleTranslation: "Good evening, ladies and gentlemen.", emoji: "🌇" },
        { word: "Auf Wiedersehen", translation: "Goodbye", example: "Auf Wiedersehen, bis bald!", exampleTranslation: "Goodbye, see you soon!", emoji: "👋" },
        { word: "Tschüss", translation: "Bye", example: "Tschüss, einen schönen Tag noch!", exampleTranslation: "Bye, have a nice day!", emoji: "🙋" },
        { word: "Wie geht es dir?", translation: "How are you?", example: "Hallo Ben, wie geht es dir?", exampleTranslation: "Hello Ben, how are you?", emoji: "❓" },
        { word: "Danke, gut", translation: "Thanks, good", example: "Wie geht es dir? - Danke, gut.", exampleTranslation: "How are you? - Thanks, good.", emoji: "👍" },
        { word: "Freut mich", translation: "Nice to meet you", example: "Ich bin Tom. - Freut mich.", exampleTranslation: "I'm Tom. - Nice to meet you.", emoji: "🤝" },
        { word: "Bitte", translation: "Please/You're welcome", example: "Ein Wasser, bitte. - Bitte sehr.", exampleTranslation: "A water, please. - Here you go.", emoji: "🙏" },
        { word: "Wie heißen Sie?", translation: "What is your name?", example: "Hallo, wie heißen Sie?", exampleTranslation: "Hello, what is your name?", emoji: "❓" },
        { word: "Ich heiße...", translation: "My name is...", example: "Ich heiße Michael.", exampleTranslation: "My name is Michael.", emoji: "👤" }
    ],
    personalinfo: [
        { word: "der Name", translation: "Name", example: "Mein Name ist Thomas.", exampleTranslation: "My name is Thomas.", emoji: "📛" },
        { word: "das Alter", translation: "Age", example: "Sein Alter ist unbekannt.", exampleTranslation: "His age is unknown.", emoji: "🎂" },
        { word: "die Adresse", translation: "Address", example: "Wie ist Ihre Adresse?", exampleTranslation: "What is your address?", emoji: "📍" },
        { word: "die Telefonnummer", translation: "Telephone number", example: "Geben Sie mir Ihre Telefonnummer.", exampleTranslation: "Give me your telephone number.", emoji: "📞" },
        { word: "der Wohnort", translation: "Place of residence", example: "Mein Wohnort ist Köln.", exampleTranslation: "My place of residence is Cologne.", emoji: "🏠" },
        { word: "verheiratet", translation: "Married", example: "Sind Sie verheiratet?", exampleTranslation: "Are you married?", emoji: "💍" },
        { word: "ledig", translation: "Single", example: "Ich bin ledig und suche eine Arbeit.", exampleTranslation: "I am single and looking for work.", emoji: "👤" },
        { word: "das Geburtsdatum", translation: "Date of birth", example: "Schreiben Sie Ihr Geburtsdatum auf.", exampleTranslation: "Write down your date of birth.", emoji: "📅" },
        { word: "das Herkunftsland", translation: "Country of origin", example: "Mein Herkunftsland ist Spanien.", exampleTranslation: "My country of origin is Spain.", emoji: "🌐" },
        { word: "das Geschlecht", translation: "Gender", example: "Bitte kreuzen Sie das Geschlecht an.", exampleTranslation: "Please check the gender box.", emoji: "⚧" },
        { word: "die Unterschrift", translation: "Signature", example: "Ihre Unterschrift fehlt noch.", exampleTranslation: "Your signature is still missing.", emoji: "✍️" },
        { word: "das Formular", translation: "Form", example: "Füllen Sie das Formular aus.", exampleTranslation: "Fill out the form.", emoji: "📄" }
    ],
    laender: [
        { word: "Deutschland", translation: "Germany", example: "Deutschland liegt in Europa.", exampleTranslation: "Germany is located in Europe.", emoji: "🇩🇪" },
        { word: "Österreich", translation: "Austria", example: "Österreich ist sehr schön.", exampleTranslation: "Austria is very beautiful.", emoji: "🇦🇹" },
        { word: "die Schweiz", translation: "Switzerland", example: "Ich reise in die Schweiz.", exampleTranslation: "I travel to Switzerland.", emoji: "🇨🇭" },
        { word: "Deutsch", translation: "German (language)", example: "Wir lernen Deutsch.", exampleTranslation: "We learn German.", emoji: "🗣️" },
        { word: "Englisch", translation: "English (language)", example: "Er spricht gut Englisch.", exampleTranslation: "He speaks English well.", emoji: "🗣️" },
        { word: "Frankreich", translation: "France", example: "Frankreich ist ein Nachbarland.", exampleTranslation: "France is a neighboring country.", emoji: "🇫🇷" },
        { word: "Französisch", translation: "French (language)", example: "Französisch ist eine Weltsprache.", exampleTranslation: "French is a global language.", emoji: "🗣️" },
        { word: "Spanien", translation: "Spain", example: "Spanien hat warme Strände.", exampleTranslation: "Spain has warm beaches.", emoji: "🇪🇸" },
        { word: "Spanisch", translation: "Spanish (language)", example: "Lernst du Spanisch?", exampleTranslation: "Are you learning Spanish?", emoji: "🗣️" },
        { word: "sprechen", translation: "to speak", example: "Sie sprechen Deutsch.", exampleTranslation: "They speak German.", emoji: "🗣️" },
        { word: "die Sprache", translation: "Language", example: "Welche Sprache sprechen Sie?", exampleTranslation: "Which language do you speak?", emoji: "🗣️" },
        { word: "das Land", translation: "Country", example: "Aus welchem Land kommen Sie?", exampleTranslation: "Which country do you come from?", emoji: "🗺️" }
    ],
    tage: [
        { word: "der Montag", translation: "Monday", example: "Montag gehe ich arbeiten.", exampleTranslation: "Monday I go to work.", emoji: "📅" },
        { word: "der Dienstag", translation: "Tuesday", example: "Dienstag habe ich Deutschkurs.", exampleTranslation: "Tuesday I have German course.", emoji: "📅" },
        { word: "der Mittwoch", translation: "Wednesday", example: "Mittwoch ist die Mitte der Woche.", exampleTranslation: "Wednesday is the middle of the week.", emoji: "📅" },
        { word: "der Donnerstag", translation: "Thursday", example: "Donnerstag kaufe ich ein.", exampleTranslation: "Thursday I go shopping.", emoji: "📅" },
        { word: "der Freitag", translation: "Friday", example: "Am Freitagabend treffe ich Freunde.", exampleTranslation: "On Friday evening I meet friends.", emoji: "📅" },
        { word: "der Samstag", translation: "Saturday", example: "Samstag ist das Wochenende.", exampleTranslation: "Saturday is the weekend.", emoji: "📅" },
        { word: "der Sonntag", translation: "Sunday", example: "Sonntags schlafen wir lange.", exampleTranslation: "On Sundays we sleep late.", emoji: "📅" },
        { word: "der Januar", translation: "January", example: "Der Januar ist oft sehr kalt.", exampleTranslation: "January is often very cold.", emoji: "❄️" },
        { word: "der Februar", translation: "February", example: "Februar hat achtundzwanzig Tage.", exampleTranslation: "February has twenty-eight days.", emoji: "📅" },
        { word: "der März", translation: "March", example: "Im März beginnt der Frühling.", exampleTranslation: "Spring begins in March.", emoji: "🌸" },
        { word: "der April", translation: "April", example: "Der April macht, was er will.", exampleTranslation: "April does what it wants.", emoji: "🌧️" },
        { word: "der Mai", translation: "May", example: "Der Mai ist ein Frühlingsmonat.", exampleTranslation: "May is a spring month.", emoji: "🌸" }
    ],
    zahlen: [
        { word: "null", translation: "zero", example: "Die Nummer lautet null.", exampleTranslation: "The number is zero.", emoji: "🔢" },
        { word: "eins", translation: "one", example: "Eins plus eins ist zwei.", exampleTranslation: "One plus one is two.", emoji: "🔢" },
        { word: "zwei", translation: "two", example: "Wir haben zwei Katzen.", exampleTranslation: "We have two cats.", emoji: "🔢" },
        { word: "drei", translation: "three", example: "Drei Personen kommen heute.", exampleTranslation: "Three people are coming today.", emoji: "🔢" },
        { word: "vier", translation: "four", example: "Das Auto hat vier Räder.", exampleTranslation: "The car has four wheels.", emoji: "🔢" },
        { word: "fünf", translation: "five", example: "Die Hand hat fünf Finger.", exampleTranslation: "The hand has five fingers.", emoji: "🔢" },
        { word: "sechs", translation: "six", example: "Wir treffen uns um sechs Uhr.", exampleTranslation: "We meet at six o'clock.", emoji: "🔢" },
        { word: "sieben", translation: "seven", example: "Die Woche hat sieben Tage.", exampleTranslation: "The week has seven days.", emoji: "🔢" },
        { word: "acht", translation: "eight", example: "Acht Euro kostet das Ticket.", exampleTranslation: "The ticket costs eight Euros.", emoji: "🔢" },
        { word: "neun", translation: "nine", example: "Es ist jetzt neun Uhr.", exampleTranslation: "It is nine o'clock now.", emoji: "🔢" },
        { word: "zehn", translation: "ten", example: "Zehn Leute sind im Kurs.", exampleTranslation: "Ten people are in the class.", emoji: "🔢" },
        { word: "hundert", translation: "one hundred", example: "Das Buch hat hundert Seiten.", exampleTranslation: "The book has one hundred pages.", emoji: "🔢" }
    ],
    uhrzeit: [
        { word: "die Uhrzeit", translation: "Time of day", example: "Wie ist die Uhrzeit?", exampleTranslation: "What is the time?", emoji: "⏰" },
        { word: "die Stunde", translation: "Hour", example: "Eine Stunde hat sechzig Minuten.", exampleTranslation: "An hour has sixty minutes.", emoji: "⏱️" },
        { word: "die Minute", translation: "Minute", example: "Warten Sie bitte eine Minute.", exampleTranslation: "Please wait a minute.", emoji: "⏱️" },
        { word: "die Sekunde", translation: "Second", example: "Jede Sekunde zählt im Notfall.", exampleTranslation: "Every second counts in an emergency.", emoji: "⏱️" },
        { word: "der Termin", translation: "Appointment", example: "Ich habe einen Termin beim Arzt.", exampleTranslation: "I have an appointment with the doctor.", emoji: "📅" },
        { word: "spät", translation: "late", example: "Es ist schon sehr spät.", exampleTranslation: "It is already very late.", emoji: "🌙" },
        { word: "früh", translation: "early", example: "Morgens stehe ich früh auf.", exampleTranslation: "In the morning I get up early.", emoji: "🌅" },
        { word: "die Uhr", translation: "Clock/o'clock", example: "Die Uhr zeigt zwei Uhr.", exampleTranslation: "The clock shows two o'clock.", emoji: "🕒" },
        { word: "heute", translation: "today", example: "Heute lerne ich Deutsch.", exampleTranslation: "Today I learn German.", emoji: "📅" },
        { word: "morgen", translation: "tomorrow", example: "Morgen besuche ich meine Eltern.", exampleTranslation: "Tomorrow I will visit my parents.", emoji: "📅" },
        { word: "gestern", translation: "yesterday", example: "Gestern war ich im Kino.", exampleTranslation: "Yesterday I was at the cinema.", emoji: "📅" },
        { word: "die Freizeit", translation: "Free time", example: "In der Freizeit spiele ich Tennis.", exampleTranslation: "In my free time I play tennis.", emoji: "⚽" }
    ],
    wetter: [
        { word: "das Wetter", translation: "Weather", example: "Wie ist das Wetter heute?", exampleTranslation: "How is the weather today?", emoji: "☀️" },
        { word: "die Sonne", translation: "Sun", example: "Die Sonne scheint heute warm.", exampleTranslation: "The sun is shining warm today.", emoji: "☀️" },
        { word: "der Regen", translation: "Rain", example: "Der Regen fällt vom Himmel.", exampleTranslation: "The rain is falling from the sky.", emoji: "🌧️" },
        { word: "der Schnee", translation: "Snow", example: "Im Winter liegt weißer Schnee.", exampleTranslation: "In winter, white snow lies around.", emoji: "❄️" },
        { word: "der Wind", translation: "Wind", example: "Der Wind bläst heute stark.", exampleTranslation: "The wind is blowing strongly today.", emoji: "💨" },
        { word: "kalt", translation: "cold", example: "Mir ist heute sehr kalt.", exampleTranslation: "I am very cold today.", emoji: "🥶" },
        { word: "warm", translation: "warm", example: "Das Wetter ist heute warm.", exampleTranslation: "The weather is warm today.", emoji: "☀️" },
        { word: "heiß", translation: "hot", example: "Der Tee ist noch zu heiß.", exampleTranslation: "The tea is still too hot.", emoji: "🥵" },
        { word: "die Wolke", translation: "Cloud", example: "Am Himmel steht eine Wolke.", exampleTranslation: "There is a cloud in the sky.", emoji: "☁️" },
        { word: "der Frühling", translation: "Spring", example: "Im Frühling blühen die Blumen.", exampleTranslation: "Flowers bloom in spring.", emoji: "🌸" },
        { word: "der Sommer", translation: "Summer", example: "Der Sommer ist die wärmste Zeit.", exampleTranslation: "Summer is the warmest time.", emoji: "🏖️" },
        { word: "der Herbst", translation: "Autumn", example: "Die Blätter fallen im Herbst.", exampleTranslation: "The leaves fall in autumn.", emoji: "🍂" }
    ],
    wohnung: [
        { word: "das Haus", translation: "House", example: "Wir wohnen in einem Haus.", exampleTranslation: "We live in a house.", emoji: "🏠" },
        { word: "die Wohnung", translation: "Apartment", example: "Ich suche eine kleine Wohnung.", exampleTranslation: "I am looking for a small apartment.", emoji: "🏢" },
        { word: "das Zimmer", translation: "Room", example: "Mein Zimmer hat einen Balkon.", exampleTranslation: "My room has a balcony.", emoji: "🚪" },
        { word: "die Küche", translation: "Kitchen", example: "In der Küche koche ich Kaffee.", exampleTranslation: "In the kitchen I brew coffee.", emoji: "🍳" },
        { word: "das Bad", translation: "Bathroom", example: "Das Bad ist frisch renoviert.", exampleTranslation: "The bathroom is freshly renovated.", emoji: "🚿" },
        { word: "das Bett", translation: "Bed", example: "Das Bett ist sehr bequem.", exampleTranslation: "The bed is very comfortable.", emoji: "🛏️" },
        { word: "der Tisch", translation: "Table", example: "Das Essen steht auf dem Tisch.", exampleTranslation: "The food is on the table.", emoji: "🪑" },
        { word: "der Stuhl", translation: "Chair", example: "Setzen Sie sich auf den Stuhl.", exampleTranslation: "Please sit down on the chair.", emoji: "🪑" },
        { word: "der Schrank", translation: "Wardrobe/Cabinet", example: "Die Kleider hängen im Schrank.", exampleTranslation: "The clothes hang in the wardrobe.", emoji: "🚪" },
        { word: "die Tür", translation: "Door", example: "Bitte schließen Sie die Tür.", exampleTranslation: "Please close the door.", emoji: "🚪" },
        { word: "das Fenster", translation: "Window", example: "Öffnen Sie bitte das Fenster.", exampleTranslation: "Please open the window.", emoji: "🪟" },
        { word: "die Miete", translation: "Rent", example: "Die Miete ist sehr teuer.", exampleTranslation: "The rent is very expensive.", emoji: "💵" }
    ],
    kleidung: [
        { word: "das Kleid", translation: "Dress", example: "Das Kleid passt ihr perfekt.", exampleTranslation: "The dress fits her perfectly.", emoji: "👗" },
        { word: "die Hose", translation: "Trousers/Pants", example: "Ich kaufe eine blaue Hose.", exampleTranslation: "I am buying blue pants.", emoji: "👖" },
        { word: "das Hemd", translation: "Shirt", example: "Er trägt ein weißes Hemd.", exampleTranslation: "He is wearing a white shirt.", emoji: "👔" },
        { word: "die Jacke", translation: "Jacket", example: "Die Jacke schützt vor Wind.", exampleTranslation: "The jacket protects from wind.", emoji: "🧥" },
        { word: "der Schuh", translation: "Shoe", example: "Ich brauche neue Schuhe.", exampleTranslation: "I need new shoes.", emoji: "👟" },
        { word: "der Rock", translation: "Skirt", example: "Der Rock ist schwarz.", exampleTranslation: "The skirt is black.", emoji: "👗" },
        { word: "der Mantel", translation: "Coat", example: "Im Winter trage ich einen Mantel.", exampleTranslation: "In winter I wear a coat.", emoji: "🧥" },
        { word: "das T-Shirt", translation: "T-shirt", example: "Das T-Shirt ist aus Baumwolle.", exampleTranslation: "The T-shirt is made of cotton.", emoji: "👕" },
        { word: "tragen", translation: "to wear", example: "Sie trägt eine Brille.", exampleTranslation: "She wears glasses.", emoji: "👓" },
        { word: "die Größe", translation: "Size", example: "Welche Größe haben Sie?", exampleTranslation: "What size do you wear?", emoji: "📏" },
        { word: "anziehen", translation: "to put on", example: "Er zieht die Jacke an.", exampleTranslation: "He puts on the jacket.", emoji: "🧥" },
        { word: "ausziehen", translation: "to take off", example: "Bitte ziehen Sie die Schuhe aus.", exampleTranslation: "Please take off your shoes.", emoji: "👟" }
    ],
    essen: [
        { word: "das Brot", translation: "Bread", example: "Er isst ein Brot mit Butter.", exampleTranslation: "He is eating bread with butter.", emoji: "🍞" },
        { word: "das Wasser", translation: "Water", example: "Ich trinke ein Glas Wasser.", exampleTranslation: "I drink a glass of water.", emoji: "🥛" },
        { word: "das Obst", translation: "Fruit", example: "Obst ist gut für die Gesundheit.", exampleTranslation: "Fruit is good for health.", emoji: "🍎" },
        { word: "das Gemüse", translation: "Vegetables", example: "Wir kaufen frisches Gemüse.", exampleTranslation: "We buy fresh vegetables.", emoji: "🥦" },
        { word: "der Apfel", translation: "Apple", example: "Der Apfel schmeckt süß.", exampleTranslation: "The apple tastes sweet.", emoji: "🍎" },
        { word: "die Milch", translation: "Milk", example: "Kinder trinken gerne Milch.", exampleTranslation: "Children like to drink milk.", emoji: "🥛" },
        { word: "der Käse", translation: "Cheese", example: "Der Käse kommt aus der Schweiz.", exampleTranslation: "The cheese comes from Switzerland.", emoji: "🧀" },
        { word: "das Fleisch", translation: "Meat", example: "Ich esse kein Fleisch.", exampleTranslation: "I do not eat meat.", emoji: "🥩" },
        { word: "der Fisch", translation: "Fish", example: "Der Fisch schwimmt im Wasser.", exampleTranslation: "The fish swims in the water.", emoji: "🐟" },
        { word: "essen", translation: "to eat", example: "Wir essen gerne Pizza.", exampleTranslation: "We like to eat pizza.", emoji: "🍽️" },
        { word: "trinken", translation: "to drink", example: "Ich trinke morgens Kaffee.", exampleTranslation: "I drink coffee in the morning.", emoji: "☕" },
        { word: "das Restaurant", translation: "Restaurant", example: "Das Restaurant ist sehr gemütlich.", exampleTranslation: "The restaurant is very cozy.", emoji: "🍽️" }
    ],
    einkaufen: [
        { word: "kaufen", translation: "to buy", example: "Ich kaufe ein neues Handy.", exampleTranslation: "I am buying a new phone.", emoji: "🛍️" },
        { word: "bezahlen", translation: "to pay", example: "Wir bezahlen an der Kasse.", exampleTranslation: "We pay at the cash desk.", emoji: "💳" },
        { word: "das Geld", translation: "Money", example: "Er hat nicht genug Geld.", exampleTranslation: "He does not have enough money.", emoji: "💰" },
        { word: "teuer", translation: "expensive", example: "Das Buch ist sehr teuer.", exampleTranslation: "The book is very expensive.", emoji: "💵" },
        { word: "billig", translation: "cheap", example: "Die Äpfel sind heute billig.", exampleTranslation: "The apples are cheap today.", emoji: "🏷️" },
        { word: "das Geschäft", translation: "Shop/Store", example: "Das Geschäft schließt um acht Uhr.", exampleTranslation: "The shop closes at eight o'clock.", emoji: "🏪" },
        { word: "der Preis", translation: "Price", example: "Der Preis ist angemessen.", exampleTranslation: "The price is reasonable.", emoji: "🪙" },
        { word: "die Kasse", translation: "Cash desk", example: "Bitte zahlen Sie an der Kasse.", exampleTranslation: "Please pay at the cash desk.", emoji: "💰" },
        { word: "kosten", translation: "to cost", example: "Wie viel kostet dieses Buch?", exampleTranslation: "How much does this book cost?", emoji: "💵" },
        { word: "verkaufen", translation: "to sell", example: "Sie verkauft ihr altes Auto.", exampleTranslation: "She is selling her old car.", emoji: "🚗" },
        { word: "die Tasche", translation: "Bag", example: "Ich trage eine Tasche.", exampleTranslation: "I am carrying a bag.", emoji: "👜" },
        { word: "der Euro", translation: "Euro", example: "Das kostet fünf Euro.", exampleTranslation: "That costs five Euros.", emoji: "💶" }
    ],
    hobbys: [
        { word: "spielen", translation: "to play", example: "Kinder spielen gerne draußen.", exampleTranslation: "Children like playing outside.", emoji: "🎮" },
        { word: "das Hobby", translation: "Hobby", example: "Mein Hobby ist Fotografieren.", exampleTranslation: "My hobby is photography.", emoji: "📸" },
        { word: "schwimmen", translation: "to swim", example: "Im Sommer schwimme ich im See.", exampleTranslation: "In summer I swim in the lake.", emoji: "🏊" },
        { word: "laufen", translation: "to run", example: "Wir laufen im Wald.", exampleTranslation: "We run in the forest.", emoji: "🏃" },
        { word: "Fußball", translation: "Football", example: "Er spielt am Wochenende Fußball.", exampleTranslation: "He plays football on the weekend.", emoji: "⚽" },
        { word: "singen", translation: "to sing", example: "Sie singt ein schönes Lied.", exampleTranslation: "She sings a beautiful song.", emoji: "🎤" },
        { word: "tanzen", translation: "to dance", example: "Wir tanzen gerne am Abend.", exampleTranslation: "We like dancing in the evening.", emoji: "💃" },
        { word: "lesen", translation: "to read", example: "Ich lese ein spannendes Buch.", exampleTranslation: "I am reading an exciting book.", emoji: "📚" },
        { word: "hören", translation: "to hear/listen", example: "Ich höre gerne Musik.", exampleTranslation: "I like listening to music.", emoji: "🎧" },
        { word: "der Sport", translation: "Sport", example: "Sport hält den Körper fit.", exampleTranslation: "Sport keeps the body fit.", emoji: "⚽" },
        { word: "das Fahrrad", translation: "Bicycle", example: "Er fährt mit dem Fahrrad.", exampleTranslation: "He rides a bicycle.", emoji: "🚴" },
        { word: "wandern", translation: "to hike", example: "Wir wandern in den Bergen.", exampleTranslation: "We hike in the mountains.", emoji: "🥾" }
    ],
    reisen: [
        { word: "reisen", translation: "to travel", example: "Wir reisen gerne nach Italien.", exampleTranslation: "We like to travel to Italy.", emoji: "✈️" },
        { word: "der Urlaub", translation: "Vacation/Holiday", example: "Im Sommer mache ich Urlaub.", exampleTranslation: "In summer I take a vacation.", emoji: "🌴" },
        { word: "der Bahnhof", translation: "Train station", example: "Der Bahnhof ist in der Stadt.", exampleTranslation: "The train station is in the city.", emoji: "🚉" },
        { word: "das Ticket", translation: "Ticket", example: "Kaufen Sie ein Ticket am Automaten.", exampleTranslation: "Buy a ticket at the machine.", emoji: "🎫" },
        { word: "der Zug", translation: "Train", example: "Der Zug fährt um neun Uhr ab.", exampleTranslation: "The train departs at nine o'clock.", emoji: "🚆" },
        { word: "der Bus", translation: "Bus", example: "Der Bus hält an der Station.", exampleTranslation: "The bus stops at the station.", emoji: "🚌" },
        { word: "das Auto", translation: "Car", example: "Mein Auto steht auf dem Parkplatz.", exampleTranslation: "My car is in the parking lot.", emoji: "🚗" },
        { word: "das Flugzeug", translation: "Airplane", example: "Das Flugzeug fliegt sehr hoch.", exampleTranslation: "The airplane flies very high.", emoji: "✈️" },
        { word: "das Hotel", translation: "Hotel", example: "Wir übernachten in einem Hotel.", exampleTranslation: "We stay overnight in a hotel.", emoji: "🏨" },
        { word: "das Gepäck", translation: "Luggage", example: "Das Gepäck wiegt zwanzig Kilo.", exampleTranslation: "The luggage weighs twenty kilos.", emoji: "🧳" },
        { word: "abfahren", translation: "to depart", example: "Wann fährt der Zug ab?", exampleTranslation: "When does the train depart?", emoji: "🛫" },
        { word: "ankommen", translation: "to arrive", example: "Wann kommt der Bus an?", exampleTranslation: "When does the bus arrive?", emoji: "🛬" }
    ],
    verkehr: [
        { word: "die S-Bahn", translation: "Suburban train", example: "Ich nehme die S-Bahn zum Büro.", exampleTranslation: "I take the suburban train to the office.", emoji: "🚉" },
        { word: "die U-Bahn", translation: "Subway", example: "Die U-Bahn fährt unter der Erde.", exampleTranslation: "The subway runs underground.", emoji: "🚇" },
        { word: "die Haltestelle", translation: "Stop/Station", example: "Wir warten an der Haltestelle.", exampleTranslation: "We are waiting at the stop.", emoji: "🚏" },
        { word: "die Straße", translation: "Street", example: "Die Straße ist sehr belebt.", exampleTranslation: "The street is very busy.", emoji: "🛣️" },
        { word: "die Kreuzung", translation: "Intersection", example: "Biegen Sie an der Kreuzung links ab.", exampleTranslation: "Turn left at the intersection.", emoji: "🚦" },
        { word: "fahren", translation: "to drive/ride", example: "Wir fahren am Wochenende aufs Land.", exampleTranslation: "We drive to the countryside on the weekend.", emoji: "🚗" },
        { word: "das Fahrrad", translation: "Bicycle", example: "Ich fahre gerne mit dem Fahrrad.", exampleTranslation: "I like riding a bicycle.", emoji: "🚴" },
        { word: "die Fahrkarte", translation: "Ticket", example: "Zeigen Sie mir bitte Ihre Fahrkarte.", exampleTranslation: "Please show me your ticket.", emoji: "🎫" },
        { word: "das Gleis", translation: "Track/Platform", example: "Der Zug kommt auf Gleis vier an.", exampleTranslation: "The train arrives on platform four.", emoji: "🛤️" },
        { word: "der Flug", translation: "Flight", example: "Der Flug dauert zwei Stunden.", exampleTranslation: "The flight takes two hours.", emoji: "✈️" },
        { word: "die Ampel", translation: "Traffic light", example: "Halten Sie bei Rot an der Ampel.", exampleTranslation: "Stop at red at the traffic light.", emoji: "🚦" },
        { word: "fliegen", translation: "to fly", example: "Wir fliegen nächste Woche in den Urlaub.", exampleTranslation: "We are flying on vacation next week.", emoji: "✈️" }
    ],
    stadt: [
        { word: "die Stadt", translation: "City", example: "Köln ist eine alte Stadt.", exampleTranslation: "Cologne is an old city.", emoji: "🏙️" },
        { word: "der Park", translation: "Park", example: "Wir gehen im Park spazieren.", exampleTranslation: "We go for a walk in the park.", emoji: "🌳" },
        { word: "das Museum", translation: "Museum", example: "Das Museum zeigt moderne Kunst.", exampleTranslation: "The museum shows modern art.", emoji: "🏛️" },
        { word: "das Cafe", translation: "Cafe", example: "Wir trinken Kaffee im Cafe.", exampleTranslation: "We drink coffee in the cafe.", emoji: "☕" },
        { word: "die Bank", translation: "Bank", example: "Ich hole Geld von der Bank.", exampleTranslation: "I get money from the bank.", emoji: "🏦" },
        { word: "die Post", translation: "Post office", example: "Bringen Sie den Brief zur Post.", exampleTranslation: "Take the letter to the post office.", emoji: "📯" },
        { word: "die Bäckerei", translation: "Bakery", example: "Die Bäckerei öffnet sehr früh.", exampleTranslation: "The bakery opens very early.", emoji: "🍞" },
        { word: "der Markt", translation: "Market", example: "Wir kaufen Obst auf dem Markt.", exampleTranslation: "We buy fruit at the market.", emoji: "🍎" },
        { word: "die Kirche", translation: "Church", example: "Die Kirche ist im Zentrum der Stadt.", exampleTranslation: "The church is in the center of the city.", emoji: "⛪" },
        { word: "der Supermarkt", translation: "Supermarket", example: "Ich kaufe Milch im Supermarkt.", exampleTranslation: "I buy milk in the supermarket.", emoji: "🛒" },
        { word: "die Apotheke", translation: "Pharmacy", example: "Holen Sie die Medizin in der Apotheke.", exampleTranslation: "Get the medicine at the pharmacy.", emoji: "🏥" },
        { word: "die Bibliothek", translation: "Library", example: "In der Bibliothek leihe ich Bücher aus.", exampleTranslation: "In the library I borrow books.", emoji: "📚" }
    ],
    schule: [
        { word: "die Schule", translation: "School", example: "Die Schule beginnt im September.", exampleTranslation: "School begins in September.", emoji: "🏫" },
        { word: "lernen", translation: "to learn", example: "Wir lernen Deutsch für den Beruf.", exampleTranslation: "We learn German for work.", emoji: "🧠" },
        { word: "das Buch", translation: "Book", example: "Lies das Buch aufmerksam.", exampleTranslation: "Read the book carefully.", emoji: "📚" },
        { word: "der Lehrer", translation: "Teacher", example: "Der Lehrer erklärt die Grammatik.", exampleTranslation: "The teacher explains the grammar.", emoji: "👨‍🏫" },
        { word: "die Klasse", translation: "Class/Grade", example: "Sie geht in die fünfte Klasse.", exampleTranslation: "She goes into the fifth grade.", emoji: "🏫" },
        { word: "der Schüler", translation: "Student", example: "Der Schüler schreibt an der Tafel.", exampleTranslation: "The student writes on the blackboard.", emoji: "🎒" },
        { word: "schreiben", translation: "to write", example: "Schreiben Sie bitte Ihre Adresse auf.", exampleTranslation: "Please write down your address.", emoji: "✍️" },
        { word: "lesen", translation: "to read", example: "Ich lese abends im Bett.", exampleTranslation: "I read in bed in the evenings.", emoji: "📖" },
        { word: "die Hausaufgabe", translation: "Homework", example: "Er macht seine Hausaufgabe.", exampleTranslation: "He is doing his homework.", emoji: "📝" },
        { word: "die Prüfung", translation: "Exam", example: "Morgen habe ich eine Deutsch-Prüfung.", exampleTranslation: "Tomorrow I have a German exam.", emoji: "📝" },
        { word: "der Stift", translation: "Pen", example: "Geben Sie mir bitte den Stift.", exampleTranslation: "Please give me the pen.", emoji: "✏️" },
        { word: "verstehen", translation: "to understand", example: "Ich verstehe diesen Satz nicht.", exampleTranslation: "I do not understand this sentence.", emoji: "🧠" }
    ],
    arbeit: [
        { word: "der Beruf", translation: "Job/Profession", example: "Was sind Sie von Beruf?", exampleTranslation: "What is your profession?", emoji: "💼" },
        { word: "arbeiten", translation: "to work", example: "Ich arbeite bei einer Autofirma.", exampleTranslation: "I work at a car company.", emoji: "💻" },
        { word: "das Büro", translation: "Office", example: "Unser Büro ist im dritten Stock.", exampleTranslation: "Our office is on the third floor.", emoji: "🏬" },
        { word: "der Kollege", translation: "Colleague", example: "Mein Kollege hilft mir gerne.", exampleTranslation: "My colleague likes to help me.", emoji: "🧑‍💼" },
        { word: "der Chef", translation: "Boss", example: "Der Chef leitet das Meeting.", exampleTranslation: "The boss leads the meeting.", emoji: "🤵" },
        { word: "der Job", translation: "Job", example: "Ich suche einen neuen Job.", exampleTranslation: "I am looking for a new job.", emoji: "💼" },
        { word: "die Firma", translation: "Company", example: "Die Firma produziert Software.", exampleTranslation: "The company produces software.", emoji: "🏢" },
        { word: "die Arbeit", translation: "Work", example: "Die Arbeit macht mir viel Spaß.", exampleTranslation: "I enjoy work very much.", emoji: "💼" },
        { word: "frei haben", translation: "to have time off", example: "Am Freitag habe ich frei.", exampleTranslation: "On Friday I have the day off.", emoji: "🏖️" },
        { word: "suchen", translation: "to search/look for", example: "Ich suche meine Brille.", exampleTranslation: "I am looking for my glasses.", emoji: "🔍" },
        { word: "finden", translation: "to find", example: "Endlich habe ich einen Job gefunden.", exampleTranslation: "I finally found a job.", emoji: "🪙" },
        { word: "verdienen", translation: "to earn", example: "Er verdient gutes Geld.", exampleTranslation: "He earns good money.", emoji: "🪙" }
    ],
    technologie: [
        { word: "das Handy", translation: "Mobile phone", example: "Ich rufe dich auf dem Handy an.", exampleTranslation: "I will call you on the mobile phone.", emoji: "📱" },
        { word: "der Computer", translation: "Computer", example: "Mein Computer ist sehr schnell.", exampleTranslation: "My computer is very fast.", emoji: "💻" },
        { word: "die E-Mail", translation: "Email", example: "Schreiben Sie eine E-Mail an mich.", exampleTranslation: "Write an email to me.", emoji: "✉️" },
        { word: "das Internet", translation: "Internet", example: "Ich surfe im Internet.", exampleTranslation: "I surf the internet.", emoji: "🌐" },
        { word: "anrufen", translation: "to call (phone)", example: "Rufen Sie mich morgen an.", exampleTranslation: "Call me tomorrow.", emoji: "📞" },
        { word: "die Nachricht", translation: "Message", example: "Ich schicke dir eine Nachricht.", exampleTranslation: "I am sending you a message.", emoji: "💬" },
        { word: "das Telefon", translation: "Telephone", example: "Das Telefon klingelt laut.", exampleTranslation: "The telephone is ringing loudly.", emoji: "☎️" },
        { word: "die Website", translation: "Website", example: "Besuchen Sie unsere Website.", exampleTranslation: "Visit our website.", emoji: "🌐" },
        { word: "online", translation: "online", example: "Der Deutschkurs findet online statt.", exampleTranslation: "The German course takes place online.", emoji: "🌐" },
        { word: "tippen", translation: "to type", example: "Er tippt eine E-Mail.", exampleTranslation: "He is typing an email.", emoji: "⌨️" },
        { word: "der Link", translation: "Link", example: "Klicken Sie auf den Link.", exampleTranslation: "Click on the link.", emoji: "🔗" },
        { word: "das Passwort", translation: "Passwort", example: "Geben Sie Ihr Passwort ein.", exampleTranslation: "Enter your password.", emoji: "🔑" }
    ],
    tagesablauf: [
        { word: "aufstehen", translation: "to get up", example: "Ich stehe um sechs Uhr auf.", exampleTranslation: "I get up at six o'clock.", emoji: "🌅" },
        { word: "schlafen", translation: "to sleep", example: "Das Baby schläft ruhig.", exampleTranslation: "The baby sleeps quietly.", emoji: "💤" },
        { word: "duschen", translation: "to shower", example: "Ich dusche jeden Morgen.", exampleTranslation: "I shower every morning.", emoji: "🚿" },
        { word: "frühstücken", translation: "to eat breakfast", example: "Wir frühstücken um acht Uhr.", exampleTranslation: "We eat breakfast at eight o'clock.", emoji: "🍳" },
        { word: "kochen", translation: "to cook", example: "Sie kocht Suppe zum Abendessen.", exampleTranslation: "She is cooking soup for dinner.", emoji: "🍲" },
        { word: "aufräumen", translation: "to clean up", example: "Ich muss mein Zimmer aufräumen.", exampleTranslation: "I have to clean up my room.", emoji: "🧹" },
        { word: "fernsehen", translation: "to watch TV", example: "Am Abend sehen wir fern.", exampleTranslation: "In the evening we watch TV.", emoji: "📺" },
        { word: "anfangen", translation: "to start", example: "Wann fängt der Film an?", exampleTranslation: "When does the movie start?", emoji: "🎬" },
        { word: "gehen", translation: "to go", example: "Ich gehe jetzt nach Hause.", exampleTranslation: "I am going home now.", emoji: "🚶" },
        { word: "arbeiten", translation: "to work", example: "Ich arbeite von Montag bis Freitag.", exampleTranslation: "I work from Monday to Friday.", emoji: "💼" },
        { word: "schlafen gehen", translation: "to go to sleep", example: "Ich gehe um elf Uhr schlafen.", exampleTranslation: "I go to sleep at eleven o'clock.", emoji: "🛌" },
        { word: "einkaufen", translation: "to go shopping", example: "Ich kaufe im Supermarkt ein.", exampleTranslation: "I go shopping at the supermarket.", emoji: "🛒" }
    ],
    gesundheit: [
        { word: "der Körper", translation: "Body", example: "Der Körper braucht Vitamine.", exampleTranslation: "The body needs vitamins.", emoji: "🧍" },
        { word: "die Hand", translation: "Hand", example: "Geben Sie mir die Hand.", exampleTranslation: "Give me your hand.", emoji: "✋" },
        { word: "der Kopf", translation: "Head", example: "Mein Kopf tut weh.", exampleTranslation: "My head hurts.", emoji: "👤" },
        { word: "das Auge", translation: "Eye", example: "Sie hat blaue Augen.", exampleTranslation: "She has blue eyes.", emoji: "👁️" },
        { word: "das Ohr", translation: "Ear", example: "Er hört mit dem Ohr.", exampleTranslation: "He hears with the ear.", emoji: "👂" },
        { word: "der Fuß", translation: "Foot", example: "Ich gehe zu Fuß.", exampleTranslation: "I go by foot.", emoji: "🦶" },
        { word: "das Bein", translation: "Leg", example: "Mein Bein tut nach dem Sport weh.", exampleTranslation: "My leg hurts after sports.", emoji: "Leg" },
        { word: "gesund", translation: "healthy", example: "Obst essen ist gesund.", exampleTranslation: "Eating fruit is healthy.", emoji: "🍎" },
        { word: "krank", translation: "sick/ill", example: "Ich kann nicht kommen, ich bin krank.", exampleTranslation: "I cannot come, I am sick.", emoji: "🤒" },
        { word: "der Schmerz", translation: "Pain", example: "Ich habe starke Schmerzen im Arm.", exampleTranslation: "I have strong pain in my arm.", emoji: "💊" },
        { word: "weh tun", translation: "to hurt", example: "Mein Zahn tut weh.", exampleTranslation: "My tooth hurts.", emoji: "🦷" },
        { word: "das Fieber", translation: "Fever", example: "Das Kind hat hohes Fieber.", exampleTranslation: "The child has high fever.", emoji: "🌡️" }
    ],
    medizin: [
        { word: "der Arzt", translation: "Doctor", example: "Der Arzt untersucht den Patienten.", exampleTranslation: "The doctor examines the patient.", emoji: "👨‍⚕️" },
        { word: "das Krankenhaus", translation: "Hospital", example: "Das Krankenhaus liegt im Zentrum.", exampleTranslation: "The hospital is located in the center.", emoji: "🏥" },
        { word: "die Medizin", translation: "Medicine", example: "Nehmen Sie die Medizin dreimal täglich.", exampleTranslation: "Take the medicine three times daily.", emoji: "💊" },
        { word: "das Rezept", translation: "Prescription", example: "Der Arzt schreibt ein Rezept.", exampleTranslation: "The doctor writes a prescription.", emoji: "📝" },
        { word: "die Apotheke", translation: "Pharmacy", example: "Ich kaufe Tabletten in der Apotheke.", exampleTranslation: "I buy pills at the pharmacy.", emoji: "🏥" },
        { word: "die Tablette", translation: "Tablet/Pill", example: "Schlucken Sie diese Tablette.", exampleTranslation: "Swallow this pill.", emoji: "💊" },
        { word: "die Praxis", translation: "Doctor's office", example: "Die Praxis bleibt am Samstag geschlossen.", exampleTranslation: "The office remains closed on Saturdays.", emoji: "🏨" },
        { word: "der Termin", translation: "Appointment", example: "Ich brauche einen Termin für morgen.", exampleTranslation: "I need an appointment for tomorrow.", emoji: "📅" },
        { word: "helfen", translation: "to help", example: "Der Notarzt hilft dem Verletzten.", exampleTranslation: "The emergency doctor helps the injured.", emoji: "🤝" },
        { word: "untersuchen", translation: "to examine", example: "Der Zahnarzt untersucht meine Zähne.", exampleTranslation: "The dentist examines my teeth.", emoji: "🩺" },
        { word: "der Krankenwagen", translation: "Ambulance", example: "Der Krankenwagen fährt schnell.", exampleTranslation: "The ambulance drives fast.", emoji: "🚑" },
        { word: "krankmelden", translation: "to report sick", example: "Ich muss mich bei der Arbeit krankmelden.", exampleTranslation: "I have to report sick at work.", emoji: "📝" }
    ],
    notfall: [
        { word: "die Hilfe", translation: "Help", example: "Rufen Sie Hilfe!", exampleTranslation: "Call for help!", emoji: "🆘" },
        { word: "helfen", translation: "to help", example: "Können Sie mir helfen?", exampleTranslation: "Can you help me?", emoji: "🤝" },
        { word: "der Unfall", translation: "Accident", example: "Es gab einen Unfall auf der Straße.", exampleTranslation: "There was an accident on the street.", emoji: "💥" },
        { word: "die Polizei", translation: "Police", example: "Rufen Sie sofort die Polizei!", exampleTranslation: "Call the police immediately!", emoji: "🚓" },
        { word: "der Notarzt", translation: "Emergency doctor", example: "Der Notarzt kommt in wenigen Minuten.", exampleTranslation: "The emergency doctor arrives in a few minutes.", emoji: "🚑" },
        { word: "die Feuerwehr", translation: "Fire department", example: "Die Feuerwehr löscht das Feuer.", exampleTranslation: "The fire department extinguishes the fire.", emoji: "🚒" },
        { word: "Achtung", translation: "Attention/Danger", example: "Achtung, rutschig!", exampleTranslation: "Attention, slippery!", emoji: "⚠️" },
        { word: "verloren", translation: "lost", example: "Ich habe meine Schlüssel verloren.", exampleTranslation: "I lost my keys.", emoji: "🕵️" },
        { word: "stehlen", translation: "to steal", example: "Jemand hat mein Handy gestohlen.", exampleTranslation: "Someone stole my phone.", emoji: "🕵️" },
        { word: "anrufen", translation: "to call", example: "Rufen Sie die Feuerwehr an.", exampleTranslation: "Call the fire department.", emoji: "📞" },
        { word: "kaputt", translation: "broken", example: "Mein Auto ist kaputt.", exampleTranslation: "My car is broken.", emoji: "💥" },
        { word: "die Gefahr", translation: "Danger", example: "Hier besteht Lebensgefahr.", exampleTranslation: "Here exists danger to life.", emoji: "🚨" }
    ],
    tiere: [
        { word: "der Hund", translation: "Dog", example: "Der Hund bellt laut.", exampleTranslation: "The dog barks loudly.", emoji: "🐕" },
        { word: "die Katze", translation: "Cat", example: "Die Katze schläft auf dem Sofa.", exampleTranslation: "The cat sleeps on the sofa.", emoji: "🐈" },
        { word: "die Kuh", translation: "Cow", example: "Die Kuh gibt frische Milch.", exampleTranslation: "The cow gives fresh milk.", emoji: "🐄" },
        { word: "das Pferd", translation: "Horse", example: "Er reitet auf dem Pferd.", exampleTranslation: "He rides on the horse.", emoji: "🐎" },
        { word: "der Vogel", translation: "Bird", example: "Der Vogel singt ein schönes Lied.", exampleTranslation: "The bird sings a beautiful song.", emoji: "🐦" },
        { word: "der Fisch", translation: "Fish", example: "Der Fisch schwimmt im Wasser.", exampleTranslation: "The fish swims in the water.", emoji: "🐟" },
        { word: "die Maus", translation: "Mouse", example: "Die Katze fängt die kleine Maus.", exampleTranslation: "The cat catches the little mouse.", emoji: "🐭" },
        { word: "das Schwein", translation: "Pig", example: "Das Schwein wühlt in der Erde.", exampleTranslation: "The pig digs in the dirt.", emoji: "🐖" },
        { word: "das Schaf", translation: "Sheep", example: "Das Schaf frisst Gras auf der Wiese.", exampleTranslation: "The sheep eats grass on the meadow.", emoji: "🐑" },
        { word: "das Huhn", translation: "Chicken", example: "Das Huhn legt jeden Morgen ein Ei.", exampleTranslation: "The chicken lays an egg every morning.", emoji: "🐔" },
        { word: "der Löwe", translation: "Lion", example: "Der Löwe ist der König der Tiere.", exampleTranslation: "The lion is the king of animals.", emoji: "🦁" },
        { word: "der Elefant", translation: "Elephant", example: "Der Elefant ist sehr groß und stark.", exampleTranslation: "The elephant is very big and strong.", emoji: "🐘" }
    ]
};;

const PRACTICE_DATABASE = {
    vocab: {},
    grammar: {
        artikel: [
            { id: "pg_art_1", type: "mc", question: "Er kauft ______ Apfel (maskulin, Akkusativ).", options: ["ein", "einen", "einem"], correct: 1, explanation: "Akkusativ masculine of 'ein' is 'einen'. 'Apfel' is direct object of 'kaufen'.", translation: "He buys ______ apple (masculine, accusative).", topic: "Artikel" },
            { id: "pg_art_2", type: "mc", question: "Das ist ______ Buch (neutral, Nominativ).", options: ["ein", "eine", "einen"], correct: 0, explanation: "Nominativ neutral of 'ein' is 'ein'.", translation: "This is ______ book (neutral, nominative).", topic: "Artikel" },
            { id: "pg_art_3", type: "mc", question: "Wir helfen ______ Kind (neutral, Dativ).", options: ["das", "dem", "den"], correct: 1, explanation: "Dativ neutral of 'das' is 'dem'. 'helfen' requires Dativ.", translation: "We help ______ child (neutral, dative).", topic: "Artikel" }
        ],
        pronomen: [
            { id: "pg_pro_1", type: "mc", question: "Wie geht es dir? - Es geht ______ gut.", options: ["ich", "mir", "mich"], correct: 1, explanation: "'mir' is dative pronoun for first person singular used with 'geht es'.", translation: "How are you? - I am doing ______ well.", topic: "Pronomen" },
            { id: "pg_pro_2", type: "mc", question: "Das ist mein Vater. ______ heißt Klaus.", options: ["Er", "Es", "Sie"], correct: 0, explanation: "'Er' is third person masculine pronoun representing 'mein Vater'.", translation: "This is my father. ______ is named Klaus.", topic: "Pronomen" },
            { id: "pg_pro_3", type: "mc", question: "Liebst du ______?", options: ["ich", "mir", "mich"], correct: 2, explanation: "'mich' is accusative pronoun for first person singular.", translation: "Do you love ______?", topic: "Pronomen" }
        ],
        verbkonjugation: [
            { id: "pg_vko_1", type: "mc", question: "Woher ______ du?", options: ["komme", "kommst", "kommt"], correct: 1, explanation: "Second person singular 'du' ending is '-st' -> 'kommst'.", translation: "Where ______ you from?", topic: "Verbkonjugation" },
            { id: "pg_vko_2", type: "mc", question: "Wir ______ Deutsch lernen.", options: ["will", "wollen", "wollt"], correct: 1, explanation: "First person plural 'wir' ending is '-en' -> 'wollen'.", translation: "We ______ to learn German.", topic: "Verbkonjugation" },
            { id: "pg_vko_3", type: "mc", question: "Er ______ Fußball.", options: ["spiele", "spielst", "spielt"], correct: 2, explanation: "Third person singular 'er' ending is '-t' -> 'spielt'.", translation: "He ______ football.", topic: "Verbkonjugation" }
        ],
        modalverben: [
            { id: "pg_mod_1", type: "mc", question: "Ich ______ Deutsch sprechen (Fähigkeit/ability).", options: ["kann", "muss", "will"], correct: 0, explanation: "'kann' expresses capability/ability (können).", translation: "I ______ speak German (ability).", topic: "Modalverben" },
            { id: "pg_mod_2", type: "mc", question: "Du ______ hier nicht rauchen (Verbot/prohibition).", options: ["musst", "darfst", "sollst"], correct: 1, explanation: "'darfst nicht' expresses prohibition/lack of permission (dürfen).", translation: "You ______ not smoke here (prohibition).", topic: "Modalverben" },
            { id: "pg_mod_3", type: "mc", question: "Wir ______ Hausaufgaben machen (Pflicht/duty).", options: ["können", "müssen", "wollen"], correct: 1, explanation: "'müssen' expresses duty/necessity (must).", translation: "We ______ do homework (obligation).", topic: "Modalverben" }
        ],
        wortstellung: [
            { id: "pg_wst_1", type: "mc", question: "Heute ______ ich nach Berlin.", options: ["fahre", "ich fahre", "gefahren"], correct: 0, explanation: "In a main clause, the verb must be in position 2. Since 'Heute' is in position 1, the verb 'fahre' is position 2.", translation: "Today I ______ to Berlin.", topic: "Wortstellung" },
            { id: "pg_wst_2", type: "mc", question: "Kommst du morgen? - Ja, ich ______ morgen.", options: ["komme", "kommst", "kommt"], correct: 0, explanation: "Verb 'kommen' conjugated for 'ich' is 'komme'.", translation: "Are you coming tomorrow? - Yes, I ______ tomorrow.", topic: "Wortstellung" },
            { id: "pg_wst_3", type: "mc", question: "Ich kann heute nicht kommen, weil ich krank ______.", options: ["bin", "habe", "werde"], correct: 0, explanation: "In a subordinating clause starting with 'weil', the conjugated verb goes to the very end -> 'bin'.", translation: "I cannot come today because I ______ sick.", topic: "Wortstellung" }
        ],
        verneinung: [
            { id: "pg_ver_1", type: "mc", question: "Ich trinke ______ Bier.", options: ["nicht", "kein", "keine"], correct: 1, explanation: "Bier is a neutral noun. We negate nouns with 'kein'.", translation: "I drink ______ beer.", topic: "Verneinung" },
            { id: "pg_ver_2", type: "mc", question: "Das Buch ist ______ teuer.", options: ["nicht", "kein", "keine"], correct: 0, explanation: "We negate adjectives with 'nicht'.", translation: "The book is ______ expensive.", topic: "Verneinung" },
            { id: "pg_ver_3", type: "mc", question: "Er hat ______ Kinder.", options: ["nicht", "kein", "keine"], correct: 2, explanation: "Kinder is plural. We negate plural nouns with 'keine'.", translation: "He has ______ children.", topic: "Verneinung" }
        ],
        fragewoester: [
            { id: "pg_frg_1", type: "mc", question: "______ wohnst du? - In München.", options: ["Wer", "Wo", "Woher"], correct: 1, explanation: "'Wo' asks for location (where).", translation: "______ do you live? - In Munich.", topic: "Fragewörter" },
            { id: "pg_frg_2", type: "mc", question: "______ ist das? - Das ist Herr Müller.", options: ["Wer", "Was", "Wie"], correct: 0, explanation: "'Wer' asks for person (who).", translation: "______ is that? - That is Mr. Müller.", topic: "Fragewörter" },
            { id: "pg_frg_3", type: "mc", question: "______ gehst du? - Nach Hause.", options: ["Wo", "Wohin", "Woher"], correct: 1, explanation: "'Wohin' asks for direction/destination (where to).", translation: "______ are you going? - Home.", topic: "Fragewörter" }
        ]
    },
    reading: [
        {
            id: "pr_read_1",
            text: `<div class="document-box notice"><h3>S-Bahn Berlin - Störung</h3><p>Wegen Bauarbeiten fahren am Wochenende keine Züge zwischen Alexanderplatz und Hauptbahnhof. Bitte nutzen Sie die U-Bahn-Linie U5 oder die Busse der Linie 100.</p></div>`,
            question: "Am Wochenende fahren keine S-Bahnen zwischen Alexanderplatz und Hauptbahnhof.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The notice says: 'Wegen Bauarbeiten fahren am Wochenende keine Züge zwischen Alexanderplatz und Hauptbahnhof'.",
            topic: "Lesen",
            translation: "Berlin S-Bahn - Disturbance. Due to construction work, no trains will run between Alexanderplatz and Central Station this weekend. Please use the subway line U5 or bus line 100.",
            questionTranslation: "On the weekend, no S-Bahn trains run between Alexanderplatz and Central Station.",
            vocabSupport: [
                { word: "wegen", translation: "due to / because of" },
                { word: "die Bauarbeiten", translation: "construction works" },
                { word: "nutzen", translation: "to use" }
            ]
        },
        {
            id: "pr_read_2",
            text: `<div class="document-box notice"><h3>S-Bahn Berlin - Störung</h3><p>Wegen Bauarbeiten fahren am Wochenende keine Züge zwischen Alexanderplatz und Hauptbahnhof. Bitte nutzen Sie die U-Bahn-Linie U5 oder die Busse der Linie 100.</p></div>`,
            question: "Passagiere können als Alternative nur Busse benutzen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "They can also use the U-Bahn U5 ('nutzen Sie die U-Bahn-Linie U5 oder die Busse...').",
            topic: "Lesen",
            translation: "Berlin S-Bahn - Disturbance. Due to construction work, no trains will run between Alexanderplatz and Central Station this weekend. Please use the subway line U5 or bus line 100.",
            questionTranslation: "Passengers can only use buses as an alternative.",
            vocabSupport: [
                { word: "die U-Bahn-Linie", translation: "subway line" },
                { word: "die Alternative", translation: "alternative" },
                { word: "benutzen", translation: "to use" }
            ]
        },
        {
            id: "pr_read_3",
            text: `<div class="document-box email"><div class="email-meta"><div><strong>Von:</strong> Anna Berger</div><div><strong>Betreff:</strong> Treffen heute Abend</div></div><p>Hallo Ben, ich kann heute leider doch nicht um 18 Uhr kommen. Ich muss länger arbeiten. Können wir uns um 19:30 Uhr im Cafe Flores treffen?</p></div>`,
            question: "Anna hat heute um 18 Uhr keine Zeit.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "Anna writes: 'ich kann heute leider doch nicht um 18 Uhr kommen. Ich muss länger arbeiten'.",
            topic: "Lesen",
            translation: "From: Anna Berger. Subject: Meeting tonight. Hello Ben, unfortunately I cannot come at 6 PM today after all. I have to work longer. Can we meet at 7:30 PM in Cafe Flores?",
            questionTranslation: "Anna has no time today at 6 PM.",
            vocabSupport: [
                { word: "leider doch nicht", translation: "unfortunately not after all" },
                { word: "länger arbeiten", translation: "to work longer" },
                { word: "treffen", translation: "to meet" }
            ]
        },
        {
            id: "pr_read_4",
            text: `<div class="document-box email"><div class="email-meta"><div><strong>Von:</strong> Anna Berger</div><div><strong>Betreff:</strong> Treffen heute Abend</div></div><p>Hallo Ben, ich kann heute leider doch nicht um 18 Uhr kommen. Ich muss länger arbeiten. Können wir uns um 19:30 Uhr im Cafe Flores treffen?</p></div>`,
            question: "Sie möchten sich im Cafe Flores treffen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "Anna suggests: 'Können wir uns um 19:30 Uhr im Cafe Flores treffen?'.",
            topic: "Lesen",
            translation: "From: Anna Berger. Subject: Meeting tonight. Hello Ben, unfortunately I cannot come at 6 PM today after all. I have to work longer. Can we meet at 7:30 PM in Cafe Flores?",
            questionTranslation: "They want to meet in Cafe Flores.",
            vocabSupport: [
                { word: "treffen", translation: "to meet" },
                { word: "das Café", translation: "cafe" },
                { word: "heute Abend", translation: "tonight" }
            ]
        },
        {
            id: "pr_read_5",
            text: `<div class="document-box notice"><h3>Sprachschule Deutsch Aktiv</h3><p>Neue Deutschkurse für Anfänger (A1) starten am 1. September. Anmeldung bis zum 25. August im Büro im Erdgeschoss. Kosten: 250 Euro inklusive Lehrbuch.</p></div>`,
            question: "Man kann sich am 30. August noch anmelden.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "The notice says registration is until 25. August ('Anmeldung bis zum 25. August').",
            topic: "Lesen",
            translation: "Language School Deutsch Aktiv. New German courses for beginners (A1) start on September 1st. Registration until August 25th in the ground floor office. Cost: 250 Euros including textbook.",
            questionTranslation: "You can still register on August 30th.",
            vocabSupport: [
                { word: "der Anfänger", translation: "beginner" },
                { word: "die Anmeldung", translation: "registration/signup" },
                { word: "inklusive", translation: "inclusive" }
            ]
        },
        {
            id: "pr_read_6",
            text: `<div class="document-box notice"><h3>Wohnung zu vermieten</h3><p>Schöne 2-Zimmer-Wohnung im Zentrum von Köln, Küche, Bad und Balkon. 60 qm, Miete: 580 Euro warm. Ab 1. November frei. Telefon: 0221-987654.</p></div>`,
            question: "Die Wohnung hat einen Balkon und kostet 580 Euro warm.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The ad description includes 'Balkon' and 'Miete: 580 Euro warm'.",
            topic: "Lesen",
            translation: "Apartment for rent. Beautiful 2-room apartment in the center of Cologne, kitchen, bath and balcony. 60 sqm, rent: 580 Euros warm (utilities included). Available from November 1st. Phone: 0221-987654.",
            questionTranslation: "The apartment has a balcony and costs 580 Euros including utilities.",
            vocabSupport: [
                { word: "zu vermieten", translation: "for rent" },
                { word: "die Miete", translation: "rent" },
                { word: "warm", translation: "warm (including utilities)" }
            ]
        },
        {
            id: "pr_read_7",
            text: `<div class="document-box timetable"><h3>Deutsche Bahn - Fahrplanänderung</h3><p>Am Gleis 4 fährt heute kein Zug ab. Der Zug ICE 502 nach München um 12:40 Uhr fährt heute ausnahmsweise von Gleis 7 ab. Bitte achten Sie auf die Durchsagen.</p></div>`,
            question: "Der Zug nach München fährt heute von Gleis 4.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "The timetable info states that the train departs from track 7 today ('fährt heute ausnahmsweise von Gleis 7 ab').",
            topic: "Lesen",
            translation: "Deutsche Bahn - Timetable change. No train departs from track 4 today. The train ICE 502 to Munich at 12:40 PM departs today exceptionally from track 7. Please pay attention to the announcements.",
            questionTranslation: "The train to Munich departs from track 4 today.",
            vocabSupport: [
                { word: "die Fahrplanänderung", translation: "timetable change" },
                { word: "ausnahmsweise", translation: "exceptionally" },
                { word: "die Durchsage", translation: "announcement" }
            ]
        },
        {
            id: "pr_read_8",
            text: `<div class="document-box notice"><h3>Deutsches Museum München</h3><p>Öffnungszeiten: Täglich 9:00 bis 17:00 Uhr. Eintritt: Erwachsene 14 Euro, Studenten 8 Euro, Kinder unter 6 Jahren frei. Gruppen ab 10 Personen erhalten 10% Rabatt.</p></div>`,
            question: "Kinder, die 5 Jahre alt sind, müssen keinen Eintritt bezahlen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "Children under 6 are free ('Kinder unter 6 Jahren frei'). A 5-year-old child fits this rule.",
            topic: "Lesen",
            translation: "Deutsches Museum Munich. Opening hours: Daily 9:00 AM to 5:00 PM. Admission: Adults 14 Euros, Students 8 Euros, Children under 6 years free. Groups of 10 or more receive a 10% discount.",
            questionTranslation: "Children who are 5 years old do not have to pay admission.",
            vocabSupport: [
                { word: "die Öffnungszeiten", translation: "opening hours" },
                { word: "der Eintritt", translation: "admission/entry fee" },
                { word: "frei", translation: "free" }
            ]
        },
        {
            id: "pr_read_9",
            text: `<div class="document-box note"><h3>Notiz von Frau Fischer</h3><p>Liebe Kollegen, der Drucker im 1. Stock ist kaputt. Bitte benutzen Sie den Drucker im Sekretariat (Erdgeschoss, Raum 05) bis der Techniker am Freitag kommt.</p></div>`,
            question: "Der Drucker im ersten Stock funktioniert zurzeit nicht.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The note says the printer on the first floor is broken ('der Drucker im 1. Stock ist kaputt').",
            topic: "Lesen",
            translation: "Note from Mrs. Fischer. Dear colleagues, the printer on the 1st floor is broken. Please use the printer in the secretary's office (ground floor, Room 05) until the technician arrives on Friday.",
            questionTranslation: "The printer on the first floor is currently not working.",
            vocabSupport: [
                { word: "der Drucker", translation: "printer" },
                { word: "kaputt", translation: "broken" },
                { word: "das Erdgeschoss", translation: "ground floor" }
            ]
        },
        {
            id: "pr_read_10",
            text: `<div class="document-box notice"><h3>Supermarkt Frisch & Spar</h3><p>Unsere neuen Öffnungszeiten: Montag bis Samstag von 8:00 bis 21:00 Uhr. Sonntags geschlossen. Bäckerei im Supermarkt sonntags von 8:00 bis 11:00 Uhr geöffnet.</p></div>`,
            question: "Man kann am Sonntag im Supermarkt einkaufen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "The supermarket itself is closed on Sundays ('Sonntags geschlossen'), only the bakery is open for a short time.",
            topic: "Lesen",
            translation: "Supermarkt Frisch & Spar. Our new opening hours: Monday to Saturday from 8:00 AM to 9:00 PM. Closed on Sundays. The bakery inside the supermarket is open on Sundays from 8:00 AM to 11:00 AM.",
            questionTranslation: "You can go shopping at the supermarket on Sunday.",
            vocabSupport: [
                { word: "geschlossen", translation: "closed" },
                { word: "geöffnet", translation: "open" },
                { word: "die Bäckerei", translation: "bakery" }
            ]
        }
    ],
    listening: [
        {
            id: "pr_list_1",
            script: "Entschuldigung, wo ist der Bahnsteig drei? - Gehen Sie geradeaus und dann die Treppe hinunter. Der Bahnsteig ist auf der rechten Seite. - Vielen Dank. - Bitte sehr.",
            question: "Wo ist der Bahnsteig drei?",
            options: ["Geradeaus und die Treppe hinunter, rechts", "Geradeaus und die Treppe hinauf, links", "Direkt hinter der Information"],
            correct: 0,
            explanation: "The speaker says: 'Gehen Sie geradeaus und dann die Treppe hinunter. Der Bahnsteig ist auf der rechten Seite'.",
            topic: "Hören",
            translation: "Excuse me, where is platform three? - Go straight ahead and then down the stairs. The platform is on the right side. - Thank you very much. - You're welcome.",
            vocabSupport: [
                { word: "der Bahnsteig", translation: "platform" },
                { word: "geradeaus", translation: "straight ahead" },
                { word: "die Treppe hinunter", translation: "down the stairs" }
            ]
        },
        {
            id: "pr_list_2",
            script: "Hallo Thomas, kommst du mit zum Supermarkt? - Nein, ich habe keine Zeit. Ich muss meine Wohnung aufräumen. Meine Eltern kommen morgen. - Ach so, viel Spaß!",
            question: "Warum geht Thomas nicht zum Supermarkt?",
            options: ["Er ist krank", "Er muss arbeiten", "Er muss seine Wohnung aufräumen"],
            correct: 2,
            explanation: "Thomas says: 'Ich muss meine Wohnung aufräumen. Meine Eltern kommen morgen'.",
            topic: "Hören",
            translation: "Hello Thomas, are you coming to the supermarket? - No, I don't have time. I have to clean up my apartment. My parents are coming tomorrow. - Oh, I see, have fun!",
            vocabSupport: [
                { word: "die Wohnung", translation: "apartment" },
                { word: "aufräumen", translation: "to clean up/tidy up" },
                { word: "die Eltern", translation: "parents" }
            ]
        },
        {
            id: "pr_list_3",
            script: "Guten Tag, Herr Bergmann. Was kostet das Zimmer pro Nacht? - Das Zimmer kostet 55 Euro ohne Frühstück. Mit Frühstück kostet es 65 Euro. - Gut, ich nehme das Zimmer mit Frühstück.",
            question: "Wie viel bezahlt der Mann pro Nacht?",
            options: ["55 Euro", "65 Euro", "45 Euro"],
            correct: 1,
            explanation: "The man says: 'ich nehme das Zimmer mit Frühstück' which costs 65 Euro (55 Euro + 10 Euro).",
            topic: "Hören",
            translation: "Good day, Mr. Bergmann. How much does the room cost per night? - The room costs 55 Euros without breakfast. With breakfast it costs 65 Euros. - Good, I will take the room with breakfast.",
            vocabSupport: [
                { word: "kosten", translation: "to cost" },
                { word: "ohne", translation: "without" },
                { word: "das Frühstück", translation: "breakfast" }
            ]
        },
        {
            id: "pr_list_4",
            script: "Guten Tag, was möchten Sie bestellen? - Ich hätte gerne ein Stück Apfelkuchen und einen Kaffee, bitte. - Und für Sie? - Für mich nur ein Mineralwasser, danke.",
            question: "Was bestellt die erste Person?",
            options: ["Einen Kaffee und Apfelkuchen", "Ein Mineralwasser und Kaffee", "Nur ein Stück Kuchen"],
            correct: 0,
            explanation: "The first person says: 'Ich hätte gerne ein Stück Apfelkuchen und einen Kaffee, bitte'.",
            topic: "Hören",
            translation: "Good day, what would you like to order? - I would like a piece of apple cake and a coffee, please. - And for you? - For me just a mineral water, thanks.",
            vocabSupport: [
                { word: "bestellen", translation: "to order" },
                { word: "der Apfelkuchen", translation: "apple cake" },
                { word: "das Mineralwasser", translation: "mineral water" }
            ]
        },
        {
            id: "pr_list_5",
            script: "Entschuldigung, gibt es diese Jacke auch in Größe M? - Nein, leider haben wir diese Jacke nur noch in S und L. Aber wir haben eine ähnliche Jacke in Blau in Größe M. - Nein danke, ich möchte lieber die schwarze.",
            question: "In welchen Größen ist die schwarze Jacke noch da?",
            options: ["In S und M", "In M und L", "In S und L"],
            correct: 2,
            explanation: "The salesperson says: 'leider haben wir diese Jacke nur noch in S und L'.",
            topic: "Hören",
            translation: "Excuse me, is this jacket also available in size M? - No, unfortunately we only have this jacket in S and L. But we have a similar jacket in blue in size M. - No thanks, I'd rather have the black one.",
            vocabSupport: [
                { word: "die Jacke", translation: "jacket" },
                { word: "die Größe", translation: "size" },
                { word: "ähnlich", translation: "similar" }
            ]
        },
        {
            id: "pr_list_6",
            script: "Guten Tag, Praxis Dr. Keller. - Guten Tag, hier spricht Schmidt. Ich habe morgen um 10 Uhr einen Termin, aber ich kann leider nicht kommen. Kann ich am Freitag um 14 Uhr kommen? - Ja, am Freitag um 14 Uhr passt Herr Dr. Keller.",
            question: "Wann ist der neue Termin von Herrn Schmidt?",
            options: ["Morgen um 10 Uhr", "Freitag um 14 Uhr", "Freitag um 10 Uhr"],
            correct: 1,
            explanation: "The receptionist confirms: 'Ja, am Freitag um 14 Uhr passt'.",
            topic: "Hören",
            translation: "Good day, doctor's office Dr. Keller. - Good day, this is Schmidt speaking. I have an appointment tomorrow at 10 AM, but unfortunately I cannot come. Can I come on Friday at 2 PM? - Yes, Friday at 2 PM works for Dr. Keller.",
            vocabSupport: [
                { word: "der Termin", translation: "appointment" },
                { word: "absagen", translation: "to cancel" },
                { word: "passen", translation: "to fit/suit" }
            ]
        },
        {
            id: "pr_list_7",
            script: "Guten Tag. Ich brauche eine Fahrkarte nach Frankfurt. Fährt der Zug direkt? - Nein, Sie müssen in Kassel umsteigen. Der Zug fährt um 9:15 Uhr von Gleis 6 ab. - Danke sehr.",
            question: "Was muss der Fahrgast tun?",
            options: ["Direkt fahren", "In Kassel umsteigen", "Am Hauptbahnhof umsteigen"],
            correct: 1,
            explanation: "The railway worker says: 'Nein, Sie müssen in Kassel umsteigen'.",
            topic: "Hören",
            translation: "Good day. I need a train ticket to Frankfurt. Does the train go directly? - No, you have to transfer in Kassel. The train departs at 9:15 AM from track 6. - Thank you very much.",
            vocabSupport: [
                { word: "die Fahrkarte", translation: "ticket" },
                { word: "direkt", translation: "directly" },
                { word: "umsteigen", translation: "to change/transfer trains" }
            ]
        },
        {
            id: "pr_list_8",
            script: "Hallo Lisa, treffen wir uns heute Nachmittag um drei? - Nein, drei Uhr ist mir zu früh. Ich habe bis vier Uhr Unterricht. Geht es um halb fünf? - Ja, halb fünf ist super.",
            question: "Wann treffen sich Lisa und ihr Freund?",
            options: ["Um 15:00 Uhr", "Um 16:30 Uhr", "Um 16:00 Uhr"],
            correct: 1,
            explanation: "They agree on 'halb fünf' which means 16:30 Uhr.",
            topic: "Hören",
            translation: "Hello Lisa, shall we meet this afternoon at three? - No, three o'clock is too early for me. I have classes until four o'clock. Does half past four work? - Yes, half past four is great.",
            vocabSupport: [
                { word: "treffen", translation: "to meet" },
                { word: "der Unterricht", translation: "lesson/class" },
                { word: "halb fünf", translation: "half past four (4:30)" }
            ]
        },
        {
            id: "pr_list_9",
            script: "Und hier das Wetter für morgen: Im Norden regnet es den ganzen Tag bei nur 12 Grad. Im Süden bleibt es trocken, aber es ist bewölkt. Im Osten und Westen gibt es viel Sonnenschein und Temperaturen bis 20 Grad.",
            question: "Wie ist das Wetter im Norden?",
            options: ["Es regnet", "Es ist sonnig", "Es ist bewölkt, aber trocken"],
            correct: 0,
            explanation: "The weather report says: 'Im Norden regnet es den ganzen Tag'.",
            topic: "Hören",
            translation: "And here is the weather for tomorrow: In the north it will rain all day at only 12 degrees. In the south it will remain dry, but it is cloudy. In the east and west there is plenty of sunshine and temperatures up to 20 degrees.",
            vocabSupport: [
                { word: "das Wetter", translation: "weather" },
                { word: "regnen", translation: "to rain" },
                { word: "trocken", translation: "dry" }
            ]
        },
        {
            id: "pr_list_10",
            script: "Guten Abend. Haben Sie einen Tisch für vier Personen reserviert? - Nein, aber haben Sie noch einen freien Tisch für uns? - Ja, hier am Fenster ist noch ein Tisch frei. Bitte nehmen Sie Platz.",
            question: "Haben die Leute einen Tisch reserviert?",
            options: ["Ja, am Fenster", "Nein", "Ja, für zwei Personen"],
            correct: 1,
            explanation: "The guest answers: 'Nein, aber haben Sie noch einen freien Tisch für uns?'..",
            topic: "Hören",
            translation: "Good evening. Have you reserved a table for four people? - No, but do you still have a free table for us? - Yes, here by the window is a free table. Please take a seat.",
            vocabSupport: [
                { word: "reservieren", translation: "to reserve" },
                { word: "der Tisch", translation: "table" },
                { word: "frei", translation: "free/available" }
            ]
        }
    ],
    writing: [
        {
            id: "pr_writ_1",
            topic: "Einladung",
            text: `<p><strong>Schreiben Sie eine E-Mail an Ihre Freundin Julia:</strong></p><ul><li>Laden Sie Julia zu Ihrer Geburtstagsparty am Samstag ein.</li><li>Sagen Sie, wann die Party anfängt (19:00 Uhr).</li><li>Fragen Sie Julia, ob sie einen Kuchen mitbringen kann.</li></ul><p><em>Schreiben Sie 30–50 Wörter. Denken Sie an die passende Anrede und einen Gruß am Ende.</em></p>`,
            translation: "<p><strong>Write an email to your friend Julia:</strong></p><ul><li>Invite Julia to your birthday party on Saturday.</li><li>Say when the party starts (7:00 PM).</li><li>Ask Julia if she can bring a cake.</li></ul><p><em>Write 30–50 words. Remember to include a suitable greeting and sign-off.</em></p>",
            topicLabel: "Invitation"
        },
        {
            id: "pr_writ_2",
            topic: "Termin",
            text: `<p><strong>Schreiben Sie eine E-Mail an Ihren Arzt (Praxis Dr. Weber):</strong></p><ul><li>Erklären Sie, warum Sie den Termin am Dienstag absagen müssen (krank/Arbeit).</li><li>Fragen Sie nach einem neuen Termin am Donnerstag.</li><li>Bitten Sie um eine kurze Bestätigung.</li></ul><p><em>Schreiben Sie 30–50 Wörter. Denken Sie an die passende Anrede und einen Gruß am Ende.</em></p>`,
            translation: "<p><strong>Write an email to your doctor (office of Dr. Weber):</strong></p><ul><li>Explain why you have to cancel the appointment on Tuesday (sick/work).</li><li>Ask for a new appointment on Thursday.</li><li>Ask for a short confirmation.</li></ul><p><em>Write 30–50 words. Remember to include a suitable greeting and sign-off.</em></p>",
            topicLabel: "Appointment"
        },
        {
            id: "pr_writ_3",
            topic: "Urlaub",
            text: `<p><strong>Schreiben Sie eine E-Mail an Ihren Kollegen Thomas:</strong></p><ul><li>Sagen Sie, dass Sie im Urlaub in Spanien sind.</li><li>Erklären Sie, wie das Wetter dort ist.</li><li>Fragen Sie Thomas, wie die Arbeit im Büro läuft.</li></ul><p><em>Schreiben Sie 30–50 Wörter. Denken Sie an die passende Anrede und einen Gruß am Ende.</em></p>`,
            translation: "<p><strong>Write an email to your colleague Thomas:</strong></p><ul><li>Say that you are on vacation in Spain.</li><li>Explain how the weather is there.</li><li>Ask Thomas how work is going in the office.</li></ul><p><em>Write 30–50 words. Remember to include a suitable greeting and sign-off.</em></p>",
            topicLabel: "Holiday"
        }
    ],
    speaking: [
        {
            id: "pr_speak_1",
            theme: "Thema: Vorstellung",
            icon: "🗣️",
            word: "Name",
            instruction: "Stellen Sie sich vor: Name, Alter, Land.",
            hints: "z.B. Ich heiße... Ich bin... Jahre alt. Ich komme aus...",
            instructionTranslation: "Introduce yourself: Name, age, country.",
            hintsTranslation: "e.g., My name is... I am... years old. I come from...",
            topicLabel: "Self Introduction"
        },
        {
            id: "pr_speak_2",
            theme: "Thema: Hobbys",
            icon: "⚽",
            word: "Fußball",
            instruction: "Fragen Sie Ihren Partner nach Fußball.",
            hints: "z.B. Spielen Sie gerne Fußball? / Wann spielen Sie Fußball?",
            instructionTranslation: "Ask your partner about football.",
            hintsTranslation: "e.g., Do you like playing football? / When do you play football?",
            topicLabel: "Hobbies"
        },
        {
            id: "pr_speak_3",
            theme: "Thema: Familie",
            icon: "👨‍👩‍👧‍👦",
            word: "Kinder",
            instruction: "Fragen Sie nach Kindern.",
            hints: "z.B. Haben Sie Kinder? / Wie alt sind Ihre Kinder?",
            instructionTranslation: "Ask about children.",
            hintsTranslation: "e.g., Do you have children? / How old are your children?",
            topicLabel: "Family"
        },
        {
            id: "pr_speak_4",
            theme: "Thema: Arbeit",
            icon: "💼",
            word: "Beruf",
            instruction: "Fragen Sie nach dem Beruf.",
            hints: "z.B. Was sind Sie von Beruf? / Arbeiten Sie in einem Büro?",
            instructionTranslation: "Ask about the job/profession.",
            hintsTranslation: "e.g., What is your profession? / Do you work in an office?",
            topicLabel: "Work"
        },
        {
            id: "pr_speak_5",
            theme: "Thema: Reisen",
            icon: "✈️",
            word: "Urlaub",
            instruction: "Fragen Sie nach dem Urlaub.",
            hints: "z.B. Wohin fahren Sie im Urlaub? / Machen Sie gerne Urlaub?",
            instructionTranslation: "Ask about the vacation/holiday.",
            hintsTranslation: "e.g., Where do you go on vacation? / Do you like taking vacations?",
            topicLabel: "Travel"
        },
        {
            id: "pr_speak_6",
            theme: "Thema: Einkaufen",
            icon: "🛍️",
            word: "Supermarkt",
            instruction: "Fragen Sie nach dem Supermarkt.",
            hints: "z.B. Wo ist der Supermarkt? / Wann öffnet der Supermarkt?",
            instructionTranslation: "Ask about the supermarket.",
            hintsTranslation: "e.g., Where is the supermarket? / When does the supermarket open?",
            topicLabel: "Shopping"
        }
    ]
};

function initVocabularyDatabase() {
    for (const topic in VOCABULARY_DATABASE) {
        const words = VOCABULARY_DATABASE[topic];
        PRACTICE_DATABASE.vocab[topic] = words.map((w, idx) => {
            const correctText = w.translation;
            const otherTranslations = words
                .filter(item => item.translation !== correctText)
                .map(item => item.translation);
            const shuffledOthers = [...otherTranslations].sort(() => Math.random() - 0.5);
            const distractor1 = shuffledOthers[0] || "Other Option A";
            const distractor2 = shuffledOthers[1] || "Other Option B";
            const rawOptions = [correctText, distractor1, distractor2];
            
            return {
                id: `pv_${topic}_${idx}`,
                type: "mc",
                question: `Was bedeutet "${w.word}" auf Englisch?`,
                options: rawOptions,
                correct: 0,
                explanation: `"${w.word}" bedeutet "${w.translation}".`,
                topic: topic.charAt(0).toUpperCase() + topic.slice(1),
                rawWord: w.word,
                rawTranslation: w.translation
            };
        });
    }
}

function getShuffledQuizQuestions(topicName) {
    const originalQuestions = PRACTICE_DATABASE.vocab[topicName];
    if (!originalQuestions) return [];
    
    const questionsCopy = originalQuestions.map(q => {
        const correctText = q.rawTranslation;
        const topicWords = VOCABULARY_DATABASE[topicName];
        const otherTranslations = topicWords
            .filter(item => item.translation !== correctText)
            .map(item => item.translation);
        
        const shuffledOthers = [...otherTranslations].sort(() => Math.random() - 0.5);
        const distractor1 = shuffledOthers[0] || "Other Option A";
        const distractor2 = shuffledOthers[1] || "Other Option B";
        
        const rawOptions = [correctText, distractor1, distractor2];
        const shuffledOptions = [...rawOptions].sort(() => Math.random() - 0.5);
        const correctIndex = shuffledOptions.indexOf(correctText);
        
        return {
            ...q,
            options: shuffledOptions,
            correct: correctIndex
        };
    });
    
    return questionsCopy.sort(() => Math.random() - 0.5);
}

const PORTAL_STATE_KEY = `goethe_a1_portal_progress_v2`;

let portalState = {
    streak: { current: 0, longest: 0, lastDate: "" },
    sessionsCompleted: 0,
    examsCompleted: 0,
    mistakes: [],
    progress: {
        vocab: {},
        grammar: {},
        reading: {},
        listening: {},
        writing: {},
        speaking: {}
    },
    dailyChallenge: {
        date: "",
        completed: false,
        questions: [],
        answers: {}
    },
    writingDrafts: {},
    theme: "dark",
    level: "A1",
    vocabStats: {}
};

function savePortalStateToStorage() {
    localStorage.setItem(PORTAL_STATE_KEY, JSON.stringify(portalState));
}

function loadPortalStateFromStorage() {
    const data = localStorage.getItem(PORTAL_STATE_KEY);
    if (data) {
        try {
            const parsed = JSON.parse(data);
            portalState = {
                streak: parsed.streak || { current: 0, longest: 0, lastDate: "" },
                sessionsCompleted: parsed.sessionsCompleted || 0,
                examsCompleted: parsed.examsCompleted || 0,
                mistakes: parsed.mistakes || [],
                progress: parsed.progress || { vocab: {}, grammar: {}, reading: {}, listening: {}, writing: {}, speaking: {} },
                dailyChallenge: parsed.dailyChallenge || { date: "", completed: false, questions: [], answers: {} },
                writingDrafts: parsed.writingDrafts || {},
                theme: parsed.theme || "dark",
                level: parsed.level || "A1",
                vocabStats: parsed.vocabStats || {}
            };
        } catch(e) {
            console.error("Error loading portal state", e);
        }
    }
}

// --- SYSTEM STATE & CONTROLLER ---
const STATE_KEY = `goethe_a1_exam_session_v1`;

let state = {
    candidateName: "",
    examDate: "",
    selectedVoiceName: "",
    isStarted: false,
    isSubmitted: false,
    startTime: null,
    endTime: null,
    timeSpent: 0,
    currentModuleIndex: 0, // 0: Hören, 1: Lesen, 2: Schreiben, 3: Sprechen
    currentQuestionIndex: 0,
    level: "A1",
    schreibenScore: null,
    sprechenScore: null,
    answers: {}, // QuestionID -> User Answer
    reviews: {}, // QuestionID -> Boolean
    playbackCounts: {}, // QuestionID -> Play Count
    questionTimes: {}, // QuestionID -> Time spent in seconds
    sessionQuestions: {
        hoeren: [],
        lesen: [],
        schreiben: [],
        sprechen: []
    }
};

// Local storage autosave utilities
function saveSessionToStorage() {
    if (!state.isStarted) return;
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
    updateSaveStatusUI("Entwurf gespeichert");
}

function loadSessionFromStorage() {
    const data = localStorage.getItem(STATE_KEY);
    if (data) {
        try {
            state = JSON.parse(data);
            return true;
        } catch (e) {
            console.error("Error parsing stored session", e);
        }
    }
    return false;
}

function clearSessionStorage() {
    localStorage.removeItem(STATE_KEY);
}

// In-Memory audio responses for Speaking module (Blobs cannot go to LocalStorage directly)
const speakingRecordings = {}; // QuestionID -> { blob, url }

// --- SPEECH SYNTHESIS ENGINE (HÖREN Fallback) ---
let speechVoice = null;
let currentUtterance = null;
let speechInterval = null;
let audioPlayedCallback = null;

function initSpeechSynthesis() {
    const voiceSelect = document.getElementById("exam-language-voice");
    
    function populateVoices() {
        const voices = window.speechSynthesis.getVoices();
        voiceSelect.innerHTML = "";
        
        // Filter German voices
        const deVoices = voices.filter(v => v.lang.startsWith("de"));
        
        if (deVoices.length === 0) {
            // Add fallback warning option
            const option = document.createElement("option");
            option.value = "";
            option.textContent = "Standard Deutsch (System Fallback)";
            voiceSelect.appendChild(option);
        } else {
            deVoices.forEach(v => {
                const option = document.createElement("option");
                option.value = v.name;
                option.textContent = `${v.name} (${v.lang})`;
                voiceSelect.appendChild(option);
            });
        }
        
        // Set selected voice from state if available
        if (state.selectedVoiceName) {
            voiceSelect.value = state.selectedVoiceName;
        }
    }

    populateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = populateVoices;
    }

    voiceSelect.addEventListener("change", (e) => {
        state.selectedVoiceName = e.target.value;
        saveSessionToStorage();
    });
}

function speakText(text, onBoundary, onEnd, onError, rateOverride) {
    window.speechSynthesis.cancel();
    clearInterval(speechInterval);

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = "de-DE";

    // Select chosen voice if available
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.name === state.selectedVoiceName) || voices.find(v => v.lang.startsWith("de"));
    if (deVoice) {
        currentUtterance.voice = deVoice;
    }

    currentUtterance.rate = rateOverride || 0.85; // A1 should be clear and slightly slower

    currentUtterance.onend = () => {
        clearInterval(speechInterval);
        onEnd();
    };

    currentUtterance.onerror = (e) => {
        clearInterval(speechInterval);
        console.error("SpeechSynthesis error:", e);
        if (onError) onError();
    };

    // Simulate boundary ticks
    let progress = 0;
    // Word count estimate duration (roughly 120 words/min -> 2 words/sec)
    const wordCount = text.split(/\s+/).length;
    const estimatedSecs = (wordCount / 1.8) + 2; 
    const stepMs = 100;
    const totalSteps = estimatedSecs * 10;

    speechInterval = setInterval(() => {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
            progress += (100 / totalSteps);
            if (progress >= 100) progress = 99;
            onBoundary(progress);
        }
    }, stepMs);

    window.speechSynthesis.speak(currentUtterance);
}

function stopSpeaking() {
    window.speechSynthesis.cancel();
    clearInterval(speechInterval);
}

// --- MICROPHONE RECORDING (SPRECHEN) ---
let mediaRecorder = null;
let recordedChunks = [];
let recordingTimer = null;
let recordingDuration = 0;

function startRecording(questionId, onTick, onStopCallback) {
    recordedChunks = [];
    recordingDuration = 0;

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.ondataavailable = e => {
                if (e.data.size > 0) {
                    recordedChunks.push(e.data);
                }
            };

            mediaRecorder.onstop = () => {
                clearInterval(recordingTimer);
                const blob = new Blob(recordedChunks, { type: 'audio/wav' });
                const url = URL.createObjectURL(blob);
                
                speakingRecordings[questionId] = { blob, url };
                
                if (typeof practiceState !== 'undefined' && practiceState.mode) {
                    // Practice mode speaking recording
                    portalState.progress.speaking[questionId] = true;
                    savePortalStateToStorage();
                } else {
                    // Mark speaking question as answered
                    state.answers[questionId] = "recorded";
                    saveSessionToStorage();
                    updateQuestionNavigator();
                }

                onStopCallback(url);
            };

            mediaRecorder.start();

            recordingTimer = setInterval(() => {
                recordingDuration++;
                const mins = String(Math.floor(recordingDuration / 60)).padStart(2, '0');
                const secs = String(recordingDuration % 60).padStart(2, '0');
                onTick(`${mins}:${secs}`);
            }, 1000);

            const waveEl = document.getElementById("practice-mic-wave") || document.getElementById("mic-wave");
            if (waveEl) waveEl.style.display = "flex";
        })
        .catch(err => {
            console.error("Accessing microphone failed:", err);
            alert("Fehler beim Zugriff auf das Mikrofon. Bitte prüfen Sie Ihre Browsereinstellungen.");
        });
}

function stopRecordingProcess() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
        const waveEl = document.getElementById("practice-mic-wave") || document.getElementById("mic-wave");
        if (waveEl) waveEl.style.display = "none";
    }
}

// --- INITIALIZE EXAM RANDOMIZATION ---
function initExamSession() {
    // Randomize helper
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

    // Hören:
    // Teil 1: Select 6 of available
    state.sessionQuestions.hoeren.push(...shuffleArray([...QUESTION_BANK.hoeren.teil1]));
    // Teil 2: Select 4
    state.sessionQuestions.hoeren.push(...shuffleArray([...QUESTION_BANK.hoeren.teil2]));
    // Teil 3: Select 5
    state.sessionQuestions.hoeren.push(...shuffleArray([...QUESTION_BANK.hoeren.teil3]));

    // Lesen:
    // Teil 1: 5 questions
    state.sessionQuestions.lesen.push(...shuffleArray([...QUESTION_BANK.lesen.teil1]));
    // Teil 2: 5 situations
    state.sessionQuestions.lesen.push(...shuffleArray([...QUESTION_BANK.lesen.teil2]));
    // Teil 3: 5 notices
    state.sessionQuestions.lesen.push(...shuffleArray([...QUESTION_BANK.lesen.teil3]));

    // Schreiben:
    // Teil 1: 1 Form task
    state.sessionQuestions.schreiben.push(...shuffleArray([...QUESTION_BANK.schreiben.teil1]).slice(0, 1));
    // Teil 2: 1 Email task
    state.sessionQuestions.schreiben.push(...shuffleArray([...QUESTION_BANK.schreiben.teil2]).slice(0, 1));

    // Sprechen:
    // Teil 1: Self Intro (1 task)
    state.sessionQuestions.sprechen.push(...QUESTION_BANK.sprechen.teil1);
    // Teil 2: 2 random cards
    state.sessionQuestions.sprechen.push(...shuffleArray([...QUESTION_BANK.sprechen.teil2]).slice(0, 2));
    // Teil 3: 2 random cards
    state.sessionQuestions.sprechen.push(...shuffleArray([...QUESTION_BANK.sprechen.teil3]).slice(0, 2));

    // Randomize choice options inside selected Multiple Choice questions to guarantee unique sessions
    state.sessionQuestions.hoeren.forEach(q => {
        if (q.type === "mc" && q.options) {
            const originalCorrect = q.options[q.correct];
            shuffleArray(q.options);
            q.correct = q.options.indexOf(originalCorrect);
        }
    });

    state.sessionQuestions.lesen.forEach(q => {
        if (q.type === "mc" && q.options) {
            const originalCorrect = q.options[q.correct];
            shuffleArray(q.options);
            q.correct = q.options.indexOf(originalCorrect);
        }
    });
}

// --- CORE ENGINE NAVIGATION & ROUTER ---
function getCurrentQuestion() {
    const list = getActiveQuestionList();
    return list[state.currentQuestionIndex];
}

function getActiveQuestionList() {
    switch(state.currentModuleIndex) {
        case 0: return state.sessionQuestions.hoeren;
        case 1: return state.sessionQuestions.lesen;
        case 2: return state.sessionQuestions.schreiben;
        case 3: return state.sessionQuestions.sprechen;
    }
}

function loadQuestion(moduleIndex, questionIndex) {
    // Set active values
    state.currentModuleIndex = moduleIndex;
    state.currentQuestionIndex = questionIndex;

    // Reset playback styles or speaking buttons
    stopSpeaking();
    stopRecordingProcess();

    // Toggle nav active tabs
    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach((t, i) => {
        t.classList.toggle("active", i === moduleIndex);
    });

    // Toggle dynamic stimulus panels
    const stimulusPanels = document.querySelectorAll(".stimulus-content");
    stimulusPanels.forEach((p, i) => {
        p.classList.toggle("active", i === moduleIndex);
    });

    // Update global status displays
    const moduleNames = ["Hören (Listening)", "Lesen (Reading)", "Schreiben (Writing)", "Sprechen (Speaking)"];
    document.getElementById("display-current-module").textContent = moduleNames[moduleIndex];

    const currentList = getActiveQuestionList();
    const q = currentList[questionIndex];

    // Meta Tags
    document.getElementById("question-index-tag").textContent = `Frage ${questionIndex + 1} von ${currentList.length}`;
    document.getElementById("question-category-tag").textContent = q.grammar || q.theme || "Prüfungsteil";

    // Setup review checkbox value
    const reviewBtn = document.getElementById("btn-mark-review");
    if (state.reviews[q.id]) {
        reviewBtn.classList.add("flagged");
        reviewBtn.querySelector("span").textContent = "Markiert (Reviewing)";
    } else {
        reviewBtn.classList.remove("flagged");
        reviewBtn.querySelector("span").textContent = "Für Review markieren";
    }

    // Hide input structures first
    document.getElementById("options-list").style.display = "none";
    document.getElementById("matching-list").style.display = "none";
    document.getElementById("schreiben-form-container").style.display = "none";
    document.getElementById("schreiben-editor-container").style.display = "none";
    document.getElementById("sprechen-recorder-container").style.display = "none";

    // Render Question Stimulus + QA input depending on the module
    if (moduleIndex === 0) { // HÖREN
        setupListeningPlayer(q);
        renderMCQuestion(q);
    } else if (moduleIndex === 1) { // LESEN
        setupLesenStimulus(q);
        if (q.type === "tf" || q.type === "mc") {
            renderMCQuestion(q);
        } else if (q.type === "matching") {
            renderMatchingQuestion(q);
        }
    } else if (moduleIndex === 2) { // SCHREIBEN
        setupSchreibenStimulus(q);
        if (q.type === "form") {
            renderSchreibenForm(q);
        } else if (q.type === "email_editor") {
            renderSchreibenEditor(q);
        }
    } else if (moduleIndex === 3) { // SPRECHEN
        setupSprechenStimulus(q);
        renderSprechenRecorder(q);
    }

    // Reset and hide exam mode translation elements
    const examTranslationButtons = [
        "btn-exam-lesen-translate",
        "btn-exam-schreiben-translate",
        "btn-exam-speaking-instruction-translate",
        "btn-exam-speaking-tips-translate",
        "btn-exam-question-translate"
    ];
    examTranslationButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.style.display = "none";
            btn.textContent = "🌐 Translate";
            btn.classList.remove("active");
        }
    });
    
    const examTranslationDivs = [
        "exam-lesen-translation",
        "exam-schreiben-translation",
        "exam-speaking-instruction-translation",
        "exam-speaking-tips-translation",
        "exam-question-translation"
    ];
    examTranslationDivs.forEach(id => {
        const div = document.getElementById(id);
        if (div) {
            div.style.display = "none";
            div.innerHTML = "";
        }
    });

    // Lookup and set exam translations from map
    if (q) {
        // Question translation
        const qTrans = EXAM_TRANSLATION_MAP[q.id + "_question"];
        if (qTrans) {
            const div = document.getElementById("exam-question-translation");
            const btn = document.getElementById("btn-exam-question-translate");
            if (div && btn) {
                div.innerHTML = qTrans;
                btn.style.display = "inline-block";
            }
        }
        
        // Lesen / Schreiben stimulus translation
        if (moduleIndex === 1) {
            const sTrans = EXAM_TRANSLATION_MAP[q.id + "_text"];
            if (sTrans) {
                const div = document.getElementById("exam-lesen-translation");
                const btn = document.getElementById("btn-exam-lesen-translate");
                if (div && btn) {
                    div.innerHTML = sTrans;
                    btn.style.display = "inline-block";
                }
            }
        } else if (moduleIndex === 2) {
            const sTrans = EXAM_TRANSLATION_MAP[q.id + "_text"];
            if (sTrans) {
                const div = document.getElementById("exam-schreiben-translation");
                const btn = document.getElementById("btn-exam-schreiben-translate");
                if (div && btn) {
                    div.innerHTML = sTrans;
                    btn.style.display = "inline-block";
                }
            }
        } else if (moduleIndex === 3) {
            const instTrans = EXAM_TRANSLATION_MAP[q.id + "_instruction"];
            if (instTrans) {
                const div = document.getElementById("exam-speaking-instruction-translation");
                const btn = document.getElementById("btn-exam-speaking-instruction-translate");
                if (div && btn) {
                    div.innerHTML = instTrans;
                    btn.style.display = "inline-block";
                }
            }
            const hintsTrans = EXAM_TRANSLATION_MAP[q.id + "_hints"];
            if (hintsTrans) {
                const div = document.getElementById("exam-speaking-tips-translation");
                const btn = document.getElementById("btn-exam-speaking-tips-translate");
                if (div && btn) {
                    div.innerHTML = hintsTrans;
                    btn.style.display = "inline-block";
                }
            }
        }
    }

    // Update footer progress indicators
    const totalCount = currentList.length;
    document.getElementById("footer-center-indicator").textContent = `Frage ${questionIndex + 1} von ${totalCount}`;

    // Enable/Disable navigation buttons
    document.getElementById("btn-prev-question").disabled = (moduleIndex === 0 && questionIndex === 0);
    
    const isLastOverall = (moduleIndex === 3 && questionIndex === currentList.length - 1);
    const nextBtnText = isLastOverall ? "Zur Übersicht" : "Weiter";
    document.getElementById("btn-next-question").innerHTML = `${nextBtnText} <svg class="icon-right" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`;

    // Save and highlight active node in navigator
    saveSessionToStorage();
    updateQuestionNavigator();
}

// --- SETUP WORKSPACE INTERFACES ---

// Render Standard MC/TF Question
function renderMCQuestion(q) {
    const list = document.getElementById("options-list");
    list.style.display = "flex";
    list.innerHTML = "";

    document.getElementById("question-text").innerHTML = q.question;

    q.options.forEach((opt, idx) => {
        const item = document.createElement("div");
        item.classList.add("option-item");
        if (state.answers[q.id] === idx || (q.type === 'tf' && state.answers[q.id] === opt.val)) {
            item.classList.add("selected");
        }

        item.setAttribute("role", "radio");
        item.setAttribute("aria-checked", item.classList.contains("selected") ? "true" : "false");
        item.setAttribute("tabindex", "0");

        const radio = document.createElement("div");
        radio.classList.add("option-radio");

        const content = document.createElement("div");
        content.classList.add("option-content");
        if (opt.letter) {
            content.innerHTML = `<span class="option-letter">${opt.letter}:</span> ${opt.text}`;
        } else {
            content.textContent = opt.text;
        }

        item.appendChild(radio);
        item.appendChild(content);

        // Selection Action Handler
        const selectAction = () => {
            const allItems = list.querySelectorAll(".option-item");
            allItems.forEach(i => {
                i.classList.remove("selected");
                i.setAttribute("aria-checked", "false");
            });

            item.classList.add("selected");
            item.setAttribute("aria-checked", "true");

            // Store answer
            state.answers[q.id] = q.type === "tf" ? opt.val : idx;
            saveSessionToStorage();
            updateQuestionNavigator();
        };

        item.addEventListener("click", selectAction);
        item.addEventListener("keydown", (e) => {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                selectAction();
            }
        });

        list.appendChild(item);
    });
}

// Render Matching dropdowns (Lesen Teil 2)
function renderMatchingQuestion(q) {
    const list = document.getElementById("options-list");
    list.style.display = "flex";
    list.innerHTML = "";

    document.getElementById("question-text").innerHTML = q.situation;

    const row = document.createElement("div");
    row.classList.add("matching-row");

    const desc = document.createElement("div");
    desc.classList.add("matching-desc");
    desc.innerHTML = q.question;

    const select = document.createElement("select");
    select.classList.add("matching-select");
    select.setAttribute("aria-label", "Anzeige auswählen");
    
    const optDefault = document.createElement("option");
    optDefault.value = "";
    optDefault.textContent = "-- Wählen Sie --";
    select.appendChild(optDefault);

    q.options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.val;
        option.textContent = opt.text;
        select.appendChild(option);
    });

    if (state.answers[q.id]) {
        select.value = state.answers[q.id];
    }

    select.addEventListener("change", (e) => {
        state.answers[q.id] = e.target.value;
        saveSessionToStorage();
        updateQuestionNavigator();
    });

    row.appendChild(desc);
    row.appendChild(select);
    list.appendChild(row);
}

// Render Form Filling Inputs (Schreiben Teil 1)
function renderSchreibenForm(q) {
    document.getElementById("question-text").textContent = "Füllen Sie das Online-Formular aus:";
    
    const container = document.getElementById("schreiben-form-container");
    container.style.display = "grid";
    container.innerHTML = "";

    // Set initial dictionary structure
    if (!state.answers[q.id]) {
        state.answers[q.id] = {};
    }

    q.fields.forEach(f => {
        const row = document.createElement("div");
        row.classList.add("schreiben-form-row");

        const label = document.createElement("label");
        label.setAttribute("for", `form-field-${f.key}`);
        label.textContent = f.label;

        const input = document.createElement("input");
        input.type = "text";
        input.id = `form-field-${f.key}`;
        input.value = state.answers[q.id][f.key] || "";

        input.addEventListener("input", (e) => {
            state.answers[q.id][f.key] = e.target.value;
            
            // Mark answered only if at least one field has input
            const hasValues = Object.values(state.answers[q.id]).some(val => val.trim() !== "");
            if (hasValues) {
                // Keep dummy marker to satisfy global unanswered lists
                state.answers[q.id]._status = "started";
            } else {
                delete state.answers[q.id];
            }
            saveSessionToStorage();
            updateQuestionNavigator();
        });

        row.appendChild(label);
        row.appendChild(input);
        container.appendChild(row);
    });
}

// Render Text Editor for writing (Schreiben Teil 2)
function renderSchreibenEditor(q) {
    document.getElementById("question-text").textContent = "E-Mail-Entwurf schreiben:";
    
    const container = document.getElementById("schreiben-editor-container");
    container.style.display = "flex";

    const textarea = document.getElementById("schreiben-textarea");
    textarea.value = state.answers[q.id] || "";

    const wordCountSpan = document.getElementById("schreiben-word-count");
    const charCountSpan = document.getElementById("schreiben-char-count");

    const updateCounts = () => {
        const text = textarea.value.trim();
        const words = text === "" ? 0 : text.split(/\s+/).length;
        const chars = text.length;

        wordCountSpan.textContent = words;
        charCountSpan.textContent = chars;

        if (words > 0) {
            state.answers[q.id] = textarea.value;
        } else {
            delete state.answers[q.id];
        }
        
        saveSessionToStorage();
        updateQuestionNavigator();
    };

    updateCounts();

    textarea.removeEventListener("input", updateCounts);
    textarea.addEventListener("input", updateCounts);

    // Save Draft trigger
    document.getElementById("btn-save-draft").onclick = () => {
        saveSessionToStorage();
        updateSaveStatusUI("Entwurf manuell gespeichert");
        setTimeout(() => updateSaveStatusUI("Entwurf automatisch gesichert"), 3000);
    };

    // Export txt trigger
    document.getElementById("btn-export-text").onclick = () => {
        const text = textarea.value;
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `goethe_schreiben_teil2_${state.candidateName.replace(/\s+/g, '_')}.txt`;
        a.click();
    };
}

// Render Speak Recorder Layout (Sprechen)
function renderSprechenRecorder(q) {
    document.getElementById("question-text").textContent = "Mündliche Antwort aufnehmen:";

    const container = document.getElementById("sprechen-recorder-container");
    container.style.display = "flex";

    const recordBtn = document.getElementById("btn-record-start");
    const stopBtn = document.getElementById("btn-record-stop");
    const durationLabel = document.getElementById("record-duration");
    const playbackBox = document.getElementById("audio-playback-box");
    const audioPlayer = document.getElementById("recorded-audio-player");
    const downloadLink = document.getElementById("btn-download-recording");

    durationLabel.textContent = "00:00";
    stopBtn.disabled = true;
    recordBtn.disabled = false;
    playbackBox.style.display = "none";

    // Restore existing recording URL if already saved in memory
    if (speakingRecordings[q.id]) {
        playbackBox.style.display = "block";
        audioPlayer.src = speakingRecordings[q.id].url;
        downloadLink.href = speakingRecordings[q.id].url;
        downloadLink.download = `speaking_${q.id}_${state.candidateName.replace(/\s+/g, '_')}.wav`;
    }

    recordBtn.onclick = () => {
        recordBtn.disabled = true;
        stopBtn.disabled = false;
        playbackBox.style.display = "none";
        
        startRecording(q.id, 
            (timeString) => {
                durationLabel.textContent = timeString;
            },
            (audioUrl) => {
                playbackBox.style.display = "block";
                audioPlayer.src = audioUrl;
                downloadLink.href = audioUrl;
                downloadLink.download = `speaking_${q.id}_${state.candidateName.replace(/\s+/g, '_')}.wav`;
                recordBtn.disabled = false;
                stopBtn.disabled = true;
            }
        );
    };

    stopBtn.onclick = () => {
        stopRecordingProcess();
    };
}

// Setup Listening Player visual components
function setupListeningPlayer(q) {
    const playBtn = document.getElementById("audio-play-btn");
    const pauseBtn = document.getElementById("audio-pause-btn");
    const stopBtn = document.getElementById("audio-stop-btn");
    const playsLabel = document.getElementById("audio-plays-remaining");
    const progressFill = document.getElementById("audio-progress-fill");
    const timeCurrent = document.getElementById("audio-time-current");
    const timeTotal = document.getElementById("audio-time-total");
    const statusBadge = document.getElementById("audio-play-status");
    const visualizer = document.getElementById("audio-visualizer");
    const transcriptText = document.getElementById("transcription-fallback-content");

    // Clear animations/states
    visualizer.classList.remove("playing");
    statusBadge.textContent = "Bereit zum Abspielen";
    statusBadge.className = "status-badge";
    progressFill.style.width = "0%";
    timeCurrent.textContent = "0:00";
    transcriptText.innerHTML = `<strong>Dialog-Transkription:</strong><br>${q.script}`;

    // Est. time display
    const wordCount = q.script.split(/\s+/).length;
    const estSecs = Math.round(wordCount / 1.8) + 2;
    const formatTime = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${String(s).padStart(2, '0')}`;
    };
    timeTotal.textContent = formatTime(estSecs);

    // Track play counts
    if (state.playbackCounts[q.id] === undefined) {
        state.playbackCounts[q.id] = 0;
    }
    const playsLeft = Math.max(0, q.playback_limit - state.playbackCounts[q.id]);
    playsLabel.textContent = `Wiedergaben verbleibend: ${playsLeft}/${q.playback_limit}`;

    // Disable if no plays remaining
    if (playsLeft <= 0) {
        playBtn.disabled = true;
        statusBadge.textContent = "Limit erreicht";
        statusBadge.className = "status-badge text-danger";
    } else {
        playBtn.disabled = false;
    }
    pauseBtn.disabled = true;
    stopBtn.disabled = true;

    // Click triggers
    playBtn.onclick = () => {
        playBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        statusBadge.textContent = "Spielt ab...";
        statusBadge.className = "status-badge pulse text-success";
        visualizer.classList.add("playing");

        // Increment count on play start
        state.playbackCounts[q.id]++;
        const newLeft = Math.max(0, q.playback_limit - state.playbackCounts[q.id]);
        playsLabel.textContent = `Wiedergaben verbleibend: ${newLeft}/${q.playback_limit}`;
        saveSessionToStorage();

        speakText(q.script,
            (percent) => {
                progressFill.style.width = `${percent}%`;
                const curSec = Math.round((percent / 100) * estSecs);
                timeCurrent.textContent = formatTime(curSec);
            },
            () => {
                // Done speaking
                progressFill.style.width = "100%";
                timeCurrent.textContent = formatTime(estSecs);
                visualizer.classList.remove("playing");
                statusBadge.textContent = "Beendet";
                statusBadge.className = "status-badge text-muted";
                
                pauseBtn.disabled = true;
                stopBtn.disabled = true;
                if (newLeft > 0) {
                    playBtn.disabled = false;
                }
            },
            () => {
                // Error callback
                visualizer.classList.remove("playing");
                statusBadge.textContent = "Fehler";
                statusBadge.className = "status-badge text-danger";
                playBtn.disabled = false;
            }
        );
    };

    pauseBtn.onclick = () => {
        if (window.speechSynthesis.speaking) {
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
                pauseBtn.querySelector("svg").innerHTML = `<path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
                statusBadge.textContent = "Spielt ab...";
                visualizer.classList.add("playing");
            } else {
                window.speechSynthesis.pause();
                pauseBtn.querySelector("svg").innerHTML = `<path fill="currentColor" d="M8 5v14l11-7z"/>`;
                statusBadge.textContent = "Pausiert";
                visualizer.classList.remove("playing");
            }
        }
    };

    stopBtn.onclick = () => {
        stopSpeaking();
        visualizer.classList.remove("playing");
        statusBadge.textContent = "Abgebrochen";
        statusBadge.className = "status-badge text-muted";
        progressFill.style.width = "0%";
        timeCurrent.textContent = "0:00";
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        
        const currentLeft = Math.max(0, q.playback_limit - state.playbackCounts[q.id]);
        if (currentLeft > 0) {
            playBtn.disabled = false;
        }
    };
}

function setupLesenStimulus(q) {
    document.getElementById("lesen-doc-type").textContent = `Lesen: ${q.type === 'matching' ? 'Auswahl' : 'Textbeleg'}`;
    const displayEl = document.getElementById("lesen-text-display");
    const text = q.text ? q.text.trim() : "";
    const isCommentOnly = text.startsWith("<!--") && text.endsWith("-->");
    
    if (!text || isCommentOnly) {
        console.error(`DIAGNOSTICS: Reading passage failed to load for question ID: ${q.id}. Text content is empty or contains only comments.`);
        displayEl.innerHTML = `<div class="error-panel text-danger" style="padding: 20px; border: 1px dashed var(--color-danger); border-radius: var(--radius-md); background: var(--color-danger-light);">Reading text unavailable. Please reload the question.</div>`;
    } else {
        displayEl.innerHTML = q.text;
    }
}

function setupSchreibenStimulus(q) {
    document.getElementById("schreiben-doc-type").textContent = q.type === 'form' ? 'Schreiben: Teil 1 (Formular)' : 'Schreiben: Teil 2 (E-Mail)';
    document.getElementById("schreiben-prompt-display").innerHTML = q.text;
}

function setupSprechenStimulus(q) {
    document.getElementById("speaking-card-theme").textContent = q.theme || "Thema";
    document.getElementById("speaking-card-icon").textContent = q.icon || "🗣️";
    document.getElementById("speaking-card-word").textContent = q.word || q.title;
    document.getElementById("speaking-card-instruction").textContent = q.instruction || q.prompt;
    document.getElementById("speaking-prompt-hints").textContent = q.hints || "";
}

function updateSaveStatusUI(statusText) {
    const el = document.getElementById("schreiben-save-status");
    if (el) el.textContent = statusText;
}

// --- NAVIGATION LAYOUT BUILDERS ---

// Populates sidebar questions navigator grid
function updateQuestionNavigator() {
    const grid = document.getElementById("question-navigator-grid");
    grid.innerHTML = "";

    const activeList = getActiveQuestionList();

    activeList.forEach((q, idx) => {
        const btn = document.createElement("button");
        btn.classList.add("q-btn");
        btn.textContent = idx + 1;
        
        // Highlight active question
        if (idx === state.currentQuestionIndex) {
            btn.classList.add("active");
        }

        // Color coding answered states
        if (state.answers[q.id] !== undefined) {
            btn.classList.add("answered");
        } else {
            btn.classList.add("unanswered");
        }

        // Mark review indicator
        if (state.reviews[q.id]) {
            btn.classList.add("review");
        }

        btn.onclick = () => {
            loadQuestion(state.currentModuleIndex, idx);
        };

        grid.appendChild(btn);
    });
}

function buildReviewScreen() {
    const hoerenGrid = document.getElementById("review-grid-hoeren");
    const lesenGrid = document.getElementById("review-grid-lesen");
    const schreibenGrid = document.getElementById("review-grid-schreiben");
    const sprechenGrid = document.getElementById("review-grid-sprechen");

    const populateGrid = (gridEl, list, moduleIndex) => {
        gridEl.innerHTML = "";
        list.forEach((q, idx) => {
            const btn = document.createElement("button");
            btn.classList.add("q-btn");
            btn.textContent = idx + 1;

            if (state.answers[q.id] !== undefined) {
                btn.classList.add("answered");
            } else {
                btn.classList.add("unanswered");
            }

            if (state.reviews[q.id]) {
                btn.classList.add("review");
            }

            btn.onclick = () => {
                switchToView("view-exam-screen");
                loadQuestion(moduleIndex, idx);
            };

            gridEl.appendChild(btn);
        });
    };

    populateGrid(hoerenGrid, state.sessionQuestions.hoeren, 0);
    populateGrid(lesenGrid, state.sessionQuestions.lesen, 1);
    populateGrid(schreibenGrid, state.sessionQuestions.schreiben, 2);
    populateGrid(sprechenGrid, state.sessionQuestions.sprechen, 3);

    // Sum up answered details
    let answered = 0;
    let unanswered = 0;
    let marked = 0;

    const countStats = (list) => {
        list.forEach(q => {
            if (state.answers[q.id] !== undefined) answered++;
            else unanswered++;
            if (state.reviews[q.id]) marked++;
        });
    };

    countStats(state.sessionQuestions.hoeren);
    countStats(state.sessionQuestions.lesen);
    countStats(state.sessionQuestions.schreiben);
    countStats(state.sessionQuestions.sprechen);

    document.getElementById("summary-answered").textContent = answered;
    document.getElementById("summary-unanswered").textContent = unanswered;
    document.getElementById("summary-marked").textContent = marked;
}

// Navigation flow switches
function switchToView(viewId) {
    const panels = document.querySelectorAll(".view-panel");
    panels.forEach(p => {
        p.classList.toggle("active", p.id === viewId);
    });

    const isExamView = (viewId === "view-exam-screen");
    document.getElementById("app-sidebar").style.display = isExamView ? "flex" : "none";
    document.getElementById("app-footer").style.display = isExamView ? "flex" : "none";
    document.getElementById("header-stats").style.display = (viewId !== "view-start-screen") ? "flex" : "none";
    document.getElementById("progress-bar-wrapper").style.display = (viewId !== "view-start-screen") ? "block" : "none";
}

// --- DYNAMIC GRAPHICS & PERFORMANCE ANALYTICS ENGINE ---

// Grades and compiles weak grammar/vocab items
function runScoringAndAnalytics() {
    let hoerenCorrect = 0;
    let lesenCorrect = 0;

    // Track analytics maps
    const grammarTotals = {};
    const grammarScores = {};
    const vocabTotals = {};
    const vocabScores = {};

    const evaluateList = (list, isListening) => {
        list.forEach(q => {
            const isCorrect = (state.answers[q.id] === q.correct);
            
            if (isCorrect) {
                if (isListening) hoerenCorrect++;
                else lesenCorrect++;
            }

            // Fill Grammar analytics
            if (q.grammar) {
                grammarTotals[q.grammar] = (grammarTotals[q.grammar] || 0) + 1;
                grammarScores[q.grammar] = (grammarScores[q.grammar] || 0) + (isCorrect ? 1 : 0);
            }

            // Fill Vocab analytics
            if (q.vocab) {
                vocabTotals[q.vocab] = (vocabTotals[q.vocab] || 0) + 1;
                vocabScores[q.vocab] = (vocabScores[q.vocab] || 0) + (isCorrect ? 1 : 0);
            }
        });
    };

    evaluateList(state.sessionQuestions.hoeren, true);
    evaluateList(state.sessionQuestions.lesen, false);

    // Dynamic Schreiben (Writing) evaluation logic
    const hasSchreibenScore = (state.schreibenScore !== null && state.schreibenScore !== undefined);
    const schreibenScore = hasSchreibenScore ? state.schreibenScore : 0;
    const schreibenProgress = (schreibenScore / 15) * 100;
    
    const indicatorSchreiben = document.getElementById("status-indicator-schreiben");
    const dotSchreiben = document.getElementById("dot-schreiben");
    const lblStatusSchreiben = document.getElementById("lbl-status-schreiben");
    const badgeSchreiben = document.getElementById("lbl-badge-schreiben");
    
    if (hasSchreibenScore) {
        document.getElementById("results-schreiben-score").textContent = `${schreibenScore} / 15`;
        document.getElementById("results-schreiben-fill").style.width = `${schreibenProgress}%`;
        if (indicatorSchreiben) indicatorSchreiben.style.color = "var(--color-success)";
        if (dotSchreiben) dotSchreiben.style.background = "var(--color-success)";
        if (lblStatusSchreiben) lblStatusSchreiben.textContent = "✓ Evaluated";
        if (badgeSchreiben) {
            badgeSchreiben.textContent = "✓ Evaluated";
            badgeSchreiben.style.color = "var(--color-success)";
        }
    } else {
        document.getElementById("results-schreiben-score").textContent = `-- / 15`;
        document.getElementById("results-schreiben-fill").style.width = `0%`;
        if (indicatorSchreiben) indicatorSchreiben.style.color = "var(--color-warning)";
        if (dotSchreiben) dotSchreiben.style.background = "var(--color-warning)";
        if (lblStatusSchreiben) lblStatusSchreiben.textContent = "Awaiting Evaluation";
        if (badgeSchreiben) {
            badgeSchreiben.textContent = "Awaiting Evaluation";
            badgeSchreiben.style.color = "var(--color-warning)";
        }
    }

    // Dynamic Sprechen (Speaking) evaluation logic
    const hasSprechenScore = (state.sprechenScore !== null && state.sprechenScore !== undefined);
    const sprechenScore = hasSprechenScore ? state.sprechenScore : 0;
    const sprechenProgress = (sprechenScore / 15) * 100;
    
    const indicatorSprechen = document.getElementById("status-indicator-sprechen");
    const dotSprechen = document.getElementById("dot-sprechen");
    const lblStatusSprechen = document.getElementById("lbl-status-sprechen");
    const badgeSprechen = document.getElementById("lbl-badge-sprechen");
    
    if (hasSprechenScore) {
        document.getElementById("results-sprechen-score").textContent = `${sprechenScore} / 15`;
        document.getElementById("results-sprechen-fill").style.width = `${sprechenProgress}%`;
        if (indicatorSprechen) indicatorSprechen.style.color = "var(--color-success)";
        if (dotSprechen) dotSprechen.style.background = "var(--color-success)";
        if (lblStatusSprechen) lblStatusSprechen.textContent = "✓ Evaluated";
        if (badgeSprechen) {
            badgeSprechen.textContent = "✓ Evaluated";
            badgeSprechen.style.color = "var(--color-success)";
        }
    } else {
        document.getElementById("results-sprechen-score").textContent = `-- / 15`;
        document.getElementById("results-sprechen-fill").style.width = `0%`;
        if (indicatorSprechen) indicatorSprechen.style.color = "var(--color-warning)";
        if (dotSprechen) dotSprechen.style.background = "var(--color-warning)";
        if (lblStatusSprechen) lblStatusSprechen.textContent = "Awaiting Evaluation";
        if (badgeSprechen) {
            badgeSprechen.textContent = "Awaiting Evaluation";
            badgeSprechen.style.color = "var(--color-warning)";
        }
    }

    // Final total score and verdict calculation
    const verdict = document.getElementById("results-verdict");
    const scoreCircleText = document.getElementById("results-total-score");
    const percentageText = document.getElementById("results-percentage");
    
    if (hasSchreibenScore && hasSprechenScore) {
        const totalScore = hoerenCorrect + lesenCorrect + schreibenScore + sprechenScore;
        const finalPercentage = Math.round((totalScore / 60) * 100);
        scoreCircleText.textContent = `${totalScore} / 60`;
        percentageText.textContent = `${finalPercentage}%`;
        
        const pass = finalPercentage >= 60;
        if (pass) {
            verdict.textContent = "BESTANDEN / PASS";
            verdict.className = "score-label text-success";
        } else {
            verdict.textContent = "NICHT BESTANDEN / FAIL";
            verdict.className = "score-label text-danger";
        }
    } else {
        const partialScore = hoerenCorrect + lesenCorrect;
        const partialPercentage = Math.round((partialScore / 30) * 100);
        scoreCircleText.textContent = `${partialScore} / 30 (Prelim.)`;
        percentageText.textContent = `${partialPercentage}%`;
        
        verdict.textContent = "RESULT AWAITING FINAL EVALUATION";
        verdict.className = "score-label text-warning";
    }

    document.getElementById("results-hoeren-score").textContent = `${hoerenCorrect} / 15`;
    document.getElementById("results-lesen-score").textContent = `${lesenCorrect} / 15`;
    document.getElementById("results-hoeren-fill").style.width = `${(hoerenCorrect / 15) * 100}%`;
    document.getElementById("results-lesen-fill").style.width = `${(lesenCorrect / 15) * 100}%`;

    // Populate Certificate Metadata
    document.getElementById("cert-candidate-name").textContent = state.candidateName;
    document.getElementById("cert-date").textContent = new Date(state.examDate).toLocaleDateString('de-DE', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Time spent calculation
    const overallTime = state.endTime && state.startTime ? Math.round((state.endTime - state.startTime) / 1000) : state.timeSpent;
    const formatSecs = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}m ${s}s`;
    };
    document.getElementById("results-time-spent").textContent = formatSecs(overallTime);

    // Average time calculations (mocking questions index averages)
    document.getElementById("results-speed-hoeren").textContent = `${Math.round(overallTime / 30)} Sek.`;
    document.getElementById("results-speed-lesen").textContent = `${Math.round(overallTime / 30)} Sek.`;

    // Validity Checks (Priority 6)
    const answeredCount = Object.keys(state.answers).filter(k => k.startsWith("h_") || k.startsWith("l_")).length;
    const durationMinutes = overallTime / 60;
    const isInvalid = (durationMinutes < 5 || answeredCount < 15);
    
    const warningBox = document.getElementById("validity-warning-box");
    
    if (isInvalid) {
        if (warningBox) warningBox.style.display = "block";
        document.querySelector(".grammar-weakness-card").style.display = "none";
        document.querySelector(".vocab-weakness-card").style.display = "none";
        document.querySelector(".svg-chart-card").style.display = "none";
    } else {
        if (warningBox) warningBox.style.display = "none";
        document.querySelector(".grammar-weakness-card").style.display = "block";
        document.querySelector(".vocab-weakness-card").style.display = "block";
        document.querySelector(".svg-chart-card").style.display = "block";
        
        // Analytics: Grammar Strengths / Weaknesses listing
        const strengthsGrammar = [];
        const weaknessesGrammar = [];
        for (const key in grammarTotals) {
            const pct = (grammarScores[key] / grammarTotals[key]) * 100;
            if (pct >= 70) strengthsGrammar.push(key);
            else weaknessesGrammar.push(key);
        }
        
        const strengthsVocab = [];
        const weaknessesVocab = [];
        for (const key in vocabTotals) {
            const pct = (vocabScores[key] / vocabTotals[key]) * 100;
            if (pct >= 70) strengthsVocab.push(key);
            else weaknessesVocab.push(key);
        }

        const populateListElement = (elId, tags) => {
            const listEl = document.getElementById(elId);
            listEl.innerHTML = "";
            if (tags.length === 0) {
                listEl.innerHTML = "<li>Keine Daten</li>";
            } else {
                tags.forEach(t => {
                    const li = document.createElement("li");
                    li.textContent = t;
                    listEl.appendChild(li);
                });
            }
        };

        populateListElement("grammar-strengths-list", strengthsGrammar);
        populateListElement("grammar-weaknesses-list", weaknessesGrammar);
        populateListElement("vocab-strengths-list", strengthsVocab);
        populateListElement("vocab-weaknesses-list", weaknessesVocab);

        // Build SVG Dynamic Charts
        renderSVGTopicCharts(grammarTotals, grammarScores, vocabTotals, vocabScores);
    }
}

// Generate SVG horizontal bars dynamically
function renderSVGTopicCharts(gT, gS, vT, vS) {
    const container = document.getElementById("svg-chart-container");
    container.innerHTML = "";

    // Mix and display data points
    const topics = {};
    for (const key in gT) {
        topics[key] = { correct: gS[key], total: gT[key] };
    }
    for (const key in vT) {
        topics[key] = { correct: vS[key], total: vT[key] };
    }

    for (const topicName in topics) {
        const item = topics[topicName];
        const percent = Math.round((item.correct / item.total) * 100);

        const row = document.createElement("div");
        row.classList.add("chart-bar-row");

        const label = document.createElement("div");
        label.classList.add("chart-bar-label");
        label.textContent = topicName;

        const track = document.createElement("div");
        track.classList.add("chart-bar-track");

        const fill = document.createElement("div");
        fill.classList.add("chart-bar-fill");
        // Animate fill bar slightly delayed
        setTimeout(() => {
            fill.style.width = `${percent}%`;
        }, 100);

        const val = document.createElement("div");
        val.classList.add("chart-bar-val");
        val.textContent = `${percent}%`;

        track.appendChild(fill);
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(val);

        container.appendChild(row);
    }
}

// --- GLOBAL EXAM TIMER MANAGER ---
let examCountdownTimer = null;
let currentRemainingSecs = 65 * 60; // 65 Minutes

function startGlobalExamTimer() {
    clearInterval(examCountdownTimer);

    // Dynamic initial values based on elapsed time if restoring session
    if (state.startTime) {
        const elapsedSecs = Math.floor((Date.now() - state.startTime) / 1000);
        currentRemainingSecs = Math.max(0, (65 * 60) - elapsedSecs);
    }

    const timerBadge = document.getElementById("exam-timer-wrapper");

    const tick = () => {
        if (currentRemainingSecs <= 0) {
            clearInterval(examCountdownTimer);
            alert("Die Zeit ist abgelaufen! Die Prüfung wird jetzt automatisch abgegeben.");
            submitExamAction();
            return;
        }

        currentRemainingSecs--;
        
        // Save overall time spent
        state.timeSpent = (65 * 60) - currentRemainingSecs;
        saveSessionToStorage();

        // Warning state below 5 minutes
        if (currentRemainingSecs < 300) {
            timerBadge.classList.add("warning-time");
        } else {
            timerBadge.classList.remove("warning-time");
        }

        const mins = String(Math.floor(currentRemainingSecs / 60)).padStart(2, '0');
        const secs = String(currentRemainingSecs % 60).padStart(2, '0');
        document.getElementById("exam-timer").textContent = `${mins}:${secs}`;

        // Update global progress bar depending on questions completed
        const totalQuestionsCount = 30; // listening + reading
        let answered = 0;
        state.sessionQuestions.hoeren.forEach(q => { if(state.answers[q.id] !== undefined) answered++; });
        state.sessionQuestions.lesen.forEach(q => { if(state.answers[q.id] !== undefined) answered++; });
        const progressPercent = (answered / totalQuestionsCount) * 100;
        document.getElementById("global-progress-bar").style.width = `${progressPercent}%`;
    };

    tick();
    examCountdownTimer = setInterval(tick, 1000);
}

function stopGlobalExamTimer() {
    clearInterval(examCountdownTimer);
}

// --- SUBMISSION AND JSON DATA EXPORT ---
function logExamMistakes() {
    const logMistake = (q) => {
        const userAnswerIndex = state.answers[q.id];
        if (userAnswerIndex !== q.correct) {
            const exists = portalState.mistakes.some(m => m.id === q.id);
            if (!exists) {
                let userAnsStr = "Keine Antwort";
                let correctAnsStr = "Keine";
                
                if (q.type === "tf") {
                    userAnsStr = userAnswerIndex !== undefined ? (userAnswerIndex ? "Richtig" : "Falsch") : "Keine Antwort";
                    correctAnsStr = q.correct ? "Richtig" : "Falsch";
                } else if (userAnswerIndex !== undefined) {
                    const optObj = q.options[userAnswerIndex];
                    userAnsStr = optObj ? (optObj.text || optObj.val || optObj) : "Keine Antwort";
                    const correctOptObj = q.options[q.correct];
                    correctAnsStr = correctOptObj ? (correctOptObj.text || correctOptObj.val || correctOptObj) : "Keine";
                }
                
                portalState.mistakes.push({
                    id: q.id,
                    mode: "exam",
                    subTopic: q.vocab || q.grammar || "Exam",
                    question: q.question,
                    options: q.options.map(o => o.text || o.val || o),
                    correct: q.correct,
                    explanation: q.script || "Exam Mode Question",
                    topic: q.vocab || q.grammar || "Exam",
                    date: new Date().toLocaleDateString('de-DE'),
                    userAnswer: userAnsStr,
                    rawQuestionObj: q
                });
            }
        }
    };
    
    if (state.sessionQuestions && state.sessionQuestions.hoeren) {
        state.sessionQuestions.hoeren.forEach(logMistake);
    }
    if (state.sessionQuestions && state.sessionQuestions.lesen) {
        state.sessionQuestions.lesen.forEach(logMistake);
    }
    
    savePortalStateToStorage();
}

function submitExamAction() {
    stopGlobalExamTimer();
    stopSpeaking();
    stopRecordingProcess();

    state.isSubmitted = true;
    state.endTime = Date.now();
    saveSessionToStorage();

    // Log exam mistakes
    logExamMistakes();

    // Increment completed exam stats and streaks
    portalState.examsCompleted++;
    updateStreakOnActivity();
    savePortalStateToStorage();

    runScoringAndAnalytics();
    switchToView("view-results-screen");
}

function exportSessionAsJSON() {
    const exportData = {
        candidateName: state.candidateName,
        examDate: state.examDate,
        startTime: new Date(state.startTime).toISOString(),
        endTime: new Date(state.endTime).toISOString(),
        totalDurationSeconds: Math.round((state.endTime - state.startTime) / 1000),
        answers: state.answers,
        hoerenScore: document.getElementById("results-hoeren-score").textContent,
        lesenScore: document.getElementById("results-lesen-score").textContent,
        totalScore: document.getElementById("results-total-score").textContent,
        percentage: document.getElementById("results-percentage").textContent
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `goethe_a1_mock_exam_${state.candidateName.replace(/\s+/g, '_')}.json`;
    a.click();
}

// --- EXAM TRANSLATION MAP ---
const EXAM_TRANSLATION_MAP = {
    // Hören Teil 1
    "h_t1_q1_question": "When do Thomas and Sarah go to the cinema?",
    "h_t1_q2_question": "How much does the man pay for the book?",
    "h_t1_q3_question": "When does the train arrive in Cologne?",
    "h_t1_q4_question": "What is Peter drinking?",
    "h_t1_q5_question": "Where is the train station located?",
    "h_t1_q6_question": "On which days does Mr. Müller work?",
    
    // Hören Teil 2
    "h_t2_q7_question": "The train to Hamburg departs today from platform two.",
    "h_t2_q8_question": "The shop closes earlier than usual today.",
    "h_t2_q9_question": "A kilo of strawberries costs 2.99 Euros.",
    "h_t2_q10_question": "Passengers should go to the flight gate immediately.",
    
    // Hören Teil 3
    "h_t3_q11_question": "Where is Stefan's cookbook?",
    "h_t3_q12_question": "Which umbrella did Julia forget?",
    "h_t3_q13_question": "When is Mrs. Becker's new appointment?",
    "h_t3_q14_question": "When are they meeting for the barbecue?",
    "h_t3_q15_question": "Where are they getting the car for the move from?",

    // Lesen Teil 1
    "l_t1_q1_text": "From: Lars. Subject: Birthday party! Hello Petra, next Saturday I am celebrating my birthday. I would like to invite you. The party starts at 6 PM in my garden. Please let me know by Wednesday if you can come.",
    "l_t1_q1_question": "Lars is celebrating his birthday in the garden.",
    "l_t1_q2_question": "Petra should reply by next Saturday.",
    
    "l_t1_q3_text": "To: Hotel Central. Subject: Booking. Dear Sir/Madam, I booked a double room for three nights from June 12th to June 15th. I will arrive very late, around 11 PM. Is that okay? Best regards, Thomas Braun.",
    "l_t1_q3_question": "Mr. Braun has reserved a double room.",
    "l_t1_q4_question": "Mr. Braun must let them know if he arrives late.",
    
    "l_t1_q5_text": "From: Language School. Subject: Course cancellation. Dear students, unfortunately the German class this Wednesday, June 14th, is cancelled because the teacher is sick. We will make up for the class next week. See you on Friday!",
    "l_t1_q5_question": "The German course is cancelled on Wednesday.",

    // Lesen Teil 2
    "l_t2_q6_text": "Situation: You are looking for a German course. Which ad fits your wish?",
    "l_t2_q6_question": "Which ad fits your wish?",
    "l_t2_q7_question": "Which ad fits your wish?",
    "l_t2_q8_question": "Which ad fits your wish?",
    "l_t2_q9_question": "Which ad fits your wish?",
    "l_t2_q10_question": "Which ad fits your wish?",

    // Lesen Teil 3
    "l_t3_q11_text": "Information. Dear library users, due to renovation works, the library will remain closed from July 1st to July 7th. During this time, it is not possible to return books. Thank you for your understanding.",
    "l_t3_q11_question": "One cannot return books during the renovation works.",
    
    "l_t3_q12_text": "Ticket Counter. Train tickets can only be purchased online or at the ticket machines. The service counter is currently closed due to staff shortage. We apologize for the inconvenience.",
    "l_t3_q12_question": "One can buy train tickets at the service counter.",
    
    "l_t3_q13_text": "Indoor Pool. Children under 10 years of age are only allowed entry when accompanied by an adult. For safety reasons, unaccompanied children will not be admitted.",
    "l_t3_q13_question": "An 8-year-old child is not allowed to go to the indoor pool alone.",
    
    "l_t3_q14_text": "Restaurant Krone. Tonight, a private event is taking place in our restaurant. We are closed to the public from 6 PM. We look forward to serving you again tomorrow.",
    "l_t3_q14_question": "Tonight, one can eat normally at Restaurant Krone.",
    
    "l_t3_q15_text": "Supermarket. Out of respect for other customers, pets are not allowed inside the store. Guide dogs for the blind are an exception and may enter.",
    "l_t3_q15_question": "A guide dog for the blind is allowed to go into the supermarket.",

    // Schreiben Teil 1
    "s_t1_q1_text": "<strong>Situation:</strong> Your friend Eva wants to register for a German course. She cannot come herself. Fill out the missing information (1-5) in the form for her. She is 25, single, lives in Munich, wants to start in September.",

    // Schreiben Teil 2
    "s_t2_q1_text": "<strong>Write an email:</strong> You want to visit your friend Julia in Berlin next weekend. Write to her:<br>- Say when you will arrive.<br>- Ask if you can stay at her place.<br>- Suggest doing something together.<br><em>Write 30-40 words.</em>",

    // Sprechen Teil 1
    "sp_t1_q1_instruction": "Introduce yourself: Name, Age, Country, Living Place, Languages, Job, Hobbies.",
    
    // Sprechen Teil 2
    "sp_t2_card1_instruction": "Ask your partner a question about Bread.",
    "sp_t2_card1_hints": "e.g., Do you buy bread every day? / Where can I buy bread?",
    "sp_t2_card2_instruction": "Ask your partner a question using 'Supermarket'.",
    "sp_t2_card2_hints": "e.g., Where is the nearest supermarket? / When does the supermarket close?",
    
    // Sprechen Teil 3
    "sp_t3_card1_instruction": "Make a request for a glass of water.",
    "sp_t3_card1_hints": "e.g., Could you please bring me a glass of water?",
    "sp_t3_card2_instruction": "Give the partner a key or ask for it.",
    "sp_t3_card2_hints": "e.g., Can you please give me the key? / Here is your key."
};

const VOCAB_TOPIC_INFO = {
    familie: { name: "Familie", emoji: "👪" },
    begruessung: { name: "Begrüßung & Vorstellung", emoji: "👋" },
    personalinfo: { name: "Persönliche Informationen", emoji: "ℹ️" },
    laender: { name: "Länder & Sprachen", emoji: "🌐" },
    tage: { name: "Tage, Monate & Datum", emoji: "📅" },
    zahlen: { name: "Zahlen", emoji: "🔢" },
    uhrzeit: { name: "Uhrzeit & Termine", emoji: "⏰" },
    wetter: { name: "Wetter", emoji: "☀️" },
    wohnung: { name: "Wohnung & Möbel", emoji: "🏠" },
    kleidung: { name: "Kleidung", emoji: "👕" },
    essen: { name: "Essen & Trinken", emoji: "🍎" },
    einkaufen: { name: "Einkaufen & Geld", emoji: "🛍️" },
    hobbys: { name: "Hobbys & Sport", emoji: "⚽" },
    reisen: { name: "Reisen & Urlaub", emoji: "✈️" },
    verkehr: { name: "Verkehr & Transport", emoji: "🚗" },
    stadt: { name: "Stadt & Orte", emoji: "🏙️" },
    schule: { name: "Schule & Lernen", emoji: "🏫" },
    arbeit: { name: "Arbeit & Beruf", emoji: "💼" },
    technologie: { name: "Technologie & Kommunikation", emoji: "💻" },
    tagesablauf: { name: "Tagesablauf", emoji: "🌅" },
    gesundheit: { name: "Gesundheit & Körper", emoji: "💪" },
    medizin: { name: "Medizin & Arzt", emoji: "🏥" },
    notfall: { name: "Notfall-Vokabeln", emoji: "🚨" }
};

let learningState = {
    type: "vocab",
    topic: "",
    items: [],
    currentIndex: 0
};

function playSpeech(text, rate) {
    speakText(text, () => {}, () => {}, () => {}, rate);
}
window.playSpeech = playSpeech;

function openVocabTopicHub(topic) {
    switchToView("view-practice-topic-hub");
    
    const info = VOCAB_TOPIC_INFO[topic] || { name: topic, emoji: "📖" };
    document.getElementById("hub-topic-title").textContent = `${info.emoji} ${info.name}`;
    
    practiceState.subTopic = topic;
    
    const stats = portalState.vocabStats[topic] || { learned: false, practised: false, mastered: false };
    
    const dotLearned = document.getElementById("hub-dot-learned");
    const dotPractised = document.getElementById("hub-dot-practised");
    const dotMastered = document.getElementById("hub-dot-mastered");
    
    if (stats.learned) {
        dotLearned.style.background = "var(--color-success)";
        dotLearned.style.boxShadow = "0 0 8px var(--color-success)";
    } else {
        dotLearned.style.background = "var(--color-border)";
        dotLearned.style.boxShadow = "none";
    }
    
    if (stats.practised) {
        dotPractised.style.background = "var(--color-warning)";
        dotPractised.style.boxShadow = "0 0 8px var(--color-warning)";
    } else {
        dotPractised.style.background = "var(--color-border)";
        dotPractised.style.boxShadow = "none";
    }
    
    if (stats.mastered) {
        dotMastered.style.background = "#eab308";
        dotMastered.style.boxShadow = "0 0 8px #eab308";
    } else {
        dotMastered.style.background = "var(--color-border)";
        dotMastered.style.boxShadow = "none";
    }
    
    document.getElementById("btn-hub-learn").onclick = () => {
        startVocabLearning(topic);
    };
    
    document.getElementById("btn-hub-practice").onclick = () => {
        startVocabPracticeQuiz(topic);
    };
    
    document.getElementById("btn-hub-mistakes").onclick = () => {
        startVocabMistakesQuiz(topic);
    };
}
window.openVocabTopicHub = openVocabTopicHub;

function startVocabLearning(topic) {
    learningState = {
        type: "vocab",
        topic: topic,
        items: VOCABULARY_DATABASE[topic] || [],
        currentIndex: 0
    };
    
    switchToView("view-learning-workspace");
    loadLearnItem();
}

function startVocabPracticeQuiz(topic) {
    practiceState.mode = "vocab";
    practiceState.subTopic = topic;
    practiceState.questions = getShuffledQuizQuestions(topic);
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.incorrectQuestions = [];
    
    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}

function startVocabMistakesQuiz(topic) {
    const topicMistakes = portalState.mistakes.filter(m => m.id && m.id.startsWith("pv_" + topic + "_"));
    if (topicMistakes.length === 0) {
        alert("Keine Fehler für dieses Thema vorhanden! / No mistakes found for this topic.");
        return;
    }
    
    practiceState.mode = "vocab";
    practiceState.subTopic = topic;
    practiceState.questions = topicMistakes.map(m => m.rawQuestionObj).sort(() => Math.random() - 0.5);
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.incorrectQuestions = [];
    
    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}

function startReadingLearning() {
    learningState = {
        type: "reading",
        topic: "Lesen",
        items: PRACTICE_DATABASE.reading,
        currentIndex: 0
    };
    switchToView("view-learning-workspace");
    loadLearnItem();
}

function startListeningLearning() {
    learningState = {
        type: "listening",
        topic: "Hören",
        items: PRACTICE_DATABASE.listening,
        currentIndex: 0
    };
    switchToView("view-learning-workspace");
    loadLearnItem();
}

function startPracticeFromLearning() {
    practiceState.mode = learningState.type;
    practiceState.questions = [...learningState.items].sort(() => Math.random() - 0.5);
    practiceState.subTopic = learningState.type === "reading" ? "Short Texts" : "Dialogue Synthesis";
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.incorrectQuestions = [];
    
    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}

function loadLearnItem() {
    const item = learningState.items[learningState.currentIndex];
    const badge = document.getElementById("learn-progress-badge");
    const bar = document.getElementById("learn-progress-bar-fill");
    const container = document.getElementById("learn-card-content");
    const prevBtn = document.getElementById("btn-learn-prev");
    const nextBtn = document.getElementById("btn-learn-next");
    
    const total = learningState.items.length;
    const currentNum = learningState.currentIndex + 1;
    badge.textContent = `${currentNum} / ${total}`;
    bar.style.width = `${(currentNum / total) * 100}%`;
    
    prevBtn.disabled = (learningState.currentIndex === 0);
    
    if (learningState.currentIndex === total - 1) {
        if (learningState.type === "vocab") {
            nextBtn.innerHTML = `Lernen beenden 🏁`;
        } else {
            nextBtn.innerHTML = `Übung starten 📝`;
        }
    } else {
        nextBtn.innerHTML = `Weiter &rarr;`;
    }
    
    if (learningState.type === "vocab") {
        document.getElementById("learn-workspace-title").textContent = "Vokabeln lernen";
        container.innerHTML = `
            <div class="vocab-learn-card">
                <div class="vocab-learn-german">${item.word}</div>
                
                <div style="margin: 20px 0; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                    <button class="btn btn-secondary btn-translate-assist btn-touch" id="btn-learn-translate" onclick="toggleTranslation(this)">🌐 Show English</button>
                    <p class="english-text" style="display: none; font-size: 1.5rem; text-align: center; color: var(--color-success); margin: 10px 0;">${item.translation}</p>
                </div>
                
                <div style="display: flex; gap: 12px; justify-content: center; margin-top: 24px;">
                    <button class="btn btn-primary btn-touch-audio btn-touch" onclick="playSpeech('${item.word.replace(/'/g, "\\'")}', 1.0)">🔊 Normal</button>
                    <button class="btn btn-secondary btn-touch-audio btn-touch" onclick="playSpeech('${item.word.replace(/'/g, "\\'")}', 0.65)">🐢 Langsam</button>
                </div>
            </div>
        `;
    } else if (learningState.type === "listening") {
        document.getElementById("learn-workspace-title").textContent = "Hören lernen";
        
        let vocabRows = "";
        if (item.vocabSupport) {
            item.vocabSupport.forEach(v => {
                vocabRows += `
                    <div class="vocab-support-item">
                        <strong style="color:var(--color-primary);">${v.word}</strong>
                        <span style="color:var(--color-text-muted); font-size:0.85rem;">${v.translation}</span>
                    </div>
                `;
            });
        }
        
        container.innerHTML = `
            <div class="listening-learn-card" style="animation: fadeIn 0.3s ease-out;">
                <h3 style="margin-top: 0; font-family: var(--font-display); color: var(--color-success);">Gespräch / Dialogue ${currentNum}</h3>
                
                <div style="display: flex; gap: 12px; margin: 16px 0;">
                    <button class="btn btn-primary btn-touch-audio btn-touch" onclick="playSpeech('${item.script.replace(/'/g, "\\'")}', 1.0)">🔊 Normal</button>
                    <button class="btn btn-secondary btn-touch-audio btn-touch" onclick="playSpeech('${item.script.replace(/'/g, "\\'")}', 0.65)">🐢 Langsam</button>
                </div>

                <div class="lesen-document-body" style="font-size:1.1rem; line-height:1.6; padding:16px; background:rgba(255,255,255,0.03); border:1px solid var(--color-border); border-radius:var(--radius-md); margin-bottom:12px;">
                    ${item.script}
                </div>
                
                <div style="margin: 16px 0;">
                    <button class="btn btn-secondary btn-translate-assist btn-touch" onclick="toggleTranslation(this)">🌐 Show English</button>
                    <p class="english-text" style="display: none;">${item.translation}</p>
                </div>
                
                <div class="vocab-support-section" style="margin-top: 24px; border-top: 1px dashed var(--color-border); padding-top: 16px;">
                    <h4 style="margin: 0 0 12px 0;">🔑 Schlüsselwörter / Keywords:</h4>
                    <div class="vocab-support-list">${vocabRows || "Keine Wörter"}</div>
                </div>
            </div>
        `;
    } else if (learningState.type === "reading") {
        document.getElementById("learn-workspace-title").textContent = "Lesen lernen";
        
        let vocabRows = "";
        if (item.vocabSupport) {
            item.vocabSupport.forEach(v => {
                vocabRows += `
                    <div class="vocab-support-item">
                        <strong style="color:var(--color-primary);">${v.word}</strong>
                        <span style="color:var(--color-text-muted); font-size:0.85rem;">${v.translation}</span>
                    </div>
                `;
            });
        }
        
        container.innerHTML = `
            <div class="reading-learn-card" style="animation: fadeIn 0.3s ease-out;">
                <h3 style="margin-top: 0; font-family: var(--font-display); color: var(--color-success);">Dokument / Passage ${currentNum}</h3>
                
                <div style="display: flex; gap: 12px; margin: 16px 0;">
                    <button class="btn btn-primary btn-touch-audio btn-touch" onclick="playSpeech('${item.text.replace(/<[^>]*>/g, '').replace(/'/g, "\\'")}', 1.0)">🔊 Vorlesen / Read</button>
                    <button class="btn btn-secondary btn-touch-audio btn-touch" onclick="playSpeech('${item.text.replace(/<[^>]*>/g, '').replace(/'/g, "\\'")}', 0.65)">🐢 Langsam</button>
                </div>

                <div class="lesen-document-view" style="margin-bottom:16px;">
                    <div class="lesen-document-body" style="padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:rgba(255,255,255,0.02);">
                        ${item.text}
                    </div>
                </div>
                
                <div style="margin: 16px 0;">
                    <button class="btn btn-secondary btn-translate-assist btn-touch" onclick="toggleTranslation(this)">🌐 Show English</button>
                    <p class="english-text" style="display: none;">${item.translation}</p>
                </div>
                
                <div class="vocab-support-section" style="margin-top: 24px; border-top: 1px dashed var(--color-border); padding-top: 16px;">
                    <h4 style="margin: 0 0 12px 0;">🔑 Schlüsselwörter / Keywords:</h4>
                    <div class="vocab-support-list">${vocabRows || "Keine Wörter"}</div>
                </div>
            </div>
        `;
    }
}

// --- FUTURE EXPANSION & PRACTICE CENTER HOOKS ---
// --- PRACTICE STATE & WORKSPACE ENGINE ---
let practiceState = {
    mode: "", // "vocab", "grammar", "reading", "listening", "writing", "speaking", "mistakes", "mistakes_all", "daily"
    subTopic: "",
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: {},
    isAnswerChecked: false,
    mistakeIndex: undefined
};

function startPracticeMode(type) {
    practiceState.mode = type;
    practiceState.subTopic = "";
    practiceState.questions = [];
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.isAnswerChecked = false;
    practiceState.mistakeIndex = undefined;
    
    if (type === "vocab") {
        switchToView("view-practice-workspace");
        document.getElementById("practice-workspace-title").textContent = "Wortschatz-Übung";
        document.getElementById("practice-score-current").textContent = "0";
        document.getElementById("practice-score-total").textContent = "0";
        
        document.getElementById("practice-stimulus-hoeren").style.display = "none";
        document.getElementById("practice-stimulus-sprechen").style.display = "none";
        document.getElementById("practice-options-list").style.display = "none";
        document.getElementById("practice-editor-container").style.display = "none";
        document.getElementById("practice-recorder-container").style.display = "none";
        document.getElementById("practice-explanation-box").style.display = "none";
        
        document.getElementById("practice-stimulus-text").style.display = "block";
        document.getElementById("practice-stimulus-label").textContent = "Wortschatz-Auswahl";
        
        let html = `<div class="vocab-topics-selection glass-panel" style="padding: 16px;">
            <p style="margin-top:0;"><strong>Bitte wählen Sie ein Vokabelthema (23 Themen):</strong></p>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:12px; max-height:480px; overflow-y:auto; padding-right:6px;">`;
            
        for (const t in VOCAB_TOPIC_INFO) {
            const info = VOCAB_TOPIC_INFO[t];
            const stats = portalState.vocabStats[t] || { learned: false, practised: false, mastered: false };
            let badgesHTML = "";
            if (stats.learned) badgesHTML += `<span class="badge status-badge" style="background:rgba(16,185,129,0.15); color:var(--color-success); font-size:0.65rem; padding:2px 4px; border-radius:4px;">Gelernt</span>`;
            if (stats.practised) badgesHTML += `<span class="badge status-badge" style="background:rgba(245,158,11,0.15); color:var(--color-warning); font-size:0.65rem; padding:2px 4px; border-radius:4px; margin-left:4px;">Geübt</span>`;
            if (stats.mastered) badgesHTML += `<span class="badge status-badge" style="background:rgba(234,179,8,0.15); color:#eab308; font-size:0.65rem; padding:2px 4px; border-radius:4px; margin-left:4px;">Meister</span>`;
            
            html += `<button class="btn btn-secondary btn-touch subtopic-select-btn" data-subtopic="${t}" style="width:100%; text-align:left; padding:12px; display:flex; flex-direction:column; gap:4px; justify-content:center;">
                <span style="font-weight:600; font-size:0.9rem;">${info.emoji} ${info.name}</span>
                <div style="display:flex; flex-wrap:wrap; margin-top:2px;">${badgesHTML || '<span style="font-size:0.65rem; color:var(--color-text-muted);">Neu</span>'}</div>
            </button>`;
        }
        html += `</div></div>`;
        document.getElementById("practice-stimulus-body").innerHTML = html;
        document.getElementById("practice-question-text").textContent = "Vokabeltraining";
        document.getElementById("practice-question-tag").textContent = "Themenauswahl";
        
        setTimeout(() => {
            document.querySelectorAll(".subtopic-select-btn").forEach(btn => {
                btn.onclick = () => {
                    const sub = btn.getAttribute("data-subtopic");
                    openVocabTopicHub(sub);
                };
            });
        }, 100);
        
        document.getElementById("btn-practice-check-answer").style.display = "none";
        document.getElementById("btn-practice-next").style.display = "none";
        
    } else if (type === "grammar") {
        switchToView("view-practice-workspace");
        document.getElementById("practice-workspace-title").textContent = "Grammatik-Übung";
        document.getElementById("practice-score-current").textContent = "0";
        document.getElementById("practice-score-total").textContent = "0";
        
        document.getElementById("practice-stimulus-hoeren").style.display = "none";
        document.getElementById("practice-stimulus-sprechen").style.display = "none";
        document.getElementById("practice-options-list").style.display = "none";
        document.getElementById("practice-editor-container").style.display = "none";
        document.getElementById("practice-recorder-container").style.display = "none";
        document.getElementById("practice-explanation-box").style.display = "none";
        
        document.getElementById("practice-stimulus-text").style.display = "block";
        document.getElementById("practice-stimulus-label").textContent = "Grammatik-Auswahl";
        
        let html = `<div class="grammar-topics-selection glass-panel" style="padding: 16px;">
            <p style="margin-top:0;"><strong>Bitte wählen Sie ein Grammatikthema:</strong></p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">`;
            
        const topics = ["artikel", "pronomen", "verbkonjugation", "modalverben", "wortstellung", "verneinung", "fragewoester"];
        topics.forEach(t => {
            let label = t.charAt(0).toUpperCase() + t.slice(1);
            if (t === "fragewoester") label = "Fragewörter";
            html += `<button class="btn btn-secondary btn-touch subtopic-select-btn" data-subtopic="${t}" style="width:100%; text-align:left; padding:12px;">🧠 ${label}</button>`;
        });
        html += `</div></div>`;
        document.getElementById("practice-stimulus-body").innerHTML = html;
        document.getElementById("practice-question-text").textContent = "Grammatiktraining";
        document.getElementById("practice-question-tag").textContent = "Themenauswahl";
        
        setTimeout(() => {
            document.querySelectorAll(".subtopic-select-btn").forEach(btn => {
                btn.onclick = () => {
                    const sub = btn.getAttribute("data-subtopic");
                    launchPracticeSubTopic("grammar", sub);
                };
            });
        }, 100);
        
        document.getElementById("btn-practice-check-answer").style.display = "none";
        document.getElementById("btn-practice-next").style.display = "none";
        
    } else if (type === "reading") {
        startReadingLearning();
        
    } else if (type === "listening") {
        startListeningLearning();
        
    } else if (type === "writing") {
        switchToView("view-practice-workspace");
        practiceState.questions = [...PRACTICE_DATABASE.writing].sort(() => Math.random() - 0.5);
        practiceState.subTopic = "Email Prompts";
        loadPracticeQuestion();
        
    } else if (type === "speaking") {
        switchToView("view-practice-workspace");
        practiceState.questions = [...PRACTICE_DATABASE.speaking].sort(() => Math.random() - 0.5);
        practiceState.subTopic = "Speaking Cards";
        loadPracticeQuestion();
        
    } else if (type === "mistakes") {
        renderMistakesPortal();
        switchToView("view-mistakes-portal");
    }
}

function launchPracticeSubTopic(topic, subTopic) {
    practiceState.subTopic = subTopic;
    const questions = PRACTICE_DATABASE[topic][subTopic];
    practiceState.questions = [...questions].sort(() => Math.random() - 0.5);
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.isAnswerChecked = false;
    
    loadPracticeQuestion();
}

function loadPracticeQuestion() {
    const q = practiceState.questions[practiceState.currentIndex];
    
    stopSpeaking();
    stopRecordingProcess();
    
    // Set headers
    const capMode = practiceState.mode.charAt(0).toUpperCase() + practiceState.mode.slice(1);
    document.getElementById("display-current-module").textContent = `${capMode}-Übung`;
    
    document.getElementById("practice-score-current").textContent = practiceState.score;
    document.getElementById("practice-score-total").textContent = practiceState.questions.length;
    
    let subLabel = practiceState.subTopic || "";
    if (subLabel === "fragewoester") subLabel = "Fragewörter";
    subLabel = subLabel.charAt(0).toUpperCase() + subLabel.slice(1);
    
    document.getElementById("practice-workspace-title").textContent = `${capMode}: ${subLabel}`;
    document.getElementById("practice-question-tag").textContent = `Frage ${practiceState.currentIndex + 1} von ${practiceState.questions.length}`;
    
    document.getElementById("practice-stimulus-hoeren").style.display = "none";
    document.getElementById("practice-stimulus-text").style.display = "none";
    document.getElementById("practice-stimulus-sprechen").style.display = "none";
    document.getElementById("practice-options-list").style.display = "none";
    document.getElementById("practice-editor-container").style.display = "none";
    document.getElementById("practice-recorder-container").style.display = "none";
    document.getElementById("practice-explanation-box").style.display = "none";
    
    document.getElementById("btn-practice-check-answer").style.display = "block";
    document.getElementById("btn-practice-next").style.display = "none";
    
    practiceState.isAnswerChecked = false;

    // Show normal question UI and hide results UI
    const resultsContainer = document.getElementById("practice-results-container");
    if (resultsContainer) resultsContainer.style.display = "none";
    
    const qaHeader = document.querySelector("#view-practice-workspace .qa-header");
    if (qaHeader) qaHeader.style.display = "block";
    
    const questionBody = document.querySelector("#view-practice-workspace .question-body");
    if (questionBody) questionBody.style.display = "block";

    // Reset and hide translation assistant elements
    const translationButtons = [
        "btn-practice-stimulus-translate",
        "btn-practice-speak-instruction-translate",
        "btn-practice-speak-tips-translate",
        "btn-practice-question-translate"
    ];
    translationButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.style.display = "none";
            btn.textContent = "🌐 Translate";
            btn.classList.remove("active");
        }
    });
    
    const translationDivs = [
        "practice-stimulus-translation",
        "practice-speak-instruction-translation",
        "practice-speak-tips-translation",
        "practice-question-translation"
    ];
    translationDivs.forEach(id => {
        const div = document.getElementById(id);
        if (div) {
            div.style.display = "none";
            div.innerHTML = "";
        }
    });

    // Setup translation content dynamically
    if (q) {
        if (practiceState.mode === "vocab" && q.rawWord) {
            const qTransDiv = document.getElementById("practice-question-translation");
            const qTransBtn = document.getElementById("btn-practice-question-translate");
            if (qTransDiv && qTransBtn) {
                qTransDiv.innerHTML = `What does "${q.rawWord}" mean in English?`;
                qTransBtn.style.display = "inline-block";
            }
        } else if (practiceState.mode === "grammar" && q.translation) {
            const qTransDiv = document.getElementById("practice-question-translation");
            const qTransBtn = document.getElementById("btn-practice-question-translate");
            if (qTransDiv && qTransBtn) {
                qTransDiv.innerHTML = q.translation;
                qTransBtn.style.display = "inline-block";
            }
        } else if (practiceState.mode === "reading") {
            if (q.translation) {
                const sTransDiv = document.getElementById("practice-stimulus-translation");
                const sTransBtn = document.getElementById("btn-practice-stimulus-translate");
                if (sTransDiv && sTransBtn) {
                    sTransDiv.innerHTML = q.translation;
                    sTransBtn.style.display = "inline-block";
                }
            }
            if (q.questionTranslation) {
                const qTransDiv = document.getElementById("practice-question-translation");
                const qTransBtn = document.getElementById("btn-practice-question-translate");
                if (qTransDiv && qTransBtn) {
                    qTransDiv.innerHTML = q.questionTranslation;
                    qTransBtn.style.display = "inline-block";
                }
            }
        } else if (practiceState.mode === "listening") {
            const listeningQuestionTranslations = {
                "pr_list_1": "Where is platform three?",
                "pr_list_2": "Why does Thomas not go to the supermarket?",
                "pr_list_3": "How much does the man pay per night?",
                "pr_list_4": "What does the first person order?",
                "pr_list_5": "In which sizes is the black jacket still available?",
                "pr_list_6": "When is Mr. Schmidt's new appointment?",
                "pr_list_7": "What must the passenger do?",
                "pr_list_8": "When do Lisa and her friend meet?",
                "pr_list_9": "How is the weather in the north?",
                "pr_list_10": "Did the people reserve a table?"
            };
            const trans = listeningQuestionTranslations[q.id];
            if (trans) {
                const qTransDiv = document.getElementById("practice-question-translation");
                const qTransBtn = document.getElementById("btn-practice-question-translate");
                if (qTransDiv && qTransBtn) {
                    qTransDiv.innerHTML = trans;
                    qTransBtn.style.display = "inline-block";
                }
            }
        } else if (practiceState.mode === "writing" && q.translation) {
            const sTransDiv = document.getElementById("practice-stimulus-translation");
            const sTransBtn = document.getElementById("btn-practice-stimulus-translate");
            if (sTransDiv && sTransBtn) {
                sTransDiv.innerHTML = q.translation;
                sTransBtn.style.display = "inline-block";
            }
        } else if (practiceState.mode === "speaking") {
            if (q.instructionTranslation) {
                const instDiv = document.getElementById("practice-speak-instruction-translation");
                const instBtn = document.getElementById("btn-practice-speak-instruction-translate");
                if (instDiv && instBtn) {
                    instDiv.innerHTML = q.instructionTranslation;
                    instBtn.style.display = "inline-block";
                }
            }
            if (q.hintsTranslation) {
                const tipsDiv = document.getElementById("practice-speak-tips-translation");
                const tipsBtn = document.getElementById("btn-practice-speak-tips-translate");
                if (tipsDiv && tipsBtn) {
                    tipsDiv.innerHTML = q.hintsTranslation;
                    tipsBtn.style.display = "inline-block";
                }
            }
        }
    }
    
    if (practiceState.mode === "vocab" || practiceState.mode === "grammar" || practiceState.mode === "mistakes" || practiceState.mode === "mistakes_all" || practiceState.mode === "daily") {
        document.getElementById("practice-stimulus-text").style.display = "block";
        document.getElementById("practice-stimulus-label").textContent = `${practiceState.mode.toUpperCase()} Kontext`;
        
        let contextHTML = "";
        if (q.topic) {
            contextHTML = `
                <div class="glass-panel" style="padding: 20px; text-align: center;">
                    <span style="font-size: 3rem; display:block; margin-bottom:12px;">💡</span>
                    <h4>Thema: ${q.topic}</h4>
                    <p style="font-size:0.9rem; color:var(--color-text-secondary); margin:0;">Beantworten Sie die Frage auf der rechten Seite, um Ihr Sprachgefühl zu stärken.</p>
                </div>
            `;
        } else {
            contextHTML = `
                <div class="glass-panel" style="padding: 20px; text-align: center;">
                    <span style="font-size: 3rem; display:block; margin-bottom:12px;">⚡</span>
                    <h4>Daily Challenge / Gemischte Fragen</h4>
                    <p style="font-size:0.9rem; color:var(--color-text-secondary); margin:0;">Tägliches Quiz zur Lernzielkontrolle.</p>
                </div>
            `;
        }
        
        document.getElementById("practice-stimulus-body").innerHTML = contextHTML;
        
        renderPracticeMCQuestion(q);
        
    } else if (practiceState.mode === "reading") {
        document.getElementById("practice-stimulus-text").style.display = "block";
        document.getElementById("practice-stimulus-label").textContent = "Lesen Passage";
        document.getElementById("practice-stimulus-body").innerHTML = q.text;
        
        renderPracticeMCQuestion(q);
        
    } else if (practiceState.mode === "listening") {
        document.getElementById("practice-stimulus-hoeren").style.display = "block";
        setupPracticeListeningPlayer(q);
        renderPracticeMCQuestion(q);
        
    } else if (practiceState.mode === "writing") {
        document.getElementById("practice-stimulus-text").style.display = "block";
        document.getElementById("practice-stimulus-label").textContent = `Schreiben Prompt (${q.topic})`;
        document.getElementById("practice-stimulus-body").innerHTML = q.text;
        
        document.getElementById("practice-options-list").style.display = "none";
        document.getElementById("practice-editor-container").style.display = "flex";
        
        const textarea = document.getElementById("practice-textarea");
        textarea.value = portalState.writingDrafts[q.id] || "";
        
        document.getElementById("btn-practice-check-answer").style.display = "none";
        document.getElementById("btn-practice-next").style.display = "block";
        
        const updateCount = () => {
            const txt = textarea.value.trim();
            const words = txt === "" ? 0 : txt.split(/\s+/).length;
            document.getElementById("practice-word-count").textContent = words;
            portalState.writingDrafts[q.id] = textarea.value;
            savePortalStateToStorage();
        };
        updateCount();
        textarea.oninput = updateCount;
        
        document.getElementById("btn-practice-save-draft").onclick = () => {
            savePortalStateToStorage();
            document.getElementById("practice-save-status").textContent = "Entwurf gespeichert!";
            setTimeout(() => {
                document.getElementById("practice-save-status").textContent = "Auto-saved";
            }, 2000);
        };
        
        document.getElementById("btn-practice-export-txt").onclick = () => {
            const blob = new Blob([textarea.value], { type: "text/plain;charset=utf-8" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `practice_writing_${q.id}.txt`;
            a.click();
        };
        
        const actionsContainer = document.querySelector("#practice-editor-container .editor-actions");
        if (actionsContainer) {
            actionsContainer.innerHTML = `
                <button id="btn-practice-save-draft" class="btn btn-secondary btn-touch">Entwurf sichern</button>
                <button id="btn-practice-export-txt" class="btn btn-secondary btn-touch">Export (.txt)</button>
                <button id="btn-practice-copy-chatgpt" class="btn btn-primary btn-touch" style="background:var(--color-indigo); border-color:var(--color-indigo-light);">Copy for ChatGPT</button>
                <button id="btn-practice-copy-gemini" class="btn btn-primary btn-touch" style="background:var(--color-accent); border-color:var(--color-accent-light);">Copy for Gemini</button>
                <button id="btn-practice-evaluate-ai" class="btn btn-warning btn-touch">Evaluate with AI</button>
            `;
            
            document.getElementById("btn-practice-save-draft").onclick = () => {
                savePortalStateToStorage();
                document.getElementById("practice-save-status").textContent = "Entwurf gespeichert!";
                setTimeout(() => {
                    document.getElementById("practice-save-status").textContent = "Auto-saved";
                }, 2000);
            };
            
            document.getElementById("btn-practice-export-txt").onclick = () => {
                const blob = new Blob([textarea.value], { type: "text/plain;charset=utf-8" });
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = `practice_writing_${q.id}.txt`;
                a.click();
            };
            
            document.getElementById("btn-practice-copy-chatgpt").onclick = () => {
                copyToClipboard(makeWritingAIPrompt(q.text, textarea.value, "ChatGPT"));
            };
            document.getElementById("btn-practice-copy-gemini").onclick = () => {
                copyToClipboard(makeWritingAIPrompt(q.text, textarea.value, "Gemini"));
            };
            document.getElementById("btn-practice-evaluate-ai").onclick = () => {
                copyToClipboard(makeWritingAIPrompt(q.text, textarea.value, "General AI"));
            };
        }
        
    } else if (practiceState.mode === "speaking") {
        document.getElementById("practice-stimulus-sprechen").style.display = "block";
        document.getElementById("practice-speak-theme").textContent = q.theme;
        document.getElementById("practice-speak-icon").textContent = q.icon;
        document.getElementById("practice-speak-word").textContent = q.word;
        document.getElementById("practice-speak-instruction").textContent = q.instruction;
        document.getElementById("practice-speak-hints").textContent = q.hints;
        
        document.getElementById("practice-recorder-container").style.display = "flex";
        
        document.getElementById("btn-practice-check-answer").style.display = "none";
        document.getElementById("btn-practice-next").style.display = "block";
        
        setupPracticeSpeakingRecorder(q);
    }
}

function renderPracticeMCQuestion(q) {
    const list = document.getElementById("practice-options-list");
    list.style.display = "flex";
    list.innerHTML = "";
    
    document.getElementById("practice-question-text").textContent = q.question;
    
    q.options.forEach((opt, idx) => {
        const item = document.createElement("div");
        item.className = "option-item";
        item.setAttribute("role", "radio");
        item.setAttribute("tabindex", "0");
        
        const radio = document.createElement("div");
        radio.className = "option-radio";
        
        const content = document.createElement("div");
        content.className = "option-content";
        content.textContent = opt;
        
        item.appendChild(radio);
        item.appendChild(content);
        
        const selectAction = () => {
            if (practiceState.isAnswerChecked) return;
            
            const allItems = list.querySelectorAll(".option-item");
            allItems.forEach(i => i.classList.remove("selected"));
            
            item.classList.add("selected");
            practiceState.answers[q.id] = idx;
        };
        
        item.onclick = selectAction;
        item.onkeydown = (e) => {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                selectAction();
            }
        };
        
        list.appendChild(item);
    });
}

function setupPracticeListeningPlayer(q) {
    const playBtn = document.getElementById("practice-audio-play");
    const stopBtn = document.getElementById("practice-audio-stop");
    const counterSpan = document.getElementById("practice-audio-count");
    const speedSelect = document.getElementById("practice-audio-speed");
    const statusBadge = document.getElementById("practice-audio-status");
    const visualizer = document.getElementById("practice-audio-visualizer");
    
    visualizer.classList.remove("playing");
    statusBadge.textContent = "Bereit";
    statusBadge.className = "status-badge";
    
    let playCount = 0;
    counterSpan.textContent = `Abgespielt: 0 mal`;
    
    stopBtn.disabled = true;
    playBtn.disabled = false;
    
    playBtn.onclick = () => {
        playBtn.disabled = true;
        stopBtn.disabled = false;
        visualizer.classList.add("playing");
        statusBadge.textContent = "Spielt ab...";
        statusBadge.className = "status-badge text-success";
        
        playCount++;
        counterSpan.textContent = `Abgespielt: ${playCount} mal`;
        
        const speed = parseFloat(speedSelect.value) || 0.85;
        
        speakText(q.script,
            (percent) => {
                // Ticks
            },
            () => {
                visualizer.classList.remove("playing");
                statusBadge.textContent = "Beendet";
                statusBadge.className = "status-badge text-muted";
                playBtn.disabled = false;
                stopBtn.disabled = true;
            },
            () => {
                visualizer.classList.remove("playing");
                statusBadge.textContent = "Fehler";
                statusBadge.className = "status-badge text-danger";
                playBtn.disabled = false;
                stopBtn.disabled = true;
            },
            speed
        );
    };
    
    stopBtn.onclick = () => {
        stopSpeaking();
        visualizer.classList.remove("playing");
        statusBadge.textContent = "Abgebrochen";
        statusBadge.className = "status-badge text-muted";
        playBtn.disabled = false;
        stopBtn.disabled = true;
    };
}

function setupPracticeSpeakingRecorder(q) {
    const recordBtn = document.getElementById("btn-practice-record-start");
    const stopBtn = document.getElementById("btn-practice-record-stop");
    const durationLabel = document.getElementById("practice-record-duration");
    const playbackBox = document.getElementById("practice-playback-box");
    const audioPlayer = document.getElementById("practice-recorded-audio");
    const downloadBtn = document.getElementById("btn-practice-download-audio");
    const aiBtn = document.getElementById("btn-practice-speak-ai");
    
    durationLabel.textContent = "00:00";
    recordBtn.disabled = false;
    stopBtn.disabled = true;
    playbackBox.style.display = "none";
    
    if (speakingRecordings[q.id]) {
        playbackBox.style.display = "flex";
        audioPlayer.src = speakingRecordings[q.id].url;
        downloadBtn.href = speakingRecordings[q.id].url;
        downloadBtn.download = `practice_speak_${q.id}.wav`;
    }
    
    recordBtn.onclick = () => {
        recordBtn.disabled = true;
        stopBtn.disabled = false;
        playbackBox.style.display = "none";
        
        startRecording(q.id,
            (timeString) => {
                durationLabel.textContent = timeString;
            },
            (audioUrl) => {
                playbackBox.style.display = "flex";
                audioPlayer.src = audioUrl;
                downloadBtn.href = audioUrl;
                downloadBtn.download = `practice_speak_${q.id}.wav`;
                recordBtn.disabled = false;
                stopBtn.disabled = true;
            }
        );
    };
    
    stopBtn.onclick = () => {
        stopRecordingProcess();
    };
    
    aiBtn.onclick = () => {
        const promptText = `Goethe-Zertifikat A1: Speaking Practice Evaluation
Thema: ${q.theme}
Word: ${q.word}
Instruction: ${q.instruction}

Please evaluate this spoken expression guidelines:
What would be a correct verbal expression for this card? Please provide 3 examples of correct requests and appropriate answers at the A1 level. Provide feedback in German.`;
        copyToClipboard(promptText);
    };
}

function checkPracticeAnswer() {
    const q = practiceState.questions[practiceState.currentIndex];
    
    if (practiceState.mode === "writing" || practiceState.mode === "speaking") {
        return;
    }
    
    const selectedIdx = practiceState.answers[q.id];
    if (selectedIdx === undefined) {
        alert("Bitte wählen Sie eine Antwort aus!");
        return;
    }
    
    practiceState.isAnswerChecked = true;
    
    const list = document.getElementById("practice-options-list");
    const items = list.querySelectorAll(".option-item");
    
    const correctIdx = q.correct;
    const isCorrect = (selectedIdx === correctIdx);
    
    items.forEach((item, idx) => {
        if (idx === correctIdx) {
            item.classList.add("correct");
        }
        if (idx === selectedIdx && !isCorrect) {
            item.classList.add("incorrect");
        }
    });
    
    const expBox = document.getElementById("practice-explanation-box");
    const expTitle = document.getElementById("practice-explanation-title");
    const expText = document.getElementById("practice-explanation-text");
    
    expBox.style.display = "block";
    expText.textContent = q.explanation;
    
    if (isCorrect) {
        expBox.style.borderColor = "var(--color-success)";
        expTitle.textContent = "Richtig! / Correct!";
        expTitle.style.color = "var(--color-success)";
        practiceState.score++;
        
        if (practiceState.mode === "vocab") {
            portalState.progress.vocab[q.id] = true;
        } else if (practiceState.mode === "grammar") {
            portalState.progress.grammar[q.id] = true;
        } else if (practiceState.mode === "reading") {
            portalState.progress.reading[q.id] = true;
        } else if (practiceState.mode === "listening") {
            portalState.progress.listening[q.id] = true;
        } else if (practiceState.mode === "mistakes" || practiceState.mode === "mistakes_all") {
            if (practiceState.mistakeIndex !== undefined) {
                portalState.mistakes.splice(practiceState.mistakeIndex, 1);
            } else {
                const mIdx = portalState.mistakes.findIndex(m => m.id === q.id);
                if (mIdx !== -1) portalState.mistakes.splice(mIdx, 1);
            }
            expText.innerHTML += `<br><br><strong style="color:var(--color-success);">Dieses Thema wurde gemeistert und aus dem Fehler-Archiv gelöscht!</strong>`;
        }
    } else {
        expBox.style.borderColor = "var(--color-danger)";
        expTitle.textContent = "Falsch! / Incorrect!";
        expTitle.style.color = "var(--color-danger)";
        
        if (!practiceState.incorrectQuestions.includes(q)) {
            practiceState.incorrectQuestions.push(q);
        }
        
        const exists = portalState.mistakes.some(m => m.id === q.id);
        if (!exists) {
            const userAnsStr = q.options[selectedIdx] || "None";
            portalState.mistakes.push({
                id: q.id,
                mode: practiceState.mode,
                subTopic: practiceState.subTopic || q.topic || "Practice",
                question: q.question,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation,
                topic: q.topic || practiceState.subTopic || "General",
                date: new Date().toLocaleDateString('de-DE'),
                userAnswer: userAnsStr,
                rawQuestionObj: q
            });
        }
    }
    
    document.getElementById("btn-practice-check-answer").style.display = "none";
    document.getElementById("btn-practice-next").style.display = "block";
    
    savePortalStateToStorage();
}

function makeWritingAIPrompt(promptText, userResponse, modelType) {
    return `Goethe-Zertifikat A1: Writing Practice Evaluation (${modelType})
Candidate Response:
"${userResponse}"

Prompt Context:
"${promptText}"

Please evaluate this German response. Provide scoring out of 10 points (3 points for content coverage, 7 points for grammar, vocabulary, and spelling accuracy). Provide feedback in German.`;
}

function updateHeaderStats() {
    const streakCountEl = document.getElementById("header-streak-count");
    if (streakCountEl) {
        streakCountEl.textContent = portalState.streak.current;
    }
    const levelBadgeEl = document.getElementById("header-level-badge");
    if (levelBadgeEl) {
        levelBadgeEl.textContent = portalState.level;
    }
}

function updateStreakOnActivity() {
    const todayStr = new Date().toISOString().split('T')[0];
    
    if (portalState.streak.lastDate === todayStr) {
        return;
    }
    
    const lastDate = portalState.streak.lastDate;
    if (lastDate) {
        const lastTime = new Date(lastDate).getTime();
        const todayTime = new Date(todayStr).getTime();
        const diffDays = Math.round((todayTime - lastTime) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            portalState.streak.current++;
        } else {
            portalState.streak.current = 1;
        }
    } else {
        portalState.streak.current = 1;
    }
    
    if (portalState.streak.current > portalState.streak.longest) {
        portalState.streak.longest = portalState.streak.current;
    }
    
    portalState.streak.lastDate = todayStr;
    savePortalStateToStorage();
    updateHeaderStats();
}

function getDailyChallengeQuestions() {
    const todayStr = new Date().toISOString().split('T')[0];
    
    let seed = 0;
    for (let i = 0; i < todayStr.length; i++) {
        seed += todayStr.charCodeAt(i) * (i + 1);
    }
    
    const seededRandom = () => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };
    
    const seededShuffle = (arr) => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom() * (i + 1));
            const temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        return copy;
    };
    
    let allVocab = [];
    for (const topic in PRACTICE_DATABASE.vocab) {
        allVocab.push(...PRACTICE_DATABASE.vocab[topic]);
    }
    
    let allGrammar = [];
    for (const topic in PRACTICE_DATABASE.grammar) {
        allGrammar.push(...PRACTICE_DATABASE.grammar[topic]);
    }
    
    const selectedVocab = seededShuffle(allVocab).slice(0, 5);
    const selectedGrammar = seededShuffle(allGrammar).slice(0, 5);
    const selectedReading = seededShuffle(PRACTICE_DATABASE.reading).slice(0, 2);
    const selectedListening = seededShuffle(PRACTICE_DATABASE.listening).slice(0, 1);
    
    const combined = [...selectedVocab, ...selectedGrammar, ...selectedReading, ...selectedListening];
    return { date: todayStr, questions: combined };
}

function getProgressPercentages() {
    let totalVocab = 0;
    let completedVocab = 0;
    for (const topic in PRACTICE_DATABASE.vocab) {
        PRACTICE_DATABASE.vocab[topic].forEach(q => {
            totalVocab++;
            if (portalState.progress.vocab[q.id]) completedVocab++;
        });
    }
    const vocabPct = totalVocab > 0 ? Math.round((completedVocab / totalVocab) * 100) : 0;

    let totalGrammar = 0;
    let completedGrammar = 0;
    for (const topic in PRACTICE_DATABASE.grammar) {
        PRACTICE_DATABASE.grammar[topic].forEach(q => {
            totalGrammar++;
            if (portalState.progress.grammar[q.id]) completedGrammar++;
        });
    }
    const grammarPct = totalGrammar > 0 ? Math.round((completedGrammar / totalGrammar) * 100) : 0;

    let totalReading = PRACTICE_DATABASE.reading.length;
    let completedReading = 0;
    PRACTICE_DATABASE.reading.forEach(q => {
        if (portalState.progress.reading[q.id]) completedReading++;
    });
    const readingPct = totalReading > 0 ? Math.round((completedReading / totalReading) * 100) : 0;

    let totalListening = PRACTICE_DATABASE.listening.length;
    let completedListening = 0;
    PRACTICE_DATABASE.listening.forEach(q => {
        if (portalState.progress.listening[q.id]) completedListening++;
    });
    const listeningPct = totalListening > 0 ? Math.round((completedListening / totalListening) * 100) : 0;

    return { vocabPct, grammarPct, readingPct, listeningPct };
}

function populateProgressDashboard() {
    const p = getProgressPercentages();
    
    document.getElementById("progress-val-vocab").textContent = `${p.vocabPct}%`;
    document.getElementById("progress-bar-vocab").style.width = `${p.vocabPct}%`;
    
    document.getElementById("progress-val-grammar").textContent = `${p.grammarPct}%`;
    document.getElementById("progress-bar-grammar").style.width = `${p.grammarPct}%`;
    
    document.getElementById("progress-val-reading").textContent = `${p.readingPct}%`;
    document.getElementById("progress-bar-reading").style.width = `${p.readingPct}%`;
    
    document.getElementById("progress-val-listening").textContent = `${p.listeningPct}%`;
    document.getElementById("progress-bar-listening").style.width = `${p.listeningPct}%`;
    
    const writeDraftsCount = Object.keys(portalState.writingDrafts).length;
    document.getElementById("progress-val-writing").textContent = writeDraftsCount > 0 ? `Awaiting Evaluation (${writeDraftsCount} drafts)` : "Awaiting Evaluation";
    
    const speakRecsCount = Object.keys(speakingRecordings).filter(k => k.startsWith("pr_speak_")).length;
    document.getElementById("progress-val-speaking").textContent = speakRecsCount > 0 ? `Awaiting Evaluation (${speakRecsCount} files)` : "Awaiting Evaluation";
    
    document.getElementById("progress-streak-val").textContent = `${portalState.streak.current} Tage`;
    document.getElementById("progress-practice-val").textContent = `${portalState.sessionsCompleted} Fragen`;
    document.getElementById("progress-exam-val").textContent = `${portalState.examsCompleted} Prüfungen`;
    
    document.getElementById("progress-time-val").textContent = `${portalState.sessionsCompleted * 2 + portalState.examsCompleted * 65} Min.`;

    populateWeakStrongAnalysis();
}

function populateWeakStrongAnalysis() {
    const strengthsList = document.getElementById("portal-strengths-list");
    const weaknessesList = document.getElementById("portal-weaknesses-list");
    
    if (!strengthsList || !weaknessesList) return;
    
    strengthsList.innerHTML = "";
    weaknessesList.innerHTML = "";
    
    const topicStats = {};
    
    for (const topic in PRACTICE_DATABASE.vocab) {
        topicStats[topic] = { correct: 0, total: 0 };
        PRACTICE_DATABASE.vocab[topic].forEach(q => {
            if (portalState.progress.vocab[q.id]) {
                topicStats[topic].correct++;
                topicStats[topic].total++;
            }
        });
    }
    
    for (const topic in PRACTICE_DATABASE.grammar) {
        topicStats[topic] = { correct: 0, total: 0 };
        PRACTICE_DATABASE.grammar[topic].forEach(q => {
            if (portalState.progress.grammar[q.id]) {
                topicStats[topic].correct++;
                topicStats[topic].total++;
            }
        });
    }
    
    portalState.mistakes.forEach(m => {
        if (m.topic) {
            const topicKey = m.topic.toLowerCase();
            if (!topicStats[topicKey]) {
                topicStats[topicKey] = { correct: 0, total: 0 };
            }
            topicStats[topicKey].total++;
        }
    });
    
    const strengths = [];
    const weaknesses = [];
    
    for (const topic in topicStats) {
        const stats = topicStats[topic];
        if (stats.total > 0) {
            const pct = (stats.correct / stats.total) * 100;
            let label = topic.charAt(0).toUpperCase() + topic.slice(1);
            if (label === "Fragewoester") label = "Fragewörter";
            if (pct >= 75) {
                strengths.push(label);
            } else if (pct < 50) {
                weaknesses.push(label);
            }
        }
    }
    
    if (strengths.length === 0) {
        strengthsList.innerHTML = "<li>Keine Daten (Mind. 75% Erfolgsquote benötigt)</li>";
    } else {
        strengths.forEach(s => {
            const li = document.createElement("li");
            li.style.background = "var(--color-success-light)";
            li.style.color = "var(--color-success)";
            li.style.padding = "4px 8px";
            li.style.borderRadius = "4px";
            li.style.display = "inline-block";
            li.style.margin = "4px";
            li.textContent = s;
            strengthsList.appendChild(li);
        });
    }
    
    if (weaknesses.length === 0) {
        weaknessesList.innerHTML = "<li>Keine Daten (Sehr gut! Keine Problemthemen)</li>";
    } else {
        weaknesses.forEach(w => {
            const li = document.createElement("li");
            li.style.background = "var(--color-danger-light)";
            li.style.color = "var(--color-danger)";
            li.style.padding = "4px 8px";
            li.style.borderRadius = "4px";
            li.style.display = "inline-block";
            li.style.margin = "4px";
            li.textContent = w;
            weaknessesList.appendChild(li);
        });
    }
}

function renderMistakesPortal() {
    const wrapper = document.getElementById("mistakes-cards-wrapper");
    if (!wrapper) return;
    wrapper.innerHTML = "";
    
    document.getElementById("mistakes-badge-count").textContent = portalState.mistakes.length;
    document.getElementById("dashboard-mistakes-count").textContent = portalState.mistakes.length;
    
    if (portalState.mistakes.length === 0) {
        wrapper.innerHTML = `
            <div class="glass-panel" style="padding: 40px; text-align: center; color: var(--color-text-secondary);">
                <span style="font-size: 3rem; display: block; margin-bottom: 16px;">🎉</span>
                <h3>Keine Fehler! / No Mistakes!</h3>
                <p>Super! Sie haben aktuell keine falschen Antworten im Archiv.</p>
            </div>
        `;
        return;
    }
    
    portalState.mistakes.forEach((m, idx) => {
        const card = document.createElement("div");
        card.className = "mistake-card glass-panel";
        card.style.padding = "20px";
        card.style.borderLeft = "4px solid var(--color-danger)";
        
        let label = m.topic || "Thema";
        if (label === "fragewoester") label = "Fragewörter";
        label = label.charAt(0).toUpperCase() + label.slice(1);
        
        const correctStr = Array.isArray(m.options) ? m.options[m.correct] : m.correct;
        
        card.innerHTML = `
            <div class="mistake-header" style="display:flex; justify-content:space-between; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <span class="badge-value" style="background:var(--color-danger-light); color:var(--color-danger); padding:4px 8px; border-radius:4px; font-weight:700;">${label}</span>
                <span style="font-size:0.85rem; color:var(--color-text-secondary);">${m.date}</span>
            </div>
            <h4 style="margin: 0 0 12px 0; font-size:1.1rem;">${m.question}</h4>
            <div class="mistake-answers-diff" style="background:rgba(255,255,255,0.03); padding:10px; border-radius:6px; margin-bottom:12px; font-size:0.9rem;">
                <div style="color:var(--color-danger); margin-bottom:4px;"><strong>Ihre Antwort / Your Answer:</strong> ${m.userAnswer}</div>
                <div style="color:var(--color-success);"><strong>Korrekte Antwort / Correct:</strong> ${correctStr}</div>
            </div>
            <p style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:16px;"><strong>Erklärung:</strong> ${m.explanation}</p>
            <div style="display:flex; gap:10px;">
                <button class="btn btn-secondary btn-touch btn-retry" data-index="${idx}">Wiederholen / Retry</button>
                <button class="btn btn-success btn-touch btn-master" data-index="${idx}" style="background:var(--color-success-light); color:var(--color-success); border-color:var(--color-success);">Gelernt / Mastered</button>
            </div>
        `;
        
        card.querySelector(".btn-retry").onclick = () => {
            retrySingleMistake(idx);
        };
        
        card.querySelector(".btn-master").onclick = () => {
            masterSingleMistake(idx);
        };
        
        wrapper.appendChild(card);
    });
}

function retrySingleMistake(idx) {
    const mistake = portalState.mistakes[idx];
    
    practiceState = {
        mode: "mistakes",
        subTopic: mistake.topic,
        questions: [mistake.rawQuestionObj || {
            id: mistake.id,
            type: "mc",
            question: mistake.question,
            options: mistake.options,
            correct: mistake.correct,
            explanation: mistake.explanation,
            topic: mistake.topic
        }],
        currentIndex: 0,
        score: 0,
        answers: {},
        isAnswerChecked: false,
        mistakeIndex: idx
    };
    
    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}

function masterSingleMistake(idx) {
    portalState.mistakes.splice(idx, 1);
    savePortalStateToStorage();
    renderMistakesPortal();
}

function applyTheme(themeMode) {
    const body = document.getElementById("app-body");
    portalState.theme = themeMode;
    savePortalStateToStorage();
    
    if (themeMode === "dark") {
        body.className = "dark-mode";
        body.classList.remove("light-mode");
    } else if (themeMode === "light") {
        body.className = "light-mode";
        body.classList.remove("dark-mode");
    } else if (themeMode === "system") {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (systemPrefersDark) {
            body.className = "dark-mode";
            body.classList.remove("light-mode");
        } else {
            body.className = "light-mode";
            body.classList.remove("dark-mode");
        }
    }
}

// --- AI EVALUATION CLIPBOARD GENERATORS ---
function generateAIWritingPrompt() {
    const name = state.candidateName || "Kandidat";
    
    // Schreiben Teil 1
    const formAnswers = state.answers["s_t1_q1"] || {};
    const f1 = formAnswers["birth_place"] || "--";
    const f2 = formAnswers["profession"] || "--";
    const f3 = formAnswers["city"] || "--";
    const f4 = formAnswers["duration"] || "--";
    const f5 = formAnswers["knowledge"] || "--";
    
    // Schreiben Teil 2
    const emailText = state.answers["s_t2_q1"] || "[Keine Antwort eingegeben / No response entered]";
    
    const promptText = `Goethe-Zertifikat A1: Evaluation of Writing Module
Candidate Name: ${name}

---
PART A: Form Filling (Missing Fields)
Context Description: John Davies from England (born 14. May 1995 in London) wants to join a 4-week German course in Berlin. He works as an Engineer, lives in Manchester (Oxford Street 45, M1 3BE), and has no German knowledge.

Student inputs:
1. Geburtsort: ${f1} (Correct: London)
2. Beruf: ${f2} (Correct: Ingenieur)
3. Wohnort: ${f3} (Correct: Manchester)
4. Kursdauer: ${f4} (Correct: 4 Wochen)
5. Deutschkenntnisse: ${f5} (Correct: Nein)

---
PART B: Email (30-50 words)
Prompt: Visit a bicycle shop (Fahrrad Müller) on Saturday to buy a bicycle. Tell them when you arrive, what bicycle you want, and ask for price & advice appointments.

Student Email Text:
"${emailText}"

---
EVALUATION REQUEST:
Please grade this candidate under official Goethe A1 criteria (Writing: Max 15 points. Part A: 5 points (1pt each), Part B: 10 points (3pts for Content, 7pts for Language/Grammar/Vocabulary accuracy)). Provide detailed corrective feedback in German.`;

    copyToClipboard(promptText);
}

function generateAISpeakingPrompt() {
    const name = state.candidateName || "Kandidat";
    
    const cards = state.sessionQuestions.sprechen || [];
    
    const cardInfo = (idx) => {
        if (!cards[idx]) return "--";
        const c = cards[idx];
        return `Card: "${c.word || c.title}" (${c.theme || ""}) -> Status: ${state.answers[c.id] ? 'Recorded' : 'Not Recorded'}`;
    };

    const promptText = `Goethe-Zertifikat A1: Evaluation of Speaking Module
Candidate Name: ${name}

---
PART 1: Self Introduction (Sich vorstellen)
Prompt keywords: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.
Audio Status: ${state.answers["sp_t1_q1"] ? 'Recorded' : 'Not Recorded'}

PART 2: Asking and Answering Questions (Topic Cards)
1. ${cardInfo(1)}
2. ${cardInfo(2)}

PART 3: Formulating Requests and Responding (Request Cards)
1. ${cardInfo(3)}
2. ${cardInfo(4)}

---
EVALUATION REQUEST:
Please evaluate the spoken German response capability at the A1 level. Grade the candidate out of 15 points (Part 1: 3 points, Part 2: 6 points, Part 3: 6 points) focusing on pronunciation, vocabulary adequacy, and communicative effectiveness. Provide feedback and recommended improvements in German.`;

    copyToClipboard(promptText);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Prompt in die Zwischenablage kopiert! Sie können ihn jetzt in Gemini, ChatGPT oder Claude einfügen.");
    }).catch(err => {
        console.error("Clipboard copy failed:", err);
        alert("Kopieren fehlgeschlagen. Hier ist der Prompt:\n\n" + text);
    });
}

function toggleTranslation(btn) {
    const parent = btn.parentElement;
    let target = parent ? parent.querySelector(".english-text") : null;
    
    if (!target && btn.nextElementSibling && btn.nextElementSibling.classList.contains("english-text")) {
        target = btn.nextElementSibling;
    }
    
    if (!target && parent && parent.parentElement) {
        target = parent.parentElement.querySelector(".english-text");
    }
    
    if (target) {
        if (target.style.display === "none" || target.style.display === "") {
            target.style.display = "block";
            btn.textContent = "🌐 Hide Translation";
            btn.classList.add("active");
        } else {
            target.style.display = "none";
            btn.textContent = "🌐 Translate";
            btn.classList.remove("active");
        }
    }
}
window.toggleTranslation = toggleTranslation;


function generateAIEvalPackageExport() {
    let hoerenCorrect = 0;
    let lesenCorrect = 0;
    
    state.sessionQuestions.hoeren.forEach(q => {
        if (state.answers[q.id] === q.correct) hoerenCorrect++;
    });
    state.sessionQuestions.lesen.forEach(q => {
        if (state.answers[q.id] === q.correct) lesenCorrect++;
    });

    const grammarTotals = {};
    const grammarScores = {};
    const vocabTotals = {};
    const vocabScores = {};

    const fillAnalytics = (list) => {
        list.forEach(q => {
            const isCorrect = (state.answers[q.id] === q.correct);
            if (q.grammar) {
                grammarTotals[q.grammar] = (grammarTotals[q.grammar] || 0) + 1;
                grammarScores[q.grammar] = (grammarScores[q.grammar] || 0) + (isCorrect ? 1 : 0);
            }
            if (q.vocab) {
                vocabTotals[q.vocab] = (vocabTotals[q.vocab] || 0) + 1;
                vocabScores[q.vocab] = (vocabScores[q.vocab] || 0) + (isCorrect ? 1 : 0);
            }
        });
    };
    fillAnalytics(state.sessionQuestions.hoeren);
    fillAnalytics(state.sessionQuestions.lesen);

    const grammarStrengths = [];
    const grammarWeaknesses = [];
    for (const key in grammarTotals) {
        if ((grammarScores[key] / grammarTotals[key]) >= 0.7) grammarStrengths.push(key);
        else grammarWeaknesses.push(key);
    }
    
    const vocabStrengths = [];
    const vocabWeaknesses = [];
    for (const key in vocabTotals) {
        if ((vocabScores[key] / vocabTotals[key]) >= 0.7) vocabStrengths.push(key);
        else vocabWeaknesses.push(key);
    }

    const overallTime = state.endTime && state.startTime ? Math.round((state.endTime - state.startTime) / 1000) : state.timeSpent;

    const exportData = {
        candidate: state.candidateName,
        date: state.examDate,
        level: state.level || "A1",
        listening_score: `${hoerenCorrect} / 15`,
        reading_score: `${lesenCorrect} / 15`,
        writing_task: "Form Filling (s_t1_q1) and Email (s_t2_q1)",
        writing_response: {
            part_a_form: state.answers["s_t1_q1"] || {},
            part_b_email: state.answers["s_t2_q1"] || ""
        },
        speaking_prompts: state.sessionQuestions.sprechen.map(q => ({
            id: q.id,
            theme: q.theme || "Self Introduction",
            word: q.word || q.title || ""
        })),
        speaking_recordings: Object.keys(speakingRecordings).reduce((acc, qId) => {
            acc[qId] = "recorded_in_browser_session";
            return acc;
        }, {}),
        analytics: {
            duration_seconds: overallTime,
            grammar_strengths: grammarStrengths,
            grammar_weaknesses: grammarWeaknesses,
            vocab_strengths: vocabStrengths,
            vocab_weaknesses: vocabWeaknesses
        }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `goethe_a1_ai_eval_package_${state.candidateName.replace(/\s+/g, '_')}.json`;
    a.click();
}

// --- INITIALIZE EVENT LISTENERS & SPA EVENTS ---
document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize vocab database dynamically
    initVocabularyDatabase();

    // Check local storage for existing session
    loadPortalStateFromStorage();
    const hasStoredSession = loadSessionFromStorage();
    initSpeechSynthesis();

    // Apply active portal theme and update header numbers
    applyTheme(portalState.theme || "dark");
    updateHeaderStats();

    // Initialize daily challenge visual elements
    const todayStr = new Date().toISOString().split('T')[0];
    const isChallengeCompleted = portalState.dailyChallenge.date === todayStr && portalState.dailyChallenge.completed;
    const challengeBadge = document.getElementById("daily-challenge-badge");
    const challengeBtn = document.getElementById("btn-start-daily-challenge");
    if (isChallengeCompleted) {
        if (challengeBadge) {
            challengeBadge.textContent = "Abgeschlossen / Completed";
            challengeBadge.className = "challenge-status-badge status-completed";
        }
        if (challengeBtn) {
            challengeBtn.textContent = "Heute erledigt";
            challengeBtn.disabled = true;
        }
    } else {
        if (challengeBadge) {
            challengeBadge.textContent = "Nicht gelöst / Pending";
            challengeBadge.className = "challenge-status-badge status-pending";
        }
        if (challengeBtn) {
            challengeBtn.textContent = "Herausforderung starten";
            challengeBtn.disabled = false;
        }
    }

    if (hasStoredSession && state.isStarted && !state.isSubmitted) {
        // Restore active unfinished exam session
        switchToView("view-exam-screen");
        startGlobalExamTimer();
        loadQuestion(state.currentModuleIndex, state.currentQuestionIndex);
    } else {
        // Normal startup opens the Landing Dashboard
        switchToView("view-landing-dashboard");
    }

    // Settings elements triggers setup
    const themeSelect = document.getElementById("settings-theme-select");
    if (themeSelect) {
        themeSelect.value = portalState.theme || "dark";
        themeSelect.onchange = (e) => {
            applyTheme(e.target.value);
        };
    }
    
    const levelSelect = document.getElementById("settings-level-select");
    if (levelSelect) {
        levelSelect.value = portalState.level || "A1";
        levelSelect.onchange = (e) => {
            const val = e.target.value;
            if (val !== "A1") {
                alert(`Hinweis: Das Niveau ${val} ist in der Systemarchitektur vorbereitet, aber die Fragenpakete sind noch gesperrt. Das System läuft weiterhin im A1-Modus.`);
                levelSelect.value = "A1";
            } else {
                portalState.level = val;
                savePortalStateToStorage();
                updateHeaderStats();
            }
        };
    }

    // Theme Toggle Handler
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.onclick = () => {
        const body = document.getElementById("app-body");
        if (body.classList.contains("dark-mode")) {
            applyTheme("light");
            if (themeSelect) themeSelect.value = "light";
        } else {
            applyTheme("dark");
            if (themeSelect) themeSelect.value = "dark";
        }
    };

    // Landing page navigation modules
    document.getElementById("card-nav-practice").onclick = () => {
        switchToView("view-practice-menu");
    };
    document.getElementById("card-nav-practice").onkeydown = (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            switchToView("view-practice-menu");
        }
    };
    
    document.getElementById("card-nav-exam").onclick = () => {
        // Normal mock exam startup form
        document.getElementById("exam-date").valueAsDate = new Date();
        switchToView("view-start-screen");
    };
    document.getElementById("card-nav-exam").onkeydown = (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            document.getElementById("exam-date").valueAsDate = new Date();
            switchToView("view-start-screen");
        }
    };
    
    document.getElementById("card-nav-progress").onclick = () => {
        populateProgressDashboard();
        switchToView("view-progress-dashboard");
    };
    document.getElementById("card-nav-progress").onkeydown = (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            populateProgressDashboard();
            switchToView("view-progress-dashboard");
        }
    };
    
    document.getElementById("card-nav-settings").onclick = () => {
        switchToView("view-settings");
    };
    document.getElementById("card-nav-settings").onkeydown = (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            switchToView("view-settings");
        }
    };

    // Header Logo Home click
    const headerLogo = document.getElementById("header-logo-home");
    if (headerLogo) {
        headerLogo.onclick = () => {
            switchToView("view-landing-dashboard");
        };
    }

    // Back to Home buttons
    document.querySelectorAll(".btn-back-home").forEach(btn => {
        btn.onclick = () => {
            switchToView("view-landing-dashboard");
        };
    });

    // Back to Practice Menu button
    const btnBackPracticeMenu = document.getElementById("btn-back-practice-menu");
    if (btnBackPracticeMenu) {
        btnBackPracticeMenu.onclick = () => {
            switchToView("view-practice-menu");
        };
    }

    // Practice workspace check & next buttons
    document.getElementById("btn-practice-check-answer").onclick = () => {
        checkPracticeAnswer();
    };
    
    document.getElementById("btn-practice-next").onclick = () => {
        practiceState.currentIndex++;
        if (practiceState.currentIndex < practiceState.questions.length) {
            loadPracticeQuestion();
        } else {
            // Finished practice session!
            portalState.sessionsCompleted++;
            updateStreakOnActivity();
            
            if (practiceState.mode === "vocab") {
                const topic = practiceState.subTopic;
                if (!portalState.vocabStats[topic]) {
                    portalState.vocabStats[topic] = { learned: false, practised: false, mastered: false };
                }
                portalState.vocabStats[topic].practised = true;
                if (practiceState.score === practiceState.questions.length) {
                    portalState.vocabStats[topic].mastered = true;
                }
                savePortalStateToStorage();
            }
            
            const resultsContainer = document.getElementById("practice-results-container");
            const qaHeader = document.querySelector("#view-practice-workspace .qa-header");
            const questionBody = document.querySelector("#view-practice-workspace .question-body");
            
            if (resultsContainer && qaHeader && questionBody) {
                qaHeader.style.display = "none";
                questionBody.style.display = "none";
                resultsContainer.style.display = "block";
                
                document.getElementById("practice-results-score").textContent = `${practiceState.score} / ${practiceState.questions.length}`;
                document.getElementById("practice-results-message").textContent = `Ergebnis: Sie haben ${practiceState.score} von ${practiceState.questions.length} Fragen richtig beantwortet.`;
                
                const btnRetryMistakes = document.getElementById("btn-practice-retry-mistakes");
                if (btnRetryMistakes) {
                    if (practiceState.incorrectQuestions.length > 0) {
                        btnRetryMistakes.style.display = "flex";
                        btnRetryMistakes.textContent = `❌ Practice Mistakes Only (${practiceState.incorrectQuestions.length})`;
                    } else {
                        btnRetryMistakes.style.display = "none";
                    }
                }
                
                const btnReviewVocab = document.getElementById("btn-practice-review-vocab");
                if (btnReviewVocab) {
                    if (practiceState.mode === "vocab") {
                        btnReviewVocab.style.display = "flex";
                        btnReviewVocab.textContent = "📖 Review Vocabulary";
                    } else if (practiceState.mode === "reading") {
                        btnReviewVocab.style.display = "flex";
                        btnReviewVocab.textContent = "📖 Review Passage";
                    } else if (practiceState.mode === "listening") {
                        btnReviewVocab.style.display = "flex";
                        btnReviewVocab.textContent = "📖 Review Dialogue";
                    } else {
                        btnReviewVocab.style.display = "none";
                    }
                }
                
                document.getElementById("btn-practice-retry-all").onclick = () => {
                    if (practiceState.mode === "vocab") {
                        startVocabPracticeQuiz(practiceState.subTopic);
                    } else if (practiceState.mode === "reading") {
                        practiceState.questions = [...PRACTICE_DATABASE.reading].sort(() => Math.random() - 0.5);
                        practiceState.currentIndex = 0;
                        practiceState.score = 0;
                        practiceState.answers = {};
                        practiceState.incorrectQuestions = [];
                        loadPracticeQuestion();
                    } else if (practiceState.mode === "listening") {
                        practiceState.questions = [...PRACTICE_DATABASE.listening].sort(() => Math.random() - 0.5);
                        practiceState.currentIndex = 0;
                        practiceState.score = 0;
                        practiceState.answers = {};
                        practiceState.incorrectQuestions = [];
                        loadPracticeQuestion();
                    } else if (practiceState.mode === "grammar") {
                        launchPracticeSubTopic("grammar", practiceState.subTopic);
                    } else if (practiceState.mode === "writing") {
                        practiceState.questions = [...PRACTICE_DATABASE.writing].sort(() => Math.random() - 0.5);
                        practiceState.currentIndex = 0;
                        practiceState.score = 0;
                        practiceState.answers = {};
                        practiceState.incorrectQuestions = [];
                        loadPracticeQuestion();
                    } else if (practiceState.mode === "speaking") {
                        practiceState.questions = [...PRACTICE_DATABASE.speaking].sort(() => Math.random() - 0.5);
                        practiceState.currentIndex = 0;
                        practiceState.score = 0;
                        practiceState.answers = {};
                        practiceState.incorrectQuestions = [];
                        loadPracticeQuestion();
                    } else {
                        practiceState.currentIndex = 0;
                        practiceState.score = 0;
                        practiceState.answers = {};
                        practiceState.incorrectQuestions = [];
                        loadPracticeQuestion();
                    }
                };
                
                if (btnRetryMistakes) {
                    btnRetryMistakes.onclick = () => {
                        practiceState.questions = [...practiceState.incorrectQuestions].sort(() => Math.random() - 0.5);
                        practiceState.currentIndex = 0;
                        practiceState.score = 0;
                        practiceState.answers = {};
                        practiceState.incorrectQuestions = [];
                        loadPracticeQuestion();
                    };
                }
                
                if (btnReviewVocab) {
                    btnReviewVocab.onclick = () => {
                        if (practiceState.mode === "vocab") {
                            startVocabLearning(practiceState.subTopic);
                        } else if (practiceState.mode === "reading") {
                            startReadingLearning();
                        } else if (practiceState.mode === "listening") {
                            startListeningLearning();
                        }
                    };
                }
                
                document.getElementById("btn-practice-return-topics").onclick = () => {
                    if (practiceState.mode === "vocab") {
                        startPracticeMode("vocab");
                    } else {
                        switchToView("view-practice-menu");
                    }
                };
            }
        }
    };

    // Mistakes Quick Access from dashboard
    const btnDashboardMistakes = document.getElementById("btn-dashboard-mistakes");
    if (btnDashboardMistakes) {
        btnDashboardMistakes.onclick = () => {
            renderMistakesPortal();
            switchToView("view-mistakes-portal");
        };
    }

    // Daily challenge button
    const btnStartDaily = document.getElementById("btn-start-daily-challenge");
    if (btnStartDaily) {
        btnStartDaily.onclick = () => {
            const todayStr = new Date().toISOString().split('T')[0];
            const isCompleted = portalState.dailyChallenge.date === todayStr && portalState.dailyChallenge.completed;
            if (isCompleted) {
                alert("Sie haben die heutige Herausforderung bereits gelöst!");
                return;
            }
            
            const challenge = getDailyChallengeQuestions();
            practiceState = {
                mode: "daily",
                subTopic: "Daily Challenge",
                questions: challenge.questions,
                currentIndex: 0,
                score: 0,
                answers: {},
                isAnswerChecked: false
            };
            
            switchToView("view-practice-workspace");
            loadPracticeQuestion();
        };
    }

    // Practice Menu Topic Cards click
    document.querySelectorAll(".practice-topic-card").forEach(card => {
        card.onclick = () => {
            const topic = card.getAttribute("data-topic");
            startPracticeMode(topic);
        };
        card.onkeydown = (e) => {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                const topic = card.getAttribute("data-topic");
                startPracticeMode(topic);
            }
        };
    });

    // Learning view navigation triggers
    const btnBackToTopics = document.getElementById("btn-back-to-topics");
    if (btnBackToTopics) {
        btnBackToTopics.onclick = () => {
            startPracticeMode("vocab");
        };
    }
    
    const btnBackToHub = document.getElementById("btn-back-to-hub");
    if (btnBackToHub) {
        btnBackToHub.onclick = () => {
            if (learningState.type === "vocab") {
                openVocabTopicHub(learningState.topic);
            } else {
                switchToView("view-practice-menu");
            }
        };
    }

    const btnLearnPrev = document.getElementById("btn-learn-prev");
    const btnLearnNext = document.getElementById("btn-learn-next");
    
    if (btnLearnPrev) {
        btnLearnPrev.onclick = () => {
            if (learningState.currentIndex > 0) {
                learningState.currentIndex--;
                loadLearnItem();
            }
        };
    }
    
    if (btnLearnNext) {
        btnLearnNext.onclick = () => {
            const total = learningState.items.length;
            if (learningState.currentIndex < total - 1) {
                learningState.currentIndex++;
                loadLearnItem();
            } else {
                // Completed learning!
                if (learningState.type === "vocab") {
                    const topic = learningState.topic;
                    if (!portalState.vocabStats[topic]) {
                        portalState.vocabStats[topic] = { learned: false, practised: false, mastered: false };
                    }
                    portalState.vocabStats[topic].learned = true;
                    savePortalStateToStorage();
                    openVocabTopicHub(topic);
                } else {
                    // Start reading/listening practice
                    startPracticeFromLearning();
                }
            }
        };
    }

    // Mistakes Clear Button click
    const btnClearMistakes = document.getElementById("btn-clear-all-mistakes");
    if (btnClearMistakes) {
        btnClearMistakes.onclick = () => {
            showConfirmModal(
                "Fehler leeren?",
                "Möchten Sie wirklich alle Fehler aus dem Archiv löschen? Dies kann nicht rückgängig gemacht werden.",
                () => {
                    portalState.mistakes = [];
                    savePortalStateToStorage();
                    renderMistakesPortal();
                }
            );
        };
    }

    // Mistakes Retry All Button click
    const btnRetryAllMistakes = document.getElementById("btn-retry-all-mistakes");
    if (btnRetryAllMistakes) {
        btnRetryAllMistakes.onclick = () => {
            if (portalState.mistakes.length === 0) {
                alert("Keine Fehler zum Üben vorhanden.");
                return;
            }
            const questions = portalState.mistakes.map(m => m.rawQuestionObj || {
                id: m.id,
                type: "mc",
                question: m.question,
                options: m.options,
                correct: m.correct,
                explanation: m.explanation,
                topic: m.topic
            });
            practiceState = {
                mode: "mistakes_all",
                subTopic: "Alle Fehler",
                questions: questions,
                currentIndex: 0,
                score: 0,
                answers: {},
                isAnswerChecked: false
            };
            switchToView("view-practice-workspace");
            loadPracticeQuestion();
        };
    }

    // Settings backup triggers
    const btnSettingsExport = document.getElementById("btn-settings-export");
    if (btnSettingsExport) {
        btnSettingsExport.onclick = () => {
            const backupObj = {
                portalState: portalState,
                examState: state
            };
            const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `goethe_learning_portal_backup_${new Date().toISOString().split('T')[0]}.json`;
            a.click();
        };
    }

    const btnSettingsImportTrigger = document.getElementById("btn-settings-import-trigger");
    const settingsImportFile = document.getElementById("settings-import-file");
    if (btnSettingsImportTrigger && settingsImportFile) {
        btnSettingsImportTrigger.onclick = () => {
            settingsImportFile.click();
        };
        settingsImportFile.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (data.portalState) {
                        portalState = data.portalState;
                        savePortalStateToStorage();
                    }
                    if (data.examState) {
                        state = data.examState;
                        saveSessionToStorage();
                    }
                    applyTheme(portalState.theme || "dark");
                    updateHeaderStats();
                    alert("Lernstandsdaten erfolgreich importiert!");
                    switchToView("view-landing-dashboard");
                } catch(err) {
                    alert("Fehler beim Importieren. Stellen Sie sicher, dass es sich um eine gültige JSON handelt.");
                }
            };
            reader.readAsText(file);
        };
    }

    const btnSettingsClearPractice = document.getElementById("btn-settings-clear-practice");
    if (btnSettingsClearPractice) {
        btnSettingsClearPractice.onclick = () => {
            showConfirmModal(
                "Übungsverlauf zurücksetzen?",
                "Möchten Sie Ihren Übungsverlauf, Ihre Streak-Werte und Ihren Fortschritt wirklich löschen? Ihre Fehlerdaten bleiben erhalten.",
                () => {
                    portalState.sessionsCompleted = 0;
                    portalState.progress = { vocab: {}, grammar: {}, reading: {}, listening: {}, writing: {}, speaking: {} };
                    portalState.streak = { current: 0, longest: 0, lastDate: "" };
                    savePortalStateToStorage();
                    updateHeaderStats();
                    alert("Übungsverlauf erfolgreich zurückgesetzt.");
                }
            );
        };
    }

    const btnSettingsClearAll = document.getElementById("btn-settings-clear-all");
    if (btnSettingsClearAll) {
        btnSettingsClearAll.onclick = () => {
            showConfirmModal(
                "Alles zurücksetzen?",
                "Dies setzt alle Daten auf Werkseinstellungen zurück: Übungen, Modelltests, Streak-Zähler und alle Fehlerarchive. Möchten Sie fortfahren?",
                () => {
                    localStorage.removeItem(PORTAL_STATE_KEY);
                    localStorage.removeItem(STATE_KEY);
                    location.reload();
                }
            );
        };
    }

    // Text Scale Sizing Handler
    const fontInc = document.getElementById("font-increase");
    const fontDec = document.getElementById("font-decrease");
    
    let fontScale = 1.0;
    const updateFontScale = () => {
        document.documentElement.style.setProperty('--font-scale', fontScale);
    };

    fontInc.onclick = () => {
        if (fontScale < 1.4) {
            fontScale += 0.1;
            updateFontScale();
        }
    };
    fontDec.onclick = () => {
        if (fontScale > 0.8) {
            fontScale -= 0.1;
            updateFontScale();
        }
    };

    // Registration and Start Button click
    document.getElementById("btn-start-exam").onclick = () => {
        const nameInput = document.getElementById("candidate-name");
        const dateInput = document.getElementById("exam-date");
        const errorMsg = document.getElementById("name-error");

        if (!nameInput.value.trim()) {
            errorMsg.style.display = "block";
            nameInput.focus();
            return;
        }
        errorMsg.style.display = "none";

        // Setup State initial values
        state.candidateName = nameInput.value.trim();
        state.examDate = dateInput.value;
        const levelSelect = document.getElementById("exam-level-select");
        state.level = levelSelect ? levelSelect.value : "A1";
        
        if (state.level !== "A1") {
            alert(`Hinweis: Das Niveau ${state.level} ist in der Systemarchitektur vorbereitet, aber die Fragenpakete sind noch gesperrt. Die Prüfung wird im A1-Modus gestartet.`);
            state.level = "A1";
        }

        state.isStarted = true;
        state.startTime = Date.now();
        
        // Randomize questions for this unique session
        initExamSession();

        // Update displays
        document.getElementById("display-candidate-name").textContent = state.candidateName;

        switchToView("view-exam-screen");
        startGlobalExamTimer();
        loadQuestion(0, 0);
    };

    // Global Section Navigation tabs triggers
    const navTabs = document.querySelectorAll(".nav-tab");
    navTabs.forEach((tab, index) => {
        tab.onclick = () => {
            loadQuestion(index, 0);
        };
    });

    // Previous / Next footer action buttons
    document.getElementById("btn-prev-question").onclick = () => {
        if (state.currentQuestionIndex > 0) {
            loadQuestion(state.currentModuleIndex, state.currentQuestionIndex - 1);
        } else if (state.currentModuleIndex > 0) {
            const prevModuleIndex = state.currentModuleIndex - 1;
            state.currentModuleIndex = prevModuleIndex;
            const prevList = getActiveQuestionList();
            loadQuestion(prevModuleIndex, prevList.length - 1);
        }
    };

    document.getElementById("btn-next-question").onclick = () => {
        const currentList = getActiveQuestionList();
        if (state.currentQuestionIndex < currentList.length - 1) {
            loadQuestion(state.currentModuleIndex, state.currentQuestionIndex + 1);
        } else if (state.currentModuleIndex < 3) {
            loadQuestion(state.currentModuleIndex + 1, 0);
        } else {
            // Reached very end, switch to review screen
            buildReviewScreen();
            switchToView("view-review-screen");
        }
    };

    // Review marker flag check action
    document.getElementById("btn-mark-review").onclick = (e) => {
        const q = getCurrentQuestion();
        if (state.reviews[q.id]) {
            state.reviews[q.id] = false;
        } else {
            state.reviews[q.id] = true;
        }
        
        // Visual reload update
        loadQuestion(state.currentModuleIndex, state.currentQuestionIndex);
    };

    // Directly open review grid view from footer
    document.getElementById("btn-review-screen").onclick = () => {
        buildReviewScreen();
        switchToView("view-review-screen");
    };

    document.getElementById("review-back-to-exam-btn").onclick = () => {
        switchToView("view-exam-screen");
    };

    // Reusable Custom Modal Dialog System
    const showConfirmModal = (title, description, onConfirm) => {
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-description").textContent = description;
        
        const confirmBtn = document.getElementById("modal-btn-confirm");
        const cancelBtn = document.getElementById("modal-btn-cancel");
        
        confirmBtn.onclick = () => {
            hideConfirmModal();
            onConfirm();
        };
        
        cancelBtn.onclick = () => {
            hideConfirmModal();
        };
        
        const modal = document.getElementById("confirm-modal");
        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
    };

    const hideConfirmModal = () => {
        const modal = document.getElementById("confirm-modal");
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    };

    // Submission Confirmation triggers
    const triggerSubmit = () => {
        showConfirmModal(
            "Prüfung abgeben?",
            "Sind Sie sicher, dass Sie die Prüfung beenden und abgeben möchten?",
            () => {
                submitExamAction();
            }
        );
    };

    document.getElementById("sidebar-submit-btn").onclick = triggerSubmit;
    document.getElementById("review-submit-final-btn").onclick = triggerSubmit;

    // Results screen action handlers
    document.getElementById("btn-print-report").onclick = () => {
        window.print();
    };

    document.getElementById("btn-export-json").onclick = () => {
        exportSessionAsJSON();
    };

    // Load score inputs if restoring
    if (state.schreibenScore !== null && state.schreibenScore !== undefined) {
        document.getElementById("input-score-schreiben").value = state.schreibenScore;
    }
    if (state.sprechenScore !== null && state.sprechenScore !== undefined) {
        document.getElementById("input-score-sprechen").value = state.sprechenScore;
    }

    // Manual Score Grader Handlers
    document.getElementById("btn-save-score-schreiben").onclick = () => {
        const input = document.getElementById("input-score-schreiben");
        const val = parseInt(input.value);
        if (isNaN(val) || val < 0 || val > 15) {
            alert("Bitte geben Sie eine gültige Punktzahl zwischen 0 und 15 ein.");
            return;
        }
        state.schreibenScore = val;
        saveSessionToStorage();
        runScoringAndAnalytics();
        alert("Schreiben-Punktzahl erfolgreich gespeichert!");
    };

    document.getElementById("btn-save-score-sprechen").onclick = () => {
        const input = document.getElementById("input-score-sprechen");
        const val = parseInt(input.value);
        if (isNaN(val) || val < 0 || val > 15) {
            alert("Bitte geben Sie eine gültige Punktzahl zwischen 0 und 15 ein.");
            return;
        }
        state.sprechenScore = val;
        saveSessionToStorage();
        runScoringAndAnalytics();
        alert("Sprechen-Punktzahl erfolgreich gespeichert!");
    };

    // AI Evaluation Assistant Handlers
    document.getElementById("btn-copy-ai-writing").onclick = generateAIWritingPrompt;
    document.getElementById("btn-copy-ai-speaking").onclick = generateAISpeakingPrompt;
    document.getElementById("btn-export-ai-package").onclick = generateAIEvalPackageExport;

    document.getElementById("btn-restart-exam").onclick = () => {
        showConfirmModal(
            "Prüfung neu starten?",
            "Möchten Sie die Prüfung wirklich neu starten? Ihre aktuellen Ergebnisse werden gelöscht.",
            () => {
                clearSessionStorage();
                // Full state reset
                state = {
                    candidateName: "",
                    examDate: "",
                    selectedVoiceName: "",
                    isStarted: false,
                    isSubmitted: false,
                    startTime: null,
                    endTime: null,
                    timeSpent: 0,
                    currentModuleIndex: 0,
                    currentQuestionIndex: 0,
                    level: "A1",
                    schreibenScore: null,
                    sprechenScore: null,
                    answers: {},
                    reviews: {},
                    playbackCounts: {},
                    questionTimes: {},
                    sessionQuestions: {
                        hoeren: [],
                        lesen: [],
                        schreiben: [],
                        sprechen: []
                    }
                };
                
                // Full UI reset
                const nameInput = document.getElementById("candidate-name");
                if (nameInput) nameInput.value = "";
                document.getElementById("exam-date").valueAsDate = new Date();
                document.getElementById("input-score-schreiben").value = "";
                document.getElementById("input-score-sprechen").value = "";
                
                switchToView("view-start-screen");
            }
        );
    };
});
