const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User List")
})
router.post('/', (req, res) => {
    res.send("Create User");
})
router.get('/:id', (req, res) => {
    res.send(`Get User with Id ${req.params.id}`);
})
router.put('/:id', (req, res) => {
    res.send(`Update User with Id ${req.params.id}`);
})
router.delete('/:id', (req, res) => {
    res.send(`Delete User with Id ${req.params.id}`);
})


module.exports = router;