const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
let folderPath = "./repos";
let repoName;

function getAllRepos(link,dirName){
    repoName = `${folderPath}/${dirName}`;
    request(link,cb);
}

function cb(error,response,data){
    parseData(data);
}

function parseData(html){
    let ch = cheerio.load(html);
    let allaTags = ch('a[data-ga-click="Explore, go to repository, location:explore feed"]');
    fs.mkdirSync(repoName);
    for(let i=0;i<15;i+=3){
        console.log(ch(allaTags[i+""]).attr("href").split("/")[2]);
        fs.mkdirSync(`${repoName}/${ch(allaTags[i+""]).attr("href").split("/")[2]}`);
    }
}


module.exports = getAllRepos;