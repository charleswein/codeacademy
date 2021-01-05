//mixedMedicalСheckUp
const medData = {
  listOfDiaseases: ["rhinitis", "pharyngitis", "pneumonia", "sinusitis"],
  symptoms: [
    "rhinorrhea",
    "sneezing",
    "anosmia",
    "muffled voice",
    "sore throat",
    "temperature",
    "fever",
    "headache",
    "dyspnea",
    "chest pain",
    "wheezing",
    "nasal congestion",
    "dry mouth"
  ],
  medicalResearches: {
    pneumonia: ["lung auscultation","full blood analysis","chest X-ray", "bacterioscopy"],
    sinusitis: ["anterior rhinoscopy","full blood analysis","rhino-sinuses X-ray or CT"],
    pharyngitis: ["anterior pharyngoscopy", "full blood analysis","bacterioscopy"],
    rhinitis: ["anterior rhinoscopy", "full blood analysis", "allergen provocation testing"]
  },
  finalPhrase: [
    "Be healthy!",
    `Don't forget about medical researches!`,
    "Get well!",
    "Check up you health though two times for a year!"
  ],
  symptomsOfDisease: {
    rhinitis: ["sneezing", "rhinorrhea", "temperature", "headache"],
    pharyngitis: ["sore throat", "muffled voice", "temperature", "dry mouth"],
    sinusitis: ["headache", "fever", "nasal congestion", "anosmia"],
    pneumonia: ["fever", "dyspnea", "wheezing", "chest pain"],
  },
};

function mixedMedicalСheckUp(data) {

  const {symptoms, symptomsOfDisease , medicalResearches, finalPhrase} = data;

  function getRandomNum(num) {
    return Math.floor(Math.random() * num);
  }

  const getThreeSymtom = function (sympt) {
    let randomIndex = getRandomNum(sympt.length);
    let threeSymptom = [];
    while (threeSymptom.length !== 3) {
      if (!threeSymptom.includes(sympt[randomIndex])) {
        threeSymptom.push(sympt[randomIndex]);
      } else {
        randomIndex = getRandomNum(sympt.length);
      }
    }
    return threeSymptom;
  };
  const threeSympt = getThreeSymtom(symptoms);
  function getDiagnosis(sOd) {
    const threeSymptom = threeSympt;
    let arrayOfIndenticalSymptoms = [];
    for (let key in sOd) {
      const indenticalSymptoms = sOd[key].filter((symptom) =>
        threeSymptom.includes(symptom)
      );
      arrayOfIndenticalSymptoms.push(indenticalSymptoms.length);
    }
    const indexMaxNum = arrayOfIndenticalSymptoms.reduce(
      (acum, elem, i, arr) => (elem > arr[acum] ? i : acum),
      0
    );
    switch (indexMaxNum) {
      case 0:
        return "rhinitis";
      case 1:
        return "pharyngitis";
      case 2:
        return "sinusitis";
      case 3:
        return "pneumonia";
      default:
        "Something new!";
    }
  }
  const diagnosis = getDiagnosis(symptomsOfDisease);

  const messages = (diagn, sympt, medRes, finprase) => {
    console.log(`Our diagnosis is a ${diagn}!`);
    console.log(`Because you have a symptoms as ${sympt.join(", ")}!`);
    console.log(`You must pass a medical research as ${medRes[diagn].join(', ')}.`);
    console.log(finprase[getRandomNum(finprase.length)]);
  };
  messages(diagnosis, threeSympt, medicalResearches, finalPhrase);
}
mixedMedicalСheckUp(medData)
