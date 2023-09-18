console.groupCollapsed('PIRMAS LYGIS')
//PIRMAS LYGIS:
//1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
//2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

//1. Patekai i kita lygi: abu atsakymai teisingi.
//2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
//3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
//4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// Kokia yra arčiausia Žemės esanti žvaigždė?
let correctAnswer11 = 'sun'

// Kiek yra 123 + 456
let correctAnswer12 = 579

let playerAnswer11 = 'moon'
let playerAnswer12 = 57

console.log(correctAnswer11)
console.log(correctAnswer12)

console.log(playerAnswer11)
console.log(playerAnswer12)

if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
} else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 === playerAnswer12) {
    console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
} else if (correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12) {
    console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
} else {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}       

console.groupEnd()