const express = require('express');

const produtoRouter = require('./produtosRouter');

const app = express();
app.use(express.json());

app.use('/produtos', produtoRouter);

app.listen(3000, () => {
 console.log("Server started");
})
