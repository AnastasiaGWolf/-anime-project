/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Discussions',
      [
        {
          user_id: 1,
          anime_id: 1,
          body: 'Текст какого-то сообщения от пользователя в обсуждениях к аниме 1',
        },
        {
          user_id: 1,
          anime_id: 2,
          body: 'Текст какого-то сообщения от пользователя в обсуждениях к аниме 2',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Discussions', null, {});
  },
};
