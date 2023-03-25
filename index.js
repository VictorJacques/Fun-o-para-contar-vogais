function contarVogais(word) {
  if (typeof word !== "string") {
    console.log("Não é uma string!");
  } else {
    var numeroVogais = (word.match(/[aeiou]/gi) || []).length;
    if (numeroVogais > 0) {
      console.log(numeroVogais);
    } else {
      console.log("Nenhuma Vogal!");
    }
  }
}
contarVogais("s");
