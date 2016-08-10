$("#bio")
.on("mouseover", function(e){
  $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions. ")
});

$("#skills")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Click to see <br>Full Stack Web Developer skills")
});

$("#skills")
.on("click", function(e){
  $("#contentBlog").first().html("Front-end: <br> JQuery, AngularJS, ReactJS <br><br> Back-end:<br> AJAX, SQL, Rails, Express, Mongoose/MongoDB, PostGres, ActiveRecord, Firebase <br><br> Languages:<br> Javascript, Ruby, Python, ELM, PHP <br><br>Misc: <br>CLI, Git, CSS, SASS, TDD (Rspec, Jasmine), Heroku, Wordpress, ES6")
});

$("#github")
.on("mouseover", function(e){
  $("#contentBlog").first().html("My Github profile: all my projects, learning exercises, repositories from General Assembly and my favorite project forks")
});

$("#linkedin")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Feel free to connect with me!")
});

$("#email")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Feel free to reach out to me!")
});

$("#war")
.on("click", function(e){
  $("#contentBlog").first().html("First project at General Assembly, it's the War card game in Javascript but with a surprise :)<br> <br>Full Disclosure: lower audio volume <br><br><a class='go' href='http://at89.github.io/WARCARDGAME'>App</a> | <a class='go2' href='http://github.com/at89/WARCARDGAME'>Github</a>"
)
});

$("#townboard")
.on("click", function(e){
  $("#contentBlog").first().html("My first deployed Ruby on Rails CRUD App, with Heroku hosting. I wanted to create a local messageboard for users to share information. Since the boards are seeded, these boards can be used for anything. <br><br>Still a work in progress.<br><br><a class='go' href='https://anh-townboard.herokuapp.com/boards/'>App</a> | <a class='go2' href='http://github.com/at89/townboard'>Github</a>")
});

$("#instagram")
.on("click", function(e){
  $("#contentBlog").first().html("Instagram Gallery feed.<br> Using slick.js (the best carousel CDN) <br><br><a class='go' href='https://at89.github.io/instagramfeed'>App</a> | <a class='go' href='http://kenwheeler.github.io/slick/'>Slick</a> | <a class='go2' href='https://github.com/AT89/instagramfeed'>Github</a> ")
});

$("#oneaux")
.on("click", function(e){
  $("#contentBlog").first().html("Single-Page (Angular JS) App that utilizes Spotify API to add songs to playlist (Rails API) and allows users to upvote and downvote songs to queue in a Spotify playlist.<br><br> Still a work in progress. <br><br><br><a class='go' href='http://oneaux.net/'>App</a> | <a class='go2' href='http://github.com/at89/oneaux'>Github</a>")
});

$("#nyan-cat")
.on("click", function(e){
  $("#contentBlog").first().html("Cute shoot em up game using Phaser.io, would like to implement this with websockets and test out ionic/Angular to make it Mobile friendly. Still a Work in progress but its so cute!<br><br> There is audio <br><br><br><a class='go' href='https://at89.github.io/nyancat_the_game/'>App</a> | <a class='go2' href='http://github.com/at89/nyancat_the_game'>Github</a>")
});

// $("#cr2016")
// .on("mouseover", function(e){
//   $("#contentBlog").first().html("My mix for Camp Rise 2016 .<br>To be released<br>Not yet recorded/played.")
// });

$("#bp2015")
.on("click", function(e){
  $("#contentBlog").first().html("Download (right click save link as) or stream the recorded live mix from the Barn Party 2015. This mix had about 600+ plays on Soundcloud before it was taken down :(<br><br> <a class='go' href='http://mp3.anhtice.com/Others/BP2015.mp3'>BP 2015</a>")
});

$("#chill")
.on("click", function(e){
  $("#contentBlog").first().html("Link to my Chill mix series. Downtempo, relaxing, soothing, intimate, enticing music.<br><br><a class='go' href='http://anhtice.net23.net'>Listen</a> | <a class='go' href='http://mp3.anhtice.com/Chill/'>Download</a>")
});

$("#lit")
.on("click", function(e){
  $("#contentBlog").first().html("Soundcloud link. Fast. Upbeat. Belligerent music.<br><br><a class='go' href='https://soundcloud.com/anhtice/tracks'>SC Link</a>")
});


$("#bio")
.on("mouseout", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man")
})


$("#github, #linkedin, #email")
.on("mouseleave", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man")
})
