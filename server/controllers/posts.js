const express = require('express');


const Router = express.Router();

const getPosts = async (req, res) => { 
    try {
        
                
        res.send('@hii');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = Router;
module.exports = getPosts;