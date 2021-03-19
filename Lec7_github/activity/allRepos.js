const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
let folderPath = "./repos";

// let grepoName = "";

function getAllRepos(link,dirName){
    let repoName = `${folderPath}/${dirName}`;
    request(link,function cb(error,response,data){
        let ch = cheerio.load(data);
        let allaTags = ch('a[data-ga-click="Explore, go to repository, location:explore feed"]');
    for(let i=0;i<15;i+=3){
        console.log(ch(allaTags[i+""]).attr("href").split("/")[2]);
        fs.mkdirSync(`${repoName}/${ch(allaTags[i+""]).attr("href").split("/")[2]}`);
    }
    
    });
    fs.mkdirSync(repoName);
}

module.exports = getAllRepos;