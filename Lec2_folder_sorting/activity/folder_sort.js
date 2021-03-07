const fs = require("fs");
const path = require("path");
let extensions = require("./util");
let folderPath = "./Downloads";
let extFolderPath;

function checkFolder(extension){
    for(let key in extensions){
        if(extensions[key].includes(extension)){
            extFolderPath = `${folderPath}/${key}`;
            break;
        }
    }
    return fs.existsSync(extFolderPath);
}

function moveFile(fileName){
    let sourceFilePath = `${folderPath}/${fileName}`;
    let destinationFilePath = `${extFolderPath}/${fileName}`;
    fs.copyFileSync(sourceFilePath,destinationFilePath);
    fs.unlinkSync(sourceFilePath);   
}

function createFolder(){
    fs.mkdirSync(extFolderPath);
}

function sortFolder(folderPath){
    let content = fs.readdirSync(folderPath);
    for(let i=0;i<content.length;i++){
        let extensionName = path.extname(content[i]);
        // console.log(extensionName);
        let extensionFolderExist = checkFolder(extensionName);
        if(!extensionFolderExist){
            createFolder();
        }
        moveFile(content[i]);
    }
}

sortFolder(folderPath);