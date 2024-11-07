
// Create

export const createBlog =  async (req, res) => {
    return res.status(201).json({message:'Blog created successfully'});
}

// Read
export const readBlog =  async (req, res) => {
    return res.status(200).json({message:'Blog read successfully'});
}


// Update
export const updateBlog =  async (req, res) => {
    return res.status(200).json({message:'Blog update successfully'});
}


// Delete
export const deleteBlog =  async (req, res) => {
    return res.status(200).json({message:'Blog delete successfully'});
}
