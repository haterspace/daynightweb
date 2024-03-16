const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, GirlProfile }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(GirlProfile, { foreignKey: 'girlProfile_id' });
    }
  }
  Review.init(
    {
      text: DataTypes.TEXT,
      topPreference: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      girlProfile_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    },
  );
  return Review;
};
