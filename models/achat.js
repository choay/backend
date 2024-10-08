const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Achat', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    paymentIntentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cursusId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Peut être null si achat d'une leçon individuelle
    },
    lessonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lessonIds: {
      type: DataTypes.TEXT, // Remplacer JSON par TEXT pour compatibilité MySQL
      allowNull: true,
      get() {
        const value = this.getDataValue('lessonIds');
        return value ? JSON.parse(value) : []; // Convertir la chaîne en tableau
      },
      set(value) {
        this.setDataValue('lessonIds', JSON.stringify(value)); // Convertir le tableau en JSON
      },
    },
  });
};

