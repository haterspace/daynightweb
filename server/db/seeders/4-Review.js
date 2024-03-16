/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          text: 'Та еще сучка, топ!',
          topPreference: 'Минет с презервативом',
          user_id: '10',
          girlProfile_id: 1,
        },
        {
          text: 'Минет на высшем уровне и очень веселая девушка :)',
          topPreference: 'Минет с презервативом',
          user_id: '11',
          girlProfile_id: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
