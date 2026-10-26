// Contenido de las lecciones. Para añadir una clase nueva, agrega un objeto más al array.
// pairs:     [euskera, castellano] -> ejercicios de elección múltiple en ambos sentidos
// sentences: [euskera, castellano] -> ordenar fichas y escribir
window.LESSONS = [
  {
    id: "l1", title: "Saludos y despedidas", desc: "Kaixo, egun on, agur…",
    pairs: [["Kaixo", "Hola"], ["Egun on", "Buenos días"], ["Arratsalde on", "Buenas tardes"], ["Gabon", "Buenas noches"], ["Agur", "Adiós"], ["Ikusi arte", "Hasta la vista"], ["Gero arte", "Hasta luego"], ["Eskerrik asko", "Gracias"]],
    sentences: [["Egun on!", "¡Buenos días!"], ["Kaixo! Zer moduz?", "¡Hola! ¿Qué tal?"], ["Agur, gero arte!", "¡Adiós, hasta luego!"]]
  },
  {
    id: "l2", title: "Presentarse", desc: "Nola duzu izena? Ni … naiz",
    pairs: [["Nola duzu izena?", "¿Cómo te llamas?"], ["Zein da zure izena?", "¿Cuál es tu nombre?"], ["Ni Ane naiz", "Yo soy Ane"], ["Nire izena Ane da", "Mi nombre es Ane"], ["Pozten naiz", "Encantado/a"], ["ni", "yo"], ["nire", "mi"], ["izena", "nombre"]],
    sentences: [["Ni Mikel naiz.", "Yo soy Mikel."], ["Nire izena Ane da.", "Mi nombre es Ane."], ["Nola duzu izena?", "¿Cómo te llamas?"], ["Pozten naiz!", "¡Encantado!"]]
  },
  {
    id: "l3", title: "¿Qué tal?", desc: "Zer moduz? Ondo, eta zu?",
    pairs: [["Zer moduz?", "¿Qué tal?"], ["Oso ondo", "Muy bien"], ["Ondo", "Bien"], ["Hala-hola", "Así así"], ["Gaizki", "Mal"], ["Nekatuta", "Cansado/a"], ["Eta zu?", "¿Y tú?"], ["Zer moduz zaude?", "¿Cómo estás?"]],
    sentences: [["Ondo, eskerrik asko. Eta zu?", "Bien, gracias. ¿Y tú?"], ["Oso ondo nago.", "Estoy muy bien."], ["Hala-hola, nekatuta nago.", "Así así, estoy cansado."]]
  },
  {
    id: "l4", title: "La edad y los números", desc: "Zenbat urte dituzu?",
    pairs: [["Zenbat urte dituzu?", "¿Cuántos años tienes?"], ["urte", "año(s)"], ["bat", "1"], ["bi", "2"], ["hiru", "3"], ["lau", "4"], ["bost", "5"], ["sei", "6"], ["zazpi", "7"], ["zortzi", "8"], ["bederatzi", "9"], ["hamar", "10"], ["hamaika", "11"], ["hamabi", "12"], ["hamabost", "15"], ["hogei", "20"], ["hogeita hamar", "30"], ["berrogei", "40"], ["berrogeita hamar", "50"], ["hirurogei", "60"], ["hogeita bost", "25"], ["berrogeita bi", "42"]],
    sentences: [["Zenbat urte dituzu?", "¿Cuántos años tienes?"], ["Hogeita hamar urte ditut.", "Tengo treinta años."], ["Hogeita zortzi urte ditut.", "Tengo veintiocho años."], ["Berrogei urte ditu.", "Tiene cuarenta años."]]
  },
  {
    id: "l5", title: "Gustos", desc: "Gustatzen zait / zaizkit",
    pairs: [["Zer gustatzen zaizu?", "¿Qué te gusta?"], ["Musika gustatzen zait", "Me gusta la música"], ["Liburuak gustatzen zaizkit", "Me gustan los libros"], ["Ez zait gustatzen hotza", "No me gusta el frío"], ["Asko gustatzen zait", "Me gusta mucho"], ["zinema", "cine"], ["kirola", "deporte"], ["janaria", "comida"], ["pintxoak", "pintxos"], ["bidaiatzea", "viajar"], ["sukaldatzea", "cocinar"], ["hotza", "frío"]],
    sentences: [["Musika gustatzen zait.", "Me gusta la música."], ["Pintxoak gustatzen zaizkit.", "Me gustan los pintxos."], ["Ez zait gustatzen hotza.", "No me gusta el frío."], ["Zinema asko gustatzen zait.", "Me gusta mucho el cine."]]
  }
];
