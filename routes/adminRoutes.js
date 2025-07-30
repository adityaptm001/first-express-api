const express = require('express');
const User = require('../models/User');
const app = express()
const router = express.Router();


router.get('/users', async (req, res) => {
    try {
        const userEmail = req.headers['user-email'];
        console.log(userEmail)

        // Check if userEmail is the admin's email
        if (userEmail !== 'jhanna12222@gmail.com') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.delete('/delete-user/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const USER = await User.findById(userId);

        if (USER.role == "admin") {
            console.log("Admin can't be deleted")
        }
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
