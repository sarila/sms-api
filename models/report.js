'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define(
    'Report',
    {
      id:            { type: DataTypes.INTEGER,  allowNull:false, autoIncrement:true, primaryKey:true },
      title:         { type: DataTypes.STRING,   allowNull:false },
      description:   { type: DataTypes.TEXT,     allowNull:true },
      files:         { type: DataTypes.JSON,     allowNull:true },
      userId:        { type: DataTypes.INTEGER,  allowNull:false },
      provinceId:    { type: DataTypes.INTEGER,  allowNull:true },
      municipalityId:{ type: DataTypes.INTEGER,  allowNull:true },
      schoolId:      { type: DataTypes.INTEGER,  allowNull:true },
      proposalId:    { type: DataTypes.INTEGER,  allowNull:false },
      tags:          { type: DataTypes.JSON,     allowNull:true },
      metadata:      { type: DataTypes.JSON,     allowNull:true },
      isVerified:    { type: DataTypes.BOOLEAN,  allowNull:false, defaultValue: false },
      status:        { type: DataTypes.STRING,   allowNull:true },
      submittedOn:   { type: DataTypes.DATE,     allowNull:true }
    },
    {
      tableName: 'reports',
      timestamps: true
    }
  );

  Report.associate = models => {
    Report.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete:   'CASCADE',
      onUpdate:   'CASCADE'
    });
    Report.belongsTo(models.Province, {
      foreignKey: 'provinceId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
    Report.belongsTo(models.Municipality, {
      foreignKey: 'municipalityId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
    Report.belongsTo(models.School, {
      foreignKey: 'schoolId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
    Report.belongsTo(models.Proposal, {
      foreignKey: 'proposalId',
      onDelete:   'CASCADE',
      onUpdate:   'CASCADE'
    });
  };

  return Report;
};
