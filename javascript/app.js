const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')
let jobs = []
function IdGenerator(){
    let id = 0
    return function(){
        id++
        return id
    }
}

const IdGenerator1 = IdGenerator()
function Job(title){
    this.title = title
    this.id = IdGenerator1()
}

button.addEventListener('click', (e) => {
    let inputValue = input.value
    let newDiv = document.createElement('div')
    newDiv.textContent = inputValue
    let newJob = new Job(inputValue)
    jobs.push(newJob)

    result.append(newDiv)
    localStorage.setItem("jobs", JSON.stringify(jobs))
})

window.onload = function(){
    jobs = localStorage.getItem("jobs")

    jobs = JSON.parse(jobs)
    
    renderItems()
}

function renderItems(){
    
    if(jobs !== null){
        
        jobs.forEach((j)=>{
        let newDiv = document.createElement('div')
        newDiv.textContent = j.title
        result.append(newDiv)
        })
    }else{
        jobs = []
    }
}