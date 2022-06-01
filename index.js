// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    return cats.push('Ralph');
}

function destructivelyPrependCat(){
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const myArray = [...cats, name];
    return myArray;
}

function prependCat(name){
    const myArray = [name, ...cats];
    return myArray;
}

function removeLastCat(){
    const myArray = cats.slice(0, cats.length-1)
    return myArray;
}

function removeFirstCat(){
    const myArray = cats.slice(1)
    return myArray;
}