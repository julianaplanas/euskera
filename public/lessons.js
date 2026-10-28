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
  },
  {
    id: "l7", title: "Pronombres y ser/estar", desc: "Ni, zu, hura… + naiz/nago", emoji: "👥", scene: { emoji: "🏫", title: "Ikasgelan · en clase" },
    grid: { title: "Pronombre + ser (izan) + estar (egon)", cols: ["izan · ser", "egon · estar"], rows: [["ni (yo)", "naiz", "nago"], ["zu (tú)", "zara", "zaude"], ["hura (él/ella)", "da", "dago"], ["gu (nosotros)", "gara", "gaude"], ["zuek (vosotros)", "zarete", "zaudete"], ["haiek (ellos)", "dira", "daude"]] },
    pairs: [["ni", "yo", "🙋"], ["zu", "tú", "👉"], ["hura", "él / ella", "👤"], ["gu", "nosotros/as", "👫"], ["zuek", "vosotros/as", "👥"], ["haiek", "ellos/as", "👨‍👩‍👧‍👦"], ["Gu lagunak gara", "Nosotros somos amigos", "🤝"], ["Haiek ikasleak dira", "Ellos son estudiantes", "🎓"], ["Zuek nekatuta zaudete", "Vosotros estáis cansados", "🥱"], ["Gu ondo gaude", "Nosotros estamos bien", "🙂"], ["Hura pozik dago", "Él/ella está contento/a", "😄"], ["pozik", "contento/a", "😄"], ["lagunak", "amigos", "🤝"], ["ikasleak", "estudiantes", "🎓"]],
    sentences: [["Gu lagunak gara.", "Nosotros somos amigos."], ["Zuek ikasleak zarete.", "Vosotros sois estudiantes."], ["Haiek ondo daude.", "Ellos están bien."], ["Hura nekatuta dago.", "Él/ella está cansado/a."]],
    pattern: "Gu ___ gara",
    tips: [{ t: "Dos verbos para ser y estar", b: "izan (naiz, zara, da, gara, zarete, dira) para lo que ERES. egon (nago, zaude, dago, gaude, zaudete, daude) para cómo ESTÁS o dónde." }, { t: "El pronombre se puede omitir", b: "El verbo ya dice quién: «Lagunak gara» = somos amigos. Se pone ni/zu/gu para dar énfasis." }],
    dialogue: [["A", "Zuek lagunak zarete?", "¿Vosotros sois amigos?"], ["B", "Bai, gu lagunak gara. Eta ikasleak gara.", "Sí, somos amigos. Y somos estudiantes."], ["A", "Nekatuta zaudete?", "¿Estáis cansados?"], ["B", "Ez, ondo gaude!", "¡No, estamos bien!"]]
  },
  {
    id: "l8", title: "Profesiones", desc: "Zer zara? Irakaslea naiz", emoji: "💼", scene: { emoji: "☕", title: "Kafetegian · en el café" },
    pairs: [["Zer zara?", "¿Qué eres? (profesión)", "❓"], ["irakaslea", "profesor/a", "👩‍🏫"], ["ikaslea", "estudiante", "🎓"], ["medikua", "médico/a", "🩺"], ["erizaina", "enfermero/a", "💉"], ["sukaldaria", "cocinero/a", "👩‍🍳"], ["zerbitzaria", "camarero/a", "🍽️"], ["abokatua", "abogado/a", "⚖️"], ["arkitektoa", "arquitecto/a", "📐"], ["ingeniaria", "ingeniero/a", "⚙️"], ["diseinatzailea", "diseñador/a", "🎨"], ["dendaria", "dependiente/a, tendero/a", "🛍️"], ["langabea", "desempleado/a", "📭"], ["lana", "trabajo", "💼"], ["Non egiten duzu lan?", "¿Dónde trabajas?", "📍"]],
    sentences: [["Ni irakaslea naiz.", "Yo soy profesor/a."], ["Zu medikua zara.", "Tú eres médico/a."], ["Ane sukaldaria da.", "Ane es cocinera."], ["Gu ikasleak gara.", "Nosotros somos estudiantes."], ["Zer zara? Diseinatzailea naiz.", "¿Qué eres? Soy diseñador/a."]],
    pattern: "Ni ___ naiz",
    tips: [{ t: "La -a final es el artículo", b: "irakasle + a = el/la profesor/a. En la frase va siempre con -a: Irakaslea naiz. En plural, -ak: irakasleak gara." }, { t: "Sin género", b: "La misma palabra vale para hombre y mujer: medikua es médico y médica." }],
    dialogue: [["A", "Zer zara?", "¿Qué eres?"], ["B", "Ni erizaina naiz. Eta zu?", "Yo soy enfermera. ¿Y tú?"], ["A", "Ni diseinatzailea naiz.", "Yo soy diseñadora."]]
  },
  {
    id: "l9", title: "Nor, zer, zein", desc: "¿Quién? ¿Qué? ¿Cuál?", emoji: "❓", scene: { emoji: "🖼️", title: "Museoan · en el museo" },
    grid: { title: "Nor para personas, zer para cosas, zein para elegir", cols: ["pregunta", "respuesta"], rows: [["Nor da?", "Ane da. (persona)"], ["Zer da?", "Liburua da. (cosa)"], ["Zein da?", "Hori da. (cuál de varios)"]] },
    pairs: [["nor", "quién", "👤"], ["zer", "qué", "📦"], ["zein", "cuál", "👉"], ["Nor da?", "¿Quién es?", "👤"], ["Zer da hau?", "¿Qué es esto?", "📦"], ["Zein da zurea?", "¿Cuál es el tuyo?", "👉"], ["hau", "esto / este", "👇"], ["hori", "eso / ese", "👉"], ["hura", "aquello / aquel", "☝️"], ["Nor zara?", "¿Quién eres?", "❓"], ["Zer da?", "¿Qué es?", "❓"], ["Hau liburua da", "Esto es un libro", "📚"], ["Hori Ane da", "Esa es Ane", "👩"], ["zurea", "el tuyo / la tuya", "🫵"], ["nirea", "el mío / la mía", "🙋"]],
    sentences: [["Nor da hura?", "¿Quién es aquel/aquella?"], ["Hura nire irakaslea da.", "Aquel/aquella es mi profesor/a."], ["Zer da hau?", "¿Qué es esto?"], ["Hau nire liburua da.", "Esto es mi libro."], ["Zein da zure kafea?", "¿Cuál es tu café?"], ["Hori nirea da.", "Ese es el mío."]],
    pattern: "Nor da ___?",
    tips: [{ t: "Nor = persona, zer = cosa", b: "Nor da? (¿quién es?) se contesta con alguien: Ane da. Zer da? (¿qué es?) se contesta con algo: liburua da." }, { t: "Zein = elegir entre varios", b: "Zein da zurea? = ¿cuál es el tuyo? Se responde señalando: hau (esto), hori (eso), hura (aquello)." }],
    dialogue: [["A", "Nor da hura?", "¿Quién es aquella?"], ["B", "Hura Miren da, nire irakaslea.", "Aquella es Miren, mi profesora."], ["A", "Eta zer da hau?", "¿Y qué es esto?"], ["B", "Hau nire liburua da.", "Esto es mi libro."]]
  },
  {
    id: "l10", title: "Dónde vives y de dónde eres", desc: "Non bizi zara? Nongoa zara?", emoji: "🌍", scene: { emoji: "✈️", title: "Aireportuan · en el aeropuerto" },
    grid: { title: "Nongoa zara? (¿de dónde eres?) → lugar + -koa / -ekoa / -goa", cols: ["acaba en…", "ejemplo"], rows: [["vocal → -koa", "Bilbo → Bilbokoa"], ["consonante → -ekoa", "Madril → Madrilekoa"], ["-n → -goa", "Irun → Irungoa"], ["país en vocal → -koa", "Peru → Perukoa"]] },
    pairs: [["Non bizi zara?", "¿Dónde vives?", "🏠"], ["Ni Bilbon bizi naiz", "Yo vivo en Bilbao", "🏙️"], ["Ramon Londresen bizi da", "Ramón vive en Londres", "🇬🇧"], ["Nire osaba Ekuadorren bizi da", "Mi tío vive en Ecuador", "🇪🇨"], ["Gu Perun bizi gara", "Nosotros vivimos en Perú", "🇵🇪"], ["Nongoa zara?", "¿De dónde eres?", "🌍"], ["Ni bilbokoa naiz", "Yo soy de Bilbao", "🏙️"], ["Ni madrilekoa naiz", "Yo soy de Madrid", "🏛️"], ["Ane donostiakoa da", "Ane es de Donostia", "🏖️"], ["Jon irungoa da", "Jon es de Irun", "🌉"], ["Gu argentinakoak gara", "Nosotros somos de Argentina", "🇦🇷"], ["osaba", "tío", "👨"], ["izeba", "tía", "👩"], ["bizi naiz", "vivo", "🏠"], ["bizi da", "vive", "🏠"], ["bizi gara", "vivimos", "🏠"], ["Bilbon", "en Bilbao", "📍"], ["Londresen", "en Londres", "📍"], ["Perun", "en Perú", "📍"], ["Ekuadorren", "en Ecuador", "📍"]],
    sentences: [["Non bizi zara?", "¿Dónde vives?"], ["Ni Bilbon bizi naiz.", "Yo vivo en Bilbao."], ["Ramon Londresen bizi da.", "Ramón vive en Londres."], ["Nire osaba Ekuadorren bizi da.", "Mi tío vive en Ecuador."], ["Gu Perun bizi gara.", "Nosotros vivimos en Perú."], ["Nongoa zara?", "¿De dónde eres?"], ["Ni bilbokoa naiz.", "Yo soy de Bilbao."], ["Nongoa da Ane?", "¿De dónde es Ane?"], ["Ane madrilekoa da.", "Ane es de Madrid."]],
    pattern: "Ni ___n bizi naiz",
    tips: [{ t: "Vivir en: lugar + -n", b: "bizi naiz / bizi da / bizi gara. El lugar lleva -n (en): Bilbo → Bilbon, Peru → Perun. Si acaba en consonante, -en: Londres → Londresen, Ekuador → Ekuadorren." }, { t: "Ser de: lugar + -koa", b: "Bilbo → bilbokoa. Tras consonante, -ekoa: Madril → madrilekoa. Tras -n, -goa: Irun → irungoa. Los países van igual: Argentina → argentinakoa, Peru → perukoa." }, { t: "Nongoa vs non", b: "Nongoa zara? = ¿de dónde eres? (origen). Non bizi zara? = ¿dónde vives? (lugar actual)." }],
    dialogue: [["A", "Nongoa zara?", "¿De dónde eres?"], ["B", "Ni argentinakoa naiz, baina Bilbon bizi naiz. Eta zu?", "Yo soy de Argentina, pero vivo en Bilbao. ¿Y tú?"], ["A", "Ni irungoa naiz eta Donostian bizi naiz.", "Yo soy de Irun y vivo en Donostia."]]
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
  { m: /eta zu\??$/i, t: "Eta zu? = ¿y tú? Devuelve la pregunta para seguir la conversación." },
  { m: /\bgara\b/i, t: "gara = somos (gu). ni naiz · zu zara · hura da · gu gara · zuek zarete · haiek dira." },
  { m: /\bzarete\b/i, t: "zarete = sois (zuek). Ojo: zara es «tú eres», zarete «vosotros sois»." },
  { m: /\bdira\b/i, t: "dira = son (haiek). da es «es» (uno), dira «son» (varios)." },
  { m: /\bgaude\b/i, t: "gaude = estamos (gu). ni nago · zu zaude · hura dago · gu gaude · zuek zaudete · haiek daude." },
  { m: /\bzaudete\b/i, t: "zaudete = estáis (zuek)." },
  { m: /\bdaude\b/i, t: "daude = están (haiek). dago es «está» (uno)." },
  { m: /\bdago\b/i, t: "dago = está (hura). Para cómo está o dónde está; para lo que es, se usa da." },
  { m: /bizi (naiz|da|gara|zara|zarete|dira)/i, t: "Vivir = bizi + ser: bizi naiz, bizi da, bizi gara. El lugar lleva -n: Bilbon, Perun; tras consonante -en: Londresen." },
  { m: /\b\w+(en|n) bizi/i, t: "El lugar donde vives lleva -n (en): Bilbo → Bilbon. Si acaba en consonante, -en: Ekuador → Ekuadorren." },
  { m: /\w+ekoa\b/i, t: "-ekoa = «de» tras consonante: Madril → madrilekoa." },
  { m: /\w+goa\b/i, t: "-goa = «de» tras -n: Irun → irungoa." },
  { m: /\w+koa\b/i, t: "-koa = «de» tras vocal: Bilbo → bilbokoa. Plural: -koak (gu bilbokoak gara)." },
  { m: /^nongoa/i, t: "Nongoa? = ¿de dónde (eres)? Se responde con -koa/-ekoa/-goa. Non? es «dónde» (vives)." },
  { m: /^non bizi/i, t: "Non bizi zara? = ¿dónde vives? Se responde con lugar + -n + bizi naiz." },
  { m: /^nor /i, t: "nor = quién (personas). Para cosas se usa zer." },
  { m: /^zer da/i, t: "zer = qué (cosas). Para personas se usa nor." },
  { m: /^zein/i, t: "zein = cuál (elegir entre varios): Zein da zurea?" },
  { m: /(irakasle|ikasle|mediku|erizain|sukaldari|zerbitzari|abokatu|arkitekto|ingeniari|diseinatzaile|dendari)a\b/i, t: "La profesión lleva -a (artículo) en la frase: irakaslea naiz. En plural, -ak: irakasleak gara." }
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
  { m: /eta zu\??$/i, t: "Eta zu? = ¿y tú? Devuelve la pregunta para seguir la conversación." },
  { m: /\bgara\b/i, t: "gara = somos (gu). ni naiz · zu zara · hura da · gu gara · zuek zarete · haiek dira." },
  { m: /\bzarete\b/i, t: "zarete = sois (zuek). Ojo: zara es «tú eres», zarete «vosotros sois»." },
  { m: /\bdira\b/i, t: "dira = son (haiek). da es «es» (uno), dira «son» (varios)." },
  { m: /\bgaude\b/i, t: "gaude = estamos (gu). ni nago · zu zaude · hura dago · gu gaude · zuek zaudete · haiek daude." },
  { m: /\bzaudete\b/i, t: "zaudete = estáis (zuek)." },
  { m: /\bdaude\b/i, t: "daude = están (haiek). dago es «está» (uno)." },
  { m: /\bdago\b/i, t: "dago = está (hura). Para cómo está o dónde está; para lo que es, se usa da." },
  { m: /bizi (naiz|da|gara|zara|zarete|dira)/i, t: "Vivir = bizi + ser: bizi naiz, bizi da, bizi gara. El lugar lleva -n: Bilbon, Perun; tras consonante -en: Londresen." },
  { m: /\b\w+(en|n) bizi/i, t: "El lugar donde vives lleva -n (en): Bilbo → Bilbon. Si acaba en consonante, -en: Ekuador → Ekuadorren." },
  { m: /\w+ekoa\b/i, t: "-ekoa = «de» tras consonante: Madril → madrilekoa." },
  { m: /\w+goa\b/i, t: "-goa = «de» tras -n: Irun → irungoa." },
  { m: /\w+koa\b/i, t: "-koa = «de» tras vocal: Bilbo → bilbokoa. Plural: -koak (gu bilbokoak gara)." },
  { m: /^nongoa/i, t: "Nongoa? = ¿de dónde (eres)? Se responde con -koa/-ekoa/-goa. Non? es «dónde» (vives)." },
  { m: /^non bizi/i, t: "Non bizi zara? = ¿dónde vives? Se responde con lugar + -n + bizi naiz." },
  { m: /^nor /i, t: "nor = quién (personas). Para cosas se usa zer." },
  { m: /^zer da/i, t: "zer = qué (cosas). Para personas se usa nor." },
  { m: /^zein/i, t: "zein = cuál (elegir entre varios): Zein da zurea?" },
  { m: /(irakasle|ikasle|mediku|erizain|sukaldari|zerbitzari|abokatu|arkitekto|ingeniari|diseinatzaile|dendari)a\b/i, t: "La profesión lleva -a (artículo) en la frase: irakaslea naiz. En plural, -ak: irakasleak gara." }
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
  },
  {
    id: "g-izan", title: "Ser: toda la tabla (izan)", lessons: ["l7", "l8"], emoji: "👥",
    summary: "naiz, zara, da, gara, zarete, dira. El pronombre es opcional porque el verbo ya dice quién.",
    pieces: [{ t: "Gu", k: "subj" }, { t: "ikasleak", k: "obj" }, { t: "gara", k: "verb" }],
    table: { cols: ["pronombre", "izan"], rows: [["ni", "naiz"], ["zu", "zara"], ["hura", "da"], ["gu", "gara"], ["zuek", "zarete"], ["haiek", "dira"]] },
    examples: [["Gu lagunak gara.", "Somos amigos."], ["Zuek ikasleak zarete.", "Sois estudiantes."], ["Haiek irakasleak dira.", "Ellos son profesores."]],
    drills: [{ from: "Ni ikaslea naiz.", to: "Gu ikasleak gara.", es: "Somos estudiantes.", instr: "Cámbialo a «nosotros»" }, { from: "Zu medikua zara.", to: "Zuek medikuak zarete.", es: "Sois médicos.", instr: "Cámbialo a «vosotros»" }, { from: "Hura irakaslea da.", to: "Haiek irakasleak dira.", es: "Ellos son profesores.", instr: "Cámbialo a «ellos»" }, { from: "Gu lagunak gara.", to: "Ni laguna naiz.", es: "Soy amigo/a.", instr: "Cámbialo a «yo»" }]
  },
  {
    id: "g-egon", title: "Estar: toda la tabla (egon)", lessons: ["l7"], emoji: "📍",
    summary: "nago, zaude, dago, gaude, zaudete, daude. Para estados (cansado, contento) y lugares.",
    pieces: [{ t: "Haiek", k: "subj" }, { t: "pozik", k: "obj" }, { t: "daude", k: "verb" }],
    table: { cols: ["pronombre", "egon"], rows: [["ni", "nago"], ["zu", "zaude"], ["hura", "dago"], ["gu", "gaude"], ["zuek", "zaudete"], ["haiek", "daude"]] },
    examples: [["Gu ondo gaude.", "Estamos bien."], ["Zuek nekatuta zaudete.", "Estáis cansados."], ["Hura pozik dago.", "Está contento/a."]],
    drills: [{ from: "Ni ondo nago.", to: "Gu ondo gaude.", es: "Estamos bien.", instr: "Cámbialo a «nosotros»" }, { from: "Zu nekatuta zaude.", to: "Zuek nekatuta zaudete.", es: "Estáis cansados.", instr: "Cámbialo a «vosotros»" }, { from: "Hura pozik dago.", to: "Haiek pozik daude.", es: "Están contentos.", instr: "Cámbialo a «ellos»" }, { from: "Gu lagunak gara.", to: "Gu ondo gaude.", es: "Estamos bien.", instr: "Di «estamos bien» (cambia ser por estar)" }]
  },
  {
    id: "g-nor-zer", title: "Nor / zer / zein", lessons: ["l9"], emoji: "❓",
    summary: "nor pregunta por personas, zer por cosas, zein pide elegir entre varios. Todas van al principio y el verbo detrás.",
    pieces: [{ t: "Zer", k: "q" }, { t: "da", k: "verb" }, { t: "hau", k: "obj" }],
    table: { cols: ["pregunta", "respuesta"], rows: [["Nor da?", "Ane da."], ["Zer da?", "Liburua da."], ["Zein da zurea?", "Hau da."], ["Nor zara?", "Ni Ane naiz."]] },
    examples: [["Nor da hura?", "¿Quién es aquel?"], ["Zer da hau?", "¿Qué es esto?"], ["Zein da zure kafea?", "¿Cuál es tu café?"]],
    drills: [{ from: "Hura Miren da.", to: "Nor da hura?", es: "¿Quién es aquella?", instr: "Haz la pregunta (persona)" }, { from: "Hau liburua da.", to: "Zer da hau?", es: "¿Qué es esto?", instr: "Haz la pregunta (cosa)" }, { from: "Hori nirea da.", to: "Zein da zurea?", es: "¿Cuál es el tuyo?", instr: "Haz la pregunta con «zein»" }, { from: "Zer da hau?", to: "Hau nire liburua da.", es: "Esto es mi libro.", instr: "Responde: esto es mi libro" }]
  },
  {
    id: "g-bizi", title: "Vivir en: -n + bizi", lessons: ["l10"], emoji: "🏠",
    summary: "El lugar lleva -n (o -en tras consonante) y el verbo es bizi + izan: bizi naiz, bizi da, bizi gara.",
    pieces: [{ t: "Ni", k: "subj" }, { t: "Bilbo", k: "obj" }, { t: "-n", k: "num" }, { t: "bizi naiz", k: "verb" }],
    table: { cols: ["lugar", "en + lugar"], rows: [["Bilbo", "Bilbon"], ["Peru", "Perun"], ["Londres", "Londresen"], ["Ekuador", "Ekuadorren"], ["Donostia", "Donostian"]] },
    examples: [["Ni Bilbon bizi naiz.", "Vivo en Bilbao."], ["Ramon Londresen bizi da.", "Ramón vive en Londres."], ["Gu Perun bizi gara.", "Vivimos en Perú."]],
    drills: [{ from: "Ni Bilbon bizi naiz.", to: "Gu Bilbon bizi gara.", es: "Vivimos en Bilbao.", instr: "Cámbialo a «nosotros»" }, { from: "Ramon Londresen bizi da.", to: "Ramon Perun bizi da.", es: "Ramón vive en Perú.", instr: "Ahora vive en Perú" }, { from: "Nire osaba Ekuadorren bizi da.", to: "Nire izeba Ekuadorren bizi da.", es: "Mi tía vive en Ecuador.", instr: "Ahora es mi tía" }, { from: "Ni Donostian bizi naiz.", to: "Non bizi zara?", es: "¿Dónde vives?", instr: "Haz la pregunta" }]
  },
  {
    id: "g-nongoa", title: "De dónde: -koa / -ekoa / -goa", lessons: ["l10"], emoji: "🌍",
    summary: "Nongoa zara? se responde con el lugar + -koa (tras vocal), -ekoa (tras consonante) o -goa (tras -n). Plural: -koak.",
    pieces: [{ t: "Ni", k: "subj" }, { t: "bilbo", k: "obj" }, { t: "-koa", k: "num" }, { t: "naiz", k: "verb" }],
    table: { cols: ["lugar", "de + lugar"], rows: [["Bilbo (vocal)", "bilbokoa"], ["Madril (consonante)", "madrilekoa"], ["Irun (-n)", "irungoa"], ["Peru", "perukoa"], ["Argentina", "argentinakoa"]] },
    examples: [["Ni bilbokoa naiz.", "Soy de Bilbao."], ["Ane madrilekoa da.", "Ane es de Madrid."], ["Jon irungoa da.", "Jon es de Irun."]],
    drills: [{ from: "Ni Bilbon bizi naiz.", to: "Ni bilbokoa naiz.", es: "Soy de Bilbao.", instr: "Di que ERES de ahí (no que vives)" }, { from: "Ane Madrilen bizi da.", to: "Ane madrilekoa da.", es: "Ane es de Madrid.", instr: "Di que ES de ahí" }, { from: "Jon Irunen bizi da.", to: "Jon irungoa da.", es: "Jon es de Irun.", instr: "Di que ES de ahí (acaba en -n)" }, { from: "Ni bilbokoa naiz.", to: "Nongoa zara?", es: "¿De dónde eres?", instr: "Haz la pregunta" }, { from: "Gu Perun bizi gara.", to: "Gu perukoak gara.", es: "Somos de Perú.", instr: "Di que SOIS de ahí (plural: -koak)" }]
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
  "agur, gero arte!": [{ i: "Despídete con «hasta la vista»", to: "Agur, ikusi arte!", es: "¡Adiós, hasta la vista!" }],
  "gu lagunak gara.": [{ i: "Cámbialo a «vosotros»", to: "Zuek lagunak zarete.", es: "Vosotros sois amigos." }, { i: "Cámbialo a «ellos»", to: "Haiek lagunak dira.", es: "Ellos son amigos." }],
  "zuek ikasleak zarete.": [{ i: "Cámbialo a «nosotros»", to: "Gu ikasleak gara.", es: "Nosotros somos estudiantes." }, { i: "Cámbialo a «yo»", to: "Ni ikaslea naiz.", es: "Yo soy estudiante." }],
  "haiek ondo daude.": [{ i: "Cámbialo a «nosotros»", to: "Gu ondo gaude.", es: "Nosotros estamos bien." }, { i: "Cámbialo a «él/ella»", to: "Hura ondo dago.", es: "Él/ella está bien." }],
  "hura nekatuta dago.": [{ i: "Cámbialo a «ellos»", to: "Haiek nekatuta daude.", es: "Ellos están cansados." }, { i: "Cámbialo a «vosotros»", to: "Zuek nekatuta zaudete.", es: "Vosotros estáis cansados." }],
  "gu lagunak gara": [{ i: "Cámbialo a «ellos»", to: "Haiek lagunak dira.", es: "Ellos son amigos." }],
  "haiek ikasleak dira": [{ i: "Cámbialo a «nosotros»", to: "Gu ikasleak gara.", es: "Nosotros somos estudiantes." }],
  "gu ondo gaude": [{ i: "Cámbialo a «vosotros»", to: "Zuek ondo zaudete.", es: "Vosotros estáis bien." }],
  "hura pozik dago": [{ i: "Cámbialo a «ellos»", to: "Haiek pozik daude.", es: "Ellos están contentos." }],
  "ni irakaslea naiz.": [{ i: "Cámbialo a «nosotros»", to: "Gu irakasleak gara.", es: "Somos profesores." }, { i: "Ahora eres médico/a", to: "Ni medikua naiz.", es: "Soy médico/a." }],
  "zu medikua zara.": [{ i: "Cámbialo a «yo»", to: "Ni medikua naiz.", es: "Soy médico/a." }, { i: "Haz la pregunta", to: "Zer zara?", es: "¿Qué eres?" }],
  "ane sukaldaria da.": [{ i: "Cámbialo a «ellos» (Ane eta Jon)", to: "Ane eta Jon sukaldariak dira.", es: "Ane y Jon son cocineros." }],
  "gu ikasleak gara.": [{ i: "Cámbialo a «yo»", to: "Ni ikaslea naiz.", es: "Soy estudiante." }],
  "irakaslea": [{ i: "Haz la frase: soy profesor/a", to: "Ni irakaslea naiz.", es: "Soy profesor/a." }],
  "medikua": [{ i: "Haz la frase: ella es médica", to: "Hura medikua da.", es: "Ella es médica." }],
  "sukaldaria": [{ i: "Plural", to: "sukaldariak", es: "cocineros/as" }],
  "erizaina": [{ i: "Haz la frase: somos enfermeros", to: "Gu erizainak gara.", es: "Somos enfermeros/as." }],
  "nor da hura?": [{ i: "Responde: aquella es Ane", to: "Hura Ane da.", es: "Aquella es Ane." }],
  "zer da hau?": [{ i: "Responde: esto es un libro", to: "Hau liburua da.", es: "Esto es un libro." }],
  "hau nire liburua da.": [{ i: "Haz la pregunta", to: "Zer da hau?", es: "¿Qué es esto?" }, { i: "Ahora es «eso»", to: "Hori nire liburua da.", es: "Eso es mi libro." }],
  "hura nire irakaslea da.": [{ i: "Haz la pregunta", to: "Nor da hura?", es: "¿Quién es aquel/aquella?" }],
  "zein da zure kafea?": [{ i: "Responde: ese es el mío", to: "Hori nirea da.", es: "Ese es el mío." }],
  "hori nirea da.": [{ i: "Ahora es el tuyo", to: "Hori zurea da.", es: "Ese es el tuyo." }],
  "ni bilbon bizi naiz.": [{ i: "Cámbialo a «nosotros»", to: "Gu Bilbon bizi gara.", es: "Vivimos en Bilbao." }, { i: "Ahora vives en Londres", to: "Ni Londresen bizi naiz.", es: "Vivo en Londres." }, { i: "Di que ERES de Bilbao", to: "Ni bilbokoa naiz.", es: "Soy de Bilbao." }],
  "ramon londresen bizi da.": [{ i: "Ahora vive en Perú", to: "Ramon Perun bizi da.", es: "Ramón vive en Perú." }, { i: "Haz la pregunta", to: "Non bizi da Ramon?", es: "¿Dónde vive Ramón?" }],
  "nire osaba ekuadorren bizi da.": [{ i: "Ahora es mi tía", to: "Nire izeba Ekuadorren bizi da.", es: "Mi tía vive en Ecuador." }],
  "gu perun bizi gara.": [{ i: "Cámbialo a «yo»", to: "Ni Perun bizi naiz.", es: "Vivo en Perú." }, { i: "Di que SOIS de Perú", to: "Gu perukoak gara.", es: "Somos de Perú." }],
  "ni bilbokoa naiz.": [{ i: "Haz la pregunta", to: "Nongoa zara?", es: "¿De dónde eres?" }, { i: "Ahora eres de Madrid", to: "Ni madrilekoa naiz.", es: "Soy de Madrid." }, { i: "Ahora eres de Irun", to: "Ni irungoa naiz.", es: "Soy de Irun." }],
  "ane madrilekoa da.": [{ i: "Haz la pregunta", to: "Nongoa da Ane?", es: "¿De dónde es Ane?" }, { i: "Ahora vive en Madrid (no es de allí)", to: "Ane Madrilen bizi da.", es: "Ane vive en Madrid." }],
  "jon irungoa da": [{ i: "Haz la pregunta", to: "Nongoa da Jon?", es: "¿De dónde es Jon?" }],
  "gu argentinakoak gara": [{ i: "Cámbialo a «yo»", to: "Ni argentinakoa naiz.", es: "Soy de Argentina." }],
  "bilbon": [{ i: "Haz la frase: vivo en Bilbao", to: "Ni Bilbon bizi naiz.", es: "Vivo en Bilbao." }],
  "londresen": [{ i: "Haz la frase: vivimos en Londres", to: "Gu Londresen bizi gara.", es: "Vivimos en Londres." }],
  "osaba": [{ i: "Haz la frase: mi tío vive en Perú", to: "Nire osaba Perun bizi da.", es: "Mi tío vive en Perú." }]
};
