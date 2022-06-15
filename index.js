const PORT = 5000
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')

const app = express()

const url = 'https://www.billboard.com/charts/hot-100/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const songs = []
        $('h3, .c-title', html).each(function() {
           const title = $(this).text()
           songs.push({
            title
           })
        })
        console.log(songs)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))