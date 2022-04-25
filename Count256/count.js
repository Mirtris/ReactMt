const upElement = document.querySelector(".chevron-up")
const downElement = document.querySelector(".chevron-down")
const numberCount = document.querySelector(".number")



upElement.addEventListener("click", e=>{
    let currentNum = Number(numberCount.textContent)
    numberCount.textContent = currentNum + 1
})

downElement.addEventListener("click", e=>{
    let currentNum = Number(numberCount.textContent)
    numberCount.textContent = currentNum - 1
})