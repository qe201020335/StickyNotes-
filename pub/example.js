"use strict";

const generator = new StickyNoteGenerator();
let note1 = null;
let note2 = null;
let note3 = null;
let note4 = null;


function onClickB1(location) {
    if (note1 === null) {
        note1 = generator.createNoteFixed(location, document.querySelector("#content"));
    }
    note1.addToDOM()
}

function onClickB2(location) {
    if (note2 === null) {
        note2 = generator.createNoteFixed(location, document.querySelector("#content"));
    }
    note2.addToDOM()
}

function onClickB3(location) {
    if (note3 === null) {
        note3 = generator.createNoteFixed(location, document.querySelector("#content"));
    }
    note3.addToDOM()
}

function onClickB4(location) {
    if (note4 === null) {
        note4 = generator.createNoteFixed(location, document.querySelector("#content"));
    }
    note4.addToDOM()
}


function onClickDelete() {
    generator.removeAll()
}