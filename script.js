$("#bio")
.on("mouseover", function(e){
  $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions. ");
  $("#picboxIMG").attr("src", 'logo.png');

});

$("#skills")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Click Skills to see <br>Full Stack Web Developer skills");
  $("#picboxIMG").attr("src", '');
});

$("#skills")
.on("click", function(e){
  $("#contentBlog").first().html("Front-end: <br> JQuery, AngularJS, ReactJS, AJAX <br><br> Back-end:<br> SQL, Rails, Express, Mongoose/MongoDB, PostGres, ActiveRecord, Firebase <br><br> Languages:<br> Javascript, Ruby, Python, ELM, PHP <br><br>Misc: <br>CLI, Git, Bootstrap, SASS, TDD (Rspec, Jasmine), Heroku, Wordpress, ES6");
  $("#picboxIMG").attr("src", '');
});

$("#github")
.on("mouseover", function(e){
  $("#contentBlog").first().html("My Github profile: all my projects, learning exercises, repositories from General Assembly and my favorite project forks")
  $("#picboxIMG").attr("src", '');
});

$("#linkedin")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Feel free to connect with me!");
  $("#picboxIMG").attr("src", '');
});

$("#email")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Feel free to reach out to me!");
  $("#picboxIMG").attr("src", '');
});

$("#war")
.on("click", function(e){
  $("#contentBlog").first().html("First project at General Assembly, it's the War card game in Javascript but with a surprise :)<br> <br>Full Disclosure: lower audio volume <br><br><a class='go' href='http://at89.github.io/WARCARDGAME'>App</a> | <a class='go2' href='http://github.com/at89/WARCARDGAME'>Github</a>");
  $("#picboxIMG").attr("src", 'icons/pokemon.png');
});

$("#townboard")
.on("click", function(e){
  $("#contentBlog").first().html("My first deployed Ruby on Rails CRUD App, with Heroku hosting. I wanted to create a local messageboard for users to share information. Since the boards are seeded (and double nested), these boards can be used for anything. <br><br>Still a work in progress.<br><br><a class='go' href='https://anh-townboard.herokuapp.com/boards/'>App</a> | <a class='go2' href='http://github.com/at89/townboard'>Github</a>");
  $("#picboxIMG").attr("src", '');
});

$("#instagram")
.on("click", function(e){
  $("#contentBlog").first().html("Instagram Gallery feed<br><br> Using slick.js (the best carousel library) and Instagram Sandbox API <br><br><a class='go' href='https://at89.github.io/instagramfeed'>App</a> | <a class='go' href='http://kenwheeler.github.io/slick/'>Slick</a> | <a class='go2' href='https://github.com/AT89/instagramfeed'>Github</a> ");
  $("#picboxIMG").attr("src", 'icons/instagramOG.ico');
});

$("#oneaux")
.on("click", function(e){
  $("#contentBlog").first().html("Single-Page (Angular JS) App that utilizes Spotify API to add songs to playlist (Rails API) and allows users to upvote and downvote songs to queue the Spotify playlist <br><br><a class='go' href='http://oneaux.net/'>App</a> | <a class='go2' href='http://github.com/at89/oneaux'>Github</a>");
  $("#picboxIMG").attr("src", 'icons/oneaux.jpg');
});
$("#motivation")
.on("click", function(e){
  $("#contentBlog").first().html("Read exciting, thought-provoking quips  on beautiful backgrounds around the world!<br>Browse your favorite messageboard in a new way<br><br> Using AJAX calls on subreddits <br><br><br><a class='go' href='https://at89.github.io/automotivationals'>App</a> | <a class='go2' href='http://github.com/at89/automotivationals'>Github</a>");
  $("#picboxIMG").attr("src", 'icons/reddit.png');
});

$("#nyan-cat")
.on("click", function(e){
  $("#contentBlog").first().html("Cute shoot em up Phaser game <br><br> Working on getting a Leaderboard running<br><br> There is audio <br><br><br><a class='go' href='https://at89.github.io/nyancat'>App</a> | <a class='go2' href='http://github.com/at89/nyancat'>Github</a>");
  $("#picboxIMG").attr("src", 'icons/nyancat2.gif');
});

// $("#cr2016")
// .on("mouseover", function(e){
//   $("#contentBlog").first().html("My mix for Camp Rise 2016 .<br>To be released<br>Not yet recorded/played.")
// });

$("#bp2015")
.on("click", function(e){
  $("#contentBlog").first().html("Download (right click save link as) or stream the recorded live mix from the Barn Party 2015.<br> This mix had about 600+ plays on Soundcloud before it was taken down :(<br><br> <a class='go' href='http://mp3.anhtice.com/Others/BP2015.mp3'>BP 2015</a>");
  $("#picboxIMG").attr("src", '');
});

$("#chill")
.on("click", function(e){
  $("#contentBlog").first().html("Link to my Chill mix series. Downtempo, relaxing, soothing, intimate, enticing music.<br><br>  <a class='go' href='http://mp3.anhtice.com/Chill/'>Download</a>");
  $("#picboxIMG").attr("src", '');
});

// Listen link may be NSFW<br><br><a class='go' href='http://anhtice.com/chill-mixes/'>Listen</a> |

$("#lit")
.on("click", function(e){
  $("#contentBlog").first().html("Soundcloud link. Fast. Upbeat. Belligerent music.<br><br><a class='go' href='https://soundcloud.com/anhtice/tracks'>SC Link</a>");
  $("#picboxIMG").attr("src", '');
});


$("#bio")
.on("mouseout", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man");
    $("#picboxIMG").attr("src", '');
})


$("#github, #linkedin, #email")
.on("mouseleave", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br><br>-The First History Man")
})
