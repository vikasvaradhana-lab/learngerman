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
    let word = text.toLowerCase();
    
    // sequential regex replacements for German rules
    word = word.replace(/sch/g, "sh");
    word = word.replace(/ch/g, "kh");
    word = word.replace(/\bsp/g, "shp");
    word = word.replace(/\bst/g, "sht");
    word = word.replace(/qu/g, "kv");
    word = word.replace(/ph/g, "f");
    word = word.replace(/ck/g, "k");
    word = word.replace(/tz/g, "ts");
    word = word.replace(/z/g, "ts");
    word = word.replace(/ß/g, "s");
    word = word.replace(/v/g, "f");
    word = word.replace(/w/g, "v");
    word = word.replace(/j/g, "y");
    
    // Diphthongs
    word = word.replace(/ei/g, "ai");
    word = word.replace(/ie/g, "ee");
    word = word.replace(/au/g, "ow");
    word = word.replace(/eu/g, "oy");
    word = word.replace(/äu/g, "oy");
    
    // Umlauts
    word = word.replace(/ä/g, "ae");
    word = word.replace(/ö/g, "oe");
    word = word.replace(/ü/g, "ue");
    
    // Final combinations
    word = word.replace(/ig\b/g, "ikh");
    word = word.replace(/er\b/g, "er");
    
    // Voiced s before vowel
    word = word.replace(/\bs(?=[aeiouäöü])/g, "z");
    word = word.replace(/([aeiouäöüy])s(?=[aeiouäöüy])/g, "$1z");
    
    // Short vowels and vowel length approximations
    word = word.replace(/u/g, "oo");
    word = word.replace(/a/g, "ah");
    
    return word;
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
            { word: "tablet", question: "Was bedeutet 'die Tablette'?", options: ["Table", "Pill/Tablet", "Teacup"], correct: 1, explanation: "die Tablette means Pill/Tablet." },
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
            { question: "Was bedeutet 'die Tafel'?", options: [" black board", "table", "chair"], correct: 0, explanation: "die Tafel means blackboard." }
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
    }
];

// --- 5. GERMAN LISTENING STORY LIBRARY DATABASE ---
const LISTENING_STORIES_DATABASE = [
    {
        id: "st_family",
        title: "Meine Familie in Deutschland",
        text: "Hallo, ich heiße Thomas. Ich wohne mit meiner Familie in Frankfurt. Meine Frau heißt Julia. Sie ist Lehrerin von Beruf und arbeitet an einer Grundschule. Wir haben zwei Kinder: einen Sohn und eine Tochter. Unser Sohn heißt Lucas und ist acht Jahre alt. Unsere Tochter heißt Emma und ist erst fünf. Am Wochenende gehen wir oft in den Park oder besuchen meine Großeltern. Wir essen gerne Pizza und spielen Spiele.",
        translation: "Hello, my name is Thomas. I live with my family in Frankfurt. My wife is named Julia. She is a teacher by profession and works at an elementary school. We have two children: a son and a daughter. Our son is named Lucas and is eight years old. Our daughter is named Emma and is only five. On weekends we often go to the park or visit my grandparents. We like to eat pizza and play games.",
        vocab: [
            { word: "die Familie", translation: "Family" },
            { word: "die Kinder", translation: "Children" },
            { word: "die Großeltern", translation: "Grandparents" },
            { word: "das Wochenende", translation: "Weekend" }
        ],
        questions: [
            { question: "Wo wohnt Thomas mit seiner Familie?", options: ["In Berlin", "In Frankfurt", "In München"], correct: 1, explanation: "Thomas says: 'Ich wohne mit meiner Familie in Frankfurt.'" },
            { question: "Was ist Julia von Beruf?", options: ["Ärztin", "Lehrerin", "Verkäuferin"], correct: 1, explanation: "Julia is a teacher: 'Sie ist Lehrerin von Beruf.'" },
            { question: "Wie viele Kinder haben Thomas und Julia?", options: ["Ein Kind", "Zwei Kinder", "Drei Kinder"], correct: 1, explanation: "They have a son and a daughter: 'Wir haben zwei Kinder.'" },
            { question: "Wie alt ist der Sohn Lucas?", options: ["Fünf Jahre", "Acht Jahre", "Zehn Jahre"], correct: 1, explanation: "Lucas is eight: 'Lucas ... ist acht Jahre alt.'" },
            { question: "Was machen sie oft am Wochenende?", options: ["Sie gehen in den Park", "Sie arbeiten", "Sie fliegen nach Indien"], correct: 0, explanation: "On weekends they go to the park: 'Am Wochenende gehen wir oft in den Park.'" }
        ]
    },
    {
        id: "st_shopping",
        title: "Einkaufen auf dem Markt",
        text: "Guten Tag, Herr Becker! Was möchten Sie heute kaufen? - Guten Tag, Frau Mayer. Ich brauche heute frisches Gemüse. Haben Sie Tomaten und Kartoffeln? - Ja, natürlich. Die Tomaten kosten zwei Euro das Kilo, und die Kartoffeln kosten ein Euro fünfzig. - Gut, ich nehme ein Kilo Tomaten und zwei Kilo Kartoffeln. Haben Sie auch Obst? - Ja, die Bananen sind heute im Angebot. - Wunderbar, geben Sie mir bitte auch vier Bananen. Wie viel macht das zusammen? - Das macht genau sechs Euro.",
        translation: "Good day, Mr. Becker! What would you like to buy today? - Good day, Mrs. Mayer. I need fresh vegetables today. Do you have tomatoes and potatoes? - Yes, of course. The tomatoes cost two euros a kilo, and the potatoes cost one euro fifty. - Good, I'll take a kilo of tomatoes and two kilos of potatoes. Do you have fruit too? - Yes, bananas are on sale today. - Wonderful, please give me four bananas too. How much does that make altogether? - That makes exactly six euros.",
        vocab: [
            { word: "einkaufen", translation: "To shop" },
            { word: "das Gemüse", translation: "Vegetables" },
            { word: "das Obst", translation: "Fruit" },
            { word: "zusammen", translation: "Altogether" }
        ],
        questions: [
            { question: "Was kauft Herr Becker auf dem Markt?", options: ["Fleisch und Milch", "Gemüse und Obst", "Brot und Käse"], correct: 1, explanation: "He buys tomatoes, potatoes (Gemüse) and bananas (Obst)." },
            { question: "Wie viel kosten die Tomaten pro Kilo?", options: ["Ein Euro fünfzig", "Zwei Euro", "Drei Euro"], correct: 1, explanation: "The seller says: 'Die Tomaten kosten zwei Euro das Kilo.'" },
            { question: "Wie viele Bananen kauft Herr Becker?", options: ["Zwei", "Drei", "Vier"], correct: 2, explanation: "He asks for: 'vier Bananen'." },
            { question: "Wie viel bezahlt Herr Becker insgesamt?", options: ["Fünf Euro", "Sechs Euro", "Acht Euro"], correct: 1, explanation: "The seller says: 'Das macht genau sechs Euro.'" },
            { question: "Was bedeutet das Wort 'Gemüse'?", options: ["Vegetables", "Fruits", "Sweets"], correct: 0, explanation: "Gemüse means Vegetables." }
        ]
    },
    {
        id: "st_travel",
        title: "Eine Reise mit dem Zug",
        text: "Guten Tag. Ich möchte morgen nach Hamburg reisen. Wann fährt der nächste Zug? - Der ICE nach Hamburg fährt um neun Uhr vierzig von Gleis drei ab. - Muss ich auf der Reise umsteigen? - Nein, das ist eine direkte Verbindung. Der Zug kommt um dreizehr Uhr in Hamburg an. - Sehr gut. Was kostet eine Fahrkarte in der zweiten Klasse? - Die Fahrkarte kostet fünfzig Euro. - Gut, ich kaufe das Ticket. Kann ich mit Kreditkarte bezahlen? - Ja, natürlich.",
        translation: "Good day. I would like to travel to Hamburg tomorrow. When does the next train leave? - The ICE to Hamburg departs at nine forty from platform three. - Do I have to transfer on the journey? - No, that is a direct connection. The train arrives in Hamburg at one PM. - Very good. How much is a ticket in second class? - The ticket costs fifty euros. - Good, I'll buy the ticket. Can I pay with a credit card? - Yes, of course.",
        vocab: [
            { word: "reisen", translation: "To travel" },
            { word: "umsteigen", translation: "To transfer / change trains" },
            { word: "direkt", translation: "Direct" },
            { word: "die Klasse", translation: "Class" }
        ],
        questions: [
            { question: "Wohin möchte der Mann reisen?", options: ["Nach Berlin", "Nach Hamburg", "Nach München"], correct: 1, explanation: "He says: 'Ich möchte morgen nach Hamburg reisen.'" },
            { question: "Wann fährt der Zug ab?", options: ["Um 9:00 Uhr", "Um 9:40 Uhr", "Um 10:00 Uhr"], correct: 1, explanation: "The officer says: 'um neun Uhr vierzig'." },
            { question: "Muss der Fahrgast umsteigen?", options: ["Ja, in Hannover", "Nein, es ist direkt", "Ja, zweimal"], correct: 1, explanation: "The officer says: 'Nein, das ist eine direkte Verbindung.'" },
            { question: "Wie viel kostet die Fahrkarte?", options: ["30 Euro", "50 Euro", "60 Euro"], correct: 1, explanation: "The ticket is 50 euros: 'fünfzig Euro'." },
            { question: "Wie bezahlt der Mann?", options: ["In bar (cash)", "Mit Kreditkarte", "Er bezahlt online"], correct: 1, explanation: "He asks: 'Kann ich mit Kreditkarte bezahlen?' -> 'Ja, natürlich.'" }
        ]
    },
    {
        id: "st_school",
        title: "Im Deutschkurs",
        text: "Hallo, ich bin Maria und komme aus Spanien. Ich lerne jetzt Deutsch in Berlin. Mein Kurs beginnt jeden Tag um neun Uhr morgens und endet um zwölf Uhr dreißig. Wir sind fünfzehn Schüler im Kurs aus verschiedenen Ländern wie Indien, Brasilien und China. Unser Lehrer heißt Herr Schmidt und ist sehr nett. Wir lernen Grammatik, sprechen viel und schreiben kleine E-Mails. In der Pause trinken wir Kaffee und essen Kekse. Nach dem Unterricht mache ich meine Hausaufgaben in der Bibliothek.",
        translation: "Hello, I am Maria and I come from Spain. I am learning German in Berlin now. My course starts every day at nine o'clock in the morning and ends at twelve-thirty. We are fifteen students in the course from different countries like India, Brazil, and China. Our teacher is named Mr. Schmidt and is very nice. We learn grammar, speak a lot, and write small emails. During the break we drink coffee and eat cookies. After class I do my homework in the library.",
        vocab: [
            { word: "der Kurs", translation: "Course" },
            { word: "verschieden", translation: "Different" },
            { word: "der Unterricht", translation: "Class / Instruction" },
            { word: "die Pause", translation: "Break" }
        ],
        questions: [
            { question: "Woher kommt Maria?", options: ["Aus Indien", "Aus Spanien", "Aus Deutschland"], correct: 1, explanation: "She says: 'ich bin Maria und komme aus Spanien.'" },
            { question: "Wie lange dauert der Deutschkurs jeden Tag?", options: ["Zwei Stunden", "Drei Stunden und dreißig Minuten", "Fünf Stunden"], correct: 1, explanation: "It runs from 9:00 to 12:30, which is 3.5 hours." },
            { question: "Wie viele Schüler sind im Kurs?", options: ["Zehn Schüler", "Fünfzehn Schüler", "Zwanzig Schüler"], correct: 1, explanation: "She says: 'Wir sind fünfzehn Schüler im Kurs.'" },
            { question: "Was macht Maria nach dem Unterricht?", options: ["Sie geht schlafen", "Sie macht Hausaufgaben in der Bibliothek", "Sie geht arbeiten"], correct: 1, explanation: "She says: 'mache ich meine Hausaufgaben in der Bibliothek.'" },
            { question: "Was bedeutet das Wort 'verschieden'?", options: ["Different", "Similar", "Boring"], correct: 0, explanation: "verschieden means Different." }
        ]
    },
    {
        id: "st_work",
        title: "Der Arbeitstag von Peter",
        text: "Peter arbeitet als Ingenieur bei einer Autofirma in Stuttgart. Sein Arbeitstag beginnt früh. Er steht um sechs Uhr auf, trinkt einen Kaffee und fährt um sieben Uhr mit dem Bus zur Arbeit. Im Büro arbeitet er viel am Computer und schreibt E-Mails an Kollegen. Um zwölf Uhr macht er Mittagspause in der Kantine. Er isst ein Schnitzel mit Salat. Um siebzehn Uhr endet die Arbeit. Am Abend geht Peter im Supermarkt einkaufen oder macht Sport im Fitnessstudio. Er geht um zweiundzwanzig Uhr schlafen.",
        translation: "Peter works as an engineer at a car company in Stuttgart. His workday starts early. He gets up at six AM, drinks a coffee, and goes to work by bus at seven AM. In the office, he works a lot on the computer and writes emails to colleagues. At twelve o'clock, he takes a lunch break in the canteen. He eats a schnitzel with salad. Work ends at five PM. In the evening, Peter goes shopping at the supermarket or does sports at the gym. He goes to sleep at ten PM.",
        vocab: [
            { word: "der Ingenieur", translation: "Engineer" },
            { word: "der Arbeitstag", translation: "Workday" },
            { word: "die Kantine", translation: "Canteen" },
            { word: "schlafen", translation: "To sleep" }
        ],
        questions: [
            { question: "Als was arbeitet Peter?", options: ["Lehrer", "Ingenieur", "Verkäufer"], correct: 1, explanation: "Peter works as an engineer: 'Peter arbeitet als Ingenieur...'" },
            { question: "Wie fährt Peter zur Arbeit?", options: ["Mit dem Auto", "Mit dem Bus", "Mit der U-Bahn"], correct: 1, explanation: "He goes by bus: 'fährt um sieben Uhr mit dem Bus zur Arbeit.'" },
            { question: "Wann macht Peter Mittagspause?", options: ["Um 11:30 Uhr", "Um 12:00 Uhr", "Um 13:00 Uhr"], correct: 1, explanation: "Lunch is at 12:00: 'Um zwölf Uhr macht er Mittagspause...'" },
            { question: "Wann endet Peters Arbeitstag?", options: ["Um 16:00 Uhr", "Um 17:00 Uhr (siebzehn Uhr)", "Um 18:00 Uhr"], correct: 1, explanation: "Work ends at 17:00: 'Um siebzehn Uhr endet die Arbeit.'" },
            { question: "Was macht Peter am Abend?", options: ["Er lernt Deutsch", "Er kauft im Supermarkt ein oder macht Sport", "Er arbeitet im Büro"], correct: 1, explanation: "He shops or does sports: 'geht Peter im Supermarkt einkaufen oder macht Sport...'" }
        ]
    },
    {
        id: "st_doctor",
        title: "Ein Besuch beim Arzt",
        text: "Herr Schmidt hat seit drei Tagen starke Halsschmerzen und Fieber. Er fühlt sich schlapp und kann nicht arbeiten. Er ruft in der Arztpraxis an und bekommt einen Termin für zehn Uhr dreißig. Der Arzt untersucht Herrn Schmidt, schaut in seinen Hals und misst das Fieber. Er sagt: 'Sie haben eine Grippe. Sie müssen sich ausruhen.' Der Arzt gibt ihm ein Rezept für Tabletten und eine Krankmeldung für den Arbeitgeber für fünf Tage. Herr Schmidt kauft die Tabletten in der Apotheke nebenan.",
        translation: "Mr. Schmidt has had a severe sore throat and fever for three days. He feels weak and cannot work. He calls the doctor's office and gets an appointment for ten-thirty. The doctor examines Mr. Schmidt, looks at his throat, and measures the fever. He says: 'You have the flu. You must rest.' The doctor gives him a prescription for tablets and a sick note for his employer for five days. Mr. Schmidt buys the tablets at the pharmacy next door.",
        vocab: [
            { word: "die Praxis", translation: "Doctor's office" },
            { word: "die Grippe", translation: "Flu" },
            { word: "die Krankmeldung", translation: "Sick note" },
            { word: "ausruhen", translation: "To rest / relax" }
        ],
        questions: [
            { question: "Seit wie vielen Tagen ist Herr Schmidt krank?", options: ["Seit einem Tag", "Seit drei Tagen", "Seit einer Woche"], correct: 1, explanation: "He has been sick for three days: 'seit drei Tagen Halsschmerzen und Fieber'." },
            { question: "Für wie viel Uhr hat Herr Schmidt einen Termin?", options: ["Um 9:00 Uhr", "Um 10:30 Uhr (zehn Uhr dreißig)", "Um 11:00 Uhr"], correct: 1, explanation: "His appointment is at 10:30: 'einen Termin für zehn Uhr dreißig'." },
            { question: "Welche Krankheit diagnostiziert der Arzt?", options: ["Einen Schnupfen", "Eine Grippe", "Bauchschmerzen"], correct: 1, explanation: "The doctor says: 'Sie haben eine Grippe.'" },
            { question: "Für wie viele Tage bekommt er die Krankmeldung?", options: ["Für drei Tage", "Für fünf Tage", "Für eine Woche"], correct: 1, explanation: "He gets a note for five days: 'Krankmeldung... für fünf Tage'." },
            { question: "Wo kauft Herr Schmidt die verschriebenen Tabletten?", options: ["Im Supermarkt", "In der Apotheke nebenan", "Online"], correct: 1, explanation: "He buys them at the pharmacy next door: 'in der Apotheke nebenan'." }
        ]
    },
    {
        id: "st_restaurant",
        title: "Ein Abendessen im Restaurant",
        text: "Sarah und Daniel gehen am Samstagabend in ein italienisches Restaurant. Sie haben einen Tisch reserviert. Der Kellner begrüßt sie freundlich und bringt die Speisekarte. Sarah bestellt eine Pizza mit Gemüse und ein Mineralwasser. Daniel nimmt Nudeln mit Fisch und tränkt ein großes Bier. Das Restaurant ist voll und es gibt leise Musik. Das Essen schmeckt hervorragend. Zum Schluss sagt Daniel zum Kellner: 'Zahlen, bitte!' Daniel bezahlt die Rechnung mit Karte und gibt fünf Euro Trinkgeld.",
        translation: "Sarah and Daniel go to an Italian restaurant on Saturday evening. They have reserved a table. The waiter greets them friendly and brings the menu. Sarah orders a pizza with vegetables and a mineral water. Daniel takes pasta with fish and drinks a big beer. The restaurant is full and there is soft music. The food tastes excellent. In the end, Daniel says to the waiter: 'Pay, please!' Daniel pays the bill by card and gives five euros tip.",
        vocab: [
            { word: "der Tisch", translation: "Table" },
            { word: "freundlich", translation: "Friendly" },
            { word: "das Trinkgeld", translation: "Tip" },
            { word: "schmecken", translation: "To taste" }
        ],
        questions: [
            { question: "Wann gehen Sarah und Daniel ins Restaurant?", options: ["Am Freitagabend", "Am Samstagabend", "Am Sonntagmittag"], correct: 1, explanation: "They go on Saturday evening: 'am Samstagabend'." },
            { question: "Was bestellt Sarah zum Essen?", options: ["Nudeln mit Fisch", "Pizza mit Gemüse", "Ein Steak"], correct: 1, explanation: "Sarah orders a pizza with vegetables: 'eine Pizza mit Gemüse'." },
            { question: "Was trinkt Daniel?", options: ["Mineralwasser", "Bier", "Wein"], correct: 1, explanation: "Daniel drinks beer: 'trinkt ein großes Bier'." },
            { question: "Wie bezahlt Daniel die Rechnung?", options: ["In bar (cash)", "Mit Karte", "Er vergisst zu bezahlen"], correct: 1, explanation: "He pays by card: 'bezahlt die Rechnung mit Karte'." },
            { question: "Wie viel Trinkgeld gibt Daniel?", options: ["Zwei Euro", "Fünf Euro", "Kein Trinkgeld"], correct: 1, explanation: "He tips five euros: 'gibt fünf Euro Trinkgeld'." }
        ]
    },
    {
        id: "st_holiday",
        title: "Sommerurlaub in Spanien",
        text: "Im August hat Familie Wagner Urlaub. Sie fliegen für zwei Wochen nach Spanien ans Meer. Sie wohnen in einem schönen Hotel direkt am Strand. Jeden Morgen frühstücken sie auf der Terrasse mit Blick auf das Meer. Am Tag baden die Kinder im Wasser, und die Eltern lesen Bücher unter dem Sonnenschirm. Am Nachmittag machen sie Ausflüge in die Stadt oder essen Eis. Am Abend gehen sie in einem Restaurant am Hafen Fisch essen. Der Urlaub ist sehr schön und alle sind glücklich.",
        translation: "In August, the Wagner family has a vacation. They fly to Spain by the sea for two weeks. They stay in a beautiful hotel right on the beach. Every morning they eat breakfast on the terrace with a view of the sea. During the day the children swim in the water, and the parents read books under the parasol. In the afternoon they make excursions to the city or eat ice cream. In the evening they go eat fish at a restaurant by the harbor. The vacation is very beautiful and everyone is happy.",
        vocab: [
            { word: "der Urlaub", translation: "Vacation" },
            { word: "der Strand", translation: "Beach" },
            { word: "der Ausflug", translation: "Excursion / Trip" },
            { word: "glücklich", translation: "Happy" }
        ],
        questions: [
            { question: "Wann hat Familie Wagner Urlaub?", options: ["Im Juni", "Im Juli", "Im August"], correct: 2, explanation: "They have vacation in August: 'Im August hat Familie Wagner Urlaub.'" },
            { question: "Wie lange bleibt die Familie in Spanien?", options: ["Eine Woche", "Zwei Wochen", "Einen Monat"], correct: 1, explanation: "They stay for two weeks: 'für zwei Wochen nach Spanien'." },
            { question: "Wo frühstückt die Familie jeden Morgen?", options: ["Im Zimmer", "Auf der Terrasse mit Meerblick", "Im Bett"], correct: 1, explanation: "They breakfast on the terrace: 'frühstücken sie auf der Terrasse mit Blick auf das Meer.'" },
            { question: "Was machen die Eltern am Tag?", options: ["Sie schwimmen", "Sie lesen Bücher unter dem Sonnenschirm", "Sie schlafen"], correct: 1, explanation: "The parents read: 'die Eltern lesen Bücher unter dem Sonnenschirm.'" },
            { question: "Was essen sie am Abend am Hafen?", options: ["Pizza", "Fisch", "Kuchen"], correct: 1, explanation: "They eat fish: 'gehen sie in einem Restaurant am Hafen Fisch essen.'" }
        ]
    },
    {
        id: "st_routine",
        title: "Der Tagesablauf von Nivedya",
        text: "Mein Name ist Nivedya. Ich wohne in Deutschland und mein Tag beginnt um sieben Uhr. Ich stehe auf, dusche und koche das Frühstück. Meistens esse ich Müsli mit Milch und trinke einen grünen Tee. Um acht Uhr dreißig fahre ich mit der U-Bahn zum Sprachkurs. Der Deutschunterricht dauert von neun bis zwölf Uhr. Nach dem Kurs esse ich in einem kleinen Café ein Sandwich und treffe meine Freundin Kavya. Am Nachmittag lerne ich zu Hause Deutsch und mache Hausaufgaben. Am Abend lese ich ein Buch oder sehe einen Film.",
        translation: "My name is Nivedya. I live in Germany and my day starts at seven AM. I get up, shower, and cook breakfast. Mostly I eat muesli with milk and drink a green tea. At eight-thirty I go to the language course by subway. The German class lasts from nine to twelve o'clock. After class I eat a sandwich in a small café and meet my friend Kavya. In the afternoon I study German at home and do homework. In the evening I read a book or watch a movie.",
        vocab: [
            { word: "aufstehen", translation: "To get up" },
            { word: "duschen", translation: "To shower" },
            { word: "treffen", translation: "To meet" },
            { word: "nachmittag", translation: "Afternoon" }
        ],
        questions: [
            { question: "Um wie viel Uhr beginnt Nivedyas Tag?", options: ["Um 6:00 Uhr", "Um 7:00 Uhr", "Um 8:00 Uhr"], correct: 1, explanation: "Her day starts at 7:00: 'mein Tag beginnt um sieben Uhr'." },
            { question: "Was isst Nivedya meistens zum Frühstück?", options: ["Brot mit Käse", "Müsli mit Milch", "Eier mit Speck"], correct: 1, explanation: "She eats muesli: 'Meistens esse ich Müsli mit Milch...'" },
            { question: "Wie fährt Nivedya zum Sprachkurs?", options: ["Mit dem Auto", "Mit der U-Bahn", "Mit dem Fahrrad"], correct: 1, explanation: "She rides the subway: 'fahre ich mit der U-Bahn zum Sprachkurs.'" },
            { question: "Wen trifft Nivedya nach dem Deutschunterricht?", options: ["Ihren Lehrer", "Ihre Freundin Kavya", "Ihre Schwester"], correct: 1, explanation: "She meets her friend Kavya: 'und treffe meine Freundin Kavya.'" },
            { question: "Was macht Nivedya am Nachmittag?", options: ["Sie schläft", "Sie lernt zu Hause Deutsch und macht Hausaufgaben", "Sie geht einkaufen"], correct: 1, explanation: "She studies at home: 'Am Nachmittag lerne ich zu Hause Deutsch...'" }
        ]
    },
    {
        id: "st_friends",
        title: "Ein Treffen mit Freunden",
        text: "Hallo, ich bin Lisa. Heute treffen sich meine Freunde im Stadtpark. Das Wetter ist sehr schön: die Sonne scheint und es ist warm. Wir machen ein Picknick auf der Wiese. Mein Freund David bringt einen Kuchen mit, und Emma bringt Säfte und Wasser. Wir essen zusammen, unterhalten uns über Musik und lachen viel. Später spielen wir Volleyball. Am Abend gehen wir zusammen in die Stadt, um ein Eis zu essen. Es ist ein toller Tag mit guten Freunden.",
        translation: "Hello, I am Lisa. Today my friends are meeting in the city park. The weather is very beautiful: the sun is shining and it is warm. We are having a picnic on the meadow. My friend David brings a cake, and Emma brings juices and water. We eat together, talk about music, and laugh a lot. Later we play volleyball. In the evening we go downtown together to eat an ice cream. It is a great day with good friends.",
        vocab: [
            { word: "der Park", translation: "Park" },
            { word: "das Picknick", translation: "Picnic" },
            { word: "unterhalten", translation: "To chat / talk" },
            { word: "lachen", translation: "To laugh" }
        ],
        questions: [
            { question: "Wo treffen sich Lisa und ihre Freunde?", options: ["Im Restaurant", "Im Stadtpark", "Zu Hause"], correct: 1, explanation: "They meet in the park: 'treffen sich meine Freunde im Stadtpark.'" },
            { question: "Wie ist das Wetter heute?", options: ["Es regnet", "Es ist kalt und windig", "Die Sonne scheint und es ist warm"], correct: 2, explanation: "The sun is shining and warm: 'die Sonne scheint und es ist warm.'" },
            { question: "Was bringt David mit?", options: ["Säfte", "Einen Kuchen", "Einen Ball"], correct: 1, explanation: "David brings a cake: 'David bringt einen Kuchen mit'." },
            { question: "Welchen Sport spielen sie im Park?", options: ["Fußball", "Volleyball", "Tennis"], correct: 1, explanation: "They play volleyball: 'Später spielen wir Volleyball.'" },
            { question: "Was machen sie am Abend zusammen?", options: ["Sie gehen ins Kino", "Sie essen ein Eis", "Sie schlafen"], correct: 1, explanation: "They eat ice cream: 'gehen wir zusammen... um ein Eis zu essen.'" }
        ]
    }
];

// Add 'tiere' category metadata to VOCAB_TOPIC_INFO dynamically
if (typeof VOCAB_TOPIC_INFO !== 'undefined') {
    VOCAB_TOPIC_INFO.tiere = { name: "Tiere", emoji: "🦁" };
}

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
    } else if (type === "stories") {
        openListeningStoryHub();
    } else {
        originalStartPracticeMode(type);
    }
};

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
    
    // Check if we already have a topic list container, else create one
    let listContainer = document.getElementById("grammar-topic-list-container");
    if (!listContainer) {
        listContainer = document.createElement("div");
        listContainer.id = "grammar-topic-list-container";
        listContainer.style.cssText = "display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px; margin-top:20px;";
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
        <div style="background:rgba(99,102,241,0.05); border-left:4px solid var(--color-primary); padding:16px; border-radius:var(--radius-md); margin-bottom:20px;">
            <h3 style="margin-top:0; font-family:var(--font-display); color:var(--color-text-primary);">Systemregeln / Core Rules</h3>
            <p style="margin-bottom:0; font-size:1.05rem; line-height:1.6;">${topic.rule}</p>
        </div>
        <div style="margin-top:20px;">
            <h3>Englische Erklärung / English Explanation</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--color-text-secondary);">${topic.englishExplanation}</p>
        </div>
    `;
    
    let examplesHTML = "";
    topic.examples.forEach(ex => {
        examplesHTML += `
            <div class="vocab-support-item" style="flex-direction:column; align-items:flex-start; gap:6px; padding:16px; margin-bottom:10px;">
                <div style="display:flex; justify-content:space-between; align-items:center; width:100%; flex-wrap:wrap; gap:8px;">
                    <div style="display:flex; flex-direction:column;">
                        <span style="font-size:1.15rem; font-weight:700; color:var(--color-text-primary);">${ex.german}</span>
                        ${getPronunciationHTML(ex.german)}
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${ex.german.replace(/'/g, "\\'")}', 1.0)" style="padding:4px 8px; font-size:0.75rem;">🔊 Play</button>
                        <button class="btn btn-secondary btn-xs btn-touch" onclick="playSpeech('${ex.german.replace(/'/g, "\\'")}', 0.65)" style="padding:4px 8px; font-size:0.75rem;">🐢 Slow</button>
                    </div>
                </div>
                <div style="border-top:1px dashed var(--color-border); width:100%; margin-top:8px; padding-top:6px; color:var(--color-success); font-style:italic; font-size:0.9rem;">
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
