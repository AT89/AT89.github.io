// $("#name")
// .on("mouseover", function(e){
//   $("#contentBlog").first().html("I am a modern renaissance man who believes in being better than who I was yesterday. I enjoy learning, being creative and utilizing my resources to create innovative solutions. ");
//
//
// });

$("#skills")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Click Skills to see <br>Full Stack Web Developer skills");

});

$("#skills")
.on("click", function(e){
  $("#contentBlog").first().html("Front-end: <br> JQuery, AngularJS, ReactJS, AJAX <br><br> Back-end:<br> SQL, Rails, Express, Mongoose/MongoDB, PostGres, ActiveRecord, Firebase <br><br> Languages:<br> Javascript, Ruby, Python, ELM, PHP <br><br>Misc: <br>CLI, Git, Bootstrap, SASS, TDD (Rspec, Jasmine), Heroku, Wordpress, ES6");

});

$("#github")
.on("mouseover", function(e){
  $("#contentBlog").first().html("My Github profile: all my projects, learning exercises, repositories from General Assembly and my favorite project forks")

});

$("#linkedin")
.on("mouseover", function(e){
  $("#contentBlog").first().html("Feel free to connect with me on Linkedin!");

});



$("#github, #linkedin, #email")
.on("mouseleave", function(e){
  $("#contentBlog").first().html("Where must we go, we who wander this wasteland, in search of our better selves?<br><br>-The First History Man")
});
