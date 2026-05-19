/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

let lengthDesc = document.getElementById("length-desc")
let volumeDesc = document.getElementById("volume-desc")
let massDesc = document.getElementById("mass-desc")

convertBtn.addEventListener("click", function() {
    const unit = inputEl.value
    lengthDesc.textContent = `
        ${unit} meters = ${(unit * 3.281).toFixed(3)} feet | ${unit} feet = ${(unit / 3.281).toFixed(3)} meters
    `
    
    volumeDesc.textContent = `
        ${unit} liters = ${(unit * 0.264).toFixed(3)} gallons | ${unit} gallons = ${(unit / 0.264).toFixed(3)} liters
    `
    
    massDesc.textContent = `
        ${unit} kilos = ${(unit * 2.204).toFixed(3)} pounds | ${unit} pounds = ${(unit / 2.204).toFixed(3)} kilos
    `
})