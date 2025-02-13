const out = document.getElementById("idOut")
const range = document.getElementById("idRange")
const copy = document.getElementById("idCopy")

function passwordGenerator(){

    const chars = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ1234567890!@#$%¨&*()-_+=?/+"
    
    let password = ""
    
    for(let i = 0; i < range.value; i++){

        const random = Math.floor(Math.random() * chars.length) 
        password += chars.substring(random, random+1) 

    }
    out.value = password
}

range.addEventListener('input', ()=>{
    passwordGenerator()
})

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(out.value)
})
