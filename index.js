const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT= 2003;
const app = express();

const url = "https://www.thehindu.com/";

axios(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        let news = new Array();
        $('.title',html).each(function (){
            let heading=$(this).find('a').text();
            let link=$(this).find('a').attr('href');

            let title={};
            heading=heading.replaceAll(`\n`,'')
            title['heading']=heading;
            title['link']=link;

            if(link&&link.length>40&&link.startsWith("https://www.thehindu.com"))news.push(title);
        })
        console.log(news);
    })
    .catch((error) => {
        console.error(error);
    });
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})