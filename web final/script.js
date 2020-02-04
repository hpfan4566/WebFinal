const dailyquote = document.getElementById('dailyquote');

let url = `http://quotes.rest/qod.json`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        dailyquote.innerHTML = data.contents.
        quotes[0].
        quote;
    })


