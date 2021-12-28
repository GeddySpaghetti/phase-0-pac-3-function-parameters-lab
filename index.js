function introduction(name = "Samip") {
    return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name = "aki", language = Ember) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

  const name = "Gracie"
  function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript"){
      return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
  }