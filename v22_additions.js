/**
 * Goethe A1 Learning Portal - Version 2.2 Additions Script
 * Contains all grammar lessons, phrase banks, scenarios, stories, transliteration engine, and UI interactions.
 */

// --- 1. PRONUNCIATION DICTIONARY & TRANSLITERATION ENGINE ---
const PRONUNCIATION_DICTIONARY = {
    "guten morgen": { ml: "ഗൂട്ടൻ മോർഗൻ", ta: "கூட்டன் மோர்கன்", hi: "गूटन मोर्गन", en: "Goo-ten Mor-gen" },
    "wie heissen sie": { ml: "വി ഹൈസൻ സി?", ta: "வி ஹைஸன் ஸீ?", hi: "वी हायसन ज़ी?", en: "Vee hy-sen zee?" },
    "wie heißen sie": { ml: "വി ഹൈസൻ സി?", ta: "வி ஹைஸன் ஸீ?", hi: "वी हायसन ज़ी?", en: "Vee hy-sen zee?" },
    "guten tag": { ml: "ഗൂട്ടൻ ടാക്", ta: "கூட்டன் டாக்", hi: "गूटन टाग", en: "Goo-ten Tahg" },
    "auf wiedersehen": { ml: "ഔഫ് വീഡർസെഹൻ", ta: "அவ்ப் வீடர்ஸேஹன்", hi: "औफ़ वीडरज़ेहन", en: "Owf Vee-der-zay-en" },
    "wie geht es dir": { ml: "വി ഗേറ്റ് എസ് ഡിർ?", ta: "வி கேட் எஸ் டிர்?", hi: "वी गेट एस डिअर?", en: "Vee gayt es deer?" },
    "wie geht es ihnen": { ml: "വി ഗേറ്റ് എസ് ഈനൻ?", ta: "வி கேட் எஸ் ஈனன்?", hi: "वी गेट एस ईनन?", en: "Vee gayt es ee-nen?" },
    "mir geht es gut": { ml: "മിർ ഗേറ്റ് എസ് ഗൂട്ട്", ta: "മിർ கேட் எஸ் கூட்", hi: "मिर गेट एस गूट", en: "Meer gayt es goot" },
    "danke": { ml: "ഡങ്കെ", ta: "டாங்கெ", hi: "डांके", en: "Dahn-ke" },
    "bitte": { ml: "ബിറ്റെ", ta: "பிட்டെ", hi: "बिटे", en: "Bit-te" },
    "ja": { ml: "യാ", ta: "யா", hi: "या", en: "Yah" },
    "nein": { ml: "നൈൻ", ta: "நைன்", hi: "नाइन", en: "Nine" },
    "entschuldigung": { ml: "എൻറ്ഷുൽഡിഗുങ്", ta: "என்ட்ஷுல்டிகuங்", hi: "एन्टशुल्डिगुंग", en: "Ent-shool-dee-goong" },
    "sprechen sie englisch": { ml: "പ്രെഷൻ സി എൻഗ്ലിഷ്?", ta: "ஸ்ப்ரெஷன் ஸீ எங்லிஷ்?", hi: "श्प्रेखन ज़ी एंग्लिश?", en: "Shpreh-khen zee eng-lish?" },
    "ich verstehe nicht": { ml: "ഇഹ് ഫെർസ്റ്റേഹെ നിഹ്റ്റ്", ta: "ഇஹ் பெர்ஸ்டேஹெ நிஹ்ட்", hi: "इह फ़रश्तेहे निह्ट", en: "Ich fer-shtay-e nicht" },
    "wie viel kostet das": { ml: "വി ഫീൽ കോസ്റ്ററ്റ് ദാസ്?", ta: "வி பீல் கோஸ்டட் தாஸ்?", hi: "वी फ़ील कोस्टट दास?", en: "Vee feel kos-tet dahs?" },
    "guten abend": { ml: "ഗൂട്ടൻ ആബെൻഡ്", ta: "கூட்டன் ஆபெண்ட்", hi: "गूटन आबेंड", en: "Goo-ten Ah-bend" },
    "hallo": { ml: "ഹലോ", ta: "ஹலோ", hi: "हैलो", en: "Hal-lo" }
};

function germanToPhoneticEnglish(text) {
    if (!text) return "";
    const word = text.toLowerCase();

    // Single-pass replacement table: longest patterns first to avoid overlap.
    // Each entry: [regex, replacement]
    const rules = [
        // Word-boundary consonant clusters
        [/\bsch/g, "sh"],
        [/\bsp/g, "shp"],
        [/\bst/g, "sht"],

        // Multi-char consonant digraphs
        [/sch/g, "sh"],
        [/ch/g, "kh"],
        [/qu/g, "kv"],
        [/ph/g, "f"],
        [/ck/g, "k"],
        [/tz/g, "ts"],
        [/pf/g, "pf"],

        // Single consonants
        [/\bß/g, "s"],
        [/ß/g, "s"],
        [/z/g, "ts"],
        [/v/g, "f"],
        [/w/g, "v"],
        [/j/g, "y"],
        [/x/g, "ks"],

        // Diphthongs (before single vowel rules)
        [/\bäu/g, "oy"],
        [/\beu/g, "oy"],
        [/äu/g, "oy"],
        [/eu/g, "oy"],
        [/ei/g, "ai"],
        [/ie/g, "ee"],
        [/au/g, "ow"],

        // Umlauts
        [/ä/g, "ae"],
        [/ö/g, "oe"],
        [/ü/g, "ue"],

        // Final combinations (word-boundary)
        [/\ig\b/g, "ikh"],
        [/\er\b/g, "er"],

        // Voiced s between / after vowels
        [/\bs(?=[aeiouäöü])/g, "z"],
        [/([aeiouäöüy])s(?=[aeiouäöüy])/g, "$1z"],

        // Vowel approximations (single chars last)
        [/u/g, "oo"],
        [/a/g, "ah"],
    ];

    let result = word;
    for (const [regex, replacement] of rules) {
        result = result.replace(regex, replacement);
    }
    return result;
}

function transliterateWord(word, lang) {
    if (lang === "en") {
        const phonetic = germanToPhoneticEnglish(word);
        return phonetic.charAt(0).toUpperCase() + phonetic.slice(1);
    }
    
    const mlVowelsInd = { a: "അ", e: "എ", i: "ഇ", o: "ഒ", u: "ഉ", ee: "ഈ", oo: "ഉ", ow: "ഔ", oy: "ഓയ്", ae: "ഏ", oe: "ഓ", ue: "ഊ", ai: "ഐ", ah: "ആ", eh: "എ" };
    const mlVowelsDep = { a: "", e: "െ", i: "ി", o: "ൊ", u: "ു", ee: "ീ", oo: "ു", ow: "ൌ", oy: "ോയ്", ae: "േ", oe: "ോ", ue: "ൂ", ai: "ൈ", ah: "ാ", eh: "െ" };
    const mlConsonants = { b: "ബ", d: "ദ", f: "ഫ", g: "ഗ", h: "ഹ", k: "ക", l: "ല", m: "മ", n: "ന", p: "പ", r: "റ", s: "സ", t: "ത", v: "വ", y: "യ", z: "സ", sh: "ഷ", kh: "ഹ", ts: "ത്സ", kv: "ക്വ", ks: "ക്സ", shp: "ഷ്പ", sht: "ഷ്ട", tt: "റ്റ" };

    const taVowelsInd = { a: "அ", e: "எ", i: "இ", o: "ஒ", u: "உ", ee: "ஈ", oo: "உ", ow: "ஔ", oy: "ஓய்", ae: "ஏ", oe: "ஓ", ue: "ஊ", ai: "ஐ", ah: "ஆ", eh: "எ" };
    const taVowelsDep = { a: "", e: "ெ", i: "ி", o: "ொ", u: "ு", ee: "ீ", oo: "ு", ow: "ௌ", oy: "ோய்", ae: "ே", oe: "ோ", ue: "ூ", ai: "ை", ah: "ா", eh: "ெ" };
    const taConsonants = { b: "ப", d: "த", f: "ப", g: "க", h: "ஹ", k: "க", l: "ல", m: "ம", n: "ன", p: "ப", r: "ர", s: "ஸ", t: "த", v: "வ", y: "ய", z: "ஸ", sh: "ஷ", kh: "ஹ", ts: "ட்ஸ்", kv: "க்வ", ks: "க்ஸ்", shp: "ஷ்ப", sht: "ஷ்ட", tt: "ட்ட" };

    const hiVowelsInd = { a: "अ", e: "ए", i: "इ", o: "ओ", u: "उ", ee: "ई", oo: "उ", ow: "औ", oy: "ओय", ae: "ए", oe: "ओ", ue: "ऊ", ai: "ऐ", ah: "आ", eh: "ए" };
    const hiVowelsDep = { a: "", e: "े", i: "ि", o: "ो", u: "ु", ee: "ी", oo: "ू", ow: "ौ", oy: "ोय", ae: "े", oe: "ो", ue: "ू", ai: "ै", ah: "ा", eh: "े" };
    const hiConsonants = { b: "ब", d: "द", f: "फ़", g: "ग", h: "ह", k: "क", l: "ल", m: "म", n: "न", p: "प", r: "र", s: "स", t: "त", v: "व", y: "य", z: "ज़", sh: "श", kh: "ख़", ts: "त्स", kv: "क्व", ks: "क्स", shp: "श्प", sht: "ष्ट", tt: "त्त" };

    let vowelsInd, vowelsDep, consonants, virama, isHindi = false;
    if (lang === "ml") {
        vowelsInd = mlVowelsInd;
        vowelsDep = mlVowelsDep;
        consonants = mlConsonants;
        virama = "്";
    } else if (lang === "ta") {
        vowelsInd = taVowelsInd;
        vowelsDep = taVowelsDep;
        consonants = taConsonants;
        virama = "்";
    } else if (lang === "hi") {
        vowelsInd = hiVowelsInd;
        vowelsDep = hiVowelsDep;
        consonants = hiConsonants;
        virama = "्";
        isHindi = true;
    } else {
        return word;
    }

    const phonetic = germanToPhoneticEnglish(word);
    const tokens = phonetic.split(/(ee|oo|ow|oy|ae|oe|ue|ai|ah|eh|[aeiou])/gi).filter(Boolean);
    
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        const isVowel = /(ee|oo|ow|oy|ae|oe|ue|ai|ah|eh|[aeiou])/i.test(t);
        
        if (isVowel) {
            if (i === 0) {
                out += vowelsInd[t] || vowelsInd.a;
            } else {
                out += vowelsDep[t] !== undefined ? vowelsDep[t] : vowelsDep.a;
            }
        } else {
            let base = consonants[t];
            if (!base) {
                base = "";
                for (let char of t) {
                    base += consonants[char] || char;
                }
            }
            
            const nextIsVowel = (i + 1 < tokens.length) && /(ee|oo|ow|oy|ae|oe|ue|ai|ah|eh|[aeiou])/i.test(tokens[i+1]);
            if (nextIsVowel) {
                out += base;
            } else {
                if (i === tokens.length - 1 && lang === "ml") {
                    if (t === "n") { out += "ൻ"; continue; }
                    if (t === "r") { out += "ർ"; continue; }
                    if (t === "l") { out += "ൽ"; continue; }
                    if (t === "m") { out += "ം"; continue; }
                }
                if (isHindi && i === tokens.length - 1) {
                    out += base;
                } else {
                    let baseWithVirama = "";
                    for (let j = 0; j < base.length; j++) {
                        baseWithVirama += base[j];
                        if (j === base.length - 1) {
                            baseWithVirama += virama;
                        }
                    }
                    out += baseWithVirama;
                }
            }
        }
    }
    return out;
}

function transliterateGerman(text, lang) {
    if (!text) return "";
    lang = lang || "ml";
    
    const clean = text.trim();
    const key = clean.toLowerCase().replace(/[.,?!:;]/g, "").trim();
    if (PRONUNCIATION_DICTIONARY[key] && PRONUNCIATION_DICTIONARY[key][lang]) {
        return PRONUNCIATION_DICTIONARY[key][lang];
    }
    
    const words = clean.split(/(\s+|[.,?!:;]+)/);
    const result = words.map(w => {
        if (/^\s+$/.test(w) || /^[.,?!:;]+$/.test(w)) {
            return w;
        }
        const wKey = w.toLowerCase().replace(/[.,?!:;]/g, "").trim();
        if (PRONUNCIATION_DICTIONARY[wKey] && PRONUNCIATION_DICTIONARY[wKey][lang]) {
            return PRONUNCIATION_DICTIONARY[wKey][lang];
        }
        return transliterateWord(wKey, lang);
    });
    
    return result.join("");
}

function getPronunciationHTML(germanText) {
    if (portalState.showPronunciation === false) return "";
    const lang = portalState.pronunciationLang || "ml";
    const phonetic = transliterateGerman(germanText, lang);
    if (!phonetic) return "";
    return `<span class="pronunciation-subtext">${phonetic}</span>`;
}

// --- 2. GRAMMAR LESSONS DATABASE ---
const GRAMMAR_LESSONS_DATABASE = [
    {
        id: "g_artikel",
        title: "Articles (Artikel)",
        rule: "German articles have three genders: masculine (der), feminine (die), and neuter (das). Articles change based on grammatical cases: Nominative (subject), Accusative (direct object), Dative (indirect object).",
        englishExplanation: "der = masculine, die = feminine, das = neuter. In accusative, 'der' changes to 'den', others remain the same.",
        examples: [
            { german: "der Mann", meaning: "the man (masculine)" },
            { german: "die Frau", meaning: "the woman (feminine)" },
            { german: "das Kind", meaning: "the child (neuter)" },
            { german: "Ich sehe den Mann.", meaning: "I see the man. (Accusative direct object)" }
        ],
        practiceQuestions: [
            { question: "___ Mann ist hier.", options: ["Der", "Die", "Das"], correct: 0, explanation: "Nominative masculine is 'der'." },
            { question: "Ich kenne ___ Frau.", options: ["den", "die", "das"], correct: 1, explanation: "Accusative feminine remains 'die'." },
            { question: "Wir helfen ___ Kind.", options: ["dem", "den", "der"], correct: 0, explanation: "Dative neuter of 'das' is 'dem'." },
            { question: "Er kauft ___ Apfel (maskulin).", options: ["ein", "einen", "einem"], correct: 1, explanation: "Accusative masculine of 'ein' is 'einen'." },
            { question: "Das ist ___ Buch (neutral).", options: ["ein", "eine", "einen"], correct: 0, explanation: "Nominative neuter of 'ein' is 'ein'." }
        ]
    },
    {
        id: "g_pronomen",
        title: "Pronouns (Pronomen)",
        rule: "German personal pronouns replace nouns and must conjugate according to the person, number, and case.",
        englishExplanation: "ich (I), du (you), er/sie/es (he/she/it), wir (we), ihr (you all), sie/Sie (they/you formal). Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.",
        examples: [
            { german: "Ich lerne Deutsch.", meaning: "I learn German." },
            { german: "Wie geht es dir?", meaning: "How are you? (dative dir)" },
            { german: "Es geht mir gut.", meaning: "I am doing well. (dative mir)" }
        ],
        practiceQuestions: [
            { question: "___ heiße Nivedya.", options: ["Ich", "Du", "Er"], correct: 0, explanation: "I is 'ich'." },
            { question: "Wie geht es ___? (formal)", options: ["dir", "Sie", "Ihnen"], correct: 2, explanation: "Formal dative you is 'Ihnen'." },
            { question: "Wo wohnt ___? (he)", options: ["er", "sie", "es"], correct: 0, explanation: "He is 'er'." },
            { question: "Das Buch gefällt ___ (me).", options: ["ich", "mir", "mich"], correct: 1, explanation: "Dative pronoun for me is 'mir'." },
            { question: "Liebst du ___ (me)?", options: ["ich", "mir", "mich"], correct: 2, explanation: "Accusative pronoun for me is 'mich'." }
        ]
    },
    {
        id: "g_verbkonjugation",
        title: "Verb Conjugation (Verbkonjugation)",
        rule: "Regular German verbs end in -en. The stem gets endings depending on the subject: ich (-e), du (-st), er/sie/es (-t), wir (-en), ihr (-t), sie/Sie (-en).",
        englishExplanation: "Example: spielen (to play) -> ich spiele, du spielst, er spielt, wir spielen, ihr spielt, sie spielen.",
        examples: [
            { german: "Ich komme aus Indien.", meaning: "I come from India." },
            { german: "Wo wohnst du?", meaning: "Where do you live?" },
            { german: "Er lernt Deutsch.", meaning: "He learns German." }
        ],
        practiceQuestions: [
            { question: "Wir ___ Deutsch.", options: ["lerne", "lernst", "lernen"], correct: 2, explanation: "Plural 'wir' takes -en suffix -> 'lernen'." },
            { question: "Woher ___ du?", options: ["komme", "kommst", "kommt"], correct: 1, explanation: "du takes -st suffix -> 'kommst'." },
            { question: "Er ___ Fußball.", options: ["spiele", "spielst", "spielt"], correct: 2, explanation: "er takes -t suffix -> 'spielt'." },
            { question: "Ich ___ Kaffee.", options: ["trinke", "trinkst", "trinkt"], correct: 0, explanation: "ich takes -e suffix -> 'trinke'." },
            { question: "Ihr ___ gut Deutsch.", options: ["spreche", "sprecht", "sprechen"], correct: 1, explanation: "ihr takes -t suffix -> 'sprecht'." }
        ]
    },
    {
        id: "g_praesens",
        title: "Present Tense (Präsens)",
        rule: "Present tense in German is used for both actions happening right now and future actions. Strong verbs change their stem vowels in 'du' and 'er/sie/es' forms.",
        englishExplanation: "e.g., fahren (to drive) -> du fährst; sprechen (to speak) -> er spricht.",
        examples: [
            { german: "Ich fahre morgen nach Berlin.", meaning: "I am driving to Berlin tomorrow." },
            { german: "Er spricht Englisch.", meaning: "He speaks English." }
        ],
        practiceQuestions: [
            { question: "Du ___ zu schnell.", options: ["fährst", "fahre", "fahrt"], correct: 0, explanation: "fahren changes a -> ä in 'du' form -> 'fährst'." },
            { question: "Sie ___ Deutsch und Englisch.", options: ["spricht", "spreche", "sprechen"], correct: 0, explanation: "sprechen changes e -> i in third person -> 'spricht'." },
            { question: "Ich ___ Pizza.", options: ["esse", "isst", "esst"], correct: 0, explanation: "ich form of essen is 'esse'." },
            { question: "Du ___ ein Buch.", options: ["liest", "lese", "lest"], correct: 0, explanation: "lesen changes e -> ie in 'du' form -> 'liest'." },
            { question: "Sie ___ nach Hause (they).", options: ["gehen", "gehe", "geht"], correct: 0, explanation: "they form takes -en suffix -> 'gehen'." }
        ]
    },
    {
        id: "g_modalverben",
        title: "Modal Verbs (Modalverben)",
        rule: "Modal verbs express capability, obligation, permission, or desire. The modal verb conjugated goes in Position 2, and the main verb goes at the very end in the infinitive.",
        englishExplanation: "können (can), müssen (must), dürfen (may/allowed), wollen (want), sollen (should), möchten (would like). Singular forms ich and er/sie/es have no endings.",
        examples: [
            { german: "Ich kann Deutsch sprechen.", meaning: "I can speak German." },
            { german: "Du musst Hausaufgaben machen.", meaning: "You must do homework." },
            { german: "Wir möchten Kaffee trinken.", meaning: "We would like to drink coffee." }
        ],
        practiceQuestions: [
            { question: "Ich ___ heute Deutsch lernen (desire).", options: ["will", "wollen", "wollt"], correct: 0, explanation: "ich form of wollen is 'will'." },
            { question: "Hier ___ man nicht rauchen (permission).", options: ["darf", "darfst", "dürfen"], correct: 0, explanation: "man (impersonal he) form of dürfen is 'darf'." },
            { question: "Du ___ schlafen gehen (obligation).", options: ["musst", "muss", "müssen"], correct: 0, explanation: "du form of müssen is 'musst'." },
            { question: "Wir ___ Deutsch sprechen (ability).", options: ["können", "kann", "könnt"], correct: 0, explanation: "wir form of können is 'können'." },
            { question: "Er ___ einen Tee trinken (would like).", options: ["möchte", "möchten", "möchtest"], correct: 0, explanation: "er form of möchten is 'möchte'." }
        ]
    },
    {
        id: "g_verneinung",
        title: "Negation (Negation)",
        rule: "German has two ways to negate: 'nicht' (used to negate verbs, adjectives, adverbs) and 'kein' (used to negate nouns with indefinite or no articles).",
        englishExplanation: "'kein' conjugates like 'ein' (kein Mann, keine Frau, kein Kind). 'nicht' usually goes after conjugated verbs.",
        examples: [
            { german: "Ich schlafe nicht.", meaning: "I am not sleeping." },
            { german: "Das ist kein Hund.", meaning: "That is not a dog." },
            { german: "Ich habe kein Geld.", meaning: "I have no money." }
        ],
        practiceQuestions: [
            { question: "Ich trinke ___ Alkohol.", options: ["nicht", "kein", "keine"], correct: 1, explanation: "Alcohol is a noun (masculine), so we use 'kein'." },
            { question: "Er kommt heute ___.", options: ["nicht", "kein", "keine"], correct: 0, explanation: "Negating the verb 'kommen', so we use 'nicht'." },
            { question: "Wir haben ___ Zeit.", options: ["nicht", "kein", "keine"], correct: 2, explanation: "Zeit is feminine noun, so we use 'keine'." },
            { question: "Das ist ___ Auto.", options: ["nicht", "kein", "keine"], correct: 1, explanation: "Auto is neuter noun, so we use 'kein'." },
            { question: "Sie lernt ___.", options: ["nicht", "kein", "keine"], correct: 0, explanation: "Negating the verb, so we use 'nicht'." }
        ]
    },
    {
        id: "g_fragewoerter",
        title: "Question Words (Question Words)",
        rule: "German question words (W-Fragen) start with W. The verb is always in Position 2.",
        englishExplanation: "wer (who), was (what), wo (where), woher (where from), wohin (where to), wann (when), warum (why), wie (how).",
        examples: [
            { german: "Wer ist das?", meaning: "Who is that?" },
            { german: "Woher kommen Sie?", meaning: "Where do you come from?" },
            { german: "Wie viel kostet das?", meaning: "How much does this cost?" }
        ],
        practiceQuestions: [
            { question: "___ wohnst du? - In Frankfurt.", options: ["Wo", "Woher", "Wohin"], correct: 0, explanation: "Where is 'wo'." },
            { question: "___ kommen Sie? - Aus Indien.", options: ["Wo", "Woher", "Wohin"], correct: 1, explanation: "Where from is 'woher'." },
            { question: "___ ist dein Name?", options: ["Wer", "Was", "Wie"], correct: 2, explanation: "How is your name -> 'Wie'." },
            { question: "___ beginnt die Prüfung? - Um 9 Uhr.", options: ["Wann", "Warum", "Wer"], correct: 0, explanation: "When is 'wann'." },
            { question: "___ kostet das Brot?", options: ["Wie viel", "Was", "Wer"], correct: 0, explanation: "How much is 'wie viel'." }
        ]
    },
    {
        id: "g_wortstellung",
        title: "Word Order (Word Order)",
        rule: "In standard statements, the conjugated verb is ALWAYS in Position 2. In yes/no questions, the verb goes to Position 1.",
        englishExplanation: "Position 1 can be subject or time/place, but verb remains in Position 2. e.g., 'Heute lerne ich Deutsch' (Today learn I German).",
        examples: [
            { german: "Ich trinke heute Tee.", meaning: "I drink tea today." },
            { german: "Heute trinke ich Tee.", meaning: "Today drink I tea. (Verb in Position 2)" },
            { german: "Trinkst du Tee?", meaning: "Do you drink tea? (Yes/no question)" }
        ],
        practiceQuestions: [
            { question: "Am Samstag ___ ich nach Köln.", options: ["fahre", "ich fahre", "gefahren"], correct: 0, explanation: "Verb must be in Position 2 -> 'fahre'." },
            { question: "___ du am Samstag Zeit?", options: ["Hast", "Du hast", "Haben"], correct: 0, explanation: "Yes/no question puts verb in Position 1 -> 'Hast'." },
            { question: "Ich ___ Deutsch jeden Tag.", options: ["lerne", "lernst", "lernen"], correct: 0, explanation: "Conjugated verb in Position 2 -> 'lerne'." },
            { question: "Morgen ___ wir Pizza.", options: ["essen", "wir essen", "esst"], correct: 0, explanation: "Position 2 verb -> 'essen'." },
            { question: "Kommst ___ aus Indien?", options: ["du", "Sie", "ihr"], correct: 0, explanation: "Kommst conjugated for 'du'." }
        ]
    },
    {
        id: "g_possessiv",
        title: "Possessive Pronouns (Possessive Pronouns)",
        rule: "Possessive pronouns indicate ownership. They get endings depending on the gender and case of the noun owned.",
        englishExplanation: "mein (my), dein (your), sein (his), ihr (her/their), unser (our), euer (your plural), Ihr (your formal). Feminine/plural get an -e suffix in Nominative (meine Mutter).",
        examples: [
            { german: "Mein Vater", meaning: "my father (masculine)" },
            { german: "Meine Mutter", meaning: "my mother (feminine)" },
            { german: "Ihr Name", meaning: "her name / your name formal" }
        ],
        practiceQuestions: [
            { question: "Das ist ___ Schwester (feminine).", options: ["mein", "meine", "meinen"], correct: 1, explanation: "Feminine possessive is 'meine'." },
            { question: "Wo ist ___ Vater (masculine)?", options: ["dein", "deine", "deinen"], correct: 0, explanation: "Masculine nominative possessive is 'dein'." },
            { question: "___ Kinder spielen im Garten.", options: ["Unsere", "Unser", "Unseren"], correct: 0, explanation: "Plural possessive takes -e suffix -> 'Unsere'." },
            { question: "Ist das ___ Handy (neutral)?", options: ["ihr", "ihre", "ihren"], correct: 0, explanation: "Neuter nominative possessive is 'ihr'." },
            { question: "Ich suche ___ Schlüssel (masculine Accusative).", options: ["mein", "meine", "meinen"], correct: 2, explanation: "Masculine Accusative takes -en suffix -> 'meinen'." }
        ]
    },
    {
        id: "g_kasus",
        title: "Basic Cases (Kasus)",
        rule: "German has 4 cases. Nominative is the subject. Accusative is the direct object. Dative is the indirect object.",
        englishExplanation: "Accusative changes masculine 'der' -> 'den' (ein -> einen, mein -> meinen). Dative changes masculine/neuter to 'dem' (einem), feminine to 'der' (einer), and plural to 'den' + -n ending on the noun.",
        examples: [
            { german: "Der Hund ist hier.", meaning: "The dog is here. (Nominative subject)" },
            { german: "Ich liebe den Hund.", meaning: "I love the dog. (Accusative direct object)" },
            { german: "Ich gebe dem Hund Futter.", meaning: "I give the dog food. (Dative indirect object)" }
        ],
        practiceQuestions: [
            { question: "Ich liebe meinen ___ (Hund - masculine).", options: ["Hund", "Hunde", "Hunden"], correct: 0, explanation: "Accusative direct object of 'lieben'." },
            { question: "Er dankt der ___ (Frau - feminine).", options: ["Frau", "Frauen", "Frauer"], correct: 0, explanation: "'danken' requires Dativ, feminine Dativ is 'der Frau'." },
            { question: "Das Buch gehört dem ___ (Kind - neuter).", options: ["Kind", "Kinder", "Kindes"], correct: 0, explanation: "'gehören' requires Dativ, neuter Dativ is 'dem Kind'." },
            { question: "Wir suchen den ___ (Bahnhof - masculine).", options: ["Bahnhof", "Bahnhöfe", "Bahnhofe"], correct: 0, explanation: "'suchen' takes Accusative direct object." },
            { question: "Sie hilft den ___ (Eltern - plural).", options: ["Eltern", "Elter", "Elterns"], correct: 0, explanation: "'helfen' takes Dative, plural Dative article is 'den'." }
        ]
    }
];

// --- 3. PHRASE BANK DATABASE ---
const PHRASE_BANK_DATABASE = [
    { id: "ph_gret_1", german: "Guten Morgen", english: "Good morning", category: "Greetings" },
    { id: "ph_gret_2", german: "Wie geht es Ihnen?", english: "How are you? (formal)", category: "Greetings" },
    { id: "ph_gret_3", german: "Guten Tag", english: "Good day", category: "Greetings" },
    { id: "ph_gret_4", german: "Auf Wiedersehen", english: "Goodbye", category: "Greetings" },
    { id: "ph_gret_5", german: "Hallo, wie geht's?", english: "Hello, how is it going?", category: "Greetings" },
    
    { id: "ph_intr_1", german: "Wie heißen Sie?", english: "What is your name? (formal)", category: "Introductions" },
    { id: "ph_intr_2", german: "Ich heiße Nivedya.", english: "My name is Nivedya.", category: "Introductions" },
    { id: "ph_intr_3", german: "Woher kommen Sie?", english: "Where do you come from? (formal)", category: "Introductions" },
    { id: "ph_intr_4", german: "Ich komme aus Indien.", english: "I come from India.", category: "Introductions" },
    { id: "ph_intr_5", german: "Freut mich, Sie kennenzulernen.", english: "Pleased to meet you.", category: "Introductions" },

    { id: "ph_shop_1", german: "Wie viel kostet das?", english: "How much does this cost?", category: "Shopping" },
    { id: "ph_shop_2", german: "Haben Sie das in einer anderen Größe?", english: "Do you have this in another size?", category: "Shopping" },
    { id: "ph_shop_3", german: "Ich möchte das kaufen.", english: "I would like to buy this.", category: "Shopping" },
    { id: "ph_shop_4", german: "Kann ich mit Karte bezahlen?", english: "Can I pay by card?", category: "Shopping" },
    { id: "ph_shop_5", german: "Wo ist die Kasse?", english: "Where is the cash register?", category: "Shopping" },

    { id: "ph_rest_1", german: "Die Speisekarte, bitte.", english: "The menu, please.", category: "Restaurant" },
    { id: "ph_rest_2", german: "Ich möchte bestellen.", english: "I would like to order.", category: "Restaurant" },
    { id: "ph_rest_3", german: "Ein Glas Wasser, bitte.", english: "A glass of water, please.", category: "Restaurant" },
    { id: "ph_rest_4", german: "Guten Appetit!", english: "Enjoy your meal!", category: "Restaurant" },
    { id: "ph_rest_5", german: "Die Rechnung, bitte.", english: "The bill, please.", category: "Restaurant" },

    { id: "ph_trav_1", german: "Wo ist der Bahnhof?", english: "Where is the train station?", category: "Travel" },
    { id: "ph_trav_2", german: "Wann fährt der nächste Zug nach Berlin?", english: "When does the next train to Berlin leave?", category: "Travel" },
    { id: "ph_trav_3", german: "Eine Fahrkarte, bitte.", english: "A ticket, please.", category: "Travel" },
    { id: "ph_trav_4", german: "Kommt der Zug pünktlich?", english: "Is the train on time?", category: "Travel" },
    { id: "ph_trav_5", german: "Gleis vier, bitte.", english: "Platform four, please.", category: "Travel" },

    { id: "ph_hotl_1", german: "Ich habe eine Reservierung.", english: "I have a reservation.", category: "Hotel" },
    { id: "ph_hotl_2", german: "Haben Sie ein Zimmer frei?", english: "Do you have a room free?", category: "Hotel" },
    { id: "ph_hotl_3", german: "Wo ist das Frühstück?", english: "Where is breakfast?", category: "Hotel" },
    { id: "ph_hotl_4", german: "Der Schlüssel, bitte.", english: "The key, please.", category: "Hotel" },
    { id: "ph_hotl_5", german: "Wann muss ich auschecken?", english: "When do I need to check out?", category: "Hotel" },

    { id: "ph_scho_1", german: "Wo ist das Klassenzimmer?", english: "Where is the classroom?", category: "School" },
    { id: "ph_scho_2", german: "Ich habe eine Frage.", english: "I have a question.", category: "School" },
    { id: "ph_scho_3", german: "Können Sie das bitte wiederholen?", english: "Can you please repeat that?", category: "School" },
    { id: "ph_scho_4", german: "Ich verstehe das nicht.", english: "I don't understand that.", category: "School" },
    { id: "ph_scho_5", german: "Was bedeutet das Wort?", english: "What does this word mean?", category: "School" },

    { id: "ph_work_1", german: "Was ist dein Beruf?", english: "What is your job?", category: "Work" },
    { id: "ph_work_2", german: "Ich arbeite als Lehrerin.", english: "I work as a teacher.", category: "Work" },
    { id: "ph_work_3", german: "Wann beginnt die Arbeit?", english: "When does work begin?", category: "Work" },
    { id: "ph_work_4", german: "Ich habe eine Besprechung.", english: "I have a meeting.", category: "Work" },
    { id: "ph_work_5", german: "Hier ist meine E-Mail-Adresse.", english: "Here is my email address.", category: "Work" },

    { id: "ph_faml_1", german: "Das ist meine Familie.", english: "This is my family.", category: "Family" },
    { id: "ph_faml_2", german: "Hast du Geschwister?", english: "Do you have siblings?", category: "Family" },
    { id: "ph_faml_3", german: "Ich habe einen Bruder.", english: "I have a brother.", category: "Family" },
    { id: "ph_faml_4", german: "Wie alt ist dein Sohn?", english: "How old is your son?", category: "Family" },
    { id: "ph_faml_5", german: "Meine Eltern wohnen in Kerala.", english: "My parents live in Kerala.", category: "Family" },

    { id: "ph_doct_1", german: "Ich habe Kopfschmerzen.", english: "I have a headache.", category: "Doctor" },
    { id: "ph_doct_2", german: "Ich brauche einen Termin.", english: "I need an appointment.", category: "Doctor" },
    { id: "ph_doct_3", german: "Wo tut es weh?", english: "Where does it hurt?", category: "Doctor" },
    { id: "ph_doct_4", german: "Ich bin krank.", english: "I am sick.", category: "Doctor" },
    { id: "ph_doct_5", german: "Der Arzt kommt gleich.", english: "The doctor is coming soon.", category: "Doctor" },

    { id: "ph_phar_1", german: "Ich brauche diese Medizin.", english: "I need this medicine.", category: "Pharmacy" },
    { id: "ph_phar_2", german: "Haben Sie ein Rezept?", english: "Do you have a prescription?", category: "Pharmacy" },
    { id: "ph_phar_3", german: "Wie oft muss ich das nehmen?", english: "How often do I need to take this?", category: "Pharmacy" },
    { id: "ph_phar_4", german: "Zwei Tabletten täglich.", english: "Two tablets daily.", category: "Pharmacy" },
    { id: "ph_phar_5", german: "Gibt es Nebenwirkungen?", english: "Are there side effects?", category: "Pharmacy" },

    { id: "ph_emer_1", german: "Hilfe! Rufen Sie einen Arzt!", english: "Help! Call a doctor!", category: "Emergency Situations" },
    { id: "ph_emer_2", german: "Wo ist die Polizei?", english: "Where is the police?", category: "Emergency Situations" },
    { id: "ph_emer_3", german: "Es brennt!", english: "It's on fire!", category: "Emergency Situations" },
    { id: "ph_emer_4", german: "Ich habe meinen Pass verloren.", english: "I have lost my passport.", category: "Emergency Situations" },
    { id: "ph_emer_5", german: "Achtung! Gefahr!", english: "Watch out! Danger!", category: "Emergency Situations" }
];

// --- 4. REAL-LIFE GERMAN MODULE DATABASE ---
const REAL_LIFE_DATABASE = [
    {
        id: "rl_supermarket",
        title: "At the Supermarket (Im Supermarkt)",
        vocab: [
            { word: "das Gemüse", translation: "Vegetables" },
            { word: "das Obst", translation: "Fruit" },
            { word: "die Milch", translation: "Milk" },
            { word: "das Brot", translation: "Bread" },
            { word: "die Flasche", translation: "Bottle" }
        ],
        phrases: [
            { german: "Wo finde ich Milch?", english: "Where do I find milk?" },
            { german: "Haben Sie frisches Brot?", english: "Do you have fresh bread?" },
            { german: "Das macht fünf Euro.", english: "That makes five euros." },
            { german: "Brauchen Sie eine Tüte?", english: "Do you need a bag?" },
            { german: "Kassenbon, bitte.", english: "Receipt, please." }
        ],
        dialogue: [
            { speaker: "Kunde", text: "Entschuldigung, wo finde ich die Milch?", translation: "Excuse me, where do I find the milk?" },
            { speaker: "Verkäufer", text: "Die Milch steht dort hinten im Regal links.", translation: "The milk is back there on the shelf on the left." },
            { speaker: "Kunde", text: "Vielen Dank. Und wie viel kostet eine Flasche Wasser?", translation: "Thank you. And how much does a bottle of water cost?" },
            { speaker: "Verkäufer", text: "Das kostet nur fünfzig Cent.", translation: "That costs only fifty cents." },
            { speaker: "Kunde", text: "Super, ich nehme zwei Flaschen.", translation: "Super, I'll take two bottles." }
        ],
        reading: {
            text: "Im Supermarkt kauft Herr Müller ein. Er braucht Gemüse, Obst und Brot. Heute gibt es frische Äpfel im Angebot. Ein Kilo Äpfel kostet nur ein Euro neunundneunzig. Herr Müller nimmt auch eine Packung Käse und zwei Flaschen Wasser. An der Kasse bezahlt er zehn Euro fünfzig mit Karte. Der Verkäufer fragt: 'Brauchen Sie den Kassenbon?' Herr Müller antwortet: 'Ja, bitte.'",
            translation: "Mr. Müller shops at the supermarket. He needs vegetables, fruit, and bread. Today fresh apples are on sale. A kilo of apples costs only one euro ninety-nine. Mr. Müller also takes a pack of cheese and two bottles of water. At the cash register he pays ten euros fifty by card. The cashier asks: 'Do you need the receipt?' Mr. Müller answers: 'Yes, please.'",
            question: "Wie bezahlt Herr Müller?",
            options: ["Mit cash (bargeld)", "Mit Karte (card)", "Er bezahlt nicht"],
            correct: 1,
            explanation: "The text says: 'An der Kasse bezahlt er zehn Euro fünfzig mit Karte.'"
        },
        quiz: [
            { question: "Was sucht der Kunde im Dialog?", options: ["Brot", "Milch", "Gemüse"], correct: 1, explanation: "He asks: 'Entschuldigung, wo finde ich die Milch?'" },
            { question: "Wo steht die Milch?", options: ["Im Regal links", "An der Kasse", "Draußen"], correct: 0, explanation: "The seller says: 'im Regal links'." },
            { question: "Wie viel kostet die Flasche Wasser?", options: ["Ein Euro", "Fünfzig Cent", "Zwei Euro"], correct: 1, explanation: "It costs fifty cents: 'fünfzig Cent'." },
            { question: "Was bedeutet 'das Obst'?", options: ["Vegetables", "Fruit", "Meat"], correct: 1, explanation: "das Obst means Fruit." },
            { question: "Was bedeutet 'die Kasse'?", options: ["Cash register", "Bread", "Receipt"], correct: 0, explanation: "die Kasse means Cash register." }
        ]
    },
    {
        id: "rl_restaurant",
        title: "At the Restaurant (Im Restaurant)",
        vocab: [
            { word: "die Speisekarte", translation: "Menu" },
            { word: "der Kellner", translation: "Waiter" },
            { word: "das Glas", translation: "Glass" },
            { word: "die Rechnung", translation: "Bill" },
            { word: "das Wasser", translation: "Water" }
        ],
        phrases: [
            { german: "Ich möchte bestellen, bitte.", english: "I would like to order, please." },
            { german: "Haben Sie ein vegetarisches Gericht?", english: "Do you have a vegetarian dish?" },
            { german: "Zahlen, bitte!", english: "Pay, please!" },
            { german: "Zusammen oder getrennt?", english: "Together or separately?" },
            { german: "Stimmt so.", english: "Keep the change." }
        ],
        dialogue: [
            { speaker: "Kellner", text: "Guten Tag. Was möchten Sie trinken?", translation: "Good day. What would you like to drink?" },
            { speaker: "Gast", text: "Ein Mineralwasser und eine Cola, bitte.", translation: "A mineral water and a cola, please." },
            { speaker: "Kellner", text: "Und zum Essen?", translation: "And to eat?" },
            { speaker: "Gast", text: "Ich nehme eine Suppe und danach Fisch mit Kartoffeln.", translation: "I'll have a soup, and after that, fish with potatoes." },
            { speaker: "Kellner", text: "Sehr gerne. Kommt sofort.", translation: "Very gladly. Coming right up." }
        ],
        reading: {
            text: "Anna geht heute Abend mit ihrem Freund ins Restaurant essen. Sie reserviert einen Tisch für zwei Personen um neunzehn Uhr. Anna isst kein Fleisch, sie ist Vegetarierin. Deshalb bestellt sie Nudeln mit Tomatensauce und ein Glas Weißwein. Ihr Freund bestellt ein Steak mit Pommes und ein Bier. Das Essen schmeckt sehr gut. Am Ende bezahlt der Freund die Rechnung zusammen.",
            translation: "Anna goes out to eat at a restaurant with her friend tonight. She reserves a table for two people at seven PM. Anna does not eat meat, she is a vegetarian. Therefore, she orders pasta with tomato sauce and a glass of white wine. Her friend orders a steak with fries and a beer. The food tastes very good. In the end, the friend pays the bill together.",
            question: "Warum bestellt Anna Nudeln?",
            options: ["Weil sie Fleisch mag", "Weil sie Vegetarierin ist", "Sie mag keinen Fisch"],
            correct: 1,
            explanation: "The text says: 'Anna isst kein Fleisch, sie ist Vegetarierin. Deshalb bestellt sie Nudeln...'"
        },
        quiz: [
            { question: "Was bestellt der Gast zuerst zu trinken?", options: ["Kaffee", "Mineralwasser und Cola", "Bier"], correct: 1, explanation: "He says: 'Ein Mineralwasser und eine Cola, bitte.'" },
            { question: "Welches Hauptgericht wählt der Gast?", options: ["Fisch mit Kartoffeln", "Steak mit Pommes", "Pizza"], correct: 0, explanation: "He says: 'Fisch mit Kartoffeln'." },
            { question: "Wer bedient den Gast?", options: ["Der Koch", "Der Kellner", "Die Mutter"], correct: 1, explanation: "The waiter (Kellner) serves the guests." },
            { question: "Was bedeutet 'die Rechnung'?", options: ["The bill", "The menu", "The food"], correct: 0, explanation: "die Rechnung means The bill." },
            { question: "Was bedeutet 'Zusammen oder getrennt'?", options: ["Together or separately", "Fast or slow", "Yes or no"], correct: 0, explanation: "It means Together or separately." }
        ]
    },
    {
        id: "rl_doctor",
        title: "At the Doctor (Beim Arzt)",
        vocab: [
            { word: "der Arzt", translation: "Doctor" },
            { word: "die Medizin", translation: "Medicine" },
            { word: "der Termin", translation: "Appointment" },
            { word: "das Rezept", translation: "Prescription" },
            { word: "die Praxis", translation: "Doctor's office" }
        ],
        phrases: [
            { german: "Ich habe Kopfschmerzen.", english: "I have a headache." },
            { german: "Haben Sie einen Termin?", english: "Do you have an appointment?" },
            { german: "Wo tut es weh?", english: "Where does it hurt?" },
            { german: "Nehmen Sie diese Tabletten.", english: "Take these tablets." },
            { german: "Ich fühle mich krank.", english: "I feel sick." }
        ],
        dialogue: [
            { speaker: "Arzt", text: "Guten Tag. Was fehlt Ihnen?", translation: "Good day. What is wrong?" },
            { speaker: "Patient", text: "Ich habe seit gestern Bauchschmerzen und Fieber.", translation: "I have had stomach aches and a fever since yesterday." },
            { speaker: "Arzt", text: "Legen Sie sich bitte hier hin. Wo tut es weh?", translation: "Please lie down here. Where does it hurt?" },
            { speaker: "Patient", text: "Hier unten tut es sehr weh.", translation: "Down here it hurts a lot." },
            { speaker: "Arzt", text: "Ich schreibe Ihnen ein Rezept für Tabletten. Trinken Sie viel Tee.", translation: "I am writing you a prescription for tablets. Drink lots of tea." }
        ],
        reading: {
            text: "Frau Schmidt fühlt sich krank. Sie hat Husten, Schnupfen und Halsschmerzen. Um zehn Uhr geht sie in die Arztpraxis. Sie hat keinen Termin, deshalb muss sie eine Stunde im Wartezimmer warten. Der Arzt untersucht sie und sagt: 'Sie haben eine Erkältung. Bleiben Sie drei Tage im Bett.' Er gibt ihr eine Krankmeldung für die Arbeit und ein Rezept für Hustensaft.",
            translation: "Mrs. Schmidt feels sick. She has a cough, runny nose, and sore throat. At ten o'clock she goes to the doctor's office. She does not have an appointment, so she must wait an hour in the waiting room. The doctor examines her and says: 'You have a cold. Stay in bed for three days.' He gives her a sick note for work and a prescription for cough syrup.",
            question: "Wie lange muss Frau Schmidt laut Arzt im Bett bleiben?",
            options: ["Einen Tag", "Drei Tage", "Eine Woche"],
            correct: 1,
            explanation: "The doctor says: 'Bleiben Sie drei Tage im Bett.'"
        },
        quiz: [
            { question: "Seit wann hat der Patient Bauchschmerzen?", options: ["Seit einer Woche", "Seit gestern", "Seit heute Morgen"], correct: 1, explanation: "He says: 'Ich habe seit gestern Bauchschmerzen...'" },
            { question: "Was verschreibt der Arzt dem Patienten?", options: ["Einen Saft", "Tabletten", "Wasser"], correct: 1, explanation: "He says: 'ein Rezept für Tabletten'." },
            { question: "Was bedeutet 'das Rezept'?", options: ["Prescription", "Bill", "Appointment"], correct: 0, explanation: "das Rezept means Prescription." },
            { question: "Was bedeutet 'Bauchschmerzen'?", options: ["Headache", "Stomach ache", "Fever"], correct: 1, explanation: "It means stomach ache." },
            { question: "Was muss der Patient laut Arzt trinken?", options: ["Cola", "Kaffee", "Tee"], correct: 2, explanation: "The doctor advises: 'Trinken Sie viel Tee.'" }
        ]
    },
    {
        id: "rl_pharmacy",
        title: "At the Pharmacy (In der Apotheke)",
        vocab: [
            { word: "die Apotheke", translation: "Pharmacy" },
            { word: "die Tablette", translation: "Tablet / Pill" },
            { word: "das Rezept", translation: "Prescription" },
            { word: "der Hustensaft", translation: "Cough syrup" },
            { word: "die Krankenkarte", translation: "Health insurance card" }
        ],
        phrases: [
            { german: "Ich brauche diese Medizin.", english: "I need this medicine." },
            { german: "Hier ist mein Rezept.", english: "Here is my prescription." },
            { german: "Wie oft muss ich das nehmen?", english: "How often do I need to take this?" },
            { german: "Nehmen Sie das vor dem Essen.", english: "Take this before meals." },
            { german: "Haben Sie Schmerztabletten?", english: "Do you have painkillers?" }
        ],
        dialogue: [
            { speaker: "Apotheker", text: "Guten Tag. Bitte schön?", translation: "Good day. How can I help you?" },
            { speaker: "Kunde", text: "Hallo. Ich möchte dieses Rezept einlösen.", translation: "Hello. I would like to redeem this prescription." },
            { speaker: "Apotheker", text: "Gerne. Ihre Krankenkarte bitte... So, das macht drei Euro Zuzahlung.", translation: "Gladly. Your insurance card please... Okay, that makes three euros copayment." },
            { speaker: "Kunde", text: "Hier sind fünf Euro. Wie nehme ich die Tabletten?", translation: "Here is five euros. How do I take the tablets?" },
            { speaker: "Apotheker", text: "Zweimal täglich eine Tablette nach dem Essen mit Wasser.", translation: "Twice daily one tablet after meals with water." }
        ],
        reading: {
            text: "Herr Fischer hat starke Kopfschmerzen. Er geht in die Stadt-Apotheke, um Schmerztabletten zu kaufen. Die Apothekerin fragt: 'Haben Sie ein Rezept?' Herr Fischer antwortet: 'Nein, ich kaufe sie ohne Rezept.' Die Apothekerin empfiehlt Aspirin und sagt: 'Nehmen Sie maximal drei Tabletten am Tag.' Herr Fischer bezahlt sechs Euro vierzig in bar.",
            translation: "Mr. Fischer has a severe headache. He goes to the city pharmacy to buy painkillers. The pharmacist asks: 'Do you have a prescription?' Mr. Fischer answers: 'No, I am buying them without a prescription.' The pharmacist recommends Aspirin and says: 'Take a maximum of three tablets a day.' Mr. Fischer pays six euros forty in cash.",
            question: "Braucht Herr Fischer ein Rezept für die Schmerztabletten?",
            options: ["Ja, das ist Pflicht", "Nein, er kauft sie ohne Rezept", "Er hat ein Rezept vergessen"],
            correct: 1,
            explanation: "The text says: 'Nein, ich kaufe sie ohne Rezept.'"
        },
        quiz: [
            { question: "Wie viel Zuzahlung leistet der Kunde im Dialog?", options: ["Drei Euro", "Fünf Euro", "Zwei Euro"], correct: 0, explanation: "The pharmacist says: 'drei Euro Zuzahlung'." },
            { question: "Wie oft soll der Kunde die Tabletten nehmen?", options: ["Einmal täglich", "Zweimal täglich", "Dreimal täglich"], correct: 1, explanation: "The pharmacist says: 'Zweimal täglich jedna Tablette'." },
            { question: "Wann nimmt man die Tabletten ein?", options: ["Vor dem Essen", "Nach dem Essen", "Beim Schlafen"], correct: 1, explanation: "The pharmacist says: 'nach dem Essen'." },
            { question: "Was bedeutet 'die Tablette'?", options: ["Table", "Pill/Tablet", "Teacup"], correct: 1, explanation: "die Tablette means Pill/Tablet." },
            { question: "Was bedeutet 'in bar'?", options: ["By card", "In cash", "In coins"], correct: 1, explanation: "in bar means in cash." }
        ]
    },
    {
        id: "rl_school",
        title: "At School (In der Schule)",
        vocab: [
            { word: "der Lehrer", translation: "Teacher" },
            { word: "das Buch", translation: "Book" },
            { word: "das Heft", translation: "Notebook" },
            { word: "der Kugelschreiber", translation: "Pen" },
            { word: "die Hausaufgabe", translation: "Homework" }
        ],
        phrases: [
            { german: "Haben Sie Fragen?", english: "Do you have questions?" },
            { german: "Schreiben Sie das ins Heft.", english: "Write that in the notebook." },
            { german: "Öffnen Sie das Buch auf Seite 10.", english: "Open the book to page 10." },
            { german: "Können Sie das bitte wiederholen?", english: "Can you please repeat that?" },
            { german: "Wann ist die Pause?", english: "When is the break?" }
        ],
        dialogue: [
            { speaker: "Lehrer", text: "Guten Morgen zusammen. Habt ihr eure Hausaufgaben gemacht?", translation: "Good morning everyone. Did you do your homework?" },
            { speaker: "Schüler", text: "Ja, Herr Wagner. Aber ich hatte eine Frage bei Nummer drei.", translation: "Yes, Mr. Wagner. But I had a question on number three." },
            { speaker: "Lehrer", text: "Kein Problem, wir besprechen das gleich. Holt bitte eure Hefte und Stifte raus.", translation: "No problem, we'll discuss that shortly. Please take out your notebooks and pens." },
            { speaker: "Schüler", text: "Entschuldigung, kann ich einen Kugelschreiber leihen? Meiner schreibt nicht.", translation: "Excuse me, can I borrow a pen? Mine doesn't write." },
            { speaker: "Lehrer", text: "Ja, hier bitte. Nimm diesen blauen Kugelschreiber.", translation: "Yes, here please. Take this blue pen." }
        ],
        reading: {
            text: "Der Deutschkurs beginnt um neun Uhr morgens. Der Lehrer begrüßt die Schüler und schreibt das Datum an die Tafel. Heute lernen sie Grammatik: Präpositionen mit Akkusativ. Die Schüler arbeiten in Paaren und machen Übungen im Kursbuch. Die Pause beginnt um halb elf. Alle gehen in den Hof, um Kaffee zu trinken und zu reden.",
            translation: "The German course begins at nine o'clock in the morning. The teacher greets the students and writes the date on the blackboard. Today they are learning grammar: prepositions with accusative. The students work in pairs and do exercises in the coursebook. The break starts at half past ten. Everyone goes into the courtyard to drink coffee and talk.",
            question: "Wann beginnt die Pause?",
            options: ["Um 9:00 Uhr", "Um 10:30 Uhr (halb elf)", "Um 11:00 Uhr"],
            correct: 1,
            explanation: "The text states: 'Die Pause beginnt um halb elf (10:30).'"
        },
        quiz: [
            { question: "Was fragt der Lehrer am Anfang des Dialogs?", options: ["Nach Büchern", "Nach Hausaufgaben", "Nach Pausen"], correct: 1, explanation: "He asks: 'Habt ihr eure Hausaufgaben gemacht?'" },
            { question: "Wo hatte der Schüler eine Frage?", options: ["Bei Nummer zwei", "Bei Nummer drei", "Bei Nummer vier"], correct: 1, explanation: "He says: 'eine Frage bei Nummer drei'." },
            { question: "Was leiht der Lehrer dem Schüler?", options: ["Ein Buch", "Einen Kugelschreiber", "Ein Heft"], correct: 1, explanation: "He lends a blue pen (Kugelschreiber)." },
            { question: "Was bedeutet 'das Heft'?", options: ["Notebook", "Blackboard", "Break"], correct: 0, explanation: "das Heft means Notebook." },
            { question: "Was bedeutet 'die Tafel'?", options: ["blackboard", "table", "chair"], correct: 0, explanation: "die Tafel means blackboard." }
        ]
    },
    {
        id: "rl_work",
        title: "At Work (Bei der Arbeit)",
        vocab: [
            { word: "der Kollege", translation: "Colleague" },
            { word: "das Büro", translation: "Office" },
            { word: "der Computer", translation: "Computer" },
            { word: "die Besprechung", translation: "Meeting" },
            { word: "die E-Mail", translation: "Email" }
        ],
        phrases: [
            { german: "Ich arbeite als Programmierer.", english: "I work as a programmer." },
            { german: "Wann beginnt das Meeting?", english: "When does the meeting start?" },
            { german: "Schreiben Sie mir eine E-Mail.", english: "Write me an email." },
            { german: "Der Drucker funktioniert nicht.", english: "The printer is not working." },
            { german: "Schönes Wochenende, Kollegen!", english: "Have a nice weekend, colleagues!" }
        ],
        dialogue: [
            { speaker: "Kollege A", text: "Hallo Markus. Hast du meine E-Mail von heute Morgen bekommen?", translation: "Hello Markus. Did you receive my email from this morning?" },
            { speaker: "Kollege B", text: "Ja, habe ich. Die Dokumente sind fertig gedruckt.", translation: "Yes, I did. The documents are finished printing." },
            { speaker: "Kollege A", text: "Sehr gut. Die Besprechung mit dem Chef beginnt um elf Uhr im Konferenzraum.", translation: "Very good. The meeting with the boss begins at eleven o'clock in the conference room." },
            { speaker: "Kollege B", text: "Danke für die Info. Ich bringe die Unterlagen mit.", translation: "Thanks for the info. I will bring the papers." },
            { speaker: "Kollege A", text: "Perfekt. Bis gleich.", translation: "Perfect. See you soon." }
        ],
        reading: {
            text: "Thomas arbeitet bei einer Softwarefirma in München. Sein Büro liegt im dritten Stock. Er fängt um acht Uhr morgens an und arbeitet am Computer. Um zwölf Uhr macht er Mittagspause mit seinen Kollegen in der Kantine. Er isst meistens einen Salat oder Nudeln. Nach der Arbeit fährt er mit der U-Bahn nach Hause.",
            translation: "Thomas works at a software company in Munich. His office is on the third floor. He starts at eight o'clock in the morning and works on the computer. At twelve o'clock he takes a lunch break with his colleagues in the canteen. He usually eats a salad or pasta. After work he goes home by subway.",
            question: "Wo arbeitet Thomas in der Mittagspause?",
            options: ["Er arbeitet durch", "Er macht Pause in der Kantine", "Er geht nach Hause"],
            correct: 1,
            explanation: "The text says: 'Um zwölf Uhr macht er Mittagspause mit seinen Kollegen in der Kantine.'"
        },
        quiz: [
            { question: "Wann beginnt die Besprechung mit dem Chef?", options: ["Um 10:00 Uhr", "Um 11:00 Uhr", "Um 12:00 Uhr"], correct: 1, explanation: "It starts at 11:00: 'beginnt um elf Uhr'." },
            { question: "Wo findet die Besprechung statt?", options: ["Im Büro", "Im Konferenzraum", "In der Kantine"], correct: 1, explanation: "The meeting is in the conference room: 'im Konferenzraum'." },
            { question: "Was bedeutet 'der Kollege'?", options: ["Colleague", "Boss", "Programmer"], correct: 0, explanation: "der Kollege means Colleague." },
            { question: "Was bringt Markus mit zur Besprechung?", options: ["Kaffee", "Unterlagen (papers)", "Einen Computer"], correct: 1, explanation: "Markus says: 'Ich bringe die Unterlagen mit.'" },
            { question: "Was bedeutet 'das Büro'?", options: ["Office", "Home", "Kitchen"], correct: 0, explanation: "das Büro means Office." }
        ]
    },
    {
        id: "rl_bus_station",
        title: "At the Bus Station (An der Bushaltestelle)",
        vocab: [
            { word: "der Bus", translation: "Bus" },
            { word: "der Fahrplan", translation: "Timetable" },
            { word: "die Fahrkarte", translation: "Ticket" },
            { word: "die Haltestelle", translation: "Stop/Station" },
            { word: "die Verspätung", translation: "Delay" }
        ],
        phrases: [
            { german: "Fährt dieser Bus zum Hauptbahnhof?", english: "Does this bus go to the main station?" },
            { german: "Wann kommt der nächste Bus?", english: "When is the next bus coming?" },
            { german: "Wo kann ich eine Fahrkarte kaufen?", english: "Where can I buy a ticket?" },
            { german: "Der Bus hat zehn Minuten Verspätung.", english: "The bus has a ten-minute delay." },
            { german: "Bitte einsteigen!", english: "Please get in / board!" }
        ],
        dialogue: [
            { speaker: "Fahrgast", text: "Entschuldigung, fährt die Linie zehn zum Flughafen?", translation: "Excuse me, does line ten go to the airport?" },
            { speaker: "Markus", text: "Nein, dieser Bus fährt in die Innenstadt. Sie müssen die Linie fünfzehn nehmen.", translation: "No, this bus goes downtown. You must take line fifteen." },
            { speaker: "Fahrgast", text: "Ah, verstehe. Und wann kommt die Linie fünfzehn?", translation: "Ah, I see. And when is line fifteen coming?" },
            { speaker: "Markus", text: "Laut Fahrplan fährt er in fünf Minuten ab. Er kommt an diesem Gleis an.", translation: "According to the timetable it departs in five minutes. It arrives at this platform." },
            { speaker: "Fahrgast", text: "Vielen Dank für Ihre Hilfe!", translation: "Thank you very much for your help!" }
        ],
        reading: {
            text: "Nivedya steht an der Bushaltestelle 'Goetheplatz'. Sie möchte zum Deutsch-Institut fahren. Der Bus der Linie einhundertzwei soll um acht Uhr fünfzehn kommen. Aber heute schneit es und der Verkehr ist sehr langsam. Der Bus hat fünfzehn Minuten Verspätung. Nivedya kauft am Automaten eine Einzelfahrkarte für zwei Euro achtzig.",
            translation: "Nivedya is standing at the bus stop 'Goetheplatz'. She wants to go to the German Institute. The bus line one hundred and two is supposed to come at eight fifteen. But today it is snowing and the traffic is very slow. The bus has a fifteen-minute delay. Nivedya buys a single ticket for two euros eighty at the machine.",
            question: "Warum hat der Bus Verspätung?",
            options: ["Weil der Bus kaputt ist", "Weil es schneit und der Verkehr langsam ist", "Der Fahrer hat geschlafen"],
            correct: 1,
            explanation: "The text says: 'heute schneit es und der Verkehr ist sehr langsam. Der Bus hat fünfzehn Minuten Verspätung.'"
        },
        quiz: [
            { question: "Wohin fährt die Linie zehn im Dialog?", options: ["Zum Flughafen", "In die Innenstadt", "Zum Bahnhof"], correct: 1, explanation: "Markus says: 'dieser Bus fährt in die Innenstadt.'" },
            { question: "Welche Buslinie fährt zum Flughafen?", options: ["Linie zehn", "Linie fünfzehn", "Linie fünf"], correct: 1, explanation: "Markus says: 'Sie müssen die Linie fünfzehn nehmen.'" },
            { question: "Wie teuer ist Nivedyas Fahrkarte im Text?", options: ["2,80 Euro", "3,00 Euro", "1,50 Euro"], correct: 0, explanation: "She buys a ticket for two euros eighty: 'zwei Euro achtzig'." },
            { question: "Was bedeutet 'der Fahrplan'?", options: ["Timetable", "Delay", "Ticket"], correct: 0, explanation: "der Fahrplan means Timetable." },
            { question: "Was bedeutet 'die Haltestelle'?", options: ["Station/Stop", "Bus ticket", "Seat"], correct: 0, explanation: "die Haltestelle means Station/Stop." }
        ]
    },
    {
        id: "rl_train_station",
        title: "At the Train Station (Am Bahnhof)",
        vocab: [
            { word: "der Zug", translation: "Train" },
            { word: "das Gleis", translation: "Platform/Track" },
            { word: "die Hinfahrt", translation: "Outward journey" },
            { word: "die Rückfahrt", translation: "Return journey" },
            { word: "die Auskunft", translation: "Information desk" }
        ],
        phrases: [
            { german: "Der Zug fährt von Gleis vier ab.", english: "The train departs from platform four." },
            { german: "Ich möchte eine Fahrkarte nach Hamburg kaufen.", english: "I would like to buy a ticket to Hamburg." },
            { german: "Muss ich umsteigen?", english: "Do I have to transfer/change trains?" },
            { german: "Wann kommt der Zug in Berlin an?", english: "When does the train arrive in Berlin?" },
            { german: "Einfache Fahrt oder Hin- und Rückfahrt?", english: "One-way ticket or round trip?" }
        ],
        dialogue: [
            { speaker: "Verkäufer", text: "Guten Tag. Wie kann ich Ihnen helfen?", translation: "Good day. How can I help you?" },
            { speaker: "Fahrgast", text: "Hallo. Ich brauche eine Fahrkarte nach München für morgen früh.", translation: "Hello. I need a ticket to Munich for tomorrow morning." },
            { speaker: "Verkäufer", text: "Hin und zurück?", translation: "Round trip?" },
            { speaker: "Fahrgast", text: "Nein, nur eine einfache Fahrt, bitte.", translation: "No, just one-way, please." },
            { speaker: "Verkäufer", text: "Das macht neunundsiebzig Euro. Der Zug fährt um acht Uhr dreißig von Gleis vier.", translation: "That makes seventy-nine euros. The train departs at eight-thirty from platform four." }
        ],
        reading: {
            text: "Der Hauptbahnhof in Frankfurt ist sehr groß und laut. Viele Reisende stehen vor den großen Anzeigetafeln. Herr Becker sucht seinen Zug nach Paris. Der Zug fährt um vierzehn Uhr fünfzehn ab. Auf der Tafel steht: 'ICE nach Paris heute von Gleis sechs statt Gleis drei'. Herr Becker geht schnell über die Treppe zum Gleis sechs.",
            translation: "The main train station in Frankfurt is very big and loud. Many travelers stand in front of the big departure boards. Mr. Becker is looking for his train to Paris. The train departs at two fifteen PM. On the board it says: 'ICE to Paris today from platform six instead of platform three'. Mr. Becker goes quickly via the stairs to platform six.",
            question: "Von welchem Gleis fährt der ICE nach Paris heute ab?",
            options: ["Gleis drei", "Gleis sechs", "Gleis acht"],
            correct: 1,
            explanation: "The board says: 'heute von Gleis sechs statt Gleis drei'."
        },
        quiz: [
            { question: "Für wann sucht der Fahrgast eine Fahrkarte?", options: ["Für heute Abend", "Für morgen früh", "Für nächste Woche"], correct: 1, explanation: "He says: 'nach München für morgen früh'." },
            { question: "Von welchem Gleis fährt der Zug nach München ab?", options: ["Gleis drei", "Gleis vier", "Gleis sechs"], correct: 1, explanation: "The seller says: 'von Gleis vier'." },
            { question: "Was kostet das Ticket nach München?", options: ["79,00 Euro", "89,00 Euro", "99,00 Euro"], correct: 0, explanation: "It costs 79 euros: 'neunundsiebzig Euro'." },
            { question: "Was bedeutet 'nur eine einfache Fahrt'?", options: ["One-way ticket", "Round trip", "First class"], correct: 0, explanation: "It means a one-way ticket." },
            { question: "Was bedeutet 'umsteigen'?", options: ["Transfer/change trains", "Buy a ticket", "Sleep"], correct: 0, explanation: "umsteigen means to transfer/change trains." }
        ]
    },
    {
        id: "rl_hotel",
        title: "At the Hotel (Im Hotel)",
        vocab: [
            { word: "das Zimmer", translation: "Room" },
            { word: "der Schlüssel", translation: "Key" },
            { word: "das Frühstück", translation: "Breakfast" },
            { word: "die Rezeption", translation: "Reception desk" },
            { word: "die Kreditkarte", translation: "Credit card" }
        ],
        phrases: [
            { german: "Haben Sie meine Reservierung?", english: "Do you have my reservation?" },
            { german: "Ist das Frühstück inklusive?", english: "Is breakfast included?" },
            { german: "Wo ist der Aufzug?", english: "Where is the elevator?" },
            { german: "Um wie viel Uhr ist das Frühstück?", english: "At what time is breakfast?" },
            { german: "Kann ich den Zimmerschlüssel haben?", english: "Can I have the room key?" }
        ],
        dialogue: [
            { speaker: "Rezeptionist", text: "Herzlich willkommen im Hotel Central. Wie ist Ihr Name?", translation: "Welcome to Hotel Central. What is your name?" },
            { speaker: "Gast", text: "Guten Tag. Mein Name ist Nivedya Vijayan. Ich habe ein Einzelzimmer reserviert.", translation: "Good day. My name is Nivedya Vijayan. I have reserved a single room." },
            { speaker: "Rezeptionist", text: "Ja, hier ist Ihre Buchung. Für drei Nächte, stimmt das?", translation: "Yes, here is your booking. For three nights, is that correct?" },
            { speaker: "Gast", text: "Ja, das ist richtig. Ist das Frühstück im Preis inbegriffen?", translation: "Yes, that is correct. Is breakfast included in the price?" },
            { speaker: "Rezeptionist", text: "Ja, das Frühstücksbuffet ist kostenlos von sieben bis zehn Uhr. Hier ist Ihr Zimmerschlüssel. Zimmer zweihundertvier im zweiten Stock.", translation: "Yes, the breakfast buffet is free from seven to ten AM. Here is your room key. Room two hundred four on the second floor." }
        ],
        reading: {
            text: "Sarah checkt im Hotel 'Blaue Donau' ein. Sie hat ein Doppelzimmer mit Bad für das Wochenende gebucht. Sie bezahlt mit Kreditkarte an der Rezeption. Der Rezeptionist gibt ihr den Schlüssel für Zimmer einhundertzehn und sagt: 'Der Aufzug befindet sich direkt hinter der Rezeption.' Das Frühstück gibt es morgens im Restaurant im Erdgeschoss.",
            translation: "Sarah checks in at the hotel 'Blue Danube'. She has booked a double room with a bath for the weekend. She pays by credit card at the reception. The receptionist gives her the key for room one hundred ten and says: 'The elevator is located directly behind the reception.' Breakfast is served in the morning at the restaurant on the ground floor.",
            question: "Wo befindet sich der Aufzug im Hotel?",
            options: ["Im ersten Stock", "Direkt hinter der Rezeption", "Draußen vor der Tür"],
            correct: 1,
            explanation: "The receptionist says: 'Der Aufzug befindet sich direkt hinter der Rezeption.'"
        },
        quiz: [
            { question: "Wie lange bleibt der Gast im Hotel laut Dialog?", options: ["Eine Nacht", "Zwei Nächte", "Drei Nächte"], correct: 2, explanation: "The receptionist says: 'Für drei Nächte, stimmt das?'" },
            { question: "Welche Zimmernummer hat der Gast?", options: ["Zimmer 110", "Zimmer 204", "Zimmer 305"], correct: 1, explanation: "His room is 204: 'Zimmer zweihundertvier'." },
            { question: "Um wie viel Uhr beginnt das Frühstück?", options: ["Um 6:00 Uhr", "Um 7:00 Uhr", "Um 8:00 Uhr"], correct: 1, explanation: "It starts at 7:00: 'von sieben bis zehn Uhr'." },
            { question: "Was bedeutet 'das Doppelzimmer'?", options: ["Single room", "Double room", "Family room"], correct: 1, explanation: "das Doppelzimmer means Double room." },
            { question: "Was bedeutet 'der Aufzug'?", options: ["Elevator", "Key", "Receptionist"], correct: 0, explanation: "der Aufzug means Elevator." }
        ]
    },
    {
        id: "rl_home",
        title: "At Home (Zu Hause)",
        vocab: [
            { word: "das Haus", translation: "House" },
            { word: "die Küche", translation: "Kitchen" },
            { word: "das Wohnzimmer", translation: "Living room" },
            { word: "der Garten", translation: "Garden" },
            { word: "die Miete", translation: "Rent" }
        ],
        phrases: [
            { german: "Ich wohne in einer kleinen Wohnung.", english: "I live in a small apartment." },
            { german: "Komm bitte in die Küche.", english: "Please come into the kitchen." },
            { german: "Wo ist das Badezimmer?", english: "Where is the bathroom?" },
            { german: "Die Miete ist sehr teuer.", english: "The rent is very expensive." },
            { german: "Wir trinken Tee im Wohnzimmer.", english: "We are drinking tea in the living room." }
        ],
        dialogue: [
            { speaker: "Vater", text: "Emma, kannst du mir bitte in der Küche helfen?", translation: "Emma, can you please help me in the kitchen?" },
            { speaker: "Emma", text: "Ja, Papa. Was soll ich machen?", translation: "Yes, Dad. What should I do?" },
            { speaker: "Vater", text: "Wasch bitte das Gemüse und schneide das Brot.", translation: "Please wash the vegetables and cut the bread." },
            { speaker: "Emma", text: "Okay, mache ich. Wo ist das Messer?", translation: "Okay, I'll do it. Where is the knife?" },
            { speaker: "Vater", text: "Das liegt auf dem Tisch neben dem Teller.", translation: "It is lying on the table next to the plate." }
        ],
        reading: {
            text: "Familie Müller wohnt in einem Einfamilienhaus in Stuttgart. Das Haus hat vier Zimmer, eine Küche, ein großes Badezimmer und einen schönen Garten. Im Wohnzimmer steht ein großes Sofa und ein Fernseher. Die Kinder spielen gerne im Garten mit dem Hund. Herr Müller kocht jeden Abend in der Küche das Abendessen für alle.",
            translation: "The Müller family lives in a single-family house in Stuttgart. The house has four rooms, a kitchen, a large bathroom, and a beautiful garden. In the living room is a large sofa and a TV. The children like to play in the garden with the dog. Mr. Müller cooks dinner for everyone in the kitchen every night.",
            question: "Wo spielen die Kinder gerne?",
            options: ["In der Küche", "Im Garten", "Im Wohnzimmer"],
            correct: 1,
            explanation: "The text says: 'Die Kinder spielen gerne im Garten mit dem Hund.'"
        },
        quiz: [
            { question: "Wer bittet um Hilfe in der Küche?", options: ["Die Mutter", "Der Vater", "Der Bruder"], correct: 1, explanation: "Emma replies to 'Papa' (Vater)." },
            { question: "Was soll Emma tun?", options: ["Den Tisch decken", "Gemüse waschen und Brot schneiden", "Geschirr spülen"], correct: 1, explanation: "He says: 'Wasch bitte das Gemüse und schneide das Brot.'" },
            { question: "Wo liegt das Messer?", options: ["Im Regal", "Auf dem Tisch neben dem Teller", "In der Schublade"], correct: 1, explanation: "He says: 'auf dem Tisch neben dem Teller'." },
            { question: "Was bedeutet 'die Küche'?", options: ["Kitchen", "Bathroom", "Living room"], correct: 0, explanation: "die Küche means Kitchen." },
            { question: "Was bedeutet 'die Miete'?", options: ["House", "Rent", "Garden"], correct: 1, explanation: "die Miete means Rent." }
        ]
    },
    {
        id: "rl_post_office",
        title: "At the Post Office (Auf der Post)",
        vocab: [
            { word: "das Paket", translation: "Package / parcel" },
            { word: "die Briefmarke", translation: "Stamp" },
            { word: "der Brief", translation: "Letter" },
            { word: "schicken", translation: "To send" },
            { word: "die Waage", translation: "Scales" }
        ],
        phrases: [
            { german: "Ich möchte dieses Paket schicken.", english: "I would like to send this package." },
            { german: "Wie viel kostet eine Briefmarke nach Indien?", english: "How much does a stamp to India cost?" },
            { german: "Wie lange dauert die Lieferung?", english: "How long does the delivery take?" },
            { german: "Bitte auf die Waage legen.", english: "Please put it on the scales." },
            { german: "Haben Sie den Absender angegeben?", english: "Have you written the sender's address?" }
        ],
        dialogue: [
            { speaker: "Kunde", text: "Guten Tag. Ich möchte dieses Paket nach München schicken.", translation: "Good day. I would like to send this package to Munich." },
            { speaker: "Postbeamter", text: "Bitte legen Sie das Paket auf die Waage.", translation: "Please put the package on the scales." },
            { speaker: "Kunde", text: "Wie viel kostet das?", translation: "How much does that cost?" },
            { speaker: "Postbeamter", text: "Das Paket wiegt zwei Kilo. Das kostet sechs Euro fünfzig.", translation: "The package weighs two kilos. That costs six euros fifty." },
            { speaker: "Kunde", text: "Gut. Wann kommt es an?", translation: "Good. When will it arrive?" }
        ],
        reading: {
            text: "Frau Bauer geht heute auf die Post. Sie möchte zwei Dinge erledigen: einen Brief nach England schicken und ein Paket für ihre Tochter abholen. Der Brief kostet neunzig Cent Porto. Das Paket hat seit gestern auf Frau Bauer gewartet. Sie zeigt ihren Ausweis und bekommt das Paket. Es ist schwer – fast fünf Kilo.",
            translation: "Mrs Bauer goes to the post office today. She wants to do two things: send a letter to England and collect a package for her daughter. The letter costs ninety cents postage. The package has been waiting for Mrs Bauer since yesterday. She shows her ID and receives the package. It is heavy – almost five kilos.",
            question: "Was macht Frau Bauer auf der Post?",
            options: ["Nur ein Paket abholen", "Einen Brief schicken und ein Paket abholen", "Eine Briefmarke kaufen"],
            correct: 1,
            explanation: "The text says she wants to do two things: send a letter and collect a package."
        },
        quiz: [
            { question: "Was möchte der Kunde im Dialog schicken?", options: ["Einen Brief", "Ein Paket", "Eine Postkarte"], correct: 1, explanation: "He says: 'Ich möchte dieses Paket nach München schicken.'" },
            { question: "Wie viel wiegt das Paket?", options: ["Ein Kilo", "Zwei Kilo", "Fünf Kilo"], correct: 1, explanation: "The clerk says: 'Das Paket wiegt zwei Kilo.'" },
            { question: "Was kostet das Paket zu schicken?", options: ["Vier Euro", "Sechs Euro fünfzig", "Acht Euro"], correct: 1, explanation: "Six euros fifty: 'Das kostet sechs Euro fünfzig.'" },
            { question: "Was bedeutet 'die Briefmarke'?", options: ["Stamp", "Scales", "Letter"], correct: 0, explanation: "die Briefmarke means Stamp." },
            { question: "Was bedeutet 'schicken'?", options: ["To receive", "To send", "To weigh"], correct: 1, explanation: "schicken means To send." }
        ]
    },
    {
        id: "rl_bank",
        title: "At the Bank (Auf der Bank)",
        vocab: [
            { word: "das Konto", translation: "Bank account" },
            { word: "überweisen", translation: "To transfer money" },
            { word: "abheben", translation: "To withdraw money" },
            { word: "der Geldautomat", translation: "ATM / cash machine" },
            { word: "die PIN", translation: "PIN number" }
        ],
        phrases: [
            { german: "Ich möchte ein Konto eröffnen.", english: "I would like to open an account." },
            { german: "Wie hoch ist die Gebühr?", english: "What is the fee?" },
            { german: "Ich möchte Geld abheben.", english: "I would like to withdraw money." },
            { german: "Bitte geben Sie Ihre PIN ein.", english: "Please enter your PIN." },
            { german: "Kann ich hier Geld wechseln?", english: "Can I exchange money here?" }
        ],
        dialogue: [
            { speaker: "Kunde", text: "Guten Morgen. Ich möchte ein neues Girokonto eröffnen.", translation: "Good morning. I would like to open a new current account." },
            { speaker: "Bankangestellter", text: "Natürlich. Haben Sie Ihren Ausweis dabei?", translation: "Of course. Do you have your ID with you?" },
            { speaker: "Kunde", text: "Ja, hier ist mein Reisepass.", translation: "Yes, here is my passport." },
            { speaker: "Bankangestellter", text: "Gut. Die Kontoführung ist kostenlos. Sie bekommen eine Karte in drei Werktagen.", translation: "Good. Account management is free. You will receive a card in three working days." },
            { speaker: "Kunde", text: "Kann ich auch Online-Banking nutzen?", translation: "Can I also use online banking?" }
        ],
        reading: {
            text: "Herr Kim hat ein Problem. Er hat seine Bankkarte verloren. Er geht zur Filiale seiner Bank. Dort spricht er mit einer Angestellten. Sie sperrt die alte Karte sofort. Eine neue Karte kommt in fünf Werktagen. Herr Kim hebt noch einmal einhundert Euro bar am Schalter ab, damit er heute einkaufen kann.",
            translation: "Mr Kim has a problem. He has lost his bank card. He goes to his bank branch. There he speaks with a member of staff. She immediately blocks the old card. A new card will come in five working days. Mr Kim withdraws one hundred euros in cash at the counter so he can shop today.",
            question: "Warum geht Herr Kim zur Bank?",
            options: ["Um ein Konto zu eröffnen", "Weil er seine Bankkarte verloren hat", "Um Geld zu überweisen"],
            correct: 1,
            explanation: "The text says: 'Er hat seine Bankkarte verloren.'"
        },
        quiz: [
            { question: "Was möchte der Kunde im Dialog eröffnen?", options: ["Ein Sparkonto", "Ein Girokonto", "Ein Festgeldkonto"], correct: 1, explanation: "He says: 'Ich möchte ein neues Girokonto eröffnen.'" },
            { question: "Was muss der Kunde mitbringen?", options: ["Ein Foto", "Seinen Ausweis / Reisepass", "Eine Unterschrift"], correct: 1, explanation: "The clerk asks: 'Haben Sie Ihren Ausweis dabei?'" },
            { question: "Wann kommt die Bankkarte?", options: ["Am nächsten Tag", "In drei Werktagen", "In einer Woche"], correct: 1, explanation: "The clerk says: 'Sie bekommen eine Karte in drei Werktagen.'" },
            { question: "Was bedeutet 'abheben'?", options: ["To deposit", "To transfer", "To withdraw"], correct: 2, explanation: "abheben means To withdraw money." },
            { question: "Was bedeutet 'der Geldautomat'?", options: ["Bank account", "ATM", "Receipt"], correct: 1, explanation: "der Geldautomat means ATM / cash machine." }
        ]
    },
    {
        id: "rl_airport",
        title: "At the Airport (Am Flughafen)",
        vocab: [
            { word: "der Flug", translation: "Flight" },
            { word: "das Gepäck", translation: "Luggage" },
            { word: "der Gate", translation: "Gate" },
            { word: "einchecken", translation: "To check in" },
            { word: "die Verspätung", translation: "Delay" }
        ],
        phrases: [
            { german: "Mein Flug hat Verspätung.", english: "My flight is delayed." },
            { german: "Wo ist der Check-in-Schalter?", english: "Where is the check-in counter?" },
            { german: "Darf ich eine Tasche als Handgepäck mitnehmen?", english: "May I take a bag as hand luggage?" },
            { german: "Ihr Flug geht von Gate B12 ab.", english: "Your flight departs from gate B12." },
            { german: "Bitte zeigen Sie Ihren Boardingpass.", english: "Please show your boarding pass." }
        ],
        dialogue: [
            { speaker: "Reisender", text: "Guten Morgen. Ich möchte einchecken. Mein Flug geht nach Wien.", translation: "Good morning. I would like to check in. My flight goes to Vienna." },
            { speaker: "Mitarbeiterin", text: "Ihren Pass bitte. Haben Sie Gepäck aufzugeben?", translation: "Your passport please. Do you have luggage to check in?" },
            { speaker: "Reisender", text: "Ja, einen Koffer. Wie viel Kilo darf er haben?", translation: "Yes, one suitcase. How many kilos may it weigh?" },
            { speaker: "Mitarbeiterin", text: "Maximal dreiundzwanzig Kilo. Ihr Koffer wiegt einundzwanzig – alles gut.", translation: "Maximum twenty-three kilos. Your suitcase weighs twenty-one – all good." },
            { speaker: "Reisender", text: "Wunderbar. Von welchem Gate geht mein Flug ab?", translation: "Wonderful. From which gate does my flight depart?" }
        ],
        reading: {
            text: "Lisa fliegt heute das erste Mal alleine. Sie ist sehr aufgeregt. Ihr Flug nach Hamburg geht um zehn Uhr ab. Sie kommt früh am Flughafen an und checkt um acht Uhr ein. Dann geht sie durch die Sicherheitskontrolle. Sie muss ihre Schuhe ausziehen und ihren Rucksack auf das Band legen. Danach wartet sie am Gate G5 auf den Abflug.",
            translation: "Lisa is flying alone for the first time today. She is very excited. Her flight to Hamburg departs at ten o'clock. She arrives early at the airport and checks in at eight o'clock. Then she goes through security. She has to take off her shoes and put her backpack on the belt. After that she waits at gate G5 for the departure.",
            question: "Um wie viel Uhr checkt Lisa ein?",
            options: ["Um neun Uhr", "Um acht Uhr", "Um zehn Uhr"],
            correct: 1,
            explanation: "The text says: 'Sie kommt früh am Flughafen an und checkt um acht Uhr ein.'"
        },
        quiz: [
            { question: "Wohin fliegt der Reisende im Dialog?", options: ["Nach Berlin", "Nach Wien", "Nach München"], correct: 1, explanation: "He says: 'Mein Flug geht nach Wien.'" },
            { question: "Wie viel darf der Koffer maximal wiegen?", options: ["Zwanzig Kilo", "Dreiundzwanzig Kilo", "Fünfundzwanzig Kilo"], correct: 1, explanation: "The clerk says: 'Maximal dreiundzwanzig Kilo.'" },
            { question: "Wie schwer ist der Koffer des Reisenden?", options: ["Einundzwanzig Kilo", "Dreiundzwanzig Kilo", "Fünfzehn Kilo"], correct: 0, explanation: "She says: 'Ihr Koffer wiegt einundzwanzig.'" },
            { question: "Was bedeutet 'die Verspätung'?", options: ["Departure", "Delay", "Luggage"], correct: 1, explanation: "die Verspätung means Delay." },
            { question: "Was bedeutet 'einchecken'?", options: ["To check in", "To board", "To land"], correct: 0, explanation: "einchecken means To check in." }
        ]
    },
    {
        id: "rl_gym",
        title: "At the Gym (Im Fitnessstudio)",
        vocab: [
            { word: "die Mitgliedschaft", translation: "Membership" },
            { word: "trainieren", translation: "To train / work out" },
            { word: "der Kurs", translation: "Class / course" },
            { word: "die Umkleidekabine", translation: "Changing room" },
            { word: "der Beitrag", translation: "Fee / contribution" }
        ],
        phrases: [
            { german: "Ich möchte Mitglied werden.", english: "I would like to become a member." },
            { german: "Wie viel kostet die Monatsmitgliedschaft?", english: "How much does the monthly membership cost?" },
            { german: "Gibt es einen Yoga-Kurs?", english: "Is there a yoga class?" },
            { german: "Wo sind die Umkleidekabinen?", english: "Where are the changing rooms?" },
            { german: "Kann ich das Studio erst ausprobieren?", english: "Can I try out the studio first?" }
        ],
        dialogue: [
            { speaker: "Kunde", text: "Hallo. Ich interessiere mich für eine Mitgliedschaft.", translation: "Hello. I am interested in a membership." },
            { speaker: "Mitarbeiter", text: "Willkommen! Wir haben verschiedene Angebote. Der günstigste Plan kostet dreißig Euro pro Monat.", translation: "Welcome! We have different offers. The cheapest plan costs thirty euros per month." },
            { speaker: "Kunde", text: "Sind Kurse inklusive?", translation: "Are classes included?" },
            { speaker: "Mitarbeiter", text: "Ja, alle Gruppenkurse wie Yoga und Zumba sind kostenlos dabei.", translation: "Yes, all group classes like yoga and zumba are included free of charge." },
            { speaker: "Kunde", text: "Super. Kann ich heute noch anfangen?", translation: "Great. Can I start today?" }
        ],
        reading: {
            text: "Tom geht dreimal pro Woche ins Fitnessstudio. Er hat eine Monatsmitgliedschaft für achtundzwanzig Euro. Heute macht er zuerst dreißig Minuten auf dem Laufband. Dann hebt er Gewichte. Nach dem Training duscht er in der Umkleidekabine. Sein Lieblingstag ist Mittwoch, weil dann um 18 Uhr ein Bauchkurs stattfindet.",
            translation: "Tom goes to the gym three times a week. He has a monthly membership for twenty-eight euros. Today he first does thirty minutes on the treadmill. Then he lifts weights. After training he showers in the changing room. His favourite day is Wednesday because there is a core class at 6 PM.",
            question: "Wie oft geht Tom ins Fitnessstudio?",
            options: ["Einmal pro Woche", "Dreimal pro Woche", "Jeden Tag"],
            correct: 1,
            explanation: "The text says: 'Tom geht dreimal pro Woche ins Fitnessstudio.'"
        },
        quiz: [
            { question: "Was kostet die günstigste Mitgliedschaft im Dialog?", options: ["Zwanzig Euro", "Dreißig Euro", "Vierzig Euro"], correct: 1, explanation: "The staff says: 'Der günstigste Plan kostet dreißig Euro pro Monat.'" },
            { question: "Welche Kurse sind inklusive?", options: ["Nur Yoga", "Nur Schwimmen", "Alle Gruppenkurse wie Yoga und Zumba"], correct: 2, explanation: "He says: 'alle Gruppenkurse wie Yoga und Zumba sind kostenlos dabei.'" },
            { question: "Was bedeutet 'trainieren'?", options: ["To rest", "To train / work out", "To swim"], correct: 1, explanation: "trainieren means To train / work out." },
            { question: "Was bedeutet 'die Umkleidekabine'?", options: ["Locker", "Changing room", "Shower"], correct: 1, explanation: "die Umkleidekabine means Changing room." },
            { question: "Was fragt der Kunde am Ende des Dialogs?", options: ["Wo ist die Dusche?", "Kann er heute noch anfangen?", "Wie lange ist das Studio offen?"], correct: 1, explanation: "He asks: 'Kann ich heute noch anfangen?'" }
        ]
    },
    {
        id: "rl_hair_salon",
        title: "At the Hair Salon (Beim Friseur)",
        vocab: [
            { word: "der Haarschnitt", translation: "Haircut" },
            { word: "die Farbe", translation: "Colour / dye" },
            { word: "waschen", translation: "To wash" },
            { word: "föhnen", translation: "To blow-dry" },
            { word: "das Trinkgeld", translation: "Tip" }
        ],
        phrases: [
            { german: "Ich möchte einen Haarschnitt.", english: "I would like a haircut." },
            { german: "Bitte nicht zu kurz schneiden.", english: "Please do not cut it too short." },
            { german: "Können Sie meine Haare waschen?", english: "Can you wash my hair?" },
            { german: "Wie lange muss ich warten?", english: "How long do I have to wait?" },
            { german: "Das sieht sehr gut aus!", english: "That looks very good!" }
        ],
        dialogue: [
            { speaker: "Kundin", text: "Guten Tag. Haben Sie heute noch einen freien Termin?", translation: "Good day. Do you still have a free appointment today?" },
            { speaker: "Friseur", text: "Ja, in einer halben Stunde. Was möchten Sie machen lassen?", translation: "Yes, in half an hour. What would you like done?" },
            { speaker: "Kundin", text: "Nur einen Haarschnitt, bitte. Die Spitzen schneiden und etwas kürzer an den Seiten.", translation: "Just a haircut, please. Trim the ends and a little shorter on the sides." },
            { speaker: "Friseur", text: "Möchten Sie auch die Haare waschen und föhnen?", translation: "Would you also like to have your hair washed and blow-dried?" },
            { speaker: "Kundin", text: "Ja, gerne. Wie viel kostet das alles zusammen?", translation: "Yes, please. How much does all of that cost together?" }
        ],
        reading: {
            text: "Sandra geht jeden zweiten Monat zum Friseur. Heute hat sie einen Termin um vierzehn Uhr. Die Friseuse wäscht zuerst die Haare, dann schneidet sie die Spitzen und föhnt die Haare. Das dauert insgesamt vierzig Minuten. Sandra bezahlt achtzehn Euro und gibt zwei Euro Trinkgeld. Sie ist sehr zufrieden mit dem Ergebnis.",
            translation: "Sandra goes to the hairdresser every other month. Today she has an appointment at two o'clock. The hairdresser first washes the hair, then trims the ends and blow-dries the hair. It takes forty minutes in total. Sandra pays eighteen euros and gives two euros tip. She is very satisfied with the result.",
            question: "Wie lange dauert der Friseurbesuch?",
            options: ["Dreißig Minuten", "Vierzig Minuten", "Eine Stunde"],
            correct: 1,
            explanation: "The text says: 'Das dauert insgesamt vierzig Minuten.'"
        },
        quiz: [
            { question: "Wann ist der freie Termin im Dialog?", options: ["Sofort", "In einer halben Stunde", "Morgen"], correct: 1, explanation: "The hairdresser says: 'in einer halben Stunde.'" },
            { question: "Was möchte die Kundin machen lassen?", options: ["Die Haare färben", "Einen Haarschnitt", "Eine Dauerwelle"], correct: 1, explanation: "She says: 'Nur einen Haarschnitt, bitte.'" },
            { question: "Was macht die Friseuse nach dem Waschen?", options: ["Sie färbt die Haare", "Sie schneidet die Spitzen und föhnt", "Sie gibt Trinkgeld"], correct: 1, explanation: "The reading says: 'schneidet sie die Spitzen und föhnt die Haare.'" },
            { question: "Was bedeutet 'föhnen'?", options: ["To colour", "To wash", "To blow-dry"], correct: 2, explanation: "föhnen means To blow-dry." },
            { question: "Was bedeutet 'das Trinkgeld'?", options: ["Tip", "Receipt", "Fee"], correct: 0, explanation: "das Trinkgeld means Tip." }
        ]
    },
    {
        id: "rl_cinema",
        title: "At the Cinema (Im Kino)",
        vocab: [
            { word: "der Film", translation: "Film / movie" },
            { word: "die Eintrittskarte", translation: "Ticket" },
            { word: "die Vorstellung", translation: "Showing / performance" },
            { word: "der Platz", translation: "Seat" },
            { word: "das Popcorn", translation: "Popcorn" }
        ],
        phrases: [
            { german: "Zwei Karten für den Film um acht, bitte.", english: "Two tickets for the eight o'clock film, please." },
            { german: "Welcher Film läuft gerade?", english: "Which film is on right now?" },
            { german: "Sind noch Plätze frei?", english: "Are there still seats free?" },
            { german: "Ich möchte in der Mitte sitzen.", english: "I would like to sit in the middle." },
            { german: "Ist der Film auf Deutsch oder auf Englisch?", english: "Is the film in German or in English?" }
        ],
        dialogue: [
            { speaker: "Kunde", text: "Hallo. Zwei Karten für 'Berlin Nights' um neunzehn Uhr, bitte.", translation: "Hello. Two tickets for 'Berlin Nights' at seven PM, please." },
            { speaker: "Kassiererin", text: "Gerne. Wo möchten Sie sitzen? Vorne, in der Mitte oder hinten?", translation: "Of course. Where would you like to sit? At the front, in the middle, or at the back?" },
            { speaker: "Kunde", text: "In der Mitte, bitte. Nicht zu nah an der Leinwand.", translation: "In the middle, please. Not too close to the screen." },
            { speaker: "Kassiererin", text: "Reihe G, Platz 14 und 15. Das macht sechzehn Euro.", translation: "Row G, seats 14 and 15. That comes to sixteen euros." },
            { speaker: "Kunde", text: "Danke. Gibt es auch Popcorn hier?", translation: "Thank you. Is there also popcorn here?" }
        ],
        reading: {
            text: "Felix und seine Schwester gehen am Samstagabend ins Kino. Sie wählen einen Actionfilm. Die Vorstellung beginnt um zwanzig Uhr dreißig. Felix kauft zwei Karten und eine große Tüte Popcorn. Die Karten kosten je acht Euro. Platz zehn und elf in Reihe E sind ihre Sitze. Der Film ist sehr spannend und dauert zwei Stunden.",
            translation: "Felix and his sister go to the cinema on Saturday evening. They choose an action film. The showing begins at 8:30 PM. Felix buys two tickets and a large bag of popcorn. The tickets cost eight euros each. Seats ten and eleven in row E are their seats. The film is very exciting and lasts two hours.",
            question: "Wann beginnt die Vorstellung?",
            options: ["Um zwanzig Uhr", "Um zwanzig Uhr dreißig", "Um einundzwanzig Uhr"],
            correct: 1,
            explanation: "The text says: 'Die Vorstellung beginnt um zwanzig Uhr dreißig.'"
        },
        quiz: [
            { question: "Für welchen Film kauft der Kunde Karten im Dialog?", options: ["'Hamburg Night'", "'Berlin Nights'", "'Vienna Dreams'"], correct: 1, explanation: "He says: 'Zwei Karten für Berlin Nights um neunzehn Uhr.'" },
            { question: "Wo möchte der Kunde sitzen?", options: ["Vorne", "In der Mitte", "Hinten"], correct: 1, explanation: "He says: 'In der Mitte, bitte.'" },
            { question: "Wie viel kosten die zwei Karten zusammen?", options: ["Zwölf Euro", "Vierzehn Euro", "Sechzehn Euro"], correct: 2, explanation: "The cashier says: 'Das macht sechzehn Euro.'" },
            { question: "Was bedeutet 'die Vorstellung'?", options: ["Showing / performance", "Seat", "Screen"], correct: 0, explanation: "die Vorstellung means Showing / performance." },
            { question: "Was bedeutet 'der Platz'?", options: ["Film", "Seat", "Ticket"], correct: 1, explanation: "der Platz means Seat." }
        ]
    },
    {
        id: "rl_market",
        title: "At the Weekly Market (Auf dem Wochenmarkt)",
        vocab: [
            { word: "der Stand", translation: "Market stall" },
            { word: "frisch", translation: "Fresh" },
            { word: "das Angebot", translation: "Offer / special deal" },
            { word: "das Kilo", translation: "Kilogram" },
            { word: "wechseln", translation: "To change / give change" }
        ],
        phrases: [
            { german: "Was kostet ein Kilo Tomaten?", english: "How much does a kilo of tomatoes cost?" },
            { german: "Die sind heute ganz frisch.", english: "These are very fresh today." },
            { german: "Geben Sie mir bitte ein halbes Kilo.", english: "Please give me half a kilo." },
            { german: "Kann ich mit Karte zahlen?", english: "Can I pay by card?" },
            { german: "Haben Sie etwas Kleingeld?", english: "Do you have any small change?" }
        ],
        dialogue: [
            { speaker: "Kundin", text: "Guten Morgen! Was kostet das Kilo Erdbeeren heute?", translation: "Good morning! How much does a kilo of strawberries cost today?" },
            { speaker: "Händler", text: "Guten Morgen! Nur drei Euro das Kilo. Die sind heute frisch aus der Region.", translation: "Good morning! Only three euros per kilo. They are fresh from the region today." },
            { speaker: "Kundin", text: "Sehr gut. Ich nehme zwei Kilo. Und die Äpfel da – wie viel kosten die?", translation: "Very good. I'll take two kilos. And those apples there – how much do they cost?" },
            { speaker: "Händler", text: "Zwei Euro fünfzig das Kilo. Heute im Angebot!", translation: "Two euros fifty per kilo. On special offer today!" },
            { speaker: "Kundin", text: "Perfekt. Dann nehme ich auch ein Kilo Äpfel.", translation: "Perfect. Then I'll also take a kilo of apples." }
        ],
        reading: {
            text: "Jeden Samstag geht Herr Patel auf den Markt in seiner Stadt. Er kauft gerne frisches Gemüse und Obst direkt vom Bauern. Heute kauft er Karotten, Salat und Paprika. Er bezahlt insgesamt sieben Euro fünfzig. Der Händler gibt ihm fünfzig Cent Wechselgeld zurück. Herr Patel findet den Markt viel besser als den Supermarkt.",
            translation: "Mr Patel goes to the market in his town every Saturday. He likes to buy fresh vegetables and fruit directly from the farmer. Today he buys carrots, lettuce and peppers. He pays seven euros fifty in total. The trader gives him fifty cents change. Mr Patel finds the market much better than the supermarket.",
            question: "Was kauft Herr Patel heute?",
            options: ["Obst und Brot", "Karotten, Salat und Paprika", "Tomaten und Erdbeeren"],
            correct: 1,
            explanation: "The text says: 'Heute kauft er Karotten, Salat und Paprika.'"
        },
        quiz: [
            { question: "Was kostet ein Kilo Erdbeeren im Dialog?", options: ["Zwei Euro", "Drei Euro", "Vier Euro"], correct: 1, explanation: "The trader says: 'Nur drei Euro das Kilo.'" },
            { question: "Woher kommen die Erdbeeren?", options: ["Aus dem Supermarkt", "Aus der Region", "Aus Spanien"], correct: 1, explanation: "He says: 'Die sind heute frisch aus der Region.'" },
            { question: "Wie viel kostet ein Kilo Äpfel?", options: ["Ein Euro fünfzig", "Zwei Euro fünfzig", "Drei Euro"], correct: 1, explanation: "He says: 'Zwei Euro fünfzig das Kilo.'" },
            { question: "Was bedeutet 'frisch'?", options: ["Expensive", "Fresh", "Heavy"], correct: 1, explanation: "frisch means Fresh." },
            { question: "Was bedeutet 'das Angebot'?", options: ["Request", "Special offer / deal", "Receipt"], correct: 1, explanation: "das Angebot means Offer / special deal." }
        ]
    },
    {
        id: "rl_landlord",
        title: "Talking to the Landlord (Mit dem Vermieter sprechen)",
        vocab: [
            { word: "der Vermieter", translation: "Landlord" },
            { word: "die Miete", translation: "Rent" },
            { word: "die Kaution", translation: "Deposit" },
            { word: "die Reparatur", translation: "Repair" },
            { word: "der Mietvertrag", translation: "Rental contract / lease" }
        ],
        phrases: [
            { german: "Die Heizung funktioniert nicht.", english: "The heating is not working." },
            { german: "Ich möchte die Wohnung kündigen.", english: "I would like to give notice on the apartment." },
            { german: "Wann kommt der Handwerker?", english: "When is the tradesman coming?" },
            { german: "Ich zahle die Miete am ersten des Monats.", english: "I pay the rent on the first of the month." },
            { german: "Kann ich einen Hund halten?", english: "Am I allowed to keep a dog?" }
        ],
        dialogue: [
            { speaker: "Mieter", text: "Guten Tag, Herr Becker. Ich habe ein Problem in der Wohnung.", translation: "Good day, Mr Becker. I have a problem in the apartment." },
            { speaker: "Vermieter", text: "Was ist passiert?", translation: "What has happened?" },
            { speaker: "Mieter", text: "Die Heizung im Schlafzimmer funktioniert nicht mehr. Es ist sehr kalt.", translation: "The heating in the bedroom is no longer working. It is very cold." },
            { speaker: "Vermieter", text: "Das tut mir leid. Ich schicke morgen früh einen Techniker.", translation: "I am sorry. I will send a technician tomorrow morning." },
            { speaker: "Mieter", text: "Danke. Um wie viel Uhr kommt er ungefähr?", translation: "Thank you. What time will he come approximately?" }
        ],
        reading: {
            text: "Frau Nowak wohnt seit zwei Jahren in ihrer Wohnung. Sie ist sehr zufrieden. Die Miete beträgt achthundert Euro pro Monat. Sie zahlt immer pünktlich. Letzten Monat gab es ein Problem: das Waschbecken war kaputt. Frau Nowak hat ihrem Vermieter eine E-Mail geschrieben. Der Handwerker kam am nächsten Tag und hat alles repariert.",
            translation: "Mrs Nowak has been living in her apartment for two years. She is very satisfied. The rent is eight hundred euros per month. She always pays on time. Last month there was a problem: the washbasin was broken. Mrs Nowak wrote her landlord an email. The tradesman came the next day and repaired everything.",
            question: "Was war das Problem bei Frau Nowak?",
            options: ["Die Heizung war kaputt", "Das Waschbecken war kaputt", "Die Küche war kaputt"],
            correct: 1,
            explanation: "The text says: 'das Waschbecken war kaputt.'"
        },
        quiz: [
            { question: "Was ist das Problem im Dialog?", options: ["Das Waschbecken ist kaputt", "Die Heizung funktioniert nicht", "Die Tür ist kaputt"], correct: 1, explanation: "The tenant says: 'Die Heizung im Schlafzimmer funktioniert nicht mehr.'" },
            { question: "Wann schickt der Vermieter den Techniker?", options: ["Heute Abend", "Morgen früh", "Übermorgen"], correct: 1, explanation: "The landlord says: 'Ich schicke morgen früh einen Techniker.'" },
            { question: "Wie hoch ist die Miete von Frau Nowak?", options: ["Sechshundert Euro", "Siebenhundert Euro", "Achthundert Euro"], correct: 2, explanation: "The reading says: 'Die Miete beträgt achthundert Euro pro Monat.'" },
            { question: "Was bedeutet 'die Kaution'?", options: ["Rent", "Deposit", "Repair"], correct: 1, explanation: "die Kaution means Deposit." },
            { question: "Was bedeutet 'der Mietvertrag'?", options: ["Landlord", "Rental contract", "Monthly fee"], correct: 1, explanation: "der Mietvertrag means Rental contract / lease." }
        ]
    },
    {
        id: "rl_language_school",
        title: "At the Language School (In der Sprachschule)",
        vocab: [
            { word: "sich anmelden", translation: "To register / sign up" },
            { word: "das Niveau", translation: "Level" },
            { word: "die Hausaufgaben", translation: "Homework" },
            { word: "der Unterricht", translation: "Lesson / class" },
            { word: "der Einstufungstest", translation: "Placement test" }
        ],
        phrases: [
            { german: "Ich möchte mich für einen Deutschkurs anmelden.", english: "I would like to sign up for a German course." },
            { german: "Welches Niveau ist für mich richtig?", english: "Which level is right for me?" },
            { german: "Wann findet der Unterricht statt?", english: "When does the class take place?" },
            { german: "Wie viele Schüler sind in der Klasse?", english: "How many students are in the class?" },
            { german: "Gibt es einen Einstufungstest?", english: "Is there a placement test?" }
        ],
        dialogue: [
            { speaker: "Student", text: "Guten Tag. Ich möchte mich für einen Deutschkurs anmelden.", translation: "Good day. I would like to sign up for a German course." },
            { speaker: "Sekretärin", text: "Herzlich willkommen! Haben Sie schon Deutschkenntnisse?", translation: "Welcome! Do you already have German skills?" },
            { speaker: "Student", text: "Ja, etwas. Ich lerne seit sechs Monaten und spreche Deutsch auf Niveau A2.", translation: "Yes, a little. I have been learning for six months and speak German at A2 level." },
            { speaker: "Sekretärin", text: "Dann empfehle ich den B1-Kurs. Wir haben einen kostenlosen Einstufungstest, wenn Sie möchten.", translation: "Then I recommend the B1 course. We have a free placement test if you would like." },
            { speaker: "Student", text: "Super! Wann kann ich den Test machen?", translation: "Great! When can I take the test?" }
        ],
        reading: {
            text: "Mei macht einen Deutschkurs an der Berliner Sprachschule. Der Kurs findet montags und mittwochs von neun bis elf Uhr statt. Es gibt vierzehn Schüler aus zehn verschiedenen Ländern. Der Lehrer heißt Herr Graf. Er gibt jede Woche Hausaufgaben auf. Mei findet die Aussprache schwierig, aber sie übt jeden Abend zu Hause.",
            translation: "Mei is doing a German course at the Berlin language school. The course takes place on Mondays and Wednesdays from nine to eleven. There are fourteen students from ten different countries. The teacher's name is Mr Graf. He assigns homework every week. Mei finds pronunciation difficult, but she practises every evening at home.",
            question: "Wann findet Meis Kurs statt?",
            options: ["Dienstags und donnerstags", "Montags und mittwochs", "Täglich"],
            correct: 1,
            explanation: "The text says: 'Der Kurs findet montags und mittwochs von neun bis elf Uhr statt.'"
        },
        quiz: [
            { question: "Welches Niveau hat der Student im Dialog?", options: ["A1", "A2", "B1"], correct: 1, explanation: "He says: 'spreche Deutsch auf Niveau A2.'" },
            { question: "Welchen Kurs empfiehlt die Sekretärin?", options: ["Den A2-Kurs", "Den B1-Kurs", "Den C1-Kurs"], correct: 1, explanation: "She says: 'empfehle ich den B1-Kurs.'" },
            { question: "Was kostet der Einstufungstest?", options: ["Zwanzig Euro", "Zehn Euro", "Nichts (kostenlos)"], correct: 2, explanation: "She says: 'einen kostenlosen Einstufungstest.'" },
            { question: "Was bedeutet 'sich anmelden'?", options: ["To graduate", "To sign up / register", "To study"], correct: 1, explanation: "sich anmelden means To register / sign up." },
            { question: "Was bedeutet 'der Einstufungstest'?", options: ["Final exam", "Placement test", "Progress report"], correct: 1, explanation: "der Einstufungstest means Placement test." }
        ]
    },
    {
        id: "rl_neighbours",
        title: "Talking to the Neighbours (Mit den Nachbarn sprechen)",
        vocab: [
            { word: "der Nachbar", translation: "Neighbour (male)" },
            { word: "der Lärm", translation: "Noise" },
            { word: "klingeln", translation: "To ring the doorbell" },
            { word: "sich beschweren", translation: "To complain" },
            { word: "entschuldigen", translation: "To excuse / apologise" }
        ],
        phrases: [
            { german: "Entschuldigung, darf ich kurz stören?", english: "Excuse me, may I disturb you briefly?" },
            { german: "Es ist sehr laut bei Ihnen.", english: "It is very loud at your place." },
            { german: "Ich wollte mich nur vorstellen.", english: "I just wanted to introduce myself." },
            { german: "Wir machen nach zehn Uhr keinen Lärm mehr.", english: "We will not make any more noise after ten o'clock." },
            { german: "Schönen Abend noch!", english: "Have a nice evening!" }
        ],
        dialogue: [
            { speaker: "Nachbar A", text: "Entschuldigung. Ich bin Ihr neuer Nachbar. Ich wohne seit dieser Woche in Wohnung 4B.", translation: "Excuse me. I am your new neighbour. I have been living in apartment 4B since this week." },
            { speaker: "Nachbar B", text: "Oh, hallo! Willkommen im Haus. Ich bin Frau Lehmann.", translation: "Oh, hello! Welcome to the building. I am Mrs Lehmann." },
            { speaker: "Nachbar A", text: "Danke. Ich wollte mich nur kurz vorstellen. Falls ich zu laut bin, sagen Sie mir bitte Bescheid.", translation: "Thank you. I just wanted to introduce myself briefly. If I am too loud, please let me know." },
            { speaker: "Nachbar B", text: "Sehr freundlich von Ihnen! Wir machen hier ab 22 Uhr Nachtruhe.", translation: "Very kind of you! We observe quiet hours here from 10 PM." },
            { speaker: "Nachbar A", text: "Verstanden. Das respektiere ich natürlich.", translation: "Understood. I will of course respect that." }
        ],
        reading: {
            text: "Carlos zieht in eine neue Wohnung. Sein Nachbar heißt Herr Fischer. Am ersten Tag klingelt Carlos bei Herrn Fischer und stellt sich vor. Er bringt auch einen kleinen Kuchen mit. Herr Fischer ist sehr nett und lädt Carlos auf einen Kaffee ein. Sie sprechen über das Haus und die Nachbarschaft. Carlos ist froh, einen freundlichen Nachbarn zu haben.",
            translation: "Carlos moves into a new apartment. His neighbour's name is Mr Fischer. On the first day Carlos rings Mr Fischer's doorbell and introduces himself. He also brings a small cake. Mr Fischer is very nice and invites Carlos in for a coffee. They talk about the building and the neighbourhood. Carlos is glad to have a friendly neighbour.",
            question: "Was bringt Carlos mit, als er seinen Nachbarn besucht?",
            options: ["Eine Flasche Wein", "Einen kleinen Kuchen", "Blumen"],
            correct: 1,
            explanation: "The text says: 'Er bringt auch einen kleinen Kuchen mit.'"
        },
        quiz: [
            { question: "In welcher Wohnung lebt der neue Nachbar im Dialog?", options: ["4A", "4B", "3B"], correct: 1, explanation: "He says: 'Ich wohne seit dieser Woche in Wohnung 4B.'" },
            { question: "Wie heißt die Nachbarin im Dialog?", options: ["Frau Müller", "Frau Lehmann", "Frau Fischer"], correct: 1, explanation: "She says: 'Ich bin Frau Lehmann.'" },
            { question: "Ab wann gilt Nachtruhe im Haus?", options: ["Ab 21 Uhr", "Ab 22 Uhr", "Ab 23 Uhr"], correct: 1, explanation: "She says: 'ab 22 Uhr Nachtruhe.'" },
            { question: "Was bedeutet 'der Lärm'?", options: ["Noise", "Complaint", "Doorbell"], correct: 0, explanation: "der Lärm means Noise." },
            { question: "Was bedeutet 'sich beschweren'?", options: ["To introduce oneself", "To complain", "To apologise"], correct: 1, explanation: "sich beschweren means To complain." }
        ]
    }
];

// --- 5. GERMAN LISTENING STORY LIBRARY DATABASE ---
const LISTENING_STORIES_DATABASE = [
    {
        "id": "st_family",
        "title": "Meine Familie in Deutschland",
        "text": "Hallo, ich heiße Thomas. Ich wohne mit meiner Familie in Frankfurt. Meine Frau heißt Julia. Sie ist Lehrerin von Beruf und arbeitet an einer Grundschule. Wir haben zwei Kinder: einen Sohn und eine Tochter. Unser Sohn heißt Lucas und ist acht Jahre alt. Unsere Tochter heißt Emma und ist erst fünf. Am Wochenende gehen wir oft in den Park oder besuchen meine Großeltern. Wir essen gerne Pizza und spielen Spiele.",
        "translation": "Hello, my name is Thomas. I live with my family in Frankfurt. My wife is named Julia. She is a teacher by profession and works at an elementary school. We have two children: a son and a daughter. Our son is named Lucas and is eight years old. Our daughter is named Emma and is only five. On weekends we often go to the park or visit my grandparents. We like to eat pizza and play games.",
        "vocab": [
            {
                "word": "die Familie",
                "translation": "Family"
            },
            {
                "word": "die Kinder",
                "translation": "Children"
            },
            {
                "word": "die Großeltern",
                "translation": "Grandparents"
            },
            {
                "word": "das Wochenende",
                "translation": "Weekend"
            }
        ],
        "questions": [
            {
                "question": "Wo wohnt Thomas mit seiner Familie?",
                "options": [
                    "In Berlin",
                    "In Frankfurt",
                    "In München"
                ],
                "correct": 1,
                "explanation": "Thomas says: 'Ich wohne mit meiner Familie in Frankfurt.'"
            },
            {
                "question": "Was ist Julia von Beruf?",
                "options": [
                    "Ärztin",
                    "Lehrerin",
                    "Verkäuferin"
                ],
                "correct": 1,
                "explanation": "Julia is a teacher: 'Sie ist Lehrerin von Beruf.'"
            },
            {
                "question": "Wie viele Kinder haben Thomas und Julia?",
                "options": [
                    "Ein Kind",
                    "Zwei Kinder",
                    "Drei Kinder"
                ],
                "correct": 1,
                "explanation": "They have a son and a daughter: 'Wir haben zwei Kinder.'"
            },
            {
                "question": "Wie alt ist der Sohn Lucas?",
                "options": [
                    "Fünf Jahre",
                    "Acht Jahre",
                    "Zehn Jahre"
                ],
                "correct": 1,
                "explanation": "Lucas is eight: 'Lucas ... ist acht Jahre alt.'"
            },
            {
                "question": "Was machen sie oft am Wochenende?",
                "options": [
                    "Sie gehen in den Park",
                    "Sie arbeiten",
                    "Sie fliegen nach Indien"
                ],
                "correct": 0,
                "explanation": "On weekends they go to the park: 'Am Wochenende gehen wir oft in den Park.'"
            },
            {
                "question": "Wie heißt die Ehefrau von Thomas?",
                "options": [
                    "Emma",
                    "Julia",
                    "Lisa"
                ],
                "correct": 1,
                "explanation": "Julia is the wife: 'Meine Frau heißt Julia.'"
            },
            {
                "question": "Wie alt ist die Tochter Emma?",
                "options": [
                    "Drei Jahre",
                    "Fünf Jahre",
                    "Acht Jahre"
                ],
                "correct": 1,
                "explanation": "Emma is 5: 'Emma und ist erst fünf.'"
            },
            {
                "question": "Wen besuchen sie oft am Wochenende?",
                "options": [
                    "Die Lehrerin",
                    "Die Großeltern",
                    "Die Kinder"
                ],
                "correct": 1,
                "explanation": "They visit grandparents: 'besuchen meine Großeltern.'"
            },
            {
                "question": "Was essen Thomas und seine Familie gerne?",
                "options": [
                    "Pizza",
                    "Döner",
                    "Fisch"
                ],
                "correct": 0,
                "explanation": "They like pizza: 'Wir essen gerne Pizza.'"
            },
            {
                "question": "Was machen sie gerne zusammen?",
                "options": [
                    "Spiele spielen",
                    "Kino gehen",
                    "Deutsch lernen"
                ],
                "correct": 0,
                "explanation": "They play games: 'und spielen Spiele.'"
            }
        ]
    },
    {
        "id": "st_shopping",
        "title": "Einkaufen auf dem Markt",
        "text": "Guten Tag, Herr Becker! Was möchten Sie heute kaufen? - Guten Tag, Frau Mayer. Ich brauche heute frisches Gemüse. Haben Sie Tomaten und Kartoffeln? - Ja, natürlich. Die Tomaten kosten zwei Euro das Kilo, und die Kartoffeln kosten ein Euro fünfzig. - Gut, ich nehme ein Kilo Tomaten und zwei Kilo Kartoffeln. Haben Sie auch Obst? - Ja, die Bananen sind heute im Angebot. - Wunderbar, geben Sie mir bitte auch vier Bananen. Wie viel macht das zusammen? - Das macht genau sechs Euro.",
        "translation": "Good day, Mr Becker! What would you like to buy today? - Good day, Mrs Mayer. I need fresh vegetables today. Do you have tomatoes and potatoes? - Yes, of course. The tomatoes cost two euros a kilo, and the potatoes cost one euro fifty. - Good, I'll take a kilo of tomatoes and two kilos of potatoes. Do you have fruit too? - Yes, bananas are on sale today. - Wonderful, please give me four bananas too. How much does that make altogether? - That makes exactly six euros.",
        "vocab": [
            {
                "word": "einkaufen",
                "translation": "To shop"
            },
            {
                "word": "das Gemüse",
                "translation": "Vegetables"
            },
            {
                "word": "das Obst",
                "translation": "Fruit"
            },
            {
                "word": "zusammen",
                "translation": "Altogether"
            }
        ],
        "questions": [
            {
                "question": "Was kauft Herr Becker auf dem Markt?",
                "options": [
                    "Fleisch und Milch",
                    "Gemüse und Obst",
                    "Brot und Käse"
                ],
                "correct": 1,
                "explanation": "He buys tomatoes, potatoes (Gemüse) and bananas (Obst)."
            },
            {
                "question": "Wie viel kosten die Tomaten pro Kilo?",
                "options": [
                    "Ein Euro fünfzig",
                    "Zwei Euro",
                    "Drei Euro"
                ],
                "correct": 1,
                "explanation": "The seller says: 'Die Tomaten kosten zwei Euro das Kilo.'"
            },
            {
                "question": "Wie viele Bananen kauft Herr Becker?",
                "options": [
                    "Zwei",
                    "Drei",
                    "Vier"
                ],
                "correct": 2,
                "explanation": "He asks for: 'vier Bananen'."
            },
            {
                "question": "Wie viel bezahlt Herr Becker insgesamt?",
                "options": [
                    "Fünf Euro",
                    "Sechs Euro",
                    "Acht Euro"
                ],
                "correct": 1,
                "explanation": "The seller says: 'Das macht genau sechs Euro.'"
            },
            {
                "question": "Was bedeutet das Wort 'Gemüse'?",
                "options": [
                    "Vegetables",
                    "Fruits",
                    "Sweets"
                ],
                "correct": 0,
                "explanation": "Gemüse means Vegetables."
            },
            {
                "question": "Wie heißt der Käufer?",
                "options": [
                    "Herr Becker",
                    "Frau Mayer",
                    "Thomas"
                ],
                "correct": 0,
                "explanation": "The seller says: 'Guten Tag, Herr Becker!'"
            },
            {
                "question": "Wie heißt die Verkäuferin?",
                "options": [
                    "Frau Schneider",
                    "Frau Mayer",
                    "Frau Becker"
                ],
                "correct": 1,
                "explanation": "Mr. Becker says: 'Guten Tag, Frau Mayer.'"
            },
            {
                "question": "Was braucht Herr Becker heute?",
                "options": [
                    "Frisches Gemüse",
                    "Fleisch",
                    "Brot und Milch"
                ],
                "correct": 0,
                "explanation": "He says: 'Ich brauche heute frisches Gemüse.'"
            },
            {
                "question": "Wie viel kosten die Kartoffeln pro Kilo?",
                "options": [
                    "Ein Euro",
                    "Ein Euro fünfzig",
                    "Zwei Euro"
                ],
                "correct": 1,
                "explanation": "The seller says: 'die Kartoffeln kosten ein Euro fünfzig.'"
            },
            {
                "question": "Was ist heute im Angebot?",
                "options": [
                    "Tomaten",
                    "Kartoffeln",
                    "Bananen"
                ],
                "correct": 2,
                "explanation": "The seller says: 'die Bananen sind heute im Angebot.'"
            }
        ]
    },
    {
        "id": "st_travel",
        "title": "Eine Reise mit dem Zug",
        "text": "Guten Tag. Ich möchte morgen nach Hamburg reisen. Wann fährt der nächste Zug? - Der ICE nach Hamburg fährt um neun Uhr vierzig von Gleis drei ab. - Muss ich auf der Reise umsteigen? - Nein, das ist eine direkte Verbindung. Der Zug kommt um dreizehr Uhr in Hamburg an. - Sehr gut. Was kostet eine Fahrkarte in der zweiten Klasse? - Die Fahrkarte kostet fünfzig Euro. - Gut, ich kaufe das Ticket. Kann ich mit Kreditkarte bezahlen? - Ja, natürlich.",
        "translation": "Good day. I would like to travel to Hamburg tomorrow. When does the next train leave? - The ICE to Hamburg departs at nine forty from platform three. - Do I have to transfer on the journey? - No, that is a direct connection. The train arrives in Hamburg at one PM. - Very good. How much is a ticket in second class? - The ticket costs fifty euros. - Good, I'll buy the ticket. Can I pay with a credit card? - Yes, of course.",
        "vocab": [
            {
                "word": "reisen",
                "translation": "To travel"
            },
            {
                "word": "umsteigen",
                "translation": "To transfer / change trains"
            },
            {
                "word": "direkt",
                "translation": "Direct"
            },
            {
                "word": "die Klasse",
                "translation": "Class"
            }
        ],
        "questions": [
            {
                "question": "Wohin möchte der Mann reisen?",
                "options": [
                    "Nach Berlin",
                    "Nach Hamburg",
                    "Nach München"
                ],
                "correct": 1,
                "explanation": "He says: 'Ich möchte morgen nach Hamburg reisen.'"
            },
            {
                "question": "Wann fährt der Zug ab?",
                "options": [
                    "Um 9:00 Uhr",
                    "Um 9:40 Uhr",
                    "Um 10:00 Uhr"
                ],
                "correct": 1,
                "explanation": "The officer says: 'um neun Uhr vierzig'."
            },
            {
                "question": "Muss der Fahrgast umsteigen?",
                "options": [
                    "Ja, in Hannover",
                    "Nein, es ist direkt",
                    "Ja, zweimal"
                ],
                "correct": 1,
                "explanation": "The officer says: 'Nein, das ist eine direkte Verbindung.'"
            },
            {
                "question": "Wie viel kostet die Fahrkarte?",
                "options": [
                    "30 Euro",
                    "50 Euro",
                    "60 Euro"
                ],
                "correct": 1,
                "explanation": "The ticket is 50 euros: 'fünfzig Euro'."
            },
            {
                "question": "Wie bezahlt der Mann?",
                "options": [
                    "In bar (cash)",
                    "Mit Kreditkarte",
                    "Er bezahlt online"
                ],
                "correct": 1,
                "explanation": "He asks: 'Kann ich mit Kreditkarte bezahlen?' -> 'Ja, natürlich.'"
            },
            {
                "question": "Wann möchte der Mann reisen?",
                "options": [
                    "Heute",
                    "Morgen",
                    "Nächste Woche"
                ],
                "correct": 1,
                "explanation": "He says: 'Ich möchte morgen nach Hamburg reisen.'"
            },
            {
                "question": "Welcher Zug fährt nach Hamburg?",
                "options": [
                    "Die U-Bahn",
                    "Der ICE",
                    "Der Bus"
                ],
                "correct": 1,
                "explanation": "The officer says: 'Der ICE nach Hamburg fährt...'"
            },
            {
                "question": "Von welchem Gleis fährt der Zug ab?",
                "options": [
                    "Gleis eins",
                    "Gleis drei",
                    "Gleis vier"
                ],
                "correct": 1,
                "explanation": "The officer says: 'von Gleis drei ab.'"
            },
            {
                "question": "Wann kommt der Zug in Hamburg an?",
                "options": [
                    "Um neun Uhr",
                    "Um dreizehn Uhr (13:00)",
                    "Um fünfzehn Uhr"
                ],
                "correct": 1,
                "explanation": "The officer says: 'Der Zug kommt um dreizehr Uhr in Hamburg an.'"
            },
            {
                "question": "Für welche Klasse kauft er die Fahrkarte?",
                "options": [
                    "Erste Klasse",
                    "Zweite Klasse",
                    "Dritte Klasse"
                ],
                "correct": 1,
                "explanation": "He asks: 'Was kostet eine Fahrkarte in der zweiten Klasse?'"
            }
        ]
    },
    {
        "id": "st_school",
        "title": "Im Deutschkurs",
        "text": "Hallo, ich bin Maria und komme aus Spanien. Ich lerne jetzt Deutsch in Berlin. Mein Kurs beginnt jeden Tag um neun Uhr morgens und endet um zwölf Uhr dreißig. Wir sind fünfzehn Schüler im Kurs aus verschiedenen Ländern wie Indien, Brasilien und China. Unser Lehrer heißt Herr Schmidt und ist sehr nett. Wir lernen Grammatik, sprechen viel und schreiben kleine E-Mails. In der Pause trinken wir Kaffee und essen Kekse. Nach dem Unterricht mache ich meine Hausaufgaben in der Bibliothek.",
        "translation": "Hello, I am Maria and I come from Spain. I am learning German in Berlin now. My course starts every day at nine o'clock in the morning and ends at twelve-thirty. We are fifteen students in the course from different countries like India, Brazil, and China. Our teacher is named Mr Schmidt and is very nice. We learn grammar, speak a lot, and write small emails. During the break we drink coffee and eat cookies. After class I do my homework in the library.",
        "vocab": [
            {
                "word": "der Kurs",
                "translation": "Course"
            },
            {
                "word": "verschieden",
                "translation": "Different"
            },
            {
                "word": "der Unterricht",
                "translation": "Class / Instruction"
            },
            {
                "word": "die Pause",
                "translation": "Break"
            }
        ],
        "questions": [
            {
                "question": "Woher kommt Maria?",
                "options": [
                    "Aus Indien",
                    "Aus Spanien",
                    "Aus Deutschland"
                ],
                "correct": 1,
                "explanation": "She says: 'ich bin Maria und komme aus Spanien.'"
            },
            {
                "question": "Wie lange dauert der Deutschkurs jeden Tag?",
                "options": [
                    "Zwei Stunden",
                    "Drei Stunden und dreißig Minuten",
                    "Fünf Stunden"
                ],
                "correct": 1,
                "explanation": "It runs from 9:00 to 12:30, which is 3.5 hours."
            },
            {
                "question": "Wie viele Schüler sind im Kurs?",
                "options": [
                    "Zehn Schüler",
                    "Fünfzehn Schüler",
                    "Zwanzig Schüler"
                ],
                "correct": 1,
                "explanation": "She says: 'Wir sind fünfzehn Schüler im Kurs.'"
            },
            {
                "question": "Was macht Maria nach dem Unterricht?",
                "options": [
                    "Sie geht schlafen",
                    "Sie macht Hausaufgaben in der Bibliothek",
                    "Sie geht arbeiten"
                ],
                "correct": 1,
                "explanation": "She says: 'mache ich meine Hausaufgaben in der Bibliothek.'"
            },
            {
                "question": "Was bedeutet das Wort 'verschieden'?",
                "options": [
                    "Different",
                    "Similar",
                    "Boring"
                ],
                "correct": 0,
                "explanation": "verschieden means Different."
            },
            {
                "question": "Wo lernt Maria Deutsch?",
                "options": [
                    "In Madrid",
                    "In Berlin",
                    "In London"
                ],
                "correct": 1,
                "explanation": "She says: 'Ich lerne jetzt Deutsch in Berlin.'"
            },
            {
                "question": "Um wie viel Uhr beginnt der Kurs?",
                "options": [
                    "Um acht Uhr",
                    "Um neun Uhr",
                    "Um zehn Uhr"
                ],
                "correct": 1,
                "explanation": "She says: 'Mein Kurs beginnt jeden Tag um neun Uhr morgens.'"
            },
            {
                "question": "Wie heißt der Deutschlehrer?",
                "options": [
                    "Herr Schmidt",
                    "Herr Thomas",
                    "Herr Becker"
                ],
                "correct": 0,
                "explanation": "She says: 'Unser Lehrer heißt Herr Schmidt.'"
            },
            {
                "question": "Was trinken die Schüler in der Pause?",
                "options": [
                    "Tee",
                    "Kaffee",
                    "Wasser"
                ],
                "correct": 1,
                "explanation": "She says: 'In der Pause trinken wir Kaffee...'"
            },
            {
                "question": "Was essen die Schüler in der Pause?",
                "options": [
                    "Kuchen",
                    "Kekse",
                    "Brötchen"
                ],
                "correct": 1,
                "explanation": "She says: 'In der Pause trinken wir Kaffee und essen Kekse.'"
            }
        ]
    },
    {
        "id": "st_work",
        "title": "Der Arbeitstag von Peter",
        "text": "Peter arbeitet als Ingenieur bei einer Autofirma in Stuttgart. Sein Arbeitstag beginnt früh. Er steht um sechs Uhr auf, trinkt einen Kaffee und fährt um sieben Uhr mit dem Bus zur Arbeit. Im Büro arbeitet er viel am Computer und schreibt E-Mails an Kollegen. Um zwölf Uhr macht er Mittagspause in der Kantine. Er isst ein Schnitzel mit Salat. Um siebzehn Uhr endet die Arbeit. Am Abend geht Peter im Supermarkt einkaufen oder macht Sport im Fitnessstudio. Er geht um zweiundzwanzig Uhr schlafen.",
        "translation": "Peter works as an engineer at a car company in Stuttgart. His workday starts early. He gets up at six AM, drinks a coffee, and goes to work by bus at seven AM. In the office, he works a lot on the computer and writes emails to colleagues. At twelve o'clock, he takes a lunch break in the canteen. He eats a schnitzel with salad. Work ends at five PM. In the evening, Peter goes shopping at the supermarket or does sports at the gym. He goes to sleep at ten PM.",
        "vocab": [
            {
                "word": "der Ingenieur",
                "translation": "Engineer"
            },
            {
                "word": "der Arbeitstag",
                "translation": "Workday"
            },
            {
                "word": "die Kantine",
                "translation": "Canteen"
            },
            {
                "word": "schlafen",
                "translation": "To sleep"
            }
        ],
        "questions": [
            {
                "question": "Als was arbeitet Peter?",
                "options": [
                    "Lehrer",
                    "Ingenieur",
                    "Verkäufer"
                ],
                "correct": 1,
                "explanation": "Peter works as an engineer: 'Peter arbeitet als Ingenieur...'"
            },
            {
                "question": "Wie fährt Peter zur Arbeit?",
                "options": [
                    "Mit dem Auto",
                    "Mit dem Bus",
                    "Mit der U-Bahn"
                ],
                "correct": 1,
                "explanation": "He goes by bus: 'fährt um sieben Uhr mit dem Bus zur Arbeit.'"
            },
            {
                "question": "Wann macht Peter Mittagspause?",
                "options": [
                    "Um 11:30 Uhr",
                    "Um 12:00 Uhr",
                    "Um 13:00 Uhr"
                ],
                "correct": 1,
                "explanation": "Lunch is at 12:00: 'Um zwölf Uhr macht er Mittagspause...'"
            },
            {
                "question": "Wann endet Peters Arbeitstag?",
                "options": [
                    "Um 16:00 Uhr",
                    "Um 17:00 Uhr (siebzehn Uhr)",
                    "Um 18:00 Uhr"
                ],
                "correct": 1,
                "explanation": "Work ends at 17:00: 'Um siebzehn Uhr endet die Arbeit.'"
            },
            {
                "question": "Was macht Peter am Abend?",
                "options": [
                    "Er lernt Deutsch",
                    "Er kauft im Supermarkt ein oder macht Sport",
                    "Er arbeitet im Büro"
                ],
                "correct": 1,
                "explanation": "He shops or does sports: 'geht Peter im Supermarkt einkaufen oder macht Sport...'"
            },
            {
                "question": "In welcher Stadt arbeitet Peter?",
                "options": [
                    "Frankfurt",
                    "Stuttgart",
                    "München"
                ],
                "correct": 1,
                "explanation": "He works: 'bei einer Autofirma in Stuttgart.'"
            },
            {
                "question": "Um wie viel Uhr steht Peter auf?",
                "options": [
                    "Um sechs Uhr",
                    "Um sieben Uhr",
                    "Um acht Uhr"
                ],
                "correct": 0,
                "explanation": "He gets up at six: 'Er steht um sechs Uhr auf.'"
            },
            {
                "question": "Was macht er im Büro am Computer?",
                "options": [
                    "Spiele spielen",
                    "E-Mails an Kollegen schreiben",
                    "Videos ansehen"
                ],
                "correct": 1,
                "explanation": "He writes emails: 'arbeitet er viel am Computer und schreibt E-Mails an Kollegen.'"
            },
            {
                "question": "Was isst Peter in der Kantine zu Mittag?",
                "options": [
                    "Pizza",
                    "Schnitzel mit Salat",
                    "Fisch mit Reis"
                ],
                "correct": 1,
                "explanation": "He eats: 'ein Schnitzel mit Salat.'"
            },
            {
                "question": "Um wie viel Uhr geht Peter schlafen?",
                "options": [
                    "Um zweiundzwanzig Uhr (22:00)",
                    "Um dreiundzwanzig Uhr",
                    "Um Mitternacht"
                ],
                "correct": 0,
                "explanation": "He goes to sleep at 22:00: 'Er geht um zweiundzwanzig Uhr schlafen.'"
            }
        ]
    },
    {
        "id": "st_doctor",
        "title": "Ein Besuch beim Arzt",
        "text": "Herr Schmidt hat seit drei Tagen starke Halsschmerzen und Fieber. Er fühlt sich schlapp und kann nicht arbeiten. Er ruft in der Arztpraxis an und bekommt einen Termin für zehn Uhr dreißig. Der Arzt untersucht Herrn Schmidt, schaut in seinen Hals und misst das Fieber. Er sagt: 'Sie haben eine Grippe. Sie müssen sich ausruhen.' Der Arzt gibt ihm ein Rezept für Tabletten und eine Krankmeldung für den Arbeitgeber für fünf Tage. Herr Schmidt kauft die Tabletten in der Apotheke nebenan.",
        "translation": "Mr. Schmidt has had a severe sore throat and fever for three days. He feels weak and cannot work. He calls the doctor's office and gets an appointment for ten-thirty. The doctor examines Mr. Schmidt, looks at his throat, and measures the fever. He says: 'You have the flu. You must rest.' The doctor gives him a prescription for tablets and a sick note for his employer for five days. Mr. Schmidt buys the tablets at the pharmacy next door.",
        "vocab": [
            {
                "word": "die Praxis",
                "translation": "Doctor's office"
            },
            {
                "word": "die Grippe",
                "translation": "Flu"
            },
            {
                "word": "die Krankmeldung",
                "translation": "Sick note"
            },
            {
                "word": "ausruhen",
                "translation": "To rest / relax"
            }
        ],
        "questions": [
            {
                "question": "Seit wie vielen Tagen ist Herr Schmidt krank?",
                "options": [
                    "Seit einem Tag",
                    "Seit drei Tagen",
                    "Seit einer Woche"
                ],
                "correct": 1,
                "explanation": "He has been sick for three days: 'seit drei Tagen Halsschmerzen und Fieber'."
            },
            {
                "question": "Für wie viel Uhr hat Herr Schmidt einen Termin?",
                "options": [
                    "Um 9:00 Uhr",
                    "Um 10:30 Uhr (zehn Uhr dreißig)",
                    "Um 11:00 Uhr"
                ],
                "correct": 1,
                "explanation": "His appointment is at 10:30: 'einen Termin für zehn Uhr dreißig'."
            },
            {
                "question": "Welche Krankheit diagnostiziert der Arzt?",
                "options": [
                    "Einen Schnupfen",
                    "Eine Grippe",
                    "Bauchschmerzen"
                ],
                "correct": 1,
                "explanation": "The doctor says: 'Sie haben eine Grippe.'"
            },
            {
                "question": "Für wie viele Tage bekommt er die Krankmeldung?",
                "options": [
                    "Für drei Tage",
                    "Für fünf Tage",
                    "Für eine Woche"
                ],
                "correct": 1,
                "explanation": "He gets a note for five days: 'Krankmeldung... für fünf Tage'."
            },
            {
                "question": "Wo kauft Herr Schmidt die verschriebenen Tabletten?",
                "options": [
                    "Im Supermarkt",
                    "In der Apotheke nebenan",
                    "Online"
                ],
                "correct": 1,
                "explanation": "He buys them at the pharmacy next door: 'in der Apotheke nebenan'."
            },
            {
                "question": "Welche Symptome hat Herr Schmidt?",
                "options": [
                    "Kopfschmerzen",
                    "Halsschmerzen und Fieber",
                    "Bauchschmerzen"
                ],
                "correct": 1,
                "explanation": "He has: 'Halsschmerzen und Fieber.'"
            },
            {
                "question": "Kann Herr Schmidt heute arbeiten?",
                "options": [
                    "Ja, im Büro",
                    "Nein, er kann nicht arbeiten",
                    "Ja, von zu Hause"
                ],
                "correct": 1,
                "explanation": "He cannot work: 'kann nicht arbeiten.'"
            },
            {
                "question": "Was macht der Arzt bei der Untersuchung?",
                "options": [
                    "Er untersucht den Hals und misst das Fieber",
                    "Er gibt eine Spritze",
                    "Er operiert"
                ],
                "correct": 0,
                "explanation": "The doctor examines him: 'schaut in seinen Hals und misst das Fieber.'"
            },
            {
                "question": "Was sagt der Arzt, was Herr Schmidt tun muss?",
                "options": [
                    "Er muss Sport machen",
                    "Er muss sich ausruhen",
                    "Er muss arbeiten"
                ],
                "correct": 1,
                "explanation": "The doctor says: 'Sie müssen sich ausruhen.'"
            },
            {
                "question": "Für wen ist die Krankmeldung gedacht?",
                "options": [
                    "Für den Arbeitgeber",
                    "Für die Apotheke",
                    "Für die Familie"
                ],
                "correct": 0,
                "explanation": "It is for the employer: 'eine Krankmeldung für den Arbeitgeber'."
            }
        ]
    },
    {
        "id": "st_restaurant",
        "title": "Ein Abendessen im Restaurant",
        "text": "Sarah und Daniel gehen am Samstagabend in ein italienisches Restaurant. Sie haben einen Tisch reserviert. Der Kellner begrüßt sie freundlich und bringt die Speisekarte. Sarah bestellt eine Pizza mit Gemüse und ein Mineralwasser. Daniel nimmt Nudeln mit Fisch und trinkt ein großes Bier. Das Restaurant ist voll und es gibt leise Musik. Das Essen schmeckt hervorragend. Zum Schluss sagt Daniel zum Kellner: 'Zahlen, bitte!' Daniel bezahlt die Rechnung mit Karte und gibt fünf Euro Trinkgeld.",
        "translation": "Sarah and Daniel go to an Italian restaurant on Saturday evening. They have reserved a table. The waiter greets them friendly and brings the menu. Sarah orders a pizza with vegetables and a mineral water. Daniel takes pasta with fish and drinks a big beer. The restaurant is full and there is soft music. The food tastes excellent. In the end, Daniel says to the waiter: 'Pay, please!' Daniel pays the bill by card and gives five euros tip.",
        "vocab": [
            {
                "word": "der Tisch",
                "translation": "Table"
            },
            {
                "word": "freundlich",
                "translation": "Friendly"
            },
            {
                "word": "das Trinkgeld",
                "translation": "Tip"
            },
            {
                "word": "schmecken",
                "translation": "To taste"
            }
        ],
        "questions": [
            {
                "question": "Wann gehen Sarah und Daniel ins Restaurant?",
                "options": [
                    "Am Freitagabend",
                    "Am Samstagabend",
                    "Am Sonntagmittag"
                ],
                "correct": 1,
                "explanation": "They go on Saturday evening: 'am Samstagabend.'"
            },
            {
                "question": "Was bestellt Sarah zum Essen?",
                "options": [
                    "Nudeln mit Fisch",
                    "Pizza mit Gemüse",
                    "Ein Steak"
                ],
                "correct": 1,
                "explanation": "Sarah orders a pizza with vegetables: 'eine Pizza mit Gemüse.'"
            },
            {
                "question": "Was trinkt Daniel?",
                "options": [
                    "Mineralwasser",
                    "Bier",
                    "Wein"
                ],
                "correct": 1,
                "explanation": "Daniel drinks beer: 'trinkt ein großes Bier'."
            },
            {
                "question": "Wie bezahlt Daniel die Rechnung?",
                "options": [
                    "In bar (cash)",
                    "Mit Karte",
                    "Er vergisst zu bezahlen"
                ],
                "correct": 1,
                "explanation": "He pays by card: 'bezahlt die Rechnung mit Karte.'"
            },
            {
                "question": "Wie viel Trinkgeld gibt Daniel?",
                "options": [
                    "Zwei Euro",
                    "Fünf Euro",
                    "Kein Trinkgeld"
                ],
                "correct": 1,
                "explanation": "He tips five euros: 'gibt fünf Euro Trinkgeld.'"
            },
            {
                "question": "Was für ein Restaurant besuchen sie?",
                "options": [
                    "Ein deutsches Restaurant",
                    "Ein italienisches Restaurant",
                    "Ein indisches Restaurant"
                ],
                "correct": 1,
                "explanation": "They visit: 'ein italienisches Restaurant.'"
            },
            {
                "question": "Hatten sie eine Reservierung?",
                "options": [
                    "Ja, sie haben einen Tisch reserviert",
                    "Nein, sie gehen ohne Reservierung",
                    "Sie essen zu Hause"
                ],
                "correct": 0,
                "explanation": "They reserved: 'Sie haben einen Tisch reserviert.'"
            },
            {
                "question": "Was bringt der Kellner zuerst?",
                "options": [
                    "Das Essen",
                    "Die Speisekarte",
                    "Die Rechnung"
                ],
                "correct": 1,
                "explanation": "The waiter brings the menu: 'bringt die Speisekarte.'"
            },
            {
                "question": "Was bestellt Daniel zum Essen?",
                "options": [
                    "Pizza mit Gemüse",
                    "Nudeln mit Fisch",
                    "Salat"
                ],
                "correct": 1,
                "explanation": "Daniel orders pasta: 'Daniel nimmt Nudeln mit Fisch.'"
            },
            {
                "question": "Wie schmeckt das Essen im Restaurant?",
                "options": [
                    "Es schmeckt nicht gut",
                    "Es schmeckt hervorragend",
                    "Es ist zu scharf"
                ],
                "correct": 1,
                "explanation": "The food tastes excellent: 'Das Essen schmeckt hervorragend.'"
            }
        ]
    },
    {
        "id": "st_holiday",
        "title": "Sommerurlaub in Spanien",
        "text": "Im August hat Familie Wagner Urlaub. Sie fliegen für zwei Wochen nach Spanien ans Meer. Sie wohnen in einem schönen Hotel direkt am Strand. Jeden Morgen frühstücken sie auf der Terrasse mit Blick auf das Meer. Am Tag baden die Kinder im Wasser, und die Eltern lesen Bücher unter dem Sonnenschirm. Am Nachmittag machen sie Ausflüge in die Stadt oder essen Eis. Am Abend gehen sie in einem Restaurant am Hafen Fisch essen. Der Urlaub ist sehr schön und alle sind glücklich.",
        "translation": "In August, the Wagner family has a vacation. They fly to Spain by the sea for two weeks. They stay in a beautiful hotel right on the beach. Every morning they eat breakfast on the terrace with a view of the sea. During the day the children swim in the water, and the parents read books under the parasol. In the afternoon they make excursions to the city or eat ice cream. In the evening they go eat fish at a restaurant by the harbor. The vacation is very beautiful and everyone is happy.",
        "vocab": [
            {
                "word": "der Urlaub",
                "translation": "Vacation"
            },
            {
                "word": "der Strand",
                "translation": "Beach"
            },
            {
                "word": "der Ausflug",
                "translation": "Excursion / Trip"
            },
            {
                "word": "glücklich",
                "translation": "Happy"
            }
        ],
        "questions": [
            {
                "question": "Wann hat Familie Wagner Urlaub?",
                "options": [
                    "Im Juni",
                    "Im Juli",
                    "Im August"
                ],
                "correct": 2,
                "explanation": "They have vacation in August: 'Im August hat Familie Wagner Urlaub.'"
            },
            {
                "question": "Wie lange bleibt die Familie in Spanien?",
                "options": [
                    "Eine Woche",
                    "Zwei Wochen",
                    "Einen Monat"
                ],
                "correct": 1,
                "explanation": "They stay for two weeks: 'für zwei Wochen nach Spanien.'"
            },
            {
                "question": "Wo frühstückt die Familie jeden Morgen?",
                "options": [
                    "Im Zimmer",
                    "Auf der Terrasse mit Meerblick",
                    "Im Bett"
                ],
                "correct": 1,
                "explanation": "They breakfast on the terrace: 'frühstücken sie auf der Terrasse mit Blick auf das Meer.'"
            },
            {
                "question": "Was machen die Eltern am Tag?",
                "options": [
                    "Sie schwimmen",
                    "Sie lesen Bücher unter dem Sonnenschirm",
                    "Sie schlafen"
                ],
                "correct": 1,
                "explanation": "The parents read: 'die Eltern lesen Bücher unter dem Sonnenschirm.'"
            },
            {
                "question": "Was essen sie am Abend am Hafen?",
                "options": [
                    "Pizza",
                    "Fisch",
                    "Kuchen"
                ],
                "correct": 1,
                "explanation": "They eat fish: 'gehen sie in einem Restaurant am Hafen Fisch essen.'"
            },
            {
                "question": "Wohin reist Familie Wagner?",
                "options": [
                    "Nach Italien",
                    "Nach Spanien",
                    "Nach Kroatien"
                ],
                "correct": 1,
                "explanation": "They go to Spain: 'fliegen für zwei Wochen nach Spanien.'"
            },
            {
                "question": "Wie reist die Familie nach Spanien?",
                "options": [
                    "Mit dem Zug",
                    "Mit dem Flugzeug (sie fliegen)",
                    "Mit dem Auto"
                ],
                "correct": 1,
                "explanation": "They fly: 'Sie fliegen für zwei Wochen nach Spanien.'"
            },
            {
                "question": "Wo liegt ihr Hotel?",
                "options": [
                    "In den Bergen",
                    "Direkt am Strand",
                    "Im Stadtzentrum"
                ],
                "correct": 1,
                "explanation": "The hotel is at the beach: 'direkt am Strand.'"
            },
            {
                "question": "Was machen die children am Tag?",
                "options": [
                    "Sie lesen Bücher",
                    "Sie baden im Wasser",
                    "Sie schlafen"
                ],
                "correct": 1,
                "explanation": "The children swim: 'baden die Kinder im Wasser.'"
            },
            {
                "question": "Wie fühlen sich alle im Urlaub?",
                "options": [
                    "Sie sind traurig",
                    "Alle sind glücklich",
                    "Sie sind müde"
                ],
                "correct": 1,
                "explanation": "Everyone is happy: 'und alle sind glücklich.'"
            }
        ]
    },
    {
        "id": "st_routine",
        "title": "Der Tagesablauf von Nivedya",
        "text": "Mein Name ist Nivedya. Ich wohne in Deutschland und mein tag beginnt um sieben Uhr. Ich stehe auf, dusche und koche das Frühstück. Meistens esse ich Müsli mit Milch und trinke einen grünen Tee. Um acht Uhr dreißig fahre ich mit der U-Bahn zum Sprachkurs. Der Deutschunterricht dauert von neun bis zwölf Uhr. Nach dem Kurs esse ich in einem kleinen Café ein Sandwich und treffe meine Freundin Kavya. Am Nachmittag lerne ich zu Hause Deutsch und mache Hausaufgaben. Am Abend lese ich ein Buch oder sehe einen Film.",
        "translation": "My name is Nivedya. I live in Germany and my day starts at seven AM. I get up, shower, and cook breakfast. Mostly I eat muesli with milk and drink a green tea. At eight-thirty I go to the language course by subway. The German class lasts from nine to twelve o'clock. After class I eat a sandwich in a small café and meet my friend Kavya. In the afternoon I study German at home and do homework. In the evening I read a book or watch a movie.",
        "vocab": [
            {
                "word": "aufstehen",
                "translation": "To get up"
            },
            {
                "word": "duschen",
                "translation": "To shower"
            },
            {
                "word": "treffen",
                "translation": "To meet"
            },
            {
                "word": "nachmittag",
                "translation": "Afternoon"
            }
        ],
        "questions": [
            {
                "question": "Um wie viel Uhr beginnt Nivedyas Tag?",
                "options": [
                    "Um 6:00 Uhr",
                    "Um 7:00 Uhr",
                    "Um 8:00 Uhr"
                ],
                "correct": 1,
                "explanation": "Her day starts at 7:00: 'mein Tag beginnt um sieben Uhr'."
            },
            {
                "question": "Was isst Nivedya meistens zum Frühstück?",
                "options": [
                    "Brot mit Käse",
                    "Müsli mit Milch",
                    "Eier mit Speck"
                ],
                "correct": 1,
                "explanation": "She eats muesli: 'Meistens esse ich Müsli mit Milch...'"
            },
            {
                "question": "Wie fährt Nivedya zum Sprachkurs?",
                "options": [
                    "Mit dem Auto",
                    "Mit der U-Bahn",
                    "Mit dem Fahrrad"
                ],
                "correct": 1,
                "explanation": "She rides the subway: 'fahre ich mit der U-Bahn zum Sprachkurs.'"
            },
            {
                "question": "Wen trifft Nivedya nach dem Deutschunterricht?",
                "options": [
                    "Ihren Lehrer",
                    "Ihre Freundin Kavya",
                    "Ihre Schwester"
                ],
                "correct": 1,
                "explanation": "She meets her friend Kavya: 'und treffe meine Freundin Kavya.'"
            },
            {
                "question": "Was macht Nivedya am Nachmittag?",
                "options": [
                    "Sie schläft",
                    "Sie lernt zu Hause Deutsch und macht Hausaufgaben",
                    "Sie geht einkaufen"
                ],
                "correct": 1,
                "explanation": "She studies at home: 'Am Nachmittag lerne ich zu Hause Deutsch...'"
            },
            {
                "question": "In welchem Land wohnt Nivedya?",
                "options": [
                    "In Spanien",
                    "In Deutschland",
                    "In Indien"
                ],
                "correct": 1,
                "explanation": "She lives in Germany: 'Ich wohne in Deutschland.'"
            },
            {
                "question": "Was trinkt Nivedya zum Frühstück?",
                "options": [
                    "Kaffee",
                    "Grünen Tee",
                    "Orangensaft"
                ],
                "correct": 1,
                "explanation": "She drinks green tea: 'trinke einen grünen Tee.'"
            },
            {
                "question": "Von wann bis wann dauert der Sprachkurs?",
                "options": [
                    "Von 8:00 bis 12:00 Uhr",
                    "Von 9:00 bis 12:00 Uhr",
                    "Von 9:00 bis 13:00 Uhr"
                ],
                "correct": 1,
                "explanation": "Class is from 9 to 12: 'von neun bis zwölf Uhr.'"
            },
            {
                "question": "Wo isst Nivedya nach dem Sprachkurs ein Sandwich?",
                "options": [
                    "Zu Hause",
                    "In einem kleinen Café",
                    "In der Schule"
                ],
                "correct": 1,
                "explanation": "She eats in a café: 'esse ich in einem kleinen Café ein Sandwich.'"
            },
            {
                "question": "Was macht Nivedya am Abend?",
                "options": [
                    "Sie geht ins Fitnessstudio",
                    "Sie liest ein Buch oder sieht einen Film",
                    "Sie arbeitet"
                ],
                "correct": 1,
                "explanation": "She reads or watches a film: 'Am Abend lese ich ein Buch oder sehe einen Film.'"
            }
        ]
    },
    {
        "id": "st_friends",
        "title": "Ein Treffen mit Freunden",
        "text": "Hallo, ich bin Lisa. Heute treffen sich meine Freunde im Stadtpark. Das Wetter ist sehr schön: die Sonne scheint und es ist warm. Wir machen ein Picknick auf der Wiese. Mein Freund David bringt einen Kuchen mit, und Emma bringt Säfte und Wasser. Wir essen zusammen, unterhalten uns über Musik und lachen viel. Später spielen wir Volleyball. Am Abend gehen wir zusammen in die Stadt, um ein Eis zu essen. Es ist ein toller Tag mit guten Freunden.",
        "translation": "Hello, I am Lisa. Today my friends are meeting in the city park. The weather is very beautiful: the sun is shining and it is warm. We are having a picnic on the meadow. My friend David brings a cake, and Emma brings juices and water. We eat together, talk about music, and laugh a lot. Later we play volleyball. In the evening we go downtown together to eat an ice cream. It is a great day with good friends.",
        "vocab": [
            {
                "word": "der Park",
                "translation": "Park"
            },
            {
                "word": "das Picknick",
                "translation": "Picnic"
            },
            {
                "word": "unterhalten",
                "translation": "To chat / talk"
            },
            {
                "word": "lachen",
                "translation": "To laugh"
            }
        ],
        "questions": [
            {
                "question": "Wo treffen sich Lisa und ihre Freunde?",
                "options": [
                    "Im Restaurant",
                    "Im Stadtpark",
                    "Zu Hause"
                ],
                "correct": 1,
                "explanation": "They meet in the park: 'treffen sich meine Freunde im Stadtpark.'"
            },
            {
                "question": "Wie ist das Wetter heute?",
                "options": [
                    "Es regnet",
                    "Es ist kalt und windig",
                    "Die Sonne scheint und es ist warm"
                ],
                "correct": 2,
                "explanation": "The sun is shining and warm: 'die Sonne scheint und es ist warm.'"
            },
            {
                "question": "Was bringt David mit?",
                "options": [
                    "Säfte",
                    "Einen Kuchen",
                    "Einen Ball"
                ],
                "correct": 1,
                "explanation": "David brings a cake: 'David bringt einen Kuchen mit'."
            },
            {
                "question": "Welchen Sport spielen sie im Park?",
                "options": [
                    "Fußball",
                    "Volleyball",
                    "Tennis"
                ],
                "correct": 1,
                "explanation": "They play volleyball: 'Später spielen wir Volleyball.'"
            },
            {
                "question": "Was machen sie am Abend zusammen?",
                "options": [
                    "Sie gehen ins Kino",
                    "Sie essen ein Eis",
                    "Sie schlafen"
                ],
                "correct": 1,
                "explanation": "They eat ice cream: 'gehen wir zusammen... um ein Eis zu essen.'"
            },
            {
                "question": "Wie heißt die Erzählerin der Geschichte?",
                "options": [
                    "Emma",
                    "Lisa",
                    "Sarah"
                ],
                "correct": 1,
                "explanation": "Lisa is the narrator: 'Hallo, ich bin Lisa.'"
            },
            {
                "question": "Wo machen sie ein Picknick?",
                "options": [
                    "Auf der Wiese im Park",
                    "Am Strand",
                    "Im Restaurant"
                ],
                "correct": 0,
                "explanation": "They picnic on the meadow: 'Wir machen ein Picknick auf der Wiese.'"
            },
            {
                "question": "Was bringt Emma zum Picknick mit?",
                "options": [
                    "Einen Kuchen",
                    "Säfte und Wasser",
                    "Pizza"
                ],
                "correct": 1,
                "explanation": "Emma brings juice and water: 'Emma bringt Säfte und Wasser.'"
            },
            {
                "question": "Worüber unterhalten sich die Freunde beim Picknick?",
                "options": [
                    "Über die Arbeit",
                    "Über Musik",
                    "Über Deutsch lernen"
                ],
                "correct": 1,
                "explanation": "They talk about music: 'unterhalten uns über Musik.'"
            },
            {
                "question": "Wohin gehen sie am Abend, um ein Eis zu essen?",
                "options": [
                    "In den Park",
                    "In die Stadt",
                    "Nach Hause"
                ],
                "correct": 1,
                "explanation": "They go to the city: 'gehen wir zusammen in die Stadt...'"
            }
        ]
    },
    {
        "id": "st_train_station",
        "title": "Am Bahnhof (Train Station)",
        "text": "Hallo! Ich stehe am Bahnhof in München. Ich möchte ein Ticket nach Berlin kaufen. Der Fahrkartenautomat ist hier auf der rechten Seite. Das Ticket kostet achtzig Euro. Der Zug fährt um elf Uhr von Gleis vier ab. Ich muss auf dieser Reise nicht umsteigen, es ist ein direkter Zug. Ich habe auch eine große Tasche und einen Rucksack dabei. Ich kaufe noch ein Brötchen und eine Flasche Wasser für die Fahrt. Der Zug kommt um sechzehn Uhr in Berlin an. Ich freue mich auf die Reise!",
        "translation": "Hello! I am standing at the train station in Munich. I want to buy a ticket to Berlin. The ticket machine is here on the right side. The ticket costs eighty euros. The train leaves at eleven o'clock from platform four. I don't have to transfer on this journey, it is a direct train. I also have a big bag and a backpack with me. I'll buy a bread roll and a bottle of water for the journey. The train arrives in Berlin at sixteen o'clock. I look forward to the trip!",
        "vocab": [
            {
                "word": "der Bahnhof",
                "translation": "Train station"
            },
            {
                "word": "das Ticket",
                "translation": "Ticket"
            },
            {
                "word": "das Gleis",
                "translation": "Platform"
            },
            {
                "word": "direkt",
                "translation": "Direct"
            }
        ],
        "questions": [
            {
                "question": "An welchem Bahnhof steht der Sprecher?",
                "options": [
                    "In Berlin",
                    "In München",
                    "In Frankfurt"
                ],
                "correct": 1,
                "explanation": "He is in Munich: 'Ich stehe am Bahnhof in München.'"
            },
            {
                "question": "Wohin möchte der Sprecher reisen?",
                "options": [
                    "Nach Berlin",
                    "Nach München",
                    "Nach Hamburg"
                ],
                "correct": 0,
                "explanation": "He wants to go to Berlin: 'Ich möchte ein Ticket nach Berlin kaufen.'"
            },
            {
                "question": "Wo befindet sich der Fahrkartenautomat?",
                "options": [
                    "Auf der linken Seite",
                    "Auf der rechten Seite",
                    "Im Zug"
                ],
                "correct": 1,
                "explanation": "It's on the right: 'Der Fahrkartenautomat ist hier auf der rechten Seite.'"
            },
            {
                "question": "Wie viel kostet das Ticket nach Berlin?",
                "options": [
                    "Fünfzig Euro",
                    "Achzig Euro (80)",
                    "Hundert Euro"
                ],
                "correct": 1,
                "explanation": "It costs 80 euros: 'Das Ticket kostet achtzig Euro.'"
            },
            {
                "question": "Wann fährt der Zug ab?",
                "options": [
                    "Um zehn Uhr",
                    "Um elf Uhr",
                    "Um zwölf Uhr"
                ],
                "correct": 1,
                "explanation": "The train leaves at 11:00: 'Der Zug fährt um elf Uhr ... ab.'"
            },
            {
                "question": "Von welchem Gleis fährt der Zug ab?",
                "options": [
                    "Gleis drei",
                    "Gleis vier",
                    "Gleis fünf"
                ],
                "correct": 1,
                "explanation": "It departs from platform 4: 'von Gleis vier ab.'"
            },
            {
                "question": "Muss der Sprecher während der Fahrt umsteigen?",
                "options": [
                    "Ja, einmal",
                    "Nein, es ist ein direkter Zug",
                    "Ja, zweimal"
                ],
                "correct": 1,
                "explanation": "No transfer needed: 'Ich muss auf dieser Reise nicht umsteigen.'"
            },
            {
                "question": "Welches Gepäck hat der Sprecher dabei?",
                "options": [
                    "Nur eine kleine Tasche",
                    "Eine große Tasche und einen Rucksack",
                    "Zwei große Koffer"
                ],
                "correct": 1,
                "explanation": "He has: 'eine große Tasche und einen Rucksack dabei.'"
            },
            {
                "question": "Was kauft er für die Fahrt zum Essen und Trinken?",
                "options": [
                    "Ein Brötchen und Wasser",
                    "Eine Pizza und Bier",
                    "Einen Apfel und Tee"
                ],
                "correct": 0,
                "explanation": "He buys a roll and water: 'Ich kaufe noch ein Brötchen und eine Flasche Wasser.'"
            },
            {
                "question": "Wann kommt der Zug in Berlin an?",
                "options": [
                    "Um fünfzehn Uhr",
                    "Um sechzehn Uhr (16:00)",
                    "Um siebzehn Uhr"
                ],
                "correct": 1,
                "explanation": "Arrival is at 16:00: 'Der Zug kommt um sechzehn Uhr in Berlin an.'"
            }
        ]
    },
    {
        "id": "st_bus_station",
        "title": "An der Bushaltestelle (Bus Station)",
        "text": "Ich warte an der Bushaltestelle in der Hauptstraße. Der Bus Linie einhundertvier soll um acht Uhr fünfzehn kommen. Es ist schon acht Uhr zwanzig, also hat der Bus fünf Minuten Verspätung. Heute ist es sehr kalt und es regnet ein bisschen. Ein Ticket kostet zwei Euro achtzig. Man kann das Ticket direkt beim Busfahrer kaufen. Ich habe nur ein Fünfzig-Euro-Schein, aber der Busfahrer kann wechseln. Der Bus fährt bis zum Marktplatz. Dort steige ich aus und gehe zu Fuß zur Arbeit. Die Fahrt dauert fuffzehn Minuten.",
        "translation": "I am waiting at the bus stop on Main Street. The bus line one hundred and four is supposed to arrive at eight fifteen. It is already eight twenty, so the bus is five minutes late. Today it is very cold and it is raining a little. A ticket costs two euros eighty. You can buy the ticket directly from the bus driver. I only have a fifty-euro note, but the bus driver can make change. The bus goes to the market square. There I get off and walk to work. The ride takes fifteen minutes.",
        "vocab": [
            {
                "word": "die Bushaltestelle",
                "translation": "Bus stop"
            },
            {
                "word": "die Verspätung",
                "translation": "Delay"
            },
            {
                "word": "kalt",
                "translation": "Cold"
            },
            {
                "word": "wechseln",
                "translation": "To change money"
            }
        ],
        "questions": [
            {
                "question": "Wo wartet der Sprecher?",
                "options": [
                    "Am Bahnhof",
                    "An der Bushaltestelle in der Hauptstraße",
                    "Im Auto"
                ],
                "correct": 1,
                "explanation": "He waits at the bus stop: 'Ich warte an der Bushaltestelle in der Hauptstraße.'"
            },
            {
                "question": "Welche Buslinie möchte er nehmen?",
                "options": [
                    "Linie 100",
                    "Linie 104 (einhundertvier)",
                    "Linie 5"
                ],
                "correct": 1,
                "explanation": "Bus line 104: 'Der Bus Linie einhundertvier...'"
            },
            {
                "question": "Wann sollte der Bus planmäßig ankommen?",
                "options": [
                    "Um acht Uhr",
                    "Um acht Uhr fünfzehn",
                    "Um acht Uhr zwanzig"
                ],
                "correct": 1,
                "explanation": "Scheduled time is 8:15: 'soll um acht Uhr fünfzehn kommen.'"
            },
            {
                "question": "Wie viele Minuten Verspätung hat der Bus?",
                "options": [
                    "Keine Verspätung",
                    "Fünf Minuten Verspätung",
                    "Zehn Minuten Verspätung"
                ],
                "correct": 1,
                "explanation": "It is late by 5 minutes: 'also hat der Bus fünf Minuten Verspätung.'"
            },
            {
                "question": "Wie ist das Wetter heute?",
                "options": [
                    "Es ist heiß und sonnig",
                    "Es ist sehr kalt und regnet ein bisschen",
                    "Es schneit stark"
                ],
                "correct": 1,
                "explanation": "It is cold and raining: 'Heute ist es sehr kalt und es regnet ein bisschen.'"
            },
            {
                "question": "Wie viel kostet ein Busticket?",
                "options": [
                    "Zwei Euro",
                    "Zwei Euro achtzig",
                    "Drei Euro"
                ],
                "correct": 1,
                "explanation": "Ticket is 2.80: 'Ein Ticket kostet zwei Euro achtzig.'"
            },
            {
                "question": "Wo kann man das Ticket kaufen?",
                "options": [
                    "Am Automaten",
                    "Direkt beim Busfahrer",
                    "Online"
                ],
                "correct": 1,
                "explanation": "Buy from driver: 'Man kann das Ticket direkt beim Busfahrer kaufen.'"
            },
            {
                "question": "Welche Geldnote hat der Sprecher dabei?",
                "options": [
                    "Einen Zehn-Euro-Schein",
                    "Einen Fünfzig-Euro-Schein",
                    "Er hat nur Münzen"
                ],
                "correct": 1,
                "explanation": "He has a 50-euro note: 'Ich habe nur ein Fünfzig-Euro-Schein.'"
            },
            {
                "question": "Bis zu welcher Haltestelle fährt der Bus?",
                "options": [
                    "Bis zum Hauptbahnhof",
                    "Bis zum Marktplatz",
                    "Bis zur Schule"
                ],
                "correct": 1,
                "explanation": "It goes to the market square: 'Der Bus fährt bis zum Marktplatz.'"
            },
            {
                "question": "Wie kommt der Sprecher nach dem Aussteigen zur Arbeit?",
                "options": [
                    "Mit dem Taxi",
                    "Zu Fuß",
                    "Er fährt mit dem Fahrrad"
                ],
                "correct": 1,
                "explanation": "He walks: 'Dort steige ich aus und gehe zu Fuß zur Arbeit.'"
            }
        ]
    },
    {
        "id": "st_hotel",
        "title": "Im Hotel am Fluss (Hotel)",
        "text": "Guten Tag, ich habe eine Reservierung auf den Namen Schneider. - Guten Tag, Herr Schneider! Ja, ein Einzelzimmer für drei Nächte mit Frühstück. - Richtig. Ist das Zimmer ruhig? - Ja, es liegt im dritten Stock mit Blick auf den Fluss. Hier ist Ihr Zimmerschlüssel, Zimmernummer dreihundertvier. - Danke. Wo wird das Frühstück serviert? - Das Frühstück gibt es von sieben bis zehn Uhr im Restaurant im Erdgeschoss. - Gibt es auch WLAN im Zimmer? - Ja, das WLAN ist kostenlos. Das Passwort steht auf dem Schlüssel. - Perfekt, vielen Dank!",
        "translation": "Good day, I have a reservation under the name Schneider. - Good day, Mr. Schneider! Yes, a single room for three nights with breakfast. - Correct. Is the room quiet? - Yes, it is on the third floor with a view of the river. Here is your room key, room number three hundred and four. - Thank you. Where is breakfast served? - Breakfast is available from seven to ten o'clock in the restaurant on the ground floor. - Is there also Wi-Fi in the room? - Yes, the Wi-Fi is free. The password is on the key. - Perfect, thank you very much!",
        "vocab": [
            {
                "word": "die Reservierung",
                "translation": "Reservation"
            },
            {
                "word": "das Einzelzimmer",
                "translation": "Single room"
            },
            {
                "word": "das Frühstück",
                "translation": "Breakfast"
            },
            {
                "word": "kostenlos",
                "translation": "Free of charge"
            }
        ],
        "questions": [
            {
                "question": "Auf welchen Namen ist die Reservierung?",
                "options": [
                    "Müller",
                    "Schneider",
                    "Schmidt"
                ],
                "correct": 1,
                "explanation": "The reservation is for Schneider: 'auf den Namen Schneider.'"
            },
            {
                "question": "Was für ein Zimmer hat Herr Schneider gebucht?",
                "options": [
                    "Ein Doppelzimmer",
                    "Ein Einzelzimmer",
                    "Eine Suite"
                ],
                "correct": 1,
                "explanation": "It's a single room: 'ein Einzelzimmer...'"
            },
            {
                "question": "Wie viele Nächte bleibt Herr Schneider?",
                "options": [
                    "Zwei Nächte",
                    "Drei Nächte",
                    "Vier Nächte"
                ],
                "correct": 1,
                "explanation": "He stays for three nights: 'für drei Nächte...'"
            },
            {
                "question": "Ist das Frühstück im Aufenthalt enthalten?",
                "options": [
                    "Nein, ohne Frühstück",
                    "Ja, mit Frühstück",
                    "Nur Kaffee"
                ],
                "correct": 1,
                "explanation": "It includes breakfast: 'mit Frühstück.'"
            },
            {
                "question": "In welchem Stock liegt das Zimmer?",
                "options": [
                    "Im ersten Stock",
                    "Im dritten Stock",
                    "Im Erdgeschoss"
                ],
                "correct": 1,
                "explanation": "It is on the third floor: 'liegt im dritten Stock...'"
            },
            {
                "question": "Welche Aussicht hat das Zimmer?",
                "options": [
                    "Blick auf den Park",
                    "Blick auf den Fluss",
                    "Blick auf die Straße"
                ],
                "correct": 1,
                "explanation": "View of the river: 'mit Blick auf den Fluss.'"
            },
            {
                "question": "Wie lautet die Zimmernummer?",
                "options": [
                    "Nummer 104",
                    "Nummer 304 (dreihundertvier)",
                    "Nummer 204"
                ],
                "correct": 1,
                "explanation": "Room 304: 'Zimmernummer dreihundertvier.'"
            },
            {
                "question": "Wann gibt es Frühstück im Hotel?",
                "options": [
                    "Von sechs bis neun Uhr",
                    "Von sieben bis zehn Uhr",
                    "Von acht bis elf Uhr"
                ],
                "correct": 1,
                "explanation": "Breakfast is 7:00-10:00: 'von sieben bis zehn Uhr...'"
            },
            {
                "question": "Wo wird das Frühstück serviert?",
                "options": [
                    "Im Zimmer",
                    "Im Restaurant im Erdgeschoss",
                    "Auf der Dachterrasse"
                ],
                "correct": 1,
                "explanation": "Served in the restaurant on ground floor: 'im Restaurant im Erdgeschoss.'"
            },
            {
                "question": "Kostet das WLAN extra?",
                "options": [
                    "Ja, zehn Euro pro Tag",
                    "Nein, es ist kostenlos",
                    "Es gibt kein WLAN"
                ],
                "correct": 1,
                "explanation": "Wi-Fi is free: 'Ja, das WLAN ist kostenlos.'"
            }
        ]
    },
    {
        "id": "st_apartment",
        "title": "Eine neue Wohnung (Apartment)",
        "text": "Meine Freundin Sarah sucht eine neue Wohnung in Köln. Die aktuelle Wohnung ist zu klein. Sie hat nur ein Zimmer, eine kleine Küche und ein Bad. Sie möchte eine Dreizimmerwohnung mit Balkon finden. Die Miete soll nicht mehr als sechshundert Euro kalt kosten. Heute Nachmittag besichtigt sie eine Wohnung in der Nähe vom Stadtzentrum. Die Wohnung liegt im zweiten Stock, hat einen Balkon und eine schöne Einbauküche. Sarah findet die Wohnung sehr schön. Sie hofft, dass der Vermieter sie anruft.",
        "translation": "My girlfriend Sarah is looking for a new apartment in Cologne. The current apartment is too small. It has only one room, a small kitchen, and a bathroom. She wants to find a three-room apartment with a balcony. The rent should not cost more than six hundred euros cold (excluding utilities). This afternoon she is viewing an apartment near the city center. The apartment is on the second floor, has a balcony and a nice fitted kitchen. Sarah finds the apartment very beautiful. She hopes that the landlord calls her.",
        "vocab": [
            {
                "word": "die Wohnung",
                "translation": "Apartment"
            },
            {
                "word": "die Miete",
                "translation": "Rent"
            },
            {
                "word": "der Balkon",
                "translation": "Balcony"
            },
            {
                "word": "besichtigen",
                "translation": "To view / inspect"
            }
        ],
        "questions": [
            {
                "question": "Wer sucht eine neue Wohnung?",
                "options": [
                    "Thomas",
                    "Sarah",
                    "Maria"
                ],
                "correct": 1,
                "explanation": "Sarah is looking: 'Meine Freundin Sarah sucht...'"
            },
            {
                "question": "In welcher Stadt sucht Sarah die Wohnung?",
                "options": [
                    "In Berlin",
                    "In Köln",
                    "In Frankfurt"
                ],
                "correct": 1,
                "explanation": "She searches in Cologne: 'eine neue Wohnung in Köln.'"
            },
            {
                "question": "Warum sucht Sarah eine neue Wohnung?",
                "options": [
                    "Weil sie umzieht",
                    "Weil ihre aktuelle Wohnung zu klein ist",
                    "Weil sie einen neuen Job hat"
                ],
                "correct": 1,
                "explanation": "Current flat is too small: 'Die aktuelle Wohnung ist zu klein.'"
            },
            {
                "question": "Wie viele Zimmer hat Sarahs aktuelle Wohnung?",
                "options": [
                    "Ein Zimmer",
                    "Zwei Zimmer",
                    "Drei Zimmer"
                ],
                "correct": 0,
                "explanation": "It has only one room: 'Sie hat nur ein Zimmer...'"
            },
            {
                "question": "Was für eine Wohnung möchte Sarah finden?",
                "options": [
                    "Eine Einzimmerwohnung",
                    "Eine Dreizimmerwohnung mit Balkon",
                    "Ein ganzes Haus"
                ],
                "correct": 1,
                "explanation": "She wants a 3-room flat: 'Sie möchte eine Dreizimmerwohnung mit Balkon finden.'"
            },
            {
                "question": "Wie hoch soll die Kaltmiete maximal sein?",
                "options": [
                    "Fünfhundert Euro",
                    "Sechshundert Euro (600)",
                    "Siebenhundert Euro"
                ],
                "correct": 1,
                "explanation": "Max 600 euros: 'nicht mehr als sechshundert Euro kalt kosten.'"
            },
            {
                "question": "Wann besichtigt Sarah eine Wohnung?",
                "options": [
                    "Morgen früh",
                    "Heute Nachmittag",
                    "Am Wochenende"
                ],
                "correct": 1,
                "explanation": "She views it this afternoon: 'Heute Nachmittag besichtigt sie...'"
            },
            {
                "question": "Wo liegt die besichtigte Wohnung?",
                "options": [
                    "Weit weg von der Stadt",
                    "In der Nähe vom Stadtzentrum",
                    "Auf dem Land"
                ],
                "correct": 1,
                "explanation": "Near city center: 'in der Nähe vom Stadtzentrum.'"
            },
            {
                "question": "In welchem Stockwerk liegt die Wohnung?",
                "options": [
                    "Im ersten Stock",
                    "Im zweiten Stock",
                    "Im dritten Stock"
                ],
                "correct": 1,
                "explanation": "It is on the second floor: 'liegt im zweiten Stock...'"
            },
            {
                "question": "Hat die neue Wohnung einen Balkon?",
                "options": [
                    "Nein, aber einen Garten",
                    "Ja, sie hat einen Balkon",
                    "Nein"
                ],
                "correct": 1,
                "explanation": "Yes, it has a balcony: 'hat einen Balkon und eine schöne Einbauküche.'"
            }
        ]
    },
    {
        "id": "st_bank",
        "title": "Bei der Sparkasse (Bank)",
        "text": "Guten Tag. Ich möchte ein neues Girokonto eröffnen. Was brauche ich dafür? - Guten Tag! Sie benötigen Ihren Personalausweis oder Reisepass und eine Meldebescheinigung. - Ich habe meinen Ausweis hier. Ist das Konto kostenlos für Studenten? - Ja, für Studenten unter sechsundzwanzig Jahren zahlen Sie keine Kontoführungsgebühren. - Das trifft auf mich zu. Kann ich auch eine EC-Karte bekommen? - Ja, die Karte schicken wir Ihnen in einer Woche per Post nach Hause. Die PIN kommt in einem separaten Brief. - Vielen Dank für die Hilfe!",
        "translation": "Good day. I would like to open a new checking account. What do I need for that? - Good day! You need your identity card or passport and a registration certificate. - I have my ID here. Is the account free for students? - Yes, for students under twenty-six years you pay no account maintenance fees. - That applies to me. Can I also get a debit card? - Yes, we will send the card to your home by mail in a week. The PIN will arrive in a separate letter. - Thank you very much for the help!",
        "vocab": [
            {
                "word": "das Girokonto",
                "translation": "Checking account"
            },
            {
                "word": "eröffnen",
                "translation": "To open an account"
            },
            {
                "word": "der Ausweis",
                "translation": "ID card"
            },
            {
                "word": "kostenlos",
                "translation": "Free of charge"
            }
        ],
        "questions": [
            {
                "question": "Was möchte der Kunde bei der Sparkasse tun?",
                "options": [
                    "Geld abheben",
                    "Ein neues Girokonto eröffnen",
                    "Einen Kredit aufnehmen"
                ],
                "correct": 1,
                "explanation": "He wants to open an account: 'Ich möchte ein neues Girokonto eröffnen.'"
            },
            {
                "question": "Welche Dokumente braucht man zum Eröffnen?",
                "options": [
                    "Einen Arbeitsvertrag",
                    "Einen Personalausweis/Reisepass und eine Meldebescheinigung",
                    "Nichts"
                ],
                "correct": 1,
                "explanation": "ID and registration certificate: 'Sie benötigen Ihren Personalausweis oder Reisepass und eine Meldebescheinigung.'"
            },
            {
                "question": "Hat der Kunde seinen Ausweis dabei?",
                "options": [
                    "Nein, vergessen",
                    "Ja, er hat ihn hier",
                    "Er hat nur den Führerschein"
                ],
                "correct": 1,
                "explanation": "He has it: 'Ich habe meinen Ausweis hier.'"
            },
            {
                "question": "Für wen ist das Girokonto kostenlos?",
                "options": [
                    "Für alle Kunden",
                    "Für Studenten unter 26 Jahren",
                    "Für Senioren"
                ],
                "correct": 1,
                "explanation": "Free for students under 26: 'für Studenten unter sechsundzwanzig Jahren...'"
            },
            {
                "question": "Zahlt der Kunde Kontoführungsgebühren?",
                "options": [
                    "Ja, fünf Euro pro Monat",
                    "Nein, da er Student unter 26 ist",
                    "Ja, aber nur im ersten Jahr"
                ],
                "correct": 1,
                "explanation": "No fees: 'Das trifft auf mich zu.'"
            },
            {
                "question": "Welche Karte möchte der Kunde bekommen?",
                "options": [
                    "Eine Kreditkarte",
                    "Eine EC-Karte",
                    "Eine Kundenkarte"
                ],
                "correct": 1,
                "explanation": "EC card: 'Kann ich auch eine EC-Karte bekommen?'"
            },
            {
                "question": "Wann wird die EC-Karte geliefert?",
                "options": [
                    "Sofort in der Bank",
                    "In einer Woche per Post nach Hause",
                    "In zwei Wochen"
                ],
                "correct": 1,
                "explanation": "In one week by mail: 'die Karte schicken wir Ihnen in einer Woche per Post...'"
            },
            {
                "question": "Wie kommt die PIN für die EC-Karte?",
                "options": [
                    "Zusammen mit der Karte",
                    "In einem separaten Brief",
                    "Per E-Mail"
                ],
                "correct": 1,
                "explanation": "In a separate letter: 'Die PIN kommt in einem separaten Brief.'"
            },
            {
                "question": "Wie bedankt sich der Kunde?",
                "options": [
                    "Gar nicht",
                    "Vielen Dank für die Hilfe!",
                    "Auf Wiedersehen"
                ],
                "correct": 1,
                "explanation": "He says: 'Vielen Dank für die Hilfe!'"
            },
            {
                "question": "Was antwortet der Bankmitarbeiter?",
                "options": [
                    "Bitte schön",
                    "Sehr gerne, schönen Tag noch",
                    "Tschüss"
                ],
                "correct": 1,
                "explanation": "He says: 'Sehr gerne, schönen Tag noch.'"
            }
        ]
    },
    {
        "id": "st_post_office",
        "title": "Auf der Post (Post Office)",
        "text": "Guten Tag! Ich möchte dieses Paket nach Indien schicken. Wie viel kostet das? - Guten Tag. Bitte legen Sie das Paket auf die Waage. Es wiegt zwei Kilo. Möchten Sie es als Standardpaket oder per Express senden? - Als Standardpaket reicht völlig aus. Wie lange dauert der Versand? - Es dauert ungefähr zehn bis vierzehn Tage. Das kostet vierundzwanzig Euro. - Gut. Ich möchte auch diese drei Postkarten kaufen. Brauchen Sie Briefmarken dafür? - Ja, bitte, drei Briefmarken für Postkarten nach Europa. - Das macht zusammen achtundzwanzig Euro.",
        "translation": "Good day! I want to send this package to India. How much does that cost? - Good day. Please place the package on the scale. It weighs two kilos. Would you like to send it as a standard package or by express? - Standard package is completely sufficient. How long does the shipping take? - It takes about ten to fourteen days. That costs twenty-four euros. - Good. I would also like to buy these three postcards. Do you need stamps for them? - Yes, please, three stamps for postcards to Europe. - That makes twenty-eight euros altogether.",
        "vocab": [
            {
                "word": "das Paket",
                "translation": "Package"
            },
            {
                "word": "die Waage",
                "translation": "Scale"
            },
            {
                "word": "der Versand",
                "translation": "Shipping / Dispatch"
            },
            {
                "word": "die Briefmarke",
                "translation": "Postage stamp"
            }
        ],
        "questions": [
            {
                "question": "Wohin möchte der Kunde das Paket schicken?",
                "options": [
                    "Nach Spanien",
                    "Nach Indien",
                    "Nach Deutschland"
                ],
                "correct": 1,
                "explanation": "To India: 'Ich möchte dieses Paket nach Indien schicken.'"
            },
            {
                "question": "Wo muss der Kunde das Paket platzieren?",
                "options": [
                    "Auf dem Boden",
                    "Auf der Waage",
                    "Auf dem Tisch"
                ],
                "correct": 1,
                "explanation": "On the scale: 'Bitte legen Sie das Paket auf die Waage.'"
            },
            {
                "question": "Wie viel wiegt das Paket?",
                "options": [
                    "Ein Kilo",
                    "Zwei Kilo",
                    "Drei Kilo"
                ],
                "correct": 1,
                "explanation": "It weighs 2 kilos: 'Es wiegt zwei Kilo.'"
            },
            {
                "question": "Welche Versandart wählt der Kunde?",
                "options": [
                    "Expressversand",
                    "Standardpaket",
                    "Luftpost"
                ],
                "correct": 1,
                "explanation": "Standard package: 'Als Standardpaket reicht völlig aus.'"
            },
            {
                "question": "Wie lange dauert der Versand nach Indien ungefähr?",
                "options": [
                    "Drei bis fünf Tage",
                    "Zehn bis vierzehn Tage",
                    "Einen Monat"
                ],
                "correct": 1,
                "explanation": "10-14 days: 'Es dauert ungefähr zehn bis vierzehn Tage.'"
            },
            {
                "question": "Wie viel kostet der Paketversand allein?",
                "options": [
                    "Zwanzig Euro",
                    "Vierundzwanzig Euro (24)",
                    "Achtundzwanzig Euro"
                ],
                "correct": 1,
                "explanation": "Paket shipping is 24 euros: 'Das kostet vierundzwanzig Euro.'"
            },
            {
                "question": "Was möchte der Kunde zusätzlich kaufen?",
                "options": [
                    "Briefumschläge",
                    "Drei Postkarten",
                    "Einen Kugelschreiber"
                ],
                "correct": 1,
                "explanation": "Three postcards: 'Ich möchte auch diese drei Postkarten kaufen.'"
            },
            {
                "question": "Wie viele Briefmarken benötigt der Kunde?",
                "options": [
                    "Zwei Briefmarken",
                    "Drei Briefmarken",
                    "Keine Briefmarken"
                ],
                "correct": 1,
                "explanation": "Three stamps: 'drei Briefmarken für Postkarten nach Europa.'"
            },
            {
                "question": "Wie viel kostet alles zusammen?",
                "options": [
                    "Vierundzwanzig Euro",
                    "Achtundzwanzig Euro (28)",
                    "Dreißig Euro"
                ],
                "correct": 1,
                "explanation": "28 euros total: 'Das macht zusammen achtundzwanzig Euro.'"
            },
            {
                "question": "Für wohin sind die Postkarten-Briefmarken gedacht?",
                "options": [
                    "Nach Indien",
                    "Nach Europa",
                    "Nach Amerika"
                ],
                "correct": 1,
                "explanation": "To Europe: 'Briefmarken für Postkarten nach Europa.'"
            }
        ]
    },
    {
        "id": "st_weekend",
        "title": "Ein schönes Wochenende (Weekend)",
        "text": "Am Wochenende habe ich endlich Freizeit. Am Samstagmorgen schlafe ich bis neun Uhr. Danach mache ich ein großes Frühstück mit Kaffee, Ei und Brötchen. Am Nachmittag treffe ich meine Freunde im Park. Wir spielen Fußball und hören Musik. Am Abend gehen wir ins Kino und sehen einen neuen Film. Am Sonntag besuche ich meine Eltern. Wir essen zusammen zu Mittag und trinken Kaffee. Am Sonntagabend lese ich ein Buch oder lerne ein bisschen Deutsch. Ich finde mein Wochenende sehr entspannend.",
        "translation": "On the weekend I finally have free time. On Saturday morning I sleep until nine o'clock. Afterwards I make a big breakfast with coffee, egg and bread rolls. In the afternoon I meet my friends in the park. We play football and listen to music. In the evening we go to the cinema and watch a new movie. On Sunday I visit my parents. We eat lunch together and drink coffee. On Sunday evening I read a book or study a little German. I find my weekend very relaxing.",
        "vocab": [
            {
                "word": "die Freizeit",
                "translation": "Free time"
            },
            {
                "word": "ausschlafen",
                "translation": "To sleep in"
            },
            {
                "word": "besuchen",
                "translation": "To visit"
            },
            {
                "word": "entspannend",
                "translation": "Relaxing"
            }
        ],
        "questions": [
            {
                "question": "Wann hat der Sprecher Freizeit?",
                "options": [
                    "Unter der Woche",
                    "Am Wochenende",
                    "Am Montag"
                ],
                "correct": 1,
                "explanation": "On the weekend: 'Am Wochenende habe ich endlich Freizeit.'"
            },
            {
                "question": "Bis wie viel Uhr schläft er am Samstagmorgen?",
                "options": [
                    "Bis acht Uhr",
                    "Bis neun Uhr",
                    "Bis zehn Uhr"
                ],
                "correct": 1,
                "explanation": "Until 9:00: 'Samstagmorgen schlafe ich bis neun Uhr.'"
            },
            {
                "question": "Was gehört zum Frühstück des Sprechers?",
                "options": [
                    "Müsli und Saft",
                    "Kaffee, Ei und Brötchen",
                    "Nur Tee"
                ],
                "correct": 1,
                "explanation": "Coffee, egg and rolls: 'mit Kaffee, Ei und Brötchen.'"
            },
            {
                "question": "Was macht der Sprecher am Samstagnachmittag?",
                "options": [
                    "Er arbeitet",
                    "Er trifft Freunde im Park",
                    "Er schläft"
                ],
                "correct": 1,
                "explanation": "Meets friends in park: 'Am Nachmittag treffe ich meine Freunde im Park.'"
            },
            {
                "question": "Welche Sportart spielen die Freunde im Park?",
                "options": [
                    "Volleyball",
                    "Fußball",
                    "Tennis"
                ],
                "correct": 1,
                "explanation": "They play soccer: 'Wir spielen Fußball...'"
            },
            {
                "question": "Wohin gehen sie am Samstagabend?",
                "options": [
                    "In ein Restaurant",
                    "Ins Kino",
                    "In eine Bar"
                ],
                "correct": 1,
                "explanation": "They go to the cinema: 'Am Abend gehen wir ins Kino...'"
            },
            {
                "question": "Wen besucht der Sprecher am Sonntag?",
                "options": [
                    "Seine Freunde",
                    "Seine Eltern",
                    "Seine Großeltern"
                ],
                "correct": 1,
                "explanation": "Visits parents: 'Am Sonntag besuche ich meine Eltern.'"
            },
            {
                "question": "Was machen die Eltern und der Sprecher zusammen am Sonntag?",
                "options": [
                    "Sie wandern",
                    "Sie essen zu Mittag und trinken Kaffee",
                    "Sie spielen Fußball"
                ],
                "correct": 1,
                "explanation": "Eat lunch and drink coffee: 'Wir essen zusammen zu Mittag und trinken Kaffee.'"
            },
            {
                "question": "Was macht der Sprecher am Sonntagabend?",
                "options": [
                    "Er sieht einen Film",
                    "Er liest ein Buch oder lernt Deutsch",
                    "Er arbeitet im Büro"
                ],
                "correct": 1,
                "explanation": "Reads or studies: 'lese ich ein Buch oder lerne ein bisschen Deutsch.'"
            },
            {
                "question": "Wie findet der Sprecher sein Wochenende?",
                "options": [
                    "Sehr anstrengend",
                    "Sehr entspannend",
                    "Langweilig"
                ],
                "correct": 1,
                "explanation": "Very relaxing: 'Ich finde mein Wochenende sehr entspannend.'"
            }
        ]
    },
    {
        "id": "st_pharmacy",
        "title": "In der Apotheke (Pharmacy)",
        "text": "Guten Tag! Ich habe ein Rezept vom Arzt. Haben Sie diese Medikamente da? - Guten Tag. Ja, lassen Sie mich sehen. Wir haben die Tabletten gegen Schmerzen hier, aber den Hustensaft müssen wir bestellen. - Wann ist der Hustensaft fertig? - Er kommt heute Nachmittag um fünfzehn Uhr an. Sie können ihn dann abholen. - Gut, ich komme heute Abend wieder. Wie muss ich die Schmerztabletten einnehmen? - Dreimal täglich nach dem Essen mit etwas Wasser. - Alles klar. Wie viel kostet das insgesamt? - Mit dem Rezept müssen Sie nur eine Zuzahlung von fünf Euro leisten.",
        "translation": "Good day! I have a prescription from the doctor. Do you have these medicines here? - Good day. Yes, let me see. We have the tablets for pain here, but we have to order the cough syrup. - When will the cough syrup be ready? - It arrives this afternoon at three PM. You can pick it up then. - Good, I will come back this evening. How should I take the pain tablets? - Three times daily after meals with some water. - All right. How much does that cost in total? - With the prescription, you only have to pay a co-payment of five euros.",
        "vocab": [
            {
                "word": "das Rezept",
                "translation": "Prescription"
            },
            {
                "word": "das Medikament",
                "translation": "Medicine"
            },
            {
                "word": "einnehmen",
                "translation": "To take/consume medicine"
            },
            {
                "word": "abholen",
                "translation": "To pick up / collect"
            }
        ],
        "questions": [
            {
                "question": "Was hat der Kunde vom Arzt bekommen?",
                "options": [
                    "Einen Krankenschein",
                    "Ein Rezept",
                    "Einen Brief"
                ],
                "correct": 1,
                "explanation": "He has a prescription: 'Ich habe ein Rezept vom Arzt.'"
            },
            {
                "question": "Welche Medikamente sind sofort in der Apotheke da?",
                "options": [
                    "Der Hustensaft",
                    "Die Tabletten gegen Schmerzen",
                    "Keines"
                ],
                "correct": 1,
                "explanation": "Pain tablets are there: 'Wir haben die Tabletten gegen Schmerzen hier...'"
            },
            {
                "question": "Was muss bestellt werden?",
                "options": [
                    "Die Schmerztabletten",
                    "Der Hustensaft",
                    "Verbandsmaterial"
                ],
                "correct": 1,
                "explanation": "Cough syrup must be ordered: 'den Hustensaft müssen wir bestellen.'"
            },
            {
                "question": "Um wie viel Uhr kommt der bestellte Hustensaft an?",
                "options": [
                    "Um zwölf Uhr",
                    "Um fünfzehn Uhr (15:00)",
                    "Morgen früh"
                ],
                "correct": 1,
                "explanation": "At 15:00: 'Er kommt heute Nachmittag um fünfzehn Uhr an.'"
            },
            {
                "question": "Wann möchte der Kunde wiederkommen, um den Saft abzuholen?",
                "options": [
                    "Sofort",
                    "Heute Abend",
                    "Morgen"
                ],
                "correct": 1,
                "explanation": "He comes back this evening: 'ich komme heute Abend wieder.'"
            },
            {
                "question": "Wie oft am Tag soll der Kunde die Schmerztabletten einnehmen?",
                "options": [
                    "Einmal täglich",
                    "Dreimal täglich",
                    "Alle zwei Stunden"
                ],
                "correct": 1,
                "explanation": "Three times daily: 'Dreimal täglich...'"
            },
            {
                "question": "Wann sollen die Tabletten eingenommen werden?",
                "options": [
                    "Vor dem Essen",
                    "Nach dem Essen",
                    "Während des Schlafens"
                ],
                "correct": 1,
                "explanation": "After meals: 'nach dem Essen...'"
            },
            {
                "question": "Mit was sollen die Tabletten eingenommen werden?",
                "options": [
                    "Mit Milch",
                    "Mit etwas Wasser",
                    "Mit Saft"
                ],
                "correct": 1,
                "explanation": "With some water: 'mit etwas Wasser.'"
            },
            {
                "question": "Wie viel muss der Kunde mit dem Rezept zuzahlen?",
                "options": [
                    "Nichts, es ist kostenlos",
                    "Fünf Euro",
                    "Zehn Euro"
                ],
                "correct": 1,
                "explanation": "Co-payment is 5 euros: 'nur eine Zuzahlung von fünf Euro leisten.'"
            },
            {
                "question": "Was bedeutet das Wort 'abholen'?",
                "options": [
                    "To order",
                    "To pick up",
                    "To drop off"
                ],
                "correct": 1,
                "explanation": "abholen means to pick up."
            }
        ]
    },
    {
        "id": "st_weather",
        "title": "Das Wetter in Deutschland (Weather)",
        "text": "Heute ist das Wetter in Deutschland sehr wechselhaft. Im Norden, in Hamburg, regnet es schon seit dem Morgen und es ist windig bei zwölf Grad. Im Süden, in München, ist das Wetter besser. Die Sonne scheint und die temperatur liegt bei zweiundzwanzig Grad. Viele Menschen gehen im Englischen Garten spazieren. Im Osten, in Berlin, ist es wolkig, aber trocken. Morgen soll es überall im Land kühler werden und es gibt Gewitter. Man sollte einen Regenschirm mitnehmen. Ich mag sonniges Wetter am liebsten.",
        "translation": "Today the weather in Germany is very changeable. In the north, in Hamburg, it has been raining since morning and it is windy at twelve degrees. In the south, in Munich, the weather is better. The sun is shining and the temperature is twenty-two degrees. Many people are walking in the English Garden. In the east, in Berlin, it is cloudy but dry. Tomorrow it is supposed to get cooler everywhere in the country and there will be thunderstorms. One should take an umbrella along. I like sunny weather best.",
        "vocab": [
            {
                "word": "das Wetter",
                "translation": "Weather"
            },
            {
                "word": "die Sonne",
                "translation": "Sun"
            },
            {
                "word": "die Temperatur",
                "translation": "Temperature"
            },
            {
                "word": "der Regenschirm",
                "translation": "Umbrella"
            }
        ],
        "questions": [
            {
                "question": "Wie wird das Wetter heute in Deutschland beschrieben?",
                "options": [
                    "Sehr heiß",
                    "Sehr wechselhaft",
                    "Immer sonnig"
                ],
                "correct": 1,
                "explanation": "Changeable: 'Heute ist das Wetter in Deutschland sehr wechselhaft.'"
            },
            {
                "question": "Wie ist das Wetter in Hamburg im Norden?",
                "options": [
                    "Es regnet und ist windig",
                    "Die Sonne scheint",
                    "Es schneit"
                ],
                "correct": 0,
                "explanation": "Raining and windy: 'regnet es schon seit dem Morgen und es ist windig...'"
            },
            {
                "question": "Wie viel Grad hat es in Hamburg?",
                "options": [
                    "Zehn Grad",
                    "Zwölft Grad (12)",
                    "Fünfzehn Grad"
                ],
                "correct": 1,
                "explanation": "12 degrees: 'bei zwölf Grad.'"
            },
            {
                "question": "Wie ist das Wetter in München im Süden?",
                "options": [
                    "Schlecht und regnerisch",
                    "Besser, die Sonne scheint",
                    "Kalt und windig"
                ],
                "correct": 1,
                "explanation": "Sun is shining: 'Die Sonne scheint...'"
            },
            {
                "question": "Wie hoch ist die Temperatur in München?",
                "options": [
                    "Zwanzig Grad",
                    "Zweiundzwanzig Grad (22)",
                    "Fünfundzwanzig Grad"
                ],
                "correct": 1,
                "explanation": "22 degrees: 'Temperatur liegt bei zweiundzwanzig Grad.'"
            },
            {
                "question": "Wo gehen viele Menschen in München spazieren?",
                "options": [
                    "Am Hauptbahnhof",
                    "Im Englischen Garten",
                    "Auf der Hauptstraße"
                ],
                "correct": 1,
                "explanation": "In English Garden: 'gehen im Englischen Garten spazieren.'"
            },
            {
                "question": "Wie ist das Wetter im Osten, in Berlin?",
                "options": [
                    "Es regnet stark",
                    "Es ist wolkig, aber trocken",
                    "Es gibt Gewitter"
                ],
                "correct": 1,
                "explanation": "Cloudy but dry: 'wolkig, aber trocken.'"
            },
            {
                "question": "Wie soll das Wetter morgen überall in Deutschland werden?",
                "options": [
                    "Wärmer und sonnig",
                    "Kühler mit Gewittern",
                    "Es bleibt gleich"
                ],
                "correct": 1,
                "explanation": "Cooler with thunderstorms: 'Morgen soll es überall im Land kühler werden und es gibt Gewitter.'"
            },
            {
                "question": "Was sollte man morgen mitnehmen?",
                "options": [
                    "Eine Sonnenbrille",
                    "Einen Regenschirm",
                    "Eine Winterjacke"
                ],
                "correct": 1,
                "explanation": "Take an umbrella: 'Man sollte einen Regenschirm mitnehmen.'"
            },
            {
                "question": "Welches Wetter mag der Sprecher am liebsten?",
                "options": [
                    "Regnerisches Wetter",
                    "Sonniges Wetter",
                    "Kaltes Wetter"
                ],
                "correct": 1,
                "explanation": "Likes sunny weather best: 'Ich mag sonniges Wetter am liebsten.'"
            }
        ]
    },
    {
        "id": "st_interview",
        "title": "Ein Vorstellungsgespräch (Interview)",
        "text": "Guten Tag, Frau Meier. Herzlich willkommen zu unserem Gespräch. Erzählen Sie bitte etwas über sich. - Guten Tag! Mein Name ist Sofia Kovac. Ich komme aus Kroatien und wohne seit einem Jahr in Frankfurt. Ich habe Deutsch an einer Sprachschule gelernt. - Sehr gut! Warum möchten Sie bei uns als Rezeptionistin arbeiten? - Ich arbeite gerne mit Menschen und spreche Kroatisch, Englisch und jetzt auch Deutsch. Ich bin freundlich und zuverlässig. - Das klingt prima. Wie sind Ihre Arbeitszeiten? Können Sie auch am Wochenende arbeiten? - Ja, das ist kein Problem für mich. - Vielen Dank, wir rufen Sie nächste Woche an.",
        "translation": "Good day, Ms. Meier. A warm welcome to our interview. Please tell us something about yourself. - Good day! My name is Sofia Kovac. I come from Croatia and have been living in Frankfurt for a year. I learned German at a language school. - Very good! Why would you like to work with us as a receptionist? - I like working with people and I speak Croatian, English, and now also German. I am friendly and reliable. - That sounds great. How are your working hours? Can you also work on weekends? - Yes, that is no problem for me. - Thank you very much, we will call you next week.",
        "vocab": [
            {
                "word": "das Gespräch",
                "translation": "Conversation / Interview"
            },
            {
                "word": "die Sprachschule",
                "translation": "Language school"
            },
            {
                "word": "die Arbeitszeit",
                "translation": "Working hours"
            },
            {
                "word": "zuverlässig",
                "translation": "Reliable"
            }
        ],
        "questions": [
            {
                "question": "Wie heißt die Bewerberin?",
                "options": [
                    "Frau Meier",
                    "Sofia Kovac",
                    "Frau Schneider"
                ],
                "correct": 1,
                "explanation": "Her name is Sofia Kovac: 'Mein Name ist Sofia Kovac.'"
            },
            {
                "question": "Woher kommt Sofia Kovac?",
                "options": [
                    "Aus Deutschland",
                    "Aus Kroatien",
                    "Aus Spanien"
                ],
                "correct": 1,
                "explanation": "She comes from Croatia: 'Ich komme aus Kroatien...'"
            },
            {
                "question": "Seit wann wohnt Sofia in Frankfurt?",
                "options": [
                    "Seit einem Monat",
                    "Seit einem Jahr",
                    "Seit zwei Jahren"
                ],
                "correct": 1,
                "explanation": "She has lived there for a year: 'wohne seit einem Jahr in Frankfurt.'"
            },
            {
                "question": "Wo hat Sofia Deutsch gelernt?",
                "options": [
                    "An einer Sprachschule",
                    "Zu Hause",
                    "An der Universität"
                ],
                "correct": 0,
                "explanation": "At a language school: 'Ich habe Deutsch an einer Sprachschule gelernt.'"
            },
            {
                "question": "Für welche Stelle bewirbt sich Sofia?",
                "options": [
                    "Als Köchin",
                    "Als Rezeptionistin",
                    "Als Lehrerin"
                ],
                "correct": 1,
                "explanation": "She applies as a receptionist: 'Warum möchten Sie bei uns als Rezeptionistin arbeiten?'"
            },
            {
                "question": "Warum möchte sie diesen Job machen?",
                "options": [
                    "Weil sie gerne mit Computern arbeitet",
                    "Weil sie gerne mit Menschen arbeitet",
                    "Weil sie viel Geld braucht"
                ],
                "correct": 1,
                "explanation": "She likes working with people: 'Ich arbeite gerne mit Menschen...'"
            },
            {
                "question": "Welche Sprachen spricht Sofia?",
                "options": [
                    "Kroatisch und Deutsch",
                    "Kroatisch, Englisch und Deutsch",
                    "Nur Deutsch"
                ],
                "correct": 1,
                "explanation": "She speaks Croatian, English, and German: 'spreche Kroatisch, Englisch und jetzt auch Deutsch.'"
            },
            {
                "question": "Welche Charaktereigenschaften nennt Sofia?",
                "options": [
                    "Pünktlich und streng",
                    "Freundlich und zuverlässig",
                    "Ruhig und fleißig"
                ],
                "correct": 1,
                "explanation": "Friendly and reliable: 'Ich bin freundlich und zuverlässig.'"
            },
            {
                "question": "Kann Sofia am Wochenende arbeiten?",
                "options": [
                    "Nein, am Wochenende habe ich keine Zeit",
                    "Ja, das ist kein Problem für mich",
                    "Nur am Samstag"
                ],
                "correct": 1,
                "explanation": "Yes, no problem: 'Ja, das ist kein Problem für mich.'"
            },
            {
                "question": "Wann wird sich die Firma bei Sofia melden?",
                "options": [
                    "Morgen",
                    "Nächste Woche (wir rufen Sie an)",
                    "In einem Monat"
                ],
                "correct": 1,
                "explanation": "They will call next week: 'wir rufen Sie nächste Woche an.'"
            }
        ]
    },
    {
        "id": "st_library",
        "title": "In der Bibliothek (Library)",
        "text": "Guten Tag! Ich suche ein deutsches Grammatikbuch für Anfänger. Haben Sie das? - Guten Tag. Ja, die Sprachbücher stehen im ersten Stock in Regal fünf. - Danke schön. Kann ich das Buch mit nach Hause nehmen? - Ja, Sie können Bücher für vier Wochen ausleihen. Sie brauchen aber einen Bibliotheksausweis. - Wie viel kostet der Ausweis? - Für Studenten kostet er zehn Euro pro Jahr. Bringen Sie bitte Ihren Pass und Ihre Meldebescheinigung mit. - Gut, das mache ich. Kann ich den Ausweis sofort bekommen? - Ja, das dauert nur pfünf Minuten.",
        "translation": "Good day! I am looking for a German grammar book for beginners. Do you have that? - Good day. Yes, the language books are on the first floor in shelf five. - Thank you. Can I take the book home? - Yes, you can borrow books for four weeks. However, you need a library card. - How much does the card cost? - For students, it costs ten euros per year. Please bring your passport and registration certificate. - Good, I'll do that. Can I get the card immediately? - Yes, it only takes five minutes.",
        "vocab": [
            { "word": "die Bibliothek", "translation": "Library" },
            { "word": "ausleihen", "translation": "To borrow" },
            { "word": "der Ausweis", "translation": "ID card / Library card" },
            { "word": "das Regal", "translation": "Shelf" }
        ],
        "questions": [
            {
                "question": "Was sucht der Mann in der Bibliothek?",
                "options": ["Einen Roman", "Ein deutsches Grammatikbuch", "Ein Wörterbuch"],
                "correct": 1,
                "explanation": "He is looking for a grammar book: 'Ich suche ein deutsches Grammatikbuch für Anfänger.'"
            },
            {
                "question": "In welchem Stock stehen die Sprachbücher?",
                "options": ["Im Erdgeschoss", "Im ersten Stock", "Im zweiten Stock"],
                "correct": 1,
                "explanation": "The books are on the first floor: 'stehen im ersten Stock.'"
            },
            {
                "question": "In welchem Regal stehen die Sprachbücher?",
                "options": ["Regal drei", "Regal fünf", "Regal zehn"],
                "correct": 1,
                "explanation": "In shelf five: 'in Regal fünf.'"
            },
            {
                "question": "Wie lange kann man ein Buch ausleihen?",
                "options": ["Für zwei Wochen", "Für vier Wochen", "Für einen Monat"],
                "correct": 1,
                "explanation": "Borrowing time is four weeks: 'Bücher für vier Wochen ausleihen.'"
            },
            {
                "question": "Was braucht man, um Bücher auszuleihen?",
                "options": ["Einen Bibliotheksausweis", "Nur Geld", "Nichts"],
                "correct": 0,
                "explanation": "A library card is required: 'Sie brauchen aber einen Bibliotheksausweis.'"
            },
            {
                "question": "Wie viel kostet der Ausweis für Studenten pro Jahr?",
                "options": ["Fünf Euro", "Zehn Euro", "Kostenlos"],
                "correct": 1,
                "explanation": "It costs 10 euros: 'Für Studenten kostet er zehn Euro pro Jahr.'"
            },
            {
                "question": "Welche Dokumente muss der Student mitbringen?",
                "options": ["Einen Arbeitsvertrag", "Einen Pass und eine Meldebescheinigung", "Nichts"],
                "correct": 1,
                "explanation": "Passport and registration form: 'Bringen Sie bitte Ihren Pass und Ihre Meldebescheinigung mit.'"
            },
            {
                "question": "Wie lange dauert es, den Ausweis zu erstellen?",
                "options": ["Einen Tag", "Fünf Minuten", "Eine Stunde"],
                "correct": 1,
                "explanation": "It takes 5 minutes: 'das dauert nur fünf Minuten.'"
            },
            {
                "question": "Kann man das Buch sofort mit nach Hause nehmen?",
                "options": ["Nein, erst morgen", "Ja, nachdem der Ausweis fertig ist", "Nein, nur in der Bibliothek lesen"],
                "correct": 1,
                "explanation": "Yes, once the library card is made: 'das dauert nur fünf Minuten.'"
            },
            {
                "question": "Für wen gilt die Gebühr von zehn Euro?",
                "options": ["Für alle Erwachsenen", "Für Studenten", "Für Kinder"],
                "correct": 1,
                "explanation": "For students: 'Für Studenten kostet er zehn Euro.'"
            }
        ]
    },
    {
        "id": "st_birthday",
        "title": "Die Geburtstagsparty (Birthday Party)",
        "text": "Morgen hat meine Schwester Geburtstag. Sie wird fünfundzwanzig Jahre alt. Am Abend feiern wir eine große Party in unserem Garten. Wir haben zwanzig Gäste eingeladen: Freunde, Kollegen und Verwandte. Mein Vater grillt Fleisch und Würstchen. Meine Mutter backt einen Erdbeerkuchen und macht Kartoffelsalat. Ich habe heute ein schönes Kleid als Geschenk gekauft. Die Party beginnt um achtzehn Uhr. Wir hoffen, dass das Wetter warm bleibt und es nicht regnet.",
        "translation": "Tomorrow is my sister's birthday. She is turning twenty-five years old. In the evening we are celebrating a big party in our garden. We have invited twenty guests: friends, colleagues, and relatives. My father is grilling meat and sausages. My mother is baking a strawberry cake and making potato salad. Today I bought a beautiful dress as a gift. The party starts at eighteen o'clock (6 PM). We hope that the weather stays warm and it does not rain.",
        "vocab": [
            { "word": "feiern", "translation": "To celebrate" },
            { "word": "der Gast", "translation": "Guest" },
            { "word": "das Geschenk", "translation": "Gift / Present" },
            { "word": "der Kuchen", "translation": "Cake" }
        ],
        "questions": [
            {
                "question": "Wer hat morgen Geburtstag?",
                "options": ["Mein Bruder", "Meine Schwester", "Meine Mutter"],
                "correct": 1,
                "explanation": "My sister: 'Morgen hat meine Schwester Geburtstag.'"
            },
            {
                "question": "Wie alt wird die Schwester?",
                "options": ["Zwanzig Jahre", "Fünfundzwanzig Jahre (25)", "Dreißig Jahre"],
                "correct": 1,
                "explanation": "She turns 25: 'Sie wird fünfundzwanzig Jahre alt.'"
            },
            {
                "question": "Wo feiern sie die Geburtstagsparty?",
                "options": ["Im Restaurant", "Im Garten", "In der Wohnung"],
                "correct": 1,
                "explanation": "In the garden: 'feiern wir eine große Party in unserem Garten.'"
            },
            {
                "question": "Wie viele Gäste sind eingeladen?",
                "options": ["Zehn Gäste", "Zwanzig Gäste (20)", "Dreißig Gäste"],
                "correct": 1,
                "explanation": "20 guests: 'Wir haben zwanzig Gäste eingeladen.'"
            },
            {
                "question": "Was macht der Vater für die Party?",
                "options": ["Er grillt Fleisch und Würstchen", "Er backt den Kuchen", "Er kauft Getränke"],
                "correct": 0,
                "explanation": "Father grills: 'Mein Vater grillt Fleisch und Würstchen.'"
            },
            {
                "question": "Welchen Kuchen backt die Mutter?",
                "options": ["Einen Schokoladenkuchen", "Einen Erdbeerkuchen", "Einen Apfelkuchen"],
                "correct": 1,
                "explanation": "Strawberry cake: 'Meine Mutter backt einen Erdbeerkuchen...'"
            },
            {
                "question": "Welches Geschenk hat die Erzählerin gekauft?",
                "options": ["Ein Buch", "Ein schönes Kleid", "Ein Parfüm"],
                "correct": 1,
                "explanation": "A dress: 'ein schönes Kleid als Geschenk gekauft.'"
            },
            {
                "question": "Um wie viel Uhr beginnt die Party?",
                "options": ["Um siebzehn Uhr", "Um achtzehn Uhr (18:00)", "Um zwanzig Uhr"],
                "correct": 1,
                "explanation": "Starts at 18:00: 'Die Party beginnt um achtzehn Uhr.'"
            },
            {
                "question": "Welches Wetter hoffen sie für den Abend?",
                "options": ["Dass es regnet", "Dass es warm bleibt und nicht regnet", "Dass es schneit"],
                "correct": 1,
                "explanation": "Warm and no rain: 'dass das Wetter warm bleibt und es nicht regnet.'"
            },
            {
                "question": "Wer gehört zu den geladenen Gästen?",
                "options": ["Nur Lehrer", "Freunde, Kollegen und Verwandte", "Nur Nachbarn"],
                "correct": 1,
                "explanation": "Friends, colleagues and relatives: 'Freunde, Kollegen und Verwandte.'"
            }
        ]
    },
    {
        "id": "st_lost",
        "title": "Wegbeschreibung in Berlin (Directions)",
        "text": "Entschuldigung, können Sie mir helfen? Ich suche den Alexanderplatz. - Ja, natürlich. Das ist nicht weit von hier. Gehen Sie geradeaus bis zur Kreuzung. Biegen Sie dann links in die Karl-Liebknecht-Straße ab. Gehen Sie an der Kirche vorbei. Nach ungefähr zweihundert Metern sehen Sie den großen Fernsehturm. Der Alexanderplatz liegt direkt unter dem Fernsehturm. - Kann ich auch mit dem Bus fahren? - Ja, Sie können die Buslinie zweihundert nehmen. Die Haltestelle ist dort drüben. Die Fahrt dauert nur zwei Stationen. - Vielen Dank für Ihre Hilfe! - Keine Ursache, schönen Tag noch!",
        "translation": "Excuse me, can you help me? I am looking for Alexanderplatz. - Yes, of course. That is not far from here. Go straight ahead until the intersection. Then turn left onto Karl-Liebknecht-Straße. Go past the church. After about two hundred meters you will see the tall TV tower. Alexanderplatz is located right under the TV tower. - Can I also go by bus? - Yes, you can take bus line two hundred. The stop is over there. The ride only takes two stops. - Thank you very much for your help! - No problem, have a nice day!",
        "vocab": [
            { "word": "geradeaus", "translation": "Straight ahead" },
            { "word": "biegen", "translation": "To turn" },
            { "word": "die Kreuzung", "translation": "Intersection" },
            { "word": "die Haltestelle", "translation": "Bus stop" }
        ],
        "questions": [
            {
                "question": "Welchen Ort sucht der Tourist?",
                "options": ["Den Hauptbahnhof", "Den Alexanderplatz", "Das Brandenburger Tor"],
                "correct": 1,
                "explanation": "He is looking for Alexanderplatz: 'Ich suche den Alexanderplatz.'"
            },
            {
                "question": "Ist der Alexanderplatz weit weg?",
                "options": ["Ja, sehr weit", "Nein, das ist nicht weit von hier", "Er ist in einer anderen Stadt"],
                "correct": 1,
                "explanation": "Not far: 'Das ist nicht weit von hier.'"
            },
            {
                "question": "Wie soll der Tourist zuerst gehen?",
                "options": ["Nach rechts", "Geradeaus bis zur Kreuzung", "Nach links"],
                "correct": 1,
                "explanation": "Straight ahead: 'Gehen Sie geradeaus bis zur Kreuzung.'"
            },
            {
                "question": "In welche Straße soll man abbiegen?",
                "options": ["In die Friedrichstraße", "In die Karl-Liebknecht-Straße", "In die Hauptstraße"],
                "correct": 1,
                "explanation": "Karl-Liebknecht-Straße: 'Biegen Sie dann links in die Karl-Liebknecht-Straße ab.'"
            },
            {
                "question": "An welchem Gebäude geht man vorbei?",
                "options": ["An der Schule", "An der Kirche", "Am Supermarkt"],
                "correct": 1,
                "explanation": "Past the church: 'Gehen Sie an der Kirche vorbei.'"
            },
            {
                "question": "Welche Sehenswürdigkeit sieht man nach zweihundert Metern?",
                "options": ["Das Reichstagsgebäude", "Den großen Fernsehturm", "Einen Fluss"],
                "correct": 1,
                "explanation": "The TV tower: 'sehen Sie den großen Fernsehturm.'"
            },
            {
                "question": "Wo genau liegt der Alexanderplatz?",
                "options": ["Direkt unter dem Fernsehturm", "Hinter dem Bahnhof", "Neben der Kirche"],
                "correct": 0,
                "explanation": "Under the TV tower: 'liegt direkt unter dem Fernsehturm.'"
            },
            {
                "question": "Welche Buslinie fährt dorthin?",
                "options": ["Linie 100", "Linie 200", "Linie 300"],
                "correct": 1,
                "explanation": "Bus line 200: 'Sie können die Buslinie zweihundert nehmen.'"
            },
            {
                "question": "Wie viele Stationen dauert die Busfahrt?",
                "options": ["Eine Station", "Zwei Stationen", "Fünf Stationen"],
                "correct": 1,
                "explanation": "Two stops: 'Die Fahrt dauert nur zwei Stationen.'"
            },
            {
                "question": "Was wünscht der Helfer dem Touristen zum Schluss?",
                "options": ["Gute Besserung", "Schönen Tag noch!", "Gute Nacht"],
                "correct": 1,
                "explanation": "Have a nice day: 'Keine Ursache, schönen Tag noch!'"
            }
        ]
    },
    {
        "id": "st_zoo",
        "title": "Ein Tag im Zoo (Zoo)",
        "text": "Heute besuchen Herr und Frau Fischer mit ihren Kindern den Zoo in München. Der Eintritt kostet fünfzehn Euro für Erwachsene und acht Euro für Kinder. Im Zoo gibt es viele wilde Tiere. Zuerst gehen sie zu den Elefanten. Die Elefanten sind sehr groß und fressen Gras. Danach sehen sie die Affen, die auf die Bäume klettern und Bananen fressen. Die Kinder lachen viel. Um zwölf Uhr macht die Familie ein Picknick auf einer Bank. Sie essen Käsebrot und trinken Apfelsaft. Am Nachmittag schauen sie die Fütterung der Pinguine an. Das macht großen Spaß.",
        "translation": "Today Mr. and Mrs. Fischer visit the zoo in Munich with their children. The admission costs fifteen euros for adults and eight euros for children. In the zoo there are many wild animals. First they go to the elephants. The elephants are very big and eat grass. Then they see the monkeys climbing trees and eating bananas. The children laugh a lot. At twelve o'clock the family has a picnic on a bench. They eat cheese sandwiches and drink apple juice. In the afternoon they watch the penguins being fed. That is great fun.",
        "vocab": [
            { "word": "der Zoo", "translation": "Zoo" },
            { "word": "der Eintritt", "translation": "Admission / Entry" },
            { "word": "fressen", "translation": "To eat (of animals)" },
            { "word": "klettern", "translation": "To climb" }
        ],
        "questions": [
            {
                "question": "Welche Stadt hat den Zoo, den die Familie besucht?",
                "options": ["Berlin", "München", "Hamburg"],
                "correct": 1,
                "explanation": "Munich Zoo: 'den Zoo in München.'"
            },
            {
                "question": "Wie viel kostet der Eintritt für einen Erwachsenen?",
                "options": ["Acht Euro", "Fünfzehn Euro", "Zwanzig Euro"],
                "correct": 1,
                "explanation": "15 euros for adults: 'fünfzehn Euro für Erwachsene.'"
            },
            {
                "question": "Welche Tiere sieht die Familie zuerst?",
                "options": ["Die Affen", "Die Elefanten", "Die Pinguine"],
                "correct": 1,
                "explanation": "Elephants first: 'Zuerst gehen sie zu den Elefanten.'"
            },
            {
                "question": "Was fressen die Elefanten?",
                "options": ["Bananen", "Gras", "Fisch"],
                "correct": 1,
                "explanation": "They eat grass: 'Die Elefanten ... fressen Gras.'"
            },
            {
                "question": "Welche Tiere klettern auf Bäume?",
                "options": ["Die Elefanten", "Die Affen", "Die Pinguine"],
                "correct": 1,
                "explanation": "Monkeys climb trees: 'sehen sie die Affen, die auf die Bäume klettern...'"
            },
            {
                "question": "Was fressen die Affen?",
                "options": ["Fleisch", "Bananen", "Äpfel"],
                "correct": 1,
                "explanation": "They eat bananas: 'und Bananen fressen.'"
            },
            {
                "question": "Wann macht die Familie ein Picknick?",
                "options": ["Um elf Uhr", "Um zwölf Uhr", "Um dreizehn Uhr"],
                "correct": 1,
                "explanation": "At 12:00: 'Um zwölf Uhr macht die Familie ein Picknick...'"
            },
            {
                "question": "Was essen sie beim Picknick?",
                "options": ["Pizza", "Käsebrot", "Wurst"],
                "correct": 1,
                "explanation": "Cheese bread: 'Sie essen Käsebrot...'"
            },
            {
                "question": "Welche Fütterung schauen sie am Nachmittag an?",
                "options": ["Die der Löwen", "Die der Pinguine", "Die der Affen"],
                "correct": 1,
                "explanation": "Penguins feeding: 'schauen sie die Fütterung der Pinguine an.'"
            },
            {
                "question": "Wie viel kostet der Eintritt für ein Kind?",
                "options": ["Fünf Euro", "Acht Euro", "Zehn Euro"],
                "correct": 1,
                "explanation": "8 euros for kids: 'und acht Euro für Kinder.'"
            }
        ]
    },
    {
        "id": "st_hobbies",
        "title": "Meine Hobbys (Hobbies)",
        "text": "Hallo, ich heiße David. In meiner Freizeit habe ich viele Hobbys. Ich spiele sehr gerne Fußball im Verein. Jeden Dienstagabend haben wir Training. Am Wochenende haben wir oft ein Spiel gegen andere Mannschaften. Ich mag auch Musik. Ich lerne seit zwei Jahren Gitarre spielen und übe jeden Tag eine halbe Stunde in meinem Zimmer. Wenn das Wetter schön ist, fahre ich mit meinem Fahrrad im Wald oder treffe Freunde. Im Winter lese ich gerne Bücher oder spiele Computerspiele.",
        "translation": "Hello, my name is David. In my free time I have many hobbies. I really like playing football in a club. Every Tuesday evening we have training. On weekends we often have a game against other teams. I also like music. I have been learning to play the guitar for two years and practice for half an hour every day in my room. When the weather is nice, I ride my bike in the forest or meet friends. In winter I like to read books or play computer games.",
        "vocab": [
            { "word": "das Hobby", "translation": "Hobby" },
            { "word": "der Verein", "translation": "Club / Association" },
            { "word": "üben", "translation": "To practice" },
            { "word": "das Training", "translation": "Training / Practice" }
        ],
        "questions": [
            {
                "question": "Wie heißt the Sprecher?",
                "options": ["Lucas", "David", "Thomas"],
                "correct": 1,
                "explanation": "His name is David: 'Hallo, ich heiße David.'"
            },
            {
                "question": "Welchen Sport spielt David gerne?",
                "options": ["Tennis", "Fußball", "Basketball"],
                "correct": 1,
                "explanation": "He plays football: 'Ich spiele sehr gerne Fußball im Verein.'"
            },
            {
                "question": "An welchem Wochentag hat er Fußballtraining?",
                "options": ["Montagabend", "Dienstagabend", "Samstagmorgen"],
                "correct": 1,
                "explanation": "On Tuesdays: 'Jeden Dienstagabend haben wir Training.'"
            },
            {
                "question": "Welches Instrument lernt David?",
                "options": ["Klavier", "Gitarre", "Flöte"],
                "correct": 1,
                "explanation": "He learns guitar: 'Ich lerne seit zwei Jahren Gitarre spielen...'"
            },
            {
                "question": "Seit wie vielen Jahren lernt er dieses Instrument?",
                "options": ["Einem Jahr", "Zwei Jahren", "Drei Jahren"],
                "correct": 1,
                "explanation": "For two years: 'seit zwei Jahren Gitarre spielen...'"
            },
            {
                "question": "Wie lange übt er jeden Tag Gitarre?",
                "options": ["Eine Stunde", "Eine halbe Stunde", "Zwei Stunden"],
                "correct": 1,
                "explanation": "30 minutes: 'übe jeden Tag eine halbe Stunde.'"
            },
            {
                "question": "Wo fährt David mit dem Fahrrad, wenn das Wetter schön ist?",
                "options": ["In der Stadt", "Im Wald", "Am Strand"],
                "correct": 1,
                "explanation": "In the forest: 'fahre ich mit meinem Fahrrad im Wald...'"
            },
            {
                "question": "Was macht David im Winter?",
                "options": ["Fußball spielen", "Bücher lesen oder Computerspiele spielen", "Fahrrad fahren"],
                "correct": 1,
                "explanation": "Reads or plays computer games: 'lese ich gerne Bücher oder spiele Computerspiele.'"
            },
            {
                "question": "Wo übt David jeden Tag Gitarre?",
                "options": ["In der Musikschule", "In seinem Zimmer", "Im Park"],
                "correct": 1,
                "explanation": "In his room: 'übe jeden Tag eine halbe Stunde in meinem Zimmer.'"
            },
            {
                "question": "Wann hat er meistens Fußballspiele gegen andere Mannschaften?",
                "options": ["Unter der Woche", "Am Wochenende", "Jeden Dienstag"],
                "correct": 1,
                "explanation": "On weekends: 'Am Wochenende haben wir oft ein Spiel...'"
            }
        ]
    },
    {
        "id": "st_cooking",
        "title": "Kochen für Freunde (Cooking)",
        "text": "Heute Abend koche ich für meine Freunde Jan und Lisa. Sie kommen um neunzehn Uhr zu mir. Ich möchte eine Lasagne zubereiten. Dafür brauche ich Hackfleisch, Tomaten, Zwiebeln, Käse und Lasagneplatten. Ich gehe zuerst in den Supermarkt, um alle Zutaten frisch einzukaufen. Ich kaufe auch Salat und eine Flasche Rotwein. Die Lasagne muss für vierzig Minuten im Ofen backen. Jan bringt den Nachtisch mit: einen Schokoladenpudding. Lisa bringt Säfte. Ich hoffe, dass das Essen meinen Freunden schmeckt.",
        "translation": "This evening I am cooking for my friends Jan and Lisa. They are coming to my place at nineteen o'clock (7 PM). I want to prepare a lasagna. For that I need minced meat, tomatoes, onions, cheese, and lasagna sheets. First I go to the supermarket to buy all ingredients fresh. I also buy salad and a bottle of red wine. The lasagna has to bake in the oven for forty minutes. Jan is bringing the dessert: a chocolate pudding. Lisa is bringing juices. I hope that my friends like the food.",
        "vocab": [
            { "word": "kochen", "translation": "To cook" },
            { "word": "zubereiten", "translation": "To prepare food" },
            { "word": "die Zutaten", "translation": "Ingredients" },
            { "word": "der Nachtisch", "translation": "Dessert" }
        ],
        "questions": [
            {
                "question": "Für wen kocht der Sprecher heute Abend?",
                "options": ["Für seine Eltern", "Für seine Freunde Jan und Lisa", "Für seine Kollegen"],
                "correct": 1,
                "explanation": "For Jan and Lisa: 'koche ich für meine Freunde Jan und Lisa.'"
            },
            {
                "question": "Um wie viel Uhr kommen die Freunde?",
                "options": ["Um 18:00 Uhr", "Um 19:00 Uhr (neunzehn Uhr)", "Um 20:00 Uhr"],
                "correct": 1,
                "explanation": "At 19:00: 'Sie kommen um neunzehn Uhr zu mir.'"
            },
            {
                "question": "Welches Gericht möchte er zubereiten?",
                "options": ["Eine Pizza", "Eine Lasagne", "Spaghetti"],
                "correct": 1,
                "explanation": "Lasagna: 'Ich möchte eine Lasagne zubereiten.'"
            },
            {
                "question": "Welche Zutat wird für die Lasagne NICHT genannt?",
                "options": ["Fisch", "Hackfleisch", "Käse"],
                "correct": 0,
                "explanation": "Fish is not in lasagna: 'brauche ich Hackfleisch, Tomaten, Zwiebeln, Käse...'"
            },
            {
                "question": "Wo kauft er die Zutaten?",
                "options": ["Auf dem Markt", "Im Supermarkt", "Er bestellt online"],
                "correct": 1,
                "explanation": "Supermarket: 'Ich gehe zuerst in den Supermarkt...'"
            },
            {
                "question": "Welches Getränk kauft der Koch im Supermarkt?",
                "options": ["Bier", "Rotwein", "Apfelsaft"],
                "correct": 1,
                "explanation": "Red wine: 'und eine Flasche Rotwein.'"
            },
            {
                "question": "Wie lange muss die Lasagne im Ofen backen?",
                "options": ["Zwanzig Minuten", "Vierzig Minuten", "Eine Stunde"],
                "correct": 1,
                "explanation": "40 minutes: 'für vierzig Minuten im Ofen backen.'"
            },
            {
                "question": "Wer bringt den Nachtisch mit?",
                "options": ["Lisa", "Jan", "Niemand"],
                "correct": 1,
                "explanation": "Jan brings dessert: 'Jan bringt den Nachtisch mit...'"
            },
            {
                "question": "Was für einen Nachtisch bringt er mit?",
                "options": ["Einen Kuchen", "Einen Schokoladenpudding", "Eis"],
                "correct": 1,
                "explanation": "Chocolate pudding: 'einen Schokoladenpudding.'"
            },
            {
                "question": "Was bringt Lisa mit?",
                "options": ["Rotwein", "Säfte", "Brot"],
                "correct": 1,
                "explanation": "Lisa brings juices: 'Lisa bringt Säfte.'"
            }
        ]
    },
    {
        "id": "st_supermarket",
        "title": "Im Supermarkt (Supermarket)",
        "text": "Guten Tag, wo finde ich Milch und Joghurt? - Guten Tag! Milchprodukte stehen im Kühlregal ganz hinten rechts. - Danke. Und wo ist das Brot? - Frisches Brot und Brötchen finden Sie vorne links beim Bäcker. - Sehr gut. Ich brauche auch noch Zucker, Kaffee und eine Flasche Mineralwasser. Kostet die Plastikflasche Pfand? - Ja, das Pfand für die Wasserflasche beträgt fünfundzwanzig Cent. Sie können die leere Flasche am Automaten abgeben. - Perfekt, danke. Kann ich mit Karte bezahlen? - Ja, ab fünf Euro können Sie mit Karte zahlen.",
        "translation": "Good day, where can I find milk and yogurt? - Good day! Dairy products are in the refrigerated section at the very back on the right. - Thank you. And where is the bread? - Fresh bread and rolls can be found at the front on the left, at the bakery. - Very good. I also need sugar, coffee, and a bottle of mineral water. Does the plastic bottle have a deposit? - Yes, the deposit for the water bottle is twenty-five cents. You can return the empty bottle at the machine. - Perfect, thank you. Can I pay with a card? - Yes, you can pay with a card for purchases of five euros or more.",
        "vocab": [
            { "word": "das Kühlregal", "translation": "Refrigerated display / section" },
            { "word": "das Pfand", "translation": "Bottle deposit" },
            { "word": "leere Flasche", "translation": "Empty bottle" },
            { "word": "bezahlen", "translation": "To pay" }
        ],
        "questions": [
            {
                "question": "Wo stehen Milch und Joghurt?",
                "options": ["Vorne beim Eingang", "Im Kühlregal ganz hinten rechts", "Neben dem Obst"],
                "correct": 1,
                "explanation": "Back right in fridge: 'Milchprodukte stehen im Kühlregal ganz hinten rechts.'"
            },
            {
                "question": "Wo findet der Kunde frisches Brot?",
                "options": ["Hinten beim Fleisch", "Vorne links beim Bäcker", "Im Kühlregal"],
                "correct": 1,
                "explanation": "Front left bakery: 'finden Sie vorne links beim Bäcker.'"
            },
            {
                "question": "Welche Lebensmittel sucht der Kunde zusätzlich?",
                "options": ["Zucker und Kaffee", "Nudeln und Salz", "Käse und Butter"],
                "correct": 0,
                "explanation": "Sugar and coffee: 'Ich brauche auch noch Zucker, Kaffee...'"
            },
            {
                "question": "Welches Getränk möchte er kaufen?",
                "options": ["Bier", "Mineralwasser", "Apfelsaft"],
                "correct": 1,
                "explanation": "Mineral water: 'und eine Flasche Mineralwasser.'"
            },
            {
                "question": "Wie hoch ist das Flaschenpfand für das Wasser?",
                "options": ["Fünfzehn Cent", "Fünfundzwanzig Cent (25)", "Fünfzig Cent"],
                "correct": 1,
                "explanation": "25 cents deposit: 'das Pfand für die Wasserflasche beträgt fünfundzwanzig Cent.'"
            },
            {
                "question": "Wo kann man leere Flaschen zurückgeben?",
                "options": ["An der Kasse", "Am Automaten", "Gar nicht"],
                "correct": 1,
                "explanation": "At the machine: 'Sie können die leere Flasche am Automaten abgeben.'"
            },
            {
                "question": "Ab welchem Betrag kann man mit Karte bezahlen?",
                "options": ["Ab einem Euro", "Ab fünf Euro", "Ab zehn Euro"],
                "correct": 1,
                "explanation": "Minimum 5 euros: 'ab fünf Euro können Sie mit Karte zahlen.'"
            },
            {
                "question": "Welcher Ladenbereich enthält die Milch?",
                "options": ["Die Bäckerei", "Das Kühlregal", "Das Gemüseregal"],
                "correct": 1,
                "explanation": "The fridge section: 'Milchprodukte stehen im Kühlregal.'"
            },
            {
                "question": "Was gehört neben Brot zu den Backwaren vorne links?",
                "options": ["Kuchen", "Brötchen", "Kekse"],
                "correct": 1,
                "explanation": "Bread rolls: 'Frisches Brot und Brötchen finden Sie...'"
            },
            {
                "question": "Wie reagiert der Mitarbeiter auf die Fragen?",
                "options": ["Er ist unfreundlich", "Er hilft dem Kunden höflich", "Er geht weg"],
                "correct": 1,
                "explanation": "He answers and helps: 'Milchprodukte stehen...'"
            }
        ]
    },
    {
        "id": "st_job",
        "title": "Mein neuer Job (New Job)",
        "text": "Hallo, ich bin Lukas. Seit einer Woche habe ich eine neue Stelle in Berlin. Ich arbeite als Verkäufer in einem großen Elektromarkt im Stadtzentrum. Meine Kollegen sind sehr nett und helfen mir viel. Meine Arbeitszeit ist von Montag bis Freitag, von neun Uhr morgens bis siebzehn Uhr dreißig am Nachmittag. Am Mittag machen wir eine Stunde Pause. Ich berate Kunden, die Handys oder Laptops kaufen möchten. Der Job macht mir großen Spaß, weil ich gerne mit Technik und Menschen arbeite. Das Gehalt ist auch gut.",
        "translation": "Hello, I am Lukas. Since a week I have a new job in Berlin. I work as a salesperson in a large electronics store in the city center. My colleagues are very nice and help me a lot. My working hours are from Monday to Friday, from nine o'clock in the morning to seventeen-thirty in the afternoon. At noon we have a one-hour break. I advise customers who want to buy cell phones or laptops. I enjoy the job a lot because I like working with technology and people. The salary is also good.",
        "vocab": [
            { "word": "die Stelle", "translation": "Job / Position" },
            { "word": "der Verkäufer", "translation": "Salesperson" },
            { "word": "beraten", "translation": "To advise" },
            { "word": "das Gehalt", "translation": "Salary" }
        ],
        "questions": [
            {
                "question": "In welcher Stadt arbeitet Lukas?",
                "options": ["München", "Berlin", "Hamburg"],
                "correct": 1,
                "explanation": "He works in Berlin: 'eine neue Stelle in Berlin.'"
            },
            {
                "question": "Als was arbeitet Lukas?",
                "options": ["Ingenieur", "Verkäufer", "Lehrer"],
                "correct": 1,
                "explanation": "He is a salesperson: 'Ich arbeite als Verkäufer...'"
            },
            {
                "question": "Wo liegt das Geschäft?",
                "options": ["Am Stadtrand", "Im Stadtzentrum", "In einem Dorf"],
                "correct": 1,
                "explanation": "In the city center: 'in einem großen Elektromarkt im Stadtzentrum.'"
            },
            {
                "question": "Wie sind die Kollegen?",
                "options": ["Sehr nett und hilfsbereit", "Unfreundlich", "Sie sprechen nicht mit ihm"],
                "correct": 0,
                "explanation": "They are nice and help: 'meine Kollegen sind sehr nett und helfen mir viel.'"
            },
            {
                "question": "An welchen Tagen arbeitet Lukas?",
                "options": ["Nur am Wochenende", "Von Montag bis Freitag", "Jeden Tag"],
                "correct": 1,
                "explanation": "Monday to Friday: 'von Montag bis Freitag.'"
            },
            {
                "question": "Um wie viel Uhr beginnt seine Arbeit?",
                "options": ["Um acht Uhr", "Um neun Uhr", "Um zehn Uhr"],
                "correct": 1,
                "explanation": "Starts at 9:00: 'von neun Uhr morgens...'"
            },
            {
                "question": "Wann endet sein Arbeitstag?",
                "options": ["Um siebzehn Uhr", "Um siebzehn Uhr dreißig (17:30)", "Um achtzehn Uhr"],
                "correct": 1,
                "explanation": "Ends at 17:30: 'bis siebzehn Uhr dreißig am Nachmittag.'"
            },
            {
                "question": "Wie lange dauert die Mittagspause?",
                "options": ["Eine halbe Stunde", "Eine Stunde", "Zwei Stunden"],
                "correct": 1,
                "explanation": "One hour: 'Am Mittag machen wir eine Stunde Pause.'"
            },
            {
                "question": "Welche Produkte berät Lukas hauptsächlich?",
                "options": ["Autos", "Handys und Laptops", "Kühlschränke"],
                "correct": 1,
                "explanation": "Phones and laptops: 'Ich berate Kunden, die Handys oder Laptops kaufen möchten.'"
            },
            {
                "question": "Warum gefällt ihm die Arbeit?",
                "options": ["Weil das Gehalt schlecht ist", "Weil er Technik und Menschen mag", "Weil er nicht arbeiten muss"],
                "correct": 1,
                "explanation": "He likes tech and people: 'weil ich gerne mit Technik und Menschen arbeite.'"
            }
        ]
    },
    {
        "id": "st_cafe",
        "title": "Kaffeeklatsch im Café (Café)",
        "text": "Guten Tag, Herr Keller! Haben Sie einen Tisch für zwei Personen frei? - Guten Tag! Ja, am Fenster ist noch ein schöner Tisch frei. Bitte nehmen Sie Platz. - Danke. Was möchten Sie bestellen? - Ich nehme einen Kaffee mit Milch und ein Stück Apfelkuchen mit Sahne. - Und für mich bitte einen grünen Tee und ein Stück Käsekuchen. - Sehr gerne. Kommt sofort. - Wie geht es dir, Anna? Hast du viel zu tun? - Danke, gut! Ich habe diese Woche Urlaub und viel Zeit zum Lesen.",
        "translation": "Good day, Mr. Keller! Do you have a table for two people free? - Good day! Yes, by the window a nice table is still free. Please take a seat. - Thank you. What would you like to order? - I'll have a coffee with milk and a piece of apple cake with whipped cream. - And for me please a green tea and a piece of cheesecake. - Very gladly. Coming right up. - How are you, Anna? Do you have a lot to do? - Thanks, good! I have a vacation this week and plenty of time to read.",
        "vocab": [
            { "word": "der Kaffeeklatsch", "translation": "Coffee and chat / gossip" },
            { "word": "der Tisch", "translation": "Table" },
            { "word": "nehmen Sie Platz", "translation": "Take a seat" },
            { "word": "der Kuchen", "translation": "Cake" }
        ],
        "questions": [
            {
                "question": "Wie viele Personen möchten im Café sitzen?",
                "options": ["Eine Person", "Zwei Personen", "Drei Personen"],
                "correct": 1,
                "explanation": "Two people: 'einen Tisch für zwei Personen frei?'"
            },
            {
                "question": "Wo befindet sich der freie Tisch im Café?",
                "options": ["Am Fenster", "Draußen auf der Terrasse", "Neben der Küche"],
                "correct": 0,
                "explanation": "By the window: 'am Fenster ist noch ein schöner Tisch frei.'"
            },
            {
                "question": "Wie heißt der Kellner?",
                "options": ["Herr Schmidt", "Herr Keller", "Herr Becker"],
                "correct": 1,
                "explanation": "Mr. Keller: 'Guten Tag, Herr Keller!'"
            },
            {
                "question": "Was bestellt die erste Person zum Trinken?",
                "options": ["Tee", "Kaffee mit Milch", "Wasser"],
                "correct": 1,
                "explanation": "Coffee with milk: 'einen Kaffee mit Milch...'"
            },
            {
                "question": "Welchen Kuchen bestellt die erste Person?",
                "options": ["Käsekuchen", "Apfelkuchen mit Sahne", "Schokoladenkuchen"],
                "correct": 1,
                "explanation": "Apple cake with cream: 'ein Stück Apfelkuchen mit Sahne.'"
            },
            {
                "question": "Was bestellt die zweite Person zum Trinken?",
                "options": ["Kaffee", "Grünen Tee", "Bier"],
                "correct": 1,
                "explanation": "Green tea: 'einen grünen Tee...'"
            },
            {
                "question": "Welchen Kuchen bestellt die zweite Person?",
                "options": ["Erdbeerkuchen", "Käsekuchen", "Zitronenkuchen"],
                "correct": 1,
                "explanation": "Cheesecake: 'und ein Stück Käsekuchen.'"
            },
            {
                "question": "Wie heißt die Freundin, die gefragt wird?",
                "options": ["Julia", "Anna", "Lisa"],
                "correct": 1,
                "explanation": "Her name is Anna: 'Wie geht es dir, Anna?'"
            },
            {
                "question": "Warum hat Anna diese Woche viel Zeit?",
                "options": ["Weil sie krank ist", "Weil sie Urlaub hat", "Weil sie arbeitslos ist"],
                "correct": 1,
                "explanation": "She is on vacation: 'Ich habe diese Woche Urlaub und viel Zeit...'"
            },
            {
                "question": "Was macht Anna in ihrem Urlaub gerne?",
                "options": ["Sport machen", "Bücher lesen (Zeit zum Lesen)", "Kochen"],
                "correct": 1,
                "explanation": "Reading books: 'viel Zeit zum Lesen.'"
            }
        ]
    },
    {
        "id": "st_museum",
        "title": "Ein Besuch im Museum (Museum)",
        "text": "Heute Nachmittag besuchen Frau Krause und ihr Sohn Tim das Kunstmuseum. Das Museum ist dienstags geschlossen, aber heute ist Mittwoch. Ein Ticket für Erwachsene kostet zehn Euro, für Kinder unter zwölf Jahren ist der Eintritt frei. Tim ist neun Jahre alt, also bezahlt er nichts. Am Eingang leihen sie sich einen Audioguide auf Deutsch aus. Im Museum hängen viele berühmte Gemälde und alte Statuen. Tim findet die bunten Bilder sehr schön. Nach dem Besuch trinken sie eine Limonade im Museumscafé.",
        "translation": "This afternoon Mrs. Krause and her son Tim visit the art museum. The museum is closed on Tuesdays, but today is Wednesday. A ticket for adults costs ten euros, and entry is free for children under twelve years. Tim is nine years old, so he pays nothing. At the entrance they borrow an audio guide in German. In the museum there are many famous paintings and old statues. Tim finds the colorful pictures very beautiful. After the visit they drink a lemonade in the museum café.",
        "vocab": [
            { "word": "geschlossen", "translation": "Closed" },
            { "word": "das Gemälde", "translation": "Painting / Picture" },
            { "word": "der Audioguide", "translation": "Audio guide" },
            { "word": "der Eintritt frei", "translation": "Free admission" }
        ],
        "questions": [
            {
                "question": "Welches Museum besuchen Frau Krause und Tim?",
                "options": ["Das Naturkundemuseum", "Das Kunstmuseum", "Das Technikmuseum"],
                "correct": 1,
                "explanation": "The art museum: 'besuchen ... das Kunstmuseum.'"
            },
            {
                "question": "An welchem Wochentag ist das Museum normalerweise geschlossen?",
                "options": ["Montags", "Dienstags", "Mittwochs"],
                "correct": 1,
                "explanation": "Closed on Tuesdays: 'Das Museum ist dienstags geschlossen...'"
            },
            {
                "question": "Welcher Wochentag ist heute?",
                "options": ["Dienstag", "Mittwoch", "Donnerstag"],
                "correct": 1,
                "explanation": "Today is Wednesday: 'aber heute ist Mittwoch.'"
            },
            {
                "question": "Wie viel kostet ein Ticket für Erwachsene?",
                "options": ["Fünf Euro", "Zehn Euro", "Fünfzehn Euro"],
                "correct": 1,
                "explanation": "10 euros: 'Ein Ticket für Erwachsene kostet zehn Euro...'"
            },
            {
                "question": "Bis zu welchem Alter ist der Eintritt für Kinder frei?",
                "options": ["Unter sechs Jahren", "Unter zwölf Jahren", "Unter achtzehn Jahren"],
                "correct": 1,
                "explanation": "Under twelve: 'für Kinder unter zwölf Jahren ist der Eintritt frei.'"
            },
            {
                "question": "Wie alt ist der Sohn Tim?",
                "options": ["Acht Jahre", "Neun Jahre", "Zehn Jahre"],
                "correct": 1,
                "explanation": "He is nine: 'Tim ist neun Jahre alt...'"
            },
            {
                "question": "Wie viel bezahlt Tim für seinen Eintritt?",
                "options": ["Fünf Euro", "Nichts (frei)", "Zehn Euro"],
                "correct": 1,
                "explanation": "Free because he is under 12: 'also bezahlt er nichts.'"
            },
            {
                "question": "Was leihen sie sich am Eingang aus?",
                "options": ["Einen Regenschirm", "Einen Audioguide auf Deutsch", "Einen Rollstuhl"],
                "correct": 1,
                "explanation": "An audio guide: 'leihen sie sich einen Audioguide auf Deutsch aus.'"
            },
            {
                "question": "Was gefällt Tim im Museum besonders gut?",
                "options": ["Die alten Statuen", "Die bunten Bilder / Gemälde", "Das Café"],
                "correct": 1,
                "explanation": "Colorful pictures: 'Tim findet die bunten Bilder sehr schön.'"
            },
            {
                "question": "Was trinken sie nach dem Museumsbesuch im Café?",
                "options": ["Kaffee", "Eine Limonade", "Tee"],
                "correct": 1,
                "explanation": "Lemonade: 'trinken sie eine Limonade im Museumscafé.'"
            }
        ]
    },
    {
        "id": "st_playground",
        "title": "Am Spielplatz (Playground)",
        "text": "Es ist Samstagnachmittag und das Wetter ist schön. Anna geht mit ihren zwei Kindern, Leon und Mia, zum Spielplatz. Leon ist sieben Jahre alt und Mia ist vier. Auf dem Spielplatz gibt es eine Rutsche, eine Schaukel und einen Sandkasten. Leon klettert sofort auf das Klettergerüst. Mia spielt lieber im Sandkasten und baut eine Burg. Anna sitzt auf einer Bank und schaut den Kindern zu. Nach einer Stunde sind die Kinder müde und hungrig. Anna kauft am Kiosk zwei Eis am Stiel, eines für Leon und eines für Mia. Dann gehen sie zusammen nach Hause.",
        "translation": "It is Saturday afternoon and the weather is nice. Anna goes to the playground with her two children, Leon and Mia. Leon is seven years old and Mia is four. At the playground there is a slide, a swing and a sandpit. Leon immediately climbs on the climbing frame. Mia prefers playing in the sandpit and builds a castle. Anna sits on a bench and watches the children. After one hour the children are tired and hungry. Anna buys two ice lollies at the kiosk, one for Leon and one for Mia. Then they all go home together.",
        "vocab": [
            { "word": "die Rutsche", "translation": "Slide" },
            { "word": "die Schaukel", "translation": "Swing" },
            { "word": "der Sandkasten", "translation": "Sandpit" },
            { "word": "das Klettergerüst", "translation": "Climbing frame" }
        ],
        "questions": [
            {
                "question": "Wann gehen Anna und die Kinder zum Spielplatz?",
                "options": ["Am Samstagmorgen", "Am Samstagnachmittag", "Am Sonntagabend"],
                "correct": 1,
                "explanation": "Saturday afternoon: 'Es ist Samstagnachmittag...'"
            },
            {
                "question": "Wie viele Kinder hat Anna?",
                "options": ["Ein Kind", "Zwei Kinder", "Drei Kinder"],
                "correct": 1,
                "explanation": "Two children: 'mit ihren zwei Kindern, Leon und Mia.'"
            },
            {
                "question": "Wie alt ist Leon?",
                "options": ["Vier Jahre", "Sechs Jahre", "Sieben Jahre"],
                "correct": 2,
                "explanation": "Seven years old: 'Leon ist sieben Jahre alt.'"
            },
            {
                "question": "Was macht Leon auf dem Spielplatz?",
                "options": ["Er schaukelt", "Er klettert auf das Klettergerüst", "Er baut eine Burg"],
                "correct": 1,
                "explanation": "Climbs the frame: 'Leon klettert sofort auf das Klettergerüst.'"
            },
            {
                "question": "Was macht Mia auf dem Spielplatz?",
                "options": ["Sie rutscht", "Sie schaukelt", "Sie spielt im Sandkasten"],
                "correct": 2,
                "explanation": "Plays in the sandpit: 'Mia spielt lieber im Sandkasten.'"
            },
            {
                "question": "Was baut Mia im Sandkasten?",
                "options": ["Ein Haus", "Eine Burg", "Ein Schloss"],
                "correct": 1,
                "explanation": "A castle: 'baut eine Burg.'"
            },
            {
                "question": "Wo sitzt Anna während die Kinder spielen?",
                "options": ["Auf einer Schaukel", "Auf einer Bank", "Auf dem Boden"],
                "correct": 1,
                "explanation": "On a bench: 'Anna sitzt auf einer Bank.'"
            },
            {
                "question": "Wie lange spielen die Kinder auf dem Spielplatz?",
                "options": ["Dreißig Minuten", "Eine Stunde", "Zwei Stunden"],
                "correct": 1,
                "explanation": "One hour: 'Nach einer Stunde sind die Kinder müde.'"
            },
            {
                "question": "Was kauft Anna am Kiosk?",
                "options": ["Zwei Äpfel", "Zwei Eis am Stiel", "Zwei Brötchen"],
                "correct": 1,
                "explanation": "Two ice lollies: 'kauft am Kiosk zwei Eis am Stiel.'"
            },
            {
                "question": "Warum kauft Anna etwas zu essen?",
                "options": ["Weil es Mittagszeit ist", "Weil die Kinder müde und hungrig sind", "Weil der Kiosk billig ist"],
                "correct": 1,
                "explanation": "Because they are tired and hungry: 'sind die Kinder müde und hungrig.'"
            }
        ]
    },
    {
        "id": "st_cinema",
        "title": "Im Kino (Cinema)",
        "text": "Heute Abend gehen Julia und ihr Freund Marco ins Kino. Sie möchten einen neuen Film sehen. Der Film beginnt um 20 Uhr. Sie kaufen die Karten online, weil es an der Kinokasse eine lange Schlange gibt. Julia kauft eine große Tüte Popcorn und Marco kauft eine Cola. Sie sitzen in Reihe sieben, in der Mitte. Der Film ist eine Komödie und sehr lustig. Das Publikum lacht oft. Der Film dauert neunzig Minuten. Nach dem Film sprechen Julia und Marco über die Geschichte und gehen zusammen in ein kleines Café.",
        "translation": "This evening Julia and her boyfriend Marco go to the cinema. They want to see a new film. The film starts at 8 PM. They buy the tickets online because there is a long queue at the box office. Julia buys a large bag of popcorn and Marco buys a cola. They sit in row seven, in the middle. The film is a comedy and very funny. The audience laughs often. The film lasts ninety minutes. After the film Julia and Marco talk about the story and go together to a small café.",
        "vocab": [
            { "word": "die Kinokasse", "translation": "Box office / cinema ticket desk" },
            { "word": "die Schlange", "translation": "Queue" },
            { "word": "die Komödie", "translation": "Comedy" },
            { "word": "das Publikum", "translation": "Audience" }
        ],
        "questions": [
            {
                "question": "Wann gehen Julia und Marco ins Kino?",
                "options": ["Heute Mittag", "Heute Abend", "Heute Morgen"],
                "correct": 1,
                "explanation": "This evening: 'Heute Abend gehen Julia und ihr Freund Marco ins Kino.'"
            },
            {
                "question": "Wann beginnt der Film?",
                "options": ["Um 18 Uhr", "Um 19 Uhr", "Um 20 Uhr"],
                "correct": 2,
                "explanation": "At 8 PM: 'Der Film beginnt um 20 Uhr.'"
            },
            {
                "question": "Warum kaufen sie die Karten online?",
                "options": ["Weil es billiger ist", "Weil es an der Kasse eine lange Schlange gibt", "Weil das Kino geschlossen ist"],
                "correct": 1,
                "explanation": "Long queue: 'weil es an der Kinokasse eine lange Schlange gibt.'"
            },
            {
                "question": "Was kauft Julia im Kino?",
                "options": ["Eine Cola", "Eine Tüte Popcorn", "Ein Eis"],
                "correct": 1,
                "explanation": "Popcorn: 'Julia kauft eine große Tüte Popcorn.'"
            },
            {
                "question": "Was kauft Marco im Kino?",
                "options": ["Popcorn", "Wasser", "Eine Cola"],
                "correct": 2,
                "explanation": "Cola: 'Marco kauft eine Cola.'"
            },
            {
                "question": "In welcher Reihe sitzen Julia und Marco?",
                "options": ["Reihe fünf", "Reihe sieben", "Reihe neun"],
                "correct": 1,
                "explanation": "Row seven: 'Sie sitzen in Reihe sieben.'"
            },
            {
                "question": "Welches Genre ist der Film?",
                "options": ["Ein Thriller", "Ein Drama", "Eine Komödie"],
                "correct": 2,
                "explanation": "A comedy: 'Der Film ist eine Komödie.'"
            },
            {
                "question": "Wie reagiert das Publikum auf den Film?",
                "options": ["Es weint", "Es lacht oft", "Es schläft"],
                "correct": 1,
                "explanation": "Laughs often: 'Das Publikum lacht oft.'"
            },
            {
                "question": "Wie lange dauert der Film?",
                "options": ["Sechzig Minuten", "Neunzig Minuten", "Hundertundzwanzig Minuten"],
                "correct": 1,
                "explanation": "Ninety minutes: 'Der Film dauert neunzig Minuten.'"
            },
            {
                "question": "Was machen Julia und Marco nach dem Kino?",
                "options": ["Sie gehen nach Hause", "Sie gehen in ein kleines Café", "Sie gehen ins Restaurant"],
                "correct": 1,
                "explanation": "To a café: 'gehen zusammen in ein kleines Café.'"
            }
        ]
    },
    {
        "id": "st_haircut",
        "title": "Beim Friseur (Hairdresser)",
        "text": "Herr Wagner möchte einen neuen Haarschnitt. Er geht am Freitagmorgen zum Friseur. Die Friseuse heißt Sandra. Sie fragt: 'Wie möchten Sie die Haare?' Herr Wagner sagt: 'Bitte nicht zu kurz, nur die Spitzen schneiden.' Sandra fragt auch, ob er seine Haare waschen lassen möchte. Herr Wagner sagt ja. Das Haarewaschen kostet zwei Euro extra. Sandra wäscht, schneidet und föhnt die Haare. Das dauert ungefähr dreißig Minuten. Am Ende zeigt sie Herrn Wagner das Ergebnis mit einem Spiegel. Er ist sehr zufrieden. Er bezahlt fünfzehn Euro und gibt Sandra zwei Euro Trinkgeld.",
        "translation": "Mr Wagner wants a new haircut. He goes to the hairdresser on Friday morning. The hairdresser's name is Sandra. She asks: 'How would you like your hair?' Mr Wagner says: 'Please not too short, just trim the ends.' Sandra also asks if he would like to have his hair washed. Mr Wagner says yes. The hair wash costs two euros extra. Sandra washes, cuts and blow-dries the hair. This takes approximately thirty minutes. At the end she shows Mr Wagner the result with a mirror. He is very satisfied. He pays fifteen euros and gives Sandra a two-euro tip.",
        "vocab": [
            { "word": "der Haarschnitt", "translation": "Haircut" },
            { "word": "die Spitzen schneiden", "translation": "To trim the ends" },
            { "word": "föhnen", "translation": "To blow-dry" },
            { "word": "das Trinkgeld", "translation": "Tip (money)" }
        ],
        "questions": [
            {
                "question": "Wann geht Herr Wagner zum Friseur?",
                "options": ["Am Donnerstagabend", "Am Freitagmorgen", "Am Samstagnachmittag"],
                "correct": 1,
                "explanation": "Friday morning: 'Er geht am Freitagmorgen zum Friseur.'"
            },
            {
                "question": "Wie heißt die Friseuse?",
                "options": ["Maria", "Anna", "Sandra"],
                "correct": 2,
                "explanation": "Sandra: 'Die Friseuse heißt Sandra.'"
            },
            {
                "question": "Was möchte Herr Wagner beim Haarschnitt?",
                "options": ["Sehr kurze Haare", "Nur die Spitzen schneiden", "Eine neue Haarfarbe"],
                "correct": 1,
                "explanation": "Just trim the ends: 'nur die Spitzen schneiden.'"
            },
            {
                "question": "Möchte Herr Wagner auch seine Haare waschen lassen?",
                "options": ["Nein", "Ja", "Er weiß es nicht"],
                "correct": 1,
                "explanation": "Yes: 'Herr Wagner sagt ja.'"
            },
            {
                "question": "Was kostet das Haarewaschen extra?",
                "options": ["Ein Euro", "Zwei Euro", "Drei Euro"],
                "correct": 1,
                "explanation": "Two euros: 'Das Haarewaschen kostet zwei Euro extra.'"
            },
            {
                "question": "Was macht Sandra nach dem Waschen und Schneiden?",
                "options": ["Sie kämmt die Haare", "Sie föhnt die Haare", "Sie färbt die Haare"],
                "correct": 1,
                "explanation": "Blow-dries: 'Sandra wäscht, schneidet und föhnt die Haare.'"
            },
            {
                "question": "Wie lange dauert alles beim Friseur?",
                "options": ["Zehn Minuten", "Dreißig Minuten", "Eine Stunde"],
                "correct": 1,
                "explanation": "About thirty minutes: 'Das dauert ungefähr dreißig Minuten.'"
            },
            {
                "question": "Womit zeigt Sandra das Ergebnis?",
                "options": ["Mit einem Foto", "Mit einem Spiegel", "Mit dem Handy"],
                "correct": 1,
                "explanation": "With a mirror: 'zeigt sie Herrn Wagner das Ergebnis mit einem Spiegel.'"
            },
            {
                "question": "Wie viel bezahlt Herr Wagner insgesamt?",
                "options": ["Dreizehn Euro", "Fünfzehn Euro", "Siebzehn Euro"],
                "correct": 1,
                "explanation": "Fifteen euros: 'Er bezahlt fünfzehn Euro.'"
            },
            {
                "question": "Wie viel Trinkgeld gibt Herr Wagner?",
                "options": ["Einen Euro", "Zwei Euro", "Fünf Euro"],
                "correct": 1,
                "explanation": "Two euros: 'gibt Sandra zwei Euro Trinkgeld.'"
            }
        ]
    },
    {
        "id": "st_gym",
        "title": "Im Fitnessstudio (Gym)",
        "text": "Karim geht dreimal pro Woche ins Fitnessstudio. Er ist Mitglied seit sechs Monaten. Heute geht er um sieben Uhr morgens hin, weil das Studio dann nicht so voll ist. Er zieht sich in der Umkleidekabine um und geht in die Sporthalle. Zuerst läuft er dreißig Minuten auf dem Laufband. Dann macht er Kraftübungen für die Arme und den Rücken. Nach dem Training geht er in die Dusche. Im Studio gibt es auch einen Kurs für Yoga, aber Karim mag kein Yoga. Er bevorzugt Schwimmen. Das Fitnessstudio hat auch ein Schwimmbad, aber heute hat er keine Zeit mehr.",
        "translation": "Karim goes to the gym three times a week. He has been a member for six months. Today he goes there at seven in the morning because the studio is not so full then. He gets changed in the changing room and goes into the sports hall. First he runs for thirty minutes on the treadmill. Then he does strength exercises for his arms and back. After training he goes to the shower. The studio also has a yoga class, but Karim does not like yoga. He prefers swimming. The gym also has a swimming pool, but today he has no more time.",
        "vocab": [
            { "word": "die Umkleidekabine", "translation": "Changing room" },
            { "word": "das Laufband", "translation": "Treadmill" },
            { "word": "die Kraftübung", "translation": "Strength exercise" },
            { "word": "das Schwimmbad", "translation": "Swimming pool" }
        ],
        "questions": [
            {
                "question": "Wie oft geht Karim ins Fitnessstudio?",
                "options": ["Einmal pro Woche", "Dreimal pro Woche", "Fünfmal pro Woche"],
                "correct": 1,
                "explanation": "Three times a week: 'Karim geht dreimal pro Woche ins Fitnessstudio.'"
            },
            {
                "question": "Seit wann ist Karim Mitglied im Fitnessstudio?",
                "options": ["Seit drei Monaten", "Seit sechs Monaten", "Seit einem Jahr"],
                "correct": 1,
                "explanation": "Six months: 'Er ist Mitglied seit sechs Monaten.'"
            },
            {
                "question": "Warum geht Karim um sieben Uhr ins Studio?",
                "options": ["Weil es billiger ist", "Weil es dann nicht so voll ist", "Weil er früh arbeiten muss"],
                "correct": 1,
                "explanation": "Not so crowded: 'weil das Studio dann nicht so voll ist.'"
            },
            {
                "question": "Wo zieht sich Karim um?",
                "options": ["Im Büro", "In der Sporthalle", "In der Umkleidekabine"],
                "correct": 2,
                "explanation": "In the changing room: 'Er zieht sich in der Umkleidekabine um.'"
            },
            {
                "question": "Wie lange läuft Karim auf dem Laufband?",
                "options": ["Zwanzig Minuten", "Dreißig Minuten", "Eine Stunde"],
                "correct": 1,
                "explanation": "Thirty minutes: 'läuft er dreißig Minuten auf dem Laufband.'"
            },
            {
                "question": "Für welche Körperteile macht Karim Kraftübungen?",
                "options": ["Beine und Bauch", "Arme und Rücken", "Schultern und Brust"],
                "correct": 1,
                "explanation": "Arms and back: 'Kraftübungen für die Arme und den Rücken.'"
            },
            {
                "question": "Was macht Karim nach dem Training?",
                "options": ["Er geht ins Café", "Er geht in die Dusche", "Er trinkt einen Protein-Shake"],
                "correct": 1,
                "explanation": "Goes to shower: 'geht er in die Dusche.'"
            },
            {
                "question": "Welchen Kurs gibt es im Studio, den Karim nicht mag?",
                "options": ["Pilates", "Yoga", "Zumba"],
                "correct": 1,
                "explanation": "Yoga: 'Es gibt auch einen Kurs für Yoga, aber Karim mag kein Yoga.'"
            },
            {
                "question": "Was macht Karim lieber als Yoga?",
                "options": ["Radfahren", "Schwimmen", "Joggen"],
                "correct": 1,
                "explanation": "Swimming: 'Er bevorzugt Schwimmen.'"
            },
            {
                "question": "Warum geht Karim heute nicht schwimmen?",
                "options": ["Das Schwimmbad ist geschlossen", "Er hat keine Zeit mehr", "Er hat seinen Badeanzug vergessen"],
                "correct": 1,
                "explanation": "No more time: 'heute hat er keine Zeit mehr.'"
            }
        ]
    },
    {
        "id": "st_lost_keys",
        "title": "Die verlorenen Schlüssel (Lost Keys)",
        "text": "Es ist Montagnachmittag. Lisa kommt nach Hause und sucht ihren Hausschlüssel. Aber sie findet ihn nicht in ihrer Tasche. Sie sucht überall: in der Jackentasche, im Rucksack, auf dem Tisch im Flur. Der Schlüssel ist nirgendwo. Lisa ist sehr nervös. Sie ruft ihren Mann Peter an. Peter ist noch im Büro. Er fragt: 'Hast du am Supermarkt bezahlt? Vielleicht liegt der Schlüssel an der Kasse.' Lisa erinnert sich: Ja, sie war heute im Supermarkt! Sie ruft den Supermarkt an. Die Kassiererin sagt, jemand hat einen Schlüssel an der Kasse abgegeben. Lisa fährt sofort zum Supermarkt und holt ihren Schlüssel ab. Sie ist sehr erleichtert.",
        "translation": "It is Monday afternoon. Lisa comes home and looks for her house key. But she cannot find it in her bag. She looks everywhere: in her jacket pocket, in her backpack, on the table in the hallway. The key is nowhere. Lisa is very nervous. She calls her husband Peter. Peter is still in the office. He asks: 'Did you pay at the supermarket? Maybe the key is at the checkout.' Lisa remembers: Yes, she was at the supermarket today! She calls the supermarket. The cashier says someone handed in a key at the checkout. Lisa goes to the supermarket immediately and collects her key. She is very relieved.",
        "vocab": [
            { "word": "der Hausschlüssel", "translation": "House key" },
            { "word": "die Jackentasche", "translation": "Jacket pocket" },
            { "word": "nirgendwo", "translation": "Nowhere" },
            { "word": "erleichtert", "translation": "Relieved" }
        ],
        "questions": [
            {
                "question": "Wann kommt Lisa nach Hause?",
                "options": ["Am Montagmorgen", "Am Montagnachmittag", "Am Montagabend"],
                "correct": 1,
                "explanation": "Monday afternoon: 'Es ist Montagnachmittag. Lisa kommt nach Hause.'"
            },
            {
                "question": "Was sucht Lisa?",
                "options": ["Ihren Geldbeutel", "Ihren Hausschlüssel", "Ihr Handy"],
                "correct": 1,
                "explanation": "Her house key: 'sucht ihren Hausschlüssel.'"
            },
            {
                "question": "Wo sucht Lisa NICHT?",
                "options": ["In der Jackentasche", "Im Rucksack", "Im Auto"],
                "correct": 2,
                "explanation": "She does not mention the car. She looks in her jacket pocket, backpack and on the table in the hallway."
            },
            {
                "question": "Wie fühlt sich Lisa, als sie den Schlüssel nicht findet?",
                "options": ["Ruhig", "Nervös", "Glücklich"],
                "correct": 1,
                "explanation": "Very nervous: 'Lisa ist sehr nervös.'"
            },
            {
                "question": "Wen ruft Lisa an?",
                "options": ["Ihre Mutter", "Die Polizei", "Ihren Mann Peter"],
                "correct": 2,
                "explanation": "Her husband Peter: 'Sie ruft ihren Mann Peter an.'"
            },
            {
                "question": "Wo ist Peter gerade?",
                "options": ["Zu Hause", "Im Supermarkt", "Im Büro"],
                "correct": 2,
                "explanation": "Still in the office: 'Peter ist noch im Büro.'"
            },
            {
                "question": "Was schlägt Peter vor?",
                "options": ["Sie soll die Polizei anrufen", "Sie soll beim Supermarkt fragen", "Sie soll einen Schlüsseldienst rufen"],
                "correct": 1,
                "explanation": "Ask at the supermarket checkout: 'vielleicht liegt der Schlüssel an der Kasse.'"
            },
            {
                "question": "Was hat Lisa heute gemacht?",
                "options": ["Sie war im Kino", "Sie war im Supermarkt", "Sie war in der Schule"],
                "correct": 1,
                "explanation": "She was at the supermarket: 'sie war heute im Supermarkt!'"
            },
            {
                "question": "Was sagt die Kassiererin am Telefon?",
                "options": ["Der Schlüssel ist nicht hier", "Jemand hat einen Schlüssel abgegeben", "Lisa soll morgen kommen"],
                "correct": 1,
                "explanation": "Key was handed in: 'jemand hat einen Schlüssel an der Kasse abgegeben.'"
            },
            {
                "question": "Wie fühlt sich Lisa am Ende?",
                "options": ["Noch nervöser", "Traurig", "Sehr erleichtert"],
                "correct": 2,
                "explanation": "Very relieved: 'Sie ist sehr erleichtert.'"
            }
        ]
    },
    {
        "id": "st_neighbours",
        "title": "Die neuen Nachbarn (New Neighbours)",
        "text": "Familie Schneider zieht in eine neue Wohnung. Die Wohnung ist im dritten Stock. Am ersten Tag klingelt die Nachbarin, Frau Weber, an der Tür. Sie bringt einen Kuchen als Willkommensgeschenk mit. Herr Schneider öffnet die Tür und bedankt sich herzlich. Frau Weber fragt, ob die Familie Hilfe braucht. Herr Schneider sagt, dass sie ein Möbelpacker-Team haben, aber danke. Am nächsten Tag begegnen sich Frau Schneider und Frau Weber im Treppenhaus. Frau Schneider lädt Frau Weber zum Kaffee ein. Die beiden Frauen unterhalten sich eine Stunde lang und werden schnell Freundinnen.",
        "translation": "The Schneider family moves into a new apartment. The apartment is on the third floor. On the first day the neighbour, Mrs Weber, rings the doorbell. She brings a cake as a welcome gift. Mr Schneider opens the door and thanks her warmly. Mrs Weber asks if the family needs help. Mr Schneider says that they have a removal team, but thanks. The next day Mrs Schneider and Mrs Weber meet each other in the stairwell. Mrs Schneider invites Mrs Weber for a coffee. The two women chat for an hour and quickly become friends.",
        "vocab": [
            { "word": "das Willkommensgeschenk", "translation": "Welcome gift" },
            { "word": "der Möbelpacker", "translation": "Removal worker" },
            { "word": "das Treppenhaus", "translation": "Stairwell" },
            { "word": "sich unterhalten", "translation": "To chat / converse" }
        ],
        "questions": [
            {
                "question": "In welchem Stock ist die neue Wohnung der Familie Schneider?",
                "options": ["Im zweiten Stock", "Im dritten Stock", "Im vierten Stock"],
                "correct": 1,
                "explanation": "Third floor: 'Die Wohnung ist im dritten Stock.'"
            },
            {
                "question": "Wer klingelt am ersten Tag an der Tür?",
                "options": ["Der Hausmeister", "Die Nachbarin Frau Weber", "Der Postbote"],
                "correct": 1,
                "explanation": "Neighbour Mrs Weber: 'klingelt die Nachbarin, Frau Weber, an der Tür.'"
            },
            {
                "question": "Was bringt Frau Weber mit?",
                "options": ["Eine Flasche Wein", "Einen Kuchen", "Blumen"],
                "correct": 1,
                "explanation": "A cake: 'Sie bringt einen Kuchen als Willkommensgeschenk mit.'"
            },
            {
                "question": "Wer öffnet die Tür?",
                "options": ["Frau Schneider", "Herr Schneider", "Ein Kind"],
                "correct": 1,
                "explanation": "Mr Schneider: 'Herr Schneider öffnet die Tür.'"
            },
            {
                "question": "Was fragt Frau Weber?",
                "options": ["Ob sie den Kuchen mögen", "Ob die Familie Hilfe braucht", "Ob sie ruhig sein können"],
                "correct": 1,
                "explanation": "If they need help: 'Frau Weber fragt, ob die Familie Hilfe braucht.'"
            },
            {
                "question": "Wie zieht Familie Schneider um?",
                "options": ["Sie machen es selbst", "Mit einem Möbelpacker-Team", "Mit Hilfe der Nachbarn"],
                "correct": 1,
                "explanation": "With a removal team: 'sie haben ein Möbelpacker-Team.'"
            },
            {
                "question": "Wo treffen sich Frau Schneider und Frau Weber am nächsten Tag?",
                "options": ["Im Supermarkt", "Im Treppenhaus", "Im Park"],
                "correct": 1,
                "explanation": "In the stairwell: 'begegnen sich ... im Treppenhaus.'"
            },
            {
                "question": "Was macht Frau Schneider, als sie Frau Weber trifft?",
                "options": ["Sie bringt ihr auch einen Kuchen", "Sie lädt sie zum Kaffee ein", "Sie bittet um Hilfe"],
                "correct": 1,
                "explanation": "Invites her for coffee: 'Frau Schneider lädt Frau Weber zum Kaffee ein.'"
            },
            {
                "question": "Wie lange unterhalten sich die zwei Frauen?",
                "options": ["Dreißig Minuten", "Eine Stunde", "Zwei Stunden"],
                "correct": 1,
                "explanation": "One hour: 'unterhalten sich eine Stunde lang.'"
            },
            {
                "question": "Was werden Frau Schneider und Frau Weber?",
                "options": ["Kolleginnen", "Freundinnen", "Mitbewohnerinnen"],
                "correct": 1,
                "explanation": "Friends: 'werden schnell Freundinnen.'"
            }
        ]
    },
    {
        "id": "st_airport",
        "title": "Am Flughafen (Airport)",
        "text": "Herr und Frau Bauer fliegen morgen früh in den Urlaub nach Spanien. Ihr Flug geht um acht Uhr morgens ab. Deshalb fahren sie schon um sechs Uhr zum Flughafen. Am Check-in-Schalter zeigen sie ihre Reisepässe und geben ihre Koffer ab. Jeder Koffer darf maximal dreiundzwanzig Kilo wiegen. Der Koffer von Frau Bauer ist zu schwer, sie nimmt ein paar Sachen heraus. Dann gehen sie durch die Sicherheitskontrolle. Sie müssen ihre Jacken, Schuhe und Laptops in eine Schale legen. Am Gate warten sie noch zwanzig Minuten auf den Abflug. Frau Bauer kauft ein Buch am Zeitungskiosk.",
        "translation": "Mr and Mrs Bauer are flying on holiday to Spain tomorrow morning. Their flight departs at eight in the morning. Therefore they drive to the airport at six o'clock. At the check-in counter they show their passports and hand over their suitcases. Each suitcase may weigh a maximum of twenty-three kilograms. Mrs Bauer's suitcase is too heavy, so she takes some things out. Then they go through security. They have to put their jackets, shoes and laptops in a tray. At the gate they wait twenty more minutes for the departure. Mrs Bauer buys a book at the newspaper kiosk.",
        "vocab": [
            { "word": "der Reisepass", "translation": "Passport" },
            { "word": "der Koffer", "translation": "Suitcase" },
            { "word": "die Sicherheitskontrolle", "translation": "Security check" },
            { "word": "der Abflug", "translation": "Departure (of a flight)" }
        ],
        "questions": [
            {
                "question": "Wohin fliegen Herr und Frau Bauer?",
                "options": ["Nach Italien", "Nach Spanien", "Nach Frankreich"],
                "correct": 1,
                "explanation": "Spain: 'fliegen ... in den Urlaub nach Spanien.'"
            },
            {
                "question": "Wann geht der Flug ab?",
                "options": ["Um sechs Uhr", "Um acht Uhr", "Um zehn Uhr"],
                "correct": 1,
                "explanation": "At eight: 'Ihr Flug geht um acht Uhr morgens ab.'"
            },
            {
                "question": "Wann fahren sie zum Flughafen?",
                "options": ["Um fünf Uhr", "Um sechs Uhr", "Um sieben Uhr"],
                "correct": 1,
                "explanation": "At six: 'fahren sie schon um sechs Uhr zum Flughafen.'"
            },
            {
                "question": "Was zeigen sie am Check-in-Schalter?",
                "options": ["Ihre Flugtickets", "Ihre Reisepässe", "Ihre Kreditkarten"],
                "correct": 1,
                "explanation": "Their passports: 'zeigen sie ihre Reisepässe.'"
            },
            {
                "question": "Wie viel darf ein Koffer maximal wiegen?",
                "options": ["Zwanzig Kilo", "Dreiundzwanzig Kilo", "Fünfundzwanzig Kilo"],
                "correct": 1,
                "explanation": "23 kilos: 'maximal dreiundzwanzig Kilo wiegen.'"
            },
            {
                "question": "Was ist das Problem mit dem Koffer von Frau Bauer?",
                "options": ["Er ist zu klein", "Er ist zu schwer", "Er ist kaputt"],
                "correct": 1,
                "explanation": "Too heavy: 'Der Koffer von Frau Bauer ist zu schwer.'"
            },
            {
                "question": "Was müssen sie bei der Sicherheitskontrolle in eine Schale legen?",
                "options": ["Reisepässe und Portemonnaie", "Jacken, Schuhe und Laptops", "Koffer und Taschen"],
                "correct": 1,
                "explanation": "Jackets, shoes and laptops: 'Sie müssen ihre Jacken, Schuhe und Laptops in eine Schale legen.'"
            },
            {
                "question": "Wie lange warten sie noch am Gate?",
                "options": ["Zehn Minuten", "Zwanzig Minuten", "Dreißig Minuten"],
                "correct": 1,
                "explanation": "Twenty minutes: 'warten sie noch zwanzig Minuten auf den Abflug.'"
            },
            {
                "question": "Was kauft Frau Bauer am Zeitungskiosk?",
                "options": ["Eine Zeitschrift", "Ein Buch", "Schokolade"],
                "correct": 1,
                "explanation": "A book: 'Frau Bauer kauft ein Buch am Zeitungskiosk.'"
            },
            {
                "question": "Warum fahren sie schon um sechs Uhr zum Flughafen?",
                "options": ["Weil der Zug früh fährt", "Weil der Flug um acht Uhr abgeht", "Weil der Flughafen weit weg ist"],
                "correct": 1,
                "explanation": "Because the flight is at 8 AM: 'Ihr Flug geht um acht Uhr morgens ab. Deshalb fahren sie schon um sechs Uhr.'"
            }
        ]
    },
    {
        "id": "st_birthday_cake",
        "title": "Der Geburtstagskuchen (Birthday Cake)",
        "text": "Morgen hat Oma Elfriede Geburtstag. Sie wird achtzig Jahre alt. Ihre Enkelin Sophie möchte einen Kuchen backen. Sophie kauft alle Zutaten im Supermarkt: Mehl, Zucker, Butter, Eier, Milch und Backpulver. Zu Hause liest sie das Rezept sehr genau. Sie mischt alle Zutaten in einer großen Schüssel und gießt den Teig in die Backform. Der Kuchen kommt für vierzig Minuten in den Ofen bei einhundertachtzig Grad. Nach dem Backen lässt Sophie den Kuchen abkühlen. Dann dekoriert sie ihn mit Sahne und roten Erdbeeren. Sie schreibt auch 'Happy Birthday, Oma!' mit Schokolade auf den Kuchen.",
        "translation": "Tomorrow is Grandma Elfriede's birthday. She is turning eighty years old. Her granddaughter Sophie wants to bake a cake. Sophie buys all the ingredients at the supermarket: flour, sugar, butter, eggs, milk and baking powder. At home she reads the recipe very carefully. She mixes all the ingredients in a large bowl and pours the batter into the baking tin. The cake goes into the oven for forty minutes at one hundred and eighty degrees. After baking, Sophie lets the cake cool down. Then she decorates it with cream and red strawberries. She also writes 'Happy Birthday, Grandma!' on the cake with chocolate.",
        "vocab": [
            { "word": "die Zutaten", "translation": "Ingredients" },
            { "word": "der Teig", "translation": "Dough / batter" },
            { "word": "abkühlen", "translation": "To cool down" },
            { "word": "die Sahne", "translation": "Cream" }
        ],
        "questions": [
            {
                "question": "Wessen Geburtstag ist morgen?",
                "options": ["Sophies Mutter", "Oma Elfriede", "Sophies Schwester"],
                "correct": 1,
                "explanation": "Grandma Elfriede's: 'Morgen hat Oma Elfriede Geburtstag.'"
            },
            {
                "question": "Wie alt wird Oma Elfriede?",
                "options": ["Siebzig Jahre", "Fünfundsiebzig Jahre", "Achtzig Jahre"],
                "correct": 2,
                "explanation": "Eighty: 'Sie wird achtzig Jahre alt.'"
            },
            {
                "question": "Wer backt den Kuchen?",
                "options": ["Oma Elfriede selbst", "Sophies Mutter", "Sophie"],
                "correct": 2,
                "explanation": "Sophie: 'Ihre Enkelin Sophie möchte einen Kuchen backen.'"
            },
            {
                "question": "Wo kauft Sophie die Zutaten?",
                "options": ["Auf dem Markt", "Im Supermarkt", "In der Bäckerei"],
                "correct": 1,
                "explanation": "At the supermarket: 'Sophie kauft alle Zutaten im Supermarkt.'"
            },
            {
                "question": "Was macht Sophie mit den Zutaten?",
                "options": ["Sie kocht sie auf dem Herd", "Sie mischt sie in einer Schüssel", "Sie friert sie ein"],
                "correct": 1,
                "explanation": "Mixes them in a bowl: 'mischt alle Zutaten in einer großen Schüssel.'"
            },
            {
                "question": "Wie lange kommt der Kuchen in den Ofen?",
                "options": ["Dreißig Minuten", "Vierzig Minuten", "Eine Stunde"],
                "correct": 1,
                "explanation": "Forty minutes: 'für vierzig Minuten in den Ofen.'"
            },
            {
                "question": "Bei wie viel Grad backt der Kuchen?",
                "options": ["Hundertfünfzig Grad", "Einhundertachtzig Grad", "Zweihundert Grad"],
                "correct": 1,
                "explanation": "180 degrees: 'bei einhundertachtzig Grad.'"
            },
            {
                "question": "Was macht Sophie, bevor sie den Kuchen dekoriert?",
                "options": ["Sie isst ein Stück", "Sie lässt den Kuchen abkühlen", "Sie ruft Oma an"],
                "correct": 1,
                "explanation": "Lets it cool: 'lässt Sophie den Kuchen abkühlen.'"
            },
            {
                "question": "Womit dekoriert Sophie den Kuchen?",
                "options": ["Mit Schokoladenstreuseln", "Mit Sahne und Erdbeeren", "Mit Zuckerguss"],
                "correct": 1,
                "explanation": "Cream and strawberries: 'dekoriert sie ihn mit Sahne und roten Erdbeeren.'"
            },
            {
                "question": "Was schreibt Sophie auf den Kuchen?",
                "options": ["'Herzlichen Glückwunsch!'", "'Happy Birthday, Oma!'", "'Ich liebe dich, Oma!'"],
                "correct": 1,
                "explanation": "'Happy Birthday, Oma!': 'Sie schreibt auch 'Happy Birthday, Oma!' mit Schokolade auf den Kuchen.'"
            }
        ]
    },
    {
        "id": "st_language_course",
        "title": "Der Deutschkurs (German Course)",
        "text": "Priya kommt aus Indien und wohnt seit drei Monaten in Berlin. Sie macht einen Deutschkurs an der Volkshochschule. Der Kurs findet dienstags und donnerstags von neun bis elf Uhr statt. In der Klasse sind achtzehn Schüler aus verschiedenen Ländern: Italien, Türkei, Syrien und Vietnam. Der Lehrer heißt Herr Mauer. Er erklärt die Grammatik auf Deutsch und zeigt viele Beispiele. Priya findet die deutschen Artikel schwierig: der, die, das. Herr Mauer gibt auch Hausaufgaben auf. Priya macht ihre Hausaufgaben jeden Abend. Nach drei Monaten macht die Klasse eine Prüfung. Priya besteht die Prüfung mit einer guten Note.",
        "translation": "Priya comes from India and has been living in Berlin for three months. She is doing a German course at the adult education centre. The course takes place on Tuesdays and Thursdays from nine to eleven. In the class there are eighteen students from different countries: Italy, Turkey, Syria and Vietnam. The teacher's name is Mr Mauer. He explains grammar in German and shows many examples. Priya finds the German articles difficult: der, die, das. Mr Mauer also sets homework. Priya does her homework every evening. After three months the class takes an exam. Priya passes the exam with a good grade.",
        "vocab": [
            { "word": "die Volkshochschule", "translation": "Adult education centre (VHS)" },
            { "word": "die Hausaufgaben", "translation": "Homework" },
            { "word": "die Prüfung", "translation": "Exam / test" },
            { "word": "bestehen", "translation": "To pass (an exam)" }
        ],
        "questions": [
            {
                "question": "Woher kommt Priya?",
                "options": ["Aus China", "Aus Indien", "Aus Pakistan"],
                "correct": 1,
                "explanation": "From India: 'Priya kommt aus Indien.'"
            },
            {
                "question": "Wie lange wohnt Priya schon in Berlin?",
                "options": ["Seit einem Monat", "Seit drei Monaten", "Seit einem Jahr"],
                "correct": 1,
                "explanation": "Three months: 'wohnt seit drei Monaten in Berlin.'"
            },
            {
                "question": "Wo macht Priya den Deutschkurs?",
                "options": ["An der Universität", "An der Volkshochschule", "An einer Privatschule"],
                "correct": 1,
                "explanation": "At the adult education centre: 'an der Volkshochschule.'"
            },
            {
                "question": "Wann findet der Kurs statt?",
                "options": ["Montags und mittwochs", "Dienstags und donnerstags", "Montags bis freitags"],
                "correct": 1,
                "explanation": "Tuesdays and Thursdays: 'findet dienstags und donnerstags ... statt.'"
            },
            {
                "question": "Wie viele Schüler sind in der Klasse?",
                "options": ["Zwölf", "Fünfzehn", "Achtzehn"],
                "correct": 2,
                "explanation": "Eighteen: 'In der Klasse sind achtzehn Schüler.'"
            },
            {
                "question": "Wie heißt der Lehrer?",
                "options": ["Herr Müller", "Herr Mauer", "Herr Meyer"],
                "correct": 1,
                "explanation": "Herr Mauer: 'Der Lehrer heißt Herr Mauer.'"
            },
            {
                "question": "Was findet Priya schwierig?",
                "options": ["Das Alphabet", "Die deutschen Artikel (der, die, das)", "Die Zahlen"],
                "correct": 1,
                "explanation": "The articles: 'Priya findet die deutschen Artikel schwierig: der, die, das.'"
            },
            {
                "question": "Wann macht Priya ihre Hausaufgaben?",
                "options": ["Am Morgen", "In der Mittagspause", "Jeden Abend"],
                "correct": 2,
                "explanation": "Every evening: 'Priya macht ihre Hausaufgaben jeden Abend.'"
            },
            {
                "question": "Wann macht die Klasse eine Prüfung?",
                "options": ["Nach einem Monat", "Nach zwei Monaten", "Nach drei Monaten"],
                "correct": 2,
                "explanation": "After three months: 'Nach drei Monaten macht die Klasse eine Prüfung.'"
            },
            {
                "question": "Wie besteht Priya die Prüfung?",
                "options": ["Sie fällt durch", "Mit einer schlechten Note", "Mit einer guten Note"],
                "correct": 2,
                "explanation": "With a good grade: 'Priya besteht die Prüfung mit einer guten Note.'"
            }
        ]
    },
    {
        "id": "st_market",
        "title": "Auf dem Wochenmarkt (Weekly Market)",
        "text": "Jeden Samstag geht Frau Klein auf den Wochenmarkt in ihrer Stadt. Der Markt beginnt um acht Uhr morgens und endet um dreizehn Uhr. Es gibt viele Stände mit frischem Obst, Gemüse, Käse, Brot und Blumen. Frau Klein kauft zuerst beim Bäcker ein Brot und drei Brötchen. Dann geht sie zum Gemüsestand und kauft Tomaten, Karotten und einen Salat. Am Käsestand probiert sie zwei Sorten und kauft dann einen Ziegen-käse. Sie bezahlt alles bar. Am Ende kauft sie noch einen Blumenstrauß für die Küche. Der Wochenmarkt ist frischer und billiger als der Supermarkt, findet Frau Klein.",
        "translation": "Every Saturday Mrs Klein goes to the weekly market in her town. The market starts at eight in the morning and ends at one o'clock. There are many stalls with fresh fruit, vegetables, cheese, bread and flowers. Mrs Klein first buys a loaf of bread and three bread rolls from the baker. Then she goes to the vegetable stall and buys tomatoes, carrots and a lettuce. At the cheese stall she tries two varieties and then buys a goat's cheese. She pays for everything in cash. At the end she also buys a bunch of flowers for the kitchen. The weekly market is fresher and cheaper than the supermarket, Mrs Klein thinks.",
        "vocab": [
            { "word": "der Stand", "translation": "Stall / stand (at a market)" },
            { "word": "der Blumenstrauß", "translation": "Bunch of flowers" },
            { "word": "bar bezahlen", "translation": "To pay in cash" },
            { "word": "der Ziegenkäse", "translation": "Goat's cheese" }
        ],
        "questions": [
            {
                "question": "Wie oft geht Frau Klein auf den Wochenmarkt?",
                "options": ["Jeden Freitag", "Jeden Samstag", "Jeden Sonntag"],
                "correct": 1,
                "explanation": "Every Saturday: 'Jeden Samstag geht Frau Klein auf den Wochenmarkt.'"
            },
            {
                "question": "Wann beginnt der Markt?",
                "options": ["Um sieben Uhr", "Um acht Uhr", "Um neun Uhr"],
                "correct": 1,
                "explanation": "At eight: 'Der Markt beginnt um acht Uhr morgens.'"
            },
            {
                "question": "Wann endet der Markt?",
                "options": ["Um zwölf Uhr", "Um dreizehn Uhr", "Um vierzehn Uhr"],
                "correct": 1,
                "explanation": "At one: 'endet um dreizehn Uhr.'"
            },
            {
                "question": "Was kauft Frau Klein zuerst?",
                "options": ["Gemüse", "Blumen", "Brot und Brötchen"],
                "correct": 2,
                "explanation": "Bread and rolls: 'kauft zuerst beim Bäcker ein Brot und drei Brötchen.'"
            },
            {
                "question": "Was kauft Frau Klein am Gemüsestand?",
                "options": ["Kartoffeln, Zwiebeln und Paprika", "Tomaten, Karotten und einen Salat", "Äpfel, Birnen und Bananen"],
                "correct": 1,
                "explanation": "Tomatoes, carrots, and lettuce: 'kauft Tomaten, Karotten und einen Salat.'"
            },
            {
                "question": "Was macht Frau Klein am Käsestand, bevor sie kauft?",
                "options": ["Sie fragt nach dem Preis", "Sie probiert zwei Sorten", "Sie vergleicht die Käse"],
                "correct": 1,
                "explanation": "Tries two varieties: 'probiert sie zwei Sorten.'"
            },
            {
                "question": "Welchen Käse kauft Frau Klein?",
                "options": ["Gouda", "Camembert", "Ziegenkäse"],
                "correct": 2,
                "explanation": "Goat's cheese: 'kauft dann einen Ziegenkäse.'"
            },
            {
                "question": "Wie bezahlt Frau Klein?",
                "options": ["Mit Kreditkarte", "Mit dem Handy", "Bar"],
                "correct": 2,
                "explanation": "In cash: 'Sie bezahlt alles bar.'"
            },
            {
                "question": "Was kauft Frau Klein am Ende?",
                "options": ["Einen Kuchen", "Einen Blumenstrauß", "Mehr Gemüse"],
                "correct": 1,
                "explanation": "A bunch of flowers: 'kauft sie noch einen Blumenstrauß für die Küche.'"
            },
            {
                "question": "Was denkt Frau Klein über den Wochenmarkt?",
                "options": ["Er ist teurer als der Supermarkt", "Er ist frischer und billiger als der Supermarkt", "Er ist zu weit weg"],
                "correct": 1,
                "explanation": "Fresher and cheaper: 'Der Wochenmarkt ist frischer und billiger als der Supermarkt.'"
            }
        ]
    }
];

// --- 6. OVERRIDE LOADLEARNITEM & VOCABULARY VIEW CONTROLS ---
if (typeof learningState !== 'undefined') {
    learningState.viewMode = "learning"; // default view
}

function setVocabViewMode(mode) {
    learningState.viewMode = mode;
    loadLearnItem();
}
window.setVocabViewMode = setVocabViewMode;

function selectVocabFromGrid(idx) {
    learningState.currentIndex = idx;
    learningState.viewMode = "learning";
    loadLearnItem();
}
window.selectVocabFromGrid = selectVocabFromGrid;

// Monkey-patch loadLearnItem
const originalLoadLearnItem = loadLearnItem;
loadLearnItem = function() {
    if (learningState.type === "vocab") {
        const item = learningState.items[learningState.currentIndex];
        const badge = document.getElementById("learn-progress-badge");
        const bar = document.getElementById("learn-progress-bar-fill");
        const container = document.getElementById("learn-card-content");
        const prevBtn = document.getElementById("btn-learn-prev");
        const nextBtn = document.getElementById("btn-learn-next");
        
        const total = learningState.items.length;
        const currentNum = learningState.currentIndex + 1;
        
        if (badge) badge.textContent = `${currentNum} / ${total}`;
        if (bar) bar.style.width = `${(currentNum / total) * 100}%`;
        if (prevBtn) prevBtn.disabled = (learningState.currentIndex === 0);
        
        if (nextBtn) {
            if (learningState.currentIndex === total - 1) {
                nextBtn.innerHTML = `Lernen beenden 🏁`;
            } else {
                nextBtn.innerHTML = `Weiter &rarr;`;
            }
        }
        
        document.getElementById("learn-workspace-title").textContent = "Vokabeln lernen";
        
        let headerTabs = `
            <div class="view-mode-tabs" style="display:flex; justify-content:center; gap:12px; margin-bottom:24px; flex-wrap:wrap;">
                <button class="btn btn-xs tab-btn ${learningState.viewMode === 'learning' ? 'btn-primary active' : 'btn-secondary'}" onclick="setVocabViewMode('learning')" style="min-height:36px;">🎴 Learning View</button>
                <button class="btn btn-xs tab-btn ${learningState.viewMode === 'card' ? 'btn-primary active' : 'btn-secondary'}" onclick="setVocabViewMode('card')" style="min-height:36px;">📇 Card View</button>
                <button class="btn btn-xs tab-btn ${learningState.viewMode === 'grid' ? 'btn-primary active' : 'btn-secondary'}" onclick="setVocabViewMode('grid')" style="min-height:36px;">🎚️ Grid View</button>
            </div>
        `;
        
        let bodyHTML = "";
        
        if (learningState.viewMode === "learning") {
            bodyHTML = `
                <div class="vocab-learn-card" style="animation: fadeIn 0.2s ease-out;">
                    <div class="vocab-picture-wrapper" style="margin: 0 auto 16px auto;">${item.emoji || '📖'}</div>
                    <div class="vocab-learn-german" style="font-size: 2.5rem; font-weight:800; line-height:1.2; margin-bottom:4px;">${item.word}</div>
                    ${getPronunciationHTML(item.word)}
                    
                    <div style="margin: 16px 0;">
                        <span style="font-size: 1.35rem; font-weight:700; color: var(--color-success);">${item.translation}</span>
                    </div>
                    
                    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 16px; flex-wrap:wrap;">
                        <button class="btn btn-primary btn-touch-audio btn-touch" onclick="playSpeech('${item.word.replace(/'/g, "\\'")}', 1.0)">🔊 Normal</button>
                        <button class="btn btn-secondary btn-touch-audio btn-touch" onclick="playSpeech('${item.word.replace(/'/g, "\\'")}', 0.65)">🐢 Langsam</button>
                    </div>
                    
                    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed var(--color-border); text-align: left;">
                        <h4 style="margin:0 0 6px 0; color:var(--color-primary); font-size:0.95rem;">Beispielsatz / Example Sentence:</h4>
                        <div style="font-size:1.1rem; font-weight:600; color:var(--color-text-primary);">${item.example}</div>
                        ${getPronunciationHTML(item.example)}
                        <div style="font-size:0.95rem; font-style:italic; color:var(--color-success); margin-top:4px;">${item.exampleTranslation}</div>
                        <div style="display:flex; gap:8px; margin-top:10px;">
                            <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${item.example.replace(/'/g, "\\'")}', 1.0)">🔊 Play</button>
                            <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${item.example.replace(/'/g, "\\'")}', 0.65)">🐢 Langsam</button>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector(".learning-navigation").style.display = "flex";
            document.getElementById("learn-progress-badge").style.display = "block";
            document.querySelector("#view-learning-workspace .progress-bar-container").style.display = "block";
            
        } else if (learningState.viewMode === "card") {
            bodyHTML = `
                <div class="vocab-learn-card" style="animation: fadeIn 0.2s ease-out; perspective: 1000px; display:flex; justify-content:center; padding:12px 0;">
                    <div id="vocab-flip-card" class="glass-panel" style="width:100%; max-width:380px; min-height:260px; cursor:pointer; position:relative; transform-style:preserve-3d; transition:transform 0.5s; display:flex; flex-direction:column; justify-content:center; align-items:center; border:2px solid var(--color-primary); border-radius:var(--radius-lg); padding:24px;">
                        <!-- Front Content -->
                        <div id="vocab-card-front" style="display:flex; flex-direction:column; align-items:center; gap:12px; backface-visibility:hidden; width:100%;">
                            <div class="vocab-picture-wrapper" style="width:80px; height:80px; font-size:3rem;">${item.emoji || '📖'}</div>
                            <div class="vocab-learn-german" style="font-size:2.2rem; margin-bottom:0;">${item.word}</div>
                            <span style="font-size:0.8rem; color:var(--color-text-muted);">Tippen zum Umdrehen / Tap to reveal</span>
                        </div>
                        
                        <!-- Back Content -->
                        <div id="vocab-card-back" style="display:none; flex-direction:column; align-items:center; gap:8px; text-align:center; backface-visibility:hidden; width:100%;">
                            <span style="font-size: 1.5rem; font-weight:700; color: var(--color-success);">${item.translation}</span>
                            ${getPronunciationHTML(item.word)}
                            
                            <div style="margin-top:16px; font-size:0.95rem; font-weight:600; line-height:1.4; border-top:1px dashed var(--color-border); padding-top:10px; width:100%;">
                                <div style="color:var(--color-text-primary); font-size:1.05rem;">${item.example}</div>
                                <div style="color:var(--color-text-muted); font-size:0.85rem; font-style:italic; margin-top:2px;">${item.exampleTranslation}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector(".learning-navigation").style.display = "flex";
            document.getElementById("learn-progress-badge").style.display = "block";
            document.querySelector("#view-learning-workspace .progress-bar-container").style.display = "block";
            
            setTimeout(() => {
                const flipCard = document.getElementById("vocab-flip-card");
                if (flipCard) {
                    let flipped = false;
                    flipCard.onclick = () => {
                        flipped = !flipped;
                        flipCard.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
                        setTimeout(() => {
                            if (flipped) {
                                document.getElementById("vocab-card-front").style.display = "none";
                                document.getElementById("vocab-card-back").style.display = "flex";
                            } else {
                                document.getElementById("vocab-card-front").style.display = "flex";
                                document.getElementById("vocab-card-back").style.display = "none";
                            }
                        }, 150);
                    };
                }
            }, 50);
            
        } else if (learningState.viewMode === "grid") {
            let gridItemsHTML = "";
            learningState.items.forEach((vocabItem, idx) => {
                gridItemsHTML += `
                    <div class="vocab-picture-card glass-panel btn-touch" onclick="selectVocabFromGrid(${idx})" style="padding:16px; cursor:pointer; min-height:140px; justify-content:center;">
                        <div class="vocab-picture-wrapper" style="width:44px; height:44px; font-size:1.8rem; margin-bottom:8px;">${vocabItem.emoji || '📖'}</div>
                        <div style="font-weight:700; font-size:0.95rem; color:var(--color-text-primary); text-align:center;">${vocabItem.word}</div>
                        ${getPronunciationHTML(vocabItem.word)}
                        <div style="font-size:0.8rem; color:var(--color-text-muted); text-align:center; margin-top:2px;">${vocabItem.translation}</div>
                    </div>
                `;
            });
            
            bodyHTML = `
                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:12px; max-height:450px; overflow-y:auto; padding:4px;">
                    ${gridItemsHTML}
                </div>
            `;
            document.querySelector(".learning-navigation").style.display = "none";
            document.getElementById("learn-progress-badge").style.display = "none";
            document.querySelector("#view-learning-workspace .progress-bar-container").style.display = "none";
        }
        
        container.innerHTML = headerTabs + bodyHTML;
    } else {
        originalLoadLearnItem();
    }
};

// --- 7. OVERRIDE STARTPRACTICEMODE FOR NEW ROUTING ---
const originalStartPracticeMode = startPracticeMode;
startPracticeMode = function(type) {
    if (type === "grammar") {
        openGrammarLessonHub();
    } else if (type === "phrases") {
        openPhraseBank();
    } else if (type === "scenarios") {
        openRealLifeScenarios();
    } else if (type === "stories" || type === "listening") {
        openInteractiveHoerenHub();
    } else {
        originalStartPracticeMode(type);
    }
};
window.startPracticeMode = startPracticeMode;

// --- 8. REFRESH CONTENT HELPER ---
function refreshActiveViewContent() {
    const activePanel = document.querySelector(".view-panel.active");
    if (!activePanel) return;
    
    if (activePanel.id === "view-learning-workspace") {
        loadLearnItem();
    } else if (activePanel.id === "view-grammar-lessons" && currentGrammarLesson) {
        const activeTab = document.querySelector(".lesson-tabs .active");
        if (activeTab && activeTab.id === "tab-grammar-lesson") {
            startGrammarLesson(currentGrammarLesson.id);
        } else if (grammarPracticeState.currentIndex < currentGrammarLesson.practiceQuestions.length) {
            loadGrammarQuestion();
        }
    } else if (activePanel.id === "view-phrase-bank") {
        renderPhrases();
    } else if (activePanel.id === "view-real-life-modules" && currentRealLifeScenario) {
        renderRealLifeTabContent();
    } else if (activePanel.id === "view-listening-stories" && currentListeningStory) {
        renderListeningStoryTabContent();
    }
}

// --- 9. GRAMMAR MODULE LOGIC ---
let currentGrammarLesson = null;
let grammarPracticeState = {
    currentIndex: 0,
    score: 0,
    answers: {},
    isAnswerChecked: false
};

function openGrammarLessonHub() {
    switchToView("view-grammar-lessons");
    document.getElementById("grammar-lesson-title").textContent = "Grammatik-Kurs / Grammar Course";
    
    // Hide standard panels
    document.querySelector(".lesson-tabs").style.display = "none";
    document.getElementById("grammar-lesson-panel").style.display = "none";
    document.getElementById("grammar-practice-panel").style.display = "none";
    
    // Widen container for topic grid
    document.querySelector(".grammar-lesson-container").classList.add("topic-grid-mode");
    
    // Check if we already have a topic list container, else create one
    let listContainer = document.getElementById("grammar-topic-list-container");
    if (!listContainer) {
        listContainer = document.createElement("div");
        listContainer.id = "grammar-topic-list-container";
        listContainer.style.cssText = "display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin-top:20px;";
        document.querySelector(".grammar-lesson-container").appendChild(listContainer);
    }
    listContainer.style.display = "grid";
    
    // Populate topics list
    let html = "";
    GRAMMAR_LESSONS_DATABASE.forEach((topic) => {
        const stats = portalState.grammarStats && portalState.grammarStats[topic.id] || { completed: false, score: 0 };
        let statusBadge = `<span class="badge" style="background:rgba(255,255,255,0.05); color:var(--color-text-muted); font-size:0.75rem; padding:4px 8px; border-radius:4px;">Neu / New</span>`;
        if (stats.completed) {
            statusBadge = `<span class="badge" style="background:rgba(16,185,129,0.15); color:var(--color-success); font-size:0.75rem; padding:4px 8px; border-radius:4px; font-weight:700;">Completed (${stats.score}/5)</span>`;
        }
        
        html += `
            <div class="hub-action-card glass-panel" onclick="startGrammarLesson('${topic.id}')" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; cursor:pointer; height:auto; min-height:160px;">
                <div>
                    <div style="font-size:2rem; margin-bottom:8px;">🧠</div>
                    <h3 style="margin:0 0 6px 0; font-size:1.15rem; font-family:var(--font-display);">${topic.title}</h3>
                    <p style="margin:0; font-size:0.85rem; color:var(--color-text-muted); line-height:1.4;">Learn rules, examples, and test understanding.</p>
                </div>
                <div style="margin-top:16px; display:flex; justify-content:space-between; align-items:center;">
                    ${statusBadge}
                    <span style="color:var(--color-accent); font-weight:700; font-size:0.85rem;">Learn &rarr;</span>
                </div>
            </div>
        `;
    });
    listContainer.innerHTML = html;
}
window.openGrammarLessonHub = openGrammarLessonHub;

function startGrammarLesson(topicId) {
    const topic = GRAMMAR_LESSONS_DATABASE.find(t => t.id === topicId);
    if (!topic) return;
    
    currentGrammarLesson = topic;
    
    // Reset container for lesson view
    document.querySelector(".grammar-lesson-container").classList.remove("topic-grid-mode");
    
    // Hide topic list
    const listContainer = document.getElementById("grammar-topic-list-container");
    if (listContainer) listContainer.style.display = "none";
    
    // Show standard lesson tabs and panels
    document.querySelector(".lesson-tabs").style.display = "flex";
    document.getElementById("grammar-lesson-title").textContent = topic.title;
    
    // Switch to lesson tab
    switchGrammarTab("lesson");
    
    // Load lesson content
    document.getElementById("grammar-lesson-rules").innerHTML = `
        <div class="grammar-rule-card">
            <h3>Systemregeln / Core Rules</h3>
            <p>${topic.rule}</p>
        </div>
        <div class="grammar-explanation">
            <h3>Englische Erklärung / English Explanation</h3>
            <p>${topic.englishExplanation}</p>
        </div>
    `;
    
    let examplesHTML = "";
    topic.examples.forEach(ex => {
        examplesHTML += `
            <div class="grammar-example-card">
                <div class="grammar-example-top">
                    <div>
                        <span class="grammar-example-german">${ex.german}</span>
                        ${getPronunciationHTML(ex.german)}
                    </div>
                    <div class="grammar-example-actions">
                        <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${ex.german.replace(/'/g, "\\'")}', 1.0)" style="padding:4px 10px; font-size:0.75rem;">🔊 Play</button>
                        <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${ex.german.replace(/'/g, "\\'")}', 0.65)" style="padding:4px 10px; font-size:0.75rem;">🐢 Slow</button>
                    </div>
                </div>
                <div class="grammar-example-meaning">
                    ${ex.meaning}
                </div>
            </div>
        `;
    });
    document.getElementById("grammar-lesson-examples").innerHTML = examplesHTML;
}
window.startGrammarLesson = startGrammarLesson;

function switchGrammarTab(tab) {
    const lessonTab = document.getElementById("tab-grammar-lesson");
    const practiceTab = document.getElementById("tab-grammar-practice");
    const lessonPanel = document.getElementById("grammar-lesson-panel");
    const practicePanel = document.getElementById("grammar-practice-panel");
    
    if (tab === "lesson") {
        lessonTab.classList.add("active");
        lessonTab.classList.replace("btn-secondary", "btn-primary");
        practiceTab.classList.remove("active");
        practiceTab.classList.replace("btn-primary", "btn-secondary");
        lessonPanel.style.display = "block";
        practicePanel.style.display = "none";
    } else {
        practiceTab.classList.add("active");
        practiceTab.classList.replace("btn-secondary", "btn-primary");
        lessonTab.classList.remove("active");
        lessonTab.classList.replace("btn-primary", "btn-secondary");
        lessonPanel.style.display = "none";
        practicePanel.style.display = "block";
        
        startGrammarPractice();
    }
}
window.switchGrammarTab = switchGrammarTab;

function startGrammarPractice() {
    grammarPracticeState.currentIndex = 0;
    grammarPracticeState.score = 0;
    grammarPracticeState.answers = {};
    grammarPracticeState.isAnswerChecked = false;
    
    document.querySelector("#grammar-practice-panel .practice-quiz-wrapper").style.display = "block";
    document.getElementById("grammar-practice-results").style.display = "none";
    
    loadGrammarQuestion();
}

function loadGrammarQuestion() {
    const q = currentGrammarLesson.practiceQuestions[grammarPracticeState.currentIndex];
    
    document.getElementById("grammar-practice-tag").textContent = `Frage ${grammarPracticeState.currentIndex + 1} von 5`;
    document.getElementById("grammar-practice-score-current").textContent = grammarPracticeState.score;
    
    document.getElementById("grammar-practice-question-text").innerHTML = `
        <div>${q.question}</div>
        ${getPronunciationHTML(q.question.replace(/___/g, ""))}
    `;
    
    const optionsList = document.getElementById("grammar-practice-options-list");
    optionsList.innerHTML = "";
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-card glass-panel btn-touch";
        btn.style.cssText = "width:100%; text-align:left; padding:14px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;";
        btn.innerHTML = `
            <span>${opt}</span>
            ${getPronunciationHTML(opt)}
        `;
        btn.onclick = () => selectGrammarOption(idx);
        optionsList.appendChild(btn);
    });
    
    document.getElementById("grammar-practice-explanation-box").style.display = "none";
    document.getElementById("btn-grammar-check-answer").style.display = "block";
    document.getElementById("btn-grammar-check-answer").disabled = true;
    document.getElementById("btn-grammar-next-question").style.display = "none";
    
    grammarPracticeState.isAnswerChecked = false;
}

function selectGrammarOption(index) {
    if (grammarPracticeState.isAnswerChecked) return;
    
    grammarPracticeState.answers[grammarPracticeState.currentIndex] = index;
    
    const cards = document.querySelectorAll("#grammar-practice-options-list .option-card");
    cards.forEach((c, idx) => {
        c.classList.toggle("selected", idx === index);
    });
    
    document.getElementById("btn-grammar-check-answer").disabled = false;
}

function checkGrammarAnswer() {
    if (grammarPracticeState.isAnswerChecked) return;
    
    grammarPracticeState.isAnswerChecked = true;
    const selected = grammarPracticeState.answers[grammarPracticeState.currentIndex];
    const q = currentGrammarLesson.practiceQuestions[grammarPracticeState.currentIndex];
    const isCorrect = (selected === q.correct);
    
    if (isCorrect) grammarPracticeState.score++;
    
    const cards = document.querySelectorAll("#grammar-practice-options-list .option-card");
    cards.forEach((c, idx) => {
        if (idx === q.correct) {
            c.style.borderColor = "var(--color-success)";
            c.style.background = "rgba(16,185,129,0.1)";
        } else if (idx === selected) {
            c.style.borderColor = "var(--color-danger)";
            c.style.background = "rgba(239,68,68,0.1)";
        }
    });
    
    const explanationBox = document.getElementById("grammar-practice-explanation-box");
    explanationBox.className = isCorrect ? "practice-explanation-panel success-border" : "practice-explanation-panel danger-border";
    explanationBox.style.display = "block";
    document.getElementById("grammar-practice-explanation-title").textContent = isCorrect ? "Richtig! 🎉" : "Falsch! ❌";
    document.getElementById("grammar-practice-explanation-text").textContent = q.explanation || "Keine Erklärung.";
    
    document.getElementById("btn-grammar-check-answer").style.display = "none";
    document.getElementById("btn-grammar-next-question").style.display = "block";
}

function nextGrammarQuestion() {
    grammarPracticeState.currentIndex++;
    if (grammarPracticeState.currentIndex < currentGrammarLesson.practiceQuestions.length) {
        loadGrammarQuestion();
    } else {
        finishGrammarPractice();
    }
}

function finishGrammarPractice() {
    document.querySelector("#grammar-practice-panel .practice-quiz-wrapper").style.display = "none";
    
    const resultsPanel = document.getElementById("grammar-practice-results");
    resultsPanel.style.display = "block";
    
    const scoreVal = document.getElementById("grammar-practice-results-score");
    const total = currentGrammarLesson.practiceQuestions.length;
    scoreVal.textContent = `${grammarPracticeState.score} / ${total}`;
    
    const message = document.getElementById("grammar-practice-results-message");
    const percent = (grammarPracticeState.score / total) * 100;
    
    if (percent >= 80) {
        message.textContent = "Hervorragend! Sie haben dieses Thema gemeistert! / Excellent! You have mastered this topic!";
    } else if (percent >= 60) {
        message.textContent = "Gut gemacht! Sie können dieses Thema noch einmal wiederholen, um eine perfekte Punktzahl zu erreichen. / Good job! You can retry to get a perfect score.";
    } else {
        message.textContent = "Übung macht den Meister. Versuchen Sie es noch einmal! / Practice makes perfect. Try again!";
    }
    
    portalState.grammarStats = portalState.grammarStats || {};
    portalState.grammarStats[currentGrammarLesson.id] = {
        completed: true,
        score: grammarPracticeState.score
    };
    savePortalStateToStorage();
    updateHeaderStats();
}

// --- 10. PHRASE BANK LOGIC ---
let selectedPhraseCategory = "Greetings";
let showFavoritesOnly = false;

function openPhraseBank() {
    switchToView("view-phrase-bank");
    renderPhraseCategoryPills();
    renderPhrases();
    
    document.getElementById("phrase-practice-container").style.display = "none";
    document.getElementById("phrase-cards-container").style.display = "grid";
    document.getElementById("btn-phrase-start-practice").style.display = "inline-block";
}
window.openPhraseBank = openPhraseBank;

function renderPhraseCategoryPills() {
    const categories = [
        "Greetings", "Introductions", "Shopping", "Restaurant", 
        "Travel", "Hotel", "School", "Work", 
        "Family", "Doctor", "Pharmacy", "Emergency Situations"
    ];
    
    const pillsContainer = document.getElementById("phrase-category-pills");
    pillsContainer.innerHTML = "";
    
    categories.forEach(cat => {
        const pill = document.createElement("button");
        pill.className = "category-pill" + (selectedPhraseCategory === cat ? " active" : "");
        pill.textContent = cat;
        pill.onclick = () => {
            selectedPhraseCategory = cat;
            showFavoritesOnly = false;
            document.getElementById("btn-phrase-toggle-favorites").classList.remove("active");
            renderPhraseCategoryPills();
            renderPhrases();
        };
        pillsContainer.appendChild(pill);
    });
}

function renderPhrases() {
    const searchVal = document.getElementById("phrase-search-input").value.toLowerCase();
    const container = document.getElementById("phrase-cards-container");
    container.innerHTML = "";
    
    portalState.favorites = portalState.favorites || [];
    
    let filtered = PHRASE_BANK_DATABASE.filter(p => {
        const matchesCategory = showFavoritesOnly || p.category === selectedPhraseCategory;
        const matchesSearch = p.german.toLowerCase().includes(searchVal) || p.english.toLowerCase().includes(searchVal);
        const matchesFavorite = !showFavoritesOnly || portalState.favorites.includes(p.id);
        return matchesCategory && matchesSearch && matchesFavorite;
    });
    
    if (filtered.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted);">Keine Phrasen gefunden. / No phrases found.</p>`;
        return;
    }
    
    filtered.forEach(p => {
        const isFav = portalState.favorites.includes(p.id);
        
        const card = document.createElement("div");
        card.className = "phrase-card glass-panel";
        card.innerHTML = `
            <button class="phrase-favorite-btn${isFav ? ' active' : ''}" onclick="toggleFavoritePhrase('${p.id}', this)" aria-label="Favorite phrase">★</button>
            <div style="margin-right:24px;">
                <div class="phrase-card-german" style="font-size:1.15rem; font-weight:700;">${p.german}</div>
                ${getPronunciationHTML(p.german)}
                <div class="phrase-card-english" style="font-size:0.85rem; color:var(--color-text-muted); margin-top:4px;">${p.english}</div>
            </div>
            <div style="display:flex; gap:8px; margin-top:16px;">
                <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${p.german.replace(/'/g, "\\'")}', 1.0)" style="padding:6px 12px; font-size:0.8rem; display:flex; align-items:center; gap:4px;">🔊 Play</button>
                <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${p.german.replace(/'/g, "\\'")}', 0.65)" style="padding:6px 12px; font-size:0.8rem; display:flex; align-items:center; gap:4px;">🐢 Slow</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleFavoritePhrase(phraseId, btn) {
    portalState.favorites = portalState.favorites || [];
    const idx = portalState.favorites.indexOf(phraseId);
    if (idx === -1) {
        portalState.favorites.push(phraseId);
        btn.classList.add("active");
    } else {
        portalState.favorites.splice(idx, 1);
        btn.classList.remove("active");
    }
    savePortalStateToStorage();
    if (showFavoritesOnly) {
        renderPhrases();
    }
}
window.toggleFavoritePhrase = toggleFavoritePhrase;

let phrasePracticeState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: {},
    isAnswerChecked: false
};

function startPhrasePractice() {
    let sourcePhrases = PHRASE_BANK_DATABASE.filter(p => p.category === selectedPhraseCategory);
    if (showFavoritesOnly) {
        sourcePhrases = PHRASE_BANK_DATABASE.filter(p => portalState.favorites.includes(p.id));
    }
    
    if (sourcePhrases.length < 3) {
        alert("Bitte fügen Sie mindestens 3 Favoriten hinzu, um ein Quiz zu starten! / Add at least 3 favorites to quiz.");
        return;
    }
    
    phrasePracticeState.questions = [];
    const shuffled = [...sourcePhrases].sort(() => Math.random() - 0.5);
    const count = Math.min(5, shuffled.length);
    
    for (let i = 0; i < count; i++) {
        const item = shuffled[i];
        const correctOpt = item.english;
        const otherOpts = PHRASE_BANK_DATABASE.filter(p => p.english !== correctOpt).map(p => p.english);
        const shuffledOthers = [...otherOpts].sort(() => Math.random() - 0.5);
        const dist1 = shuffledOthers[0];
        const dist2 = shuffledOthers[1];
        
        const rawOpts = [correctOpt, dist1, dist2];
        const shuffledOpts = [...rawOpts].sort(() => Math.random() - 0.5);
        const correctIdx = shuffledOpts.indexOf(correctOpt);
        
        phrasePracticeState.questions.push({
            id: item.id,
            germanText: item.german,
            options: shuffledOpts,
            correct: correctIdx,
            explanation: `"${item.german}" bedeutet "${item.english}".`
        });
    }
    
    phrasePracticeState.currentIndex = 0;
    phrasePracticeState.score = 0;
    phrasePracticeState.answers = {};
    phrasePracticeState.isAnswerChecked = false;
    
    document.getElementById("phrase-cards-container").style.display = "none";
    document.getElementById("phrase-practice-container").style.display = "block";
    document.getElementById("phrase-practice-quiz-wrapper").style.display = "block";
    document.getElementById("phrase-practice-results").style.display = "none";
    
    loadPhraseQuestion();
}

function loadPhraseQuestion() {
    const q = phrasePracticeState.questions[phrasePracticeState.currentIndex];
    
    document.getElementById("phrase-practice-tag").textContent = `Phrase ${phrasePracticeState.currentIndex + 1} von ${phrasePracticeState.questions.length}`;
    document.getElementById("phrase-practice-question-text").innerHTML = `
        <div>Was bedeutet "${q.germanText}"?</div>
        ${getPronunciationHTML(q.germanText)}
    `;
    
    const optionsContainer = document.getElementById("phrase-practice-options-list");
    optionsContainer.innerHTML = "";
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-card glass-panel btn-touch";
        btn.style.cssText = "width:100%; text-align:left; padding:14px; margin-bottom:8px;";
        btn.textContent = opt;
        btn.onclick = () => selectPhraseOption(idx);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById("phrase-practice-feedback").style.display = "none";
    document.getElementById("btn-phrase-practice-next").style.display = "none";
    phrasePracticeState.isAnswerChecked = false;
}

function selectPhraseOption(index) {
    if (phrasePracticeState.isAnswerChecked) return;
    
    phrasePracticeState.isAnswerChecked = true;
    const q = phrasePracticeState.questions[phrasePracticeState.currentIndex];
    const isCorrect = (index === q.correct);
    
    if (isCorrect) phrasePracticeState.score++;
    
    const cards = document.querySelectorAll("#phrase-practice-options-list .option-card");
    cards.forEach((c, idx) => {
        if (idx === q.correct) {
            c.style.borderColor = "var(--color-success)";
            c.style.background = "rgba(16,185,129,0.1)";
        } else if (idx === index) {
            c.style.borderColor = "var(--color-danger)";
            c.style.background = "rgba(239,68,68,0.1)";
        }
    });
    
    const feedback = document.getElementById("phrase-practice-feedback");
    feedback.style.display = "block";
    feedback.style.background = isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)";
    feedback.style.color = isCorrect ? "var(--color-success)" : "var(--color-danger)";
    feedback.textContent = isCorrect ? "Richtig! 🎉" : `Falsch! ❌ ${q.explanation}`;
    
    document.getElementById("btn-phrase-practice-next").style.display = "block";
}

function nextPhraseQuestion() {
    phrasePracticeState.currentIndex++;
    if (phrasePracticeState.currentIndex < phrasePracticeState.questions.length) {
        loadPhraseQuestion();
    } else {
        finishPhrasePractice();
    }
}

function finishPhrasePractice() {
    document.getElementById("phrase-practice-quiz-wrapper").style.display = "none";
    
    const results = document.getElementById("phrase-practice-results");
    results.style.display = "block";
    
    document.getElementById("phrase-practice-results-score").textContent = `${phrasePracticeState.score} / ${phrasePracticeState.questions.length}`;
    document.getElementById("phrase-practice-results-message").textContent = `Sie haben ${phrasePracticeState.score} von ${phrasePracticeState.questions.length} Sätzen richtig beantwortet. / You answered ${phrasePracticeState.score} out of ${phrasePracticeState.questions.length} phrases correctly.`;
}

// --- 11. REAL-LIFE GERMAN MODULES LOGIC ---
let currentRealLifeScenario = null;
let currentRealLifeTab = "vocab";
let activeScenarioDialogueTimeout = null;
let activeDialogueSpeakerIndex = -1;

function openRealLifeScenarios() {
    switchToView("view-real-life-modules");
    document.getElementById("real-life-menu-container").style.display = "grid";
    document.getElementById("real-life-workspace").style.display = "none";
    
    renderRealLifeMenu();
}
window.openRealLifeScenarios = openRealLifeScenarios;

function renderRealLifeMenu() {
    const container = document.getElementById("real-life-menu-container");
    container.innerHTML = "";
    
    REAL_LIFE_DATABASE.forEach(sc => {
        const stats = portalState.scenarioStats && portalState.scenarioStats[sc.id] || { completed: false, score: 0 };
        let statusHTML = `<span style="font-size:0.75rem; color:var(--color-text-muted);">Neu / New</span>`;
        if (stats.completed) {
            statusHTML = `<span style="font-size:0.75rem; color:var(--color-success); font-weight:700;">Completed (${stats.score}/5)</span>`;
        }
        
        const card = document.createElement("div");
        card.className = "practice-topic-card glass-panel btn-touch";
        card.style.cursor = "pointer";
        card.innerHTML = `
            <div class="topic-icon">🗺️</div>
            <h3>${sc.title}</h3>
            <p>${sc.reading.text.substring(0, 80)}...</p>
            <div style="margin-top:12px; display:flex; justify-content:space-between; align-items:center; width:100%;">
                ${statusHTML}
                <span style="color:var(--color-accent); font-weight:700; font-size:0.85rem;">Start &rarr;</span>
            </div>
        `;
        card.onclick = () => openRealLifeScenario(sc.id);
        container.appendChild(card);
    });
}

function openRealLifeScenario(id) {
    const sc = REAL_LIFE_DATABASE.find(item => item.id === id);
    if (!sc) return;
    
    currentRealLifeScenario = sc;
    currentRealLifeTab = "vocab";
    
    document.getElementById("real-life-menu-container").style.display = "none";
    document.getElementById("real-life-workspace").style.display = "block";
    document.getElementById("real-life-workspace-title").textContent = sc.title;
    
    document.querySelectorAll(".scenario-tab-btn").forEach(btn => {
        const tab = btn.getAttribute("data-tab");
        btn.classList.toggle("active", tab === "vocab");
        btn.classList.replace("btn-primary", "btn-secondary");
        if (tab === "vocab") btn.classList.replace("btn-secondary", "btn-primary");
        
        btn.onclick = () => {
            switchRealLifeTab(tab);
        };
    });
    
    switchRealLifeTab("vocab");
}

function switchRealLifeTab(tab) {
    currentRealLifeTab = tab;
    stopDialogueSpeech();
    
    document.querySelectorAll(".scenario-tab-btn").forEach(btn => {
        const btnTab = btn.getAttribute("data-tab");
        btn.classList.toggle("active", btnTab === tab);
        btn.classList.replace("btn-primary", "btn-secondary");
        if (btnTab === tab) btn.classList.replace("btn-secondary", "btn-primary");
    });
    
    const panels = ["vocab", "phrases", "dialog", "reading", "quiz"];
    panels.forEach(p => {
        document.getElementById(`rl-tab-content-${p}`).style.display = (p === tab) ? "block" : "none";
    });
    
    renderRealLifeTabContent();
}

function stopDialogueSpeech() {
    if (activeScenarioDialogueTimeout) {
        clearTimeout(activeScenarioDialogueTimeout);
        activeScenarioDialogueTimeout = null;
    }
    window.speechSynthesis.cancel();
    document.getElementById("rl-dialog-play").disabled = false;
    document.getElementById("rl-dialog-play-slow").disabled = false;
    document.getElementById("rl-dialog-stop").disabled = true;
    
    document.querySelectorAll("#rl-dialog-transcript-container .transcript-bubble").forEach(b => b.classList.remove("active-speaker"));
}

function playDialogueLines(lines, startIndex = 0, rate = 1.0) {
    if (startIndex >= lines.length) {
        activeDialogueSpeakerIndex = -1;
        document.querySelectorAll("#rl-dialog-transcript-container .transcript-bubble").forEach(b => b.classList.remove("active-speaker"));
        document.getElementById("rl-dialog-stop").disabled = true;
        document.getElementById("rl-dialog-play").disabled = false;
        document.getElementById("rl-dialog-play-slow").disabled = false;
        return;
    }
    
    activeDialogueSpeakerIndex = startIndex;
    const bubbles = document.querySelectorAll("#rl-dialog-transcript-container .transcript-bubble");
    bubbles.forEach((b, idx) => {
        b.classList.toggle("active-speaker", idx === startIndex);
        if (idx === startIndex) {
            b.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
    
    const line = lines[startIndex];
    
    speakText(line.text, () => {}, () => {
        activeScenarioDialogueTimeout = setTimeout(() => {
            playDialogueLines(lines, startIndex + 1, rate);
        }, 800);
    }, () => {}, rate);
}

function applySubtitleSettings(containerId, mode) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const deLines = container.querySelectorAll(".transcript-german-line");
    const enLines = container.querySelectorAll(".transcript-english-line");
    const subtexts = container.querySelectorAll(".pronunciation-subtext");
    
    deLines.forEach(l => {
        l.style.display = (mode === "de" || mode === "de-en") ? "block" : "none";
    });
    
    enLines.forEach(l => {
        l.style.display = (mode === "en" || mode === "de-en") ? "block" : "none";
    });
    
    subtexts.forEach(s => {
        s.style.display = (portalState.showPronunciation !== false && (mode === "de" || mode === "de-en")) ? "block" : "none";
    });
}

function renderRealLifeTabContent() {
    const sc = currentRealLifeScenario;
    if (!sc) return;
    
    if (currentRealLifeTab === "vocab") {
        const container = document.getElementById("rl-vocab-cards");
        container.innerHTML = "";
        sc.vocab.forEach(v => {
            const card = document.createElement("div");
            card.className = "vocab-picture-card glass-panel";
            card.innerHTML = `
                <div class="vocab-picture-wrapper">📖</div>
                <div style="font-size:1.35rem; font-weight:700; color:var(--color-text-primary);">${v.word}</div>
                ${getPronunciationHTML(v.word)}
                <div style="font-size:0.95rem; color:var(--color-text-muted); margin-top:8px;">${v.translation}</div>
                <div style="display:flex; gap:8px; margin-top:16px;">
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 1.0)">🔊 Normal</button>
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 0.65)">🐢 Slow</button>
                </div>
            `;
            container.appendChild(card);
        });
    } else if (currentRealLifeTab === "phrases") {
        const container = document.getElementById("rl-phrases-cards");
        container.innerHTML = "";
        sc.phrases.forEach(p => {
            const card = document.createElement("div");
            card.className = "phrase-card glass-panel";
            card.innerHTML = `
                <div>
                    <div class="phrase-card-german" style="font-weight:700; font-size:1.15rem;">${p.german}</div>
                    ${getPronunciationHTML(p.german)}
                    <div class="phrase-card-english" style="font-size:0.85rem; color:var(--color-text-muted); margin-top:4px;">${p.english}</div>
                </div>
                <div style="display:flex; gap:8px; margin-top:16px;">
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${p.german.replace(/'/g, "\\'")}', 1.0)">🔊 Normal</button>
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${p.german.replace(/'/g, "\\'")}', 0.65)">🐢 Slow</button>
                </div>
            `;
            container.appendChild(card);
        });
    } else if (currentRealLifeTab === "dialog") {
        const container = document.getElementById("rl-dialog-transcript-container");
        container.innerHTML = "";
        
        sc.dialogue.forEach((d) => {
            const bubble = document.createElement("div");
            bubble.className = "transcript-bubble";
            bubble.style.marginBottom = "12px";
            bubble.innerHTML = `
                <strong style="color:var(--color-primary); font-size:0.8rem; text-transform:uppercase;">${d.speaker}</strong>
                <span class="transcript-german-line" style="font-size:1.1rem; margin-top:4px;">${d.text}</span>
                ${getPronunciationHTML(d.text)}
                <span class="transcript-english-line">${d.translation}</span>
            `;
            container.appendChild(bubble);
        });
        
        const subtitleMode = document.getElementById("rl-dialog-subtitle-select").value;
        applySubtitleSettings("rl-dialog-transcript-container", subtitleMode);
        
        document.getElementById("rl-dialog-play").onclick = () => {
            stopDialogueSpeech();
            document.getElementById("rl-dialog-play").disabled = true;
            document.getElementById("rl-dialog-play-slow").disabled = true;
            document.getElementById("rl-dialog-stop").disabled = false;
            playDialogueLines(sc.dialogue, 0, 1.0);
        };
        
        document.getElementById("rl-dialog-play-slow").onclick = () => {
            stopDialogueSpeech();
            document.getElementById("rl-dialog-play").disabled = true;
            document.getElementById("rl-dialog-play-slow").disabled = true;
            document.getElementById("rl-dialog-stop").disabled = false;
            playDialogueLines(sc.dialogue, 0, 0.65);
        };
        
        document.getElementById("rl-dialog-stop").onclick = () => {
            stopDialogueSpeech();
        };
        
        document.getElementById("rl-dialog-subtitle-select").onchange = (e) => {
            applySubtitleSettings("rl-dialog-transcript-container", e.target.value);
        };
        
    } else if (currentRealLifeTab === "reading") {
        document.getElementById("rl-reading-body").innerHTML = `
            <div style="font-size:1.15rem; line-height:1.7; color:var(--color-text-primary); margin-bottom:12px;">${sc.reading.text}</div>
            ${getPronunciationHTML(sc.reading.text)}
            <div style="display:flex; gap:8px; margin-top:16px;">
                <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${sc.reading.text.replace(/<[^>]*>/g, '').replace(/'/g, "\\'")}', 1.0)">🔊 Vorlesen / Read</button>
                <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${sc.reading.text.replace(/<[^>]*>/g, '').replace(/'/g, "\\'")}', 0.65)">🐢 Langsam</button>
            </div>
        `;
        
        const transEl = document.getElementById("rl-reading-translation");
        transEl.style.display = "none";
        transEl.textContent = sc.reading.translation;
        document.getElementById("btn-rl-reading-translate").textContent = "🌐 Show English";
        
        document.getElementById("rl-reading-question-text").textContent = sc.reading.question;
        const optionsContainer = document.getElementById("rl-reading-options-container");
        optionsContainer.innerHTML = "";
        
        let checked = false;
        sc.reading.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-card glass-panel btn-touch";
            btn.style.cssText = "width:100%; text-align:left; padding:12px; margin-bottom:8px;";
            btn.textContent = opt;
            btn.onclick = () => {
                if (checked) return;
                checked = true;
                const isCorrect = (idx === sc.reading.correct);
                
                const cards = optionsContainer.querySelectorAll(".option-card");
                cards.forEach((c, cIdx) => {
                    if (cIdx === sc.reading.correct) {
                        c.style.borderColor = "var(--color-success)";
                        c.style.background = "rgba(16,185,129,0.1)";
                    } else if (cIdx === idx) {
                        c.style.borderColor = "var(--color-danger)";
                        c.style.background = "rgba(239,68,68,0.1)";
                    }
                });
                
                const feedback = document.getElementById("rl-reading-feedback");
                feedback.style.display = "block";
                feedback.style.background = isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)";
                feedback.style.color = isCorrect ? "var(--color-success)" : "var(--color-danger)";
                feedback.textContent = isCorrect ? "Richtig! 🎉" : "Falsch! ❌ " + (sc.reading.explanation || "");
            };
            optionsContainer.appendChild(btn);
        });
        document.getElementById("rl-reading-feedback").style.display = "none";
        
    } else if (currentRealLifeTab === "quiz") {
        startRealLifeQuiz();
    } else if (currentRealLifeTab === "quiz") {
        startRealLifeQuiz();
    }
}

let realLifeQuizState = {
    currentIndex: 0,
    score: 0,
    answers: {},
    isAnswerChecked: false
};

function startRealLifeQuiz() {
    realLifeQuizState.currentIndex = 0;
    realLifeQuizState.score = 0;
    realLifeQuizState.answers = {};
    realLifeQuizState.isAnswerChecked = false;
    
    document.querySelector("#rl-tab-content-quiz .practice-quiz-wrapper").style.display = "block";
    document.getElementById("rl-quiz-results").style.display = "none";
    
    loadRealLifeQuestion();
}

function loadRealLifeQuestion() {
    const sc = currentRealLifeScenario;
    if (!sc || !sc.quiz) return;
    
    const q = sc.quiz[realLifeQuizState.currentIndex];
    
    document.getElementById("rl-quiz-tag").textContent = `Frage ${realLifeQuizState.currentIndex + 1} von ${sc.quiz.length}`;
    document.getElementById("rl-quiz-score-current").textContent = realLifeQuizState.score;
    
    document.getElementById("rl-quiz-question-text").innerHTML = `
        <div>${q.question}</div>
        ${getPronunciationHTML(q.question)}
    `;
    
    const optionsContainer = document.getElementById("rl-quiz-options-list");
    optionsContainer.innerHTML = "";
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-card glass-panel btn-touch";
        btn.style.cssText = "width:100%; text-align:left; padding:14px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;";
        btn.innerHTML = `
            <span>${opt}</span>
            ${getPronunciationHTML(opt)}
        `;
        btn.onclick = () => selectRealLifeOption(idx);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById("rl-quiz-explanation-box").style.display = "none";
    document.getElementById("btn-rl-quiz-check-answer").style.display = "block";
    document.getElementById("btn-rl-quiz-check-answer").disabled = true;
    document.getElementById("btn-rl-quiz-next-question").style.display = "none";
    
    realLifeQuizState.isAnswerChecked = false;
}

function selectRealLifeOption(index) {
    if (realLifeQuizState.isAnswerChecked) return;
    
    realLifeQuizState.answers[realLifeQuizState.currentIndex] = index;
    
    const cards = document.querySelectorAll("#rl-quiz-options-list .option-card");
    cards.forEach((c, idx) => {
        c.classList.toggle("selected", idx === index);
    });
    
    document.getElementById("btn-rl-quiz-check-answer").disabled = false;
}

function checkRealLifeAnswer() {
    if (realLifeQuizState.isAnswerChecked) return;
    
    realLifeQuizState.isAnswerChecked = true;
    const selected = realLifeQuizState.answers[realLifeQuizState.currentIndex];
    const sc = currentRealLifeScenario;
    const q = sc.quiz[realLifeQuizState.currentIndex];
    const isCorrect = (selected === q.correct);
    
    if (isCorrect) realLifeQuizState.score++;
    
    const cards = document.querySelectorAll("#rl-quiz-options-list .option-card");
    cards.forEach((c, idx) => {
        if (idx === q.correct) {
            c.style.borderColor = "var(--color-success)";
            c.style.background = "rgba(16,185,129,0.1)";
        } else if (idx === selected) {
            c.style.borderColor = "var(--color-danger)";
            c.style.background = "rgba(239,68,68,0.1)";
        }
    });
    
    const explanationBox = document.getElementById("rl-quiz-explanation-box");
    explanationBox.className = isCorrect ? "practice-explanation-panel success-border" : "practice-explanation-panel danger-border";
    explanationBox.style.display = "block";
    document.getElementById("rl-quiz-explanation-title").textContent = isCorrect ? "Richtig! 🎉" : "Falsch! ❌";
    document.getElementById("rl-quiz-explanation-text").textContent = q.explanation || "Keine Erklärung.";
    
    document.getElementById("btn-rl-quiz-check-answer").style.display = "none";
    document.getElementById("btn-rl-quiz-next-question").style.display = "block";
}

function nextRealLifeQuestion() {
    realLifeQuizState.currentIndex++;
    const sc = currentRealLifeScenario;
    if (realLifeQuizState.currentIndex < sc.quiz.length) {
        loadRealLifeQuestion();
    } else {
        finishRealLifeQuiz();
    }
}

function finishRealLifeQuiz() {
    document.querySelector("#rl-tab-content-quiz .practice-quiz-wrapper").style.display = "none";
    
    const resultsPanel = document.getElementById("rl-quiz-results");
    resultsPanel.style.display = "block";
    
    const sc = currentRealLifeScenario;
    const scoreVal = document.getElementById("rl-quiz-results-score");
    scoreVal.textContent = `${realLifeQuizState.score} / ${sc.quiz.length}`;
    
    const message = document.getElementById("rl-quiz-results-message");
    const percent = (realLifeQuizState.score / sc.quiz.length) * 100;
    
    if (percent >= 80) {
        message.textContent = "Hervorragend! Sie haben dieses Szenario gemeistert! / Excellent! You have mastered this scenario!";
    } else if (percent >= 60) {
        message.textContent = "Gut gemacht! Sie können es noch einmal versuchen, um alle Fragen richtig zu beantworten. / Good job! You can retry to get a perfect score.";
    } else {
        message.textContent = "Übung macht den Meister. Versuchen Sie es noch einmal! / Practice makes perfect. Try again!";
    }
    
    portalState.realLifeStats = portalState.realLifeStats || {};
    portalState.realLifeStats[sc.id] = {
        completed: true,
        score: realLifeQuizState.score
    };
    savePortalStateToStorage();
    updateHeaderStats();
}

// --- 12. LISTENING STORIES MODULE LOGIC ---
let currentListeningStory = null;
let currentListeningStoryTab = "story-transcript";
let activeStorySpeakTimeout = null;

function openListeningStoryHub() {
    switchToView("view-listening-stories");
    document.getElementById("listening-stories-menu").style.display = "grid";
    document.getElementById("listening-story-workspace").style.display = "none";
    
    renderListeningStoriesMenu();
}
window.openListeningStoryHub = openListeningStoryHub;

function renderListeningStoriesMenu() {
    const container = document.getElementById("listening-stories-menu");
    container.innerHTML = "";
    
    LISTENING_STORIES_DATABASE.forEach(st => {
        const stats = portalState.listeningStoryStats && portalState.listeningStoryStats[st.id] || { completed: false, score: 0 };
        let statusHTML = `<span style="font-size:0.75rem; color:var(--color-text-muted);">Neu / New</span>`;
        if (stats.completed) {
            statusHTML = `<span style="font-size:0.75rem; color:var(--color-success); font-weight:700;">Completed (${stats.score}/5)</span>`;
        }
        
        const card = document.createElement("div");
        card.className = "practice-topic-card glass-panel btn-touch";
        card.style.cursor = "pointer";
        card.innerHTML = `
            <div class="topic-icon">🎧</div>
            <h3>${st.title}</h3>
            <p>${st.text.substring(0, 80)}...</p>
            <div style="margin-top:12px; display:flex; justify-content:space-between; align-items:center; width:100%;">
                ${statusHTML}
                <span style="color:var(--color-accent); font-weight:700; font-size:0.85rem;">Listen &rarr;</span>
            </div>
        `;
        card.onclick = () => openListeningStory(st.id);
        container.appendChild(card);
    });
}

function openListeningStory(id) {
    const st = LISTENING_STORIES_DATABASE.find(item => item.id === id);
    if (!st) return;
    
    currentListeningStory = st;
    currentListeningStoryTab = "story-transcript";
    
    document.getElementById("listening-stories-menu").style.display = "none";
    document.getElementById("listening-story-workspace").style.display = "block";
    document.getElementById("listening-story-workspace-title").textContent = st.title;
    
    document.querySelectorAll(".story-tab-btn").forEach(btn => {
        const tab = btn.getAttribute("data-tab");
        btn.classList.toggle("active", tab === "story-transcript");
        btn.classList.replace("btn-primary", "btn-secondary");
        if (tab === "story-transcript") btn.classList.replace("btn-secondary", "btn-primary");
        
        btn.onclick = () => {
            switchListeningStoryTab(tab);
        };
    });
    
    switchListeningStoryTab("story-transcript");
}

function switchListeningStoryTab(tab) {
    currentListeningStoryTab = tab;
    stopStorySpeech();
    
    document.querySelectorAll(".story-tab-btn").forEach(btn => {
        const btnTab = btn.getAttribute("data-tab");
        btn.classList.toggle("active", btnTab === tab);
        btn.classList.replace("btn-primary", "btn-secondary");
        if (btnTab === tab) btn.classList.replace("btn-secondary", "btn-primary");
    });
    
    const panels = ["story-transcript", "story-vocab", "story-quiz", "story-retell"];
    panels.forEach(p => {
        document.getElementById(`story-tab-content-${p}`).style.display = (p === tab) ? "block" : "none";
    });
    
    renderListeningStoryTabContent();
}

function renderListeningStoryTabContent() {
    const st = currentListeningStory;
    if (!st) return;
    
    if (currentListeningStoryTab === "story-transcript") {
        const container = document.getElementById("story-transcript-text-container");
        container.innerHTML = "";
        
        const sentences = st.text.split(/(?<=[.!?])\s+/);
        const translations = st.translation.split(/(?<=[.!?])\s+/);
        
        sentences.forEach((sent, idx) => {
            if (!sent.trim()) return;
            const bubble = document.createElement("div");
            bubble.className = "transcript-bubble";
            bubble.style.marginBottom = "12px";
            bubble.innerHTML = `
                <span class="transcript-german-line word-span" data-index="${idx}" style="font-size:1.15rem; line-height:1.5; font-weight:600;">${sent}</span>
                ${getPronunciationHTML(sent)}
                <span class="transcript-english-line" style="margin-top:4px;">${translations[idx] || ""}</span>
            `;
            container.appendChild(bubble);
        });
        
        const subtitleMode = document.getElementById("story-subtitle-select").value;
        applySubtitleSettings("story-transcript-text-container", subtitleMode);
        
        document.getElementById("story-audio-play").onclick = () => {
            stopStorySpeech();
            document.getElementById("story-audio-play").disabled = true;
            document.getElementById("story-audio-play-slow").disabled = true;
            document.getElementById("story-audio-stop").disabled = false;
            playStorySentences(sentences, 0, 1.0);
        };
        
        document.getElementById("story-audio-play-slow").onclick = () => {
            stopStorySpeech();
            document.getElementById("story-audio-play").disabled = true;
            document.getElementById("story-audio-play-slow").disabled = true;
            document.getElementById("story-audio-stop").disabled = false;
            playStorySentences(sentences, 0, 0.65);
        };
        
        document.getElementById("story-audio-stop").onclick = () => {
            stopStorySpeech();
        };
        
        document.getElementById("story-subtitle-select").onchange = (e) => {
            applySubtitleSettings("story-transcript-text-container", e.target.value);
        };
        
    } else if (currentListeningStoryTab === "story-vocab") {
        const container = document.getElementById("story-vocab-table-container");
        container.innerHTML = "";
        
        st.vocab.forEach(v => {
            const card = document.createElement("div");
            card.className = "vocab-support-item";
            card.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:16px; margin-bottom:12px; background:rgba(255,255,255,0.02); border:1px solid var(--color-border); border-radius:var(--radius-md);";
            card.innerHTML = `
                <div style="display:flex; flex-direction:column;">
                    <strong style="color:var(--color-primary); font-size:1.25rem;">${v.word}</strong>
                    ${getPronunciationHTML(v.word)}
                    <span style="color:var(--color-text-muted); font-size:0.95rem; margin-top:4px;">${v.translation}</span>
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 1.0)">🔊 Normal</button>
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 0.65)">🐢 Slow</button>
                </div>
            `;
            container.appendChild(card);
        });
        
    } else if (currentListeningStoryTab === "story-quiz") {
        startStoryQuiz();
    } else if (currentListeningStoryTab === "story-retell") {
        initStoryRetellWorkspace();
    }
}

let storyQuizState = {
    currentIndex: 0,
    score: 0,
    answers: {},
    isAnswerChecked: false
};

function startStoryQuiz() {
    storyQuizState.currentIndex = 0;
    storyQuizState.score = 0;
    storyQuizState.answers = {};
    storyQuizState.isAnswerChecked = false;
    
    document.querySelector("#story-tab-content-quiz .practice-quiz-wrapper").style.display = "block";
    document.getElementById("story-quiz-results").style.display = "none";
    
    loadStoryQuestion();
}

function loadStoryQuestion() {
    const st = currentListeningStory;
    if (!st || !st.questions) return;
    
    const q = st.questions[storyQuizState.currentIndex];
    
    document.getElementById("story-quiz-tag").textContent = `Frage ${storyQuizState.currentIndex + 1} von ${st.questions.length}`;
    document.getElementById("story-quiz-score-current").textContent = storyQuizState.score;
    
    document.getElementById("story-quiz-question-text").innerHTML = `
        <div>${q.question}</div>
        ${getPronunciationHTML(q.question)}
    `;
    
    const optionsContainer = document.getElementById("story-quiz-options-list");
    optionsContainer.innerHTML = "";
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-card glass-panel btn-touch";
        btn.style.cssText = "width:100%; text-align:left; padding:14px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;";
        btn.innerHTML = `
            <span>${opt}</span>
            ${getPronunciationHTML(opt)}
        `;
        btn.onclick = () => selectStoryOption(idx);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById("story-quiz-explanation-box").style.display = "none";
    document.getElementById("btn-story-quiz-check-answer").style.display = "block";
    document.getElementById("btn-story-quiz-check-answer").disabled = true;
    document.getElementById("btn-story-quiz-next-question").style.display = "none";
    
    storyQuizState.isAnswerChecked = false;
}

function selectStoryOption(index) {
    if (storyQuizState.isAnswerChecked) return;
    
    storyQuizState.answers[storyQuizState.currentIndex] = index;
    
    const cards = document.querySelectorAll("#story-quiz-options-list .option-card");
    cards.forEach((c, idx) => {
        c.classList.toggle("selected", idx === index);
    });
    
    document.getElementById("btn-story-quiz-check-answer").disabled = false;
}

function checkStoryAnswer() {
    if (storyQuizState.isAnswerChecked) return;
    
    storyQuizState.isAnswerChecked = true;
    const selected = storyQuizState.answers[storyQuizState.currentIndex];
    const st = currentListeningStory;
    const q = st.questions[storyQuizState.currentIndex];
    const isCorrect = (selected === q.correct);
    
    if (isCorrect) storyQuizState.score++;
    
    const cards = document.querySelectorAll("#story-quiz-options-list .option-card");
    cards.forEach((c, idx) => {
        if (idx === q.correct) {
            c.style.borderColor = "var(--color-success)";
            c.style.background = "rgba(16,185,129,0.1)";
        } else if (idx === selected) {
            c.style.borderColor = "var(--color-danger)";
            c.style.background = "rgba(239,68,68,0.1)";
        }
    });
    
    const explanationBox = document.getElementById("story-quiz-explanation-box");
    explanationBox.className = isCorrect ? "practice-explanation-panel success-border" : "practice-explanation-panel danger-border";
    explanationBox.style.display = "block";
    document.getElementById("story-quiz-explanation-title").textContent = isCorrect ? "Richtig! 🎉" : "Falsch! ❌";
    document.getElementById("story-quiz-explanation-text").textContent = q.explanation || "Keine Erklärung.";
    
    document.getElementById("btn-story-quiz-check-answer").style.display = "none";
    document.getElementById("btn-story-quiz-next-question").style.display = "block";
}

function nextStoryQuestion() {
    storyQuizState.currentIndex++;
    const st = currentListeningStory;
    if (storyQuizState.currentIndex < st.questions.length) {
        loadStoryQuestion();
    } else {
        finishStoryQuiz();
    }
}

function finishStoryQuiz() {
    document.querySelector("#story-tab-content-quiz .practice-quiz-wrapper").style.display = "none";
    
    const resultsPanel = document.getElementById("story-quiz-results");
    resultsPanel.style.display = "block";
    
    const st = currentListeningStory;
    const scoreVal = document.getElementById("story-quiz-results-score");
    scoreVal.textContent = `${storyQuizState.score} / ${st.questions.length}`;
    
    const message = document.getElementById("story-quiz-results-message");
    const percent = (storyQuizState.score / st.questions.length) * 100;
    
    if (percent >= 80) {
        message.textContent = "Hervorragend! Sie haben diese Geschichte gemeistert! / Excellent! You have mastered this story!";
    } else if (percent >= 60) {
        message.textContent = "Gut gemacht! Sie können es noch einmal versuchen, um alle Fragen richtig zu beantworten. / Good job! You can retry to get a perfect score.";
    } else {
        message.textContent = "Übung macht den Meister. Versuchen Sie es noch einmal! / Practice makes perfect. Try again!";
    }
    
    portalState.listeningStoryStats = portalState.listeningStoryStats || {};
    portalState.listeningStoryStats[st.id] = {
        completed: true,
        score: storyQuizState.score
    };
    savePortalStateToStorage();
    updateHeaderStats();
}

let storyMediaRecorder = null;
let storyRecordedChunks = [];
let storyRecordingTimer = null;
let storyRecordingDuration = 0;

function initStoryRetellWorkspace() {
    document.getElementById("story-record-duration").textContent = "00:00";
    document.getElementById("btn-story-record-start").disabled = false;
    document.getElementById("btn-story-record-stop").disabled = true;
    document.getElementById("story-playback-box").style.display = "none";
}

function startStoryRetellRecording() {
    storyRecordedChunks = [];
    storyRecordingDuration = 0;
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            storyMediaRecorder = new MediaRecorder(stream);
            
            storyMediaRecorder.ondataavailable = e => {
                if (e.data.size > 0) {
                    storyRecordedChunks.push(e.data);
                }
            };
            
            storyMediaRecorder.onstop = () => {
                clearInterval(storyRecordingTimer);
                const blob = new Blob(storyRecordedChunks, { type: 'audio/wav' });
                const url = URL.createObjectURL(blob);
                
                const recordedAudio = document.getElementById("story-recorded-audio");
                if (recordedAudio) {
                    recordedAudio.src = url;
                }
                
                const downloadBtn = document.getElementById("btn-story-download-audio");
                if (downloadBtn) {
                    downloadBtn.href = url;
                }
                
                document.getElementById("story-playback-box").style.display = "flex";
                document.getElementById("btn-story-record-start").disabled = false;
                document.getElementById("btn-story-record-stop").disabled = true;
            };
            
            storyMediaRecorder.start();
            
            document.getElementById("btn-story-record-start").disabled = true;
            document.getElementById("btn-story-record-stop").disabled = false;
            
            storyRecordingTimer = setInterval(() => {
                storyRecordingDuration++;
                const mins = String(Math.floor(storyRecordingDuration / 60)).padStart(2, '0');
                const secs = String(storyRecordingDuration % 60).padStart(2, '0');
                document.getElementById("story-record-duration").textContent = `${mins}:${secs}`;
            }, 1000);
        })
        .catch(err => {
            console.error("Microphone access failed for story retelling:", err);
            alert("Error accessing microphone. Please check your browser permissions.");
        });
}

function stopStoryRetellRecording() {
    if (storyMediaRecorder && storyMediaRecorder.state !== "inactive") {
        storyMediaRecorder.stop();
        storyMediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
}

function stopStorySpeech() {
    if (activeStorySpeakTimeout) {
        clearTimeout(activeStorySpeakTimeout);
        activeStorySpeakTimeout = null;
    }
    window.speechSynthesis.cancel();
    
    const playBtn = document.getElementById("story-audio-play");
    const playSlowBtn = document.getElementById("story-audio-play-slow");
    const stopBtn = document.getElementById("story-audio-stop");
    
    if (playBtn) playBtn.disabled = false;
    if (playSlowBtn) playSlowBtn.disabled = false;
    if (stopBtn) stopBtn.disabled = true;
    
    document.querySelectorAll("#story-transcript-text-container .transcript-bubble").forEach(b => b.classList.remove("active-speaker"));
}

function playStorySentences(sentences, startIndex = 0, rate = 1.0) {
    if (startIndex >= sentences.length) {
        stopStorySpeech();
        return;
    }
    
    const bubbles = document.querySelectorAll("#story-transcript-text-container .transcript-bubble");
    bubbles.forEach((b, idx) => {
        b.classList.toggle("active-speaker", idx === startIndex);
        if (idx === startIndex) {
            b.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
    
    const text = sentences[startIndex];
    
    speakText(text, () => {}, () => {
        activeStorySpeakTimeout = setTimeout(() => {
            playStorySentences(sentences, startIndex + 1, rate);
        }, 600);
    }, () => {}, rate);
}

// --- 13. ADDITIONAL EVENT LISTENERS FOR V2.2 ---
document.addEventListener("DOMContentLoaded", () => {
    // Settings listener additions
    const pronLangSelect = document.getElementById("settings-pronunciation-language-select");
    if (pronLangSelect) {
        pronLangSelect.value = portalState.pronunciationLang || "ml";
        pronLangSelect.onchange = (e) => {
            portalState.pronunciationLang = e.target.value;
            savePortalStateToStorage();
            refreshActiveViewContent();
        };
    }
    
    const pronCheckbox = document.getElementById("settings-pronunciation-helper-checkbox");
    if (pronCheckbox) {
        pronCheckbox.checked = portalState.showPronunciation !== false;
        pronCheckbox.onchange = (e) => {
            portalState.showPronunciation = e.target.checked;
            savePortalStateToStorage();
            refreshActiveViewContent();
        };
    }

    // Bind back button from phrase bank
    const btnBackPhrases = document.querySelector("#view-phrase-bank .btn-back-home");
    if (btnBackPhrases) {
        btnBackPhrases.onclick = () => {
            switchToView("view-practice-menu");
        };
    }

    // Bind back button from real life
    const btnBackRealLife = document.querySelector("#view-real-life-modules .btn-back-home");
    if (btnBackRealLife) {
        btnBackRealLife.onclick = () => {
            stopDialogueSpeech();
            switchToView("view-practice-menu");
        };
    }

    // Bind back button from stories
    const btnBackStories = document.querySelector("#view-listening-stories .btn-back-home");
    if (btnBackStories) {
        btnBackStories.onclick = () => {
            stopStorySpeech();
            switchToView("view-practice-menu");
        };
    }

    // Bind back button from interactive hoeren
    const btnBackHoeren = document.querySelector("#view-interactive-hoeren .btn-back-home");
    if (btnBackHoeren) {
        btnBackHoeren.onclick = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            handleHoerenBackNavigation();
        };
    }

    // Bind grammar lesson view back button
    const btnBackGrammar = document.getElementById("btn-back-grammar-menu");
    if (btnBackGrammar) {
        btnBackGrammar.onclick = () => {
            const listContainer = document.getElementById("grammar-topic-list-container");
            if (listContainer && listContainer.style.display === "none") {
                openGrammarLessonHub();
            } else {
                switchToView("view-practice-menu");
            }
        };
    }

    // Bind grammar tab switches
    const tabGrammarLesson = document.getElementById("tab-grammar-lesson");
    if (tabGrammarLesson) {
        tabGrammarLesson.onclick = () => switchGrammarTab("lesson");
    }
    const tabGrammarPractice = document.getElementById("tab-grammar-practice");
    if (tabGrammarPractice) {
        tabGrammarPractice.onclick = () => switchGrammarTab("practice");
    }

    // Bind grammar lesson start practice button
    const btnGrammarStartPractice = document.getElementById("btn-grammar-start-practice");
    if (btnGrammarStartPractice) {
        btnGrammarStartPractice.onclick = () => switchGrammarTab("practice");
    }

    // Bind grammar quiz actions
    const btnGrammarCheckAnswer = document.getElementById("btn-grammar-check-answer");
    if (btnGrammarCheckAnswer) {
        btnGrammarCheckAnswer.onclick = () => checkGrammarAnswer();
    }
    const btnGrammarNextQuestion = document.getElementById("btn-grammar-next-question");
    if (btnGrammarNextQuestion) {
        btnGrammarNextQuestion.onclick = () => nextGrammarQuestion();
    }

    // Bind grammar retry and return
    const btnGrammarRetry = document.getElementById("btn-grammar-practice-retry-all");
    if (btnGrammarRetry) {
        btnGrammarRetry.onclick = () => startGrammarPractice();
    }
    const btnGrammarReturn = document.getElementById("btn-grammar-practice-return-topics");
    if (btnGrammarReturn) {
        btnGrammarReturn.onclick = () => openGrammarLessonHub();
    }

    // Bind phrase bank search
    const phraseSearch = document.getElementById("phrase-search-input");
    if (phraseSearch) {
        phraseSearch.oninput = () => {
            renderPhrases();
        };
    }

    // Bind phrase favorites toggle
    const btnPhraseFav = document.getElementById("btn-phrase-toggle-favorites");
    if (btnPhraseFav) {
        btnPhraseFav.onclick = () => {
            showFavoritesOnly = !showFavoritesOnly;
            btnPhraseFav.classList.toggle("active", showFavoritesOnly);
            renderPhraseCategoryPills();
            renderPhrases();
        };
    }

    // Bind phrase bank start practice
    const btnPhraseStartPractice = document.getElementById("btn-phrase-start-practice");
    if (btnPhraseStartPractice) {
        btnPhraseStartPractice.onclick = () => {
            startPhrasePractice();
        };
    }

    // Bind phrase practice close
    const btnPhrasePracticeClose = document.getElementById("btn-phrase-practice-close");
    if (btnPhrasePracticeClose) {
        btnPhrasePracticeClose.onclick = () => {
            document.getElementById("phrase-practice-container").style.display = "none";
            document.getElementById("phrase-cards-container").style.display = "grid";
            document.getElementById("btn-phrase-start-practice").style.display = "inline-block";
        };
    }

    // Bind phrase practice next
    const btnPhrasePracticeNext = document.getElementById("btn-phrase-practice-next");
    if (btnPhrasePracticeNext) {
        btnPhrasePracticeNext.onclick = () => {
            nextPhraseQuestion();
        };
    }

    // Bind phrase practice results close
    const btnPhraseResultsClose = document.getElementById("btn-phrase-practice-results-close");
    if (btnPhraseResultsClose) {
        btnPhraseResultsClose.onclick = () => {
            document.getElementById("phrase-practice-container").style.display = "none";
            document.getElementById("phrase-cards-container").style.display = "grid";
            document.getElementById("btn-phrase-start-practice").style.display = "inline-block";
        };
    }

    // Bind real-life scenario back button
    const btnBackToScenarios = document.getElementById("btn-back-to-real-life-menu");
    if (btnBackToScenarios) {
        btnBackToScenarios.onclick = () => {
            stopDialogueSpeech();
            document.getElementById("real-life-workspace").style.display = "none";
            document.getElementById("real-life-menu-container").style.display = "grid";
        };
    }

    // Bind real-life scenario quiz actions
    const btnRlQuizCheck = document.getElementById("btn-rl-quiz-check-answer");
    if (btnRlQuizCheck) {
        btnRlQuizCheck.onclick = () => checkRealLifeAnswer();
    }
    const btnRlQuizNext = document.getElementById("btn-rl-quiz-next-question");
    if (btnRlQuizNext) {
        btnRlQuizNext.onclick = () => nextRealLifeQuestion();
    }
    const btnRlQuizRetry = document.getElementById("btn-rl-quiz-retry-all");
    if (btnRlQuizRetry) {
        btnRlQuizRetry.onclick = () => startRealLifeQuiz();
    }
    const btnRlQuizReturn = document.getElementById("btn-rl-quiz-return-topics");
    if (btnRlQuizReturn) {
        btnRlQuizReturn.onclick = () => {
            document.getElementById("real-life-workspace").style.display = "none";
            document.getElementById("real-life-menu-container").style.display = "grid";
        };
    }

    // Bind listening story back button
    const btnBackToStories = document.getElementById("btn-back-to-stories-menu");
    if (btnBackToStories) {
        btnBackToStories.onclick = () => {
            stopStorySpeech();
            document.getElementById("listening-story-workspace").style.display = "none";
            document.getElementById("listening-stories-menu").style.display = "grid";
        };
    }

    // Bind listening story quiz actions
    const btnStoryQuizCheck = document.getElementById("btn-story-quiz-check-answer");
    if (btnStoryQuizCheck) {
        btnStoryQuizCheck.onclick = () => checkStoryAnswer();
    }
    const btnStoryQuizNext = document.getElementById("btn-story-quiz-next-question");
    if (btnStoryQuizNext) {
        btnStoryQuizNext.onclick = () => nextStoryQuestion();
    }
    const btnStoryQuizRetry = document.getElementById("btn-story-quiz-retry-all");
    if (btnStoryQuizRetry) {
        btnStoryQuizRetry.onclick = () => startStoryQuiz();
    }
    const btnStoryQuizReturn = document.getElementById("btn-story-quiz-return-topics");
    if (btnStoryQuizReturn) {
        btnStoryQuizReturn.onclick = () => {
            document.getElementById("listening-story-workspace").style.display = "none";
            document.getElementById("listening-stories-menu").style.display = "grid";
        };
    }

    // Bind listening story retell recording actions
    const btnStoryRecordStart = document.getElementById("btn-story-record-start");
    if (btnStoryRecordStart) {
        btnStoryRecordStart.onclick = () => startStoryRetellRecording();
    }
    const btnStoryRecordStop = document.getElementById("btn-story-record-stop");
    if (btnStoryRecordStop) {
        btnStoryRecordStop.onclick = () => stopStoryRetellRecording();
    }
});

// ============================================================================
// --- VERSION 2.3 LEARNING OPTIMIZATION UPDATE ADDITIONS ---
// ============================================================================

// --- 1. PRONUNCIATION SETTINGS FIXED OVERRIDE ---
function getPronunciationHTML(germanText) {
    const lang = portalState.pronunciationLang || "ml";
    if (lang === "hidden" || portalState.showPronunciation === false) return "";
    const phonetic = transliterateGerman(germanText, lang);
    if (!phonetic) return "";
    return `<span class="pronunciation-subtext">${phonetic}</span>`;
}
window.getPronunciationHTML = getPronunciationHTML;

// --- 2. READING LEARN MODE (5 STAGES) ---
let readingLearnState = {
    itemIndex: 0,
    stage: 0, // 0 = Selection, 1 = Vocab, 2 = Sentences, 3 = Passage, 4 = Practice, 5 = Retest
    currentQuestionIndex: 0,
    score: 0,
    isAnswerChecked: false,
    questions: [],
    answers: {},
    retestMode: false
};

// Override startReadingLearning in app.js
function startReadingLearning() {
    readingLearnState = {
        itemIndex: 0,
        stage: 0,
        currentQuestionIndex: 0,
        score: 0,
        isAnswerChecked: false,
        questions: [],
        answers: {},
        retestMode: false
    };
    learningState = {
        type: "reading",
        topic: "Lesen",
        items: PRACTICE_DATABASE.reading,
        currentIndex: 0
    };
    switchToView("view-learning-workspace");
    loadReadingLearnItem();
}
window.startReadingLearning = startReadingLearning;

// Load Reading Learn Item / Stage Selector
function loadReadingLearnItem() {
    const container = document.getElementById("learn-card-content");
    const badge = document.getElementById("learn-progress-badge");
    const bar = document.getElementById("learn-progress-bar-fill");
    const prevBtn = document.getElementById("btn-learn-prev");
    const nextBtn = document.getElementById("btn-learn-next");
    const navRow = document.querySelector(".learning-navigation");
    const barContainer = document.querySelector("#view-learning-workspace .progress-bar-container");

    document.getElementById("learn-workspace-title").textContent = "Leseverständnis / Reading Comprehension";

    if (readingLearnState.stage === 0) {
        // Render Selection Grid
        if (badge) badge.style.display = "none";
        if (barContainer) barContainer.style.display = "none";
        if (navRow) navRow.style.display = "none";

        // Widen container for topic grid
        const lc = document.querySelector(".learning-container");
        if (lc) lc.classList.add("topic-grid-mode");

        let gridHTML = `
            <div style="text-align:center; margin-bottom:20px; animation: fadeIn 0.2s ease-out;">
                <h3 style="font-family:var(--font-display); color:var(--color-primary); margin-top:0;">Wählen Sie ein Lesethema / Choose a Reading Topic</h3>
                <p style="color:var(--color-text-muted); font-size:0.95rem;">Jedes Thema führt Sie durch Vokabeln, Sätze, Text, Übungen und einen Abschlussstest.</p>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:16px; max-height:480px; overflow-y:auto; padding:4px;">
        `;

        PRACTICE_DATABASE.reading.forEach((item, idx) => {
            const completed = portalState.progress.reading && portalState.progress.reading[item.id];
            const badgeHTML = completed 
                ? `<span class="badge" style="background:rgba(16,185,129,0.15); color:var(--color-success); font-size:0.75rem; padding:4px 8px; border-radius:6px;">Gemeistert</span>`
                : `<span class="badge" style="background:rgba(255,255,255,0.05); color:var(--color-text-muted); font-size:0.75rem; padding:4px 8px; border-radius:6px;">Neu</span>`;
            
            const titleText = item.text.match(/<h3>(.*?)<\/h3>/) ? item.text.match(/<h3>(.*?)<\/h3>/)[1] : "Lesetext " + (idx + 1);

            gridHTML += `
                <div class="practice-topic-card glass-panel btn-touch" onclick="selectReadingTopic(${idx})" style="cursor:pointer; padding:20px; display:flex; flex-direction:column; justify-content:space-between; min-height:140px; border:1px solid var(--color-border); border-radius:var(--radius-lg); transition: transform 0.2s, box-shadow 0.2s;">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <span style="font-size:1.5rem;">📖</span>
                            ${badgeHTML}
                        </div>
                        <h4 style="margin:0 0 6px 0; font-family:var(--font-display); font-size:1.1rem; line-height:1.3;">${titleText}</h4>
                    </div>
                    <div style="text-align:right; color:var(--color-accent); font-weight:700; font-size:0.9rem;">Lernen starten &rarr;</div>
                </div>
            `;
        });

        gridHTML += `</div>`;
        container.innerHTML = gridHTML;
    } else {
        // Render Stage 1 to 5
        if (badge) badge.style.display = "block";
        if (barContainer) barContainer.style.display = "block";
        if (navRow) navRow.style.display = "flex";

        // Reset container width for lesson view
        const lc = document.querySelector(".learning-container");
        if (lc) lc.classList.remove("topic-grid-mode");

        badge.textContent = `Stage ${readingLearnState.stage} / 5`;
        bar.style.width = `${(readingLearnState.stage / 5) * 100}%`;

        // Configure next/prev buttons
        prevBtn.disabled = false;
        prevBtn.innerHTML = `&larr; Zurück / Back`;
        prevBtn.onclick = () => readingLearnPrev();

        if (readingLearnState.stage === 5 && readingLearnState.currentQuestionIndex >= readingLearnState.questions.length) {
            nextBtn.innerHTML = `Beenden / Finish 🏁`;
            nextBtn.disabled = false;
        } else if (readingLearnState.stage === 4 && readingLearnState.currentQuestionIndex >= readingLearnState.questions.length) {
            nextBtn.innerHTML = `Start Retest ⚡`;
            nextBtn.disabled = false;
        } else if (readingLearnState.stage === 4 || readingLearnState.stage === 5) {
            nextBtn.innerHTML = readingLearnState.isAnswerChecked ? `Nächste Frage &rarr;` : `Prüfen / Check`;
            nextBtn.disabled = !readingLearnState.isAnswerChecked && readingLearnState.answers[readingLearnState.currentQuestionIndex] === undefined;
        } else {
            nextBtn.innerHTML = `Weiter / Next &rarr;`;
            nextBtn.disabled = false;
        }
        nextBtn.onclick = () => readingLearnNext();

        const item = PRACTICE_DATABASE.reading[readingLearnState.itemIndex];
        
        // Render stage content
        if (readingLearnState.stage === 1) {
            renderReadingStage1(item, container);
        } else if (readingLearnState.stage === 2) {
            renderReadingStage2(item, container);
        } else if (readingLearnState.stage === 3) {
            renderReadingStage3(item, container);
        } else if (readingLearnState.stage === 4) {
            renderReadingStage4(item, container);
        } else if (readingLearnState.stage === 5) {
            renderReadingStage5(item, container);
        }
    }
}
window.loadReadingLearnItem = loadReadingLearnItem;

function selectReadingTopic(idx) {
    readingLearnState.itemIndex = idx;
    readingLearnState.stage = 1;
    readingLearnState.currentQuestionIndex = 0;
    readingLearnState.score = 0;
    readingLearnState.isAnswerChecked = false;
    readingLearnState.retestMode = false;
    
    // Generate questions for this topic
    const item = PRACTICE_DATABASE.reading[idx];
    readingLearnState.questions = generateReadingQuestions(item);
    readingLearnState.answers = {};

    loadReadingLearnItem();
}
window.selectReadingTopic = selectReadingTopic;

function readingLearnPrev() {
    if (readingLearnState.stage === 1) {
        readingLearnState.stage = 0;
    } else {
        readingLearnState.stage--;
        readingLearnState.currentQuestionIndex = 0;
        readingLearnState.isAnswerChecked = false;
    }
    loadReadingLearnItem();
}

function readingLearnNext() {
    const nextBtn = document.getElementById("btn-learn-next");
    
    if (readingLearnState.stage < 4) {
        readingLearnState.stage++;
        readingLearnState.currentQuestionIndex = 0;
        readingLearnState.isAnswerChecked = false;
        loadReadingLearnItem();
    } else if (readingLearnState.stage === 4) {
        // Stage 4 Quiz
        if (readingLearnState.currentQuestionIndex < readingLearnState.questions.length) {
            if (!readingLearnState.isAnswerChecked) {
                checkReadingQuestionAnswer();
            } else {
                readingLearnState.currentQuestionIndex++;
                readingLearnState.isAnswerChecked = false;
                loadReadingLearnItem();
            }
        } else {
            // End of Stage 4 -> Move to Stage 5 Retest
            readingLearnState.stage = 5;
            readingLearnState.currentQuestionIndex = 0;
            readingLearnState.score = 0;
            readingLearnState.isAnswerChecked = false;
            readingLearnState.answers = {};
            readingLearnState.retestMode = true;
            
            // Shuffle questions and options for Retest!
            readingLearnState.questions = shuffleArray(readingLearnState.questions.map(q => {
                const correctText = q.options[q.correct];
                const shuffledOpts = shuffleArray([...q.options]);
                const newCorrect = shuffledOpts.indexOf(correctText);
                return {
                    ...q,
                    options: shuffledOpts,
                    correct: newCorrect
                };
            }));
            
            loadReadingLearnItem();
        }
    } else if (readingLearnState.stage === 5) {
        // Stage 5 Retest
        if (readingLearnState.currentQuestionIndex < readingLearnState.questions.length) {
            if (!readingLearnState.isAnswerChecked) {
                checkReadingQuestionAnswer();
            } else {
                readingLearnState.currentQuestionIndex++;
                readingLearnState.isAnswerChecked = false;
                loadReadingLearnItem();
            }
        } else {
            // End of Retest! Mastered if score >= 80%
            const item = PRACTICE_DATABASE.reading[readingLearnState.itemIndex];
            const percent = (readingLearnState.score / readingLearnState.questions.length) * 100;
            if (percent >= 80) {
                portalState.progress.reading = portalState.progress.reading || {};
                portalState.progress.reading[item.id] = true;
                savePortalStateToStorage();
                updateHeaderStats();
            }
            
            // Go back to topic selection
            readingLearnState.stage = 0;
            loadReadingLearnItem();
        }
    }
}

// Stage 1 Renderer: Vocab Preview
function renderReadingStage1(item, container) {
    let html = `
        <div style="animation: fadeIn 0.2s ease-out;">
            <div style="text-align:center; margin-bottom:20px;">
                <span style="font-size:1.1rem; font-weight:700; color:var(--color-primary); text-transform:uppercase;">Stage 1: Vokabeln Vorschau / Vocabulary Preview</span>
                <h3 style="margin:6px 0 0 0; font-family:var(--font-display);">Wortschatz lernen / Learn Key Words</h3>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:16px; margin-bottom:20px;">
    `;

    item.vocabSupport.forEach(v => {
        html += `
            <div class="vocab-learn-card glass-panel" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between; min-height:150px; border:1px solid var(--color-border); border-radius:var(--radius-md);">
                <div>
                    <div style="font-size:1.4rem; font-weight:800; color:var(--color-text-primary); margin-bottom:4px;">${v.word}</div>
                    ${getPronunciationHTML(v.word)}
                    <div style="font-size:1rem; font-weight:600; color:var(--color-success); margin-top:8px;">${v.translation}</div>
                </div>
                <div style="display:flex; gap:8px; margin-top:12px;">
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 1.0)">🔊 Normal</button>
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 0.65)">🐢 Slow</button>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

// Stage 2 Renderer: Sentence Breakdown
function renderReadingStage2(item, container) {
    const rawText = item.text.replace(/<\/(h1|h2|h3|h4|h5|h6|p|div|li)>/gi, '. ').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    // Split into sentences
    const sentences = rawText.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.length > 3);
    const translations = item.translation.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.length > 3);

    let html = `
        <div style="animation: fadeIn 0.2s ease-out; text-align:left;">
            <div style="text-align:center; margin-bottom:20px;">
                <span style="font-size:1.1rem; font-weight:700; color:var(--color-primary); text-transform:uppercase;">Stage 2: Satzgliederung / Sentence Breakdown</span>
                <h3 style="margin:6px 0 0 0; font-family:var(--font-display);">Sätze verstehen / Understand the Sentences</h3>
            </div>
            <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:20px;">
    `;

    sentences.forEach((sent, idx) => {
        html += `
            <div class="sentence-breakdown-card glass-panel" style="padding:16px; border:1px solid var(--color-border); border-radius:var(--radius-md); background:rgba(255,255,255,0.01);">
                <div style="font-size:1.15rem; font-weight:700; color:var(--color-text-primary);">${sent}</div>
                ${getPronunciationHTML(sent)}
                <div style="font-size:0.95rem; font-style:italic; color:var(--color-success); margin-top:8px; display:flex; align-items:center; gap:8px;">
                    <span>&darr;</span>
                    <span>${translations[idx] || item.translation}</span>
                </div>
                <div style="display:flex; gap:8px; margin-top:12px;">
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${sent.replace(/'/g, "\\'")}', 1.0)">🔊 Play</button>
                    <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${sent.replace(/'/g, "\\'")}', 0.65)">🐢 Slow</button>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

// Stage 3 Renderer: Reading Passage
function renderReadingStage3(item, container) {
    if (readingLearnState.passageMode === undefined) {
        readingLearnState.passageMode = "de-en"; // default
    }

    let html = `
        <div style="animation: fadeIn 0.2s ease-out;">
            <div style="text-align:center; margin-bottom:20px;">
                <span style="font-size:1.1rem; font-weight:700; color:var(--color-primary); text-transform:uppercase;">Stage 3: Lesetext / Reading Passage</span>
                <h3 style="margin:6px 0 0 0; font-family:var(--font-display);">Den Text lesen / Read the Text</h3>
            </div>

            <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
                <button class="btn btn-xs ${readingLearnState.passageMode === 'de' ? 'btn-primary' : 'btn-secondary'} btn-touch" onclick="setReadingPassageMode('de')">German Only</button>
                <button class="btn btn-xs ${readingLearnState.passageMode === 'de-en' ? 'btn-primary' : 'btn-secondary'} btn-touch" onclick="setReadingPassageMode('de-en')">German + English</button>
                <button class="btn btn-xs ${readingLearnState.passageMode === 'en' ? 'btn-primary' : 'btn-secondary'} btn-touch" onclick="setReadingPassageMode('en')">English Only</button>
            </div>

            <div class="glass-panel" style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); margin-bottom:20px; text-align:left; background:rgba(0,0,0,0.15);">
    `;

    if (readingLearnState.passageMode === "de" || readingLearnState.passageMode === "de-en") {
        html += `
            <div style="font-size:1.2rem; line-height:1.7; font-weight:600; color:var(--color-text-primary);">
                ${item.text}
            </div>
        `;
        
        // Malayalam pronunciation block if configured and German text is visible
        const lang = portalState.pronunciationLang || "ml";
        if (lang !== "hidden" && portalState.showPronunciation !== false) {
            const rawText = item.text.replace(/<\/(h1|h2|h3|h4|h5|h6|p|div|li)>/gi, '. ').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            html += `
                <div style="margin-top:12px; padding-top:12px; border-top:1px dashed var(--color-border); font-size:0.95rem; color:var(--color-text-muted);">
                    <strong>Malayalam Pronunciation Helper:</strong><br>
                    ${getPronunciationHTML(rawText)}
                </div>
            `;
        }
    }

    if (readingLearnState.passageMode === "de-en") {
        html += `<div style="margin:16px 0; border-top:1px dashed var(--color-border);"></div>`;
    }

    if (readingLearnState.passageMode === "en" || readingLearnState.passageMode === "de-en") {
        html += `
            <div style="font-size:1.1rem; line-height:1.6; font-style:italic; color:var(--color-success);">
                ${item.translation}
            </div>
        `;
    }

    html += `
            </div>
            <div style="display:flex; justify-content:center; gap:12px;">
                <button class="btn btn-secondary btn-touch" onclick="playSpeech('${item.text.replace(/<[^>]*>/g, ' ').replace(/'/g, "\\'")}', 1.0)">🔊 Normal vorlesen</button>
                <button class="btn btn-secondary btn-touch" onclick="playSpeech('${item.text.replace(/<[^>]*>/g, ' ').replace(/'/g, "\\'")}', 0.65)">🐢 Langsam</button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

function setReadingPassageMode(mode) {
    readingLearnState.passageMode = mode;
    loadReadingLearnItem();
}
window.setReadingPassageMode = setReadingPassageMode;

// Stage 4 & 5 Renderers: Quiz and Retest
function renderReadingStage4(item, container) {
    renderReadingQuizUI("Stage 4: Übungsfragen / Practice Questions", container);
}

function renderReadingStage5(item, container) {
    renderReadingQuizUI("Stage 5: Retest (Abschlusstest)", container);
}

function renderReadingQuizUI(stageTitle, container) {
    const q = readingLearnState.questions[readingLearnState.currentQuestionIndex];
    
    if (!q) {
        // Quiz finished
        const percent = (readingLearnState.score / readingLearnState.questions.length) * 100;
        let congrats = "";
        if (percent >= 80) {
            congrats = `<h3 style="color:var(--color-success);">Ausgezeichnet! / Excellent! 🎉</h3>
                        <p>Sie haben diesen Text gemeistert und 80%+ erreicht!</p>`;
        } else {
            congrats = `<h3 style="color:var(--color-danger);">Nicht bestanden / Not passed</h3>
                        <p>Sie müssen mindestens 80% richtig beantworten, um das Thema freizuschalten.</p>`;
        }

        container.innerHTML = `
            <div style="text-align:center; padding:20px; animation: fadeIn 0.2s ease-out;">
                <span style="font-size:1.1rem; font-weight:700; color:var(--color-primary); text-transform:uppercase;">${stageTitle}</span>
                <div style="margin:24px 0;">
                    <div style="width:120px; height:120px; border-radius:50%; border:4px solid ${percent >= 80 ? 'var(--color-success)' : 'var(--color-danger)'}; display:flex; justify-content:center; align-items:center; margin:0 auto; font-size:2rem; font-weight:800;">
                        ${readingLearnState.score} / ${readingLearnState.questions.length}
                    </div>
                </div>
                ${congrats}
            </div>
        `;
        return;
    }

    const selectedIdx = readingLearnState.answers[readingLearnState.currentQuestionIndex];

    let optionsHTML = "";
    q.options.forEach((opt, idx) => {
        let cardClass = "option-card glass-panel btn-touch";
        let cardStyle = "width:100%; text-align:left; padding:14px; margin-bottom:8px; display:flex; flex-direction:column; justify-content:center; border:1px solid var(--color-border); border-radius:var(--radius-md);";
        
        if (selectedIdx === idx) {
            cardClass += " selected";
        }
        
        if (readingLearnState.isAnswerChecked) {
            if (idx === q.correct) {
                cardStyle += " border-color:var(--color-success); background:rgba(16,185,129,0.1);";
            } else if (selectedIdx === idx) {
                cardStyle += " border-color:var(--color-danger); background:rgba(239,68,68,0.1);";
            }
        }

        optionsHTML += `
            <button class="${cardClass}" style="${cardStyle}" onclick="selectReadingQuestionOption(${idx})">
                <span style="font-size:1.05rem; font-weight:600; color:var(--color-text-primary);">${opt}</span>
                ${getPronunciationHTML(opt)}
            </button>
        `;
    });

    let explanationHTML = "";
    if (readingLearnState.isAnswerChecked) {
        const isCorrect = (selectedIdx === q.correct);
        explanationHTML = `
            <div class="practice-explanation-panel ${isCorrect ? 'success-border' : 'danger-border'}" style="margin-top:20px; padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); text-align:left;">
                <h4 style="margin:0 0 6px 0; color:${isCorrect ? 'var(--color-success)' : 'var(--color-danger)'};">${isCorrect ? 'Richtig! / Correct! 🎉' : 'Falsch! / Incorrect! ❌'}</h4>
                <p style="margin:0; font-size:0.95rem; line-height:1.4;">${q.explanation || 'Keine Erklärung.'}</p>
            </div>
        `;
    }

    container.innerHTML = `
        <div style="animation: fadeIn 0.2s ease-out; text-align:left;">
            <div style="text-align:center; margin-bottom:20px;">
                <span style="font-size:1.1rem; font-weight:700; color:var(--color-primary); text-transform:uppercase;">${stageTitle}</span>
                <h3 style="margin:6px 0 0 0; font-family:var(--font-display);">Frage ${readingLearnState.currentQuestionIndex + 1} von ${readingLearnState.questions.length}</h3>
            </div>
            
            <div class="glass-panel" style="padding:20px; border:1px solid var(--color-border); border-radius:var(--radius-lg); margin-bottom:16px; background:rgba(255,255,255,0.02);">
                <div style="font-size:1.2rem; font-weight:700; margin-bottom:4px;">${q.question}</div>
                ${getPronunciationHTML(q.question)}
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
                ${optionsHTML}
            </div>

            ${explanationHTML}
        </div>
    `;
}

function selectReadingQuestionOption(idx) {
    if (readingLearnState.isAnswerChecked) return;
    readingLearnState.answers[readingLearnState.currentQuestionIndex] = idx;
    
    // Refresh UI to show selection
    loadReadingLearnItem();
}
window.selectReadingQuestionOption = selectReadingQuestionOption;

function checkReadingQuestionAnswer() {
    if (readingLearnState.isAnswerChecked) return;
    
    const q = readingLearnState.questions[readingLearnState.currentQuestionIndex];
    const selected = readingLearnState.answers[readingLearnState.currentQuestionIndex];
    
    if (selected === undefined) return;
    
    readingLearnState.isAnswerChecked = true;
    if (selected === q.correct) {
        readingLearnState.score++;
    }
    
    loadReadingLearnItem();
}

// Helper to shuffle array
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Generate exactly 10 questions for reading passage
function generateReadingQuestions(item) {
    const list = [];
    
    // 1. Comprehension question
    list.push({
        question: item.question,
        options: [...item.options],
        correct: item.correct,
        explanation: item.explanation
    });

    // 2. Vocab translations (German -> English)
    const vs = item.vocabSupport || [];
    vs.forEach((v, idx) => {
        if (list.length >= 10) return;
        
        // Find distractors
        const otherTrans = [];
        for (const t in VOCABULARY_DATABASE) {
            VOCABULARY_DATABASE[t].forEach(w => {
                if (w.translation !== v.translation && !otherTrans.includes(w.translation)) {
                    otherTrans.push(w.translation);
                }
            });
        }
        const shuffledDistractors = shuffleArray(otherTrans);
        const options = shuffleArray([v.translation, shuffledDistractors[0], shuffledDistractors[1]]);
        const correct = options.indexOf(v.translation);

        list.push({
            question: `Was bedeutet "${v.word}" auf Englisch?`,
            options: options,
            correct: correct,
            explanation: `"${v.word}" bedeutet "${v.translation}".`
        });
    });

    // 3. Vocab translations (English -> German)
    vs.forEach((v, idx) => {
        if (list.length >= 10) return;
        
        // Find distractors
        const otherWords = [];
        for (const t in VOCABULARY_DATABASE) {
            VOCABULARY_DATABASE[t].forEach(w => {
                if (w.word !== v.word && !otherWords.includes(w.word)) {
                    otherWords.push(w.word);
                }
            });
        }
        const shuffledDistractors = shuffleArray(otherWords);
        const options = shuffleArray([v.word, shuffledDistractors[0], shuffledDistractors[1]]);
        const correct = options.indexOf(v.word);

        list.push({
            question: `Welches deutsche Wort bedeutet "${v.translation}"?`,
            options: options,
            correct: correct,
            explanation: `"${v.word}" bedeutet "${v.translation}".`
        });
    });

    // 4. Sentence translations
    const rawText = item.text.replace(/<\/(h1|h2|h3|h4|h5|h6|p|div|li)>/gi, '. ').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const sentences = rawText.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.length > 3);
    const translations = item.translation.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.length > 3);

    sentences.forEach((sent, idx) => {
        if (list.length >= 10) return;
        const correctTrans = translations[idx] || item.translation;

        // distractor translations from other texts
        const otherSentencesTrans = [];
        PRACTICE_DATABASE.reading.forEach(r => {
            if (r.id !== item.id) {
                otherSentencesTrans.push(r.translation);
            }
        });
        const shuffledDistractors = shuffleArray(otherSentencesTrans);
        const options = shuffleArray([correctTrans, shuffledDistractors[0] || "None of the above", shuffledDistractors[1] || "Not correct"]);
        const correct = options.indexOf(correctTrans);

        list.push({
            question: `Übersetzen Sie: "${sent}"`,
            options: options,
            correct: correct,
            explanation: `Die richtige Übersetzung ist: "${correctTrans}".`
        });
    });

    // Pad to 10 questions if needed
    let safetyCounter = 0;
    while (list.length < 10 && safetyCounter < 100) {
        safetyCounter++;
        // Create duplicate question or random vocab from database
        const randomTopic = Object.keys(VOCABULARY_DATABASE)[0];
        const randomWord = VOCABULARY_DATABASE[randomTopic][Math.floor(Math.random() * VOCABULARY_DATABASE[randomTopic].length)];
        
        const otherTrans = [];
        VOCABULARY_DATABASE[randomTopic].forEach(w => {
            if (w.translation !== randomWord.translation) otherTrans.push(w.translation);
        });
        const dist = shuffleArray(otherTrans);
        const options = shuffleArray([randomWord.translation, dist[0], dist[1]]);
        const correct = options.indexOf(randomWord.translation);

        list.push({
            question: `Was bedeutet das Wort "${randomWord.word}"?`,
            options: options,
            correct: correct,
            explanation: `"${randomWord.word}" bedeutet "${randomWord.translation}".`
        });
    }

    return list.slice(0, 10);
}


// --- 3. LISTENING LEARNING STUDIO (8 STEPS) ---
let listeningWizardState = {
    currentStory: null,
    step: 1, // 1 to 8
    currentQuestionIndex: 0,
    score: 0,
    isAnswerChecked: false,
    answers: {},
    questions: [],
    retestMode: false
};

// Overwrite openListeningStory to trigger the 8-step wizard
function openListeningStory(id) {
    const st = LISTENING_STORIES_DATABASE.find(item => item.id === id);
    if (!st) return;
    
    listeningWizardState = {
        currentStory: st,
        step: 1,
        currentQuestionIndex: 0,
        score: 0,
        isAnswerChecked: false,
        answers: {},
        questions: shuffleArray([...st.questions]).slice(0, 10), // Ensure exactly 10 questions are loaded
        retestMode: false
    };

    // Ensure 10 questions are built if database has fewer
    if (listeningWizardState.questions.length < 10) {
        const diff = 10 - listeningWizardState.questions.length;
        const extraQ = generateExtraStoryQuestions(st, diff);
        listeningWizardState.questions = [...listeningWizardState.questions, ...extraQ];
    }

    document.getElementById("listening-stories-menu").style.display = "none";
    document.getElementById("listening-story-workspace").style.display = "block";
    document.getElementById("listening-story-workspace-title").textContent = st.title;
    
    // Hide default tab controls completely!
    const staticTabs = document.querySelector(".story-tabs");
    if (staticTabs) staticTabs.style.display = "none";
    
    const staticAudioCard = document.querySelector("#listening-story-workspace .audio-control-card");
    if (staticAudioCard) {
        staticAudioCard.style.setProperty("display", "none", "important");
    }

    renderListeningWizardStep();
}
window.openListeningStory = openListeningStory;

function generateExtraStoryQuestions(st, count) {
    const list = [];
    const vs = st.vocab || [];
    vs.forEach(v => {
        if (list.length >= count) return;
        const otherTrans = ["to look", "to go", "to sleep", "good", "bad", "happy"].filter(x => x !== v.translation);
        const options = shuffleArray([v.translation, otherTrans[0], otherTrans[1]]);
        list.push({
            question: `Was bedeutet das Wort "${v.word}"?`,
            options: options,
            correct: options.indexOf(v.translation),
            explanation: `"${v.word}" bedeutet "${v.translation}".`
        });
    });
    return list;
}

function renderListeningWizardStep() {
    stopStorySpeech();
    
    const workspace = document.getElementById("listening-story-tab-content");
    const st = listeningWizardState.currentStory;
    if (!st) return;

    // Clear previous dynamic wizard wrapper
    let wizardWrapper = document.getElementById("listening-wizard-wrapper");
    if (!wizardWrapper) {
        wizardWrapper = document.createElement("div");
        wizardWrapper.id = "listening-wizard-wrapper";
        workspace.parentNode.insertBefore(wizardWrapper, workspace.nextSibling);
    }
    
    // Hide standard content divs
    document.getElementById("story-tab-content-transcript").style.display = "none";
    document.getElementById("story-tab-content-vocab").style.display = "none";
    document.getElementById("story-tab-content-quiz").style.display = "none";
    document.getElementById("story-tab-content-retell").style.display = "none";
    workspace.style.display = "none"; // Hide main panel holder

    // Render Wizard Navigation Header (Steps 1 to 8)
    const stepTitles = [
        "1. Nur hören / Listen Only",
        "2. Skript zeigen / German Transcript",
        "3. Übersetzung / English Translation",
        "4. Aussprache / Malayalam Pronunciation",
        "5. Vokabeln / Vocabulary",
        "6. Übung / Practice Questions",
        "7. Nacherzählen / Retell Story",
        "8. Retest / Final Retest"
    ];

    let dotsHTML = "";
    for (let i = 1; i <= 8; i++) {
        const active = i === listeningWizardState.step ? "background:var(--color-primary);" : "background:rgba(255,255,255,0.1);";
        dotsHTML += `<div style="width:12px; height:12px; border-radius:50%; ${active} transition: background 0.3s;"></div>`;
    }

    let innerContentHTML = "";

    // Steps Logic
    if (listeningWizardState.step === 1) {
        // Step 1: Listen Only
        innerContentHTML = `
            <div style="text-align:center; padding:24px; animation: fadeIn 0.2s ease-out;">
                <p style="color:var(--color-text-muted); margin-bottom:24px;">Hören Sie sich die Geschichte aufmerksam an, ohne Text zu lesen. / Listen to the story carefully without reading the text.</p>
                <div style="margin:20px auto; width:100%; max-width:400px; padding:24px; background:rgba(255,255,255,0.02); border:1px solid var(--color-border); border-radius:var(--radius-lg); text-align:center;">
                    <div style="font-size:3rem; margin-bottom:12px;">🎧</div>
                    <div style="display:flex; gap:12px; justify-content:center; margin-bottom:20px; flex-wrap:wrap;">
                        <button id="wiz-play-normal" class="btn btn-primary btn-touch" style="min-height:44px;">🔊 Normal Speed</button>
                        <button id="wiz-play-slow" class="btn btn-secondary btn-touch" style="min-height:44px;">🐢 Langsam</button>
                    </div>
                    <button id="wiz-stop" class="btn btn-secondary btn-touch" disabled style="min-height:44px; width:100%;">Stop</button>
                </div>
                <!-- Wave visualizer animation -->
                <div id="wave-visualizer" style="display:flex; justify-content:center; align-items:center; gap:4px; height:40px; margin-top:20px; opacity:0.3;">
                    <div style="width:4px; height:10px; background:var(--color-primary); animation: wave 1s ease-in-out infinite;"></div>
                    <div style="width:4px; height:25px; background:var(--color-primary); animation: wave 1s ease-in-out infinite 0.2s;"></div>
                    <div style="width:4px; height:15px; background:var(--color-primary); animation: wave 1s ease-in-out infinite 0.4s;"></div>
                    <div style="width:4px; height:35px; background:var(--color-primary); animation: wave 1s ease-in-out infinite 0.6s;"></div>
                    <div style="width:4px; height:20px; background:var(--color-primary); animation: wave 1s ease-in-out infinite 0.8s;"></div>
                </div>
            </div>
        `;
    } else if (listeningWizardState.step >= 2 && listeningWizardState.step <= 4) {
        // Steps 2, 3, 4: German Transcript, English, Malayalam
        let transcriptListHTML = "";
        const sentences = st.text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 3);
        const translations = st.translation.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 3);

        sentences.forEach((sent, idx) => {
            let translationHTML = "";
            let pronunciationHTML = "";

            if (listeningWizardState.step >= 3) {
                translationHTML = `<div style="font-size:0.95rem; font-style:italic; color:var(--color-success); margin-top:4px;">${translations[idx] || ""}</div>`;
            }

            if (listeningWizardState.step >= 4) {
                pronunciationHTML = getPronunciationHTML(sent);
            }

            transcriptListHTML += `
                <div class="transcript-bubble" style="padding:14px; margin-bottom:12px; background:rgba(255,255,255,0.02); border:1px solid var(--color-border); border-radius:var(--radius-md);">
                    <div style="font-size:1.1rem; font-weight:700; color:var(--color-text-primary);">${sent}</div>
                    ${pronunciationHTML}
                    ${translationHTML}
                </div>
            `;
        });

        innerContentHTML = `
            <div style="text-align:left; animation: fadeIn 0.2s ease-out;">
                <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px;">
                    <button id="wiz-play-normal" class="btn btn-secondary btn-touch" style="min-height:44px;">🔊 Vorlesen / Read Normal</button>
                    <button id="wiz-play-slow" class="btn btn-secondary btn-touch" style="min-height:44px;">🐢 Langsam</button>
                    <button id="wiz-stop" class="btn btn-secondary btn-touch" disabled style="min-height:44px;">Stop</button>
                </div>
                <div style="max-height:350px; overflow-y:auto; padding:8px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:rgba(0,0,0,0.1);">
                    ${transcriptListHTML}
                </div>
            </div>
        `;
    } else if (listeningWizardState.step === 5) {
        // Step 5: Extract Vocabulary
        let vocabRows = "";
        st.vocab.forEach(v => {
            vocabRows += `
                <div class="vocab-support-item" style="display:flex; justify-content:space-between; align-items:center; padding:16px; margin-bottom:12px; background:rgba(255,255,255,0.02); border:1px solid var(--color-border); border-radius:var(--radius-md);">
                    <div style="display:flex; flex-direction:column;">
                        <strong style="color:var(--color-primary); font-size:1.2rem;">${v.word}</strong>
                        ${getPronunciationHTML(v.word)}
                        <span style="color:var(--color-text-muted); font-size:0.9rem; margin-top:4px;">${v.translation}</span>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 1.0)">🔊 Play</button>
                        <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${v.word.replace(/'/g, "\\'")}', 0.65)">🐢 Slow</button>
                    </div>
                </div>
            `;
        });

        innerContentHTML = `
            <div style="animation: fadeIn 0.2s ease-out;">
                <p style="color:var(--color-text-muted); text-align:center; margin-bottom:16px;">Vokabeln wiederholen / Review Key Vocabulary</p>
                <div style="max-height:400px; overflow-y:auto; padding-right:4px;">
                    ${vocabRows}
                </div>
            </div>
        `;
    } else if (listeningWizardState.step === 6 || listeningWizardState.step === 8) {
        // Step 6: Practice, Step 8: Retest
        const q = listeningWizardState.questions[listeningWizardState.currentQuestionIndex];
        
        if (!q) {
            // Quiz completed!
            const percent = (listeningWizardState.score / listeningWizardState.questions.length) * 100;
            let resultMessage = "";
            if (percent >= 80) {
                resultMessage = `<h3 style="color:var(--color-success);">Glückwunsch! / Congratulations! 🎉</h3>
                                 <p>Sie haben diese Geschichte gemeistert!</p>`;
            } else {
                resultMessage = `<h3 style="color:var(--color-danger);">Nicht bestanden / Try Again</h3>
                                 <p>Sie müssen mindestens 80% richtig beantworten.</p>`;
            }

            innerContentHTML = `
                <div style="text-align:center; padding:24px; animation: fadeIn 0.2s ease-out;">
                    <div style="width:120px; height:120px; border-radius:50%; border:4px solid ${percent >= 80 ? 'var(--color-success)' : 'var(--color-danger)'}; display:flex; justify-content:center; align-items:center; margin:0 auto; font-size:2rem; font-weight:800; color:${percent >= 80 ? 'var(--color-success)' : 'var(--color-danger)'};">
                        ${listeningWizardState.score} / ${listeningWizardState.questions.length}
                    </div>
                    ${resultMessage}
                </div>
            `;
        } else {
            const selectedIdx = listeningWizardState.answers[listeningWizardState.currentQuestionIndex];
            let optionsHTML = "";
            
            q.options.forEach((opt, idx) => {
                let cardStyle = "width:100%; text-align:left; padding:14px; margin-bottom:8px; display:flex; flex-direction:column; border:1px solid var(--color-border); border-radius:var(--radius-md); background:rgba(255,255,255,0.02);";
                let cardClass = "option-card glass-panel btn-touch";
                
                if (selectedIdx === idx) {
                    cardClass += " selected";
                }
                
                if (listeningWizardState.isAnswerChecked) {
                    if (idx === q.correct) {
                        cardStyle += " border-color:var(--color-success); background:rgba(16,185,129,0.1);";
                    } else if (selectedIdx === idx) {
                        cardStyle += " border-color:var(--color-danger); background:rgba(239,68,68,0.1);";
                    }
                }

                optionsHTML += `
                    <button class="${cardClass}" style="${cardStyle}" onclick="selectListeningWizardOption(${idx})">
                        <span style="font-size:1.05rem; font-weight:600; color:var(--color-text-primary);">${opt}</span>
                        ${getPronunciationHTML(opt)}
                    </button>
                `;
            });

            let expHTML = "";
            if (listeningWizardState.isAnswerChecked) {
                const isCorrect = (selectedIdx === q.correct);
                expHTML = `
                    <div class="practice-explanation-panel ${isCorrect ? 'success-border' : 'danger-border'}" style="margin-top:16px; padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); text-align:left;">
                        <h4 style="margin:0 0 6px 0; color:${isCorrect ? 'var(--color-success)' : 'var(--color-danger)'};">${isCorrect ? 'Richtig! / Correct! 🎉' : 'Falsch! / Incorrect! ❌'}</h4>
                        <p style="margin:0; font-size:0.95rem; line-height:1.4;">${q.explanation || 'Keine Erklärung.'}</p>
                    </div>
                `;
            }

            innerContentHTML = `
                <div style="text-align:left; animation: fadeIn 0.2s ease-out;">
                    <div style="text-align:center; margin-bottom:16px;">
                        <h4 style="margin:0;">Frage ${listeningWizardState.currentQuestionIndex + 1} von ${listeningWizardState.questions.length}</h4>
                    </div>
                    <div class="glass-panel" style="padding:16px; border:1px solid var(--color-border); border-radius:var(--radius-lg); margin-bottom:16px; background:rgba(255,255,255,0.02);">
                        <div style="font-size:1.2rem; font-weight:700; margin-bottom:4px;">${q.question}</div>
                        ${getPronunciationHTML(q.question)}
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        ${optionsHTML}
                    </div>
                    ${expHTML}
                </div>
            `;
        }
    } else if (listeningWizardState.step === 7) {
        // Step 7: Retell Story
        innerContentHTML = `
            <div style="text-align:center; padding:24px; animation: fadeIn 0.2s ease-out;">
                <p style="color:var(--color-text-muted); margin-bottom:20px;">Nacherzählen / Summarize the story in German by recording your own voice!</p>
                <div class="sprechen-card-display glass-panel" style="padding:24px; max-width:400px; margin:0 auto; border:1px solid var(--color-border); border-radius:var(--radius-lg);">
                    <div class="recording-state-visual" style="margin-bottom:16px;">
                        <span class="duration-label" id="wiz-record-duration" style="font-size:2rem; font-weight:800;">00:00</span>
                    </div>
                    <div style="display:flex; gap:12px; justify-content:center; margin-bottom:16px;">
                        <button id="wiz-rec-start" class="btn btn-danger btn-touch" style="min-height:44px; padding:0 24px; border-radius:24px; font-weight:700;">Record</button>
                        <button id="wiz-rec-stop" class="btn btn-secondary btn-touch" disabled style="min-height:44px; padding:0 24px; border-radius:24px;">Stop</button>
                    </div>
                    <div id="wiz-playback-box" style="display:none; flex-direction:column; gap:12px; margin-top:16px; border-top:1px dashed var(--color-border); padding-top:16px;">
                        <audio id="wiz-recorded-audio" controls style="width:100%;"></audio>
                        <a id="wiz-download-audio" class="btn btn-secondary btn-touch" download="listening_retell.wav" href="#" style="min-height:44px; display:flex; align-items:center; justify-content:center;">Download (.wav)</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Combine Header Progress Indicator and step content
    wizardWrapper.innerHTML = `
        <div class="glass-panel" style="padding:20px; border-radius:var(--radius-lg); margin-top:20px;">
            <div style="text-align:center; margin-bottom:20px;">
                <div style="font-size:0.95rem; font-weight:800; color:var(--color-primary); margin-bottom:8px;">${stepTitles[listeningWizardState.step - 1]}</div>
                <div style="display:flex; justify-content:center; gap:8px; margin-top:8px;">
                    ${dotsHTML}
                </div>
            </div>
            
            <div id="listening-wizard-step-content" style="min-height:260px; margin-bottom:20px;">
                ${innerContentHTML}
            </div>

            <!-- Footer Buttons -->
            <div style="display:flex; justify-content:space-between; border-top:1px solid var(--color-border); padding-top:16px; gap:16px;">
                <button id="wiz-btn-back" class="btn btn-secondary btn-touch" style="min-width:110px; min-height:44px;">&larr; Back</button>
                <button id="wiz-btn-next" class="btn btn-primary btn-touch" style="min-width:110px; min-height:44px;">Next &rarr;</button>
            </div>
        </div>
    `;

    // Hook listeners
    document.getElementById("wiz-btn-back").onclick = () => handleListeningWizardBack();
    
    const nextBtn = document.getElementById("wiz-btn-next");
    if (listeningWizardState.step === 8 && listeningWizardState.currentQuestionIndex >= listeningWizardState.questions.length) {
        nextBtn.innerHTML = `Beenden / Finish 🏁`;
        nextBtn.disabled = false;
    } else if (listeningWizardState.step === 6 && listeningWizardState.currentQuestionIndex >= listeningWizardState.questions.length) {
        nextBtn.innerHTML = `Retest starten`;
        nextBtn.disabled = false;
    } else if (listeningWizardState.step === 6 || listeningWizardState.step === 8) {
        nextBtn.innerHTML = listeningWizardState.isAnswerChecked ? `Nächste Frage` : `Prüfen / Check`;
        nextBtn.disabled = !listeningWizardState.isAnswerChecked && listeningWizardState.answers[listeningWizardState.currentQuestionIndex] === undefined;
    } else {
        nextBtn.innerHTML = `Weiter / Next &rarr;`;
        nextBtn.disabled = false;
    }
    nextBtn.onclick = () => handleListeningWizardNext();

    // Hook Audio Synthesis playback buttons for Steps 1, 2, 3, 4
    const playN = document.getElementById("wiz-play-normal");
    const playS = document.getElementById("wiz-play-slow");
    const stopB = document.getElementById("wiz-stop");
    
    if (playN && playS && stopB) {
        const textToSpeak = listeningWizardState.step === 1 ? st.text : st.text.split(/(?<=[.!?])\s+/).join(" ");
        
        playN.onclick = () => {
            stopStorySpeech();
            playN.disabled = true;
            playS.disabled = true;
            stopB.disabled = false;
            
            // Pulse visualizer
            const vis = document.getElementById("wave-visualizer");
            if (vis) vis.style.opacity = "1";

            // Track listening minutes (increase portalState.listeningSeconds)
            portalState.listeningSeconds = (portalState.listeningSeconds || 0) + 60;
            savePortalStateToStorage();
            refreshSRSWidgets();

            speakText(textToSpeak, () => {}, () => {
                playN.disabled = false;
                playS.disabled = false;
                stopB.disabled = true;
                if (vis) vis.style.opacity = "0.3";
            });
        };

        playS.onclick = () => {
            stopStorySpeech();
            playN.disabled = true;
            playS.disabled = true;
            stopB.disabled = false;
            
            // Pulse visualizer
            const vis = document.getElementById("wave-visualizer");
            if (vis) vis.style.opacity = "1";

            portalState.listeningSeconds = (portalState.listeningSeconds || 0) + 60;
            savePortalStateToStorage();
            refreshSRSWidgets();

            speakText(textToSpeak, () => {}, () => {
                playN.disabled = false;
                playS.disabled = false;
                stopB.disabled = true;
                if (vis) vis.style.opacity = "0.3";
            }, 0.65);
        };

        stopB.onclick = () => {
            stopStorySpeech();
            playN.disabled = false;
            playS.disabled = false;
            stopB.disabled = true;
            const vis = document.getElementById("wave-visualizer");
            if (vis) vis.style.opacity = "0.3";
        };
    }

    // Hook Voice recorder for Step 7
    const recStart = document.getElementById("wiz-rec-start");
    const recStop = document.getElementById("wiz-rec-stop");
    if (recStart && recStop) {
        recStart.onclick = () => startWizardVoiceRecording();
        recStop.onclick = () => stopWizardVoiceRecording();
    }
}

function handleListeningWizardBack() {
    if (listeningWizardState.step === 1) {
        // Return to Stories Selection
        stopStorySpeech();
        document.getElementById("listening-story-workspace").style.display = "none";
        document.getElementById("listening-stories-menu").style.display = "grid";
        
        // Remove wizard wrapper
        const w = document.getElementById("listening-wizard-wrapper");
        if (w) w.remove();
        
        // Refresh menu in case completed status changed
        renderListeningStoriesMenu();
    } else {
        listeningWizardState.step--;
        listeningWizardState.currentQuestionIndex = 0;
        listeningWizardState.isAnswerChecked = false;
        renderListeningWizardStep();
    }
}

function handleListeningWizardNext() {
    if (listeningWizardState.step < 6 || listeningWizardState.step === 7) {
        listeningWizardState.step++;
        listeningWizardState.currentQuestionIndex = 0;
        listeningWizardState.isAnswerChecked = false;
        renderListeningWizardStep();
    } else if (listeningWizardState.step === 6) {
        // Step 6 Quiz questions
        if (listeningWizardState.currentQuestionIndex < listeningWizardState.questions.length) {
            if (!listeningWizardState.isAnswerChecked) {
                checkListeningQuestionAnswer();
            } else {
                listeningWizardState.currentQuestionIndex++;
                listeningWizardState.isAnswerChecked = false;
                renderListeningWizardStep();
            }
        } else {
            // Completed Step 6! Move to Step 7 Retell
            listeningWizardState.step = 7;
            listeningWizardState.currentQuestionIndex = 0;
            listeningWizardState.isAnswerChecked = false;
            renderListeningWizardStep();
        }
    } else if (listeningWizardState.step === 8) {
        // Step 8 Retest questions
        if (listeningWizardState.currentQuestionIndex < listeningWizardState.questions.length) {
            if (!listeningWizardState.isAnswerChecked) {
                checkListeningQuestionAnswer();
            } else {
                listeningWizardState.currentQuestionIndex++;
                listeningWizardState.isAnswerChecked = false;
                renderListeningWizardStep();
            }
        } else {
            // Completed Retest! Mastered if score >= 80%
            const st = listeningWizardState.currentStory;
            const percent = (listeningWizardState.score / listeningWizardState.questions.length) * 100;
            
            portalState.listeningStoryStats = portalState.listeningStoryStats || {};
            portalState.listeningStoryStats[st.id] = {
                completed: true,
                score: listeningWizardState.score
            };
            savePortalStateToStorage();
            updateHeaderStats();
            
            // Go back to stories menu
            stopStorySpeech();
            document.getElementById("listening-story-workspace").style.display = "none";
            document.getElementById("listening-stories-menu").style.display = "grid";
            const w = document.getElementById("listening-wizard-wrapper");
            if (w) w.remove();
            renderListeningStoriesMenu();
        }
    }
}

function selectListeningWizardOption(idx) {
    if (listeningWizardState.isAnswerChecked) return;
    listeningWizardState.answers[listeningWizardState.currentQuestionIndex] = idx;
    renderListeningWizardStep();
}
window.selectListeningWizardOption = selectListeningWizardOption;

function checkListeningQuestionAnswer() {
    if (listeningWizardState.isAnswerChecked) return;
    
    const q = listeningWizardState.questions[listeningWizardState.currentQuestionIndex];
    const selected = listeningWizardState.answers[listeningWizardState.currentQuestionIndex];
    
    if (selected === undefined) return;
    
    listeningWizardState.isAnswerChecked = true;
    if (selected === q.correct) {
        listeningWizardState.score++;
    }
    
    renderListeningWizardStep();
}

// Wizard Speech record helper variables
let wizMediaRecorder = null;
let wizRecordedChunks = [];
let wizRecordingTimer = null;
let wizRecordingDuration = 0;

function startWizardVoiceRecording() {
    wizRecordedChunks = [];
    wizRecordingDuration = 0;
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            wizMediaRecorder = new MediaRecorder(stream);
            wizMediaRecorder.ondataavailable = e => {
                if (e.data.size > 0) wizRecordedChunks.push(e.data);
            };
            
            wizMediaRecorder.onstop = () => {
                clearInterval(wizRecordingTimer);
                const blob = new Blob(wizRecordedChunks, { type: 'audio/wav' });
                const url = URL.createObjectURL(blob);
                
                document.getElementById("wiz-recorded-audio").src = url;
                document.getElementById("wiz-download-audio").href = url;
                
                document.getElementById("wiz-playback-box").style.display = "flex";
                document.getElementById("wiz-rec-start").disabled = false;
                document.getElementById("wiz-rec-stop").disabled = true;
            };
            
            wizMediaRecorder.start();
            document.getElementById("wiz-rec-start").disabled = true;
            document.getElementById("wiz-rec-stop").disabled = false;
            
            wizRecordingTimer = setInterval(() => {
                wizRecordingDuration++;
                const mins = String(Math.floor(wizRecordingDuration / 60)).padStart(2, '0');
                const secs = String(wizRecordingDuration % 60).padStart(2, '0');
                document.getElementById("wiz-record-duration").textContent = `${mins}:${secs}`;
            }, 1000);
        })
        .catch(err => {
            console.error("Microphone access failed for wizard:", err);
            alert("Error accessing microphone. Please verify permission settings.");
        });
}

function stopWizardVoiceRecording() {
    if (wizMediaRecorder && wizMediaRecorder.state !== "inactive") {
        wizMediaRecorder.stop();
        wizMediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
}


// --- 4. SMART REVISION CENTER VIEW LOGIC ---
function openRevisionCenter() {
    switchToView("view-revision-center");
    renderRevisionCenterData();
}
window.openRevisionCenter = openRevisionCenter;

function renderRevisionCenterData() {
    // 1. Compile Weak Vocabulary
    const weakVocabList = [];
    
    // Find incorrect vocab cards from mistakes center (starts with pv_)
    const loggedVocabMistakes = (portalState.mistakes || []).filter(m => m.id && m.id.startsWith("pv_"));
    loggedVocabMistakes.forEach(m => {
        const wObj = getWordById(m.id);
        if (wObj && !weakVocabList.some(x => x.id === m.id)) {
            weakVocabList.push({ id: m.id, word: wObj.word, translation: wObj.translation });
        }
    });

    // Find vocabulary with low streak or status in progress
    if (portalState.progress && portalState.progress.vocab) {
        for (const wId in portalState.progress.vocab) {
            const item = portalState.progress.vocab[wId];
            if (item && typeof item === "object") {
                if (item.status === "Learning" || (item.streak < 3 && item.status !== "Mastered" && item.status !== "New")) {
                    const wObj = getWordById(wId);
                    if (wObj && !weakVocabList.some(x => x.id === wId)) {
                        weakVocabList.push({ id: wId, word: wObj.word, translation: wObj.translation });
                    }
                }
            }
        }
    }

    const vocabLabel = document.getElementById("lbl-weak-vocab-count");
    if (vocabLabel) vocabLabel.textContent = `${weakVocabList.length} Weak Words`;

    const vocabListContainer = document.getElementById("lst-weak-vocab");
    if (vocabListContainer) {
        if (weakVocabList.length === 0) {
            vocabListContainer.innerHTML = `<p style="margin:0; font-size:0.85rem; color:var(--color-text-muted); text-align:center; padding:10px;">Keine schwachen Vokabeln! / No weak words found!</p>`;
            vocabListContainer.style.display = "block";
        } else {
            let listHTML = "";
            weakVocabList.forEach(v => {
                listHTML += `
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.85rem;">
                        <span style="font-weight:700; color:var(--color-text-primary);">${v.word}</span>
                        <span style="color:var(--color-text-muted);">${v.translation}</span>
                    </div>
                `;
            });
            vocabListContainer.innerHTML = listHTML;
            vocabListContainer.style.display = "block";
        }
    }

    // 2. Compile Weak Grammar Topics
    const weakGrammarTopics = [];
    const loggedGrammarMistakes = (portalState.mistakes || []).filter(m => m.id && m.id.startsWith("pg_"));
    loggedGrammarMistakes.forEach(m => {
        // Extrapolate topic from ID (e.g. pg_artikel_0 -> g_artikel or just topic category)
        const parts = m.id.split("_");
        if (parts.length >= 2) {
            const topId = "g_" + parts[1]; // maps back to database lesson
            if (!weakGrammarTopics.includes(topId)) {
                weakGrammarTopics.push(topId);
            }
        }
    });

    const grammarLabel = document.getElementById("lbl-weak-grammar-count");
    if (grammarLabel) grammarLabel.textContent = `${weakGrammarTopics.length} Weak Topics`;

    const grammarListContainer = document.getElementById("lst-weak-grammar");
    if (grammarListContainer) {
        if (weakGrammarTopics.length === 0) {
            grammarListContainer.innerHTML = `<p style="margin:0; font-size:0.85rem; color:var(--color-text-muted); text-align:center; padding:10px;">Keine Schwachstellen! / No weak topics!</p>`;
            grammarListContainer.style.display = "block";
        } else {
            let listHTML = "";
            weakGrammarTopics.forEach(tId => {
                const dbLesson = GRAMMAR_LESSONS_DATABASE.find(x => x.id === tId);
                const title = dbLesson ? dbLesson.title : tId;
                listHTML += `
                    <div style="padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.85rem; font-weight:700; color:var(--color-text-primary);">
                        🧠 ${title}
                    </div>
                `;
            });
            grammarListContainer.innerHTML = listHTML;
            grammarListContainer.style.display = "block";
        }
    }

    // 3. Compile Due reviews (SRS)
    const dueCount = getDueReviewsCount();
    const rcDueEl = document.getElementById("lbl-due-reviews-count");
    if (rcDueEl) rcDueEl.textContent = `${dueCount} Due`;

    // 4. Compile mistakes count
    const rcMistakesEl = document.getElementById("lbl-mistakes-archive-count");
    if (rcMistakesEl) rcMistakesEl.textContent = `${(portalState.mistakes || []).length} Mistakes`;
}

// Helper: Get Vocab word object by its question ID
function getWordById(id) {
    if (!id || !id.startsWith("pv_")) return null;
    const parts = id.split("_");
    if (parts.length < 3) return null;
    const topic = parts[1];
    const idx = parseInt(parts[2], 10);
    if (VOCABULARY_DATABASE[topic] && VOCABULARY_DATABASE[topic][idx]) {
        return VOCABULARY_DATABASE[topic][idx];
    }
    return null;
}
window.getWordById = getWordById;

// Launch Weak Vocab Retest
function startWeakVocabRevisionQuiz() {
    const list = [];
    
    // Collect all unique weak IDs
    const loggedVocabMistakes = (portalState.mistakes || []).filter(m => m.id && m.id.startsWith("pv_"));
    loggedVocabMistakes.forEach(m => {
        if (!list.includes(m.id)) list.push(m.id);
    });
    
    if (portalState.progress && portalState.progress.vocab) {
        for (const wId in portalState.progress.vocab) {
            const item = portalState.progress.vocab[wId];
            if (item && typeof item === "object") {
                if (item.status === "Learning" || (item.streak < 3 && item.status !== "Mastered" && item.status !== "New")) {
                    if (!list.includes(wId)) list.push(wId);
                }
            }
        }
    }

    if (list.length === 0) {
        alert("Sie haben aktuell keine schwachen Vokabeln! / You have no weak vocabulary words to revise.");
        return;
    }

    // Build question objects
    const quizQuestions = [];
    list.forEach(wId => {
        const wObj = getWordById(wId);
        if (wObj) {
            const parts = wId.split("_");
            const topic = parts[1];
            
            // Distractors
            const otherTrans = [];
            VOCABULARY_DATABASE[topic].forEach(item => {
                if (item.translation !== wObj.translation && !otherTrans.includes(item.translation)) {
                    otherTrans.push(item.translation);
                }
            });
            const dist = shuffleArray(otherTrans);
            const options = shuffleArray([wObj.translation, dist[0] || "Other A", dist[1] || "Other B"]);
            const correctIdx = options.indexOf(wObj.translation);

            quizQuestions.push({
                id: wId,
                type: "mc",
                question: `Was bedeutet das Wort "${wObj.word}"?`,
                options: options,
                correct: correctIdx,
                explanation: `"${wObj.word}" bedeutet "${wObj.translation}".`,
                topic: "Revision Vocab"
            });
        }
    });

    // Shuffle and cap to 10
    const finalQuestions = shuffleArray(quizQuestions).slice(0, 10);

    practiceState.mode = "vocab"; // Keep as vocab so it logs SRS correctly
    practiceState.subTopic = "Vocabulary Revision";
    practiceState.questions = finalQuestions;
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.isAnswerChecked = false;
    practiceState.incorrectQuestions = [];

    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}
window.startWeakVocabRevisionQuiz = startWeakVocabRevisionQuiz;

// Launch Weak Grammar Retest
function startWeakGrammarRevisionQuiz() {
    const weakGrammarTopics = [];
    const loggedGrammarMistakes = (portalState.mistakes || []).filter(m => m.id && m.id.startsWith("pg_"));
    loggedGrammarMistakes.forEach(m => {
        const parts = m.id.split("_");
        if (parts.length >= 2) {
            const topId = "g_" + parts[1];
            if (!weakGrammarTopics.includes(topId)) {
                weakGrammarTopics.push(topId);
            }
        }
    });

    if (weakGrammarTopics.length === 0) {
        alert("Sie haben aktuell keine schwachen Grammatikthemen! / You have no weak grammar topics to revise.");
        return;
    }

    // Collect all questions from these topics
    let questionsList = [];
    weakGrammarTopics.forEach(tId => {
        const dbLesson = GRAMMAR_LESSONS_DATABASE.find(x => x.id === tId);
        if (dbLesson && dbLesson.practiceQuestions) {
            questionsList = [...questionsList, ...dbLesson.practiceQuestions];
        }
    });

    if (questionsList.length === 0) {
        alert("Keine Fragen gefunden.");
        return;
    }

    const finalQuestions = shuffleArray(questionsList).slice(0, 10);

    practiceState.mode = "grammar";
    practiceState.subTopic = "Grammar Revision";
    practiceState.questions = finalQuestions;
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.isAnswerChecked = false;
    practiceState.incorrectQuestions = [];

    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}
window.startWeakGrammarRevisionQuiz = startWeakGrammarRevisionQuiz;

// Launch Due Reviews Quiz (SRS)
function startSrsDueRevisionQuiz() {
    const list = [];
    const today = new Date().toISOString().split('T')[0];
    
    if (portalState.progress && portalState.progress.vocab) {
        for (const wId in portalState.progress.vocab) {
            const item = portalState.progress.vocab[wId];
            if (item && typeof item === "object") {
                if (item.status !== "Mastered" && item.status !== "New" && item.nextReview <= today) {
                    list.push(wId);
                }
            }
        }
    }

    if (list.length === 0) {
        alert("Keine fälligen Wiederholungen für heute! / No reviews due today!");
        return;
    }

    // Build question objects
    const quizQuestions = [];
    list.forEach(wId => {
        const wObj = getWordById(wId);
        if (wObj) {
            const parts = wId.split("_");
            const topic = parts[1];
            
            // Distractors
            const otherTrans = [];
            VOCABULARY_DATABASE[topic].forEach(item => {
                if (item.translation !== wObj.translation && !otherTrans.includes(item.translation)) {
                    otherTrans.push(item.translation);
                }
            });
            const dist = shuffleArray(otherTrans);
            const options = shuffleArray([wObj.translation, dist[0] || "Other A", dist[1] || "Other B"]);
            const correctIdx = options.indexOf(wObj.translation);

            quizQuestions.push({
                id: wId,
                type: "mc",
                question: `Was bedeutet das Wort "${wObj.word}" auf Englisch?`,
                options: options,
                correct: correctIdx,
                explanation: `"${wObj.word}" bedeutet "${wObj.translation}".`,
                topic: "Due Review"
            });
        }
    });

    // Shuffle and cap to 15
    const finalQuestions = shuffleArray(quizQuestions).slice(0, 15);

    practiceState.mode = "vocab";
    practiceState.subTopic = "Due Vocabulary Reviews";
    practiceState.questions = finalQuestions;
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.isAnswerChecked = false;
    practiceState.incorrectQuestions = [];

    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}
window.startSrsDueRevisionQuiz = startSrsDueRevisionQuiz;

// Launch Quick Retest Quiz (5 weak vocab, 5 weak grammar)
function startQuickRetestRevisionQuiz() {
    // 1. Gather weak vocab questions
    const vocabList = [];
    const loggedVocabMistakes = (portalState.mistakes || []).filter(m => m.id && m.id.startsWith("pv_"));
    loggedVocabMistakes.forEach(m => {
        if (!vocabList.includes(m.id)) vocabList.push(m.id);
    });
    if (portalState.progress && portalState.progress.vocab) {
        for (const wId in portalState.progress.vocab) {
            const item = portalState.progress.vocab[wId];
            if (item && typeof item === "object") {
                if (item.status === "Learning" || (item.streak < 3 && item.status !== "Mastered" && item.status !== "New")) {
                    if (!vocabList.includes(wId)) vocabList.push(wId);
                }
            }
        }
    }

    const vocabQuestions = [];
    vocabList.forEach(wId => {
        const wObj = getWordById(wId);
        if (wObj) {
            const parts = wId.split("_");
            const topic = parts[1];
            const otherTrans = [];
            VOCABULARY_DATABASE[topic].forEach(item => {
                if (item.translation !== wObj.translation && !otherTrans.includes(item.translation)) {
                    otherTrans.push(item.translation);
                }
            });
            const dist = shuffleArray(otherTrans);
            const options = shuffleArray([wObj.translation, dist[0] || "Other A", dist[1] || "Other B"]);
            const correctIdx = options.indexOf(wObj.translation);

            vocabQuestions.push({
                id: wId,
                type: "mc",
                question: `Was bedeutet das Wort "${wObj.word}"?`,
                options: options,
                correct: correctIdx,
                explanation: `"${wObj.word}" bedeutet "${wObj.translation}".`,
                topic: "Quick Retest Vocab"
            });
        }
    });

    // 2. Gather weak grammar questions
    const weakGrammarTopics = [];
    const loggedGrammarMistakes = (portalState.mistakes || []).filter(m => m.id && m.id.startsWith("pg_"));
    loggedGrammarMistakes.forEach(m => {
        const parts = m.id.split("_");
        if (parts.length >= 2) {
            const topId = "g_" + parts[1];
            if (!weakGrammarTopics.includes(topId)) {
                weakGrammarTopics.push(topId);
            }
        }
    });

    let grammarQuestions = [];
    weakGrammarTopics.forEach(tId => {
        const dbLesson = GRAMMAR_LESSONS_DATABASE.find(x => x.id === tId);
        if (dbLesson && dbLesson.practiceQuestions) {
            grammarQuestions = [...grammarQuestions, ...dbLesson.practiceQuestions];
        }
    });

    // Fallbacks if lists are empty to ensure we can build a 10-question quiz
    if (vocabQuestions.length === 0) {
        // Grab some random vocab from database
        const topics = Object.keys(VOCABULARY_DATABASE);
        for (let i = 0; i < 10; i++) {
            const rTopic = topics[Math.floor(Math.random() * topics.length)];
            const idx = Math.floor(Math.random() * VOCABULARY_DATABASE[rTopic].length);
            const wObj = VOCABULARY_DATABASE[rTopic][idx];
            const otherTrans = VOCABULARY_DATABASE[rTopic].filter(w => w.translation !== wObj.translation).map(w => w.translation);
            const dist = shuffleArray(otherTrans);
            const options = shuffleArray([wObj.translation, dist[0], dist[1]]);
            vocabQuestions.push({
                id: `pv_${rTopic}_${idx}`,
                type: "mc",
                question: `Was bedeutet "${wObj.word}"?`,
                options: options,
                correct: options.indexOf(wObj.translation),
                explanation: `"${wObj.word}" bedeutet "${wObj.translation}".`,
                topic: "Quick Retest Vocab"
            });
        }
    }

    if (grammarQuestions.length === 0) {
        // Grab some random grammar questions
        GRAMMAR_LESSONS_DATABASE.forEach(lesson => {
            grammarQuestions = [...grammarQuestions, ...lesson.practiceQuestions];
        });
    }

    // Blend 5 vocab + 5 grammar
    const selectedVocab = shuffleArray(vocabQuestions).slice(0, 5);
    const selectedGrammar = shuffleArray(grammarQuestions).slice(0, 5);
    const blendedQuiz = shuffleArray([...selectedVocab, ...selectedGrammar]);

    practiceState.mode = "vocab"; // Keep as vocab so vocab updates SRS correctly
    practiceState.subTopic = "Quick Retest (Vocab + Grammar)";
    practiceState.questions = blendedQuiz;
    practiceState.currentIndex = 0;
    practiceState.score = 0;
    practiceState.answers = {};
    practiceState.isAnswerChecked = false;
    practiceState.incorrectQuestions = [];

    switchToView("view-practice-workspace");
    loadPracticeQuestion();
}
window.startQuickRetestRevisionQuiz = startQuickRetestRevisionQuiz;


// --- 5. INITIALIZE NEW EVENT BINDINGS FOR VERSION 2.3 ---
function initVersion23Bindings() {
    // Dashboard reviews buttons
    const btnSrsDue = document.getElementById("btn-srs-due-reviews");
    if (btnSrsDue) {
        btnSrsDue.onclick = () => startSrsDueRevisionQuiz();
    }
    const btnStartDue = document.getElementById("btn-start-due-reviews");
    if (btnStartDue) {
        btnStartDue.onclick = () => startSrsDueRevisionQuiz();
    }

    // Revision Center navigation card inside Practice topic selections
    const cards = document.querySelectorAll(".practice-topic-card");
    cards.forEach(card => {
        const topic = card.getAttribute("data-topic");
        if (topic === "revision") {
            card.onclick = () => openRevisionCenter();
        }
    });

    // Revision Center action buttons
    const btnReviseVocab = document.getElementById("btn-revise-vocab");
    if (btnReviseVocab) {
        btnReviseVocab.onclick = () => startWeakVocabRevisionQuiz();
    }

    const btnReviseGrammar = document.getElementById("btn-revise-grammar");
    if (btnReviseGrammar) {
        btnReviseGrammar.onclick = () => startWeakGrammarRevisionQuiz();
    }

    const btnReviseSrs = document.getElementById("btn-revise-srs");
    if (btnReviseSrs) {
        btnReviseSrs.onclick = () => startSrsDueRevisionQuiz();
    }

    const btnReviseMistakes = document.getElementById("btn-revise-mistakes");
    if (btnReviseMistakes) {
        btnReviseMistakes.onclick = () => {
            renderMistakesPortal();
            switchToView("view-mistakes-portal");
        };
    }

    const btnReviseQuickRetest = document.getElementById("btn-revise-quick-retest");
    if (btnReviseQuickRetest) {
        btnReviseQuickRetest.onclick = () => startQuickRetestRevisionQuiz();
    }

    // Back to Dashboard from Revision Center
    const btnBackRc = document.querySelector("#view-revision-center .btn-back-home");
    if (btnBackRc) {
        btnBackRc.onclick = () => {
            switchToView("view-landing-dashboard");
            refreshSRSWidgets();
        };
    }

    // Redefine checkPracticeAnswer in case we are in special revision mode
    const originalCheckPracticeAnswer = window.checkPracticeAnswer || function(){};
    checkPracticeAnswer = function() {
        originalCheckPracticeAnswer();
        refreshSRSWidgets();
    };

    // Override the practice topic grid click in app.js
    const practiceCards = document.querySelectorAll(".practice-topic-card");
    practiceCards.forEach(c => {
        const topic = c.getAttribute("data-topic");
        if (topic === "reading") {
            c.onclick = () => startReadingLearning();
        } else if (topic === "stories") {
            c.onclick = () => openListeningStoryHub();
        } else if (topic === "listening") {
            c.onclick = () => openInteractiveHoerenHub();
        }
    });
}

// Bind V2.3 event bindings during DOM load
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        initVersion23Bindings();
        refreshSRSWidgets();
    });
} else {
    initVersion23Bindings();
    refreshSRSWidgets();
}

// ============================================================================
// --- VERSION 2.3 ADDITIONAL ROUTING & PRONUNCIATION HOOKS ---
// ============================================================================
window.startListeningLearning = function() {
    openInteractiveHoerenHub();
};

const originalOpenPracticeTopicHub = window.openPracticeTopicHub || function(){};
window.openPracticeTopicHub = function(type) {
    if (type === "listening" || type === "stories") {
        openInteractiveHoerenHub();
    } else {
        originalOpenPracticeTopicHub(type);
    }
};

// ============================================================================
// --- VERSION 2.4 INTERACTIVE HÖREN PRACTICE MODULE (5 TOPICS x 4 MODES) ---
// ============================================================================

const INTERACTIVE_HOEREN_DATABASE = {
    hw: {
        title: "Heim & Wohnen",
        titleEN: "Home & Living",
        emoji: "🏠",
        warmup: {
            vocab: [
                { word: "Wasserhahn", gender: "der", translation: "tap / faucet", example: "Der Wasserhahn in der Küche tropft.", exampleEN: "The kitchen tap is dripping." },
                { word: "Heizung", gender: "die", translation: "heating", example: "Die Heizung funktioniert seit gestern nicht.", exampleEN: "The heating hasn't been working since yesterday." },
                { word: "Klempner", gender: "der", translation: "plumber", example: "Der Klempner kommt morgen früh.", exampleEN: "The plumber is coming tomorrow morning." },
                { word: "Techniker", gender: "der", translation: "technician", example: "Ich schicke heute einen Techniker vorbei.", exampleEN: "I'll send a technician over today." },
                { word: "Termin", gender: "der", translation: "appointment", example: "Wir haben keinen freien Termin mehr.", exampleEN: "We have no free appointments left." }
            ],
            phrases: [
                { de: "Wir haben ein Problem mit...", en: "We have a problem with..." },
                { de: "Können Sie heute noch kommen?", en: "Can you still come today?" },
                { de: "Leider haben wir keinen freien Termin.", en: "Unfortunately we have no free appointment." },
                { de: "Ich bin den ganzen Nachmittag da.", en: "I am there all afternoon." }
            ]
        },
        dialogues: [
            {
                id: "hoer_hw_1",
                title: "Der tropfende Wasserhahn",
                titleEN: "The Dripping Tap",
                script: "Hallo, hier spricht Weber. Wir haben ein Problem mit dem Wasserhahn in der Küche. Er tropft die ganze Nacht. Können Sie heute noch kommen? - Leider haben wir heute keinen freien Termin mehr. Morgen früh um acht Uhr wäre möglich. - Ja, das ist gut. Ich bin zu Hause.",
                translation: "Hello, this is Weber speaking. We have a problem with the kitchen tap. It drips all night. Can you come today? - Unfortunately we have no free appointment today. Tomorrow morning at eight o'clock would be possible. - Yes, that is good. I am at home.",
                vocabSupport: [
                    { word: "der Wasserhahn", translation: "tap / faucet" },
                    { word: "tropfen", translation: "to drip" },
                    { word: "der Klempner", translation: "plumber" }
                ],
                fillBlank: {
                    sentence: "Wir haben ein Problem mit dem _____ in der Küche.",
                    target: "Wasserhahn",
                    options: ["Wasserhahn", "Kühlschrank", "Fernseher"]
                },
                role: {
                    speaker1: "Wir haben ein Problem mit dem Wasserhahn in der Küche. Können Sie heute noch kommen?",
                    options: ["Morgen früh um acht Uhr wäre möglich.", "Nein, ich trinke keinen Kaffee.", "Der Wasserhahn ist blau."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Handwerker kann erst morgen früh um 8 Uhr kommen.",
                    correct: true,
                    explanation: "Richtig: Der Handwerker sagt, dass heute kein Termin mehr frei ist und er morgen um 8 Uhr kommt."
                }
            },
            {
                id: "hoer_hw_2",
                title: "Die kaputte Heizung",
                titleEN: "The Broken Heating",
                script: "Guten Tag, hier ist Müller aus Wohnung 7. Die Heizung funktioniert seit gestern Abend nicht mehr. Es ist sehr kalt in der Wohnung. - Oh, das tut mir leid. Ich schicke heute noch einen Techniker vorbei. Können Sie zwischen 14 und 17 Uhr zu Hause sein? - Ja, ich bin den ganzen Nachmittag da.",
                translation: "Good day, this is Müller from apartment 7. The heating has not been working since yesterday evening. It is very cold in the apartment. - Oh, I'm sorry. I'll send a technician today. Can you be at home between 2 and 5 pm? - Yes, I'm there all afternoon.",
                vocabSupport: [
                    { word: "die Heizung", translation: "heating" },
                    { word: "der Techniker", translation: "technician" },
                    { word: "funktionieren", translation: "to work / function" }
                ],
                fillBlank: {
                    sentence: "Die _____ funktioniert seit gestern Abend nicht mehr.",
                    target: "Heizung",
                    options: ["Heizung", "Waschmaschine", "Kaffeemaschine"]
                },
                role: {
                    speaker1: "Die Heizung funktioniert nicht mehr. Es ist sehr kalt in der Wohnung!",
                    options: ["Ich schicke heute noch einen Techniker vorbei.", "Ich kaufe einen neuen Tisch.", "Gute Reise nach Berlin!"],
                    correct: 0
                },
                trueFalse: {
                    statement: "Frau Müller ist am Nachmittag nicht zu Hause.",
                    correct: false,
                    explanation: "Falsch: Sie sagt: 'Ja, ich bin den ganzen Nachmittag da.'"
                }
            }
        ]
    },
    kb: {
        title: "Kurse & Bildung",
        titleEN: "Courses & Education",
        emoji: "🎓",
        warmup: {
            vocab: [
                { word: "Töpferkurs", gender: "der", translation: "pottery course", example: "Der Töpferkurs startet nächste Woche.", exampleEN: "The pottery course starts next week." },
                { word: "Computerkurs", gender: "der", translation: "computer course", example: "Der Computerkurs findet abends statt.", exampleEN: "The computer course takes place in the evening." },
                { word: "Anfänger", gender: "der", translation: "beginner", example: "Ist der Kurs für Anfänger geeignet?", exampleEN: "Is the course suitable for beginners?" },
                { word: "Vorkenntnisse", gender: "die (Pl.)", translation: "prior knowledge", example: "Sie brauchen keine Vorkenntnisse.", exampleEN: "You need no prior knowledge." },
                { word: "Platz", gender: "der", translation: "spot / place", example: "Es gibt noch drei freie Plätze.", exampleEN: "There are still three spots left." }
            ],
            phrases: [
                { de: "Ich möchte mich für den Kurs anmelden.", en: "I would like to register for the course." },
                { de: "Ist der Kurs für Anfänger geeignet?", en: "Is the course suitable for beginners?" },
                { de: "Sie brauchen keine Vorkenntnisse.", en: "You need no prior knowledge." },
                { de: "Wann findet der Kurs statt?", en: "When does the course take place?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_kb_1",
                title: "Anmeldung zum Töpferkurs",
                titleEN: "Pottery Course Registration",
                script: "Guten Tag, Volkshochschule Mainz, wie kann ich helfen? - Ich möchte mich für den Töpferkurs anmelden. Ist der Kurs für Anfänger geeignet? - Ja, absolut. Der Kurs startet nächste Woche Mittwoch und dauert zehn Wochen. Sie brauchen keine Vorkenntnisse. - Super, wie viele Plätze gibt es noch? - Noch drei freie Plätze.",
                translation: "Good day, Adult Education Center Mainz, how can I help? - I would like to register for the pottery course. Is the course suitable for beginners? - Yes, absolutely. The course starts next Wednesday and lasts ten weeks. You need no prior knowledge. - Great, how many places are left? - Three places left.",
                vocabSupport: [
                    { word: "der Töpferkurs", translation: "pottery course" },
                    { word: "die Vorkenntnisse", translation: "prior knowledge" },
                    { word: "der Platz", translation: "place / spot" }
                ],
                fillBlank: {
                    sentence: "Der Töpferkurs startet nächste Woche _____",
                    target: "Mittwoch",
                    options: ["Mittwoch", "Montag", "Freitag"]
                },
                role: {
                    speaker1: "Ist der Töpferkurs auch für Anfänger geeignet?",
                    options: ["Ja, absolut. Sie brauchen keine Vorkenntnisse.", "Nein, das Brot kostet zwei Euro.", "Ich habe keine Zeit zum Kochen."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Es gibt nur noch drei freie Plätze im Töpferkurs.",
                    correct: true,
                    explanation: "Richtig: Am Ende sagt die Mitarbeiterin: 'Noch drei freie Plätze.'"
                }
            },
            {
                id: "hoer_kb_2",
                title: "Der Computerkurs für Anfänger",
                titleEN: "Beginner Computer Course",
                script: "Guten Tag, Volkshochschule Dresden. - Ich möchte mich für den Computerkurs für Anfänger anmelden. Wann findet er statt? - Der Kurs findet dienstags und donnerstags von 18 bis 19:30 Uhr statt. Er beginnt am dritten Oktober. - Wie viel kostet der Kurs? - Sechzig Euro für sechs Wochen.",
                translation: "Good day, Adult Education Center Dresden. - I would like to register for the beginner computer course. When does it take place? - The course takes place Tuesdays and Thursdays from 6 to 7:30 PM. It starts on October 3rd. - How much does the course cost? - Sixty euros for six weeks.",
                vocabSupport: [
                    { word: "der Computerkurs", translation: "computer course" },
                    { word: "der Anfänger", translation: "beginner" },
                    { word: "stattfinden", translation: "to take place" }
                ],
                fillBlank: {
                    sentence: "Der Kurs findet dienstags und _____ statt.",
                    target: "donnerstags",
                    options: ["donnerstags", "samstags", "sonntags"]
                },
                role: {
                    speaker1: "Wie viel kostet der Computerkurs für Anfänger?",
                    options: ["Sechzig Euro für sechs Wochen.", "Der Kurs ist im zweiten Stock.", "Er kommt um zehn Uhr."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Computerkurs kostet 100 Euro.",
                    correct: false,
                    explanation: "Falsch: Der Computerkurs kostet 60 Euro für sechs Wochen."
                }
            }
        ]
    },
    fg: {
        title: "Freizeit & Gemeinschaft",
        titleEN: "Leisure & Community",
        emoji: "🌿",
        warmup: {
            vocab: [
                { word: "Gemeinschaftsgarten", gender: "der", translation: "community garden", example: "Der Gemeinschaftsgarten liegt an der Mühlenstraße.", exampleEN: "The community garden is located on Mühlenstraße." },
                { word: "Chor", gender: "der", translation: "choir", example: "Wir singen jeden Donnerstag im Chor.", exampleEN: "We sing in the choir every Thursday." },
                { word: "Mitgliedsbeitrag", gender: "der", translation: "membership fee", example: "Der Mitgliedsbeitrag ist fünf Euro pro Monat.", exampleEN: "The membership fee is five euros per month." },
                { word: "Gemeindehalle", gender: "die", translation: "community hall", example: "Wir proben in der Gemeindehalle.", exampleEN: "We rehearse in the community hall." },
                { word: "Nachbar", gender: "der", translation: "neighbour", example: "Viele Nachbarn nutzen den Garten zusammen.", exampleEN: "Many neighbours use the garden together." }
            ],
            phrases: [
                { de: "Hast du schon von ... gehört?", en: "Have you heard about...?" },
                { de: "Man kann Gemüse und Blumen pflanzen.", en: "You can plant vegetables and flowers." },
                { de: "Wir proben jeden Donnerstag von 19 bis 21 Uhr.", en: "We rehearse every Thursday from 7 to 9 PM." },
                { de: "Anfänger sind herzlich willkommen.", en: "Beginners are warmly welcome." }
            ]
        },
        dialogues: [
            {
                id: "hoer_fg_1",
                title: "Der neue Gemeinschaftsgarten",
                titleEN: "The New Community Garden",
                script: "Hallo Karin. Hast du schon von dem neuen Gemeinschaftsgarten gehört? - Nein, was ist das? - Das ist ein Garten, den viele Nachbarn zusammen nutzen. Man kann Gemüse und Blumen pflanzen. Der Mitgliedsbeitrag ist nur fünf Euro pro Monat. - Das klingt toll! Wo ist der Garten? - Neben der alten Fabrik an der Mühlenstraße.",
                translation: "Hello Karin. Have you heard about the new community garden? - No, what is that? - It's a garden that many neighbours use together. You can plant vegetables and flowers. The membership fee is only 5 euros per month. - That sounds great! Where is the garden? - Next to the old factory on Mühlenstraße.",
                vocabSupport: [
                    { word: "der Gemeinschaftsgarten", translation: "community garden" },
                    { word: "pflanzen", translation: "to plant" },
                    { word: "der Mitgliedsbeitrag", translation: "membership fee" }
                ],
                fillBlank: {
                    sentence: "Der Mitgliedsbeitrag ist nur fünf _____ pro Monat.",
                    target: "Euro",
                    options: ["Euro", "Kilo", "Stunden"]
                },
                role: {
                    speaker1: "Wo genau liegt denn der neue Gemeinschaftsgarten?",
                    options: ["Neben der alten Fabrik an der Mühlenstraße.", "Im dritten Stock links.", "Ich trinke lieber Tee."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Mitgliedsbeitrag für den Garten beträgt 20 Euro im Monat.",
                    correct: false,
                    explanation: "Falsch: Der Beitrag ist nur 5 Euro pro Monat."
                }
            },
            {
                id: "hoer_fg_2",
                title: "Mitsingen im Chor",
                titleEN: "Singing in the Choir",
                script: "Hallo, ich habe gelesen, dass Sie einen Chor haben. Kann ich mitmachen? - Ja, gerne! Wir proben jeden Donnerstag von 19 bis 21 Uhr in der Gemeindehalle. - Muss ich gut singen können? - Nein, Anfänger sind herzlich willkommen. Kommen Sie einfach nächsten Donnerstag vorbei.",
                translation: "Hello, I read that you have a choir. Can I join? - Yes, of course! We rehearse every Thursday from 7 to 9 PM in the community hall. - Do I need to be able to sing well? - No, beginners are warmly welcome. Just come by next Thursday.",
                vocabSupport: [
                    { word: "der Chor", translation: "choir" },
                    { word: "proben", translation: "to rehearse" },
                    { word: "die Gemeindehalle", translation: "community hall" }
                ],
                fillBlank: {
                    sentence: "Wir proben jeden _____ von 19 bis 21 Uhr.",
                    target: "Donnerstag",
                    options: ["Donnerstag", "Dienstag", "Sonntag"]
                },
                role: {
                    speaker1: "Muss ich für den Chor gut singen können?",
                    options: ["Nein, Anfänger sind herzlich willkommen.", "Ja, die Fahrkarte kostet zehn Euro.", "Ich habe heute keinen Appetit."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Chor probt jeden Donnerstagabend in der Gemeindehalle.",
                    correct: true,
                    explanation: "Richtig: 'Wir proben jeden Donnerstag von 19 bis 21 Uhr in der Gemeindehalle.'"
                }
            }
        ]
    },
    dl: {
        title: "Dienstleistungen",
        titleEN: "Services",
        emoji: "🔧",
        warmup: {
            vocab: [
                { word: "Autowerkstatt", gender: "die", translation: "car repair workshop", example: "Mein Auto steht in der Autowerkstatt.", exampleEN: "My car is in the repair shop." },
                { word: "Handyvertrag", gender: "der", translation: "mobile contract", example: "Ich möchte meinen Handyvertrag wechseln.", exampleEN: "I want to change my mobile contract." },
                { word: "Geräusch", gender: "das", translation: "noise / sound", example: "Das Auto macht ein lautes Geräusch.", exampleEN: "The car is making a loud noise." },
                { word: "Bremsen", gender: "das", translation: "braking", example: "Das Geräusch entsteht beim Bremsen.", exampleEN: "The noise happens during braking." },
                { word: "Datenvolumen", gender: "das", translation: "data allowance", example: "Ich brauche 10 Gigabyte Datenvolumen.", exampleEN: "I need 10 gigabytes of data allowance." }
            ],
            phrases: [
                { de: "Können Sie sich das ansehen?", en: "Can you take a look at it?" },
                { de: "Bringen Sie das Auto morgen Mittag vorbei.", en: "Bring the car over tomorrow at noon." },
                { de: "Wir haben ein Angebot für 29 Euro.", en: "We have an offer for 29 euros." },
                { de: "Die Änderung gilt ab nächstem Monat.", en: "The change applies starting next month." }
            ]
        },
        dialogues: [
            {
                id: "hoer_dl_1",
                title: "Termin in der Autowerkstatt",
                titleEN: "Car Repair Shop Appointment",
                script: "Guten Tag, Autowerkstatt Schnell. - Guten Tag. Mein Auto macht ein lautes Geräusch beim Bremsen. Können Sie es sich ansehen? - Ja, bringen Sie das Auto morgen Mittag vorbei. Wir schauen es uns direkt an. Haben Sie eine Telefonnummer? - Ja, 0171 445 33 22.",
                translation: "Good day, Schnell car workshop. - Good day. My car makes a loud noise when braking. Can you look at it? - Yes, bring the car over tomorrow at noon. We will look at it immediately. Do you have a phone number? - Yes, 0171 445 33 22.",
                vocabSupport: [
                    { word: "die Werkstatt", translation: "workshop / garage" },
                    { word: "das Geräusch", translation: "noise / sound" },
                    { word: "bremsen", translation: "to brake" }
                ],
                fillBlank: {
                    sentence: "Mein Auto macht ein lautes Geräusch beim _____.",
                    target: "Bremsen",
                    options: ["Bremsen", "Parken", "Waschen"]
                },
                role: {
                    speaker1: "Mein Auto macht ein lautes Geräusch beim Bremsen. Können Sie es ansehen?",
                    options: ["Ja, bringen Sie das Auto morgen Mittag vorbei.", "Das Flugzeug fliegt um 14 Uhr.", "Der Salat schmeckt frisch."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde soll das Auto heute Abend bringen.",
                    correct: false,
                    explanation: "Falsch: Der Mechaniker sagt: 'bringen Sie das Auto morgen Mittag vorbei.'"
                }
            },
            {
                id: "hoer_dl_2",
                title: "Handyvertrag anpassen",
                titleEN: "Adjust Mobile Contract",
                script: "Guten Tag, Kundenservice Telekonto. - Ich möchte meinen Handyvertrag wechseln. Ich zahle jetzt 35 Euro im Monat, aber ich brauche mehr Datenvolumen. - Wir haben ein Angebot für 29 Euro mit zehn Gigabyte. - Das ist billiger! Kann ich den Vertrag heute noch ändern? - Ja, die Änderung gilt ab dem ersten des nächsten Monats.",
                translation: "Good day, Telekonto customer service. - I would like to change my mobile contract. I pay 35 euros now, but I need more data. - We have an offer for 29 euros with 10 GB. - That is cheaper! Can I change the contract today? - Yes, the change applies from the 1st of next month.",
                vocabSupport: [
                    { word: "der Handyvertrag", translation: "mobile contract" },
                    { word: "das Datenvolumen", translation: "data allowance" },
                    { word: "gelten", translation: "to apply / be valid" }
                ],
                fillBlank: {
                    sentence: "Wir haben ein Angebot für 29 Euro mit zehn _____.",
                    target: "Gigabyte",
                    options: ["Gigabyte", "Kilometer", "Kilo"]
                },
                role: {
                    speaker1: "Kann ich meinen Handyvertrag heute noch ändern?",
                    options: ["Ja, die Änderung gilt ab dem ersten des nächsten Monats.", "Nein, der Bahnhof ist geschlossen.", "Ich esse gerne Apfelkuchen."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Das neue Angebot für 29 Euro bietet 10 Gigabyte Datenvolumen.",
                    correct: true,
                    explanation: "Richtig: 'Wir haben ein Angebot für 29 Euro mit zehn Gigabyte.'"
                }
            }
        ]
    },
    bb: {
        title: "Behörden & Büros",
        titleEN: "Offices & Authorities",
        emoji: "📋",
        warmup: {
            vocab: [
                { word: "Finanzamt", gender: "das", translation: "tax office", example: "Ich rufe beim Finanzamt an.", exampleEN: "I am calling the tax office." },
                { word: "Steuererklärung", gender: "die", translation: "tax return", example: "Wann muss ich die Steuererklärung einreichen?", exampleEN: "When do I have to submit the tax return?" },
                { word: "Abgabetermin", gender: "der", translation: "submission deadline", example: "Der Abgabetermin ist der 31. Juli.", exampleEN: "The submission deadline is July 31st." },
                { word: "Lagerbox", gender: "die", translation: "storage unit", example: "Ich miete eine kleine Lagerbox.", exampleEN: "I am renting a small storage box." },
                { word: "Ausweis", gender: "der", translation: "ID card", example: "Sie bringen nur Ihren Ausweis mit.", exampleEN: "You just bring your ID with you." }
            ],
            phrases: [
                { de: "Ich habe eine Frage zu meiner Steuererklärung.", en: "I have a question about my tax return." },
                { de: "Bis wann muss ich sie einreichen?", en: "By when do I have to submit it?" },
                { de: "Das ist vollkommen kostenlos.", en: "That is completely free of charge." },
                { de: "Wann kann ich einziehen?", en: "When can I move in?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_bb_1",
                title: "Auskunft beim Finanzamt",
                titleEN: "Tax Office Inquiry",
                script: "Guten Tag, Finanzamt Hamburg-Mitte. - Guten Tag. Ich habe eine Frage zu meiner Steuererklärung. Bis wann muss ich sie einreichen? - Für das letzte Jahr ist der Abgabetermin der einunddreißigste Juli. - Und kann ich das online machen? - Ja, über das Portal ELSTER. Das ist kostenlos.",
                translation: "Good day, Tax Office Hamburg-Mitte. - Good day. I have a question about my tax return. By when do I have to submit it? - For last year the deadline is July 31st. - And can I do that online? - Yes, via the ELSTER portal. That is free of charge.",
                vocabSupport: [
                    { word: "das Finanzamt", translation: "tax office" },
                    { word: "die Steuererklärung", translation: "tax return" },
                    { word: "der Abgabetermin", translation: "deadline" }
                ],
                fillBlank: {
                    sentence: "Der Abgabetermin ist der _____ Juli.",
                    target: "einunddreißigste",
                    options: ["einunddreißigste", "fünfzehnte", "erste"]
                },
                role: {
                    speaker1: "Kann ich meine Steuererklärung auch online machen?",
                    options: ["Ja, über das Portal ELSTER. Das ist kostenlos.", "Ich trage lieber einen grünen Pullover.", "Der Supermarkt schließt um 20 Uhr."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Online-Abgabe über das Portal ELSTER kostet Geld.",
                    correct: false,
                    explanation: "Falsch: Der Mitarbeiter sagt: 'Das ist kostenlos.'"
                }
            },
            {
                id: "hoer_bb_2",
                title: "Eine Lagerbox mieten",
                titleEN: "Renting a Storage Unit",
                script: "Guten Tag, Lagerbox GmbH. - Ich suche eine kleine Lagerbox für ein paar Monate. Was kostet das? - Eine Box mit fünf Quadratmetern kostet 45 Euro pro Monat, mit zehn Quadratmetern kostet sie 80 Euro. - Fünf Quadratmeter reichen mir. Wann kann ich einziehen? - Ab sofort, Sie bringen nur Ihren Ausweis mit.",
                translation: "Good day, Storage Box Ltd. - I am looking for a small storage box for a few months. How much does it cost? - A 5 square meter box costs 45 euros per month, 10 square meters costs 80 euros. - 5 square meters is enough for me. When can I move in? - Immediately, you just bring your ID.",
                vocabSupport: [
                    { word: "die Lagerbox", translation: "storage unit" },
                    { word: "der Quadratmeter", translation: "square meter" },
                    { word: "der Ausweis", translation: "ID card" }
                ],
                fillBlank: {
                    sentence: "Eine Box mit fünf Quadratmetern kostet 45 Euro pro _____.",
                    target: "Monat",
                    options: ["Monat", "Jahr", "Tag"]
                },
                role: {
                    speaker1: "Was muss ich mitbringen, wenn ich heute einziehen möchte?",
                    options: ["Sie bringen nur Ihren Ausweis mit.", "Ein Rezept vom Arzt.", "Eine Fahrkarte nach München."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die 5-Quadratmeter-Box kostet 45 Euro im Monat.",
                    correct: true,
                    explanation: "Richtig: 'Eine Box mit fünf Quadratmetern kostet 45 Euro pro Monat.'"
                }
            }
        ]
    },
    se: {
        title: "Supermarkt & Einkaufen",
        titleEN: "Supermarket & Shopping",
        emoji: "🛒",
        warmup: {
            vocab: [
                { word: "Angebotspreis", gender: "der", translation: "offer price", example: "Das Olivenöl ist heute im Angebotspreis.", exampleEN: "The olive oil is on offer today." },
                { word: "Pfandflasche", gender: "die", translation: "deposit bottle", example: "Wo kann ich die Pfandflaschen zurückgeben?", exampleEN: "Where can I return the deposit bottles?" },
                { word: "Kassenzettel", gender: "der", translation: "receipt", example: "Möchten Sie den Kassenzettel mitnehmen?", exampleEN: "Would you like to take the receipt with you?" },
                { word: "Einkaufswagen", gender: "der", translation: "shopping cart", example: "Für den Einkaufswagen braucht man eine Münze.", exampleEN: "You need a coin for the shopping cart." },
                { word: "Tüte", gender: "die", translation: "plastic/paper bag", example: "Brauchen Sie eine Papiertüte?", exampleEN: "Do you need a paper bag?" }
            ],
            phrases: [
                { de: "Wo finde ich frische Milch?", en: "Where do I find fresh milk?" },
                { de: "Zahlen Sie bar oder mit Karte?", en: "Are you paying cash or by card?" },
                { de: "Das macht zusammen 18 Euro 50.", en: "That comes to 18 euros 50 in total." },
                { de: "Haben Sie eine Kundenkarte?", en: "Do you have a store loyalty card?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_se_1",
                title: "Der Einkauf im Supermarkt",
                titleEN: "Shopping at the Supermarket",
                script: "Entschuldigung, wo finde ich die frische Milch? - Im Gang vier auf der rechten Seite, direkt neben dem Käse. - Vielen Dank! Gibt es heute auch Äpfel im Angebot? - Ja, die roten Äpfel kosten nur ein Euro fünfzig pro Kilo.",
                translation: "Excuse me, where do I find the fresh milk? - In aisle four on the right side, directly next to the cheese. - Thank you very much! Are apples on offer today as well? - Yes, the red apples cost only 1 euro 50 per kilo.",
                vocabSupport: [
                    { word: "die Milch", translation: "milk" },
                    { word: "der Gang", translation: "aisle" },
                    { word: "das Angebot", translation: "offer / deal" }
                ],
                fillBlank: {
                    sentence: "Die frische Milch steht im Gang _____.",
                    target: "vier",
                    options: ["vier", "zwei", "zehn"]
                },
                role: {
                    speaker1: "Entschuldigung, wo finde ich die frische Milch?",
                    options: ["Im Gang vier auf der rechten Seite.", "Ich gehe morgen ins Kino.", "Das Flugzeug fliegt um 9 Uhr."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die roten Äpfel kosten heute 1,50 Euro pro Kilo.",
                    correct: true,
                    explanation: "Richtig: Der Verkäufer sagt: 'die roten Äpfel kosten nur ein Euro fünfzig pro Kilo.'"
                }
            },
            {
                id: "hoer_se_2",
                title: "An der Supermarktkasse",
                titleEN: "At the Supermarket Checkout",
                script: "Guten Tag. Haben Sie eine Kundenkarte? - Nein, habe ich nicht. - Das macht zusammen 24 Euro 80. Zahlen Sie bar oder mit Karte? - Mit Karte, bitte. Kann ich kontaktlos bezahlen? - Ja, legen Sie die Karte einfach auf das Gerät. Brauchen Sie eine Tüte? - Nein danke, ich habe einen Rucksack.",
                translation: "Good day. Do you have a loyalty card? - No, I don't. - That comes to 24 euros 80 in total. Are you paying cash or by card? - By card, please. Can I pay contactless? - Yes, just place the card on the device. Do you need a bag? - No thanks, I have a backpack.",
                vocabSupport: [
                    { word: "die Kundenkarte", translation: "loyalty card" },
                    { word: "kontaktlos", translation: "contactless" },
                    { word: "die Tüte", translation: "bag" }
                ],
                fillBlank: {
                    sentence: "Das macht zusammen 24 Euro _____.",
                    target: "80",
                    options: ["80", "50", "20"]
                },
                role: {
                    speaker1: "Zahlen Sie heute bar oder mit Karte?",
                    options: ["Mit Karte, bitte. Kann ich kontaktlos bezahlen?", "Ich wohne in der Bergstraße.", "Das Wetter ist sehr schön."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde nimmt eine Papiertüte für den Einkauf.",
                    correct: false,
                    explanation: "Falsch: Der Kunde sagt: 'Nein danke, ich habe einen Rucksack.'"
                }
            }
        ]
    },
    br: {
        title: "Bahnhof & Reisen",
        titleEN: "Train Station & Travel",
        emoji: "🚆",
        warmup: {
            vocab: [
                { word: "Fahrplan", gender: "der", translation: "timetable", example: "Der Fahrplan steht an der großen Anzeigetafel.", exampleEN: "The timetable is on the big display board." },
                { word: "Gleis", gender: "das", translation: "platform / track", example: "Der ICE nach Berlin fährt von Gleis 7 ab.", exampleEN: "The ICE to Berlin departs from platform 7." },
                { word: "Verspätung", gender: "die", translation: "delay", example: "Der Zug hat leider 15 Minuten Verspätung.", exampleEN: "Unfortunately the train has a 15-minute delay." },
                { word: "Sitzplatzreservierung", gender: "die", translation: "seat reservation", example: "Ich habe eine Sitzplatzreservierung im Wagen 4.", exampleEN: "I have a seat reservation in coach 4." },
                { word: "Umstieg", gender: "der", translation: "transfer / connection", example: "Der Umstieg in Frankfurt dauert zehn Minuten.", exampleEN: "The connection in Frankfurt takes ten minutes." }
            ],
            phrases: [
                { de: "Auf welchem Gleis fährt der Zug ab?", en: "Which platform does the train depart from?" },
                { de: "Hat der Zug nach Köln Verspätung?", en: "Is the train to Cologne delayed?" },
                { de: "Einmal Hin- und Rückfahrt nach Hamburg, bitte.", en: "One round-trip ticket to Hamburg, please." },
                { de: "Muss ich unterwegs umsteigen?", en: "Do I have to change trains on the way?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_br_1",
                title: "Am Fahrkartenschalter",
                titleEN: "At the Ticket Counter",
                script: "Guten Tag. Ich möchte eine Fahrkarte nach München für morgen früh. - Möchten Sie einfache Fahrt oder Hin- und Rückfahrt? - Hin- und Rückfahrt, bitte. Muss ich umsteigen? - Nein, das ist ein Direktzug ab Gleis 5. Er fährt um 7:15 Uhr ab. - Sehr gut, bitte mit Sitzplatz am Fenster.",
                translation: "Good day. I would like a ticket to Munich for tomorrow morning. - Would you like a one-way or round-trip ticket? - Round-trip, please. Do I have to change trains? - No, that's a direct train from platform 5. It departs at 7:15 AM. - Very good, please with a window seat.",
                vocabSupport: [
                    { word: "die Fahrkarte", translation: "ticket" },
                    { word: "die Hin- und Rückfahrt", translation: "round-trip" },
                    { word: "der Direktzug", translation: "direct train" }
                ],
                fillBlank: {
                    sentence: "Das ist ein Direktzug ab Gleis _____.",
                    target: "5",
                    options: ["5", "12", "2"]
                },
                role: {
                    speaker1: "Muss ich auf der Fahrt nach München umsteigen?",
                    options: ["Nein, das ist ein Direktzug ab Gleis 5.", "Ja, die Suppe schmeckt sehr gut.", "Der Laden öffnet um 9 Uhr."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Zug nach München fährt morgen um 7:15 Uhr ab.",
                    correct: true,
                    explanation: "Richtig: Die Bahnangestellte sagt: 'Er fährt um 7:15 Uhr ab.'"
                }
            },
            {
                id: "hoer_br_2",
                title: "Gleisdurchsage am Bahnhof",
                titleEN: "Platform Announcement",
                script: "Achtung an Gleis 3: Der Regionalexpress nach Stuttgart, planmäßige Abfahrt 14:20 Uhr, fällt heute wegen einer technischen Störung aus. Fahrgäste nach Stuttgart nutzen bitte den Intercity um 14:45 Uhr von Gleis 8. Wir bitten um Entschuldigung.",
                translation: "Attention on platform 3: The regional express to Stuttgart, scheduled departure 2:20 PM, is cancelled today due to a technical fault. Passengers to Stuttgart please use the Intercity at 2:45 PM from platform 8. We apologize.",
                vocabSupport: [
                    { word: "die Durchsage", translation: "announcement" },
                    { word: "ausfallen", translation: "to be cancelled" },
                    { word: "die Störung", translation: "technical fault" }
                ],
                fillBlank: {
                    sentence: "Der Regionalexpress nach Stuttgart fällt wegen einer technischen _____ aus.",
                    target: "Störung",
                    options: ["Störung", "Pause", "Feier"]
                },
                role: {
                    speaker1: "Fährt der Regionalexpress nach Stuttgart heute von Gleis 3?",
                    options: ["Nein, er fällt heute wegen einer technischen Störung aus.", "Ja, der Salat kostet vier Euro.", "Nein, mein Name ist Thomas."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Fahrgäste nach Stuttgart können den Intercity um 14:45 Uhr von Gleis 8 nehmen.",
                    correct: true,
                    explanation: "Richtig: In der Durchsage heißt es: 'Fahrgäste nach Stuttgart nutzen bitte den Intercity um 14:45 Uhr von Gleis 8.'"
                }
            }
        ]
    },
    rc: {
        title: "Restaurant & Café",
        titleEN: "Restaurant & Café",
        emoji: "🍕",
        warmup: {
            vocab: [
                { word: "Speisekarte", gender: "die", translation: "menu", example: "Bringen Sie uns bitte die Speisekarte?", exampleEN: "Could you please bring us the menu?" },
                { word: "Tagesgericht", gender: "das", translation: "daily special", example: "Das Tagesgericht heute ist Fisch mit Kartoffeln.", exampleEN: "Today's daily special is fish with potatoes." },
                { word: "Rechnung", gender: "die", translation: "bill / check", example: "Wir möchten bitte bezahlen und die Rechnung haben.", exampleEN: "We would like to pay and get the bill, please." },
                { word: "Trinkgeld", gender: "das", translation: "tip", example: "Der Kellner bekommt zwei Euro Trinkgeld.", exampleEN: "The waiter gets two euros tip." },
                { word: "Reservierung", gender: "die", translation: "reservation", example: "Ich habe eine Reservierung für zwei Personen um 19 Uhr.", exampleEN: "I have a reservation for two people at 7 PM." }
            ],
            phrases: [
                { de: "Haben Sie noch einen Tisch für zwei Personen frei?", en: "Do you still have a table free for two people?" },
                { de: "Ich hätte gerne ein Mineralwasser ohne Kohlensäure.", en: "I would like a still mineral water." },
                { de: "Wir möchten gerne bezahlen.", en: "We would like to pay, please." },
                { de: "Zusammen oder getrennt?", en: "Together or separately?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_rc_1",
                title: "Bestellung im Restaurant",
                titleEN: "Ordering at the Restaurant",
                script: "Guten Abend! Haben Sie schon gewählt? - Ja, als Vorspeise nehme ich eine Tomatensuppe. Und als Hauptgericht das Schnitzel mit Pommes. - Sehr gerne. Und was möchten Sie trinken? - Ein großes Mineralwasser ohne Kohlensäure, bitte. - Kommt sofort!",
                translation: "Good evening! Have you decided? - Yes, for starter I'll take a tomato soup. And for main course the schnitzel with fries. - Very gladly. And what would you like to drink? - A large still mineral water, please. - Coming right up!",
                vocabSupport: [
                    { word: "die Vorspeise", translation: "starter / appetizer" },
                    { word: "das Hauptgericht", translation: "main course" },
                    { word: "ohne Kohlensäure", translation: "still (water)" }
                ],
                fillBlank: {
                    sentence: "Als Vorspeise nehme ich eine _____.",
                    target: "Tomatensuppe",
                    options: ["Tomatensuppe", "Pizza", "Eiskugel"]
                },
                role: {
                    speaker1: "Was möchten Sie heute Abend trinken?",
                    options: ["Ein großes Mineralwasser ohne Kohlensäure, bitte.", "Ich möchte den Bus nehmen.", "Mein Bleistift ist rot."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Gast bestellt ein Schnitzel mit Pommes als Hauptgericht.",
                    correct: true,
                    explanation: "Richtig: Der Gast sagt: 'Und als Hauptgericht das Schnitzel mit Pommes.'"
                }
            },
            {
                id: "hoer_rc_2",
                title: "Bezahlen beim Kellner",
                titleEN: "Paying the Waiter",
                script: "Entschuldigung, wir möchten bitte bezahlen! - Ja gerne. Zusammen oder getrennt? - Getrennt, bitte. Ich hatte die Gemüsesuppe und den Apfelsaft. - Das macht 12 Euro 50. - Hier sind 14 Euro. Der Rest ist Trinkgeld! - Vielen Dank, schönen Abend noch!",
                translation: "Excuse me, we would like to pay, please! - Yes, gladly. Together or separately? - Separately, please. I had the vegetable soup and apple juice. - That makes 12 euros 50. - Here is 14 euros. Keep the change! - Thank you very much, have a nice evening!",
                vocabSupport: [
                    { word: "getrennt", translation: "separately" },
                    { word: "das Trinkgeld", translation: "tip" },
                    { word: "der Rest", translation: "the rest / change" }
                ],
                fillBlank: {
                    sentence: "Das macht für die Gemüsesuppe und den Saft 12 Euro _____.",
                    target: "50",
                    options: ["50", "90", "10"]
                },
                role: {
                    speaker1: "Möchten Sie zusammen oder getrennt bezahlen?",
                    options: ["Getrennt, bitte. Ich hatte die Gemüsesuppe.", "Ich wohne im zweiten Stock.", "Der Regen ist kalt."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Gast gibt dem Kellner 1,50 Euro Trinkgeld.",
                    correct: true,
                    explanation: "Richtig: Die Rechnung ist 12,50 Euro, der Gast gibt 14 Euro und sagt: 'Der Rest ist Trinkgeld!'"
                }
            }
        ]
    },
    ag: {
        title: "Arzt & Gesundheit",
        titleEN: "Doctor & Health",
        emoji: "🩺",
        warmup: {
            vocab: [
                { word: "Arztpraxis", gender: "die", translation: "doctor's surgery / clinic", example: "Die Arztpraxis hat am Mittwochnachmittag geschlossen.", exampleEN: "The clinic is closed on Wednesday afternoon." },
                { word: "Krankenkassenkarte", gender: "die", translation: "health insurance card", example: "Geben Sie mir bitte Ihre Krankenkassenkarte.", exampleEN: "Please give me your health insurance card." },
                { word: "Fieber", gender: "das", translation: "fever", example: "Das Kind hat seit gestern hohes Fieber.", exampleEN: "The child has had a high fever since yesterday." },
                { word: "Rezept", gender: "das", translation: "prescription", example: "Der Arzt schreibt ein Rezept für Schmerzmittel.", exampleEN: "The doctor writes a prescription for painkillers." },
                { word: "Krankmeldung", gender: "die", translation: "sick note", example: "Ich brauche eine Krankmeldung für meinen Arbeitgeber.", exampleEN: "I need a sick note for my employer." }
            ],
            phrases: [
                { de: "Ich habe seit drei Tagen starke Kopfschmerzen.", en: "I have had a severe headache for three days." },
                { de: "Nehmen Sie die Tabletten morgens und abends.", en: "Take the tablets morning and evening." },
                { de: "Ich brauche ein Attest für die Arbeit.", en: "I need a doctor's certificate for work." },
                { de: "Gute Besserung!", en: "Get well soon!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_ag_1",
                title: "Terminabsprache beim Hausarzt",
                titleEN: "Appointment with the GP",
                script: "Praxis Dr. Wagner, Guten Tag. - Guten Tag, mein Name ist Becker. Ich habe starke Halsschmerzen und Fieber. Kann ich heute noch vorbeikommen? - Ja, kommen Sie heute um 11:30 Uhr. Bringen Sie bitte Ihre Krankenkassenkarte mit. - Vielen Dank, bis später.",
                translation: "Dr. Wagner's Surgery, good day. - Good day, my name is Becker. I have a severe sore throat and fever. Can I come by today? - Yes, come today at 11:30 AM. Please bring your health insurance card with you. - Thank you very much, see you later.",
                vocabSupport: [
                    { word: "die Halsschmerzen", translation: "sore throat" },
                    { word: "das Fieber", translation: "fever" },
                    { word: "die Krankenkassenkarte", translation: "health insurance card" }
                ],
                fillBlank: {
                    sentence: "Kommen Sie heute bitte um 11:30 _____ in die Praxis.",
                    target: "Uhr",
                    options: ["Uhr", "Tage", "Wochen"]
                },
                role: {
                    speaker1: "Ich habe starke Halsschmerzen und Fieber. Kann ich vorbeikommen?",
                    options: ["Ja, kommen Sie heute um 11:30 Uhr.", "Nein, mein Auto ist blau.", "Ich trinke gerne Orangensaft."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Herr Becker muss seine Krankenkassenkarte zur Praxis mitbringen.",
                    correct: true,
                    explanation: "Richtig: Die Arzthelferin sagt: 'Bringen Sie bitte Ihre Krankenkassenkarte mit.'"
                }
            },
            {
                id: "hoer_ag_2",
                title: "Rezept in der Apotheke einlösen",
                titleEN: "Redeeming a Prescription at the Pharmacy",
                script: "Guten Tag, wie kann ich Ihnen helfen? - Guten Tag, ich möchte dieses Rezept vom Arzt einlösen. - Sehr gerne. Nehmen Sie diese Tabletten zweimal täglich nach dem Essen mit etwas Wasser. Das Hustensaft-Flaschen kostet drei Euro Zuzahlung. - Alles klar, danke sehr!",
                translation: "Good day, how can I help you? - Good day, I would like to redeem this prescription from the doctor. - Very gladly. Take these tablets twice daily after meals with some water. The cough syrup bottle costs a 3 euro co-payment. - All clear, thank you very much!",
                vocabSupport: [
                    { word: "das Rezept", translation: "prescription" },
                    { word: "die Tabletten", translation: "tablets / pills" },
                    { word: "die Zuzahlung", translation: "co-payment" }
                ],
                fillBlank: {
                    sentence: "Nehmen Sie diese Tabletten _____ täglich nach dem Essen.",
                    target: "zweimal",
                    options: ["zweimal", "zehnmal", "nullmal"]
                },
                role: {
                    speaker1: "Wie oft soll ich diese Tabletten einnehmen?",
                    options: ["Nehmen Sie sie zweimal täglich nach dem Essen.", "Der Bahnhof liegt rechts.", "Die Schuhe passen gut."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Zuzahlung für den Hustensaft beträgt 10 Euro.",
                    correct: false,
                    explanation: "Falsch: Die Apothekerin sagt: 'Das Hustensaft-Flaschen kostet drei Euro Zuzahlung.'"
                }
            }
        ]
    },
    hu: {
        title: "Hotel & Unterkunft",
        titleEN: "Hotel & Accommodation",
        emoji: "🏨",
        warmup: {
            vocab: [
                { word: "Doppelzimmer", gender: "das", translation: "double room", example: "Wir haben ein Doppelzimmer mit Balkon gebucht.", exampleEN: "We booked a double room with a balcony." },
                { word: "Einzelzimmer", gender: "das", translation: "single room", example: "Ein Einzelzimmer kostet 65 Euro pro Nacht.", exampleEN: "A single room costs 65 euros per night." },
                { word: "Schlüsselkarte", gender: "die", translation: "keycard", example: "Hier ist Ihre Schlüsselkarte für Zimmer 304.", exampleEN: "Here is your keycard for room 304." },
                { word: "Frühstücksbuffet", gender: "das", translation: "breakfast buffet", example: "Das Frühstücksbuffet ist von 7 bis 10 Uhr geöffnet.", exampleEN: "The breakfast buffet is open from 7 to 10 AM." },
                { word: "Aufzug", gender: "der", translation: "elevator / lift", example: "Der Aufzug befindet sich direkt hinter der Rezeption.", exampleEN: "The elevator is directly behind reception." }
            ],
            phrases: [
                { de: "Ich habe ein Zimmer auf den Namen Weber reserviert.", en: "I reserved a room under the name Weber." },
                { de: "Ist das Frühstück im Preis enthalten?", en: "Is breakfast included in the price?" },
                { de: "Wie lautet das Passwort für das WLAN?", en: "What is the WiFi password?" },
                { de: "Um wie viel Uhr ist der Check-out?", en: "What time is check-out?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_hu_1",
                title: "Einchecken im Hotel",
                titleEN: "Hotel Check-in",
                script: "Guten Abend, willkommen im Hotel Lindenhof. - Guten Abend, ich habe ein Doppelzimmer auf den Namen Schneider gebucht. - Ja genau, für zwei Nächte. Füllen Sie bitte noch das Anmeldeformular aus. Hier ist Ihre Schlüsselkarte. Ihr Zimmer liegt im dritten Stock, Zimmer 312. Der Aufzug ist auf der linken Seite.",
                translation: "Good evening, welcome to Hotel Lindenhof. - Good evening, I booked a double room under the name Schneider. - Yes exactly, for two nights. Please fill out the registration form. Here is your keycard. Your room is on the 3rd floor, room 312. The elevator is on the left.",
                vocabSupport: [
                    { word: "das Doppelzimmer", translation: "double room" },
                    { word: "das Anmeldeformular", translation: "registration form" },
                    { word: "der Aufzug", translation: "elevator" }
                ],
                fillBlank: {
                    sentence: "Ihr Zimmer liegt im dritten Stock, Zimmer _____.",
                    target: "312",
                    options: ["312", "101", "500"]
                },
                role: {
                    speaker1: "Wo befindet sich denn der Aufzug zum dritten Stock?",
                    options: ["Der Aufzug ist auf der linken Seite.", "Ich esse gerne Suppe.", "Das Fahrrad ist neu."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Herr Schneider bleibt drei Wochen im Hotel.",
                    correct: false,
                    explanation: "Falsch: Der Rezeptionist sagt: 'Ja genau, für zwei Nächte.'"
                }
            },
            {
                id: "hoer_hu_2",
                title: "Fragen an der Rezeption",
                titleEN: "Asking Questions at Reception",
                script: "Entschuldigung, ab wann gibt es morgen Frühstück? - Das Frühstücksbuffet steht Ihnen von 6:30 bis 10:30 Uhr im Erdgeschoss bereit. - Wunderbar. Und wie lautet der WLAN-Code? - Der Code ist 'Lindenhof2026' – alles kleingeschrieben.",
                translation: "Excuse me, from what time is breakfast available tomorrow? - The breakfast buffet is ready for you from 6:30 to 10:30 AM on the ground floor. - Wonderful. And what is the WiFi code? - The code is 'lindenhof2026' – all lower case.",
                vocabSupport: [
                    { word: "das Erdgeschoss", translation: "ground floor" },
                    { word: "der WLAN-Code", translation: "WiFi code" },
                    { word: "kleingeschrieben", translation: "lower case" }
                ],
                fillBlank: {
                    sentence: "Das Frühstücksbuffet gibt es im _____.",
                    target: "Erdgeschoss",
                    options: ["Erdgeschoss", "Dachgeschoss", "Garten"]
                },
                role: {
                    speaker1: "Ab wann gibt es morgen früh das Frühstücksbuffet?",
                    options: ["Von 6:30 bis 10:30 Uhr im Erdgeschoss.", "Der Zug ist schon abgefahren.", "Ich kauf mir eine Jacke."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Das Frühstücksbuffet ist morgen bis 10:30 Uhr geöffnet.",
                    correct: true,
                    explanation: "Richtig: Der Rezeptionist sagt: 'von 6:30 bis 10:30 Uhr im Erdgeschoss.'"
                }
            }
        ]
    },
    ab: {
        title: "Arbeitsplatz & Büro",
        titleEN: "Workplace & Office",
        emoji: "💼",
        warmup: {
            vocab: [
                { word: "Besprechung", gender: "die", translation: "meeting", example: "Die Besprechung beginnt um 10 Uhr im Konferenzraum.", exampleEN: "The meeting begins at 10 AM in the conference room." },
                { word: "Kollege", gender: "der", translation: "colleague (male)", example: "Mein Kollege Herr Mayer hilft mir beim Projekt.", exampleEN: "My colleague Mr. Mayer is helping me with the project." },
                { word: "Mittagspause", gender: "die", translation: "lunch break", example: "Wir machen um 12:30 Uhr Mittagspause.", exampleEN: "We are having a lunch break at 12:30 PM." },
                { word: "Dienstplan", gender: "der", translation: "duty roster / shift schedule", example: "Der neue Dienstplan hängt am Schwarzem Brett.", exampleEN: "The new shift schedule is hanging on the notice board." },
                { word: "Urlaubsantrag", gender: "der", translation: "leave application", example: "Ich muss den Urlaubsantrag beim Chef einreichen.", exampleEN: "I must submit the leave application to the boss." }
            ],
            phrases: [
                { de: "Ich kann heute leider nicht zur Arbeit kommen.", en: "Unfortunately I cannot come to work today." },
                { de: "Können Sie mir die Unterlagen per E-Mail schicken?", en: "Could you send me the documents by email?" },
                { de: "Der Termin wird auf Freitag verschoben.", en: "The appointment is postponed to Friday." },
                { de: "Schönes Wochenende!", en: "Have a nice weekend!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_ab_1",
                title: "Krankmeldung beim Vorgesetzten",
                titleEN: "Calling in Sick to the Supervisor",
                script: "Hallo Frau Hoffmann, hier spricht Thomas Schulz. Ich bin leider krank und kann heute nicht ins Büro kommen. - Oh, das tut mir leid Herr Schulz. Waren Sie schon beim Arzt? - Ja, ich schicke Ihnen die Attest-Krankmeldung heute Nachmittag per E-Mail. - Gut, danke für die Info und gute Besserung!",
                translation: "Hello Ms. Hoffmann, this is Thomas Schulz speaking. Unfortunately I am sick and cannot come to the office today. - Oh, I'm sorry Mr. Schulz. Have you been to the doctor? - Yes, I will send you the doctor's sick note this afternoon by email. - Good, thanks for letting us know and get well soon!",
                vocabSupport: [
                    { word: "krankmelden", translation: "to call in sick" },
                    { word: "das Attest", translation: "medical certificate" },
                    { word: "die Info", translation: "info / notice" }
                ],
                fillBlank: {
                    sentence: "Ich schicke Ihnen die Krankmeldung heute Nachmittag per _____.",
                    target: "E-Mail",
                    options: ["E-Mail", "Postkarte", "Fax"]
                },
                role: {
                    speaker1: "Guten Morgen Frau Hoffmann, ich bin leider krank.",
                    options: ["Das tut mir leid. Schicken Sie bitte die Krankmeldung.", "Ich esse jetzt einen Apfel.", "Die Bahn kommt um drei Uhr."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Herr Schulz schickt seine Krankmeldung per E-Mail.",
                    correct: true,
                    explanation: "Richtig: Er sagt: 'Ich schicke Ihnen die Attest-Krankmeldung heute Nachmittag per E-Mail.'"
                }
            },
            {
                id: "hoer_ab_2",
                title: "Terminverschiebung im Büro",
                titleEN: "Rescheduling a Meeting in the Office",
                script: "Hallo Jan, hast du kurz Zeit? Es geht um die Besprechung am Donnerstag. - Ja, worum geht es? - Frau Neumann ist am Donnerstag auf Geschäftsreise. Können wir den Termin auf Freitag um 14 Uhr verschieben? - Freitag um 14 Uhr passt mir gut. Ich trage das in den Kalender ein.",
                translation: "Hello Jan, do you have a moment? It's about the meeting on Thursday. - Yes, what is it about? - Ms. Neumann is on a business trip on Thursday. Can we postpone the meeting to Friday at 2 PM? - Friday at 2 PM suits me well. I'll put that in the calendar.",
                vocabSupport: [
                    { word: "die Besprechung", translation: "meeting" },
                    { word: "die Geschäftsreise", translation: "business trip" },
                    { word: "verschieben", translation: "to postpone / reschedule" }
                ],
                fillBlank: {
                    sentence: "Können wir den Termin auf Freitag um _____ Uhr verschieben?",
                    target: "14",
                    options: ["14", "9", "18"]
                },
                role: {
                    speaker1: "Können wir die Besprechung auf Freitag um 14 Uhr verschieben?",
                    options: ["Freitag um 14 Uhr passt mir gut.", "Nein, meine Hose ist blau.", "Das Hotel ist sehr alt."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Besprechung wird auf Freitag um 14 Uhr verschoben.",
                    correct: true,
                    explanation: "Richtig: Jan sagt: 'Freitag um 14 Uhr passt mir gut. Ich trage das in den Kalender ein.'"
                }
            }
        ]
    },
    fz: {
        title: "Flughafen & Zoll",
        titleEN: "Airport & Customs",
        emoji: "✈️",
        warmup: {
            vocab: [
                { word: "Bordkarte", gender: "die", translation: "boarding pass", example: "Zeigen Sie mir bitte Ihre Bordkarte und Ihren Pass.", exampleEN: "Please show me your boarding pass and passport." },
                { word: "Gepäckabgabe", gender: "die", translation: "baggage drop-off", example: "Die Gepäckabgabe für den Flug nach Madrid ist an Schalter 12.", exampleEN: "Baggage drop-off for the Madrid flight is at counter 12." },
                { word: "Handgepäck", gender: "das", translation: "carry-on luggage", example: "Sie dürfen ein Stück Handgepäck mit ins Flugzeug nehmen.", exampleEN: "You may take one piece of hand luggage onto the plane." },
                { word: "Sicherheitskontrolle", gender: "die", translation: "security check", example: "An der Sicherheitskontrolle müssen Sie Gürtel und Jacke ausziehen.", exampleEN: "At security you must take off your belt and jacket." },
                { word: "Abfluggate", gender: "das", translation: "departure gate", example: "Das Abfluggate B24 befindet sich im zweiten Stock.", exampleEN: "Departure gate B24 is located on the second floor." }
            ],
            phrases: [
                { de: "Wo ist die Gepäckabgabe für Lufthansa?", en: "Where is the baggage drop-off for Lufthansa?" },
                { de: "Der Flug hat 30 Minuten Verspätung.", en: "The flight has a 30-minute delay." },
                { de: "Bitte legen Sie alle elektronischen Geräte in die Schale.", en: "Please place all electronic devices in the tray." },
                { de: "Guten Flug!", en: "Have a good flight!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_fz_1",
                title: "Gepäckabgabe am Schalter",
                titleEN: "Luggage Drop-off at the Counter",
                script: "Guten Tag. Ihren Reisepass bitte. - Guten Tag, hier ist mein Pass. - Stellen Sie bitte den Koffer auf die Waage. ... Der Koffer wiegt 19 Kilo, das ist perfekt. Haben Sie Flüssigkeiten im Handgepäck? - Nein, nur ein Buch und mein Tablet. - Gut. Hier ist Ihre Bordkarte. Boarding ist um 16:45 Uhr an Gate B18.",
                translation: "Good day. Your passport please. - Good day, here is my passport. - Please place the suitcase on the scales. ... The suitcase weighs 19 kg, that's perfect. Do you have liquids in your hand luggage? - No, only a book and my tablet. - Good. Here is your boarding pass. Boarding is at 4:45 PM at Gate B18.",
                vocabSupport: [
                    { word: "die Waage", translation: "scales" },
                    { word: "die Flüssigkeiten", translation: "liquids" },
                    { word: "das Boarding", translation: "boarding" }
                ],
                fillBlank: {
                    sentence: "Boarding ist um 16:45 Uhr an Gate _____.",
                    target: "B18",
                    options: ["B18", "A5", "C30"]
                },
                role: {
                    speaker1: "Haben Sie Flüssigkeiten im Handgepäck dabei?",
                    options: ["Nein, nur ein Buch und mein Tablet.", "Ich trinke morgens Kaffee.", "Der Koffer ist gelb."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Koffer des Passagiers wiegt 19 Kilo.",
                    correct: true,
                    explanation: "Richtig: Die Schalterkraft sagt: 'Der Koffer wiegt 19 Kilo, das ist perfekt.'"
                }
            },
            {
                id: "hoer_fz_2",
                title: "Flughafendurchsage am Gate",
                titleEN: "Airport Gate Announcement",
                script: "Letzter Aufruf für alle noch fehlenden Passagiere des Fluges LH 450 nach New York. Bitte kommen Sie umgehend zu Gate C12. Das Boarding wird in fünf Minuten geschlossen. Bitte halten Sie Ihren Pass und Ihre Bordkarte bereit.",
                translation: "Final call for all remaining passengers of flight LH 450 to New York. Please proceed immediately to Gate C12. Boarding will close in five minutes. Please have your passport and boarding pass ready.",
                vocabSupport: [
                    { word: "der Aufruf", translation: "call / announcement" },
                    { word: "umgehend", translation: "immediately" },
                    { word: "schließen", translation: "to close" }
                ],
                fillBlank: {
                    sentence: "Letzter Aufruf für den Flug LH 450 nach _____.",
                    target: "New York",
                    options: ["New York", "Berlin", "Tokio"]
                },
                role: {
                    speaker1: "Wohin geht der Flug LH 450?",
                    options: ["Nach New York. Bitte kommen Sie zu Gate C12.", "Nach München mit dem Zug.", "Der Flug ist gestern angekommen."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Das Boarding schließt in fünf Minuten.",
                    correct: true,
                    explanation: "Richtig: In der Durchsage heißt es: 'Das Boarding wird in fünf Minuten geschlossen.'"
                }
            }
        ]
    },
    pp: {
        title: "Post & Paketdienst",
        titleEN: "Post Office & Parcel Service",
        emoji: "✉️",
        warmup: {
            vocab: [
                { word: "Paket", gender: "das", translation: "parcel / package", example: "Ich möchte dieses Paket nach Spanien schicken.", exampleEN: "I would like to send this parcel to Spain." },
                { word: "Briefmarke", gender: "die", translation: "stamp", example: "Ich brauche fünf Briefmarken für Standardbriefe.", exampleEN: "I need five stamps for standard letters." },
                { word: "Einschreiben", gender: "das", translation: "registered mail", example: "Schicken Sie den Vertrag bitte als Einschreiben.", exampleEN: "Please send the contract as registered mail." },
                { word: "Absender", gender: "der", translation: "sender", example: "Vergessen Sie nicht, den Absender oben links einzutragen.", exampleEN: "Don't forget to enter the sender in the top left." },
                { word: "Abholkarte", gender: "die", translation: "pickup notification card", example: "Der Briefträger hat eine Abholkarte im Briefkasten hinterlassen.", exampleEN: "The mail carrier left a pickup card in the mailbox." }
            ],
            phrases: [
                { de: "Wie viel kostet das Porto für diesen Brief?", en: "How much is the postage for this letter?" },
                { de: "Ich möchte ein Paket abholen.", en: "I would like to pick up a package." },
                { de: "Bitte unterschreiben Sie hier auf dem Display.", en: "Please sign here on the display." },
                { de: "Wie lange dauert der Versand?", en: "How long does shipping take?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_pp_1",
                title: "Ein Paket auf der Post aufgeben",
                titleEN: "Mailing a Package at the Post Office",
                script: "Guten Tag. Ich möchte dieses Paket nach Italien verschicken. - Guten Tag. Bitte legen Sie es auf die Waage. Es wiegt 2,4 Kilo. Möchten Sie Standardversand oder Express? - Standardversand reicht aus. Wie lange dauert das? - Ca. drei bis vier Werktage. Das macht 8 Euro 90.",
                translation: "Good day. I would like to send this package to Italy. - Good day. Please place it on the scales. It weighs 2.4 kg. Would you like standard shipping or express? - Standard shipping is sufficient. How long does that take? - Approx. three to four business days. That comes to 8 euros 90.",
                vocabSupport: [
                    { word: "verschicken", translation: "to send / mail" },
                    { word: "der Werktag", translation: "business day / workday" },
                    { word: "das Porto", translation: "postage" }
                ],
                fillBlank: {
                    sentence: "Der Standardversand dauert ca. drei bis vier _____.",
                    target: "Werktage",
                    options: ["Werktage", "Monate", "Stunden"]
                },
                role: {
                    speaker1: "Wie lange dauert der Standardversand nach Italien?",
                    options: ["Ca. drei bis vier Werktage.", "Das Brot kostet zwei Euro.", "Ich fahre mit dem Bus."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Versand des Pakets nach Italien kostet 8,90 Euro.",
                    correct: true,
                    explanation: "Richtig: Der Postmitarbeiter sagt: 'Das macht 8 Euro 90.'"
                }
            },
            {
                id: "hoer_pp_2",
                title: "Ein Paket mit Abholkarte abholen",
                titleEN: "Picking up a Parcel with Notification Card",
                script: "Guten Tag, ich möchte ein Paket abholen. Ich hatte gestern diese Abholkarte im Briefkasten. - Guten Tag. Zeigen Sie mir bitte Ihren Lichtbildausweis. ... Danke Frau Graf. Bitte unterschreiben Sie hier auf dem kleinen Scanner. Hier ist Ihr Paket!",
                translation: "Good day, I would like to pick up a package. I had this pickup card in my mailbox yesterday. - Good day. Please show me your photo ID. ... Thank you Ms. Graf. Please sign here on the small scanner. Here is your package!",
                vocabSupport: [
                    { word: "die Abholkarte", translation: "pickup notification card" },
                    { word: "der Lichtbildausweis", translation: "photo ID" },
                    { word: "unterschreiben", translation: "to sign" }
                ],
                fillBlank: {
                    sentence: "Zeigen Sie mir bitte Ihren _____, Frau Graf.",
                    target: "Lichtbildausweis",
                    options: ["Lichtbildausweis", "Fahrschein", "Kassenzettel"]
                },
                role: {
                    speaker1: "Ich möchte mein Paket mit der Abholkarte abholen.",
                    options: ["Zeigen Sie mir bitte Ihren Lichtbildausweis.", "Ich kaufe drei Äpfel.", "Das Wetter ist regnerisch."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Frau Graf muss dem Postboten ihren Ausweis zeigen.",
                    correct: true,
                    explanation: "Richtig: Der Postmitarbeiter sagt: 'Zeigen Sie mir bitte Ihren Lichtbildausweis.'"
                }
            }
        ]
    },
    tk: {
        title: "Technik & Kundenservice",
        titleEN: "Technology & Customer Support",
        emoji: "📱",
        warmup: {
            vocab: [
                { word: "Kundennummer", gender: "die", translation: "customer number", example: "Nennen Sie mir bitte Ihre Kundennummer.", exampleEN: "Please tell me your customer number." },
                { word: "Internetverbindung", gender: "die", translation: "internet connection", example: "Die Internetverbindung ist seit heute Morgen weg.", exampleEN: "The internet connection has been gone since this morning." },
                { word: "Garantie", gender: "die", translation: "warranty", example: "Auf die Kaffeemaschine haben Sie zwei Jahre Garantie.", exampleEN: "You have a two-year warranty on the coffee machine." },
                { word: "Reparatur", gender: "die", translation: "repair", example: "Die Reparatur des Bildschirms kostet 80 Euro.", exampleEN: "The screen repair costs 80 euros." },
                { word: "Kassenzettel", gender: "der", translation: "receipt", example: "Ohne Kassenzettel kann ich das Gerät nicht umtauschen.", exampleEN: "Without a receipt I cannot exchange the device." }
            ],
            phrases: [
                { de: "Mein WLAN-Router blinkt rot.", en: "My WiFi router is flashing red." },
                { de: "Ich möchte ein defektes Gerät umtauschen.", en: "I would like to exchange a defective device." },
                { de: "Starten Sie den Router bitte neu.", en: "Please restart the router." },
                { de: "Der Techniker ruft Sie morgen zurück.", en: "The technician will call you back tomorrow." }
            ]
        },
        dialogues: [
            {
                id: "hoer_tk_1",
                title: "Störung bei der Internet-Hotline",
                titleEN: "Reporting an Internet Outage",
                script: "Guten Tag, Kundenservice WebNetz. Mein Name ist König. - Guten Tag, hier ist Meier. Mein Internet funktioniert seit heute Morgen nicht mehr. Der Router blinkt rot. - Wie ist Ihre Kundennummer? - 88 43 12. - Danke. Schalten Sie den Router bitte kurz für 30 Sekunden aus und wieder ein. Ich überprüfe jetzt die Leitung.",
                translation: "Good day, WebNetz customer service. My name is König. - Good day, this is Meier. My internet has not been working since this morning. The router is flashing red. - What is your customer number? - 88 43 12. - Thank you. Please switch the router off for 30 seconds and back on again. I am checking the line now.",
                vocabSupport: [
                    { word: "die Störung", translation: "outage / fault" },
                    { word: "der Router", translation: "router" },
                    { word: "ausschalten", translation: "to switch off" }
                ],
                fillBlank: {
                    sentence: "Schalten Sie den Router bitte für _____ Sekunden aus.",
                    target: "30",
                    options: ["30", "100", "5"]
                },
                role: {
                    speaker1: "Mein Internet funktioniert seit heute Morgen nicht mehr. Was soll ich tun?",
                    options: ["Schalten Sie den Router bitte kurz für 30 Sekunden aus.", "Ich trinke Tee mit Zitrone.", "Der Bus hält an der Ecke."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde gibt seine Kundennummer 88 43 12 durch.",
                    correct: true,
                    explanation: "Richtig: Auf die Frage antwortet Herr Meier: '88 43 12.'"
                }
            },
            {
                id: "hoer_tk_2",
                title: "Reklamation im Elektronikfachgeschäft",
                titleEN: "Returning an Item at the Electronics Store",
                script: "Guten Tag, ich habe vor drei Tagen diese Kopfhörer gekauft, aber die rechte Seite funktioniert nicht. - Guten Tag. Haben Sie den Kassenzettel dabei? - Ja, hier ist die Quittung. - Gut, das fällt unter Garantie. Möchten Sie ein neues Paar Kopfhörer oder das Geld zurück? - Ich hätte gerne das Geld zurück, bitte.",
                translation: "Good day, I bought these headphones three days ago, but the right side doesn't work. - Good day. Do you have the receipt with you? - Yes, here is the receipt. - Good, that falls under warranty. Would you like a new pair of headphones or your money back? - I would like the money back, please.",
                vocabSupport: [
                    { word: "die Reklamation", translation: "complaint / return" },
                    { word: "die Quittung", translation: "receipt" },
                    { word: "die Garantie", translation: "warranty" }
                ],
                fillBlank: {
                    sentence: "Ich hätte gerne das _____ zurück, bitte.",
                    target: "Geld",
                    options: ["Geld", "Buch", "Fahrrad"]
                },
                role: {
                    speaker1: "Möchten Sie für die defekten Kopfhörer ein neues Paar oder das Geld zurück?",
                    options: ["Ich hätte gerne das Geld zurück, bitte.", "Ich fliege morgen nach Spanien.", "Das Haus ist grün."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde wählt eine Erstattung des Kaufpreises (Geld zurück).",
                    correct: true,
                    explanation: "Richtig: Er sagt: 'Ich hätte gerne das Geld zurück, bitte.'"
                }
            }
        ]
    },
    mt: {
        title: "Mietwagen & Tankstelle",
        titleEN: "Car Rental & Gas Station",
        emoji: "🚗",
        warmup: {
            vocab: [
                { word: "Führerschein", gender: "der", translation: "driver's license", example: "Zeigen Sie mir bitte Ihren Führerschein und Ihren Ausweis.", exampleEN: "Please show me your driver's license and ID." },
                { word: "Mietwagen", gender: "der", translation: "rental car", example: "Ich möchte für das Wochenende einen Mietwagen buchen.", exampleEN: "I would like to book a rental car for the weekend." },
                { word: "Vollkaskoversticherung", gender: "die", translation: "full comprehensive insurance", example: "Ist die Vollkaskoversicherung im Mietpreis enthalten?", exampleEN: "Is full comprehensive insurance included in the rental price?" },
                { word: "Zapfsäule", gender: "die", translation: "fuel pump", example: "Ich habe an Zapfsäule 4 Super Benzin getankt.", exampleEN: "I filled up Super petrol at pump 4." },
                { word: "Kaution", gender: "die", translation: "deposit", example: "Die Kaution von 200 Euro wird auf der Kreditkarte reserviert.", exampleEN: "The deposit of 200 euros is reserved on the credit card." }
            ],
            phrases: [
                { de: "Ich möchte einen Kleinwagen für drei Tage mieten.", en: "I would like to rent a small car for three days." },
                { de: "Der Tank ist aktuell voll.", en: "The fuel tank is currently full." },
                { de: "Zahlen Sie bitte an Kasse 2.", en: "Please pay at checkout counter 2." },
                { de: "Gute und sichere Fahrt!", en: "Have a good and safe trip!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_mt_1",
                title: "Ein Auto an der Mietwagenstation buchen",
                titleEN: "Booking a Car at the Rental Desk",
                script: "Guten Tag, Autovermietung DriveNow. - Guten Tag, ich brauche für das Wochenende einen Kleinwagen von Freitag bis Sonntag. Was kostet das? - Ein VW Polo kostet 79 Euro für das ganze Wochenende inklusive Vollkaskoversicherung. - Perfekt. Hier ist mein Führerschein und meine Kreditkarte. - Danke. Die Kaution beträgt 150 Euro.",
                translation: "Good day, DriveNow Car Rental. - Good day, I need a small car for the weekend from Friday to Sunday. How much is that? - A VW Polo costs 79 euros for the whole weekend including comprehensive insurance. - Perfect. Here is my driver's license and credit card. - Thank you. The deposit is 150 euros.",
                vocabSupport: [
                    { word: "der Kleinwagen", translation: "small car" },
                    { word: "die Kaution", translation: "deposit" },
                    { word: "der Führerschein", translation: "driver's license" }
                ],
                fillBlank: {
                    sentence: "Ein VW Polo kostet 79 Euro für das ganze _____.",
                    target: "Wochenende",
                    options: ["Wochenende", "Jahr", "Stunde"]
                },
                role: {
                    speaker1: "Was kostet der Kleinwagen von Freitag bis Sonntag?",
                    options: ["79 Euro für das ganze Wochenende inklusive Versicherung.", "Der Apfel kostet einen Euro.", "Ich lerne Deutsch."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Kaution für den Mietwagen beträgt 150 Euro.",
                    correct: true,
                    explanation: "Richtig: Die Angestellte sagt: 'Die Kaution beträgt 150 Euro.'"
                }
            },
            {
                id: "hoer_mt_2",
                title: "Bezahlen an der Tankstelle",
                titleEN: "Paying at the Gas Station",
                script: "Guten Tag. Ich hatte Zapfsäule 3 – Super E10 und einen Kaffee zum Mitnehmen. - Guten Tag. Das Benzin macht 45 Euro 20 und der Kaffee zwei Euro fünfzig. Zusammen also 47 Euro 70. - Hier sind 50 Euro. - Und 2 Euro 30 zurück. Brauchen Sie eine Quittung? - Ja bitte für das Büro. Danke!",
                translation: "Good day. I had pump 3 – Super E10 and a coffee to go. - Good day. The petrol comes to 45 euros 20 and the coffee two euros fifty. Total 47 euros 70. - Here is 50 euros. - And 2 euros 30 change. Do you need a receipt? - Yes please for the office. Thank you!",
                vocabSupport: [
                    { word: "die Zapfsäule", translation: "fuel pump" },
                    { word: "der Kaffee zum Mitnehmen", translation: "coffee to go" },
                    { word: "die Quittung", translation: "receipt" }
                ],
                fillBlank: {
                    sentence: "Zusammen macht das 47 Euro _____.",
                    target: "70",
                    options: ["70", "10", "90"]
                },
                role: {
                    speaker1: "Welche Zapfsäule hatten Sie?",
                    options: ["Zapfsäule 3 – Super E10 und einen Kaffee.", "Ich wohne im dritten Stock.", "Die Sonne scheint."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde nimmt eine Quittung für das Büro mit.",
                    correct: true,
                    explanation: "Richtig: Der Kunde antwortet: 'Ja bitte für das Büro. Danke!'"
                }
            }
        ]
    },
    bg: {
        title: "Bank & Geld",
        titleEN: "Bank & Money",
        emoji: "🏦",
        warmup: {
            vocab: [
                { word: "Girokonto", gender: "das", translation: "checking account", example: "Ich möchte ein neues Girokonto eröffnen.", exampleEN: "I would like to open a new checking account." },
                { word: "Geldautomat", gender: "der", translation: "ATM", example: "Der Geldautomat steht vor der Bankfiliale.", exampleEN: "The ATM is in front of the bank branch." },
                { word: "Geheimzahl", gender: "die", translation: "PIN code", example: "Geben Sie bitte Ihre vierstellige Geheimzahl ein.", exampleEN: "Please enter your 4-digit PIN code." },
                { word: "Überweisung", gender: "die", translation: "bank transfer", example: "Ich muss die Miete per Überweisung bezahlen.", exampleEN: "I must pay the rent by bank transfer." },
                { word: "Kontoauszug", gender: "der", translation: "bank statement", example: "Sie können den Kontoauszug am Drucker ausdrucken.", exampleEN: "You can print the bank statement at the printer." }
            ],
            phrases: [
                { de: "Ich möchte Bargeld am Automat abheben.", en: "I would like to withdraw cash at the ATM." },
                { de: "Wie lautet die IBAN für die Überweisung?", en: "What is the IBAN for the bank transfer?" },
                { de: "Fällt für das Konto eine Gebühr an?", en: "Is there a fee for the account?" },
                { de: "Vergessen Sie Ihre Karte nicht!", en: "Don't forget your card!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_bg_1",
                title: "Ein Girokonto eröffnen",
                titleEN: "Opening a Checking Account",
                script: "Guten Tag, Stadtbank Frankfurt. - Guten Tag, ich möchte ein Girokonto eröffnen. Was brauche ich dafür? - Sie brauchen Ihren Pass und eine Meldebescheinigung. Das Basiskonto ist für Studenten kostenlos. - Das ist gut. Kann ich heute den Antrag ausfüllen? - Ja, gerne. Bitte nehmen Sie im Bereich B Platz.",
                translation: "Good day, Frankfurt City Bank. - Good day, I would like to open a checking account. What do I need for that? - You need your passport and a registration certificate. The basic account is free for students. - That's good. Can I fill out the application today? - Yes, gladly. Please take a seat in area B.",
                vocabSupport: [
                    { word: "das Girokonto", translation: "checking account" },
                    { word: "die Meldebescheinigung", translation: "registration certificate" },
                    { word: "kostenlos", translation: "free of charge" }
                ],
                fillBlank: {
                    sentence: "Das Basiskonto ist für Studenten _____.",
                    target: "kostenlos",
                    options: ["kostenlos", "teuer", "geschlossen"]
                },
                role: {
                    speaker1: "Was brauche ich, um ein Girokonto zu eröffnen?",
                    options: ["Sie brauchen Ihren Pass und eine Meldebescheinigung.", "Ich esse gerne Pizza.", "Der Zug hat Verspätung."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Für Studenten ist das Basiskonto der Stadtbank kostenlos.",
                    correct: true,
                    explanation: "Richtig: Der Bankberater sagt: 'Das Basiskonto ist für Studenten kostenlos.'"
                }
            },
            {
                id: "hoer_bg_2",
                title: "Probleme am Geldautomat",
                titleEN: "Trouble at the ATM",
                script: "Entschuldigung, der Geldautomat draußen behält meine Karte nicht, aber gibt kein Geld aus. - Haben Sie Ihre Geheimzahl dreimal falsch eingegeben? - Nein, nur einmal. Jetzt steht 'Systemfehler' auf dem Bildschirm. - Kommen Sie bitte mit zum Schalter 3, wir entsperren Ihre Karte direkt.",
                translation: "Excuse me, the ATM outside is not returning my card and didn't dispense money. - Did you enter your PIN incorrectly three times? - No, only once. Now it says 'System Error' on the screen. - Please come with me to counter 3, we'll unlock your card directly.",
                vocabSupport: [
                    { word: "der Geldautomat", translation: "ATM" },
                    { word: "die Geheimzahl", translation: "PIN code" },
                    { word: "entsperren", translation: "to unlock / unblock" }
                ],
                fillBlank: {
                    sentence: "Kommen Sie bitte mit zum Schalter _____.",
                    target: "3",
                    options: ["3", "10", "1"]
                },
                role: {
                    speaker1: "Der Geldautomat zeigt 'Systemfehler' an. Was soll ich tun?",
                    options: ["Kommen Sie bitte mit zum Schalter 3, wir helfen Ihnen.", "Der Bus kommt morgen.", "Ich trinke Mineralwasser."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde hat seine Geheimzahl drei Mal falsch eingegeben.",
                    correct: false,
                    explanation: "Falsch: Der Kunde sagt: 'Nein, nur einmal.'"
                }
            }
        ]
    },
    kn: {
        title: "Krankenhaus & Notfall",
        titleEN: "Hospital & Emergency",
        emoji: "🏥",
        warmup: {
            vocab: [
                { word: "Notaufnahme", gender: "die", translation: "emergency room", example: "Die Notaufnahme ist rund um die Uhr geöffnet.", exampleEN: "The emergency room is open around the clock." },
                { word: "Krankenwagen", gender: "der", translation: "ambulance", example: "Rufen Sie sofort einen Krankenwagen unter 112!", exampleEN: "Call an ambulance immediately on 112!" },
                { word: "Verletzung", gender: "die", translation: "injury", example: "Der Patient hat eine leichte Verletzung am Bein.", exampleEN: "The patient has a minor injury on the leg." },
                { word: "Krankenschwester", gender: "die", translation: "nurse", example: "Die Krankenschwester bringt ein Schmerzmittel.", exampleEN: "The nurse brings a painkiller." },
                { word: "Besuchszeit", gender: "die", translation: "visiting hours", example: "Die Besuchszeit im Krankenhaus endet um 20 Uhr.", exampleEN: "Visiting hours at the hospital end at 8 PM." }
            ],
            phrases: [
                { de: "Wo ist die Anmeldung für die Notaufnahme?", en: "Where is the emergency room registration desk?" },
                { de: "Er hat sich den Arm gebrochen.", en: "He broke his arm." },
                { de: "Der Arzt untersucht den Patienten sofort.", en: "The doctor examines the patient immediately." },
                { de: "Wann darf ich nach Hause?", en: "When am I allowed to go home?" }
            ]
        },
        dialogues: [
            {
                id: "hoer_kn_1",
                title: "Anmeldung in der Notaufnahme",
                titleEN: "Emergency Room Registration",
                script: "Guten Tag, Notaufnahme Klinik Nord. Was ist passiert? - Mein Mann ist von der Leiter gefallen und hat starke Schmerzen im Fuß. - Kann er auftreten? - Nein, gar nicht. - Bitte nehmen Sie im Rollstuhl Platz. Der Arzt macht zuerst ein Röntgenbild. Haben Sie die Versicherungskarte dabei?",
                translation: "Good day, North Clinic Emergency Room. What happened? - My husband fell off the ladder and has severe foot pain. - Can he step on it? - No, not at all. - Please take a seat in the wheelchair. The doctor will take an X-ray first. Do you have the insurance card with you?",
                vocabSupport: [
                    { word: "die Notaufnahme", translation: "emergency room" },
                    { word: "das Röntgenbild", translation: "X-ray" },
                    { word: "der Rollstuhl", translation: "wheelchair" }
                ],
                fillBlank: {
                    sentence: "Der Arzt macht zuerst ein _____ vom Fuß.",
                    target: "Röntgenbild",
                    options: ["Röntgenbild", "Foto", "Rezept"]
                },
                role: {
                    speaker1: "Mein Mann ist gestürzt und kann nicht auftreten.",
                    options: ["Bitte nehmen Sie im Rollstuhl Platz. Der Arzt kommt sofort.", "Die Fahrkarte kostet zwei Euro.", "Ich gehe einkaufen."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Mann soll zuerst geröntgt werden.",
                    correct: true,
                    explanation: "Richtig: Die Arzthelferin sagt: 'Der Arzt macht zuerst ein Röntgenbild.'"
                }
            },
            {
                id: "hoer_kn_2",
                title: "Nachfragen zur Besuchszeit",
                titleEN: "Inquiring about Visiting Hours",
                script: "Guten Tag, auf welcher Station liegt Frau Berger? - Frau Berger liegt auf Station 4, Zimmer 412. - Kann ich sie jetzt besuchen? - Ja, die Besuchszeit geht noch bis 20 Uhr. Bitte nehmen Sie den Aufzug B im zweiten Flur.",
                translation: "Good day, on which ward is Ms. Berger? - Ms. Berger is on Ward 4, Room 412. - Can I visit her now? - Yes, visiting hours go until 8 PM. Please take elevator B in the second corridor.",
                vocabSupport: [
                    { word: "die Station", translation: "ward / department" },
                    { word: "die Besuchszeit", translation: "visiting hours" },
                    { word: "der Flur", translation: "corridor / hallway" }
                ],
                fillBlank: {
                    sentence: "Die Besuchszeit geht heute noch bis _____ Uhr.",
                    target: "20",
                    options: ["20", "15", "12"]
                },
                role: {
                    speaker1: "Auf welcher Station liegt Frau Berger?",
                    options: ["Frau Berger liegt auf Station 4, Zimmer 412.", "Sie wohnt in Berlin.", "Das Brot ist frisch."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Besuchszeit im Krankenhaus endet um 20 Uhr.",
                    correct: true,
                    explanation: "Richtig: Die Pflegerin sagt: 'die Besuchszeit geht noch bis 20 Uhr.'"
                }
            }
        ]
    },
    fs: {
        title: "Fitnessstudio & Sport",
        titleEN: "Gym & Sports",
        emoji: "🏋️",
        warmup: {
            vocab: [
                { word: "Mitgliedschaft", gender: "die", translation: "membership", example: "Eine Mitgliedschaft kostet 29 Euro im Monat.", exampleEN: "A membership costs 29 euros per month." },
                { word: "Umkleidekabine", gender: "die", translation: "changing room", example: "Die Umkleidekabine für Herren ist im 1. Stock.", exampleEN: "The men's changing room is on the 1st floor." },
                { word: "Probetraining", gender: "das", translation: "trial workout", example: "Kann ich morgen ein kostenloses Probetraining machen?", exampleEN: "Can I do a free trial workout tomorrow?" },
                { word: "Trainer", gender: "der", translation: "fitness trainer", example: "Der Trainer erstellt einen Trainingsplan für mich.", exampleEN: "The trainer is creating a workout plan for me." },
                { word: "Handtuch", gender: "das", translation: "towel", example: "Bitte bringen Sie immer ein sauberes Handtuch mit.", exampleEN: "Please always bring a clean towel." }
            ],
            phrases: [
                { de: "Ich möchte mich im Fitnessstudio anmelden.", en: "I would like to join the gym." },
                { de: "Wo sind die Spinde für die Wertsachen?", en: "Where are the lockers for valuables?" },
                { de: "Um wie viel Uhr beginnt der Yogakurs?", en: "What time does the yoga class start?" },
                { de: "Viel Spaß beim Training!", en: "Have fun with your workout!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_fs_1",
                title: "Anmeldung im Fitnessstudio",
                titleEN: "Gym Membership Registration",
                script: "Guten Tag, FitLife Studio. - Guten Tag, ich möchte mich für ein Probetraining anmelden. - Sehr gerne! Morgen um 18 Uhr hätte unser Trainer Marco Zeit. Passt Ihnen das? - Ja, das passt gut. Muss ich etwas mitbringen? - Bringen Sie bitte Sportkleidung, Hallenschuhe und ein Handtuch mit.",
                translation: "Good day, FitLife Gym. - Good day, I would like to sign up for a trial workout. - Very gladly! Tomorrow at 6 PM our trainer Marco is free. Does that suit you? - Yes, that suits well. Do I need to bring anything? - Please bring sports clothes, indoor shoes, and a towel.",
                vocabSupport: [
                    { word: "das Probetraining", translation: "trial workout" },
                    { word: "die Hallenschuhe", translation: "indoor shoes" },
                    { word: "das Handtuch", translation: "towel" }
                ],
                fillBlank: {
                    sentence: "Unser Trainer Marco hat morgen um _____ Uhr Zeit.",
                    target: "18",
                    options: ["18", "10", "22"]
                },
                role: {
                    speaker1: "Was soll ich zum Probetraining mitbringen?",
                    options: ["Sportkleidung, Hallenschuhe und ein Handtuch.", "Eine Suppe und einen Löffel.", "Einen Reisepass."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Das Probetraining findet morgen um 18 Uhr mit Trainer Marco statt.",
                    correct: true,
                    explanation: "Richtig: Der Mitarbeiter sagt: 'Morgen um 18 Uhr hätte unser Trainer Marco Zeit.'"
                }
            },
            {
                id: "hoer_fs_2",
                title: "Frage zum Kursplan",
                titleEN: "Asking About the Class Schedule",
                script: "Hallo, findet heute Abend der Rückenfit-Kurs statt? - Ja, der Kurs beginnt um 19:15 Uhr im Kursraum 2. - Benötige ich dafür eine Anmeldung? - Nein, kommen Sie einfach 10 Minuten vorher vorbei. Matten sind vorhanden.",
                translation: "Hello, is the back fitness class taking place tonight? - Yes, the class starts at 7:15 PM in class room 2. - Do I need a registration for that? - No, just come by 10 minutes beforehand. Mats are available.",
                vocabSupport: [
                    { word: "der Kursraum", translation: "class room" },
                    { word: "die Matte", translation: "mat" },
                    { word: "vorhanden", translation: "available / present" }
                ],
                fillBlank: {
                    sentence: "Der Kurs beginnt um 19:15 Uhr im Kursraum _____.",
                    target: "2",
                    options: ["2", "5", "1"]
                },
                role: {
                    speaker1: "Muss ich mich für den Rückenfit-Kurs anmelden?",
                    options: ["Nein, kommen Sie einfach 10 Minuten vorher.", "Ja, der Kurs kostet 500 Euro.", "Das Auto steht draußen."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Teilnehmer müssen eigene Matten mitbringen.",
                    correct: false,
                    explanation: "Falsch: Der Mitarbeiter sagt: 'Matten sind vorhanden.'"
                }
            }
        ]
    },
    bb_lib: {
        title: "Bibliothek & Buchhandlung",
        titleEN: "Library & Bookstore",
        emoji: "📚",
        warmup: {
            vocab: [
                { word: "Bibliotheksausweis", gender: "der", translation: "library card", example: "Die Ausleihe ist nur mit Bibliotheksausweis möglich.", exampleEN: "Borrowing is only possible with a library card." },
                { word: "Leihfrist", gender: "die", translation: "borrowing period", example: "Die Leihfrist für Bücher beträgt vier Wochen.", exampleEN: "The borrowing period for books is four weeks." },
                { word: "Mahngebühr", gender: "die", translation: "overdue fee", example: "Wenn Sie zu spät zurückgeben, zahlen Sie eine Mahngebühr.", exampleEN: "If you return late, you pay an overdue fee." },
                { word: "Wörterbuch", gender: "das", translation: "dictionary", example: "Ich suche ein Deutsch-Englisches Wörterbuch.", exampleEN: "I am looking for a German-English dictionary." },
                { word: "Taschenbuch", gender: "das", translation: "paperback book", example: "Das Taschenbuch kostet nur 10 Euro.", exampleEN: "The paperback book costs only 10 euros." }
            ],
            phrases: [
                { de: "Kann ich die Leihfrist online verlängern?", en: "Can I extend the borrowing period online?" },
                { de: "Wo stehen die Sprachlernbücher für A1?", en: "Where are the language learning books for A1?" },
                { de: "Sie dürfen maximal fünf Bücher ausleihen.", en: "You may borrow a maximum of five books." },
                { de: "Viel Spaß beim Lesen!", en: "Enjoy your reading!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_bl_1",
                title: "Einen Bibliotheksausweis beantragen",
                titleEN: "Applying for a Library Card",
                script: "Guten Tag, Stadtbibliothek Leipzig. - Guten Tag, ich möchte mir gerne Bücher ausleihen. Was kostet ein Bibliotheksausweis? - Der Ausweis für Erwachsene kostet 15 Euro pro Jahr. Bringen Sie bitte Ihren Personalausweis mit. - Danke! Wie lange kann ich die Bücher behalten? - Die Leihfrist ist vier Wochen.",
                translation: "Good day, Leipzig Public Library. - Good day, I would like to borrow books. How much is a library card? - The adult card costs 15 euros per year. Please bring your ID card with you. - Thank you! How long can I keep the books? - The borrowing period is four weeks.",
                vocabSupport: [
                    { word: "die Ausleihe", translation: "borrowing" },
                    { word: "der Personalausweis", translation: "ID card" },
                    { word: "die Leihfrist", translation: "borrowing period" }
                ],
                fillBlank: {
                    sentence: "Die Leihfrist für Bücher beträgt _____ Wochen.",
                    target: "vier",
                    options: ["vier", "zwei", "zehn"]
                },
                role: {
                    speaker1: "Wie viel kostet der Bibliotheksausweis pro Jahr?",
                    options: ["Der Ausweis für Erwachsene kostet 15 Euro pro Jahr.", "Ich esse gerne Salat.", "Der Bus hält hier."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Ausweis für Erwachsene kostet 15 Euro im Jahr.",
                    correct: true,
                    explanation: "Richtig: Die Bibliothekarin sagt: 'Der Ausweis für Erwachsene kostet 15 Euro pro Jahr.'"
                }
            },
            {
                id: "hoer_bl_2",
                title: "Ein Buch in der Buchhandlung suchen",
                titleEN: "Searching for a Book at the Bookstore",
                script: "Entschuldigung, haben Sie den neuen Roman von Daniel Kehlmann? - Moment, ich schaue im Computer nach. ... Leider haben wir das Buch aktuell nicht auf Lager, aber wir können es bis morgen bestellen. - Das wäre super! Wann kann ich es abholen? - Morgen ab 10 Uhr liegt es an der Kasse für Sie bereit.",
                translation: "Excuse me, do you have the new novel by Daniel Kehlmann? - One moment, I'll check the computer. ... Unfortunately we don't have the book in stock right now, but we can order it by tomorrow. - That would be great! When can I pick it up? - Tomorrow from 10 AM it will be ready at checkout for you.",
                vocabSupport: [
                    { word: "auf Lager", translation: "in stock" },
                    { word: "bestellen", translation: "to order" },
                    { word: "bereitliegen", translation: "to be ready / waiting" }
                ],
                fillBlank: {
                    sentence: "Morgen ab 10 Uhr liegt das Buch an der _____ bereit.",
                    target: "Kasse",
                    options: ["Kasse", "Post", "Bank"]
                },
                role: {
                    speaker1: "Wann kann ich das bestellte Buch abholen?",
                    options: ["Morgen ab 10 Uhr an der Kasse.", "Ich fahre nach Berlin.", "Die Kaffeemaschine ist kaputt."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Das Buch ist heute direkt im Laden vorrätig.",
                    correct: false,
                    explanation: "Falsch: Der Verkäufer sagt: 'Leider haben wir das Buch aktuell nicht auf Lager.'"
                }
            }
        ]
    },
    km: {
        title: "Kleidung & Mode",
        titleEN: "Clothing & Fashion",
        emoji: "👕",
        warmup: {
            vocab: [
                { word: "Umkleidekabine", gender: "die", translation: "fitting room", example: "Die Umkleidekabine befindet sich hinten links.", exampleEN: "The fitting room is located in the back left." },
                { word: "Kleidergröße", gender: "die", translation: "clothing size", example: "Welche Kleidergröße tragen Sie? Medium oder Large?", exampleEN: "Which clothing size do you wear? Medium or Large?" },
                { word: "Sonderangebot", gender: "das", translation: "special offer / sale", example: "Die Winterjacken sind im Sonderangebot 30% günstiger.", exampleEN: "Winter jackets are 30% cheaper on special offer." },
                { word: "Kassenzettel", gender: "der", translation: "receipt", example: "Behalten Sie den Kassenzettel für einen Umtausch.", exampleEN: "Keep the receipt for an exchange." },
                { word: "Schuhe", gender: "die (Pl.)", translation: "shoes", example: "Passt die Schuhgröße 42 gut?", exampleEN: "Does shoe size 42 fit well?" }
            ],
            phrases: [
                { de: "Haben Sie diesen Pullover auch in Größe M?", en: "Do you also have this sweater in size M?" },
                { de: "Wo kann ich die Hose anprobieren?", en: "Where can I try on the trousers?" },
                { de: "Kann ich das Hemd umtauschen, wenn es nicht passt?", en: "Can I exchange the shirt if it doesn't fit?" },
                { de: "Das steht Ihnen wirklich ausgezeichnet!", en: "That suits you really well!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_km_1",
                title: "Ein Kleidungsstück anprobieren",
                titleEN: "Trying on Clothes",
                script: "Guten Tag, kann ich Ihnen helfen? - Ja, ich suche diese blaue Jeans in Größe 38. - Moment, ich schaue mal. ... Hier ist Größe 38. Die Kabinen sind da drüben. - Danke! ... Die Hose passt perfekt! Was kostet sie? - Die Jeans ist reduziert und kostet nur 39 Euro.",
                translation: "Good day, can I help you? - Yes, I am looking for these blue jeans in size 38. - One moment, let me look. ... Here is size 38. The fitting rooms are over there. - Thank you! ... The trousers fit perfectly! How much are they? - The jeans are reduced and cost only 39 euros.",
                vocabSupport: [
                    { word: "anprobieren", translation: "to try on" },
                    { word: "die Kabine", translation: "fitting room" },
                    { word: "reduziert", translation: "discounted / reduced" }
                ],
                fillBlank: {
                    sentence: "Die Jeans ist reduziert und kostet nur _____ Euro.",
                    target: "39",
                    options: ["39", "100", "5"]
                },
                role: {
                    speaker1: "Wo sind hier die Umkleidekabinen?",
                    options: ["Die Kabinen sind da drüben auf der linken Seite.", "Ich trinke gerne Apfelsaft.", "Der Zug kommt um 12 Uhr."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die blaue Jeans kostet 39 Euro.",
                    correct: true,
                    explanation: "Richtig: Die Verkäuferin sagt: 'Die Jeans ist reduziert und kostet nur 39 Euro.'"
                }
            },
            {
                id: "hoer_km_2",
                title: "Einen Pullover umtauschen",
                titleEN: "Exchanging a Sweater",
                script: "Guten Tag. Ich möchte diesen braunen Pullover umtauschen. Er ist meinem Mann leider zu klein. - Guten Tag. Haben Sie den Kassenbon? - Ja, hier ist der Bon. Ich hätte gerne Größe Large statt Medium. - Kein Problem, hier ist der Pullover in Large.",
                translation: "Good day. I would like to exchange this brown sweater. Unfortunately it's too small for my husband. - Good day. Do you have the receipt? - Yes, here is the receipt. I would like size Large instead of Medium. - No problem, here is the sweater in Large.",
                vocabSupport: [
                    { word: "umtauschen", translation: "to exchange" },
                    { word: "der Kassenbon", translation: "receipt" },
                    { word: "zu klein", translation: "too small" }
                ],
                fillBlank: {
                    sentence: "Ich hätte gerne Größe _____ statt Medium.",
                    target: "Large",
                    options: ["Large", "Small", "Mini"]
                },
                role: {
                    speaker1: "Warum möchten Sie den Pullover umtauschen?",
                    options: ["Er ist meinem Mann leider zu klein.", "Das Haus ist sehr alt.", "Ich gehe heute spazieren."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Kundin bekommt den Pullover in Größe Large.",
                    correct: true,
                    explanation: "Richtig: Die Verkäuferin antwortet: 'Kein Problem, hier ist der Pullover in Large.'"
                }
            }
        ]
    },
    bk: {
        title: "Bäckerei & Konditorei",
        titleEN: "Bakery & Pastry Shop",
        emoji: "🥐",
        warmup: {
            vocab: [
                { word: "Brötchen", gender: "das", translation: "bread roll", example: "Ich nehme vier frische Brötchen.", exampleEN: "I'll take four fresh bread rolls." },
                { word: "Vollkornbrot", gender: "das", translation: "whole grain bread", example: "Ein englisches Vollkornbrot hält lange frisch.", exampleEN: "A whole grain bread stays fresh for a long time." },
                { word: "Kuchenstück", gender: "das", translation: "slice of cake", example: "Ein Stück Käsekuchen zum Mitnehmen, bitte.", exampleEN: "A slice of cheesecake to go, please." },
                { word: "Bäcker", gender: "der", translation: "baker", example: "Der Bäcker backt jeden Morgen ab 4 Uhr.", exampleEN: "The baker bakes every morning from 4 AM." },
                { word: "Brezel", gender: "die", translation: "pretzel", example: "Zwei lauwarme Brezeln kosten 1 Euro 80.", exampleEN: "Two lukewarm pretzels cost 1 euro 80." }
            ],
            phrases: [
                { de: "Ich hätte gerne ein geschnittenes Bauernbrot.", en: "I would like a sliced country bread." },
                { de: "Ist in diesem Kuchen Nüsse enthalten?", en: "Does this cake contain nuts?" },
                { de: "Darf es sonst noch etwas sein?", en: "Would you like anything else?" },
                { de: "Das macht 4 Euro 20 zusammen.", en: "That comes to 4 euros 20 in total." }
            ]
        },
        dialogues: [
            {
                id: "hoer_bk_1",
                title: "Brot und Brötchen kaufen",
                titleEN: "Buying Bread and Rolls",
                script: "Guten Morgen! Was darf es sein? - Guten Morgen, ich hätte gerne ein Bauernbrot. Können Sie das bitte schneiden? - Ja natürlich. Darf es sonst noch etwas sein? - Drei normale Brötchen und zwei Brezeln, bitte. - Das macht zusammen 5 Euro 40.",
                translation: "Good morning! What can I get you? - Good morning, I would like a country bread. Could you please slice it? - Yes of course. Anything else? - Three regular rolls and two pretzels, please. - That comes to 5 euros 40 altogether.",
                vocabSupport: [
                    { word: "das Bauernbrot", translation: "country bread" },
                    { word: "schneiden", translation: "to slice / cut" },
                    { word: "die Brezel", translation: "pretzel" }
                ],
                fillBlank: {
                    sentence: "Drei normale Brötchen und zwei _____.",
                    target: "Brezeln",
                    options: ["Brezeln", "Äpfel", "Pizzen"]
                },
                role: {
                    speaker1: "Darf es sonst noch etwas sein?",
                    options: ["Drei normale Brötchen und zwei Brezeln, bitte.", "Nein, ich fahre mit der U-Bahn.", "Das Wetter ist regnerisch."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde möchte das Bauernbrot geschnitten haben.",
                    correct: true,
                    explanation: "Richtig: Er fragt: 'Können Sie das bitte schneiden?' und die Bäckersfrau sagt 'Ja natürlich.'"
                }
            },
            {
                id: "hoer_bk_2",
                title: "Kaffee und Kuchen bestellen",
                titleEN: "Ordering Coffee and Cake",
                script: "Hallo! Ich möchte ein Stück Apfelkuchen und einen großen Cappuccino. - Gerne. Zum Hieressen oder zum Mitnehmen? - Zum Hieressen, bitte. Haben Sie Hafermilch für den Cappuccino? - Ja, Hafermilch kostet 30 Cent Aufpreis. Nehmen Sie bitte an Tisch 4 Platz.",
                translation: "Hello! I would like a piece of apple cake and a large cappuccino. - Gladly. For here or to go? - For here, please. Do you have oat milk for the cappuccino? - Yes, oat milk costs a 30 cent surcharge. Please take a seat at table 4.",
                vocabSupport: [
                    { word: "der Cappuccino", translation: "cappuccino" },
                    { word: "die Hafermilch", translation: "oat milk" },
                    { word: "der Aufpreis", translation: "surcharge" }
                ],
                fillBlank: {
                    sentence: "Hafermilch kostet 30 Cent _____.",
                    target: "Aufpreis",
                    options: ["Aufpreis", "Rabatt", "Strafe"]
                },
                role: {
                    speaker1: "Möchten Sie den Cappuccino zum Hieressen oder zum Mitnehmen?",
                    options: ["Zum Hieressen, bitte.", "Ich möchte nach Frankfurt.", "Die Hose ist blau."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Gast möchte den Kuchen und Kaffee mitnehmen.",
                    correct: false,
                    explanation: "Falsch: Der Gast antwortet: 'Zum Hieressen, bitte.'"
                }
            }
        ]
    },
    fr: {
        title: "Friseur & Kosmetik",
        titleEN: "Hairdresser & Beauty",
        emoji: "💇",
        warmup: {
            vocab: [
                { word: "Haarschnitt", gender: "der", translation: "haircut", example: "Ein Waschen und Haarschnitt kostet 28 Euro.", exampleEN: "A wash and haircut costs 28 euros." },
                { word: "Spitzen", gender: "die (Pl.)", translation: "hair ends / tips", example: "Bitte schneiden Sie nur zwei Zentimeter von den Spitzen.", exampleEN: "Please cut only two centimeters off the ends." },
                { word: "Föhnen", gender: "das", translation: "blow-drying", example: "Möchten Sie nach dem Waschen auch Föhnen?", exampleEN: "Would you also like blow-drying after washing?" },
                { word: "Terminvereinbarung", gender: "die", translation: "booking an appointment", example: "Die Terminvereinbarung geht schnell am Telefon.", exampleEN: "Booking an appointment is quick on the phone." },
                { word: "Haarfarbe", gender: "die", translation: "hair dye / color", example: "Sie wählt eine dunkle Haarfarbe aus.", exampleEN: "She chooses a dark hair color." }
            ],
            phrases: [
                { de: "Ich möchte mir die Haare schneiden lassen.", en: "I would like to get my hair cut." },
                { de: "Bitte nur ganz leicht nachschneiden.", en: "Please just trim it very lightly." },
                { de: "Ist das Wasser so angenehm?", en: "Is the water comfortable like this?" },
                { de: "Sieht wirklich toll aus!", en: "It looks really great!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_fr_1",
                title: "Termin beim Friseur buchen",
                titleEN: "Booking a Haircut Appointment",
                script: "Friseursalon HaarGenau, Guten Tag. - Guten Tag, ich möchte einen Termin für einen Herrenhaarschnitt vereinbaren. - Haben Sie am Donnerstag um 15 Uhr Zeit? - Donnerstag 15 Uhr klappt prima. Was kostet Waschen und Schneiden? - Das kostet 24 Euro.",
                translation: "HaarGenau Hair Salon, good day. - Good day, I would like to book an appointment for a men's haircut. - Do you have time on Thursday at 3 PM? - Thursday 3 PM works great. How much is wash and cut? - That costs 24 euros.",
                vocabSupport: [
                    { word: "der Herrenhaarschnitt", translation: "men's haircut" },
                    { word: "vereinbaren", translation: "to arrange / book" },
                    { word: "Waschen und Schneiden", translation: "wash and cut" }
                ],
                fillBlank: {
                    sentence: "Waschen und Schneiden kostet _____ Euro.",
                    target: "24",
                    options: ["24", "100", "5"]
                },
                role: {
                    speaker1: "Haben Sie am Donnerstag um 15 Uhr Zeit für den Haarschnitt?",
                    options: ["Donnerstag 15 Uhr klappt prima.", "Ich esse kein Fleisch.", "Die Lampe brennt."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Herrenhaarschnitt inklusive Waschen kostet 24 Euro.",
                    correct: true,
                    explanation: "Richtig: Der Friseur sagt: 'Das kostet 24 Euro.'"
                }
            },
            {
                id: "hoer_fr_2",
                title: "Wünsche beim Friseur besprechen",
                titleEN: "Discussing Haircut Preferences",
                script: "Guten Tag! Wie möchten Sie die Haare heute geschnitten haben? - Bitte an den Seiten etwas kürzer und oben nur die Spitzen schneiden. - Soll ich die Haare auch waschen? - Ja bitte. Und bitte nicht zu viel Haargel am Ende.",
                translation: "Good day! How would you like your hair cut today? - Please a bit shorter on the sides and just trim the ends on top. - Should I wash your hair as well? - Yes please. And please not too much hair gel at the end.",
                vocabSupport: [
                    { word: "die Spitzen", translation: "hair ends" },
                    { word: "kürzer", translation: "shorter" },
                    { word: "das Haargel", translation: "hair gel" }
                ],
                fillBlank: {
                    sentence: "An den Seiten bitte etwas _____.",
                    target: "kürzer",
                    options: ["kürzer", "länger", "bunter"]
                },
                role: {
                    speaker1: "Wie soll ich die Haare heute schneiden?",
                    options: ["Bitte an den Seiten kürzer und oben nur die Spitzen.", "Ich trinke gerne Orangensaft.", "Das Museum schließt um 17 Uhr."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde möchte oben alle Haare komplett kurz rasieren.",
                    correct: false,
                    explanation: "Falsch: Er sagt: 'oben nur die Spitzen schneiden.'"
                }
            }
        ]
    },
    kt: {
        title: "Kino & Theater",
        titleEN: "Cinema & Theater",
        emoji: "🎬",
        warmup: {
            vocab: [
                { word: "Kinovorstellung", gender: "die", translation: "cinema show / screening", example: "Die nächste Kinovorstellung beginnt um 20 Uhr.", exampleEN: "The next cinema screening starts at 8 PM." },
                { word: "Eintrittskarte", gender: "die", translation: "admission ticket", example: "Zwei Eintrittskarten für Reihe 7, bitte.", exampleEN: "Two tickets for row 7, please." },
                { word: "Popcorn", gender: "das", translation: "popcorn", example: "Ein großes süßes Popcorn und zwei Cola.", exampleEN: "A large sweet popcorn and two colas." },
                { word: "Sitzplatz", gender: "der", translation: "seat", example: "Unsere Sitzplätze sind im Parkett in der Mitte.", exampleEN: "Our seats are in the stalls in the middle." },
                { word: "Untertitel", gender: "die (Pl.)", translation: "subtitles", example: "Der Film läuft auf Deutsch mit englischen Untertiteln.", exampleEN: "The film runs in German with English subtitles." }
            ],
            phrases: [
                { de: "Gibt es noch freie Plätze für die Vorstellung um 20 Uhr?", en: "Are there still free seats for the 8 PM show?" },
                { de: "Ich hätte gerne zwei Tickets für Studenten.", en: "I would like two student tickets." },
                { de: "Der Saaleingang ist auf der rechten Seite.", en: "The hall entrance is on the right side." },
                { de: "Viel Spaß beim Film!", en: "Enjoy the movie!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_kt_1",
                title: "Kinokarten an der Kasse kaufen",
                titleEN: "Buying Cinema Tickets at the Box Office",
                script: "Guten Abend, zweimal für den neuen James-Bond-Film um 20:15 Uhr, bitte. - Gerne. Möchten Sie lieber Parkett oder Loge? - Loge bitte, möglichst weit hinten. - Reihe 9, Platz 14 und 15 sind noch frei. Zusammen macht das 22 Euro. - Hier bitte. In welchem Saal läuft der Film? - In Saal 3.",
                translation: "Good evening, twice for the new James Bond film at 8:15 PM, please. - Gladly. Would you prefer stalls or balcony loge? - Balcony loge please, as far back as possible. - Row 9, seats 14 and 15 are still free. Altogether 22 euros. - Here you go. Which hall is the movie playing in? - In Hall 3.",
                vocabSupport: [
                    { word: "die Loge", translation: "balcony loge / premium seat" },
                    { word: "das Parkett", translation: "stalls / standard seat" },
                    { word: "der Saal", translation: "cinema hall / auditorium" }
                ],
                fillBlank: {
                    sentence: "Der Film läuft in Saal _____.",
                    target: "3",
                    options: ["3", "12", "1"]
                },
                role: {
                    speaker1: "Möchten Sie lieber Parkett oder Loge sitzen?",
                    options: ["Loge bitte, möglichst weit hinten.", "Ich möchte ein Brot kaufen.", "Der Regen fällt vom Himmel."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die beiden Kinokarten kosten zusammen 22 Euro.",
                    correct: true,
                    explanation: "Richtig: Der Kassenangestellte sagt: 'Zusammen macht das 22 Euro.'"
                }
            },
            {
                id: "hoer_kt_2",
                title: "Snacks am Kinoschalter",
                titleEN: "Snacks at the Cinema Counter",
                script: "Hallo! Ein mittleres Popcorn und eine Sprite, bitte. - Möchten Sie das Popcorn süß oder salzig? - Süß, bitte. - Das macht 8 Euro 50 zusammen. Haben Sie eine Kinocard für Punkte? - Nein, leider nicht.",
                translation: "Hello! A medium popcorn and a Sprite, please. - Would you like the popcorn sweet or salty? - Sweet, please. - That makes 8 euros 50 in total. Do you have a CinemaCard for points? - No, unfortunately not.",
                vocabSupport: [
                    { word: "süß", translation: "sweet" },
                    { word: "salzig", translation: "salty" },
                    { word: "die Punkte", translation: "reward points" }
                ],
                fillBlank: {
                    sentence: "Ein mittleres Popcorn und eine _____.",
                    target: "Sprite",
                    options: ["Sprite", "Suppe", "Pizza"]
                },
                role: {
                    speaker1: "Möchten Sie das Popcorn lieber süß oder salzig?",
                    options: ["Süß, bitte.", "Ich wohne im dritten Stock.", "Mein Fahrrad ist rot."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Das Popcorn und Getränk kosten 8,50 Euro.",
                    correct: true,
                    explanation: "Richtig: Der Verkäufer sagt: 'Das macht 8 Euro 50 zusammen.'"
                }
            }
        ]
    },
    ht: {
        title: "Haustiere & Tierarzt",
        titleEN: "Pets & Vet",
        emoji: "🐕",
        warmup: {
            vocab: [
                { word: "Tierarztpraxis", gender: "die", translation: "veterinary clinic", example: "Die Tierarztpraxis hat Sprechstunde von 9 bis 12 Uhr.", exampleEN: "The vet clinic has consultation hours from 9 to 12." },
                { word: "Impfung", gender: "die", translation: "vaccination", example: "Der Hund braucht seine jährliche Impfung.", exampleEN: "The dog needs its annual vaccination." },
                { word: "Katzenfutter", gender: "das", translation: "cat food", example: "Ich kaufe drei Dosen Katzenfutter im Supermarkt.", exampleEN: "I buy three cans of cat food at the supermarket." },
                { word: "Hundeleine", gender: "die", translation: "dog leash", example: "Im Stadtpark gilt Leinenpflicht für Hunde.", exampleEN: "Dogs must be kept on a leash in the city park." },
                { word: "Untersuchung", gender: "die", translation: "examination / checkup", example: "Die Untersuchung des Katers verlief problemlos.", exampleEN: "The examination of the cat went without problems." }
            ],
            phrases: [
                { de: "Mein Hund frisst seit gestern nichts mehr.", en: "My dog hasn't eaten anything since yesterday." },
                { de: "Wann ist die nächste Impfung fällig?", en: "When is the next vaccination due?" },
                { de: "Hunde müssen im Bus an der Leine bleiben.", en: "Dogs must stay on a leash on the bus." },
                { de: "Alles ist in Ordnung mit dem Tier.", en: "Everything is fine with the animal." }
            ]
        },
        dialogues: [
            {
                id: "hoer_ht_1",
                title: "Termin in der Tierarztpraxis",
                titleEN: "Appointment at the Vet Clinic",
                script: "Tierarztpraxis Dr. Klein, Guten Tag. - Guten Tag, mein Name ist Sommer. Meine Katze humpelt am rechten Hinterbein. Kann ich heute vorbeikommen? - Ja, kommen Sie um 16:30 Uhr in die Sprechstunde. Bringen Sie bitte den Impfpass der Katze mit.",
                translation: "Dr. Klein Vet Clinic, good day. - Good day, my name is Sommer. My cat is limping on its right hind leg. Can I come by today? - Yes, come to the surgery hours at 4:30 PM. Please bring the cat's vaccination passport.",
                vocabSupport: [
                    { word: "humpeln", translation: "to limp" },
                    { word: "die Sprechstunde", translation: "surgery / office hours" },
                    { word: "der Impfpass", translation: "vaccination passport" }
                ],
                fillBlank: {
                    sentence: "Bringen Sie bitte den _____ der Katze mit.",
                    target: "Impfpass",
                    options: ["Impfpass", "Fahrschein", "Kassenzettel"]
                },
                role: {
                    speaker1: "Meine Katze humpelt. Kann ich heute zum Tierarzt kommen?",
                    options: ["Ja, kommen Sie um 16:30 Uhr in die Sprechstunde.", "Das Flugzeug fliegt nach Italien.", "Ich lerne Spanisch."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Frau Sommer soll um 16:30 Uhr mit der Katze kommen.",
                    correct: true,
                    explanation: "Richtig: Die Helferin sagt: 'kommen Sie um 16:30 Uhr in die Sprechstunde.'"
                }
            },
            {
                id: "hoer_ht_2",
                title: "Tierbedarf im Fachgeschäft kaufen",
                titleEN: "Buying Pet Supplies at the Pet Store",
                script: "Guten Tag, wo finde ich Spezialfutter für junge Hunde? - Im Gang 2 auf der linken Seite. Wir haben heute auch Hundespielzeug im Angebot. - Super, ich nehme noch diesen roten Ball und einen Kausnack mit. Was macht das? - Das macht 14 Euro 20.",
                translation: "Good day, where do I find special food for young dogs? - In aisle 2 on the left side. We also have dog toys on offer today. - Great, I'll take this red ball and a chew snack as well. How much is that? - That comes to 14 euros 20.",
                vocabSupport: [
                    { word: "das Spezialfutter", translation: "special food" },
                    { word: "das Hundespielzeug", translation: "dog toy" },
                    { word: "der Kausnack", translation: "chew snack" }
                ],
                fillBlank: {
                    sentence: "Das Spezialfutter steht im Gang _____.",
                    target: "2",
                    options: ["2", "9", "4"]
                },
                role: {
                    speaker1: "Wo finde ich das Hundefutter?",
                    options: ["Im Gang 2 auf der linken Seite.", "Ich gehe ins Kino.", "Das Brot schmeckt gut."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde kauft einen roten Ball und einen Kausnack.",
                    correct: true,
                    explanation: "Richtig: Er sagt: 'ich nehme noch diesen roten Ball und einen Kausnack mit.'"
                }
            }
        ]
    },
    rw: {
        title: "Reinigung & Wäscherei",
        titleEN: "Dry Cleaning & Laundromat",
        emoji: "🧹",
        warmup: {
            vocab: [
                { word: "Textilreinigung", gender: "die", translation: "dry cleaners", example: "Ich bringe meinen Wintermantel in die Textilreinigung.", exampleEN: "I bring my winter coat to the dry cleaners." },
                { word: "Flecken", gender: "die (Pl.)", translation: "stains", example: "Können Sie diese Rotweinflecken entfernen?", exampleEN: "Can you remove these red wine stains?" },
                { word: "Waschsalon", gender: "der", translation: "laundromat", example: "Im Waschsalon kostet eine Maschinenwäsche 4 Euro.", exampleEN: "In the laundromat a machine wash costs 4 euros." },
                { word: "Abholschein", gender: "der", translation: "pickup receipt ticket", example: "Verlieren Sie nicht Ihren Abholschein!", exampleEN: "Don't lose your pickup receipt ticket!" },
                { word: "Bügeln", gender: "das", translation: "ironing", example: "Das Waschen und Bügeln von fünf Hemden dauert zwei Tage.", exampleEN: "Washing and ironing five shirts takes two days." }
            ],
            phrases: [
                { de: "Wann kann ich die gereinigten Sachen abholen?", en: "When can I pick up the cleaned items?" },
                { de: "Hier ist Ihr Abholschein Nummer 48.", en: "Here is your pickup ticket number 48." },
                { de: "Wo bekomme ich Münzen für die Waschmaschine?", en: "Where do I get coins for the washing machine?" },
                { de: "Die Reinigung dauert bis Freitag.", en: "The cleaning takes until Friday." }
            ]
        },
        dialogues: [
            {
                id: "hoer_rw_1",
                title: "Einen Anzug in die Reinigung bringen",
                titleEN: "Dropping Off a Suit at the Dry Cleaners",
                script: "Guten Tag, ich möchte diesen Herrenanzug reinigen lassen. Auf der Hose ist ein Kaffeefleck. - Guten Tag. Kein Problem, den Kaffeefleck bekommen wir raus. Wann brauchen Sie den Anzug zurück? - Am Donnerstagabend. - Passt, ab Donnerstag 17 Uhr ist der Anzug fertig. Das macht 18 Euro. Hier ist Ihr Abholschein.",
                translation: "Good day, I would like to have this men's suit dry cleaned. There is a coffee stain on the trousers. - Good day. No problem, we'll get the coffee stain out. When do you need the suit back? - On Thursday evening. - Suits fine, from Thursday 5 PM the suit is ready. That comes to 18 euros. Here is your pickup ticket.",
                vocabSupport: [
                    { word: "der Kaffeefleck", translation: "coffee stain" },
                    { word: "der Anzug", translation: "suit" },
                    { word: "der Abholschein", translation: "pickup ticket" }
                ],
                fillBlank: {
                    sentence: "Ab Donnerstag um _____ Uhr ist der Anzug fertig.",
                    target: "17",
                    options: ["17", "10", "8"]
                },
                role: {
                    speaker1: "Wann kann ich meinen gereinigten Anzug abholen?",
                    options: ["Ab Donnerstag um 17 Uhr ist er fertig.", "Das Brot kostet zwei Euro.", "Ich fahre mit dem Auto."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Reinigung des Anzugs kostet 18 Euro.",
                    correct: true,
                    explanation: "Richtig: Die Angestellte sagt: 'Das macht 18 Euro. Hier ist Ihr Abholschein.'"
                }
            },
            {
                id: "hoer_rw_2",
                title: "Bedienung im Waschsalon",
                titleEN: "Operating Machines at the Laundromat",
                script: "Entschuldigung, wie funktioniert die Waschmaschine 5? - Sie werfen zwei 2-Euro-Münzen oben in den Automat und wählen das Waschprogramm 40 Grad. - Wo bekomme ich Waschpulver? - Der Waschmittelautomat steht drüben an der Wand. Eine Portion kostet 50 Cent.",
                translation: "Excuse me, how does washing machine 5 work? - You throw two 2-euro coins into the top slot and select the 40 degree wash cycle. - Where do I get washing powder? - The detergent dispenser is over there on the wall. One portion costs 50 cents.",
                vocabSupport: [
                    { word: "der Automat", translation: "coin dispenser machine" },
                    { word: "das Waschpulver", translation: "washing powder" },
                    { word: "das Waschprogramm", translation: "wash cycle" }
                ],
                fillBlank: {
                    sentence: "Eine Portion Waschpulver kostet _____ Cent.",
                    target: "50",
                    options: ["50", "90", "10"]
                },
                role: {
                    speaker1: "Wo bekomme ich denn das Waschpulver?",
                    options: ["Der Waschmittelautomat steht drüben an der Wand.", "Ich gehe ins Fitnessstudio.", "Das Flugzeug fliegt hoch."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Man muss zwei 2-Euro-Münzen in die Waschmaschine werfen.",
                    correct: true,
                    explanation: "Richtig: Der Mann erklärt: 'Sie werfen zwei 2-Euro-Münzen oben in den Automat.'"
                }
            }
        ]
    },
    fm: {
        title: "Fahrrad & Mobilität",
        titleEN: "Bicycle & Mobility",
        emoji: "🚲",
        warmup: {
            vocab: [
                { word: "Fahrradverleih", gender: "der", translation: "bike rental", example: "Der Fahrradverleih am Bahnhof vermietet auch E-Bikes.", exampleEN: "The bike rental at the train station also rents out e-bikes." },
                { word: "Reifenschaden", gender: "der", translation: "flat tire / tire damage", example: "Mein Hinterrad hat einen Reifenschaden.", exampleEN: "My rear wheel has tire damage." },
                { word: "Fahrradhelm", gender: "der", translation: "bike helmet", example: "Ein passender Fahrradhelm schützt den Kopf.", exampleEN: "A fitting bike helmet protects the head." },
                { word: "Schloss", gender: "das", translation: "bike lock", example: "Schließen Sie das Fahrrad immer mit dem Schloss an.", exampleEN: "Always lock the bicycle with the lock." },
                { word: "Mietgebühr", gender: "die", translation: "rental fee", example: "Die Tages-Mietgebühr für ein normales Rad ist 12 Euro.", exampleEN: "The daily rental fee for a normal bike is 12 euros." }
            ],
            phrases: [
                { de: "Ich möchte ein Fahrrad für einen Tag ausleihen.", en: "I would like to rent a bicycle for one day." },
                { de: "Wie viel kostet die Reparatur des Reifens?", en: "How much is the tire repair?" },
                { de: "Ist ein Fahrradschloss im Preis inbegriffen?", en: "Is a bike lock included in the price?" },
                { de: "Gute Fahrt auf dem Radweg!", en: "Have a good ride on the bike path!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_fm_1",
                title: "Ein Fahrrad leihen",
                titleEN: "Renting a Bike",
                script: "Guten Tag, Fahrradverleih Mobil. - Guten Tag, ich möchte zwei Fahrräder für heute ausleihen. Was kostet das? - Ein Tourenrad kostet 14 Euro pro Tag, ein E-Bike kostet 28 Euro. - Wir nehmen zwei normale Tourenräder. Sind Helme und Schlösser dabei? - Ja, Helme und Schlösser sind kostenlos inklusive.",
                translation: "Good day, Mobil Bike Rental. - Good day, I would like to rent two bicycles for today. How much is that? - A touring bike costs 14 euros per day, an e-bike costs 28 euros. - We'll take two normal touring bikes. Are helmets and locks included? - Yes, helmets and locks are included for free.",
                vocabSupport: [
                    { word: "das Tourenrad", translation: "touring bicycle" },
                    { word: "der Fahrradhelm", translation: "bike helmet" },
                    { word: "inklusive", translation: "included" }
                ],
                fillBlank: {
                    sentence: "Ein Tourenrad kostet _____ Euro pro Tag.",
                    target: "14",
                    options: ["14", "50", "5"]
                },
                role: {
                    speaker1: "Sind Helm und Schloss im Mietpreis enthalten?",
                    options: ["Ja, Helme und Schlösser sind kostenlos inklusive.", "Nein, der Bus fährt um 8 Uhr.", "Ich esse gerne Nudeln."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Für Helme und Schlösser muss man extra bezahlen.",
                    correct: false,
                    explanation: "Falsch: Der Vermieter sagt: 'Ja, Helme und Schlösser sind kostenlos inklusive.'"
                }
            },
            {
                id: "hoer_fm_2",
                title: "Reparatur in der Fahrradwerkstatt",
                titleEN: "Repair at the Bike Workshop",
                script: "Guten Tag, bei meinem Fahrrad ist die Kette abgesprungen und der Hinterreifen ist platt. - Guten Tag. Wir reparieren das bis heute Nachmittag 16 Uhr. - Was kostet die Reparatur ungefähr? - Kette reparieren und neuer Schlauch kosten zusammen 25 Euro.",
                translation: "Good day, on my bike the chain came off and the rear tire is flat. - Good day. We will repair that by 4 PM this afternoon. - How much will the repair cost approximately? - Repairing the chain and a new inner tube cost 25 euros in total.",
                vocabSupport: [
                    { word: "die Kette", translation: "bike chain" },
                    { word: "platt", translation: "flat (tire)" },
                    { word: "der Schlauch", translation: "inner tube" }
                ],
                fillBlank: {
                    sentence: "Die Reparatur ist heute Nachmittag um _____ Uhr fertig.",
                    target: "16",
                    options: ["16", "10", "20"]
                },
                role: {
                    speaker1: "Wann kann ich mein repariertes Fahrrad abholen?",
                    options: ["Bis heute Nachmittag 16 Uhr ist es fertig.", "Ich gehe einkaufen.", "Das Wetter ist windig."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Fahrradreparatur kostet insgesamt 25 Euro.",
                    correct: true,
                    explanation: "Richtig: Der Mechaniker sagt: 'kosten zusammen 25 Euro.'"
                }
            }
        ]
    },
    le: {
        title: "Lieferservice & Essen",
        titleEN: "Food Delivery & Takeaway",
        emoji: "🍕",
        warmup: {
            vocab: [
                { word: "Lieferdienst", gender: "der", translation: "delivery service", example: "Der Lieferdienst bringt das Essen in 30 Minuten.", exampleEN: "The delivery service brings the food in 30 minutes." },
                { word: "Mindestbestellwert", gender: "der", translation: "minimum order value", example: "Der Mindestbestellwert für kostenlose Lieferung ist 15 Euro.", exampleEN: "Minimum order value for free delivery is 15 euros." },
                { word: "Lieferadresse", gender: "die", translation: "delivery address", example: "Nennen Sie bitte Ihre genaue Lieferadresse mit Etage.", exampleEN: "Please state your exact delivery address including floor." },
                { word: "Lieferheld", gender: "der", translation: "delivery courier", example: "Der Lieferheld klingelt gleich an der Haustür.", exampleEN: "The delivery courier will ring the doorbell shortly." },
                { word: "Trinkgeld", gender: "das", translation: "tip", example: "Ich gebe dem Lieferanten zwei Euro Trinkgeld.", exampleEN: "I give the delivery driver two euros tip." }
            ],
            phrases: [
                { de: "Ich möchte eine Pizza Salami und einen Salat bestellen.", en: "I would like to order a salami pizza and a salad." },
                { de: "Wie lange dauert die Lieferung ungefähr?", en: "How long does delivery take approximately?" },
                { de: "Bezahlen Sie online oder bar an der Tür?", en: "Are you paying online or cash at the door?" },
                { de: "Guten Appetit!", en: "Enjoy your meal!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_le_1",
                title: "Pizza am Telefon bestellen",
                titleEN: "Ordering Pizza over the Phone",
                script: "Pizzeria Napoli, Guten Abend. - Guten Abend, ich möchte eine große Pizza Tonno und eine Portion Tiramisu bestellen. - Gerne. Wohin sollen wir liefern? - In die Parkstraße 14 im zweiten Stock bei Wagner. - Gut. Das macht 16 Euro 50. Das Essen ist in 35 Minuten bei Ihnen.",
                translation: "Pizzeria Napoli, good evening. - Good evening, I would like to order a large tuna pizza and a portion of tiramisu. - Gladly. Where should we deliver? - To Parkstraße 14 on the 2nd floor at Wagner. - Good. That makes 16 euros 50. The food will be at your place in 35 minutes.",
                vocabSupport: [
                    { word: "liefern", translation: "to deliver" },
                    { word: "die Portion", translation: "portion / serving" },
                    { word: "die Etage", translation: "floor / story" }
                ],
                fillBlank: {
                    sentence: "Das Essen ist in _____ Minuten bei Ihnen.",
                    target: "35",
                    options: ["35", "90", "5"]
                },
                role: {
                    speaker1: "Wohin dürfen wir Ihre Pizzabestellung liefern?",
                    options: ["In die Parkstraße 14 im zweiten Stock.", "Ich habe Kopfschmerzen.", "Der Zug fährt pünktlich."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Lieferung dauert ungefähr 35 Minuten.",
                    correct: true,
                    explanation: "Richtig: Der Pizzabote am Telefon sagt: 'Das Essen ist in 35 Minuten bei Ihnen.'"
                }
            },
            {
                id: "hoer_le_2",
                title: "Übergabe an der Haustür",
                titleEN: "Handover at the Front Door",
                script: "Guten Abend! Pizzeria Napoli. Hier ist Ihre warme Pizza und das Tiramisu. - Guten Abend! Das ging aber schnell. Was macht das zusammen? - 16 Euro 50. - Hier sind 19 Euro. Stimmt so, der Rest ist für Sie! - Vielen Dank und guten Appetit!",
                translation: "Good evening! Pizzeria Napoli. Here is your warm pizza and tiramisu. - Good evening! That was quick. How much is that altogether? - 16 euros 50. - Here is 19 euros. Keep the change, the rest is for you! - Thank you very much and enjoy your meal!",
                vocabSupport: [
                    { word: "Stimmt so", translation: "keep the change" },
                    { word: "guten Appetit", translation: "enjoy your meal" },
                    { word: "der Rest", translation: "the rest / change" }
                ],
                fillBlank: {
                    sentence: "Hier sind 19 Euro. _____ so!",
                    target: "Stimmt",
                    options: ["Stimmt", "Geht", "Steht"]
                },
                role: {
                    speaker1: "Hier ist Ihre Pizza! Das macht 16 Euro 50.",
                    options: ["Hier sind 19 Euro. Stimmt so, danke!", "Ich möchte den Schrank kaufen.", "Das Wetter ist schön."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Der Kunde gibt dem Lieferanten 2,50 Euro Trinkgeld.",
                    correct: true,
                    explanation: "Richtig: Der Betrag ist 16,50 Euro, der Kunde gibt 19 Euro und sagt 'Stimmt so!'"
                }
            }
        ]
    },
    us: {
        title: "Urlaub & Strand",
        titleEN: "Vacation & Beach",
        emoji: "🏖️",
        warmup: {
            vocab: [
                { word: "Strandkorb", gender: "der", translation: "hooded beach chair", example: "Wir mieten einen Strandkorb für eine Woche an der Ostsee.", exampleEN: "We rent a hooded beach chair for a week at the Baltic Sea." },
                { word: "Sonnenschirm", gender: "der", translation: "parasol / sun umbrella", example: "Unter dem Sonnenschirm ist es angenehm schattig.", exampleEN: "Under the parasol it is comfortably shady." },
                { word: "Bootstour", gender: "die", translation: "boat tour", example: "Die Bootstour rund um die Insel dauert zwei Stunden.", exampleEN: "The boat tour around the island takes two hours." },
                { word: "Sonnencreme", gender: "die", translation: "sunscreen", example: "Vergessen Sie nicht, Sonnencreme mit Schutzfaktor 30 zu benutzen.", exampleEN: "Don't forget to use sunscreen with SPF 30." },
                { word: "Reiseführer", gender: "der", translation: "tourist guide / guidebook", example: "Der Reiseführer zeigt die schönsten Ausflugsziele.", exampleEN: "The guidebook shows the finest excursion destinations." }
            ],
            phrases: [
                { de: "Was kostet die Tagesmiete für einen Strandkorb?", en: "How much is the daily rental for a beach chair?" },
                { de: "Wann legt das Ausflugsschiff ab?", en: "When does the excursion boat depart?" },
                { de: "Wie wird das Wetter morgen am Strand?", en: "How will the weather be tomorrow at the beach?" },
                { de: "Schönen Urlaub!", en: "Have a great vacation!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_us_1",
                title: "Einen Strandkorb mieten",
                titleEN: "Renting a Beach Chair",
                script: "Guten Tag, Strandkorbvermietung Hansen. - Guten Tag, wir möchten für drei Tage einen Strandkorb in der ersten Reihe mieten. - In der ersten Reihe kostet der Korb 12 Euro pro Tag. - Sehr gut. Wir nehmen Korb Nummer 42. - Hier ist der Schlüssel. Kaution ist 5 Euro für den Schlüssel.",
                translation: "Good day, Hansen Beach Chair Rental. - Good day, we would like to rent a beach chair in the front row for three days. - In the front row the chair costs 12 euros per day. - Very good. We'll take chair number 42. - Here is the key. Key deposit is 5 euros.",
                vocabSupport: [
                    { word: "der Strandkorb", translation: "hooded beach chair" },
                    { word: "die Kaution", translation: "deposit" },
                    { word: "der Schlüssel", translation: "key" }
                ],
                fillBlank: {
                    sentence: "Der Strandkorb in der ersten Reihe kostet _____ Euro pro Tag.",
                    target: "12",
                    options: ["12", "50", "2"]
                },
                role: {
                    speaker1: "Was kostet die Tagesmiete für einen Korb in der ersten Reihe?",
                    options: ["In der ersten Reihe kostet der Korb 12 Euro pro Tag.", "Ich esse gerne Kuchen.", "Der Bus kommt pünktlich."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Für den Schlüssel muss man 5 Euro Kaution hinterlegen.",
                    correct: true,
                    explanation: "Richtig: Der Vermieter sagt: 'Kaution ist 5 Euro für den Schlüssel.'"
                }
            },
            {
                id: "hoer_us_2",
                title: "Tickets für die Hafenrundfahrt",
                titleEN: "Tickets for the Harbor Boat Tour",
                script: "Hallo, fahren heute noch Ausflugsschiffe zur Seehundbank? - Ja, das nächste Schiff legt um 14:30 Uhr an Steg 2 ab. Die Fahrt dauert 90 Minuten. - Zwei Erwachsene und ein Kind, bitte. - Das macht 28 Euro zusammen. Einsteigen ist ab 14:15 Uhr.",
                translation: "Hello, are there still excursion ships sailing to the seal bank today? - Yes, the next ship departs at 2:30 PM from Pier 2. The trip takes 90 minutes. - Two adults and one child, please. - That comes to 28 euros altogether. Boarding starts at 2:15 PM.",
                vocabSupport: [
                    { word: "ablegen", translation: "to depart (ship)" },
                    { word: "der Steg", translation: "pier / jetty" },
                    { word: "das Einsteigen", translation: "boarding" }
                ],
                fillBlank: {
                    sentence: "Das nächste Schiff legt um 14:30 Uhr an Steg _____ ab.",
                    target: "2",
                    options: ["2", "10", "7"]
                },
                role: {
                    speaker1: "Wann legt das nächste Ausflugsschiff ab?",
                    options: ["Das nächste Schiff legt um 14:30 Uhr an Steg 2 ab.", "Ich trinke Mineralwasser.", "Die Sonne scheint sehr hell."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Bootstour dauert 90 Minuten.",
                    correct: true,
                    explanation: "Richtig: Die Ticketverkäuferin sagt: 'Die Fahrt dauert 90 Minuten.'"
                }
            }
        ]
    },
    bg_store: {
        title: "Baumarkt & Garten",
        titleEN: "Hardware Store & Garden Center",
        emoji: "🛠️",
        warmup: {
            vocab: [
                { word: "Schraubenzieher", gender: "der", translation: "screwdriver", example: "Ich brauche einen Kreuzschlitz-Schraubenzieher.", exampleEN: "I need a Phillips screwdriver." },
                { word: "Bohrmaschine", gender: "die", translation: "drilling machine / power drill", example: "Sie können eine leistungsstarke Bohrmaschine für 15 Euro am Tag mieten.", exampleEN: "You can rent a powerful drill for 15 euros a day." },
                { word: "Wandfarbe", gender: "die", translation: "wall paint", example: "Wir kaufen weiße Wandfarbe für das Wohnzimmer.", exampleEN: "We buy white wall paint for the living room." },
                { word: "Zimmerpflanze", gender: "die", translation: "houseplant", example: "Diese Zimmerpflanze braucht nur wenig Wasser.", exampleEN: "This houseplant needs only little water." },
                { word: "Dünger", gender: "der", translation: "fertilizer", example: "Der Dünger hilft den Pflanzen im Frühling.", exampleEN: "The fertilizer helps plants in spring." }
            ],
            phrases: [
                { de: "Wo finde ich Schrauben und Dübel?", en: "Where do I find screws and wall plugs?" },
                { de: "Kann man hier auch Werkzeug mieten?", en: "Can one also rent tools here?" },
                { de: "Liefern Sie große Möbel nach Hause?", en: "Do you deliver large furniture to home?" },
                { de: "Frohes Schaffen!", en: "Happy working / good luck with your project!" }
            ]
        },
        dialogues: [
            {
                id: "hoer_bgstore_1",
                title: "Beratung im Baumarkt",
                titleEN: "Advice at the Hardware Store",
                script: "Entschuldigung, wo finde ich Dübel und passende Schrauben für eine Betonwand? - Im Gang 8, Regalboden 3. Welche Größe suchen Sie? - 8 Millimeter für ein schweres Regal. - Dann nehmen Sie diese Spezial-Betondübel. Die Packung kostet 4 Euro 50.",
                translation: "Excuse me, where do I find wall plugs and matching screws for a concrete wall? - In aisle 8, shelf 3. What size are you looking for? - 8 millimeters for a heavy shelf. - Then take these special concrete plugs. The pack costs 4 euros 50.",
                vocabSupport: [
                    { word: "der Dübel", translation: "wall plug / rawlplug" },
                    { word: "die Betonwand", translation: "concrete wall" },
                    { word: "der Regalboden", translation: "shelf level" }
                ],
                fillBlank: {
                    sentence: "Schrauben und Dübel stehen im Gang _____.",
                    target: "8",
                    options: ["8", "1", "20"]
                },
                role: {
                    speaker1: "Wo finde ich Schrauben und Dübel für Beton?",
                    options: ["Im Gang 8, Regalboden 3.", "Ich trinke Kaffee.", "Das Hotel ist groß."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Spezial-Betondübel kosten 4,50 Euro pro Packung.",
                    correct: true,
                    explanation: "Richtig: Der Baumarkt-Mitarbeiter sagt: 'Die Packung kostet 4 Euro 50.'"
                }
            },
            {
                id: "hoer_bgstore_2",
                title: "Pflanzen im Gartencenter kaufen",
                titleEN: "Buying Plants at the Garden Center",
                script: "Guten Tag. Ich suche eine einfache Zimmerpflanze für einen schattigen Raum. - Da empfehle ich eine Efeutüte oder eine Bogenhanf-Pflanze. Beide brauchen sehr wenig Licht und Wasser. - Wunderbar, ich nehme den Bogenhanf. Brauche ich dazu speziellen Dünger? - Ein flüssiger Universaldünger einmal im Monat reicht völlig.",
                translation: "Good day. I am looking for a simple houseplant for a shady room. - I recommend a pothos or a snake plant. Both need very little light and water. - Wonderful, I'll take the snake plant. Do I need special fertilizer for that? - A liquid universal fertilizer once a month is completely sufficient.",
                vocabSupport: [
                    { word: "schattig", translation: "shady" },
                    { word: "der Dünger", translation: "fertilizer" },
                    { word: "reichlich", translation: "abundant / sufficient" }
                ],
                fillBlank: {
                    sentence: "Ein flüssiger Universaldünger _____ im Monat reicht völlig.",
                    target: "einmal",
                    options: ["einmal", "zehnmal", "nullmal"]
                },
                role: {
                    speaker1: "Welche Pflanze eignet sich für einen schattigen Raum?",
                    options: ["Ein Bogenhanf braucht sehr wenig Licht und Wasser.", "Ich fahre nach Italien.", "Das Auto steht im Hof."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Bogenhanf-Pflanze benötigt sehr viel direktes Sonnenlicht.",
                    correct: false,
                    explanation: "Falsch: Der Gärtner sagt: 'Beide brauchen sehr wenig Licht und Wasser.'"
                }
            }
        ]
    },
    wu: {
        title: "Wohnungsbesichtigung & Umzug",
        titleEN: "Apartment Viewing & Moving",
        emoji: "🔑",
        warmup: {
            vocab: [
                { word: "Wohnungsbesichtigung", gender: "die", translation: "apartment viewing", example: "Die Wohnungsbesichtigung ist am Samstag um 11 Uhr.", exampleEN: "The apartment viewing is on Saturday at 11 AM." },
                { word: "Mietkaution", gender: "die", translation: "rental deposit", example: "Die Mietkaution beträgt zwei Monatsmieten.", exampleEN: "The rental deposit amounts to two months' rent." },
                { word: "Kaltmiete", gender: "die", translation: "rent excluding utilities", example: "Die Kaltmiete für die 2-Zimmer-Wohnung ist 550 Euro.", exampleEN: "Basic rent for the 2-room apartment is 550 euros." },
                { word: "Nebenkosten", gender: "die (Pl.)", translation: "utility costs", example: "Die Nebenkosten für Heizung und Wasser betragen 120 Euro.", exampleEN: "Utility costs for heating and water amount to 120 euros." },
                { word: "Mietvertrag", gender: "der", translation: "lease agreement", example: "Wir unterschreiben den Mietvertrag nächste Woche.", exampleEN: "We are signing the lease agreement next week." }
            ],
            phrases: [
                { de: "Wie hoch ist die Warmmiete insgesamt?", en: "How high is the total rent including utilities?" },
                { de: "Sind Haustiere in der Wohnung erlaubt?", en: "Are pets allowed in the apartment?" },
                { de: "Ab wann ist die Wohnung frei?", en: "From when is the apartment available?" },
                { de: "Hier ist meine Selbstauskunft.", en: "Here is my tenant application info sheet." }
            ]
        },
        dialogues: [
            {
                id: "hoer_wu_1",
                title: "Termin zur Wohnungsbesichtigung",
                titleEN: "Apartment Viewing Appointment",
                script: "Guten Tag, Immobilien Huber. - Guten Tag, mein Name ist Richter. Ich interessiere mich für die 2-Zimmer-Wohnung in der Schillerstraße. Ist sie noch frei? - Ja, die Wohnung ist frei ab dem 1. November. Die Besichtigung findet am Freitag um 16 Uhr statt. - Perfekt, wo treffen wir uns? - Direkt vor dem Hauseingang der Schillerstraße 8.",
                translation: "Good day, Huber Real Estate. - Good day, my name is Richter. I am interested in the 2-room apartment on Schillerstraße. Is it still available? - Yes, the apartment is available from November 1st. The viewing takes place on Friday at 4 PM. - Perfect, where do we meet? - Directly in front of the building entrance at Schillerstraße 8.",
                vocabSupport: [
                    { word: "die Besichtigung", translation: "viewing" },
                    { word: "der Hauseingang", translation: "building entrance" },
                    { word: "ab dem 1. November", translation: "from November 1st" }
                ],
                fillBlank: {
                    sentence: "Die Besichtigung findet am Freitag um _____ Uhr statt.",
                    target: "16",
                    options: ["16", "9", "22"]
                },
                role: {
                    speaker1: "Wann findet die Wohnungsbesichtigung statt?",
                    options: ["Am Freitag um 16 Uhr vor der Schillerstraße 8.", "Ich esse ein Brötchen.", "Das Fahrrad ist blau."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Wohnung ist erst ab Januar verfügbar.",
                    correct: false,
                    explanation: "Falsch: Der Makler sagt: 'die Wohnung ist frei ab dem 1. November.'"
                }
            },
            {
                id: "hoer_wu_2",
                title: "Fragen zur Miete und Kaution",
                titleEN: "Questions About Rent and Deposit",
                script: "Herr Huber, wie hoch ist die Kaltmiete für die Wohnung? - Die Kaltmiete ist 600 Euro, dazu kommen 150 Euro Nebenkosten. Die Warmmiete ist also 750 Euro im Monat. - Und wie hoch ist die Kaution? - Die Kaution beträgt zwei Kaltmieten, also 1.200 Euro.",
                translation: "Mr. Huber, how high is the basic rent for the apartment? - The basic rent is 600 euros, plus 150 euros utility costs. So total warm rent is 750 euros per month. - And how high is the deposit? - The deposit is two basic rents, so 1,200 euros.",
                vocabSupport: [
                    { word: "die Kaltmiete", translation: "rent excluding utilities" },
                    { word: "die Warmmiete", translation: "rent including utilities" },
                    { word: "die Kaution", translation: "security deposit" }
                ],
                fillBlank: {
                    sentence: "Die Warmmiete beträgt insgesamt _____ Euro im Monat.",
                    target: "750",
                    options: ["750", "200", "1000"]
                },
                role: {
                    speaker1: "Wie hoch ist die Kaution für diese Wohnung?",
                    options: ["Die Kaution beträgt zwei Kaltmieten, also 1.200 Euro.", "Ich trinke gerne Orangensaft.", "Der Bus fährt nach Hause."],
                    correct: 0
                },
                trueFalse: {
                    statement: "Die Kaltmiete beträgt 600 Euro pro Monat.",
                    correct: true,
                    explanation: "Richtig: Der Makler erklärt: 'Die Kaltmiete ist 600 Euro.'"
                }
            }
        ]
    }
};

let activeHoerenState = {
    topicKey: "hw",
    modeKey: "dictation",
    currentIndex: 0,
    userSelectedOption: null,
    isAnswerChecked: false,
    score: 0
};

function openInteractiveHoerenHub() {
    switchToView("view-interactive-hoeren");
    document.getElementById("hoeren-topic-selection-hub").style.display = "block";
    document.getElementById("hoeren-topic-warmup-hub").style.display = "none";
    document.getElementById("hoeren-practice-workspace").style.display = "none";
    
    renderHoerenTopicsGrid();
}

window.openInteractiveHoerenHub = openInteractiveHoerenHub;

function handleHoerenBackNavigation() {
    if (window.hoerenAudioController && typeof window.hoerenAudioController.stop === "function") {
        window.hoerenAudioController.stop();
    }
    
    const practiceWorkspace = document.getElementById("hoeren-practice-workspace");
    const warmupHub = document.getElementById("hoeren-topic-warmup-hub");
    const topicHub = document.getElementById("hoeren-topic-selection-hub");
    
    if (practiceWorkspace && practiceWorkspace.style.display !== "none") {
        showHoerenWarmupScreen();
    } else if (warmupHub && warmupHub.style.display !== "none") {
        openInteractiveHoerenHub();
    } else {
        switchToView("view-practice-menu");
    }
}
window.handleHoerenBackNavigation = handleHoerenBackNavigation;

function renderHoerenTopicsGrid() {
    const grid = document.getElementById("hoeren-topics-grid");
    if (!grid) return;
    
    let html = "";
    for (const key in INTERACTIVE_HOEREN_DATABASE) {
        const top = INTERACTIVE_HOEREN_DATABASE[key];
        
        html += `
            <div class="glass-panel" style="padding:18px; border-radius:var(--radius-md); border:1px solid var(--color-border); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="font-size:1.6rem; margin-bottom:6px;">${top.emoji}</div>
                    <h4 style="margin:0 0 4px 0; font-size:1.1rem; color:var(--color-primary);">${top.title}</h4>
                    <div style="font-size:0.8rem; color:var(--color-text-muted); font-style:italic; margin-bottom:12px;">${top.titleEN}</div>
                    
                    <div style="font-size:0.8rem; color:var(--color-text); margin-bottom:16px; background:rgba(255,255,255,0.02); padding:8px; border-radius:6px;">
                        🎧 <strong>Dialoge / Dialogues (${top.dialogues.length}):</strong><br>
                        ${top.dialogues.map(d => `<span style="color:var(--color-text-muted);">&bull; ${d.title} <i style="font-size:0.75rem; opacity:0.85;">(${d.titleEN})</i></span>`).join("<br>")}
                    </div>
                </div>

                <div>
                    <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--color-text-muted); margin-bottom:8px;">Übungsmodus wählen / Select Mode:</div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <button class="btn btn-secondary btn-touch" style="padding:8px 6px; font-size:0.75rem; text-align:center; display:flex; flex-direction:column; align-items:center;" onclick="startInteractiveHoerenPractice('${key}', 'dictation')">
                            <span>🎯 Diktat</span>
                            <span style="font-size:0.65rem; color:var(--color-text-muted); font-style:italic;">Dictation</span>
                        </button>
                        <button class="btn btn-secondary btn-touch" style="padding:8px 6px; font-size:0.75rem; text-align:center; display:flex; flex-direction:column; align-items:center;" onclick="startInteractiveHoerenPractice('${key}', 'fillblank')">
                            <span>🔁 Lückentext</span>
                            <span style="font-size:0.65rem; color:var(--color-text-muted); font-style:italic;">Fill-in-Blank</span>
                        </button>
                        <button class="btn btn-secondary btn-touch" style="padding:8px 6px; font-size:0.75rem; text-align:center; display:flex; flex-direction:column; align-items:center;" onclick="startInteractiveHoerenPractice('${key}', 'role')">
                            <span>🗣️ Rollenwechsel</span>
                            <span style="font-size:0.65rem; color:var(--color-text-muted); font-style:italic;">Role Completion</span>
                        </button>
                        <button class="btn btn-secondary btn-touch" style="padding:8px 6px; font-size:0.75rem; text-align:center; display:flex; flex-direction:column; align-items:center;" onclick="startInteractiveHoerenPractice('${key}', 'truefalse')">
                            <span>📋 Richtig/Falsch</span>
                            <span style="font-size:0.65rem; color:var(--color-text-muted); font-style:italic;">True or False</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    grid.innerHTML = html;
}

function showHoerenWarmupScreen(topicKey, modeKey) {
    if (topicKey) activeHoerenState.topicKey = topicKey;
    if (modeKey) activeHoerenState.modeKey = modeKey;
    
    const topic = INTERACTIVE_HOEREN_DATABASE[activeHoerenState.topicKey];
    const modeNames = {
        dictation: "🎯 Diktat / Dictation",
        fillblank: "🔁 Lückentext / Fill-in-Blank",
        role: "🗣️ Rollenwechsel / Role Completion",
        truefalse: "📋 Richtig oder Falsch / True or False"
    };
    
    document.getElementById("hoeren-topic-selection-hub").style.display = "none";
    document.getElementById("hoeren-practice-workspace").style.display = "none";
    document.getElementById("hoeren-topic-warmup-hub").style.display = "block";
    
    document.getElementById("hoeren-warmup-topic-badge").textContent = `${topic.emoji} ${topic.title} (${topic.titleEN})`;
    document.getElementById("hoeren-warmup-mode-badge").textContent = modeNames[activeHoerenState.modeKey];
    
    // Render Vocab Cards
    const vocabGrid = document.getElementById("hoeren-warmup-vocab-grid");
    let vocabHTML = "";
    
    const genderColors = {
        "der": "background:rgba(59,130,246,0.2); color:#60a5fa; border:1px solid #3b82f6;",
        "die": "background:rgba(239,68,68,0.2); color:#f87171; border:1px solid #ef4444;",
        "das": "background:rgba(16,185,129,0.2); color:#34d399; border:1px solid #10b981;",
        "die (Pl.)": "background:rgba(168,85,247,0.2); color:#c084fc; border:1px solid #a855f7;"
    };
    
    if (topic.warmup && topic.warmup.vocab) {
        topic.warmup.vocab.forEach(v => {
            const gStyle = genderColors[v.gender] || "background:rgba(255,255,255,0.1); color:#fff;";
            const fullWord = `${v.gender} ${v.word}`;
            const exEN = v.exampleEN ? `<div style="font-size:0.75rem; color:var(--color-text-muted); opacity:0.85; margin-top:2px;">🌐 ${v.exampleEN}</div>` : '';
            vocabHTML += `
                <div class="glass-panel" style="padding:14px; border-radius:var(--radius-md); border:1px solid var(--color-border); display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <span class="badge" style="${gStyle} font-size:0.75rem; font-weight:700; padding:2px 8px;">${v.gender}</span>
                            <button class="btn btn-secondary btn-touch" style="padding:4px 8px; font-size:0.8rem;" onclick="playSpeech('${fullWord}', 0.85)">🔊 Anhören</button>
                        </div>
                        <div style="font-size:1.1rem; font-weight:700; color:#fff; margin-bottom:2px;">${v.word}</div>
                        <div style="font-size:0.85rem; color:var(--color-primary); font-weight:600; margin-bottom:8px;">${v.translation}</div>
                        <div style="font-size:0.8rem; color:var(--color-text-muted); font-style:italic;">"${v.example}"</div>
                        ${exEN}
                    </div>
                </div>
            `;
        });
    }
    vocabGrid.innerHTML = vocabHTML;
    
    // Render Phrases List
    const phrasesList = document.getElementById("hoeren-warmup-phrases-list");
    let phrasesHTML = "";
    if (topic.warmup && topic.warmup.phrases) {
        topic.warmup.phrases.forEach(p => {
            phrasesHTML += `
                <div class="glass-panel" style="padding:12px 16px; border-radius:var(--radius-sm); border:1px solid var(--color-border); display:flex; justify-content:space-between; align-items:center; gap:12px;">
                    <div>
                        <div style="font-size:0.95rem; font-weight:600; color:#fff; margin-bottom:2px;">"${p.de}"</div>
                        <div style="font-size:0.85rem; color:var(--color-text-muted); font-style:italic;">🌐 ${p.en}</div>
                    </div>
                    <button class="btn btn-secondary btn-touch" style="padding:6px 12px; font-size:0.85rem; white-space:nowrap;" onclick="playSpeech('${p.de}', 0.85)">🔊 Anhören</button>
                </div>
            `;
        });
    }
    phrasesList.innerHTML = phrasesHTML;
}

window.showHoerenWarmupScreen = showHoerenWarmupScreen;

function startInteractiveHoerenPractice(topicKey, modeKey) {
    activeHoerenState = {
        topicKey: topicKey,
        modeKey: modeKey,
        currentIndex: 0,
        userSelectedOption: null,
        isAnswerChecked: false,
        score: 0
    };
    
    showHoerenWarmupScreen(topicKey, modeKey);
}

window.startInteractiveHoerenPractice = startInteractiveHoerenPractice;

function proceedToHoerenPracticeWorkspace() {
    document.getElementById("hoeren-topic-warmup-hub").style.display = "none";
    document.getElementById("hoeren-practice-workspace").style.display = "block";
    
    const topic = INTERACTIVE_HOEREN_DATABASE[activeHoerenState.topicKey];
    const modeNames = {
        dictation: "🎯 Diktat / Dictation",
        fillblank: "🔁 Lückentext / Fill-in-Blank",
        role: "🗣️ Rollenwechsel / Role Completion",
        truefalse: "📋 Richtig oder Falsch / True or False"
    };
    
    document.getElementById("hoeren-active-topic-badge").textContent = `${topic.emoji} ${topic.title} (${topic.titleEN})`;
    document.getElementById("hoeren-active-mode-badge").textContent = modeNames[activeHoerenState.modeKey];
    
    loadInteractiveHoerenQuestion();
}

window.proceedToHoerenPracticeWorkspace = proceedToHoerenPracticeWorkspace;

function loadInteractiveHoerenQuestion() {
    const topic = INTERACTIVE_HOEREN_DATABASE[activeHoerenState.topicKey];
    const dialogue = topic.dialogues[activeHoerenState.currentIndex];
    
    activeHoerenState.userSelectedOption = null;
    activeHoerenState.isAnswerChecked = false;
    
    document.getElementById("hoeren-dialogue-progress").textContent = `Dialog ${activeHoerenState.currentIndex + 1} / ${topic.dialogues.length} (Dialogue ${activeHoerenState.currentIndex + 1} of ${topic.dialogues.length})`;
    
    // Initialize Audio Player with Play/Pause, Slider, and Timer
    initHoerenAudioPlayer(dialogue.script);
    
    const taskContainer = document.getElementById("hoeren-task-container");
    const feedbackContainer = document.getElementById("hoeren-feedback-container");
    const btnSubmit = document.getElementById("btn-hoeren-submit");
    const btnNext = document.getElementById("btn-hoeren-next");
    
    feedbackContainer.style.display = "none";
    btnSubmit.style.display = "inline-block";
    btnNext.style.display = "none";
    
    const mode = activeHoerenState.modeKey;
    
    if (mode === "dictation") {
        taskContainer.innerHTML = `
            <div style="background:rgba(255,255,255,0.02); padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border);">
                <h4 style="margin:0 0 4px 0; color:var(--color-primary);">🎯 Diktat: Hören & Schreiben / Dictation: Listen & Write</h4>
                <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:12px;">Hören Sie das Audio und schreiben Sie den vollen deutschen Text auf:<br><span style="font-style:italic;">Listen to the audio and write down the full German text:</span></p>
                <textarea id="hoeren-dictation-input" rows="4" style="width:100%; padding:12px; border-radius:var(--radius-sm); border:1px solid var(--color-border); background:rgba(0,0,0,0.2); color:#fff; font-family:inherit; font-size:1rem; resize:vertical;" placeholder="Tippen Sie hier den deutschen Text... / Type German text here..."></textarea>
            </div>
        `;
    } else if (mode === "fillblank") {
        const fb = dialogue.fillBlank;
        let optionsHTML = "";
        fb.options.forEach((opt, idx) => {
            optionsHTML += `
                <button class="btn btn-secondary btn-touch hoeren-opt-btn" data-opt="${opt}" style="padding:12px 16px; font-size:1rem; width:100%; text-align:left;" onclick="selectHoerenOption(this, '${opt}')">
                    ${String.fromCharCode(65 + idx)}: ${opt}
                </button>
            `;
        });
        
        taskContainer.innerHTML = `
            <div style="background:rgba(255,255,255,0.02); padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border);">
                <h4 style="margin:0 0 4px 0; color:var(--color-primary);">🔁 Lückentext: Fehlendes Wort ergänzen / Fill-in-Blank: Complete Word</h4>
                <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:12px;">Hören Sie das Audio und wählen Sie das fehlende Wort:<br><span style="font-style:italic;">Listen to the audio and select the missing word:</span></p>
                <div style="font-size:1.1rem; line-height:1.6; background:rgba(255,255,255,0.04); padding:16px; border-radius:8px; border:1px solid var(--color-border); margin-bottom:16px;">
                    ${fb.sentence.replace("_____", "<span style='color:#eab308; font-weight:800; border-bottom:2px dashed #eab308; padding:0 8px;'>[ ? ]</span>")}
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${optionsHTML}
                </div>
            </div>
        `;
    } else if (mode === "role") {
        const r = dialogue.role;
        let optionsHTML = "";
        r.options.forEach((opt, idx) => {
            optionsHTML += `
                <button class="btn btn-secondary btn-touch hoeren-opt-btn" data-idx="${idx}" style="padding:12px 16px; font-size:0.95rem; width:100%; text-align:left;" onclick="selectHoerenOption(this, ${idx})">
                    <strong>Speaker 2 (${String.fromCharCode(65 + idx)}):</strong> ${opt}
                </button>
            `;
        });
        
        taskContainer.innerHTML = `
            <div style="background:rgba(255,255,255,0.02); padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border);">
                <h4 style="margin:0 0 4px 0; color:var(--color-primary);">🗣️ Rollenwechsel: Passende Antwort wählen / Role Completion: Fitting Reply</h4>
                <div style="font-size:1rem; line-height:1.5; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); padding:14px; border-radius:8px; margin-bottom:16px;">
                    <strong style="color:var(--color-primary);">Speaker 1 (Audio):</strong><br>
                    "${r.speaker1}"
                </div>
                <p style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:10px;">Was antwortet Speaker 2? / What does Speaker 2 reply?</p>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${optionsHTML}
                </div>
            </div>
        `;
    } else if (mode === "truefalse") {
        const tf = dialogue.trueFalse;
        taskContainer.innerHTML = `
            <div style="background:rgba(255,255,255,0.02); padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border);">
                <h4 style="margin:0 0 4px 0; color:var(--color-primary);">📋 Richtig oder Falsch? / True or False?</h4>
                <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:12px;">Ist diese Aussage Richtig oder Falsch? / Is this statement True or False?</p>
                <div style="font-size:1.1rem; font-weight:600; line-height:1.5; background:rgba(255,255,255,0.04); padding:16px; border-radius:8px; border:1px solid var(--color-border); margin-bottom:20px; text-align:center;">
                    "${tf.statement}"
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                    <button class="btn btn-touch hoeren-opt-btn" data-tf="true" style="padding:16px; font-size:1.1rem; font-weight:700; background:rgba(16,185,129,0.15); border:2px solid var(--color-success); color:var(--color-success);" onclick="selectHoerenOption(this, true)">
                        🟢 Richtig (True)
                    </button>
                    <button class="btn btn-touch hoeren-opt-btn" data-tf="false" style="padding:16px; font-size:1.1rem; font-weight:700; background:rgba(239,68,68,0.15); border:2px solid #ef4444; color:#ef4444;" onclick="selectHoerenOption(this, false)">
                        🔴 Falsch (False)
                    </button>
                </div>
            </div>
        `;
    }
    
    btnSubmit.onclick = () => checkInteractiveHoerenAnswer();
    btnNext.onclick = () => {
        activeHoerenState.currentIndex++;
        if (activeHoerenState.currentIndex < topic.dialogues.length) {
            loadInteractiveHoerenQuestion();
        } else {
            showInteractiveHoerenSummary();
        }
    };
}

function selectHoerenOption(btnEl, value) {
    if (activeHoerenState.isAnswerChecked) return;
    activeHoerenState.userSelectedOption = value;
    
    document.querySelectorAll(".hoeren-opt-btn").forEach(b => {
        b.style.borderColor = "var(--color-border)";
        b.style.boxShadow = "none";
    });
    
    btnEl.style.borderColor = "var(--color-primary)";
    btnEl.style.boxShadow = "0 0 0 2px var(--color-primary)";
}

window.selectHoerenOption = selectHoerenOption;

function checkInteractiveHoerenAnswer() {
    if (activeHoerenState.isAnswerChecked) return;
    
    const topic = INTERACTIVE_HOEREN_DATABASE[activeHoerenState.topicKey];
    const dialogue = topic.dialogues[activeHoerenState.currentIndex];
    const mode = activeHoerenState.modeKey;
    
    let isCorrect = false;
    let feedbackHTML = "";
    
    if (mode === "dictation") {
        const inputEl = document.getElementById("hoeren-dictation-input");
        const userText = inputEl ? inputEl.value.trim() : "";
        const targetText = dialogue.script.trim();
        
        const userWords = userText.toLowerCase().replace(/[.,?!]/g, "").split(/\s+/).filter(Boolean);
        const targetWords = targetText.toLowerCase().replace(/[.,?!]/g, "").split(/\s+/).filter(Boolean);
        
        let matches = 0;
        targetWords.forEach(w => {
            if (userWords.includes(w)) matches++;
        });
        
        const accuracy = Math.round((matches / (targetWords.length || 1)) * 100);
        isCorrect = (accuracy >= 75);
        if (isCorrect) activeHoerenState.score++;
        
        feedbackHTML = `
            <div class="glass-panel" style="padding:16px; border-radius:var(--radius-md); border:1px solid ${isCorrect ? 'var(--color-success)' : '#ef4444'}; background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'};">
                <h4 style="margin:0 0 8px 0; color:${isCorrect ? 'var(--color-success)' : '#ef4444'};">${isCorrect ? '✅ Ausgezeichnet! / Excellent!' : '🎯 Übung macht den Meister! / Practice makes perfect!'} (Genauigkeit / Accuracy: ${accuracy}%)</h4>
                <p style="margin:0 0 12px 0; font-size:0.9rem;"><strong>Ihr Text / Your Text:</strong> ${userText || "<i>Keine Eingabe / No Input</i>"}</p>
            </div>
        `;
    } else if (mode === "fillblank") {
        if (!activeHoerenState.userSelectedOption) {
            alert("Bitte wählen Sie eine Option! / Please select an option!");
            return;
        }
        isCorrect = (activeHoerenState.userSelectedOption === dialogue.fillBlank.target);
        if (isCorrect) activeHoerenState.score++;
        
        feedbackHTML = `
            <div class="glass-panel" style="padding:16px; border-radius:var(--radius-md); border:1px solid ${isCorrect ? 'var(--color-success)' : '#ef4444'}; background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'};">
                <h4 style="margin:0 0 4px 0; color:${isCorrect ? 'var(--color-success)' : '#ef4444'};">${isCorrect ? '✅ Richtig! / Correct!' : '❌ Nicht ganz richtig... / Not quite correct...'}</h4>
                <p style="margin:0;">Richtiges Wort / Correct word: <strong style="color:var(--color-success); font-size:1.1rem;">${dialogue.fillBlank.target}</strong></p>
            </div>
        `;
    } else if (mode === "role") {
        if (activeHoerenState.userSelectedOption === null) {
            alert("Bitte wählen Sie eine Antwort! / Please select a reply!");
            return;
        }
        isCorrect = (activeHoerenState.userSelectedOption === dialogue.role.correct);
        if (isCorrect) activeHoerenState.score++;
        
        feedbackHTML = `
            <div class="glass-panel" style="padding:16px; border-radius:var(--radius-md); border:1px solid ${isCorrect ? 'var(--color-success)' : '#ef4444'}; background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'};">
                <h4 style="margin:0 0 4px 0; color:${isCorrect ? 'var(--color-success)' : '#ef4444'};">${isCorrect ? '✅ Richtig gewählt! / Correctly Chosen!' : '❌ Falsche Antwort... / Incorrect Reply...'}</h4>
                <p style="margin:0;">Passende Antwort / Fitting reply: <strong>"${dialogue.role.options[dialogue.role.correct]}"</strong></p>
            </div>
        `;
    } else if (mode === "truefalse") {
        if (activeHoerenState.userSelectedOption === null) {
            alert("Bitte wählen Sie Richtig oder Falsch! / Please select True or False!");
            return;
        }
        isCorrect = (activeHoerenState.userSelectedOption === dialogue.trueFalse.correct);
        if (isCorrect) activeHoerenState.score++;
        
        feedbackHTML = `
            <div class="glass-panel" style="padding:16px; border-radius:var(--radius-md); border:1px solid ${isCorrect ? 'var(--color-success)' : '#ef4444'}; background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'};">
                <h4 style="margin:0 0 4px 0; color:${isCorrect ? 'var(--color-success)' : '#ef4444'};">${isCorrect ? '✅ Richtig! / Correct!' : '❌ Falsch... / Incorrect...'}</h4>
                <p style="margin:4px 0 0 0; font-size:0.95rem;">${dialogue.trueFalse.explanation}</p>
            </div>
        `;
    }
    
    activeHoerenState.isAnswerChecked = true;
    
    let vocabChips = dialogue.vocabSupport.map(v => `<span class="badge" style="background:rgba(255,255,255,0.06); color:var(--color-text); font-size:0.85rem; padding:4px 8px;"><strong>${v.word}:</strong> ${v.translation}</span>`).join(" ");
    
    feedbackHTML += `
        <div class="glass-panel" style="margin-top:16px; padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:rgba(0,0,0,0.2);">
            <h4 style="margin:0 0 8px 0; color:var(--color-primary);">📖 Transkript & Übersetzung / Transcript & Translation (Reveal)</h4>
            <div style="font-size:1rem; line-height:1.6; margin-bottom:10px; color:#fff; background:rgba(255,255,255,0.03); padding:10px; border-radius:6px;">
                "${dialogue.script}"
            </div>
            <div style="font-size:0.9rem; color:var(--color-text-muted); font-style:italic; margin-bottom:12px;">
                🌐 ${dialogue.translation}
            </div>
            <div style="border-top:1px dashed var(--color-border); padding-top:10px;">
                <div style="font-size:0.8rem; font-weight:700; color:var(--color-text-muted); margin-bottom:6px;">🔑 Schlüsselwörter / Key Vocab:</div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">${vocabChips}</div>
            </div>
        </div>
    `;
    
    const feedbackContainer = document.getElementById("hoeren-feedback-container");
    feedbackContainer.innerHTML = feedbackHTML;
    feedbackContainer.style.display = "block";
    
    document.getElementById("btn-hoeren-submit").style.display = "none";
    document.getElementById("btn-hoeren-next").style.display = "inline-block";
}

function showInteractiveHoerenSummary() {
    const topic = INTERACTIVE_HOEREN_DATABASE[activeHoerenState.topicKey];
    const taskContainer = document.getElementById("hoeren-task-container");
    const feedbackContainer = document.getElementById("hoeren-feedback-container");
    const btnSubmit = document.getElementById("btn-hoeren-submit");
    const btnNext = document.getElementById("btn-hoeren-next");
    
    feedbackContainer.style.display = "none";
    btnSubmit.style.display = "none";
    btnNext.style.display = "none";
    
    taskContainer.innerHTML = `
        <div class="glass-panel" style="padding:24px; text-align:center; border-radius:var(--radius-lg); background:rgba(16,185,129,0.1); border:1px solid var(--color-success);">
            <div style="font-size:3rem; margin-bottom:8px;">🎉</div>
            <h3 style="margin:0 0 8px 0; color:var(--color-success);">Übung abgeschlossen! / Exercise Completed!</h3>
            <p style="font-size:1.1rem; margin-bottom:16px;">Sie haben <strong>${activeHoerenState.score} / ${topic.dialogues.length}</strong> Punkte erzielt im Thema <strong>${topic.title} (${topic.titleEN})</strong>.<br><span style="font-size:0.9rem; color:var(--color-text-muted); font-style:italic;">You scored ${activeHoerenState.score} of ${topic.dialogues.length} points in ${topic.titleEN}.</span></p>
            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
                <button class="btn btn-primary btn-touch" onclick="startInteractiveHoerenPractice('${activeHoerenState.topicKey}', '${activeHoerenState.modeKey}')">🔄 Nochmal üben / Practice Again</button>
                <button class="btn btn-secondary btn-touch" onclick="openInteractiveHoerenHub()">🏠 Thema oder Modus wechseln / Change Topic or Mode</button>
            </div>
        </div>
    `;
}

// --- AUDIO PLAYER CONTROLLER WITH PLAY/PAUSE, SCRUBBING SLIDER & TIME DISPLAY ---

let hoerenAudioController = {
    generation: 0,
    isPlaying: false,
    isPaused: false,
    hasPendingSeek: false,
    pendingSeekOffset: 0,
    rate: 1.0,
    text: "",
    durationSecs: 0,
    currentSecs: 0,
    timer: null,
    sliderEl: null,
    timeCurEl: null,
    timeTotEl: null,
    btnPlayPause: null,
    iconEl: null,
    textEl: null
};

function initHoerenAudioPlayer(dialogueScript) {
    window.speechSynthesis.cancel();
    if (hoerenAudioController.timer) clearInterval(hoerenAudioController.timer);
    
    hoerenAudioController = {
        isPlaying: false,
        isPaused: false,
        hasPendingSeek: false,
        pendingSeekOffset: 0,
        rate: 1.0,
        text: dialogueScript,
        durationSecs: Math.max(3, Math.round((dialogueScript.split(/\s+/).length / 2.0) + 1)),
        currentSecs: 0,
        timer: null,
        sliderEl: document.getElementById("hoeren-audio-slider"),
        timeCurEl: document.getElementById("hoeren-audio-time-current"),
        timeTotEl: document.getElementById("hoeren-audio-time-total"),
        btnPlayPause: document.getElementById("btn-hoeren-play-pause"),
        iconEl: document.getElementById("hoeren-play-icon"),
        textEl: document.getElementById("hoeren-play-text")
    };
    
    if (hoerenAudioController.sliderEl) {
        hoerenAudioController.sliderEl.value = 0;
        hoerenAudioController.sliderEl.oninput = (e) => {
            seekHoerenAudio(parseFloat(e.target.value));
        };
    }
    
    updateHoerenTimeDisplay(0, hoerenAudioController.durationSecs);
    setHoerenPlayButtonState("stopped");
    
    if (hoerenAudioController.btnPlayPause) {
        hoerenAudioController.btnPlayPause.onclick = () => toggleHoerenAudioPlayPause();
    }
    
    const btnSlow = document.getElementById("btn-hoeren-play-slow");
    if (btnSlow) {
        btnSlow.onclick = () => playHoerenAudioAtRate(0.65);
    }
}

function formatAudioTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateHoerenTimeDisplay(curSecs, totSecs) {
    if (hoerenAudioController.timeCurEl) {
        hoerenAudioController.timeCurEl.textContent = formatAudioTime(curSecs);
    }
    if (hoerenAudioController.timeTotEl) {
        hoerenAudioController.timeTotEl.textContent = formatAudioTime(totSecs);
    }
}

function setHoerenPlayButtonState(state) {
    if (!hoerenAudioController.iconEl || !hoerenAudioController.textEl) return;
    
    if (state === "playing") {
        hoerenAudioController.iconEl.textContent = "⏸️";
        hoerenAudioController.textEl.textContent = "Pausieren / Pause";
    } else if (state === "paused") {
        hoerenAudioController.iconEl.textContent = "▶️";
        hoerenAudioController.textEl.textContent = "Fortsetzen / Resume";
    } else {
        hoerenAudioController.iconEl.textContent = "▶️";
        hoerenAudioController.textEl.textContent = "Abspielen / Play";
    }
}

function toggleHoerenAudioPlayPause() {
    if (hoerenAudioController.isPlaying && !hoerenAudioController.isPaused) {
        window.speechSynthesis.pause();
        hoerenAudioController.isPaused = true;
        setHoerenPlayButtonState("paused");
    } else if (hoerenAudioController.isPaused) {
        if (hoerenAudioController.hasPendingSeek) {
            const offset = hoerenAudioController.pendingSeekOffset;
            hoerenAudioController.hasPendingSeek = false;
            playHoerenAudioAtRate(hoerenAudioController.rate || 1.0, offset);
        } else {
            // Mobile: speechSynthesis.resume() produces no sound.
            // Restart ~2s before the pause point for a clean entry.
            const secBack = 2;
            const resumeSecs = Math.max(0, hoerenAudioController.currentSecs - secBack);
            const fullText = hoerenAudioController.text || "";
            const pct = resumeSecs / (hoerenAudioController.durationSecs || 1);
            const charIdx = Math.floor(fullText.length * pct);
            let spaceIdx = fullText.indexOf(" ", charIdx);
            if (spaceIdx === -1) spaceIdx = charIdx;
            // Force full-text restart from offset so timer tracks correctly
            playHoerenAudioAtRate(hoerenAudioController.rate || 1.0, spaceIdx, resumeSecs);
        }
    } else {
        const offset = hoerenAudioController.hasPendingSeek ? hoerenAudioController.pendingSeekOffset : 0;
        hoerenAudioController.hasPendingSeek = false;
        playHoerenAudioAtRate(hoerenAudioController.rate || 1.0, offset);
    }
}

function playHoerenAudioAtRate(rate, offsetCharIndex = 0, startSecsOverride = null) {
    window.speechSynthesis.cancel();
    if (hoerenAudioController.timer) clearInterval(hoerenAudioController.timer);
    
    const gen = ++hoerenAudioController.generation;
    hoerenAudioController.rate = rate;
    hoerenAudioController.isPlaying = true;
    hoerenAudioController.isPaused = false;
    hoerenAudioController.hasPendingSeek = false;
    setHoerenPlayButtonState("playing");
    
    const textToSpeak = offsetCharIndex > 0 ? hoerenAudioController.text.slice(offsetCharIndex) : hoerenAudioController.text;
    const wordCount = textToSpeak.split(/\s+/).length;
    const estSecs = Math.max(1, Math.round((wordCount / (2.0 * rate)) + 0.5));
    
    if (startSecsOverride !== null) {
        // Resume case: keep existing duration, set position to override
        hoerenAudioController.currentSecs = startSecsOverride;
    } else if (offsetCharIndex === 0) {
        hoerenAudioController.durationSecs = Math.max(3, Math.round((hoerenAudioController.text.split(/\s+/).length / (2.0 * rate)) + 1));
        hoerenAudioController.currentSecs = 0;
    }
    
    const startSecs = hoerenAudioController.currentSecs;
    const stepMs = 200;
    const totalSteps = Math.max(10, estSecs * 5);
    let stepCount = 0;
    
    speakText(
        textToSpeak,
        () => {},
        () => {
            if (hoerenAudioController.generation !== gen) return;
            if (hoerenAudioController.timer) clearInterval(hoerenAudioController.timer);
            hoerenAudioController.isPlaying = false;
            hoerenAudioController.isPaused = false;
            hoerenAudioController.hasPendingSeek = false;
            hoerenAudioController.currentSecs = 0;
            if (hoerenAudioController.sliderEl) hoerenAudioController.sliderEl.value = 100;
            updateHoerenTimeDisplay(hoerenAudioController.durationSecs, hoerenAudioController.durationSecs);
            setHoerenPlayButtonState("stopped");
            setTimeout(() => {
                if (!hoerenAudioController.isPlaying) {
                    if (hoerenAudioController.sliderEl) hoerenAudioController.sliderEl.value = 0;
                    updateHoerenTimeDisplay(0, hoerenAudioController.durationSecs);
                }
            }, 800);
        },
        () => {
            if (hoerenAudioController.generation !== gen) return;
            setHoerenPlayButtonState("stopped");
            hoerenAudioController.isPlaying = false;
            hoerenAudioController.isPaused = false;
        },
        rate
    );
    
    hoerenAudioController.timer = setInterval(() => {
        if (hoerenAudioController.isPlaying && !hoerenAudioController.isPaused) {
            stepCount++;
            const pct = Math.min(1.0, stepCount / totalSteps);
            hoerenAudioController.currentSecs = Math.min(hoerenAudioController.durationSecs, startSecs + (pct * estSecs));
            
            const totalPct = Math.min(100, Math.round((hoerenAudioController.currentSecs / (hoerenAudioController.durationSecs || 1)) * 100));
            if (hoerenAudioController.sliderEl) hoerenAudioController.sliderEl.value = totalPct;
            updateHoerenTimeDisplay(hoerenAudioController.currentSecs, hoerenAudioController.durationSecs);
        }
    }, stepMs);
}

function seekHoerenAudio(pct) {
    const fullText = hoerenAudioController.text;
    if (!fullText) return;
    
    const targetCharIdx = Math.floor(fullText.length * (pct / 100));
    let spaceIdx = fullText.indexOf(" ", targetCharIdx);
    if (spaceIdx === -1) spaceIdx = targetCharIdx;
    
    hoerenAudioController.pendingSeekOffset = spaceIdx;
    hoerenAudioController.hasPendingSeek = true;
    
    hoerenAudioController.currentSecs = (pct / 100) * hoerenAudioController.durationSecs;
    updateHoerenTimeDisplay(hoerenAudioController.currentSecs, hoerenAudioController.durationSecs);
    
    if (hoerenAudioController.isPlaying && !hoerenAudioController.isPaused) {
        hoerenAudioController.hasPendingSeek = false;
        playHoerenAudioAtRate(hoerenAudioController.rate || 1.0, spaceIdx);
    } else {
        window.speechSynthesis.cancel();
        hoerenAudioController.isPaused = true;
        setHoerenPlayButtonState(pct === 0 ? "stopped" : "paused");
    }
}


