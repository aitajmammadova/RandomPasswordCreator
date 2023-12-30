const range=document.querySelector(".range")
const length = document.querySelector(".length")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const password=document.querySelector(".random-pass")
const checkboxes=[...document.querySelectorAll('[type="checkbox"]')]
const reset=document.querySelector(".reset")
reset.addEventListener("click",()=>{
    reset.classList.toggle("rotate")
    console.log("yes")
    // reset.style.transform = 'rotate(360deg)'
    
    // reset.style.transition= '2s'
    generatePassword()
})
const all={
    ABC:"ABCDGEHFLMNOP",
    abc: "abcdefghklmnop",
    123:"0123456789",
    "!@#": "+-*&^%$#@!~<>{}|"
}
let randomSymbl=all.ABC
checkboxes.map((a)=>{
    a.addEventListener("change",()=>{
        let c = all[a.getAttribute("data-type")]
        let checkInputs=[...document.querySelectorAll("input:checked")]
        if (checkInputs.length===1){
            document.querySelector("input:checked").disabled=true
        }
        else{
            [...document.querySelectorAll("input:disabled")].map((a)=>{
                a.disabled=false
            })
        }
        if (a.checked){
            randomSymbl+=c
        }
        else{
            randomSymbl=randomSymbl.replace(c,"")
        }
        console.log(randomSymbl)
        generatePassword()
    })
})

length.textContent = range.value
let passLength = range.value
range.addEventListener("change",()=>{
    console.log(range.value)
    length.textContent=range.value
    passLength = range.value
    generatePassword()
})
plus.addEventListener("click",()=>{
    if (+length.textContent>49){
        return;
    }
    length.textContent=+(length.textContent)+1
    range.value=length.textContent
    passLength = range.value
    generatePassword()
})
minus.addEventListener("click",()=>{
    if (+length.textContent < 1) {
        return;
    }
    length.textContent = +(length.textContent) - 1
    range.value = length.textContent
    passLength=range.value
    generatePassword()
})
const generatePassword =()=>{
    let pass=""
    for(let i=0; i<passLength;i++){
        pass+=randomSymbl.charAt(Math.floor(Math.random()*(randomSymbl.length)))
    }
    password.value=pass
}
generatePassword()


const copyBtn=document.querySelector(".copy")
const copyedText=document.getElementById("text").value
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyedText)
    console.log("Content copied to clipboard.")
})
