const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, password, userType } = req.body;
  if (username && password && userType) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { username },
        defaults: {
          password,
          userType,
        },
      });
      if (!created) {
        return res.status(401).json({ message: 'User already exists' });
      }
      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      return res.status(500).json({ message: 'Server error' });
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    try {
      const user = await User.findOne({
        where: { username },
      });

      if (!user) {
        return res.status(401).json({ message: 'User does not exist' });
      }
      if (password !== user.password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      return res.status(500).json({ message: 'Server error' });
    }
  }
  return res.status(500).json({ message: 'No username or password' });
});

router.get('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
