console.log("Welcome to the main module");

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./Catalog.js";

const yearlyPlan = createPlan();
// In the main.js module, invoke the function that plants all of the seeds,
console.log(yearlyPlan);

plantSeeds(yearlyPlan);

//In the main.js module, get the array of plants from the field module, [x]
const arrayOfPlants = usePlants(); // returns data, so we need to store that data in a variable
console.log(arrayOfPlants); // arrayOfPlants is equal to the value of the plant array

// and then harvest them by invoking the harvestPlants function [x]
const harvestedFood = harvestPlants(arrayOfPlants);
// Make sure you specify the array of plants as an argument to the harvesting function. [x]
// Then use console.log() to see your new array of harvested food to sell. [x]

// In the main.js module, invoke the Catalog function [x]
Catalog(harvestedFood);
//and make sure you pass the array of food as an argument.[x]
