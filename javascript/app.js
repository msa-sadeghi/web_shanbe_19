// function createID(){
//     let id = 0
//     return function(){
//         id++
//         return `ID-${id}`
//     }
// }

// const gernerateID1 =  createID()
// console.log(gernerateID1())
// console.log(gernerateID1())
// console.log(gernerateID1())

// const gernerateID2 =  createID()
// console.log(gernerateID2())
// console.log(gernerateID2())
// console.log(gernerateID2())

// let fruits = ["apple", "banana"]
// console.log(fruits.length)
// fruits.push("another1", "another2")
// fruits.unshift("fff", "gggg")

// fruits.pop()
// fruits.shift()


// fruits.forEach(item => console.log(item))

let c = [1, 0,2 ,3,4]

for(let i = 0; i < c.length; i++){
    console.log(c[i])
}

c.forEach(item => console.log(item))

for(let item of c)
{
    console.log(item)
}

for(let item in c){
    console.log(c[item])
}
// c.splice(1, 1, 4444)
// console.log(c)




// let myArray1 = new Array(2)
// myArray1[0] = 12
// myArray1[1] = 123
// myArray1[2] = 1234
// console.log(myArray1.length)
// myArray1.forEach(item => console.log(item))

// let myArray2 = new Array("blalal", "lalalala")

// console.log(myArray2.length)
// myArray2.forEach(item => console.log(item))