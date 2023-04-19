fetch('https://dummyjson.com/products?limit=102')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.products').innerHTML =
    jsonData.products.reduce((html, product)=> html+= `<li><section id=${product.id}><div class=imagecontainer><img src=${product.images[0]} class="productimage"></div> <div class=productinfo><h2> ${product.title} </h2><p> ${product.stock} in stock</p></div><button class="seemorebtn" onclick="seeMore(${product.id})"> See more </button></section></li>`, '')
    // for ( product in jsonData.products) {
    //     console.log(product.id);
    // }
    
    // document.querySelector('.seemorebtn').addEventListener('click', function(event){
    //     event.preventDefault();
    //     fetch('https://dummyjson.com/products/')
    //     .then(res => res.json()).then(alert('see more pressed'));
    // })
});


function seeLess(){
    fetch('https://dummyjson.com/products?limit=102')
    .then(res => res.json()).then(jsonData=>{
    document.querySelector('.products').innerHTML =
    jsonData.products.reduce((html, product)=> html+= `<li><section id=${product.id}><div class=imagecontainer><img src=${product.images[0]} class="productimage"></div> <div class=productinfo><h2> ${product.title} </h2><p> ${product.stock} in stock</p></div><button class="seemorebtn" onclick="seeMore(${product.id})"> See more </button></section></li>`, '')
});
}

function seeMore(id){
    const productID = id; 

    fetch('https://dummyjson.com/products/' + productID)
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.products').innerHTML =
        /*jsonData.products.reduce((html, product)=> html+=*/ `<li style="padding-block: 2em;" class="animation"><section style="flex-direction: column;"><h2 style="width: 100%;text-align:left;font-weight:500;font-size:25px"> ${jsonData.title} </h2><div style="display: flex;flex-direction: row;align-items: center;"><img src=${jsonData.images[0]} class="productimageinfo" style="width: 450px;"><p style="width:  40%;margin-inline: 0.5em;"> Description: ${jsonData.description}</p></div> <div class=productinfo style="width:100%"><p> ${jsonData.stock} in stock</p><p> Price: ${jsonData.price}</p><p> Price: ${jsonData.discountPercentage}</p><p> Rating: ${jsonData.rating}</p><p> Brand: ${jsonData.brand}</p><p> Category: ${jsonData.category}</p></div><button class="seelessbtn" onclick="seeLess()"> Return </button></section></li>`, ''/*)*/;
    })
}

function seeCategory(id){
    const categoryName = id; 

    fetch('https://dummyjson.com/products/category/' + categoryName)
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.products').innerHTML =
        jsonData.products.reduce((html, product)=> html+= `<li><section><div class=imagecontainer><img src=${product.images[0]} class="productimage"></div> <div class=productinfo><h2> ${product.title} </h2><p> ${product.stock} in stock</p></div><button class="seemorebtn" onclick="seeMore(${product.id})"> See more </button></section></li>`, '');
    })
}

const searchBarInput = document.querySelector('.searchbar');

document.querySelector('.searchbtn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('search');
    search = searchBarInput.value;

    fetch('https://dummyjson.com/products/search?q=' + search)
    .then(res => res.json()).then(jsonData=>{
    document.querySelector('.products').innerHTML =
    jsonData.products.reduce((html, product)=> html+= `<li class="animation"><section><div class=imagecontainer><img src=${product.images[0]} class="productimage"></div> <div class=productinfo><h2> ${product.title} </h2><p> ${product.stock} in stock</p></div><button class="seemorebtn" onclick="seeMore(${product.id})"> See more </button></section></li>`, '');
})
})

document.querySelector('.allbtn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('search');
    searchBarInput.value = '';

    fetch('https://dummyjson.com/products?limit=102')
    .then(res => res.json()).then(jsonData=>{
    document.querySelector('.products').innerHTML =
    jsonData.products.reduce((html, product)=> html+= `<li><section><div class=imagecontainer><img src=${product.images[0]} class="productimage"></div> <div class=productinfo><h2> ${product.title} </h2><p> ${product.stock} in stock</p></div><button class="seemorebtn" onclick="seeMore(${product.id})"> See more </button></section></li>`, '');
})
})


var categoryshown = false;
var dropdowncontent = document.querySelector('.dropdown-content');

document.querySelector('.dropdownbtn').addEventListener('click', function(event){
    console.log("category");
    event.preventDefault();
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    // .then(console.log);
    
    .then(jsonData=>{
    document.querySelector('.dropdown-content').innerHTML =
    jsonData.reduce((html, category)=> html+= `<li><button class="categoryname" onclick="seeCategory('${category}')">${category}</button></li>`, '');
})

if(categoryshown == false){
    dropdowncontent.style.setProperty('display', 'block');
    return categoryshown = true;
}
else if(categoryshown == true){
    dropdowncontent.style.setProperty('display', 'none');
    return categoryshown = false;
}
})

document.querySelector('.addproductbtn').addEventListener('click', function(event){
    console.log("add product");
    document.querySelector('.products').innerHTML =  `<li style="padding-block: 2em;"><section style="flex-direction: column;" class="animation">
    <input type="text" placeholder="Productname" id="producttitle" style="width: 277px;text-align:left;font-weight:500;font-size: 20px;border: none;
    border-bottom: solid 2px black;>
    <div style="display: flex;flex-direction: row;align-items: center;">
    <div style="display: flex;flex-direction: row;margin-block: 1em;;width: 100%;align-items: center;">
    <input type="file" class="productimageinfo" style="width: 292px;margin-block: 1em;" id="image">
    <textarea type="text" id="description" placeholder="Description" style="width:50%;margin-inline: 0.5em;height:90px"></textarea></div> 
    <div class=productinfo style="width:100%">
    <span><p> In stock: </p><input type="number" id="stock"></span> 
    <span><p> Price: </p><input type="number" id="price"></span>
     <span><p> Discountpercentage: </p><input type="number" id="discount"></span> 
     <span><p>Rating: </p><input type="number" id="rating"></span>
     <span><p>Brand:</p><input type="text" id="brand"></input></span>
      <span><p>Category:</p><input type="text" id="category"></span> </div>
      <button class="addproduct-btn" onclick="addProductToList()"> Add Product </button></section></li>`, ''/*)*/;
})



// function addProductToList(){
//     var productTitleInput = document.querySelector('#producttitle').value;
//     var imageInput = document.querySelector('#image').files[0];
//     var descriptionInput = document.querySelector('#description').value;
//     var stockInput = document.querySelector('#stock').value;
//     var priceInput = document.querySelector('#price').value;
//     var discountInput = document.querySelector('#discount').value;
//     var ratingInput = document.querySelector('#rating').value;
//     var brandInput = document.querySelector('#brand').value;
//     var categoryInput = document.querySelector('#category').value;


// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: productTitleInput,
//     image: imageInput,
//     description: descriptionInput,
//     stock: stockInput,
//     price: priceInput,
//     discount: discountInput,
//     rating: ratingInput,
//     brand: brandInput,
//     category: categoryInput,
//     /* other product data */
//   })
// })
// .then(res => res.json()).then(jsonData=>{
//         document.querySelector('.products').innerHTML =`<li><section id=${jsonData.id}><div class=imagecontainer><img src=${jsonData.image} class="productimage"></div> <div class=productinfo><h2> ${jsonData.title} </h2><p> ${jsonData.stock} in stock</p></div><button class="seemorebtn" onclick="seeMore(${jsonData.id})"> See more </button></section></li>`, ''
// // .then(console.log);
// })
// }

var productList=[];

function addProductToList(){
function Product(jsonProduct){
    Object.assign(this,jsonProduct);
};
productPrototype={
    generateHTML(){
        return `<li><section><div class=imagecontainer>
        <img src=${this.images[0]} class="productimage">
        </div> <div class=productinfo><h2> ${this.title} </h2><p> ${this.stock} in stock</p></div><button class="seemorebtn" onclick="productInfo(${this.id})"> See more </button></section></li>`;  
    }
};
Object.assign(Product.prototype,productPrototype);
allProducts=[];
var productID = 101;
var productTitleInput = document.querySelector('#producttitle').value;
var imageInput = 'img/placeholder.png';
var descriptionInput = document.querySelector('#description').value;
var stockInput = document.querySelector('#stock').value;
var priceInput = document.querySelector('#price').value;
var discountInput = document.querySelector('#discount').value;
var ratingInput = document.querySelector('#rating').value;
var brandInput = document.querySelector('#brand').value;
var categoryInput = document.querySelector('#category').value;

newproduct=new Product({id: productID, title: productTitleInput,description: descriptionInput, stock: stockInput,price: priceInput,images: [imageInput]});
allProducts.push(newproduct);


fetch('https://dummyjson.com/products?limit=102')
.then(res => res.json())
.then(json=>{
    json.products.forEach(product=>{
        allProducts.push(new Product(product));  
        productList.push(new Product(product));
        productList.push(newproduct);
    });    
}).then(()=>{
    console.log('here');
    document.querySelector('.products').innerHTML = '';
    allProducts.forEach(product=>{
        document.querySelector('.products').innerHTML += product.generateHTML();
    });
})
return productList;
}



function productInfo(id){
    document.querySelector('.products').innerHTML = '';
    const searchID = id
    var newProduct = productList.find(product => product.id == searchID);
    console.log(newProduct);
    document.querySelector('.products').innerHTML += `<li style="padding-block: 2em;" class="animation">
    <section style="flex-direction: column;">
    <h2 style="width: 100%;text-align:left;font-weight:500;font-size:25px"> ${newProduct.title} </h2>
    <div style="display: flex;flex-direction: row;align-items: center;">
    <img src=${newProduct.images[0]} class="productimageinfo" style="width: 450px;">
    <p style="width:  40%;margin-inline: 0.5em;"> Description: ${newProduct.description}</p></div> 
    <div class=productinfo style="width:100%">
    <p> ${newProduct.stock} in stock</p>
    <p> Price: ${newProduct.price}</p>
    <p> Price: ${newProduct.discountPercentage}</p>
    <p> Rating: ${newProduct.rating}</p>
    <p> Brand: ${newProduct.brand}</p>
    <p> Category: ${newProduct.category}</p></div>
    <button class="seelessbtn" onclick="seeAllNewProducts()"> Return </button></section></li>`;
}

function seeAllNewProducts(){
    document.querySelector('.products').innerHTML = '';
    allProducts.forEach(product=>{
        document.querySelector('.products').innerHTML += product.generateHTML();
    });
}