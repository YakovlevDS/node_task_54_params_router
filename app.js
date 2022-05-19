// const express = require("express");
// const app = express();
 
// app.get("/products/:productId", function (req, res) {
//   response.send("productId: " + req.params["productId"])
// });

// app.get("/categories/:categoryId/products/:productId", function (request, response) {
//     let catId = request.params["categoryId"];
//     let prodId = request.params["productId"];
//     response.send(`Категория: ${catId}  Товар: ${prodId}`);
// });

// app.get("/book/:pageName.:pageExt", function (request, response) {
//     let pageName = request.params["pageName"];
//     let pageExt = request.params["pageExt"];
//     response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
// });
 
// app.listen(3000);

// http://localhost:3000/products/34   productId: 34
// http://localhost:3000/categories/smart/products/345   Категория: smart Товар: 345
// http://localhost:3000/book/iphone.php   Запрошенный файл: iphone.php



// const express = require("express");
// const app = express();
 
// app.use("/about", function (request, response) {
//   response.send("О сайте");
// });
 
// app.use("/products/create",function (request, response) {
//   response.send("Добавление товара");
// });
// app.use("/products/:id",function (request, response) {
//   response.send(`Товар ${request.params.id}`);
// });
// app.use("/products/",function (request, response) {
//   response.send("Список товаров");
// });
 
// app.use("/", function (request, response) {
//   response.send("Главная страница");
// });
// app.listen(3000);

//! пример с использованием объекта Router: 
const express = require("express");
const app = express();
 
// определяем Router
const productRouter = express.Router();
 
// определяем маршруты и их обработчики внутри роутера
productRouter.use("/create", function(request, response){
  response.send("Добавление товара");
});
productRouter.use("/:id", function(request, response){
  response.send(`Товар ${request.params.id}`);
});
productRouter.use("/", function(request, response){
  response.send("Список товаров");
});
// сопотавляем роутер с конечной точкой "/products"
app.use("/products", productRouter);
 
app.use("/about", function (request, response) {
  response.send("О сайте");
});
 
app.use("/", function (request, response) {
  response.send("Главная страница");
});
app.listen(3000);