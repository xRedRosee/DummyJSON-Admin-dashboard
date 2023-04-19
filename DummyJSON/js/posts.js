fetch('https://dummyjson.com/posts?limit=102')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.posts').innerHTML =
    jsonData.posts.reduce((html, post)=> html+= `<li><section id=${post.id}><div class=imagecontainer><img src="img/post.png" class=postimg>
    </div> <div class=userinfo><h2> Post title: ${post.title} </h2><p> Tags: ${post.tags} </p><p> Reactions: ${post.reactions}</p></div>
    <button class="seemorebtn" onclick="seeMore(${post.id})"> See more </button></section></li>`, '')
});

const searchBarInput = document.querySelector('.searchbar');

document.querySelector('.searchbtn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('search');
    search = searchBarInput.value;

    fetch('https://dummyjson.com/posts/search?q=' + search)
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.posts').innerHTML =
        jsonData.posts.reduce((html, post)=> html+= `<li><section id=${post.id}><div class=imagecontainer><img src="img/post.png" class=postimg>
        </div> <div class=userinfo><h2> Post title: ${post.title} </h2><p> Tags: ${post.tags} </p><p> Reactions: ${post.reactions}</p></div>
        <button class="seemorebtn" onclick="seeMore(${post.id})"> See more </button></section></li>`, '')
})
})

document.querySelector('.allbtn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('search');
    searchBarInput.value = '';

    fetch('https://dummyjson.com/posts?limit=102')
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.posts').innerHTML =
        jsonData.posts.reduce((html, post)=> html+= `<li><section id=${post.id}><div class=imagecontainer><img src="img/post.png" class=postimg>
        </div> <div class=userinfo><h2> Post title: ${post.title} </h2><p> Tags: ${post.tags} </p><p> Reactions: ${post.reactions}</p></div>
        <button class="seemorebtn" onclick="seeMore(${post.id})"> See more </button></section></li>`, '')
})
})

function seeLess(){
    fetch('https://dummyjson.com/posts?limit=102')
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.posts').innerHTML =
        jsonData.posts.reduce((html, post)=> html+= `<li><section id=${post.id}><div class=imagecontainer><img src="img/post.png" class=postimg>
        </div> <div class=userinfo><h2> Post title: ${post.title} </h2><p> Tags: ${post.tags} </p><p> Reactions: ${post.reactions}</p></div>
        <button class="seemorebtn" onclick="seeMore(${post.id})"> See more </button></section></li>`, '')
});
}

function seeMore(id){
    const postID = id; 

    fetch('https://dummyjson.com/posts/' + postID)
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.posts').innerHTML =
         `<li style="padding-block: 2em;" class="animation">
         <section style="flex-direction: column;">
         <h2 style="width: 100%;text-align:left;font-weight:500;font-size:25px"> ${jsonData.title} </h2>
         <div style="display: flex;flex-direction: row;align-items: center;">
         <img src='img/post.png' class="productimageinfo" style="width: 150px;">
         <p style="width:  40%;margin-inline: 1.5em;"> Text: ${jsonData.body}</p>
         </div> 
         <div class=productinfo style="width:100%">
         <p> Tags: ${jsonData.tags}</p>
         <p> Reactions: ${jsonData.reactions}</p>
         </div>
         <button class="seelessbtn" onclick="seeLess()"> Return </button>
         </section></li>`, ''/*)*/;
    })
}

document.querySelector('.addpostbutton').addEventListener('click', function(event){
    console.log("add product");
    document.querySelector('.posts').innerHTML =  `<li style="padding-block: 2em;" class="animation">
    <section style="flex-direction: column;">
    <input type="text" placeholder="Postname" id="title" style="width: 277px;text-align:left;font-weight:500;font-size: 20px;border: none;
    border-bottom: solid 2px black;>
    <div style="display: flex;flex-direction: row;align-items: center;">
    <div style="display: flex;flex-direction: row;margin-block: 1em;;width: 100%;align-items: center;">
    <img src=img/post.png style="height: 110px">
    <textarea type="text" id="description" placeholder="Description" style="width:50%;margin-inline: 0.5em;height:90px"></textarea>
    </div> 
    <div class=postinfo style="width:100%">
    <span><p> Tags </p><input type="text" id="tags"></span> 
    </div><button class="addpost-btn" onclick="addPostToList()"> Add Post </button></section></li>`, ''/*)*/;
})


postList = [];
function addPostToList(){
    function Post(jsonPost){
        Object.assign(this,jsonPost);
    };
    postPrototype={
        generateHTML(){
            return `<li><section id=${this.id}><div class=imagecontainer><img src="img/post.png" class=postimg>
            </div> <div class=userinfo><h2> Post title: ${this.title} </h2><p> Tags: ${this.tags} </p><p> Reactions: ${this.reactions}</p></div>
            <button class="seemorebtn" onclick="postInfo(${this.id})"> See more </button></section></li>`
        }
    };
    Object.assign(Post.prototype,postPrototype);
    allPosts=[];
    var productID = '101';
    var postTitleInput = document.querySelector('#title').value;
    var descriptionInput = document.querySelector('#description').value;
    var tagsInput = document.querySelector('#tags').value;

    
    newpost=new Post({id: productID, title: postTitleInput,body: descriptionInput, tags: tagsInput, reactions: 0});
    allPosts.push(newpost);
    
    fetch('https://dummyjson.com/posts?limit=102')
    .then(res => res.json())
    .then(json=>{
        json.posts.forEach(post=>{
            allPosts.push(new Post(post));
            postList.push(new Post(post));
            postList.push(newpost);     
        });    
    }).then(()=>{
        console.log('here');
        document.querySelector('.posts').innerHTML = '';
        allPosts.forEach(post=>{
            document.querySelector('.posts').innerHTML += post.generateHTML();
        });
    })
}

function postInfo(id){
    document.querySelector('.posts').innerHTML = '';
    const searchID = id
    var newPost = postList.find(post => post.id == searchID);
    console.log(newPost);
    document.querySelector('.posts').innerHTML =
    `<li style="padding-block: 2em;" class="animation">
    <section style="flex-direction: column;">
    <h2 style="width: 100%;text-align:left;font-weight:500;font-size:25px"> ${newPost.title} </h2>
    <div style="display: flex;flex-direction: row;align-items: center;">
    <img src='img/post.png' class="productimageinfo" style="width: 150px;">
    <p style="width:  40%;margin-inline: 1.5em;"> Text: ${newPost.body}</p>
    </div> 
    <div class=productinfo style="width:100%">
    <p> Tags: ${newPost.tags}</p>
    <p> Reactions: ${newPost.reactions}</p>
    </div>
    <button class="seelessbtn" onclick="seeAllNewPosts()"> Return </button>
    </section></li>`;
}

function seeAllNewPosts(){
    document.querySelector('.posts').innerHTML = '';
    allPosts.forEach(post=>{
        document.querySelector('.posts').innerHTML += post.generateHTML();
    });
}