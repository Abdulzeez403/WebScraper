const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios'); 
const app = express();



const url ="https://www.thenetnaija.net/";
axios(url) 
.then(res =>{
  const html = res.data;
  const $ = cheerio.load(html);
  const articles = [];
  $('.tb-header', html).each(function(){
  const title =   $(this).text();
  // const url =  $(this).find('a').attr('href')
  articles.push({
    title,
    // url
  })
  })
  console.log(articles);
}).catch((err)=>{
  console.log('There is an issue with this scraper');
})

app.listen(3000, ()=>{
 console.log("The Server is running on Port 3000")
})