const express = require('express');
const { Preference, GirlProfile } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const girlPreferences = await Preference.findAll({
    include: GirlProfile,
    where: { girlProfile_id: id },
  });
  console.log(girlPreferences);
  return res.status(200).json(girlPreferences);
});

module.exports = router;
