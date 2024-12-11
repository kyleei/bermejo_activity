const express = require('express');
const booksRoutes = require("./routes/booksRoutes.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use("/books", booksRoutes); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));