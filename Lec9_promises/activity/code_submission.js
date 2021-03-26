const puppeteer = require('puppeteer');


let browserOpenPromis = puppeteer.launch({headless:false});

browserOpenPromis.then(function(browser){
    console.log("Browser opened");
    return browser.pages();
})
.then(function(pages){
    let tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.google.com");
    return pageOpenPromise;
})
.then(function(){
    console.log("Google homepage opened");
})
.catch(function(error){
    console.log(error)
})