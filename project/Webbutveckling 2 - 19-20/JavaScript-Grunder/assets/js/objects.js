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