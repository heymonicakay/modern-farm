// define and export a function for creating a seed. 

export const createPotato = (thisCrop) => {
      // return an object with the following properties:
      // type
      // height
      // output
      return `
            <section class="crop--card">
            <div class="crop__type">${thisCrop.type}</div>
            <div class="crop__height">${thisCrop.height}</div>
            <div class="crop__output">${thisCrop.output}</div>
            `
}