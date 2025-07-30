const express = require('express');
const Test = require('../models/Test');
const router = express.Router();

router.post('/save-test', async (req, res) => {
    const { userEmail, ...testFields } = req.body;

    if (!userEmail) {
        return res.status(400).json({ message: 'User email is required' });
    }

    try {
        // Check if user already created a test
        const existingTest = await Test.findOne({ userEmail });

        if (existingTest) {
            return res.status(201).json({ message: 'Free plan allows only one test. Upgrade to create more.' });
        }

        // Save the new test
        const newTest = new Test({ userEmail, ...testFields });
        await newTest.save();

        res.status(201).json({ message: 'Test created successfully', test: newTest });

    } catch (error) {
        console.error('Error saving test:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/get-tests/:email', async (req, res) => {
    const { email } = req.params;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const tests = await Test.find({ userEmail: email });

        res.status(200).json(tests);
    } catch (error) {
        console.error('Error fetching tests:', error);
        res.status(500).json({ message: 'Server error while fetching tests' });
    }
});

module.exports = router;
