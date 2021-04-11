const puppeteer = require("puppeteer");
const id = "xifov12632@aramidth.com";
const pw = "123456789"; 

let challenges = require("./challenges");

(async function(){
    let browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized"],
    });
    let allPages = await browser.pages();
    let tab = allPages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1",id);
    await tab.type("#input-2",pw);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]' , {visible:true});
    await tab.click('div[data-analytics="NavBarProfileDropDown"]');
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav a' , {visible:true});
    let bothATags = await tab.$$('.nav-tabs.nav.admin-tabbed-nav a');
    let manageChallengeATag = bothATags[1];
    await manageChallengeATag.click();
    await tab.waitForSelector('div .backbone.block-center');
    let pageATags = await tab.$$('div .backbone.block-center');
    // console.log(pageATags);
    let firstATags = pageATags[1];
    await firstATags.click('div .backbone.block-center');
    await tab.waitForSelector('.cursor.change-tab.cep')
    let moderatorTags = await tab.$$('.cursor.change-tab.cep');
    let moderatorATag = moderatorTags[1];
    await tab.waitForSelector('.cursor.change-tab.cep');
    await moderatorATag.click('.cursor.change-tab.cep');
    await tab.waitForSelector('.wide.ui-autocomplete-input');
    await tab.type('.wide.ui-autocomplete-input',"Aman");
    await tab.click('.btn.moderator-save');
    await tab.click('.save-challenge.btn.btn-green');
})();