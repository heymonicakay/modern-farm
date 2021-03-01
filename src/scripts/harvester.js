// In this module, define and export a harvestPlants function. [x]

// The harvestPlants function must accept the plants array as input. [x]
export const harvestPlants = (plantsArray) => {
  // The function will return an array of seed objects. [x] line 29
  let arrayOfSeedObjects = []; // - need empty array and return statement. [x] [x]

  // Iterate the array of plants. [x]
  plantsArray.forEach((plant) => {
    // On each plant, get the value of the output property. [x]
    let plantOutput = plant.output;

    // If it's corn... FUCK corn.
    if (plant.type === "Corn") {
      // iterate over corn half the number of times as the output value [x]
      let fuckingCorn = plantOutput / 2;
      // then loop [x]
      for (let i = 0; i < fuckingCorn; i++) {
        // then PUSH the plant into the seedArray [x]
        arrayOfSeedObjects.push(plant);
      }
    }
    // but if it's NOT corn...
    else {
      // then loop
      for (let i = 0; i < plantOutput; i++) {
        //then push the plant into the seedArray [x]
        arrayOfSeedObjects.push(plant);
      }
    }
  });
  return arrayOfSeedObjects;
};
