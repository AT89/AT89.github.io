$("#firstsite")
.on("mouseover", function(e){
  $("#contentBlog").first().html("First website I made, I leave it on here to contrast how far I've come. Of course goofiness was intended.")
});

$("#war")
.on("mouseover", function(e){
  $("#contentBlog").first().html("First project at General Assembly, it's the War card game in Javascript but with a surprise :) <br>Full Disclosure: lower audio volume")
});

$("#github")
.on("mouseover", function(e){
  $("#contentBlog").first().html("My Github profile: all my projects and learning exercises repositories from General Assembly and my favorite project forks")
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




$("#bio")
.on("mouseover", function(e){
  $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions.")
});

$("#bio")
.on("mouseout", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br>-The First History Man")
})
