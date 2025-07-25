const player1 = {
  name: "Valentina",
  CATWALK: 5,
  COMEDYQUEEN: 1,
  LOOK: 4,
  RUBROOCH: 0,
}

const player2 = {
  name: "Denali",
  CATWALK: 4,
  COMEDYQUEEN: 3,
  LOOK: 2,
  RUBROOCH: 0,
}

const player3 = {
  name: "Gotmik",
  CATWALK: 3,
  COMEDYQUEEN: 4,
  LOOK: 5,
  RUBROOCH: 0,
}

const player4 = {
  name: "Bianca Del Rio",
  CATWALK: 2,
  COMEDYQUEEN: 5,
  LOOK: 3,
  RUBROOCH: 0,
}

const player5 = {
  name: "Nicky Doll",
  CATWALK: 3,
  COMEDYQUEEN: 4,
  LOOK: 4,
  RUBROOCH: 0,
}

const player6 = {
  name: " Brooke Lynn Hytes",
  CATWALK: 3,
  COMEDYQUEEN: 2,
  LOOK: 5,
  RUBROOCH: 0,
}

async function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random()
  let result

  switch (true){
    case random < 0.33:
      result = "MINICHALLENGE"
    break;
    case random < 0.66:
      result = "SNATCHGAME"
      break;
    default:
      result = "MAXICHALLENGE";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName.name} 🎲 the judges critic ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2){

  for( let round = 1; round <= 5; round++){
    console.log(`🏳‍🌈🚨 Epsodio ${round} começando...`);

    //sortear block
    let block = await getRandomBlock()
    console.log(`Category is: ${block}`);

      // rolar dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestskill1 = 0;
    let totalTestskill2 = 0;

    if(block === "MINICHALLENGE"){
      totalTestskill1 = diceResult1 + character1.CATWALK;
      totalTestskill2 = diceResult2 + character2.CATWALK;

      await logRollResult(
        character1,
        "Catwalk", 
        diceResult1, 
        character1.CATWALK
      );
      await logRollResult(
        character2,
        "Catwalk", 
        diceResult2, 
        character2.CATWALK
      );

    } else if(block === "SNATCHGAME"){
      totalTestskill1 = diceResult1 + character1.COMEDYQUEEN;
      totalTestskill2 = diceResult2 + character2.COMEDYQUEEN;

      await logRollResult(
        character1,
        "Comedy Queen", 
        diceResult1, 
        character1.COMEDYQUEEN
      );
      await logRollResult(
        character2,
        "Comedy Queen", 
        diceResult2, 
        character2.COMEDYQUEEN
      );

    } else if(block === "MAXICHALLENGE"){
      let powerResult1 = diceResult1 + character1.LOOK;
      let powerResult2 = diceResult2 + character2.LOOK;

      console.log(`${character1.name} Shantay you stay ${character2.name} Sashay away!`);

      await logRollResult(
        character1,
        "Look", 
        diceResult1, 
        character1.LOOK
      );
      await logRollResult(
        character2,
        "Look", 
        diceResult2, 
        character2.LOOK
      );

      // Verificar se o poder é maior que 0
      if(powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} Top all star 2 ⭐ ${character2.NOME} botton 🐷.`
        );
        character2.PONTOS--;
      } 

      if(powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} Top all star 2 ⭐ ${character1.NOME} botton 🐷.`
        );
        character1.PONTOS--;
      } 

      console.log(
        powerResult2 === powerResult1
          ? "Both queens are safe! 🏳️‍🌈"
          : ""
      );
    }

    //Verificar quem ganhou a rodada (exceto confronto)
    if(totalTestskill1 > totalTestskill2) {
          console.log(`${character1.NOME} Voce ganhou um RuBrooch!`);
          character1.PONTOS++;
      } else if(totalTestskill2 > totalTestskill1) {
          console.log(`${character2.NOME} Voce ganhou um RuBrooch!`);
          character2.PONTOS++;
      } 
    }

    console.log(`*------------------------*`);
}


async function declareWinner(character1, character2) {
  console.log(`🏳‍🌈🚨 The time is comming to the lipsync for the crown 👑🏁`);
  console.log(`${character1.NOME} tem ${character1.PONTOS} RUbrooche.`);
  console.log(`${character2.NOME} tem ${character2.PONTOS} RUbrooche.`);

  if(character1.PONTOS > character2.PONTOS) 
    console.log(`\n🏆 ${character1.NOME} Your winner baby! 🎉`);
  else if(character2.PONTOS > character1.PONTOS)
    console.log(`\n🏆 ${character2.NOME} Your winner baby! 🎉`);
  else 
    console.log("\nWe are superqueen 🤝");
}
(async function main(){
  console.log(`🏳‍🌈🚨 May the best drag queen win...\n ${player1.NOME} e ${player6.NOME} \n`);

  await playRaceEngine(player1, player6);
  await declareWinner(player1, player6);
})();

