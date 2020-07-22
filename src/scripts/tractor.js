// In this module, define and export a plantSeeds function
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

import { addPlants } from './field.js';
import { usePlants } from "./field.js";

import { createPlan } from "./plan.js";


export const plantSeeds = () => {
      // The plan is an array.
      const plantingPlan = createPlan() 

      for (const row of plantingPlan) {
            for (const food of row) {
                  if (food === "Asparagus") {
                        createAsparagus()
                  }
                  else if (food === "Corn") {
                        createCorn()
                  }
                  else if (food === "Potato") {
                        createPotato()
                  }
                  else if (food === "Soybean") {
                        createSoybean()
                  }
                  else if (food === "Sunflower") {
                        createSunflower()
                  }
                  else if (food === "Wheat") {
                        createWheat()
                  }
            }
      }
      // It contains 4 arrays representing the rows in the field to be plants. 
      // Figure out how to iterate both the parent array and the child arrays.
}
