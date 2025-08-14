/**
 * GET /api/comments
 * Retrieves all comments from the database.
 * @route GET /api/comments
 * @returns {Array<Object>} 200 - An array of comment objects
 * @returns {Object} 500 - Error message if fetching comments fails
 */

/**
 * DELETE /api/comments/:id
 * Deletes a comment by its ID.
 * @route DELETE /api/comments/:id
 * @param {string} id.path.required - The ID of the comment to delete
 * @returns {Object} 200 - Success message if comment is deleted
 * @returns {Object} 404 - Error message if comment is not found
 * @returns {Object} 500 - Error message if deleting comment fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey Github Copilot, create a GET endpoint at /api/comments that retrieves all comments from the database and returns them as a JSON response.router.get("/api/comments", async (req, res) => {
//   try {
//     const comments = await Comment.find();
//     res.json(comments);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch comments" });
//   }
// });

router.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// Add another endpoint for deleting a comment
router.delete("/api/comments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});
