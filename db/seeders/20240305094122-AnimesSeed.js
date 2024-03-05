/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Animes',
      [
        {
          external_key: 239,
          title: 'Naruto',
          picture: '/storage/imgAnime/257932.jpg',
        },
        {
          external_key: 2369,
          title: 'Bleach',
          picture: '/storage/imgAnime/226372.jpg',
        },
        {
          external_key: 132,
          title: 'Hunter x Hunter',
          picture: '/storage/imgAnime/177380.jpg',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animes', null, {});
  },
};
