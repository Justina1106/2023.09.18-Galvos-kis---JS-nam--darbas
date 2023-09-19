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

console.groupCollapsed('ANTRAS LYGIS')
//ANTRAS LYGIS:
//1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
//2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// Kokia yra arčiausia Žemės esanti žvaigždė?
let teisingas1 = 'sun'

// Kiek yra 123 + 456
let teisingas2 = 579

let atsakymas1 = 'moon'
let atsakymas2 = 57

console.log(teisingas1)
console.log(teisingas2)

console.log(atsakymas1)
console.log(atsakymas2)


if (teisingas1 === atsakymas1 && teisingas2 === atsakymas2) {
    console.log('Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:')
} else if (teisingas1 !== atsakymas1 && teisingas2 === atsakymas2) {
    console.log('atsakytas tik vienas klausimas, pirmas buvo neteisingas.')
} else if (teisingas1 === atsakymas1 && teisingas2 !== atsakymas2) {
    console.log('atsakytas tik vienas klausimas, antras buvo neteisingas.')
}  else {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

console.groupEnd()

console.groupCollapsed('TREČIAS LYGIS')
//TREČIAS LYGIS:
//1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
//2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
//3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

//1 1 1
//1 1 0
//1 0 1
//0 1 1
//1 0 0
//0 1 0
//0 0 1
//0 0 0

// Kokia yra arčiausia Žemės esanti žvaigždė?
let correct1 = 1

// Kiek yra 123 + 456
let correct2 = 1

// Kiek para turi valandų?
let correct3 = 1

let answer1 = 1
let answer2 = 0
let answer3 = 0

console.log(correct1)
console.log(correct2)
console.log(correct3)

console.log(answer1)
console.log(answer2)
console.log(answer3)

if (correct1 === answer1 && correct2 === answer2 && correct3 === answer3) {
   console.log('Patekai i kita lygi: visi atsakymai teisingi.')
} else if (correct1 === answer1 && correct2 === answer2 && correct3 !== answer3) {
   console.log('Patekai i kita lygi: tačiau trečias atsakymas buvo neteisingas.')
} else if (correct1 === answer1 && correct2 !== answer2 && correct3 === answer3) {
   console.log('Patekai i kita lygi: tačiau antras atsakymas buvo neteisingas.')
} else if (correct1 !== answer1 && correct2 === answer2 && correct3 === answer3) {
   console.log('Patekai i kita lygi: tačiau pirmas atsakymas buvo neteisingas.')
} else if (correct1 === answer1 && correct2 !== answer2 && correct3 !== answer3) {
   console.log('Nepatekai i kita lygi: tačiau pirmas atsakymas buvo teisingas.')
} else if (correct1 !== answer1 && correct2 === answer2 && correct3 !== answer3) {
   console.log('Nepatekai i kita lygi: tačiau antras atsakymas buvo teisingas.')
} else if (correct1 !== answer1 && correct2 !== answer2 && correct3 === answer3) {
   console.log('Nepatekai i kita lygi: tačiau trečias atsakymas buvo teisingas.')
} else {
   console.log('Nepatekai i kita lygi: visi atsakymai buvo neteisingi.')
}

console.groupEnd()

console.groupCollapsed('PASISVEIKINIMAS')
// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"

let isLoggedIn = true
let userName = 'John'
let time = 18
let isBirthday = true

if (isLoggedIn === true) {
  
    if (time >= 5 && time < 13) {

        if (isBirthday === true) {
            console.log(`Good Morning, ${userName} and have a great birthday!`)
        } else {
            console.log(`Good Morning, ${userName}.`)
        }

    } else if (time >= 13 && time < 19) {

        if (isBirthday === true) {
            console.log(`Good Afternoon, ${userName} and have a great birthday!`)
        } else {
            console.log(`Good Afternoon, ${userName}.`)
        }

    } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {

        if (isBirthday === true) {
            console.log(`Good Evening, ${userName} and have a great birthday!`)
        } else {
            console.log(`Good Evening, ${userName}.`)
        }

    } else {
    
     if (isBirthday === true) {
        console.log(`Hello, ${userName} and have a great birthday!`)
     } else {
        console.log(`Hello, ${userName}.`)
        }

    }

    } else {
  
    if (time >= 5 && time < 13) {
        console.log(`Good Morning`)
    }  else if (time >= 13 && time < 19) {
        console.log(`Good Afternoon`)
    } else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
        console.log(`Good Evening`)
    } else {
        console.log(`Hello`)
    }
}

console.groupEnd()