console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";


const yearlyPlan = createPlan()
// In the main.js module, invoke the function that plants all of the seeds, 
console.log(yearlyPlan)
plantSeeds(yearlyPlan)

// and then get the plants array from the fields.js module. 
const allCrops = usePlants()

console.log(allCrops)
