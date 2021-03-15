const request = require("request");
const cheerio = require("cheerio");

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
        completeLinks.push(completeLink);
    }
    console.log(completeLinks)
}