fetch('https://dummyjson.com/quotes?limit=102')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.quotes').innerHTML =
    jsonData.quotes.reduce((html, quote)=> html+= `<li><section id=${quote.id}>
    <div class=imagecontainer><img src='img/quote.png' class="quoteimage"></div> 
    <div class=quoteinfo><h2> ${quote.quote} </h2><p> Author: ${quote.author}</p></div>
    </section></li>`, '')
});