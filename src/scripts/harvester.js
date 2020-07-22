// n this module, define and export a harvestPlants function.

// The harvestPlants function must accept the plants array as input.
export const harvestPlants = ( plantsArray ) => {
      // The function will return an array of seed objects.
      // - need empty array and return statement. 
      // Iterate the array of growing plants. 
      plantsArray.forEach( plantObject => {

            let seedArray = []
            // On each plant, get the value of the output property.
            if (plantObject.type === "Corn") {
                 seedArray.push(plantObject * (plantObject.output/2))
            }
            else {
                  seedArray.push(plantObject * plantObject.output)
            }
      })
      return seedArray
}

// Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...

// Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.