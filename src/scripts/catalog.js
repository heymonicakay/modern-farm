// The Catalog function should accept the harvested food array as input. [x]

export const Catalog = (harvestedFood) => {
  const plantSpot = document.querySelector("main");
  // The Catalog function should iterate the array of food objects. [x]
  //  As you iterate the array...
  harvestedFood.forEach((food) => {
    /* the <main> element should have its inner HTML appended with an HTML representation of a food item. [x]
     */
    plantSpot.innerHTML += `
            <section class="plant red">${food.type}</section>
        `;
  });
};
