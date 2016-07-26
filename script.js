$("#bio")
.on("mouseover", function(e){
  $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions. ")
});

$("#linkedin")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Feel free to connect with me!")
});


$("#github")
.on("mouseover", function(e){
  $("#contentBlog").first().html("My Github profile: all my projects and learning exercises repositories from General Assembly and my favorite project forks")
});

$("#email")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Feel free to reach out to me!")
});

$("#war")
.on("mouseover", function(e){
  $("#contentBlog").first().html("First project at General Assembly, it's the War card game in Javascript but with a surprise :) <br>Full Disclosure: lower audio volume")
});

$("#townboard")
.on("mouseover", function(e){
  $("#contentBlog").first().html("My first deployed Ruby on Rails CRUD App, with Heroku hosting. I wanted to create a local messageboard for users to share information. Since the boards are seeded, these boards can be used for anything. Still a work in progress.")
});

$("#oneaux")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Single-Page (Angular JS) App that utilizes Spotify API to add songs to playlist (Rails API) and allows users to upvote and downvote songs to queue in a Spotify playlist.")
});

$("#bp2015")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Download (right click save link as) or stream the recorded live mix from the Barn Party 2015. This mix had about 600+ plays on Soundcloud before it was taken down :(")
});

$("#chill")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Link to my Chill mix series. Downtempo, relaxing, soothing, intimate, enticing music.")
});

$("#lit")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Soundcloud link. Fast. Upbeat. Belligerent music.")
});


$("ul li")
.on("mouseout", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man")
})

$("a")
.on("mouseout", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man")
})
