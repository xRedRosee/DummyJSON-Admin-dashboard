fetch('https://dummyjson.com/users?limit=102')
.then(res => res.json()).then(jsonData=>{
    document.querySelector('.users').innerHTML =
    jsonData.users.reduce((html, user)=> html+= `<li><section id=${user.id}><div class=imagecontainer><img src=${user.image} class="userimage"> 
    </div> <div class=userinfo><h2> Email: ${user.email} </h2><h2> Username: ${user.username} </h2><p> Gender: ${user.gender}</p></div>
    <button class="seemorebtn" onclick="seeMore(${user.id})"> See info </button></section></li>`, '')
});

function seeLess(){
    fetch('https://dummyjson.com/users?limit=102')
    .then(res => res.json()).then(jsonData=>{
    document.querySelector('.users').innerHTML =
    jsonData.users.reduce((html, user)=> html+= `<li><section id=${user.id}><div class=imagecontainer><img src=${user.image} class="userimage"> 
    </div> <div class=userinfo><h2> Email: ${user.email} </h2><h2> Username: ${user.username} </h2><p> Gender: ${user.gender}</p></div>
    <button class="seemorebtn" onclick="seeMore(${user.id})"> See info </button></section></li>`, '')
})
}

function seeMore(id){
    const userID = id; 

    fetch('https://dummyjson.com/users/' + userID)
    .then(res => res.json()).then(jsonData=>{
        document.querySelector('.users').innerHTML =
        `<li style="padding-block: 2em;" class="animation"><section style="flex-direction: column;">
        <div style="display: flex;flex-direction: row;align-items: center;width: 100%">
        <h2 style="width: 100%;text-align:left;font-weight:500;font-size:25px"> User: ${jsonData.username} </h2>
        <img src=${jsonData.image} class="productimageinfo" style="width: 450px;"></div> 
        <div class="productinfo" style="width:100%">
        <div class="infolist">
        <p> Email: ${jsonData.email}</p>
        <p> Phone: ${jsonData.phone}</p><p> Password: ${jsonData.password}</p>
        <p> Name: ${jsonData.firstName} ${jsonData.lastName}</p>
        <p> Birthdate: ${jsonData.birthDate}</p><p> Gender: ${jsonData.gender}</p>
        </div>
        <div class="buttonlist">
        <button class="seeinformationbtn" onclick="seeCart(${jsonData.id})"> User's Cart </button>
        <button class="seeinformationbtn" onclick="seePosts(${jsonData.id})"> User's Posts </button>
        <button class="seeinformationbtn" onclick="seeToDos(${jsonData.id})"> User's ToDos </button>
        </div>
        </div>
        </section>
        <button class="seelessbtn" onclick="seeLess()"> Return </button></li>`, '';
    })
}

const searchBarInput = document.querySelector('.searchbar');

document.querySelector('.searchbtn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('search');
    search = searchBarInput.value;

    fetch('https://dummyjson.com/users/search?q=' + search)
    .then(res => res.json()).then(jsonData=>{
    document.querySelector('.users').innerHTML =
    jsonData.users.reduce((html, user)=> html+= `<li class="animation"><section id=${user.id}><div class=imagecontainer><img src=${user.image} class="userimage"> 
    </div> <div class=userinfo><h2> Email: ${user.email} </h2><h2> Username: ${user.username} </h2><p> Gender: ${user.gender}</p></div>
    <button class="seemorebtn" onclick="seeMore(${user.id})"> See info </button></section></li>`, '')
})
})

document.querySelector('.allbtn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('search');
    searchBarInput.value = '';

    fetch('https://dummyjson.com/users?limit=102')
    .then(res => res.json()).then(jsonData=>{
    document.querySelector('.users').innerHTML =
    jsonData.users.reduce((html, user)=> html+= `<li><section id=${user.id}><div class=imagecontainer><img src=${user.image} class="userimage"> 
    </div> <div class=userinfo><h2> Email: ${user.email} </h2><h2> Username: ${user.username} </h2><p> Gender: ${user.gender}</p></div>
    <button class="seemorebtn" onclick="seeMore(${user.id})"> See info </button></section></li>`, '')
})
})

function seeCart(id){
    userID = id;
    fetch('https://dummyjson.com/users/'+userID+'/carts')
    .then(res => res.json())
    .then(jsonData=>{
    document.querySelector('.buttonlist').innerHTML =
    jsonData.carts.reduce((html, cart)=> html+= `<li><div class=userinfo><h2> User's Cart </h2><p> Total products: ${cart.totalProducts} </p><p> Total price: ${cart.total} $</p></div>
    <button class="seemorebtn" onclick="seeMore(${cart.userId})"> Close </button></li>`, '')
    // .then(console.log);
    }
)
}

function seePosts(id){
    userID = id;
    fetch('https://dummyjson.com/users/'+userID+'/posts')
    .then(res => res.json())
    .then(jsonData=>{
        document.querySelector('.buttonlist').innerHTML = `<h2> User's Posts </h2>` + 
        jsonData.posts.reduce((html, post)=> html+= `<li><div "class=userinfo animation"><p> Post title: ${post.title} </p><p> Post: ${post.body}</p><p> Reactions: ${post.reactions}</p></div>
        <button class="seemorebtn" onclick="seeMore(${post.userId})"> Close </button></li>`, '')
        // .then(console.log);
        }
    // .then(console.log);
    )
}

function seeToDos(id){
    userID = id;
    fetch('https://dummyjson.com/users/'+userID+'/todos')
    .then(res => res.json())
    .then(jsonData=>{
        document.querySelector('.buttonlist').innerHTML = `<h2> User's ToDos </h2>` +
        jsonData.todos.reduce((html, todo)=> html+= `<li><div class=userinfo animation><p> ToDo: ${todo.todo} </p><p> Done: ${todo.completed}</p></div>
        <button class="seemorebtn" onclick="seeMore(${todo.userId})"> Close </button></li>`, '')
        // .then(console.log);
        }
    // .then(console.log);
    )
}

document.querySelector('.adduserbutton').addEventListener('click', function(event){
    console.log("add user");
    document.querySelector('.users').innerHTML =  `<li style="padding-block: 2em;"><section style="flex-direction: column;">
    <form class="animation">
    <input type="text" placeholder="Username" required="required" id="username" style="width: 277px;text-align:left;font-weight:500;font-size: 20px;border: none;
    border-bottom: solid 2px black;">
    <div style="display: flex;flex-direction: column;align-items: center;">
    <div style="display: flex;flex-direction: row;margin-block: 1em;;width: 100%;align-items: center;">
    <input type="file" class="productimageinfo" style="width: 292px;margin-block: 1em;" id="image"></div>
     <div class=userinfo style="width:100%">
     <span><p>First name: </p><input type="text" required="required" id="fname"></span>
     <span><p>Last name: </p><input type="text" required="required" id="lname"></span>
     <span><p> Email: </p><input type="email" id="email" required="required"></span>
      <span><p> Phone: </p><input type="text" id="phone"></span> 
     <span><p> Password: </p><input type="password" required="required" id="password"></span>
      <span><p>Birthdate:</p><input type="date" required="required" id="birthdate"></input></span> 
      <span><p>Gender:</p><input type="text" id="gender"></span> 
      </div><input class="adduser-btn" onclick="addUserFunction()" type="submit" value="Add User"></button>
      </form></section></li>`, ''/*)*/;
})



// function addUserToList(){
//     var userNameInput = document.querySelector('#username').value;
//     var imageInput = document.querySelector('#image').files[0];
//     var firstnameInput = document.querySelector('#fname').value;
//     var lastnameInput = document.querySelector('#lname').value;
//     var emailInput = document.querySelector('#email').value;
//     var phoneInput = document.querySelector('#phone').value;
//     var passwordInput = document.querySelector('#password').value;
//     var birthdateInput = document.querySelector('#birthdate').value;
//     var genderInput = document.querySelector('#gender').value;


// fetch('https://dummyjson.com/users/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     username: userNameInput,
//     image: imageInput,
//     firstName: firstnameInput,
//     lastName: lastnameInput,
//     email: emailInput,
//     phone: phoneInput,
//     password: passwordInput,
//     birthDate: birthdateInput,
//     gender: genderInput,
//     /* other product data */
//   })
// })
// .then(res => res.json()).then(jsonData=>{
//         document.querySelector('.users').innerHTML =`<li><section id=${jsonData.id}><div class=imagecontainer><img src=${jsonData.image} class="productimage"></div>
//          <div class=userinfo><h2> Email: ${jsonData.email} </h2><h2> Username: ${jsonData.username} </h2>
//          <p> Gender: ${jsonData.gender} </p></div><button class="seemorebtn" onclick="seeMore(${jsonData.id})"> See more </button></section></li>`, ''
// // .then(console.log);

// // showProducts();
// })
// }

var userList = [];

function addUserFunction(){
    function User(jsonUser){
        Object.assign(this,jsonUser);
    };
    userPrototype={
        generateHTML(){
            return `<li><section><div class=imagecontainer><img src=${this.image} class="userimage"> 
            </div> <div class=userinfo><h2> Email: ${this.email} </h2><h2> Username: ${this.username} </h2><p> Gender: ${this.gender}</p></div>
            <button class="seemorebtn" onclick="userInfo(${this.id})"> See info </button></section></li>`;
        }
    };
    Object.assign(User.prototype,userPrototype);
    allUsers=[];
    var userNameInput = document.querySelector('#username').value;
    var imageInput ='img/placeholder.png';
    var firstnameInput = document.querySelector('#fname').value;
    var lastnameInput = document.querySelector('#lname').value;
    var emailInput = document.querySelector('#email').value;
    var phoneInput = document.querySelector('#phone').value;
    var passwordInput = document.querySelector('#password').value;
    var birthdateInput = document.querySelector('#birthdate').value;
    var genderInput = document.querySelector('#gender').value;
    
    newuserperson=new User({username: userNameInput,firstName: firstnameInput, lastName: lastnameInput, email: emailInput,phone: phoneInput, password: passwordInput, birthDate: birthdateInput, gender: genderInput,images: [imageInput]});
    console.log(newuserperson);
    allUsers.push(newuserperson);
    
    fetch('https://dummyjson.com/users?limit=102')
    .then(res => res.json())
    .then(json=>{
        json.users.forEach(user=>{
            allUsers.push(new User(user));
            userList.push(new User(user));
            userList.push(newuserperson);      
        });    
    }).then(()=>{
        console.log('here');
        document.querySelector('.users').innerHTML = '';
        allUsers.forEach(user=>{
            document.querySelector('.users').innerHTML += user.generateHTML();
        });
    })
}

function userInfo(id){
    document.querySelector('.users').innerHTML = '';
    const searchID = id
    var newUser = userList.find(user => user.id == searchID);
    console.log(newUser);
    document.querySelector('.users').innerHTML =
    `<li style="padding-block: 2em;" class="animation"><section style="flex-direction: column;">
    <div style="display: flex;flex-direction: row;align-items: center;width: 100%">
    <h2 style="width: 100%;text-align:left;font-weight:500;font-size:25px"> User: ${newUser.username} </h2>
    <img src=${newUser.image} class="productimageinfo" style="width: 450px;"></div> 
    <div class="productinfo" style="width:100%">
    <div class="infolist">
    <p> Email: ${newUser.email}</p>
    <p> Phone: ${newUser.phone}</p><p> Password: ${newUser.password}</p>
    <p> Name: ${newUser.firstName} ${newUser.lastName}</p>
    <p> Birthdate: ${newUser.birthDate}</p><p> Gender: ${newUser.gender}</p>
    </div>
    <div class="buttonlist">
    <button class="seeinformationbtn" onclick="seeCart(${newUser.id})"> User's Cart </button>
    <button class="seeinformationbtn" onclick="seePosts(${newUser.id})"> User's Posts </button>
    <button class="seeinformationbtn" onclick="seeToDos(${newUser.id})"> User's ToDos </button>
    </div>
    </div>
    </section>
    <button class="seelessbtn" onclick="seeAllNewUsers()"> Return </button></li>`, '';
}

function seeAllNewUsers(){
    document.querySelector('.users').innerHTML = '';
    allUsers.forEach(user=>{
        document.querySelector('.users').innerHTML += user.generateHTML();
    });
}