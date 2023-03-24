// ======================================================
// Lev1_2_js-vertiefung_objects_function_alert
// ======================================================
let person = {
    name: "Steffi",
    alter: "36",
    sagNameAlter: function (){
        // window.alert(`${this.name} ${this.alter}`)
        console.log(`${this.name} ${this.alter}`);
    }
}
person.sagNameAlter()


// ======================================================
// Lev1_4_js-vertiefung_objects_accessing
// ======================================================
let unsereHaustiere = [
    {
    tiertyp: "Katze",
    names: [
        "Gipsy",
        "Nala",
        "Dinky"
        ]
    },
    {
    tiertyp: "Hunde",
    names: [
        "Knöpfchen",
        "Pinselchen",
        "Droopy"
        ]
    }
];

console.log(unsereHaustiere);

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

unsereHaustiere[0].names = ["Balu", "Snoopy"]
console.log(unsereHaustiere[0].names);



// ======================================================
// Lev1_5_js
// ======================================================
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager);

// Geheimnisse:
console.log(unserLager.schrank["Obere Schublade"].Ordner2);

// Cola:
console.log(unserLager.schrank["Untere Schublade"]);

// Hefter:
console.log(unserLager.schreibtisch.schublade);



// ======================================================
// Lev1_6_js-vertiefung_objects_arrays_accessing
// ======================================================
let myMusic = [
    {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
    },
    {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true
    },
    {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true
    },
    {
    kunstler: "Metallica",
    title: "Kill 'Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true
    }
];

// let newAlbum={
//     künstler: "Nirvana",
//     title:"Nevermind",
//     release_jahr: 1991,
//     formate: ["LP", "CD", "CS", "Download"],
//     gold: true
// }
// myMusic.push(newAlbum)

console.log(myMusic);

// The Beatles:
console.log(myMusic[0].kunstler);

// Von Pink Floyd: "Download":
console.log(myMusic[1].formate[3]);

// Von Pink Floyd: true:
console.log(myMusic[1].gold);

// 1971 und 1983:
console.log(myMusic[2].release_jahr);
console.log(myMusic[3].release_jahr);

// Von Metallica: "MC":
console.log(myMusic[3].formate[2]);

// Von Metallica das Wort: Ride:
console.log(myMusic[3].title.split(' ')[4]);

// Von Led Zeppelin das Wort: IV:
console.log(myMusic[2].title.split(' ')[2]);

// Von Pink Floyd das Wort: Floyd:
console.log(myMusic[1].kunstler.split(' ')[1]);



// ======================================================
// Lev1_7_js-vertiefung_objects_arrays_loop_accessing
// ======================================================

// Alle “artist”:
myMusic.forEach((elt) => {
    document.write(elt.kunstler + "<br>");
    document.write(elt.title + "<br>");
    document.write(elt.formate + "<br>");
    document.write("<br>")
});


myMusic.forEach(elt => {
    if (elt.release_jahr > 1975) {
        console.log(elt.release_jahr);
    }
});

// ======================================================
// Lev1_7_js-vertiefung_objects_arrays_loop_accessing
// ======================================================
let studentData = [
    {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
        street: "Don Valley Business Park",
        city: "Toronto",
        postalCode: "ONM3C3E5"
        },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"]        
    },
    {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
        street: "34 Lawrence Ave",
        city: "Toronto",
        postalCode: "ONM3C0E5"
        },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(elt => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.address.city);
    console.log(elt.emails);
});
