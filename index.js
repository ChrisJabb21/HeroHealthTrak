let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let saveRepsEl = document.getElementById("save-reps")
let countRepsEl= document.getElementById("count-reps")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function incrementReps() {
    count += 1
    countRepsEl.textContent = count
}

function saveReps() {
    let countStr = count + " - "
    saveRepsEl.textContent += countStr
    countRepsEl.textContent = 0
    count = 0
}