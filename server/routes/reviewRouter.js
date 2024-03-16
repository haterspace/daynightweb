const express = require('express');
const { Review, User } = require('../db/models');

const router = express.Router();

router
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const getReviews = await Review.findAll({
      include: User,
      where: {
        girlProfile_id: id,
      },
    });
    return res.status(200).json(getReviews);
  })
  .post(async (req, res) => {
    const newReview = await Review.create({
      text: req.body.text,
      topPreference: req.body.topPreference,
      user_id: req.session.user.id,
      girlProfile_id: req.params.id,
    });
    const sentReview = await Review.findOne({
      include: User,
      where: { id: newReview.id },
    });
    return res.json(sentReview);
  });

module.exports = router;
