fetch('https://dummyjson.com/comments?limit=102')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.comments').innerHTML =
    jsonData.comments.reduce((html, comment)=> html+= `<li><section id=${comment.id}>
    <div class=imagecontainer><img src='img/comment.png' class="commentimage"></div> 
    <div class=commentinfo><h2> ${comment.user.username} </h2><p> ${comment.body}</p></div>
    </section></li>`, '')
});