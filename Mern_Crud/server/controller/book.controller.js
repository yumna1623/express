const { Book } = require("../model/book.model");

// Add Book
const handleBookStoreController = async (req, res) => {
    try {
        const body = req.body;

        // Validate
        if (!body.BookName || !body.BookTitle || !body.Author || !body.SellingPrice || !body.PublishDate) {
            return res.status(400).json({ Message: "All fields are required.", Success: false });
        }

        const bookAdd = await Book.create(body);  // ✅ Use create() instead of insertOne()
        return res.status(201).json({ Message: "Data created successfully", Success: true, Id: bookAdd?._id });
    } catch (error) {
        return res.status(500).json({ Message: error.message, Success: false });
    }
};

// List Books
const handleBookListController = async (req, res) => {
    try {
        const bookList = await Book.find({});
        return res.status(200).json({
            Message: 'All books fetched successfully',
            Success: true,
            totalCount: bookList.length,
            BookList: bookList,
        });
    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false });
    }
};

// Delete Book
const handleBookDeleteController = async (req, res) => {
    try {
        const deleted = await Book.deleteOne({ _id: req.body.id });
        if (deleted.acknowledged) {
            return res.json({ Message: 'Book deleted successfully', Success: true });
        }
    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false });
    }
};

// Update Book
const handleBookUpdateController = async (req, res) => {
    try {
        const body = req.body;
        const updating = await Book.updateOne({ _id: body?.Id }, { $set: body });

        if (updating.acknowledged && updating.matchedCount > 0) {
            return res.json({ Message: 'Book updated successfully', Success: true });
        } else {
            return res.status(404).json({ Message: 'Book not found or no changes made', Success: false });
        }
    } catch (error) {
        return res.status(400).json({ Message: error.message, Success: false });
    }
};

module.exports = {
    handleBookStoreController,
    handleBookListController,
    handleBookDeleteController,
    handleBookUpdateController
};
