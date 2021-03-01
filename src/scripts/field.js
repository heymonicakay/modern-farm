/*
Define a variable in this module whose initial value is an empty array. [x]
This array will store all of the plants that are growing in the field. [x]
Do not export the array.[x]
*/

const field = [];

// In the module, define and export a function named addPlant. [x]
// The addPlant function must accept a seed object as input.[x]
// The function will add the seed to the field [x]
// How do you add something to an array? [x] - The .push() Method
export const addPlant = (seedObject) => {
  // ******* Be aware that when planting corn, an array of objects will be provided
  // ******* instead of a single object like all the other type of seeds.
  // ---------------------------------------------------------------------------------
  // Investigate the Array.isArray method.....
  // -------------- Array.isArray(thing) returns BOOLEAN
  // -------------- [if thing is an array, true; if thing is not an array, false]
  // ... to check if corn got passed in, or one of the others. [x]

  // NEED TO CHECK IF 'seedObject' IS AN ARRAY FIRST [x]
  if (Array.isArray(seedObject) === true) {
    // if 'seedObject' IS an array... then it's fucking corn
    const fuckingCornArray = seedObject;
    fuckingCornArray.forEach((singleSeed) => {
      // and for every single 'seedObject' within the array called 'seedObject'...
      field.push(singleSeed);
      // we gotta PUSH it into the array called 'field' [x]
    });
  } else {
    // if 'seedObject' is NOT an array... then it's just a regular seed object.
    field.push(seedObject);
    // PUSH it into the array called 'field' [x]
  }
};

/*
Define and export a function named usePlants
that returns a copy/SLICE of the array of plants. [x]
*/
export const usePlants = () => field.slice();
