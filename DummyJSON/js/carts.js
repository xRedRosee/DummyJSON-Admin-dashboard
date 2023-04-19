fetch('https://dummyjson.com/carts?limit=102')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.carts').innerHTML =
    jsonData.carts.reduce((html, cart)=> html+= `<li><section id=${cart.id}>
    <div class=imagecontainer><img src="img/cart.png" class="productimage"></div>
    <div class=cartinfo><h2> Cart ID: ${cart.id} </h2><p> Total products: ${cart.totalProducts} </p><p> Total price: ${cart.total}</p></div>
    <button class="seemorebtn" onclick="seeMore(${cart.id})"> See details </button></section></li>`, '')
});

function seeLess(){
    fetch('https://dummyjson.com/carts?limit=102')
    .then(res => res.json()).then(jsonData=>{
    document.querySelector('.carts').innerHTML =
    jsonData.carts.reduce((html, cart)=> html+= `<li><section id=${cart.id}>
    <div class=imagecontainer><img src="img/cart.png" class="productimage"></div>
    <div class=cartinfo><h2> Cart ID: ${cart.id} </h2><p> Total products: ${cart.totalProducts} </p><p> Total price: ${cart.total}</p></div>
    <button class="seemorebtn" onclick="seeMore(${cart.id})"> See details </button></section></li>`, '')
    });
}

function seeMore(id){
    const cartID = id; 

    fetch('https://dummyjson.com/carts/' + cartID)
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.carts').innerHTML =
        `<li style="padding-block: 2em;" class="animation"><section style="flex-direction: column;">
        <div style="display: flex;flex-direction: row;align-items: center;width: 100%">
        <h2 style="width: 100%;text-align:left;font-weight:500;font-size:25px"> CartID: ${jsonData.id} </h2></div> 
        <div class="productinfo" style="width:100%">
        <div class="infolist">
        <h2> Cart information: </h2>
        <p> Total products: ${jsonData.totalProducts}</p>
        <p> Total price: ${jsonData.total}</p>
        <p> Discount: ${jsonData.discountedTotal}</p>
        <img src="img/cart.png" class="cartimage">
        </div>
        <div class=productlist>
        <h2> Products: </h2>
        <p>  Name: ${jsonData.products[0].title} </p>
        <p class=bottom> Price: ${jsonData.products[0].price}</p>
        <p>  ${jsonData.products[1].title}</p>
        <p class=bottom> Price: ${jsonData.products[1].price}</p>
        <p>  ${jsonData.products[2].title}</p>
        <p class=bottom> Price: ${jsonData.products[2].price}</p>
        <p>  ${jsonData.products[3].title}</p>
        <p class=bottom> Price: ${jsonData.products[3].price}</p>
        <p>  ${jsonData.products[4].title}</p>
        <p class=bottom> Price: ${jsonData.products[4].price}</p>
        </div>
        </section>
        <button class="seelessbtn" onclick="seeLess()"> Return </button></li>`, '';
    })
}