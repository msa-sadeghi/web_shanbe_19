// let numbers = [1, 5, 6, 8, 98]
// let sum = numbers.reduce((pr, cr, index, arr) =>{
//     console.log(pr, cr, index, arr)
//     return pr + cr

// }, 0)

// console.log(sum)

// let cart = [
//     {name:"کفش", price:1000, quantity:2},
//     {name:"کیف", price:2000, quantity:1},
//     {name:"کتاب", price:1000, quantity:4},
// ]

// let totalPrice  = cart.reduce((t, item)=>{
//     return t + item.price * item.quantity
// }, 0)

// console.log(totalPrice)

let numbers = [1, 5, 6, 8, 98]

let result = numbers.some(elem => elem >= 5)
console.log(result)

let result2 = numbers.every(elem => elem >= 1)
console.log(result2)

let users = [
    {name:"علی" , age:23},
    {name:"سارا" , age:21},
]

console.log(users.every(u => u.age >= 21))


let x = [1,0,-1, 87, 32]

console.log(x.sort((a,b)=>a-b))
console.log(x.sort((a,b)=>b-a))


// let evenNumbers = numbers.filter(n => n % 2 === 0)
// console.log(evenNumbers)

// let users = [
//     {id : 1, username:'ali123',  email:'ali@gmail.com'},
//     {id : 2, username:'artin123',  email:'artin@gmail.com'},
//     {id : 3, username:'nikan123',  email:'nikan@gmail.com'},
// ]

// let user = users.findIndex(u=> u.username === "nikan123")
// console.log(user)

// users.splice(2,1)
// console.log(users)

// let inventory = [
//     {name:'laptop', stock:100},
//     {name:'mouse', stock:1000},
//     {name:'keyboard', stock:900},
//     {name:'tablet', stock:0},
// ]

// let outOfStock = inventory.find(item => item.stock === 0)
// console.log(outOfStock)