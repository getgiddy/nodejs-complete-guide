const path = require("path");

const { Router } = require("express");

const rootDir = require("../utils/path");

const router = Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;