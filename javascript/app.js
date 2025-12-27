const items = ['نان', 'شیر']
const listElem = document.getElementById("list")
function generateList(){
    items.forEach((x)=>{
        let newDiv = document.createElement("div")
        newDiv.textContent = x
        // newDiv.className= "item"
        newDiv.classList.add("item")
        listElem.append(newDiv)
    })
}
// function generateList(){
//     items.forEach((x) => {
//         listElem.innerHTML += `<div class="item">${x}</div>`
//     })
// }