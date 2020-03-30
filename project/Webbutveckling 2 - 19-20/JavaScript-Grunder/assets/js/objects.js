var output = document.getElementsByClassName("hihi") [0];

var posts = [
    {
        author: "CatLuvr",
        title: "Catz are gr8",
        comments: ["I have such an adorable cat!", "blablabla"]
    },
    {
        author: "DogKing",
        title: "Dogs eat much",
        comments: ["I have a dog that eats so much food"]
    },
    {
        author: "Tiger",
        title: "Big cat",
        comments: ["He's such a big cat"]
    }
];

// output.innerHTML = "Author: " + posts[1].author + "<br/> Comment: " + posts[1].comments + "<br/> title: " + posts[1].title;

output.innerHTML = "";
posts.forEach(function(post){
    output.innerHTML += "Author: " + post.author + "<br/>Title: " + post.title + "<br/>Comments: " + post.comments.join(" & ") + "<br/><br/>";
});

output.innerHTML = "";

var movies = [
{
    title: "The Witcher", 
    rating: "8.4 stars",
    hasWatched: true
},
{
    title: "Game Of Thrones", 
    rating: "9.3 stars",
    hasWatched: true 
},
{
    title: "Marriage", 
    rating: "8 stars",
    hasWatched: false
},
{
    title: "The Godfather", 
    rating: "9.1 stars",
    hasWatched: false
}
];

movies.forEach(function(movie){
    if(movie.hasWatched == true) {
        output.innerHTML += "Movie: " + movie.title + "<br/>IMDB Rating: " + movie.rating + "<br/>Has seen/not seen movie/show: Yes" + "<br/><br/>";
    }else{
        output.innerHTML += "Movie: " + movie.title + "<br/>IMDB Rating: " + movie.rating + "<br/>Has seen/not seen movie/show: No" + "<br/><br/>";
    };
});

output.innerHTML = "";

var btnAddFriend = document.querySelector(".aFriend");
var btnRemoveFriend = document.querySelector(".rFriend");

var user = {
    friends: ["Arnold", "Stallone", "Chuck"],
    addFriend: function(friend) {
        this.friends.push(friend);
        output.innerHTML = user.friends;
    },
    removeFriend: function() {
        this.friends.pop();
        output.innerHTML = user.friends;
    }

    
};

output.innerHTML = user.friends;


btnAddFriend.addEventListener("click", function() {
    user.addFriend(prompt("Insert name of friend"))
});

btnRemoveFriend.addEventListener("click", removeMyFriend);

function removeMyFriend() {
    user.removeFriend();
}

//Hero object
//HTML Element Section

var btnDmgTaken = document.getElementsByClassName("dmgTaken")[0];
var btnManaRefill = document.getElementsByClassName("manaRefill")[0];
var btnCastSpell = document.getElementsByClassName("castSpell")[0];
var btnHpRefill = document.querySelector(".hpRefill");
var hpBar = document.querySelector(".hp");
var manaBar = document.querySelector(".mana");
var heroImage = document.querySelector(".hero-image");
var btnRestart = document.querySelector(".btnRestart");


var hero = {
    name: "ArneSlayer",
    hp: 100,
    mana: 30,
    dmgTaken: function() {
        if (this.hp <= 50) {
            this.hp = this.hp - 5;
            hpBar.innerHTML = this.hp + " Health is getting low!";
            heroImage.setAttribute("src", "../assets/images/wizardBeat.png");

        } else {
            this.hp = this.hp - 5;
            hpBar.innerHTML = this.hp;
        }
        
    },
    manaRefill: function() {
        this.mana = this.mana + 30;
        manaBar.innerHTML = this.mana;
    },
    castSpell: function() {
        this.mana = this.mana - 40;
        manaBar.innerHTML = this.mana;
    },
    hpRefill: function() {
        this.hp = this.hp + 15;
        hpBar.innerHTML = this.hp;
        
    },
    gameOver: function() {
        if(this.hp <= 0) {
            hpBar.innerHTML = "Game Over";
            heroImage.setAttribute("src", "../assets/images/wizardDead.png");
            btnDmgTaken.classList.add("btnGameOver");
            btnManaRefill.classList.add("btnGameOver");
            btnHpRefill.classList.add("btnGameOver");
            btnCastSpell.classList.add("btnGameOver");
            btnRestart.style.opacity = 1;
            btnRestart.style.height = 50 + "px";
            btnRestart.classList.remove("disableBtnRestart")
            
        }
    },
    restartGame:  function() {
        hpBar.innerHTML = hero.hp = 100;
        manaBar.innerHTML = hero.mana = 30;
        btnRestart.style.opacity = 0;
        heroImage.setAttribute("src", "../assets/images/Wizard.png");
        btnRestart.classList.remove("disableBtnRestart");
        btnDmgTaken.classList.remove("btnGameOver");
        btnManaRefill.classList.remove("btnGameOver");
        btnHpRefill.classList.remove("btnGameOver");
        btnCastSpell.classList.remove("btnGameOver");
    }
}

hpBar.innerHTML = hero.hp;
manaBar.innerHTML = hero.mana;

btnDmgTaken.addEventListener("click", function() {
    hero.dmgTaken();
    hero.gameOver();
});

btnManaRefill.addEventListener("click", function(){
    hero.manaRefill();
});

btnCastSpell.addEventListener("click", function(){
    hero.castSpell();
});

btnHpRefill.addEventListener("click", function() {
    hero.hpRefill();
});

btnRestart.addEventListener("click", function() {
    hero.restartGame();
});

