const chrome = require('chrome-cookies-secure');
const autoScrapAccount = require('/Users/edmundchan/Desktop/java/pixiv/mavenproject/js/autoScrapAccount.js');
const puppeteer = require('puppeteer');
const { Browser } = require('puppeteer-extra-plugin/dist/puppeteer');
const base_url = 'https://www.pixiv.net/en/';

const fs = require('fs');

const getCookies = (callback) => {
    chrome.getCookies(base_url, 'puppeteer', function(err, cookies) {
        if (err) {
            console.log(err, 'error');
            return
        }
        console.log(cookies, 'cookies');
        callback(cookies);
    }, 'Profile 6') // e.g. 'Profile 2'
}

// find profiles at ~/Library/Application Support/Google/Chrome


const herf =  getCookies(async (cookies) => {
/*
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.setCookie(...cookies);
   
    await page.setExtraHTTPHeaders({referer: "https://www.pixiv.net/"});
  
    await page.goto("https://i.pximg.net/img-original/img/2021/10/16/00/00/12/93466964_p0.png");
    */
    var fs = require('fs'),
    request = require('request');

   
const options = {
    url: 'https://i.pximg.net/img-original/img/2018/12/21/10/31/30/72208214_p0.png',
    headers: {
      'referer': 'https://www.pixiv.net/'
    }
  };
  function callback()
  {
    if (!error && response.statusCode == 200) {
        
        console.log("CORRECT");
      }
  }
  request(options,callback).pipe(fs.createWriteStream('IMgae.png'));
  console.log('done');
});

        
     




console.log("check" + herf);


async function main ()
{
   


}
main();