//Js Exercise to practice my arrays/loops skill, we'll be working on an inventory space 

const products = [
  { id: 1, name: "Laptop", category: "computing", USDPrice: 1000, stock: 5, rating: 4.6 },
  { id: 2, name: "Mouse", category: "accessories", USDPrice: 25, stock: 0, rating: 4.2 },
  { id: 3, name: "Keyboard", category: "accessories", USDPrice: 45, stock: 12, rating: 4.1 },
  { id: 4, name: "Screen", category: "computing", USDPrice: 180, stock: 3, rating: 4.7 },
  { id: 5, name: "Headphones", category: "audio", USDPrice: 60, stock: 8, rating: 3.9 },
];
const exchangeRate = 3.7;

// 1) Available products
let availables = products.filter(product => product.stock > 0);
console.log(availables);

// 2) Map to PEN price 
let withPenPrice = availables.map(available =>({
    id: available.id,
    name: available.name,
    category: available.category,
    penPrice: Math.round(available.USDPrice * exchangeRate),
    stock: available.stock,
    rating: available.rating
}));

console.log(withPenPrice);

// 3) Total inventory value (PEN)
let inventoryPenValue = withPenPrice.reduce((acum, itemWithPenPrice) =>
    acum + itemWithPenPrice.penPrice * itemWithPenPrice.stock, 0)

console.log(inventoryPenValue);

// 4) Average rating (only availables)
let totalRating = withPenPrice.reduce((acum, itemWithPenPrice) =>
   acum + itemWithPenPrice.rating, 0
)

let averageRating = Math.round((totalRating / withPenPrice.length) * 100) / 100;

console.log(averageRating);

// 5) Count by category
let categoryCounter = withPenPrice.reduce((acum, itemWithPenPrice) => {
    acum[itemWithPenPrice.category] = (acum[itemWithPenPrice.category] || 0) + 1;
    return acum;
}, {}
);

console.log(categoryCounter);

// 6) Pretty print (forEach)
let showResult = withPenPrice.forEach((itemWithPenPrice, i) => {
    console.log(
        `
        [#${i+1}] ${itemWithPenPrice.name} (${itemWithPenPrice.category}) - S/${itemWithPenPrice.penPrice} | Stock: ${itemWithPenPrice.stock} | ★ ${itemWithPenPrice.rating}
         `
        )
})

// 7) Control flow
for(let itemWithPenPrice of withPenPrice){
    if(itemWithPenPrice.rating < 4){
        console.log(`ALERT: Low rating on ${itemWithPenPrice.name}`);
        continue;
    }
    if(itemWithPenPrice.stock < 4){
        console.log(`LOW AVAILABILITY: ${itemWithPenPrice.name}`);
        break;
    }
    console.log(itemWithPenPrice);
}

// 8) Indices with entries
for(let i in products){
    console.log(`Index ${i} → id ${products[i].id}`);
}

//9) Final summary
console.log({ availables, withPenPrice, inventoryPenValue, averageRating, categoryCounter });