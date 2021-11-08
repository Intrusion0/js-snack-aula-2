// Js-snack-aula-2

/* Jsnack#1
--DONE  Crea un array composto da 10 automobili.
--DONE  Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
--DONE  Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
--DONE  Infine stampa separatamente i 3 array.
*/

const contResult = document.querySelector('.result');

const automobili = [
    {
        'marca':'Fiat',
        'modello':'Punto Evo',
        'alimentazione':'benzina'
    },
    {
        'marca':'Alfa Romeo',
        'modello':'Spider',
        'alimentazione':'diesel'
    },
    {
        'marca':'Aston Martin',
        'modello':'V8 Vantage',
        'alimentazione':'gpl'
    },
    {
        'marca':'Audi',
        'modello':'R8',
        'alimentazione':'elettrico'
    },
    {
        'marca':'Bentley',
        'modello':'Continental',
        'alimentazione':'metano'
    },
    {
        'marca':'Bmw',
        'modello':'X3',
        'alimentazione':'elettrico'
    },
    {
        'marca':'Chevrolet',
        'modello':'Corvette',
        'alimentazione':'benzina'
    },
    {
        'marca':'Citroen',
        'modello':'C3',
        'alimentazione':'diesel'
    },
    {
        'marca':'Dodge',
        'modello':'Viper',
        'alimentazione':'diesel'
    },
    {
        'marca':'Ferrari',
        'modello':'Testarossa/512 TR',
        'alimentazione':'gpl'
    }
];

console.log("Js-snack#1 - Array Automobili", automobili);

const automobiliBenzina = automobili.filter((elem) => elem.alimentazione === 'benzina');
const automobiliDiesel = automobili.filter((elem) => elem.alimentazione === 'diesel');
const automobiliRestanti = automobili.filter((elem) => elem.alimentazione !== 'diesel' && elem.alimentazione !== 'benzina');

console.log("Js-snack#1 - Auto a benzina: ", automobiliBenzina);
console.log("Js-snack#1 - Auto a diesel: ", automobiliDiesel);
console.log("Js-snack#1 - Auto restanti: ", automobiliRestanti);


// Js-snack#2

/*
--DONE  Crea un array di oggetti che rappresentano delle persone.
--DONE  Ogni persona ha un nome, un cognome e un’età.
--DONE  Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const persone = [
    {
        'nome':'Mario',
        'cognome':'Lombardo',
        'eta':20
    },
    {
        'nome':'Filippo',
        'cognome':'Curseri',
        'eta':52
    },
    {
        'nome':'Martina',
        'cognome':'Corrao',
        'eta':17
    },
    {
        'nome':'Vincenzo',
        'cognome':'Bonura',
        'eta':25
    },
    {
        'nome':'Francesco',
        'cognome':'Franzella',
        'eta':36
    },
    {
        'nome':'Michele',
        'cognome':'Mangogna',
        'eta':16
    },
    {
        'nome':'Samuele',
        'cognome':'Palazzo',
        'eta':18
    },
    {
        'nome':'Christian',
        'cognome':'Galfano',
        'eta':64
    },
    {
        'nome':'Giuseppe',
        'cognome':'Palermo',
        'eta':14
    },
    {
        'nome':'Simone',
        'cognome':'Rossi',
        'eta':30
    }
];

console.log("Js-snack#2 - Array Persone:", persone);

const personeGuida = persone.map((persona) => {
    if (persona.eta >= 18) {
        return `${persona.nome} ${persona.cognome}, puoi guidare :-)`;
    } else {
        return `${persona.nome} ${persona.cognome}, non puoi guidare, sei minorenne :-(`;
    }
});

console.log("Js-snack#2 - Nuovo array:", personeGuida);