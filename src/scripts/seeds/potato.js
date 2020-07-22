// define and export a function for creating a seed. 

const potato = [
      {
            type: "Potato",
            height: 32,
            output: 2,
      }
]

export const createPotato = () => {
      return potato.slice()
}