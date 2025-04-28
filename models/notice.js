'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notice = sequelize.define(
    'Notice',    
    {
      id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
      title:       { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT,   allowNull: true },
      file:        { type: DataTypes.JSON,   allowNull: true },
      userId:      { type: DataTypes.INTEGER,allowNull: false },
      provinceId:  { type: DataTypes.INTEGER,allowNull: true },
      municipalityId:{ type: DataTypes.INTEGER,allowNull: true },
      tags:        { type: DataTypes.JSON,   allowNull: true },
      deadline:    { type: DataTypes.DATE,   allowNull: true },
      metadata:    { type: DataTypes.JSON,   allowNull: true },
      status:      { type: DataTypes.STRING, allowNull: true }
    },
    {
      tableName: 'notices',
      timestamps: true
    }
  );

  Notice.associate = models => {
    Notice.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete:   'CASCADE',
      onUpdate:   'CASCADE'
    });
    Notice.belongsTo(models.Province, {
      foreignKey: 'provinceId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
    Notice.belongsTo(models.Municipality, {
      foreignKey: 'municipalityId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
  };

  return Notice;
};
