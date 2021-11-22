let groesse = document.getElementById("groesse")
let alter = document.getElementById("alter")
let gewicht = document.getElementById("gewicht")
let bewegung = document.getElementById("bewegung")
let gesamtumsatz = document.getElementById("gesamtumsatz")
let male = document.getElementById("male")
let female = document.getElementById("female")
let grundumsatz = document.getElementById("grundumsatz")
let knete = document.getElementById("kneteErgebnis")
let ohJunge = document.getElementById("ohJunge")
berechnen = () => {
    if(bewegung.value == .95){
        console.log("okay")
    }   if(male.checked === true){
        grundumsatz.innerHTML = maenner()
        gesamtumsatz.innerHTML = maenner()*.95
        knete.innerHTML = ((maenner()*.95)/127).toFixed(2) + " Dosen Knete am Tag essen!"
        ohJunge.innerHTML = "Oh, Junge, das ist ziemlich viel Knete!"
    }   else{
        grundumsatz.innerHTML = frauen()
        gesamtumsatz.innerHTML = frauen()*.95
    }
    if(bewegung.value == 1.2){
        if(male.checked === true){
        grundumsatz.innerHTML = maenner()
        gesamtumsatz.innerHTML = maenner()*1.2
    }   else{
        grundumsatz.innerHTML = frauen()
        gesamtumsatz.innerHTML = frauen()*1.2
    }}
    if(bewegung.value == 1.5){
        if(male.checked === true){
        grundumsatz.innerHTML = maenner()
        gesamtumsatz.innerHTML = maenner()*1.5
    }   else{
        grundumsatz.innerHTML = frauen()
        gesamtumsatz.innerHTML = frauen()*1.5
    }}
    if(bewegung.value == 1.7){
        if(male.checked === true){
        grundumsatz.innerHTML = maenner()
        gesamtumsatz.innerHTML = maenner()*1.7
    }   else{
        grundumsatz.innerHTML = frauen()
        gesamtumsatz.innerHTML = frauen()*1.7
    }}
    if(bewegung.value == 1.9){
        if(male.checked === true){
        grundumsatz.innerHTML = maenner()
        gesamtumsatz.innerHTML = maenner()*1.9
    }   else{
        grundumsatz.innerHTML = frauen()
        gesamtumsatz.innerHTML = frauen()*1.9
    }}
    if(bewegung.value == 2.2){
        if(male.checked === true){
        grundumsatz.innerHTML = maenner()
        gesamtumsatz.innerHTML = maenner()*2.2
    }   else{
        grundumsatz.innerHTML = frauen()
        gesamtumsatz.innerHTML = frauen()*2.2
    }
    }
}

/* Grundumsatz bei Männern (Kalorien je Tag) */

let maenner = () => {
    return (664.7+(13.7*gewicht.value)+(5*groesse.value)-(6.8*alter.value))
}

let frauen = () => {
    return (655.1+(9.6*gewicht.value)+(1.8*groesse.value)-(4.7*alter.value))
}
