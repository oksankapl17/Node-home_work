const Sequelize = require('sequelize');

module.exports = (() => {
  let instance;

  function initConnection() {
    const client = new Sequelize('lun', 'root', 'qweasd82',
      {
        host: 'localhost',
        dialect: 'mysql',
      });
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = initConnection();
      }
      return instance;
    },
  };
})();
