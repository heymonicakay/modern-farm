// n this module, define and export a harvestPlants function.

// The harvestPlants function must accept the plants array as input.
export const harvestPlants = ( plantsArray ) => {
      // The function will return an array of seed objects.
      // - need empty array and return statement. 
      let seedArray = []
      // Iterate the array of growing plants. 
      plantsArray.forEach((seedObject) => {
            // On each plant, get the value of the output property.
            if (seedObject.type === "Corn") {
                 const fuckingCorn = seedObject.output/2
                 // iterate over cornObject half the number of times as the output value
                 for (let i = 0; i < fuckingCorn; i++) {
                       // then push the seedObject into the seedArray
                       seedArray.push(seedObject)
                 }
            }
            // but if it's NOT corn, then we wanna iterate over the object the number of times as the output value.
            else {
                  const crop = seedObject.output

                  for ( let i = 0; i < crop; i++) {
                        //then push the seedObject into the seedArray
                        seedArray.push(seedObject)
                  }
            }
      })
      return seedArray
}

// Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...

// Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.