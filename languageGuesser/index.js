const franc = require("franc");
const langs = require("langs");

const text = process.argv[2];

const languageCode = franc(text);

if (languageCode === "und") {
  console.log(
    "Lo lamento, no hice match con ningún mensaje, intenta añadir más palabras"
  );
} else {
  const languageName = langs.where("3", languageCode);
  console.log(`Nuestra mejor predicción es: ${languageName.name}`);
}
