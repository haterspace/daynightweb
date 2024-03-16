/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      girlProfile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'GirlProfiles',
          key: 'id',
        },
      },
      classicSex: {
        type: Sequelize.BOOLEAN,
      },
      analSex: {
        type: Sequelize.BOOLEAN,
      },
      groupSex: {
        type: Sequelize.BOOLEAN,
      },
      forMarried: {
        type: Sequelize.BOOLEAN,
      },
      blowjob: {
        type: Sequelize.BOOLEAN,
      },
      blowjobNoCondom: {
        type: Sequelize.BOOLEAN,
      },
      deepBlowjob: {
        type: Sequelize.BOOLEAN,
      },
      cuni: {
        type: Sequelize.BOOLEAN,
      },
      faceSitting: {
        type: Sequelize.BOOLEAN,
      },
      anilingusForMe: {
        type: Sequelize.BOOLEAN,
      },
      anilingusForYou: {
        type: Sequelize.BOOLEAN,
      },
      pose69: {
        type: Sequelize.BOOLEAN,
      },
      kiss: {
        type: Sequelize.BOOLEAN,
      },
      toys: {
        type: Sequelize.BOOLEAN,
      },
      cumOnBoobs: {
        type: Sequelize.BOOLEAN,
      },
      cumOnFace: {
        type: Sequelize.BOOLEAN,
      },
      cumToMouth: {
        type: Sequelize.BOOLEAN,
      },
      rolePlays: {
        type: Sequelize.BOOLEAN,
      },
      strip: {
        type: Sequelize.BOOLEAN,
      },
      massage: {
        type: Sequelize.BOOLEAN,
      },
      escort: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Preferences');
  },
};
