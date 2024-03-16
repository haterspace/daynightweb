const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GirlProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Preference, Review }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasOne(Preference, { foreignKey: 'girlProfile_id' });
      this.hasMany(Review, { foreignKey: 'girlProfile_id' });
    }
  }
  GirlProfile.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      bustSize: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      hairColor: DataTypes.STRING,
      bodyComposition: DataTypes.STRING,
      privateHaircut: DataTypes.STRING,
      nationality: DataTypes.STRING,
      looks: DataTypes.STRING,
      city: DataTypes.STRING,
      cityArea: DataTypes.STRING,
      underground: DataTypes.STRING,
      price: DataTypes.INTEGER,
      desc: DataTypes.TEXT,
      mainPhoto: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GirlProfile',
    },
  );
  return GirlProfile;
};
