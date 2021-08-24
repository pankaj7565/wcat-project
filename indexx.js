#!/usr/bin/env node



const fs = require("fs");//
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];



for(let i of arguments){
    if(i[0] == "-"){
    flags.push(i);
    }else if(i[0]=="%"){
    secondaryArguments.push(i.slice(1));
    }else{
        filenames.push(i);
    }
}


    
for(let file of filenames){
    let fileData = fs.readFileSync(file,"utf-8");
    // flag ke upar traverse krna 
    for(let flag of flags){
        if(flag == "-rs"){
            fileData = removeAll(fileData," "); 
        }
        // new flag remove new lines
        if(flag =="-rn"){
            fileData = removeAll(file,"\r\n");
        }
        // to remove special character
        if(flag== "-rsc"){
            for(let secondaryArgument of secondaryArguments){
                fileData = removeAll(fileData,secondaryArgument);
            }
        }
        if(flag=="-s"){
            addSequence(fileData);

        }
        if(flag=="-sn"){
            addSequenceTnel(fileData);
        }
    }
    console.log(fileData);
}


function removeAll(string,removalData){
    return string.split(removalData).join(""); 
}

// -s --> numbering 1 2 3 4
// -sn ---> hello __ i__ m---->1 = hello 2 = i 3 =am

// function addSequence(content){
//     let contentArr = content.split("\n");
//     for()
// }