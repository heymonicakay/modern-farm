console.log("Welcome to the main module")

import { createPlan } from "./plan.js";

createPlan()

const yearlyPlan = createPlan()

console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()

import { addPlant } from "./field.js";
const plantSeed = addPlant(cornSeed)

import { usePlants } from "./field.js";
const allCrops = usePlants()

console.log(allCrops)