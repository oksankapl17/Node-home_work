module.exports = (sequelize, DataTypes) => {
  const HousePhoto = sequelize.define('HousePhoto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    house_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    photo: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'house_to_photo',
    timestamps: true,
  });
  const House = sequelize.import('./House.js');
  HousePhoto.belongsTo(House, { foreignKey: 'house_id' });

  return HousePhoto;
};
