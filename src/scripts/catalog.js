// The Catalog function should accept the harvested food array as input.

// The Catalog function should iterate the array of food objects.
export const catalog = ( crops ) => {

      const foodLocation = document.querySelector(".container")
      crops.forEach((item) => {
           
      foodLocation.innerHTML += `
      <section class="plant red">
      ${item.type}
      </section>
      `
      })    
}


// As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.