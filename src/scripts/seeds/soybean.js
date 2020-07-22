// define and export a function for creating a seed. 

const soybean = [
      {
            type: "Soybean",
            height: 20,
            output: 4,
      }
]

export const createSoybean = () => {
      return soybean.slice()
}