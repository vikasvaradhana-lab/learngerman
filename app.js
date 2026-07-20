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
                script: "Guten Tag, Volkshochschule Hamburg, was kann ich für Sie tun? - Guten Tag. Ich möchte mich für den Aquarellkurs anmelden. Ist noch ein Platz frei? - Ja, der Kurs beginnt nächsten Dienstag. Er findet jeden Dienstag von 18 bis 20 Uhr statt. - Und wie viel kostet das? - Dreißig Euro für acht Einheiten.",
                question: "Wann findet der Aquarellkurs statt?",
                options: [
                    { text: "Jeden Montag von 18–20 Uhr", letter: "A" },
                    { text: "Jeden Dienstag von 18–20 Uhr", letter: "B" },
                    { text: "Jeden Mittwoch von 18–20 Uhr", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Freizeit & Hobbys"
            },
            {
                id: "h_t1_q2",
                type: "mc",
                script: "Hallo Markus. Hast du Lust, dem Kleingärtnerverein beizutreten? Es gibt noch freie Parzellen. - Was kostet das pro Jahr? - Fünfzig Euro Mitgliedsbeitrag und dann noch die Pacht für das Grundstück, das sind zwanzig Euro im Monat. - Das klingt günstig. Wo kann ich mich anmelden? - Im Vereinsbüro, Samstags von neun bis zwölf.",
                question: "Wie viel kostet die monatliche Pacht für das Grundstück?",
                options: [
                    { text: "Fünfzig Euro", letter: "A" },
                    { text: "Zwanzig Euro", letter: "B" },
                    { text: "Dreißig Euro", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zahlen",
                vocab: "Natur & Umwelt"
            },
            {
                id: "h_t1_q3",
                type: "mc",
                script: "Hallo, hier spricht die Spedition Schnell. Wir haben heute versucht, ein Paket für Sie abzuliefern, aber Sie waren nicht zu Hause. Das Paket liegt jetzt in der Filiale in der Bergstraße 12. Sie können es abholen montags bis freitags von acht bis achtzehn Uhr oder samstags von neun bis vierzehn Uhr.",
                question: "Wo kann das Paket abgeholt werden?",
                options: [
                    { text: "Direkt beim Fahrer", letter: "A" },
                    { text: "In der Filiale in der Bergstraße 12", letter: "B" },
                    { text: "Am Hauptbahnhof", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Präpositionen",
                vocab: "Haushalt & Alltag"
            },
            {
                id: "h_t1_q4",
                type: "mc",
                script: "Guten Tag, Schwimmbad Neptun, was kann ich für Sie tun? - Ich möchte wissen, wann das Freibad in dieser Woche geöffnet ist. - Das Freibad ist täglich von sieben bis zwanzig Uhr geöffnet. Donnerstagvormittag ist jedoch Schulbetrieb, da sind wir erst um dreizehn Uhr für die Öffentlichkeit zugänglich. - Und wie viel kostet der Eintritt? - Vier Euro fünfzig für Erwachsene.",
                question: "Wann öffnet das Freibad am Donnerstag für die Öffentlichkeit?",
                options: [
                    { text: "Um sieben Uhr", letter: "A" },
                    { text: "Um dreizehn Uhr", letter: "B" },
                    { text: "Um zwanzig Uhr", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Sport & Bewegung"
            },
            {
                id: "h_t1_q5",
                type: "mc",
                script: "Und nun die Verkehrsmeldungen. Auf der Autobahn A3 zwischen Frankfurt-Nord und Bad Homburg gibt es wegen eines Unfalls einen Stau von etwa zwölf Kilometern. Die Polizei empfiehlt, die Ausfahrt Frankfurt-Süd zu nehmen und über die Bundesstraße 8 auszuweichen. Bitte planen Sie mehr Zeit ein.",
                question: "Was empfiehlt die Polizei den Fahrern?",
                options: [
                    { text: "Die A3 langsam weiterfahren", letter: "A" },
                    { text: "Die Ausfahrt Frankfurt-Süd nehmen und über B8 fahren", letter: "B" },
                    { text: "Den Zug nehmen", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Modalverben",
                vocab: "Verkehr & Transport"
            },
            {
                id: "h_t1_q6",
                type: "mc",
                script: "Hallo zusammen, hier ist eine kurze Ansage für alle Bewohner des Hauses. Ab nächster Woche gibt es einen neuen Putzplan für das Treppenhaus. Jede Wohnung ist einmal im Monat dran. Wohnung eins: der erste Montag. Wohnung zwei: der erste Dienstag. Wohnung drei: der erste Mittwoch. Bitte tragen Sie sich im Aushang ein.",
                question: "Was sollen die Bewohner im Aushang machen?",
                options: [
                    { text: "Ihren Namen als Mieter eintragen", letter: "A" },
                    { text: "Sich für den Putztag eintragen", letter: "B" },
                    { text: "Eine neue Reinigungsfirma vorschlagen", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Imperativ",
                vocab: "Haushalt & Alltag"
            }
        ],
        teil2: [
            {
                id: "h_t2_q7",
                type: "tf",
                script: "Liebe Bürgerinnen und Bürger! Das Stadtfest findet dieses Jahr nicht wie gewohnt im Juli, sondern wegen der Bauarbeiten am Marktplatz erst im September statt. Das Festprogramm bleibt gleich: Musik, Tanz und regionale Spezialitäten. Wir freuen uns auf Ihren Besuch!",
                question: "Das Stadtfest findet dieses Jahr im Juli statt.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false,
                playback_limit: 1,
                grammar: "Zeitangaben",
                vocab: "Stadt & Orte"
            },
            {
                id: "h_t2_q8",
                type: "tf",
                script: "Guten Tag, hier ist die Stadtbibliothek. Wir möchten Sie daran erinnern, dass die von Ihnen entliehenen Bücher übermorgen zurückgegeben werden müssen. Eine Verlängerung ist online oder telefonisch möglich, aber nur einmal pro Ausleihe.",
                question: "Man kann die Bücher mehrmals verlängern.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false,
                playback_limit: 1,
                grammar: "Modalverben",
                vocab: "Schule & Lernen"
            },
            {
                id: "h_t2_q9",
                type: "tf",
                script: "Achtung, Achtung! Wegen Straßenbauarbeiten ist die Hauptstraße zwischen der Kreuzung Rosenweg und dem Rathaus ab Montag für vier Wochen voll gesperrt. Eine Umleitung ist über die Gartenstraße und Kirchgasse eingerichtet. Bitte beachten Sie die Hinweisschilder.",
                question: "Die Hauptstraße ist wegen Bauarbeiten gesperrt.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: true,
                playback_limit: 1,
                grammar: "Präpositionen",
                vocab: "Verkehr & Transport"
            },
            {
                id: "h_t2_q10",
                type: "tf",
                script: "Guten Morgen, Schulsekretariat der Grundschule Lindenweg. Hier ist Frau Vogel. Mein Sohn Tim aus der Klasse 3b ist heute krank. Er hat hohes Fieber und kann leider nicht in die Schule kommen. Er bringt nach der Krankheit ein ärztliches Attest mit.",
                question: "Tim hat heute Schule und bringt später ein Attest mit.",
                options: [
                    { text: "Richtig (True)", val: true },
                    { text: "Falsch (False)", val: false }
                ],
                correct: false,
                playback_limit: 1,
                grammar: "Verbbildung",
                vocab: "Gesundheit & Körper"
            }
        ],
        teil3: [
            {
                id: "h_t3_q11",
                type: "mc",
                script: "Hallo Sabine, kannst du nächste Woche auf meine Katze aufpassen? Ich fahre für drei Tage zu einer Fortbildung. - Klar, kein Problem. Wie oft muss ich füttern? - Einmal morgens und einmal abends. Das Futter liegt im Schrank über dem Kühlschrank. Und bitte täglich die Wasserschüssel auffüllen. - Alles klar, ich mache das gerne.",
                question: "Wie oft muss Sabine die Katze füttern?",
                options: [
                    { text: "Einmal täglich", letter: "A" },
                    { text: "Zweimal täglich – morgens und abends", letter: "B" },
                    { text: "Dreimal täglich", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Adverbien",
                vocab: "Tiere & Natur"
            },
            {
                id: "h_t3_q12",
                type: "mc",
                script: "Hallo Herr Özdemir, hier ist Petra Fischer aus Wohnung 14. Ich fahre morgen früh weg und brauche jemanden, der meinen Schlüssel hat, falls der Handwerker kommt. Können Sie den Schlüssel nehmen? - Ja, natürlich. Ich bin den ganzen Tag zu Hause. - Vielen Dank! Ich lege ihn abends noch in Ihren Briefkasten.",
                question: "Wie bekommt Herr Özdemir den Schlüssel?",
                options: [
                    { text: "Frau Fischer bringt ihn persönlich", letter: "A" },
                    { text: "Sie legt ihn in seinen Briefkasten", letter: "B" },
                    { text: "Der Handwerker bringt ihn mit", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Präpositionen",
                vocab: "Haushalt & Alltag"
            },
            {
                id: "h_t3_q13",
                type: "mc",
                script: "Guten Tag, Deutschkurs B1 an der VHS. Wir möchten Sie informieren, dass die Prüfung am ursprünglich geplanten Termin am zwölften Mai nicht stattfindet. Die Prüfung wird auf den neunzehnten Mai verschoben. Uhrzeit und Raum bleiben gleich. Bitte informieren Sie auch Ihre Mitschüler.",
                question: "Wann findet die Prüfung jetzt statt?",
                options: [
                    { text: "Am zwölften Mai", letter: "A" },
                    { text: "Am neunzehnten Mai", letter: "B" },
                    { text: "Am fünfundzwanzigsten Mai", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Zeitangaben",
                vocab: "Schule & Lernen"
            },
            {
                id: "h_t3_q14",
                type: "mc",
                script: "Hallo Lukas, ich bin's, Nina. Ich fahre für zwei Wochen in Urlaub. Kannst du meine Balkonpflanzen gießen? Die Tomaten brauchen täglich Wasser, die Blumen aber nur jeden zweiten Tag. Das Gießkanne steht auf dem Balkon links neben der Tür. - Kein Problem, ich pass gut auf sie auf.",
                question: "Wie oft müssen die Tomaten gegossen werden?",
                options: [
                    { text: "Jeden zweiten Tag", letter: "A" },
                    { text: "Täglich", letter: "B" },
                    { text: "Einmal pro Woche", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Adverbien",
                vocab: "Natur & Umwelt"
            },
            {
                id: "h_t3_q15",
                type: "mc",
                script: "Hallo Frau Kern, hier ist das Sportgeschäft Aktiv. Ihr Gutschein über fünfzig Euro ist fertig. Sie können ihn ab Donnerstag in unserem Laden abholen. Bitte bringen Sie einen Lichtbildausweis mit. Der Gutschein ist ein Jahr gültig ab dem Kaufdatum. - Vielen Dank für die Info, ich komme am Freitag vorbei.",
                question: "Was muss Frau Kern beim Abholen mitbringen?",
                options: [
                    { text: "Die Kaufquittung", letter: "A" },
                    { text: "Einen Lichtbildausweis", letter: "B" },
                    { text: "Die Bestellbestätigung per E-Mail", letter: "C" }
                ],
                correct: 1, // B
                playback_limit: 2,
                grammar: "Modalverben",
                vocab: "Einkaufen & Geld"
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
    "familie": [
        {
            "word": "die Mutter",
            "translation": "Mother",
            "example": "Meine Mutter kocht das Essen.",
            "exampleTranslation": "My mother cooks the food.",
            "emoji": "👩"
        },
        {
            "word": "der Vater",
            "translation": "Father",
            "example": "Mein Vater arbeitet im Garten.",
            "exampleTranslation": "My father works in the garden.",
            "emoji": "👨"
        },
        {
            "word": "die Schwester",
            "translation": "Sister",
            "example": "Meine Schwester lernt Deutsch.",
            "exampleTranslation": "My sister learns German.",
            "emoji": "👧"
        },
        {
            "word": "der Bruder",
            "translation": "Brother",
            "example": "Mein Bruder spielt Fußball.",
            "exampleTranslation": "My brother plays football.",
            "emoji": "👦"
        },
        {
            "word": "die Tochter",
            "translation": "Daughter",
            "example": "Ihre Tochter geht in die Schule.",
            "exampleTranslation": "Her daughter goes to school.",
            "emoji": "👧"
        },
        {
            "word": "der Sohn",
            "translation": "Son",
            "example": "Sein Sohn ist noch sehr jung.",
            "exampleTranslation": "His son is still very young.",
            "emoji": "👦"
        },
        {
            "word": "die Großmutter",
            "translation": "Grandmother",
            "example": "Meine Großmutter kocht sehr gut.",
            "exampleTranslation": "My grandmother cooks very well.",
            "emoji": "👵"
        },
        {
            "word": "der Großvater",
            "translation": "Grandfather",
            "example": "Mein Großvater liest ein Buch.",
            "exampleTranslation": "My grandfather reads a book.",
            "emoji": "👴"
        },
        {
            "word": "das Kind",
            "translation": "Child",
            "example": "Das Kind spielt im Park.",
            "exampleTranslation": "The child plays in the park.",
            "emoji": "👶"
        },
        {
            "word": "die Eltern",
            "translation": "Parents",
            "example": "Meine Eltern wohnen in Berlin.",
            "exampleTranslation": "My parents live in Berlin.",
            "emoji": "👨‍👩‍👧‍👦"
        },
        {
            "word": "der Onkel",
            "translation": "Uncle",
            "example": "Mein Onkel wohnt in Hamburg.",
            "exampleTranslation": "My uncle lives in Hamburg.",
            "emoji": "👨‍💼"
        },
        {
            "word": "die Tante",
            "translation": "Aunt",
            "example": "Meine Tante kommt heute zu Besuch.",
            "exampleTranslation": "My aunt is coming to visit today.",
            "emoji": "👩‍💼"
        },
        {
            "word": "der Neffe",
            "translation": "Nephew",
            "example": "Mein Neffe lernt Deutsch.",
            "exampleTranslation": "My nephew learns German.",
            "emoji": "👦"
        },
        {
            "word": "die Nichte",
            "translation": "Niece",
            "example": "Ihre Nichte ist fünf Jahre alt.",
            "exampleTranslation": "Her niece is five years old.",
            "emoji": "👧"
        },
        {
            "word": "der Cousin",
            "translation": "Cousin (m)",
            "example": "Mein Cousin wohnt in München.",
            "exampleTranslation": "My cousin lives in Munich.",
            "emoji": "👦"
        },
        {
            "word": "die Cousine",
            "translation": "Cousin (f)",
            "example": "Meine Cousine kommt morgen.",
            "exampleTranslation": "My cousin comes tomorrow.",
            "emoji": "👧"
        },
        {
            "word": "die Ehefrau",
            "translation": "Wife",
            "example": "Meine Ehefrau heißt Sarah.",
            "exampleTranslation": "My wife is named Sarah.",
            "emoji": "👩"
        },
        {
            "word": "der Ehemann",
            "translation": "Husband",
            "example": "Ihr Ehemann arbeitet als Koch.",
            "exampleTranslation": "Her husband works as a chef.",
            "emoji": "👨"
        },
        {
            "word": "der Schwager",
            "translation": "Brother-in-law",
            "example": "Mein Schwager spielt Tennis.",
            "exampleTranslation": "My brother-in-law plays tennis.",
            "emoji": "👨"
        },
        {
            "word": "die Schwägerin",
            "translation": "Sister-in-law",
            "example": "Meine Schwägerin kommt aus Spanien.",
            "exampleTranslation": "My sister-in-law comes from Spain.",
            "emoji": "👩"
        }
    ],
    "begruessung": [
        {
            "word": "Hallo",
            "translation": "Hello",
            "example": "Hallo, wie geht es dir?",
            "exampleTranslation": "Hello, how are you?",
            "emoji": "👋"
        },
        {
            "word": "Guten Morgen",
            "translation": "Good morning",
            "example": "Guten Morgen, mein Freund!",
            "exampleTranslation": "Good morning, my friend!",
            "emoji": "🌅"
        },
        {
            "word": "Guten Tag",
            "translation": "Good day",
            "example": "Guten Tag, Herr Müller.",
            "exampleTranslation": "Good day, Mr. Müller.",
            "emoji": "☀️"
        },
        {
            "word": "Guten Abend",
            "translation": "Good evening",
            "example": "Guten Abend, meine Damen und Herren.",
            "exampleTranslation": "Good evening, ladies and gentlemen.",
            "emoji": "🌇"
        },
        {
            "word": "Auf Wiedersehen",
            "translation": "Goodbye",
            "example": "Auf Wiedersehen, bis bald!",
            "exampleTranslation": "Goodbye, see you soon!",
            "emoji": "👋"
        },
        {
            "word": "Tschüss",
            "translation": "Bye",
            "example": "Tschüss, einen schönen Tag noch!",
            "exampleTranslation": "Bye, have a nice day!",
            "emoji": "🙋"
        },
        {
            "word": "Wie geht es dir?",
            "translation": "How are you?",
            "example": "Hallo Ben, wie geht es dir?",
            "exampleTranslation": "Hello Ben, how are you?",
            "emoji": "❓"
        },
        {
            "word": "Danke, gut",
            "translation": "Thanks, good",
            "example": "Wie geht es dir? - Danke, gut.",
            "exampleTranslation": "How are you? - Thanks, good.",
            "emoji": "👍"
        },
        {
            "word": "Freut mich",
            "translation": "Nice to meet you",
            "example": "Ich bin Tom. - Freut mich.",
            "exampleTranslation": "I'm Tom. - Nice to meet you.",
            "emoji": "🤝"
        },
        {
            "word": "Bitte",
            "translation": "Please/You're welcome",
            "example": "Ein Wasser, bitte. - Bitte sehr.",
            "exampleTranslation": "A water, please. - Here you go.",
            "emoji": "🙏"
        },
        {
            "word": "Wie heißen Sie?",
            "translation": "What is your name?",
            "example": "Hallo, wie heißen Sie?",
            "exampleTranslation": "Hello, what is your name?",
            "emoji": "❓"
        },
        {
            "word": "Ich heiße...",
            "translation": "My name is...",
            "example": "Ich heiße Michael.",
            "exampleTranslation": "My name is Michael.",
            "emoji": "👤"
        },
        {
            "word": "Bis später",
            "translation": "See you later",
            "example": "Auf Wiedersehen, bis später!",
            "exampleTranslation": "Goodbye, see you later!",
            "emoji": "👋"
        },
        {
            "word": "Bis bald",
            "translation": "See you soon",
            "example": "Tschüss, bis bald!",
            "exampleTranslation": "Bye, see you soon!",
            "emoji": "👋"
        },
        {
            "word": "Gute Nacht",
            "translation": "Good night",
            "example": "Gute Nacht, schlaf gut!",
            "exampleTranslation": "Good night, sleep well!",
            "emoji": "🌙"
        },
        {
            "word": "Wie geht es Ihnen?",
            "translation": "How are you? (formal)",
            "example": "Guten Tag Herr Schmidt, wie geht es Ihnen?",
            "exampleTranslation": "Good day Mr. Schmidt, how are you?",
            "emoji": "❓"
        },
        {
            "word": "Herzlich willkommen",
            "translation": "Welcome",
            "example": "Herzlich willkommen in Deutschland!",
            "exampleTranslation": "Welcome to Germany!",
            "emoji": "🤝"
        },
        {
            "word": "Einen schönen Tag noch",
            "translation": "Have a nice day",
            "example": "Tschüss, einen schönen Tag noch!",
            "exampleTranslation": "Bye, have a nice day!",
            "emoji": "☀️"
        },
        {
            "word": "Auf Wiederhören",
            "translation": "Goodbye (on phone)",
            "example": "Auf Wiederhören, Frau Becker.",
            "exampleTranslation": "Goodbye, Mrs. Becker.",
            "emoji": "📞"
        },
        {
            "word": "Entschuldigung",
            "translation": "Excuse me",
            "example": "Entschuldigung, wo ist der Bahnhof?",
            "exampleTranslation": "Excuse me, where is the station?",
            "emoji": "🙏"
        }
    ],
    "personalinfo": [
        {
            "word": "der Name",
            "translation": "Name",
            "example": "Mein Name ist Thomas.",
            "exampleTranslation": "My name is Thomas.",
            "emoji": "📛"
        },
        {
            "word": "das Alter",
            "translation": "Age",
            "example": "Sein Alter ist unbekannt.",
            "exampleTranslation": "His age is unknown.",
            "emoji": "🎂"
        },
        {
            "word": "die Adresse",
            "translation": "Address",
            "example": "Wie ist Ihre Adresse?",
            "exampleTranslation": "What is your address?",
            "emoji": "📍"
        },
        {
            "word": "die Telefonnummer",
            "translation": "Phone number",
            "example": "Meine Telefonnummer hat sich geändert.",
            "exampleTranslation": "My phone number has changed.",
            "emoji": "📞"
        },
        {
            "word": "der Wohnort",
            "translation": "Place of residence",
            "example": "Wie ist Ihr Wohnort?",
            "exampleTranslation": "What is your place of residence?",
            "emoji": "🏠"
        },
        {
            "word": "verheiratet",
            "translation": "married",
            "example": "Sie ist seit zwei Jahren verheiratet.",
            "exampleTranslation": "She has been married for two years.",
            "emoji": "💍"
        },
        {
            "word": "ledig",
            "translation": "single",
            "example": "Ich bin ledig und habe keine Kinder.",
            "exampleTranslation": "I am single and have no children.",
            "emoji": "👤"
        },
        {
            "word": "das Geburtsdatum",
            "translation": "Date of birth",
            "example": "Schreiben Sie das Geburtsdatum auf das Formular.",
            "exampleTranslation": "Write the date of birth on the form.",
            "emoji": "📅"
        },
        {
            "word": "das Herkunftsland",
            "translation": "Country of origin",
            "example": "Mein Herkunftsland ist Spanien.",
            "exampleTranslation": "My country of origin is Spain.",
            "emoji": "🗺️"
        },
        {
            "word": "das Geschlecht",
            "translation": "Gender",
            "example": "Bitte kreuzen Sie das Geschlecht an.",
            "exampleTranslation": "Please mark the gender.",
            "emoji": "🚻"
        },
        {
            "word": "die Unterschrift",
            "translation": "Signature",
            "example": "Hier ist Ihre Unterschrift nötig.",
            "exampleTranslation": "Your signature is necessary here.",
            "emoji": "✒️"
        },
        {
            "word": "das Formular",
            "translation": "Form",
            "example": "Füllen Sie das Formular aus.",
            "exampleTranslation": "Fill out the form.",
            "emoji": "📄"
        },
        {
            "word": "geboren",
            "translation": "born",
            "example": "Ich bin in Indien geboren.",
            "exampleTranslation": "I was born in India.",
            "emoji": "👶"
        },
        {
            "word": "der Geburtsort",
            "translation": "Place of birth",
            "example": "Wie ist Ihr Geburtsort?",
            "exampleTranslation": "What is your place of birth?",
            "emoji": "📍"
        },
        {
            "word": "die Staatsangehörigkeit",
            "translation": "Nationality",
            "example": "Meine Staatsangehörigkeit ist indisch.",
            "exampleTranslation": "My nationality is Indian.",
            "emoji": "🪪"
        },
        {
            "word": "die Postleitzahl",
            "translation": "Postal code",
            "example": "Wie ist Ihre Postleitzahl?",
            "exampleTranslation": "What is your postal code?",
            "emoji": "📮"
        },
        {
            "word": "geschieden",
            "translation": "divorced",
            "example": "Er ist geschieden und lebt allein.",
            "exampleTranslation": "He is divorced and lives alone.",
            "emoji": "👤"
        },
        {
            "word": "die E-Mail-Adresse",
            "translation": "Email address",
            "example": "Schreiben Sie Ihre E-Mail-Adresse.",
            "exampleTranslation": "Write your email address.",
            "emoji": "📧"
        },
        {
            "word": "die Mobilnummer",
            "translation": "Mobile number",
            "example": "Haben Sie eine Mobilnummer?",
            "exampleTranslation": "Do you have a mobile number?",
            "emoji": "📱"
        },
        {
            "word": "die Hobbys",
            "translation": "Hobbies",
            "example": "Meine Hobbys sind Lesen und Reisen.",
            "exampleTranslation": "My hobbies are reading and traveling.",
            "emoji": "🎭"
        }
    ],
    "laender": [
        {
            "word": "Deutschland",
            "translation": "Germany",
            "example": "Ich wohne in Deutschland.",
            "exampleTranslation": "I live in Germany.",
            "emoji": "🇩🇪"
        },
        {
            "word": "Österreich",
            "translation": "Austria",
            "example": "Wien ist die Hauptstadt von Österreich.",
            "exampleTranslation": "Vienna is the capital of Austria.",
            "emoji": "🇦🇹"
        },
        {
            "word": "die Schweiz",
            "translation": "Switzerland",
            "example": "Sie reist in die Schweiz.",
            "exampleTranslation": "She travels to Switzerland.",
            "emoji": "🇨🇭"
        },
        {
            "word": "Deutsch",
            "translation": "German (lang)",
            "example": "Ich lerne Deutsch online.",
            "exampleTranslation": "I learn German online.",
            "emoji": "🗣️"
        },
        {
            "word": "Englisch",
            "translation": "English",
            "example": "Er spricht sehr gut Englisch.",
            "exampleTranslation": "He speaks English very well.",
            "emoji": "🇬🇧"
        },
        {
            "word": "Frankreich",
            "translation": "France",
            "example": "Frankreich liegt neben Deutschland.",
            "exampleTranslation": "France lies next to Germany.",
            "emoji": "🇫🇷"
        },
        {
            "word": "Französisch",
            "translation": "French",
            "example": "Sie lernt Französisch in Paris.",
            "exampleTranslation": "She learns French in Paris.",
            "emoji": "🇫🇷"
        },
        {
            "word": "Spanien",
            "translation": "Spain",
            "example": "Wir machen Urlaub in Spanien.",
            "exampleTranslation": "We are vacationing in Spain.",
            "emoji": "🇪🇸"
        },
        {
            "word": "Spanisch",
            "translation": "Spanish",
            "example": "Sprichst du Spanisch?",
            "exampleTranslation": "Do you speak Spanish?",
            "emoji": "🇪🇸"
        },
        {
            "word": "sprechen",
            "translation": "to speak",
            "example": "Wir sprechen über Deutsch.",
            "exampleTranslation": "We speak about German.",
            "emoji": "💬"
        },
        {
            "word": "die Sprache",
            "translation": "Language",
            "example": "Welche Sprache lernen Sie?",
            "exampleTranslation": "Which language are you learning?",
            "emoji": "🗣️"
        },
        {
            "word": "das Land",
            "translation": "Country",
            "example": "Deutschland ist ein schönes Land.",
            "exampleTranslation": "Germany is a beautiful country.",
            "emoji": "🗺️"
        },
        {
            "word": "Italien",
            "translation": "Italy",
            "example": "Wir reisen im Sommer nach Italien.",
            "exampleTranslation": "We are traveling to Italy in the summer.",
            "emoji": "🇮🇹"
        },
        {
            "word": "Italienisch",
            "translation": "Italian",
            "example": "Er lernt Italienisch in der Schule.",
            "exampleTranslation": "He learns Italian at school.",
            "emoji": "🇮🇹"
        },
        {
            "word": "Indien",
            "translation": "India",
            "example": "Ich komme aus Indien.",
            "exampleTranslation": "I come from India.",
            "emoji": "🇮🇳"
        },
        {
            "word": "die Heimat",
            "translation": "Homeland",
            "example": "Deutschland ist meine neue Heimat.",
            "exampleTranslation": "Germany is my new homeland.",
            "emoji": "🏡"
        },
        {
            "word": "ausländisch",
            "translation": "foreign",
            "example": "Sie spricht drei ausländische Sprachen.",
            "exampleTranslation": "She speaks three foreign languages.",
            "emoji": "🌐"
        },
        {
            "word": "der Ausländer",
            "translation": "Foreigner",
            "example": "Er ist ein Ausländer hier.",
            "exampleTranslation": "He is a foreigner here.",
            "emoji": "👤"
        },
        {
            "word": "Europa",
            "translation": "Europe",
            "example": "Deutschland liegt in Europa.",
            "exampleTranslation": "Germany lies in Europe.",
            "emoji": "🇪🇺"
        },
        {
            "word": "die Stadt",
            "translation": "City",
            "example": "Berlin ist eine große Stadt.",
            "exampleTranslation": "Berlin is a big city.",
            "emoji": "🏙️"
        }
    ],
    "tage": [
        {
            "word": "der Montag",
            "translation": "Monday",
            "example": "Am Montag arbeite ich wieder.",
            "exampleTranslation": "On Monday I work again.",
            "emoji": "📅"
        },
        {
            "word": "der Dienstag",
            "translation": "Tuesday",
            "example": "Dienstag habe ich einen Termin.",
            "exampleTranslation": "Tuesday I have an appointment.",
            "emoji": "📅"
        },
        {
            "word": "der Mittwoch",
            "translation": "Wednesday",
            "example": "Mittwoch ist die Mitte der Woche.",
            "exampleTranslation": "Wednesday is the middle of the week.",
            "emoji": "📅"
        },
        {
            "word": "der Donnerstag",
            "translation": "Thursday",
            "example": "Donnerstag trinke ich Kaffee mit Tim.",
            "exampleTranslation": "Thursday I drink coffee with Tim.",
            "emoji": "📅"
        },
        {
            "word": "der Freitag",
            "translation": "Friday",
            "example": "Freitagabend gehen wir ins Kino.",
            "exampleTranslation": "Friday evening we go to the cinema.",
            "emoji": "📅"
        },
        {
            "word": "der Samstag",
            "translation": "Saturday",
            "example": "Am Samstag kaufe ich Gemüse.",
            "exampleTranslation": "On Saturday I buy vegetables.",
            "emoji": "📅"
        },
        {
            "word": "der Sonntag",
            "translation": "Sunday",
            "example": "Am Sonntag ruhe ich mich aus.",
            "exampleTranslation": "On Sunday I rest.",
            "emoji": "📅"
        },
        {
            "word": "der Januar",
            "translation": "January",
            "example": "Der Januar ist kalt und nass.",
            "exampleTranslation": "January is cold and wet.",
            "emoji": "❄️"
        },
        {
            "word": "der Februar",
            "translation": "February",
            "example": "Der Februar hat oft Schnee.",
            "exampleTranslation": "February often has snow.",
            "emoji": "❄️"
        },
        {
            "word": "der März",
            "translation": "March",
            "example": "Im März beginnt das warme Wetter.",
            "exampleTranslation": "In March the warm weather begins.",
            "emoji": "🌱"
        },
        {
            "word": "der April",
            "translation": "April",
            "example": "Das Wetter im April ist wechselhaft.",
            "exampleTranslation": "The weather in April is changeable.",
            "emoji": "🌦️"
        },
        {
            "word": "der Mai",
            "translation": "May",
            "example": "Im Mai blühen die Blumen.",
            "exampleTranslation": "In May the flowers bloom.",
            "emoji": "🌸"
        },
        {
            "word": "das Jahr",
            "translation": "Year",
            "example": "Das Jahr hat zwölf Monate.",
            "exampleTranslation": "The year has twelve months.",
            "emoji": "📅"
        },
        {
            "word": "der Monat",
            "translation": "Month",
            "example": "Welcher Monat ist jetzt?",
            "exampleTranslation": "Which month is it now?",
            "emoji": "📅"
        },
        {
            "word": "die Woche",
            "translation": "Week",
            "example": "Die Woche hat sieben Tage.",
            "exampleTranslation": "The week has seven days.",
            "emoji": "🗓️"
        },
        {
            "word": "der Tag",
            "translation": "Day",
            "example": "Heute ist ein schöner Tag.",
            "exampleTranslation": "Today is a beautiful day.",
            "emoji": "☀️"
        },
        {
            "word": "das Datum",
            "translation": "Date",
            "example": "Wie ist das Datum heute?",
            "exampleTranslation": "What is the date today?",
            "emoji": "📅"
        },
        {
            "word": "Juni",
            "translation": "June",
            "example": "Der Sommer beginnt im Juni.",
            "exampleTranslation": "Summer begins in June.",
            "emoji": "📅"
        },
        {
            "word": "Juli",
            "translation": "July",
            "example": "Im Juli fahren wir in den Urlaub.",
            "exampleTranslation": "In July we go on vacation.",
            "emoji": "🏖️"
        },
        {
            "word": "Dezember",
            "translation": "December",
            "example": "Weihnachten ist im Dezember.",
            "exampleTranslation": "Christmas is in December.",
            "emoji": "🎄"
        }
    ],
    "zahlen": [
        {
            "word": "null",
            "translation": "zero",
            "example": "Das Zimmer hat die Nummer null.",
            "exampleTranslation": "The room has the number zero.",
            "emoji": "0️⃣"
        },
        {
            "word": "eins",
            "translation": "one",
            "example": "Ein Kilo Tomaten, bitte.",
            "exampleTranslation": "One kilo of tomatoes, please.",
            "emoji": "1️⃣"
        },
        {
            "word": "zwei",
            "translation": "two",
            "example": "Ich nehme zwei Bananen.",
            "exampleTranslation": "I'll take two bananas.",
            "emoji": "2️⃣"
        },
        {
            "word": "drei",
            "translation": "three",
            "example": "Wir haben drei Kinder.",
            "exampleTranslation": "We have three children.",
            "emoji": "3️⃣"
        },
        {
            "word": "vier",
            "translation": "four",
            "example": "Der Tisch hat vier Beine.",
            "exampleTranslation": "The table has four legs.",
            "emoji": "4️⃣"
        },
        {
            "word": "fünf",
            "translation": "five",
            "example": "Er kommt in fünf Minuten.",
            "exampleTranslation": "He comes in five minutes.",
            "emoji": "5️⃣"
        },
        {
            "word": "sechs",
            "translation": "six",
            "example": "Das macht genau sechs Euro.",
            "exampleTranslation": "That makes exactly six euros.",
            "emoji": "6️⃣"
        },
        {
            "word": "sieben",
            "translation": "seven",
            "example": "Die Woche hat sieben Tage.",
            "exampleTranslation": "The week has seven days.",
            "emoji": "7️⃣"
        },
        {
            "word": "acht",
            "translation": "eight",
            "example": "Lucas ist acht Jahre alt.",
            "exampleTranslation": "Lucas is eight years old.",
            "emoji": "8️⃣"
        },
        {
            "word": "neun",
            "translation": "nine",
            "example": "Es kostet neun Euro.",
            "exampleTranslation": "It costs nine euros.",
            "emoji": "9️⃣"
        },
        {
            "word": "zehn",
            "translation": "ten",
            "example": "Ich habe zehn Finger.",
            "exampleTranslation": "I have ten fingers.",
            "emoji": "🔟"
        },
        {
            "word": "hundert",
            "translation": "hundred",
            "example": "Das Buch kostet hundert Euro.",
            "exampleTranslation": "The book costs a hundred euros.",
            "emoji": "💯"
        },
        {
            "word": "elf",
            "translation": "eleven",
            "example": "Er hat elf Euro in der Tasche.",
            "exampleTranslation": "He has eleven euros in his pocket.",
            "emoji": "🔢"
        },
        {
            "word": "zwölf",
            "translation": "twelve",
            "example": "Das Jahr hat zwölf Monate.",
            "exampleTranslation": "The year has twelve months.",
            "emoji": "🔢"
        },
        {
            "word": "dreizehn",
            "translation": "thirteen",
            "example": "Mein Sohn ist dreizehn Jahre alt.",
            "exampleTranslation": "My son is thirteen years old.",
            "emoji": "🔢"
        },
        {
            "word": "zwanzig",
            "translation": "twenty",
            "example": "Das Ticket kostet zwanzig Euro.",
            "exampleTranslation": "The ticket costs twenty euros.",
            "emoji": "🔢"
        },
        {
            "word": "dreißig",
            "translation": "thirty",
            "example": "Der Kurs hat dreißig Schüler.",
            "exampleTranslation": "The course has thirty students.",
            "emoji": "🔢"
        },
        {
            "word": "fünfzig",
            "translation": "fifty",
            "example": "Das Buch kostet fünfzig Euro.",
            "exampleTranslation": "The book costs fifty euros.",
            "emoji": "🔢"
        },
        {
            "word": "tausend",
            "translation": "thousand",
            "example": "Ein Kilo hat tausend Gramm.",
            "exampleTranslation": "One kilo has a thousand grams.",
            "emoji": "🔢"
        },
        {
            "word": "die Nummer",
            "translation": "Number",
            "example": "Wie ist Ihre Zimmernummer?",
            "exampleTranslation": "What is your room number.",
            "emoji": "🔢"
        }
    ],
    "uhrzeit": [
        {
            "word": "die Uhrzeit",
            "translation": "Time of day",
            "example": "Wie ist die Uhrzeit?",
            "exampleTranslation": "What is the time of day?",
            "emoji": "⌚"
        },
        {
            "word": "die Stunde",
            "translation": "Hour",
            "example": "Der Flug dauert eine Stunde.",
            "exampleTranslation": "The flight takes one hour.",
            "emoji": "⏳"
        },
        {
            "word": "die Minute",
            "translation": "Minute",
            "example": "Warten Sie eine Minute, bitte.",
            "exampleTranslation": "Wait one minute, please.",
            "emoji": "⏱️"
        },
        {
            "word": "die Sekunde",
            "translation": "Second",
            "example": "Er läuft die Strecke in zehn Sekunden.",
            "exampleTranslation": "He runs the distance in ten seconds.",
            "emoji": "⏱️"
        },
        {
            "word": "der Termin",
            "translation": "Appointment",
            "example": "Morgen habe ich einen Termin.",
            "exampleTranslation": "Tomorrow I have an appointment.",
            "emoji": "📅"
        },
        {
            "word": "spät",
            "translation": "late",
            "example": "Es ist schon sehr spät.",
            "exampleTranslation": "It is already very late.",
            "emoji": "🌙"
        },
        {
            "word": "früh",
            "translation": "early",
            "example": "Ich stehe früh am Morgen auf.",
            "exampleTranslation": "I get up early in the morning.",
            "emoji": "🌅"
        },
        {
            "word": "die Uhr",
            "translation": "Clock / O'clock",
            "example": "Es ist zwei Uhr am Nachmittag.",
            "exampleTranslation": "It is two o'clock in the afternoon.",
            "emoji": "⏰"
        },
        {
            "word": "heute",
            "translation": "today",
            "example": "Heute ist das Wetter schön.",
            "exampleTranslation": "Today the weather is beautiful.",
            "emoji": "📅"
        },
        {
            "word": "morgen",
            "translation": "tomorrow",
            "example": "Morgen lerne ich Deutsch.",
            "exampleTranslation": "Tomorrow I learn German.",
            "emoji": "📅"
        },
        {
            "word": "gestern",
            "translation": "yesterday",
            "example": "Gestern war ich im Kino.",
            "exampleTranslation": "Yesterday I was at the cinema.",
            "emoji": "📅"
        },
        {
            "word": "die Freizeit",
            "translation": "Free time",
            "example": "Was machen Sie in Ihrer Freizeit?",
            "exampleTranslation": "What do you do in your free time?",
            "emoji": "🎮"
        },
        {
            "word": "halb",
            "translation": "half (time)",
            "example": "Es ist halb drei (2:30).",
            "exampleTranslation": "It is half past two.",
            "emoji": "⏰"
        },
        {
            "word": "das Viertel",
            "translation": "quarter (time)",
            "example": "Es ist Viertel nach vier (4:15).",
            "exampleTranslation": "It is a quarter past four.",
            "emoji": "⏰"
        },
        {
            "word": "der Nachmittag",
            "translation": "Afternoon",
            "example": "Am Nachmittag spiele ich Fußball.",
            "exampleTranslation": "In the afternoon I play football.",
            "emoji": "☀️"
        },
        {
            "word": "der Abend",
            "translation": "Evening",
            "example": "Am Abend lerne ich Deutsch.",
            "exampleTranslation": "In the evening I learn German.",
            "emoji": "🌙"
        },
        {
            "word": "die Nacht",
            "translation": "Night",
            "example": "In der Nacht schlafen alle.",
            "exampleTranslation": "In the night everyone sleeps.",
            "emoji": "🌌"
        },
        {
            "word": "pünktlich",
            "translation": "punctual",
            "example": "Bitte seien Sie pünktlich.",
            "exampleTranslation": "Please be punctual.",
            "emoji": "⏱️"
        },
        {
            "word": "täglich",
            "translation": "daily",
            "example": "Ich lerne täglich neue Wörter.",
            "exampleTranslation": "I learn new words daily.",
            "emoji": "🗓️"
        },
        {
            "word": "die Verspätung",
            "translation": "Delay",
            "example": "Der Zug hat heute eine Verspätung.",
            "exampleTranslation": "The train has a delay today.",
            "emoji": "⏱️"
        }
    ],
    "wetter": [
        {
            "word": "das Wetter",
            "translation": "Weather",
            "example": "Das Wetter ist heute warm.",
            "exampleTranslation": "The weather is warm today.",
            "emoji": "🌈"
        },
        {
            "word": "die Sonne",
            "translation": "Sun",
            "example": "Die Sonne scheint hell.",
            "exampleTranslation": "The sun shines brightly.",
            "emoji": "☀️"
        },
        {
            "word": "der Regen",
            "translation": "Rain",
            "example": "Der Regen ist gut für die Natur.",
            "exampleTranslation": "The rain is good for nature.",
            "emoji": "🌧️"
        },
        {
            "word": "der Schnee",
            "translation": "Snow",
            "example": "Der Schnee liegt auf der Straße.",
            "exampleTranslation": "The snow lies on the street.",
            "emoji": "❄️"
        },
        {
            "word": "der Wind",
            "translation": "Wind",
            "example": "Der Wind bläst stark.",
            "exampleTranslation": "The wind blows strongly.",
            "emoji": "💨"
        },
        {
            "word": "kalt",
            "translation": "cold",
            "example": "Im Winter ist es kalt.",
            "exampleTranslation": "In winter it is cold.",
            "emoji": "❄️"
        },
        {
            "word": "warm",
            "translation": "warm",
            "example": "Im Frühling wird es warm.",
            "exampleTranslation": "In spring it becomes warm.",
            "emoji": "☀️"
        },
        {
            "word": "heiß",
            "translation": "hot",
            "example": "Der Sommer ist oft heiß.",
            "exampleTranslation": "The summer is often hot.",
            "emoji": "🔥"
        },
        {
            "word": "die Wolke",
            "translation": "Cloud",
            "example": "Am Himmel steht eine weiße Wolke.",
            "exampleTranslation": "In the sky stands a white cloud.",
            "emoji": "☁️"
        },
        {
            "word": "der Frühling",
            "translation": "Spring (season)",
            "example": "Der Frühling bringt viele Blumen.",
            "exampleTranslation": "Spring brings many flowers.",
            "emoji": "🌱"
        },
        {
            "word": "der Sommer",
            "translation": "Summer",
            "example": "Der Sommer ist sonnig und heiß.",
            "exampleTranslation": "Summer is sunny and hot.",
            "emoji": "🏖️"
        },
        {
            "word": "der Herbst",
            "translation": "Autumn",
            "example": "Im Herbst fallen die Blätter.",
            "exampleTranslation": "In autumn the leaves fall.",
            "emoji": "🍁"
        },
        {
            "word": "windig",
            "translation": "windy",
            "example": "Heute ist es sehr windig draußen.",
            "exampleTranslation": "Today it is very windy outside.",
            "emoji": "💨"
        },
        {
            "word": "regnen",
            "translation": "to rain",
            "example": "Es regnet den ganzen Tag.",
            "exampleTranslation": "It rains all day.",
            "emoji": "🌧️"
        },
        {
            "word": "die Kälte",
            "translation": "Coldness",
            "example": "Ich mag die Kälte nicht.",
            "exampleTranslation": "I do not like the cold.",
            "emoji": "❄️"
        },
        {
            "word": "die Hitze",
            "translation": "Heat",
            "example": "Die Hitze im Sommer ist groß.",
            "exampleTranslation": "The heat in summer is high.",
            "emoji": "🌡️"
        },
        {
            "word": "schneien",
            "translation": "to snow",
            "example": "Im Winter schneit es oft.",
            "exampleTranslation": "In winter it snows often.",
            "emoji": "❄️"
        },
        {
            "word": "bewölkt",
            "translation": "cloudy",
            "example": "Der Himmel ist heute bewölkt.",
            "exampleTranslation": "The sky is cloudy today.",
            "emoji": "☁️"
        },
        {
            "word": "trocken",
            "translation": "dry",
            "example": "Das Wetter ist warm und trocken.",
            "exampleTranslation": "The weather is warm and dry.",
            "emoji": "☀️"
        },
        {
            "word": "nass",
            "translation": "wet",
            "example": "Die Straße ist nass vom Regen.",
            "exampleTranslation": "The street is wet from the rain.",
            "emoji": "💦"
        }
    ],
    "wohnung": [
        {
            "word": "das Haus",
            "translation": "House",
            "example": "Das Haus hat zwei Etagen.",
            "exampleTranslation": "The house has two floors.",
            "emoji": "🏠"
        },
        {
            "word": "die Wohnung",
            "translation": "Apartment",
            "example": "Meine Wohnung liegt im Zentrum.",
            "exampleTranslation": "My apartment lies in the center.",
            "emoji": "🏢"
        },
        {
            "word": "das Zimmer",
            "translation": "Room",
            "example": "Das Zimmer ist klein und gemütlich.",
            "exampleTranslation": "The room is small and cozy.",
            "emoji": "🚪"
        },
        {
            "word": "die Küche",
            "translation": "Kitchen",
            "example": "Meine Mutter kocht in der Küche.",
            "exampleTranslation": "My mother cooks in the kitchen.",
            "emoji": "🍳"
        },
        {
            "word": "das Bad",
            "translation": "Bathroom",
            "example": "Ich putze mir im Bad die Zähne.",
            "exampleTranslation": "I brush my teeth in the bathroom.",
            "emoji": "🛁"
        },
        {
            "word": "das Bett",
            "translation": "Bed",
            "example": "Das Bett ist weich und warm.",
            "exampleTranslation": "The bed is soft and warm.",
            "emoji": "🛏️"
        },
        {
            "word": "der Tisch",
            "translation": "Table",
            "example": "Der Tisch steht in der Küche.",
            "exampleTranslation": "The table stands in the kitchen.",
            "emoji": "🪑"
        },
        {
            "word": "der Stuhl",
            "translation": "Chair",
            "example": "Bitte setzen Sie sich auf den Stuhl.",
            "exampleTranslation": "Please sit down on the chair.",
            "emoji": "🪑"
        },
        {
            "word": "der Schrank",
            "translation": "Wardrobe / Cupboard",
            "example": "Meine Kleidung hängt im Schrank.",
            "exampleTranslation": "My clothes hang in the wardrobe.",
            "emoji": "🚪"
        },
        {
            "word": "die Tür",
            "translation": "Door",
            "example": "Schließen Sie die Tür, bitte.",
            "exampleTranslation": "Close the door, please.",
            "emoji": "🚪"
        },
        {
            "word": "das Fenster",
            "translation": "Window",
            "example": "Öffnen Sie das Fenster, bitte.",
            "exampleTranslation": "Open the window, please.",
            "emoji": "🪟"
        },
        {
            "word": "die Miete",
            "translation": "Rent",
            "example": "Die Miete kostet fünfhundert Euro.",
            "exampleTranslation": "The rent costs five hundred euros.",
            "emoji": "💳"
        },
        {
            "word": "der Balkon",
            "translation": "Balcony",
            "example": "Die Wohnung hat einen schönen Balkon.",
            "exampleTranslation": "The apartment has a nice balcony.",
            "emoji": "🪵"
        },
        {
            "word": "der Garten",
            "translation": "Garden",
            "example": "Die Kinder spielen im Garten.",
            "exampleTranslation": "The children play in the garden.",
            "emoji": "🏡"
        },
        {
            "word": "das Sofa",
            "translation": "Sofa",
            "example": "Die Katze schläft auf dem Sofa.",
            "exampleTranslation": "The cat sleeps on the sofa.",
            "emoji": "🛋️"
        },
        {
            "word": "der Flur",
            "translation": "Hallway",
            "example": "Der Flur ist lang und dunkel.",
            "exampleTranslation": "The hallway is long and dark.",
            "emoji": "🚪"
        },
        {
            "word": "die Toilette",
            "translation": "Toilet",
            "example": "Wo ist die Toilette, bitte?",
            "exampleTranslation": "Where is the toilet, please?",
            "emoji": "🚽"
        },
        {
            "word": "der Schlüssel",
            "translation": "Key",
            "example": "Ich kann meinen Schlüssel nicht finden.",
            "exampleTranslation": "I cannot find my key.",
            "emoji": "🔑"
        },
        {
            "word": "das Gebäude",
            "translation": "Building",
            "example": "Das Gebäude ist sehr alt und groß.",
            "exampleTranslation": "The building is very old and big.",
            "emoji": "🏢"
        },
        {
            "word": "der Nachbar",
            "translation": "Neighbor",
            "example": "Mein Nachbar ist sehr freundlich.",
            "exampleTranslation": "My neighbor is very friendly.",
            "emoji": "👤"
        }
    ],
    "kleidung": [
        {
            "word": "das Kleid",
            "translation": "Dress",
            "example": "Sie trägt ein rotes Kleid.",
            "exampleTranslation": "She wears a red dress.",
            "emoji": "👗"
        },
        {
            "word": "die Hose",
            "translation": "Pants",
            "example": "Die Hose ist blau und lang.",
            "exampleTranslation": "The pants are blue and long.",
            "emoji": "👖"
        },
        {
            "word": "das Hemd",
            "translation": "Shirt",
            "example": "Mein Hemd ist weiß.",
            "exampleTranslation": "My shirt is white.",
            "emoji": "👔"
        },
        {
            "word": "die Jacke",
            "translation": "Jacket",
            "example": "Die Jacke schützt vor Wind.",
            "exampleTranslation": "The jacket protects against wind.",
            "emoji": "🧥"
        },
        {
            "word": "der Schuh",
            "translation": "Shoe",
            "example": "Ich kaufe neue Schuhe.",
            "exampleTranslation": "I buy new shoes.",
            "emoji": "👞"
        },
        {
            "word": "der Rock",
            "translation": "Skirt",
            "example": "Sie trägt einen grünen Rock.",
            "exampleTranslation": "She wears a green skirt.",
            "emoji": "👗"
        },
        {
            "word": "der Mantel",
            "translation": "Coat",
            "example": "Im Winter brauche ich einen Mantel.",
            "exampleTranslation": "In winter I need a coat.",
            "emoji": "🧥"
        },
        {
            "word": "das T-Shirt",
            "translation": "T-Shirt",
            "example": "Er trägt ein gelbes T-Shirt.",
            "exampleTranslation": "He wears a yellow T-shirt.",
            "emoji": "👕"
        },
        {
            "word": "tragen",
            "translation": "to wear",
            "example": "Ich trage eine Brille.",
            "exampleTranslation": "I wear glasses.",
            "emoji": "👓"
        },
        {
            "word": "die Größe",
            "translation": "Size",
            "example": "Welche Größe haben Sie?",
            "exampleTranslation": "What size do you have?",
            "emoji": "📏"
        },
        {
            "word": "anziehen",
            "translation": "to put on",
            "example": "Ich ziehe meine Schuhe an.",
            "exampleTranslation": "I put on my shoes.",
            "emoji": "👟"
        },
        {
            "word": "ausziehen",
            "translation": "to take off",
            "example": "Ziehen Sie den Mantel aus.",
            "exampleTranslation": "Take off the coat.",
            "emoji": "🧥"
        },
        {
            "word": "die Socke",
            "translation": "Sock",
            "example": "Ich brauche neue Socken.",
            "exampleTranslation": "I need new socks.",
            "emoji": "🧦"
        },
        {
            "word": "die Mütze",
            "translation": "Cap",
            "example": "Im Winter trage ich eine Mütze.",
            "exampleTranslation": "In winter I wear a cap.",
            "emoji": "🧢"
        },
        {
            "word": "der Hut",
            "translation": "Hat",
            "example": "Er trägt einen großen Hut.",
            "exampleTranslation": "He wears a big hat.",
            "emoji": "🎩"
        },
        {
            "word": "der Pullover",
            "translation": "Sweater",
            "example": "Der Pullover hält mich warm.",
            "exampleTranslation": "The sweater keeps me warm.",
            "emoji": "🧶"
        },
        {
            "word": "der Gürtel",
            "translation": "Belt",
            "example": "Mein Gürtel ist zu kurz.",
            "exampleTranslation": "My belt is too short.",
            "emoji": "👔"
        },
        {
            "word": "die Handschuhe",
            "translation": "Gloves",
            "example": "Ich trage Handschuhe im Schnee.",
            "exampleTranslation": "I wear gloves in the snow.",
            "emoji": "🧤"
        },
        {
            "word": "waschen",
            "translation": "to wash",
            "example": "Ich muss meine Kleidung waschen.",
            "exampleTranslation": "I must wash my clothes.",
            "emoji": "🧺"
        },
        {
            "word": "schmutzig",
            "translation": "dirty",
            "example": "Meine Hose ist schmutzig.",
            "exampleTranslation": "My pants are dirty.",
            "emoji": "🧺"
        }
    ],
    "essen": [
        {
            "word": "das Brot",
            "translation": "Bread",
            "example": "Ich esse Brot zum Frühstück.",
            "exampleTranslation": "I eat bread for breakfast.",
            "emoji": "🍞"
        },
        {
            "word": "das Wasser",
            "translation": "Water",
            "example": "Ich trinke ein Glas Wasser.",
            "exampleTranslation": "I drink a glass of water.",
            "emoji": "🥛"
        },
        {
            "word": "das Obst",
            "translation": "Fruit",
            "example": "Obst ist sehr gesund.",
            "exampleTranslation": "Fruit is very healthy.",
            "emoji": "🍎"
        },
        {
            "word": "das Gemüse",
            "translation": "Vegetables",
            "example": "Wir kaufen frisches Gemüse.",
            "exampleTranslation": "We buy fresh vegetables.",
            "emoji": "🥕"
        },
        {
            "word": "der Apfel",
            "translation": "Apple",
            "example": "Ich esse einen roten Apfel.",
            "exampleTranslation": "I eat a red apple.",
            "emoji": "🍎"
        },
        {
            "word": "die Milch",
            "translation": "Milk",
            "example": "Ich trinke Kaffee mit Milch.",
            "exampleTranslation": "I drink coffee with milk.",
            "emoji": "🥛"
        },
        {
            "word": "der Käse",
            "translation": "Cheese",
            "example": "Das Brot schmeckt gut mit Käse.",
            "exampleTranslation": "The bread tastes good with cheese.",
            "emoji": "🧀"
        },
        {
            "word": "das Fleisch",
            "translation": "Meat",
            "example": "Er isst kein Fleisch.",
            "exampleTranslation": "He eats no meat.",
            "emoji": "🥩"
        },
        {
            "word": "der Fisch",
            "translation": "Fish",
            "example": "Der Fisch schwimmt im Wasser.",
            "exampleTranslation": "The fish swims in the water.",
            "emoji": "🐟"
        },
        {
            "word": "essen",
            "translation": "to eat",
            "example": "Wir essen heute Pizza.",
            "exampleTranslation": "We eat pizza today.",
            "emoji": "🍕"
        },
        {
            "word": "trinken",
            "translation": "to drink",
            "example": "Ich trinke gerne Tee.",
            "exampleTranslation": "I like to drink tea.",
            "emoji": "☕"
        },
        {
            "word": "das Restaurant",
            "translation": "Restaurant",
            "example": "Das Essen im Restaurant schmeckt lecker.",
            "exampleTranslation": "The food in the restaurant tastes delicious.",
            "emoji": "🍴"
        },
        {
            "word": "der Salat",
            "translation": "Salad",
            "example": "Ich esse einen frischen Salat.",
            "exampleTranslation": "I eat a fresh salad.",
            "emoji": "🥗"
        },
        {
            "word": "die Suppe",
            "translation": "Soup",
            "example": "Die Suppe schmeckt sehr gut.",
            "exampleTranslation": "The soup tastes very good.",
            "emoji": "🥣"
        },
        {
            "word": "das Hähnchen",
            "translation": "Chicken (food)",
            "example": "Heute gibt es Hähnchen mit Reis.",
            "exampleTranslation": "Today there is chicken with rice.",
            "emoji": "🍗"
        },
        {
            "word": "der Reis",
            "translation": "Rice",
            "example": "Er isst Reis zum Mittagessen.",
            "exampleTranslation": "He eats rice for lunch.",
            "emoji": "🍚"
        },
        {
            "word": "die Kartoffel",
            "translation": "Potato",
            "example": "Die Kartoffeln sind heiß.",
            "exampleTranslation": "The potatoes are hot.",
            "emoji": "🥔"
        },
        {
            "word": "das Salz",
            "translation": "Salt",
            "example": "Geben Sie mir bitte das Salz.",
            "exampleTranslation": "Please give me the salt.",
            "emoji": "🧂"
        },
        {
            "word": "der Zucker",
            "translation": "Sugar",
            "example": "Trinken Sie Kaffee mit Zucker?",
            "exampleTranslation": "Do you drink coffee with sugar?",
            "emoji": "🍬"
        },
        {
            "word": "lecker",
            "translation": "delicious",
            "example": "Der Kuchen ist sehr lecker.",
            "exampleTranslation": "The cake is very delicious.",
            "emoji": "😋"
        }
    ],
    "einkaufen": [
        {
            "word": "kaufen",
            "translation": "to buy",
            "example": "Ich kaufe heute ein Ticket.",
            "exampleTranslation": "I buy a ticket today.",
            "emoji": "🛒"
        },
        {
            "word": "bezahlen",
            "translation": "to pay",
            "example": "Ich bezahle an der Kasse.",
            "exampleTranslation": "I pay at the cash register.",
            "emoji": "💳"
        },
        {
            "word": "das Geld",
            "translation": "Money",
            "example": "Ich habe kein Geld dabei.",
            "exampleTranslation": "I have no money with me.",
            "emoji": "💵"
        },
        {
            "word": "teuer",
            "translation": "expensive",
            "example": "Das Auto ist zu teuer.",
            "exampleTranslation": "The car is too expensive.",
            "emoji": "💰"
        },
        {
            "word": "billig",
            "translation": "cheap",
            "example": "Die Äpfel sind billig.",
            "exampleTranslation": "The apples are cheap.",
            "emoji": "🏷️"
        },
        {
            "word": "das Geschäft",
            "translation": "Shop",
            "example": "Das Geschäft schließt um acht.",
            "exampleTranslation": "The shop closes at eight.",
            "emoji": "🏬"
        },
        {
            "word": "der Preis",
            "translation": "Price",
            "example": "Der Preis ist sehr gut.",
            "exampleTranslation": "The price is very good.",
            "emoji": "🏷️"
        },
        {
            "word": "die Kasse",
            "translation": "Cash desk / checkout",
            "example": "Wir zahlen an der Kasse.",
            "exampleTranslation": "We pay at the checkout.",
            "emoji": "🏦"
        },
        {
            "word": "kosten",
            "translation": "to cost",
            "example": "Wie viel kostet das?",
            "exampleTranslation": "How much does that cost?",
            "emoji": "❓"
        },
        {
            "word": "verkaufen",
            "translation": "to sell",
            "example": "Er verkauft sein Fahrrad.",
            "exampleTranslation": "He sells his bicycle.",
            "emoji": "🚲"
        },
        {
            "word": "die Tasche",
            "translation": "Bag",
            "example": "Meine Tasche ist schwer.",
            "exampleTranslation": "My bag is heavy.",
            "emoji": "👜"
        },
        {
            "word": "der Euro",
            "translation": "Euro",
            "example": "Das Buch kostet zehn Euro.",
            "exampleTranslation": "The book costs ten euros.",
            "emoji": "💶"
        },
        {
            "word": "das Sonderangebot",
            "translation": "Special offer",
            "example": "Die Bananen sind im Sonderangebot.",
            "exampleTranslation": "The bananas are on special offer.",
            "emoji": "🏷️"
        },
        {
            "word": "der Prospekt",
            "translation": "Brochure",
            "example": "Ich lese den Prospekt vom Supermarkt.",
            "exampleTranslation": "I read the brochure of the supermarket.",
            "emoji": "📄"
        },
        {
            "word": "die Tüte",
            "translation": "Bag",
            "example": "Brauchen Sie eine Tüte?",
            "exampleTranslation": "Do you need a bag?",
            "emoji": "🛍️"
        },
        {
            "word": "die Flasche",
            "translation": "Bottle",
            "example": "Eine Flasche Wasser, bitte.",
            "exampleTranslation": "A bottle of water, please.",
            "emoji": "🍾"
        },
        {
            "word": "das Kilo",
            "translation": "Kilogram",
            "example": "Ich nehme ein Kilo Tomaten.",
            "exampleTranslation": "I'll take a kilo of tomatoes.",
            "emoji": "⚖️"
        },
        {
            "word": "das Gramm",
            "translation": "Gram",
            "example": "Geben Sie mir zweihundert Gramm Käse.",
            "exampleTranslation": "Give me two hundred grams of cheese.",
            "emoji": "⚖️"
        },
        {
            "word": "der Markt",
            "translation": "Market",
            "example": "Wir kaufen frisches Gemüse auf dem Markt.",
            "exampleTranslation": "We buy fresh vegetables at the market.",
            "emoji": "🎪"
        },
        {
            "word": "die Quittung",
            "translation": "Receipt",
            "example": "Geben Sie mir bitte die Quittung.",
            "exampleTranslation": "Please give me the receipt.",
            "emoji": "📄"
        }
    ],
    "hobbys": [
        {
            "word": "spielen",
            "translation": "to play",
            "example": "Die Kinder spielen im Garten.",
            "exampleTranslation": "The children play in the garden.",
            "emoji": "⚽"
        },
        {
            "word": "das Hobby",
            "translation": "Hobby",
            "example": "Was ist dein Hobby?",
            "exampleTranslation": "What is your hobby?",
            "emoji": "🎨"
        },
        {
            "word": "schwimmen",
            "translation": "to swim",
            "example": "Er schwimmt im See.",
            "exampleTranslation": "He swims in the lake.",
            "emoji": "🏊"
        },
        {
            "word": "laufen",
            "translation": "to run",
            "example": "Er läuft jeden Morgen im Park.",
            "exampleTranslation": "He runs every morning in the park.",
            "emoji": "🏃"
        },
        {
            "word": "Fußball",
            "translation": "Football",
            "example": "Mein Bruder spielt Fußball.",
            "exampleTranslation": "My brother plays football.",
            "emoji": "⚽"
        },
        {
            "word": "singen",
            "translation": "to sing",
            "example": "Sie singt ein schönes Lied.",
            "exampleTranslation": "She sings a beautiful song.",
            "emoji": "🎤"
        },
        {
            "word": "tanzen",
            "translation": "to dance",
            "example": "Sie tanzen auf der Party.",
            "exampleTranslation": "They dance at the party.",
            "emoji": "💃"
        },
        {
            "word": "lesen",
            "translation": "to read",
            "example": "Er liest gerne Romane.",
            "exampleTranslation": "He likes to read novels.",
            "emoji": "📚"
        },
        {
            "word": "hören",
            "translation": "to listen/hear",
            "example": "Ich höre gerne Musik.",
            "exampleTranslation": "I like to listen to music.",
            "emoji": "🎧"
        },
        {
            "word": "der Sport",
            "translation": "Sport",
            "example": "Sport hält gesund und fit.",
            "exampleTranslation": "Sport keeps healthy and fit.",
            "emoji": "🏋️"
        },
        {
            "word": "das Fahrrad",
            "translation": "Bicycle",
            "example": "Er fährt mit dem Fahrrad zur Arbeit.",
            "exampleTranslation": "He rides to work by bicycle.",
            "emoji": "🚲"
        },
        {
            "word": "wandern",
            "translation": "to hike",
            "example": "Wir wandern am Wochenende in den Bergen.",
            "exampleTranslation": "We hike in the mountains on the weekend.",
            "emoji": "🥾"
        },
        {
            "word": "die Musik",
            "translation": "Music",
            "example": "Sie hört gerne klassische Musik.",
            "exampleTranslation": "She likes to listen to classical music.",
            "emoji": "🎵"
        },
        {
            "word": "das Klavier",
            "translation": "Piano",
            "example": "Er spielt jeden Tag Klavier.",
            "exampleTranslation": "He plays piano every day.",
            "emoji": "🎹"
        },
        {
            "word": "die Gitarre",
            "translation": "Guitar",
            "example": "Sie lernt Gitarre spielen.",
            "exampleTranslation": "She learns to play guitar.",
            "emoji": "🎸"
        },
        {
            "word": "das Kino",
            "translation": "Cinema",
            "example": "Wir gehen am Samstag ins Kino.",
            "exampleTranslation": "We go to the cinema on Saturday.",
            "emoji": "🎬"
        },
        {
            "word": "fotografieren",
            "translation": "to take photos",
            "example": "Sie fotografiert gerne Blumen.",
            "exampleTranslation": "She likes to take photos of flowers.",
            "emoji": "📷"
        },
        {
            "word": "kochen",
            "translation": "to cook",
            "example": "Kochen ist mein liebstes Hobby.",
            "exampleTranslation": "Cooking is my favorite hobby.",
            "emoji": "🍳"
        },
        {
            "word": "der Film",
            "translation": "Movie",
            "example": "Der Film war sehr spannend.",
            "exampleTranslation": "The movie was very exciting.",
            "emoji": "🎥"
        },
        {
            "word": "reisen",
            "translation": "to travel",
            "example": "Mein Hobby ist reisen.",
            "exampleTranslation": "My hobby is traveling.",
            "emoji": "✈️"
        }
    ],
    "reisen": [
        {
            "word": "reisen",
            "translation": "to travel",
            "example": "Wir reisen oft nach Spanien.",
            "exampleTranslation": "We travel to Spain often.",
            "emoji": "✈️"
        },
        {
            "word": "der Urlaub",
            "translation": "Vacation",
            "example": "Im Sommer haben wir Urlaub.",
            "exampleTranslation": "In the summer we have vacation.",
            "emoji": "🏖️"
        },
        {
            "word": "der Bahnhof",
            "translation": "Train station",
            "example": "Wir treffen uns am Bahnhof.",
            "exampleTranslation": "We meet at the train station.",
            "emoji": "🚉"
        },
        {
            "word": "das Ticket",
            "translation": "Ticket",
            "example": "Haben Sie Ihr Ticket gekauft?",
            "exampleTranslation": "Have you bought your ticket?",
            "emoji": "🎫"
        },
        {
            "word": "der Zug",
            "translation": "Train",
            "example": "Der Zug kommt auf Gleis drei an.",
            "exampleTranslation": "The train arrives on platform three.",
            "emoji": "🚆"
        },
        {
            "word": "der Bus",
            "translation": "Bus",
            "example": "Wir fahren mit dem Bus zum Park.",
            "exampleTranslation": "We go by bus to the park.",
            "emoji": "🚌"
        },
        {
            "word": "das Auto",
            "translation": "Car",
            "example": "Mein Auto steht vor dem Haus.",
            "exampleTranslation": "My car is in front of the house.",
            "emoji": "🚗"
        },
        {
            "word": "das Flugzeug",
            "translation": "Airplane",
            "example": "Das Flugzeug fliegt sehr hoch.",
            "exampleTranslation": "The airplane flies very high.",
            "emoji": "✈️"
        },
        {
            "word": "das Hotel",
            "translation": "Hotel",
            "example": "Wir übernachten im Hotel.",
            "exampleTranslation": "We stay overnight at the hotel.",
            "emoji": "🏨"
        },
        {
            "word": "das Gepäck",
            "translation": "Luggage",
            "example": "Bringen Sie Ihr Gepäck zum Hotel.",
            "exampleTranslation": "Bring your luggage to the hotel.",
            "emoji": "🧳"
        },
        {
            "word": "abfahren",
            "translation": "to depart",
            "example": "Der Zug fährt um neun Uhr ab.",
            "exampleTranslation": "The train departs at nine o'clock.",
            "emoji": "🚂"
        },
        {
            "word": "ankommen",
            "translation": "to arrive",
            "example": "Wir kommen morgen in Berlin an.",
            "exampleTranslation": "We arrive in Berlin tomorrow.",
            "emoji": "🏁"
        },
        {
            "word": "die Verspätung",
            "translation": "Delay",
            "example": "Der Zug hat heute Verspätung.",
            "exampleTranslation": "The train has a delay today.",
            "emoji": "⏱️"
        },
        {
            "word": "der Fahrplan",
            "translation": "Timetable",
            "example": "Wo kann ich den Fahrplan sehen?",
            "exampleTranslation": "Where can I see the timetable?",
            "emoji": "🗓️"
        },
        {
            "word": "der Sitzplatz",
            "translation": "Seat",
            "example": "Ich habe einen Sitzplatz reserviert.",
            "exampleTranslation": "I reserved a seat.",
            "emoji": "💺"
        },
        {
            "word": "die Auskunft",
            "translation": "Information desk",
            "example": "Fragen Sie an der Auskunft nach.",
            "exampleTranslation": "Ask at the information desk.",
            "emoji": "ℹ️"
        },
        {
            "word": "die Grenze",
            "translation": "Border",
            "example": "Wir überqueren die Grenze.",
            "exampleTranslation": "We cross the border.",
            "emoji": "🚧"
        },
        {
            "word": "der Koffer",
            "translation": "Suitcase",
            "example": "Mein Koffer ist sehr schwer.",
            "exampleTranslation": "My suitcase is very heavy.",
            "emoji": "🧳"
        },
        {
            "word": "die Auslandsreise",
            "translation": "Foreign trip",
            "example": "Er plant eine Auslandsreise.",
            "exampleTranslation": "He is planning a trip abroad.",
            "emoji": "🌐"
        },
        {
            "word": "der Reisepass",
            "translation": "Passport",
            "example": "Vergessen Sie Ihren Reisepass nicht.",
            "exampleTranslation": "Do not forget your passport.",
            "emoji": "🛂"
        }
    ],
    "verkehr": [
        {
            "word": "die S-Bahn",
            "translation": "Suburban train",
            "example": "Die S-Bahn fährt zum Hauptbahnhof.",
            "exampleTranslation": "The S-Bahn goes to the central station.",
            "emoji": "🚃"
        },
        {
            "word": "die U-Bahn",
            "translation": "Subway",
            "example": "Die U-Bahn fährt unter der Erde.",
            "exampleTranslation": "The subway runs underground.",
            "emoji": "🚇"
        },
        {
            "word": "die Haltestelle",
            "translation": "Bus/tram stop",
            "example": "Der Bus hält an der Haltestelle.",
            "exampleTranslation": "The bus stops at the bus stop.",
            "emoji": "🏏"
        },
        {
            "word": "die Straße",
            "translation": "Street",
            "example": "Die Straße ist breit und sauber.",
            "exampleTranslation": "The street is wide and clean.",
            "emoji": "🛣️"
        },
        {
            "word": "die Kreuzung",
            "translation": "Intersection",
            "example": "Gehen Sie an der Kreuzung links.",
            "exampleTranslation": "Go left at the intersection.",
            "emoji": "🚏"
        },
        {
            "word": "fahren",
            "translation": "to drive/go",
            "example": "Wir fahren morgen nach München.",
            "exampleTranslation": "We drive to Munich tomorrow.",
            "emoji": "🚗"
        },
        {
            "word": "das Fahrrad",
            "translation": "Bicycle",
            "example": "Ich fahre gerne Fahrrad.",
            "exampleTranslation": "I like to ride a bicycle.",
            "emoji": "🚲"
        },
        {
            "word": "die Fahrkarte",
            "translation": "Ticket",
            "example": "Ich kaufe eine Fahrkarte für den Zug.",
            "exampleTranslation": "I buy a ticket for the train.",
            "emoji": "🎫"
        },
        {
            "word": "das Gleis",
            "translation": "Track / platform",
            "example": "Der Zug fährt von Gleis vier ab.",
            "exampleTranslation": "The train departs from platform four.",
            "emoji": "🛤️"
        },
        {
            "word": "der Flug",
            "translation": "Flight",
            "example": "Mein Flug geht um zehn Uhr.",
            "exampleTranslation": "My flight departs at ten o'clock.",
            "emoji": "✈️"
        },
        {
            "word": "die Ampel",
            "translation": "Traffic light",
            "example": "Bleiben Sie bei Rot an der Ampel stehen.",
            "exampleTranslation": "Stop at the red traffic light.",
            "emoji": "🚦"
        },
        {
            "word": "fliegen",
            "translation": "to fly",
            "example": "Wir fliegen am Wochenende nach Indien.",
            "exampleTranslation": "We fly to India on the weekend.",
            "emoji": "✈️"
        },
        {
            "word": "das Motorrad",
            "translation": "Motorcycle",
            "example": "Sein Motorrad ist sehr schnell.",
            "exampleTranslation": "His motorcycle is very fast.",
            "emoji": "🏍️"
        },
        {
            "word": "der Fahrgast",
            "translation": "Passenger",
            "example": "Viele Fahrgäste warten am Gleis.",
            "exampleTranslation": "Many passengers are waiting on the platform.",
            "emoji": "👥"
        },
        {
            "word": "das Taxi",
            "translation": "Taxi",
            "example": "Wir nehmen ein Taxi zum Flughafen.",
            "exampleTranslation": "We take a taxi to the airport.",
            "emoji": "🚕"
        },
        {
            "word": "die Verspätung",
            "translation": "Delay",
            "example": "Der Bus hat fünf Minuten Verspätung.",
            "exampleTranslation": "The bus has a five-minute delay.",
            "emoji": "⏱️"
        },
        {
            "word": "die Fahrplanauskunft",
            "translation": "Timetable info",
            "example": "Ich hole eine Fahrplanauskunft.",
            "exampleTranslation": "I am getting timetable information.",
            "emoji": "ℹ️"
        },
        {
            "word": "der Bahnhof",
            "translation": "Train station",
            "example": "Der Bahnhof ist in der Nähe.",
            "exampleTranslation": "The train station is nearby.",
            "emoji": "🚉"
        },
        {
            "word": "die Autobahn",
            "translation": "Highway",
            "example": "Die Autobahn ist frei.",
            "exampleTranslation": "The highway is free.",
            "emoji": "🛣️"
        },
        {
            "word": "der Verkehr",
            "translation": "Traffic",
            "example": "Es gibt heute viel Verkehr.",
            "exampleTranslation": "There is a lot of traffic today.",
            "emoji": "🚗"
        }
    ],
    "stadt": [
        {
            "word": "die Stadt",
            "translation": "City",
            "example": "Die Stadt hat viele Sehenswürdigkeiten.",
            "exampleTranslation": "The city has many sights.",
            "emoji": "🏙️"
        },
        {
            "word": "der Park",
            "translation": "Park",
            "example": "Wir gehen im Park spazieren.",
            "exampleTranslation": "We go for a walk in the park.",
            "emoji": "🌳"
        },
        {
            "word": "das Museum",
            "translation": "Museum",
            "example": "Das Museum zeigt alte Bilder.",
            "exampleTranslation": "The museum shows old pictures.",
            "emoji": "🏛️"
        },
        {
            "word": "das Cafe",
            "translation": "Cafe",
            "example": "Ich trinke Kaffee im Cafe.",
            "exampleTranslation": "I drink coffee in the cafe.",
            "emoji": "☕"
        },
        {
            "word": "die Bank",
            "translation": "Bank",
            "example": "Ich hole Geld von der Bank.",
            "exampleTranslation": "I fetch money from the bank.",
            "emoji": "🏦"
        },
        {
            "word": "die Post",
            "translation": "Post office",
            "example": "Ich bringe das Paket zur Post.",
            "exampleTranslation": "I bring the package to the post office.",
            "emoji": "📯"
        },
        {
            "word": "die Bäckerei",
            "translation": "Bakery",
            "example": "Ich kaufe Brot in der Bäckerei.",
            "exampleTranslation": "I buy bread in the bakery.",
            "emoji": "🥖"
        },
        {
            "word": "der Markt",
            "translation": "Market",
            "example": "Am Samstag gehe ich auf den Markt.",
            "exampleTranslation": "On Saturday I go to the market.",
            "emoji": "🎪"
        },
        {
            "word": "die Kirche",
            "translation": "Church",
            "example": "Die Kirche ist sonntags geöffnet.",
            "exampleTranslation": "The church is open on Sundays.",
            "emoji": "⛪"
        },
        {
            "word": "die Apotheke",
            "translation": "Pharmacy",
            "example": "Ich hole Medizin in der Apotheke.",
            "exampleTranslation": "I fetch medicine in the pharmacy.",
            "emoji": "🏥"
        },
        {
            "word": "die Bibliothek",
            "translation": "Library",
            "example": "Ich lerne leise in der Bibliothek.",
            "exampleTranslation": "I learn quietly in the library.",
            "emoji": "📚"
        },
        {
            "word": "der Supermarkt",
            "translation": "Supermarket",
            "example": "Ich kaufe Milch im Supermarkt.",
            "exampleTranslation": "I buy milk in the supermarket.",
            "emoji": "🛒"
        },
        {
            "word": "das Rathaus",
            "translation": "Town hall",
            "example": "Das Rathaus steht im Zentrum.",
            "exampleTranslation": "The town hall stands in the center.",
            "emoji": "🏛️"
        },
        {
            "word": "das Hotel",
            "translation": "Hotel",
            "example": "Wir wohnen im Hotel Hilton.",
            "exampleTranslation": "We stay at the Hilton Hotel.",
            "emoji": "🏨"
        },
        {
            "word": "die Haltestelle",
            "translation": "Stop / station",
            "example": "Ich warte an der Haltestelle.",
            "exampleTranslation": "I wait at the bus/tram stop.",
            "emoji": "🏏"
        },
        {
            "word": "das Schloss",
            "translation": "Castle",
            "example": "Das Schloss ist sehr schön.",
            "exampleTranslation": "The castle is very beautiful.",
            "emoji": "🏰"
        },
        {
            "word": "der Fluss",
            "translation": "River",
            "example": "Der Fluss fließt durch die Stadt.",
            "exampleTranslation": "The river flows through the city.",
            "emoji": "🌊"
        },
        {
            "word": "die Brücke",
            "translation": "Bridge",
            "example": "Wir gehen über die Brücke.",
            "exampleTranslation": "We go across the bridge.",
            "emoji": "🌉"
        },
        {
            "word": "die Straße",
            "translation": "Street / road",
            "example": "Die Straße heißt Goethestraße.",
            "exampleTranslation": "The street is named Goethe street.",
            "emoji": "🛣️"
        },
        {
            "word": "das Zentrum",
            "translation": "City center",
            "example": "Wir fahren ins Zentrum.",
            "exampleTranslation": "We drive to the city center.",
            "emoji": "🏙️"
        }
    ],
    "schule": [
        {
            "word": "die Schule",
            "translation": "School",
            "example": "Die Schule ist am Nachmittag aus.",
            "exampleTranslation": "School is out in the afternoon.",
            "emoji": "🏫"
        },
        {
            "word": "lernen",
            "translation": "to learn",
            "example": "Die Schüler lernen Deutsch.",
            "exampleTranslation": "The students learn German.",
            "emoji": "🧠"
        },
        {
            "word": "das Buch",
            "translation": "Book",
            "example": "Das Buch hat viele Seiten.",
            "exampleTranslation": "The book has many pages.",
            "emoji": "📖"
        },
        {
            "word": "der Lehrer",
            "translation": "Teacher",
            "example": "Der Lehrer erklärt die Aufgabe.",
            "exampleTranslation": "The teacher explains the task.",
            "emoji": "👨‍🏫"
        },
        {
            "word": "die Klasse",
            "translation": "Class",
            "example": "Die Klasse hat zwanzig Schüler.",
            "exampleTranslation": "The class has twenty students.",
            "emoji": "👥"
        },
        {
            "word": "die Hausaufgabe",
            "translation": "Homework",
            "example": "Machst du deine Hausaufgabe?",
            "exampleTranslation": "Are you doing your homework?",
            "emoji": "📝"
        },
        {
            "word": "die Prüfung",
            "translation": "Exam",
            "example": "Die Prüfung beginnt um neun Uhr.",
            "exampleTranslation": "The exam starts at nine o'clock.",
            "emoji": "📝"
        },
        {
            "word": "der Schüler",
            "translation": "Student",
            "example": "Der Schüler schreibt einen Satz.",
            "exampleTranslation": "The student writes a sentence.",
            "emoji": "👦"
        },
        {
            "word": "schreiben",
            "translation": "to write",
            "example": "Wir schreiben eine E-Mail.",
            "exampleTranslation": "We write an email.",
            "emoji": "📧"
        },
        {
            "word": "verstehen",
            "translation": "to understand",
            "example": "Ich verstehe den Satz nicht.",
            "exampleTranslation": "I do not understand the sentence.",
            "emoji": "🤷"
        },
        {
            "word": "der Stift",
            "translation": "Pen",
            "example": "Haben Sie einen Stift für mich?",
            "exampleTranslation": "Do you have a pen for me?",
            "emoji": "🖊️"
        },
        {
            "word": "die Lektion",
            "translation": "Lesson",
            "example": "Wir beginnen Lektion eins.",
            "exampleTranslation": "We start lesson one.",
            "emoji": "📖"
        },
        {
            "word": "der Bleistift",
            "translation": "Pencil",
            "example": "Kann ich deinen Bleistift haben?",
            "exampleTranslation": "Can I have your pencil?",
            "emoji": "✏️"
        },
        {
            "word": "das Heft",
            "translation": "Exercise book",
            "example": "Schreiben Sie das ins Heft.",
            "exampleTranslation": "Write that in the exercise book.",
            "emoji": "📓"
        },
        {
            "word": "die Tafel",
            "translation": "Blackboard",
            "example": "Der Lehrer schreibt an die Tafel.",
            "exampleTranslation": "The teacher writes on the blackboard.",
            "emoji": "🪧"
        },
        {
            "word": "der Kugelschreiber",
            "translation": "Ballpoint pen",
            "example": "Der Kugelschreiber schreibt blau.",
            "exampleTranslation": "The pen writes blue.",
            "emoji": "🖊️"
        },
        {
            "word": "das Klassenzimmer",
            "translation": "Classroom",
            "example": "Das Klassenzimmer ist groß.",
            "exampleTranslation": "The classroom is big.",
            "emoji": "🏫"
        },
        {
            "word": "die Pause",
            "translation": "Break",
            "example": "In der Pause essen wir Äpfel.",
            "exampleTranslation": "During the break we eat apples.",
            "emoji": "🥪"
        },
        {
            "word": "die Note",
            "translation": "Grade",
            "example": "Er hat eine gute Note bekommen.",
            "exampleTranslation": "He got a good grade.",
            "emoji": "📝"
        },
        {
            "word": "das Zeugnis",
            "translation": "Report card",
            "example": "Er zeigt seinen Eltern das Zeugnis.",
            "exampleTranslation": "He shows his parents the report card.",
            "emoji": "📄"
        }
    ],
    "arbeit": [
        {
            "word": "der Beruf",
            "translation": "Profession",
            "example": "Was sind Sie von Beruf?",
            "exampleTranslation": "What is your profession?",
            "emoji": "💼"
        },
        {
            "word": "arbeiten",
            "translation": "to work",
            "example": "Ich arbeite bei einer Firma.",
            "exampleTranslation": "I work at a company.",
            "emoji": "💼"
        },
        {
            "word": "das Büro",
            "translation": "Office",
            "example": "Das Büro liegt im ersten Stock.",
            "exampleTranslation": "The office lies on the first floor.",
            "emoji": "🏢"
        },
        {
            "word": "der Chef",
            "translation": "Boss",
            "example": "Mein Chef ist freundlich.",
            "exampleTranslation": "My boss is friendly.",
            "emoji": "👨‍💼"
        },
        {
            "word": "der Job",
            "translation": "Job",
            "example": "Ich suche einen neuen Job.",
            "exampleTranslation": "I am looking for a new job.",
            "emoji": "💼"
        },
        {
            "word": "die Firma",
            "translation": "Company / firm",
            "example": "Die Firma stellt Software her.",
            "exampleTranslation": "The company produces software.",
            "emoji": "🏢"
        },
        {
            "word": "die Arbeit",
            "translation": "Work",
            "example": "Ich fahre um acht Uhr zur Arbeit.",
            "exampleTranslation": "I drive to work at eight o'clock.",
            "emoji": "💼"
        },
        {
            "word": "frei haben",
            "translation": "to have free time / off",
            "example": "Heute habe ich frei.",
            "exampleTranslation": "Today I have off.",
            "emoji": "🛋️"
        },
        {
            "word": "suchen",
            "translation": "to search / look for",
            "example": "Wir suchen einen neuen Mitarbeiter.",
            "exampleTranslation": "We are looking for a new employee.",
            "emoji": "🔍"
        },
        {
            "word": "finden",
            "translation": "to find",
            "example": "Ich kann meine Schlüssel nicht finden.",
            "exampleTranslation": "I cannot find my keys.",
            "emoji": "🔍"
        },
        {
            "word": "verdienen",
            "translation": "to earn",
            "example": "Er verdient viel Geld.",
            "exampleTranslation": "He earns a lot of money.",
            "emoji": "💵"
        },
        {
            "word": "die Besprechung",
            "translation": "Meeting",
            "example": "Die Besprechung beginnt um neun.",
            "exampleTranslation": "The meeting starts at nine.",
            "emoji": "💼"
        },
        {
            "word": "der Kollege",
            "translation": "Colleague",
            "example": "Mein Kollege hilft mir immer.",
            "exampleTranslation": "My colleague always helps me.",
            "emoji": "👥"
        },
        {
            "word": "die Arbeitszeit",
            "translation": "Working hours",
            "example": "Meine Arbeitszeit ist flexibel.",
            "exampleTranslation": "My working hours are flexible.",
            "emoji": "⏱️"
        },
        {
            "word": "arbeitslos",
            "translation": "unemployed",
            "example": "Er ist seit drei Monaten arbeitslos.",
            "exampleTranslation": "He has been unemployed for three months.",
            "emoji": "👤"
        },
        {
            "word": "die Stelle",
            "translation": "Job post",
            "example": "Ich habe eine neue Stelle gefunden.",
            "exampleTranslation": "I found a new job post.",
            "emoji": "💼"
        },
        {
            "word": "die Bewerbung",
            "translation": "Application",
            "example": "Ich schreibe eine Bewerbung.",
            "exampleTranslation": "I am writing an application.",
            "emoji": "📄"
        },
        {
            "word": "der Lebenslauf",
            "translation": "Resume / CV",
            "example": "Senden Sie uns Ihren Lebenslauf.",
            "exampleTranslation": "Send us your resume.",
            "emoji": "📄"
        },
        {
            "word": "der Vertrag",
            "translation": "Contract",
            "example": "Ich unterschreibe den Arbeitsvertrag.",
            "exampleTranslation": "I sign the employment contract.",
            "emoji": "✒️"
        },
        {
            "word": "die Überstunden",
            "translation": "Overtime",
            "example": "Er muss heute Überstunden machen.",
            "exampleTranslation": "He must do overtime today.",
            "emoji": "⏱️"
        }
    ],
    "technologie": [
        {
            "word": "das Handy",
            "translation": "Mobile phone",
            "example": "Mein Handy klingelt.",
            "exampleTranslation": "My phone is ringing.",
            "emoji": "📱"
        },
        {
            "word": "der Computer",
            "translation": "Computer",
            "example": "Ich arbeite am Computer.",
            "exampleTranslation": "I work on the computer.",
            "emoji": "💻"
        },
        {
            "word": "die E-Mail",
            "translation": "Email",
            "example": "Schreiben Sie mir eine E-Mail.",
            "exampleTranslation": "Write me an email.",
            "emoji": "📧"
        },
        {
            "word": "das Internet",
            "translation": "Internet",
            "example": "Wir surfen im Internet.",
            "exampleTranslation": "We surf the internet.",
            "emoji": "🌐"
        },
        {
            "word": "anrufen",
            "translation": "to call (phone)",
            "example": "Rufen Sie mich heute Abend an.",
            "exampleTranslation": "Call me tonight.",
            "emoji": "📞"
        },
        {
            "word": "die Nachricht",
            "translation": "Message",
            "example": "Ich habe eine Nachricht bekommen.",
            "exampleTranslation": "I received a message.",
            "emoji": "💬"
        },
        {
            "word": "das Telefon",
            "translation": "Telephone",
            "example": "Das Telefon steht auf dem Tisch.",
            "exampleTranslation": "The telephone is on the table.",
            "emoji": "📞"
        },
        {
            "word": "die Website",
            "translation": "Website",
            "example": "Die Website ist online.",
            "exampleTranslation": "The website is online.",
            "emoji": "🌐"
        },
        {
            "word": "online",
            "translation": "online",
            "example": "Sind Sie gerade online?",
            "exampleTranslation": "Are you online right now?",
            "emoji": "💻"
        },
        {
            "word": "tippen",
            "translation": "to type",
            "example": "Er tippt eine Nachricht.",
            "exampleTranslation": "He types a message.",
            "emoji": "⌨️"
        },
        {
            "word": "der Link",
            "translation": "Link",
            "example": "Klicken Sie auf den Link.",
            "exampleTranslation": "Click on the link.",
            "emoji": "🔗"
        },
        {
            "word": "das Passwort",
            "translation": "Password",
            "example": "Wie ist Ihr Passwort?",
            "exampleTranslation": "What is your password?",
            "emoji": "🔑"
        },
        {
            "word": "der Laptop",
            "translation": "Laptop",
            "example": "Mein Laptop ist neu und schnell.",
            "exampleTranslation": "My laptop is new and fast.",
            "emoji": "💻"
        },
        {
            "word": "die App",
            "translation": "Application",
            "example": "Ich lade eine neue App herunter.",
            "exampleTranslation": "I am downloading a new app.",
            "emoji": "📱"
        },
        {
            "word": "die Datei",
            "translation": "File",
            "example": "Bitte senden Sie mir die Datei.",
            "exampleTranslation": "Please send me the file.",
            "emoji": "📁"
        },
        {
            "word": "speichern",
            "translation": "to save",
            "example": "Vergessen Sie nicht zu speichern.",
            "exampleTranslation": "Don't forget to save.",
            "emoji": "💾"
        },
        {
            "word": "drucken",
            "translation": "to print",
            "example": "Ich muss das Dokument drucken.",
            "exampleTranslation": "I must print the document.",
            "emoji": "🖨️"
        },
        {
            "word": "der Drucker",
            "translation": "Printer",
            "example": "Der Drucker ist offline.",
            "exampleTranslation": "The printer is offline.",
            "emoji": "🖨️"
        },
        {
            "word": "das Tablet",
            "translation": "Tablet",
            "example": "Er liest Zeitung auf dem Tablet.",
            "exampleTranslation": "He reads the newspaper on the tablet.",
            "emoji": "📱"
        },
        {
            "word": "der Bildschirm",
            "translation": "Screen",
            "example": "Der Bildschirm ist sehr hell.",
            "exampleTranslation": "The screen is very bright.",
            "emoji": "🖥️"
        }
    ],
    "tagesablauf": [
        {
            "word": "aufstehen",
            "translation": "to get up",
            "example": "Ich stehe um sechs Uhr auf.",
            "exampleTranslation": "I get up at six o'clock.",
            "emoji": "🌅"
        },
        {
            "word": "schlafen",
            "translation": "to sleep",
            "example": "Die Katze schläft auf dem Sofa.",
            "exampleTranslation": "The cat sleeps on the sofa.",
            "emoji": "🛌"
        },
        {
            "word": "duschen",
            "translation": "to shower",
            "example": "Ich dusche am Morgen.",
            "exampleTranslation": "I shower in the morning.",
            "emoji": "🚿"
        },
        {
            "word": "frühstücken",
            "translation": "to eat breakfast",
            "example": "Wir frühstücken um sieben Uhr.",
            "exampleTranslation": "We eat breakfast at seven o'clock.",
            "emoji": "🍳"
        },
        {
            "word": "aufräumen",
            "translation": "to clean up",
            "example": "Er räumt sein Zimmer auf.",
            "exampleTranslation": "He cleans up his room.",
            "emoji": "🧹"
        },
        {
            "word": "fernsehen",
            "translation": "to watch TV",
            "example": "Am Abend sehen wir fern.",
            "exampleTranslation": "In the evening we watch TV.",
            "emoji": "📺"
        },
        {
            "word": "anfangen",
            "translation": "to begin / start",
            "example": "Der Unterricht fängt um acht an.",
            "exampleTranslation": "The class starts at eight.",
            "emoji": "⏱️"
        },
        {
            "word": "gehen",
            "translation": "to go",
            "example": "Wir gehen jetzt nach Hause.",
            "exampleTranslation": "We are going home now.",
            "emoji": "🚶"
        },
        {
            "word": "schlafen gehen",
            "translation": "to go to bed",
            "example": "Er geht um zehn Uhr schlafen.",
            "exampleTranslation": "He goes to bed at ten o'clock.",
            "emoji": "🛌"
        },
        {
            "word": "arbeiten",
            "translation": "to work",
            "example": "Ich arbeite den ganzen Tag.",
            "exampleTranslation": "I work all day.",
            "emoji": "💼"
        },
        {
            "word": "kochen",
            "translation": "to cook",
            "example": "Wir kochen Suppe zum Abendessen.",
            "exampleTranslation": "We cook soup for dinner.",
            "emoji": "🍳"
        },
        {
            "word": "einkaufen",
            "translation": "to shop",
            "example": "Wir kaufen im Supermarkt ein.",
            "exampleTranslation": "We shop at the supermarket.",
            "emoji": "🛒"
        },
        {
            "word": "wecken",
            "translation": "to wake",
            "example": "Der Wecker weckt mich um sechs.",
            "exampleTranslation": "The alarm clock wakes me at six.",
            "emoji": "⏰"
        },
        {
            "word": "waschen",
            "translation": "to wash",
            "example": "Ich wasche mein Gesicht.",
            "exampleTranslation": "I wash my face.",
            "emoji": "🧼"
        },
        {
            "word": "putzen",
            "translation": "to clean",
            "example": "Ich putze meine Zähne.",
            "exampleTranslation": "I brush my teeth.",
            "emoji": "🪥"
        },
        {
            "word": "die Hausarbeit",
            "translation": "Housework",
            "example": "Ich mache die Hausarbeit am Samstag.",
            "exampleTranslation": "I do the housework on Saturday.",
            "emoji": "🧹"
        },
        {
            "word": "ausruhen",
            "translation": "to rest",
            "example": "Nach der Arbeit ruhe ich mich aus.",
            "exampleTranslation": "After work, I rest.",
            "emoji": "🛋️"
        },
        {
            "word": "essen",
            "translation": "to eat",
            "example": "Wann essen wir zu Mittag?",
            "exampleTranslation": "When do we eat lunch?",
            "emoji": "🍴"
        },
        {
            "word": "trinken",
            "translation": "to drink",
            "example": "Ich trinke am Abend einen Tee.",
            "exampleTranslation": "I drink a tea in the evening.",
            "emoji": "☕"
        },
        {
            "word": "spazierengehen",
            "translation": "to go for a walk",
            "example": "Wir gehen im Park spazieren.",
            "exampleTranslation": "We are going for a walk in the park.",
            "emoji": "🚶"
        }
    ],
    "gesundheit": [
        {
            "word": "der Körper",
            "translation": "Body",
            "example": "Sport ist gut für den Körper.",
            "exampleTranslation": "Sport is good for the body.",
            "emoji": "🧍"
        },
        {
            "word": "die Hand",
            "translation": "Hand",
            "example": "Geben Sie mir Ihre Hand.",
            "exampleTranslation": "Give me your hand.",
            "emoji": "🖐️"
        },
        {
            "word": "der Kopf",
            "translation": "Head",
            "example": "Mein Kopf tut weh.",
            "exampleTranslation": "My head hurts.",
            "emoji": "👤"
        },
        {
            "word": "das Auge",
            "translation": "Eye",
            "example": "Er hat blaue Augen.",
            "exampleTranslation": "He has blue eyes.",
            "emoji": "👁️"
        },
        {
            "word": "das Ohr",
            "translation": "Ear",
            "example": "Das Ohr schmerzt.",
            "exampleTranslation": "The ear hurts.",
            "emoji": "👂"
        },
        {
            "word": "der Fuß",
            "translation": "Foot",
            "example": "Der linke Fuß tut weh.",
            "exampleTranslation": "The left foot hurts.",
            "emoji": "🦶"
        },
        {
            "word": "das Bein",
            "translation": "Leg",
            "example": "Sein Bein ist gebrochen.",
            "exampleTranslation": "His leg is broken.",
            "emoji": "🦵"
        },
        {
            "word": "gesund",
            "translation": "healthy",
            "example": "Äpfel essen hält gesund.",
            "exampleTranslation": "Eating apples keeps healthy.",
            "emoji": "🍏"
        },
        {
            "word": "krank",
            "translation": "sick",
            "example": "Er ist krank und bleibt im Bett.",
            "exampleTranslation": "He is sick and stays in bed.",
            "emoji": "🛌"
        },
        {
            "word": "der Schmerz",
            "translation": "Pain",
            "example": "Ich habe Kopfschmerzen.",
            "exampleTranslation": "I have a headache.",
            "emoji": "🤕"
        },
        {
            "word": "weh tun",
            "translation": "to hurt",
            "example": "Meine Augen tun weh.",
            "exampleTranslation": "My eyes hurt.",
            "emoji": "😭"
        },
        {
            "word": "das Fieber",
            "translation": "Fever",
            "example": "Er hat hohes Fieber.",
            "exampleTranslation": "He has a high fever.",
            "emoji": "🌡️"
        },
        {
            "word": "die Gesundheit",
            "translation": "Health",
            "example": "Gesundheit ist das Wichtigste.",
            "exampleTranslation": "Health is the most important thing.",
            "emoji": "🍏"
        },
        {
            "word": "der Husten",
            "translation": "Cough",
            "example": "Er hat einen starken Husten.",
            "exampleTranslation": "He has a strong cough.",
            "emoji": "😷"
        },
        {
            "word": "der Schnupfen",
            "translation": "Runny nose",
            "example": "Ich habe einen Schnupfen.",
            "exampleTranslation": "I have a runny nose.",
            "emoji": "🤧"
        },
        {
            "word": "die Grippe",
            "translation": "Flu",
            "example": "Er liegt mit Grippe im Bett.",
            "exampleTranslation": "He is in bed with the flu.",
            "emoji": "🤒"
        },
        {
            "word": "die Schmerzen",
            "translation": "Pains",
            "example": "Wo haben Sie Schmerzen?",
            "exampleTranslation": "Where do you have pain?",
            "emoji": "🤕"
        },
        {
            "word": "die Besserung",
            "translation": "Recovery",
            "example": "Gute Besserung, mein Freund!",
            "exampleTranslation": "Speedy recovery, my friend!",
            "emoji": "💐"
        },
        {
            "word": "der Finger",
            "translation": "Finger",
            "example": "Mein Finger blutet.",
            "exampleTranslation": "My finger is bleeding.",
            "emoji": "☝️"
        },
        {
            "word": "der Zahn",
            "translation": "Tooth",
            "example": "Er hat starke Zahnschmerzen.",
            "exampleTranslation": "He has strong toothache.",
            "emoji": "🦷"
        }
    ],
    "medizin": [
        {
            "word": "der Arzt",
            "translation": "Doctor",
            "example": "Der Arzt untersucht den Patienten.",
            "exampleTranslation": "The doctor examines the patient.",
            "emoji": "👨‍⚕️"
        },
        {
            "word": "das Krankenhaus",
            "translation": "Hospital",
            "example": "Er liegt im Krankenhaus.",
            "exampleTranslation": "He is in the hospital.",
            "emoji": "🏥"
        },
        {
            "word": "die Medizin",
            "translation": "Medicine",
            "example": "Nehmen Sie die Medizin dreimal täglich.",
            "exampleTranslation": "Take the medicine three times daily.",
            "emoji": "💊"
        },
        {
            "word": "das Rezept",
            "translation": "Prescription",
            "example": "Der Arzt gibt mir ein Rezept für Tabletten.",
            "exampleTranslation": "The doctor gives me a prescription for tablets.",
            "emoji": "📄"
        },
        {
            "word": "die Apotheke",
            "translation": "Pharmacy",
            "example": "Kaufen Sie die Medikamente in der Apotheke.",
            "exampleTranslation": "Buy the medications in the pharmacy.",
            "emoji": "🏥"
        },
        {
            "word": "die Tablette",
            "translation": "Tablet / pill",
            "example": "Ich nehme eine Tablette gegen Kopfschmerzen.",
            "exampleTranslation": "I take a pill for headache.",
            "emoji": "💊"
        },
        {
            "word": "die Praxis",
            "translation": "Doctor's practice",
            "example": "Die Praxis ist am Wochenende geschlossen.",
            "exampleTranslation": "The practice is closed on the weekend.",
            "emoji": "🏥"
        },
        {
            "word": "der Termin",
            "translation": "Appointment",
            "example": "Ich habe einen Termin beim Zahnarzt.",
            "exampleTranslation": "I have an appointment at the dentist.",
            "emoji": "📅"
        },
        {
            "word": "helfen",
            "translation": "to help",
            "example": "Der Arzt hilft mir, gesund zu werden.",
            "exampleTranslation": "The doctor helps me to get well.",
            "emoji": "🤝"
        },
        {
            "word": "untersuchen",
            "translation": "to examine",
            "example": "Der Arzt untersucht mein Knie.",
            "exampleTranslation": "The doctor examines my knee.",
            "emoji": "🩺"
        },
        {
            "word": "der Krankenwagen",
            "translation": "Ambulance",
            "example": "Der Krankenwagen fährt schnell zum Krankenhaus.",
            "exampleTranslation": "The ambulance drives fast to the hospital.",
            "emoji": "🚑"
        },
        {
            "word": "krankmelden",
            "translation": "to report sick",
            "example": "Ich muss mich heute krankmelden.",
            "exampleTranslation": "I must report sick today.",
            "emoji": "📞"
        },
        {
            "word": "das Pflaster",
            "translation": "Band-aid",
            "example": "Haben Sie ein Pflaster für mich?",
            "exampleTranslation": "Do you have a band-aid for me?",
            "emoji": "🩹"
        },
        {
            "word": "der Verband",
            "translation": "Bandage",
            "example": "Der Arzt legt einen Verband an.",
            "exampleTranslation": "The doctor applies a bandage.",
            "emoji": "🤕"
        },
        {
            "word": "das Fieberthermometer",
            "translation": "Thermometer",
            "example": "Wo ist das Fieberthermometer?",
            "exampleTranslation": "Where is the thermometer?",
            "emoji": "🌡️"
        },
        {
            "word": "die Krankenschwester",
            "translation": "Nurse",
            "example": "Die Krankenschwester hilft dem Arzt.",
            "exampleTranslation": "The nurse helps the doctor.",
            "emoji": "👩‍⚕️"
        },
        {
            "word": "die Krankenversicherung",
            "translation": "Health insurance",
            "example": "Haben Sie eine Krankenversicherung?",
            "exampleTranslation": "Do you have health insurance?",
            "emoji": "💳"
        },
        {
            "word": "die Drogerie",
            "translation": "Drugstore",
            "example": "Ich kaufe Duschgel in der Drogerie.",
            "exampleTranslation": "I buy shower gel in the drugstore.",
            "emoji": "🧴"
        },
        {
            "word": "das Schmerzmittel",
            "translation": "Painkiller",
            "example": "Ich brauche ein starkes Schmerzmittel.",
            "exampleTranslation": "I need a strong painkiller.",
            "emoji": "💊"
        },
        {
            "word": "gesundwerden",
            "translation": "to recover",
            "example": "Ich will schnell gesundwerden.",
            "exampleTranslation": "I want to recover quickly.",
            "emoji": "🍏"
        }
    ],
    "notfall": [
        {
            "word": "die Hilfe",
            "translation": "Help",
            "example": "Ich brauche dringend Hilfe.",
            "exampleTranslation": "I need help urgently.",
            "emoji": "🆘"
        },
        {
            "word": "helfen",
            "translation": "to help",
            "example": "Helfen Sie mir bitte!",
            "exampleTranslation": "Please help me!",
            "emoji": "🙏"
        },
        {
            "word": "der Unfall",
            "translation": "Accident",
            "example": "Es gab einen Unfall auf der Straße.",
            "exampleTranslation": "There was an accident on the street.",
            "emoji": "🚗"
        },
        {
            "word": "die Polizei",
            "translation": "Police",
            "example": "Rufen Sie sofort die Polizei!",
            "exampleTranslation": "Call the police immediately!",
            "emoji": "🚓"
        },
        {
            "word": "der Notarzt",
            "translation": "Emergency doctor",
            "example": "Der Notarzt kommt in wenigen Minuten.",
            "exampleTranslation": "The emergency doctor arrives in a few minutes.",
            "emoji": "🚑"
        },
        {
            "word": "die Feuerwehr",
            "translation": "Fire department",
            "example": "Die Feuerwehr löscht das Feuer.",
            "exampleTranslation": "The fire department extinguishes the fire.",
            "emoji": "🚒"
        },
        {
            "word": "Achtung",
            "translation": "Attention/Danger",
            "example": "Achtung, rutschig!",
            "exampleTranslation": "Attention, slippery!",
            "emoji": "⚠️"
        },
        {
            "word": "verloren",
            "translation": "lost",
            "example": "Ich habe meine Schlüssel verloren.",
            "exampleTranslation": "I lost my keys.",
            "emoji": "🕵️"
        },
        {
            "word": "stehlen",
            "translation": "to steal",
            "example": "Jemand hat mein Handy gestohlen.",
            "exampleTranslation": "Someone stole my phone.",
            "emoji": "🕵️"
        },
        {
            "word": "anrufen",
            "translation": "to call",
            "example": "Rufen Sie die Feuerwehr an.",
            "exampleTranslation": "Call the fire department.",
            "emoji": "📞"
        },
        {
            "word": "kaputt",
            "translation": "broken",
            "example": "Mein Auto ist kaputt.",
            "exampleTranslation": "My car is broken.",
            "emoji": "💥"
        },
        {
            "word": "die Gefahr",
            "translation": "Danger",
            "example": "Hier besteht Lebensgefahr.",
            "exampleTranslation": "Here exists danger to life.",
            "emoji": "🚨"
        },
        {
            "word": "der Diebstahl",
            "translation": "Theft",
            "example": "Ich melde einen Diebstahl.",
            "exampleTranslation": "I report a theft.",
            "emoji": "🕵️"
        },
        {
            "word": "brennen",
            "translation": "to burn",
            "example": "Das Haus brennt!",
            "exampleTranslation": "The house is burning!",
            "emoji": "🔥"
        },
        {
            "word": "verpassen",
            "translation": "to miss",
            "example": "Ich habe den Zug verpasst.",
            "exampleTranslation": "I missed the train.",
            "emoji": "🚉"
        },
        {
            "word": "der Notruf",
            "translation": "Emergency call",
            "example": "Wählen Sie den Notruf 112.",
            "exampleTranslation": "Dial the emergency number 112.",
            "emoji": "📞"
        },
        {
            "word": "sicher",
            "translation": "safe",
            "example": "Hier sind wir sicher vor Gefahr.",
            "exampleTranslation": "Here we are safe from danger.",
            "emoji": "🛡️"
        },
        {
            "word": "die Rettung",
            "translation": "Rescue",
            "example": "Die Rettung kam sehr schnell.",
            "exampleTranslation": "The rescue team arrived very quickly.",
            "emoji": "🚑"
        },
        {
            "word": "verletzt",
            "translation": "injured",
            "example": "Er ist bei dem Unfall verletzt worden.",
            "exampleTranslation": "He was injured in the accident.",
            "emoji": "🤕"
        },
        {
            "word": "der Ausweis",
            "translation": "ID card",
            "example": "Zeigen Sie mir Ihren Ausweis.",
            "exampleTranslation": "Show me your ID card.",
            "emoji": "🪪"
        }
    ],
    "tiere": [
        {
            "word": "der Hund",
            "translation": "Dog",
            "example": "Der Hund bellt laut.",
            "exampleTranslation": "The dog barks loudly.",
            "emoji": "🐕"
        },
        {
            "word": "die Katze",
            "translation": "Cat",
            "example": "Die Katze schläft auf dem Sofa.",
            "exampleTranslation": "The cat sleeps on the sofa.",
            "emoji": "🐈"
        },
        {
            "word": "die Kuh",
            "translation": "Cow",
            "example": "Die Kuh gibt frische Milch.",
            "exampleTranslation": "The cow gives fresh milk.",
            "emoji": "🐄"
        },
        {
            "word": "das Pferd",
            "translation": "Horse",
            "example": "Er reitet auf dem Pferd.",
            "exampleTranslation": "He rides on the horse.",
            "emoji": "🐎"
        },
        {
            "word": "der Vogel",
            "translation": "Bird",
            "example": "Der Vogel singt ein schönes Lied.",
            "exampleTranslation": "The bird sings a beautiful song.",
            "emoji": "🐦"
        },
        {
            "word": "der Fisch",
            "translation": "Fish",
            "example": "Der Fisch schwimmt im Wasser.",
            "exampleTranslation": "The fish swims in the water.",
            "emoji": "🐟"
        },
        {
            "word": "die Maus",
            "translation": "Mouse",
            "example": "Die Katze fängt die kleine Maus.",
            "exampleTranslation": "The cat catches the little mouse.",
            "emoji": "🐭"
        },
        {
            "word": "das Schwein",
            "translation": "Pig",
            "example": "Das Schwein wühlt in der Erde.",
            "exampleTranslation": "The pig digs in the dirt.",
            "emoji": "🐖"
        },
        {
            "word": "das Schaf",
            "translation": "Sheep",
            "example": "Das Schaf frisst Gras auf der Wiese.",
            "exampleTranslation": "The sheep eats grass on the meadow.",
            "emoji": "🐑"
        },
        {
            "word": "das Huhn",
            "translation": "Chicken",
            "example": "Das Huhn legt jeden Morgen ein Ei.",
            "exampleTranslation": "The chicken lays an egg every morning.",
            "emoji": "🐔"
        },
        {
            "word": "der Löwe",
            "translation": "Lion",
            "example": "Der Löwe ist der König der Tiere.",
            "exampleTranslation": "The lion is the king of animals.",
            "emoji": "🦁"
        },
        {
            "word": "der Elefant",
            "translation": "Elephant",
            "example": "Der Elefant ist sehr groß und stark.",
            "exampleTranslation": "The elephant is very big and strong.",
            "emoji": "🐘"
        },
        {
            "word": "die Ente",
            "translation": "Duck",
            "example": "Die Ente schwimmt auf dem See.",
            "exampleTranslation": "The duck swims on the lake.",
            "emoji": "🦆"
        },
        {
            "word": "der Hahn",
            "translation": "Rooster",
            "example": "Der Hahn kräht am Morgen.",
            "exampleTranslation": "The rooster crows in the morning.",
            "emoji": "🐓"
        },
        {
            "word": "die Gans",
            "translation": "Goose",
            "example": "Die Gans frisst Gras.",
            "exampleTranslation": "The goose eats grass.",
            "emoji": "🪿"
        },
        {
            "word": "die Ziege",
            "translation": "Goote",
            "example": "Die Ziege klettert auf den Berg.",
            "exampleTranslation": "The goat climbs the mountain.",
            "emoji": "🐐"
        },
        {
            "word": "der Esel",
            "translation": "Donkey",
            "example": "Der Esel trägt eine schwere Last.",
            "exampleTranslation": "The donkey carries a heavy load.",
            "emoji": "🫏"
        },
        {
            "word": "der Bär",
            "translation": "Bear",
            "example": "Der Bär lebt im tiefen Wald.",
            "exampleTranslation": "The bear lives in the deep forest.",
            "emoji": "🐻"
        },
        {
            "word": "der Hase",
            "translation": "Hare / rabbit",
            "example": "Der Hase läuft sehr schnell.",
            "exampleTranslation": "The rabbit runs very fast.",
            "emoji": "🐇"
        },
        {
            "word": "die Spinne",
            "translation": "Spider",
            "example": "Die Spinne webt ein Netz.",
            "exampleTranslation": "The spider weaves a web.",
            "emoji": "🕷"
        }
    ],
    "farben": [
        { "word": "rot", "translation": "Red", "example": "Das Auto ist rot.", "exampleTranslation": "The car is red.", "emoji": "🔴" },
        { "word": "blau", "translation": "Blue", "example": "Der Himmel ist heute blau.", "exampleTranslation": "The sky is blue today.", "emoji": "🔵" },
        { "word": "grün", "translation": "Green", "example": "Das Gras ist grün.", "exampleTranslation": "The grass is green.", "emoji": "🟢" },
        { "word": "gelb", "translation": "Yellow", "example": "Die Sonne ist gelb.", "exampleTranslation": "The sun is yellow.", "emoji": "🟡" },
        { "word": "schwarz", "translation": "Black", "example": "Die Katze ist schwarz.", "exampleTranslation": "The cat is black.", "emoji": "⚫" },
        { "word": "weiß", "translation": "White", "example": "Der Schnee ist weiß.", "exampleTranslation": "The snow is white.", "emoji": "⚪" },
        { "word": "orange", "translation": "Orange", "example": "Die Orange ist orange.", "exampleTranslation": "The orange is orange.", "emoji": "🟠" },
        { "word": "lila", "translation": "Purple / violet", "example": "Ihr Kleid ist lila.", "exampleTranslation": "Her dress is purple.", "emoji": "🟣" },
        { "word": "braun", "translation": "Brown", "example": "Der Bär ist braun.", "exampleTranslation": "The bear is brown.", "emoji": "🟤" },
        { "word": "rosa", "translation": "Pink", "example": "Das Baby trägt rosa Kleidung.", "exampleTranslation": "The baby wears pink clothing.", "emoji": "🌸" },
        { "word": "grau", "translation": "Grey", "example": "Die Wolken sind grau.", "exampleTranslation": "The clouds are grey.", "emoji": "🩶" },
        { "word": "hell", "translation": "Light / bright", "example": "Das Zimmer ist hell.", "exampleTranslation": "The room is bright.", "emoji": "☀️" },
        { "word": "dunkel", "translation": "Dark", "example": "Es wird dunkel draußen.", "exampleTranslation": "It is getting dark outside.", "emoji": "🌑" },
        { "word": "bunt", "translation": "Colourful", "example": "Der Regenbogen ist sehr bunt.", "exampleTranslation": "The rainbow is very colourful.", "emoji": "🌈" },
        { "word": "golden", "translation": "Golden", "example": "Sie trägt einen goldenen Ring.", "exampleTranslation": "She wears a golden ring.", "emoji": "🥇" }
    ],
    "koerper": [
        { "word": "der Kopf", "translation": "Head", "example": "Ich habe Kopfschmerzen.", "exampleTranslation": "I have a headache.", "emoji": "🧠" },
        { "word": "das Auge", "translation": "Eye", "example": "Sie hat blaue Augen.", "exampleTranslation": "She has blue eyes.", "emoji": "👁️" },
        { "word": "die Nase", "translation": "Nose", "example": "Meine Nase ist kalt.", "exampleTranslation": "My nose is cold.", "emoji": "👃" },
        { "word": "der Mund", "translation": "Mouth", "example": "Öffne den Mund, bitte.", "exampleTranslation": "Open your mouth, please.", "emoji": "👄" },
        { "word": "das Ohr", "translation": "Ear", "example": "Ich höre die Musik mit den Ohren.", "exampleTranslation": "I hear the music with my ears.", "emoji": "👂" },
        { "word": "die Hand", "translation": "Hand", "example": "Ich wasche mir die Hände.", "exampleTranslation": "I wash my hands.", "emoji": "🖐️" },
        { "word": "der Fuß", "translation": "Foot", "example": "Mein Fuß tut weh.", "exampleTranslation": "My foot hurts.", "emoji": "🦶" },
        { "word": "der Bauch", "translation": "Stomach / belly", "example": "Ich habe Bauchschmerzen.", "exampleTranslation": "I have a stomachache.", "emoji": "🫃" },
        { "word": "der Rücken", "translation": "Back", "example": "Mein Rücken schmerzt.", "exampleTranslation": "My back aches.", "emoji": "🦴" },
        { "word": "das Knie", "translation": "Knee", "example": "Er hat sich das Knie verletzt.", "exampleTranslation": "He injured his knee.", "emoji": "🦵" },
        { "word": "der Hals", "translation": "Throat / neck", "example": "Ich habe Halsschmerzen.", "exampleTranslation": "I have a sore throat.", "emoji": "🤕" },
        { "word": "die Schulter", "translation": "Shoulder", "example": "Er trägt die Tasche auf der Schulter.", "exampleTranslation": "He carries the bag on his shoulder.", "emoji": "💪" },
        { "word": "der Finger", "translation": "Finger", "example": "Sie zeigt mit dem Finger.", "exampleTranslation": "She points with her finger.", "emoji": "☝️" },
        { "word": "das Haar", "translation": "Hair", "example": "Sie hat langes blondes Haar.", "exampleTranslation": "She has long blonde hair.", "emoji": "💇" },
        { "word": "das Herz", "translation": "Heart", "example": "Das Herz schlägt schnell.", "exampleTranslation": "The heart beats fast.", "emoji": "❤️" }
    ],
    "musik": [
        { "word": "die Musik", "translation": "Music", "example": "Ich höre gerne Musik.", "exampleTranslation": "I like listening to music.", "emoji": "🎵" },
        { "word": "das Lied", "translation": "Song", "example": "Das Lied ist sehr schön.", "exampleTranslation": "The song is very beautiful.", "emoji": "🎶" },
        { "word": "das Klavier", "translation": "Piano", "example": "Sie spielt Klavier.", "exampleTranslation": "She plays the piano.", "emoji": "🎹" },
        { "word": "die Gitarre", "translation": "Guitar", "example": "Er spielt Gitarre in einer Band.", "exampleTranslation": "He plays guitar in a band.", "emoji": "🎸" },
        { "word": "die Geige", "translation": "Violin", "example": "Die Geige klingt wunderschön.", "exampleTranslation": "The violin sounds wonderful.", "emoji": "🎻" },
        { "word": "das Konzert", "translation": "Concert", "example": "Wir gehen morgen ins Konzert.", "exampleTranslation": "We are going to a concert tomorrow.", "emoji": "🎤" },
        { "word": "singen", "translation": "To sing", "example": "Die Kinder singen ein Lied.", "exampleTranslation": "The children sing a song.", "emoji": "🎙️" },
        { "word": "tanzen", "translation": "To dance", "example": "Sie tanzen auf der Bühne.", "exampleTranslation": "They dance on the stage.", "emoji": "💃" },
        { "word": "der Rhythmus", "translation": "Rhythm", "example": "Der Rhythmus ist sehr schnell.", "exampleTranslation": "The rhythm is very fast.", "emoji": "🥁" },
        { "word": "laut", "translation": "Loud", "example": "Die Musik ist zu laut.", "exampleTranslation": "The music is too loud.", "emoji": "🔊" },
        { "word": "leise", "translation": "Quiet / soft", "example": "Bitte sprich leiser!", "exampleTranslation": "Please speak more quietly!", "emoji": "🔉" },
        { "word": "die Band", "translation": "Band", "example": "Die Band spielt heute Abend.", "exampleTranslation": "The band plays tonight.", "emoji": "🎼" },
        { "word": "das Radio", "translation": "Radio", "example": "Ich höre jeden Morgen Radio.", "exampleTranslation": "I listen to the radio every morning.", "emoji": "📻" },
        { "word": "die Stimme", "translation": "Voice", "example": "Sie hat eine schöne Stimme.", "exampleTranslation": "She has a beautiful voice.", "emoji": "🗣️" },
        { "word": "der Chor", "translation": "Choir", "example": "Er singt im Kirchenchor.", "exampleTranslation": "He sings in the church choir.", "emoji": "🎵" }
    ],
    "natur": [
        { "word": "der Wald", "translation": "Forest", "example": "Wir machen einen Spaziergang im Wald.", "exampleTranslation": "We go for a walk in the forest.", "emoji": "🌲" },
        { "word": "der Fluss", "translation": "River", "example": "Der Fluss ist sehr breit.", "exampleTranslation": "The river is very wide.", "emoji": "🏞️" },
        { "word": "der Berg", "translation": "Mountain", "example": "Der Berg ist sehr hoch.", "exampleTranslation": "The mountain is very high.", "emoji": "⛰️" },
        { "word": "der See", "translation": "Lake", "example": "Wir schwimmen im See.", "exampleTranslation": "We swim in the lake.", "emoji": "🏖️" },
        { "word": "das Meer", "translation": "Sea / ocean", "example": "Das Meer ist heute ruhig.", "exampleTranslation": "The sea is calm today.", "emoji": "🌊" },
        { "word": "die Blume", "translation": "Flower", "example": "Die Blume ist sehr bunt.", "exampleTranslation": "The flower is very colourful.", "emoji": "🌸" },
        { "word": "der Baum", "translation": "Tree", "example": "Der Baum ist sehr alt.", "exampleTranslation": "The tree is very old.", "emoji": "🌳" },
        { "word": "das Gras", "translation": "Grass", "example": "Das Gras ist grün und frisch.", "exampleTranslation": "The grass is green and fresh.", "emoji": "🌿" },
        { "word": "der Strand", "translation": "Beach", "example": "Wir liegen am Strand.", "exampleTranslation": "We lie on the beach.", "emoji": "🏝️" },
        { "word": "der Himmel", "translation": "Sky", "example": "Der Himmel ist heute wolkenlos.", "exampleTranslation": "The sky is cloudless today.", "emoji": "☁️" },
        { "word": "die Sonne", "translation": "Sun", "example": "Die Sonne scheint sehr hell.", "exampleTranslation": "The sun shines very brightly.", "emoji": "☀️" },
        { "word": "der Regen", "translation": "Rain", "example": "Es gibt heute viel Regen.", "exampleTranslation": "There is a lot of rain today.", "emoji": "🌧️" },
        { "word": "der Schnee", "translation": "Snow", "example": "Im Winter gibt es oft Schnee.", "exampleTranslation": "In winter there is often snow.", "emoji": "❄️" },
        { "word": "der Stein", "translation": "Stone / rock", "example": "Der Stein liegt auf dem Boden.", "exampleTranslation": "The stone lies on the ground.", "emoji": "🪨" },
        { "word": "der Vogel", "translation": "Bird", "example": "Der Vogel singt am Morgen.", "exampleTranslation": "The bird sings in the morning.", "emoji": "🐦" }
    ],
    "sport_vocab": [
        { "word": "der Fußball", "translation": "Football / soccer", "example": "Er spielt jeden Tag Fußball.", "exampleTranslation": "He plays football every day.", "emoji": "⚽" },
        { "word": "schwimmen", "translation": "To swim", "example": "Sie schwimmt im Hallenbad.", "exampleTranslation": "She swims in the indoor pool.", "emoji": "🏊" },
        { "word": "laufen", "translation": "To run / jog", "example": "Er läuft jeden Morgen fünf Kilometer.", "exampleTranslation": "He runs five kilometres every morning.", "emoji": "🏃" },
        { "word": "das Fahrrad", "translation": "Bicycle", "example": "Sie fährt jeden Tag mit dem Fahrrad.", "exampleTranslation": "She cycles every day.", "emoji": "🚴" },
        { "word": "das Tennis", "translation": "Tennis", "example": "Wir spielen Tennis am Wochenende.", "exampleTranslation": "We play tennis at the weekend.", "emoji": "🎾" },
        { "word": "das Training", "translation": "Training / practice", "example": "Das Training beginnt um neun Uhr.", "exampleTranslation": "Training starts at nine o'clock.", "emoji": "🏋️" },
        { "word": "der Sport", "translation": "Sport", "example": "Sport macht Spaß!", "exampleTranslation": "Sport is fun!", "emoji": "🏅" },
        { "word": "gewinnen", "translation": "To win", "example": "Unser Team hat gewonnen!", "exampleTranslation": "Our team won!", "emoji": "🏆" },
        { "word": "verlieren", "translation": "To lose", "example": "Sie haben das Spiel verloren.", "exampleTranslation": "They lost the game.", "emoji": "😔" },
        { "word": "der Spieler", "translation": "Player", "example": "Der Spieler macht ein Tor.", "exampleTranslation": "The player scores a goal.", "emoji": "👟" },
        { "word": "das Tor", "translation": "Goal", "example": "Er schießt ein Tor.", "exampleTranslation": "He scores a goal.", "emoji": "🥅" },
        { "word": "die Mannschaft", "translation": "Team", "example": "Die Mannschaft trainiert jeden Tag.", "exampleTranslation": "The team trains every day.", "emoji": "👥" },
        { "word": "das Stadion", "translation": "Stadium", "example": "Das Stadion ist voll.", "exampleTranslation": "The stadium is full.", "emoji": "🏟️" },
        { "word": "klettern", "translation": "To climb", "example": "Die Kinder klettern auf den Baum.", "exampleTranslation": "The children climb the tree.", "emoji": "🧗" },
        { "word": "das Hallenbad", "translation": "Indoor swimming pool", "example": "Das Hallenbad ist morgens geöffnet.", "exampleTranslation": "The indoor pool is open in the mornings.", "emoji": "🏊" }
    ],
    "berufe": [
        { "word": "der Arzt", "translation": "Doctor (m)", "example": "Der Arzt untersucht den Patienten.", "exampleTranslation": "The doctor examines the patient.", "emoji": "👨‍⚕️" },
        { "word": "die Ärztin", "translation": "Doctor (f)", "example": "Die Ärztin gibt ein Rezept.", "exampleTranslation": "The doctor gives a prescription.", "emoji": "👩‍⚕️" },
        { "word": "der Lehrer", "translation": "Teacher (m)", "example": "Der Lehrer erklärt die Grammatik.", "exampleTranslation": "The teacher explains the grammar.", "emoji": "👨‍🏫" },
        { "word": "die Lehrerin", "translation": "Teacher (f)", "example": "Die Lehrerin korrigiert die Aufgaben.", "exampleTranslation": "The teacher corrects the exercises.", "emoji": "👩‍🏫" },
        { "word": "der Koch", "translation": "Cook / chef (m)", "example": "Der Koch kocht sehr gut.", "exampleTranslation": "The chef cooks very well.", "emoji": "👨‍🍳" },
        { "word": "der Polizist", "translation": "Police officer (m)", "example": "Der Polizist hilft den Touristen.", "exampleTranslation": "The police officer helps the tourists.", "emoji": "👮" },
        { "word": "der Feuerwehrmann", "translation": "Firefighter", "example": "Der Feuerwehrmann löscht das Feuer.", "exampleTranslation": "The firefighter extinguishes the fire.", "emoji": "👨‍🚒" },
        { "word": "der Ingenieur", "translation": "Engineer", "example": "Der Ingenieur baut eine Brücke.", "exampleTranslation": "The engineer builds a bridge.", "emoji": "👨‍💻" },
        { "word": "der Kellner", "translation": "Waiter", "example": "Der Kellner bringt das Essen.", "exampleTranslation": "The waiter brings the food.", "emoji": "🍽️" },
        { "word": "der Mechaniker", "translation": "Mechanic", "example": "Der Mechaniker repariert das Auto.", "exampleTranslation": "The mechanic repairs the car.", "emoji": "🔧" },
        { "word": "die Krankenschwester", "translation": "Nurse (f)", "example": "Die Krankenschwester nimmt Blut ab.", "exampleTranslation": "The nurse takes blood.", "emoji": "👩‍⚕️" },
        { "word": "der Pilot", "translation": "Pilot", "example": "Der Pilot fliegt nach New York.", "exampleTranslation": "The pilot flies to New York.", "emoji": "✈️" },
        { "word": "der Bäcker", "translation": "Baker", "example": "Der Bäcker backt frisches Brot.", "exampleTranslation": "The baker bakes fresh bread.", "emoji": "🥖" },
        { "word": "der Anwalt", "translation": "Lawyer", "example": "Der Anwalt hilft seinem Mandanten.", "exampleTranslation": "The lawyer helps his client.", "emoji": "⚖️" },
        { "word": "der Journalist", "translation": "Journalist", "example": "Der Journalist schreibt einen Artikel.", "exampleTranslation": "The journalist writes an article.", "emoji": "📰" }
    ],
    "gefuehle": [
        { "word": "glücklich", "translation": "Happy", "example": "Ich bin sehr glücklich heute.", "exampleTranslation": "I am very happy today.", "emoji": "😊" },
        { "word": "traurig", "translation": "Sad", "example": "Sie ist traurig, weil ihr Hund krank ist.", "exampleTranslation": "She is sad because her dog is sick.", "emoji": "😢" },
        { "word": "müde", "translation": "Tired", "example": "Ich bin sehr müde nach der Arbeit.", "exampleTranslation": "I am very tired after work.", "emoji": "😴" },
        { "word": "aufgeregt", "translation": "Excited", "example": "Die Kinder sind aufgeregt vor Weihnachten.", "exampleTranslation": "The children are excited before Christmas.", "emoji": "🤩" },
        { "word": "nervös", "translation": "Nervous", "example": "Er ist nervös vor dem Test.", "exampleTranslation": "He is nervous before the test.", "emoji": "😰" },
        { "word": "wütend", "translation": "Angry", "example": "Sie ist wütend auf ihn.", "exampleTranslation": "She is angry at him.", "emoji": "😠" },
        { "word": "überrascht", "translation": "Surprised", "example": "Er ist überrascht von der Nachricht.", "exampleTranslation": "He is surprised by the news.", "emoji": "😲" },
        { "word": "ängstlich", "translation": "Anxious / scared", "example": "Das Kind ist ängstlich im Dunkeln.", "exampleTranslation": "The child is scared in the dark.", "emoji": "😨" },
        { "word": "zufrieden", "translation": "Satisfied / content", "example": "Ich bin zufrieden mit meiner Arbeit.", "exampleTranslation": "I am satisfied with my work.", "emoji": "😌" },
        { "word": "stolz", "translation": "Proud", "example": "Die Eltern sind stolz auf ihr Kind.", "exampleTranslation": "The parents are proud of their child.", "emoji": "🦁" },
        { "word": "einsam", "translation": "Lonely", "example": "Er fühlt sich einsam in der neuen Stadt.", "exampleTranslation": "He feels lonely in the new city.", "emoji": "💔" },
        { "word": "verliebt", "translation": "In love", "example": "Sie ist verliebt in ihren Nachbarn.", "exampleTranslation": "She is in love with her neighbour.", "emoji": "😍" },
        { "word": "entspannt", "translation": "Relaxed", "example": "Nach dem Urlaub ist er sehr entspannt.", "exampleTranslation": "After the holiday he is very relaxed.", "emoji": "😎" },
        { "word": "neugierig", "translation": "Curious", "example": "Das Kind ist sehr neugierig.", "exampleTranslation": "The child is very curious.", "emoji": "🤔" },
        { "word": "dankbar", "translation": "Grateful", "example": "Ich bin sehr dankbar für Ihre Hilfe.", "exampleTranslation": "I am very grateful for your help.", "emoji": "🙏" }
    ],
    "haushalt": [
        { "word": "kochen", "translation": "To cook", "example": "Ich koche das Abendessen.", "exampleTranslation": "I am cooking dinner.", "emoji": "🍳" },
        { "word": "putzen", "translation": "To clean", "example": "Wir putzen das Haus am Samstag.", "exampleTranslation": "We clean the house on Saturday.", "emoji": "🧹" },
        { "word": "waschen", "translation": "To wash", "example": "Sie wäscht die Wäsche.", "exampleTranslation": "She washes the laundry.", "emoji": "🫧" },
        { "word": "bügeln", "translation": "To iron", "example": "Er bügelt die Hemden.", "exampleTranslation": "He irons the shirts.", "emoji": "👕" },
        { "word": "staubsaugen", "translation": "To vacuum", "example": "Ich staubsauge jeden Freitag.", "exampleTranslation": "I vacuum every Friday.", "emoji": "🫧" },
        { "word": "der Müll", "translation": "Rubbish / garbage", "example": "Bitte bring den Müll raus.", "exampleTranslation": "Please take the rubbish out.", "emoji": "🗑️" },
        { "word": "das Geschirr", "translation": "Dishes / crockery", "example": "Ich spüle das Geschirr nach dem Essen.", "exampleTranslation": "I wash the dishes after eating.", "emoji": "🍽️" },
        { "word": "die Spülmaschine", "translation": "Dishwasher", "example": "Räum die Spülmaschine aus.", "exampleTranslation": "Empty the dishwasher.", "emoji": "🔧" },
        { "word": "einkaufen", "translation": "To go shopping", "example": "Wir gehen einkaufen.", "exampleTranslation": "We go shopping.", "emoji": "🛒" },
        { "word": "aufräumen", "translation": "To tidy up", "example": "Räum bitte dein Zimmer auf!", "exampleTranslation": "Please tidy your room!", "emoji": "📦" },
        { "word": "der Herd", "translation": "Cooker / stove", "example": "Stell den Topf auf den Herd.", "exampleTranslation": "Put the pot on the stove.", "emoji": "🔥" },
        { "word": "der Kühlschrank", "translation": "Fridge / refrigerator", "example": "Die Milch steht im Kühlschrank.", "exampleTranslation": "The milk is in the fridge.", "emoji": "🧊" },
        { "word": "der Staubsauger", "translation": "Vacuum cleaner", "example": "Der Staubsauger ist kaputt.", "exampleTranslation": "The vacuum cleaner is broken.", "emoji": "🫧" },
        { "word": "das Handtuch", "translation": "Towel", "example": "Ich nehme ein frisches Handtuch.", "exampleTranslation": "I take a fresh towel.", "emoji": "🛁" },
        { "word": "die Waschmaschine", "translation": "Washing machine", "example": "Die Waschmaschine läuft gerade.", "exampleTranslation": "The washing machine is running.", "emoji": "🔄" }
    ],
    "nahrungsmittel": [
        { "word": "das Fleisch", "translation": "Meat", "example": "Er isst kein Fleisch.", "exampleTranslation": "He does not eat meat.", "emoji": "🥩" },
        { "word": "der Fisch", "translation": "Fish", "example": "Wir essen freitags oft Fisch.", "exampleTranslation": "We often eat fish on Fridays.", "emoji": "🐟" },
        { "word": "das Gemüse", "translation": "Vegetables", "example": "Gemüse ist sehr gesund.", "exampleTranslation": "Vegetables are very healthy.", "emoji": "🥦" },
        { "word": "das Obst", "translation": "Fruit", "example": "Ich esse täglich Obst.", "exampleTranslation": "I eat fruit every day.", "emoji": "🍎" },
        { "word": "die Nudeln", "translation": "Pasta / noodles", "example": "Nudeln sind sein Lieblingsessen.", "exampleTranslation": "Pasta is his favourite food.", "emoji": "🍝" },
        { "word": "der Reis", "translation": "Rice", "example": "Wir kochen Reis mit Gemüse.", "exampleTranslation": "We cook rice with vegetables.", "emoji": "🍚" },
        { "word": "die Suppe", "translation": "Soup", "example": "Die Suppe ist noch heiß.", "exampleTranslation": "The soup is still hot.", "emoji": "🍲" },
        { "word": "das Ei", "translation": "Egg", "example": "Ich esse zum Frühstück ein Ei.", "exampleTranslation": "I eat an egg for breakfast.", "emoji": "🥚" },
        { "word": "die Butter", "translation": "Butter", "example": "Er streicht Butter aufs Brot.", "exampleTranslation": "He spreads butter on the bread.", "emoji": "🧈" },
        { "word": "der Käse", "translation": "Cheese", "example": "Deutschland hat viele Käsesorten.", "exampleTranslation": "Germany has many types of cheese.", "emoji": "🧀" },
        { "word": "die Kartoffel", "translation": "Potato", "example": "Kartoffeln wachsen in der Erde.", "exampleTranslation": "Potatoes grow in the ground.", "emoji": "🥔" },
        { "word": "das Salz", "translation": "Salt", "example": "Zu viel Salz ist ungesund.", "exampleTranslation": "Too much salt is unhealthy.", "emoji": "🧂" },
        { "word": "der Zucker", "translation": "Sugar", "example": "Ich trinke Kaffee ohne Zucker.", "exampleTranslation": "I drink coffee without sugar.", "emoji": "🍬" },
        { "word": "das Öl", "translation": "Oil", "example": "Wir braten das Fleisch in Öl.", "exampleTranslation": "We fry the meat in oil.", "emoji": "🫙" },
        { "word": "die Tomate", "translation": "Tomato", "example": "Die Tomate ist rot und saftig.", "exampleTranslation": "The tomato is red and juicy.", "emoji": "🍅" }
    ],
    "jahreszeiten": [
        { "word": "der Frühling", "translation": "Spring", "example": "Im Frühling blühen die Blumen.", "exampleTranslation": "In spring the flowers bloom.", "emoji": "🌸" },
        { "word": "der Sommer", "translation": "Summer", "example": "Im Sommer ist es sehr heiß.", "exampleTranslation": "In summer it is very hot.", "emoji": "☀️" },
        { "word": "der Herbst", "translation": "Autumn", "example": "Im Herbst fallen die Blätter.", "exampleTranslation": "In autumn the leaves fall.", "emoji": "🍂" },
        { "word": "der Winter", "translation": "Winter", "example": "Im Winter schneit es oft.", "exampleTranslation": "In winter it often snows.", "emoji": "❄️" },
        { "word": "das Blatt", "translation": "Leaf", "example": "Das Blatt fällt vom Baum.", "exampleTranslation": "The leaf falls from the tree.", "emoji": "🍃" },
        { "word": "heiß", "translation": "Hot", "example": "Das Wasser ist sehr heiß.", "exampleTranslation": "The water is very hot.", "emoji": "🔥" },
        { "word": "kalt", "translation": "Cold", "example": "Es ist sehr kalt heute.", "exampleTranslation": "It is very cold today.", "emoji": "🥶" },
        { "word": "warm", "translation": "Warm", "example": "Das Wetter ist warm und sonnig.", "exampleTranslation": "The weather is warm and sunny.", "emoji": "🌤️" },
        { "word": "der Regenschirm", "translation": "Umbrella", "example": "Nimm den Regenschirm mit!", "exampleTranslation": "Take the umbrella with you!", "emoji": "☂️" },
        { "word": "der Frost", "translation": "Frost", "example": "Heute Nacht gibt es Frost.", "exampleTranslation": "There will be frost tonight.", "emoji": "🧊" },
        { "word": "das Gewitter", "translation": "Thunderstorm", "example": "Das Gewitter kommt schnell.", "exampleTranslation": "The thunderstorm comes quickly.", "emoji": "⛈️" },
        { "word": "der Nebel", "translation": "Fog / mist", "example": "Im Herbst gibt es oft Nebel.", "exampleTranslation": "In autumn there is often fog.", "emoji": "🌫️" },
        { "word": "blühen", "translation": "To bloom / blossom", "example": "Die Kirschbäume blühen im April.", "exampleTranslation": "The cherry trees blossom in April.", "emoji": "🌺" },
        { "word": "die Ernte", "translation": "Harvest", "example": "Im Herbst ist die Ernte.", "exampleTranslation": "In autumn is the harvest.", "emoji": "🌾" },
        { "word": "das Eis", "translation": "Ice", "example": "Das Eis auf dem See ist gefährlich.", "exampleTranslation": "The ice on the lake is dangerous.", "emoji": "🧊" }
    ]
};

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
        },
        {
            id: "pr_read_11",
            text: `<div class="document-box notice"><h3>Arztpraxis Dr. Becker</h3><p>Die Arztpraxis Dr. Becker ist vom 15. bis zum 22. August wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an Dr. Weber, Hauptstraße 10, Telefon: 555-1234.</p></div>`,
            question: "Die Praxis von Dr. Becker ist im August eine Woche geschlossen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The notice says the office is closed from August 15th to August 22nd, which is exactly one week.",
            topic: "Lesen",
            translation: "Doctor's office Dr. Becker. The doctor's office Dr. Becker is closed from August 15th to August 22nd due to holiday. In urgent cases, please contact Dr. Weber, Hauptstrasse 10, Phone: 555-1234.",
            questionTranslation: "Dr. Becker's office is closed for one week in August.",
            vocabSupport: [
                { word: "wegen Urlaub", translation: "due to vacation/holiday" },
                { word: "dringend", translation: "urgent" },
                { word: "wenden an", translation: "to contact/turn to" }
            ]
        },
        {
            id: "pr_read_12",
            text: `<div class="document-box letter"><h3>Pension Sonnenblick</h3><p>Sehr geehrte Familie Meier, wir bestätigen Ihre Reservierung für ein Dreibettzimmer vom 3. bis 6. September. Das Frühstück ist im Preis von 75 Euro pro Nacht enthalten. Herzliche Grüße, Pension Sonnenblick.</p></div>`,
            question: "Familie Meier muss extra für das Frühstück bezahlen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "The confirmation letter states that breakfast is included in the price ('Das Frühstück ist im Preis ... enthalten').",
            topic: "Lesen",
            translation: "Guesthouse Sonnenblick. Dear family Meier, we confirm your reservation for a triple room from September 3rd to 6th. Breakfast is included in the price of 75 Euros per night. Warm regards, Guesthouse Sonnenblick.",
            questionTranslation: "Family Meier has to pay extra for breakfast.",
            vocabSupport: [
                { word: "bestätigen", translation: "to confirm" },
                { word: "das Dreibettzimmer", translation: "triple room" },
                { word: "enthalten", translation: "included/contained" }
            ]
        },
        {
            id: "pr_read_13",
            text: `<div class="document-box notice"><h3>Deutschkurs A2</h3><p>Deutsch lernen am Abend! Unser neuer A2-Kurs beginnt am Montag, 12. Oktober. Der Unterricht findet immer montags und mittwochs von 18:30 bis 20:00 Uhr statt. Anmeldung online möglich.</p></div>`,
            question: "Der Deutschkurs findet zweimal in der Woche statt.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The flyer states the class takes place every Monday and Wednesday ('immer montags und mittwochs'), which is twice a week.",
            topic: "Lesen",
            translation: "German Course A2. Learn German in the evening! Our new A2 course starts on Monday, October 12th. Classes take place every Monday and Wednesday from 6:30 PM to 8:00 PM. Online registration available.",
            questionTranslation: "The German course takes place twice a week.",
            vocabSupport: [
                { word: "am Abend", translation: "in the evening" },
                { word: "stattfinden", translation: "to take place" },
                { word: "immer", translation: "always" }
            ]
        },
        {
            id: "pr_read_14",
            text: `<div class="document-box notice"><h3>Wetterwarnung</h3><p>Achtung: Am Dienstagabend gibt es im Süden von Deutschland starken Regen und Wind. Bitte bleiben Sie nach 18:00 Uhr zu Hause und schließen Sie alle Fenster.</p></div>`,
            question: "Am Dienstagabend soll man zu Hause bleiben.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The weather warning asks people to stay home after 6 PM ('Bitte bleiben Sie nach 18:00 Uhr zu Hause').",
            topic: "Lesen",
            translation: "Weather Warning. Attention: On Tuesday evening there is heavy rain and wind in the south of Germany. Please stay at home after 6:00 PM and close all windows.",
            questionTranslation: "One should stay at home on Tuesday evening.",
            vocabSupport: [
                { word: "Achtung", translation: "attention/warning" },
                { word: "schließen", translation: "to close" },
                { word: "der Süden", translation: "the south" }
            ]
        },
        {
            id: "pr_read_15",
            text: `<div class="document-box letter"><h3>Einladung zum Hoffest</h3><p>Liebe Nachbarn, wir laden euch herzlich zu unserem Hoffest am Samstag, 5. Juni, ab 15:00 Uhr ein. Für Essen und Getränke ist gesorgt. Bitte bringt gute Laune mit!</p></div>`,
            question: "Das Fest der Nachbarn fängt am Nachmittag an.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The invitation states the party starts at 3 PM ('ab 15:00 Uhr'), which is in the afternoon.",
            topic: "Lesen",
            translation: "Invitation to the Yard Party. Dear neighbors, we cordially invite you to our yard party on Saturday, June 5th, from 3:00 PM. Food and drinks are provided. Please bring good mood!",
            questionTranslation: "The neighbors' party starts in the afternoon.",
            vocabSupport: [
                { word: "herzlich", translation: "cordially/warmly" },
                { word: "die Nachbarn", translation: "neighbors" },
                { word: "gesorgt", translation: "provided/cared for" }
            ]
        },
        {
            id: "pr_read_16",
            text: `<div class="document-box notice"><h3>Fundbüro der Stadtwerke</h3><p>Haben Sie etwas im Bus oder in der S-Bahn verloren? Unser Fundbüro in der Bahnhofstraße 4 ist von Montag bis Donnerstag von 9:00 bis 16:00 Uhr geöffnet. Freitags geschlossen.</p></div>`,
            question: "Man kann am Freitag verlorene Sachen abholen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "The notice says the lost and found office is closed on Fridays ('Freitags geschlossen').",
            topic: "Lesen",
            translation: "Lost and Found of the City Utilities. Have you lost something on the bus or subway? Our lost and found office at Bahnhofstrasse 4 is open from Monday to Thursday from 9:00 AM to 4:00 PM. Closed on Fridays.",
            questionTranslation: "You can collect lost things on Friday.",
            vocabSupport: [
                { word: "verlieren", translation: "to lose" },
                { word: "abholen", translation: "to collect/pick up" },
                { word: "das Fundbüro", translation: "lost and found office" }
            ]
        },
        {
            id: "pr_read_17",
            text: `<div class="document-box notice"><h3>Restaurant Pizzeria Bella</h3><p>Pizzeria Bella. Neue Öffnungszeiten: Täglich geöffnet von 11:30 bis 14:30 Uhr und von 17:30 bis 22:30 Uhr. Dienstag ist Ruhetag. Telefonische Bestellung: 089-456789.</p></div>`,
            question: "Das Restaurant hat am Dienstag geschlossen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The notice states Tuesday is a rest day ('Dienstag ist Ruhetag'), which means it is closed.",
            topic: "Lesen",
            translation: "Restaurant Pizzeria Bella. New opening hours: Open daily from 11:30 AM to 2:30 PM and from 5:30 PM to 10:30 PM. Tuesday is rest day (closed). Phone order: 089-456789.",
            questionTranslation: "The restaurant is closed on Tuesday.",
            vocabSupport: [
                { word: "der Ruhetag", translation: "day of rest/closed day" },
                { word: "geöffnet", translation: "open" },
                { word: "täglich", translation: "daily" }
            ]
        },
        {
            id: "pr_read_18",
            text: `<div class="document-box note"><h3>Paketstation Information</h3><p>Guten Tag, Ihr Paket liegt ab heute in der Paketstation 104, Marktstraße. Bitte holen Sie es innerhalb von 7 Tagen mit dem Abholcode 8765 ab.</p></div>`,
            question: "Man muss das Paket heute abholen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "You have 7 days to collect the package ('innerhalb von 7 Tagen abholen'), so you don't have to pick it up today.",
            topic: "Lesen",
            translation: "Parcel Station Information. Good day, your package is located in parcel station 104, Marktstrasse from today. Please pick it up within 7 days using pick-up code 8765.",
            questionTranslation: "You must pick up the package today.",
            vocabSupport: [
                { word: "innerhalb", translation: "within" },
                { word: "abholen", translation: "to collect/pick up" },
                { word: "der Abholcode", translation: "pick-up code" }
            ]
        },
        {
            id: "pr_read_19",
            text: `<div class="document-box notice"><h3>Waschsalon Express</h3><p>Waschsalon Express: Geöffnet täglich von 6:00 bis 22:00 Uhr. Letzter Einlass um 21:00 Uhr. Bitte bringen Sie Ihr eigenes Waschmittel mit. Münzwechselautomat steht bereit.</p></div>`,
            question: "Man kann um 21:30 Uhr noch mit dem Waschen beginnen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 1,
            explanation: "The notice says the last entry is at 9:00 PM ('Letzter Einlass um 21:00 Uhr'), so you cannot enter or start after that.",
            topic: "Lesen",
            translation: "Laundromat Express. Open daily from 6:00 AM to 10:00 PM. Last admission at 9:00 PM. Please bring your own detergent. Coin change machine is ready.",
            questionTranslation: "One can still start washing at 9:30 PM.",
            vocabSupport: [
                { word: "der Einlass", translation: "admission/entry" },
                { word: "das Waschmittel", translation: "detergent" },
                { word: "bereitstehen", translation: "to stand ready" }
            ]
        },
        {
            id: "pr_read_20",
            text: `<div class="document-box notice"><h3>Hallenbad Aqua-Fun</h3><p>Hallenbad Aqua-Fun: Wegen Wartungsarbeiten bleibt das Hallenbad am kommenden Samstag (18. September) den ganzen Tag für Besucher geschlossen. Ab Sonntag normal geöffnet.</p></div>`,
            question: "Am Sonntag kann man wieder im Hallenbad schwimmen.",
            options: ["Richtig (True)", "Falsch (False)"],
            correct: 0,
            explanation: "The pool is only closed on Saturday; it opens normally starting from Sunday ('Ab Sonntag normal geöffnet').",
            topic: "Lesen",
            translation: "Indoor Pool Aqua-Fun. Indoor Pool Aqua-Fun: Due to maintenance work, the indoor pool remains closed to visitors all day this coming Saturday (September 18th). Normally open from Sunday.",
            questionTranslation: "On Sunday you can swim in the indoor pool again.",
            vocabSupport: [
                { word: "die Wartungsarbeiten", translation: "maintenance works" },
                { word: "geschlossen", translation: "closed" },
                { word: "kommend", translation: "coming/upcoming" }
            ]
        }
    ],
    listening: [
        {
            id: "pr_list_1",
            script: "Guten Tag, Volkshochschule Mainz, wie kann ich helfen? - Ich möchte mich für den Töpferkurs anmelden. Ist der Kurs für Anfänger geeignet? - Ja, absolut. Der Kurs startet nächste Woche Mittwoch und dauert zehn Wochen. Sie brauchen keine Vorkenntnisse. - Super, wie viele Plätze gibt es noch? - Noch drei freie Plätze.",
            question: "Wie viele freie Plätze gibt es noch im Töpferkurs?",
            options: ["Zwei Plätze", "Drei Plätze", "Fünf Plätze"],
            correct: 1,
            explanation: "The staff says: 'Noch drei freie Plätze.'",
            topic: "Hören",
            translation: "Good day, Adult Education Centre Mainz, how can I help? - I would like to register for the pottery course. Is the course suitable for beginners? - Yes, absolutely. The course starts next Wednesday and lasts ten weeks. You need no prior knowledge. - Great, how many places are there left? - Three places left.",
            vocabSupport: [
                { word: "der Töpferkurs", translation: "pottery course" },
                { word: "die Vorkenntnisse", translation: "prior knowledge" },
                { word: "der Platz", translation: "place / spot" }
            ]
        },
        {
            id: "pr_list_2",
            script: "Hallo, hier spricht Weber. Wir haben ein Problem mit dem Wasserhahn in der Küche. Er tropft die ganze Nacht. Können Sie heute noch kommen? - Leider haben wir heute keinen freien Termin mehr. Morgen früh um acht Uhr wäre möglich. - Ja, das ist gut. Ich bin zu Hause.",
            question: "Wann kommt der Klempner?",
            options: ["Heute Abend", "Morgen früh um acht Uhr", "Übermorgen"],
            correct: 1,
            explanation: "The plumber says: 'Morgen früh um acht Uhr wäre möglich.'",
            topic: "Hören",
            translation: "Hello, this is Weber speaking. We have a problem with the kitchen tap. It has been dripping all night. Can you come today? - Unfortunately we have no more free appointments today. Tomorrow morning at eight o'clock would be possible. - Yes, that is good. I will be at home.",
            vocabSupport: [
                { word: "der Wasserhahn", translation: "tap / faucet" },
                { word: "tropfen", translation: "to drip" },
                { word: "der Klempner", translation: "plumber" }
            ]
        },
        {
            id: "pr_list_3",
            script: "Hallo Karin. Hast du schon von dem neuen Gemeinschaftsgarten gehört? - Nein, was ist das? - Das ist ein Garten, den viele Nachbarn zusammen nutzen. Man kann Gemüse und Blumen pflanzen. Der Mitgliedsbeitrag ist nur fünf Euro pro Monat. - Das klingt toll! Wo ist der Garten? - Neben der alten Fabrik an der Mühlenstraße.",
            question: "Wo liegt der Gemeinschaftsgarten?",
            options: ["Neben dem Supermarkt", "Neben der alten Fabrik an der Mühlenstraße", "Im Stadtpark"],
            correct: 1,
            explanation: "The speaker says: 'Neben der alten Fabrik an der Mühlenstraße.'",
            topic: "Hören",
            translation: "Hello Karin. Have you heard about the new community garden? - No, what is that? - It is a garden that many neighbours use together. You can plant vegetables and flowers. The membership fee is only five euros per month. - That sounds great! Where is the garden? - Next to the old factory on Mühlenstraße.",
            vocabSupport: [
                { word: "der Gemeinschaftsgarten", translation: "community garden" },
                { word: "pflanzen", translation: "to plant" },
                { word: "der Mitgliedsbeitrag", translation: "membership fee" }
            ]
        },
        {
            id: "pr_list_4",
            script: "Guten Tag, Kundenservice Telekonto. Was kann ich für Sie tun? - Ich möchte meinen Handyvertrag wechseln. Ich zahle jetzt 35 Euro im Monat, aber ich brauche mehr Datenvolumen. - Wir haben ein Angebot für 29 Euro mit zehn Gigabyte. - Das ist billiger! Kann ich den Vertrag heute noch ändern? - Ja, die Änderung gilt ab dem ersten des nächsten Monats.",
            question: "Wann gilt der neue Handyvertrag?",
            options: ["Ab sofort", "Ab dem ersten des nächsten Monats", "Ab nächster Woche"],
            correct: 1,
            explanation: "The customer service agent says: 'die Änderung gilt ab dem ersten des nächsten Monats.'",
            topic: "Hören",
            translation: "Good day, Telekonto customer service. What can I do for you? - I would like to change my mobile phone contract. I currently pay 35 euros per month but I need more data. - We have an offer for 29 euros with ten gigabytes. - That is cheaper! Can I change the contract today? - Yes, the change takes effect from the first of next month.",
            vocabSupport: [
                { word: "der Handyvertrag", translation: "mobile phone contract" },
                { word: "das Datenvolumen", translation: "data allowance" },
                { word: "gelten", translation: "to apply / be valid" }
            ]
        },
        {
            id: "pr_list_5",
            script: "Guten Tag, Autowerkstatt Schnell. - Guten Tag. Mein Auto macht ein lautes Geräusch beim Bremsen. Können Sie es sich ansehen? - Ja, bringen Sie das Auto morgen Mittag vorbei. Wir schauen es uns direkt an. Haben Sie eine Telefonnummer, unter der wir Sie erreichen können? - Ja, 0171 445 33 22.",
            question: "Wann soll das Auto in die Werkstatt gebracht werden?",
            options: ["Heute Nachmittag", "Morgen Mittag", "Übermorgen früh"],
            correct: 1,
            explanation: "The mechanic says: 'bringen Sie das Auto morgen Mittag vorbei.'",
            topic: "Hören",
            translation: "Good day, Schnell car workshop. - Good day. My car makes a loud noise when braking. Can you look at it? - Yes, bring the car over tomorrow at midday. We will look at it straight away. Do you have a phone number we can reach you on? - Yes, 0171 445 33 22.",
            vocabSupport: [
                { word: "die Werkstatt", translation: "workshop / garage" },
                { word: "das Geräusch", translation: "noise / sound" },
                { word: "bremsen", translation: "to brake" }
            ]
        },
        {
            id: "pr_list_6",
            script: "Hallo, ich habe gelesen, dass Sie einen Chor haben. Kann ich mitmachen? - Ja, gerne! Wir proben jeden Donnerstag von 19 bis 21 Uhr in der Gemeindehalle. - Muss ich gut singen können? - Nein, Anfänger sind herzlich willkommen. Kommen Sie einfach nächsten Donnerstag vorbei. - Super, danke!",
            question: "Wann probt der Chor?",
            options: ["Jeden Mittwoch von 19 bis 21 Uhr", "Jeden Donnerstag von 19 bis 21 Uhr", "Jeden Freitag von 18 bis 20 Uhr"],
            correct: 1,
            explanation: "The choir member says: 'Wir proben jeden Donnerstag von 19 bis 21 Uhr.'",
            topic: "Hören",
            translation: "Hello, I read that you have a choir. Can I join? - Yes, of course! We rehearse every Thursday from 7 to 9 PM in the community hall. - Do I need to be able to sing well? - No, beginners are warmly welcome. Just come by next Thursday. - Great, thank you!",
            vocabSupport: [
                { word: "der Chor", translation: "choir" },
                { word: "proben", translation: "to rehearse" },
                { word: "herzlich willkommen", translation: "warmly welcome" }
            ]
        },
        {
            id: "pr_list_7",
            script: "Guten Tag, Lagerbox GmbH. - Ich suche eine kleine Lagerbox für ein paar Monate. Was kostet das? - Eine Box mit fünf Quadratmetern kostet 45 Euro pro Monat, mit zehn Quadratmetern kostet sie 80 Euro. - Fünf Quadratmeter reichen mir. Wann kann ich einziehen? - Ab sofort, Sie bringen nur Ihren Ausweis mit.",
            question: "Was muss der Kunde beim Einzug mitbringen?",
            options: ["Einen Mietvertrag", "Einen Ausweis", "Eine Kaution"],
            correct: 1,
            explanation: "The staff says: 'Sie bringen nur Ihren Ausweis mit.'",
            topic: "Hören",
            translation: "Good day, Lagerbox GmbH. - I am looking for a small storage unit for a few months. What does it cost? - A 5 square metre unit costs 45 euros per month, a 10 square metre one costs 80 euros. - Five square metres is enough for me. When can I move in? - Immediately, you just need to bring your ID.",
            vocabSupport: [
                { word: "die Lagerbox", translation: "storage unit" },
                { word: "der Quadratmeter", translation: "square metre" },
                { word: "der Ausweis", translation: "ID card" }
            ]
        },
        {
            id: "pr_list_8",
            script: "Guten Tag, hier ist Müller aus Wohnung 7. Die Heizung funktioniert seit gestern Abend nicht mehr. Es ist sehr kalt in der Wohnung. - Oh, das tut mir leid. Ich schicke heute noch einen Techniker vorbei. Können Sie zwischen 14 und 17 Uhr zu Hause sein? - Ja, ich bin den ganzen Nachmittag da.",
            question: "Was ist das Problem in der Wohnung?",
            options: ["Das Wasser funktioniert nicht", "Die Heizung funktioniert nicht", "Das Licht geht nicht an"],
            correct: 1,
            explanation: "The tenant says: 'Die Heizung funktioniert seit gestern Abend nicht mehr.'",
            topic: "Hören",
            translation: "Good day, this is Müller from apartment 7. The heating has not been working since yesterday evening. It is very cold in the apartment. - Oh, I am sorry. I will send a technician today. Can you be at home between 2 and 5 PM? - Yes, I will be there all afternoon.",
            vocabSupport: [
                { word: "die Heizung", translation: "heating" },
                { word: "funktionieren", translation: "to work / function" },
                { word: "der Techniker", translation: "technician" }
            ]
        },
        {
            id: "pr_list_9",
            script: "Guten Tag, Volkshochschule Dresden, was kann ich für Sie tun? - Ich möchte mich für den Computerkurs für Anfänger anmelden. Wann findet er statt? - Der Kurs findet dienstags und donnerstags von 18 bis 19:30 Uhr statt. Er beginnt am dritten Oktober. - Wie viel kostet der Kurs? - Sechzig Euro für sechs Wochen. - Gut, ich melde mich an.",
            question: "An welchen Tagen findet der Computerkurs statt?",
            options: ["Montags und mittwochs", "Dienstags und donnerstags", "Mittwochs und freitags"],
            correct: 1,
            explanation: "The staff says: 'Der Kurs findet dienstags und donnerstags von 18 bis 19:30 Uhr statt.'",
            topic: "Hören",
            translation: "Good day, Adult Education Centre Dresden, what can I do for you? - I would like to register for the beginner computer course. When does it take place? - The course takes place on Tuesdays and Thursdays from 6 to 7:30 PM. It starts on the third of October. - How much does the course cost? - Sixty euros for six weeks. - Good, I will register.",
            vocabSupport: [
                { word: "der Computerkurs", translation: "computer course" },
                { word: "der Anfänger", translation: "beginner" },
                { word: "sich anmelden", translation: "to register / sign up" }
            ]
        },
        {
            id: "pr_list_10",
            script: "Guten Tag, Finanzamt Hamburg-Mitte. - Guten Tag. Ich habe eine Frage zu meiner Steuererklärung. Bis wann muss ich sie einreichen? - Für das letzte Jahr ist der Abgabetermin der einunddreißigste Juli. - Und kann ich das online machen? - Ja, über das Portal ELSTER. Das ist kostenlos. - Danke schön.",
            question: "Bis wann muss die Steuererklärung eingereicht werden?",
            options: ["Bis zum dreißigsten Juni", "Bis zum einunddreißigsten Juli", "Bis zum ersten August"],
            correct: 1,
            explanation: "The tax officer says: 'der Abgabetermin ist der einunddreißigste Juli.'",
            topic: "Hören",
            translation: "Good day, Tax Office Hamburg-Mitte. - Good day. I have a question about my tax return. When do I have to submit it? - For last year the submission deadline is the thirty-first of July. - And can I do it online? - Yes, via the ELSTER portal. It is free of charge. - Thank you.",
            vocabSupport: [
                { word: "das Finanzamt", translation: "tax office" },
                { word: "die Steuererklärung", translation: "tax return" },
                { word: "der Abgabetermin", translation: "submission deadline" }
            ]
        }
    ],
    writingStudio: [
        // ── CATEGORY: PERSONAL ────────────────────────────────────────────────────
        {
            id: "ws_001",
            category: "Personal",
            categoryIcon: "👤",
            title: "Introduce Yourself",
            titleDE: "Stellen Sie sich vor",
            prompt: "Write a short text introducing yourself. Include your name, age, country of origin, your job or what you study, and one hobby.",
            promptDE: "Schreiben Sie einen kurzen Text und stellen Sie sich vor. Schreiben Sie über Ihren Namen, Ihr Alter, Ihr Herkunftsland, Ihren Beruf oder Ihr Studium und ein Hobby.",
            wordTarget: 40,
            vocab: [
                { word: "der Name", translation: "name", ml: "ഡേർ നാമെ" },
                { word: "das Alter", translation: "age", ml: "ദാസ് ആൽറ്റർ" },
                { word: "der Beruf", translation: "profession", ml: "ഡേർ ബെറൂഫ്" },
                { word: "das Hobby", translation: "hobby", ml: "ദാസ് ഹോബി" },
                { word: "kommen aus", translation: "to come from", ml: "കോമെൻ ഔസ്" },
                { word: "wohnen in", translation: "to live in", ml: "വോനെൻ ഇൻ" },
                { word: "lernen", translation: "to learn/study", ml: "ലേർണെൻ" },
                { word: "sprechen", translation: "to speak", ml: "ഷ്പ്രെഷെൻ" }
            ],
            expressions: [
                { de: "Ich heiße / Mein Name ist ...", en: "My name is ..." },
                { de: "Ich bin ... Jahre alt.", en: "I am ... years old." },
                { de: "Ich komme aus ...", en: "I come from ..." },
                { de: "Ich wohne in ...", en: "I live in ..." },
                { de: "Ich bin von Beruf ...", en: "My profession is ..." },
                { de: "In meiner Freizeit ... ich gern.", en: "In my free time I like to ..." },
                { de: "Ich lerne Deutsch, weil ...", en: "I am learning German because ..." }
            ],
            tips: [
                "Start with a greeting: Hallo! or Guten Tag!",
                "Use the present tense for everything.",
                "Keep each sentence short and clear.",
                "Write one idea per sentence.",
                "End with a polite closing: Viele Grüße."
            ],
            modelAnswer: "Hallo! Ich heiße Maria. Ich bin 28 Jahre alt und komme aus Indien. Ich wohne jetzt in Berlin. Ich bin Ingenieurin von Beruf. In meiner Freizeit lese ich gern und lerne Deutsch. Viele Grüße, Maria.",
            guidedScaffold: [
                { label: "Greeting", hint: "Start with Hallo! or Guten Tag!" },
                { label: "Name + Age", hint: "Ich heiße ... / Ich bin ... Jahre alt." },
                { label: "Origin + City", hint: "Ich komme aus ... / Ich wohne in ..." },
                { label: "Job or Studies", hint: "Ich bin ... von Beruf. / Ich studiere ..." },
                { label: "Hobby", hint: "In meiner Freizeit ... ich gern." },
                { label: "Closing", hint: "Viele Grüße, [Your Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich bin von Deutschland.", correct: "Ich komme aus Deutschland.", reason: "Use 'kommen aus' for origin, not 'sein von'." },
                { wrong: "Ich habe 28 Jahre.", correct: "Ich bin 28 Jahre alt.", reason: "In German, use 'sein' (to be) for age, not 'haben' (to have)." }
            ],
            checklist: ["Greeting included", "Name and age written", "Country of origin mentioned", "Job or study written", "Hobby mentioned", "Polite closing used"]
        },
        {
            id: "ws_002",
            category: "Personal",
            categoryIcon: "👤",
            title: "My Family",
            titleDE: "Meine Familie",
            prompt: "Write a short text about your family. Mention who is in your family, their names, ages, and what they do.",
            promptDE: "Schreiben Sie einen kurzen Text über Ihre Familie. Schreiben Sie, wer in Ihrer Familie ist, wie die Personen heißen, wie alt sie sind und was sie machen.",
            wordTarget: 40,
            vocab: [
                { word: "die Familie", translation: "family", ml: "ഡി ഫാമിലിയെ" },
                { word: "die Mutter", translation: "mother", ml: "ഡി മുട്ടർ" },
                { word: "der Vater", translation: "father", ml: "ഡേർ ഫാത്തർ" },
                { word: "der Bruder", translation: "brother", ml: "ഡേർ ബ്രൂഡർ" },
                { word: "die Schwester", translation: "sister", ml: "ഡി ഷ്വെസ്റ്റർ" },
                { word: "verheiratet", translation: "married", ml: "ഫെർഹൈരാറ്ററ്റ്" },
                { word: "arbeiten", translation: "to work", ml: "ആർബൈറ്റൻ" },
                { word: "wohnen", translation: "to live", ml: "വോനെൻ" }
            ],
            expressions: [
                { de: "Ich habe eine große / kleine Familie.", en: "I have a big / small family." },
                { de: "Meine Mutter heißt ...", en: "My mother's name is ..." },
                { de: "Mein Vater ist ... Jahre alt.", en: "My father is ... years old." },
                { de: "Er / Sie arbeitet als ...", en: "He / She works as ..." },
                { de: "Wir wohnen zusammen in ...", en: "We live together in ..." },
                { de: "Ich habe einen Bruder und eine Schwester.", en: "I have a brother and a sister." }
            ],
            tips: [
                "Describe each person in one or two sentences.",
                "Use 'Er' for males and 'Sie' for females.",
                "Use present tense throughout.",
                "Mention at least 2-3 family members.",
                "Include what each person does (works, studies, etc.)."
            ],
            modelAnswer: "Ich habe eine kleine Familie. Meine Mutter heißt Priya. Sie ist 55 Jahre alt und arbeitet als Lehrerin. Mein Vater heißt Rajan und ist Ingenieur. Ich habe auch einen Bruder. Er heißt Arun und studiert in Mumbai. Viele Grüße!",
            guidedScaffold: [
                { label: "Family size", hint: "Ich habe eine große / kleine Familie." },
                { label: "Mother", hint: "Meine Mutter heißt ... / Sie ist ... Jahre alt." },
                { label: "Father", hint: "Mein Vater heißt ... / Er arbeitet als ..." },
                { label: "Siblings", hint: "Ich habe einen Bruder / eine Schwester namens ..." },
                { label: "Where you live", hint: "Wir wohnen in ..." },
                { label: "Closing", hint: "Viele Grüße!" }
            ],
            commonMistakes: [
                { wrong: "Mein Mutter ist Lehrerin.", correct: "Meine Mutter ist Lehrerin.", reason: "'Mutter' is feminine, so use 'meine' not 'mein'." },
                { wrong: "Er hat 55 Jahre.", correct: "Er ist 55 Jahre alt.", reason: "Use 'sein' (to be) for age in German." }
            ],
            checklist: ["Family described", "At least 2 family members mentioned", "Ages or jobs included", "Correct pronouns used (er/sie)", "Closing included"]
        },
        {
            id: "ws_003",
            category: "Personal",
            categoryIcon: "👤",
            title: "My Hobby",
            titleDE: "Mein Hobby",
            prompt: "Write a short text about your hobby. Say what your hobby is, when and where you do it, and why you like it.",
            promptDE: "Schreiben Sie einen kurzen Text über Ihr Hobby. Sagen Sie, was Ihr Hobby ist, wann und wo Sie es machen und warum Sie es mögen.",
            wordTarget: 40,
            vocab: [
                { word: "das Hobby", translation: "hobby", ml: "ദാസ് ഹോബി" },
                { word: "die Freizeit", translation: "free time", ml: "ഡി ഫ്രൈറ്റ്സൈറ്റ്" },
                { word: "spielen", translation: "to play", ml: "ഷ്പീലൻ" },
                { word: "lesen", translation: "to read", ml: "ലേസൻ" },
                { word: "kochen", translation: "to cook", ml: "കോഖെൻ" },
                { word: "gern / gerne", translation: "gladly / like to", ml: "ഗേൺ / ഗേണെ" },
                { word: "oft", translation: "often", ml: "ഓഫ്റ്റ്" },
                { word: "am Wochenende", translation: "at the weekend", ml: "അം വോഖെൻഎൻഡെ" }
            ],
            expressions: [
                { de: "Mein Hobby ist ...", en: "My hobby is ..." },
                { de: "In meiner Freizeit ... ich gern.", en: "In my free time I like to ..." },
                { de: "Ich mache das jeden Tag / am Wochenende.", en: "I do this every day / at the weekend." },
                { de: "Das macht mir viel Spaß.", en: "This is a lot of fun for me." },
                { de: "Ich finde das sehr entspannend.", en: "I find that very relaxing." },
                { de: "Meine Freunde und ich ...", en: "My friends and I ..." }
            ],
            tips: [
                "Name your hobby clearly in the first sentence.",
                "Say how often you do it (jeden Tag, am Wochenende).",
                "Explain why you like it using 'weil' or 'Das macht Spaß'.",
                "Use the present tense throughout.",
                "Write 35-50 words."
            ],
            modelAnswer: "Mein Hobby ist Lesen. In meiner Freizeit lese ich gern Bücher auf Deutsch. Ich lese jeden Abend etwa 30 Minuten. Das macht mir viel Spaß und ich lerne dabei neue Wörter. Meine Lieblingsgenres sind Krimis und Reiseberichte. Viele Grüße!",
            guidedScaffold: [
                { label: "Name your hobby", hint: "Mein Hobby ist ... / Ich ... gern." },
                { label: "When / How often", hint: "Ich mache das jeden ... / am Wochenende." },
                { label: "Where", hint: "Ich ... zu Hause / im Park / im Verein." },
                { label: "Why you like it", hint: "Das macht mir Spaß. / Das ist sehr entspannend." },
                { label: "With whom", hint: "Ich mache das allein / mit Freunden." },
                { label: "Closing", hint: "Viele Grüße!" }
            ],
            commonMistakes: [
                { wrong: "Ich mag spielen Fußball.", correct: "Ich spiele gern Fußball.", reason: "In German, use 'gern' after the verb to express liking: 'Ich spiele gern'." },
                { wrong: "Das macht zu mir Spaß.", correct: "Das macht mir Spaß.", reason: "The dative 'mir' does not take a preposition here." }
            ],
            checklist: ["Hobby named clearly", "Frequency mentioned", "Location mentioned", "Reason for liking given", "Present tense used throughout", "Closing included"]
        },
        {
            id: "ws_004",
            category: "Personal",
            categoryIcon: "👤",
            title: "My Daily Routine",
            titleDE: "Mein Tagesablauf",
            prompt: "Write a short text about your daily routine. Describe what you do from morning to evening.",
            promptDE: "Schreiben Sie einen kurzen Text über Ihren Tagesablauf. Beschreiben Sie, was Sie vom Morgen bis zum Abend machen.",
            wordTarget: 50,
            vocab: [
                { word: "aufstehen", translation: "to get up", ml: "ഔഫ്സ്റ്റീൻ" },
                { word: "das Frühstück", translation: "breakfast", ml: "ദാസ് ഫ്രൂസ്റ്റുക്ക്" },
                { word: "zur Arbeit fahren", translation: "to go to work", ml: "ത്സുർ ആർബൈറ്റ് ഫാറെൻ" },
                { word: "zu Mittag essen", translation: "to have lunch", ml: "ത്സu മിറ്റാഗ് എസ്സെൻ" },
                { word: "nach Hause kommen", translation: "to come home", ml: "നാഹ് ഹൗസെ കോമെൻ" },
                { word: "schlafen gehen", translation: "to go to sleep", ml: "സ്ലാഫെൻ ഗേഹൻ" },
                { word: "meistens", translation: "mostly / usually", ml: "മൈസ്റ്റൻസ്" },
                { word: "danach", translation: "after that", ml: "ദാനാഹ്" }
            ],
            expressions: [
                { de: "Ich stehe um ... Uhr auf.", en: "I get up at ... o'clock." },
                { de: "Zuerst ..., dann ...", en: "First ..., then ..." },
                { de: "Um ... Uhr esse ich Frühstück.", en: "At ... I eat breakfast." },
                { de: "Danach fahre ich zur Arbeit.", en: "After that I go to work." },
                { de: "Am Abend ...", en: "In the evening ..." },
                { de: "Gegen ... Uhr gehe ich schlafen.", en: "Around ... I go to sleep." }
            ],
            tips: [
                "Use time expressions: um, zuerst, dann, danach, am Abend.",
                "List activities in chronological order.",
                "Use present tense.",
                "Give specific times (um 7 Uhr, um 12 Uhr).",
                "Keep each sentence short."
            ],
            modelAnswer: "Ich stehe jeden Morgen um 6 Uhr auf. Zuerst dusche ich und dann frühstücke ich. Um 8 Uhr fahre ich zur Arbeit. Ich arbeite bis 17 Uhr. Danach koche ich und esse zu Abend. Am Abend lese ich oder sehe fern. Gegen 22 Uhr gehe ich schlafen. Viele Grüße!",
            guidedScaffold: [
                { label: "Wake up time", hint: "Ich stehe um ... Uhr auf." },
                { label: "Morning routine", hint: "Zuerst ..., dann ..." },
                { label: "Work / School", hint: "Um ... Uhr fahre ich zur Arbeit / Schule." },
                { label: "Midday", hint: "Um 12 Uhr esse ich zu Mittag." },
                { label: "Evening", hint: "Am Abend ..." },
                { label: "Bedtime + Closing", hint: "Gegen ... Uhr gehe ich schlafen. Viele Grüße!" }
            ],
            commonMistakes: [
                { wrong: "Ich gehe schlafen um 22 Uhr.", correct: "Ich gehe um 22 Uhr schlafen.", reason: "In German main clauses, the verb comes second: time expressions push the verb to position 2." },
                { wrong: "Ich esse Frühstück am 7 Uhr.", correct: "Ich esse um 7 Uhr Frühstück.", reason: "Use 'um' for specific clock times, not 'am'." }
            ],
            checklist: ["Morning described", "Work/school mentioned", "Midday mentioned", "Evening described", "Bedtime mentioned", "Time expressions used", "Closing included"]
        },
        {
            id: "ws_005",
            category: "Personal",
            categoryIcon: "👤",
            title: "My House",
            titleDE: "Mein Haus / Meine Wohnung",
            prompt: "Write a short text about where you live. Describe your house or apartment — rooms, location, and what you like about it.",
            promptDE: "Schreiben Sie einen kurzen Text darüber, wo Sie wohnen. Beschreiben Sie Ihr Haus oder Ihre Wohnung — Zimmer, Lage und was Ihnen daran gefällt.",
            wordTarget: 45,
            vocab: [
                { word: "die Wohnung", translation: "apartment", ml: "ഡി വോനുംഗ്" },
                { word: "das Zimmer", translation: "room", ml: "ദാസ് സിമ്മർ" },
                { word: "das Schlafzimmer", translation: "bedroom", ml: "ദാസ് സ്ലാഫ്സിമ്മർ" },
                { word: "die Küche", translation: "kitchen", ml: "ഡി കുഷെ" },
                { word: "das Badezimmer", translation: "bathroom", ml: "ദാസ് ബാഡെസിമ്മർ" },
                { word: "das Wohnzimmer", translation: "living room", ml: "ദാസ് വോൻസിമ്മർ" },
                { word: "groß / klein", translation: "big / small", ml: "ഗ്രോസ് / ക്ലൈൻ" },
                { word: "im Zentrum", translation: "in the centre", ml: "ഇം സെൻട്രം" }
            ],
            expressions: [
                { de: "Ich wohne in einer Wohnung / in einem Haus.", en: "I live in an apartment / in a house." },
                { de: "Meine Wohnung hat ... Zimmer.", en: "My apartment has ... rooms." },
                { de: "Es gibt ein Schlafzimmer, eine Küche und ...", en: "There is a bedroom, a kitchen and ..." },
                { de: "Die Wohnung liegt im Zentrum / in der Nähe von ...", en: "The apartment is in the centre / near ..." },
                { de: "Ich mag meine Wohnung, weil ...", en: "I like my apartment because ..." },
                { de: "Sie ist sehr hell und gemütlich.", en: "It is very bright and cosy." }
            ],
            tips: [
                "Say what type of home you have (Haus or Wohnung).",
                "List the rooms with 'Es gibt ...' or 'Die Wohnung hat ...'.",
                "Describe the location.",
                "Add a personal opinion: 'Ich mag ...  weil ...'",
                "Use adjectives: groß, hell, ruhig, schön."
            ],
            modelAnswer: "Ich wohne in einer kleinen Wohnung in Berlin. Die Wohnung hat drei Zimmer: ein Schlafzimmer, ein Wohnzimmer und eine Küche. Es gibt auch ein Badezimmer. Die Wohnung liegt im Zentrum. Ich mag meine Wohnung, weil sie sehr hell und ruhig ist. Viele Grüße!",
            guidedScaffold: [
                { label: "Where you live", hint: "Ich wohne in einer Wohnung / einem Haus in ..." },
                { label: "Number of rooms", hint: "Die Wohnung hat ... Zimmer." },
                { label: "List rooms", hint: "Es gibt ein ..., eine ..., und ein ..." },
                { label: "Location", hint: "Die Wohnung liegt im Zentrum / in der Nähe von ..." },
                { label: "Opinion", hint: "Ich mag meine Wohnung, weil sie ... ist." },
                { label: "Closing", hint: "Viele Grüße!" }
            ],
            commonMistakes: [
                { wrong: "Ich wohne in ein Haus.", correct: "Ich wohne in einem Haus.", reason: "After 'in' (location), use the dative: 'einem' for masculine/neuter." },
                { wrong: "Die Wohnung hat drei Zimmer groß.", correct: "Die Wohnung ist groß und hat drei Zimmer.", reason: "Adjectives after 'ist' don't need endings (predicative use)." }
            ],
            checklist: ["Type of home mentioned", "Number of rooms given", "Rooms listed", "Location described", "Personal opinion included", "Closing included"]
        },

        // ── CATEGORY: MESSAGES ────────────────────────────────────────────────────
        {
            id: "ws_006",
            category: "Messages",
            categoryIcon: "💬",
            title: "Birthday Invitation",
            titleDE: "Geburtstagseinladung",
            prompt: "Write a short message to invite your friend Anna to your birthday party. Say when and where the party is and ask her to reply.",
            promptDE: "Schreiben Sie eine kurze Nachricht, um Ihre Freundin Anna zu Ihrer Geburtstagsparty einzuladen. Sagen Sie, wann und wo die Party ist, und bitten Sie um eine Antwort.",
            wordTarget: 40,
            vocab: [
                { word: "einladen", translation: "to invite", ml: "ഐൻലാഡെൻ" },
                { word: "die Party", translation: "party", ml: "ഡി പാർട്ടി" },
                { word: "der Geburtstag", translation: "birthday", ml: "ഡേർ ഗെബുർട്സ്റ്റാഗ്" },
                { word: "am Samstag", translation: "on Saturday", ml: "അം സാംസ്റ്റാഗ്" },
                { word: "um 19 Uhr", translation: "at 7 PM", ml: "ഉം നോയിൻസീൻ ഊർ" },
                { word: "kommen", translation: "to come", ml: "കോമെൻ" },
                { word: "die Antwort", translation: "reply / answer", ml: "ഡി ആൻറ്റ്വോർട്ട്" },
                { word: "mitbringen", translation: "to bring along", ml: "മിറ്റ്ബ്രിംഗൻ" }
            ],
            expressions: [
                { de: "Liebe Anna,", en: "Dear Anna," },
                { de: "Ich lade dich zu meiner Geburtstagsparty ein.", en: "I invite you to my birthday party." },
                { de: "Die Party ist am ... um ... Uhr.", en: "The party is on ... at ... o'clock." },
                { de: "Sie findet bei mir zu Hause statt.", en: "It takes place at my home." },
                { de: "Kannst du kommen?", en: "Can you come?" },
                { de: "Bitte schreib mir bald!", en: "Please write back soon!" },
                { de: "Viele Grüße, [Name]", en: "Best wishes, [Name]" }
            ],
            tips: [
                "Always start with 'Liebe [Name],' for female friends.",
                "Mention the date and time clearly.",
                "Ask a question: 'Kannst du kommen?'",
                "End with 'Viele Grüße' and your name.",
                "Keep it friendly and warm."
            ],
            modelAnswer: "Liebe Anna,\n\nIch lade dich herzlich zu meiner Geburtstagsparty ein! Die Party ist am Samstag, den 15. Juli, um 19 Uhr bei mir zu Hause. Es gibt Essen, Musik und viel Spaß! Kannst du kommen? Bitte schreib mir bald.\n\nViele Grüße,\nMaria",
            guidedScaffold: [
                { label: "Greeting", hint: "Liebe [Name]," },
                { label: "Invitation", hint: "Ich lade dich zu meiner Geburtstagsparty ein." },
                { label: "Date and time", hint: "Die Party ist am ... um ... Uhr." },
                { label: "Location", hint: "Sie findet bei mir zu Hause / in [Café/Restaurant] statt." },
                { label: "Question", hint: "Kannst du kommen?" },
                { label: "Closing", hint: "Bitte schreib mir bald! Viele Grüße, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich lade dich zu meiner Geburtstagsparty ein zu kommen.", correct: "Ich lade dich zu meiner Geburtstagsparty ein.", reason: "In German, 'einladen' already includes the meaning of inviting someone to come." },
                { wrong: "Die Party ist am Samstag um die 19 Uhr.", correct: "Die Party ist am Samstag um 19 Uhr.", reason: "Use 'um' alone before the time — no article needed." }
            ],
            checklist: ["Greeting with name", "Invitation stated clearly", "Date and time given", "Location mentioned", "Question asked", "Closing with name"]
        },
        {
            id: "ws_007",
            category: "Messages",
            categoryIcon: "💬",
            title: "Accept an Invitation",
            titleDE: "Eine Einladung annehmen",
            prompt: "Your friend Tom has invited you to his dinner party on Friday. Write a short message accepting the invitation. Say you are happy to come and ask what you can bring.",
            promptDE: "Ihr Freund Tom hat Sie zu seinem Abendessen am Freitag eingeladen. Schreiben Sie eine kurze Nachricht und nehmen Sie die Einladung an. Sagen Sie, dass Sie sich freuen zu kommen, und fragen Sie, was Sie mitbringen können.",
            wordTarget: 35,
            vocab: [
                { word: "annehmen", translation: "to accept", ml: "അൻനേമേൻ" },
                { word: "sich freuen", translation: "to be happy/look forward", ml: "സിഹ് ഫ്രോയൻ" },
                { word: "natürlich", translation: "of course", ml: "നാറ്റൂർലിഹ്" },
                { word: "gerne", translation: "gladly / with pleasure", ml: "ഗേണെ" },
                { word: "mitbringen", translation: "to bring along", ml: "മിറ്റ്ബ്രിംഗൻ" },
                { word: "das Abendessen", translation: "dinner", ml: "ദാസ് ആബെൻഡ്എസ്സെൻ" }
            ],
            expressions: [
                { de: "Lieber Tom,", en: "Dear Tom," },
                { de: "Danke für deine Einladung!", en: "Thank you for your invitation!" },
                { de: "Ich komme gerne!", en: "I would love to come!" },
                { de: "Ich freue mich sehr darauf.", en: "I am very much looking forward to it." },
                { de: "Was soll ich mitbringen?", en: "What should I bring?" },
                { de: "Bis Freitag! Viele Grüße,", en: "See you Friday! Best wishes," }
            ],
            tips: [
                "Start by thanking for the invitation.",
                "Confirm you are coming clearly.",
                "Show enthusiasm: 'Ich freue mich sehr!'",
                "Ask a follow-up question: 'Was soll ich mitbringen?'",
                "End warmly."
            ],
            modelAnswer: "Lieber Tom,\n\nDanke für deine Einladung! Ich komme natürlich gerne am Freitag. Ich freue mich sehr auf das Abendessen. Was soll ich mitbringen? Vielleicht etwas zu trinken oder einen Salat?\n\nBis Freitag! Viele Grüße,\nMaria",
            guidedScaffold: [
                { label: "Greeting", hint: "Lieber [Name], (for males) / Liebe [Name], (for females)" },
                { label: "Thank for invitation", hint: "Danke für deine Einladung!" },
                { label: "Accept", hint: "Ich komme gerne! / Natürlich komme ich!" },
                { label: "Express happiness", hint: "Ich freue mich sehr darauf." },
                { label: "Ask a question", hint: "Was soll ich mitbringen?" },
                { label: "Closing", hint: "Bis [day]! Viele Grüße, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich bin glücklich zu kommen.", correct: "Ich komme gerne!", reason: "In German, say 'Ich komme gerne' (I come gladly) rather than translating 'I am happy to come' literally." },
                { wrong: "Lieber Tom,", correct: "Lieber Tom, (correct for male) / Liebe Anna, (for female)", reason: "The adjective ending changes: 'Lieber' for males, 'Liebe' for females." }
            ],
            checklist: ["Greeting used", "Invitation thanked", "Acceptance confirmed", "Enthusiasm shown", "Follow-up question asked", "Closing with name"]
        },
        {
            id: "ws_008",
            category: "Messages",
            categoryIcon: "💬",
            title: "Decline an Invitation",
            titleDE: "Eine Einladung ablehnen",
            prompt: "Your colleague Klaus has invited you to a lunch on Thursday. Unfortunately you cannot come. Write a message politely declining and give a reason.",
            promptDE: "Ihr Kollege Klaus hat Sie zum Mittagessen am Donnerstag eingeladen. Leider können Sie nicht kommen. Schreiben Sie eine höfliche Nachricht und lehnen Sie ab. Geben Sie einen Grund an.",
            wordTarget: 35,
            vocab: [
                { word: "leider", translation: "unfortunately", ml: "ലൈഡർ" },
                { word: "absagen", translation: "to cancel / decline", ml: "അപ്സാഗൻ" },
                { word: "der Grund", translation: "reason", ml: "ഡേർ ഗ്രുണ്ട്" },
                { word: "einen Termin haben", translation: "to have an appointment", ml: "ഐനെൻ ടെർമീൻ ഹാബെൻ" },
                { word: "krank sein", translation: "to be ill", ml: "ക്രാങ്ക് സൈൻ" },
                { word: "das nächste Mal", translation: "next time", ml: "ദാസ് നെഹ്സ്റ്റെ മാല്" }
            ],
            expressions: [
                { de: "Lieber Klaus,", en: "Dear Klaus," },
                { de: "Vielen Dank für deine Einladung!", en: "Thank you very much for your invitation!" },
                { de: "Leider kann ich am Donnerstag nicht kommen.", en: "Unfortunately I cannot come on Thursday." },
                { de: "Ich habe leider schon einen anderen Termin.", en: "Unfortunately I already have another appointment." },
                { de: "Es tut mir leid.", en: "I am sorry." },
                { de: "Vielleicht das nächste Mal!", en: "Maybe next time!" }
            ],
            tips: [
                "Always thank first before declining.",
                "Use 'leider' (unfortunately) to soften the refusal.",
                "Give a reason: 'Ich habe einen Termin' / 'Ich bin krank'.",
                "Offer an alternative: 'Vielleicht das nächste Mal!'",
                "Stay polite and warm."
            ],
            modelAnswer: "Lieber Klaus,\n\nVielen Dank für deine Einladung! Leider kann ich am Donnerstag nicht kommen. Ich habe schon einen Arzttermin. Es tut mir sehr leid. Vielleicht essen wir das nächste Mal zusammen?\n\nViele Grüße,\nMaria",
            guidedScaffold: [
                { label: "Greeting", hint: "Lieber [Name]," },
                { label: "Thank for invitation", hint: "Vielen Dank für deine Einladung!" },
                { label: "Decline", hint: "Leider kann ich am ... nicht kommen." },
                { label: "Give reason", hint: "Ich habe einen Termin. / Ich bin leider krank." },
                { label: "Apologise", hint: "Es tut mir leid." },
                { label: "Suggest next time + Closing", hint: "Vielleicht das nächste Mal! Viele Grüße, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich kann nicht kommen leider.", correct: "Leider kann ich nicht kommen.", reason: "In German, 'leider' usually comes first in the sentence for emphasis." },
                { wrong: "Es tut mich leid.", correct: "Es tut mir leid.", reason: "Use the dative 'mir' (me) not the accusative 'mich'." }
            ],
            checklist: ["Greeting used", "Thanked for invitation", "Decline stated", "Reason given", "Apology included", "Alternative suggested", "Closing with name"]
        },
        {
            id: "ws_009",
            category: "Messages",
            categoryIcon: "💬",
            title: "Thank You Message",
            titleDE: "Dankesnachricht",
            prompt: "Write a short thank you message to your neighbour Mrs Müller, who looked after your cat while you were on holiday. Thank her and invite her for coffee.",
            promptDE: "Schreiben Sie eine kurze Dankesnachricht an Ihre Nachbarin Frau Müller, die während Ihres Urlaubs auf Ihre Katze aufgepasst hat. Bedanken Sie sich und laden Sie sie zum Kaffee ein.",
            wordTarget: 40,
            vocab: [
                { word: "sich bedanken", translation: "to say thank you", ml: "സിഹ് ബെദാങ്കൻ" },
                { word: "aufpassen auf", translation: "to look after", ml: "ഔഫ്പാസ്സെൻ ഔഫ്" },
                { word: "die Katze", translation: "cat", ml: "ഡി കാറ്റ്സെ" },
                { word: "der Urlaub", translation: "holiday", ml: "ഡേർ ഊർലാപ്" },
                { word: "herzlichen Dank", translation: "heartfelt thanks", ml: "ഹെർത്സ്ലിഷെൻ ദാങ്ക്" },
                { word: "einladen", translation: "to invite", ml: "ഐൻലാഡെൻ" },
                { word: "der Kaffee", translation: "coffee", ml: "ഡേർ കഫേ" }
            ],
            expressions: [
                { de: "Liebe Frau Müller,", en: "Dear Mrs Müller," },
                { de: "Herzlichen Dank für Ihre Hilfe!", en: "Heartfelt thanks for your help!" },
                { de: "Ich bin sehr dankbar, dass Sie ...", en: "I am very grateful that you ..." },
                { de: "Das war sehr nett von Ihnen.", en: "That was very kind of you." },
                { de: "Ich möchte Sie gern zum Kaffee einladen.", en: "I would like to invite you for coffee." },
                { de: "Mit freundlichen Grüßen,", en: "With friendly greetings," }
            ],
            tips: [
                "Use formal 'Sie' form since it's a neighbour (not a close friend).",
                "Be specific about what you are thanking for.",
                "Show genuine gratitude: 'Das war sehr nett von Ihnen.'",
                "Offer something in return.",
                "Use 'Mit freundlichen Grüßen' for formal closing."
            ],
            modelAnswer: "Liebe Frau Müller,\n\nHerzlichen Dank, dass Sie in meinem Urlaub auf meine Katze aufgepasst haben! Das war wirklich sehr nett von Ihnen. Ich bin sehr dankbar. Ich möchte Sie gern zum Kaffee einladen. Wann haben Sie Zeit?\n\nMit freundlichen Grüßen,\nMaria",
            guidedScaffold: [
                { label: "Greeting", hint: "Liebe Frau [Name], (formal/female) / Lieber Herr [Name], (formal/male)" },
                { label: "Thank", hint: "Herzlichen Dank für ... / Herzlichen Dank, dass Sie ..." },
                { label: "Elaborate", hint: "Das war sehr nett von Ihnen." },
                { label: "Express feeling", hint: "Ich bin sehr dankbar / froh / glücklich." },
                { label: "Offer", hint: "Ich möchte Sie gern zum Kaffee / Abendessen einladen." },
                { label: "Closing", hint: "Mit freundlichen Grüßen, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Danke Sie für Ihre Hilfe.", correct: "Danke für Ihre Hilfe.", reason: "'Danke' does not take a direct object — just 'Danke für ...'." },
                { wrong: "Ich bin sehr danke.", correct: "Ich bin sehr dankbar.", reason: "'Dankbar' (grateful) is the adjective form, not 'danke' which is only an exclamation." }
            ],
            checklist: ["Formal Sie form used", "Specific thanks given", "Appreciation expressed", "Offer/invitation made", "Formal closing used", "Name signed"]
        },
        {
            id: "ws_010",
            category: "Messages",
            categoryIcon: "💬",
            title: "Apology",
            titleDE: "Entschuldigung",
            prompt: "Write a short apology message to your friend Lena. You forgot her birthday last week. Apologise and invite her for dinner to make it up.",
            promptDE: "Schreiben Sie eine kurze Entschuldigungsnachricht an Ihre Freundin Lena. Sie haben letzten Samstag ihren Geburtstag vergessen. Entschuldigen Sie sich und laden Sie sie zum Abendessen ein, um es wieder gutzumachen.",
            wordTarget: 40,
            vocab: [
                { word: "vergessen", translation: "to forget", ml: "ഫെർഗെസ്സെൻ" },
                { word: "der Geburtstag", translation: "birthday", ml: "ഡേർ ഗെബുർട്സ്റ്റാഗ്" },
                { word: "sich entschuldigen", translation: "to apologise", ml: "സിഹ് എന്റെഷുൾഡിഗൻ" },
                { word: "es tut mir leid", translation: "I am sorry", ml: "എസ് ടുട്ട് മിർ ലൈഡ്" },
                { word: "leider", translation: "unfortunately", ml: "ലൈഡർ" },
                { word: "wiedergutmachen", translation: "to make it up", ml: "വീഡർഗുട്ട്മാഖെൻ" },
                { word: "einladen", translation: "to invite", ml: "ഐൻലാഡെൻ" }
            ],
            expressions: [
                { de: "Liebe Lena,", en: "Dear Lena," },
                { de: "Es tut mir sehr leid!", en: "I am so sorry!" },
                { de: "Ich habe deinen Geburtstag vergessen.", en: "I forgot your birthday." },
                { de: "Das tut mir wirklich leid.", en: "I am really sorry about that." },
                { de: "Ich möchte das wiedergutmachen.", en: "I would like to make it up to you." },
                { de: "Ich lade dich zum Abendessen ein.", en: "I invite you to dinner." }
            ],
            tips: [
                "Apologise clearly and directly in the first sentence.",
                "Acknowledge what went wrong.",
                "Show genuine regret: 'Das tut mir wirklich leid.'",
                "Offer to make it up.",
                "End on a warm, positive note."
            ],
            modelAnswer: "Liebe Lena,\n\nEs tut mir wirklich sehr leid! Ich habe leider deinen Geburtstag vergessen. Das war nicht nett von mir. Ich möchte das unbedingt wiedergutmachen. Darf ich dich nächste Woche zum Abendessen einladen?\n\nViele Grüße und nochmals Entschuldigung,\nMaria",
            guidedScaffold: [
                { label: "Greeting", hint: "Liebe Lena," },
                { label: "Apology", hint: "Es tut mir so leid!" },
                { label: "What happened", hint: "Ich habe deinen Geburtstag vergessen." },
                { label: "More regret", hint: "Das war nicht nett. / Das tut mir wirklich leid." },
                { label: "Make it up", hint: "Ich möchte das wiedergutmachen." },
                { label: "Offer + Closing", hint: "Darf ich dich zum ... einladen? Viele Grüße, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich bin sorry.", correct: "Es tut mir leid.", reason: "'Sorry' is English. In German say 'Es tut mir leid' or 'Entschuldigung'." },
                { wrong: "Es tut mich leid.", correct: "Es tut mir leid.", reason: "Use dative 'mir' not accusative 'mich'." }
            ],
            checklist: ["Greeting used", "Apology stated clearly", "What happened explained", "Regret expressed", "Offer to make it up", "Closing with name"]
        },

        // ── CATEGORY: EMAILS ─────────────────────────────────────────────────────
        {
            id: "ws_011",
            category: "Emails",
            categoryIcon: "📧",
            title: "Visiting a Friend",
            titleDE: "Einen Freund besuchen",
            prompt: "Write an email to your friend Ben. Say you want to visit him next weekend. Ask when he is free and what you can do together.",
            promptDE: "Schreiben Sie eine E-Mail an Ihren Freund Ben. Sagen Sie, dass Sie ihn nächstes Wochenende besuchen möchten. Fragen Sie, wann er Zeit hat und was ihr zusammen machen könnt.",
            wordTarget: 40,
            vocab: [
                { word: "besuchen", translation: "to visit", ml: "ബെസൂഖെൻ" },
                { word: "nächstes Wochenende", translation: "next weekend", ml: "നെഹ്സ്റ്റെസ് വോഖെൻഎൻഡെ" },
                { word: "Zeit haben", translation: "to have time", ml: "സൈറ്റ് ഹാബെൻ" },
                { word: "zusammen", translation: "together", ml: "ത്സുസാംമെൻ" },
                { word: "treffen", translation: "to meet", ml: "ട്രെഫെൻ" },
                { word: "Pläne machen", translation: "to make plans", ml: "പ്ലേനെ മാഖെൻ" }
            ],
            expressions: [
                { de: "Lieber Ben,", en: "Dear Ben," },
                { de: "Wie geht es dir?", en: "How are you?" },
                { de: "Ich möchte dich nächstes Wochenende besuchen.", en: "I would like to visit you next weekend." },
                { de: "Wann hast du Zeit?", en: "When do you have time?" },
                { de: "Was können wir zusammen machen?", en: "What can we do together?" },
                { de: "Ich freue mich auf deine Antwort!", en: "I look forward to your reply!" }
            ],
            tips: [
                "Start with a warm greeting and ask how they are.",
                "State your intention clearly: 'Ich möchte dich besuchen.'",
                "Ask specific questions.",
                "Show enthusiasm.",
                "End with 'Ich freue mich auf deine Antwort!'"
            ],
            modelAnswer: "Lieber Ben,\n\nWie geht es dir? Ich möchte dich nächstes Wochenende besuchen. Hast du am Samstag oder Sonntag Zeit? Was können wir zusammen machen? Ich würde gern in die Stadt gehen oder ins Kino. Ich freue mich auf deine Antwort!\n\nViele Grüße,\nMaria",
            guidedScaffold: [
                { label: "Greeting + How are you", hint: "Lieber Ben, / Wie geht es dir?" },
                { label: "State intention", hint: "Ich möchte dich nächstes Wochenende besuchen." },
                { label: "Ask availability", hint: "Wann hast du Zeit? / Am Samstag oder Sonntag?" },
                { label: "Suggest activity", hint: "Was können wir zusammen machen? / Ich möchte gern ..." },
                { label: "Excitement", hint: "Ich freue mich sehr!" },
                { label: "Closing", hint: "Ich freue mich auf deine Antwort! Viele Grüße, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich will besuchen dich.", correct: "Ich möchte dich besuchen.", reason: "Use 'möchte' (would like) for polite intentions. Also, the infinitive 'besuchen' goes to the end." },
                { wrong: "Wann du hast Zeit?", correct: "Wann hast du Zeit?", reason: "In questions with a question word, the verb comes second: Wann + hast + du." }
            ],
            checklist: ["Greeting used", "Intention to visit stated", "Specific time asked", "Activity suggested", "Enthusiasm shown", "Reply requested", "Closing used"]
        },
        {
            id: "ws_012",
            category: "Emails",
            categoryIcon: "📧",
            title: "Asking for Information",
            titleDE: "Nach Informationen fragen",
            prompt: "Write an email to the Goethe-Institut. Ask about German courses: when they start, how many hours per week, and the course fee.",
            promptDE: "Schreiben Sie eine E-Mail an das Goethe-Institut. Fragen Sie nach Deutschkursen: wann sie beginnen, wie viele Stunden pro Woche und was der Kurs kostet.",
            wordTarget: 45,
            vocab: [
                { word: "der Kurs", translation: "course", ml: "ഡേർ കുർസ്" },
                { word: "beginnen", translation: "to begin", ml: "ബെഗിന്നെൻ" },
                { word: "die Stunde", translation: "lesson / hour", ml: "ഡി ഷ്ടുണ്ടെ" },
                { word: "pro Woche", translation: "per week", ml: "പ്രോ വോഖെ" },
                { word: "die Kosten / der Preis", translation: "cost / price", ml: "ഡി കോസ്റ്റൻ / ഡേർ പ്രൈസ്" },
                { word: "Informationen", translation: "information", ml: "ഇൻഫോർമത്സ്യോനെൻ" },
                { word: "sich anmelden", translation: "to register", ml: "സിഹ് അൻമെൽഡെൻ" }
            ],
            expressions: [
                { de: "Sehr geehrte Damen und Herren,", en: "Dear Sir or Madam," },
                { de: "Ich interessiere mich für einen Deutschkurs.", en: "I am interested in a German course." },
                { de: "Wann beginnt der nächste Kurs?", en: "When does the next course start?" },
                { de: "Wie viele Stunden hat der Kurs pro Woche?", en: "How many hours per week does the course have?" },
                { de: "Was kostet der Kurs?", en: "How much does the course cost?" },
                { de: "Mit freundlichen Grüßen,", en: "With friendly greetings," }
            ],
            tips: [
                "Use formal opening: 'Sehr geehrte Damen und Herren,'",
                "Explain your interest first.",
                "Ask each question in a separate sentence.",
                "Keep it professional and polite.",
                "Use formal closing: 'Mit freundlichen Grüßen,'"
            ],
            modelAnswer: "Sehr geehrte Damen und Herren,\n\nIch interessiere mich für einen Deutschkurs an Ihrem Institut. Ich habe einige Fragen: Wann beginnt der nächste Kurs? Wie viele Stunden pro Woche hat der Kurs? Und was kostet der Kurs? Ich freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen,\nMaria Nair",
            guidedScaffold: [
                { label: "Formal greeting", hint: "Sehr geehrte Damen und Herren," },
                { label: "State interest", hint: "Ich interessiere mich für einen Deutschkurs." },
                { label: "Question 1 – Start date", hint: "Wann beginnt der nächste Kurs?" },
                { label: "Question 2 – Hours", hint: "Wie viele Stunden hat der Kurs pro Woche?" },
                { label: "Question 3 – Price", hint: "Was kostet der Kurs?" },
                { label: "Closing", hint: "Mit freundlichen Grüßen, [Full Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich interessiere mich an einem Kurs.", correct: "Ich interessiere mich für einen Kurs.", reason: "'Sich interessieren' takes 'für' + accusative, not 'an'." },
                { wrong: "Liebe Damen und Herren,", correct: "Sehr geehrte Damen und Herren,", reason: "For formal emails to organisations, use 'Sehr geehrte' not 'Liebe'." }
            ],
            checklist: ["Formal greeting used", "Interest stated", "Start date asked", "Hours per week asked", "Cost asked", "Formal closing with full name"]
        },
        {
            id: "ws_013",
            category: "Emails",
            categoryIcon: "📧",
            title: "Booking Accommodation",
            titleDE: "Unterkunft buchen",
            prompt: "Write an email to Hotel Alpenblick to book a room. Say the dates (3 nights from 10 to 13 August), how many people (2), and ask if breakfast is included.",
            promptDE: "Schreiben Sie eine E-Mail an Hotel Alpenblick, um ein Zimmer zu buchen. Geben Sie die Daten an (3 Nächte vom 10. bis 13. August), wie viele Personen (2) und fragen Sie, ob das Frühstück inklusive ist.",
            wordTarget: 50,
            vocab: [
                { word: "das Zimmer", translation: "room", ml: "ദാസ് സിമ്മർ" },
                { word: "buchen", translation: "to book", ml: "ബൂഖെൻ" },
                { word: "vom ... bis zum ...", translation: "from ... to ...", ml: "ഫോം ... ബിസ് ത്സും ..." },
                { word: "die Nacht", translation: "night", ml: "ഡി നാഹ്ത്" },
                { word: "das Frühstück", translation: "breakfast", ml: "ദാസ് ഫ്രൂസ്റ്റുക്ക്" },
                { word: "inklusive", translation: "included", ml: "ഇൻക്ലൂസീവ്" },
                { word: "für ... Personen", translation: "for ... persons", ml: "ഫ്യൂർ ... പേർസോനെൻ" },
                { word: "die Reservierung", translation: "reservation", ml: "ഡി റിസെർവീറുങ്" }
            ],
            expressions: [
                { de: "Sehr geehrte Damen und Herren,", en: "Dear Sir or Madam," },
                { de: "Ich möchte ein Zimmer buchen.", en: "I would like to book a room." },
                { de: "Vom 10. bis 13. August, das sind 3 Nächte.", en: "From 10 to 13 August, that is 3 nights." },
                { de: "Das Zimmer ist für 2 Personen.", en: "The room is for 2 people." },
                { de: "Ist das Frühstück inklusive?", en: "Is breakfast included?" },
                { de: "Ich freue mich auf Ihre Bestätigung.", en: "I look forward to your confirmation." }
            ],
            tips: [
                "Use formal Sie form throughout.",
                "Give specific dates in German format: 10. August.",
                "Specify number of people and room type if known.",
                "Ask your key question (breakfast) clearly.",
                "Request a confirmation."
            ],
            modelAnswer: "Sehr geehrte Damen und Herren,\n\nIch möchte ein Doppelzimmer buchen. Ich benötige das Zimmer vom 10. bis 13. August, das sind 3 Nächte. Das Zimmer ist für 2 Personen. Ist das Frühstück im Preis inklusive? Ich freue mich auf Ihre Bestätigung.\n\nMit freundlichen Grüßen,\nMaria Nair",
            guidedScaffold: [
                { label: "Formal greeting", hint: "Sehr geehrte Damen und Herren," },
                { label: "Purpose", hint: "Ich möchte ein Zimmer buchen." },
                { label: "Dates", hint: "Vom ... bis ... (... Nächte)." },
                { label: "Number of people", hint: "Das Zimmer ist für ... Personen." },
                { label: "Question", hint: "Ist das Frühstück inklusive?" },
                { label: "Closing", hint: "Mit freundlichen Grüßen, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich brauche ein Zimmer von 10. bis 13. August.", correct: "Ich benötige das Zimmer vom 10. bis 13. August.", reason: "Use 'vom' (= von + dem) before dates: vom 10. bis 13. August." },
                { wrong: "Ich reserviere für 2 Person.", correct: "Ich reserviere für 2 Personen.", reason: "'Personen' is always plural when number > 1." }
            ],
            checklist: ["Formal greeting", "Room booking stated", "Dates given", "Number of people stated", "Question about breakfast", "Confirmation requested", "Formal closing"]
        },
        {
            id: "ws_014",
            category: "Emails",
            categoryIcon: "📧",
            title: "Missing Class",
            titleDE: "Kursabwesenheit melden",
            prompt: "Write an email to your German teacher Mr Braun. Explain that you cannot attend class tomorrow because you are sick. Ask for the homework.",
            promptDE: "Schreiben Sie eine E-Mail an Ihren Deutschlehrer Herrn Braun. Erklären Sie, dass Sie morgen nicht zum Unterricht kommen können, weil Sie krank sind. Fragen Sie nach den Hausaufgaben.",
            wordTarget: 40,
            vocab: [
                { word: "der Unterricht", translation: "class / lesson", ml: "ഡേർ ഉണ്ടർറിഹ്ത്" },
                { word: "fehlen", translation: "to be absent", ml: "ഫീലൻ" },
                { word: "krank sein", translation: "to be ill", ml: "ക്രാങ്ക് സൈൻ" },
                { word: "die Hausaufgabe", translation: "homework", ml: "ഡി ഹൗസ്ഔഫ്ഗാബെ" },
                { word: "morgen", translation: "tomorrow", ml: "മോർഗൻ" },
                { word: "Entschuldigung", translation: "apology / excuse", ml: "ക്ഷമ" },
                { word: "senden", translation: "to send", ml: "സെൻഡെൻ" }
            ],
            expressions: [
                { de: "Sehr geehrter Herr Braun,", en: "Dear Mr Braun," },
                { de: "Ich kann morgen leider nicht am Unterricht teilnehmen.", en: "Unfortunately I cannot attend class tomorrow." },
                { de: "Ich bin krank und muss zu Hause bleiben.", en: "I am ill and have to stay at home." },
                { de: "Können Sie mir bitte die Hausaufgaben schicken?", en: "Could you please send me the homework?" },
                { de: "Es tut mir leid für die Unannehmlichkeiten.", en: "I am sorry for the inconvenience." },
                { de: "Mit freundlichen Grüßen,", en: "With friendly greetings," }
            ],
            tips: [
                "Address the teacher formally: 'Sehr geehrter Herr [Name],'",
                "Explain clearly why you cannot come.",
                "Ask for homework politely: 'Könnten Sie mir ...'",
                "Apologise briefly.",
                "Use formal closing."
            ],
            modelAnswer: "Sehr geehrter Herr Braun,\n\nLeider kann ich morgen nicht am Unterricht teilnehmen. Ich bin krank und muss zu Hause bleiben. Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken? Es tut mir leid für die Unannehmlichkeiten.\n\nMit freundlichen Grüßen,\nMaria",
            guidedScaffold: [
                { label: "Formal greeting", hint: "Sehr geehrter Herr [Name], / Sehr geehrte Frau [Name]," },
                { label: "Cannot attend", hint: "Ich kann morgen nicht am Unterricht teilnehmen." },
                { label: "Reason", hint: "Ich bin krank / Ich habe einen Arzttermin." },
                { label: "Request homework", hint: "Könnten Sie mir die Hausaufgaben schicken?" },
                { label: "Apology", hint: "Es tut mir leid." },
                { label: "Closing", hint: "Mit freundlichen Grüßen, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Sehr geehrte Herr Braun,", correct: "Sehr geehrter Herr Braun,", reason: "Male name → 'Sehr geehrter'. Female → 'Sehr geehrte'. The adjective ending changes." },
                { wrong: "Ich kann nicht kommen zum Unterricht.", correct: "Ich kann nicht am Unterricht teilnehmen.", reason: "The formal phrase is 'am Unterricht teilnehmen' (to participate in class)." }
            ],
            checklist: ["Formal greeting used", "Absence explained", "Reason given", "Homework requested", "Apology included", "Formal closing used"]
        },
        {
            id: "ws_015",
            category: "Emails",
            categoryIcon: "📧",
            title: "Illness Notification",
            titleDE: "Krankmeldung",
            prompt: "Write a short email to your employer (Firma Meier GmbH). Inform them that you are ill today and cannot come to work. Say when you think you will be back.",
            promptDE: "Schreiben Sie eine kurze E-Mail an Ihren Arbeitgeber (Firma Meier GmbH). Informieren Sie ihn, dass Sie heute krank sind und nicht zur Arbeit kommen können. Sagen Sie, wann Sie voraussichtlich zurückkommen.",
            wordTarget: 40,
            vocab: [
                { word: "krank", translation: "ill / sick", ml: "ക്രാങ്ക്" },
                { word: "die Arbeit", translation: "work", ml: "ഡി ആർബൈറ്റ്" },
                { word: "fehlen", translation: "to be absent", ml: "ഫീലൻ" },
                { word: "voraussichtlich", translation: "presumably / expected", ml: "ഫൊറൗസ്സിഹ്റ്റ്ലിഹ്" },
                { word: "zurückkommen", translation: "to return / come back", ml: "ത്സുരുക്ക്കോമെൻ" },
                { word: "der Arzt", translation: "doctor", ml: "ഡേർ ആർട്സ്ത്" },
                { word: "das Attest", translation: "medical certificate", ml: "ദാസ് അറ്റെസ്റ്റ്" }
            ],
            expressions: [
                { de: "Sehr geehrte Damen und Herren,", en: "Dear Sir or Madam," },
                { de: "Ich muss Ihnen mitteilen, dass ich heute krank bin.", en: "I must inform you that I am ill today." },
                { de: "Ich kann heute nicht zur Arbeit kommen.", en: "I cannot come to work today." },
                { de: "Ich gehe heute zum Arzt.", en: "I am going to the doctor today." },
                { de: "Voraussichtlich bin ich ab Donnerstag wieder da.", en: "I expect to be back from Thursday." },
                { de: "Ein Arzt-Attest schicke ich Ihnen per E-Mail.", en: "I will send you a medical certificate by email." }
            ],
            tips: [
                "Be formal and professional throughout.",
                "Inform clearly that you are sick.",
                "Give a probable return date.",
                "Mention that you will provide a medical certificate if needed.",
                "Keep the email concise."
            ],
            modelAnswer: "Sehr geehrte Damen und Herren,\n\nIch muss Ihnen mitteilen, dass ich heute leider krank bin und nicht zur Arbeit kommen kann. Ich gehe heute Morgen zum Arzt. Voraussichtlich bin ich ab Donnerstag wieder im Büro. Das Attest sende ich Ihnen per E-Mail.\n\nMit freundlichen Grüßen,\nMaria Nair",
            guidedScaffold: [
                { label: "Formal greeting", hint: "Sehr geehrte Damen und Herren," },
                { label: "Inform of illness", hint: "Ich bin heute leider krank." },
                { label: "Cannot come to work", hint: "Ich kann heute nicht zur Arbeit kommen." },
                { label: "Doctor visit", hint: "Ich gehe heute zum Arzt." },
                { label: "Return date", hint: "Voraussichtlich bin ich ab ... wieder da." },
                { label: "Medical certificate + Closing", hint: "Das Attest sende ich Ihnen. Mit freundlichen Grüßen, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich bin sick.", correct: "Ich bin krank.", reason: "'Sick' is English. The German word is 'krank'." },
                { wrong: "Ich schicke das Attest Ihnen.", correct: "Ich sende Ihnen das Attest.", reason: "With two objects, the dative (Ihnen) comes before the accusative (das Attest)." }
            ],
            checklist: ["Formal greeting", "Illness stated", "Cannot attend work stated", "Doctor visit mentioned", "Return date given", "Medical certificate mentioned", "Formal closing"]
        },

        // ── CATEGORY: FORMS ───────────────────────────────────────────────────────
        {
            id: "ws_016",
            category: "Forms",
            categoryIcon: "📋",
            title: "Hotel Registration",
            titleDE: "Hotelregistrierung",
            prompt: "You are checking into Hotel Sonnenschein. Fill in the registration form with the following details: Name: Maria Nair, DOB: 15.03.1996, Nationality: Indian, Passport No: A1234567, Address: 12 Park Street, Berlin. Duration of stay: 3 nights (10.–13.08.).",
            promptDE: "Sie checken in Hotel Sonnenschein ein. Füllen Sie das Anmeldeformular aus: Name: Maria Nair, Geburtsdatum: 15.03.1996, Nationalität: Indisch, Passnummer: A1234567, Adresse: Park Straße 12, Berlin. Aufenthaltsdauer: 3 Nächte (10.–13.08.).",
            wordTarget: 30,
            vocab: [
                { word: "der Familienname", translation: "surname", ml: "ഡേർ ഫാമിലിയെൻനാമെ" },
                { word: "der Vorname", translation: "first name", ml: "ഡേർ ഫോർനാമെ" },
                { word: "das Geburtsdatum", translation: "date of birth", ml: "ദാസ് ഗെബുർട്സ്ഡാറ്റും" },
                { word: "die Staatsangehörigkeit", translation: "nationality", ml: "ഡി ഷ്ടാറ്റ്സ്അൻგെഹോറിഗ്കീറ്റ്" },
                { word: "die Reisepassnummer", translation: "passport number", ml: "ഡി റൈസെപാസ്സ്നുംമർ" },
                { word: "der Aufenthalt", translation: "stay", ml: "ഡേർ ഔഫെൻഹാൾട്ട്" },
                { word: "die Unterschrift", translation: "signature", ml: "ഡി ഉണ്ടർഷ്രിഫ്റ്റ്" }
            ],
            expressions: [
                { de: "Familienname: Nair", en: "Surname: Nair" },
                { de: "Vorname: Maria", en: "First name: Maria" },
                { de: "Geburtsdatum: 15.03.1996", en: "Date of birth: 15/03/1996" },
                { de: "Staatsangehörigkeit: Indisch", en: "Nationality: Indian" },
                { de: "Ankunft / Abreise: ...", en: "Arrival / Departure: ..." },
                { de: "Unterschrift: ...", en: "Signature: ..." }
            ],
            tips: [
                "Form tasks require accurate information — no creative writing needed.",
                "Write in the box/field clearly.",
                "Use German date format: day.month.year (15.03.1996).",
                "Nationality is an adjective in German: Indisch, Deutsch.",
                "Sign at the bottom."
            ],
            modelAnswer: "Familienname: Nair\nVorname: Maria\nGeburtsdatum: 15.03.1996\nStaatsangehörigkeit: Indisch\nReisepassnummer: A1234567\nAdresse: Park Straße 12, Berlin\nAnkunft: 10.08. / Abreise: 13.08.\nAnzahl der Nächte: 3\nUnterschrift: Maria Nair",
            guidedScaffold: [
                { label: "Name", hint: "Familienname: [Surname] / Vorname: [First name]" },
                { label: "Date of birth", hint: "Geburtsdatum: DD.MM.YYYY" },
                { label: "Nationality", hint: "Staatsangehörigkeit: Indisch / Deutsch ..." },
                { label: "Passport", hint: "Reisepassnummer: [Number]" },
                { label: "Address", hint: "Adresse: [Street, City]" },
                { label: "Dates + Signature", hint: "Ankunft: ... / Abreise: ... / Unterschrift: ..." }
            ],
            commonMistakes: [
                { wrong: "Nationalität: India", correct: "Staatsangehörigkeit: Indisch", reason: "German forms use 'Staatsangehörigkeit' and the adjective form (Indisch, not India)." },
                { wrong: "Geburtsdatum: 1996-03-15", correct: "Geburtsdatum: 15.03.1996", reason: "German date format is day.month.year with dots." }
            ],
            checklist: ["Surname and first name filled", "Date of birth in German format", "Nationality as adjective", "Passport number included", "Address complete", "Arrival and departure dates", "Signature"]
        },
        {
            id: "ws_017",
            category: "Forms",
            categoryIcon: "📋",
            title: "Language Course Registration",
            titleDE: "Sprachkursanmeldung",
            prompt: "Register for a German language course. Fill in: Name, Date of Birth, Address, Current German Level (A1), Course type (Intensive), Start Date, and payment method (bank transfer).",
            promptDE: "Melden Sie sich für einen Deutschkurs an. Füllen Sie aus: Name, Geburtsdatum, Adresse, aktuelles Deutschniveau (A1), Kurstyp (Intensiv), Startdatum und Zahlungsart (Überweisung).",
            wordTarget: 35,
            vocab: [
                { word: "das Sprachniveau", translation: "language level", ml: "ദാസ് ഷ്പ്രാഹ്നിവോ" },
                { word: "der Intensivkurs", translation: "intensive course", ml: "ഡേർ ഇന്റെൻസീവ്കുർസ്" },
                { word: "die Anmeldung", translation: "registration", ml: "ഡി അൻമെൽഡുങ്" },
                { word: "die Überweisung", translation: "bank transfer", ml: "ഡി ഊബർവൈസുങ്" },
                { word: "der Beginn", translation: "beginning / start", ml: "ഡേർ ബെഗിൻ" },
                { word: "die Zahlungsart", translation: "payment method", ml: "ഡി ത്സาลুങ്സ്ആർട്ട്" }
            ],
            expressions: [
                { de: "Name: Maria Nair", en: "Name: Maria Nair" },
                { de: "Aktuelles Deutschniveau: A1", en: "Current German level: A1" },
                { de: "Gewünschter Kurs: Intensivkurs", en: "Desired course: Intensive course" },
                { de: "Kursbeginn: 01. September", en: "Course start: 1st September" },
                { de: "Zahlungsart: Banküberweisung", en: "Payment method: Bank transfer" },
                { de: "Ich habe die Datenschutzerklärung gelesen.", en: "I have read the privacy policy." }
            ],
            tips: [
                "Form fields need accurate and complete information.",
                "Use the level correctly: A1, A2, B1, etc.",
                "Write the date in German format.",
                "Be concise — each field requires only the key information.",
                "Use appropriate German vocabulary for each field."
            ],
            modelAnswer: "Name: Maria Nair\nGeburtsdatum: 15.03.1996\nAdresse: Park Straße 12, 10115 Berlin\nE-Mail: maria@email.com\nAktuelles Deutschniveau: A1\nGewünschter Kurs: Intensivkurs (A1)\nKursbeginn: 01.09.2024\nZahlungsart: Banküberweisung\nUnterschrift: Maria Nair\nDatum: 01.07.2024",
            guidedScaffold: [
                { label: "Personal details", hint: "Name: ... / Geburtsdatum: ..." },
                { label: "Address + Email", hint: "Adresse: ... / E-Mail: ..." },
                { label: "Language level", hint: "Aktuelles Deutschniveau: A1" },
                { label: "Course type", hint: "Gewünschter Kurs: Intensivkurs / Abendkurs / ..." },
                { label: "Start date", hint: "Kursbeginn: DD.MM.YYYY" },
                { label: "Payment + Signature", hint: "Zahlungsart: ... / Unterschrift: ..." }
            ],
            commonMistakes: [
                { wrong: "Level: A1 beginner", correct: "Aktuelles Deutschniveau: A1", reason: "Use the German field label and the level code only." },
                { wrong: "Payment: credit card", correct: "Zahlungsart: Kreditkarte", reason: "Use German terms on German forms." }
            ],
            checklist: ["Name and DOB filled", "Address complete", "Language level correct", "Course type selected", "Start date given", "Payment method stated", "Signature and date"]
        },
        {
            id: "ws_018",
            category: "Forms",
            categoryIcon: "📋",
            title: "Library Membership",
            titleDE: "Bibliotheksausweis",
            prompt: "Apply for a library membership at the Stadtbibliothek Berlin. Fill in the membership form: personal details, address, email, and agree to the library rules.",
            promptDE: "Beantragen Sie eine Mitgliedschaft in der Stadtbibliothek Berlin. Füllen Sie das Formular aus: persönliche Daten, Adresse, E-Mail und bestätigen Sie die Bibliotheksregeln.",
            wordTarget: 30,
            vocab: [
                { word: "die Bibliothek", translation: "library", ml: "ഡി ബിബ്ലിയോടേക്" },
                { word: "der Ausweis", translation: "ID / card", ml: "ഡേർ ഔസ്‌വൈസ്" },
                { word: "die Mitgliedschaft", translation: "membership", ml: "ഡി മിറ്റ്গ്ലീഡ്ഷാഫ്റ്റ്" },
                { word: "die Regeln", translation: "rules", ml: "ഡി റേഗെൽൻ" },
                { word: "bestätigen", translation: "to confirm", ml: "ബെштаೇറ്റിഗൻ" },
                { word: "leihen", translation: "to borrow", ml: "ലൈയൻ" }
            ],
            expressions: [
                { de: "Ich beantrage hiermit eine Mitgliedschaft.", en: "I hereby apply for a membership." },
                { de: "Ich akzeptiere die Bibliotheksregeln.", en: "I accept the library rules." },
                { de: "Bibliotheksausweis beantragen", en: "Apply for a library card" },
                { de: "Ich möchte Bücher ausleihen.", en: "I would like to borrow books." }
            ],
            tips: [
                "Fill in all required fields completely.",
                "Use formal language in the 'notes' section if any.",
                "Accept the rules clearly.",
                "Use German date format.",
                "Double check your address."
            ],
            modelAnswer: "Antrag auf Bibliotheksausweis\n\nVorname: Maria\nFamilienname: Nair\nGeburtsdatum: 15.03.1996\nAdresse: Park Straße 12, 10115 Berlin\nE-Mail: maria@email.com\nTelefon: 01234 567890\n\nIch akzeptiere die Bibliotheksregeln.\n\nDatum: 01.07.2024\nUnterschrift: Maria Nair",
            guidedScaffold: [
                { label: "Name", hint: "Vorname: ... / Familienname: ..." },
                { label: "Date of birth", hint: "Geburtsdatum: DD.MM.YYYY" },
                { label: "Address", hint: "Adresse: [Street, Postcode, City]" },
                { label: "Contact", hint: "E-Mail: ... / Telefon: ..." },
                { label: "Accept rules", hint: "Ich akzeptiere die Bibliotheksregeln." },
                { label: "Date + Signature", hint: "Datum: ... / Unterschrift: ..." }
            ],
            commonMistakes: [
                { wrong: "Ich einverstanden die Regeln.", correct: "Ich akzeptiere die Bibliotheksregeln.", reason: "Use 'akzeptieren' (to accept) or 'Ich bin mit den Regeln einverstanden' (I agree)." }
            ],
            checklist: ["Full name filled", "DOB filled", "Address complete", "Email/phone added", "Rules accepted", "Date and signature"]
        },
        {
            id: "ws_019",
            category: "Forms",
            categoryIcon: "📋",
            title: "Club Registration",
            titleDE: "Vereinsanmeldung",
            prompt: "You want to join a local sports club (TSV Berlin). Fill in the membership form: personal details, sport (swimming), membership type (adult), and payment (monthly direct debit).",
            promptDE: "Sie möchten einem Sportverein beitreten (TSV Berlin). Füllen Sie das Anmeldeformular aus: persönliche Daten, Sportart (Schwimmen), Mitgliedschaftsart (Erwachsener) und Zahlungsweise (monatliche Bankeinzug).",
            wordTarget: 35,
            vocab: [
                { word: "der Verein", translation: "club", ml: "ഡേർ ഫെറൈൻ" },
                { word: "beitreten", translation: "to join", ml: "ബൈട്രേറ്റൻ" },
                { word: "die Sportart", translation: "type of sport", ml: "ഡി ഷ്പോർട്ട്ആർട്ട്" },
                { word: "das Schwimmen", translation: "swimming", ml: "ദാസ് ഷ്വിമ്മൻ" },
                { word: "der Mitgliedsbeitrag", translation: "membership fee", ml: "ഡേർ മിറ്റ്ഗ്ലീഡ്സ്ബൈട്രാഗ്" },
                { word: "das Lastschriftverfahren", translation: "direct debit", ml: "ദാസ് ലാസ്റ്റ്ശ്രിഫ്റ്റ്ഫെർഫാറെൻ" },
                { word: "monatlich", translation: "monthly", ml: "മോനാറ്റ്ലിഹ്" }
            ],
            expressions: [
                { de: "Ich möchte Mitglied werden.", en: "I would like to become a member." },
                { de: "Gewünschte Sportart: Schwimmen", en: "Preferred sport: Swimming" },
                { de: "Mitgliedschaftsart: Erwachsener", en: "Membership type: Adult" },
                { de: "Zahlungsweise: monatlich per Bankeinzug", en: "Payment: monthly by direct debit" },
                { de: "Ich erkläre mich mit der Satzung einverstanden.", en: "I agree with the club statutes." }
            ],
            tips: [
                "Fill all fields accurately.",
                "Select the correct membership category.",
                "Choose your sport clearly.",
                "Confirm agreement with club rules.",
                "Sign and date the form."
            ],
            modelAnswer: "Beitrittsformular TSV Berlin\n\nVorname: Maria / Familienname: Nair\nGeburtsdatum: 15.03.1996\nAdresse: Park Straße 12, 10115 Berlin\nE-Mail: maria@email.com\nSportart: Schwimmen\nMitgliedschaftsart: Erwachsener\nZahlungsweise: monatlich per Bankeinzug\nMitgliedsbeitrag: 15 €/Monat\n\nIch erkläre mich mit der Vereinssatzung einverstanden.\nDatum: 01.07.2024 / Unterschrift: Maria Nair",
            guidedScaffold: [
                { label: "Name + DOB", hint: "Vorname/Familienname: ... / Geburtsdatum: ..." },
                { label: "Address + Contact", hint: "Adresse: ... / E-Mail: ..." },
                { label: "Sport", hint: "Sportart: Schwimmen / Fußball / Tennis ..." },
                { label: "Membership type", hint: "Mitgliedschaftsart: Erwachsener / Kind / Familie" },
                { label: "Payment", hint: "Zahlungsweise: monatlich per Bankeinzug / jährlich" },
                { label: "Agree + Sign", hint: "Ich erkläre mich einverstanden. Datum/Unterschrift: ..." }
            ],
            commonMistakes: [
                { wrong: "Ich will Mitglied sein.", correct: "Ich möchte Mitglied werden.", reason: "Use 'möchte ... werden' (would like to become) for polite applications." }
            ],
            checklist: ["Name and DOB", "Address complete", "Sport selected", "Membership type", "Payment method", "Rules agreed", "Date and signature"]
        },
        {
            id: "ws_020",
            category: "Forms",
            categoryIcon: "📋",
            title: "Doctor Appointment Form",
            titleDE: "Arztterminformular",
            prompt: "Fill in a patient registration form at a new doctor's practice. Include: name, DOB, health insurance provider (TK), current symptoms (Bauchschmerzen – stomach ache), and preferred appointment time (mornings).",
            promptDE: "Füllen Sie ein Patientenformular in einer neuen Arztpraxis aus. Angaben: Name, Geburtsdatum, Krankenkasse (TK), aktuelle Beschwerden (Bauchschmerzen) und gewünschte Terminzeit (morgens).",
            wordTarget: 35,
            vocab: [
                { word: "die Krankenkasse", translation: "health insurance", ml: "ഡി ക്രാങ്കൻകാസ്സെ" },
                { word: "die Beschwerden", translation: "symptoms / complaints", ml: "ഡി ബെഷ്വേർഡൻ" },
                { word: "der Bauchschmerz", translation: "stomach ache", ml: "ഡേർ ബൗഹ്ഷ്മെർട്സ്" },
                { word: "der Termin", translation: "appointment", ml: "ഡേർ ടെർമീൻ" },
                { word: "versichert", translation: "insured", ml: "ഫെർസിഷെർട്ട്" },
                { word: "morgens", translation: "in the mornings", ml: "മോർഗൻസ്" },
                { word: "der Patient", translation: "patient (male)", ml: "ഡേർ പാറ്റ്സ്യെന്റ്" }
            ],
            expressions: [
                { de: "Patient/in: Maria Nair", en: "Patient: Maria Nair" },
                { de: "Krankenkasse: Techniker Krankenkasse (TK)", en: "Health insurance: TK" },
                { de: "Aktuelle Beschwerden: Bauchschmerzen", en: "Current symptoms: Stomach ache" },
                { de: "Gewünschte Terminzeit: morgens", en: "Preferred appointment: mornings" },
                { de: "Ich bin gesetzlich versichert.", en: "I have statutory health insurance." },
                { de: "Ich bin Neupatientin.", en: "I am a new patient." }
            ],
            tips: [
                "List symptoms clearly and briefly.",
                "Specify insurance type: gesetzlich (statutory) or privat (private).",
                "Give a preferred appointment time.",
                "Be honest about your medical history if asked.",
                "Use simple language for symptoms."
            ],
            modelAnswer: "Patientenanmeldung\n\nName: Maria Nair\nGeburtsdatum: 15.03.1996\nAdresse: Park Straße 12, 10115 Berlin\nKrankenkasse: Techniker Krankenkasse (TK)\nVersicherungsart: gesetzlich\nAktuelle Beschwerden: Bauchschmerzen seit 2 Tagen\nGewünschte Terminzeit: morgens (8–12 Uhr)\nNeupatientin: Ja\n\nDatum: 01.07.2024\nUnterschrift: Maria Nair",
            guidedScaffold: [
                { label: "Personal details", hint: "Name: ... / Geburtsdatum: ..." },
                { label: "Address", hint: "Adresse: ..." },
                { label: "Health insurance", hint: "Krankenkasse: ... / Versicherungsart: gesetzlich/privat" },
                { label: "Symptoms", hint: "Aktuelle Beschwerden: ..." },
                { label: "Preferred time", hint: "Gewünschte Terminzeit: morgens / nachmittags / ..." },
                { label: "New patient + Signature", hint: "Neupatientin: Ja/Nein. Datum/Unterschrift: ..." }
            ],
            commonMistakes: [
                { wrong: "Ich habe Bauch Schmerzen.", correct: "Ich habe Bauchschmerzen.", reason: "In German, compound nouns are written as one word: Bauchschmerzen (stomach + pains)." },
                { wrong: "Krankenkasse: TK Insurance", correct: "Krankenkasse: Techniker Krankenkasse (TK)", reason: "Use the full official German name, or the recognised abbreviation TK." }
            ],
            checklist: ["Name and DOB", "Address", "Insurance provider and type", "Symptoms listed", "Preferred time given", "New patient status", "Date and signature"]
        },
        // ── CATEGORY: PERSONAL (ws_021 – ws_022) ─────────────────────────────────
        {
            id: "ws_021",
            category: "Personal",
            categoryIcon: "👤",
            title: "My Best Friend",
            titleDE: "Mein bester Freund / Meine beste Freundin",
            prompt: "Write a short text about your best friend. Mention their name, age, where they live, what they do, and what you like to do together.",
            promptDE: "Schreiben Sie einen kurzen Text über Ihren besten Freund / Ihre beste Freundin. Schreiben Sie den Namen, das Alter, den Wohnort, den Beruf und was Sie gerne zusammen machen.",
            wordTarget: 45,
            vocab: [
                { word: "der Freund / die Freundin", translation: "male friend / female friend", ml: "ഡേർ ഫ്രോയ്ന്ഡ് / ഡി ഫ്രോയ്ന്ഡിൻ" },
                { word: "kennen", translation: "to know (a person)", ml: "കെനൻ" },
                { word: "seit", translation: "since / for (time)", ml: "സൈറ്റ്" },
                { word: "lustig", translation: "funny / fun", ml: "ലൂസ്ടിഗ്" },
                { word: "hilfreich", translation: "helpful", ml: "ഹിൽഫ്റൈഹ്" },
                { word: "treffen", translation: "to meet", ml: "ട്രെഫൻ" },
                { word: "zusammen", translation: "together", ml: "ത്സൂസാമൻ" },
                { word: "vertrauen", translation: "to trust", ml: "ഫേർട്രൗൻ" }
            ],
            expressions: [
                { de: "Mein bester Freund heißt ...", en: "My best friend's name is ..." },
                { de: "Ich kenne ihn/sie seit ... Jahren.", en: "I have known him/her for ... years." },
                { de: "Er/Sie ist ... Jahre alt.", en: "He/She is ... years old." },
                { de: "Er/Sie wohnt in ...", en: "He/She lives in ..." },
                { de: "Wir treffen uns oft ...", en: "We often meet ..." },
                { de: "Er/Sie ist sehr lustig und hilfsbereit.", en: "He/She is very funny and helpful." }
            ],
            tips: [
                "Use 'er' for male friends and 'sie' for female friends consistently.",
                "Use 'seit' to express how long you have known someone: 'Ich kenne sie seit 3 Jahren.'",
                "Describe one or two personality traits using adjectives.",
                "Mention an activity you enjoy doing together.",
                "Keep sentences short and in the present tense."
            ],
            modelAnswer: "Mein bester Freund heißt Thomas. Ich kenne ihn seit fünf Jahren. Er ist 30 Jahre alt und wohnt in München. Er arbeitet als Lehrer. Thomas ist sehr lustig und hilfsbereit. Wir treffen uns oft am Wochenende und gehen zusammen wandern. Er ist ein wirklich guter Freund!",
            guidedScaffold: [
                { label: "Name + How long you know them", hint: "Mein bester Freund / Meine beste Freundin heißt ... / Ich kenne ihn/sie seit ... Jahren." },
                { label: "Age + City", hint: "Er/Sie ist ... Jahre alt und wohnt in ..." },
                { label: "Job / Studies", hint: "Er/Sie arbeitet als ... / Er/Sie studiert ..." },
                { label: "Personality traits", hint: "Er/Sie ist sehr ... und ..." },
                { label: "Activities together", hint: "Wir ... gerne zusammen ..." },
                { label: "Closing sentence", hint: "Er/Sie ist ein wirklich guter Freund / eine wirklich gute Freundin!" }
            ],
            commonMistakes: [
                { wrong: "Mein beste Freundin heißt ...", correct: "Meine beste Freundin heißt ...", reason: "'Freundin' is feminine, so the possessive must be 'meine', not 'mein'." },
                { wrong: "Ich kenne sie für 3 Jahre.", correct: "Ich kenne sie seit 3 Jahren.", reason: "Use 'seit' (+ dative) in German for durations extending into the present, not 'für'." }
            ],
            checklist: ["Friend's name mentioned", "How long you know them", "Age or city included", "Job or activity mentioned", "Personality described", "Activity together mentioned"]
        },
        {
            id: "ws_022",
            category: "Personal",
            categoryIcon: "👤",
            title: "My Favorite Food",
            titleDE: "Mein Lieblingsessen",
            prompt: "Write a short text about food you like. Describe what you eat for breakfast, lunch, and dinner. Mention your favorite dish and whether you like to cook.",
            promptDE: "Schreiben Sie einen kurzen Text über Ihr Essen. Beschreiben Sie, was Sie zum Frühstück, Mittagessen und Abendessen essen. Nennen Sie Ihr Lieblingsessen und ob Sie gerne kochen.",
            wordTarget: 45,
            vocab: [
                { word: "das Frühstück", translation: "breakfast", ml: "ദാസ് ഫ്രൂഷ്ടൂക്ക്" },
                { word: "das Mittagessen", translation: "lunch", ml: "ദാസ് മിറ്റാഗ്സ്സൻ" },
                { word: "das Abendessen", translation: "dinner", ml: "ദാസ് ആബൻഡ്സൻ" },
                { word: "kochen", translation: "to cook", ml: "കോഷൻ" },
                { word: "schmecken", translation: "to taste (good)", ml: "ഷ്മെകൻ" },
                { word: "das Lieblingsessen", translation: "favourite food", ml: "ദാസ് ലീബ്ലിങ്സ്സൻ" },
                { word: "lecker", translation: "delicious / yummy", ml: "ലെകർ" },
                { word: "vegetarisch", translation: "vegetarian", ml: "വെഗെടാരിഷ്" }
            ],
            expressions: [
                { de: "Zum Frühstück esse ich ...", en: "For breakfast I eat ..." },
                { de: "Zum Mittagessen esse ich meistens ...", en: "For lunch I usually eat ..." },
                { de: "Zum Abendessen koche ich oft ...", en: "For dinner I often cook ..." },
                { de: "Mein Lieblingsessen ist ...", en: "My favourite food is ..." },
                { de: "Das schmeckt sehr lecker!", en: "That tastes very delicious!" },
                { de: "Ich koche gern / nicht so gern.", en: "I like / do not really like to cook." }
            ],
            tips: [
                "Structure your text by meal: Frühstück → Mittagessen → Abendessen.",
                "Use 'meistens' (usually) or 'manchmal' (sometimes) to make your text natural.",
                "Mention one specific dish you love and why.",
                "Say whether you cook at home or prefer restaurants.",
                "Keep adjectives simple: lecker, gut, gesund, süß."
            ],
            modelAnswer: "Ich esse gerne und probiere gerne neues Essen. Zum Frühstück trinke ich Kaffee und esse Toast mit Butter. Zum Mittagessen esse ich meistens Reis mit Gemüse oder eine Suppe. Mein Lieblingsessen ist Spaghetti Bolognese – das schmeckt sehr lecker! Am Abend koche ich oft selbst. Ich koche gern, aber manchmal bestelle ich auch Pizza. Ich esse kein Fleisch, ich bin vegetarisch.",
            guidedScaffold: [
                { label: "Introduction", hint: "Ich esse gerne ... / Ich mag ... sehr gern." },
                { label: "Breakfast", hint: "Zum Frühstück esse/trinke ich ..." },
                { label: "Lunch", hint: "Zum Mittagessen esse ich meistens ..." },
                { label: "Favourite dish", hint: "Mein Lieblingsessen ist ... Das schmeckt ..." },
                { label: "Dinner + Cooking", hint: "Am Abend ... / Ich koche gern, weil ..." },
                { label: "Special note", hint: "Ich bin vegetarisch. / Ich esse alles gern." }
            ],
            commonMistakes: [
                { wrong: "Ich esse Frühstück Brot.", correct: "Zum Frühstück esse ich Brot.", reason: "Use 'zum + meal' to express 'for breakfast/lunch/dinner'." },
                { wrong: "Das schmeckt sehr gut lecker.", correct: "Das schmeckt sehr lecker. / Das ist sehr lecker.", reason: "'Lecker' already means delicious; 'gut lecker' is redundant." }
            ],
            checklist: ["Breakfast described", "Lunch mentioned", "Dinner or cooking mentioned", "Favourite dish named", "Adjective used to describe food", "Cooking preference stated"]
        },
        // ── CATEGORY: MESSAGES (ws_023 – ws_025) ─────────────────────────────────
        {
            id: "ws_023",
            category: "Messages",
            categoryIcon: "💬",
            title: "Reschedule a Meeting",
            titleDE: "Termin verschieben",
            prompt: "Send a short message to your colleague. Say that you cannot attend the meeting tomorrow at 10 AM, explain why (you are sick), and suggest rescheduling to Friday afternoon at 2 PM.",
            promptDE: "Schreiben Sie eine kurze Nachricht an Ihren Kollegen / Ihre Kollegin. Sagen Sie, dass Sie morgen um 10 Uhr nicht zum Meeting kommen können, erklären Sie den Grund (Sie sind krank) und schlagen Sie einen neuen Termin vor: Freitag, 14 Uhr.",
            wordTarget: 40,
            vocab: [
                { word: "der Termin", translation: "appointment / meeting", ml: "ഡേർ ടെർമീൻ" },
                { word: "verschieben", translation: "to postpone / reschedule", ml: "ഫേർഷീബൻ" },
                { word: "leider", translation: "unfortunately", ml: "ലൈഡർ" },
                { word: "krank", translation: "sick / ill", ml: "ക്രാങ്ക്" },
                { word: "der Vorschlag", translation: "suggestion / proposal", ml: "ഡേർ ഫോർഷ്ലാഗ്" },
                { word: "möglich", translation: "possible", ml: "മോഗ്ലിഹ്" },
                { word: "passen", translation: "to suit / be convenient", ml: "പാസൺ" },
                { word: "entschuldigung", translation: "excuse me / sorry", ml: "എൻഷൂൾഡിഗൂങ്" }
            ],
            expressions: [
                { de: "Leider kann ich morgen nicht kommen.", en: "Unfortunately I cannot come tomorrow." },
                { de: "Ich bin krank und muss zu Hause bleiben.", en: "I am sick and have to stay at home." },
                { de: "Können wir den Termin verschieben?", en: "Can we reschedule the appointment?" },
                { de: "Wäre Freitag um 14 Uhr möglich?", en: "Would Friday at 2 PM be possible?" },
                { de: "Es tut mir leid für die Unannehmlichkeiten.", en: "I am sorry for the inconvenience." },
                { de: "Passt Ihnen / dir ...?", en: "Does ... suit you?" }
            ],
            tips: [
                "Start with a polite greeting and name the recipient.",
                "Use 'leider' to sound polite when declining: 'Leider kann ich nicht ...'",
                "Give a brief, clear reason — no need for long explanations.",
                "Always suggest a new date/time as an alternative.",
                "End with an apology and a friendly closing."
            ],
            modelAnswer: "Hallo Markus,\n\nleider kann ich morgen um 10 Uhr nicht zum Meeting kommen. Ich bin krank und muss zu Hause bleiben. Es tut mir sehr leid!\n\nKönnen wir den Termin verschieben? Wäre Freitag um 14 Uhr möglich? Das passt mir sehr gut.\n\nViele Grüße,\nSophie",
            guidedScaffold: [
                { label: "Greeting + Recipient", hint: "Hallo [Name]," },
                { label: "Cancellation + Reason", hint: "Leider kann ich am ... nicht kommen, weil ich krank bin." },
                { label: "Apology", hint: "Es tut mir sehr leid!" },
                { label: "Suggest new time", hint: "Können wir den Termin verschieben? Wäre [day + time] möglich?" },
                { label: "Check availability", hint: "Passt dir/Ihnen das?" },
                { label: "Closing", hint: "Viele Grüße, [Your Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich kann nicht kommen weil ich bin krank.", correct: "Ich kann nicht kommen, weil ich krank bin.", reason: "In German, the verb goes to the END of a 'weil' (because) clause." },
                { wrong: "Können wir den Termin pushen?", correct: "Können wir den Termin verschieben?", reason: "Use the German word 'verschieben' to mean reschedule/postpone, not the English loanword 'pushen'." }
            ],
            checklist: ["Recipient greeted", "Cannot attend stated clearly", "Reason given", "Apology included", "New time suggested", "Polite closing used"]
        },
        {
            id: "ws_024",
            category: "Messages",
            categoryIcon: "💬",
            title: "Dinner Invitation",
            titleDE: "Einladung zum Abendessen",
            prompt: "Invite your neighbor to dinner at your home. Mention the day (Saturday evening), the time (7 PM), what you will cook, and ask if they can bring something to drink.",
            promptDE: "Laden Sie Ihren Nachbarn / Ihre Nachbarin zum Abendessen ein. Nennen Sie den Tag (Samstagabend), die Uhrzeit (19 Uhr), was Sie kochen, und fragen Sie, ob er/sie etwas zu trinken mitbringen kann.",
            wordTarget: 40,
            vocab: [
                { word: "einladen", translation: "to invite", ml: "ഐൻലാഡൻ" },
                { word: "der Nachbar / die Nachbarin", translation: "neighbour (m/f)", ml: "ഡേർ നാഹ്ബാർ / ഡി നാഹ്ബാരിൻ" },
                { word: "das Abendessen", translation: "dinner", ml: "ദാസ് ആബൻഡ്സൻ" },
                { word: "mitbringen", translation: "to bring along", ml: "മിറ്റ്ബ്രിങ്ഗൻ" },
                { word: "herzlich", translation: "warmly / cordially", ml: "ഹേർട്സ്ലിഹ്" },
                { word: "kochen", translation: "to cook", ml: "കോഷൻ" },
                { word: "Samstagabend", translation: "Saturday evening", ml: "സാംസ്ടാഗ്സ്ആബൻഡ്" },
                { word: "Getränke", translation: "drinks / beverages", ml: "ഗേട്രേങ്കേ" }
            ],
            expressions: [
                { de: "Ich möchte Sie / dich herzlich einladen.", en: "I would like to cordially invite you." },
                { de: "Am Samstagabend um 19 Uhr.", en: "On Saturday evening at 7 PM." },
                { de: "Ich koche ... für uns.", en: "I am cooking ... for us." },
                { de: "Können Sie / kannst du etwas mitbringen?", en: "Can you bring something?" },
                { de: "Zum Beispiel etwas zu trinken.", en: "For example something to drink." },
                { de: "Ich freue mich auf Ihren / deinen Besuch.", en: "I look forward to your visit." }
            ],
            tips: [
                "Use 'Sie' (formal) if writing to someone older or less familiar, 'du' if close.",
                "State the day and time clearly.",
                "Mention what you plan to cook — it makes the invitation more personal.",
                "Politely ask the guest to bring something using 'Können Sie/du ...?'",
                "End warmly: 'Ich freue mich auf dich!'"
            ],
            modelAnswer: "Hallo Frau Müller,\n\nIch möchte Sie herzlich zu einem Abendessen bei mir einladen! Am Samstagabend um 19 Uhr.\n\nIch koche Spaghetti Bolognese und einen Salat. Das Essen ist fertig um 19:30 Uhr.\n\nKönnen Sie bitte etwas zu trinken mitbringen? Zum Beispiel Wasser oder Saft.\n\nIch freue mich sehr auf Ihren Besuch!\n\nViele Grüße,\nAnna",
            guidedScaffold: [
                { label: "Greeting", hint: "Hallo [Name]," },
                { label: "Invitation + Day & Time", hint: "Ich möchte Sie/dich herzlich einladen. Am [day] um [time] Uhr." },
                { label: "What you are cooking", hint: "Ich koche ... Das Essen ist fertig um ..." },
                { label: "Request to bring something", hint: "Können Sie/du bitte etwas mitbringen? Zum Beispiel ..." },
                { label: "Closing excitement", hint: "Ich freue mich auf Ihren/deinen Besuch!" },
                { label: "Sign-off", hint: "Viele Grüße, [Your Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich lade Sie einladen.", correct: "Ich möchte Sie einladen.", reason: "'Einladen' is a separable verb. The prefix 'ein' goes to the end: 'Ich lade Sie ein.' Or use 'möchte ... einladen'." },
                { wrong: "Am Samstag Abend", correct: "am Samstagabend", reason: "In German, compound time words like 'Samstagabend' are written as one word, and 'am' is lowercase." }
            ],
            checklist: ["Recipient greeted", "Invitation clearly stated", "Day and time given", "Food mentioned", "Request to bring something included", "Warm closing used"]
        },
        {
            id: "ws_025",
            category: "Messages",
            categoryIcon: "💬",
            title: "Package Collection",
            titleDE: "Paket abholen – Nachricht an den Nachbarn",
            prompt: "Write a short note to your neighbor. Ask them if they can collect a delivery package for you tomorrow (you are at work all day). Tell them where to leave it and thank them warmly.",
            promptDE: "Schreiben Sie eine kurze Nachricht an Ihren Nachbarn. Fragen Sie, ob er/sie morgen ein Paket für Sie annehmen kann (Sie sind den ganzen Tag auf der Arbeit). Sagen Sie, wo er/sie das Paket lassen soll, und bedanken Sie sich herzlich.",
            wordTarget: 40,
            vocab: [
                { word: "das Paket", translation: "parcel / package", ml: "ദാസ് പേക്കേറ്റ്" },
                { word: "abholen", translation: "to pick up / collect", ml: "ആബ്ഹോലൻ" },
                { word: "annehmen", translation: "to accept / receive", ml: "ആൻനേമൻ" },
                { word: "die Lieferung", translation: "delivery", ml: "ഡി ലീഫേറൂങ്" },
                { word: "den ganzen Tag", translation: "all day / the whole day", ml: "ഡൻ ഗാൻഷൻ ടാഗ്" },
                { word: "die Tür", translation: "door", ml: "ഡി ടൂർ" },
                { word: "danke vielmals", translation: "many thanks", ml: "ഡാങ്കേ ഫീൽമാൽസ്" },
                { word: "vor der Tür", translation: "in front of the door", ml: "ഫോർ ഡേർ ടൂർ" }
            ],
            expressions: [
                { de: "Kannst du / Können Sie morgen ein Paket für mich annehmen?", en: "Can you accept a package for me tomorrow?" },
                { de: "Ich bin morgen den ganzen Tag auf der Arbeit.", en: "I am at work all day tomorrow." },
                { de: "Bitte stelle das Paket vor meine Tür.", en: "Please put the parcel in front of my door." },
                { de: "Vielen Dank für deine Hilfe!", en: "Many thanks for your help!" },
                { de: "Ich mache das nächste Woche wieder gut.", en: "I'll make it up to you next week." },
                { de: "Der Lieferant kommt zwischen ... und ... Uhr.", en: "The delivery person comes between ... and ... o'clock." }
            ],
            tips: [
                "Be polite and brief — this is an informal neighbour note.",
                "State clearly that you will be away and why.",
                "Give simple instructions on where to leave the parcel.",
                "Thank them sincerely at the end.",
                "Optional: offer to return the favour."
            ],
            modelAnswer: "Hallo Klaus,\n\nkannst du morgen ein Paket für mich annehmen? Ich bin den ganzen Tag auf der Arbeit und kann nicht zu Hause sein.\n\nDer Lieferant kommt zwischen 10 und 14 Uhr. Bitte stelle das Paket einfach vor meine Tür.\n\nVielen Dank für deine Hilfe! Ich mache das nächste Woche wieder gut.\n\nLiebe Grüße,\nMaria",
            guidedScaffold: [
                { label: "Greeting", hint: "Hallo [Name]," },
                { label: "Request + Reason", hint: "Kannst du morgen ein Paket für mich annehmen? Ich bin den ganzen Tag auf der Arbeit." },
                { label: "Delivery time", hint: "Der Lieferant kommt zwischen ... und ... Uhr." },
                { label: "Where to put the package", hint: "Bitte stelle das Paket vor meine Tür / in den Flur." },
                { label: "Thanks + Offer to return favour", hint: "Vielen Dank! Ich mache das nächste Woche wieder gut." },
                { label: "Closing", hint: "Liebe Grüße, [Your Name]" }
            ],
            commonMistakes: [
                { wrong: "Kannst du ein Paket für mich nehmen?", correct: "Kannst du ein Paket für mich annehmen?", reason: "'Annehmen' means to receive/accept a delivery. 'Nehmen' alone means simply to take, which is less precise here." },
                { wrong: "Ich bin auf die Arbeit.", correct: "Ich bin auf der Arbeit.", reason: "Use 'auf der Arbeit' (dative) to say you are at work. 'auf die Arbeit' would imply going to work (movement)." }
            ],
            checklist: ["Neighbour greeted", "Request to collect stated", "Reason for absence given", "Delivery time or window mentioned", "Instructions where to put package", "Thanks included"]
        },
        // ── CATEGORY: EMAILS (ws_026 – ws_028) ───────────────────────────────────
        {
            id: "ws_026",
            category: "Emails",
            categoryIcon: "📧",
            title: "Job Application Email",
            titleDE: "Bewerbung um einen Minijob",
            prompt: "Write a formal email applying for a mini-job as a cashier at a supermarket. Introduce yourself, describe your German language level and availability, and ask for an interview appointment.",
            promptDE: "Schreiben Sie eine formelle E-Mail als Bewerbung für einen Minijob als Kassiererin/Kassierer im Supermarkt. Stellen Sie sich vor, beschreiben Sie Ihre Deutschkenntnisse und Verfügbarkeit, und bitten Sie um ein Vorstellungsgespräch.",
            wordTarget: 60,
            vocab: [
                { word: "die Bewerbung", translation: "application", ml: "ഡി ബേവേർബൂങ്" },
                { word: "der Minijob", translation: "mini-job (part-time)", ml: "ഡേർ മിനിജോബ്" },
                { word: "die Kassiererin", translation: "cashier (female)", ml: "ഡി കാസ്സീരേരിൻ" },
                { word: "verfügbar", translation: "available", ml: "ഫേർഫൂഗ്ബാർ" },
                { word: "die Deutschkenntnisse", translation: "German language skills", ml: "ഡി ഡോയ്ഷ്കെൻട്നിസ്സേ" },
                { word: "das Vorstellungsgespräch", translation: "job interview", ml: "ദാസ് ഫോർഷ്ടെലൂങ്ഗ്സ്ഗ്ഷ്പ്രേഹ്" },
                { word: "sich bewerben", translation: "to apply (for a job)", ml: "സിഹ് ബേവേർബൺ" },
                { word: "mit freundlichen Grüßen", translation: "with kind regards", ml: "മിറ്റ് ഫ്രോയ്ൻഡ്ലിഹൻ ഗ്രൂസൺ" }
            ],
            expressions: [
                { de: "Ich bewerbe mich um die Stelle als ...", en: "I am applying for the position as ..." },
                { de: "Ich habe Deutschkenntnisse auf Niveau A1/A2.", en: "I have German skills at A1/A2 level." },
                { de: "Ich bin montags bis freitags verfügbar.", en: "I am available Monday to Friday." },
                { de: "Ich würde mich über ein Vorstellungsgespräch freuen.", en: "I would be happy to come for an interview." },
                { de: "Über Ihre Rückmeldung freue ich mich.", en: "I look forward to hearing from you." },
                { de: "Mit freundlichen Grüßen,", en: "With kind regards," }
            ],
            tips: [
                "Always start a formal email with 'Sehr geehrte Damen und Herren,' if you don't know the name.",
                "State clearly which position you are applying for in the first sentence.",
                "Mention your language level and practical availability.",
                "Request an interview politely using 'Ich würde mich über ein Gespräch freuen.'",
                "End all formal emails with 'Mit freundlichen Grüßen' (not 'Viele Grüße')."
            ],
            modelAnswer: "Sehr geehrte Damen und Herren,\n\nmein Name ist Priya Kumar und ich bewerbe mich um die Stelle als Kassiererin in Ihrem Supermarkt.\n\nIch bin 25 Jahre alt und komme aus Indien. Ich lerne seit einem Jahr Deutsch und habe Sprachkenntnisse auf Niveau A2. Ich bin montags bis freitags verfügbar, auch morgens und nachmittags.\n\nIch würde mich sehr über ein Vorstellungsgespräch freuen. Bitte kontaktieren Sie mich unter: priya.kumar@email.de\n\nMit freundlichen Grüßen,\nPriya Kumar",
            guidedScaffold: [
                { label: "Formal greeting", hint: "Sehr geehrte Damen und Herren," },
                { label: "Who you are + which job", hint: "Mein Name ist ... und ich bewerbe mich um die Stelle als ..." },
                { label: "Background (age, origin)", hint: "Ich bin ... Jahre alt und komme aus ..." },
                { label: "Language skills + Level", hint: "Ich lerne seit ... Deutsch. Mein Niveau ist ..." },
                { label: "Availability", hint: "Ich bin ... verfügbar." },
                { label: "Request interview + Contact", hint: "Ich würde mich über ein Gespräch freuen. Sie erreichen mich unter ..." },
                { label: "Formal closing", hint: "Mit freundlichen Grüßen, [Full Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich bewerbe für den Minijob.", correct: "Ich bewerbe mich für den Minijob / um die Stelle als ...", reason: "'Sich bewerben' is a reflexive verb — always include the reflexive pronoun 'mich'." },
                { wrong: "Viele Grüße", correct: "Mit freundlichen Grüßen", reason: "'Viele Grüße' is informal. In formal emails and letters, always use 'Mit freundlichen Grüßen'." }
            ],
            checklist: ["Formal greeting used", "Position applied for stated", "Personal background given", "German language level mentioned", "Availability stated", "Interview request included", "Formal closing with full name"]
        },
        {
            id: "ws_027",
            category: "Emails",
            categoryIcon: "📧",
            title: "German Learning Help",
            titleDE: "Hilfe beim Deutschlernen – E-Mail an den Lehrer",
            prompt: "Write an email to your German teacher. Ask for help with a grammar point (the dative case). Suggest a time to meet (Thursday at 4 PM) and thank them for their support.",
            promptDE: "Schreiben Sie eine E-Mail an Ihren Deutschlehrer. Bitten Sie um Hilfe bei einem Grammatikthema (Dativ). Schlagen Sie eine Treffen-Zeit vor (Donnerstag um 16 Uhr) und bedanken Sie sich für die Unterstützung.",
            wordTarget: 55,
            vocab: [
                { word: "die Grammatik", translation: "grammar", ml: "ഡി ഗ്രമ്മാടിക്ക്" },
                { word: "der Dativ", translation: "dative case", ml: "ഡേർ ഡാടീഫ്" },
                { word: "verstehen", translation: "to understand", ml: "ഫേർഷ്ടേൻ" },
                { word: "die Hilfe", translation: "help", ml: "ഡി ഹിൽഫേ" },
                { word: "ein Treffen", translation: "a meeting", ml: "ഐൻ ട്രെഫൻ" },
                { word: "vorschlagen", translation: "to suggest", ml: "ഫോർഷ്ലാഗൻ" },
                { word: "dankbar", translation: "grateful / thankful", ml: "ഡാങ്ക്ബാർ" },
                { word: "die Sprechstunde", translation: "office hours", ml: "ഡി ഷ്പ്രെഹ്ഷ്ടൂൻഡേ" }
            ],
            expressions: [
                { de: "Ich verstehe den Dativ nicht gut.", en: "I don't understand the dative case well." },
                { de: "Könnten Sie mir helfen?", en: "Could you help me?" },
                { de: "Ich schlage vor, uns am Donnerstag zu treffen.", en: "I suggest we meet on Thursday." },
                { de: "Wäre 16 Uhr für Sie in Ordnung?", en: "Would 4 PM be okay for you?" },
                { de: "Ich bin Ihnen sehr dankbar.", en: "I am very grateful to you." },
                { de: "Herzlichen Dank für Ihre Unterstützung.", en: "Many thanks for your support." }
            ],
            tips: [
                "Use 'Sehr geehrte/r ...' for teachers you address formally, or 'Liebe/r ...' if the tone is friendly.",
                "Explain the specific grammar problem clearly and briefly.",
                "Suggest a specific day and time — don't leave it vague.",
                "Always thank the teacher at the end.",
                "Keep the email polite but not too stiff — teachers appreciate warmth."
            ],
            modelAnswer: "Liebe Frau Schmidt,\n\nmein Name ist Arjun und ich besuche Ihren Deutschkurs auf Niveau A1.\n\nIch schreibe Ihnen, weil ich ein Problem mit der Grammatik habe. Ich verstehe den Dativ nicht gut und mache viele Fehler. Könnten Sie mir bitte helfen?\n\nIch schlage vor, uns am Donnerstag zu treffen. Wäre 16 Uhr für Sie in Ordnung? Ich komme gerne in Ihre Sprechstunde.\n\nHerzlichen Dank für Ihre Hilfe und Unterstützung!\n\nMit freundlichen Grüßen,\nArjun Patel",
            guidedScaffold: [
                { label: "Greeting", hint: "Liebe Frau / Lieber Herr [Name]," },
                { label: "Who you are", hint: "Mein Name ist ... und ich besuche Ihren ... Kurs." },
                { label: "Grammar problem", hint: "Ich verstehe [topic] nicht gut und brauche Hilfe." },
                { label: "Request for help", hint: "Könnten Sie mir bitte helfen?" },
                { label: "Suggest time", hint: "Ich schlage vor, uns am [day] um [time] Uhr zu treffen. Wäre das in Ordnung?" },
                { label: "Thank you + Closing", hint: "Herzlichen Dank! Mit freundlichen Grüßen, [Your Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich verstehe nicht der Dativ.", correct: "Ich verstehe den Dativ nicht.", reason: "In German, negation 'nicht' usually comes at or near the end of the sentence, not before the object." },
                { wrong: "Könnten Sie helfen mir?", correct: "Könnten Sie mir helfen?", reason: "The indirect object pronoun 'mir' comes before the infinitive 'helfen' in standard German word order." }
            ],
            checklist: ["Greeting used", "Self-identified as a student", "Grammar problem clearly stated", "Help requested politely", "Time suggested", "Thank you included", "Formal closing used"]
        },
        {
            id: "ws_028",
            category: "Emails",
            categoryIcon: "📧",
            title: "Vacation Notice to Landlord",
            titleDE: "Mitteilung an den Vermieter – Urlaub",
            prompt: "Write an email to your landlord. Inform them that you are going on vacation for 2 weeks (August 1–14). Mention who has your spare key in case of emergency, and give your return date.",
            promptDE: "Schreiben Sie eine E-Mail an Ihren Vermieter. Informieren Sie ihn darüber, dass Sie für 2 Wochen in Urlaub fahren (1.–14. August). Sagen Sie, wer Ihren Ersatzschlüssel hat (bei Notfall), und nennen Sie Ihr Rückkehrdatum.",
            wordTarget: 55,
            vocab: [
                { word: "der Vermieter", translation: "landlord", ml: "ഡേർ ഫേർമീറ്റർ" },
                { word: "der Urlaub", translation: "vacation / holiday", ml: "ഡേർ ഊർലൗബ്" },
                { word: "der Notfall", translation: "emergency", ml: "ഡേർ നോട്ഫൾ" },
                { word: "der Ersatzschlüssel", translation: "spare key", ml: "ഡേർ എർസ്സാട്ട്ഷ്ലൂസ്സൽ" },
                { word: "abwesend", translation: "absent", ml: "ആബ്വേസൻഡ്" },
                { word: "die Rückkehr", translation: "return", ml: "ഡി റൂക്ക്കേർ" },
                { word: "informieren", translation: "to inform", ml: "ഇൻഫോർമീരൻ" },
                { word: "erreichbar", translation: "reachable / contactable", ml: "എർറൈഹ്ബാർ" }
            ],
            expressions: [
                { de: "Ich möchte Sie informieren, dass ich in Urlaub fahre.", en: "I would like to inform you that I am going on vacation." },
                { de: "Ich bin vom 1. bis 14. August abwesend.", en: "I will be absent from August 1st to 14th." },
                { de: "Im Notfall hat Frau / Herr ... meinen Ersatzschlüssel.", en: "In case of emergency, Ms./Mr. ... has my spare key." },
                { de: "Ich bin unter ... erreichbar.", en: "I can be reached at ..." },
                { de: "Ich kehre am 15. August zurück.", en: "I return on August 15th." },
                { de: "Bitte kontaktieren Sie mich, wenn es Probleme gibt.", en: "Please contact me if there are any problems." }
            ],
            tips: [
                "Keep the tone formal since you are writing to your landlord.",
                "Clearly state the exact dates you will be away.",
                "Always mention who has the spare key — this is practical and reassuring.",
                "Provide a contact number in case of emergency.",
                "Give your exact return date so the landlord knows when you're back."
            ],
            modelAnswer: "Sehr geehrter Herr Becker,\n\nmit dieser E-Mail möchte ich Sie informieren, dass ich vom 1. bis 14. August in Urlaub fahre. Ich werde für zwei Wochen abwesend sein.\n\nIm Notfall hat meine Nachbarin, Frau Anna Schulz (Wohnung 3B), meinen Ersatzschlüssel. Sie können sie unter 0176-1234567 erreichen.\n\nIch bin per E-Mail erreichbar: priya@email.de. Ich kehre am 15. August zurück.\n\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen,\nPriya Kumar",
            guidedScaffold: [
                { label: "Formal greeting", hint: "Sehr geehrter Herr / Sehr geehrte Frau [Name]," },
                { label: "Purpose of email", hint: "Mit dieser E-Mail möchte ich Sie informieren, dass ich in Urlaub fahre." },
                { label: "Exact dates", hint: "Ich bin vom [date] bis [date] abwesend." },
                { label: "Spare key holder", hint: "Im Notfall hat [name] meinen Ersatzschlüssel. Sie/Er wohnt in ..." },
                { label: "Contact info", hint: "Ich bin per E-Mail / Telefon erreichbar: ..." },
                { label: "Return date + Closing", hint: "Ich kehre am [date] zurück. Mit freundlichen Grüßen, [Name]" }
            ],
            commonMistakes: [
                { wrong: "Ich fahre Urlaub.", correct: "Ich fahre in Urlaub.", reason: "The correct phrase is 'in Urlaub fahren' — always include the preposition 'in'." },
                { wrong: "Ich kehre am 15. August zurücke.", correct: "Ich kehre am 15. August zurück.", reason: "'Zurückkehren' is separable: the prefix 'zurück' goes to the end without an extra 'e'." }
            ],
            checklist: ["Formal greeting", "Vacation dates stated (from–to)", "Duration mentioned", "Spare key holder named with contact", "Your contact info provided", "Return date given", "Formal closing used"]
        },
        // ── CATEGORY: FORMS (ws_029 – ws_030) ────────────────────────────────────
        {
            id: "ws_029",
            category: "Forms",
            categoryIcon: "📋",
            title: "Fitness Club Registration",
            titleDE: "Anmeldung beim Fitnessstudio",
            prompt: "Fill out a fitness club registration form. Include: your full name, date of birth, address, telephone number, desired membership type (monthly), and starting date (next Monday).",
            promptDE: "Füllen Sie ein Anmeldeformular für ein Fitnessstudio aus. Angaben: Vollständiger Name, Geburtsdatum, Adresse, Telefonnummer, gewünschte Mitgliedschaft (monatlich) und Startdatum (nächsten Montag).",
            wordTarget: 40,
            vocab: [
                { word: "das Fitnessstudio", translation: "gym / fitness centre", ml: "ദാസ് ഫിറ്റ്നസ്സ്ടൂഡിയോ" },
                { word: "die Mitgliedschaft", translation: "membership", ml: "ഡി മിറ്റ്ഗ്ലീഡ്ഷാഫ്ട്" },
                { word: "das Startdatum", translation: "start date", ml: "ദാസ് ഷ്ടാർട്ടഡാടൂം" },
                { word: "monatlich", translation: "monthly", ml: "മോനാട്ലിഹ്" },
                { word: "die Bankverbindung", translation: "bank details", ml: "ഡി ബാൻക്ഫേർബിൻഡൂങ്" },
                { word: "die Kündigung", translation: "cancellation / termination", ml: "ഡി കൂൻഡിഗൂങ്" },
                { word: "der Mitgliedsbeitrag", translation: "membership fee", ml: "ഡേർ മിറ്റ്ഗ്ലീഡ്സ്ബൈട്രാഗ്" },
                { word: "die Unterschrift", translation: "signature", ml: "ഡി ഉൻടർഷ്രിഫ്ട്" }
            ],
            expressions: [
                { de: "Name: ...", en: "Name: ..." },
                { de: "Geburtsdatum: ...", en: "Date of birth: ..." },
                { de: "Gewünschte Mitgliedschaft: monatlich", en: "Desired membership: monthly" },
                { de: "Startdatum: nächsten Montag / ab dem ...", en: "Start date: next Monday / from the ..." },
                { de: "Ich beantrage eine Mitgliedschaft.", en: "I am applying for a membership." },
                { de: "Datum und Unterschrift:", en: "Date and signature:" }
            ],
            tips: [
                "Fill in all fields completely — forms must not have blank required fields.",
                "Write dates in German format: DD.MM.YYYY (e.g., 15.08.2024).",
                "Use 'monatlich' for monthly membership, 'jährlich' for yearly.",
                "Sign and date at the bottom.",
                "Double-check spelling of your name and address."
            ],
            modelAnswer: "Anmeldeformular – FitLife Fitnessstudio\n\nVorname: Arjun\nNachname: Patel\nGeburtsdatum: 12.04.1998\nAdresse: Rosenstraße 5, 80331 München\nTelefon: 0176-9876543\nE-Mail: arjun.patel@email.de\n\nGewünschte Mitgliedschaft: monatlich (29 €/Monat)\nStartdatum: 28.07.2025\nZahlungsart: Lastschrift (SEPA)\n\nIch bestätige, dass alle Angaben korrekt sind.\n\nDatum: 20.07.2025\nUnterschrift: Arjun Patel",
            guidedScaffold: [
                { label: "Personal details", hint: "Vorname: ... / Nachname: ... / Geburtsdatum: DD.MM.YYYY" },
                { label: "Contact", hint: "Adresse: ... / Telefon: ... / E-Mail: ..." },
                { label: "Membership type + Start date", hint: "Mitgliedschaft: monatlich/jährlich / Startdatum: ..." },
                { label: "Payment method", hint: "Zahlungsart: Lastschrift / Überweisung" },
                { label: "Confirmation statement", hint: "Ich bestätige, dass alle Angaben korrekt sind." },
                { label: "Date + Signature", hint: "Datum: ... / Unterschrift: [Full Name]" }
            ],
            commonMistakes: [
                { wrong: "Geburtsdatum: 1998/04/12", correct: "Geburtsdatum: 12.04.1998", reason: "In Germany, dates are written in DD.MM.YYYY format, not YYYY/MM/DD or MM/DD/YYYY." },
                { wrong: "Unterschrift: Arjun", correct: "Unterschrift: Arjun Patel", reason: "Always use your full name as a signature on official forms — first name alone is not sufficient." }
            ],
            checklist: ["Full name (first + last)", "Date of birth in correct format", "Full address", "Phone or email", "Membership type chosen", "Start date given", "Confirmation + Date + Signature"]
        },
        {
            id: "ws_030",
            category: "Forms",
            categoryIcon: "📋",
            title: "Job Application Form",
            titleDE: "Bewerbungsformular ausfüllen",
            prompt: "Fill out a job application form for a supermarket cashier position. Include: personal details, highest education level (high school), current job status (unemployed), languages spoken (German A2, English B2), and a contact person for reference.",
            promptDE: "Füllen Sie ein Bewerbungsformular für die Stelle als Kassierer/in im Supermarkt aus. Angaben: Persönliche Daten, höchster Bildungsabschluss (Abitur), aktueller Berufsstatus (arbeitslos), Sprachkenntnisse (Deutsch A2, Englisch B2) und eine Referenzperson.",
            wordTarget: 50,
            vocab: [
                { word: "das Bewerbungsformular", translation: "job application form", ml: "ദാസ് ബേവേർബൂങ്ഗ്സ്ഫോർമൂലർ" },
                { word: "der Bildungsabschluss", translation: "educational qualification", ml: "ഡേർ ബിൽഡൂങ്ഗ്സ്ആബ്ഷ്ലൂസ്" },
                { word: "arbeitslos", translation: "unemployed", ml: "ആർബൈട്ട്സ്ലോസ്" },
                { word: "die Sprachkenntnisse", translation: "language skills", ml: "ഡി ഷ്പ്രാഹ്കെൻട്നിസ്സേ" },
                { word: "die Referenz", translation: "reference", ml: "ഡി റേഫേരൻട്സ്" },
                { word: "die Stelle", translation: "position / job", ml: "ഡി ഷ്ടെൽലേ" },
                { word: "angestellt", translation: "employed", ml: "ആൻഗേഷ്ടെൽട്ട്" },
                { word: "Vollzeit / Teilzeit", translation: "full-time / part-time", ml: "ഫോൾസൈറ്റ് / ടൈൽസൈറ്റ്" }
            ],
            expressions: [
                { de: "Ich bewerbe mich für die Stelle als ...", en: "I am applying for the position as ..." },
                { de: "Höchster Bildungsabschluss: Abitur", en: "Highest qualification: A-levels / high school diploma" },
                { de: "Berufsstatus: derzeit arbeitslos", en: "Employment status: currently unemployed" },
                { de: "Sprachkenntnisse: Deutsch (A2), Englisch (B2)", en: "Languages: German (A2), English (B2)" },
                { de: "Referenzperson: Name, Telefon, Beziehung", en: "Reference: name, phone, relationship" },
                { de: "Ich bin sofort verfügbar.", en: "I am available immediately." }
            ],
            tips: [
                "Write 'derzeit arbeitslos' if currently unemployed — don't leave this field blank.",
                "Always list language levels using the European CEFR scale (A1, A2, B1, B2, C1, C2).",
                "A reference person should be a former employer or teacher, not a family member.",
                "State whether you are available for Vollzeit (full-time) or Teilzeit (part-time).",
                "Double-check all dates and spellings before submitting."
            ],
            modelAnswer: "Bewerbungsformular\n\nGewünschte Stelle: Kassiererin / Kassierer\n\n── Persönliche Daten ──\nVorname: Priya\nNachname: Kumar\nGeburtsdatum: 05.09.1999\nAdresse: Lindenallee 8, 10115 Berlin\nTelefon: 0176-5544332\nE-Mail: priya.kumar@email.de\n\n── Bildung ──\nHöchster Abschluss: Abitur (2017, Delhi, Indien)\n\n── Berufsstatus ──\nAktueller Status: derzeit arbeitslos\nVerfügbarkeit: sofort, Teilzeit (20 Std./Woche)\n\n── Sprachkenntnisse ──\nDeutsch: A2\nEnglisch: B2\nHindi: Muttersprache\n\n── Referenz ──\nName: Dr. Anita Sharma\nBeziehung: ehemalige Arbeitgeberin\nTelefon: 0176-9988776\n\nDatum: 20.07.2025\nUnterschrift: Priya Kumar",
            guidedScaffold: [
                { label: "Job applied for", hint: "Gewünschte Stelle: ..." },
                { label: "Personal details", hint: "Vorname, Nachname, Geburtsdatum, Adresse, Telefon, E-Mail" },
                { label: "Education", hint: "Höchster Abschluss: ... (Jahr, Ort)" },
                { label: "Employment status + Availability", hint: "Aktueller Status: ... / Verfügbarkeit: sofort / ab [date], Vollzeit/Teilzeit" },
                { label: "Languages", hint: "Deutsch: A2 / Englisch: B2 / Muttersprache: ..." },
                { label: "Reference person", hint: "Name: ... / Beziehung: ... / Telefon: ..." },
                { label: "Date + Signature", hint: "Datum: ... / Unterschrift: [Full Name]" }
            ],
            commonMistakes: [
                { wrong: "Sprachkenntnisse: Deutsch gut", correct: "Sprachkenntnisse: Deutsch A2 (Grundkenntnisse)", reason: "Use the official CEFR level (A1–C2) for language skills on formal forms, not vague adjectives like 'gut'." },
                { wrong: "Referenz: Meine Mutter", correct: "Referenz: [former employer / teacher name]", reason: "References must be professional contacts, not family members." }
            ],
            checklist: ["Position applied for", "Full personal details", "Education level stated", "Employment status given", "Availability (full/part-time)", "Language skills with CEFR levels", "Reference person included", "Date + Signature"]
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
    vocabStats: {},
    listeningSeconds: 0
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
                vocabStats: parsed.vocabStats || {},
                listeningSeconds: parsed.listeningSeconds || 0
            };
            migrateVocabProgressToSRS();
        } catch(e) {
            console.error("Error loading portal state", e);
        }
    }
}

// --- SPACED REPETITION SYSTEM (SRS) LOGIC & INSIGHTS ---
function migrateVocabProgressToSRS() {
    if (portalState.progress && portalState.progress.vocab) {
        for (const wordId in portalState.progress.vocab) {
            const val = portalState.progress.vocab[wordId];
            if (val === true || (typeof val === "object" && val !== null && !val.status)) {
                portalState.progress.vocab[wordId] = {
                    status: "Review",
                    interval: 1,
                    nextReview: new Date().toISOString().split('T')[0],
                    lastReviewed: new Date().toISOString().split('T')[0],
                    streak: 1,
                    dateLearned: new Date().toISOString().split('T')[0]
                };
            }
        }
    }
}

function updateVocabSRS(wordId, isCorrect) {
    if (!portalState.progress.vocab) {
        portalState.progress.vocab = {};
    }
    
    if (!portalState.progress.vocab[wordId] || typeof portalState.progress.vocab[wordId] !== "object") {
        portalState.progress.vocab[wordId] = {
            status: "New",
            interval: 0,
            nextReview: new Date().toISOString().split('T')[0],
            lastReviewed: "",
            streak: 0
        };
    }
    
    const item = portalState.progress.vocab[wordId];
    const today = new Date().toISOString().split('T')[0];
    
    if (!item.dateLearned) {
        item.dateLearned = today;
    }
    
    if (isCorrect) {
        item.streak = (item.streak || 0) + 1;
        item.lastReviewed = today;
        
        let nextInterval = 1;
        if (item.status === "New") {
            item.status = "Learning";
            nextInterval = 1;
        } else if (item.status === "Learning") {
            item.status = "Review";
            nextInterval = 3;
        } else if (item.status === "Review") {
            if (item.interval === 3) nextInterval = 7;
            else if (item.interval === 7) nextInterval = 14;
            else if (item.interval === 14) nextInterval = 30;
            else if (item.interval === 30) {
                item.status = "Mastered";
                nextInterval = 30;
            }
        } else if (item.status === "Mastered") {
            nextInterval = 30;
        }
        
        item.interval = nextInterval;
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + nextInterval);
        item.nextReview = nextDate.toISOString().split('T')[0];
    } else {
        item.streak = 0;
        item.lastReviewed = today;
        item.status = "Learning";
        item.interval = 1;
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 1);
        item.nextReview = nextDate.toISOString().split('T')[0];
    }
    
    savePortalStateToStorage();
    refreshSRSWidgets();
}

function getDueReviewsCount() {
    const today = new Date().toISOString().split('T')[0];
    let count = 0;
    if (portalState.progress && portalState.progress.vocab) {
        for (const wordId in portalState.progress.vocab) {
            const item = portalState.progress.vocab[wordId];
            if (item && typeof item === "object") {
                if (item.status !== "Mastered" && item.status !== "New" && item.nextReview <= today) {
                    count++;
                }
            }
        }
    }
    return count;
}

function getMasteredWordsCount() {
    let count = 0;
    if (portalState.progress && portalState.progress.vocab) {
        for (const wordId in portalState.progress.vocab) {
            const item = portalState.progress.vocab[wordId];
            if (item && typeof item === "object" && item.status === "Mastered") {
                count++;
            }
        }
    }
    return count;
}

function getWordsLearnedThisWeekCount() {
    const today = new Date();
    let count = 0;
    if (portalState.progress && portalState.progress.vocab) {
        for (const wordId in portalState.progress.vocab) {
            const item = portalState.progress.vocab[wordId];
            if (item && typeof item === "object" && item.dateLearned) {
                const dl = new Date(item.dateLearned);
                const diffTime = Math.abs(today - dl);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays <= 7) {
                    count++;
                }
            }
        }
    }
    return count;
}

function getListeningMinutesCompleted() {
    return Math.round((portalState.listeningSeconds || 0) / 60);
}

function refreshSRSWidgets() {
    const dueCount = getDueReviewsCount();
    const masteredCount = getMasteredWordsCount();
    const learnedWeek = getWordsLearnedThisWeekCount();
    const listeningMins = getListeningMinutesCompleted();
    
    // Landing dashboard elements
    const dueEl = document.getElementById("stat-srs-due");
    if (dueEl) dueEl.textContent = dueCount;
    
    const masteredEl = document.getElementById("stat-srs-mastered");
    if (masteredEl) masteredEl.textContent = masteredCount;
    
    const learnedWeekEl = document.getElementById("stat-learned-this-week");
    if (learnedWeekEl) learnedWeekEl.textContent = learnedWeek;
    
    const listeningMinsEl = document.getElementById("stat-listening-minutes");
    if (listeningMinsEl) listeningMinsEl.textContent = listeningMins;
    
    // Streaks elements
    const curStreakEl = document.getElementById("stat-current-streak");
    if (curStreakEl) curStreakEl.textContent = portalState.streak.current;
    const longStreakEl = document.getElementById("stat-longest-streak");
    if (longStreakEl) longStreakEl.textContent = portalState.streak.longest;
    const practiceSolvedEl = document.getElementById("stat-practice-completed");
    if (practiceSolvedEl) practiceSolvedEl.textContent = portalState.sessionsCompleted || 0;
    const examAttemptEl = document.getElementById("stat-exams-completed");
    if (examAttemptEl) examAttemptEl.textContent = portalState.examsCompleted || 0;
    
    // Revision Center elements
    const rcDueEl = document.getElementById("lbl-due-reviews-count");
    if (rcDueEl) rcDueEl.textContent = `${dueCount} Due`;
    const rcMistakesEl = document.getElementById("lbl-mistakes-archive-count");
    if (rcMistakesEl) rcMistakesEl.textContent = `${(portalState.mistakes || []).length} Mistakes`;
    
    // Update dashboard mistakes counter
    const mCountEl = document.getElementById("dashboard-mistakes-count");
    if (mCountEl) mCountEl.textContent = (portalState.mistakes || []).length;
}

window.updateVocabSRS = updateVocabSRS;
window.getDueReviewsCount = getDueReviewsCount;
window.refreshSRSWidgets = refreshSRSWidgets;


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

window.speakText = speakText;

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

    // Always clear existing session questions before populating
    // (prevents question accumulation if called after a stored session is loaded)
    state.sessionQuestions.hoeren = [];
    state.sessionQuestions.lesen = [];
    state.sessionQuestions.schreiben = [];
    state.sessionQuestions.sprechen = [];

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
function switchToView(viewId, pushHistory = true) {
    const panels = document.querySelectorAll(".view-panel");
    panels.forEach(p => {
        p.classList.toggle("active", p.id === viewId);
    });

    // Always scroll to top on every view/page switch
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTop = 0;
    window.scrollTo(0, 0);

    const isExamView = (viewId === "view-exam-screen");
    document.getElementById("app-sidebar").style.display = isExamView ? "flex" : "none";
    document.getElementById("app-footer").style.display = isExamView ? "flex" : "none";
    document.getElementById("header-stats").style.display = (viewId !== "view-start-screen") ? "flex" : "none";
    document.getElementById("progress-bar-wrapper").style.display = (viewId !== "view-start-screen") ? "block" : "none";

    if (pushHistory) {
        try {
            window.history.pushState({ viewId: viewId }, "", "");
        } catch (e) {
            console.warn("History pushState failed:", e);
        }
    }
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
    familie:        { name: "Familie",                      english: "Family",                        emoji: "👪" },
    begruessung:    { name: "Begrüßung & Vorstellung",      english: "Greetings & Introductions",     emoji: "👋" },
    personalinfo:   { name: "Persönliche Informationen",   english: "Personal Information",           emoji: "ℹ️" },
    laender:        { name: "Länder & Sprachen",            english: "Countries & Languages",          emoji: "🌐" },
    tage:           { name: "Tage, Monate & Datum",        english: "Days, Months & Dates",           emoji: "📅" },
    zahlen:         { name: "Zahlen",                       english: "Numbers",                        emoji: "🔢" },
    uhrzeit:        { name: "Uhrzeit & Termine",            english: "Time & Appointments",            emoji: "⏰" },
    wetter:         { name: "Wetter",                       english: "Weather",                        emoji: "☀️" },
    wohnung:        { name: "Wohnung & Möbel",              english: "Home & Furniture",               emoji: "🏠" },
    kleidung:       { name: "Kleidung",                     english: "Clothing",                       emoji: "👕" },
    essen:          { name: "Essen & Trinken",              english: "Food & Drinks",                  emoji: "🍎" },
    einkaufen:      { name: "Einkaufen & Geld",             english: "Shopping & Money",               emoji: "🛍️" },
    hobbys:         { name: "Hobbys & Sport",               english: "Hobbies & Sports",               emoji: "⚽" },
    reisen:         { name: "Reisen & Urlaub",              english: "Travel & Holidays",              emoji: "✈️" },
    verkehr:        { name: "Verkehr & Transport",          english: "Traffic & Transport",            emoji: "🚗" },
    stadt:          { name: "Stadt & Orte",                 english: "City & Places",                  emoji: "🏙️" },
    schule:         { name: "Schule & Lernen",              english: "School & Learning",              emoji: "🏫" },
    arbeit:         { name: "Arbeit & Beruf",               english: "Work & Profession",              emoji: "💼" },
    technologie:    { name: "Technologie & Kommunikation", english: "Technology & Communication",     emoji: "💻" },
    tagesablauf:    { name: "Tagesablauf",                  english: "Daily Routine",                  emoji: "🌅" },
    gesundheit:     { name: "Gesundheit & Körper",          english: "Health & Body",                  emoji: "💪" },
    medizin:        { name: "Medizin & Arzt",               english: "Medicine & Doctor",              emoji: "🏥" },
    notfall:        { name: "Notfall-Vokabeln",             english: "Emergency Words",                emoji: "🚨" },
    tiere:          { name: "Tiere & Natur",                english: "Animals & Nature",               emoji: "🐾" },
    farben:         { name: "Farben & Beschreibungen",      english: "Colours & Descriptions",         emoji: "🎨" },
    koerper:        { name: "Körperteile",                  english: "Body Parts",                     emoji: "🧠" },
    musik:          { name: "Musik & Kunst",                english: "Music & Art",                    emoji: "🎵" },
    natur:          { name: "Natur & Umwelt",               english: "Nature & Environment",           emoji: "🌿" },
    sport_vocab:    { name: "Sport & Bewegung",             english: "Sport & Movement",               emoji: "🏅" },
    berufe:         { name: "Berufe & Jobs",                english: "Jobs & Professions",             emoji: "👔" },
    gefuehle:       { name: "Gefühle & Emotionen",          english: "Feelings & Emotions",            emoji: "😊" },
    haushalt:       { name: "Haushalt & Alltag",            english: "Household & Everyday Life",      emoji: "🏠" },
    nahrungsmittel: { name: "Nahrungsmittel & Kochen",      english: "Food Ingredients & Cooking",     emoji: "🥘" },
    jahreszeiten:   { name: "Jahreszeiten & Wetter",        english: "Seasons & Weather",              emoji: "🌦️" }
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
    if (typeof openInteractiveHoerenHub === "function") {
        openInteractiveHoerenHub();
    } else {
        learningState = {
            type: "listening",
            topic: "Hören",
            items: PRACTICE_DATABASE.listening,
            currentIndex: 0
        };
        switchToView("view-learning-workspace");
        loadLearnItem();
    }
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
            <p style="margin-top:0;"><strong>Bitte wählen Sie ein Vokabelthema (34 Themen):</strong></p>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:12px; max-height:480px; overflow-y:auto; padding-right:6px;">`;
            
        for (const t in VOCAB_TOPIC_INFO) {
            const info = VOCAB_TOPIC_INFO[t];
            const stats = portalState.vocabStats[t] || { learned: false, practised: false, mastered: false };
            let badgesHTML = "";
            if (stats.learned) badgesHTML += `<span class="badge status-badge" style="background:rgba(16,185,129,0.15); color:var(--color-success); font-size:0.65rem; padding:2px 4px; border-radius:4px;">Gelernt</span>`;
            if (stats.practised) badgesHTML += `<span class="badge status-badge" style="background:rgba(245,158,11,0.15); color:var(--color-warning); font-size:0.65rem; padding:2px 4px; border-radius:4px; margin-left:4px;">Geübt</span>`;
            if (stats.mastered) badgesHTML += `<span class="badge status-badge" style="background:rgba(234,179,8,0.15); color:#eab308; font-size:0.65rem; padding:2px 4px; border-radius:4px; margin-left:4px;">Meister</span>`;
            

            html += `<button class="btn btn-secondary btn-touch subtopic-select-btn" data-subtopic="${t}" style="width:100%; text-align:left; padding:12px; display:flex; flex-direction:column; gap:2px; justify-content:center;">
                <span style="font-weight:600; font-size:0.9rem;">${info.emoji} ${info.name}</span>
                <span style="font-size:0.7rem; color:var(--color-text-muted); font-style:italic; margin-bottom:2px;">${info.english}</span>
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
        
    } else if (type === "listening" || type === "stories") {
        if (typeof openInteractiveHoerenHub === "function") {
            openInteractiveHoerenHub();
        } else {
            startListeningLearning();
        }
        
    } else if (type === "writing") {
        switchToView("view-practice-workspace");
        showWritingStudioTopics();
        
    } else if (type === "speaking") {
        switchToView("view-practice-workspace");
        practiceState.questions = [...PRACTICE_DATABASE.speaking].sort(() => Math.random() - 0.5);
        practiceState.subTopic = "Speaking Cards";
        loadPracticeQuestion();
        
    } else if (type === "sprechtrainer") {
        showSprechtrainerHub();

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

I am an absolute beginner learning German at the A1 level. I have attached a .wav audio file with my spoken response for this card.

Please evaluate my spoken German response and provide feedback in English. Include:
1. A transcription of what I said (if audio is attached).
2. Whether my response correctly followed the instruction above.
3. Corrections for any grammar, vocabulary, or pronunciation mistakes — explain them in English.
4. 3 example correct responses at the A1 level (written in German, with English translation beside each).
5. Encouragement and a tip for improvement.

Note: All explanations, corrections, and tips must be in English. German example sentences are welcome, but always follow them with an English translation.`;
        showAIPromptModal(promptText);
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
        
        if (q.id && q.id.startsWith("pv_")) {
            updateVocabSRS(q.id, true);
        } else if (practiceState.mode === "vocab") {
            portalState.progress.vocab[q.id] = true;
        }
        
        if (practiceState.mode === "grammar") {
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
        
        if (q.id && q.id.startsWith("pv_")) {
            updateVocabSRS(q.id, false);
        }
        
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
        alert("✅ Prompt copied to clipboard!\n\nGemini has been opened in a new tab. Please:\n1. Paste the prompt (Ctrl+V or long-press → Paste)\n2. Attach your downloaded .wav audio file\n3. Press Send to get your feedback!");
    }).catch(err => {
        console.error("Clipboard copy failed:", err);
        alert("⚠️ Could not copy automatically. Here is the prompt — please copy it manually:\n\n" + text);
    });
}

function showAIPromptModal(promptText) {
    // Remove any existing modal
    const existing = document.getElementById("ai-prompt-modal-overlay");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "ai-prompt-modal-overlay";
    overlay.className = "ai-prompt-modal-overlay";

    overlay.innerHTML = `
        <div class="ai-prompt-modal-card">
            <div class="ai-prompt-modal-header">
                <span class="ai-prompt-modal-icon">🤖</span>
                <h3>Evaluate with AI</h3>
            </div>
            <div class="ai-prompt-modal-steps">
                <p><strong>Follow these steps:</strong></p>
                <ol>
                    <li>Click the <strong>Download .wav</strong> button on this page to save your recording.</li>
                    <li>Click <strong>"Copy Prompt"</strong> below to copy the evaluation text.</li>
                    <li>Open <a href="https://gemini.google.com/app" target="_blank" rel="noopener">Gemini</a> or <a href="https://chatgpt.com" target="_blank" rel="noopener">ChatGPT</a>.</li>
                    <li>Paste the prompt and <strong>attach your .wav file</strong>, then press Send.</li>
                </ol>
            </div>
            <label class="ai-prompt-modal-label">📋 Your AI Prompt:</label>
            <textarea id="ai-prompt-modal-text" class="ai-prompt-modal-textarea" readonly>${promptText}</textarea>
            <div class="ai-prompt-modal-buttons">
                <button id="ai-prompt-copy-btn" class="btn btn-primary btn-touch">📋 Copy Prompt</button>
                <button id="ai-prompt-close-btn" class="btn btn-secondary btn-touch">✕ Close</button>
            </div>
            <p id="ai-prompt-copy-confirm" class="ai-prompt-copy-confirm" style="display:none;">✅ Prompt copied! Now paste it into Gemini or ChatGPT.</p>
        </div>
    `;

    document.body.appendChild(overlay);

    // Close on overlay background click
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
    });

    document.getElementById("ai-prompt-close-btn").onclick = () => overlay.remove();

    document.getElementById("ai-prompt-copy-btn").onclick = () => {
        const ta = document.getElementById("ai-prompt-modal-text");
        ta.select();
        ta.setSelectionRange(0, 99999); // for mobile
        navigator.clipboard.writeText(ta.value).then(() => {
            const confirm = document.getElementById("ai-prompt-copy-confirm");
            confirm.style.display = "block";
            document.getElementById("ai-prompt-copy-btn").textContent = "✅ Copied!";
        }).catch(() => {
            // Fallback: execCommand for older browsers / restricted contexts
            try {
                document.execCommand("copy");
                const confirm = document.getElementById("ai-prompt-copy-confirm");
                confirm.style.display = "block";
                document.getElementById("ai-prompt-copy-btn").textContent = "✅ Copied!";
            } catch (e2) {
                alert("⚠️ Auto-copy blocked by your browser. Please manually select the text above and copy it.");
            }
        });
    };
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

    const initialView = (hasStoredSession && state.isStarted && !state.isSubmitted) ? "view-exam-screen" : "view-landing-dashboard";

    // Setup SPA router state
    try {
        window.history.replaceState({ isBase: true }, "", "");
        window.history.pushState({ viewId: initialView }, "", "");
    } catch (e) {
        console.warn("History API block/error:", e);
    }

    if (initialView === "view-exam-screen") {
        switchToView("view-exam-screen", false);
        startGlobalExamTimer();
        loadQuestion(state.currentModuleIndex, state.currentQuestionIndex);
    } else {
        switchToView("view-landing-dashboard", false);
    }

    // Setup back button history popstate listener
    window.addEventListener("popstate", (event) => {
        if (event.state) {
            if (event.state.isBase) {
                // If we popped to base (which is the entry point below dashboard/launch screen)
                const currentActivePanel = document.querySelector(".view-panel.active");
                const currentViewId = currentActivePanel ? currentActivePanel.id : "view-landing-dashboard";
                
                if (currentViewId === "view-landing-dashboard" || currentViewId === "view-start-screen") {
                    if (confirm("Möchten Sie das Lernportal wirklich schließen? / Do you really want to close the learning portal?")) {
                        window.close();
                        window.history.back();
                    } else {
                        // Push the view state back to prevent leaving
                        window.history.pushState({ viewId: currentViewId }, "", "");
                    }
                } else {
                    // If they hit base from a sub-page, go back to dashboard
                    window.history.pushState({ viewId: "view-landing-dashboard" }, "", "");
                    switchToView("view-landing-dashboard", false);
                }
            } else if (event.state.viewId) {
                // Navigate back to the previous view panel
                switchToView(event.state.viewId, false);
            }
        } else {
            // Fallback for empty state
            const currentActivePanel = document.querySelector(".view-panel.active");
            const currentViewId = currentActivePanel ? currentActivePanel.id : "view-landing-dashboard";
            if (currentViewId === "view-landing-dashboard" || currentViewId === "view-start-screen") {
                if (confirm("Möchten Sie das Lernportal wirklich schließen? / Do you really want to close the learning portal?")) {
                    window.close();
                } else {
                    window.history.pushState({ viewId: currentViewId }, "", "");
                }
            } else {
                switchToView("view-landing-dashboard", false);
            }
        }
    });

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


    // Back to Sprechtrainer hub button
    const btnBackHub = document.getElementById("btn-sprechtrainer-back-hub");
    if (btnBackHub) {
        btnBackHub.onclick = () => {
            stopRecordingProcess();
            showSprechtrainerHub();
        };
    }

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
            if (practiceState.mode === "writing" && writingStudioState.activeActivity) {
                showWritingStudioTopics();
            } else {
                switchToView("view-practice-menu");
            }
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
        try {
            console.log("[START EXAM] Button clicked");
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
            console.log("[START EXAM] Calling initExamSession...");
            initExamSession();
            console.log("[START EXAM] sessionQuestions.hoeren.length =", state.sessionQuestions.hoeren.length);
            console.log("[START EXAM] sessionQuestions.lesen.length  =", state.sessionQuestions.lesen.length);

            // Update displays
            const candidateDisplay = document.getElementById("display-candidate-name");
            if (candidateDisplay) {
                candidateDisplay.textContent = state.candidateName;
                const badge = document.getElementById("header-candidate-badge");
                if (badge) badge.style.display = "";
            }

            console.log("[START EXAM] Switching to exam screen...");
            switchToView("view-exam-screen");
            startGlobalExamTimer();
            loadQuestion(0, 0);
            console.log("[START EXAM] Done — exam loaded successfully.");
        } catch (err) {
            console.error("[START EXAM] ERROR:", err);
            alert("Ein Fehler ist aufgetreten. Bitte öffnen Sie die Browser-Konsole (F12) für Details.\n\nError: " + err.message);
        }
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

// ==================== WRITING STUDIO SYSTEM ====================
const writingStudioState = {
    activeActivity: null,
    currentStage: 1,
    guidedAnswers: {},
    independentDraft: "",
    checklistAnswers: {},
    checkedVocab: {},
    checkedTips: {},
    matchedExpressions: {}
};

// 1. Show Writing Studio Topics Selection screen
function showWritingStudioTopics() {
    practiceState.mode = "writing";
    writingStudioState.activeActivity = null;
    
    // Set Header titles
    document.getElementById("display-current-module").textContent = "Schreiben-Übung (Writing Practice)";
    document.getElementById("practice-workspace-title").textContent = "Schreibstudio: Themenauswahl (Writing Studio: Topic Selection)";
    document.getElementById("practice-question-tag").textContent = "Themenauswahl (Topic Selection)";
    document.getElementById("practice-score-current").textContent = "0";
    document.getElementById("practice-score-total").textContent = "20";
    
    // Hide standard practice panels
    document.getElementById("practice-stimulus-hoeren").style.display = "none";
    document.getElementById("practice-stimulus-sprechen").style.display = "none";
    document.getElementById("practice-options-list").style.display = "none";
    document.getElementById("practice-editor-container").style.display = "none";
    document.getElementById("practice-recorder-container").style.display = "none";
    document.getElementById("practice-explanation-box").style.display = "none";
    document.getElementById("btn-practice-check-answer").style.display = "none";
    document.getElementById("btn-practice-next").style.display = "none";
    
    if (document.getElementById("practice-results-container")) {
        document.getElementById("practice-results-container").style.display = "none";
    }
    
    // Hide our custom writing panels just in case
    document.getElementById("practice-stimulus-writing").style.display = "none";
    document.getElementById("practice-qa-writing").style.display = "none";
    
    // Activate standard reading stimulus panel for displaying topic select list
    document.getElementById("practice-stimulus-text").style.display = "block";
    document.getElementById("practice-stimulus-label").textContent = "Schreibstudio-Themen (Writing Studio Topics)";
    
    // Group the 20 structured writing tasks by category
    const categories = ["Personal", "Messages", "Emails", "Forms"];
    const catTranslations = {
        "Personal": "PERSONAL (Personal)",
        "Messages": "MESSAGES (Messages)",
        "Emails": "EMAILS (Emails)",
        "Forms": "FORMS (Forms)"
    };
    
    let html = `
        <div class="writing-topics-selection" style="padding: 12px 16px;">
            <p style="margin-top:0; font-size:1rem; font-weight:600; color:var(--color-text-primary);">Wählen Sie ein Schreibthema (Choose a Writing Topic - 20 Practice Exercises):</p>
            <div style="display:flex; flex-direction:column; gap:16px; max-height:550px; overflow-y:auto; padding-right:6px;">
    `;
    
    categories.forEach(cat => {
        const tasks = PRACTICE_DATABASE.writingStudio.filter(t => t.category === cat);
        let icon = "📝";
        if (tasks.length > 0) icon = tasks[0].categoryIcon;
        
        html += `
            <div class="category-block" style="border-bottom: 1px solid var(--color-border); padding-bottom:12px; margin-bottom:4px;">
                <h4 style="margin: 0 0 10px 0; color: var(--color-accent); display:flex; align-items:center; gap:8px; font-size:1.05rem;">
                    <span style="font-size:1.2rem;">${icon}</span> ${catTranslations[cat]}
                </h4>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap:10px;">
        `;
        
        tasks.forEach(task => {
            const isCompleted = portalState.progress.writing && portalState.progress.writing[task.id];
            let badgeHTML = isCompleted 
                ? `<span class="badge status-badge" style="background:rgba(16,185,129,0.15); color:var(--color-success); font-size:0.65rem; padding:2px 4px; border-radius:4px;">Abgeschlossen (Completed)</span>` 
                : `<span style="font-size:0.65rem; color:var(--color-text-muted);">Neu (New)</span>`;
                
            html += `
                <button class="btn btn-secondary btn-touch ws-topic-btn" data-id="${task.id}" style="width:100%; text-align:left; padding:10px 12px; display:flex; flex-direction:column; gap:2px; justify-content:center; align-items: flex-start; background:var(--color-panel); border:1px solid var(--color-border);">
                    <span style="font-weight:600; font-size:0.85rem; color:var(--color-text-primary); white-space: normal; text-align: left; line-height:1.2;">${task.titleDE}</span>
                    <span style="font-size:0.75rem; color:var(--color-text-muted); font-style:italic; white-space: normal; text-align: left; line-height:1.2;">${task.title}</span>
                    <div style="display:flex; margin-top:4px;">${badgeHTML}</div>
                </button>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    document.getElementById("practice-stimulus-body").innerHTML = html;
    
    // Render introductory card on the right-side panel
    document.querySelector("#view-practice-workspace .qa-header").style.display = "block";
    document.querySelector("#view-practice-workspace .question-body").style.display = "block";
    document.getElementById("practice-question-text").textContent = "Schreibstudio-Lernmethode (Writing Studio Learning Method)";
    document.getElementById("practice-question-translation").style.display = "none";
    document.getElementById("practice-options-list").style.display = "block";
    
    document.getElementById("practice-options-list").innerHTML = `
        <div class="glass-panel" style="padding: 24px; text-align: center; display:flex; flex-direction:column; align-items:center; gap:16px;">
            <span style="font-size: 3.5rem; margin-bottom:4px;">✍️</span>
            <h3 style="margin:0; font-family:var(--font-display); color:var(--color-text-primary);">A1 Schreibkompetenz aufbauen (Build A1 Writing Skills)</h3>
            <p style="font-size:0.9rem; color:var(--color-text-secondary); margin:0; line-height:1.6; text-align:left;">
                Dieses Schreibstudio führt Sie schrittweise durch jeden Aufgabentyp. Bevor Sie selbstständig schreiben, lernen Sie die wichtigsten Begriffe, typische Formulierungen, Grammatik-Tricks und analysieren Musterantworten.
            </p>
            <div style="width:100%; text-align:left; font-size:0.8rem; background:rgba(255,255,255,0.02); padding:12px; border-radius:var(--radius-md); border:1px solid var(--color-border); display:flex; flex-direction:column; gap:6px;">
                <strong>Der 7-Schritte-Lernpfad (The 7-Step Learning Path):</strong>
                <ol style="margin:0; padding-left:16px; color:var(--color-text-muted); display:flex; flex-direction:column; gap:4px;">
                    <li>Wortschatz (Vocabulary - Phonetic & Audio)</li>
                    <li>Nützliche Ausdrücke (Useful Expressions)</li>
                    <li>Schreib-Tipps (Writing Tips)</li>
                    <li>Musterantwort (Model Answer & Common Mistakes)</li>
                    <li>Geleitetes Schreiben (Guided Writing - sentence blocks)</li>
                    <li>Freies Schreiben (Write - Independent Writing & Checklist)</li>
                    <li>KI-Bewertung (AI Evaluation)</li>
                </ol>
            </div>
            <p style="font-size:0.85rem; color:var(--color-accent); font-style:italic; margin:0;">
                Wählen Sie links ein Schreibthema aus, um zu beginnen! (Choose a topic on the left to begin!)
            </p>
        </div>
    `;
    
    // Bind click events on topics
    setTimeout(() => {
        document.querySelectorAll(".ws-topic-btn").forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute("data-id");
                startWritingStudioActivity(id);
            };
        });
    }, 100);
}

// 2. Start a specific Writing Studio Activity
function startWritingStudioActivity(id) {
    const activity = PRACTICE_DATABASE.writingStudio.find(t => t.id === id);
    if (!activity) return;
    
    writingStudioState.activeActivity = activity;
    writingStudioState.currentStage = 1;
    writingStudioState.guidedAnswers = {};
    writingStudioState.checklistAnswers = {};
    writingStudioState.checkedVocab = {};
    writingStudioState.checkedTips = {};
    writingStudioState.matchedExpressions = {};
    
    // Load independent draft if it already exists in global portalState
    writingStudioState.independentDraft = portalState.writingDrafts[id] || "";
    
    // Hide standard elements
    document.getElementById("practice-stimulus-text").style.display = "none";
    document.querySelector("#view-practice-workspace .qa-header").style.display = "none";
    document.querySelector("#view-practice-workspace .question-body").style.display = "none";
    
    // Show custom writing panels
    document.getElementById("practice-stimulus-writing").style.display = "flex";
    document.getElementById("practice-qa-writing").style.display = "flex";
    
    // Set Header
    document.getElementById("writing-stimulus-label").textContent = activity.titleDE;
    document.getElementById("writing-status-category").textContent = `${activity.categoryIcon} ${activity.category}`;
    
    // Bind navigation buttons
    document.getElementById("btn-ws-prev").onclick = () => {
        if (writingStudioState.currentStage > 1) {
            loadWritingStudioStage(writingStudioState.currentStage - 1);
        } else {
            showWritingStudioTopics();
        }
    };
    
    document.getElementById("btn-ws-next").onclick = () => {
        if (writingStudioState.currentStage < 7) {
            // If in Stage 6, verify checklist before moving to stage 7
            if (writingStudioState.currentStage === 6) {
                const requiredChecks = ["greeting", "info", "grammar", "closing", "signature"];
                const allChecked = requiredChecks.every(c => writingStudioState.checklistAnswers[c]);
                if (!allChecked) {
                    alert("Bitte überprüfen Sie zuerst alle Punkte in der Checkliste, bevor Sie die AI-Auswertung starten.");
                    return;
                }
            }
            loadWritingStudioStage(writingStudioState.currentStage + 1);
        } else {
            finishWritingStudioActivity();
        }
    };
    
    loadWritingStudioStage(1);
}

// 3. Load active step state
function loadWritingStudioStage(stageNum) {
    writingStudioState.currentStage = stageNum;
    const activity = writingStudioState.activeActivity;
    
    // Update Stage Indicator bar
    const stages = [
        { num: 1, nameDE: "Vokabeln (Vocab)" },
        { num: 2, nameDE: "Ausdrücke (Expressions)" },
        { num: 3, nameDE: "Tipps (Tips)" },
        { num: 4, nameDE: "Modell (Model)" },
        { num: 5, nameDE: "Geleitet (Guided)" },
        { num: 6, nameDE: "Schreiben (Write)" },
        { num: 7, nameDE: "KI-Bewertung (AI Eval)" }
    ];
    
    let barHTML = `<div style="display:flex; justify-content:space-between; align-items:center; width:100%; max-width:320px; margin:0 auto; gap:6px;">`;
    stages.forEach(s => {
        const isCurrent = s.num === stageNum;
        const isCompleted = s.num < stageNum;
        let style = "background:rgba(255,255,255,0.03); color:var(--color-text-muted); border:1px solid var(--color-border);";
        if (isCurrent) {
            style = "background:var(--color-accent); color:var(--color-panel-solid); border:1px solid var(--color-accent); font-weight:700; box-shadow:0 0 10px rgba(99,102,241,0.4);";
        } else if (isCompleted) {
            style = "background:rgba(16,185,129,0.15); color:var(--color-success); border:1px solid var(--color-success);";
        }
        
        barHTML += `
            <div style="width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.85rem; flex-shrink:0; transition: all 0.2s; ${style}">
                ${s.num}
            </div>
        `;
    });
    barHTML += `</div>`;
    
    // Subtitle label
    const activeStage = stages.find(s => s.num === stageNum);
    barHTML += `
        <div style="font-size:0.8rem; font-weight:600; color:var(--color-accent); margin-top:8px; text-align:center; text-transform:uppercase; letter-spacing:0.04em;">
            Schritt ${stageNum}: ${activeStage.nameDE}
        </div>
    `;
    document.getElementById("writing-stages-progress-bar").innerHTML = barHTML;
    
    // Header title
    document.getElementById("practice-workspace-title").textContent = `Schreiben (Writing): ${activity.titleDE} (Schritt ${stageNum}/7 - Step ${stageNum}/7)`;
    
    // Clear panels
    document.getElementById("writing-studio-stimulus-body").innerHTML = "";
    document.getElementById("writing-studio-qa-body").innerHTML = "";
    
    // Render contents dynamically based on active stage
    switch (stageNum) {
        case 1:
            renderWritingStudioVocab();
            break;
        case 2:
            renderWritingStudioExpressions();
            break;
        case 3:
            renderWritingStudioTips();
            break;
        case 4:
            renderWritingStudioModel();
            break;
        case 5:
            renderWritingStudioGuided();
            break;
        case 6:
            renderWritingStudioIndependent();
            break;
        case 7:
            renderWritingStudioAIEval();
            break;
    }
    
    // Scroll containers back to top
    document.getElementById("writing-studio-stimulus-body").scrollTop = 0;
    document.getElementById("writing-studio-qa-body").scrollTop = 0;
    
    // Navigation buttons config
    document.getElementById("btn-ws-prev").textContent = stageNum === 1 ? "← Themen (Topics)" : "← Zurück (Back)";
    document.getElementById("btn-ws-next").textContent = stageNum === 7 ? "Fertigstellen (Finish) ✓" : "Weiter (Next) →";
}

// STAGE 1: Vocabulary for the Topic
function renderWritingStudioVocab() {
    const activity = writingStudioState.activeActivity;
    
    // Left side: Vocab list
    let leftHTML = `
        <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--color-accent); display:flex; align-items:center; gap:8px;">
            <span>📚</span> Schritt 1: Vokabeln (Step 1: Vocabulary)
        </h3>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:16px;">
            Lernen Sie die wichtigsten Wörter für diese Aufgabe. Klicken Sie auf das Lautsprecher-Symbol, um die Aussprache zu hören. (Learn the most important words for this task. Click the speaker icon to hear the pronunciation.)
        </p>
        <div style="overflow-x:auto; width:100%;">
            <table style="width:100%; border-collapse:collapse; font-size:0.85rem; text-align:left;">
                <thead>
                    <tr style="border-bottom:2px solid var(--color-border); color:var(--color-text-primary);">
                        <th style="padding:8px 6px;">Deutsch (German)</th>
                        <th style="padding:8px 6px;">Pronunciation (ML)</th>
                        <th style="padding:8px 6px;">English</th>
                        <th style="padding:8px 6px; text-align:center;">Audio</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    activity.vocab.forEach((v, index) => {
        leftHTML += `
            <tr style="border-bottom:1px solid rgba(255,255,255,0.05); hover:background:rgba(255,255,255,0.01);">
                <td style="padding:10px 6px; font-weight:600; color:var(--color-text-primary);">${v.word}</td>
                <td style="padding:10px 6px; color:var(--color-warning); font-size:0.8rem;">${v.ml || ""}</td>
                <td style="padding:10px 6px; color:var(--color-text-secondary);">${v.translation}</td>
                <td style="padding:10px 6px; text-align:center;">
                    <button class="btn btn-secondary btn-touch" style="padding:4px 8px; border-radius:4px; font-size:0.75rem;" onclick="window.speakText('${v.word.replace(/'/g, "\\'")}', () => {}, () => {}, () => {})">🔊</button>
                </td>
            </tr>
        `;
    });
    
    leftHTML += `
                </tbody>
            </table>
        </div>
    `;
    document.getElementById("writing-studio-stimulus-body").innerHTML = leftHTML;
    
    // Right side: Active review drills
    let rightHTML = `
        <h4 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary); font-size:1rem;">Wortschatz-Aktivierung (Vocabulary Activation)</h4>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:16px;">
            Klicken Sie auf jede Wortkarte, um das Wort anzuhören und es in Ihrem Lernlauf zu registrieren. (Click on each word card to listen to the word and register it in your learning progress.)
        </p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
    `;
    
    activity.vocab.forEach((v, index) => {
        const checked = writingStudioState.checkedVocab[index];
        const btnStyle = checked 
            ? "background:rgba(16,185,129,0.1); border-color:var(--color-success); color:var(--color-success);" 
            : "background:rgba(255,255,255,0.02); border-color:var(--color-border); color:var(--color-text-secondary);";
        
        const tick = checked ? " ✓" : "";
        
        rightHTML += `
            <button id="vocab-card-${index}" class="btn btn-secondary btn-touch vocab-activation-card" data-idx="${index}" data-word="${v.word.replace(/'/g, "\\'")}" style="padding:12px; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:4px; text-align:center; ${btnStyle}">
                <span style="font-weight:600; font-size:0.85rem;">${v.word}</span>
                <span style="font-size:0.7rem; opacity:0.8;">${v.translation}${tick}</span>
            </button>
        `;
    });
    
    rightHTML += `
        </div>
        <div id="vocab-completion-msg" style="display:none; padding:12px; background:rgba(16,185,129,0.1); border:1px solid var(--color-success); border-radius:var(--radius-md); color:var(--color-success); font-size:0.85rem; text-align:center; font-weight:600;">
            ✓ Alle Vokabeln gelernt! Klicken Sie auf "Weiter", um fortzufahren. (All vocabulary studied! Click Next to proceed.)
        </div>
    `;
    
    document.getElementById("writing-studio-qa-body").innerHTML = rightHTML;
    
    // Add activation click handlers
    document.querySelectorAll(".vocab-activation-card").forEach(btn => {
        btn.onclick = () => {
            const idx = parseInt(btn.getAttribute("data-idx"));
            const word = btn.getAttribute("data-word");
            
            // Speak German
            window.speakText(word, () => {}, () => {}, () => {});
            
            // Mark checked
            writingStudioState.checkedVocab[idx] = true;
            
            // Visual feedback
            btn.style.background = "rgba(16,185,129,0.1)";
            btn.style.borderColor = "var(--color-success)";
            btn.style.color = "var(--color-success)";
            btn.querySelector("span:nth-child(2)").textContent = activity.vocab[idx].translation + " ✓";
            
            // Check overall completion
            checkVocabCompletion();
        };
    });
    
    checkVocabCompletion();
}

function checkVocabCompletion() {
    const activity = writingStudioState.activeActivity;
    if (!activity) return;
    
    const allChecked = activity.vocab.every((v, index) => writingStudioState.checkedVocab[index]);
    const msg = document.getElementById("vocab-completion-msg");
    if (msg) {
        msg.style.display = allChecked ? "block" : "none";
    }
}

// STAGE 2: Useful Expressions
function renderWritingStudioExpressions() {
    const activity = writingStudioState.activeActivity;
    
    // Left side: Useful expressions list
    let leftHTML = `
        <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--color-accent); display:flex; align-items:center; gap:8px;">
            <span>💬</span> Schritt 2: Ausdrücke (Step 2: Useful Expressions)
        </h3>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:16px;">
            Verwenden Sie diese festen Ausdrücke, um Ihren Text natürlicher zu gestalten. Hören Sie sich die Ausdrücke an: (Use these fixed expressions to make your text sound more natural. Listen to the expressions:)
        </p>
        <div style="display:flex; flex-direction:column; gap:10px;">
    `;
    
    activity.expressions.forEach((exp, index) => {
        leftHTML += `
            <div style="background:rgba(255,255,255,0.02); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:10px 14px; display:flex; justify-content:space-between; align-items:center; gap:12px;">
                <div style="display:flex; flex-direction:column; gap:2px; flex:1;">
                    <span style="font-weight:600; color:var(--color-text-primary); font-size:0.9rem;">${exp.de}</span>
                    <span style="font-size:0.75rem; color:var(--color-text-muted); font-style:italic;">${exp.en}</span>
                </div>
                <button class="btn btn-secondary btn-touch" style="padding:6px 10px; border-radius:var(--radius-md); font-size:0.75rem;" onclick="window.speakText('${exp.de.replace(/'/g, "\\'")}', () => {}, () => {}, () => {})">🔊</button>
            </div>
        `;
    });
    
    leftHTML += `
        </div>
    `;
    document.getElementById("writing-studio-stimulus-body").innerHTML = leftHTML;
    
    // Right side: Active Matching Quiz
    let rightHTML = `
        <h4 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary); font-size:1rem;">Bedeutungszuordnung (Translation Matching)</h4>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:12px;">
            Ordnen Sie die deutschen Ausdrücke den englischen Übersetzungen zu: (Match the German expressions with their English translations:)
        </p>
        <div id="expressions-matching-container" style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
    `;
    
    // Pick first 3 expressions for matching
    const matchCount = Math.min(3, activity.expressions.length);
    const subExps = activity.expressions.slice(0, matchCount);
    
    // Generate matches state
    subExps.forEach((exp, index) => {
        const isMatched = writingStudioState.matchedExpressions[index];
        const statusHTML = isMatched 
            ? `<div style="color:var(--color-success); font-size:0.8rem; font-weight:600; display:flex; align-items:center; gap:4px; margin-top:4px;">✓ Richtig (Correct): <em>"${exp.en}"</em></div>`
            : `
                <select class="expression-match-select" data-idx="${index}" style="margin-top:6px; width:100%; padding:6px 8px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:var(--color-panel); color:var(--color-text-secondary); font-size:0.8rem;">
                    <option value="">Wählen Sie die Übersetzung (Choose translation)...</option>
                    ${subExps.map((s, i) => `<option value="${i}">${s.en}</option>`).join("")}
                </select>
            `;
            
        rightHTML += `
            <div style="background:rgba(255,255,255,0.01); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:12px; display:flex; flex-direction:column; gap:2px;">
                <span style="font-weight:600; font-size:0.85rem; color:var(--color-text-primary);">${exp.de}</span>
                ${statusHTML}
            </div>
        `;
    });
    
    rightHTML += `
        </div>
        <div id="expressions-completion-msg" style="display:none; padding:12px; background:rgba(16,185,129,0.1); border:1px solid var(--color-success); border-radius:var(--radius-md); color:var(--color-success); font-size:0.85rem; text-align:center; font-weight:600;">
            ✓ Zuordnung abgeschlossen! (Matching completed! Perfectly solved.)
        </div>
    `;
    
    document.getElementById("writing-studio-qa-body").innerHTML = rightHTML;
    
    // Setup select match handlers
    document.querySelectorAll(".expression-match-select").forEach(sel => {
        sel.addEventListener("change", (e) => {
            const idx = parseInt(sel.getAttribute("data-idx"));
            const val = e.target.value;
            if (val === "") return;
            
            if (parseInt(val) === idx) {
                // Correct match!
                writingStudioState.matchedExpressions[idx] = true;
                // Re-render expressions view to reflect matched state
                renderWritingStudioExpressions();
            } else {
                alert("Falsche Zuordnung. Bitte versuchen Sie es noch einmal!");
                sel.value = "";
            }
        });
    });
    
    checkExpressionsCompletion(matchCount);
}

function checkExpressionsCompletion(total) {
    let count = 0;
    for (let i = 0; i < total; i++) {
        if (writingStudioState.matchedExpressions[i]) count++;
    }
    const allMatched = count === total;
    const msg = document.getElementById("expressions-completion-msg");
    if (msg) {
        msg.style.display = allMatched ? "block" : "none";
    }
}

// STAGE 3: Writing Tips
function renderWritingStudioTips() {
    const activity = writingStudioState.activeActivity;
    
    // Left side: Writing tips
    let leftHTML = `
        <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--color-accent); display:flex; align-items:center; gap:8px;">
            <span>💡</span> Schritt 3: Tipps (Step 3: Writing Tips)
        </h3>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:16px;">
            Befolgen Sie diese Regeln, um im Goethe-Zertifikat A1 die volle Punktzahl zu erreichen: (Follow these rules to achieve full points in the Goethe A1 exam:)
        </p>
        <ul style="margin:0; padding-left:20px; display:flex; flex-direction:column; gap:10px; font-size:0.85rem; color:var(--color-text-secondary); line-height:1.5;">
    `;
    
    activity.tips.forEach(tip => {
        leftHTML += `<li>${tip}</li>`;
    });
    
    leftHTML += `
        </ul>
    `;
    document.getElementById("writing-studio-stimulus-body").innerHTML = leftHTML;
    
    // Right side: Active checklist to verify understanding
    let rightHTML = `
        <h4 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary); font-size:1rem;">Aufgaben-Verständnis (Task Understanding)</h4>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:14px;">
            Lesen Sie den Schreibauftrag und bestätigen Sie die Anforderungen: (Read the writing task and confirm the requirements:)
        </p>
        <div class="glass-panel" style="padding:12px; margin-bottom:16px; font-size:0.8rem; line-height:1.5; border-left:4px solid var(--color-accent); background:rgba(99,102,241,0.02);">
            <strong>Schreibauftrag (Writing Prompt):</strong><br>
            <span style="color:var(--color-text-primary); font-style:italic;">"${activity.promptDE}"</span>
            <div style="margin-top:8px; border-top:1px dashed var(--color-border); padding-top:6px; color:var(--color-text-muted);">
                "${activity.prompt}"
            </div>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
    `;
    
    const checklistItems = [
        { key: "short", text: "Ich schreibe kurze Sätze (I write short sentences - A1)." },
        { key: "points", text: "Ich beantworte alle Inhaltspunkte (I answer all prompt points)." },
        { key: "greeting", text: "Ich verwende Anrede und Grußformel (I use greeting and closing)." }
    ];
    
    checklistItems.forEach(item => {
        const checked = writingStudioState.checkedTips[item.key] ? "checked" : "";
        rightHTML += `
            <label style="display:flex; align-items:flex-start; gap:10px; font-size:0.8rem; color:var(--color-text-secondary); cursor:pointer;">
                <input type="checkbox" class="tip-check-input" data-key="${item.key}" ${checked} style="margin-top:3px; cursor:pointer;">
                <span>${item.text}</span>
            </label>
        `;
    });
    
    rightHTML += `
        </div>
        <div id="tips-completion-msg" style="display:none; padding:12px; background:rgba(16,185,129,0.1); border:1px solid var(--color-success); border-radius:var(--radius-md); color:var(--color-success); font-size:0.85rem; text-align:center; font-weight:600;">
            ✓ Bereit zum Schreiben! Klicken Sie auf "Weiter", um die Musterantwort anzusehen. (Ready to write! Click Next to see the model answer.)
        </div>
    `;
    
    document.getElementById("writing-studio-qa-body").innerHTML = rightHTML;
    
    // Bind checklist input clicks
    document.querySelectorAll(".tip-check-input").forEach(chk => {
        chk.addEventListener("change", (e) => {
            const key = chk.getAttribute("data-key");
            writingStudioState.checkedTips[key] = chk.checked;
            checkTipsCompletion();
        });
    });
    
    checkTipsCompletion();
}

function checkTipsCompletion() {
    const requiredKeys = ["short", "points", "greeting"];
    const allChecked = requiredKeys.every(k => writingStudioState.checkedTips[k]);
    const msg = document.getElementById("tips-completion-msg");
    if (msg) {
        msg.style.display = allChecked ? "block" : "none";
    }
}

// STAGE 4: Model Answer
function renderWritingStudioModel() {
    const activity = writingStudioState.activeActivity;
    const sentences = activity.modelAnswer.split(/(?<=[.!?])\s+/);
    
    let leftHTML = `
        <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--color-accent); display:flex; align-items:center; gap:8px;">
            <span>📝</span> Schritt 4: Muster (Step 4: Model Answer)
        </h3>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:12px;">
            Lesen Sie diese Musterantwort. Tippen Sie auf einen Satz, um die Übersetzung anzuzeigen. (Read this model answer. Tap on a sentence to see its English translation.)
        </p>
        <div class="glass-panel" style="padding:16px 20px; border-radius:var(--radius-md); background:rgba(255,255,255,0.01); border:1px solid var(--color-border); margin-bottom:16px; line-height:1.7; font-size:0.95rem;">
    `;
    
    sentences.forEach((sentence, index) => {
        leftHTML += `
            <span class="model-sentence-span" data-idx="${index}" style="cursor:help; border-bottom:1px dashed var(--color-border); padding:2px; margin-right:4px; display:inline-block; transition:color 0.2s;" title="Tippen für Übersetzung">
                ${sentence}
            </span>
        `;
    });
    
    leftHTML += `
        </div>
        <div id="sentence-translation-box" style="padding:10px 14px; background:rgba(99,102,241,0.05); border:1px solid rgba(99,102,241,0.2); border-radius:var(--radius-md); color:var(--color-text-muted); font-size:0.85rem; font-style:italic; min-height:40px; display:flex; align-items:center;">
            Tippen Sie auf einen deutschen Satz oben, um die Übersetzung anzuzeigen. (Tap on a German sentence above to display its translation.)
        </div>
        <button class="btn btn-secondary btn-touch" style="margin-top:12px; width:100%; display:flex; align-items:center; justify-content:center; gap:8px;" onclick="window.speakText('${activity.modelAnswer.replace(/\n/g, " ").replace(/'/g, "\\'")}', () => {}, () => {}, () => {})">
            🔊 Modellantwort komplett vorlesen (Read Aloud)
        </button>
    `;
    document.getElementById("writing-studio-stimulus-body").innerHTML = leftHTML;
    
    // Pre-mapped sentence translations
    const sentenceTranslations = {
        // ws_001
        "Hallo! Ich heiße Maria.": "Hello! My name is Maria.",
        "Ich bin 28 Jahre alt und komme aus Indien.": "I am 28 years old and come from India.",
        "Ich wohne jetzt in Berlin.": "I live now in Berlin.",
        "Ich bin Ingenieurin von Beruf.": "I am an engineer by profession.",
        "In meiner Freizeit lese ich gern und lerne Deutsch.": "In my free time I like to read and learn German.",
        "Viele Grüße, Maria.": "Best wishes, Maria.",
        // ws_002
        "Ich habe eine kleine Familie.": "I have a small family.",
        "Meine Mutter heißt Priya.": "My mother is named Priya.",
        "Sie ist 55 Jahre alt und arbeitet als Lehrerin.": "She is 55 years old and works as a teacher.",
        "Mein Vater heißt Rajan und ist Ingenieur.": "My father is named Rajan and is an engineer.",
        "Ich habe auch einen Bruder.": "I also have a brother.",
        "Er heißt Arun und studiert in Mumbai.": "His name is Arun and he studies in Mumbai.",
        "Viele Grüße!": "Best wishes!",
        // ws_003
        "Mein Hobby ist Lesen.": "My hobby is reading.",
        "In meiner Freizeit lese ich gern Bücher auf Deutsch.": "In my free time I like to read books in German.",
        "Ich lese jeden Abend etwa 30 Minuten.": "I read about 30 minutes every evening.",
        "Das macht mir viel Spaß und ich lerne dabei neue Wörter.": "It is a lot of fun for me and I learn new words doing it.",
        "Meine Lieblingsgenres sind Krimis und Reiseberichte.": "My favorite genres are thrillers and travel logs.",
        // ws_004
        "Ich stehe jeden Morgen um 6 Uhr auf.": "I stand up every morning at 6 o'clock.",
        "Zuerst dusche ich und dann frühstücke ich.": "First I shower and then I eat breakfast.",
        "Um 8 Uhr fahre ich zur Arbeit.": "At 8 o'clock I drive to work.",
        "Ich arbeite bis 17 Uhr.": "I work until 5 PM.",
        "Danach koche ich und esse zu Abend.": "After that I cook and eat dinner.",
        "Am Abend lese ich oder sehe fern.": "In the evening I read or watch TV.",
        "Gegen 22 Uhr gehe ich schlafen.": "Around 10 PM I go to sleep.",
        // ws_005
        "Ich wohne in einer kleinen Wohnung in Berlin.": "I live in a small apartment in Berlin.",
        "Die Wohnung hat drei Zimmer: ein Schlafzimmer, ein Wohnzimmer und eine Küche.": "The apartment has three rooms: a bedroom, a living room and a kitchen.",
        "Es gibt auch ein Badezimmer.": "There is also a bathroom.",
        "Die Wohnung liegt im Zentrum.": "The apartment is in the centre.",
        "Ich mag meine Wohnung, weil sie sehr hell und ruhig ist.": "I like my apartment because it is very bright and quiet.",
        // ws_006
        "Liebe Anna,": "Dear Anna,",
        "Ich lade dich herzlich zu meiner Geburtstagsparty ein!": "I invite you cordially to my birthday party!",
        "Die Party ist am Samstag, den 15. Juli, um 19 Uhr bei mir zu Hause.": "The party is on Saturday, July 15th, at 7 PM at my house.",
        "Es gibt Essen, Musik und viel Spaß!": "There is food, music and lots of fun!",
        "Kannst du kommen?": "Can you come?",
        "Bitte schreib mir bald.": "Please write back soon.",
        "Maria": "Maria",
        // ws_007
        "Lieber Tom,": "Dear Tom,",
        "Danke für deine Einladung!": "Thank you for your invitation!",
        "Ich komme natürlich gerne am Freitag.": "Of course I'd love to come on Friday.",
        "Ich freue mich sehr auf das Abendessen.": "I am looking forward to dinner very much.",
        "Was soll ich mitbringen?": "What should I bring?",
        "Vielleicht etwas zu trinken oder einen Salat?": "Maybe something to drink or a salad?",
        // ws_008
        "Lieber Klaus,": "Dear Klaus,",
        "Vielen Dank für deine Einladung!": "Thank you very much for your invitation!",
        "Leider kann ich am Donnerstag nicht kommen.": "Unfortunately I cannot come on Thursday.",
        "Ich habe schon einen Arzttermin.": "I already have a doctor's appointment.",
        "Es tut mir sehr leid.": "I am so sorry.",
        "Vielleicht essen wir das nächste Mal zusammen?": "Maybe we eat together next time?",
        // ws_009
        "Liebe Frau Müller,": "Dear Mrs Müller,",
        "Herzlichen Dank, dass Sie in meinem Urlaub auf meine Katze aufgepasst haben!": "Heartfelt thanks that you looked after my cat during my vacation!",
        "Das war wirklich sehr nett von Ihnen.": "That was really very kind of you.",
        "Ich bin sehr dankbar.": "I am very grateful.",
        "Ich möchte Sie gern zum Kaffee einladen.": "I would like to invite you for coffee.",
        "Wann haben Sie Zeit?": "When do you have time?",
        "Mit freundlichen Grüßen,": "With friendly greetings,",
        // ws_010
        "Liebe Lena,": "Dear Lena,",
        "Es tut mir wirklich sehr leid!": "I am really so sorry!",
        "Ich habe leider deinen Geburtstag vergessen.": "Unfortunately I forgot your birthday.",
        "Das war nicht nett von mir.": "That was not nice of me.",
        "Ich möchte das unbedingt wiedergutmachen.": "I absolutely want to make it up.",
        "Darf ich dich nächste Woche zum Abendessen einladen?": "May I invite you to dinner next week?",
        "Viele Grüße und nochmals Entschuldigung,": "Best wishes and sorry again,"
    };
    
    // Bind click events on sentences
    setTimeout(() => {
        document.querySelectorAll(".model-sentence-span").forEach(span => {
            span.onclick = () => {
                document.querySelectorAll(".model-sentence-span").forEach(s => s.style.color = "var(--color-text-secondary)");
                span.style.color = "var(--color-accent)";
                
                const text = span.textContent.trim();
                let trans = sentenceTranslations[text];
                if (!trans) {
                    // Try exact substring match
                    const matchingKey = Object.keys(sentenceTranslations).find(k => text.includes(k) || k.includes(text));
                    trans = matchingKey ? sentenceTranslations[matchingKey] : "English translation: " + text;
                }
                
                document.getElementById("sentence-translation-box").innerHTML = `<strong>Übersetzung:</strong> "${trans}"`;
                window.speakText(text, () => {}, () => {}, () => {});
            };
        });
    }, 100);
    
    // Right side: Common mistakes
    let rightHTML = `
        <h4 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary); font-size:1rem;">Fehlervermeidung (Common Mistakes)</h4>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:14px;">
            Achten Sie auf diese typischen Fehler, um Grammatikabzüge in der Prüfung zu vermeiden: (Pay attention to these typical mistakes to avoid grammar deductions in the exam:)
        </p>
        <div style="display:flex; flex-direction:column; gap:12px;">
    `;
    
    activity.commonMistakes.forEach(m => {
        rightHTML += `
            <div style="border:1px solid var(--color-border); border-radius:var(--radius-md); padding:12px; background:rgba(255,255,255,0.01);">
                <div style="color:var(--color-error); font-weight:600; font-size:0.8rem; display:flex; align-items:center; gap:6px;">
                    <span>❌ Falsch:</span> <span style="text-decoration:line-through; font-weight:500;">${m.wrong}</span>
                </div>
                <div style="color:var(--color-success); font-weight:700; font-size:0.85rem; display:flex; align-items:center; gap:6px; margin-top:4px;">
                    <span>✅ Richtig:</span> <span>${m.correct}</span>
                </div>
                <div style="color:var(--color-text-muted); font-size:0.75rem; margin-top:6px; padding-top:6px; border-top:1px dashed rgba(255,255,255,0.05); line-height:1.4;">
                    <strong>Erklärung:</strong> ${m.reason}
                </div>
            </div>
        `;
    });
    
    rightHTML += `
        </div>
    `;
    document.getElementById("writing-studio-qa-body").innerHTML = rightHTML;
}

// STAGE 5: Guided Writing
function renderWritingStudioGuided() {
    const activity = writingStudioState.activeActivity;
    
    // Left side: Scaffold structure
    let leftHTML = `
        <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--color-accent); display:flex; align-items:center; gap:8px;">
            <span>✍️</span> Schritt 5: Geleitet (Step 5: Guided Writing)
        </h3>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:12px;">
            Bauen Sie Ihren Text strukturiert auf. Verwenden Sie die angezeigten Bausteine als Orientierung: (Build your text in a structured way. Use the shown blocks as a guide:)
        </p>
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
    `;
    
    activity.guidedScaffold.forEach((step, index) => {
        leftHTML += `
            <div style="background:rgba(255,255,255,0.01); border:1px solid var(--color-border); padding:10px 14px; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:2px;">
                <span style="font-weight:700; color:var(--color-text-primary); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.02em;">Teil ${index + 1}: ${step.label}</span>
                <span style="font-size:0.8rem; color:var(--color-accent); font-style:italic;">Vorschlag: ${step.hint}</span>
            </div>
        `;
    });
    
    leftHTML += `
        </div>
    `;
    document.getElementById("writing-studio-stimulus-body").innerHTML = leftHTML;
    
    // Right side: Interactive Input Form
    let rightHTML = `
        <h4 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary); font-size:1rem;">Satzbausteine ausfüllen (Fill in sentence blocks)</h4>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:14px;">
            Schreiben Sie für jeden Baustein Ihren eigenen Satz: (Write your own sentence for each block:)
        </p>
        <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
    `;
    
    activity.guidedScaffold.forEach((step, index) => {
        const savedVal = writingStudioState.guidedAnswers[index] || "";
        rightHTML += `
            <div style="display:flex; flex-direction:column; gap:4px;">
                <label style="font-size:0.8rem; font-weight:600; color:var(--color-text-secondary);">${step.label} (${step.hint})</label>
                <input type="text" class="guided-part-input" data-idx="${index}" value="${savedVal.replace(/"/g, "&quot;")}" placeholder="Ihre Antwort..." style="width:100%; padding:8px 10px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:var(--color-panel); color:var(--color-text-primary); font-size:0.85rem;">
            </div>
        `;
    });
    
    rightHTML += `
        </div>
        <div class="glass-panel" style="padding:14px; background:rgba(99,102,241,0.03); border:1px solid rgba(99,102,241,0.2);">
            <h5 style="margin:0 0 6px 0; font-family:var(--font-display); color:var(--color-accent); font-size:0.8rem; text-transform:uppercase; letter-spacing:0.02em;">Vorschau Ihres Textes (Live Preview):</h5>
            <div id="guided-combined-preview" style="font-size:0.9rem; color:var(--color-text-primary); line-height:1.6; min-height:40px; white-space:pre-wrap; font-style:italic;"></div>
        </div>
    `;
    
    document.getElementById("writing-studio-qa-body").innerHTML = rightHTML;
    
    // Attach live input updates
    const updateGuidedPreview = () => {
        let combined = "";
        document.querySelectorAll(".guided-part-input").forEach(inp => {
            const idx = parseInt(inp.getAttribute("data-idx"));
            const val = inp.value.trim();
            writingStudioState.guidedAnswers[idx] = val;
            
            if (val !== "") {
                if (idx === 0) {
                    combined += val + "\n\n";
                } else if (idx === activity.guidedScaffold.length - 2) {
                    combined += val + "\n";
                } else if (idx === activity.guidedScaffold.length - 1) {
                    combined += val;
                } else {
                    combined += val + " ";
                }
            }
        });
        
        document.getElementById("guided-combined-preview").textContent = combined || "Füllen Sie die Felder oben aus, um eine Vorschau anzuzeigen... (Fill in the fields above to see a preview...)";
        writingStudioState.independentDraft = combined;
    };
    
    document.querySelectorAll(".guided-part-input").forEach(inp => {
        inp.addEventListener("input", updateGuidedPreview);
    });
    
    updateGuidedPreview();
}

// STAGE 6: Independent Writing
function renderWritingStudioIndependent() {
    const activity = writingStudioState.activeActivity;
    
    // Left side: Exam prompt
    let leftHTML = `
        <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--color-accent); display:flex; align-items:center; gap:8px;">
            <span>✍️</span> Schritt 6: Schreiben (Step 6: Write)
        </h3>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:12px;">
            Schreiben Sie nun Ihren fertigen Text frei im Editor rechts. Nutzen Sie Ihren Entwurf aus Schritt 5. (Now write your final text freely in the editor on the right. Use your draft from Step 5.)
        </p>
        <div class="glass-panel" style="padding:16px; border-left:4px solid var(--color-accent); margin-bottom:14px; background:rgba(99,102,241,0.02); font-size:0.85rem; line-height:1.5;">
            <strong>Prüfungsauftrag (Goethe A1 Style):</strong><br>
            <span style="color:var(--color-text-primary); font-weight:500;">"${activity.promptDE}"</span>
        </div>
        <div class="glass-panel" style="padding:16px; border-left:4px solid var(--color-border); background:rgba(255,255,255,0.01); font-size:0.8rem; line-height:1.5; color:var(--color-text-muted);">
            <strong>English Translation:</strong><br>
            "${activity.prompt}"
        </div>
    `;
    document.getElementById("writing-studio-stimulus-body").innerHTML = leftHTML;
    
    // Right side: Free text area with word counter, char counter, autosave, and verification checklist
    let rightHTML = `
        <h4 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary); font-size:1rem;">Schreib-Editor (Writing Editor)</h4>
        <textarea id="ws-independent-textarea" class="text-editor" style="width:100%; min-height:160px; padding:12px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:var(--color-panel); color:var(--color-text-primary); font-size:0.9rem; line-height:1.5; font-family:inherit; resize:vertical;" placeholder="Schreiben Sie Ihre E-Mail/Formular hier... (Write your e-mail/form here...)"></textarea>
        
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--color-text-muted); margin-top:6px; flex-wrap:wrap; gap:6px;">
            <div>
                Wörter: <span id="ws-word-count" style="font-weight:700; color:var(--color-text-primary);">0</span> / ${activity.wordTarget} | 
                Zeichen: <span id="ws-char-count" style="font-weight:700; color:var(--color-text-primary);">0</span>
            </div>
            <div id="ws-save-status" style="font-style:italic; color:var(--color-success);">Entwurf geladen</div>
        </div>
        
        <!-- Checklist display before proceeding -->
        <div style="margin-top:16px; border-top:1px solid var(--color-border); padding-top:14px; display:flex; flex-direction:column; gap:8px;">
            <strong style="font-size:0.8rem; color:var(--color-text-secondary); text-transform:uppercase; letter-spacing:0.02em;">✓ Checkliste (Checklist - Required):</strong>
            <div style="display:flex; flex-direction:column; gap:6px;">
    `;
    
    const checklistItems = [
        { key: "greeting", text: "Passende Anrede (Suitable greeting)? (e.g. Liebe/Lieber...)" },
        { key: "info", text: "Inhaltspunkte (All prompt points answered)?" },
        { key: "grammar", text: "Grammatik (Grammar & spelling checked)?" },
        { key: "closing", text: "Grußformel (Suitable closing phrase)? (e.g. Viele Grüße...)" },
        { key: "signature", text: "Unterschrift (Signature/Name added)?" }
    ];
    
    checklistItems.forEach(item => {
        const checked = writingStudioState.checklistAnswers[item.key] ? "checked" : "";
        rightHTML += `
            <label style="display:flex; align-items:flex-start; gap:8px; font-size:0.75rem; color:var(--color-text-secondary); cursor:pointer;">
                <input type="checkbox" class="ws-checklist-input" data-key="${item.key}" ${checked} style="margin-top:2px; cursor:pointer;">
                <span>${item.text}</span>
            </label>
        `;
    });
    
    rightHTML += `
            </div>
        </div>
    `;
    document.getElementById("writing-studio-qa-body").innerHTML = rightHTML;
    
    // Populate textarea
    const textarea = document.getElementById("ws-independent-textarea");
    textarea.value = writingStudioState.independentDraft || "";
    
    // Bind change/input updates
    const updateStats = () => {
        const val = textarea.value;
        writingStudioState.independentDraft = val;
        
        const words = val.trim() === "" ? 0 : val.trim().split(/\s+/).length;
        document.getElementById("ws-word-count").textContent = words;
        document.getElementById("ws-char-count").textContent = val.length;
        
        // Sync to global portalState writing drafts
        portalState.writingDrafts[activity.id] = val;
        savePortalStateToStorage();
        document.getElementById("ws-save-status").textContent = "Entwurf automatisch gesichert";
    };
    
    textarea.addEventListener("input", updateStats);
    updateStats();
    
    // Bind checklist input clicks
    document.querySelectorAll(".ws-checklist-input").forEach(chk => {
        chk.addEventListener("change", (e) => {
            const key = chk.getAttribute("data-key");
            writingStudioState.checklistAnswers[key] = chk.checked;
        });
    });
}

// STAGE 7: AI Evaluation
function renderWritingStudioAIEval() {
    const activity = writingStudioState.activeActivity;
    const responseText = writingStudioState.independentDraft;
    
    // Left side: instructions
    let leftHTML = `
        <h3 style="margin-top:0; font-family:var(--font-display); font-size:1.15rem; color:var(--color-accent); display:flex; align-items:center; gap:8px;">
            <span>🤖</span> Schritt 7: KI-Bewertung (Step 7: AI Evaluation)
        </h3>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:14px; line-height:1.5;">
            Kopieren Sie die Auswertungsvorlage auf der rechten Seite und fügen Sie sie in einen AI-Assistenten (z. B. ChatGPT, Gemini oder Claude) ein. (Copy the evaluation template on the right and paste it into an AI assistant.)
        </p>
        <p style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:16px; line-height:1.5;">
            Sie erhalten detailliertes Feedback basierend auf den offiziellen Goethe A1 Bewertungsrichtlinien. (You will receive detailed feedback based on official Goethe A1 grading guidelines.)
        </p>
        <div style="display:flex; flex-direction:column; gap:10px;">
            <button id="btn-ws-download-txt" class="btn btn-secondary btn-touch" style="width:100%; display:flex; align-items:center; justify-content:center; gap:6px;">
                📥 Entwurf herunterladen (Download Draft) (.txt)
            </button>
        </div>
    `;
    document.getElementById("writing-studio-stimulus-body").innerHTML = leftHTML;
    
    // Right side: AI prompt generators
    const chatGptPrompt = makeEnhancedWritingStudioAIPrompt(activity.promptDE, responseText, "ChatGPT", activity.titleDE);
    const geminiPrompt = makeEnhancedWritingStudioAIPrompt(activity.promptDE, responseText, "Gemini", activity.titleDE);
    const generalPrompt = makeEnhancedWritingStudioAIPrompt(activity.promptDE, responseText, "General AI", activity.titleDE);
    
    let rightHTML = `
        <h4 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary); font-size:1rem;">Auswertung anfordern (Request Evaluation)</h4>
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
            <button id="btn-ws-copy-chatgpt" class="btn btn-primary btn-touch" style="background:var(--color-indigo); border-color:var(--color-indigo-light); font-size:0.85rem; width:100%; display:flex; align-items:center; justify-content:center; gap:6px;">
                📋 Prompt für ChatGPT kopieren
            </button>
            <button id="btn-ws-copy-gemini" class="btn btn-primary btn-touch" style="background:var(--color-accent); border-color:var(--color-accent-light); font-size:0.85rem; width:100%; display:flex; align-items:center; justify-content:center; gap:6px;">
                📋 Prompt für Gemini kopieren
            </button>
            <button id="btn-ws-copy-general" class="btn btn-warning btn-touch" style="font-size:0.85rem; width:100%; display:flex; align-items:center; justify-content:center; gap:6px;">
                📋 Prompt für Claude/General AI kopieren
            </button>
        </div>
        
        <div style="display:flex; flex-direction:column; gap:4px;">
            <label style="font-size:0.8rem; font-weight:600; color:var(--color-text-secondary);">Vorschau des AI-Prompts:</label>
            <textarea readonly style="width:100%; height:120px; font-size:0.75rem; color:var(--color-text-muted); background:var(--color-panel-solid); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:8px; resize:none; font-family:var(--font-mono); line-height:1.4;">${chatGptPrompt}</textarea>
        </div>
    `;
    document.getElementById("writing-studio-qa-body").innerHTML = rightHTML;
    
    // Bind actions
    document.getElementById("btn-ws-download-txt").onclick = () => {
        const blob = new Blob([responseText], { type: "text/plain;charset=utf-8" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `writing_studio_${activity.id}.txt`;
        a.click();
    };
    
    document.getElementById("btn-ws-copy-chatgpt").onclick = () => {
        copyToClipboard(chatGptPrompt);
        alert("Prompt für ChatGPT in die Zwischenablage kopiert!");
    };
    
    document.getElementById("btn-ws-copy-gemini").onclick = () => {
        copyToClipboard(geminiPrompt);
        alert("Prompt für Gemini in die Zwischenablage kopiert!");
    };
    
    document.getElementById("btn-ws-copy-general").onclick = () => {
        copyToClipboard(generalPrompt);
        alert("Prompt für General AI in die Zwischenablage kopiert!");
    };
}

// 4. Enhance AI Evaluation instructions & details
function makeEnhancedWritingStudioAIPrompt(promptText, userResponse, modelType, title) {
    return `Goethe-Zertifikat A1: Writing Practice Evaluation (${modelType})
Topic: ${title}

--- PRÜFUNGSAUFGABE / PROMPT ---
${promptText}

--- SCHÜLERANTWORT / MY RESPONSE ---
${userResponse || "(Keine Antwort eingegeben / No response entered)"}

--- BEWERTUNGSANWEISUNG / INSTRUCTIONS ---
Please act as an official Goethe-Zertifikat A1 Examiner. Review and grade my response under the official Goethe A1 criteria.

Provide feedback structured EXACTLY as follows:

1. GLOBAL GRADE: Score out of 15 points (Part A: 5 points for form-filling if applicable, Part B: 10 points for writing task). For free writing, grade:
   - Task Completion (Aufgabenbewältigung): 0 to 5 points (Did the student answer all bullet points?)
   - Language Quality (Formale Richtigkeit / Grammatik & Rechtschreibung): 0 to 5 points (Is vocabulary and grammar correct for A1 level?)
   
2. ANALYSIS BY CRITERIA:
   - Grammar (Grammatik): List grammatical errors (word order, cases, verbs, articles) with corrections and brief explanations.
   - Vocabulary (Wortschatz): Identify spelling mistakes or inappropriate word choices.
   - Task Completion (Aufgabenbewältigung): Confirm if all points from the prompt were addressed.
   - Organisation (Struktur / Textaufbau): Check greeting, closing, and formatting.

3. IMPROVED VERSION (Musterantwort):
   Provide a corrected, natural version of my response that keeps my original ideas but aligns with perfect A1 German.

4. SPECIFIC RECOMMENDATIONS:
   Give 2-3 specific suggestions on what grammar rules or vocabulary lists I should study next to improve.

Please write the feedback in clear, encouraging English with German grammatical explanations where helpful. Thank you!`;
}

// 5. Finish activity and save to global progress state
function finishWritingStudioActivity() {
    const activity = writingStudioState.activeActivity;
    if (!activity) return;
    
    // Save completion progress
    if (!portalState.progress.writing) {
        portalState.progress.writing = {};
    }
    portalState.progress.writing[activity.id] = true;
    
    // Stats update
    portalState.sessionsCompleted++;
    updateStreakOnActivity();
    savePortalStateToStorage();
    
    // Return to topics selection hub
    showWritingStudioTopics();
}

// ================================================================
// SPRECHTRAINER (FLUENCY BUILDER) MODULE - DATABASE
// ================================================================

const FLUENCY_DATABASE = [
    {
        id: "st_01", emoji: "👋", titleDE: "Sich vorstellen", titleEN: "Introduce Yourself",
        descDE: "Stellen Sie sich vor", descEN: "Introduce yourself in German",
        sentences: [
            { de: "Hallo, mein Name ist Maria.", en: "Hello, my name is Maria.", phonetic: "ഹലോ, മൈൻ നാമെ ഇസ്റ്റ് മരിയ.", grammar: "'mein' = my (possessive). 'ist' = is (verb sein)." },
            { de: "Ich komme aus Indien.", en: "I come from India.", phonetic: "ഇഖ് കൊമ്മെ ഔസ് ഇൻഡിയൻ.", grammar: "'kommen aus' = to come from. Always use 'aus' for countries." },
            { de: "Ich wohne in Kerala.", en: "I live in Kerala.", phonetic: "ഇഖ് വോനെ ഇൻ കേരള.", grammar: "'wohnen in' = to live in. Use 'in' for cities and regions." },
            { de: "Ich bin 28 Jahre alt.", en: "I am 28 years old.", phonetic: "ഇഖ് ബിൻ ആഹ്ട്‌സ്‌വാൻസ്സിഗ് യാറെ ആൾട്ട്.", grammar: "'ich bin ... Jahre alt' = I am ... years old. Fixed structure." },
            { de: "Ich spreche ein bisschen Deutsch.", en: "I speak a little German.", phonetic: "ഇഖ് ഷ്പ്രെഖെ ഐൻ ബിസ്ഷൻ ഡോയ്ഷ്.", grammar: "'ein bisschen' = a little bit. 'sprechen' = to speak." },
            { de: "Ich lerne seit drei Monaten Deutsch.", en: "I have been learning German for three months.", phonetic: "ഇഖ് ലേർനെ സൈറ്റ് ഡ്രൈ മോനാറ്റൻ ഡോയ്ഷ്.", grammar: "'seit' + present tense = ongoing action since a point in time." },
            { de: "Ich mache den Goethe A1 Kurs.", en: "I am doing the Goethe A1 course.", phonetic: "ഇഖ് മാഖെ ഡൻ ഗേതെ ആ-ഐൻസ് കുർസ്.", grammar: "'machen' = to do/make. 'den' = accusative article for masculine noun." },
            { de: "Es freut mich, Sie kennenzulernen!", en: "Nice to meet you!", phonetic: "എസ് ഫ്രോയ്ട് മിഖ്, സീ കെനൻറ്സൂലേർനൻ!", grammar: "Formal greeting. 'freuen' = to please/delight. 'kennenlernen' = to get to know." }
        ]
    },
    {
        id: "st_02", emoji: "👨‍👩‍👧", titleDE: "Meine Familie", titleEN: "My Family",
        descDE: "Beschreiben Sie Ihre Familie", descEN: "Describe your family",
        sentences: [
            { de: "Ich habe eine kleine Familie.", en: "I have a small family.", phonetic: "ഇഖ് ഹാബെ ഐനെ ക്ലൈനെ ഫമിലിയ.", grammar: "'haben' = to have. 'eine' = a/an (feminine accusative)." },
            { de: "Meine Mutter heißt Latha.", en: "My mother's name is Latha.", phonetic: "മൈനെ മൂട്ടർ ഹൈസ്റ്റ് ലതാ.", grammar: "'heißen' = to be named. 'meine' = my (feminine)." },
            { de: "Mein Vater ist Arzt.", en: "My father is a doctor.", phonetic: "മൈൻ ഫാട്ടർ ഇസ്റ്റ് ആർറ്റ്സ്ത്.", grammar: "No article before professions: 'Er ist Arzt' NOT 'ein Arzt'." },
            { de: "Ich habe eine Schwester.", en: "I have one sister.", phonetic: "ഇഖ് ഹാബെ ഐനെ ഷ്വെസ്റ്റർ.", grammar: "'eine Schwester' = a sister (feminine accusative)." },
            { de: "Meine Schwester ist Lehrerin.", en: "My sister is a teacher.", phonetic: "മൈനെ ഷ്വെസ്റ്റർ ഇസ്റ്റ് ലേരെറിൻ.", grammar: "Female professions add '-in': Lehrer → Lehrerin." },
            { de: "Meine Eltern wohnen in Kochi.", en: "My parents live in Kochi.", phonetic: "മൈനെ എൽറ്റേൺ വോനൻ ഇൻ കൊഛി.", grammar: "'Eltern' = parents (always plural). 'meine' = my (plural)." },
            { de: "Wir sind eine glückliche Familie.", en: "We are a happy family.", phonetic: "വിർ സിൻഡ് ഐനെ ഗ്ലൂക്ലിഖെ ഫമിലിയ.", grammar: "'glücklich' = happy. 'wir sind' = we are." },
            { de: "Familie ist mir sehr wichtig.", en: "Family is very important to me.", phonetic: "മമിലിയ ഇസ്റ്റ് മിർ സേർ വിഹ്ടിഹ്.", grammar: "'mir' = to me (dative). 'wichtig' = important." }
        ]
    },
    {
        id: "st_03", emoji: "🏠", titleDE: "Meine Wohnung", titleEN: "My Home",
        descDE: "Beschreiben Sie Ihre Wohnung", descEN: "Describe your home",
        sentences: [
            { de: "Ich wohne in einem Haus.", en: "I live in a house.", phonetic: "ഇഖ് വോനെ ഇൻ ഐനം ഹൗസ്.", grammar: "'in einem' = in a (dative, neuter). 'Haus' is neuter." },
            { de: "Meine Wohnung hat drei Zimmer.", en: "My apartment has three rooms.", phonetic: "മൈനെ വോനൂങ് ഹാട്ട് ഡ്രൈ ത്സിമ്മർ.", grammar: "'Zimmer' = room (neuter, no plural change)." },
            { de: "Es gibt ein Wohnzimmer, eine Küche und ein Schlafzimmer.", en: "There is a living room, a kitchen and a bedroom.", phonetic: "എസ് ഗിब്ട് ഐൻ വോൻത്സിമ്മർ, ഐനെ കൂഖെ ഉൻഡ് ഐൻ ഷ്ലാഫ്ത്സിമ്മർ.", grammar: "'es gibt' = there is/are. Articles change by gender." },
            { de: "Mein Zimmer ist nicht sehr groß.", en: "My room is not very big.", phonetic: "മൈൻ ത്സിമ്മർ ഇസ്റ്റ് നിഹ്ട് സേർ ഗ്രോസ്.", grammar: "'nicht' negates the adjective. 'groß' = big/large." },
            { de: "Das Wohnzimmer ist hell und schön.", en: "The living room is bright and beautiful.", phonetic: "ഡാസ് വോൻത്സിമ്മർ ഇസ്റ്റ് ഹെൽ ഉൻഡ് ഷേൻ.", grammar: "'hell' = bright/light. 'schön' = beautiful/nice." },
            { de: "Ich habe einen Balkon.", en: "I have a balcony.", phonetic: "ഇഖ് ഹാബെ ഐനൻ ബൽക്കോൻ.", grammar: "'einen' = a (masculine accusative). 'Balkon' is masculine." },
            { de: "Die Miete ist 500 Euro pro Monat.", en: "The rent is 500 euros per month.", phonetic: "ഡീ മീറ്റെ ഇസ്റ്റ് ഫൂൻഫ്ഹൂൻഡർട്ട് ഓയ്‌റോ പ്രോ മോനാട്ട്.", grammar: "'die Miete' = the rent (feminine). 'pro Monat' = per month." },
            { de: "Ich mag meine Wohnung sehr.", en: "I like my apartment very much.", phonetic: "ഇഖ് mag മൈനെ വോനൂങ് സേർ.", grammar: "'mögen' = to like. 'mag' is the ich-form (irregular)." }
        ]
    },
    {
        id: "st_04", emoji: "⚽", titleDE: "Meine Hobbys", titleEN: "My Hobbies",
        descDE: "Erzählen Sie über Ihre Hobbys", descEN: "Talk about your hobbies",
        sentences: [
            { de: "In meiner Freizeit lese ich gern.", en: "In my free time I like to read.", phonetic: "ഇൻ മൈനർ ഫ്രൈത്സൈറ്റ് ലേസെ ഇഖ് ഗേൺ.", grammar: "'gern' + verb = to like doing something. Verb moves to position 2." },
            { de: "Mein liebstes Hobby ist Musik hören.", en: "My favourite hobby is listening to music.", phonetic: "മൈൻ ലീബ്സ്റ്റസ് ഹോബ്ബി ഇസ്റ്റ് മൂസീക് ഹേറൻ.", grammar: "'liebst-' = favourite (superlative). Infinitive at end: 'Musik hören'." },
            { de: "Ich spiele gern Fußball.", en: "I like to play football.", phonetic: "ഇഖ് ഷ്പീലെ ഗേൺ ഫൂസ്ബൽ.", grammar: "'spielen' = to play. 'gern' makes it express enjoyment." },
            { de: "Ich koche auch gern.", en: "I also like to cook.", phonetic: "ഇഖ് കോഖെ ഔഖ് ഗേൺ.", grammar: "'auch' = also. Position: after the verb, before 'gern'." },
            { de: "Am Wochenende gehe ich schwimmen.", en: "At the weekend I go swimming.", phonetic: "ആം വൊഖൻഎൻഡെ ഗേ ഇഖ് ഷ്വിമ്മൻ.", grammar: "Time phrase at start → verb before subject: 'gehe ich' (inversion)." },
            { de: "Ich interessiere mich für Filme.", en: "I am interested in films.", phonetic: "ഇഖ് ഇൻററെസ്സീറെ മിഖ് ഫൂർ ഫിൽമെ.", grammar: "'sich interessieren für' = to be interested in. Reflexive verb." },
            { de: "Manchmal male ich auch Bilder.", en: "Sometimes I also paint pictures.", phonetic: "മാൻഷ്മാൽ മാലെ ഇഖ് ഔഖ് ബിൽഡർ.", grammar: "'manchmal' = sometimes. Causes verb-subject inversion." },
            { de: "Hobbys sind wichtig für die Gesundheit.", en: "Hobbies are important for health.", phonetic: "ഹോബ്ബീസ് സിൻഡ് വിഹ്ടിഹ് ഫൂർ ഡീ ഗെസൂൻഡ്ഹൈറ്റ്.", grammar: "'für' + accusative. 'die Gesundheit' = health (feminine)." }
        ]
    },
    {
        id: "st_05", emoji: "⏰", titleDE: "Mein Tagesablauf", titleEN: "My Daily Routine",
        descDE: "Beschreiben Sie Ihren Alltag", descEN: "Describe your daily routine",
        sentences: [
            { de: "Ich stehe um sieben Uhr auf.", en: "I get up at seven o'clock.", phonetic: "ഇഖ് ഷ്ടേ ഉം സീബൻ ഉർ ഔഫ്.", grammar: "'aufstehen' is separable: 'auf' goes to end of sentence." },
            { de: "Dann dusche ich und frühstücke.", en: "Then I shower and have breakfast.", phonetic: "ഡാന ഡൂഷെ ഇഖ് ഉൻഡ് ഫ്രൂഷ്ടൂക്കെ.", grammar: "'dann' = then (causes inversion). Two verbs joined with 'und'." },
            { de: "Um acht Uhr fahre ich zur Arbeit.", en: "At eight o'clock I go to work.", phonetic: "ഉം ആഹ്ട്ട് ഉർ ഫാറെ ഇഖ് ത്സൂർ ആർബൈറ്റ്.", grammar: "'zur Arbeit fahren' = to go to work. 'zur' = zu + der." },
            { de: "Ich arbeite von neun bis fünf Uhr.", en: "I work from nine to five.", phonetic: "ഇഖ് ആർബൈറ്റെ ഫോൻ നോയൻ ബിസ് ഫൂൻഫ് ഉർ.", grammar: "'von ... bis' = from ... to (time). Both take dative." },
            { de: "Mittags esse ich in der Kantine.", en: "At lunchtime I eat in the canteen.", phonetic: "മിറ്റാഗ്സ് എസ്സെ ഇഖ് ഇൻ ഡേർ കൻടീനെ.", grammar: "'mittags' = at midday. 'in der' = in the (dative, feminine)." },
            { de: "Nachmittags habe ich manchmal Sport.", en: "In the afternoon I sometimes do sport.", phonetic: "നാഖ്മിറ്റാഗ്സ് ഹാബെ ഇഖ് മാൻഷ്മാൽ ഷ്പോർട്ടു.", grammar: "'Sport haben/machen' = to do sport. Time adverb causes inversion." },
            { de: "Abends koche ich für meine Familie.", en: "In the evenings I cook for my family.", phonetic: "ആബൻഡ്സ് കോഖെ ഇഖ് ഫൂർ മൈനെ ഫമിലിയ.", grammar: "'abends' = in the evenings (habitual). Verb comes second." },
            { de: "Ich schlafe um elf Uhr.", en: "I sleep at eleven o'clock.", phonetic: "ഇഖ് ഷ്ലാഫെ ഉം എൽഫ് ഉർ.", grammar: "'schlafen' = to sleep. 'um' + time = at (specific time)." }
        ]
    },
    {
        id: "st_06", emoji: "💼", titleDE: "Mein Beruf", titleEN: "My Job / Studies",
        descDE: "Sprechen Sie über Ihre Arbeit", descEN: "Talk about your job or studies",
        sentences: [
            { de: "Ich bin Studentin an der Universität.", en: "I am a student at the university.", phonetic: "ഇഖ് ബിൻ ഷ്ടൂഡൻടിൻ ആൻ ഡേർ ഉനിവേർസിറ്റേറ്റ്.", grammar: "Female: 'Studentin'. 'an der' = at the (dative, feminine)." },
            { de: "Ich studiere Informatik.", en: "I am studying computer science.", phonetic: "ഇഖ് ഷ്ടൂഡീറെ ഇൻഫോർമാടീക്.", grammar: "No article with subject of study: 'studiere Informatik'." },
            { de: "Mein Studium dauert vier Jahre.", en: "My studies last four years.", phonetic: "മൈൻ ഷ്ടൂഡിയൂം ഡൗൺആർട്ട് ഫീർ യാറെ.", grammar: "'dauern' = to last/take (duration). 'Studium' is neuter." },
            { de: "Ich arbeite auch Teilzeit.", en: "I also work part-time.", phonetic: "ഇഖ് ആർബൈറ്റെ ഔഖ് ടൈൽറ്റ്സൈറ്റ്.", grammar: "'Teilzeit' = part-time. 'Vollzeit' = full-time." },
            { de: "Mein Chef ist sehr nett.", en: "My boss is very nice.", phonetic: "മൈൻ ഷേഫ് ഇസ്റ്റ് സേർ നെറ്റ്.", grammar: "'Chef' = boss/manager (masculine). 'Chefin' = female boss." },
            { de: "Das Gehalt ist nicht schlecht.", en: "The salary is not bad.", phonetic: "ഡാസ് ഗെഹൽട്ട് ഇസ്റ്റ് നിഹ്ട് ഷ്ലെഹ്ട്ട്.", grammar: "'Gehalt' = salary (neuter). 'nicht schlecht' = not bad (understatement)." },
            { de: "Ich möchte später Ingenieurin werden.", en: "Later I would like to become an engineer.", phonetic: "ഇഖ് മേഹ്ടെ ഷ്പേട്ടർ ഇൻഷെനിയൂറിൻ വേർഡൻ.", grammar: "'möchten + infinitive' = would like to. 'werden' goes to end." },
            { de: "Arbeit macht mir Spaß.", en: "Work is fun for me.", phonetic: "ആർബൈറ്റ് മാഖ്ട്ട് മിർ ഷ്പാസ്.", grammar: "'Spaß machen' = to be fun. 'mir' = to me (dative)." }
        ]
    },
    {
        id: "st_07", emoji: "🌆", titleDE: "Meine Stadt", titleEN: "My City",
        descDE: "Beschreiben Sie Ihre Stadt", descEN: "Describe your city",
        sentences: [
            { de: "Ich wohne in Kochi.", en: "I live in Kochi.", phonetic: "ഇഖ് വോനെ ഇൻ കൊഛി.", grammar: "'wohnen in' + city name (no article for cities)." },
            { de: "Kochi ist eine große Stadt.", en: "Kochi is a big city.", phonetic: "കൊഛി ഇസ്റ്റ് ഐനെ ഗ്രോസ്സെ ഷ്ടഡ്ട്.", grammar: "'eine' + adjective + '-e' ending (feminine nominative)." },
            { de: "Es gibt viele Sehenswürdigkeiten.", en: "There are many sights to see.", phonetic: "എസ് ഗിബ്ട്ട് ഫീലെ സേഹൻസ്വൂർഡിഹ്കൈറ്റൻ.", grammar: "'es gibt' + accusative. 'Sehenswürdigkeiten' = tourist attractions." },
            { de: "Die Stadt hat einen schönen Hafen.", en: "The city has a beautiful harbour.", phonetic: "ഡീ ഷ്ടഡ്ട് ഹാട്ട് ഐനൻ ഷേനൻ ഹാഫൻ.", grammar: "'Hafen' = harbour (masculine → 'einen' accusative)." },
            { de: "Der öffentliche Verkehr ist gut.", en: "Public transport is good.", phonetic: "ഡേർ ഓഫൻ‌ലിഖെ ഫേർകേർ ഇസ്റ്റ് ഗൂട്ടു.", grammar: "'öffentlich' = public. 'Verkehr' = traffic/transport (masculine)." },
            { de: "Es gibt viele Restaurants und Cafés.", en: "There are many restaurants and cafés.", phonetic: "എസ് ഗിബ്ട്ട് ഫീലെ റെസ്റ്റോറൻറ്സ് ഉൻഡ് കഫേസ്.", grammar: "Both are loan words with plural -s." },
            { de: "Ich mag die Atmosphäre hier.", en: "I like the atmosphere here.", phonetic: "ഇഖ് മാഗ് ഡീ ആട്ട്‌മോസ്ഫ്യേറെ ഹീർ.", grammar: "'mögen/mag' = to like. 'hier' = here." },
            { de: "Kochi ist wirklich wunderschön.", en: "Kochi is truly wonderful.", phonetic: "കൊഛി ഇസ്റ്റ് വിർക്ലിഹ് വൂൻഡർഷേൻ.", grammar: "'wirklich' = truly/really. 'wunderschön' = wonderful/very beautiful." }
        ]
    },
    {
        id: "st_08", emoji: "🛒", titleDE: "Einkaufen", titleEN: "Shopping",
        descDE: "Sprechen Sie über das Einkaufen", descEN: "Talk about shopping",
        sentences: [
            { de: "Ich gehe einmal pro Woche einkaufen.", en: "I go shopping once a week.", phonetic: "ഇഖ് ഗേ ഐൻമൽ പ്രോ വൊഖെ ഐൻകൗഫൻ.", grammar: "'einkaufen gehen' = to go shopping. Separable: 'gehe ... einkaufen'." },
            { de: "Ich kaufe meistens im Supermarkt.", en: "I usually shop at the supermarket.", phonetic: "ഇഖ് കൗഫെ മൈസ്റ്റൻസ് ഇം സൂപർമർക്ടു.", grammar: "'meistens' = usually. 'im' = in dem (dative, masculine)." },
            { de: "Ich brauche Brot, Milch und Obst.", en: "I need bread, milk and fruit.", phonetic: "ഇഖ് ബ്രൗഖെ ബ്രോട്ടു, മിൽഹ് ഉൻഡ് ഓബ്സ്ത്.", grammar: "'brauchen' = to need. Direct object (accusative): no article for uncountable nouns." },
            { de: "Was kostet das Kilo Äpfel?", en: "How much does a kilo of apples cost?", phonetic: "വാസ് കോസ്റ്റേട്ട് ഡാസ് കിലോ എഫൽ?", grammar: "'Was kostet' = how much does it cost? 'Äpfel' = apples (plural)." },
            { de: "Das ist zu teuer für mich.", en: "That is too expensive for me.", phonetic: "ഡാസ് ഇസ്റ്റ് ത്സൂ ടോയൈർ ഫൂർ മിഖ്.", grammar: "'zu' + adjective = too (adjective). 'teuer' = expensive." },
            { de: "Haben Sie etwas Günstigeres?", en: "Do you have something cheaper?", phonetic: "ഹാബൻ സീ എട്‌വസ് ഗൂൻസ്റ്റിഗേറെസ്?", grammar: "Comparative: 'günstig' → 'günstiger'. 'etwas + adj + -es' = something + adj." },
            { de: "Ich zahle mit Karte.", en: "I pay by card.", phonetic: "ഇഖ് ത്സാലെ മിറ്റ് കർട്ടെ.", grammar: "'zahlen' = to pay. 'mit' + dative = with/by (payment method)." },
            { de: "Danke, auf Wiedersehen!", en: "Thank you, goodbye!", phonetic: "ഡൻക്കെ, ഔഫ് വീഡർസേൻ!", grammar: "Standard farewell. 'Tschüss!' is informal; 'Auf Wiedersehen' is polite." }
        ]
    },
    {
        id: "st_09", emoji: "🍽️", titleDE: "Im Restaurant", titleEN: "At the Restaurant",
        descDE: "Sprechen Sie im Restaurant", descEN: "Ordering and talking at a restaurant",
        sentences: [
            { de: "Guten Abend! Haben Sie einen Tisch für zwei?", en: "Good evening! Do you have a table for two?", phonetic: "Guten Abend! Haben Sie einen Tisch für zwei?", grammar: "'einen Tisch' = a table (masculine accusative). 'für' + accusative." },
            { de: "Ich möchte bitte die Speisekarte.", en: "I would like the menu, please.", phonetic: "ഇഖ് മേഹ്ടെ ബിറ്റ്റ്റെ ഡീ ഷ്പൈസ്സെകർട്ടെ.", grammar: "'möchte' = would like. 'bitte' = please (polite add-on)." },
            { de: "Was empfehlen Sie heute?", en: "What do you recommend today?", phonetic: "വാസ് എംഫ്ഫേലൻ സീ ഹോയ്ടെ?", grammar: "'empfehlen' = to recommend. Formal 'Sie' form." },
            { de: "Ich nehme die Suppe und das Schnitzel.", en: "I'll have the soup and the schnitzel.", phonetic: "ഇഖ് നേമെ ഡീ സൂപ്പെ ഉൻഡ് ഡാസ് ഷ്niറ്റ്സൽ.", grammar: "'nehmen' = to take/have (food). 'die Suppe' (f), 'das Schnitzel' (n)." },
            { de: "Ich bin Vegetarier. Gibt es vegetarische Gerichte?", en: "I am vegetarian. Are there vegetarian dishes?", phonetic: "ഇഖ് ബിൻ വേഗെടൻ‍റ്റ്യൂ. ഗിബ്ട്ട് എസ് വേഗെടൻ‍റ്റ്യൂ ഗെറിഹ്ടെ?", grammar: "'vegetarisch' = vegetarian (adj). 'Gerichte' = dishes (plural)." },
            { de: "Das Essen ist sehr lecker!", en: "The food is very delicious!", phonetic: "ഡാസ് എസ്സൻ ഇസ്റ്റ് സേർ ലെക്കർ!", grammar: "'Essen' = food/meal (neuter). 'lecker' = tasty/delicious." },
            { de: "Ich möchte bitte die Rechnung.", en: "I would like the bill, please.", phonetic: "ഇഖ് മേഹ്ടെ ബിറ്റ്റ്റെ ഡീ റെഹ്നൂങ്.", grammar: "'die Rechnung' = the bill/invoice (feminine)." },
            { de: "Das war ein toller Abend!", en: "That was a great evening!", phonetic: "ഡാസ് വൂർ ഐൻ ടോലർ ആബൻഡ്!", grammar: "'war' = was (past tense of 'sein'). 'toller' = great (masculine nominative)." }
        ]
    },
    {
        id: "st_10", emoji: "✈️", titleDE: "Reisen", titleEN: "Travelling",
        descDE: "Sprechen Sie über das Reisen", descEN: "Talk about travel and holidays",
        sentences: [
            { de: "Ich reise sehr gern.", en: "I love travelling.", phonetic: "ഇഖ് റൈസ്സെ സേർ ഗേൺ.", grammar: "'reisen' = to travel. 'gern' expresses enjoyment." },
            { de: "Letzten Sommer bin ich nach Deutschland gefahren.", en: "Last summer I travelled to Germany.", phonetic: "ലേറ്റ്സ്ടൻ സൂമ്മർ ബിൻ ഇഖ് നാഹ് ഡോയ്ഷ്‍ലൻഡ് ഗെഫാറൻ.", grammar: "Past tense (Perfekt): 'bin + gefahren'. 'nach' + country name = to." },
            { de: "Ich habe eine Woche in Berlin verbracht.", en: "I spent one week in Berlin.", phonetic: "ഇഖ് ഹാബെ ഐനെ വൊഖെ ഇൻ ബേർലിൻ ഫേർബ്രൂഹ്ട്ട്.", grammar: "'verbringen' = to spend (time). Past: 'habe verbracht'." },
            { de: "Berlin ist eine faszinierende Stadt.", en: "Berlin is a fascinating city.", phonetic: "ബേർലിൻ ഇസ്റ്റ് ഐനെ ഫസ്സീനീറൻഡെ ഷ്ടഡ്ട്.", grammar: "'faszinierend' = fascinating. '-e' ending (feminine nominative after 'eine')." },
            { de: "Ich habe viele Museen besucht.", en: "I visited many museums.", phonetic: "ഇഖ് ഹാബെ ഫീലെ മൂസേൻ ബെസൂഹ്ട്ട്.", grammar: "'besuchen' = to visit. 'Museen' = museums (plural of 'Museum')." },
            { de: "Das Essen war wirklich fantastisch.", en: "The food was really fantastic.", phonetic: "ഡാസ് എസ്സൻ വൂർ വിർക്ലിഹ് ഫൻടൻ‍റ്റ്യൂ.", grammar: "'war' = was (simple past of 'sein'). Used for descriptions in narrative." },
            { de: "Nächstes Jahr möchte ich nach Wien fahren.", en: "Next year I would like to go to Vienna.", phonetic: "നേഹ്സ്ടസ് യൂർ മേഹ്ടെ ഇഖ് നാഹ് വീൻ ഫാറൻ.", grammar: "'nächstes Jahr' = next year. 'möchte + infinitive' = would like to." },
            { de: "Reisen macht mich glücklich.", en: "Travelling makes me happy.", phonetic: "റൈസ്സൻ മാഖ്ട്ട് മിഖ് ഗ്ലൂക്ലിഹ്.", grammar: "'machen' = to make. 'mich' = me (accusative). Infinitive as subject." }
        ]
    },
    {
        id: "st_11", emoji: "👥", titleDE: "Freunde und Kontakte", titleEN: "Friends & Contacts",
        descDE: "Sprechen Sie über Freunde", descEN: "Talk about your friends and contacts",
        sentences: [
            { de: "Ich habe viele Freunde.", en: "I have many friends.", phonetic: "ഇഖ് ഹാബെ ഫീലെ ഫ്രോയ്ൻഡെ.", grammar: "'Freunde' is the plural of 'Freund' (masculine). 'viele' = many." },
            { de: "Mein bester Freund heißt Rahul.", en: "My best friend is named Rahul.", phonetic: "മൈൻ ബെസ്റ്റർ ഫ്രോയ്ൻഡ് ഹൈസ്റ്റ് രാഹുൽ.", grammar: "'mein bester Freund' (masculine nominative subject with adjective ending)." },
            { de: "Wir kennen uns seit der Schule.", en: "We have known each other since school.", phonetic: "വിർ കെന്നൻ ഉൻസ് സൈറ്റ് ഡേർ ഷൂലെ.", grammar: "'seit' takes dative: 'seit der Schule' (feminine dative)." },
            { de: "Wir telefonieren oft am Abend.", en: "We often talk on the phone in the evening.", phonetic: "വിർ ടെലിഫോണിയറൻ ഓഫ്റ്റ് ആം ആബൻഡ്.", grammar: "'am Abend' = at evening. 'oft' = often." },
            { de: "Am Wochenende treffen wir uns.", en: "At the weekend we meet up.", phonetic: "ആം വൊഖൻഎൻഡെ ട്രെഫൻ വിർ ഉൻസ്.", grammar: "'sich treffen' = to meet (reflexive). Verb in position 2." },
            { de: "Wir gehen zusammen ins Kino.", en: "We go to the cinema together.", phonetic: "വിർ ഗേൻ ത്സുസമ്മൻ ഇൻസ് കീനോ.", grammar: "'ins' = in + das (accusative direction to cinema)." },
            { de: "Er hilft mir immer beim Lernen.", en: "He always helps me with learning.", phonetic: "എർ ഹിൽഫ്ട് മിർ ഇമ്മർ ബൈം ലേർനൻ.", grammar: "'helfen' takes dative: 'mir'. 'beim' = bei + dem." },
            { de: "Ich bin froh, ihn zu haben.", en: "I am glad to have him.", phonetic: "ഇഖ് ബിൻ ഫ്രോ, ഈൻ ത്സൂ ഹാബൻ.", grammar: "Infinitiv mit 'zu' structure: 'ihn zu haben'. 'ihn' = him (accusative)." }
        ]
    },
    {
        id: "st_12", emoji: "🏥", titleDE: "Gesundheit und Arzt", titleEN: "Health & Doctor",
        descDE: "Beschreiben Sie Gesundheitsprobleme", descEN: "Describe symptoms and visiting a doctor",
        sentences: [
            { de: "Ich fühle mich heute nicht gut.", en: "I don't feel well today.", phonetic: "ഇഖ് ഫൂലെ മിഖ് ഹോയ്ടെ നിഹ്ട് ഗൂട്ട്.", grammar: "'sich fühlen' = to feel (reflexive). 'nicht' negates 'gut'." },
            { de: "Mein Kopf tut sehr weh.", en: "My head hurts a lot.", phonetic: "മൈൻ കോപ്ഫ് ടൂട്ട് സേർ വേ.", grammar: "'weh tun' = to hurt/ache. 'Kopf' is masculine." },
            { de: "Ich habe seit gestern Fieber.", en: "I have had a fever since yesterday.", phonetic: "ഇഖ് ഹാബെ സൈറ്റ് ഗെസ്റ്റേൺ ഫീബർ.", grammar: "'Fieber' = fever (neuter). 'seit gestern' = since yesterday." },
            { de: "Ich muss zum Arzt gehen.", en: "I must go to the doctor.", phonetic: "ഇഖ് മുസ് ത്സും ആർറ്റ്സ്ത് ഗേൻ.", grammar: "Modal verb 'müssen' (muss) + infinitive at end ('gehen'). 'zum' = zu + dem." },
            { de: "Ich brauche einen Termin.", en: "I need an appointment.", phonetic: "ഇഖ് ബ്രൗഖെ ഐനൻ ടെർമീൻ.", grammar: "'brauchen' takes accusative: 'einen Termin' (masculine)." },
            { de: "Der Arzt verschreibt mir ein Medikament.", en: "The doctor prescribes me a medicine.", phonetic: "ഡേർ ആർറ്റ്സ്ത് ഫെർഷ്രൈប്ട് മിർ ഐൻ മെഡികമെൻ്റ്.", grammar: "'verschreiben' = to prescribe. Dative 'mir' (to me), Accusative 'ein Medikament' (neuter)." },
            { de: "Ich soll dreimal täglich eine Tablette nehmen.", en: "I should take one tablet three times a day.", phonetic: "ഇഖ് സോൾ ഡ്രൈമൽ ടേഗ്ലിഹ് ഐനെ ടാബ്ലെറ്റെ നേമെൻ.", grammar: "Modal verb 'sollen' (soll). 'täglich' = daily." },
            { de: "Ich hoffe, ich werde schnell gesund.", en: "I hope I get well quickly.", phonetic: "ഇഖ് ഹോഫെ, ഇഖ് വേർഡെ ഷ്നെൽ ഗെസുൻഡ്.", grammar: "'werden' = to become. 'gesund' = healthy." }
        ]
    },
    {
        id: "st_13", emoji: "☀️", titleDE: "Wetter und Jahreszeiten", titleEN: "Weather & Seasons",
        descDE: "Beschreiben Sie das Wetter", descEN: "Describe weather and seasons",
        sentences: [
            { de: "Das Wetter ist heute sehr schön.", en: "The weather is very beautiful today.", phonetic: "ഡാസ് വെറ്റർ ഇസ്റ്റ് ഹോയ്ടെ സേർ ഷേൻ.", grammar: "'Wetter' is neuter. 'schön' = nice/beautiful." },
            { de: "Es ist sonnig und warm.", en: "It is sunny and warm.", phonetic: "എസ് ഇസ്റ്റ് സോണിഹ് ഉൻഡ് വാർം.", grammar: "Pronoun 'es' is used for weather descriptions." },
            { de: "Im Sommer ist es oft sehr heiß.", en: "In summer it is often very hot.", phonetic: "ഇം സൂമ്മർ ഇസ്റ്റ് എസ് ഓഫ്റ്റ് സേർ ഹൈസ്.", grammar: "'im' = in + dem (dative masculine). 'heiß' = hot." },
            { de: "Im Winter schneit es manchmal.", en: "In winter it snows sometimes.", phonetic: "ഇം വിൻ്റർ ഷ്നൈറ്റ് എസ് മാൻഷ്മാൽ.", grammar: "Verb 'schneien' = to snow. 'manchmal' = sometimes." },
            { de: "Ich mag den Herbst wegen der bunten Blätter.", en: "I like autumn because of the colorful leaves.", phonetic: "ഇഖ് മാഗ് ഡൻ ഹെർബസ്റ്റ് വേഗൻ ഡേർ ബൂണ്ടൻ ബ്ലെറ്റർ.", grammar: "'den Herbst' (masculine accusative). 'wegen' + genitive/dative." },
            { de: "Der Frühling ist meine Lieblingsjahreszeit.", en: "Spring is my favorite season.", phonetic: "ഡേർ ഫ്രൂലിങ് ഇസ്റ്റ് മൈനെ ലീബ്ലിങ്സ് യാറെസ് ത്സൈറ്റ്.", grammar: "'Frühling' is masculine. 'Lieblingsjahreszeit' = favorite season." },
            { de: "Es regnet, ich brauche einen Regenschirm.", en: "It's raining, I need an umbrella.", phonetic: "എസ് റെഗ്നെറ്റ്, ഇഖ് ബ്രൗഖെ ഐനൻ റെഗൻഷീം.", grammar: "'regnen' = to rain. 'Regenschirm' is masculine accusative ('einen')." },
            { de: "Die Temperatur liegt bei 20 Grad.", en: "The temperature is around 20 degrees.", phonetic: "ഡീ ടെമ്പറേച്ചർ ലീഗ്ട് ബൈ ത്സ്വാൻസിഗ് ഗ്രാഡ്.", grammar: "'die Temperatur' (feminine). 'liegen bei' = to lie at/stand at." }
        ]
    },
    {
        id: "st_14", emoji: "🎉", titleDE: "Feste und Feiertage", titleEN: "Celebrations & Holidays",
        descDE: "Erzählen Sie über Feste", descEN: "Talk about birthdays and seasonal holidays",
        sentences: [
            { de: "Ich feiere meinen Geburtstag im Juli.", en: "I celebrate my birthday in July.", phonetic: "ഇഖ് ഫൈയറെ മൈനൻ ഗെബർട്സ്റ്റാഗ് ഇം യൂലി.", grammar: "'meinen Geburtstag' (masculine accusative). Months take 'im'." },
            { de: "Ich lade viele Gäste ein.", en: "I invite many guests.", phonetic: "ഇഖ് ലാഡെ ഫീലെ ഗെസ്റ്റെ ഐൻ.", grammar: "Separable verb 'einladen': 'lade ... ein'." },
            { de: "Wir essen Kuchen und trinken Saft.", en: "We eat cake and drink juice.", phonetic: "വിർ എസ്സൻ കൂഖൻ ഉൻഡ് ട്രിങ്കൻ സാഫ്റ്റ്.", grammar: "Plural verbs matching subject 'wir'. No articles for general food/drinks." },
            { de: "Ich bekomme viele schöne Geschenke.", en: "I get many beautiful gifts.", phonetic: "ഇഖ് ബെകൊമ്മെ ഫീലെ ഷേനെ ഗെഷെൻകെ.", grammar: "'bekommen' = to get/receive. Adjective plural ending after 'viele': '-e'." },
            { de: "Weihnachten ist ein wichtiges Familienfest.", en: "Christmas is an important family celebration.", phonetic: "വൈനാഹ്റ്റൻ ഇസ്റ്റ് ഐൻ വിഹ്തിഗെസ് ഫമീലിയൻഫെസ്റ്റ്.", grammar: "'Familienfest' is neuter. Adjective ending after 'ein': '-es'." },
            { de: "Wir schmücken einen Tannenbaum.", en: "We decorate a Christmas tree.", phonetic: "വിർ ഷ്മുക്കെൻ ഐനൻ ടാന്നൻബൗം.", grammar: "'schmücken' = to decorate. 'Tannenbaum' is masculine accusative." },
            { de: "Zu Silvester gibt es ein Feuerwerk.", en: "On New Year's Eve there is a firework display.", phonetic: "ത്സൂ സിൽവെസ്റ്റർ ഗിബ്ട് എസ് ഐൻ ഫോയർവെർക്ക്.", grammar: "'zu' = at/for holiday. 'Feuerwerk' is neuter." },
            { de: "Frohe Ostern wünsche ich dir!", en: "Happy Easter I wish to you!", phonetic: "ഫ്രോഹെ ഓസ്റ്റേൺ വുൺഷെ ഇഖ് ഡിർ.", grammar: "'wünschen' takes dative 'dir'. 'Ostern' = Easter." }
        ]
    },
    {
        id: "st_15", emoji: "🏫", titleDE: "Schule und Lernen", titleEN: "School & Education",
        descDE: "Erzählen Sie über die Schule", descEN: "Describe your school days and study tips",
        sentences: [
            { de: "Ich bin in der Schule gern gegangen.", en: "I liked going to school.", phonetic: "ഇഖ് ബിൻ ഇൻ ഡേർ ഷൂലെ ഗേൺ ഗെഗാംഗൻ.", grammar: "Past Perfekt: 'bin gegangen'. 'in der Schule' (dative)." },
            { de: "Mein Lieblingsfach war Deutsch.", en: "My favorite subject was German.", phonetic: "മൈൻ ലീബ്ലിങ്സ്ഫാഹ് വാർ ഡോയ്ഷ്.", grammar: "'Lieblingsfach' is neuter. 'war' = was." },
            { de: "Der Lehrer war sehr freundlich.", en: "The teacher was very friendly.", phonetic: "ഡേർ ലേരെർ വാർ സേർ ഫ്രോയ്ൻഡ്‌ലിഹ്.", grammar: "'Lehrer' is masculine singular. 'freundlich' = friendly." },
            { de: "Wir hatten viele Hausaufgaben.", en: "We had a lot of homework.", phonetic: "വിർ ഹാറ്റൻ ഫീലെ ഹൗസ് ഔഫ്ഗാബെൻ.", grammar: "Präteritum of haben: 'hatten'. 'Hausaufgaben' is plural." },
            { de: "Ich lerne jetzt für eine Prüfung.", en: "I am studying for an exam now.", phonetic: "ഇഖ് ലേർനെ യെറ്റ്സ്റ്റ് ഫൂർ ഐനെ പ്രൂഫൂങ്.", grammar: "'für' takes accusative: 'eine Prüfung' (feminine)." },
            { de: "Vokabeln lernen ist manchmal schwer.", en: "Learning vocabulary is sometimes difficult.", phonetic: "വൊകാബെൽൻ ലേർനൻ ഇസ്റ്റ് മാൻഷ്മാൽ ഷ്വേർ.", grammar: "'schwer' = difficult/heavy. 'manchmal' = sometimes." },
            { de: "Wir müssen im Kurs viel sprechen.", en: "We must speak a lot in the course.", phonetic: "വിർ മുസ്സൻ ഇം куർസ് ഫീൽ ഷ്പ്രേഖൻ.", grammar: "Modal verb 'müssen' + infinitive 'sprechen'. 'im' = in dem." },
            { de: "Bildung ist sehr wichtig für die Zukunft.", en: "Education is very important for the future.", phonetic: "ബിൽഡൂങ് ഇസ്റ്റ് സേർ വിഹ്തിഹ് ഫൂർ ഡീ ത്സുകുൻഫ്റ്റ്.", grammar: "'Bildung' = education (feminine). 'die Zukunft' = the future (feminine)." }
        ]
    },
    {
        id: "st_16", emoji: "🚗", titleDE: "Verkehrsmittel", titleEN: "Transportation & Directions",
        descDE: "Sprechen Sie über Verkehrsmittel", descEN: "Describe how you commute and travel locally",
        sentences: [
            { de: "Ich fahre jeden Tag mit der U-Bahn.", en: "I ride the subway every day.", phonetic: "ഇഖ് ഫാറെ യേഡൻ ടാഗ് മിറ്റ് ഡേർ ഊ-ബാൻ.", grammar: "'mit' always takes dative: 'mit der U-Bahn' (feminine dative)." },
            { de: "Das Ticket kostet drei Euro.", en: "The ticket costs three euros.", phonetic: "ഡാസ് ടിക്കറ്റ് കോസ്റ്റേട്ട് ഡ്രൈ ഓയ്‌റോ.", grammar: "'Ticket' is neuter. 'kostet' = costs." },
            { de: "Die U-Bahn ist meistens sehr pünktlich.", en: "The subway is usually very punctual.", phonetic: "ഡീ ഊ-ബാൻ ഇസ്റ്റ് മൈസ്റ്റൻസ് സേർ പൂങ്ത്‌ലിഹ്.", grammar: "'pünktlich' = punctual/on time. 'meistens' = mostly." },
            { de: "Ich habe kein Auto.", en: "I have no car.", phonetic: "ഇഖ് ഹാബെ കൈൻ ഔട്ടോ.", grammar: "Neuter negation 'kein' before 'Auto' (accusative object)." },
            { de: "Ich fahre auch gern Fahrrad.", en: "I also like to ride a bicycle.", phonetic: "ഇഖ് ഫാറെ ഔഖ് ഗേൺ ഫാറാഡ്.", grammar: "'Fahrrad fahren' = to ride a bicycle. 'Fahrrad' is neuter." },
            { de: "Der Bahnhof ist in der Nähe.", en: "The train station is nearby.", phonetic: "ഡേർ ബാൻഹോഫ് ഇസ്റ്റ് ഇൻ ഡേർ നേയെ.", grammar: "'in der Nähe' = in the proximity/nearby (dative feminine)." },
            { de: "Entschuldigung, wo ist die Bushaltestelle?", en: "Excuse me, where is the bus stop?", phonetic: "എൻ്റ്ഷുൽഡിഗൂങ്, വോ ഇസ്റ്റ് ഡീ ബൂസ്ഹാൽറ്റെസ്റ്റെല്ലെ.", grammar: "'wo ist' = where is. 'Bushaltestelle' is feminine." },
            { de: "Sie müssen hier geradeaus gehen.", en: "You must go straight ahead here.", phonetic: "സീ മുസ്സൻ ഹീർ ഗെരാഡെ ഔസ് ഗേൻ.", grammar: "Directions: 'geradeaus' = straight ahead. Formal 'Sie' command." }
        ]
    },
    {
        id: "st_17", emoji: "🍿", titleDE: "Freizeit und Medien", titleEN: "Media & Technology",
        descDE: "Erzählen Sie über Medien", descEN: "Describe how you use technology and media",
        sentences: [
            { de: "Ich benutze mein Smartphone jeden Tag.", en: "I use my smartphone every day.", phonetic: "ഇഖ് ബെനുറ്റ്സെ മൈൻ സ്മാർട്ട്ഫോൺ യേഡൻ ടാഗ്.", grammar: "'benutzen' = to use. 'mein Smartphone' (neuter accusative)." },
            { de: "Ich surfe oft im Internet.", en: "I often surf the internet.", phonetic: "ഇഖ് സൂർഫെ ഓഫ്റ്റ് ഇം ഇൻറർനെറ്റ്.", grammar: "'im Internet' = in the internet. 'oft' = often." },
            { de: "Abends sehe ich gern fern.", en: "In the evening I like to watch TV.", phonetic: "ആബൻഡ്സ് സേയെ ഇഖ് ഗേൺ ഫെൻ.", grammar: "Separable verb 'fernsehen': 'sehe ... fern'." },
            { de: "Ich sehe mir Serien auf Netflix an.", en: "I watch series on Netflix.", phonetic: "ഇഖ് സേയെ മിർ സേരിയൻ ഔഫ് നെറ്റ്ഫ്ലിക്സ് ആൻ.", grammar: "Separable reflexive 'sich ansehen': 'sehe mir ... an'." },
            { de: "Ich lese auch E-Books auf meinem Tablet.", en: "I also read e-books on my tablet.", phonetic: "ഇഖ് ലേസെ ഔഖ് ഈ-ബുക്സ് ഔഫ് മൈനം ടാബ്ലെറ്റ്.", grammar: "'auf meinem' = on my (dative neuter)." },
            { de: "Social Media ist sehr beliebt bei Jugendlichen.", en: "Social media is very popular with young people.", phonetic: "സോഷ്യൽ മീഡിയ ഇസ്റ്റ് സേർ ബെലീബ്ട് ബൈ യൂഗൻഡ്‌ലിഖൻ.", grammar: "'beliebt bei' = popular with. 'Jugendlichen' (dative plural)." },
            { de: "Ich schreibe viele E-Mails.", en: "I write many emails.", phonetic: "ഇഖ് ഷ്രൈബെ ഫീലെ ഈ-മെയ്‌ൽസ്.", grammar: "'viele E-Mails' (accusative feminine plural)." },
            { de: "Technologie macht das Leben einfacher.", en: "Technology makes life simpler.", phonetic: "ടെക്നോളജി മാഖ്ട് ഡാസ് ലേബൻ ഐൻഫാഖർ.", grammar: "'einfacher' = easier/simpler (comparative of einfach)." }
        ]
    },
    {
        id: "st_18", emoji: "👕", titleDE: "Kleidung", titleEN: "Clothing & Fashion",
        descDE: "Sprechen Sie über Kleidung", descEN: "Describe what you wear and buying clothes",
        sentences: [
            { de: "Heute trage ich eine blaue Jeans.", en: "Today I am wearing blue jeans.", phonetic: "ഹോയ്ടെ ട്രാഗെ ഇഖ് ഐനെ ബ്ലൗവെ ജീൻസ്.", grammar: "Adjective ending: feminine accusative after 'eine' takes '-e'." },
            { de: "Ich trage auch ein weißes T-Shirt.", en: "I am also wearing a white T-shirt.", phonetic: "ഇഖ് ട്രാഗെ ഔഖ് ഐൻ വൈസെസ് ടി-ഷർട്ട്.", grammar: "Adjective ending: neuter accusative after 'ein' takes '-es'." },
            { de: "Im Winter brauche ich eine warme Jacke.", en: "In winter I need a warm jacket.", phonetic: "ഇം വിൻ്റർ ബ്രൗഖെ ഇഖ് ഐനെ വാർമെ യാക്കെ.", grammar: "'brauchen' + accusative feminine: 'eine warme Jacke'." },
            { de: "Meine Lieblingsfarbe für Kleidung ist Schwarz.", en: "My favorite color for clothes is black.", phonetic: "മൈനെ ലീബ്ലിങ്സ്ഫാർബെ ഫൂർ ക്ലൈഡൂങ് ഇസ്റ്റ് ഷ്വാർട്സ്.", grammar: "'Lieblingsfarbe' = favorite color (feminine)." },
            { de: "Ich kaufe meine Kleidung im Geschäft.", en: "I buy my clothes in the shop.", phonetic: "ഇഖ് കൗഫെ മൈനെ ക്ലൈഡൂങ് ഇം ഗെഷെഫ്റ്റ്.", grammar: "'im Geschäft' = in the shop (dative neuter)." },
            { de: "Manchmal bestelle ich Kleidung online.", en: "Sometimes I order clothes online.", phonetic: "മാൻഷ്മാൽ ബെസ്റ്റെല്ലെ ഇഖ് ക്ലൈഡൂങ് ഓൺലൈൻ.", grammar: "'bestellen' = to order. Adverb 'manchmal' causes inversion." },
            { de: "Die Schuhe passen mir gut.", en: "The shoes fit me well.", phonetic: "ഡീ ഷൂവെ പാസ്സൻ മിർ ഗൂട്ട്.", grammar: "'passen' takes dative object: 'mir' (me). 'Schuhe' is plural." },
            { de: "Kleidung soll bequem sein.", en: "Clothing should be comfortable.", phonetic: "ക്ലൈഡൂങ് സോൾ ബെക്വേം സൈൻ.", grammar: "Modal verb 'sollen' (soll) + infinitive 'sein'. 'bequem' = comfortable." }
        ]
    },
    {
        id: "st_19", emoji: "🏆", titleDE: "Sport und Fitness", titleEN: "Sports & Fitness",
        descDE: "Erzählen Sie über Sport", descEN: "Describe your sports habits and active life",
        sentences: [
            { de: "Ich mache zweimal pro Woche Sport.", en: "I do sport twice a week.", phonetic: "ഇഖ് മാഖെ ത്സ്വൈമൽ പ്രോ വൊഖെ ഷ്പോർട്ട്.", grammar: "'Sport machen' = to do sport. 'zweimal' = twice." },
            { de: "Mein Lieblingssport ist Badminton.", en: "My favorite sport is badminton.", phonetic: "മൈൻ ലീബ്ലിങ്സ്പോർട്ട് ഇസ്റ്റ് ബാഡ്മിൻ്റൺ.", grammar: "'Lieblingssport' is masculine. 'ist' = is." },
            { de: "Ich spiele am Samstag mit Freunden.", en: "I play on Saturday with friends.", phonetic: "ഇഖ് ഷ്പീലെ ആം സാംസ്താഗ് മിറ്റ് ഫ്രോയ്ൻഡൻ.", grammar: "'mit' takes dative plural: 'mit Freunden'. Days take 'am'." },
            { de: "Laufen ist gut für die Fitness.", en: "Running is good for fitness.", phonetic: "ലൗഫൻ ഇസ്റ്റ് ഗൂട്ട് ഫൂർ ഡീ ഫിറ്റ്നസ്.", grammar: "Gerund 'Laufen' (running) as subject. 'für die Fitness' (accusative feminine)." },
            { de: "Ich trinke viel Wasser beim Training.", en: "I drink plenty of water during training.", phonetic: "ഇഖ് ട്രിങ്കെ ഫീൽ വാസ്സർ ബൈം ട്രെയിനിങ്.", grammar: "'viel' before uncountable nouns. 'beim' = bei + dem (dative neuter)." },
            { de: "Ich gehe gern im Park spazieren.", en: "I like to go walking in the park.", phonetic: "ഇഖ് ഗേ ഗേൺ ഇം പാർക്ക് ഷ്പാത്സീറൻ.", grammar: "'spazieren gehen' = to go for a walk. 'im Park' (dative)." },
            { de: "Sport hilft gegen Stress.", en: "Sport helps against stress.", phonetic: "ഷ്പോർട്ട് ഹിൽഫ്ട് ഗേഗൻ സ്ട്രെസ്സ്.", grammar: "'helfen' (hilft). 'gegen' takes accusative: 'gegen Stress'." },
            { de: "Ich möchte fit und gesund bleiben.", en: "I want to stay fit and healthy.", phonetic: "ഇഖ് മേഹ്റ്റെ ഫിറ്റ് ഉൻഡ് ഗെസുൻഡ് ബ്ലൈബൻ.", grammar: "Modal 'möchten' + infinitive at end: 'bleiben' (to stay)." }
        ]
    },
    {
        id: "st_20", emoji: "🍂", titleDE: "Pläne für das Wochenende", titleEN: "Weekend Plans",
        descDE: "Erzählen Sie über Pläne", descEN: "Describe your plans for the weekend",
        sentences: [
            { de: "Am Wochenende habe ich endlich Freizeit.", en: "At the weekend I finally have free time.", phonetic: "ആം വൊഖൻഎൻഡെ ഹാബെ ഇഖ് എൻഡ്‌ലിഹ് ഫ്രൈത്സൈറ്റ്.", grammar: "Time phrase at start causes inversion. 'Freizeit' (feminine)." },
            { de: "Ich möchte am Samstag ausschlafen.", en: "I would like to sleep in on Saturday.", phonetic: "ഇഖ് മേഹ്റ്റെ ആം സാംസ്താഗ് ഔസ്ഷ്ലാഫൻ.", grammar: "Separable verb 'ausschlafen' in infinitive form at the end." },
            { de: "Ich plane ein Picknick im Park.", en: "I am planning a picnic in the park.", phonetic: "ഇഖ് പ്ലാനെ ഐൻ പിക്നിക് ഇം പാർക്ക്.", grammar: "'planen' = to plan. 'ein Picknick' (neuter accusative)." },
            { de: "Ich treffe meine Freunde am Nachmittag.", en: "I am meeting my friends in the afternoon.", phonetic: "ഇഖ് ട്രെഫെ മൈനെ ഫ്രോയ്ൻഡെ ആം നാഖ്മിറ്റാഗ്.", grammar: "'treffen' = to meet. 'meine Freunde' (plural accusative)." },
            { de: "Am Sonntag besuche ich meine Großeltern.", en: "On Sunday I am visiting my grandparents.", phonetic: "ആം സോൺടാഗ് ബെസൂഹെ ഇഖ് മൈനെ ഗ്രോസ്സ് എൽറ്റേൺ.", grammar: "'besuchen' = to visit. 'meine Großeltern' (plural accusative)." },
            { de: "Wir trinken zusammen Kaffee.", en: "We drink coffee together.", phonetic: "വിർ ട്രിങ്കൻ ത്സുസമ്മൻ കഫേ.", grammar: "'zusammen' = together. No article for 'Kaffee'." },
            { de: "Abends möchte ich ein Buch lesen.", en: "In the evenings I would like to read a book.", phonetic: "ആബൻഡ്സ് മേഹ്റ്റെ ഇഖ് ഐൻ ബൂഖ് ലേസെൻ.", grammar: "Modal verb 'möchten' + infinitive 'lesen'." },
            { de: "Das Wochenende wird bestimmt toll.", en: "The weekend will surely be great.", phonetic: "ഡാസ് വൊഖൻഎൻഡെ വിർട്ട് ബെസ്റ്റിംറ്റ് ടോൾ.", grammar: "Future indicator 'werden' (wird). 'bestimmt' = certainly/surely." }
        ]
    },
    {
        id: "st_21", emoji: "🍔", titleDE: "Esen und Trinken", titleEN: "Food & Drink",
        descDE: "Sprechen Sie über Essen", descEN: "Talk about your food and drink preferences",
        sentences: [
            { de: "Ich esse gern Gemüse und Reis.", en: "I like to eat vegetables and rice.", phonetic: "ഇഖ് എസ്സെ ഗേൺ ഗെമ്യൂസെ ഉൻഡ് റൈസ്.", grammar: "'Gemüse' is neuter. 'gern' + verb indicates liking." },
            { de: "Mein Lieblingsessen ist Hähnchen mit Pommes.", en: "My favorite food is chicken with fries.", phonetic: "മൈൻ ലീബ്ലിങ്സ് എസ്സൻ ഇസ്റ്റ് ഹേൻഖൻ മിറ്റ് പോമ്മസ്.", grammar: "'Lieblingsessen' is neuter. 'mit' takes dative." },
            { de: "Zum Frühstück trinke ich Kaffee.", en: "For breakfast, I drink coffee.", phonetic: "ത്സും ഫ്രൂഷ്ടൂക്ക് ട്രിങ്കെ ഇഖ് കഫേ.", grammar: "'zum' = zu + dem (dative neuter)." },
            { de: "Mittags esse ich meistens einen Salat.", en: "At lunchtime, I usually eat a salad.", phonetic: "മിറ്റാഗ്സ് എസ്സെ ഇഖ് മൈസ്റ്റൻസ് ഐനൻ സലാറ്റ്.", grammar: "'Salat' is masculine accusative ('einen Salat')." },
            { de: "Ich koche gern für meine Freunde.", en: "I like to cook for my friends.", phonetic: "ഇഖ് കോഖെ ഗേൺ ഫൂർ മൈനെ ഫ്രോയ്ൻഡെ.", grammar: "'für' takes accusative plural: 'meine Freunde'." },
            { de: "Das Essen im Restaurant schmeckt lecker.", en: "The food in the restaurant tastes delicious.", phonetic: "ഡാസ് എസ്സൻ ഇം റെസ്റ്റോറൻ്റ് ഷ്മെക്ട് ലെക്കർ.", grammar: "'schmecken' = to taste. 'im' = in dem." },
            { de: "Trinken Sie lieber Wasser oder Tee?", en: "Do you prefer to drink water or tea?", phonetic: "トരിങ്കൻ സീ ലീബർ വാസ്സർ ഓഡർ ടെയ്?", grammar: "'lieber' = prefer (comparative of gern). Formal 'Sie' question." },
            { de: "Ich mag keinen Fisch.", en: "I do not like fish.", phonetic: "ഇഖ് മാഗ് കൈനൻ ഫിഷ്.", grammar: "'Fisch' is masculine accusative, negated by 'keinen'." }
        ]
    },
    {
        id: "st_22", emoji: "🛋️", titleDE: "Meine Wohnungseinrichtung", titleEN: "Furniture & Rooms",
        descDE: "Beschreiben Sie Ihre Möbel", descEN: "Describe your furniture and room arrangements",
        sentences: [
            { de: "Mein Wohnzimmer ist gemütlich.", en: "My living room is cozy.", phonetic: "മൈൻ വോൻത്സിമ്മർ ഇസ്റ്റ് ഗെമ്യൂട്ട്ലിഹ്.", grammar: "'gemütlich' = cozy/comfortable. 'Wohnzimmer' is neuter." },
            { de: "In der Mitte steht ein großer Tisch.", en: "In the middle stands a big table.", phonetic: "ഇൻ ഡേർ മിറ്റെ ഷ്ടേറ്റ് ഐൻ ഗ്രോസ്സർ ടിഷ്.", grammar: "'in der Mitte' (dative feminine). Nominative masculine adjective ending: '-er'." },
            { de: "Das Sofa ist blau und sehr bequem.", en: "The sofa is blue and very comfortable.", phonetic: "ഡാസ് സോഫ ഇസ്റ്റ് ബ്ലൗ ഉൻഡ് സേർ ബെക്വേം.", grammar: "'Sofa' is neuter. 'bequem' = comfortable." },
            { de: "An der Wand hängt ein schönes Bild.", en: "On the wall hangs a beautiful picture.", phonetic: "ആൻ ഡേർ വാൻഡ് ഹേങ്ത് ഐൻ ഷേനെസ് ബിൽഡ്.", grammar: "'an der Wand' (dative feminine for location). Neuter adjective ending: '-es'." },
            { de: "Im Schlafzimmer steht mein Bett.", en: "My bed is in the bedroom.", phonetic: "ഇം ഷ്ലാഫ്ത്സിമ്മർ ഷ്ടേറ്റ് മൈൻ ബെറ്റ്.", grammar: "'Bett' is neuter. 'im' = in dem." },
            { de: "Ich habe einen großen Kleiderschrank.", en: "I have a big wardrobe.", phonetic: "ഇഖ് ഹാബെ ഐനൻ ഗ്രോസ്സൻ ക്ലൈഡർഷ്രാങ്ക്.", grammar: "'haben' + accusative masculine: 'einen großen Kleiderschrank'." },
            { de: "Die Küche hat einen modernen Kühlschrank.", en: "The kitchen has a modern refrigerator.", phonetic: "ഡീ കൂഖെ ഹാട്ട് ഐനൻ മോഡേണൻ കൂൽഷ്രാങ്ക്.", grammar: "'Kühlschrank' is masculine accusative." },
            { de: "Meine Wohnung hat viele helle Fenster.", en: "My apartment has many bright windows.", phonetic: "മൈനെ വോനൂങ് ഹാട്ട് ഫീലെ ഹെല്ലെ ഫെൻസ്റ്റർ.", grammar: "'Fenster' is plural (neuter). Adjective ending after 'viele': '-e'." }
        ]
    },
    {
        id: "st_23", emoji: "📅", titleDE: "Wochentage und Termine", titleEN: "Days & Appointments",
        descDE: "Sprechen Sie über Termine", descEN: "Talk about days, calendars and planning appointments",
        sentences: [
            { de: "Heute ist Montag.", en: "Today is Monday.", phonetic: "ഹോയ്ടെ ഇസ്റ്റ് മോൺടാഗ്.", grammar: "Days of the week are masculine and capitalization is required." },
            { de: "Am Dienstag habe ich einen Termin.", en: "On Tuesday, I have an appointment.", phonetic: "ആം ഡീൻസ്താഗ് ഹാബെ ഇഖ് ഐനൻ ടെർമീൻ.", grammar: "Days take preposition 'am' (an dem). Inversion of subject-verb." },
            { de: "Mittwochs spiele ich meistens Tennis.", en: "On Wednesdays, I usually play tennis.", phonetic: "മിറ്റ്വോഖ്സ് ഷ്പീലെ ഇഖ് മൈസ്റ്റൻസ് ടെന്നിസ്.", grammar: "Adverbs of time ending in '-s' indicate habitual action (every Wednesday)." },
            { de: "Der Termin ist um zehn Uhr.", en: "The appointment is at ten o'clock.", phonetic: "ഡേർ ടെർമീൻ ഇസ്റ്റ് ഉം ത്സേൻ ഉർ.", grammar: "Time is expressed with preposition 'um'." },
            { de: "Passt es Ihnen am Donnerstag?", en: "Does Thursday suit you?", phonetic: "പാസ്റ്റ് എസ് ഈനൻ ആം ഡോണേർസ്താഗ്?", grammar: "'passen' + dative pronoun 'Ihnen' (formal you)." },
            { de: "Am Freitag fahre ich nach Hause.", en: "On Friday, I drive home.", phonetic: "ആം ഫ്രൈറ്റാഗ് ഫാറെ ഇഖ് നാഹ് ഹൗസെ.", grammar: "'nach Hause fahren' = going home (fixed idiom)." },
            { de: "Das Wochenende beginnt am Samstag.", en: "The weekend begins on Saturday.", phonetic: "ഡാസ് വൊഖൻഎൻഡെ ബെഗിൻ്റ് ആം സാംസ്താഗ്.", grammar: "'Wochenende' is neuter. 'beginnen' = to begin." },
            { de: "Am Sonntag schlafe ich lange.", en: "On Sunday, I sleep for a long time.", phonetic: "ആം സോൺടാഗ് ഷ്ളാഫെ ഇഖ് ലാംഗെ.", grammar: "Adverb 'lange' = long/for a long duration." }
        ]
    },
    {
        id: "st_24", emoji: "💼", titleDE: "Am Arbeitsplatz", titleEN: "At the Workplace",
        descDE: "Erzählen Sie über die Arbeit", descEN: "Describe your desk, tasks and office colleagues",
        sentences: [
            { de: "Ich arbeite in einem großen Büro.", en: "I work in a big office.", phonetic: "ഇഖ് ആർബൈറ്റെ ഇൻ ഐനം ഗ്രോസ്സൻ ബൂറോ.", grammar: "'in einem' = in a (dative neuter)." },
            { de: "Auf meinem Schreibtisch steht ein Computer.", en: "There is a computer on my desk.", phonetic: "ഔഫ് മൈനം ഷ്രൈബ്ടിഷ് ഷ്ടേറ്റ് ഐൻ കമ്പ്യൂട്ടർ.", grammar: "'auf meinem' = on my (dative masculine). 'Schreibtisch' = desk." },
            { de: "Ich schreibe viele E-Mails jeden Tag.", en: "I write many emails every day.", phonetic: "ഇഖ് ഷ്രൈബെ ഫീലെ ഈ-മെയ്‌ൽസ് യേഡൻ ടാഗ്.", grammar: "'viele E-Mails' (accusative plural). 'jeden Tag' = every day." },
            { de: "Meine Kollegen sind sehr nett.", en: "My colleagues are very nice.", phonetic: "മൈനെ കൊള്ളേഗൻ സിൻഡ് സേർ നെറ്റ്.", grammar: "'Kollegen' is plural. 'sind' = are." },
            { de: "Um zwölf Uhr machen wir Mittagspause.", en: "At twelve o'clock, we take a lunch break.", phonetic: "ഉം ത്സ്വോൾഫ് ഉർ മാഖൻ വിർ മിറ്റാഗ്സ് പാസ്സെ.", grammar: "'Mittagspause machen' = to take a lunch break." },
            { de: "Ich telefoniere oft mit Kunden.", en: "I often talk on the phone with clients.", phonetic: "ഇഖ് ടെലിഫോണിയറെ ഓഫ്റ്റ് മിറ്റ് കുണ്ടൻ.", grammar: "'mit' takes dative plural: 'mit Kunden'." },
            { de: "Die Arbeit macht mir viel Spaß.", en: "The work is a lot of fun for me.", phonetic: "ഡീ ആർബൈറ്റ് മാഖ്ട് മിർ ഫീൽ ഷ്പാസ്.", grammar: "'Spaß machen' takes dative pronoun 'mir'." },
            { de: "Um fünf Uhr habe ich Feierabend.", en: "At five o'clock, I finish work.", phonetic: "ഉം ഫൂൻഫ് ഉർ ഹാബെ ഇഖ് ഫൈയറാബൻഡ്.", grammar: "'Feierabend' = end of working day/free time after work." }
        ]
    },
    {
        id: "st_25", emoji: "👤", titleDE: "Aussehen und Charakter", titleEN: "Appearance & Character",
        descDE: "Beschreiben Sie Personen", descEN: "Describe looks and traits of a family member or friend",
        sentences: [
            { de: "Mein Bruder ist sehr groß.", en: "My brother is very tall.", phonetic: "മൈൻ ബ്രൂഡർ ഇസ്റ്റ് സേർ ഗ്രോസ്.", grammar: "'Bruder' is masculine. 'groß' = tall/big." },
            { de: "Er hat kurze braune Haare.", en: "He has short brown hair.", phonetic: "എർ ഹാറ്റ് കുർത്സെ ബ്രൗനെ ഹാരെ.", grammar: "'Haare' is plural (neuter). Adjective ending: '-e'." },
            { de: "Sie hat blaue Augen und ein nettes Lächeln.", en: "She has blue eyes and a nice smile.", phonetic: "സീ ഹാറ്റ് ബ്ലൗവെ ഔഗൻ ഉൻഡ് ഐൻ നെറ്റെസ് ലേഷ്ൻ.", grammar: "'Augen' is plural (blaue). 'Lächeln' is neuter singular (ein nettes)." },
            { de: "Mein Vater trägt eine Brille.", en: "My father wears glasses.", phonetic: "മൈൻ  ഫാട്ടർ ട്രേഗ്ട് ഐനെ ബ്രില്ലെ.", grammar: "'tragen' = to wear/carry. 'Brille' is feminine." },
            { de: "Meine Schwester ist sehr freundlich.", en: "My sister is very friendly.", phonetic: "മൈനെ ഷ്വെസ്റ്റർ ഇസ്റ്റ് സേർ ഫ്രോയ്ൻഡ്‌ലിഹ്.", grammar: "'freundlich' = friendly/kind." },
            { de: "Sie hilft mir immer bei Problemen.", en: "She always helps me with problems.", phonetic: "സീ ഹിൽഫ്ട് മിർ ഇമ്മർ ബൈ പ്രോബ്ലേമൻ.", grammar: "'helfen' + dative: 'mir'. 'bei' + dative plural: 'bei Problemen'." },
            { de: "Mein Onkel ist ein lustiger Mensch.", en: "My uncle is a funny person.", phonetic: "മൈൻ ഓങ്കൽ ഇസ്റ്റ് ഐൻ ലുസ്റ്റിഗർ മെൻഷ്.", grammar: "'Mensch' is masculine nominative. Adjective ending after 'ein': '-er'." },
            { de: "Wir lachen oft zusammen.", en: "We often laugh together.", phonetic: "വിർ ലാഖൻ ഓഫ്റ്റ് ത്സുസമ്മൻ.", grammar: "'lachen' = to laugh. 'zusammen' = together." }
        ]
    },
    {
        id: "st_26", emoji: "🛒", titleDE: "Im Supermarkt", titleEN: "At the Supermarket",
        descDE: "Sprechen Sie über Lebensmittel", descEN: "Grocery shopping, prices, asking for items and payment",
        sentences: [
            { de: "Ich brauche einen Einkaufswagen.", en: "I need a shopping cart.", phonetic: "ഇഖ് ബ്രൗഖെ ഐനൻ ഐൻകൗഫസ് വാഗൻ.", grammar: "'Einkaufswagen' is masculine accusative: 'einen'." },
            { de: "Wo finde ich die Milch?", en: "Where do I find the milk?", phonetic: "വോ ഫിൻഡെ ഇഖ് ഡീ മിൽഹ്?", grammar: "'die Milch' is feminine accusative object." },
            { de: "Die Bananen sind heute im Angebot.", en: "The bananas are on offer today.", phonetic: "ഡീ ബനാനൻ സിൻഡ് ഹോയ്ടെ ഇം അൻഗെബോട്ട്.", grammar: "'im Angebot' = on sale/special offer. 'Bananen' is plural." },
            { de: "Was kostet ein Kilo Kartoffeln?", en: "How much does a kilo of potatoes cost?", phonetic: "വാസ് കോസ്റ്റേട്ട് ഐൻ കിലോ കാർട്ടോഫെൽൻ?", grammar: "'Kartoffeln' is plural. 'Kilo' is neuter." },
            { de: "Ich kaufe auch Brot und Butter.", en: "I also buy bread and butter.", phonetic: "ഇഖ് കൗഫെ ഔഖ് ബ്രോട്ടു ഉൻഡ് ബൂട്ടർ.", grammar: "'Brot' is neuter, 'Butter' is feminine. No articles for groceries." },
            { de: "Das Gemüse ist sehr frisch.", en: "The vegetables are very fresh.", phonetic: "ഡാസ് ഗെമ്യൂസെ ഇസ്റ്റ് സേർ ഫ്രിഷ്.", grammar: "'Gemüse' is neuter singular." },
            { de: "Ich bezahle an der Kasse.", en: "I pay at the checkout counter.", phonetic: "ഇഖ് bezahle ആൻ ഡേർ കാസ്സെ.", grammar: "'an der Kasse' (dative feminine location)." },
            { de: "Zahlen Sie bar oder mit Karte?", en: "Are you paying in cash or by card?", phonetic: "ത്സാലൻ സീ ബാർ ഓഡർ മിറ്റ് കർട്ടെ?", grammar: "'bar' = cash. 'mit Karte' = with card." }
        ]
    },
    {
        id: "st_27", emoji: "🏨", titleDE: "Im Hotel", titleEN: "At the Hotel",
        descDE: "Gespräch an der Rezeption", descEN: "Checking in, checking out, and asking about guest facilities",
        sentences: [
            { de: "Guten Tag, ich habe ein Zimmer reserviert.", en: "Good day, I have reserved a room.", phonetic: "ഗൂറ്റൻ ടാഗ്, ഇഖ് ഹാബെ ഐൻ ത്സിമ്മർ റെസെർവീയർട്ട്.", grammar: "Perfect tense: 'habe reserviert'. 'Zimmer' is neuter accusative." },
            { de: "Mein Name ist Nair.", en: "My name is Nair.", phonetic: "മൈൻ നാമെ ഇസ്റ്റ് നായർ.", grammar: "'Name' is masculine." },
            { de: "Hier ist mein Reisepass.", en: "Here is my passport.", phonetic: "ഹീർ ഇസ്റ്റ് മൈൻ റൈസെപാസ്സ്.", grammar: "'Reisepass' is masculine nominative." },
            { de: "Um wie viel Uhr gibt es Frühstück?", en: "At what time is breakfast available?", phonetic: "ഉം വീ ഫീൽ ഉർ ഗിബ്ട് എസ് ഫ്രൂഷ്ടൂക്ക്?", grammar: "'Um wie viel Uhr' = at what time (fixed phrase)." },
            { de: "Das Frühstück ist von sieben bis zehn Uhr.", en: "Breakfast is from seven to ten o'clock.", phonetic: "ഡാസ് ഫ്രൂഷ്ടൂക്ക് ഇസ്റ്റ് ഫോൻ സീബൻ ബിസ് ത്സേൻ ഉർ.", grammar: "'von ... bis' = from ... to." },
            { de: "Gibt es WLAN im Zimmer?", en: "Is there Wi-Fi in the room?", phonetic: "ഗിബ്ട് എസ് വേ-ലാൻ ഇം ത്സിമ്മർ?", grammar: "'im' = in dem (dative location)." },
            { de: "Wo ist der Aufzug, bitte?", en: "Where is the elevator, please?", phonetic: "വോ ഇസ്റ്റ് ഡേർ ഔഫ്ത്സൂഗ്, ബിറ്റ്റ്റെ?", grammar: "'Aufzug' is masculine." },
            { de: "Ich möchte morgen um neun Uhr auschecken.", en: "I would like to check out tomorrow at nine o'clock.", phonetic: "ഇഖ് മേഹ്റ്റെ മോർഗൻ ഉം നോയൻ ഉർ ഔസ്ഷെക്കൻ.", grammar: "Separable verb 'auschecken' as infinitive at end." }
        ]
    },
    {
        id: "st_28", emoji: "🚀", titleDE: "Zukunftspläne", titleEN: "Future Plans",
        descDE: "Erzählen Sie über Zukunftspläne", descEN: "Describe what you wish to study, do and live in future",
        sentences: [
            { de: "Ich möchte mein Deutsch verbessern.", en: "I would like to improve my German.", phonetic: "ഇഖ് മേഹ്റ്റെ മൈൻ ഡോയ്ഷ് ഫെർബെസ്സെൻ.", grammar: "Modal 'möchten' + infinitive 'verbessern' (to improve)." },
            { de: "Nächstes Jahr mache ich eine Reise.", en: "Next year, I am making a trip.", phonetic: "നേഹ്സ്ടസ് യൂർ മാഖെ ഇഖ് ഐനെ റൈസെ.", grammar: "Time adverb at start causes inversion. 'Reise' is feminine." },
            { de: "Ich will in Deutschland studieren.", en: "I want to study in Germany.", phonetic: "ഇഖ് വിൽ ഇൻ ഡോയ്ഷ്‍ലൻഡ് ഷ്ടൂഡിയറൻ.", grammar: "Modal verb 'wollen' (will) + infinitive 'studieren' at end." },
            { de: "Ich suche eine gute Arbeit.", en: "I am looking for a good job.", phonetic: "ഇഖ് സൂഖെ ഐനെ ഗൂട്ടെ ആർബൈറ്റ്.", grammar: "'Arbeit' is feminine accusative: 'eine gute'." },
            { de: "Später möchte ich ein Haus kaufen.", en: "Later I would like to buy a house.", phonetic: "ഷ്പേട്ടർ മേഹ്റ്റെ ഇഖ് ഐൻ ഹൗസ് കൗഫൻ.", grammar: "'Haus' is neuter. 'kaufen' = to buy." },
            { de: "Ich möchte eine neue Sprache lernen.", en: "I want to learn a new language.", phonetic: "ഇഖ് മേഹ്റ്റെ ഐനെ നോയെ ഷ്പ്രാഖെ ലേർനൻ.", grammar: "'Sprache' is feminine. Adjective ending: '-e'." },
            { de: "Ich werde fleißig lernen.", en: "I will study hard.", phonetic: "ഇഖ് വേർഡെ ഫ്ലൈസിഹ് ലേർനൻ.", grammar: "Future tense: 'werden' (werde) + infinitive 'lernen'. 'fleißig' = diligent/hardworking." },
            { de: "Ich hoffe, meine Träume werden wahr.", en: "I hope my dreams come true.", phonetic: "ഇഖ് ഹോഫെ, മൈനെ ട്രോയ്മെ വേർഡൻ വാർ.", grammar: "'Träume' is plural. 'wahr werden' = to become true." }
        ]
    },
    {
        id: "st_29", emoji: "📬", titleDE: "Post und Briefe", titleEN: "Mail & Post Office",
        descDE: "Erzählen Sie über die Post", descEN: "Talk about mail, sending envelopes or buying postage stamps",
        sentences: [
            { de: "Ich bringe ein Paket zur Post.", en: "I am taking a parcel to the post office.", phonetic: "ഇഖ് ബിംഗെ ഐൻ പാകേറ്റ് ത്സൂർ പോസ്റ്റ്.", grammar: "'Paket' is neuter. 'zur' = zu + der (dative feminine)." },
            { de: "Wo kann ich Briefmarken kaufen?", en: "Where can I buy stamps?", phonetic: "വോ കാൻ ഇഖ് ബ്രീഫ്മാർക്കൻ കൗഫൻ?", grammar: "Modal 'können' (kann) + infinitive 'kaufen'." },
            { de: "Ich möchte diesen Brief nach Indien schicken.", en: "I want to send this letter to India.", phonetic: "ഇഖ് മേഹ്റ്റെ ഡീസൻ ബ്രീഫ് നാഹ് ഇൻഡിയൻ ഷിക്കൻ.", grammar: "'Brief' is masculine accusative: 'diesen Brief'. 'nach' for country names." },
            { de: "Wie viel kostet das Porto?", en: "How much is the postage?", phonetic: "വീ ഫീൽ കോസ്റ്റേട്ട് ഡാസ് പോർട്ടോ?", grammar: "'Porto' is neuter." },
            { de: "Ich schreibe eine Postkarte an meine Familie.", en: "I am writing a postcard to my family.", phonetic: "ഇഖ് ഷ്രൈബെ ഐനെ പോസ്റ്റ് കാർട്ടെ ആൻ മൈനെ ഫമീലിയ.", grammar: "'an' + accusative for recipient: 'an meine Familie'." },
            { de: "Der Postbote kommt jeden Vormittag.", en: "The mail carrier comes every morning.", phonetic: "ഡേർ പോസ്റ്റ്ബോറ്റെ കൊമ്ത് യേഡൻ ഫോർമിറ്റാഗ്.", grammar: "'Postbote' is masculine (weak noun). 'jeden Vormittag' (accusative time)." },
            { de: "Haben Sie einen Briefkasten gesehen?", en: "Have you seen a mailbox?", phonetic: "ഹാബൻ സീ ഐനൻ ബ്രീഫ്കാസ്റ്റൻ ഗെസേഹൻ?", grammar: "Perfect tense: 'haben gesehen'. 'Briefkasten' is masculine accusative: 'einen'." },
            { de: "Ich habe heute einen Brief bekommen.", en: "I received a letter today.", phonetic: "ഇഖ് ഹാബെ ഹോയ്ടെ ഐനൻ ബ്രീഫ് ബെകൊമ്മൻ.", grammar: "Perfect tense: 'habe bekommen'." }
        ]
    },
    {
        id: "st_30", emoji: "🌳", titleDE: "In der Natur", titleEN: "In Nature",
        descDE: "Erzählen Sie über die Natur", descEN: "Describe nature walks, forests, lakes and hiking",
        sentences: [
            { de: "Ich gehe gern im Wald spazieren.", en: "I like to walk in the forest.", phonetic: "ഇഖ് ഗേ ഗേൺ ഇം വാൽഡ് ഷ്പാത്സീറൻ.", grammar: "'Wald' is masculine. 'im' = in dem (location dative)." },
            { de: "Die Luft in der Natur ist frisch.", en: "The air in nature is fresh.", phonetic: "ഡീ ലുഫ്ട് ഇൻ ഡേർ നടുർ ഇസ്റ്റ് ഫ്രിഷ്.", grammar: "'Luft' is feminine. 'in der Natur' (dative)." },
            { de: "Wir wandern am Wochenende in den Bergen.", en: "We hike in the mountains at the weekend.", phonetic: "വിർ വാൻഡേൺ ആം വൊഖൻഎൻഡെ ഇൻ ഡൻ ബെർഗൻ.", grammar: "'in den Bergen' = in the mountains (dative plural)." },
            { de: "Der See ist blau und sehr sauber.", en: "The lake is blue and very clean.", phonetic: "ഡേർ സേയ് ഇസ്റ്റ് ബ്ലൗ ഉൻഡ് സേർ സൗബർ.", grammar: "'See' (lake) is masculine. 'sauber' = clean." },
            { de: "Es gibt viele Blumen auf der Wiese.", en: "There are many flowers in the meadow.", phonetic: "എസ് ഗിബ്ട് ഫീലെ ബ്ലൂമൻ ഔഫ് ഡേർ വീസ്സെ.", grammar: "'auf der Wiese' = on the meadow (dative feminine)." },
            { de: "Ich höre die Vögel singen.", en: "I hear the birds singing.", phonetic: "ഇഖ് ഹേറെ ഡീ ഫോഗൽ സിംഗൻ.", grammar: "'Vögel' is plural of 'Vogel' (bird). Accusative object." },
            { de: "Die Sonne scheint den ganzen Tag.", en: "The sun shines all day.", phonetic: "ഡീ സോണ്ണെ ഷൈൻ്റ് ഡൻ ഗാൻത്സൻ ടാഗ്.", grammar: "'Sonne' is feminine. 'den ganzen Tag' (masculine accusative duration)." },
            { de: "Ich fotografiere gern Tiere.", en: "I like to photograph animals.", phonetic: "ഇഖ് ഫോട്ടോപോണിയറെ ഗേൺ തീയറെ.", grammar: "'Tiere' is plural of 'Tier' (neuter)." }
        ]
    }
];

// --- SPRECHTRAINER STATE & LOCALSTORAGE ACCESSORS ---
let sprechtrainerState = {
    currentTopicId: null,
    currentStage: 1,
    learnedSentences: {}, // { topicId: Set of indices }
    selfRatings: {}       // { topicId_sIdx: 'good'|'practice' }
};

function getSTProgress() {
    const raw = localStorage.getItem("st_progress");
    return raw ? JSON.parse(raw) : {};
}

function saveSTProgress(topicId, stageNum) {
    const prog = getSTProgress();
    prog[topicId] = Math.max(prog[topicId] || 0, stageNum);
    localStorage.setItem("st_progress", JSON.stringify(prog));
}
function showSprechtrainerHub() {
    switchToView("view-sprechtrainer-hub");
    const grid = document.getElementById("sprechtrainer-topic-grid");
    if (!grid) return;

    grid.innerHTML = "";
    const progress = getSTProgress();

    FLUENCY_DATABASE.forEach(topic => {
        // Stage progress (0 to 5 completed)
        const currentProgress = progress[topic.id] || 0;
        const percent = Math.min(100, Math.round((currentProgress / 5) * 100));

        // SVG circle dimensions (R=24, Circumference=151)
        const circ = 151;
        const strokeOffset = circ - (circ * percent) / 100;
        const isComplete = currentProgress >= 5;

        const card = document.createElement("div");
        card.className = `st-topic-card ${isComplete ? 'completed' : ''}`;
        card.setAttribute("role", "link");
        card.setAttribute("tabindex", "0");
        card.onclick = () => loadSprechtrainerTopic(topic.id);
        card.onkeydown = (e) => {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                loadSprechtrainerTopic(topic.id);
            }
        };

        card.innerHTML = `
            <div class="st-progress-ring-wrap">
                <svg width="56" height="56">
                    <circle class="st-ring-bg" cx="28" cy="28" r="24" />
                    <circle class="st-ring-fg ${isComplete ? 'complete' : ''}" cx="28" cy="28" r="24"
                            stroke-dasharray="${circ}" stroke-dashoffset="${strokeOffset}" />
                </svg>
                <div class="st-ring-label">${percent}%</div>
            </div>
            <div class="st-topic-body">
                <h4>${topic.emoji} ${topic.titleDE}</h4>
                <p>${topic.titleEN}</p>
            </div>
            <div class="st-topic-arrow">&rarr;</div>
        `;
        grid.appendChild(card);
    });
}

function loadSprechtrainerTopic(topicId) {
    const topic = FLUENCY_DATABASE.find(t => t.id === topicId);
    if (!topic) return;

    sprechtrainerState.currentTopicId = topicId;
    
    // Determine last saved stage or default to Stage 1
    const progress = getSTProgress();
    const completedStage = progress[topicId] || 0;
    
    // If completed all or stage is 0, start at stage 1
    sprechtrainerState.currentStage = (completedStage >= 5) ? 1 : (completedStage + 1);

    switchToView("view-sprechtrainer-stage");
    renderSprechtrainerStage();
}
function renderSprechtrainerStage() {
    const topic = FLUENCY_DATABASE.find(t => t.id === sprechtrainerState.currentTopicId);
    if (!topic) return;

    // 1. Title
    document.getElementById("sprechtrainer-stage-title").innerHTML = `
        ${topic.emoji} ${topic.titleDE} <span class="subtitle-en">(${topic.titleEN})</span>
    `;

    // 2. Stage Progress Circles
    const progressEl = document.getElementById("sprechtrainer-stage-progress");
    const current = sprechtrainerState.currentStage;
    
    const stageTitles = [
        "Bausteine (Vocabulary Blocks)",
        "Hören & Nachsagen (Listen & Repeat)",
        "Lückentext (Gap Fill)",
        "Aufbau-Rede (Vanishing Cues)",
        "Freies Sprechen (Free Monologue)"
    ];

    let html = '<div style="display:flex; flex-direction:column; align-items:center; width:100%;">';
    html += '<div style="display:flex; align-items:center; justify-content:center; gap:0;">';
    for (let i = 1; i <= 5; i++) {
        const isActive = i === current;
        const isDone = i < current;
        html += `
            <div class="st-stage-step">
                <div class="st-stage-circle ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}">${i}</div>
                ${i < 5 ? `<div class="st-stage-line ${isDone ? 'done' : ''}"></div>` : ''}
            </div>
        `;
    }
    html += '</div>';
    html += `<p class="sprechtrainer-stage-subtitle" style="margin-top:12px;">Schritt ${current}: ${stageTitles[current-1]}</p>`;
    html += '</div>';
    progressEl.innerHTML = html;

    // 3. Setup Next/Prev button bindings and default visibilities
    const prevBtn = document.getElementById("btn-sprechtrainer-prev");
    const nextBtn = document.getElementById("btn-sprechtrainer-next");

    prevBtn.style.display = current > 1 ? "block" : "none";
    nextBtn.disabled = true; // Disabled until stage requirements met
    nextBtn.textContent = current === 5 ? "Fertig (Finish) ✓" : "Weiter (Next) \u2192";

    prevBtn.onclick = () => {
        stopRecordingProcess();
        sprechtrainerState.currentStage--;
        renderSprechtrainerStage();
    };

    nextBtn.onclick = () => {
        stopRecordingProcess();
        if (sprechtrainerState.currentStage < 5) {
            // Save stage completion progress
            saveSTProgress(topic.id, sprechtrainerState.currentStage);
            sprechtrainerState.currentStage++;
            renderSprechtrainerStage();
        } else {
            // Finish topic monologues!
            saveSTProgress(topic.id, 5);
            portalState.sessionsCompleted++;
            updateStreakOnActivity();
            savePortalStateToStorage();
            alert(`🎉 Herzlichen Glückwunsch! Sie haben den Sprechtrainer für "${topic.titleDE}" abgeschlossen!`);
            showSprechtrainerHub();
        }
    };

    // 4. Load Stage Workspace Content
    switch (current) {
        case 1: renderST_Stage1(topic); break;
        case 2: renderST_Stage2(topic); break;
        case 3: renderST_Stage3(topic); break;
        case 4: renderST_Stage4(topic); break;
        case 5: renderST_Stage5(topic); break;
    }
}
function renderST_Stage1(topic) {
    const content = document.getElementById("sprechtrainer-stage-content");
    if (!sprechtrainerState.learnedSentences[topic.id]) {
        sprechtrainerState.learnedSentences[topic.id] = new Set();
    }
    const learnedSet = sprechtrainerState.learnedSentences[topic.id];

    let html = `
        <div class="st-stage-header">
            <h3>Schritt 1: Bausteine (Sentence Bricks)</h3>
            <p>Listen, read, and understand each individual sentence before putting them together. Mark all sentences as learned to proceed.</p>
        </div>
        <div class="st-sentence-list">
    `;

    topic.sentences.forEach((s, idx) => {
        const isLearned = learnedSet.has(idx);
        html += `
            <div class="st-sentence-card ${isLearned ? 'learned' : ''}" id="st-card-${idx}">
                <div class="st-sentence-top">
                    <span class="st-sentence-num">${idx + 1}</span>
                    <div class="st-sentence-texts">
                        <p class="st-sentence-de">${s.de}</p>
                        <p class="st-sentence-en">${s.en}</p>
                        <p class="st-sentence-phonetic">🔊 ML Pronunciation: ${s.phonetic}</p>
                        <p class="st-sentence-grammar">💡 Grammatik (Tip): ${s.grammar}</p>
                    </div>
                </div>
                <div class="st-sentence-actions">
                    <button class="st-btn-tts" onclick="playSpeech('${s.de.replace(/'/g, "\\'")}', 0.85)">🔊 Anhören (Slow TTS)</button>
                    <button class="st-btn-learned ${isLearned ? 'done' : ''}" id="st-btn-learned-${idx}">
                        ${isLearned ? '✓ Gelernt (Learned)' : 'Mark as Learned'}
                    </button>
                </div>
            </div>
        `;
    });

    html += `
        </div>
        <p class="st-learned-count" id="st-learned-status">0 / ${topic.sentences.length} sentences learned</p>
    `;
    content.innerHTML = html;

    // Helper to update Next button and counter
    const updateProgress = () => {
        const count = learnedSet.size;
        document.getElementById("st-learned-status").textContent = `${count} / ${topic.sentences.length} sentences learned`;
        document.getElementById("btn-sprechtrainer-next").disabled = (count < topic.sentences.length);
    };

    // Bind mark learned buttons
    topic.sentences.forEach((s, idx) => {
        const card = document.getElementById(`st-card-${idx}`);
        const btn = document.getElementById(`st-btn-learned-${idx}`);
        btn.onclick = () => {
            if (learnedSet.has(idx)) {
                learnedSet.delete(idx);
                btn.className = "st-btn-learned";
                btn.textContent = "Mark as Learned";
                card.classList.remove("learned");
            } else {
                learnedSet.add(idx);
                btn.className = "st-btn-learned done";
                btn.textContent = "✓ Gelernt (Learned)";
                card.classList.add("learned");
            }
            updateProgress();
        };
    });

    updateProgress();
}

function renderST_Stage2(topic) {
    const content = document.getElementById("sprechtrainer-stage-content");
    
    // Check existing ratings
    const ratings = sprechtrainerState.selfRatings;
    
    let html = `
        <div class="st-stage-header">
            <h3>Schritt 2: Hören & Nachsagen (Listen & Repeat)</h3>
            <p>First listen to the complete native monologue. Then record and repeat each sentence. Self-rate your speech to proceed.</p>
        </div>
        <div class="st-full-audio-panel">
            <span class="st-full-audio-label">🎵 Complete Native Monologue:</span>
            <button class="btn btn-primary btn-touch" onclick="playSpeech('${topic.sentences.map(s => s.de.replace(/'/g, "\\'")).join('. ')}', 0.9)">🔊 Play Full Monologue</button>
        </div>
        <div class="st-sentence-list">
    `;

    topic.sentences.forEach((s, idx) => {
        const ratingKey = `${topic.id}_${idx}`;
        const currentRating = ratings[ratingKey]; // 'good' or 'practice'
        
        html += `
            <div class="st-repeat-item">
                <p class="st-repeat-sentence">${idx + 1}. ${s.de}</p>
                <div class="st-repeat-controls">
                    <button class="st-btn-tts" onclick="playSpeech('${s.de.replace(/'/g, "\\'")}', 0.9)">🔊 Listen</button>
                    <button class="btn btn-touch" id="st-mic-btn-${idx}" style="background:#dc2626; color:#fff; border:none; border-radius:8px; padding:6px 12px; font-size:0.8rem; font-weight:600; cursor:pointer;">🎙️ Record</button>
                    <button class="btn btn-secondary btn-touch" id="st-playback-btn-${idx}" style="display:none; padding:6px 12px; font-size:0.8rem;">🎧 Hear Self</button>
                    <span id="st-status-${idx}" style="font-size:0.8rem; color:var(--color-text-muted);">Not recorded</span>
                </div>
                <div class="st-self-rating" id="st-rating-panel-${idx}" style="display:${currentRating ? 'flex' : 'none'};">
                    <button class="st-rating-btn good ${currentRating === 'good' ? 'selected' : ''}" id="st-rate-good-${idx}">⭐ I sounded good</button>
                    <button class="st-rating-btn practice ${currentRating === 'practice' ? 'selected' : ''}" id="st-rate-practice-${idx}">⚠️ Needs practice</button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    content.innerHTML = html;

    const checkNextUnification = () => {
        let allRated = true;
        topic.sentences.forEach((s, idx) => {
            const key = `${topic.id}_${idx}`;
            if (!ratings[key]) allRated = false;
        });
        document.getElementById("btn-sprechtrainer-next").disabled = !allRated;
    };

    // Bind recording buttons
    topic.sentences.forEach((s, idx) => {
        const micBtn = document.getElementById(`st-mic-btn-${idx}`);
        const playBtn = document.getElementById(`st-playback-btn-${idx}`);
        const statusLbl = document.getElementById(`st-status-${idx}`);
        const ratingPanel = document.getElementById(`st-rating-panel-${idx}`);
        const qId = `${topic.id}_stage2_${idx}`;

        // Keep local ref for checking if URL exists
        if (speakingRecordings[qId]) {
            playBtn.style.display = "block";
            statusLbl.textContent = "Recorded";
            ratingPanel.style.display = "flex";
        }

        let isRecording = false;

        micBtn.onclick = () => {
            if (!isRecording) {
                isRecording = true;
                micBtn.textContent = "⏹ Stop";
                micBtn.style.background = "var(--color-text-primary)";
                statusLbl.textContent = "Recording...";
                playBtn.style.display = "none";
                
                startRecording(qId, 
                    (dur) => statusLbl.textContent = `Recording... (${dur})`,
                    (url) => {
                        isRecording = false;
                        micBtn.textContent = "🎙️ Re-Record";
                        micBtn.style.background = "#dc2626";
                        statusLbl.textContent = "Recorded";
                        playBtn.style.display = "block";
                        ratingPanel.style.display = "flex";
                        playBtn.onclick = () => {
                            const aud = new Audio(url);
                            aud.play();
                        };
                    }
                );
            } else {
                stopRecordingProcess();
            }
        };

        if (speakingRecordings[qId]) {
            playBtn.onclick = () => {
                const aud = new Audio(speakingRecordings[qId].url);
                aud.play();
            };
        }

        // Bind ratings
        const key = `${topic.id}_${idx}`;
        const goodBtn = document.getElementById(`st-rate-good-${idx}`);
        const pracBtn = document.getElementById(`st-rate-practice-${idx}`);

        goodBtn.onclick = () => {
            ratings[key] = "good";
            goodBtn.classList.add("selected");
            pracBtn.classList.remove("selected");
            checkNextUnification();
        };

        pracBtn.onclick = () => {
            ratings[key] = "practice";
            pracBtn.classList.add("selected");
            goodBtn.classList.remove("selected");
            checkNextUnification();
        };
    });

    checkNextUnification();
}

function renderST_Stage3(topic) {
    const content = document.getElementById("sprechtrainer-stage-content");

    let html = `
        <div class="st-stage-header">
            <h3>Schritt 3: Lückentext (Recall & Fill)</h3>
            <p>Fill in the missing words in the monologue below. Type your response in the boxes. Correct answers will turn green. Fill all correct to proceed!</p>
        </div>
        <div class="st-sentence-list">
    `;

    // Define standard gaps per sentence to make a clean, deterministic experience
    const gapWords = [
        "Name",      // Hallo, mein Name ist Maria.
        "kommen",    // Ich komme aus Indien.
        "wohne",     // Ich wohne in Kerala.
        "Jahre",     // Ich bin 28 Jahre alt.
        "Deutsch",   // Ich spreche ein bisschen Deutsch.
        "seit",      // Ich lerne seit drei Monaten Deutsch.
        "A1",        // Ich mache den Goethe A1 Kurs.
        "kennenlernen" // Es freut mich, Sie kennenzulernen!
    ];

    topic.sentences.forEach((s, idx) => {
        // Fallback to last word if index exceeds gapWords list size (shouldn't happen)
        const targetWord = gapWords[idx] || s.de.split(" ").pop().replace(/[.!?]/g, "");
        const splitText = s.de.split(new RegExp(`\\b${targetWord}\\b`, "i"));
        
        let gapHtml = "";
        if (splitText.length > 1) {
            gapHtml = `${splitText[0]}<input type="text" id="st-gap-${idx}" class="st-gap-input" placeholder="..." style="background:var(--color-panel); border:1px solid var(--color-border); color:var(--color-text-primary); border-radius:6px; padding:4px 8px; width:120px; font-weight:700; text-align:center; font-family:inherit;">${splitText[1]}`;
        } else {
            gapHtml = s.de; // Fallback
        }

        html += `
            <div class="st-sentence-card" id="st-gap-card-${idx}">
                <div class="st-sentence-top">
                    <span class="st-sentence-num">${idx + 1}</span>
                    <div class="st-sentence-texts">
                        <p class="st-sentence-de" style="line-height:2;">${gapHtml}</p>
                        <p class="st-sentence-en" style="margin-top:6px; opacity:0.8;">🇬🇧 ${s.en}</p>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    content.innerHTML = html;

    const checkGaps = () => {
        let allCorrect = true;
        topic.sentences.forEach((s, idx) => {
            const input = document.getElementById(`st-gap-${idx}`);
            if (!input) return;
            const targetWord = gapWords[idx] || s.de.split(" ").pop().replace(/[.!?]/g, "");
            
            const userVal = input.value.trim().toLowerCase().replace(/[.!?]/g, "");
            const targetVal = targetWord.toLowerCase().replace(/[.!?]/g, "");

            if (userVal === targetVal) {
                input.style.borderColor = "#4ade80";
                input.style.background = "rgba(74, 222, 128, 0.15)";
            } else {
                allCorrect = false;
                if (userVal.length > 0) {
                    input.style.borderColor = "#f87171";
                    input.style.background = "rgba(248, 113, 113, 0.15)";
                } else {
                    input.style.borderColor = "var(--color-border)";
                    input.style.background = "var(--color-panel)";
                }
            }
        });

        document.getElementById("btn-sprechtrainer-next").disabled = !allCorrect;
    };

    // Bind real-time input checks
    topic.sentences.forEach((s, idx) => {
        const input = document.getElementById(`st-gap-${idx}`);
        if (input) {
            input.oninput = checkGaps;
        }
    });

    checkGaps();
}
function renderST_Stage4(topic) {
    const content = document.getElementById("sprechtrainer-stage-content");
    
    let currentRound = 1; // 1 to 5 rounds
    
    const renderRound = () => {
        // Build monologue sentences with vanishing rules
        let sentencesHtml = "";
        topic.sentences.forEach((s, idx) => {
            let txt = s.de;
            if (currentRound === 2) {
                // Round 2: Hide every 3rd sentence
                if ((idx + 1) % 3 === 0) txt = `<span style="background:rgba(139,92,246,0.15); border:1px dashed var(--color-border); border-radius:4px; padding:2px 8px; color:transparent; user-select:none;">[Hidden Sentence]</span>`;
            } else if (currentRound === 3) {
                // Round 3: Hide alternate sentences
                if (idx % 2 === 1) txt = `<span style="background:rgba(139,92,246,0.15); border:1px dashed var(--color-border); border-radius:4px; padding:2px 8px; color:transparent; user-select:none;">[Hidden Sentence]</span>`;
            } else if (currentRound === 4) {
                // Round 4: Only show first word of each sentence
                const words = s.de.split(" ");
                const first = words[0];
                const rest = words.slice(1).join(" ");
                txt = `<strong>${first}</strong> <span style="opacity:0.25; filter:blur(2px); user-select:none;">${rest}</span>`;
            } else if (currentRound === 5) {
                // Round 5: Hide everything
                txt = `<span style="background:rgba(139,92,246,0.15); border:1px dashed var(--color-border); border-radius:4px; padding:2px 8px; color:transparent; user-select:none;">[Speak Monologue From Memory]</span>`;
            }

            sentencesHtml += `<p style="font-size:1.05rem; line-height:1.6; margin-bottom:12px;">${idx + 1}. ${txt}</p>`;
        });

        let pipsHtml = "";
        for (let r = 1; r <= 5; r++) {
            pipsHtml += `<div class="st-round-pip ${r === currentRound ? 'active' : ''} ${r < currentRound ? 'done' : ''}"></div>`;
        }

        const qId = `${topic.id}_stage4_round_${currentRound}`;

        content.innerHTML = `
            <div class="st-stage-header">
                <h3>Schritt 4: Aufbau-Rede (Vanishing Cues)</h3>
                <p>Read the monologue aloud. With each round, more text will vanish. Finish all 5 rounds to proceed!</p>
            </div>
            
            <div class="st-round-indicator">
                ${pipsHtml}
            </div>
            
            <p style="text-align:center; font-size:0.85rem; font-weight:700; color:#a78bfa; margin-bottom:16px;">ROUND ${currentRound} OF 5</p>

            <div style="background:var(--color-panel-solid); border:1px solid var(--color-border); border-radius:12px; padding:20px; margin-bottom:20px;">
                ${sentencesHtml}
            </div>

            <div style="display:flex; justify-content:center; align-items:center; gap:16px; flex-wrap:wrap;">
                <button class="btn btn-touch" id="st-round-mic-btn" style="background:#dc2626; color:#fff; border:none; border-radius:8px; padding:8px 18px; font-weight:700; cursor:pointer;">🎙️ Record Round ${currentRound}</button>
                <button class="btn btn-secondary btn-touch" id="st-round-play-btn" style="display:none; padding:8px 18px;">🎧 Playback</button>
                <span id="st-round-status" style="font-size:0.85rem; color:var(--color-text-secondary);">Not recorded</span>
            </div>

            <div style="display:flex; justify-content:center; margin-top:24px;">
                <button class="btn btn-primary btn-touch" id="st-round-next-btn" disabled style="min-width:160px;">Next Round &rarr;</button>
            </div>
        `;

        const micBtn = document.getElementById("st-round-mic-btn");
        const playBtn = document.getElementById("st-round-play-btn");
        const statusLbl = document.getElementById("st-round-status");
        const nextRoundBtn = document.getElementById("st-round-next-btn");

        if (speakingRecordings[qId]) {
            playBtn.style.display = "block";
            statusLbl.textContent = "Recorded";
            nextRoundBtn.disabled = false;
        }

        let isRecording = false;

        micBtn.onclick = () => {
            if (!isRecording) {
                isRecording = true;
                micBtn.textContent = "⏹ Stop";
                micBtn.style.background = "var(--color-text-primary)";
                statusLbl.textContent = "Recording...";
                playBtn.style.display = "none";
                nextRoundBtn.disabled = true;

                startRecording(qId,
                    (dur) => statusLbl.textContent = `Recording... (${dur})`,
                    (url) => {
                        isRecording = false;
                        micBtn.textContent = `🎙️ Re-Record Round ${currentRound}`;
                        micBtn.style.background = "#dc2626";
                        statusLbl.textContent = "Recorded";
                        playBtn.style.display = "block";
                        nextRoundBtn.disabled = false;
                        playBtn.onclick = () => {
                            const aud = new Audio(url);
                            aud.play();
                        };
                    }
                );
            } else {
                stopRecordingProcess();
            }
        };

        if (speakingRecordings[qId]) {
            playBtn.onclick = () => {
                const aud = new Audio(speakingRecordings[qId].url);
                aud.play();
            };
        }

        nextRoundBtn.onclick = () => {
            if (currentRound < 5) {
                currentRound++;
                renderRound();
            } else {
                document.getElementById("btn-sprechtrainer-next").disabled = false;
                // Auto-advance next stage trigger
                const nextBtn = document.getElementById("btn-sprechtrainer-next");
                if (nextBtn) nextBtn.click();
            }
        };
    };

    renderRound();
}

function renderST_Stage5(topic) {
    const content = document.getElementById("sprechtrainer-stage-content");

    let monologueText = topic.sentences.map(s => s.de).join(" ");
    const qId = `${topic.id}_stage5_complete`;

    content.innerHTML = `
        <div class="st-stage-header" style="text-align:center;">
            <h3>Schritt 5: Freies Sprechen (Complete Monologue)</h3>
            <p>You are ready! Deliver your full monologue. Speak continuously and natural. Download your recording and ask the AI evaluator for feedback!</p>
        </div>

        <div class="st-free-speech-panel">
            <div class="st-free-timer" id="st-free-timer">00:00</div>
            <button class="btn btn-touch" id="st-free-record-btn" style="background:#dc2626; color:#fff; border:none; border-radius:50%; width:80px; height:80px; font-size:1.6rem; cursor:pointer; box-shadow:0 0 12px rgba(220,38,38,0.4); display:inline-flex; align-items:center; justify-content:center; transition:transform 0.2s;">🎙️</button>
            <p id="st-free-status" style="margin-top:12px; font-weight:700; color:var(--color-text-secondary);">Tap to start recording</p>
        </div>

        <div class="st-playback-panel" id="st-free-playback" style="display:none; flex-direction:column; gap:16px;">
            <div style="display:flex; align-items:center; width:100%; gap:12px; justify-content:center;">
                <span style="font-weight:700;">🎵 Your Monologue:</span>
                <audio id="st-free-audio" controls style="flex:1; max-width:320px;"></audio>
                <a class="btn btn-secondary btn-touch" id="st-free-download-btn">⬇️ Download (.wav)</a>
            </div>
            <button class="btn btn-warning btn-touch" id="st-free-eval-btn" style="width:100%; max-width:360px; font-weight:700;">🤖 Evaluate with AI</button>
        </div>
    `;

    const recordBtn = document.getElementById("st-free-record-btn");
    const timerLbl = document.getElementById("st-free-timer");
    const statusLbl = document.getElementById("st-free-status");
    const playbackPanel = document.getElementById("st-free-playback");
    const audioEl = document.getElementById("st-free-audio");
    const downloadBtn = document.getElementById("st-free-download-btn");
    const evalBtn = document.getElementById("st-free-eval-btn");

    const setupUIForRecording = (url) => {
        playbackPanel.style.display = "flex";
        audioEl.src = url;
        downloadBtn.href = url;
        downloadBtn.download = `sprechtrainer_${topic.id}.wav`;
        document.getElementById("btn-sprechtrainer-next").disabled = false;

        evalBtn.onclick = () => {
            const promptText = `Goethe-Zertifikat A1: Speaking Practice Evaluation (Sprechtrainer)
Topic: ${topic.titleDE} (${topic.titleEN})

--- MONOLOGUE INSTRUCTIONS ---
The student is speaking about: ${topic.descDE} (${topic.descEN})
Target Monologue German text:
${monologueText}

--- EVALUATION GUIDELINES ---
I am an absolute beginner learning German at the A1 level. I have attached my spoken monologue (.wav recording file).

Please evaluate my spoken response and provide feedback in English. Include:
1. Transcription of my spoken audio response (if attached).
2. Grammatical and spelling review of my spoken content against the target monologue.
3. Specific pronunciation tips for words I may have mispronounced.
4. Encouraging feedback, rated out of 5 stars for flow, rhythm, and accuracy.
5. Provide explanations and feedback entirely in English. Use German sentences only as clear examples followed by English translation.`;

            showAIPromptModal(promptText);
        };
    };

    if (speakingRecordings[qId]) {
        setupUIForRecording(speakingRecordings[qId].url);
    }

    let isRecording = false;

    recordBtn.onclick = () => {
        if (!isRecording) {
            isRecording = true;
            recordBtn.style.transform = "scale(1.15)";
            recordBtn.innerHTML = "⏹";
            statusLbl.textContent = "Recording monologue...";
            playbackPanel.style.display = "none";

            startRecording(qId,
                (dur) => timerLbl.textContent = dur,
                (url) => {
                    isRecording = false;
                    recordBtn.style.transform = "scale(1)";
                    recordBtn.innerHTML = "🎙️";
                    statusLbl.textContent = "Recording complete";
                    setupUIForRecording(url);
                }
            );
        } else {
            stopRecordingProcess();
        }
    };
}
