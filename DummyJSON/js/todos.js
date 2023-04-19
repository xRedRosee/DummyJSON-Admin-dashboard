fetch('https://dummyjson.com/todos?limit=102')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.todos').innerHTML =
    jsonData.todos.reduce((html, todo)=> html+= `<li><section id=${todo.id}>
    <div class=imagecontainer><img src='img/todo.png' class="todoimage"></div> 
    <div class=todoinfo><h2> ${todo.todo} </h2><p> Done: ${todo.completed}</p></div>
    </section></li>`, '')
});