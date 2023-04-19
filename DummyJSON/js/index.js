
fetch('https://dummyjson.com/products?limit=5')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.bestrating').innerHTML = `<h3>Products with best rating </h3>` +
    jsonData.products.reduce((html, product)=> html+= `<li><section> <h2> ${product.title} </h2><p> rating: ${product.rating}</p></section></li>`, '')
});

fetch('https://dummyjson.com/products?limit=5&skip=6')
.then(res => res.json()).then(jsonData=>{
document.querySelector('.stock').innerHTML = `<h3> Almost out of stock </h3>` +
    jsonData.products.reduce((html, product)=> html+= `<li><section> <h2> ${product.title} </h2><p> stock: ${product.stock}</p></section></li>`, '')
});

fetch('https://dummyjson.com/products?limit=102')
.then(res => res.json()).then(jsonData=>{
document.querySelector('.totalproducts').innerHTML = `<h3> Total Products </h3><section> <h2> ${jsonData.total} </h2><a href="products.html" class="seepagebtn">See Products</a></section>`, ''
});

fetch('https://dummyjson.com/carts?limit=102')
.then(res => res.json()).then(jsonData=>{
document.querySelector('.totalcarts').innerHTML = `<h3> Total Carts </h3><section> <h2> ${jsonData.total} </h2><a href="carts.html" class="seepagebtn">See Carts</a></section>`, ''
});

fetch('https://dummyjson.com/users?limit=102')
.then(res => res.json()).then(jsonData=>{
document.querySelector('.totalusers').innerHTML = `<h3> Total Users </h3><section> <h2> ${jsonData.total} </h2><a href="users.html" class="seepagebtn">See Users</a></section>`, ''
});