const blogPost = {
  title: "title",
  body: "body",
  author: "author",
  views: 0,
  comments: [
    { author: "author1", body: "author1" },
    { author: "author2", body: "author2" },
  ],
  isLive: true,
};

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
const newPost = new Post("a", "b", "c");
console.log(newPost);
