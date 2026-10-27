// Contenido de las lecciones. Para añadir una clase nueva, agrega un objeto más al array.
// pairs:     [euskera, castellano, emoji] -> tarjetas visuales y elección múltiple en ambos sentidos
// sentences: [euskera, castellano]        -> ordenar fichas y escribir
// pattern:   la estructura clave, con ___ donde va la palabra que cambia
// tips:      [{t: título, b: explicación}] -> cajas de "cómo funciona"
// dialogue:  [[quién, euskera, castellano], ...] -> mini diálogo de ejemplo
window.LESSONS = [
  {
    id: "l1", title: "Saludos y despedidas", desc: "Kaixo, egun on, agur…", emoji: "👋", scene: { emoji: "☕", title: "Kafetegian · en el café" },
    pairs: [["Kaixo", "Hola", "👋"], ["Egun on", "Buenos días", "🌅"], ["Arratsalde on", "Buenas tardes", "🌇"], ["Gabon", "Buenas noches", "🌙"], ["Agur", "Adiós", "🚪"], ["Ikusi arte", "Hasta la vista", "👀"], ["Gero arte", "Hasta luego", "⏰"], ["Eskerrik asko", "Gracias", "🙏"]],
    sentences: [["Egun on!", "¡Buenos días!"], ["Kaixo! Zer moduz?", "¡Hola! ¿Qué tal?"], ["Agur, gero arte!", "¡Adiós, hasta luego!"]],
    pattern: "___ on",
    tips: [{ t: "on = bueno", b: "Egun (día), arratsalde (tarde) y gau (noche) + on. Gabon es gau + on fusionado." }, { t: "Kaixo vale siempre", b: "Es el hola de todo el día. Agur sirve para despedirse en cualquier momento." }],
    dialogue: [["A", "Kaixo!", "¡Hola!"], ["B", "Egun on! Zer moduz?", "¡Buenos días! ¿Qué tal?"], ["A", "Ondo. Agur, gero arte!", "Bien. ¡Adiós, hasta luego!"]]
  },
  {
    id: "l2", title: "Presentarse", desc: "Nola duzu izena? Ni … naiz", emoji: "🙋", scene: { emoji: "☕", title: "Kafetegian · en el café" },
    pairs: [["Nola duzu izena?", "¿Cómo te llamas?", "❓"], ["Zein da zure izena?", "¿Cuál es tu nombre?", "🪪"], ["Ni Ane naiz", "Yo soy Ane", "🙋‍♀️"], ["Nire izena Ane da", "Mi nombre es Ane", "✍️"], ["Pozten naiz", "Encantado/a", "🤝"], ["ni", "yo", "👤"], ["nire", "mi", "👈"], ["izena", "nombre", "🏷️"]],
    sentences: [["Ni Mikel naiz.", "Yo soy Mikel."], ["Nire izena Ane da.", "Mi nombre es Ane."], ["Nola duzu izena?", "¿Cómo te llamas?"], ["Pozten naiz!", "¡Encantado!"]],
    pattern: "Ni ___ naiz",
    tips: [{ t: "El verbo va al final", b: "Ni Ane naiz = yo Ane soy. Naiz es «soy»; da es «es»: Nire izena Ane da." }, { t: "Dos formas de preguntar", b: "Nola duzu izena? (¿cómo tienes nombre?) y Zein da zure izena? (¿cuál es tu nombre?). Las dos valen." }],
    dialogue: [["A", "Nola duzu izena?", "¿Cómo te llamas?"], ["B", "Ni Mikel naiz. Eta zu?", "Yo soy Mikel. ¿Y tú?"], ["A", "Nire izena Ane da. Pozten naiz!", "Mi nombre es Ane. ¡Encantada!"]]
  },
  {
    id: "l3", title: "¿Qué tal?", desc: "Zer moduz? Ondo, eta zu?", emoji: "😊", scene: { emoji: "🚶", title: "Kalean · por la calle" },
    pairs: [["Zer moduz?", "¿Qué tal?", "❓"], ["Oso ondo", "Muy bien", "😄"], ["Ondo", "Bien", "🙂"], ["Hala-hola", "Así así", "😐"], ["Gaizki", "Mal", "😞"], ["Nekatuta", "Cansado/a", "🥱"], ["Eta zu?", "¿Y tú?", "👉"], ["Zer moduz zaude?", "¿Cómo estás?", "💬"]],
    sentences: [["Ondo, eskerrik asko. Eta zu?", "Bien, gracias. ¿Y tú?"], ["Oso ondo nago.", "Estoy muy bien."], ["Hala-hola, nekatuta nago.", "Así así, estoy cansado."]],
    pattern: "___ nago",
    tips: [{ t: "nago = estoy", b: "Ondo nago (estoy bien), nekatuta nago (estoy cansado). Oso delante intensifica: oso ondo = muy bien." }, { t: "Devuelve la pregunta", b: "Eta zu? (¿y tú?) cierra la respuesta: Ondo, eskerrik asko. Eta zu?" }],
    dialogue: [["A", "Zer moduz?", "¿Qué tal?"], ["B", "Oso ondo, eskerrik asko. Eta zu?", "Muy bien, gracias. ¿Y tú?"], ["A", "Hala-hola, nekatuta nago.", "Así así, estoy cansada."]]
  },
  {
    id: "l4", title: "La edad y los números", desc: "Zenbat urte dituzu?", emoji: "🎂", scene: { emoji: "🎂", title: "Urtebetetzean · en un cumpleaños" }, countable: "🍎",
    pairs: [["Zenbat urte dituzu?", "¿Cuántos años tienes?", "🎂"], ["urte", "año(s)", "📅"], ["bat", "1", "1️⃣"], ["bi", "2", "2️⃣"], ["hiru", "3", "3️⃣"], ["lau", "4", "4️⃣"], ["bost", "5", "5️⃣"], ["sei", "6", "6️⃣"], ["zazpi", "7", "7️⃣"], ["zortzi", "8", "8️⃣"], ["bederatzi", "9", "9️⃣"], ["hamar", "10", "🔟"], ["hamaika", "11", "🔢"], ["hamabi", "12", "🔢"], ["hamabost", "15", "🔢"], ["hogei", "20", "🔢"], ["hogeita hamar", "30", "🔢"], ["berrogei", "40", "🔢"], ["berrogeita hamar", "50", "🔢"], ["hirurogei", "60", "🔢"], ["hogeita bost", "25", "🔢"], ["berrogeita bi", "42", "🔢"]],
    sentences: [["Zenbat urte dituzu?", "¿Cuántos años tienes?"], ["Hogeita hamar urte ditut.", "Tengo treinta años."], ["Hogeita zortzi urte ditut.", "Tengo veintiocho años."], ["Berrogei urte ditu.", "Tiene cuarenta años."]],
    pattern: "___ urte ditut",
    tips: [{ t: "Se cuenta de 20 en 20", b: "30 = hogeita hamar (20 y 10). 42 = berrogeita bi (40 y 2). 57 = berrogeita hamazazpi (40 y 17)." }, { t: "ditut, no dut", b: "Los años son varios, así que el verbo es plural: hogei urte ditut. Para otra persona: hogei urte ditu." }],
    dialogue: [["A", "Zenbat urte dituzu?", "¿Cuántos años tienes?"], ["B", "Hogeita hamabost urte ditut. Eta zuk?", "Tengo treinta y cinco. ¿Y tú?"], ["A", "Berrogei urte ditut.", "Tengo cuarenta."]]
  },
  {
    id: "l5", title: "Gustos", desc: "Gustatzen zait / zaizkit", emoji: "❤️", scene: { emoji: "🍢", title: "Pintxo-potean · de pintxos" },
    pairs: [["Zer gustatzen zaizu?", "¿Qué te gusta?", "❓"], ["Musika gustatzen zait", "Me gusta la música", "🎵"], ["Liburuak gustatzen zaizkit", "Me gustan los libros", "📚"], ["Ez zait gustatzen hotza", "No me gusta el frío", "🥶"], ["Asko gustatzen zait", "Me gusta mucho", "❤️"], ["zinema", "cine", "🎬"], ["kirola", "deporte", "⚽"], ["janaria", "comida", "🍽️"], ["pintxoak", "pintxos", "🍢"], ["bidaiatzea", "viajar", "✈️"], ["sukaldatzea", "cocinar", "🍳"], ["hotza", "frío", "❄️"]],
    sentences: [["Musika gustatzen zait.", "Me gusta la música."], ["Pintxoak gustatzen zaizkit.", "Me gustan los pintxos."], ["Ez zait gustatzen hotza.", "No me gusta el frío."], ["Zinema asko gustatzen zait.", "Me gusta mucho el cine."]],
    pattern: "___ gustatzen zait",
    tips: [{ t: "zait / zaizkit", b: "Una cosa: musika gustatzen zait. Varias: liburuak gustatzen zaizkit (la -k final marca plural)." }, { t: "Negativo con ez", b: "Ez va delante del verbo auxiliar: Ez zait gustatzen hotza. Para actividades, el verbo acaba en -tzea: bidaiatzea gustatzen zait." }],
    dialogue: [["A", "Zer gustatzen zaizu?", "¿Qué te gusta?"], ["B", "Zinema asko gustatzen zait. Eta zuri?", "Me gusta mucho el cine. ¿Y a ti?"], ["A", "Pintxoak gustatzen zaizkit!", "¡Me gustan los pintxos!"]]
  },
  {
    id: "l6", title: "Hermanos y hermanas", desc: "Anaia, neba, arreba, ahizpa", emoji: "👨‍👩‍👧‍👦", scene: { emoji: "👨‍👩‍👧‍👦", title: "Familian · en familia" },
    grid: { title: "La palabra depende de TU género, no del de tu hermano/a", cols: ["👧 Si eres chica", "👦 Si eres chico"], rows: [["hermano", "neba", "anaia"], ["hermana", "ahizpa", "arreba"], ["hermanos (mixto)", "neba-arrebak", "anai-arrebak"]] },
    pairs: [["neba", "hermano (dice una chica)", "👧➡️👦"], ["anaia", "hermano (dice un chico)", "👦➡️👦"], ["ahizpa", "hermana (dice una chica)", "👧➡️👧"], ["arreba", "hermana (dice un chico)", "👦➡️👧"], ["neba-arrebak", "hermanos (dice una chica)", "👧➡️👫"], ["anai-arrebak", "hermanos (dice un chico)", "👦➡️👫"], ["Anai-arrebarik baduzu?", "¿Tienes hermanos?", "❓"], ["Ez dut anai-arrebarik", "No tengo hermanos", "🚫"], ["bat dut", "tengo uno/una", "1️⃣"], ["bi ditut", "tengo dos", "2️⃣"], ["familia", "familia", "🏡"]],
    sentences: [["Ahizpa bat dut.", "Tengo una hermana (dice una chica)."], ["Anaia bat eta arreba bat ditut.", "Tengo un hermano y una hermana (dice un chico)."], ["Neba bi ditut.", "Tengo dos hermanos (dice una chica)."], ["Ez dut anai-arrebarik.", "No tengo hermanos."]],
    pattern: "___ bat dut",
    tips: [{ t: "Cuatro palabras para dos", b: "Una chica dice neba (hermano) y ahizpa (hermana). Un chico dice anaia (hermano) y arreba (hermana). Lo que cambia es quién habla." }, { t: "dut / ditut", b: "Uno: ahizpa bat dut. Dos o más: neba bi ditut. Para preguntar: Anai-arrebarik baduzu?" }, { t: "El plural -k", b: "neba → nebak, ahizpa → ahizpak. Mezcla: neba-arrebak (chica) / anai-arrebak (chico)." }],
    dialogue: [["A", "Anai-arrebarik baduzu?", "¿Tienes hermanos?"], ["B", "Bai, ahizpa bat eta neba bat ditut. Eta zuk?", "Sí, tengo una hermana y un hermano (habla una chica). ¿Y tú?"], ["A", "Ez, ez dut anai-arrebarik.", "No, no tengo hermanos."]]
  }
];

// Pistas de "noticing": cuando fallas, se muestra la que coincide con la forma correcta.
window.NOTES = [
  { m: /zaizkit/i, t: "zaizkit = me gustAN (varias cosas). Fíjate en la -k del plural: liburuak, pintxoak." },
  { m: /\bzait\b/i, t: "zait = me gustA (una cosa). Si fuera plural sería zaizkit." },
  { m: /\bez zait|ez zaizkit|ez dut/i, t: "El negativo ez va justo delante del verbo auxiliar: ez zait, ez dut." },
  { m: /urte ditut/i, t: "Los años son varios: ditut (los tengo), no dut." },
  { m: /urte ditu\b/i, t: "ditu = los tiene (otra persona). ditut = los tengo (yo)." },
  { m: /\bditut\b/i, t: "ditut = tengo varios/as. Con uno solo es dut: ahizpa bat dut." },
  { m: /\bbat dut\b/i, t: "dut = tengo (uno). Con dos o más cambia a ditut." },
  { m: /hogeita/i, t: "hogeita = 20 y… Del 21 al 39 todo empieza por hogeita." },
  { m: /berrogeita/i, t: "berrogeita = 40 y… (berrogei = 2 × 20)." },
  { m: /hirurogei/i, t: "hirurogei = 3 × 20 = 60. El euskera cuenta de 20 en 20." },
  { m: /\bnaiz\b/i, t: "naiz = soy. Va al final: Ni Ane naiz." },
  { m: /\bda\b/i, t: "da = es. Nire izena Ane da (mi nombre Ane es)." },
  { m: /\bnago\b/i, t: "nago = estoy. Ondo nago, nekatuta nago." },
  { m: /\bneba\b|\bahizpa\b/i, t: "neba y ahizpa son las palabras que usa una CHICA para hermano y hermana." },
  { m: /\banaia\b|\barreba\b/i, t: "anaia y arreba son las palabras que usa un CHICO para hermano y hermana." },
  { m: /-arrebak/i, t: "neba-arrebak (dice ella) / anai-arrebak (dice él) = hermanos en general." },
  { m: /\bon\b/i, t: "on = bueno. egun on, arratsalde on, gabon (gau + on)." },
  { m: /eskerrik asko/i, t: "eskerrik asko = gracias (literalmente «muchas gracias»)." },
  { m: /eta zu\??$/i, t: "Eta zu? = ¿y tú? Devuelve la pregunta para seguir la conversación." }
];

// Fichas de gramática. Cada una: patrón con piezas, ejemplos de las lecciones y un ejercicio de transformación.
// pieces: [{t: texto, k: tipo}] tipo = "subj" | "obj" | "verb" | "neg" | "num" | "q"
// drills: [{from, to, instr}] -> el usuario transforma `from` según `instr`; se corrige contra `to`
window.NOTES = [
  { m: /zaizkit/i, t: "zaizkit = me gustAN (varias cosas). Fíjate en la -k del plural: liburuak, pintxoak." },
  { m: /\bzait\b/i, t: "zait = me gustA (una cosa). Si fuera plural sería zaizkit." },
  { m: /\bez zait|ez zaizkit|ez dut/i, t: "El negativo ez va justo delante del verbo auxiliar: ez zait, ez dut." },
  { m: /urte ditut/i, t: "Los años son varios: ditut (los tengo), no dut." },
  { m: /urte ditu\b/i, t: "ditu = los tiene (otra persona). ditut = los tengo (yo)." },
  { m: /\bditut\b/i, t: "ditut = tengo varios/as. Con uno solo es dut: ahizpa bat dut." },
  { m: /\bbat dut\b/i, t: "dut = tengo (uno). Con dos o más cambia a ditut." },
  { m: /hogeita/i, t: "hogeita = 20 y… Del 21 al 39 todo empieza por hogeita." },
  { m: /berrogeita/i, t: "berrogeita = 40 y… (berrogei = 2 × 20)." },
  { m: /hirurogei/i, t: "hirurogei = 3 × 20 = 60. El euskera cuenta de 20 en 20." },
  { m: /\bnaiz\b/i, t: "naiz = soy. Va al final: Ni Ane naiz." },
  { m: /\bda\b/i, t: "da = es. Nire izena Ane da (mi nombre Ane es)." },
  { m: /\bnago\b/i, t: "nago = estoy. Ondo nago, nekatuta nago." },
  { m: /\bneba\b|\bahizpa\b/i, t: "neba y ahizpa son las palabras que usa una CHICA para hermano y hermana." },
  { m: /\banaia\b|\barreba\b/i, t: "anaia y arreba son las palabras que usa un CHICO para hermano y hermana." },
  { m: /-arrebak/i, t: "neba-arrebak (dice ella) / anai-arrebak (dice él) = hermanos en general." },
  { m: /\bon\b/i, t: "on = bueno. egun on, arratsalde on, gabon (gau + on)." },
  { m: /eskerrik asko/i, t: "eskerrik asko = gracias (literalmente «muchas gracias»)." },
  { m: /eta zu\??$/i, t: "Eta zu? = ¿y tú? Devuelve la pregunta para seguir la conversación." }
];

// Fichas de gramática. Cada una: patrón con piezas, ejemplos de las lecciones y un ejercicio de transformación.
// pieces: [{t: texto, k: tipo}] tipo = "subj" | "obj" | "verb" | "neg" | "num" | "q"
// drills: [{from, to, instr}] -> el usuario transforma `from` según `instr`; se corrige contra `to`
window.GRAMMAR = [
  {
    id: "g-naiz", title: "Ser: naiz / da", lessons: ["l2", "l6"], emoji: "🧩",
    summary: "El verbo va al FINAL. naiz = soy, da = es, zara = eres.",
    pieces: [{ t: "Ni", k: "subj" }, { t: "Ane", k: "obj" }, { t: "naiz", k: "verb" }],
    table: { cols: ["euskera", "castellano"], rows: [["ni … naiz", "yo soy"], ["zu … zara", "tú eres"], ["hura … da", "él/ella es"]] },
    examples: [["Ni Mikel naiz.", "Yo soy Mikel."], ["Nire izena Ane da.", "Mi nombre es Ane."], ["Ni neska naiz.", "Yo soy chica."]],
    drills: [{ from: "Ni Ane naiz.", to: "Zu Ane zara.", instr: "Cámbialo a «tú»" }, { from: "Ni Mikel naiz.", to: "Nire izena Mikel da.", instr: "Dilo con «nire izena … da»" }, { from: "Zu Jon zara.", to: "Ni Jon naiz.", instr: "Cámbialo a «yo»" }]
  },
  {
    id: "g-nago", title: "Estar: nago", lessons: ["l3"], emoji: "📍",
    summary: "Estados y ánimo van con nago (estoy), zaude (estás), dago (está). El adjetivo delante.",
    pieces: [{ t: "Oso", k: "q" }, { t: "ondo", k: "obj" }, { t: "nago", k: "verb" }],
    table: { cols: ["euskera", "castellano"], rows: [["… nago", "estoy"], ["… zaude", "estás"], ["… dago", "está"]] },
    examples: [["Ondo nago.", "Estoy bien."], ["Nekatuta nago.", "Estoy cansado/a."], ["Zer moduz zaude?", "¿Cómo estás?"]],
    drills: [{ from: "Ondo nago.", to: "Ondo zaude.", instr: "Cámbialo a «tú»" }, { from: "Nekatuta nago.", to: "Oso nekatuta nago.", instr: "Añade «muy»" }, { from: "Gaizki zaude.", to: "Gaizki nago.", instr: "Cámbialo a «yo»" }]
  },
  {
    id: "g-dut", title: "Tener: dut / ditut", lessons: ["l4", "l6"], emoji: "✋",
    summary: "dut = tengo UNA cosa. ditut = tengo VARIAS. El número va detrás del nombre: ahizpa bat, neba bi.",
    pieces: [{ t: "neba", k: "obj" }, { t: "bi", k: "num" }, { t: "ditut", k: "verb" }],
    table: { cols: ["singular", "plural"], rows: [["dut (tengo)", "ditut (tengo)"], ["duzu (tienes)", "dituzu (tienes)"], ["du (tiene)", "ditu (tiene)"]] },
    examples: [["Ahizpa bat dut.", "Tengo una hermana."], ["Hogei urte ditut.", "Tengo veinte años."], ["Zenbat urte dituzu?", "¿Cuántos años tienes?"]],
    drills: [{ from: "Ahizpa bat dut.", to: "Ahizpa bi ditut.", instr: "Ahora son dos" }, { from: "Neba bi ditut.", to: "Neba bat dut.", instr: "Ahora es uno" }, { from: "Hogei urte ditut.", to: "Hogei urte ditu.", instr: "Dilo de otra persona (él/ella)" }, { from: "Hamar urte ditu.", to: "Hamar urte dituzu.", instr: "Pregunta/di «tú tienes»" }]
  },
  {
    id: "g-zait", title: "Gustar: zait / zaizkit", lessons: ["l5"], emoji: "❤️",
    summary: "Como en castellano, lo que gusta es el sujeto: zait si es UNA cosa, zaizkit si son VARIAS (-k = plural).",
    pieces: [{ t: "Liburuak", k: "obj" }, { t: "gustatzen", k: "verb" }, { t: "zaizkit", k: "verb" }],
    table: { cols: ["una cosa", "varias"], rows: [["gustatzen zait", "gustatzen zaizkit"], ["(me gusta)", "(me gustan)"], ["gustatzen zaizu", "gustatzen zaizkizu"], ["(te gusta)", "(te gustan)"]] },
    examples: [["Musika gustatzen zait.", "Me gusta la música."], ["Pintxoak gustatzen zaizkit.", "Me gustan los pintxos."], ["Zer gustatzen zaizu?", "¿Qué te gusta?"]],
    drills: [{ from: "Liburua gustatzen zait.", to: "Liburuak gustatzen zaizkit.", instr: "Ponlo en plural" }, { from: "Pintxoak gustatzen zaizkit.", to: "Pintxoa gustatzen zait.", instr: "Ponlo en singular" }, { from: "Musika gustatzen zait.", to: "Musika gustatzen zaizu.", instr: "Dilo de «tú» (te gusta)" }]
  },
  {
    id: "g-ez", title: "Negación: ez", lessons: ["l5", "l6"], emoji: "🚫",
    summary: "ez va delante del verbo auxiliar, y el resto de la frase se mueve detrás.",
    pieces: [{ t: "Ez", k: "neg" }, { t: "zait", k: "verb" }, { t: "gustatzen", k: "verb" }, { t: "hotza", k: "obj" }],
    examples: [["Ez zait gustatzen hotza.", "No me gusta el frío."], ["Ez dut anai-arrebarik.", "No tengo hermanos."], ["Ez zaizkit gustatzen goizak.", "No me gustan las mañanas."]],
    drills: [{ from: "Hotza gustatzen zait.", to: "Ez zait gustatzen hotza.", instr: "Ponlo en negativo" }, { from: "Kirola gustatzen zait.", to: "Ez zait gustatzen kirola.", instr: "Ponlo en negativo" }, { from: "Ez zait gustatzen zinema.", to: "Zinema gustatzen zait.", instr: "Ponlo en afirmativo" }]
  },
  {
    id: "g-plural", title: "Plural: -k", lessons: ["l5", "l6"], emoji: "👥",
    summary: "El plural se marca con -k al final (y -ak si la palabra acaba en consonante). Hace cambiar el verbo: zait→zaizkit, dut→ditut.",
    pieces: [{ t: "liburu", k: "obj" }, { t: "-ak", k: "num" }],
    table: { cols: ["singular", "plural"], rows: [["liburua (el libro)", "liburuak (los libros)"], ["pintxoa", "pintxoak"], ["neba", "nebak"], ["ahizpa", "ahizpak"]] },
    examples: [["Liburuak gustatzen zaizkit.", "Me gustan los libros."], ["Neba-arrebak ditut.", "Tengo hermanos (dice ella)."]],
    drills: [{ from: "neba", to: "nebak", instr: "Plural" }, { from: "pintxoa", to: "pintxoak", instr: "Plural" }, { from: "ahizpak", to: "ahizpa", instr: "Singular" }]
  },
  {
    id: "g-hogei", title: "Números de 20 en 20", lessons: ["l4"], emoji: "🔢",
    summary: "El euskera cuenta en base 20: 30 = hogeita hamar (20 y 10), 42 = berrogeita bi (40 y 2). «-ta» une la veintena con el resto.",
    pieces: [{ t: "berrogei", k: "num" }, { t: "ta", k: "neg" }, { t: "bi", k: "num" }],
    table: { cols: ["veintena", "ejemplo"], rows: [["hogei (20)", "hogeita bost = 25"], ["berrogei (40)", "berrogeita hamar = 50"], ["hirurogei (60)", "hirurogeita bat = 61"], ["laurogei (80)", "laurogeita bi = 82"]] },
    examples: [["Hogeita hamar urte ditut.", "Tengo treinta años."], ["Berrogeita bi.", "Cuarenta y dos."]],
    drills: [{ from: "hogeita bi", to: "hogeita hiru", instr: "Suma uno (23)" }, { from: "hogeita hamar", to: "berrogeita hamar", instr: "Suma veinte (50)" }, { from: "berrogei", to: "hirurogei", instr: "Suma veinte (60)" }, { from: "hamabost", to: "hogeita hamabost", instr: "Suma veinte (35)" }]
  },
  {
    id: "g-galdera", title: "Preguntas: zer, nola, zenbat", lessons: ["l2", "l3", "l4", "l5"], emoji: "❓",
    summary: "La palabra interrogativa va al principio y el verbo justo detrás: Zer moduz? Nola duzu izena? Zenbat urte dituzu?",
    pieces: [{ t: "Zenbat", k: "q" }, { t: "urte", k: "obj" }, { t: "dituzu", k: "verb" }],
    table: { cols: ["palabra", "significa"], rows: [["zer", "qué"], ["nola", "cómo"], ["zenbat", "cuánto/s"], ["zein", "cuál"], ["nor", "quién"]] },
    examples: [["Zer gustatzen zaizu?", "¿Qué te gusta?"], ["Nola duzu izena?", "¿Cómo te llamas?"], ["Zenbat urte dituzu?", "¿Cuántos años tienes?"], ["Nor zara?", "¿Quién eres?"]],
    drills: [{ from: "Hogei urte ditut.", to: "Zenbat urte dituzu?", instr: "Haz la pregunta que provoca esta respuesta" }, { from: "Musika gustatzen zait.", to: "Zer gustatzen zaizu?", instr: "Haz la pregunta" }, { from: "Ni Ane naiz.", to: "Nor zara?", instr: "Haz la pregunta con «nor»" }]
  }
];

// Transformaciones por frase (clave = frase en euskera normalizada). Cada una: instrucción, resultado esperado y nota.
// Las usan la ronda diaria (a veces en vez de pedir la frase tal cual), cada lección (bloque Eraldatu) y los retos.
window.TRANSFORMS = {
  "ni ane naiz": [{ i: "Cámbialo a «tú»", to: "Zu Ane zara.", es: "Tú eres Ane." }, { i: "Dilo con «nire izena … da»", to: "Nire izena Ane da.", es: "Mi nombre es Ane." }],
  "ni mikel naiz": [{ i: "Cámbialo a «tú»", to: "Zu Mikel zara.", es: "Tú eres Mikel." }, { i: "Dilo con «nire izena … da»", to: "Nire izena Mikel da.", es: "Mi nombre es Mikel." }],
  "nire izena ane da": [{ i: "Dilo con «ni … naiz»", to: "Ni Ane naiz.", es: "Yo soy Ane." }],
  "nola duzu izena?": [{ i: "Pregúntalo con «zein da»", to: "Zein da zure izena?", es: "¿Cuál es tu nombre?" }],
  "zein da zure izena?": [{ i: "Pregúntalo con «nola»", to: "Nola duzu izena?", es: "¿Cómo te llamas?" }],
  "ondo, eskerrik asko. eta zu?": [{ i: "Responde «muy bien» en vez de «bien»", to: "Oso ondo, eskerrik asko. Eta zu?", es: "Muy bien, gracias. ¿Y tú?" }],
  "oso ondo nago.": [{ i: "Quita el «muy»", to: "Ondo nago.", es: "Estoy bien." }, { i: "Cámbialo a «tú estás»", to: "Oso ondo zaude.", es: "Estás muy bien." }],
  "hala-hola, nekatuta nago.": [{ i: "Di solo «estoy cansado/a»", to: "Nekatuta nago.", es: "Estoy cansado/a." }],
  "zer moduz zaude?": [{ i: "Dilo de «yo»: estoy bien", to: "Ondo nago.", es: "Estoy bien." }],
  "nekatuta": [{ i: "Haz la frase «estoy cansado/a»", to: "Nekatuta nago.", es: "Estoy cansado/a." }],
  "zenbat urte dituzu?": [{ i: "Responde: tengo 20 años", to: "Hogei urte ditut.", es: "Tengo veinte años." }, { i: "Responde: tengo 35 años", to: "Hogeita hamabost urte ditut.", es: "Tengo treinta y cinco años." }],
  "hogeita hamar urte ditut.": [{ i: "Ahora son 31", to: "Hogeita hamaika urte ditut.", es: "Tengo treinta y un años." }, { i: "Dilo de otra persona (él/ella)", to: "Hogeita hamar urte ditu.", es: "Tiene treinta años." }],
  "hogeita zortzi urte ditut.": [{ i: "Ahora son 29", to: "Hogeita bederatzi urte ditut.", es: "Tengo veintinueve años." }, { i: "Dilo de otra persona (él/ella)", to: "Hogeita zortzi urte ditu.", es: "Tiene veintiocho años." }],
  "berrogei urte ditu.": [{ i: "Dilo de «yo»", to: "Berrogei urte ditut.", es: "Tengo cuarenta años." }, { i: "Ahora son 42", to: "Berrogeita bi urte ditu.", es: "Tiene cuarenta y dos años." }],
  "hogeita hamar": [{ i: "Suma uno (31)", to: "hogeita hamaika", es: "31" }, { i: "Suma veinte (50)", to: "berrogeita hamar", es: "50" }],
  "berrogei": [{ i: "Suma dos (42)", to: "berrogeita bi", es: "42" }, { i: "Suma veinte (60)", to: "hirurogei", es: "60" }],
  "hogei": [{ i: "Suma cinco (25)", to: "hogeita bost", es: "25" }],
  "hamabost": [{ i: "Suma veinte (35)", to: "hogeita hamabost", es: "35" }],
  "musika gustatzen zait": [{ i: "Ponlo en negativo", to: "Ez zait gustatzen musika.", es: "No me gusta la música." }, { i: "Añade «mucho»", to: "Musika asko gustatzen zait.", es: "Me gusta mucho la música." }, { i: "Dilo de «tú» (te gusta)", to: "Musika gustatzen zaizu.", es: "Te gusta la música." }],
  "musika gustatzen zait.": [{ i: "Ponlo en negativo", to: "Ez zait gustatzen musika.", es: "No me gusta la música." }, { i: "Añade «mucho»", to: "Musika asko gustatzen zait.", es: "Me gusta mucho la música." }],
  "liburuak gustatzen zaizkit": [{ i: "Ponlo en singular (un libro)", to: "Liburua gustatzen zait.", es: "Me gusta el libro." }, { i: "Ponlo en negativo", to: "Ez zaizkit gustatzen liburuak.", es: "No me gustan los libros." }],
  "pintxoak gustatzen zaizkit.": [{ i: "Ponlo en singular (un pintxo)", to: "Pintxoa gustatzen zait.", es: "Me gusta el pintxo." }, { i: "Ponlo en negativo", to: "Ez zaizkit gustatzen pintxoak.", es: "No me gustan los pintxos." }],
  "ez zait gustatzen hotza": [{ i: "Ponlo en afirmativo", to: "Hotza gustatzen zait.", es: "Me gusta el frío." }],
  "ez zait gustatzen hotza.": [{ i: "Ponlo en afirmativo", to: "Hotza gustatzen zait.", es: "Me gusta el frío." }],
  "zinema asko gustatzen zait.": [{ i: "Quita el «mucho»", to: "Zinema gustatzen zait.", es: "Me gusta el cine." }, { i: "Ponlo en negativo", to: "Ez zait gustatzen zinema.", es: "No me gusta el cine." }],
  "asko gustatzen zait": [{ i: "Haz la frase: me gusta mucho el deporte", to: "Kirola asko gustatzen zait.", es: "Me gusta mucho el deporte." }],
  "zinema": [{ i: "Haz la frase: me gusta el cine", to: "Zinema gustatzen zait.", es: "Me gusta el cine." }],
  "kirola": [{ i: "Haz la frase: me gusta el deporte", to: "Kirola gustatzen zait.", es: "Me gusta el deporte." }],
  "bidaiatzea": [{ i: "Haz la frase: me gusta viajar", to: "Bidaiatzea gustatzen zait.", es: "Me gusta viajar." }],
  "sukaldatzea": [{ i: "Haz la frase: me gusta cocinar", to: "Sukaldatzea gustatzen zait.", es: "Me gusta cocinar." }],
  "ahizpa bat dut.": [{ i: "Ahora son dos", to: "Ahizpa bi ditut.", es: "Tengo dos hermanas." }, { i: "Ponlo en negativo: no tengo hermanos", to: "Ez dut anai-arrebarik.", es: "No tengo hermanos." }],
  "neba bi ditut.": [{ i: "Ahora es uno", to: "Neba bat dut.", es: "Tengo un hermano (dice una chica)." }],
  "anaia bat eta arreba bat ditut.": [{ i: "Solo un hermano", to: "Anaia bat dut.", es: "Tengo un hermano (dice un chico)." }],
  "ez dut anai-arrebarik.": [{ i: "Ahora tengo una hermana (dicho por una chica)", to: "Ahizpa bat dut.", es: "Tengo una hermana (dice una chica)." }],
  "neba": [{ i: "Plural", to: "nebak", es: "hermanos (dice una chica)" }, { i: "Haz la frase: tengo un hermano (chica)", to: "Neba bat dut.", es: "Tengo un hermano (dice una chica)." }],
  "ahizpa": [{ i: "Plural", to: "ahizpak", es: "hermanas (dice una chica)" }, { i: "Haz la frase: tengo una hermana (chica)", to: "Ahizpa bat dut.", es: "Tengo una hermana (dice una chica)." }],
  "anaia": [{ i: "Plural", to: "anaiak", es: "hermanos (dice un chico)" }, { i: "Haz la frase: tengo un hermano (chico)", to: "Anaia bat dut.", es: "Tengo un hermano (dice un chico)." }],
  "arreba": [{ i: "Plural", to: "arrebak", es: "hermanas (dice un chico)" }, { i: "Haz la frase: tengo una hermana (chico)", to: "Arreba bat dut.", es: "Tengo una hermana (dice un chico)." }],
  "egun on": [{ i: "Ahora es por la tarde", to: "Arratsalde on", es: "Buenas tardes" }, { i: "Ahora es de noche", to: "Gabon", es: "Buenas noches" }],
  "arratsalde on": [{ i: "Ahora es por la mañana", to: "Egun on", es: "Buenos días" }],
  "gabon": [{ i: "Ahora es por la mañana", to: "Egun on", es: "Buenos días" }],
  "kaixo! zer moduz?": [{ i: "Responde: bien, gracias. ¿Y tú?", to: "Ondo, eskerrik asko. Eta zu?", es: "Bien, gracias. ¿Y tú?" }],
  "agur, gero arte!": [{ i: "Despídete con «hasta la vista»", to: "Agur, ikusi arte!", es: "¡Adiós, hasta la vista!" }]
};
