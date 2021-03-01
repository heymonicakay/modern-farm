import { addPlant } from "./field.js";
import { createSoybean } from "./seeds/soybean.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createAsparagus } from "./seeds/asparagus.js";

const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

// In this module, define and export a plantSeeds function [x]
export const plantSeeds = (plan) => {
  //The function must accept the year's planting plan as input (i.e. it must define a parameter). [x]

  // The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays. [x]
  /*******************************NESTED LOOPS*******************/
  plan.forEach((row) => {
    row.forEach((plant) => {
      //As you iterate the row of plants to be planted, invoke the corresponding factory function (e.g. if the plant is "Asparagus", invoke the createAsparagus function to get an asparagus seed).[x]
      switch (plant) {
        case "Asparagus":
          addPlant(asparagusSeed);
          break;
        case "Corn":
          addPlant(cornSeed);
          break;
        case "Potato":
          addPlant(potatoSeed);
          break;
        case "Soybean":
          addPlant(soybeanSeed);
          break;
        case "Sunflower":
          addPlant(sunflowerSeed);
          break;
        case "Wheat":
          addPlant(wheatSeed);
          break;
        default:
          break;
      }

      // IF...ELSE version with seed variables declared inside of conditionals

      //   if (plant === "Asparagus") {
      //     const asparagusSeed = createAsparagus();
      //     addPlant(asparagusSeed);
      //   }
      //   else if (plant === "Corn") {
      //     const cornSeed = createCorn();
      //     addPlant(cornSeed);
      //   }
      //   else if (plant === "Potato") {
      //     const potatoSeed = createPotato();
      //     addPlant(potatoSeed);
      //   }
      //   else if (plant === "Soybean") {
      //     const soybeanSeed = createSoybean();
      //     addPlant(soybeanSeed);
      //   }
      //   else if (plant === "Sunflower") {
      //     const sunflowerSeed = createSunflower();
      //     addPlant(sunflowerSeed);
      //   }
      //   else if (plant === "Wheat") {
      //     const wheatSeed = createWheat();
      //     addPlant(wheatSeed);
      //   }
    });
  });
};

/* Use .forEach Array Method
    -- "for each BLANK within array called BLANK (before the .)" => "do BLANK"
    -- "for each ROW within array called PLAN" => "iterate over the row"
        -- "for each PLANT within array called ROW" => "invoke function to add that specific PLANT"
  */

// current output is one long array.
// the yearlyPlan generates three arrays (rows).
// total number of objects and order of objects matches, but unsure how to match the nested array thing that yearlyPlan has goin on...
