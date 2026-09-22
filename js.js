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


let product = {
 
navn: "Tastatur",
 
pris: 599,
 
antall: 3
 
};
console.log("Tastaturet koster ", product.pris, " kroner");
console.log("vi har ", product.antall, " på lager");
let lagerverdi = product.pris * product.antall;
console.log("totalverdien er ", lagerverdi);
if (product.antall > 0) {
 
console.log("På lager");
 
}
else {
 
console.log("Utsolgt");
 
}

// oppgave 3

let ting = {
navn: "F15",
prod: "Asus",
pris: 7200,
ram: 32,
lager: "True",
};

let ting2 = {
navn: "F25",
prod: "Acer",
pris: 15000,
ram: 64,
lager: "False",
};

function visProdukt(ting) {

console.log(ting.navn + " - " + ting.pris + " kr");
if (ting.lager == "True"){
    console.log("Varen er på lager.\n")
} else{
    console.log("Varen er ikke på lager.\n")
}
}

visProdukt(ting)
visProdukt(ting2)



// oppgave 4

let produkt = {
navn: "F15",
prod: "Asus",
pris: 7200,
ram: 32,
ssd: 256,
lager: "True",
};

let produkt2 = {
navn: "F25",
prod: "Acer",
pris: 15000,
ram: 64,
ssd: 512,
lager: "False",
};

function visProdukt(produkt) {

console.log(produkt.prod, produkt.navn + " - " + produkt.pris + " kr");
console.log("Spesifikasjoner:")
console.log(produkt.ram,"GB RAM")
console.log(produkt.ssd, "GB lagring")

if (produkt.lager == "True"){
    console.log("Varen er på lager.\n")
} else{
    console.log("Varen er ikke på lager.\n")
}
}

visProdukt(produkt)
visProdukt(produkt2)