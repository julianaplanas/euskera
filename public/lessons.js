// Contenido de las lecciones. Para añadir una clase nueva, agrega un objeto más al array.
// pairs:     [euskera, castellano, emoji] -> tarjetas visuales y elección múltiple en ambos sentidos
// sentences: [euskera, castellano]        -> ordenar fichas y escribir
// pattern:   la estructura clave, con ___ donde va la palabra que cambia
// tips:      [{t: título, b: explicación}] -> cajas de "cómo funciona"
// dialogue:  [[quién, euskera, castellano], ...] -> mini diálogo de ejemplo
window.LESSONS = [
  {
    id: "l1", title: "Saludos y despedidas", desc: "Kaixo, egun on, agur…", emoji: "👋",
    pairs: [["Kaixo", "Hola", "👋"], ["Egun on", "Buenos días", "🌅"], ["Arratsalde on", "Buenas tardes", "🌇"], ["Gabon", "Buenas noches", "🌙"], ["Agur", "Adiós", "🚪"], ["Ikusi arte", "Hasta la vista", "👀"], ["Gero arte", "Hasta luego", "⏰"], ["Eskerrik asko", "Gracias", "🙏"]],
    sentences: [["Egun on!", "¡Buenos días!"], ["Kaixo! Zer moduz?", "¡Hola! ¿Qué tal?"], ["Agur, gero arte!", "¡Adiós, hasta luego!"]],
    pattern: "___ on",
    tips: [{ t: "on = bueno", b: "Egun (día), arratsalde (tarde) y gau (noche) + on. Gabon es gau + on fusionado." }, { t: "Kaixo vale siempre", b: "Es el hola de todo el día. Agur sirve para despedirse en cualquier momento." }],
    dialogue: [["A", "Kaixo!", "¡Hola!"], ["B", "Egun on! Zer moduz?", "¡Buenos días! ¿Qué tal?"], ["A", "Ondo. Agur, gero arte!", "Bien. ¡Adiós, hasta luego!"]]
  },
  {
    id: "l2", title: "Presentarse", desc: "Nola duzu izena? Ni … naiz", emoji: "🙋",
    pairs: [["Nola duzu izena?", "¿Cómo te llamas?", "❓"], ["Zein da zure izena?", "¿Cuál es tu nombre?", "🪪"], ["Ni Ane naiz", "Yo soy Ane", "🙋‍♀️"], ["Nire izena Ane da", "Mi nombre es Ane", "✍️"], ["Pozten naiz", "Encantado/a", "🤝"], ["ni", "yo", "👤"], ["nire", "mi", "👈"], ["izena", "nombre", "🏷️"]],
    sentences: [["Ni Mikel naiz.", "Yo soy Mikel."], ["Nire izena Ane da.", "Mi nombre es Ane."], ["Nola duzu izena?", "¿Cómo te llamas?"], ["Pozten naiz!", "¡Encantado!"]],
    pattern: "Ni ___ naiz",
    tips: [{ t: "El verbo va al final", b: "Ni Ane naiz = yo Ane soy. Naiz es «soy»; da es «es»: Nire izena Ane da." }, { t: "Dos formas de preguntar", b: "Nola duzu izena? (¿cómo tienes nombre?) y Zein da zure izena? (¿cuál es tu nombre?). Las dos valen." }],
    dialogue: [["A", "Nola duzu izena?", "¿Cómo te llamas?"], ["B", "Ni Mikel naiz. Eta zu?", "Yo soy Mikel. ¿Y tú?"], ["A", "Nire izena Ane da. Pozten naiz!", "Mi nombre es Ane. ¡Encantada!"]]
  },
  {
    id: "l3", title: "¿Qué tal?", desc: "Zer moduz? Ondo, eta zu?", emoji: "😊",
    pairs: [["Zer moduz?", "¿Qué tal?", "❓"], ["Oso ondo", "Muy bien", "😄"], ["Ondo", "Bien", "🙂"], ["Hala-hola", "Así así", "😐"], ["Gaizki", "Mal", "😞"], ["Nekatuta", "Cansado/a", "🥱"], ["Eta zu?", "¿Y tú?", "👉"], ["Zer moduz zaude?", "¿Cómo estás?", "💬"]],
    sentences: [["Ondo, eskerrik asko. Eta zu?", "Bien, gracias. ¿Y tú?"], ["Oso ondo nago.", "Estoy muy bien."], ["Hala-hola, nekatuta nago.", "Así así, estoy cansado."]],
    pattern: "___ nago",
    tips: [{ t: "nago = estoy", b: "Ondo nago (estoy bien), nekatuta nago (estoy cansado). Oso delante intensifica: oso ondo = muy bien." }, { t: "Devuelve la pregunta", b: "Eta zu? (¿y tú?) cierra la respuesta: Ondo, eskerrik asko. Eta zu?" }],
    dialogue: [["A", "Zer moduz?", "¿Qué tal?"], ["B", "Oso ondo, eskerrik asko. Eta zu?", "Muy bien, gracias. ¿Y tú?"], ["A", "Hala-hola, nekatuta nago.", "Así así, estoy cansada."]]
  },
  {
    id: "l4", title: "La edad y los números", desc: "Zenbat urte dituzu?", emoji: "🎂",
    pairs: [["Zenbat urte dituzu?", "¿Cuántos años tienes?", "🎂"], ["urte", "año(s)", "📅"], ["bat", "1", "1️⃣"], ["bi", "2", "2️⃣"], ["hiru", "3", "3️⃣"], ["lau", "4", "4️⃣"], ["bost", "5", "5️⃣"], ["sei", "6", "6️⃣"], ["zazpi", "7", "7️⃣"], ["zortzi", "8", "8️⃣"], ["bederatzi", "9", "9️⃣"], ["hamar", "10", "🔟"], ["hamaika", "11", "🔢"], ["hamabi", "12", "🔢"], ["hamabost", "15", "🔢"], ["hogei", "20", "🔢"], ["hogeita hamar", "30", "🔢"], ["berrogei", "40", "🔢"], ["berrogeita hamar", "50", "🔢"], ["hirurogei", "60", "🔢"], ["hogeita bost", "25", "🔢"], ["berrogeita bi", "42", "🔢"]],
    sentences: [["Zenbat urte dituzu?", "¿Cuántos años tienes?"], ["Hogeita hamar urte ditut.", "Tengo treinta años."], ["Hogeita zortzi urte ditut.", "Tengo veintiocho años."], ["Berrogei urte ditu.", "Tiene cuarenta años."]],
    pattern: "___ urte ditut",
    tips: [{ t: "Se cuenta de 20 en 20", b: "30 = hogeita hamar (20 y 10). 42 = berrogeita bi (40 y 2). 57 = berrogeita hamazazpi (40 y 17)." }, { t: "ditut, no dut", b: "Los años son varios, así que el verbo es plural: hogei urte ditut. Para otra persona: hogei urte ditu." }],
    dialogue: [["A", "Zenbat urte dituzu?", "¿Cuántos años tienes?"], ["B", "Hogeita hamabost urte ditut. Eta zuk?", "Tengo treinta y cinco. ¿Y tú?"], ["A", "Berrogei urte ditut.", "Tengo cuarenta."]]
  },
  {
    id: "l5", title: "Gustos", desc: "Gustatzen zait / zaizkit", emoji: "❤️",
    pairs: [["Zer gustatzen zaizu?", "¿Qué te gusta?", "❓"], ["Musika gustatzen zait", "Me gusta la música", "🎵"], ["Liburuak gustatzen zaizkit", "Me gustan los libros", "📚"], ["Ez zait gustatzen hotza", "No me gusta el frío", "🥶"], ["Asko gustatzen zait", "Me gusta mucho", "❤️"], ["zinema", "cine", "🎬"], ["kirola", "deporte", "⚽"], ["janaria", "comida", "🍽️"], ["pintxoak", "pintxos", "🍢"], ["bidaiatzea", "viajar", "✈️"], ["sukaldatzea", "cocinar", "🍳"], ["hotza", "frío", "❄️"]],
    sentences: [["Musika gustatzen zait.", "Me gusta la música."], ["Pintxoak gustatzen zaizkit.", "Me gustan los pintxos."], ["Ez zait gustatzen hotza.", "No me gusta el frío."], ["Zinema asko gustatzen zait.", "Me gusta mucho el cine."]],
    pattern: "___ gustatzen zait",
    tips: [{ t: "zait / zaizkit", b: "Una cosa: musika gustatzen zait. Varias: liburuak gustatzen zaizkit (la -k final marca plural)." }, { t: "Negativo con ez", b: "Ez va delante del verbo auxiliar: Ez zait gustatzen hotza. Para actividades, el verbo acaba en -tzea: bidaiatzea gustatzen zait." }],
    dialogue: [["A", "Zer gustatzen zaizu?", "¿Qué te gusta?"], ["B", "Zinema asko gustatzen zait. Eta zuri?", "Me gusta mucho el cine. ¿Y a ti?"], ["A", "Pintxoak gustatzen zaizkit!", "¡Me gustan los pintxos!"]]
  }
];
