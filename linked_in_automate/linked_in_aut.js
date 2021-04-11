const puppeteer = require("puppeteer");
const id = "";
const pw = "";


(async function(){
    let browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized"],
    });
    let allPages = await browser.pages();
    let tab = allPages[0];
    await tab.goto("https://www.linkedin.com");
    await tab.waitForSelector('#session_key');
    let inputs = await tab.$$('#session_key');
    await tab.type("#session_key",id);
    await tab.type("#session_password",pw);
    await tab.click(".sign-in-form__submit-button");
    await tab.waitForSelector('.search-global-typeahead.global-nav__search-typeahead',{visible:true});
    await tab.click('.search-global-typeahead.global-nav__search-typeahead');
    await tab.type('.search-global-typeahead.global-nav__search-typeahead',"google");
    await tab.keyboard.press('Enter');
    await tab.waitForSelector(".artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.ember-view.search-reusables__filter-pill-button",{visible:true});
    let peopleButton = await tab.$('.artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.ember-view.search-reusables__filter-pill-button');
    await peopleButton.click();
    await tab.waitForSelector('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view',{visible:true});
    // let connectButtons = await tab.$$('artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view');
    // for(let i=0;i<3;i++){
    //     await tab.click(connectButtons[i]);
    // }

})();