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
.on("click", function(e){
  $("#contentBlog").first().html("First project at General Assembly, it's the War card game in Javascript but with a surprise :)<br> <br>Full Disclosure: lower audio volume <br><br><a class='go' href='http://at89.github.io/WARCARDGAME'>App</a> | <a class='go' href='http://github.com/at89/WARCARDGAME'>Github</a>"
)
});

$("#townboard")
.on("click", function(e){
  $("#contentBlog").first().html("<br><br>My first deployed Ruby on Rails CRUD App, with Heroku hosting. I wanted to create a local messageboard for users to share information. Since the boards are seeded, these boards can be used for anything. <br><br>Still a work in progress.<br><br><a class='go' href='https://anh-townboard.herokuapp.com/boards/'>App</a> | <a class='go' href='http://github.com/at89/townboard'>Github</a>")
});

$("#oneaux")
.on("click", function(e){
  $("#contentBlog").first().html("<br><br>Single-Page (Angular JS) App that utilizes Spotify API to add songs to playlist (Rails API) and allows users to upvote and downvote songs to queue in a Spotify playlist.<br><br> Still a work in progress. <br>(links broke since we renamed..)<br><br><a class='go' href='https://at89.github.io/oneaux/'>App</a> | <a class='go' href='http://github.com/at89/oneaux'>Github</a>")
});

// $("#cr2016")
// .on("mouseover", function(e){
//   $("#contentBlog").first().html("My mix for Camp Rise 2016 .<br>To be released<br>Not yet recorded/played.")
// });

$("#bp2015")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Download (right click save link as) or stream the recorded live mix from the Barn Party 2015. This mix had about 600+ plays on Soundcloud before it was taken down :(<br><br> <a class='go' href='http://mp3.anhtice.com/Others/BP2015.mp3'>BP 2015</a>")
});

$("#chill")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Link to my Chill mix series. Downtempo, relaxing, soothing, intimate, enticing music.<br><br><a class='go' href='http://anhtice.net23.net'>Listen</a> | <a class='go' href='http://mp3.anhtice.com/Chill/'>Download</a>")
});

$("#lit")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Soundcloud link. Fast. Upbeat. Belligerent music.<br><br><a class='go' href='https://soundcloud.com/anhtice/tracks'>SC Link</a>")
});


// $("ul li")
// .on("mouseout", function(e){
//   $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man")
// })

$(".hero")
.on("mouseout", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man")
})
