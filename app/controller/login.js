const express = require("express");
const User = require("../models/loginModel");
const { hasData } = require("node_custom_utils");

// User Registration
// router.post('/register',
module.exports = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      if(!hasData(username)){
        console.log("dfgh");
      }
      if(hasData(username)){
        console.log("have");

       
      }
      const user = new User({
        username: username,
        email: email,
        password: password,
      });
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

// User Login
// router.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).send({ error: 'User not found' });
//         }

//         const isMatch = await user.comparePassword(password);

//         if (!isMatch) {
//             return res.status(401).send({ error: 'Invalid credentials' });
//         }

//         // Generate JWT token
//         const token = await user.generateAuthToken();
//         res.send({ user, token });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });
