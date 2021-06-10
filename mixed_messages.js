//This program informs you about your life in a parallel universe.

const returnRandRealm = () => {
  const realms = ["in Gondor", "in Narnia", "on The Diagon Alley", "in Lumpaland"];
  return realms[Math.floor(Math.random() * 4)];
};
const returnRandIdentity = () => {
  const identities = [
    "you are a bad-mannered purple rabbit, called Ezekiel",
    "you are a freshly graduated executioner, called Mimosa",
    "you happen to be an outcast one-headed dragon, called Susu",
    "you happen to be an irrelevant-to-all, pale-green, four-legged cotton candy whom nobody bothered giving a name to,",
  ];
  return identities[Math.floor(Math.random() * 4)];
};
const returnRandTalent = () => {
  const talents = [
    "your biggest achievement is being able to reciting all the days of the week",
    "you are talented at shaving cats in their sleep",
    "you have mastery in the art of never sneezing in front of dwarfs",
    "your way of training ladybirds how to gain more spots is famous all-across the area",
  ];
  return talents[Math.floor(Math.random() * 4)];
};
const returnRandPrediction = () => {
  const predictions = [
    " and according to the local future teller, you will be crucified for saying that the Earth is not that flat",
    "and according to the local future teller, you will be stabbed in your sleep next Tuesday for fun",
    "and according to the local future teller, you will marry a white goat for her rectengular pupil",
    "and according to the local future teller, you will lift Thor's hammer",
  ];
  return predictions[Math.floor(Math.random() * 4)];
};

const parallelUniverse = [];
parallelUniverse.push(
  returnRandRealm(),
  returnRandIdentity(),
  returnRandTalent(),
  returnRandPrediction()
);
const joinedSentence = parallelUniverse.join(" ");
console.log(`You live ${joinedSentence}.`);
