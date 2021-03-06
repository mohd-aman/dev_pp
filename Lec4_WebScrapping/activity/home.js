const request = require("request");
const cheerio = require("cheerio");

let lastBallCommentary = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
let highestWicketTaker = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"

// request(lastBallCommentary,cb1);
request(highestWicketTaker,cb2);

function cb1(error,response,body){
    parseBody1(body);
    console.log("\n");
}

function cb2(error,response,body){
    parseBody2(body);
}
//LastBall Commentary
function parseBody1(html){
    let ch = cheerio.load(html);
    let mumbaiWinningCommentary = ch('.match-comment-wrapper').first().text();
    console.log(mumbaiWinningCommentary);
}

function parseBody2(html){
    let ch = cheerio.load(html);
    let mostWicket = ch(".bowler");
    console.log(mostWicket);
}