"use strict";

let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
function allProperty(object, porp){
    let result = [];
    for (let obj of object){
        // console.log(obj)
        if(obj.hasOwnProperty(porp)){
            result.push(obj[porp]);
        }else{
            result.push('not exit')
        }
    }
    console.log(result)
}
console.log("sorce -> (library, 'title')")
allProperty(library, 'title')
