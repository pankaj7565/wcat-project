#!/usr/bin/env node

// const fs = require("fs"); //fs libaray ko fs mai store kr lia 
// let arguments = process.argv.slice(2); //process.argv retruns two args node, index ,argsumnets

// // console.log(arguments);


// let flags = [];
// let filenames = [];


// for(let i of arguments){
//     if(i[0] == "-"){
//         flags.push(i);
//     }else{
//         filenames.push(i);
//     }
// }


// if(flag.length==0 && filenames.length!=0){

//     if(flags.length==0){
//        for(let file of filenames){
//            console.log(fs.readFileSync(file,"utf-8"));
//        }
// }
// else{
//     for(let flag of flags){
//         if(flag == "-rs"){
//             for(let file of filenames){
//                 let fileData = fs.readFileSync(file,"utf-8")
//                 // let fileDataArray = fileData.split(" ");
//                 console.log(fileData.split(" ").join(""));
//                 // console.log(fileData);
//             }
//         }
//     }
// }





// for(let file of filenames){
//     let fileData = fs.readFileSync(file,"utf-8");
//     for(let flag of flags){
//         // if flag == -rs
//         if(flag=="-rs"){
//             // fileData = fileData.split(" ").join("");
//             fileData = removeAll(fileData," ");
//         }
//         if(flag == "-rn"){
//             // fileData = fileData.split("\r\n").join("");
//             fileData = removeAll(fileData,"\r\n");
//         }
//     }
//     console.log(fileData);
// }

// function removeAll(string,removalData) {
//     return string.split(removalData).join("") 



// }
// linking the global command


// own work
const fs = require("fs");//
let arguments = process.argv.slice(2);
// console.log(arguments);



// argunments ko alag alag karna 
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


// if(flags.length==0&& filenames.length!=0){
//     for(let file of filenames){
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// }

// -------------------------------------------------------------------//
// remove space from the file 


// if(flags.length==0){
//         for(let file of filenames){
//             console.log(fs.readFileSync(file,"utf-8"));
        
//         }
//         }
//         else{
//         for(let flag of flags){
//             if(flag=="-rs"){
//                 for(let file of filenames){
//                     let fileData = fs.readFileSync(file,"utf-8");
//                     console.log(fileData.split(" ").join(""));

//                     // removing spaces now after reading the file
//                 //   let fileDataArray = fileData.split(" ");
//                 //   console.log(fileDataArray);
//                 //   console.log(fileData);
//                 }
//             }
//         }  

//         }

// same as upper code we can add more flags


    
for(let file of filenames){
    let fileData = fs.readFileSync(file,"utf-8");
    // flag ke upar traverse krna 
    for(let flag of flags){
        if(flag == "-rs"){
            // fileData = filedata.split(" ").join("");
            // for function call
            fileData = removeAll(fileData," "); 
        }
        // new flag
        if(flag =="-rn"){
            // fileData = fileData.split("\r\n").join("");
            fileData = removeAll(file,"\r\n");
        }
        // to remove special character
        if(flag== "-rsc"){
            // let tempString = "";
            // for(let character of fileData){
            //     if((character.charCodeAt(0)>=65 && character.charCodeAt<=90)||(character.charCodeAt(0)>=97 && character.charCodeAt(0)<=122)){
            //         tempString += character;
            //     }
            // }
            // fileData = tempString;
            for(let secondaryArgument of secondaryArguments){
                fileData = removeAll(fileData,secondaryArgument);
            }
        }
    }
    console.log(fileData);
}


function removeAll(string,removalData){
    return string.split(removalData).join(""); 
}













