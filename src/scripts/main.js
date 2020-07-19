console.log("Welcome to the main module")

import { createPlan } from "./scripts/plan.js";

createPlan()

const yearlyPlan = createPlan()

console.log(yearlyPlan)