// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Tremayne Ffriend" //

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let totalContainer = document.querySelector('#qty-total') 

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by: ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
console.log('Gingerbread + button was clicked!')
})
gbMinusBtn.addEventListener('click', function(e) {
console.log('Gingerbread - button was clicked!')
})

ccPlusBtn.addEventListener('click', function(e) {
console.log('Chocolate Chip + button was clicked!')
})
ccMinusBtn.addEventListener('click', function(e) {
console.log('Chocolate Chip - button was clicked!')
})

sugarPlusBtn.addEventListener('click', function(e) {
console.log('Sugar Sprinkle + button was clicked!')
})
sugarMinusBtn.addEventListener('click', function(e) {
console.log('Sugar Sprinkle - button was clicked!')
})

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
gbPlusBtn.addEventListener('click', function(e) {gb = gb + 1;
    let gbContainer = document.querySelector ("#qty-gb");
    gbContainer.textContent = gb; 
    totalContainer.textContent = gb + cc + sugar   
})  
gbMinusBtn.addEventListener('click', function(e) {
    let gbContainer = document.querySelector ("#qty-gb");
    if(gb > 0) {
        gb = gb - 1;
    }
    gbContainer.textContent = gb
    totalContainer.textContent = gb + cc + sugar })  

// TODO: Hook up event listeners for the rest of the buttons
ccPlusBtn.addEventListener('click', function(e) {cc = cc + 1;
    let ccContainer = document.querySelector ("#qty-cc");
    ccContainer.textContent = cc;
    totalContainer.textContent = gb + cc + sugar  
})  
ccMinusBtn.addEventListener('click', function(e) {
    let ccContainer = document.querySelector ("#qty-cc");
    if(cc > 0) {
        cc = cc - 1;
    }
    ccContainer.textContent = cc
    totalContainer.textContent = gb + cc + sugar })  

sugarPlusBtn.addEventListener('click', function(e) {sugar = sugar + 1;
    let sugarContainer = document.querySelector ("#qty-sugar");
    sugarContainer.textContent = sugar;
    totalContainer.textContent = gb + cc + sugar  
})  
sugarMinusBtn.addEventListener('click', function(e) {
    let sugarContainer = document.querySelector ("#qty-sugar");
    if(sugar > 0) {
        sugar = sugar - 1;
    }
    sugarContainer.textContent = sugar
    totalContainer.textContent = gb + cc + sugar })  






