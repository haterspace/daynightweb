/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          password: '1',
          userType: 'admin',
        },
        {
          username: 'polina',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'liza',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'alexandra',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'vika',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'adelya',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'katya',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'nastya',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'miro',
          password: '123',
          userType: 'girl',
        },
        {
          username: 'dron',
          password: '123',
          userType: 'man',
        },
        {
          username: 'ivan_moto',
          password: '123',
          userType: 'man',
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
