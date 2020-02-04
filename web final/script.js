const dailyquote = document.getElementById('dailyquote');

let url = `https://theysaidso.com/quote/paul-brown-when-you-win-say-nothing-when-you-lose-say-less`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        dailyquote.innerHTML = data.list[0].contents[0].quotes[0].quote;
    })


