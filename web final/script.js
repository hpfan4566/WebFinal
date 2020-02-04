const dailyquote = document.getElementById('dailyquote');

let url = `https://theysaidso.com/quote/paul-brown-when-you-win-say-nothing-when-you-lose-say-less`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        dailyquote.innerHTML = contents[0].quotes[0].quote;
    })


