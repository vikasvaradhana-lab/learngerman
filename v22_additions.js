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

        let gridHTML = `
            <div style="text-align:center; margin-bottom:20px; animation: fadeIn 0.2s ease-out;">
                <h3 style="font-family:var(--font-display); color:var(--color-primary); margin-top:0;">Wählen Sie ein Lesethema / Choose a Reading Topic</h3>
                <p style="color:var(--color-text-muted); font-size:0.95rem;">Jedes Thema führt Sie durch Vokabeln, Sätze, Text, Übungen und einen Abschlusstest.</p>
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
    const originalCheckPracticeAnswer = checkPracticeAnswer;
    checkPracticeAnswer = function() {
        originalCheckPracticeAnswer();
        // Refresh widgets after every question check in case SRS is updated
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

// Intercept practice menu selections
startPracticeMode = function(type) {
    if (type === "grammar") {
        openGrammarLessonHub();
    } else if (type === "phrases") {
        openPhraseBank();
    } else if (type === "scenarios") {
        openRealLifeScenarios();
    } else if (type === "stories" || type === "listening") {
        openListeningStoryHub();
    } else if (type === "reading") {
        startReadingLearning();
    } else if (type === "revision") {
        openRevisionCenter();
    } else {
        originalStartPracticeMode(type);
    }
};

// Monkey-patch option rendering in app.js to show pronunciation helpers
const originalRenderPracticeMCQuestion = renderPracticeMCQuestion;
renderPracticeMCQuestion = function(q) {
    originalRenderPracticeMCQuestion(q);
    
    // Inject pronunciation helper to options
    const list = document.getElementById("practice-options-list");
    if (list) {
        const items = list.querySelectorAll(".option-item");
        items.forEach((item, idx) => {
            const content = item.querySelector(".option-content");
            if (content) {
                const optText = q.options[idx];
                const pronHTML = getPronunciationHTML(optText);
                if (pronHTML) {
                    content.innerHTML = `<div>${optText}</div>${pronHTML}`;
                }
            }
        });
    }
    
    // Inject pronunciation helper to question text
    const qTextEl = document.getElementById("practice-question-text");
    if (qTextEl) {
        const qText = q.question;
        const pronHTML = getPronunciationHTML(qText);
        if (pronHTML) {
            qTextEl.innerHTML = `<div>${qText}</div>${pronHTML}`;
        }
    }
};

// Monkey-patch loadPracticeQuestion to intercept all practice modes
const originalLoadPracticeQuestion = loadPracticeQuestion;
loadPracticeQuestion = function() {
    originalLoadPracticeQuestion();
    
    const qTextEl = document.getElementById("practice-question-text");
    if (qTextEl && practiceState.questions && practiceState.questions[practiceState.currentIndex]) {
        const q = practiceState.questions[practiceState.currentIndex];
        const qText = q.question;
        const pronHTML = getPronunciationHTML(qText);
        if (pronHTML) {
            qTextEl.innerHTML = `<div>${qText}</div>${pronHTML}`;
        }
    }
};

// Enhance settings change listener for pronunciation dropdown
document.addEventListener("DOMContentLoaded", () => {
    const pronLangSelect = document.getElementById("settings-pronunciation-language-select");
    if (pronLangSelect) {
        pronLangSelect.value = portalState.pronunciationLang || "ml";
        pronLangSelect.onchange = (e) => {
            const val = e.target.value;
            portalState.pronunciationLang = val;
            portalState.showPronunciation = (val !== "hidden");
            savePortalStateToStorage();
            refreshActiveViewContent();
        };
    }
});
