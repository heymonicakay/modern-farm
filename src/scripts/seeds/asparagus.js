// define and export a function for creating a seed. 

export const createAsparugus = (thisCrop) => {
      // return an object with the following properties:
      // type
      // height
      // output
      return `
            <section class="plant--card">
            <div class="plant__type">${thisCrop.type}</div>
            <div class="plant__height">${thisCrop.height}</div>
            <div class="plant__output">${thisCrop.output}</div>
            `
}