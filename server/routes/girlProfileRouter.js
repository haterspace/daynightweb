const express = require('express');
const { GirlProfile } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const girls = await GirlProfile.findAll();
    return res.status(200).json(girls);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pickedGirl = await GirlProfile.findOne({
      where: { id },
    });
    return res.status(200).json(pickedGirl);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;
