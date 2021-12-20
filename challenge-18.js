const listOfChoices = [
  "Ceasar Salad",
  "Ceasar Salad",
  "Ceasar Salad",
  "Stale Bread", 
  "Stale Bread", 
  "Stale Bread", 
  "Stale Bread"
];

const chooseLunchWinner = (listOfChoices) => {
console.log(listOfChoices)
let y = 0;
let z = 0;
for(const test of listOfChoices) {
console.log(test)
if(test === "Chicken Dinner" || test === "poutine" || test === "Ceasar Salad") {
y++
console.log(y)
} if(test === "Ice Cream Sandwich" || test === "Smoked Meat" || test === "Stale Bread") {
z++
} if(y > z) {
return y
} else {
return z
}
}
// if(listOfChoices)
};

const listOfChoices = [
  "Poutine",
  "Poutine",
  "Poutine",
  "Smoked Meat", 
  "Smoked Meat"
]


//     const listOfChoices = [
//       "Chicken Dinner",
//       "Chicken Dinner",
//       "Chicken Dinner",
//       "Ice Cream Sandwich", 
//       "Ice Cream Sandwich"
//     ]

// const chooseLunchWinner = (listOfChoices) => {
//   let y = 0;
//   let z = 0;
//   let test = listOfChoices.entries();
//   for(let x of test) {
//     // console.log(x[1]);
//   if(x[1] === "Chicken Dinner" || x[1] === "poutine") {
//     y++
//     console.log(y);
//   } if(x[1] === "Ice Cream Sandwich" || x[1] === "Smoked Meat") {
//     z++
//     console.log(z);
//   } if(y > z) {
//     return x[1]
//   } else {
//     return x[1]
//   }   
//   }
// };
