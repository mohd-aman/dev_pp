const request = require("request");
const cheerio = require("cheerio");
const getAllRepos = require("./allRepos");

request("https://github.com/topics",cb);

function cb(error,response,data){
    parseData(data);
}

function parseData(html){
    let ch = cheerio.load(html);
    let aTags = ch(".no-underline.d-flex.flex-column.flex-justify-center");
    let completeLinks = [];
    for(let i=0;i<aTags.length;i++){
        completeLink = "https://github.com"+aTags[i+""]["attribs"]["href"];
        getAllRepos(completeLink,aTags[i+""]["attribs"]["href"].split("/topics/")[1]);
        completeLinks.push(completeLink);
    }
    console.log(completeLinks);
}