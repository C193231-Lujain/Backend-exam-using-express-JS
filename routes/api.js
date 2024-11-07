import express from "express";
const router = express.Router();
import * as blogcontrollers from "../app/controllers/blogcontrollers.js";


// Create Route
router.post("/create-blog",blogcontrollers.createBlog);

// Read Route
router.get("/read-blog",blogcontrollers.readBlog);

// Update Route
router.put("/update-blog",blogcontrollers.updateBlog);

// Delete Route
router.delete("/delete-blog",blogcontrollers.deleteBlog);


export default router;