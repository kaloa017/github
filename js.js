// let frukt = ["eple", "banan", "kiwi"]
// console.log(frukt[1])
// frukt.push("pære")
// console.log(frukt)
// console.log(frukt.length)

// let spill = ["fortnite", "pokemon ultra sun", "terraria", "persona collab", "monster energy ultra white zero sugar 160mg caffeine"]
// spill.push("3ds camera app")
// console.log(spill)

// let nummer = 1
// let handleliste = ["melk", "brød", "ost", "egg"];
// for (let vare of handleliste) {

// console.log(nummer, vare);

// nummer += 1
// }


// let temperaturer = [12, 14, 11, 9, 15, 17, 13];
// let sum = 0;


// for (let temperatur of temperaturer) {

// sum = sum + temperatur;
// console.log(sum)
// console.log(sum / temperaturer.length)
// }

// oppgave 2

// let elev = {
 
// navn: "Ali",
 
// alder: 18,
 
// poeng: 72
 
// };
// console.log(elev.poeng);
// elev.poeng = 85
// console.log(elev.poeng);
 
// console.log(elev)


//oppgave 2


// let product = {
 
// navn: "Tastatur",
 
// pris: 599,
 
// antall: 3
 
// };
// console.log("Tastaturet koster ", product.pris, " kroner");
// console.log("vi har ", product.antall, " på lager");
// let lagerverdi = product.pris * product.antall;
// console.log("totalverdien er ", lagerverdi);
// if (product.antall > 0) {
 
// console.log("På lager");
 
// }
// else {
 
// console.log("Utsolgt");
 
// }

// // oppgave 3

// let ting = {
// navn: "F15",
// prod: "Asus",
// pris: 7200,
// ram: 32,
// lager: "True",
// };

// let ting2 = {
// navn: "F25",
// prod: "Acer",
// pris: 15000,
// ram: 64,
// lager: "False",
// };

// function visProdukt(ting) {

// console.log(ting.navn + " - " + ting.pris + " kr");
// if (ting.lager == "True"){
//     console.log("Varen er på lager.\n")
// } else{
//     console.log("Varen er ikke på lager.\n")
// }
// }

// visProdukt(ting)
// visProdukt(ting2)



// // oppgave 4

// let produkt = {
// navn: "F15",
// prod: "Asus",
// pris: 7200,
// ram: 32,
// ssd: 256,
// lager: "True",
// };

// let produkt2 = {
// navn: "F25",
// prod: "Acer",
// pris: 15000,
// ram: 64,
// ssd: 512,
// lager: "False",
// };

// function visProdukt(produkt) {

// console.log(produkt.prod, produkt.navn + " - " + produkt.pris + " kr");
// console.log("Spesifikasjoner:")
// console.log(produkt.ram,"GB RAM")
// console.log(produkt.ssd, "GB lagring")

// if (produkt.lager == "True"){
//     console.log("Varen er på lager.\n")
// } else{
//     console.log("Varen er ikke på lager.\n")
// }
// }

// visProdukt(produkt)
// visProdukt(produkt2)

// // oppgave 5

// let elever = [

// { navn: "Ali", poeng: 67 },

// { navn: "Nora", poeng: 89 },

// { navn: "Sofie", poeng: 42 }
// ];

// for (let elev of elever) {


// if (elev.poeng >= 60) {
//     console.log(elev.navn + " fikk " + elev.poeng + " poeng - bestod");
// } else {
//     console.log(elev.navn + " fikk " + elev.poeng + " poeng - Ikke bestått");
// }

// }

// oppgave 6

let elever = [
    { navn: "Ali", poeng: 67 },
    { navn: "Nora", poeng: 89 },
    { navn: "Kasper", poeng: 42 },
    { navn: "Løsåmoen", poeng: 60 },
    { navn: "Claude", poeng: 55 }
];

let sum = 0;
let bestatt = 0;
let besteElev = elever[0];
let darligsteElev = elever[0];

for (let elev of elever) {
    sum += elev.poeng;

    if (elev.poeng >= 60) {
        bestatt++;
    }

    if (elev.poeng > besteElev.poeng) {
        besteElev = elev;
    }

    if (elev.poeng < darligsteElev.poeng) {
        darligsteElev = elev;
    }
}

let snitt = sum / elever.length;

console.log("Gjennomsnittlig poeng: " + snitt);
console.log("Høyeste poengsum: " + besteElev.poeng);
console.log("Beste elev: " + besteElev.navn);
console.log("Antall bestått: " + bestatt);
console.log("Laveste poengsum: " + darligsteElev.poeng + " (" + darligsteElev.navn + ")");

// andre økt, del A og del B

let produkter = [
    {
        navn: "Tastatur",
        pris: 599,
        antall: 4
    },
    {
        navn: "Mus",
        pris: 299,
        antall: 8
    },
    {
        navn: "Skjerm",
        pris: 2499,
        antall: 2
    },
    {
        navn: "Hodetelefoner",
        pris: 899,
        antall: 0
    }
];

for (let produkt of produkter) {

    console.log(produkt.navn + " - " + produkt.pris + " kr - " + produkt.antall + " på lager");

    if (produkt.antall > 0) {
        console.log("På lager\n");
    } else {
        console.log("Utsolgt\n");
    }
}