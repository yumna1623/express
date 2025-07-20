const express = require('express');
const {
    handleBookStoreController,
    handleBookListController,
    handleBookDeleteController,
    handleBookUpdateController
} = require("../controller/book.controller");

const router = express.Router();

router.post("/addBook", handleBookStoreController);       // POST: Add
router.get("/booklists", handleBookListController);       // GET: Fetch
router.post("/deleteBook", handleBookDeleteController);   // POST: Delete
router.put("/updateBook", handleBookUpdateController);    // PUT: Update

module.exports = router;
