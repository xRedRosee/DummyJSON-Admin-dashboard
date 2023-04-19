function Product(jsonProduct){
    Object.assign(this,jsonProduct);
};
productPrototype={
    generateHTML(){
        return `<section><h1>${this.title}</h1>price:${this.price}</section>`;  
    }
};
Object.assign(Product.prototype,productPrototype);
allProducts=[];
iphone=new Product({title:'iphone 25',price:2999.99});
allProducts.push(iphone);

fetch('https://dummyjson.com/carts/3')
.then(res => res.json())
.then(json=>{
    json.products.forEach(product=>{
        allProducts.push(new Product(product));        
    });    
}).then(()=>{
    console.log('here');
    allProducts.forEach(product=>{
        document.body.innerHTML+=product.generateHTML();
    });
});
