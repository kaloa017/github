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


let temperaturer = [12, 14, 11, 9, 15, 17, 13];
let sum = 0;


for (let temperatur of temperaturer) {

sum = sum + temperatur;
console.log(sum)
console.log(sum / temperaturer.length)
}