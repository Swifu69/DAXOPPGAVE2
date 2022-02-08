import { calculateExactTimeOfDeath } from "./geir.js"

let form = document.querySelector("form")

const birthDate = document.getElementById("birth")
const gender = document.getElementById("gender") // Checked
const raceCheck = document.getElementById("race")
const geirMistakes = document.getElementById("geirMistakes")
const traning = document.getElementById("traning")
const fastFood = document.getElementById("fastFood")
const breakfast = document.getElementById("breakfast")//Checked
const femalePartner = document.getElementById("femalePartner")//Checked
const malePartner = document.getElementById("malePartner")//Checked
const gamingGeir = document.getElementById("gamesIsPlayer")//Checked
const button = document.getElementById("btn")

let test = document.getElementById("test")

button.addEventListener('click', (e)=>{
    e.preventDefault();


    let formvalues = Object.fromEntries(new FormData(form))


    test.textContent = `<li>${calculateExactTimeOfDeath(formvalues)}</li>`
    
    console.log(formvalues)

})
