const generateAstronautTag = (astronaut) => {
  exampleAstronaut.nickname + " " + exampleAstronaut.lastName;
  let final = astronaut.prefix + ": " + astronaut.firstName + " " + '"' +astronaut.nickname + '"' + " " + astronaut.lastName;
  return final;
  };
  