// define and export a function for creating a seed. 


const wheat = [
      {
            type: "Wheat",
            height: 230,
            output: 6,
      }
]

export const createWheat = () => {
      return wheat.slice()
}