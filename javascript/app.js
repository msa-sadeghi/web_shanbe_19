let allNotes = []
function Note(title, content, category){
    this.id = Date.now() + Math.random()
    this.title = title
    this.content = content
    this.category = category
}
function addNote(){
    let  noteTitle = document.getElementById("noteTitle").value
    let  noteContent = document.getElementById("noteContent").value
    let  noteCategory = document.getElementById("noteCategory").value
    let n = new Note(noteTitle,  noteContent, noteCategory)
    allNotes.push(n)
    renderNotes()
}


function  renderNotes(){
    let notesGrid = document.getElementById("notesGrid")
    if(allNotes.length === 0){
        notesGrid.innerHTML = `
        <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <p>یادداشتی وجود ندارد</p>
                <p style="font-size: 14px; margin-top: 10px;">اولین یادداشت خود را اضافه کنید</p>
            </div>
        `
        return
    }
    notesGrid.innerHTML = ''
    allNotes.forEach((n)=>{
        let card =document.createElement("div")
        card.classList.add("note")

        let noteTitle = document.createElement("div")
        noteTitle.classList.add("note-title")
        noteTitle.textContent = n.title
        let noteCategory = document.createElement("div")
        noteTitle.classList.add("note-category")
        noteTitle.classList.add(`category-${n.category}`)
        noteTitle.textContent = n.category

        card.append(noteTitle)

        notesGrid.append(card)

    })
}