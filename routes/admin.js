const path = require("path");

const { Router } = require("express");

const rootDir = require("../utils/path");

const router = Router();

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});


// /admin/add-product => POST
router.post("/add-product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;