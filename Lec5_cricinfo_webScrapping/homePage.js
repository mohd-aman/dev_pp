const request = require("request");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595" , cb);

function cb(error,response,data){
    parseData(data);
}

function parseData(html){
    let ch = cheerio.load(html);
    let aTag = ch('.widget-items.cta-link a');
    let link = aTag['0']["attribs"]["href"];
    let completeLink = "https://www.espncricinfo.com"+link;
    getAllMatches(completeLink);
}