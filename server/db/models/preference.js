const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ GirlProfile }) {
      this.belongsTo(GirlProfile, { foreignKey: 'girlProfile_id' });
    }
  }
  Preference.init(
    {
      classicSex: DataTypes.BOOLEAN,
      analSex: DataTypes.BOOLEAN,
      groupSex: DataTypes.BOOLEAN,
      forMarried: DataTypes.BOOLEAN,
      blowjob: DataTypes.BOOLEAN,
      blowjobNoCondom: DataTypes.BOOLEAN,
      deepBlowjob: DataTypes.BOOLEAN,
      cuni: DataTypes.BOOLEAN,
      faceSitting: DataTypes.BOOLEAN,
      anilingusForMe: DataTypes.BOOLEAN,
      anilingusForYou: DataTypes.BOOLEAN,
      pose69: DataTypes.BOOLEAN,
      kiss: DataTypes.BOOLEAN,
      toys: DataTypes.BOOLEAN,
      cumOnBoobs: DataTypes.BOOLEAN,
      cumOnFace: DataTypes.BOOLEAN,
      cumToMouth: DataTypes.BOOLEAN,
      rolePlays: DataTypes.BOOLEAN,
      strip: DataTypes.BOOLEAN,
      massage: DataTypes.BOOLEAN,
      escort: DataTypes.BOOLEAN,
      girlProfile_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Preference',
    },
  );
  return Preference;
};
