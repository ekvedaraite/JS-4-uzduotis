var salys = [
    {pavadinimas: "Kinija", dydis: 9596961, populiacija: 1411750000},
    {pavadinimas: "Meksika", dydis: 1972550, populiacija: 129202482},
    {pavadinimas: "Vokietija", dydis: 357600, populiacija: 84482267},
    {pavadinimas: "Italija", dydis: 301340, populiacija: 58780965},
    {pavadinimas: "Lietuva", dydis: 65300, populiacija: 2866965}
]

for(var i = 0; i < salys.length; i++){
    var landPerPerson = salys[i].dydis * 1000000 / salys[i].populiacija
    var landPerPersonFixed = landPerPerson.toFixed(2)
    var populationFormatted = salys[i].populiacija >= 1000000 ? (salys[i].populiacija / 1000000).toFixed(2) + " mln" : salys[i].populiacija.toFixed(2)

    console.log("Šalis: " + salys[i].pavadinimas + ", joje gyvena " + populationFormatted + " gyventojų." + " Valstybės plotas: " + salys[1].dydis + " km², plotas tenkantis vienam gyventojui: " + landPerPersonFixed + " m²")
}