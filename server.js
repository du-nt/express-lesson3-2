// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

var todos = [
  { id: 1, title: "Đi chợ" },
  { id: 2, title: "Nấu cơm" },
  { id: 3, title: "Rửa bát" },
  { id: 4, title: "Học code tại CodersX" }
];
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

app.get("/todos", (req, res) => {
  var q = req.query.q;
  if (q) {
    var matchedTodos = todos.filter(
      todo => todo.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
    );
    res.render("todos", { todos: matchedTodos });
  } else {
    res.render("todos", { todos });
  }
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
