// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name){    
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copycat = cats.slice()    
    copycat.push(name)
    return copycat
}

function prependCat(name){ 
    const copycat = cats.slice()
    copycat.unshift(name)    
    return copycat
}

function removeLastCat(name){
    const copycat = cats.slice()
    copycat.pop(name)  
    return copycat
}

function removeFirstCat(name){
    const copycat = cats.slice()
    copycat.shift(name)
    return copycat
}