const cheerio = require("cheerio");
const request = require("request");

let highestWicketTaker={};
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-rajasthan-royals-54th-match-1216530/full-scorecard" , cb);

function cb(error,response,data){
    parsedata(data);
}

function parsedata(html){
    let highestWicketSoFar = 0;
    let nameOfHighestWicketTaker;
    let economy;
    let playingteam;
    let opponentTeam;
    let ch = cheerio.load(html);
    let bowlingTables = ch('.bowler');
    let teams = ch('.header-title');
    for(let i=0;i<bowlingTables.length;i++){
        let bowlingTable = bowlingTables[`${i}`];
        let team = teams[`${i}`];
        let allTr = ch(bowlingTable).find("tbody tr");
        for(let j=0;j<allTr.length;j++){
            let allTds = ch(allTr[j]).find("td");
            let wicketTakens = ch(allTds['4']).text();
            if(wicketTakens>highestWicketSoFar){
                highestWicketSoFar = wicketTakens;
                nameOfHighestWicketTaker = ch(allTds['0']).text();
                economy = ch(allTds['5']).text();
                if(i==0){
                    playingteam = ch(teams['1']).text();
                    opponentTeam = ch(teams['0']).text();
                }
                else{
                    playingteam = ch(teams['0']).text().split("INNINGS")[0].trim();
                    opponentTeam = ch(teams['1']).text().split("INNINGS")[0].trim();
                }
            }
        }
    }
    highestWicketTaker.name = nameOfHighestWicketTaker;
    highestWicketTaker.wickets = highestWicketSoFar;
    highestWicketTaker.economy = economy;
    highestWicketTaker.team = playingteam;
    highestWicketTaker.opponentTeam = opponentTeam;
    console.log(highestWicketTaker);
}