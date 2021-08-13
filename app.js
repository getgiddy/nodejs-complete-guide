const path = require("path");

const express = require("express");
const { urlencoded } = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// use body parser middleware
app.use(urlencoded({ extended: true }));

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// register routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8000);