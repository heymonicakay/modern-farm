// In this module, define and export a plantSeeds function
import { createPlan } from "./plan.js";
// declarying variable for create plan

const plantingPlan = createPlan();

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

// declaring variables for each function 

const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = creatWheat();

// need to "add plants" to the field array

import { addPlants } from './field.js';

 // Figure out how to iterate both the parent array and the child arrays.
export const plantSeeds = (plantingPlan) => {
// use .forEach -- "for each object within the ____ (before the .)" => what should happen.

      plantingPlan.forEach((row) => {
            row.forEach((food) => {
                  // use if/else if to determine which types of seeds will be 'added' to the array. If the food listed is equal to the string "Asparagus", then we will invoke the create asparagus function by using the variable asparagusSeed. then we will pass in that seed as the argument for our function addPlants (import above), which adds the plant object to the empty field array.
                  if (food === "Asparagus") {
                        addPlants(asparagusSeed)
                  }
                  else if (food === "Corn") {
                       addPlants(cornSeed)
                  }
                  else if (food === "Potato") {
                       addPlants(potatoSeed)
                  }
                  else if (food === "Soybean") {
                        addPlants(soybeanSeed)
                  }
                  else if (food === "Sunflower") {
                        addPlants(sunflowerSeed)
                  }
                  else if (food === "Wheat") {
                        addPlants(wheatSeed)
                  }
            }
      }
     
      
}
